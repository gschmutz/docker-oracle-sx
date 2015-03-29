"use strict";
define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtComboBox$$ = function $$DvtComboBox$$$($context$$617$$, $id$$284$$, $styleMap$$56$$) {
  this.Init($context$$617$$, $id$$284$$, $styleMap$$56$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBox$$, D.$DvtContainer$$, "DvtComboBox");
D.$DvtComboBox$$.prototype.Init = function $$DvtComboBox$$$$Init$($context$$618$$, $id$$285$$, $styleMap$$57$$) {
  D.$DvtComboBox$$.$superclass$.Init.call(this, $context$$618$$, D.$JSCompiler_alias_NULL$$, $id$$285$$);
  this.$_styleMap$ = $styleMap$$57$$;
  this.$_itemButtonStates$ = [];
  this.$_items$ = [];
  this.$_tooltips$ = [];
  this.$_selectedIndex$ = 0;
  this.$_bRemoveDropdown$ = this.$_bStaticButtonStates$ = D.$JSCompiler_alias_FALSE$$;
  this.$_maxItemDim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_dim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_tooltipManager$ = $context$$618$$.$getTooltipManager$();
  this.$_isTouchDevice$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $id$$285$$ + "_cl");
  this.$addChild$(this.$_button$);
  this.$_contentArea$ = new D.$DvtContainer$$($context$$618$$);
  this.$_contentArea$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_contentArea$);
  this.$_hideDropdownTimer$ = new D.$DvtTimer$$($context$$618$$, 100, this.$HandleHideDropdownTimer$, this, 1);
  this.$_outOfFocusCheckTimer$ = new D.$DvtTimer$$($context$$618$$, 100, this.$HandleOutOfFocusCheckTimer$, this, 1);
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtComboBox$$.prototype.$setSelectedIndex$ = function $$DvtComboBox$$$$$setSelectedIndex$$($comboBoxEvent$$inline_8055_selectedIndex$$5$$) {
  this.$_selectedIndex$ = $comboBoxEvent$$inline_8055_selectedIndex$$5$$;
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this);
  $comboBoxEvent$$inline_8055_selectedIndex$$5$$ = new D.$DvtComboBoxEvent$$("cbItemChange", $comboBoxEvent$$inline_8055_selectedIndex$$5$$, this.$_event$);
  this.$_event$ = D.$JSCompiler_alias_NULL$$;
  this.$FireListener$($comboBoxEvent$$inline_8055_selectedIndex$$5$$)
};
D.$JSCompiler_StaticMethods_createButton$$ = function $$JSCompiler_StaticMethods_createButton$$$($JSCompiler_StaticMethods_createButton$self$$, $id$$286$$) {
  var $JSCompiler_temp_const$$123_button$$79$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $context$$inline_8059_dim$$inline_8066_s$$inline_8067$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $dim$$inline_8060_s$$inline_8061$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $dim$$inline_8060_s$$inline_8061$$ = new D.$DvtRect$$($context$$inline_8059_dim$$inline_8066_s$$inline_8067$$, 0, 0, $dim$$inline_8060_s$$inline_8061$$.$w$, $dim$$inline_8060_s$$inline_8061$$.$h$, 
  $id$$286$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($dim$$inline_8060_s$$inline_8061$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dim$$inline_8060_s$$inline_8061$$);
  $dim$$inline_8060_s$$inline_8061$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_8059_dim$$inline_8066_s$$inline_8067$$, $dim$$inline_8060_s$$inline_8061$$.getWidth(), $dim$$inline_8060_s$$inline_8061$$.getHeight()));
  var $context$$inline_8065_context$$inline_8071$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $context$$inline_8059_dim$$inline_8066_s$$inline_8067$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $context$$inline_8059_dim$$inline_8066_s$$inline_8067$$ = new D.$DvtRect$$($context$$inline_8065_context$$inline_8071$$, 0, 0, $context$$inline_8059_dim$$inline_8066_s$$inline_8067$$.$w$, $context$$inline_8059_dim$$inline_8066_s$$inline_8067$$.$h$, $id$$286$$ + "_up");
  $context$$inline_8059_dim$$inline_8066_s$$inline_8067$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$inline_8059_dim$$inline_8066_s$$inline_8067$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$, D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$]));
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($context$$inline_8059_dim$$inline_8066_s$$inline_8067$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $context$$inline_8059_dim$$inline_8066_s$$inline_8067$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_8065_context$$inline_8071$$, $context$$inline_8059_dim$$inline_8066_s$$inline_8067$$.getWidth(), $context$$inline_8059_dim$$inline_8066_s$$inline_8067$$.getHeight()));
  var $context$$inline_8065_context$$inline_8071$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $dim$$inline_8072_s$$inline_8073$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $dim$$inline_8072_s$$inline_8073$$ = new D.$DvtRect$$($context$$inline_8065_context$$inline_8071$$, 0, 0, $dim$$inline_8072_s$$inline_8073$$.$w$, $dim$$inline_8072_s$$inline_8073$$.$h$, $id$$286$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($dim$$inline_8072_s$$inline_8073$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $dim$$inline_8072_s$$inline_8073$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $dim$$inline_8072_s$$inline_8073$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$, D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$]));
  $dim$$inline_8072_s$$inline_8073$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_8065_context$$inline_8071$$, $dim$$inline_8072_s$$inline_8073$$.getWidth(), $dim$$inline_8072_s$$inline_8073$$.getHeight()));
  $JSCompiler_temp_const$$123_button$$79$$ = new D.$DvtButton$$($JSCompiler_temp_const$$123_button$$79$$, $dim$$inline_8060_s$$inline_8061$$, $context$$inline_8059_dim$$inline_8066_s$$inline_8067$$, $dim$$inline_8072_s$$inline_8073$$, D.$JSCompiler_alias_NULL$$, $id$$286$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_temp_const$$123_button$$79$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$123_button$$79$$.setCursor("pointer");
  $JSCompiler_StaticMethods_createButton$self$$.$_isTouchDevice$ || $JSCompiler_temp_const$$123_button$$79$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleButtonDown$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$123_button$$79$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  return $JSCompiler_temp_const$$123_button$$79$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtComboBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($obj$$360$$, $buttonStates_itdim_tooltip$$52$$, $enaState$$1$$, $ovrState$$4$$, $dwnState$$4$$) {
  $obj$$360$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_items$.push($obj$$360$$);
  this.$_tooltips$.push($buttonStates_itdim_tooltip$$52$$);
  $buttonStates_itdim_tooltip$$52$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, $enaState$$1$$ ? $enaState$$1$$ : $obj$$360$$);
  var $maxItemDim$$ = this.$_maxItemDim$, $dim$$80$$ = this.$getDimensions$();
  $buttonStates_itdim_tooltip$$52$$.$w$ > $maxItemDim$$.$w$ && ($maxItemDim$$.$w$ = $buttonStates_itdim_tooltip$$52$$.$w$, $dim$$80$$.$w$ = $buttonStates_itdim_tooltip$$52$$.$w$ + 16);
  $buttonStates_itdim_tooltip$$52$$.$h$ > $maxItemDim$$.$h$ && ($maxItemDim$$.$h$ = $buttonStates_itdim_tooltip$$52$$.$h$, $dim$$80$$.$h$ = $buttonStates_itdim_tooltip$$52$$.$h$);
  this.$_maxItemDim$ = $maxItemDim$$;
  $buttonStates_itdim_tooltip$$52$$ = D.$JSCompiler_alias_NULL$$;
  $enaState$$1$$ && ($ovrState$$4$$ && $dwnState$$4$$) && ($buttonStates_itdim_tooltip$$52$$ = [], $buttonStates_itdim_tooltip$$52$$[0] = $enaState$$1$$, $buttonStates_itdim_tooltip$$52$$[1] = $ovrState$$4$$, $buttonStates_itdim_tooltip$$52$$[2] = $dwnState$$4$$);
  this.$_itemButtonStates$.push($buttonStates_itdim_tooltip$$52$$);
  this.$_bStaticButtonStates$ || (this.removeChild(this.$_button$), this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $obj$$360$$.getId()), this.$addChildAt$(this.$_button$, 0), (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this))
};
D.$JSCompiler_prototypeAlias$$.getItem = function $$JSCompiler_prototypeAlias$$$getItem$($i$$832$$) {
  return this.$_items$[$i$$832$$]
};
D.$JSCompiler_prototypeAlias$$.$getSelectedItem$ = function $$JSCompiler_prototypeAlias$$$$getSelectedItem$$() {
  var $selIndex$$2$$ = this.$_selectedIndex$;
  return 0 > $selIndex$$2$$ || $selIndex$$2$$ > this.$_items$.length - 1 ? D.$JSCompiler_alias_NULL$$ : this.$_items$[$selIndex$$2$$]
};
D.$JSCompiler_prototypeAlias$$.$HandleExpandClick$ = function $$JSCompiler_prototypeAlias$$$$HandleExpandClick$$($context$$623_event$$625_stage$$16$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($context$$623_event$$625_stage$$16$$);
  this.$_bRemoveDropdown$ && (this.$_bRemoveDropdown$ = D.$JSCompiler_alias_FALSE$$, this.$_dropdown$ && (this.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_dropdown$.getParent().removeChild(this.$_dropdown$), this.$_dropdown$ = D.$JSCompiler_alias_NULL$$));
  $context$$623_event$$625_stage$$16$$ = this.$_context$;
  for(var $comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$ = this.$_styleMap$ ? this.$_styleMap$.comboBox : D.$JSCompiler_alias_NULL$$, $bgAlpha$$inline_8093_leftPadding$$inline_8079$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$, "paddingLeft", 0), $bottomPadding$$inline_8080$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$, "paddingBottom", 0), $rightPadding$$inline_8081$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$, 
  "paddingRight", 0), $interItemPadding$$inline_8082$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$, "paddingInner", 0), $currY$$inline_8083$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$, "paddingTop", 0), $context$$inline_8084$$ = this.$_context$, $dim$$inline_8085_proxy$$inline_8090$$, $itemSprite$$inline_8086$$, $item$$inline_8087$$, $bgColor$$inline_8092_content$$inline_8088_dim$$81$$ = new D.$DvtContainer$$($context$$inline_8084$$, 
  "__dd"), $i$$inline_8089$$ = 0;$i$$inline_8089$$ < this.$_items$.length;$i$$inline_8089$$++) {
    $item$$inline_8087$$ = this.$_items$[$i$$inline_8089$$], $dim$$inline_8085_proxy$$inline_8090$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_8084$$, $item$$inline_8087$$), $itemSprite$$inline_8086$$ = new D.$DvtContainer$$($context$$inline_8084$$, "__it" + $i$$inline_8089$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($itemSprite$$inline_8086$$, $bgAlpha$$inline_8093_leftPadding$$inline_8079$$, $currY$$inline_8083$$), $itemSprite$$inline_8086$$.$addChild$($item$$inline_8087$$), 
    $item$$inline_8087$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), $item$$inline_8087$$.setCursor("pointer"), $currY$$inline_8083$$ += $dim$$inline_8085_proxy$$inline_8090$$.$h$ + $interItemPadding$$inline_8082$$, this.$_eventManager$ && ($dim$$inline_8085_proxy$$inline_8090$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, this.$HandleDropdownItemClick$, this.$HandleButtonDown$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_tooltips$[$i$$inline_8089$$]), 
    this.$_eventManager$.$associate$($item$$inline_8087$$, $dim$$inline_8085_proxy$$inline_8090$$)), $bgColor$$inline_8092_content$$inline_8088_dim$$81$$.$addChild$($itemSprite$$inline_8086$$)
  }
  $comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$ = D.$DvtButtonLAFUtils$$.$drawDropdownShape$($context$$inline_8084$$, this.$_maxItemDim$.$w$ + $bgAlpha$$inline_8093_leftPadding$$inline_8079$$ + $rightPadding$$inline_8081$$, $currY$$inline_8083$$ + $bottomPadding$$inline_8080$$ - $interItemPadding$$inline_8082$$, $comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$);
  $comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$.$addChild$($bgColor$$inline_8092_content$$inline_8088_dim$$81$$);
  $bgColor$$inline_8092_content$$inline_8088_dim$$81$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  $bgAlpha$$inline_8093_leftPadding$$inline_8079$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  $comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$), (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "borderAlpha", 1));
  $bgColor$$inline_8092_content$$inline_8088_dim$$81$$ && $comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$.$setSolidFill$($bgColor$$inline_8092_content$$inline_8088_dim$$81$$, $bgAlpha$$inline_8093_leftPadding$$inline_8079$$);
  this.$_dropdown$ = $comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$;
  $comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$623_event$$625_stage$$16$$, this.$_dropdown$);
  this.$addChild$(this.$_dropdown$);
  $bgColor$$inline_8092_content$$inline_8088_dim$$81$$ = this.$_button$.$getDimensions$();
  $comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$623_event$$625_stage$$16$$) ? -$comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$.$w$ + 1 * $bgColor$$inline_8092_content$$inline_8088_dim$$81$$.$w$ / 4 : 3 * $bgColor$$inline_8092_content$$inline_8088_dim$$81$$.$w$ / 4;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_dropdown$, $comboBoxStyles$$inline_8078_dd$$inline_8091_dddim_transX$$8$$, 3 * $bgColor$$inline_8092_content$$inline_8088_dim$$81$$.$h$ / 4);
  this.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$_button$, D.$JSCompiler_alias_TRUE$$);
  this.$FireListener$(new D.$DvtComboBoxEvent$$("cbShowDropdown"));
  ($context$$623_event$$625_stage$$16$$ = $context$$623_event$$625_stage$$16$$.$_stage$) && (this.$_isTouchDevice$ ? $context$$623_event$$625_stage$$16$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this) : $context$$623_event$$625_stage$$16$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$HandleHideDropdownTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleHideDropdownTimer$$() {
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$HandleStageMouseFocusChange$ = function $$JSCompiler_prototypeAlias$$$$HandleStageMouseFocusChange$$() {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$;
  this.$_outOfFocusCheckTimer$.reset();
  this.$_outOfFocusCheckTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleOutOfFocusCheckTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleOutOfFocusCheckTimer$$() {
  this.$_dropdownItemClickEvent$ || (this.$_hideDropdownTimer$.reset(), this.$_hideDropdownTimer$.start())
};
D.$JSCompiler_prototypeAlias$$.$HandleButtonDown$ = function $$JSCompiler_prototypeAlias$$$$HandleButtonDown$$() {
  (0,D.$DvtEventManager$consumeEvent$$)()
};
D.$JSCompiler_prototypeAlias$$.$HandleDropdownItemClick$ = function $$JSCompiler_prototypeAlias$$$$HandleDropdownItemClick$$($event$$630$$) {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_TRUE$$;
  this.$_hideDropdownTimer$.stop();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$630$$);
  var $displayObject$$inline_8095_eventTarget$$;
  $displayObject$$inline_8095_eventTarget$$ = $event$$630$$.target;
  for(var $content$$6_n$$inline_8096$$, $id$$inline_8097$$;$displayObject$$inline_8095_eventTarget$$;) {
    if(($id$$inline_8097$$ = $displayObject$$inline_8095_eventTarget$$.getId()) && $displayObject$$inline_8095_eventTarget$$ instanceof D.$DvtContainer$$ && "__it" == $id$$inline_8097$$.substr(0, 4)) {
      $content$$6_n$$inline_8096$$ = $displayObject$$inline_8095_eventTarget$$;
      break
    }
    $displayObject$$inline_8095_eventTarget$$ = $displayObject$$inline_8095_eventTarget$$.getParent()
  }
  $displayObject$$inline_8095_eventTarget$$ = $content$$6_n$$inline_8096$$;
  var $index$$163$$;
  this.$_dropdown$ && $displayObject$$inline_8095_eventTarget$$ && ($content$$6_n$$inline_8096$$ = this.$_dropdown$.$getChildAt$(0)) && ($index$$163$$ = $content$$6_n$$inline_8096$$.$getChildIndex$($displayObject$$inline_8095_eventTarget$$));
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_event$ = $event$$630$$;
  this.$setSelectedIndex$($index$$163$$)
};
D.$JSCompiler_StaticMethods_HideDropdown$$ = function $$JSCompiler_StaticMethods_HideDropdown$$$($JSCompiler_StaticMethods_HideDropdown$self$$) {
  $JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_HideDropdown$self$$.$_button$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_HideDropdown$self$$.$FireListener$(new D.$DvtComboBoxEvent$$("cbHideDropdown")), $JSCompiler_StaticMethods_HideDropdown$self$$.$_bRemoveDropdown$ = D.$JSCompiler_alias_TRUE$$);
  var $stage$$17$$ = $JSCompiler_StaticMethods_HideDropdown$self$$.$_context$.$_stage$;
  $stage$$17$$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_isTouchDevice$ ? $stage$$17$$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$) : $stage$$17$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$));
  $JSCompiler_StaticMethods_HideDropdown$self$$.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
};
D.$DvtComboBox$$.prototype.$getDimensions$ = (0,D.$JSCompiler_get$$)("$_dim$");
D.$DvtComboBox$$.prototype.$getItems$ = (0,D.$JSCompiler_get$$)("$_items$");
D.$JSCompiler_StaticMethods_UpdateContentArea$$ = function $$JSCompiler_StaticMethods_UpdateContentArea$$$($JSCompiler_StaticMethods_UpdateContentArea$self$$) {
  var $bUseItem$$ = D.$JSCompiler_alias_TRUE$$, $buttonStates$$1_selIndex$$3$$ = $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_selectedIndex$;
  if($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$ && $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$.length > $buttonStates$$1_selIndex$$3$$ && ($buttonStates$$1_selIndex$$3$$ = $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$[$buttonStates$$1_selIndex$$3$$]) && 2 < $buttonStates$$1_selIndex$$3$$.length) {
    (0,D.$JSCompiler_StaticMethods_setUpState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$3$$[0]), (0,D.$JSCompiler_StaticMethods_setOverState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$3$$[1]), (0,D.$JSCompiler_StaticMethods_setDownState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$3$$[2]), $bUseItem$$ = D.$JSCompiler_alias_FALSE$$
  }
  $bUseItem$$ && (0 < $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$getNumChildren$() && $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$removeChildAt$(0), $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$addChild$($JSCompiler_StaticMethods_UpdateContentArea$self$$.$getSelectedItem$()))
};
D.$DvtComboBox$DrawArrow$$ = function $$DvtComboBox$DrawArrow$$$($context$$625_shape$$85$$, $ww$$111$$, $hh$$92$$) {
  var $aPoints$$1$$ = [];
  $aPoints$$1$$.push($ww$$111$$ - 12, $hh$$92$$ / 2 - 2);
  $aPoints$$1$$.push($ww$$111$$ - 4, $hh$$92$$ / 2 - 2);
  $aPoints$$1$$.push($ww$$111$$ - 8, $hh$$92$$ / 2 + 2);
  $aPoints$$1$$.push($ww$$111$$ - 12, $hh$$92$$ / 2 - 2);
  $context$$625_shape$$85$$ = new D.$DvtPolygon$$($context$$625_shape$$85$$, $aPoints$$1$$, D.$JSCompiler_alias_NULL$$);
  $context$$625_shape$$85$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$625_shape$$85$$.$setSolidFill$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$625_shape$$85$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$625_shape$$85$$
};
D.$DvtComboBox$$.prototype.$setEventManager$ = (0,D.$JSCompiler_set$$)("$_eventManager$");
D.$DropdownItemSprite$$ = function $$DropdownItemSprite$$$($context$$626$$, $x$$310$$, $y$$275$$, $w$$73$$, $h$$64$$, $id$$291$$) {
  this.Init($context$$626$$, $x$$310$$, $y$$275$$, $w$$73$$, $h$$64$$, $id$$291$$)
};
D.$DvtObj$$.$createSubclass$(D.$DropdownItemSprite$$, D.$DvtRect$$, "DropdownItemSprite");
D.$DropdownItemSprite$$.prototype.Init = function $$DropdownItemSprite$$$$Init$($context$$627$$) {
  D.$DvtRect$$.$superclass$.Init.call(this, $context$$627$$)
};
D.$DvtComboBoxEvent$$ = function $$DvtComboBoxEvent$$$($subtype$$9$$, $index$$164$$, $evt$$75$$) {
  this.Init($subtype$$9$$, $index$$164$$, $evt$$75$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBoxEvent$$, D.$DvtBaseEvent$$, "DvtComboBoxEvent");
D.$DvtComboBoxEvent$$.prototype.Init = function $$DvtComboBoxEvent$$$$Init$($subtype$$10$$, $index$$165$$, $evt$$76$$) {
  D.$DvtComboBoxEvent$$.$superclass$.Init.call(this, "comboBoxEvent");
  $index$$165$$ === D.$JSCompiler_alias_VOID$$ && ($index$$165$$ = -1);
  this.$subtype$ = $subtype$$10$$;
  this.$_index$ = $index$$165$$;
  this.$_evt$ = $evt$$76$$
};
D.$DvtComboBoxEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtBaseControl$$ = function $$DvtBaseControl$$$($context$$639$$, $panZoomCanvas$$10$$, $resources$$13$$) {
  this.Init($context$$639$$, $panZoomCanvas$$10$$, $resources$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseControl$$, D.$DvtContainer$$, "DvtBaseControl");
D.$DvtBaseControl$$.prototype.Init = function $$DvtBaseControl$$$$Init$($context$$640$$, $panZoomCanvas$$11$$, $resources$$14$$) {
  D.$DvtBaseControl$$.$superclass$.Init.call(this, $context$$640$$);
  this.$_panZoomCanvas$ = $panZoomCanvas$$11$$;
  this.$_context$ = $context$$640$$;
  this.$_tooltipManager$ = $context$$640$$.$getTooltipManager$();
  this.$Bundle$ = $resources$$14$$
};
D.$DvtBaseControl$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$DvtZoomInButton$$ = function $$DvtZoomInButton$$$($context$$651$$, $button$$80$$, $panZoomCanvas$$12$$, $resources$$15$$, $eventManager$$31$$) {
  this.Init($context$$651$$, $button$$80$$, $panZoomCanvas$$12$$, $resources$$15$$, $eventManager$$31$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomInButton$$, D.$DvtBaseControl$$, "DvtZoomInButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomInButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$652_proxy$$13$$, $button$$81$$, $panZoomCanvas$$13$$, $resources$$16$$, $eventManager$$32$$) {
  D.$DvtZoomInButton$$.$superclass$.Init.call(this, $context$$652_proxy$$13$$, $panZoomCanvas$$13$$, $resources$$16$$);
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomInTimer$ = new D.$DvtTimer$$($context$$652_proxy$$13$$, 100, this.$HandleZoomInTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($context$$652_proxy$$13$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomInButton$ = $button$$81$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomInButton$, this.$HandleZoomInClick$, this);
  this.$_eventManager$ = $eventManager$$32$$;
  $context$$652_proxy$$13$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, this.$HandleZoomInMouseDown$, this.$HandleZoomInMouseUp$, this.$HandleZoomInMouseUp$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMIN"));
  this.$_eventManager$.$associate$(this.$_zoomInButton$, $context$$652_proxy$$13$$);
  this.$addChild$(this.$_zoomInButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  if(!this.$_zoomInTimer$.$isRunning$()) {
    var $currZoom$$9_newZoom$$5$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$9_newZoom$$5$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$9_newZoom$$5$$), $animator$$131$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$9_newZoom$$5$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$131$$);
    $animator$$131$$.play()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInMouseDown$$() {
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_zoomInTimer$.stop();
  this.$_zoomStartTimer$.stop();
  this.$_zoomStartTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInMouseUp$$() {
  this.$_bZoomInMouseDown$ && (this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_zoomInTimer$.stop(), this.$_zoomStartTimer$.stop())
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomStartTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomStartTimer$$() {
  this.$_zoomInTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInTimer$$() {
  var $currZoom$$10$$ = this.$_panZoomCanvas$.$getZoom$();
  (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$10$$))
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$22$$) {
  this.$_zoomInButton$.setCursor($enabled$$22$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_zoomInButton$.$setEnabled$($enabled$$22$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomInButton$)
};
D.$DvtZoomOutButton$$ = function $$DvtZoomOutButton$$$($context$$653$$, $button$$82$$, $panZoomCanvas$$14$$, $resources$$17$$, $eventManager$$33$$) {
  this.Init($context$$653$$, $button$$82$$, $panZoomCanvas$$14$$, $resources$$17$$, $eventManager$$33$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomOutButton$$, D.$DvtBaseControl$$, "DvtZoomOutButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomOutButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$654_proxy$$14$$, $button$$83$$, $panZoomCanvas$$15$$, $resources$$18$$, $eventManager$$34$$) {
  D.$DvtZoomOutButton$$.$superclass$.Init.call(this, $context$$654_proxy$$14$$, $panZoomCanvas$$15$$, $resources$$18$$);
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomOutTimer$ = new D.$DvtTimer$$($context$$654_proxy$$14$$, 100, this.$HandleZoomOutTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($context$$654_proxy$$14$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomOutButton$ = $button$$83$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomOutButton$, this.$HandleZoomOutClick$, this);
  this.$_eventManager$ = $eventManager$$34$$;
  $context$$654_proxy$$14$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, this.$HandleZoomOutMouseDown$, this.$HandleZoomOutMouseUp$, this.$HandleZoomOutMouseUp$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMOUT"));
  this.$_eventManager$.$associate$(this.$_zoomOutButton$, $context$$654_proxy$$14$$);
  this.$addChild$(this.$_zoomOutButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  if(!this.$_zoomOutTimer$.$isRunning$()) {
    var $currZoom$$11_newZoom$$7$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$11_newZoom$$7$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$11_newZoom$$7$$), $animator$$132$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$11_newZoom$$7$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$132$$);
    $animator$$132$$.play()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutMouseDown$$() {
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_zoomOutTimer$.stop();
  this.$_zoomStartTimer$.stop();
  this.$_zoomStartTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutMouseUp$$() {
  this.$_bZoomOutMouseDown$ && (this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_zoomOutTimer$.stop(), this.$_zoomStartTimer$.stop())
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomStartTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomStartTimer$$() {
  this.$_zoomOutTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutTimer$$() {
  var $currZoom$$12$$ = this.$_panZoomCanvas$.$getZoom$();
  (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$12$$))
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$23$$) {
  this.$_zoomOutButton$.setCursor($enabled$$23$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_zoomOutButton$.$setEnabled$($enabled$$23$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomOutButton$)
};
D.$DvtZoomToFitButton$$ = function $$DvtZoomToFitButton$$$($context$$656$$, $button$$84$$, $panZoomCanvas$$16$$, $resources$$19$$, $eventManager$$35$$) {
  this.Init($context$$656$$, $button$$84$$, $panZoomCanvas$$16$$, $resources$$19$$, $eventManager$$35$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomToFitButton$$, D.$DvtBaseControl$$, "DvtZoomToFitButton");
D.$DvtZoomToFitButton$$.prototype.Init = function $$DvtZoomToFitButton$$$$Init$($context$$657_proxy$$15$$, $button$$85$$, $panZoomCanvas$$17$$, $resources$$20$$, $eventManager$$36$$) {
  D.$DvtZoomToFitButton$$.$superclass$.Init.call(this, $context$$657_proxy$$15$$, $panZoomCanvas$$17$$, $resources$$20$$);
  this.$_zoomToFitButton$ = $button$$85$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomToFitButton$, this.$HandleZoomToFitClick$, this);
  this.$_zoomToFitButton$.setCursor("pointer");
  this.$_eventManager$ = $eventManager$$36$$;
  $context$$657_proxy$$15$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMTOFIT"));
  this.$_eventManager$.$associate$(this.$_zoomToFitButton$, $context$$657_proxy$$15$$);
  this.$addChild$(this.$_zoomToFitButton$)
};
D.$DvtZoomToFitButton$$.prototype.$HandleZoomToFitClick$ = function $$DvtZoomToFitButton$$$$$HandleZoomToFitClick$$() {
  var $animator$$133$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
  this.$_panZoomCanvas$.$zoomToFit$($animator$$133$$);
  $animator$$133$$.play()
};
D.$DvtPanControl$$ = function $$DvtPanControl$$$($context$$637$$, $panButton$$, $recenterButton$$, $panZoomCanvas$$8$$, $resources$$11$$, $control$$, $styleMap$$63$$) {
  this.Init($context$$637$$, $panButton$$, $recenterButton$$, $panZoomCanvas$$8$$, $resources$$11$$, $control$$, $styleMap$$63$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanControl$$, D.$DvtBaseControl$$, "DvtPanControl");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanControl$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$638$$, $panButton$$1$$, $recenterButton$$1$$, $panZoomCanvas$$9$$, $resources$$12$$, $control$$1$$, $styleMap$$64$$) {
  D.$DvtPanControl$$.$superclass$.Init.call(this, $context$$638$$, $panZoomCanvas$$9$$, $resources$$12$$);
  this.$_panTimer$ = new D.$DvtTimer$$($context$$638$$, 50, this.$HandlePanTimer$, this);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panCenter$ = new D.$DvtPoint$$(20, 20);
  this.$_controls$ = $control$$1$$ ? $control$$1$$ : 16777215;
  $panButton$$1$$.$addChild$($recenterButton$$1$$);
  $recenterButton$$1$$ && (this.$_panCenterSprite$ = $recenterButton$$1$$, this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_panCenterSprite$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), (0,D.$DvtAgent$isTouchDevice$$)() || (this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, 
  this.$HandlePanCenterDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanCenterUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanCenterRollOver$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanCenterRollOut$, D.$JSCompiler_alias_FALSE$$, this)), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, 
  this.$HandlePanCenterMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panButton$ = $panButton$$1$$;
  this.$_panButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandlePanMouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanMouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanRollOver$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanRollOut$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandlePanMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanButtonBackground$($context$$638$$, $styleMap$$64$$);
  this.$_panControl$.$addChild$(this.$_panButton$);
  this.$addChild$(this.$_panControl$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanClick$$($event$$631$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$631$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseDown$$($event$$632_localPoint$$4_stagePoint$$8$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$632_localPoint$$4_stagePoint$$8$$);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $event$$632_localPoint$$4_stagePoint$$8$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$632_localPoint$$4_stagePoint$$8$$);
  $event$$632_localPoint$$4_stagePoint$$8$$ = this.$_panButton$.$stageToLocal$($event$$632_localPoint$$4_stagePoint$$8$$);
  (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$632_localPoint$$4_stagePoint$$8$$.x, $event$$632_localPoint$$4_stagePoint$$8$$.y, this.$_panButton$.$downState$);
  this.$_panMousePoint$ = new D.$DvtPoint$$($event$$632_localPoint$$4_stagePoint$$8$$.x, $event$$632_localPoint$$4_stagePoint$$8$$.y);
  this.$_panTimer$.start();
  this.$_panTimerCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseUp$$($event$$633$$) {
  this.$_bPanMouseDown$ && ((0,D.$DvtEventManager$consumeEvent$$)($event$$633$$), this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$), this.$_panTimer$.stop());
  this.$_panButton$.$_mouseOutHandler$($event$$633$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOver$$($event$$634$$) {
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  var $tooltip$$inline_8103$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_PAN");
  this.$getTooltipManager$().$showTooltip$($event$$634$$.pageX, $event$$634$$.pageY, $tooltip$$inline_8103$$, $event$$634$$.target)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOut$$($event$$635$$) {
  this.$HandlePanMouseUp$($event$$635$$);
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseMove$$($event$$636_localPoint$$5_stagePoint$$9$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$636_localPoint$$5_stagePoint$$9$$);
  $event$$636_localPoint$$5_stagePoint$$9$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$636_localPoint$$5_stagePoint$$9$$);
  $event$$636_localPoint$$5_stagePoint$$9$$ = this.$_panButton$.$stageToLocal$($event$$636_localPoint$$5_stagePoint$$9$$);
  this.$_bPanMouseDown$ ? ((0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$636_localPoint$$5_stagePoint$$9$$.x, $event$$636_localPoint$$5_stagePoint$$9$$.y, this.$_panButton$.$downState$), this.$_panMousePoint$ = new D.$DvtPoint$$($event$$636_localPoint$$5_stagePoint$$9$$.x, $event$$636_localPoint$$5_stagePoint$$9$$.y)) : (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$636_localPoint$$5_stagePoint$$9$$.x, $event$$636_localPoint$$5_stagePoint$$9$$.y, 
  this.$_panButton$.$overState$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanTimer$ = function $$JSCompiler_prototypeAlias$$$$HandlePanTimer$$() {
  if(this.$_bPanMouseDown$) {
    var $angleRads$$12_deltaY$$20$$ = window.Math.atan2(this.$_panCenter$.y - this.$_panMousePoint$.y, this.$_panCenter$.x - this.$_panMousePoint$.x), $deltaX$$20$$ = window.Math.cos($angleRads$$12_deltaY$$20$$), $angleRads$$12_deltaY$$20$$ = window.Math.sin($angleRads$$12_deltaY$$20$$), $factor$$7$$ = 15;
    this.$_panTimerCount$++;
    40 < this.$_panTimerCount$ && ($factor$$7$$ *= 3);
    this.$_panZoomCanvas$.$panBy$($factor$$7$$ * $deltaX$$20$$, $factor$$7$$ * $angleRads$$12_deltaY$$20$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterClick$$($event$$637$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$637$$);
  this.$_panZoomCanvas$.$zoomAndCenter$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterDown$$($event$$638$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$638$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterUp$$($event$$639$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$639$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOver$$($event$$640$$) {
  var $tooltip$$inline_8109$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMANDCENTER");
  this.$getTooltipManager$().$showTooltip$($event$$640$$.pageX, $event$$640$$.pageY, $tooltip$$inline_8109$$, $event$$640$$.target);
  this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$DvtEventManager$consumeEvent$$)($event$$640$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOut$$($event$$641$$) {
  this.$getTooltipManager$().$hideTooltip$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$641$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterMouseMove$$($event$$642$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$642$$)
};
D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$ = function $$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$$($JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$, $localX$$, $localY$$, $displayObj$$3$$) {
  $displayObj$$3$$.$setRotation$(window.Math.atan2($localY$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.y, $localX$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.x) - window.Math.PI / 4)
};
D.$DvtControlPanelEvent$$ = function $$DvtControlPanelEvent$$$($subtype$$11$$) {
  this.Init("dvtPZCPExpand");
  this.$_subtype$ = $subtype$$11$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtControlPanelEvent");
D.$DvtControlPanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtControlPanel$$ = function $$DvtControlPanel$$$($context$$641$$, $view$$72$$, $state$$81$$) {
  this.Init($context$$641$$, $view$$72$$, $state$$81$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanel$$, D.$DvtContainer$$, "DvtControlPanel");
D.$DvtControlPanel$DEFAULT_ZOOM_LEVELS$$ = [0, 0.25, 0.5, 0.75, 1];
D.$DvtControlPanel$$.prototype.Init = function $$DvtControlPanel$$$$Init$($context$$642$$, $view$$73$$, $state$$82$$) {
  D.$DvtControlPanel$$.$superclass$.Init.call(this, $context$$642$$);
  this.$_bMouseOver$ = this.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $view$$73$$.$_panZoomCanvas$;
  this.$_controls$ = $view$$73$$.$_displayedControls$;
  this.$Bundle$ = $view$$73$$.$getBundle$();
  this.$_buttonImages$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)($view$$73$$);
  this.$_tooltipManager$ = $context$$642$$.$getTooltipManager$();
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_view$ = $view$$73$$) {
    this.$_styleMap$ = this.$_view$.$getSubcomponentStyles$(), this.$_styleMap$.centerButtonDisplayed || (this.$_controls$ &= -17, this.$_view$.$_displayedControls$ = this.$_controls$)
  }
  this.$_zoomLevels$ = D.$DvtControlPanel$DEFAULT_ZOOM_LEVELS$$;
  this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bgAlpha$ = this.$_styleMap$.backgroundAlpha;
  this.$_eventManager$ = new D.$DvtControlPanelEventManager$$($context$$642$$, D.$JSCompiler_alias_NULL$$, $view$$73$$);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtControlPanel$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$associate$(this, this);
  this.$_state$ = $state$$82$$;
  this.$tabChildren$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this)
};
D.$DvtControlPanel$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$ = function $$JSCompiler_StaticMethods_mouseDragPanningStarted$$$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$) {
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_bMouseDragPanning$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_background$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_frame$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_styleMap$.backgroundDragAlpha);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_styleMap$.borderDragAlpha)
};
D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$ = function $$JSCompiler_StaticMethods_mouseDragPanningEnded$$$($JSCompiler_StaticMethods_mouseDragPanningEnded$self$$) {
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_background$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_frame$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_bMouseOver$ ? $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$HandleRollOver$(D.$JSCompiler_alias_NULL$$) : $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$HandleRollOut$(D.$JSCompiler_alias_NULL$$)
};
D.$DvtControlPanel$$.prototype.$isSingleHorzRow$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtControlPanel$$.prototype.$getViewPanelHeight$ = function $$DvtControlPanel$$$$$getViewPanelHeight$$() {
  var $h$$66$$ = 0, $h$$66$$ = this.$isSingleHorzRow$() ? D.$DvtControlPanelLAFUtils$$.$getViewPanelHalfHeight$() : D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$();
  return window.Math.max((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $h$$66$$)
};
D.$JSCompiler_StaticMethods_RenderCollapsed$$ = function $$JSCompiler_StaticMethods_RenderCollapsed$$$($JSCompiler_StaticMethods_RenderCollapsed$self$$) {
  var $context$$643_proxy$$11$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_context$, $contentBar$$ = new D.$DvtContainer$$($context$$643_proxy$$11$$), $hh$$98$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $bR2L$$6$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$643_proxy$$11$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedShape$($context$$643_proxy$$11$$, $hh$$98$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$6$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($context$$643_proxy$$11$$, $hh$$98$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$6$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_collapsedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$643_proxy$$11$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$ = D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_context$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$6$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_RenderCollapsed$self$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$.setCursor("pointer");
  $context$$643_proxy$$11$$ = new D.$DvtControlPanelEventHandlerProxy$$($JSCompiler_StaticMethods_RenderCollapsed$self$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($JSCompiler_StaticMethods_RenderCollapsed$self$$.$Bundle$, "CONTROL_PANEL"));
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_eventManager$.$associate$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $context$$643_proxy$$11$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  return $contentBar$$
};
D.$JSCompiler_StaticMethods_RenderExpanded$$ = function $$JSCompiler_StaticMethods_RenderExpanded$$$($JSCompiler_StaticMethods_RenderExpanded$self$$) {
  var $context$$650$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $s$$158$$ = new D.$DvtContainer$$($context$$650$$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$ = new D.$DvtContainer$$($context$$650$$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$ = new D.$DvtContainer$$($context$$650$$);
  $s$$158$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$);
  $s$$158$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$);
  var $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$650$$), $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$ = 0, $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$ = new D.$DvtContainer$$($context$$650$$), $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$;
  $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$ = 0;
  var $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$isSingleHorzRow$();
  0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanControl$($context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$ && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ = D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ = 
  D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$), $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$)), 
  $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$++);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$ = D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$));
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$HandleCollapseClick$, $JSCompiler_StaticMethods_RenderExpanded$self$$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$.setCursor("pointer");
  $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ = new D.$DvtControlPanelEventHandlerProxy$$($JSCompiler_StaticMethods_RenderExpanded$self$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, "CONTROL_PANEL"));
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$.$associate$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$, $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$);
  $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$PopulateHorzContentBar$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$);
  0 < $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$.$getNumChildren$() ? ($dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$++) : $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ = D.$JSCompiler_alias_NULL$$;
  var $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ = $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$ = 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$ = D.$JSCompiler_alias_NULL$$, $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0), $backgroundHeight$$inline_8168_buttonWidth$$inline_8136$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, 
  "buttonWidth", 0), $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), 
  $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.hbar, "paddingLeft", 0), $buttonPaddingInner$$inline_8140_nHorzContentBarChildren$$inline_8160_paddingSide$$inline_8155$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.hbar, "paddingInner", 0);
  $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$ ? ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$.$setTranslateX$(0), $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ += $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && ($dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ += $buttonPaddingInner$$inline_8140_nHorzContentBarChildren$$inline_8160_paddingSide$$inline_8155$$, 
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$, $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, ($buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$ - $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$.$h$) / 2), $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ += 
  window.Math.max($dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$.$w$, $backgroundHeight$$inline_8168_buttonWidth$$inline_8136$$)), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ && ($context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ += $buttonPaddingInner$$inline_8140_nHorzContentBarChildren$$inline_8160_paddingSide$$inline_8155$$, $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$, 
  $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$, $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$), 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$, $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$), $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ += $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$.$w$), $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ += $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$) : 
  ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ && ($context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ += $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$, $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$, 
  $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$, $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$, $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$, 
  $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$, $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$, $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$), $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ += $buttonPaddingInner$$inline_8140_nHorzContentBarChildren$$inline_8160_paddingSide$$inline_8155$$ + 
  $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$.$w$, $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ += 1), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && ($dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), 0 == $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ && ($context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ += $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$, 
  $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, ($buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$ - $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$.$h$) / 2), $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ += $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$.$w$, 
  $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ = window.Math.max($context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ + $buttonPaddingInner$$inline_8140_nHorzContentBarChildren$$inline_8160_paddingSide$$inline_8155$$, $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$)), 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$.$setTranslateX$($context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$), $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ += $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$);
  $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$ = $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$;
  $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ = D.$JSCompiler_alias_NULL$$;
  $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16 || $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.panelDrawerStyles && 0 == $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$ ? 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingTop", 0) : 0;
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$isSingleHorzRow$() && 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) && ($bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$ += D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$() - $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$());
  if(0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 256) || 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 4097)) {
    $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ = new D.$DvtContainer$$($context$$650$$), $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$.$setTranslateY$($dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$getTranslateY$() + $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ = 
    $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 256) && ($buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$ = 
    (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingLeft", 0), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$ = D.$DvtButtonLAFUtils$$.$createZoomToFitButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$, $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$.$getTranslateY$() + $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$), 
    $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$), $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$), 
    $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$ += $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$.$h$, $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$ += $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$), 
    $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ = $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$ = D.$JSCompiler_alias_NULL$$, $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$ = 
    (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingInner$$inline_8140_nHorzContentBarChildren$$inline_8160_paddingSide$$inline_8155$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingLeft", 0), 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 4097) && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$ = D.$DvtButtonLAFUtils$$.$createZoomInButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$, $buttonPaddingInner$$inline_8140_nHorzContentBarChildren$$inline_8160_paddingSide$$inline_8155$$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$.$getTranslateY$() + $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$), $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$), 
    $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$), $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$ += $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$.$h$ + 
    $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$ = D.$DvtButtonLAFUtils$$.$createZoomOutButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$, $buttonPaddingInner$$inline_8140_nHorzContentBarChildren$$inline_8160_paddingSide$$inline_8155$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$.$getTranslateY$() + $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$), 
    $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$), $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$), 
    $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$ += $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$.$h$, $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$.$getZoom$(), 
    $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$), $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$ = 
    (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$.$setEnabled$($bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ != 
    $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$.$setEnabled$($bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ != $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$)), 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$.$addChild$($context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$)
  }
  var $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$ = $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, $buttonPaddingInner$$inline_8140_nHorzContentBarChildren$$inline_8160_paddingSide$$inline_8155$$ = $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$, 
  $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $buttonWidth$$inline_8164_viewFrame$$inline_8171$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0), $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$ = ($dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) ? 
  $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$ : $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$ - $buttonWidth$$inline_8164_viewFrame$$inline_8171$$, $backgroundHeight$$inline_8168_buttonWidth$$inline_8136$$ = 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), $backgroundFrameOffsetX$$inline_8169$$ = 0, $backgroundShapeOffsetX$$inline_8170$$ = 0;
  $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$ ? $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$ && 0 == $buttonPaddingInner$$inline_8140_nHorzContentBarChildren$$inline_8160_paddingSide$$inline_8155$$ && ($backgroundShapeOffsetX$$inline_8170$$ = $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$ ? -$buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$ : 
  $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$) : ($backgroundFrameOffsetX$$inline_8169$$ = $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$ ? $buttonWidth$$inline_8164_viewFrame$$inline_8171$$ : 0, $backgroundShapeOffsetX$$inline_8170$$ = $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$ ? $buttonWidth$$inline_8164_viewFrame$$inline_8171$$ : 
  0);
  if(0 < $buttonPaddingInner$$inline_8140_nHorzContentBarChildren$$inline_8160_paddingSide$$inline_8155$$ || $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$) {
    var $r$$inline_8173_viewShape$$inline_8172$$ = $buttonWidth$$inline_8164_viewFrame$$inline_8171$$ = D.$JSCompiler_alias_NULL$$, $r$$inline_8173_viewShape$$inline_8172$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "border-radius", 0));
    $dim$$inline_8134_panelDrawerStyle$$inline_8166_yy$$inline_8141$$ ? ($bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$ = 0 < $buttonPaddingInner$$inline_8140_nHorzContentBarChildren$$inline_8160_paddingSide$$inline_8155$$ && $buttonPaddingSide$$inline_8139_dim$$inline_8148_paddingInner$$inline_8154_paddingSide$$inline_8147_prevZoom$$inline_10985_vertContentBar$$inline_8159$$ != D.$JSCompiler_alias_NULL$$ ? D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ : D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$, 
    $buttonWidth$$inline_8164_viewFrame$$inline_8171$$ = D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$($bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$, $r$$inline_8173_viewShape$$inline_8172$$, $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, 
    $backgroundHeight$$inline_8168_buttonWidth$$inline_8136$$, $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$, $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$), $r$$inline_8173_viewShape$$inline_8172$$ = D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$($bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$, 
    $r$$inline_8173_viewShape$$inline_8172$$, $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, $backgroundHeight$$inline_8168_buttonWidth$$inline_8136$$, $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$, $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$)) : 
    ($buttonWidth$$inline_8164_viewFrame$$inline_8171$$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$($bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$, $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), 
    !$bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $r$$inline_8173_viewShape$$inline_8172$$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$($bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$, $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), !$bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$));
    $buttonWidth$$inline_8164_viewFrame$$inline_8171$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$));
    $buttonWidth$$inline_8164_viewFrame$$inline_8171$$.$setFill$(D.$JSCompiler_alias_NULL$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($buttonWidth$$inline_8164_viewFrame$$inline_8171$$, $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$getTranslateX$() + $backgroundFrameOffsetX$$inline_8169$$, $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$getTranslateY$());
    $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$addChildAt$($buttonWidth$$inline_8164_viewFrame$$inline_8171$$, 0);
    $r$$inline_8173_viewShape$$inline_8172$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($r$$inline_8173_viewShape$$inline_8172$$, $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$getTranslateX$() + $backgroundShapeOffsetX$$inline_8170$$, $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$getTranslateY$());
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$.$addChild$($r$$inline_8173_viewShape$$inline_8172$$)
  }
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$.$addChild$($dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$);
  $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$ = $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$;
  $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$;
  $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ = (0,D.$DvtAgent$isRightToLeft$$)($backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$);
  $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0);
  !$JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && 0 == ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) ? $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ ? ($dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$setTranslateX$(0 - $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$getTranslateX$()), 
  $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$setTranslateY$(0), $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$ && (D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$), 
  $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$setTranslateX$($dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$getTranslateX$() - $buttonWidth$$inline_8181_dim$$inline_8153_nextZoom$$inline_10984_paddingInner$$inline_8146_panelHeight$$inline_8138_panelWidth$$inline_8165$$), $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$.$setTranslateY$(0))) : $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$ ? 
  ($backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$, 
  $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$getTranslateX$() + $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, 0)) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$, $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$getTranslateX$(), 0) : $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ && 
  $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$ && ($backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, 
  $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$), $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$setTranslateX$(0), $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$.$setTranslateX$($backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$.$w$ + 
  $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$.x - $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$));
  $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$ = $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$;
  $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ = $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$;
  $context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$;
  $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$ && ($backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$ = $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$.$getNumChildren$(), $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$ = 
  1 < $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$ || $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$ == D.$JSCompiler_alias_NULL$$ || 1 < $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$ || 0 < $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$ && 
  1 == $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.panelDrawerStyles && 
  ($bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$ = 0 < $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$ ? D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ : D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$), $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, 
  $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$), $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ += 4, $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$ = $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$ ? 
  $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$ : window.Math.max($dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$.$h$, $bBiDi$$inline_8180_barWidth$$inline_8184_context$$inline_8163_currY$$inline_8190_currZoom$$inline_10983_panelWidth$$inline_8137_vertContentBar$$inline_8144_vertContentBar$$inline_8151$$), $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$ += 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingBottom", 0), $dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$ = D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomShape$($context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, 
  $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$ = D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomFrame$($context$$inline_8119_context$$inline_8191_currX$$inline_8132_proxy$$inline_8124_vertContentBar$$5$$, 
  $cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$, $backgroundWidth$$inline_8167_context$$inline_8133_context$$inline_8179_cpWidth$$inline_8182_currX$$18_dimHorizontal$$inline_8183_nVertContentBarChildren$$inline_8192_roundedCorner$$inline_8193$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, $bSingleRow$$inline_8120_collapseButtonWidth$$inline_8135_currY$$22_currY$$inline_8145_currY$$inline_8152_openside$$inline_8194$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$, $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$.$getTranslateX$(), $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$.$getTranslateY$()), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$.$addChild$($dim$$inline_8195_horzContentBar$$6_zoomShape$$inline_8197$$), 
  $bBiDi$$6_openSide$$inline_8174_vertContentBar$$inline_8178_vertContentBar$$inline_8188$$.$addChildAt$($cpHeight$$inline_8196_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_8118_nHorzContentBarChildren$$inline_8128_zoomFrame$$inline_8198$$, 0));
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_expandedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$650$$, $s$$158$$);
  return $s$$158$$
};
D.$DvtControlPanel$$.prototype.$PopulateHorzContentBar$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtControlPanel$$.prototype.$toggleExpandCollapse$ = function $$DvtControlPanel$$$$$toggleExpandCollapse$$() {
  this.$_bTransition$ || (2 === this.$_state$ ? this.$_doCollapse$() : 1 === this.$_state$ && this.$_doExpand$())
};
D.$DvtControlPanel$$.prototype.$HandleExpandClick$ = function $$DvtControlPanel$$$$$HandleExpandClick$$($event$$645$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$645$$);
  this.$_bTransition$ || (this.$_doExpand$(), this.$getTooltipManager$() && this.$getTooltipManager$().$hideTooltip$())
};
D.$DvtControlPanel$$.prototype.$_doExpand$ = function $$DvtControlPanel$$$$$_doExpand$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  var $event$$inline_8211_s$$159$$ = (0,D.$JSCompiler_StaticMethods_RenderExpanded$$)(this);
  this.$addChild$($event$$inline_8211_s$$159$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_8201$$ = this.$getChildAt$(0), $odim$$inline_8203_transX$$inline_8208$$ = $oldContent$$inline_8201$$.$getDimensions$(), $openCloseButtonWidth$$inline_8204$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0);
  if($odim$$inline_8203_transX$$inline_8208$$ && 0 != $odim$$inline_8203_transX$$inline_8208$$.$w$) {
    var $ndim$$inline_8205$$ = $event$$inline_8211_s$$159$$.$getDimensions$(), $animator$$inline_8206$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
    $oldContent$$inline_8201$$.$setAlpha$(1);
    $event$$inline_8211_s$$159$$.$setAlpha$(0);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_8206$$, "typeNumber", $oldContent$$inline_8201$$, $oldContent$$inline_8201$$.$getAlpha$, $oldContent$$inline_8201$$.$setAlpha$, 0);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_8206$$, "typeNumber", $event$$inline_8211_s$$159$$, $event$$inline_8211_s$$159$$.$getAlpha$, $event$$inline_8211_s$$159$$.$setAlpha$, 1);
    $event$$inline_8211_s$$159$$.$setScaleX$($odim$$inline_8203_transX$$inline_8208$$.$w$ / $ndim$$inline_8205$$.$w$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_8206$$, "typeNumber", $event$$inline_8211_s$$159$$, $event$$inline_8211_s$$159$$.$getScaleX$, $event$$inline_8211_s$$159$$.$setScaleX$, 1);
    if((0,D.$DvtAgent$isRightToLeft$$)(this.$_context$)) {
      $event$$inline_8211_s$$159$$.$setTranslateX$($oldContent$$inline_8201$$.$getTranslateX$());
      var $dimWidth$$inline_8207$$ = $ndim$$inline_8205$$.$w$ + $ndim$$inline_8205$$.x;
      (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_8206$$, "typeNumber", $event$$inline_8211_s$$159$$, $event$$inline_8211_s$$159$$.$getTranslateX$, $event$$inline_8211_s$$159$$.$setTranslateX$, $oldContent$$inline_8201$$.$getTranslateX$() + $openCloseButtonWidth$$inline_8204$$ - $dimWidth$$inline_8207$$)
    }
    $event$$inline_8211_s$$159$$.$setScaleY$($odim$$inline_8203_transX$$inline_8208$$.$h$ / $ndim$$inline_8205$$.$h$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_8206$$, "typeNumber", $event$$inline_8211_s$$159$$, $event$$inline_8211_s$$159$$.$getScaleY$, $event$$inline_8211_s$$159$$.$setScaleY$, 1);
    $animator$$inline_8206$$.$setOnEnd$(function() {
      $oldContent$$inline_8201$$.getParent().removeChild($oldContent$$inline_8201$$);
      this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
      this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
    }, this);
    $animator$$inline_8206$$.play()
  }else {
    $oldContent$$inline_8201$$.getParent().removeChild($oldContent$$inline_8201$$), (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? ($ndim$$inline_8205$$ = (0,D.$DvtDisplayableUtils$_getDimForced$$)(this.$_context$, $event$$inline_8211_s$$159$$), $dimWidth$$inline_8207$$ = window.Math.floor($ndim$$inline_8205$$.$w$ + $ndim$$inline_8205$$.x), $odim$$inline_8203_transX$$inline_8208$$ = $openCloseButtonWidth$$inline_8204$$ - $dimWidth$$inline_8207$$) : $odim$$inline_8203_transX$$inline_8208$$ = 0, 
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($event$$inline_8211_s$$159$$, $odim$$inline_8203_transX$$inline_8208$$, 0)
  }
  this.$_state$ = 2;
  $event$$inline_8211_s$$159$$ = new D.$DvtControlPanelEvent$$("show");
  this.$FireListener$($event$$inline_8211_s$$159$$)
};
D.$JSCompiler_StaticMethods__applyAlphasForMouse$$ = function $$JSCompiler_StaticMethods__applyAlphasForMouse$$$($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) {
  var $bMouseOver$$4$$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__applyAlphasForMouse$self$$.$_context$.$_stage$ && ($bMouseOver$$4$$ = D.$JSCompiler_alias_TRUE$$);
  $bMouseOver$$4$$ ? (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) : (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$)
};
D.$DvtControlPanel$$.prototype.$HandleCollapseClick$ = function $$DvtControlPanel$$$$$HandleCollapseClick$$($event$$646$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$646$$);
  this.$_bTransition$ || this.$_doCollapse$()
};
D.$DvtControlPanel$$.prototype.$_doCollapse$ = function $$DvtControlPanel$$$$$_doCollapse$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  var $event$$inline_8221_s$$160$$ = (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this);
  this.$addChild$($event$$inline_8221_s$$160$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_8214$$ = this.$getChildAt$(0), $animator$$inline_8216$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
  $oldContent$$inline_8214$$.$setAlpha$(1);
  $event$$inline_8221_s$$160$$.$setAlpha$(0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_8216$$, "typeNumber", $oldContent$$inline_8214$$, $oldContent$$inline_8214$$.$getAlpha$, $oldContent$$inline_8214$$.$setAlpha$, 0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_8216$$, "typeNumber", $event$$inline_8221_s$$160$$, $event$$inline_8221_s$$160$$.$getAlpha$, $event$$inline_8221_s$$160$$.$setAlpha$, 1);
  var $ndim$$inline_8217$$ = this.$_collapsedDim$, $odim$$inline_8218$$ = this.$_expandedDim$;
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_8216$$, "typeNumber", $oldContent$$inline_8214$$, $oldContent$$inline_8214$$.$getScaleX$, $oldContent$$inline_8214$$.$setScaleX$, $ndim$$inline_8217$$.$w$ / $odim$$inline_8218$$.$w$);
  (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_8216$$, "typeNumber", $oldContent$$inline_8214$$, $oldContent$$inline_8214$$.$getTranslateX$, $oldContent$$inline_8214$$.$setTranslateX$, $event$$inline_8221_s$$160$$.$getTranslateX$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_8216$$, "typeNumber", $oldContent$$inline_8214$$, $oldContent$$inline_8214$$.$getScaleY$, $oldContent$$inline_8214$$.$setScaleY$, $ndim$$inline_8217$$.$h$ / $odim$$inline_8218$$.$h$);
  $animator$$inline_8216$$.$setOnEnd$(function() {
    $oldContent$$inline_8214$$.getParent().removeChild($oldContent$$inline_8214$$);
    this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
  }, this);
  $animator$$inline_8216$$.play();
  this.$_state$ = 1;
  $event$$inline_8221_s$$160$$ = new D.$DvtControlPanelEvent$$("hide");
  this.$FireListener$($event$$inline_8221_s$$160$$)
};
D.$DvtControlPanel$$.prototype.$HandleRollOver$ = function $$DvtControlPanel$$$$$HandleRollOver$$() {
  this.$_bMouseOver$ = D.$JSCompiler_alias_TRUE$$;
  this.$_bMouseDragPanning$ || (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)(this)
};
D.$DvtControlPanel$$.prototype.$HandleRollOut$ = function $$DvtControlPanel$$$$$HandleRollOut$$() {
  this.$_bMouseOver$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMouseDragPanning$ || (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)(this)
};
D.$JSCompiler_StaticMethods__applyAlphasRollover$$ = function $$JSCompiler_StaticMethods__applyAlphasRollover$$$($JSCompiler_StaticMethods__applyAlphasRollover$self$$) {
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.backgroundHoverAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.borderHoverAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_panControlUnderlay$ && $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_panControlUnderlay$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.backgroundHoverAlpha)
};
D.$JSCompiler_StaticMethods__applyAlphasRollout$$ = function $$JSCompiler_StaticMethods__applyAlphasRollout$$$($JSCompiler_StaticMethods__applyAlphasRollout$self$$) {
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_bgAlpha$);
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_styleMap$.borderAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_panControlUnderlay$ && $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_panControlUnderlay$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_bgAlpha$)
};
D.$DvtControlPanel$$.prototype.$getDimensions$ = function $$DvtControlPanel$$$$$getDimensions$$() {
  this.$_dim$ || (this.$_dim$ = D.$DvtControlPanel$$.$superclass$.$getDimensions$.call(this));
  return this.$_dim$
};
D.$DvtControlPanel$$.prototype.$renderComponent$ = function $$DvtControlPanel$$$$$renderComponent$$() {
  var $s$$161$$;
  $s$$161$$ = 1 == this.$_state$ ? (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this) : (0,D.$JSCompiler_StaticMethods_RenderExpanded$$)(this);
  this.$_background$.$setAlpha$(this.$_bgAlpha$);
  this.$_frame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$addChild$($s$$161$$)
};
D.$DvtControlPanel$$.prototype.$getButtonImages$ = (0,D.$JSCompiler_get$$)("$_buttonImages$");
D.$JSCompiler_StaticMethods_enableZoomInControl$$ = function $$JSCompiler_StaticMethods_enableZoomInControl$$$($JSCompiler_StaticMethods_enableZoomInControl$self$$, $enabled$$20$$) {
  $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$ && $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$.$setEnabled$($enabled$$20$$)
};
D.$JSCompiler_StaticMethods_enableZoomOutControl$$ = function $$JSCompiler_StaticMethods_enableZoomOutControl$$$($JSCompiler_StaticMethods_enableZoomOutControl$self$$, $enabled$$21$$) {
  $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$ && $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$.$setEnabled$($enabled$$21$$)
};
D.$DvtControlPanelDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelDefaults$$, D.$DvtObj$$, "DvtControlPanelDefaults");
D.$DvtControlPanelDefaults$$.$SKIN_ALTA$ = {"fill-type":"solid", backgroundAlpha:1, backgroundDragAlpha:1, borderDragAlpha:1, panelDrawerStyles:D.$JSCompiler_alias_TRUE$$, buttonWidth:42, buttonHeight:42, buttonRadius:0, openCloseButtonWidth:42, tabSize:42, paddingTop:15, paddingSide:-1, imageWidth:24, imageHeight:24, centerButtonDisplayed:D.$JSCompiler_alias_FALSE$$, scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", 
scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333", comboBox:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0, itemHeight:30, imagePadding:0, itemPadding:10}, vbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}, hbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}};
D.$DvtControlPanelDefaults$$.$SKIN_SKYROS$ = {"fill-type":"solid"};
D.$DvtControlPanelDefaults$$.$DEFAULT$ = {"fill-type":"gradient", "border-color":"#ffffff", "background-color":"#ffffff", "border-radius":6, backgroundAlpha:0.5, backgroundHoverAlpha:1, backgroundDragAlpha:0.5, borderAlpha:1, borderHoverAlpha:1, borderDragAlpha:0.5, tabSize:26, buttonWidth:22, buttonHeight:22, buttonRadius:3, paddingTop:5, paddingSide:5, imageWidth:22, imageHeight:20, openCloseButtonWidth:10, centerButtonDisplayed:D.$JSCompiler_alias_TRUE$$, comboBox:{paddingTop:2, paddingBottom:6, 
paddingLeft:3, paddingRight:3, paddingInner:2, itemHeight:22, radius:4, imagePadding:2, itemPadding:7}, vbar:{paddingTop:2.5, paddingBottom:2.5, paddingLeft:2, paddingRight:2, paddingInner:2}, hbar:{paddingTop:2, paddingBottom:2, paddingLeft:3, paddingRight:3, paddingInner:2}};
D.$DvtControlPanelDefaults$$.$calcOptions$ = function $$DvtControlPanelDefaults$$$$calcOptions$$($userOptions$$6$$) {
  var $defaults$$11$$ = D.$DvtControlPanelDefaults$$.$_getDefaults$($userOptions$$6$$);
  return $userOptions$$6$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$6$$, $defaults$$11$$) : $defaults$$11$$
};
D.$DvtControlPanelDefaults$$.$_getDefaults$ = function $$DvtControlPanelDefaults$$$$_getDefaults$$($userOptions$$7$$) {
  var $defaults$$12$$ = D.$JSCompiler_alias_NULL$$;
  return $defaults$$12$$ = $userOptions$$7$$ && "skyros" === $userOptions$$7$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtControlPanelDefaults$$.$SKIN_SKYROS$, D.$DvtControlPanelDefaults$$.$DEFAULT$) : $userOptions$$7$$ && "alta" === $userOptions$$7$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtControlPanelDefaults$$.$SKIN_ALTA$, D.$DvtControlPanelDefaults$$.$DEFAULT$) : D.$DvtJSONUtils$$.clone(D.$DvtControlPanelDefaults$$.$DEFAULT$)
};
D.$DvtControlPanelEventManager$$ = function $$DvtControlPanelEventManager$$$($context$$310$$, $callback$$85$$, $callbackObj$$58$$) {
  this.Init($context$$310$$, $callback$$85$$, $callbackObj$$58$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEventManager$$, D.$DvtEventManager$$, "DvtControlPanelEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtControlPanelEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$394$$) {
  var $obj$$162$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$394$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$394$$);
  $obj$$162$$ && ($obj$$162$$.$HandleMouseDown$ && $obj$$162$$.$HandleMouseDown$($event$$394$$), $event$$394$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$395$$) {
  var $obj$$163$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$395$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$395$$);
  $obj$$163$$ && ($obj$$163$$.$HandleMouseUp$ && $obj$$163$$.$HandleMouseUp$($event$$395$$), $event$$395$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$396$$) {
  var $obj$$164$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$396$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$396$$);
  $obj$$164$$ && ($obj$$164$$.$HandleMouseOut$ && $obj$$164$$.$HandleMouseOut$($event$$396$$), $event$$396$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$397$$) {
  var $obj$$165$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$397$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnClick$.call(this, $event$$397$$);
  $obj$$165$$ && ($obj$$165$$.$HandleClick$ && $obj$$165$$.$HandleClick$($event$$397$$), $event$$397$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$398$$) {
  D.$DvtControlPanelEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$398$$);
  var $obj$$166$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$398$$));
  $obj$$166$$ && $obj$$166$$.$HandleRollOver$ && $obj$$166$$.$HandleRollOver$($event$$398$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$399$$) {
  D.$DvtControlPanelEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$399$$);
  var $obj$$167$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$399$$));
  $obj$$167$$ && $obj$$167$$.$HandleRollOut$ && $obj$$167$$.$HandleRollOut$($event$$399$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$400$$) {
  var $obj$$168$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$400$$));
  $obj$$168$$ && ($obj$$168$$.$HandleClick$ && $obj$$168$$.$HandleClick$($event$$400$$), $event$$400$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$401$$) {
  $event$$401$$.$blockTouchHold$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$401$$)
};
D.$DvtControlPanelEventHandlerProxy$$ = function $$DvtControlPanelEventHandlerProxy$$$($callback$$152$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$54$$) {
  this.Init($callback$$152$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$54$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEventHandlerProxy$$, D.$DvtObj$$, "DvtControlPanelEventHandlerProxy");
D.$JSCompiler_prototypeAlias$$ = D.$DvtControlPanelEventHandlerProxy$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($callbackObj$$119$$, $handleClick$$1$$, $handleMouseDown$$1$$, $handleMouseUp$$1$$, $handleMouseOut$$1$$, $handleMouseOver$$1$$, $tooltip$$55$$) {
  this.$_callbackObj$ = $callbackObj$$119$$;
  this.$_handleClick$ = $handleClick$$1$$;
  this.$_handleMouseUp$ = $handleMouseUp$$1$$;
  this.$_handleMouseDown$ = $handleMouseDown$$1$$;
  this.$_handleMouseOut$ = $handleMouseOut$$1$$;
  this.$_handleMouseOver$ = $handleMouseOver$$1$$;
  this.$_tooltip$ = $tooltip$$55$$
};
D.$JSCompiler_prototypeAlias$$.$HandleClick$ = function $$JSCompiler_prototypeAlias$$$$HandleClick$$($event$$662$$) {
  this.$_handleClick$ && this.$_handleClick$.call(this.$_callbackObj$, $event$$662$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$663$$) {
  this.$_handleMouseDown$ && this.$_handleMouseDown$.call(this.$_callbackObj$, $event$$663$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseUp$$($event$$664$$) {
  this.$_handleMouseUp$ && this.$_handleMouseUp$.call(this.$_callbackObj$, $event$$664$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$($event$$665$$) {
  this.$_handleMouseOut$ && this.$_handleMouseOut$.call(this.$_callbackObj$, $event$$665$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$($event$$666$$) {
  this.$_handleMouseOver$ && this.$_handleMouseOver$.call(this.$_callbackObj$, $event$$666$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$DvtControlPanelLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelLAFUtils$$, D.$DvtObj$$, "DvtControlPanelLAFUtils");
D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ = "top";
D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ = "right";
D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ = "left";
D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ = "bottom";
D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$ = 47;
D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ = window.Math.sin(window.Math.PI / 4);
D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ = window.Math.tan(window.Math.PI / 8);
D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$ = function $$DvtControlPanelLAFUtils$$$$getViewPanelHeight$$() {
  return D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$
};
D.$DvtControlPanelLAFUtils$$.$getViewPanelHalfHeight$ = function $$DvtControlPanelLAFUtils$$$$getViewPanelHalfHeight$$() {
  return D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewOpenShape$$($context$$628$$, $nw$$1$$, $nh$$, $bL2R$$, $r$$66_styleMap$$58$$) {
  $nw$$1$$ || ($nw$$1$$ = 86);
  $nh$$ || ($nh$$ = 47);
  $bL2R$$ === D.$JSCompiler_alias_VOID$$ && ($bL2R$$ = D.$JSCompiler_alias_TRUE$$);
  $r$$66_styleMap$$58$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($r$$66_styleMap$$58$$, "border-radius", 0));
  return D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelper$($context$$628$$, $r$$66_styleMap$$58$$, $nw$$1$$ - 2 * $r$$66_styleMap$$58$$, $nh$$ - 2 * $r$$66_styleMap$$58$$, $bL2R$$)
};
D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelper$ = function $$DvtControlPanelLAFUtils$$$$makeViewOpenShapeHelper$$($context$$629$$, $r$$67$$, $ww$$113$$, $hh$$94$$, $bL2R$$1$$) {
  var $x$$312$$ = $ww$$113$$ + $r$$67$$, $y$$277$$ = $hh$$94$$ + $r$$67$$, $cmds$$20$$ = D.$DvtPathUtils$$.moveTo($x$$312$$ + $r$$67$$, $y$$277$$ + $r$$67$$), $cmds$$20$$ = $cmds$$20$$ + D.$DvtPathUtils$$.lineTo($x$$312$$ - $ww$$113$$, $y$$277$$ + $r$$67$$), $x$$312$$ = $x$$312$$ - $ww$$113$$, $cmds$$20$$ = $cmds$$20$$ + D.$DvtPathUtils$$.lineTo($x$$312$$ - $r$$67$$, $y$$277$$ + $r$$67$$), $cmds$$20$$ = $cmds$$20$$ + D.$DvtPathUtils$$.lineTo($x$$312$$ - $r$$67$$, $y$$277$$ - $hh$$94$$), $y$$277$$ = 
  $y$$277$$ - $hh$$94$$;
  $bL2R$$1$$ ? ($cmds$$20$$ += D.$DvtPathUtils$$.$quadTo$(-$r$$67$$ + $x$$312$$, -D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$67$$ + $y$$277$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$67$$ + $x$$312$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$67$$ + $y$$277$$) + D.$DvtPathUtils$$.$quadTo$(-D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$67$$ + $x$$312$$, -$r$$67$$ + $y$$277$$, $x$$312$$, -$r$$67$$ + $y$$277$$) + D.$DvtPathUtils$$.lineTo($x$$312$$, -$r$$67$$ + $y$$277$$), $cmds$$20$$ += 
  D.$DvtPathUtils$$.lineTo($x$$312$$ + $ww$$113$$ + $r$$67$$, -$r$$67$$ + $y$$277$$), $cmds$$20$$ += D.$DvtPathUtils$$.lineTo($x$$312$$ + $ww$$113$$ + $r$$67$$, $y$$277$$ + $hh$$94$$)) : ($cmds$$20$$ += D.$DvtPathUtils$$.lineTo($x$$312$$ - $r$$67$$, -$r$$67$$ + $y$$277$$), $cmds$$20$$ += D.$DvtPathUtils$$.lineTo($x$$312$$ + $ww$$113$$, -$r$$67$$ + $y$$277$$), $x$$312$$ += $ww$$113$$, $cmds$$20$$ += D.$DvtPathUtils$$.$quadTo$(D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$67$$ + $x$$312$$, -$r$$67$$ + 
  $y$$277$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$67$$ + $x$$312$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$67$$ + $y$$277$$) + D.$DvtPathUtils$$.$quadTo$($r$$67$$ + $x$$312$$, -D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$67$$ + $y$$277$$, $r$$67$$ + $x$$312$$, $y$$277$$) + D.$DvtPathUtils$$.lineTo($x$$312$$ + $r$$67$$, $y$$277$$ + $hh$$94$$));
  $cmds$$20$$ += D.$DvtPathUtils$$.closePath();
  return new D.$DvtPath$$($context$$629$$, $cmds$$20$$)
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedShape$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewClosedShape$$($context$$630_mc$$1$$, $buttonHeight$$1_nh$$1$$, $styleMap$$59$$, $arPoints$$20_bR2L$$4_color$$82$$) {
  $buttonHeight$$1_nh$$1$$ || ($buttonHeight$$1_nh$$1$$ = 47);
  var $r$$68$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$59$$, "border-radius", 0)), $buttonWidth$$3$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$59$$, "openCloseButtonWidth", 0);
  $buttonHeight$$1_nh$$1$$ = window.Math.max($buttonHeight$$1_nh$$1$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$59$$, "buttonHeight", $buttonHeight$$1_nh$$1$$));
  $arPoints$$20_bR2L$$4_color$$82$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$3$$, $buttonHeight$$1_nh$$1$$, $r$$68$$, $arPoints$$20_bR2L$$4_color$$82$$);
  $arPoints$$20_bR2L$$4_color$$82$$ = $arPoints$$20_bR2L$$4_color$$82$$.concat("Z");
  $context$$630_mc$$1$$ = new D.$DvtPath$$($context$$630_mc$$1$$, $arPoints$$20_bR2L$$4_color$$82$$, "cls_shape");
  ($arPoints$$20_bR2L$$4_color$$82$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$59$$, "tab-color-inactive", D.$JSCompiler_alias_NULL$$)) || ($arPoints$$20_bR2L$$4_color$$82$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$59$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $context$$630_mc$$1$$.$setSolidFill$($arPoints$$20_bR2L$$4_color$$82$$);
  return $context$$630_mc$$1$$
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewClosedFrame$$($context$$631_mc$$2$$, $buttonHeight$$2_nh$$2$$, $styleMap$$60$$, $arPoints$$21_bR2L$$5$$) {
  $buttonHeight$$2_nh$$2$$ || ($buttonHeight$$2_nh$$2$$ = 47);
  var $r$$69$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$60$$, "border-radius", 0)), $buttonWidth$$4$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$60$$, "openCloseButtonWidth", 0);
  $buttonHeight$$2_nh$$2$$ = window.Math.max($buttonHeight$$2_nh$$2$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$60$$, "buttonHeight", $buttonHeight$$2_nh$$2$$));
  $arPoints$$21_bR2L$$5$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$4$$, $buttonHeight$$2_nh$$2$$, $r$$69$$, $arPoints$$21_bR2L$$5$$);
  $arPoints$$21_bR2L$$5$$ = $arPoints$$21_bR2L$$5$$.concat("Z");
  $context$$631_mc$$2$$ = new D.$DvtPath$$($context$$631_mc$$2$$, $arPoints$$21_bR2L$$5$$, "cls_shape");
  $context$$631_mc$$2$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$60$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $context$$631_mc$$2$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $context$$631_mc$$2$$
};
D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomShape$ = function $$DvtControlPanelLAFUtils$$$$renderEmptyZoomShape$$($context$$632_mc$$3$$, $nh$$3$$, $styleMap$$61$$, $openSide$$, $openSideSize$$) {
  $nh$$3$$ || ($nh$$3$$ = 137);
  var $r$$70$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$61$$, "border-radius", 0)), $cpWidth$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$61$$, "tabSize", 0), $ww$$114$$ = $cpWidth$$ - 2 * $r$$70$$, $hh$$95$$ = $nh$$3$$ + 7 - 2 * $r$$70$$;
  $context$$632_mc$$3$$ = $openSide$$ && $openSideSize$$ ? D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$632_mc$$3$$, $r$$70$$, $cpWidth$$, $nh$$3$$, $openSide$$, $openSideSize$$) : D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$632_mc$$3$$, $r$$70$$, $ww$$114$$, $hh$$95$$);
  $context$$632_mc$$3$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$61$$, "background-color", D.$JSCompiler_alias_NULL$$));
  return $context$$632_mc$$3$$
};
D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomFrame$ = function $$DvtControlPanelLAFUtils$$$$renderEmptyZoomFrame$$($context$$633$$, $nh$$4$$, $roundBottomRight$$, $styleMap$$62$$, $openSide$$1$$, $openSideSize$$1$$) {
  $nh$$4$$ || ($nh$$4$$ = 137);
  $roundBottomRight$$ || ($roundBottomRight$$ = D.$JSCompiler_alias_TRUE$$);
  var $r$$71$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$62$$, "border-radius", 0)), $cpWidth$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$62$$, "tabSize", 0), $ww$$115$$ = $cpWidth$$1$$ - 2 * $r$$71$$, $hh$$96$$ = $nh$$4$$ + 7 - 2 * $r$$71$$, $mc$$4$$ = D.$JSCompiler_alias_NULL$$, $mc$$4$$ = $openSide$$1$$ && $openSideSize$$1$$ ? D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$633$$, $r$$71$$, $cpWidth$$1$$, $nh$$4$$, $openSide$$1$$, $openSideSize$$1$$) : 
  D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$633$$, $r$$71$$, $ww$$115$$, $hh$$96$$, $roundBottomRight$$);
  $mc$$4$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$62$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $mc$$4$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $mc$$4$$
};
D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$ = function $$DvtControlPanelLAFUtils$$$$makeZoomShapeHelper$$($context$$634$$, $r$$72$$, $ww$$116$$, $hh$$97$$, $roundBottomRight$$1$$) {
  $roundBottomRight$$1$$ || ($roundBottomRight$$1$$ = D.$JSCompiler_alias_TRUE$$);
  var $x$$313$$ = $ww$$116$$ + $r$$72$$, $y$$278$$ = $hh$$97$$, $cmds$$21$$ = D.$DvtPathUtils$$.moveTo($x$$313$$ + $r$$72$$, $y$$278$$), $cmds$$21$$ = $roundBottomRight$$1$$ ? $cmds$$21$$ + (D.$DvtPathUtils$$.$quadTo$($r$$72$$ + $x$$313$$, D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$72$$ + $y$$278$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$72$$ + $x$$313$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$72$$ + $y$$278$$) + D.$DvtPathUtils$$.$quadTo$(D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * 
  $r$$72$$ + $x$$313$$, $r$$72$$ + $y$$278$$, $x$$313$$, $r$$72$$ + $y$$278$$) + D.$DvtPathUtils$$.lineTo($x$$313$$, $r$$72$$ + $y$$278$$)) : $cmds$$21$$ + D.$DvtPathUtils$$.lineTo($x$$313$$ + $r$$72$$, $y$$278$$ + $r$$72$$), $cmds$$21$$ = $cmds$$21$$ + D.$DvtPathUtils$$.lineTo($x$$313$$ - $ww$$116$$, $r$$72$$ + $y$$278$$), $x$$313$$ = $x$$313$$ - $ww$$116$$, $cmds$$21$$ = $cmds$$21$$ + (D.$DvtPathUtils$$.$quadTo$(-D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$72$$ + $x$$313$$, $r$$72$$ + $y$$278$$, 
  -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$72$$ + $x$$313$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$72$$ + $y$$278$$) + D.$DvtPathUtils$$.$quadTo$(-$r$$72$$ + $x$$313$$, D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$72$$ + $y$$278$$, -$r$$72$$ + $x$$313$$, $y$$278$$) + D.$DvtPathUtils$$.lineTo(-$r$$72$$ + $x$$313$$, $y$$278$$) + D.$DvtPathUtils$$.lineTo(-$r$$72$$ + $x$$313$$, $y$$278$$ - $hh$$97$$)), $y$$278$$ = $y$$278$$ - $hh$$97$$, $cmds$$21$$ = $cmds$$21$$ + (D.$DvtPathUtils$$.lineTo($x$$313$$ + 
  $ww$$116$$ + $r$$72$$, $y$$278$$) + D.$DvtPathUtils$$.lineTo($x$$313$$ + $ww$$116$$ + $r$$72$$, $y$$278$$ + $hh$$97$$) + D.$DvtPathUtils$$.closePath());
  return new D.$DvtPath$$($context$$634$$, $cmds$$21$$)
};
D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$ = function $$DvtControlPanelLAFUtils$$$$makeZoomShapeHelperOpenSide$$($context$$635$$, $arPoints$$22_r$$73$$, $width$$154$$, $height$$129$$, $openSide$$2$$, $openSideSize$$2$$) {
  $arPoints$$22_r$$73$$ = D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$($width$$154$$, $height$$129$$, $arPoints$$22_r$$73$$, $openSide$$2$$, $openSideSize$$2$$);
  return new D.$DvtPath$$($context$$635$$, $arPoints$$22_r$$73$$)
};
D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$ = function $$DvtControlPanelLAFUtils$$$$makeViewOpenShapeHelperOpenSide$$($context$$636$$, $arPoints$$23_r$$74$$, $width$$155$$, $height$$130$$, $openSide$$3$$, $openSideSize$$3$$) {
  $arPoints$$23_r$$74$$ = D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$($width$$155$$, $height$$130$$, $arPoints$$23_r$$74$$, $openSide$$3$$, $openSideSize$$3$$);
  return new D.$DvtPath$$($context$$636$$, $arPoints$$23_r$$74$$)
};
D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$ = function $$DvtControlPanelLAFUtils$$$$GetShapePathCommands$$($width$$156$$, $height$$131$$, $r$$75$$, $openSide$$4$$, $openSideSize$$4$$) {
  var $arPoints$$24$$, $bidi$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)();
  $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ && !$bidi$$4$$ && ($arPoints$$24$$ = ["M", $width$$156$$, 0, "L", $width$$156$$, $height$$131$$ - $r$$75$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, $width$$156$$ - $r$$75$$, $height$$131$$, "L", 0, $height$$131$$, "L", 0, 0]);
  $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ && $bidi$$4$$ ? $arPoints$$24$$ = ["M", $width$$156$$, 0, "L", $width$$156$$, $height$$131$$, "L", $r$$75$$, $height$$131$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, 0, $height$$131$$ - $r$$75$$, "L", 0, 0] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ && !$bidi$$4$$ ? $arPoints$$24$$ = ["M", $width$$156$$, $openSideSize$$4$$, "L", $width$$156$$, $height$$131$$ - $r$$75$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, $width$$156$$ - $r$$75$$, 
  $height$$131$$, "L", 0, $height$$131$$, "L", 0, 0, "L", $width$$156$$, 0] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ && $bidi$$4$$ ? $arPoints$$24$$ = ["M", 0, 0, "L", $width$$156$$, 0, "L", $width$$156$$, $height$$131$$, "L", $r$$75$$, $height$$131$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, 0, $height$$131$$ - $r$$75$$, "L", 0, $openSideSize$$4$$] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ && !$bidi$$4$$ ? $arPoints$$24$$ = ["M", 0, 0, "L", $width$$156$$ - $r$$75$$, 
  0, "A", $r$$75$$, $r$$75$$, 0, 0, 1, $width$$156$$, $r$$75$$, "L", $width$$156$$, $height$$131$$ - $r$$75$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, $width$$156$$ - $r$$75$$, $height$$131$$, "L", 0, $height$$131$$] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ && $bidi$$4$$ ? $arPoints$$24$$ = ["M", $width$$156$$, $height$$131$$, "L", $r$$75$$, $height$$131$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, 0, $height$$131$$ - $r$$75$$, "L", 0, $r$$75$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, $r$$75$$, 0, 
  "L", $width$$156$$, 0] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ && !$bidi$$4$$ ? $arPoints$$24$$ = ["M", 0, $height$$131$$, "L", 0, 0, "L", $width$$156$$ - $r$$75$$, 0, "A", $r$$75$$, $r$$75$$, 0, 0, 1, $width$$156$$, $r$$75$$, "L", $width$$156$$, $height$$131$$ - $r$$75$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, $width$$156$$ - $r$$75$$, $height$$131$$, "L", $openSideSize$$4$$, $height$$131$$] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ && $bidi$$4$$ && ($arPoints$$24$$ = 
  ["M", $width$$156$$, $height$$131$$, "L", $width$$156$$, 0, "L", $r$$75$$, 0, "A", $r$$75$$, $r$$75$$, 0, 0, 0, 0, $r$$75$$, "L", 0, $height$$131$$ - $r$$75$$, "A", $r$$75$$, $r$$75$$, 0, 0, 0, $r$$75$$, $height$$131$$, "L", $width$$156$$ - $openSideSize$$4$$, $height$$131$$]);
  return $arPoints$$24$$
};
D.$DvtPanZoomComponent$$ = function $$DvtPanZoomComponent$$$($context$$308$$, $callback$$83$$, $callbackObj$$56$$) {
  this.Init($context$$308$$, $callback$$83$$, $callbackObj$$56$$)
};
(0,D.$goog$exportSymbol$$)("DvtPanZoomComponent", D.$DvtPanZoomComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomComponent$$, D.$DvtBaseComponent$$, "DvtPanZoomComponent");
D.$DvtPanZoomComponent$$.prototype.Init = function $$DvtPanZoomComponent$$$$Init$($context$$309$$, $callback$$84$$, $callbackObj$$57$$) {
  D.$DvtPanZoomComponent$$.$superclass$.Init.call(this, $context$$309$$, $callback$$84$$, $callbackObj$$57$$);
  this.$_controlPanelBehavior$ = "initCollapsed";
  this.$_displayedControls$ = 16777215;
  this.$_bSupportsVectorEffects$ = !(0,D.$DvtAgent$isPlatformIE$$)() && !((0,D.$DvtAgent$isPlatformGecko$$)() && 17 >= (0,D.$DvtAgent$getVersion$$)());
  this.$_subcomponentStyles$ = this.$_resourcesMap$ = D.$JSCompiler_alias_NULL$$;
  this.$_skinName$ = ""
};
D.$DvtPanZoomComponent$$.prototype.$getPanZoomCanvas$ = (0,D.$JSCompiler_get$$)("$_panZoomCanvas$");
D.$DvtPanZoomComponent$$.prototype.getPanZoomCanvas = D.$DvtPanZoomComponent$$.prototype.$getPanZoomCanvas$;
D.$JSCompiler_StaticMethods_getResourcesMap$$ = function $$JSCompiler_StaticMethods_getResourcesMap$$$($JSCompiler_StaticMethods_getResourcesMap$self$$) {
  $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ || ($JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ = $JSCompiler_StaticMethods_getResourcesMap$self$$.$Options$ ? $JSCompiler_StaticMethods_getResourcesMap$self$$.$Options$._resources : {});
  return $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$
};
D.$DvtPanZoomComponent$$.prototype.$getBundle$ = function $$DvtPanZoomComponent$$$$$getBundle$$() {
  this.$_bundle$ || (this.$_bundle$ = new D.$DvtSubcomponentBundle$$);
  return this.$_bundle$
};
D.$DvtPanZoomComponent$$.prototype.$getSubcomponentStyles$ = (0,D.$JSCompiler_get$$)("$_subcomponentStyles$");
D.$JSCompiler_StaticMethods_parseComponentJson$$ = function $$JSCompiler_StaticMethods_parseComponentJson$$$($JSCompiler_StaticMethods_parseComponentJson$self$$, $jsonObj$$67$$) {
  var $cpStyleMap_endGradientColor_styleMap$$inline_5462$$ = (new D.$DvtCSSStyle$$($jsonObj$$67$$.inlineStyle)).$getStyle$("background-color");
  $cpStyleMap_endGradientColor_styleMap$$inline_5462$$ && ($JSCompiler_StaticMethods_parseComponentJson$self$$.$_endGradientColor$ = $cpStyleMap_endGradientColor_styleMap$$inline_5462$$);
  var $cpStyleMap_endGradientColor_styleMap$$inline_5462$$ = {}, $skinName$$ = $jsonObj$$67$$.skin;
  $skinName$$ && ($JSCompiler_StaticMethods_parseComponentJson$self$$.$_skinName$ = $skinName$$, $cpStyleMap_endGradientColor_styleMap$$inline_5462$$.skin = $skinName$$);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_5462$$, "background-color", $jsonObj$$67$$.cpBackgroundColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_5462$$, "border-color", $jsonObj$$67$$.cpBorderColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_5462$$, "border-radius", $jsonObj$$67$$.cpBorderRadius);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_5462$$, "box-shadow", $jsonObj$$67$$.cpBoxShadow);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_5462$$, "tab-color-inactive", $jsonObj$$67$$.tabBgColorInactive);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_5462$$, "tab-border-color-inactive", $jsonObj$$67$$.tabBorderColorInactive);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_5462$$, "scrollbarBackground", $jsonObj$$67$$.scrollbarBg);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_5462$$, "scrollbarBorderColor", $jsonObj$$67$$.scrollbarBorderColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_5462$$, "scrollbarHandleColor", $jsonObj$$67$$.scrollbarHandleColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_5462$$, "scrollbarHandleActiveColor", $jsonObj$$67$$.scrollbarHandleActiveColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_5462$$, "scrollbarHandleHoverColor", $jsonObj$$67$$.scrollbarHandleHoverColor);
  $cpStyleMap_endGradientColor_styleMap$$inline_5462$$ = D.$DvtControlPanelDefaults$$.$calcOptions$($cpStyleMap_endGradientColor_styleMap$$inline_5462$$);
  $JSCompiler_StaticMethods_parseComponentJson$self$$.$_subcomponentStyles$ = $cpStyleMap_endGradientColor_styleMap$$inline_5462$$
};
D.$JSCompiler_StaticMethods_parseComponentAttrs$$ = function $$JSCompiler_StaticMethods_parseComponentAttrs$$$($JSCompiler_StaticMethods_parseComponentAttrs$self$$, $xmlNode$$89$$) {
  var $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$ = (new D.$DvtCSSStyle$$($xmlNode$$89$$.$getAttr$("inlineStyle"))).$getStyle$("background-color");
  $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$ && ($JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_endGradientColor$ = $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$);
  var $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$ = {}, $skinName$$1$$ = $xmlNode$$89$$.$getAttr$("skin");
  $skinName$$1$$ && ($JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_skinName$ = $skinName$$1$$, $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$.skin = $skinName$$1$$);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$, "background-color", $xmlNode$$89$$.$getAttr$("cpBackgroundColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$, "border-color", $xmlNode$$89$$.$getAttr$("cpBorderColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$, "border-radius", $xmlNode$$89$$.$getAttr$("cpBorderRadius"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$, "box-shadow", $xmlNode$$89$$.$getAttr$("cpBoxShadow"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$, "tab-color-inactive", $xmlNode$$89$$.$getAttr$("tabBgColorInactive"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$, "tab-border-color-inactive", $xmlNode$$89$$.$getAttr$("tabBorderColorInactive"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$, "scrollbarBackground", $xmlNode$$89$$.$getAttr$("scrollbarBg"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$, "scrollbarBorderColor", $xmlNode$$89$$.$getAttr$("scrollbarBorderColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$, "scrollbarHandleColor", $xmlNode$$89$$.$getAttr$("scrollbarHandleColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$, "scrollbarHandleActiveColor", $xmlNode$$89$$.$getAttr$("scrollbarHandleActiveColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$, "scrollbarHandleHoverColor", $xmlNode$$89$$.$getAttr$("scrollbarHandleHoverColor"));
  $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$ = D.$DvtControlPanelDefaults$$.$calcOptions$($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$);
  $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_subcomponentStyles$ = $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_5471$$
};
D.$DvtPanZoomComponent$$.prototype.$render$ = function $$DvtPanZoomComponent$$$$$render$$($options$$228$$, $width$$116$$, $height$$96$$) {
  this.$_width$ = $width$$116$$;
  this.$_height$ = $height$$96$$;
  this.$_isResize$ = !$options$$228$$;
  this.$PreRender$();
  if(!this.$_isResize$) {
    if("object" == typeof $options$$228$$) {
      this.$SetOptions$($options$$228$$)
    }else {
      if(!($options$$228$$ == D.$JSCompiler_alias_NULL$$ || 0 == $options$$228$$.length)) {
        var $parser$$inline_5475_rootXmlNode$$inline_5476$$ = new D.$DvtXmlParser$$;
        if($parser$$inline_5475_rootXmlNode$$inline_5476$$ && ($parser$$inline_5475_rootXmlNode$$inline_5476$$ = $parser$$inline_5475_rootXmlNode$$inline_5476$$.parse($options$$228$$))) {
          "r" === $parser$$inline_5475_rootXmlNode$$inline_5476$$.getName() && ($parser$$inline_5475_rootXmlNode$$inline_5476$$ = $parser$$inline_5475_rootXmlNode$$inline_5476$$.getFirstChild()), $parser$$inline_5475_rootXmlNode$$inline_5476$$ && this.$GetXmlDomParser$().$loadXmlInitial$($parser$$inline_5475_rootXmlNode$$inline_5476$$)
        }
      }
    }
  }
  this.$Render$($options$$228$$, $width$$116$$, $height$$96$$)
};
D.$DvtPanZoomComponent$$.prototype.render = D.$DvtPanZoomComponent$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetControlPanel$ = function $$JSCompiler_prototypeAlias$$$$GetControlPanel$$() {
  var $cpBehavior$$2$$ = this.$GetControlPanelBehavior$();
  return"hidden" != $cpBehavior$$2$$ ? new D.$DvtControlPanel$$(this.$_context$, this, "initCollapsed" == $cpBehavior$$2$$ ? 1 : 2) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$GetControlPanelBehavior$ = (0,D.$JSCompiler_get$$)("$_controlPanelBehavior$");
D.$JSCompiler_prototypeAlias$$.$GetXmlDomParser$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$PreRender$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$() {
  if(this.$_endGradientColor$ || !this.$_skinName$) {
    this.$_backgroundPane$ || (this.$_backgroundPane$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 0), this.$addChild$(this.$_backgroundPane$)), this.$_backgroundPane$.$setWidth$(this.$_width$), this.$_backgroundPane$.$setHeight$(this.$_height$), this.$_backgroundPane$.$setFill$((0,D.$JSCompiler_StaticMethods__getBackgroundGradient$$)(this, this.$_endGradientColor$))
  }
  if(this.$_isResize$) {
    this.$_panZoomCanvas$.$setSize$(this.$_width$, this.$_height$)
  }else {
    this.$_panZoomCanvas$ && (this.removeChild(this.$_panZoomCanvas$), this.$_panZoomCanvas$ = D.$JSCompiler_alias_NULL$$);
    this.$_panZoomCanvas$ = new D.$DvtPanZoomCanvas$$(this.$_context$, this.$_width$, this.$_height$, this);
    this.$_panZoomCanvas$.$addEvtListener$("dvtPan", this.$HandlePanEvent$, D.$JSCompiler_alias_FALSE$$, this);
    this.$_panZoomCanvas$.$addEvtListener$("dvtZoom", this.$HandleZoomEvent$, D.$JSCompiler_alias_FALSE$$, this);
    this.$addChild$(this.$_panZoomCanvas$);
    var $clipPath$$6_controlPanel$$4$$ = this.$GetControlPanel$();
    $clipPath$$6_controlPanel$$4$$ && ($clipPath$$6_controlPanel$$4$$.$addEvtListener$("dvtPZCPExpand", this.$_handleControlPanelEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_panZoomCanvas$.$_controlPanel$ = $clipPath$$6_controlPanel$$4$$);
    this.$_panZoomCanvas$.$renderComponent$()
  }
  $clipPath$$6_controlPanel$$4$$ = new D.$DvtClipPath$$("comp");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$6_controlPanel$$4$$, this.$getTranslateX$(), this.$getTranslateY$(), this.$_width$, this.$_height$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this, $clipPath$$6_controlPanel$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$229$$) {
  this.$Options$ = this.$Defaults$ ? this.$Defaults$.$calcOptions$($options$$229$$) : $options$$229$$
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_StaticMethods__getBackgroundGradient$$ = function $$JSCompiler_StaticMethods__getBackgroundGradient$$$($JSCompiler_StaticMethods__getBackgroundGradient$self$$, $color$$53$$) {
  var $arColors$$19_newColor$$1_rrRatio$$2$$, $arAlphas$$16_bgAlpha$$ = 1;
  if($color$$53$$ && "#7396C8" != $color$$53$$) {
    $arAlphas$$16_bgAlpha$$ = D.$DvtColorUtils$$.$getAlpha$($color$$53$$);
    $arColors$$19_newColor$$1_rrRatio$$2$$ = (D.$DvtColorUtils$$.$getRed$("#AECDEA") - D.$DvtColorUtils$$.$getRed$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getRed$("#7396C8"));
    var $arStops$$13_bgRgb_ggRatio$$2$$ = (D.$DvtColorUtils$$.$getGreen$("#AECDEA") - D.$DvtColorUtils$$.$getGreen$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getGreen$("#7396C8")), $bbRatio$$2_gw$$ = (D.$DvtColorUtils$$.$getBlue$("#AECDEA") - D.$DvtColorUtils$$.$getBlue$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getBlue$("#7396C8")), $gh_rr$$2$$ = D.$DvtColorUtils$$.$getRed$($color$$53$$), $gg$$2_gx_ww$$78$$ = D.$DvtColorUtils$$.$getGreen$($color$$53$$), $bb$$4_cx$$22$$ = D.$DvtColorUtils$$.$getBlue$($color$$53$$);
    $arColors$$19_newColor$$1_rrRatio$$2$$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($gh_rr$$2$$ + $arColors$$19_newColor$$1_rrRatio$$2$$ * (255 - $gh_rr$$2$$)), window.Math.round($gg$$2_gx_ww$$78$$ + $arStops$$13_bgRgb_ggRatio$$2$$ * (255 - $gg$$2_gx_ww$$78$$)), window.Math.round($bb$$4_cx$$22$$ + $bbRatio$$2_gw$$ * (255 - $bb$$4_cx$$22$$)));
    $arStops$$13_bgRgb_ggRatio$$2$$ = D.$DvtColorUtils$$.$getRGB$($color$$53$$);
    $arColors$$19_newColor$$1_rrRatio$$2$$ = ["#FFFFFF", "#FFFFFF", $arColors$$19_newColor$$1_rrRatio$$2$$, $arStops$$13_bgRgb_ggRatio$$2$$]
  }else {
    $arColors$$19_newColor$$1_rrRatio$$2$$ = ["#FFFFFF", "#FFFFFF", "#AECDEA", "#7396C8"]
  }
  var $arAlphas$$16_bgAlpha$$ = [$arAlphas$$16_bgAlpha$$, $arAlphas$$16_bgAlpha$$, $arAlphas$$16_bgAlpha$$, $arAlphas$$16_bgAlpha$$], $arStops$$13_bgRgb_ggRatio$$2$$ = [0, 45 / 255, 190 / 255, 1], $gg$$2_gx_ww$$78$$ = $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$_width$, $bbRatio$$2_gw$$ = 1.7 * 1.7 * $gg$$2_gx_ww$$78$$, $gh_rr$$2$$ = 1.7 * $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$_height$, $gg$$2_gx_ww$$78$$ = 0 + ($gg$$2_gx_ww$$78$$ - $bbRatio$$2_gw$$) / 2, $bb$$4_cx$$22$$ = 
  $gg$$2_gx_ww$$78$$ + $bbRatio$$2_gw$$ / 2, $cy$$22$$ = -35 + $gh_rr$$2$$ / 2, $r$$37$$ = 1.5 * window.Math.min($bbRatio$$2_gw$$ / 2, $gh_rr$$2$$ / 2);
  return new D.$DvtRadialGradientFill$$($arColors$$19_newColor$$1_rrRatio$$2$$, $arAlphas$$16_bgAlpha$$, $arStops$$13_bgRgb_ggRatio$$2$$, $bb$$4_cx$$22$$, $cy$$22$$, $r$$37$$, [$gg$$2_gx_ww$$78$$, -35, $bbRatio$$2_gw$$, $gh_rr$$2$$])
};
D.$DvtPanZoomComponent$$.prototype.$_handleControlPanelEvent$ = function $$DvtPanZoomComponent$$$$$_handleControlPanelEvent$$($event$$392$$) {
  var $spEvent$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$, "controlPanelBehavior", "show" == $event$$392$$.$getSubType$() ? "initExpanded" : "initCollapsed");
  this.$__dispatchEvent$($spEvent$$)
};
D.$DvtPanZoomCanvas$$ = function $$DvtPanZoomCanvas$$$($context$$306$$, $ww$$74$$, $hh$$60$$, $view$$64$$) {
  this.Init($context$$306$$, $ww$$74$$, $hh$$60$$, $view$$64$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvas$$, D.$DvtContainer$$, "DvtPanZoomCanvas");
D.$DvtPanZoomCanvas$$.prototype.Init = function $$DvtPanZoomCanvas$$$$Init$($context$$307$$, $ww$$75$$, $hh$$61$$, $view$$65$$) {
  D.$DvtPanZoomCanvas$$.$superclass$.Init.call(this, $context$$307$$);
  this.$_view$ = $view$$65$$;
  this.$_ww$ = $ww$$75$$;
  this.$_hh$ = $hh$$61$$;
  this.$_my$ = this.$_mx$ = this.$_py$ = this.$_px$ = 0;
  this.$_maxPanY$ = this.$_minPanY$ = this.$_maxPanX$ = this.$_minPanX$ = D.$JSCompiler_alias_NULL$$;
  this.$_minZoom$ = 0.1;
  this.$_maxZoom$ = 1;
  this.$_panIncrement$ = 15;
  this.$_zoomIncrement$ = 0.05;
  this.$_bTiltPanningEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomToFitPadding$ = 20;
  this.$_controlPanel$ = D.$JSCompiler_alias_NULL$$;
  this.$_bZoomToFitEnabled$ = this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
  this.$_backgroundPane$ = new D.$DvtRect$$(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
  this.$addChild$(this.$_backgroundPane$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_backgroundPane$);
  this.$_contentPane$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$(this.$_contentPane$);
  this.$_contentPane$.$setMatrix$(new D.$DvtMatrix$$);
  this.$_animationDuration$ = 0.5;
  this.$_eventManager$ = new D.$DvtPanZoomCanvasEventManager$$($context$$307$$, this.$FireListener$, this);
  this.$_eventManager$.$addListeners$(this);
  this.$_clipIdSuffix$ = 1;
  (0,D.$JSCompiler_StaticMethods_SetClipRect$$)(this, $ww$$75$$, $hh$$61$$);
  this.$_bElasticConstraints$ = D.$JSCompiler_alias_FALSE$$;
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtPanZoomCanvas$$.prototype.$setSize$ = function $$DvtPanZoomCanvas$$$$$setSize$$($ww$$76$$, $hh$$62$$, $bAdjustSizeOnly$$) {
  this.$_ww$ = $ww$$76$$;
  this.$_hh$ = $hh$$62$$;
  $bAdjustSizeOnly$$ || (this.$_backgroundPane$.$setWidth$($ww$$76$$), this.$_backgroundPane$.$setHeight$($hh$$62$$), this.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), (0,D.$JSCompiler_StaticMethods_SetClipRect$$)(this, $ww$$76$$, $hh$$62$$))
};
D.$DvtPanZoomCanvas$$.prototype.$getSize$ = function $$DvtPanZoomCanvas$$$$$getSize$$() {
  return new D.$DvtDimension$$(this.$_ww$, this.$_hh$)
};
D.$JSCompiler_StaticMethods_SetClipRect$$ = function $$JSCompiler_StaticMethods_SetClipRect$$$($JSCompiler_StaticMethods_SetClipRect$self$$, $ww$$77$$, $hh$$63$$) {
  var $clipPath$$5$$ = new D.$DvtClipPath$$("pzc");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$5$$, $JSCompiler_StaticMethods_SetClipRect$self$$.$getTranslateX$(), $JSCompiler_StaticMethods_SetClipRect$self$$.$getTranslateY$(), $ww$$77$$, $hh$$63$$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_SetClipRect$self$$, $clipPath$$5$$)
};
D.$JSCompiler_StaticMethods_getContentPane$$ = function $$JSCompiler_StaticMethods_getContentPane$$$($JSCompiler_StaticMethods_getContentPane$self$$) {
  return $JSCompiler_StaticMethods_getContentPane$self$$.$_contentPane$
};
D.$JSCompiler_StaticMethods_getContentPaneMatrix$$ = function $$JSCompiler_StaticMethods_getContentPaneMatrix$$$($JSCompiler_StaticMethods_getContentPaneMatrix$self$$, $animator$$107$$) {
  if($animator$$107$$) {
    var $mat$$21$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$107$$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$);
    if($mat$$21$$) {
      return $mat$$21$$
    }
  }
  return $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$()
};
D.$DvtPanZoomCanvas$$.prototype.$getZoom$ = function $$DvtPanZoomCanvas$$$$$getZoom$$($animator$$108$$) {
  return(0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$108$$).$_a$
};
(0,D.$goog$exportSymbol$$)("DvtPanZoomCanvas.prototype.getZoom", D.$DvtPanZoomCanvas$$.prototype.$getZoom$);
D.$DvtPanZoomCanvas$$.prototype.$panBy$ = function $$DvtPanZoomCanvas$$$$$panBy$$($dx$$17_mat$$22$$, $deltaX$$14_dy$$17_fireStartEventFunc$$, $animator$$111$$) {
  if(this.$_bPanningEnabled$) {
    var $oldX$$2$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$111$$).$_tx$, $oldY$$2$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$111$$).$_ty$, $newX$$6$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $oldX$$2$$ + $dx$$17_mat$$22$$), $newY$$7$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $oldY$$2$$ + $deltaX$$14_dy$$17_fireStartEventFunc$$);
    $deltaX$$14_dy$$17_fireStartEventFunc$$ = $newX$$6$$ - $oldX$$2$$;
    var $deltaY$$13_fireEndEventFunc$$ = $newY$$7$$ - $oldY$$2$$;
    $dx$$17_mat$$22$$ = D.$JSCompiler_alias_NULL$$;
    $animator$$111$$ && ($dx$$17_mat$$22$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$111$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($dx$$17_mat$$22$$ = $dx$$17_mat$$22$$.clone());
    $dx$$17_mat$$22$$ || ($dx$$17_mat$$22$$ = this.$_contentPane$.$getMatrix$().clone());
    $dx$$17_mat$$22$$.translate($deltaX$$14_dy$$17_fireStartEventFunc$$, $deltaY$$13_fireEndEventFunc$$);
    var $thisRef$$27$$ = this;
    $deltaX$$14_dy$$17_fireStartEventFunc$$ = function $$deltaX$$14_dy$$17_fireStartEventFunc$$$() {
      var $dx$$17_mat$$22$$ = new D.$DvtPanEvent$$("panning", $newX$$6$$, $newY$$7$$, $oldX$$2$$, $oldY$$2$$, $animator$$111$$);
      $thisRef$$27$$.$FireListener$($dx$$17_mat$$22$$)
    };
    $deltaY$$13_fireEndEventFunc$$ = function $$deltaY$$13_fireEndEventFunc$$$() {
      var $dx$$17_mat$$22$$ = new D.$DvtPanEvent$$("panned", $newX$$6$$, $newY$$7$$, $oldX$$2$$, $oldY$$2$$, $animator$$111$$);
      $thisRef$$27$$.$FireListener$($dx$$17_mat$$22$$)
    };
    $animator$$111$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$111$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $dx$$17_mat$$22$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$111$$, $deltaX$$14_dy$$17_fireStartEventFunc$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$111$$, $deltaY$$13_fireEndEventFunc$$)) : ($deltaX$$14_dy$$17_fireStartEventFunc$$(), this.$_contentPane$.$setMatrix$($dx$$17_mat$$22$$), $deltaY$$13_fireEndEventFunc$$())
  }
};
D.$JSCompiler_StaticMethods_panTo$$ = function $$JSCompiler_StaticMethods_panTo$$$($JSCompiler_StaticMethods_panTo$self$$, $dx$$18_xx$$17$$, $dy$$18_yy$$18$$, $animator$$112$$) {
  $JSCompiler_StaticMethods_panTo$self$$.$_bPanningEnabled$ && ($dx$$18_xx$$17$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_panTo$self$$, $animator$$112$$).$_tx$, $dy$$18_yy$$18$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_panTo$self$$, $animator$$112$$).$_ty$, $JSCompiler_StaticMethods_panTo$self$$.$panBy$($dx$$18_xx$$17$$, $dy$$18_yy$$18$$, $animator$$112$$))
};
D.$DvtPanZoomCanvas$$.prototype.$zoomBy$ = function $$DvtPanZoomCanvas$$$$$zoomBy$$($currZoom$$inline_5413_dz$$5_mat$$23$$, $xx$$18$$, $yy$$19$$, $animator$$113$$) {
  if(this.$_bZoomingEnabled$) {
    !$xx$$18$$ && 0 !== $xx$$18$$ && ($xx$$18$$ = this.$_ww$ / 2);
    !$yy$$19$$ && 0 !== $yy$$19$$ && ($yy$$19$$ = this.$_hh$ / 2);
    var $oldZoom$$3$$ = this.$getZoom$($animator$$113$$), $newZoom$$2$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $oldZoom$$3$$ * $currZoom$$inline_5413_dz$$5_mat$$23$$);
    this.$_controlPanel$ && ($currZoom$$inline_5413_dz$$5_mat$$23$$ = this.$getZoom$(), $newZoom$$2$$ == this.$_minZoom$ && $newZoom$$2$$ == this.$_maxZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : $currZoom$$inline_5413_dz$$5_mat$$23$$ <= $newZoom$$2$$ && $newZoom$$2$$ == this.$_maxZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)) : $currZoom$$inline_5413_dz$$5_mat$$23$$ >= $newZoom$$2$$ && $newZoom$$2$$ == this.$_minZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)));
    if(window.Math.round(1E5 * $oldZoom$$3$$) != window.Math.round(1E5 * $newZoom$$2$$)) {
      var $deltaZoom_fireStartEventFunc$$1$$ = $newZoom$$2$$ / $oldZoom$$3$$;
      $currZoom$$inline_5413_dz$$5_mat$$23$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$113$$ && ($currZoom$$inline_5413_dz$$5_mat$$23$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$113$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($currZoom$$inline_5413_dz$$5_mat$$23$$ = $currZoom$$inline_5413_dz$$5_mat$$23$$.clone());
      $currZoom$$inline_5413_dz$$5_mat$$23$$ || ($currZoom$$inline_5413_dz$$5_mat$$23$$ = this.$_contentPane$.$getMatrix$().clone());
      $currZoom$$inline_5413_dz$$5_mat$$23$$.scale($deltaZoom_fireStartEventFunc$$1$$, $deltaZoom_fireStartEventFunc$$1$$, $xx$$18$$, $yy$$19$$);
      var $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_5413_dz$$5_mat$$23$$.$_tx$) - $currZoom$$inline_5413_dz$$5_mat$$23$$.$_tx$, $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_5413_dz$$5_mat$$23$$.$_ty$) - $currZoom$$inline_5413_dz$$5_mat$$23$$.$_ty$;
      (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "adjustPanConstraints", $newZoom$$2$$, $oldZoom$$3$$, $animator$$113$$, D.$JSCompiler_alias_NULL$$, $xx$$18$$, $yy$$19$$, $xDiff$$, $yDiff$$);
      $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_5413_dz$$5_mat$$23$$.$_tx$) - $currZoom$$inline_5413_dz$$5_mat$$23$$.$_tx$;
      $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_5413_dz$$5_mat$$23$$.$_ty$) - $currZoom$$inline_5413_dz$$5_mat$$23$$.$_ty$;
      $currZoom$$inline_5413_dz$$5_mat$$23$$.translate($xDiff$$, $yDiff$$);
      var $thisRef$$28$$ = this, $deltaZoom_fireStartEventFunc$$1$$ = function $$deltaZoom_fireStartEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$28$$, "zooming", $newZoom$$2$$, $oldZoom$$3$$, $animator$$113$$, D.$JSCompiler_alias_NULL$$, $xx$$18$$, $yy$$19$$, $xDiff$$, $yDiff$$)
      }, $fireEndEventFunc$$1$$ = function $$fireEndEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$28$$, "zoomed", $thisRef$$28$$.$getZoom$(), $oldZoom$$3$$, $animator$$113$$, D.$JSCompiler_alias_NULL$$, $xx$$18$$, $yy$$19$$, $xDiff$$, $yDiff$$)
      };
      $animator$$113$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$113$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $currZoom$$inline_5413_dz$$5_mat$$23$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$113$$, $deltaZoom_fireStartEventFunc$$1$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$113$$, $fireEndEventFunc$$1$$)) : ($deltaZoom_fireStartEventFunc$$1$$(), this.$_contentPane$.$setMatrix$($currZoom$$inline_5413_dz$$5_mat$$23$$), 
      $fireEndEventFunc$$1$$())
    }
  }
};
D.$JSCompiler_StaticMethods_zoomTo$$ = function $$JSCompiler_StaticMethods_zoomTo$$$($JSCompiler_StaticMethods_zoomTo$self$$, $dz$$6_zz$$, $xx$$19$$, $yy$$20$$, $animator$$114$$) {
  $JSCompiler_StaticMethods_zoomTo$self$$.$_bZoomingEnabled$ && ($dz$$6_zz$$ /= $JSCompiler_StaticMethods_zoomTo$self$$.$getZoom$($animator$$114$$), $JSCompiler_StaticMethods_zoomTo$self$$.$zoomBy$($dz$$6_zz$$, $xx$$19$$, $yy$$20$$, $animator$$114$$))
};
D.$DvtPanZoomCanvas$$.prototype.$center$ = function $$DvtPanZoomCanvas$$$$$center$$($animator$$115$$, $fitBounds$$6$$) {
  var $panningEnabled$$4$$ = this.$_bPanningEnabled$;
  this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
  var $bounds$$90_cyBounds$$ = $fitBounds$$6$$;
  $bounds$$90_cyBounds$$ || ($bounds$$90_cyBounds$$ = this.$_contentPane$.$getDimensions$());
  var $cxBounds$$ = ($bounds$$90_cyBounds$$.x + $bounds$$90_cyBounds$$.$w$ / 2) * this.$getZoom$(), $bounds$$90_cyBounds$$ = ($bounds$$90_cyBounds$$.y + $bounds$$90_cyBounds$$.$h$ / 2) * this.$getZoom$();
  (0,D.$JSCompiler_StaticMethods_panTo$$)(this, this.$_ww$ / 2 - $cxBounds$$, this.$_hh$ / 2 - $bounds$$90_cyBounds$$, $animator$$115$$);
  this.$_bPanningEnabled$ = $panningEnabled$$4$$
};
D.$DvtPanZoomCanvas$$.prototype.$zoomToFit$ = function $$DvtPanZoomCanvas$$$$$zoomToFit$$($animator$$116$$, $fitBounds$$7$$) {
  if(this.$_bZoomToFitEnabled$) {
    var $panningEnabled$$5$$ = this.$_bPanningEnabled$, $zoomingEnabled$$3$$ = this.$_bZoomingEnabled$;
    this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
    try {
      var $bounds$$91$$ = $fitBounds$$7$$ ? $fitBounds$$7$$ : this.$_contentPane$.$getDimensions$();
      if($bounds$$91$$ = (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomToFitCalcBounds", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$116$$, $bounds$$91$$).$_zoomToFitBounds$) {
        var $dz$$7$$ = window.Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $bounds$$91$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $bounds$$91$$.$h$), $dz$$7$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $dz$$7$$), $dx$$20$$ = this.$_ww$ / 2 - ($bounds$$91$$.x + $bounds$$91$$.$w$ / 2) * $dz$$7$$, $dy$$20$$ = this.$_hh$ / 2 - ($bounds$$91$$.y + $bounds$$91$$.$h$ / 2) * $dz$$7$$, $thisRef$$29$$ = this, $fireStartEventFunc$$2$$ = function $$fireStartEventFunc$$2$$$() {
          (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$29$$, "zoomToFitBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$116$$, $bounds$$91$$)
        }, $fireEndEventFunc$$2$$ = function $$fireEndEventFunc$$2$$$() {
          (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$29$$, "zoomToFitEnd", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$116$$, $bounds$$91$$)
        };
        $animator$$116$$ ? (0,D.$DvtPlayable$prependOnInit$$)($animator$$116$$, $fireStartEventFunc$$2$$) : $fireStartEventFunc$$2$$();
        (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this, $dz$$7$$, 0, 0, $animator$$116$$);
        (0,D.$JSCompiler_StaticMethods_panTo$$)(this, $dx$$20$$, $dy$$20$$, $animator$$116$$);
        $animator$$116$$ ? (0,D.$DvtPlayable$appendOnEnd$$)($animator$$116$$, $fireEndEventFunc$$2$$) : $fireEndEventFunc$$2$$()
      }
    }finally {
      this.$_bPanningEnabled$ = $panningEnabled$$5$$, this.$_bZoomingEnabled$ = $zoomingEnabled$$3$$
    }
  }
};
D.$DvtPanZoomCanvas$$.prototype.$getViewport$ = function $$DvtPanZoomCanvas$$$$$getViewport$$() {
  var $topLeftGlobal_topLeftLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(0, 0)), $bottomRightGlobal_bottomRightLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(this.$_ww$, this.$_hh$)), $topLeftGlobal_topLeftLocal$$ = this.$_contentPane$.$stageToLocal$($topLeftGlobal_topLeftLocal$$), $bottomRightGlobal_bottomRightLocal$$ = this.$_contentPane$.$stageToLocal$($bottomRightGlobal_bottomRightLocal$$);
  return new D.$DvtRectangle$$($topLeftGlobal_topLeftLocal$$.x, $topLeftGlobal_topLeftLocal$$.y, $bottomRightGlobal_bottomRightLocal$$.x - $topLeftGlobal_topLeftLocal$$.x, $bottomRightGlobal_bottomRightLocal$$.y - $topLeftGlobal_topLeftLocal$$.y)
};
D.$JSCompiler_StaticMethods_SetElasticConstraints$$ = function $$JSCompiler_StaticMethods_SetElasticConstraints$$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $bElastic$$3$$) {
  if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticConstraints$ = $bElastic$$3$$) {
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ && ($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$isRunning$() && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.stop(), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$)
  }else {
    var $currX$$5_panEvent$$inline_5440$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$6$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_ty$, $currZoom$$3$$ = $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$getZoom$();
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ = $currX$$5_panEvent$$inline_5440$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currX$$5_panEvent$$inline_5440$$) || $currY$$6$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currY$$6$$);
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ = $currZoom$$3$$ != (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currZoom$$3$$);
    if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ || $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$) {
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_context$, 0.4), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$setEasing$(D.$DvtEasing$cubicOut$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$zoomBy$(1, 0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_ww$, 
      0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_hh$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$panBy$(0, 0, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), (0,D.$DvtPlayable$appendOnEnd$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnimOnEnd$, 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && ($currX$$5_panEvent$$inline_5440$$ = new D.$DvtPanEvent$$("elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$FireListener$($currX$$5_panEvent$$inline_5440$$)), 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, "elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.play()
    }
  }
};
D.$DvtPanZoomCanvas$$.prototype.$_elasticConstraintsAnimOnEnd$ = function $$DvtPanZoomCanvas$$$$$_elasticConstraintsAnimOnEnd$$() {
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_bElasticPan$) {
    var $panEvent$$inline_5449$$ = new D.$DvtPanEvent$$("elasticAnimEnd", D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$);
    this.$FireListener$($panEvent$$inline_5449$$)
  }
  this.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "elasticAnimEnd")
};
D.$JSCompiler_StaticMethods_ConstrainPanX$$ = function $$JSCompiler_StaticMethods_ConstrainPanX$$$($JSCompiler_StaticMethods_ConstrainPanX$self$$, $xx$$20$$) {
  var $dx$$21_offsetX$$6$$ = $xx$$20$$;
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$21_offsetX$$6$$ < $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$21_offsetX$$6$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - $dx$$21_offsetX$$6$$, $dx$$21_offsetX$$6$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$21_offsetX$$6$$)) : $dx$$21_offsetX$$6$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$);
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$21_offsetX$$6$$ > $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$21_offsetX$$6$$ -= $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$, $dx$$21_offsetX$$6$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$21_offsetX$$6$$)) : $dx$$21_offsetX$$6$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$);
  return $dx$$21_offsetX$$6$$
};
D.$JSCompiler_StaticMethods_ConstrainPanY$$ = function $$JSCompiler_StaticMethods_ConstrainPanY$$$($JSCompiler_StaticMethods_ConstrainPanY$self$$, $yy$$21$$) {
  var $dy$$21_offsetY$$5$$ = $yy$$21$$;
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$21_offsetY$$5$$ < $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$21_offsetY$$5$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - $dy$$21_offsetY$$5$$, $dy$$21_offsetY$$5$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * 
  $dy$$21_offsetY$$5$$)) : $dy$$21_offsetY$$5$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$);
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$21_offsetY$$5$$ > $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$21_offsetY$$5$$ -= $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$, $dy$$21_offsetY$$5$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * 
  $dy$$21_offsetY$$5$$)) : $dy$$21_offsetY$$5$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$);
  return $dy$$21_offsetY$$5$$
};
D.$JSCompiler_StaticMethods_ConstrainZoom$$ = function $$JSCompiler_StaticMethods_ConstrainZoom$$$($JSCompiler_StaticMethods_ConstrainZoom$self$$, $zz$$1$$) {
  var $dz$$9_newZ$$1$$ = window.Math.max(0, $zz$$1$$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && $dz$$9_newZ$$1$$ < $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$9_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - $dz$$9_newZ$$1$$, $dz$$9_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$9_newZ$$1$$)) : $dz$$9_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && $dz$$9_newZ$$1$$ > $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$9_newZ$$1$$ -= $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$, $dz$$9_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ + window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$9_newZ$$1$$)) : $dz$$9_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$);
  return $dz$$9_newZ$$1$$
};
D.$DvtPanZoomCanvas$$.prototype.$renderComponent$ = function $$DvtPanZoomCanvas$$$$$renderComponent$$() {
  var $controlPanel$$2$$ = this.$_controlPanel$;
  $controlPanel$$2$$ && (this.$addChild$($controlPanel$$2$$), (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), $controlPanel$$2$$.$renderComponent$())
};
D.$JSCompiler_StaticMethods_PositionControlPanel$$ = function $$JSCompiler_StaticMethods_PositionControlPanel$$$($JSCompiler_StaticMethods_PositionControlPanel$self$$) {
  var $openCloseButtonWidth_styleMap$$39$$ = $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_view$.$getSubcomponentStyles$(), $posX$$5_transX$$6$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$39$$, "paddingSide", 0), $posY$$4$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$39$$, "paddingTop", 0), $openCloseButtonWidth_styleMap$$39$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$39$$, "openCloseButtonWidth", 0), $posX$$5_transX$$6$$ = 
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_PositionControlPanel$self$$.$_context$) ? $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_ww$ - $openCloseButtonWidth_styleMap$$39$$ - $posX$$5_transX$$6$$ : $posX$$5_transX$$6$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_PositionControlPanel$self$$.$_controlPanel$, $posX$$5_transX$$6$$, $posY$$4$$)
};
D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$ = function $$JSCompiler_StaticMethods_GetRelativeMousePosition$$$($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$, $event$$389$$) {
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$.$_context$, $event$$389$$.pageX, $event$$389$$.pageY)
};
D.$JSCompiler_StaticMethods_FireZoomEvent$$ = function $$JSCompiler_StaticMethods_FireZoomEvent$$$($JSCompiler_StaticMethods_FireZoomEvent$self$$, $subType$$4_zoomEvent$$, $newZoom$$3$$, $oldZoom$$4$$, $animator$$118$$, $zoomToFitBounds$$, $xx$$21$$, $yy$$22$$, $tx$$20$$, $ty$$20$$) {
  $subType$$4_zoomEvent$$ = new D.$DvtZoomEvent$$($subType$$4_zoomEvent$$, $newZoom$$3$$, $oldZoom$$4$$, $animator$$118$$, $zoomToFitBounds$$, new D.$DvtPoint$$($xx$$21$$, $yy$$22$$), $tx$$20$$, $ty$$20$$);
  $JSCompiler_StaticMethods_FireZoomEvent$self$$.$FireListener$($subType$$4_zoomEvent$$);
  return $subType$$4_zoomEvent$$
};
D.$DvtPanZoomCanvas$$.prototype.$zoomAndCenter$ = function $$DvtPanZoomCanvas$$$$$zoomAndCenter$$() {
  (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomAndCenter")
};
D.$JSCompiler_StaticMethods_getNextZoomLevel$$ = function $$JSCompiler_StaticMethods_getNextZoomLevel$$$($JSCompiler_StaticMethods_getNextZoomLevel$self$$, $currZoom$$4$$) {
  var $zoomLevel$$3$$;
  $zoomLevel$$3$$ = $currZoom$$4$$ + $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$3$$ > $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_maxZoom$ && ($zoomLevel$$3$$ = $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_maxZoom$);
  return $zoomLevel$$3$$
};
D.$JSCompiler_StaticMethods_getPrevZoomLevel$$ = function $$JSCompiler_StaticMethods_getPrevZoomLevel$$$($JSCompiler_StaticMethods_getPrevZoomLevel$self$$, $currZoom$$5$$) {
  var $zoomLevel$$4$$;
  $zoomLevel$$4$$ = $currZoom$$5$$ - $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$4$$ < $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_minZoom$ && ($zoomLevel$$4$$ = $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_minZoom$);
  return $zoomLevel$$4$$
};
D.$DvtPanZoomCanvas$$.prototype.$setMinZoom$ = (0,D.$JSCompiler_set$$)("$_minZoom$");
D.$DvtPanZoomCanvas$$.prototype.$setMaxZoom$ = function $$DvtPanZoomCanvas$$$$$setMaxZoom$$($n$$30$$) {
  0 > $n$$30$$ && ($n$$30$$ = 1);
  this.$_maxZoom$ = $n$$30$$
};
D.$DvtPanZoomCanvas$$.prototype.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animationDuration$");
D.$DvtPanZoomCanvas$$.prototype.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$DvtPanZoomCanvasEventManager$$ = function $$DvtPanZoomCanvasEventManager$$$($context$$311$$, $callback$$86$$, $callbackObj$$59$$) {
  this.Init($context$$311$$, $callback$$86$$, $callbackObj$$59$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasEventManager$$, D.$DvtEventManager$$, "DvtPanZoomCanvasEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomCanvasEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$312$$, $callback$$87$$, $callbackObj$$60$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.Init.call(this, $context$$312$$, $callback$$87$$, $callbackObj$$60$$);
  this.$_pzc$ = $callbackObj$$60$$;
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
  this.$_bZooming$ = this.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMomentumPanning$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$64$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$64$$);
  (0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$64$$.$addEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$64$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$402_pos$$52$$) {
  2 != $event$$402_pos$$52$$.button && ($event$$402_pos$$52$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$402_pos$$52$$), this.$_mx$ = $event$$402_pos$$52$$.x, this.$_my$ = $event$$402_pos$$52$$.y, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_bDown$ = D.$JSCompiler_alias_TRUE$$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$403_zz$$2$$) {
  if(this.$_bDown$) {
    var $pos$$53_yy$$24$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$403_zz$$2$$), $xx$$23$$ = $pos$$53_yy$$24$$.x, $pos$$53_yy$$24$$ = $pos$$53_yy$$24$$.y;
    $event$$403_zz$$2$$.ctrlKey ? (this.$_bZooming$ || (this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$)), $event$$403_zz$$2$$ = this.$_origZoom$ * window.Math.pow(1 + 0.01 * (this.$_py$ >= $pos$$53_yy$$24$$ ? 
    1 : -1), window.Math.abs(this.$_py$ - $pos$$53_yy$$24$$)), this.$_callbackObj$.$_bPanningEnabled$ ? (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $event$$403_zz$$2$$, this.$_px$, this.$_py$) : (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $event$$403_zz$$2$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)) : (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$23$$, $pos$$53_yy$$24$$);
    this.$_mx$ = $xx$$23$$;
    this.$_my$ = $pos$$53_yy$$24$$
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$() {
  this.$_bDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bPanning$ && (0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this);
  this.$_bZooming$ && (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$405$$) {
  if(this.$_bDown$ && (this.$_bPanning$ || this.$_bZooming$)) {
    (!$event$$405$$.relatedTarget || $event$$405$$.relatedTarget == D.$JSCompiler_alias_NULL$$) && this.$OnMouseUp$($event$$405$$)
  }
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$405$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$406$$) {
  if($event$$406$$.wheelDelta && 0 !== $event$$406$$.wheelDelta && this.$_callbackObj$.$_bZoomingEnabled$) {
    var $currZoom$$7_oldZoomAnim_zz$$3$$ = this.$_callbackObj$.$getZoom$();
    this.$_zoomAnimator$ && ($currZoom$$7_oldZoomAnim_zz$$3$$ = this.$_zoomAnimator$, this.$_zoomAnimator$.stop(), $currZoom$$7_oldZoomAnim_zz$$3$$ = this.$_callbackObj$.$getZoom$($currZoom$$7_oldZoomAnim_zz$$3$$), this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$);
    this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
    var $delta$$9_pos$$54$$ = $event$$406$$.wheelDelta;
    (0,D.$DvtAgent$isPlatformGecko$$)() && ($delta$$9_pos$$54$$ = -$delta$$9_pos$$54$$);
    $currZoom$$7_oldZoomAnim_zz$$3$$ *= 1 + this.$_callbackObj$.$_zoomIncrement$ * $delta$$9_pos$$54$$ / window.Math.abs($delta$$9_pos$$54$$);
    $delta$$9_pos$$54$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$406$$);
    this.$_context$.$getDocumentUtils$().$cancelDomEvent$($event$$406$$);
    this.$_callbackObj$.$_bPanningEnabled$ ? (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $currZoom$$7_oldZoomAnim_zz$$3$$, $delta$$9_pos$$54$$.x, $delta$$9_pos$$54$$.y, this.$_zoomAnimator$) : (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $currZoom$$7_oldZoomAnim_zz$$3$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_zoomAnimator$);
    this.$_zoomAnimator$ && ((0,D.$DvtPlayable$appendOnEnd$$)(this.$_zoomAnimator$, this.$_clearZoomAnimator$, this), this.$_zoomAnimator$.play())
  }
};
D.$JSCompiler_prototypeAlias$$.$_clearZoomAnimator$ = function $$JSCompiler_prototypeAlias$$$$_clearZoomAnimator$$() {
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_handleMomentumStartTimer$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_handleMomentumTimer$ = function $$JSCompiler_prototypeAlias$$$$_handleMomentumTimer$$() {
  var $dy$$22_ratio$$6$$ = 1 - 0.04 * this.$_momentumIterCount$, $dy$$22_ratio$$6$$ = $dy$$22_ratio$$6$$ * $dy$$22_ratio$$6$$, $interval_newX$$8$$ = this.$_momentumTimer$.$getInterval$(), $dx$$22$$ = $dy$$22_ratio$$6$$ * this.$_momentumXperMS$ * $interval_newX$$8$$, $dy$$22_ratio$$6$$ = $dy$$22_ratio$$6$$ * this.$_momentumYperMS$ * $interval_newX$$8$$;
  this.$_momentumDx$ += $dx$$22$$;
  this.$_momentumDy$ += $dy$$22_ratio$$6$$;
  var $interval_newX$$8$$ = this.$_origPanX$ + this.$_mx$ - this.$_px$ + this.$_momentumDx$, $newY$$9$$ = this.$_origPanY$ + this.$_my$ - this.$_py$ + this.$_momentumDy$;
  (0,D.$JSCompiler_StaticMethods_panTo$$)(this.$_callbackObj$, $interval_newX$$8$$, $newY$$9$$);
  var $bStop$$ = D.$JSCompiler_alias_FALSE$$;
  if(24 <= this.$_momentumIterCount$) {
    $bStop$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    var $currX$$6$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$7$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$;
    if(window.Math.abs($currX$$6$$ - $interval_newX$$8$$) > window.Math.abs($dx$$22$$) || window.Math.abs($currY$$7$$ - $newY$$9$$) > window.Math.abs($dy$$22_ratio$$6$$)) {
      $bStop$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $bStop$$ ? (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset(), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)) : this.$_momentumIterCount$++
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$407$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$407$$, this.$ZoomStartTouch$, this);
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$407$$, this.$PanStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$408$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$408$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$408$$, "panTouch");
  $event$$408$$ && $event$$408$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$409$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$409$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$409$$, "panTouch")
};
D.$JSCompiler_prototypeAlias$$.$ZoomStartTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomStartTouch$$($event$$410$$, $touch$$11$$) {
  var $targets$$inline_5486_touchIds$$2$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  1 >= $targets$$inline_5486_touchIds$$2$$.length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$11$$.identifier, "zoomTouch", "zoomTouch", "zoomTouch", this.$ZoomMoveTouch$, this.$ZoomEndTouch$, this), this.$_mx$ = $touch$$11$$.pageX, this.$_my$ = $touch$$11$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = 
  (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_origDist$ = D.$JSCompiler_alias_NULL$$, $targets$$inline_5486_touchIds$$2$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_5486_touchIds$$2$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_5486_touchIds$$2$$), this.$_callbackObj$.$_currTargets$ = 
  $targets$$inline_5486_touchIds$$2$$);
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$ZoomMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomMoveTouch$$() {
  var $targets$$inline_5501_touchIds$$3$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  if(2 == $targets$$inline_5501_touchIds$$3$$.length) {
    var $data$$100_touch1Data$$inline_5490$$;
    var $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$ = this.$TouchManager$;
    if(2 == $targets$$inline_5501_touchIds$$3$$.length) {
      if($data$$100_touch1Data$$inline_5490$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$.$_touchMap$[$targets$$inline_5501_touchIds$$3$$[0]], $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$.$_touchMap$[$targets$$inline_5501_touchIds$$3$$[1]], $data$$100_touch1Data$$inline_5490$$ == D.$JSCompiler_alias_NULL$$ || 
      $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$ == D.$JSCompiler_alias_NULL$$ || 0 == $data$$100_touch1Data$$inline_5490$$.$dx$ && 0 == $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$.$dy$) {
        $data$$100_touch1Data$$inline_5490$$ = D.$JSCompiler_alias_NULL$$
      }else {
        var $cp$$7_dist$$inline_5494_dx$$inline_5492$$ = $data$$100_touch1Data$$inline_5490$$.pageX - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$.pageX, $dy$$inline_5493_prevdx$$inline_5495$$ = $data$$100_touch1Data$$inline_5490$$.pageY - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$.pageY, $cp$$7_dist$$inline_5494_dx$$inline_5492$$ = window.Math.sqrt($cp$$7_dist$$inline_5494_dx$$inline_5492$$ * $cp$$7_dist$$inline_5494_dx$$inline_5492$$ + 
        $dy$$inline_5493_prevdx$$inline_5495$$ * $dy$$inline_5493_prevdx$$inline_5495$$), $dy$$inline_5493_prevdx$$inline_5495$$ = $data$$100_touch1Data$$inline_5490$$.$prevPageX$ - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$.$prevPageX$, $prevdy$$inline_5496$$ = $data$$100_touch1Data$$inline_5490$$.$prevPageY$ - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$.$prevPageY$, $cx$$inline_5497$$ = ($data$$100_touch1Data$$inline_5490$$.pageX + 
        $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$.pageX) / 2, $cy$$inline_5498$$ = ($data$$100_touch1Data$$inline_5490$$.pageY + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$.pageY) / 2;
        $data$$100_touch1Data$$inline_5490$$ = {$dz$:$cp$$7_dist$$inline_5494_dx$$inline_5492$$ - window.Math.sqrt($dy$$inline_5493_prevdx$$inline_5495$$ * $dy$$inline_5493_prevdx$$inline_5495$$ + $prevdy$$inline_5496$$ * $prevdy$$inline_5496$$), $cx$:$cx$$inline_5497$$, $cy$:$cy$$inline_5498$$, $dcx$:$cx$$inline_5497$$ - ($data$$100_touch1Data$$inline_5490$$.$prevPageX$ + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$.$prevPageX$) / 2, $dcy$:$cy$$inline_5498$$ - 
        ($data$$100_touch1Data$$inline_5490$$.$prevPageY$ + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$.$prevPageY$) / 2, $dist$:$cp$$7_dist$$inline_5494_dx$$inline_5492$$}
      }
    }else {
      $data$$100_touch1Data$$inline_5490$$ = D.$JSCompiler_alias_NULL$$
    }
    $data$$100_touch1Data$$inline_5490$$ && (this.$_bZooming$ || (this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$TouchManager$.$blockTouchHold$(), this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$)), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), this.$_origDist$ == D.$JSCompiler_alias_NULL$$ && 
    (this.$_origDist$ = $data$$100_touch1Data$$inline_5490$$.$dist$ - $data$$100_touch1Data$$inline_5490$$.$dz$), $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$ = this.$_origZoom$ * ($data$$100_touch1Data$$inline_5490$$.$dist$ / this.$_origDist$), $cp$$7_dist$$inline_5494_dx$$inline_5492$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_pzc$.$_context$, $data$$100_touch1Data$$inline_5490$$.$cx$, $data$$100_touch1Data$$inline_5490$$.$cy$), 
    this.$hideTooltip$(), $targets$$inline_5501_touchIds$$3$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_5501_touchIds$$3$$), this.$_callbackObj$.$_currTargets$ = $targets$$inline_5501_touchIds$$3$$, (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_5488_touch2Data$$inline_5491_zz$$4$$, $cp$$7_dist$$inline_5494_dx$$inline_5492$$.x, $cp$$7_dist$$inline_5494_dx$$inline_5492$$.y), 
    this.$_callbackObj$.$panBy$($data$$100_touch1Data$$inline_5490$$.$dcx$, $data$$100_touch1Data$$inline_5490$$.$dcy$))
  }
};
D.$JSCompiler_prototypeAlias$$.$ZoomEndTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomEndTouch$$() {
  this.$_bZooming$ && (this.$_origDist$ = D.$JSCompiler_alias_NULL$$, this.$TouchManager$.$_blockTouchHold$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this));
  var $touchIds$$4$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_5506$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $touchIds$$4$$);
  this.$_callbackObj$.$_currTargets$ = $targets$$inline_5506$$;
  0 == $touchIds$$4$$.length && this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("zoomEnd"))
};
D.$JSCompiler_prototypeAlias$$.$PanStartTouch$ = function $$JSCompiler_prototypeAlias$$$$PanStartTouch$$($event$$413$$, $touch$$14$$) {
  !this.$_bZooming$ && 1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$14$$.identifier, "panTouch", "panTouch", "panTouch", this.$PanMoveTouch$, this.$PanEndTouch$, this), this.$_mx$ = $touch$$14$$.pageX, this.$_my$ = $touch$$14$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$PanMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$PanMoveTouch$$($event$$414$$, $touch$$15$$) {
  if(!this.$_bZooming$ && 1 == (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length) {
    var $xx$$24$$ = $touch$$15$$.pageX, $yy$$25$$ = $touch$$15$$.pageY;
    (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$24$$, $yy$$25$$);
    this.$_mx$ = $xx$$24$$;
    this.$_my$ = $yy$$25$$
  }
};
D.$JSCompiler_prototypeAlias$$.$PanEndTouch$ = function $$JSCompiler_prototypeAlias$$$$PanEndTouch$$() {
  !this.$_bZooming$ && this.$_bPanning$ && (0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this)
};
D.$JSCompiler_StaticMethods__handleZoomEnd$$ = function $$JSCompiler_StaticMethods__handleZoomEnd$$$($JSCompiler_StaticMethods__handleZoomEnd$self$$) {
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callback$.call($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomEnd"));
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_bZooming$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$)($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_pzc$.$_controlPanel$);
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__handlePanMove$$ = function $$JSCompiler_StaticMethods__handlePanMove$$$($JSCompiler_StaticMethods__handlePanMove$self$$, $xx$$25$$, $yy$$26$$) {
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ || ($JSCompiler_StaticMethods__handlePanMove$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanBegin")), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$), 
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$ = []));
  (0,D.$JSCompiler_StaticMethods_panTo$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanX$ + $xx$$25$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_px$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanY$ + $yy$$26$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_py$);
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$ = $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ = (new window.Date).getTime(), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ ? ($JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.$isRunning$() && $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.stop(), 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.reset()) : $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanMove$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanMove$self$$.$_handleMomentumStartTimer$, $JSCompiler_StaticMethods__handlePanMove$self$$, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.push({$dt$:$JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ - 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$, $dx$:$xx$$25$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_mx$, $dy$:$yy$$26$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_my$}), 5 < $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.length && $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.splice(0, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.start())
};
D.$JSCompiler_StaticMethods__handlePanEnd$$ = function $$JSCompiler_StaticMethods__handlePanEnd$$$($JSCompiler_StaticMethods__handlePanEnd$self$$) {
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanEnd"));
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$);
  if($JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$ && $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.$isRunning$()) {
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.stop();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.reset();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ ? $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.reset() : $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanEnd$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanEnd$self$$.$_handleMomentumTimer$, $JSCompiler_StaticMethods__handlePanEnd$self$$);
    for(var $dt$$1$$ = 0, $dx$$23$$ = 0, $dy$$23$$ = 0, $numMoves$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;0 < $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;) {
      var $objMove$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.pop(), $dt$$1$$ = $dt$$1$$ + $objMove$$.$dt$, $dx$$23$$ = $dx$$23$$ + $objMove$$.$dx$, $dy$$23$$ = $dy$$23$$ + $objMove$$.$dy$
    }
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumXperMS$ = $dx$$23$$ / $dt$$1$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumYperMS$ = $dy$$23$$ / $dt$$1$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.setInterval(window.Math.ceil($dt$$1$$ / $numMoves$$));
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumIterCount$ = 1;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDx$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDy$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_bPanningEnabled$ && $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.start()
  }else {
    (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtPanZoomCanvasKeyboardHandler$$ = function $$DvtPanZoomCanvasKeyboardHandler$$$($component$$24$$, $manager$$14$$) {
  this.Init($component$$24$$, $manager$$14$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtPanZoomCanvasKeyboardHandler");
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.Init = function $$DvtPanZoomCanvasKeyboardHandler$$$$Init$($component$$25$$, $manager$$15$$) {
  D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.Init($manager$$15$$);
  this.$_component$ = $component$$25$$
};
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPanZoomCanvasKeyboardHandler$$$$$processKeyDown$$($controlPanel$$5_event$$393$$) {
  var $keyCode$$26$$ = $controlPanel$$5_event$$393$$.keyCode, $canvas$$ = this.$_component$.$_panZoomCanvas$;
  if(33 == $keyCode$$26$$) {
    $controlPanel$$5_event$$393$$.ctrlKey || $controlPanel$$5_event$$393$$.shiftKey ? $canvas$$.$panBy$($canvas$$.$_panIncrement$, 0) : $canvas$$.$panBy$(0, $canvas$$.$_panIncrement$)
  }else {
    if(34 == $keyCode$$26$$) {
      $controlPanel$$5_event$$393$$.ctrlKey || $controlPanel$$5_event$$393$$.shiftKey ? $canvas$$.$panBy$(-$canvas$$.$_panIncrement$, 0) : $canvas$$.$panBy$(0, -$canvas$$.$_panIncrement$)
    }else {
      if(191 == $keyCode$$26$$) {
        ($controlPanel$$5_event$$393$$ = $canvas$$.$_controlPanel$) && $controlPanel$$5_event$$393$$.$toggleExpandCollapse$()
      }else {
        if((0,D.$DvtKeyboardEvent$isEquals$$)($controlPanel$$5_event$$393$$) || (0,D.$DvtKeyboardEvent$isPlus$$)($controlPanel$$5_event$$393$$)) {
          (0,D.$JSCompiler_StaticMethods_zoomTo$$)($canvas$$, $canvas$$.$getZoom$() + $canvas$$.$_zoomIncrement$)
        }else {
          if((0,D.$DvtKeyboardEvent$isMinus$$)($controlPanel$$5_event$$393$$) || (0,D.$DvtKeyboardEvent$isUnderscore$$)($controlPanel$$5_event$$393$$)) {
            (0,D.$JSCompiler_StaticMethods_zoomTo$$)($canvas$$, $canvas$$.$getZoom$() - $canvas$$.$_zoomIncrement$)
          }else {
            if((48 == $keyCode$$26$$ || 96 == $keyCode$$26$$) && !$controlPanel$$5_event$$393$$.ctrlKey && !$controlPanel$$5_event$$393$$.shiftKey) {
              $canvas$$.$zoomToFit$()
            }else {
              return D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $controlPanel$$5_event$$393$$)
            }
          }
        }
      }
    }
  }
};
D.$DvtCollapsiblePanel$$ = function $$DvtCollapsiblePanel$$$($context$$699$$, $maxWidth$$29$$, $maxHeight$$20$$, $collapseDir$$, $buttonImages$$4$$, $styleMap$$96$$, $disclosed$$8$$, $isFixed$$1$$) {
  this.Init($context$$699$$, $maxWidth$$29$$, $maxHeight$$20$$, $collapseDir$$, $buttonImages$$4$$, $styleMap$$96$$, $disclosed$$8$$, $isFixed$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanel$$, D.$DvtContainer$$, "DvtCollapsiblePanel");
D.$DvtCollapsiblePanel$$.prototype.Init = function $$DvtCollapsiblePanel$$$$Init$($context$$700$$, $maxWidth$$30$$, $maxHeight$$21$$, $collapseDir$$1$$, $buttonImages$$5$$, $styleMap$$97$$, $disclosed$$9$$, $isFixed$$2$$) {
  D.$DvtCollapsiblePanel$$.$superclass$.Init.call(this, $context$$700$$);
  this.$_maxWidth$ = $maxWidth$$30$$;
  this.$_maxHeight$ = $maxHeight$$21$$;
  this.$_collapseDir$ = $collapseDir$$1$$ ? $collapseDir$$1$$ : "col_northeast";
  (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) && ("col_northeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northwest" : "col_northwest" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northeast" : "col_southeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_southwest" : "col_southwest" == this.$_collapseDir$ && (this.$_collapseDir$ = "col_southeast"));
  this.$_buttonImages$ = $buttonImages$$5$$;
  this.$_isFixed$ = $isFixed$$2$$ ? $isFixed$$2$$ : (0,D.$DvtAgent$isEnvironmentBatik$$)();
  this.$_animation$ = this.$_collapseTooltip$ = this.$_expandTooltip$ = D.$JSCompiler_alias_NULL$$;
  this.$_styleMap$ = $styleMap$$97$$;
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$);
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", D.$JSCompiler_alias_NULL$$));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_collapse$ = $disclosed$$9$$ !== D.$JSCompiler_alias_VOID$$ ? !$disclosed$$9$$ : D.$JSCompiler_alias_FALSE$$;
  this.$_scrollableContainer$ = new D.$DvtScrollableContainer$$($context$$700$$, 0, 0, $maxWidth$$30$$ - 10, $maxHeight$$21$$ - 10, 3, "collapsiblePanel");
  this.$addChild$(this.$_scrollableContainer$);
  this.$_scrollableContainer$.$_horizScrollEnabled$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_scrollableContainer$, 5, 5);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, this);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$DvtCollapsiblePanel$$.prototype.$HandleResize$ = function $$DvtCollapsiblePanel$$$$$HandleResize$$() {
  this.$_scrollableContainer$.refresh();
  var $dims$$67_resizeHeight$$1$$ = this.$_scrollableContainer$.$getDimensions$(), $resizeWidth$$1$$ = $dims$$67_resizeHeight$$1$$.$w$ + 10, $dims$$67_resizeHeight$$1$$ = $dims$$67_resizeHeight$$1$$.$h$ + 10;
  this.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)(this, $resizeWidth$$1$$, $dims$$67_resizeHeight$$1$$));
  var $west$$2$$ = "col_northwest" == this.$_collapseDir$ || "col_southwest" == this.$_collapseDir$;
  this.$_buttonFrame$ && $west$$2$$ && this.$_buttonFrame$.$setTranslateX$($resizeWidth$$1$$);
  this.$FireListener$(new D.$DvtResizeEvent$$($resizeWidth$$1$$, $dims$$67_resizeHeight$$1$$, 0, 0))
};
D.$DvtCollapsiblePanel$$.prototype.isCollapsed = (0,D.$JSCompiler_get$$)("$_collapse$");
D.$JSCompiler_StaticMethods_setCollapsed$$ = function $$JSCompiler_StaticMethods_setCollapsed$$$($JSCompiler_StaticMethods_setCollapsed$self$$, $collapse$$1$$) {
  $JSCompiler_StaticMethods_setCollapsed$self$$.$_collapse$ != $collapse$$1$$ && ($JSCompiler_StaticMethods_setCollapsed$self$$.$_collapse$ = $collapse$$1$$, (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_setCollapsed$self$$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_setCollapsed$self$$.$FireListener$(new D.$DvtCollapsiblePanelEvent$$($collapse$$1$$ ? "hide" : "show")))
};
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentWidth$ = function $$DvtCollapsiblePanel$$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - 27
};
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentHeight$ = function $$DvtCollapsiblePanel$$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - 27
};
D.$JSCompiler_StaticMethods__getRefPoint$$ = function $$JSCompiler_StaticMethods__getRefPoint$$$($JSCompiler_StaticMethods__getRefPoint$self$$, $point$$62$$, $isScale$$) {
  return!$JSCompiler_StaticMethods__getRefPoint$self$$.isCollapsed() ? $isScale$$ ? new D.$DvtPoint$$(1 / $point$$62$$.x, 1 / $point$$62$$.y) : new D.$DvtPoint$$(-$point$$62$$.x, -$point$$62$$.y) : $point$$62$$
};
D.$JSCompiler_StaticMethods__collapseExpand$$ = function $$JSCompiler_StaticMethods__collapseExpand$$$($JSCompiler_StaticMethods__collapseExpand$self$$, $animate$$2$$) {
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$));
  var $moveAnim_north_translatePoint2$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_northeast" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $west$$3$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $moveAnim2_translatePoint_translateX$$2$$ = $west$$3$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 
  $translateY$$3$$ = $moveAnim_north_translatePoint2$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$, $scaleAnim_scalePoint$$ = new D.$DvtPoint$$(1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$), $moveAnim2_translatePoint_translateX$$2$$ = new D.$DvtPoint$$($moveAnim2_translatePoint_translateX$$2$$, $translateY$$3$$), $moveAnim_north_translatePoint2$$ = new D.$DvtPoint$$($west$$3$$ ? -$JSCompiler_StaticMethods__collapseExpand$self$$.$_width$ : 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, $translateY$$3$$ - ($moveAnim_north_translatePoint2$$ ? 0 : 25));
  $animate$$2$$ || ($JSCompiler_StaticMethods__collapseExpand$self$$.$_background$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$ && $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$.$setAlpha$(0));
  $scaleAnim_scalePoint$$ = new D.$DvtAnimScaleBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $scaleAnim_scalePoint$$, D.$JSCompiler_alias_TRUE$$), $animate$$2$$ ? 0.25 : 1E-5);
  $moveAnim_north_translatePoint2$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim_north_translatePoint2$$), $animate$$2$$ ? 0.25 : 1E-5);
  $moveAnim2_translatePoint_translateX$$2$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim2_translatePoint_translateX$$2$$), $animate$$2$$ ? 0.25 : 1E-5);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $scaleAnim_scalePoint$$, $moveAnim_north_translatePoint2$$, $moveAnim2_translatePoint_translateX$$2$$);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$.$getTooltipManager$().$hideTooltip$(), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$)), $JSCompiler_StaticMethods__collapseExpand$self$$.isCollapsed() && $JSCompiler_StaticMethods__collapseExpand$self$$.$_scrollableContainer$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__collapseExpand$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.play())
};
D.$JSCompiler_StaticMethods__getOutlinePath$$ = function $$JSCompiler_StaticMethods__getOutlinePath$$$($JSCompiler_StaticMethods__getOutlinePath$self$$, $width$$160$$, $height$$135$$) {
  var $r$$87$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_borderRadius$, $cmds$$25$$, $west$$4$$ = "col_northwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$;
  25 >= $height$$135$$ && ($height$$135$$ = 25);
  $cmds$$25$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$ ? D.$DvtPathUtils$$.moveTo($r$$87$$, 0) : D.$DvtPathUtils$$.moveTo(0, 0);
  $cmds$$25$$ += D.$DvtPathUtils$$.lineTo($width$$160$$ - $r$$87$$, 0);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && $west$$4$$ ? ($cmds$$25$$ += D.$DvtPathUtils$$.lineTo($width$$160$$, 0), $cmds$$25$$ += D.$DvtPathUtils$$.lineTo($width$$160$$, $r$$87$$)) : $cmds$$25$$ += D.$DvtPathUtils$$.$quadTo$($width$$160$$, 0, $width$$160$$, $r$$87$$);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$135$$ && $west$$4$$ ? $cmds$$25$$ += D.$DvtPathUtils$$.lineTo($width$$160$$, $height$$135$$) : ($cmds$$25$$ += D.$DvtPathUtils$$.lineTo($width$$160$$, $height$$135$$ - $r$$87$$), $cmds$$25$$ += D.$DvtPathUtils$$.$quadTo$($width$$160$$, $height$$135$$, $width$$160$$ - $r$$87$$, $height$$135$$));
  $cmds$$25$$ += D.$DvtPathUtils$$.lineTo($r$$87$$, $height$$135$$);
  $cmds$$25$$ = !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$135$$ && !$west$$4$$ ? $cmds$$25$$ + D.$DvtPathUtils$$.lineTo(0, $height$$135$$) : $cmds$$25$$ + D.$DvtPathUtils$$.$quadTo$(0, $height$$135$$, 0, $height$$135$$ - $r$$87$$);
  if($JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$) {
    $cmds$$25$$ += D.$DvtPathUtils$$.lineTo(0, $r$$87$$), $cmds$$25$$ += D.$DvtPathUtils$$.$quadTo$(0, 0, $r$$87$$, 0)
  }
  return $cmds$$25$$ += D.$DvtPathUtils$$.closePath()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtCollapsiblePanel$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  var $alpha$$49_stroke$$107$$ = this.$_background$.$getStroke$().clone();
  $alpha$$49_stroke$$107$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($alpha$$49_stroke$$107$$);
  var $alpha$$49_stroke$$107$$ = this.$_styleMap$[D.$DvtControlPanel$$.$BG_ROLLOUT_ALPHA$], $fill$$65$$ = this.$_background$.$getFill$().clone();
  $fill$$65$$.$setAlpha$($alpha$$49_stroke$$107$$);
  this.$_background$.$setFill$($fill$$65$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.isCollapsed() || this.$_scrollableContainer$.$setAlpha$(1);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, this);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, this);
  this.$_collapseExpandButton$ && (this.$_collapseExpandButton$ = this.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$(this.$_context$, this.$_buttonImages$, 25, this.$_styleMap$, D.$JSCompiler_alias_FALSE$$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$(this.$_context$, this.$_buttonImages$, 25, this.$_styleMap$, D.$JSCompiler_alias_FALSE$$), this.$_buttonFrame$.$addChild$(this.$_collapseExpandButton$), this.$_buttonFrame$.$removeChildAt$(0), (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, 
  this.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, this) : (this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, this)))
};
D.$JSCompiler_prototypeAlias$$.$OnButtonClick$ = function $$JSCompiler_prototypeAlias$$$$OnButtonClick$$() {
  this.$_context$.$getTooltipManager$().$hideTooltip$();
  (0,D.$JSCompiler_StaticMethods_setCollapsed$$)(this, !this.isCollapsed())
};
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOver$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOver$$($evt$$80$$) {
  var $tooltip$$56$$ = this.isCollapsed() ? this.$_expandTooltip$ : this.$_collapseTooltip$;
  $tooltip$$56$$ != D.$JSCompiler_alias_NULL$$ && this.$_context$.$getTooltipManager$().$showTooltip$($evt$$80$$.pageX, $evt$$80$$.pageY, $tooltip$$56$$, this.$_collapseExpandButton$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOut$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOut$$() {
  this.$_context$.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$() {
  var $alpha$$50_stroke$$108$$ = this.$_background$.$getStroke$().clone();
  $alpha$$50_stroke$$108$$.$setAlpha$(this.$_styleMap$.borderHoverAlpha);
  this.$_background$.$setStroke$($alpha$$50_stroke$$108$$);
  var $alpha$$50_stroke$$108$$ = this.$_styleMap$.backgroundHoverAlpha, $fill$$66$$ = this.$_background$.$getFill$().clone();
  $fill$$66$$.$setAlpha$($alpha$$50_stroke$$108$$);
  this.$_background$.$setFill$($fill$$66$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderHoverAlpha)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$() {
  var $fill$$67_stroke$$109$$ = this.$_background$.$getStroke$().clone();
  $fill$$67_stroke$$109$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($fill$$67_stroke$$109$$);
  $fill$$67_stroke$$109$$ = this.$_background$.$getFill$().clone();
  $fill$$67_stroke$$109$$.$setAlpha$(this.$_bgAlpha$);
  this.$_background$.$setFill$($fill$$67_stroke$$109$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderAlpha)
};
D.$DvtCollapsiblePanelEvent$$ = function $$DvtCollapsiblePanelEvent$$$($subtype$$12$$) {
  this.Init("dvtCollapsiblePanelEvent");
  this.$_subtype$ = $subtype$$12$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtCollapsiblePanelEvent");
D.$DvtCollapsiblePanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtImageLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtImageLAFUtils$$, D.$DvtObj$$, "DvtImageLAFUtils");
D.$DvtImageLAFUtils$$.$loadIcon$ = function $$DvtImageLAFUtils$$$$loadIcon$$($context$$658$$, $uri$$14$$) {
  var $image$$16$$ = new D.$DvtImage$$($context$$658$$, $uri$$14$$);
  $image$$16$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$658$$, $uri$$14$$, function($context$$658$$) {
    $context$$658$$ != D.$JSCompiler_alias_NULL$$ && ($context$$658$$.width && $context$$658$$.height) && ($image$$16$$.$setWidth$($context$$658$$.width), $image$$16$$.$setHeight$($context$$658$$.height))
  });
  return $image$$16$$
};
D.$DvtButtonLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtButtonLAFUtils$$, D.$DvtObj$$, "DvtButtonLAFUtils");
D.$DvtButtonLAFUtils$$.$EXPAND_COLLAPSE_BUTTON_IMG_OFFSET$ = -6;
D.$DvtButtonLAFUtils$$.$CONTROL_BUTTON_WIDTH$ = 23;
D.$DvtButtonLAFUtils$$.$CONTROL_BUTTON_HEIGHT$ = 21;
D.$DvtButtonLAFUtils$$.$ZOOM_BUTTON_HEIGHT$ = 20;
D.$DvtButtonLAFUtils$$.$OPEN_CLOSE_IMAGE_WIDTH$ = 22;
D.$DvtButtonLAFUtils$$.$OPEN_CLOSE_IMAGE_HEIGHT$ = 20;
D.$DvtButtonLAFUtils$$.$VIEW_PANEL_HEIGHT$ = 47;
D.$DvtButtonLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
D.$DvtButtonLAFUtils$$.$SIN_PI_4$ = window.Math.sin(window.Math.PI / 4);
D.$DvtButtonLAFUtils$$.$TAN_PI_8$ = window.Math.tan(window.Math.PI / 8);
D.$DvtButtonLAFUtils$$.$BORDER_COLOR$ = "#7C8191";
D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$ = "#E0E1E1";
D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$ = "#F0F1F2";
D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$ = 8;
D.$DvtButtonLAFUtils$$.$DEFAULT_FILL_TYPE$ = "solid";
D.$DvtButtonLAFUtils$$.$DEFAULT_BORDER_COLOR$ = "#7BA0D9";
D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$ = "#3474D3";
D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$ = "#BFD8FB";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$ = "zoominUp";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$ = "zoominOver";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$ = "zoominDown";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$ = "zoominDisabled";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$ = "zoomtofitUp";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$ = "zoomtofitOver";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$ = "zoomtofitDown";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$ = "zoomoutUp";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$ = "zoomoutOver";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$ = "zoomoutDown";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$ = "zoomoutDisabled";
D.$DvtButtonLAFUtils$$.$_PAN_ENA$ = "pandialUp";
D.$DvtButtonLAFUtils$$.$_PAN_OVR$ = "pandialOver";
D.$DvtButtonLAFUtils$$.$_PAN_DWN$ = "pandialDown";
D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$ = "recenterUp";
D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$ = "recenterOver";
D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$ = "recenterDown";
D.$DvtButtonLAFUtils$$.$_RESET_ENA$ = "resetUp";
D.$DvtButtonLAFUtils$$.$_RESET_OVR$ = "resetOver";
D.$DvtButtonLAFUtils$$.$_RESET_DWN$ = "resetDown";
D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$ = "drillupUp";
D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$ = "drillupOver";
D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$ = "drillupDown";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$ = "drilldownUp";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$ = "drilldownOver";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$ = "drilldownDown";
D.$DvtButtonLAFUtils$$.$_MAX_ENA$ = "maxUp";
D.$DvtButtonLAFUtils$$.$_MAX_OVR$ = "maxOver";
D.$DvtButtonLAFUtils$$.$_MAX_DWN$ = "maxDown";
D.$DvtButtonLAFUtils$$.$_RESTORE_ENA$ = "restoreUp";
D.$DvtButtonLAFUtils$$.$_RESTORE_OVR$ = "restoreOver";
D.$DvtButtonLAFUtils$$.$_RESTORE_DWN$ = "restoreDown";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$ = "collapseEna";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$ = "collapseOvr";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$ = "collapseDwn";
D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$ = "expandEna";
D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$ = "expandOvr";
D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$ = "expandDwn";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$ = "quickQueryEna";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$ = "quickQueryOvr";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$ = "quickQueryDwn";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$ = "clearResultsEna";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$ = "clearResultsOvr";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$ = "clearResultsDwn";
D.$DvtButtonLAFUtils$$.$_UP$ = "Up";
D.$DvtButtonLAFUtils$$.$_OVER$ = "Over";
D.$DvtButtonLAFUtils$$.$_DOWN$ = "Down";
D.$DvtButtonLAFUtils$$.$_SEL$ = "Sel";
D.$DvtButtonLAFUtils$$.$_R2L$ = "_r";
D.$DvtButtonLAFUtils$$.$_SYNC$ = "synchronize";
D.$DvtButtonLAFUtils$$.$createPanControl$ = function $$DvtButtonLAFUtils$$$$createPanControl$$($context$$659$$, $panZoomCanvas$$18$$, $resources$$21$$, $controls$$4$$, $imageURIs$$3$$, $styleMap$$65$$) {
  var $panButton$$2_panUpState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$659$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_PAN_ENA$], $styleMap$$65$$), $panDownState$$ = new D.$DvtContainer$$($context$$659$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panDownState$$, 20, 20);
  var $downImage_panOverState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$659$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_PAN_DWN$], $styleMap$$65$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, -20, -20);
  $panDownState$$.$addChild$($downImage_panOverState$$);
  $downImage_panOverState$$ = new D.$DvtContainer$$($context$$659$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, 20, 20);
  var $overImage$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$659$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_PAN_OVR$], $styleMap$$65$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($overImage$$, -20, -20);
  $downImage_panOverState$$.$addChild$($overImage$$);
  $panButton$$2_panUpState$$ = new D.$DvtButton$$($context$$659$$, $panButton$$2_panUpState$$, $downImage_panOverState$$, $panDownState$$);
  if(0 < ($controls$$4$$ & 16)) {
    var $recenterButton$$2$$ = new D.$DvtButton$$($context$$659$$, D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$659$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$], $styleMap$$65$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$659$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$], $styleMap$$65$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$659$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$], $styleMap$$65$$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($recenterButton$$2$$, 9, 9)
  }
  return new D.$DvtPanControl$$($context$$659$$, $panButton$$2_panUpState$$, $recenterButton$$2$$, $panZoomCanvas$$18$$, $resources$$21$$, $controls$$4$$, $styleMap$$65$$)
};
D.$DvtButtonLAFUtils$$.$createDrillUpButton$ = function $$DvtButtonLAFUtils$$$$createDrillUpButton$$($context$$660$$, $mapCallback$$2$$, $panZoomCanvas$$19$$, $resources$$22$$, $dis$$4_imageURIs$$4$$, $eventManager$$37$$, $styleMap$$66$$) {
  var $ena$$13$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$660$$, 0, $dis$$4_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$66$$), $ovr$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$660$$, 1, $dis$$4_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$], $styleMap$$66$$), $dwn$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$660$$, 2, $dis$$4_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$], $styleMap$$66$$);
  $dis$$4_imageURIs$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$660$$, 0, $dis$$4_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$66$$);
  return new D.$DvtMapControlButton$$($context$$660$$, new D.$DvtButton$$($context$$660$$, $ena$$13$$, $ovr$$8$$, $dwn$$8$$, $dis$$4_imageURIs$$4$$), $mapCallback$$2$$, $panZoomCanvas$$19$$, 0, $resources$$22$$, $eventManager$$37$$)
};
D.$DvtButtonLAFUtils$$.$createDrillDownButton$ = function $$DvtButtonLAFUtils$$$$createDrillDownButton$$($context$$661$$, $mapCallback$$3$$, $panZoomCanvas$$20$$, $resources$$23$$, $dis$$5_imageURIs$$5$$, $eventManager$$38$$, $styleMap$$67$$) {
  var $ena$$14$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$661$$, 0, $dis$$5_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$67$$), $ovr$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$661$$, 1, $dis$$5_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$], $styleMap$$67$$), $dwn$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$661$$, 2, $dis$$5_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$], $styleMap$$67$$);
  $dis$$5_imageURIs$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$661$$, 0, $dis$$5_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$67$$);
  return new D.$DvtMapControlButton$$($context$$661$$, new D.$DvtButton$$($context$$661$$, $ena$$14$$, $ovr$$9$$, $dwn$$9$$, $dis$$5_imageURIs$$5$$), $mapCallback$$3$$, $panZoomCanvas$$20$$, 1, $resources$$23$$, $eventManager$$38$$)
};
D.$DvtButtonLAFUtils$$.$createResetButton$ = function $$DvtButtonLAFUtils$$$$createResetButton$$($context$$662$$, $mapCallback$$4$$, $panZoomCanvas$$21$$, $resources$$24$$, $dis$$6_imageURIs$$6$$, $eventManager$$39$$, $styleMap$$68$$) {
  var $ena$$15$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$662$$, 0, $dis$$6_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$68$$), $ovr$$10$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$662$$, 1, $dis$$6_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_RESET_OVR$], $styleMap$$68$$), $dwn$$10$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$662$$, 2, $dis$$6_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_RESET_DWN$], $styleMap$$68$$);
  $dis$$6_imageURIs$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$662$$, 0, $dis$$6_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$68$$);
  return new D.$DvtMapControlButton$$($context$$662$$, new D.$DvtButton$$($context$$662$$, $ena$$15$$, $ovr$$10$$, $dwn$$10$$, $dis$$6_imageURIs$$6$$), $mapCallback$$4$$, $panZoomCanvas$$21$$, 2, $resources$$24$$, $eventManager$$39$$)
};
D.$DvtButtonLAFUtils$$.$createZoomToFitButton$ = function $$DvtButtonLAFUtils$$$$createZoomToFitButton$$($context$$663$$, $panZoomCanvas$$22$$, $resources$$25$$, $eventManager$$40$$, $dwn$$11_imageURIs$$7$$, $styleMap$$69$$) {
  var $ena$$16$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$663$$, 0, $dwn$$11_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$], $styleMap$$69$$), $ovr$$11$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$663$$, 1, $dwn$$11_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$], $styleMap$$69$$);
  $dwn$$11_imageURIs$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$663$$, 2, $dwn$$11_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$], $styleMap$$69$$);
  return new D.$DvtZoomToFitButton$$($context$$663$$, new D.$DvtButton$$($context$$663$$, $ena$$16$$, $ovr$$11$$, $dwn$$11_imageURIs$$7$$), $panZoomCanvas$$22$$, $resources$$25$$, $eventManager$$40$$)
};
D.$DvtButtonLAFUtils$$.$createZoomInButton$ = function $$DvtButtonLAFUtils$$$$createZoomInButton$$($context$$664$$, $panZoomCanvas$$23$$, $resources$$26$$, $eventManager$$41$$, $dis$$7_imageURIs$$8$$, $styleMap$$70$$) {
  var $ena$$17$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$664$$, 0, $dis$$7_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$], $styleMap$$70$$), $ovr$$12$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$664$$, 1, $dis$$7_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$], $styleMap$$70$$), $dwn$$12$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$664$$, 2, $dis$$7_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$], $styleMap$$70$$);
  $dis$$7_imageURIs$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$664$$, 3, $dis$$7_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$], $styleMap$$70$$);
  return new D.$DvtZoomInButton$$($context$$664$$, new D.$DvtButton$$($context$$664$$, $ena$$17$$, $ovr$$12$$, $dwn$$12$$, $dis$$7_imageURIs$$8$$), $panZoomCanvas$$23$$, $resources$$26$$, $eventManager$$41$$)
};
D.$DvtButtonLAFUtils$$.$createZoomOutButton$ = function $$DvtButtonLAFUtils$$$$createZoomOutButton$$($context$$665$$, $panZoomCanvas$$24$$, $resources$$27$$, $eventManager$$42$$, $dis$$8_imageURIs$$9$$, $styleMap$$71$$) {
  var $ena$$18$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$665$$, 0, $dis$$8_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$], $styleMap$$71$$), $ovr$$13$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$665$$, 1, $dis$$8_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$], $styleMap$$71$$), $dwn$$13$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$665$$, 2, $dis$$8_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$], $styleMap$$71$$);
  $dis$$8_imageURIs$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$665$$, 3, $dis$$8_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$], $styleMap$$71$$);
  return new D.$DvtZoomOutButton$$($context$$665$$, new D.$DvtButton$$($context$$665$$, $ena$$18$$, $ovr$$13$$, $dwn$$13$$, $dis$$8_imageURIs$$9$$), $panZoomCanvas$$24$$, $resources$$27$$, $eventManager$$42$$)
};
D.$DvtButtonLAFUtils$$.$createLayoutItemButtonState$ = function $$DvtButtonLAFUtils$$$$createLayoutItemButtonState$$($context$$666_image$$17$$, $attrb_bname$$4$$, $state$$83$$, $images$$20$$, $styleMap$$72$$) {
  var $r$$77$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$72$$, "buttonRadius", 0), $w$$75$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$72$$, "buttonWidth", 0), $h$$67$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$72$$, "buttonWidth", 0), $shape$$86$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$666_image$$17$$, $r$$77$$, $w$$75$$, $h$$67$$, $styleMap$$72$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$83$$, $shape$$86$$, $w$$75$$, $h$$67$$ + 2 * $r$$77$$, $styleMap$$72$$, D.$JSCompiler_alias_TRUE$$);
  $attrb_bname$$4$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$666_image$$17$$, $state$$83$$, $attrb_bname$$4$$);
  ($context$$666_image$$17$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$666_image$$17$$, $images$$20$$[$attrb_bname$$4$$], $w$$75$$, $h$$67$$)) && $shape$$86$$.$addChild$($context$$666_image$$17$$);
  return $shape$$86$$
};
D.$DvtButtonLAFUtils$$.$_getLayoutURI$ = function $$DvtButtonLAFUtils$$$$_getLayoutURI$$($context$$667$$, $state$$84$$, $attrb$$1_bname$$5$$, $bSel$$3$$) {
  var $r2l$$ = "";
  0 == $state$$84$$ ? $state$$84$$ = D.$DvtButtonLAFUtils$$.$_UP$ : 1 == $state$$84$$ ? $state$$84$$ = D.$DvtButtonLAFUtils$$.$_OVER$ : 2 == $state$$84$$ && ($state$$84$$ = D.$DvtButtonLAFUtils$$.$_DOWN$);
  $bSel$$3$$ && ($attrb$$1_bname$$5$$ += D.$DvtButtonLAFUtils$$.$_SEL$, (0,D.$DvtAgent$isRightToLeft$$)($context$$667$$) && ($r2l$$ = D.$DvtButtonLAFUtils$$.$_R2L$));
  return $attrb$$1_bname$$5$$ + ($state$$84$$ + $r2l$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardButtonState$ = function $$DvtButtonLAFUtils$$$$createPanelCardButtonState$$($context$$668$$, $state$$85$$, $styleMap$$73$$, $images$$21$$) {
  var $attrb$$2$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$668$$, $state$$85$$, D.$DvtButtonLAFUtils$$.$_SYNC$, D.$JSCompiler_alias_TRUE$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$668$$, $state$$85$$, $images$$21$$[$attrb$$2$$], $styleMap$$73$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardSyncItemState$ = function $$DvtButtonLAFUtils$$$$createPanelCardSyncItemState$$($base$$6_context$$669$$, $state$$86$$, $ww$$117$$, $hh$$99$$, $styleMap$$74$$) {
  var $r$$78$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$74$$, "buttonRadius", 0);
  $base$$6_context$$669$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($base$$6_context$$669$$, $r$$78$$, $ww$$117$$, $hh$$99$$, $styleMap$$74$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$86$$, $base$$6_context$$669$$, $ww$$117$$, $hh$$99$$ + 2 * $r$$78$$, $styleMap$$74$$, D.$JSCompiler_alias_TRUE$$);
  return $base$$6_context$$669$$
};
D.$DvtButtonLAFUtils$$.$createControlButtonState$ = function $$DvtButtonLAFUtils$$$$createControlButtonState$$($context$$670$$, $attrb$$3_bname$$6$$, $state$$87$$, $images$$23$$, $styleMap$$75$$) {
  $attrb$$3_bname$$6$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$670$$, $state$$87$$, $attrb$$3_bname$$6$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$670$$, $state$$87$$, $images$$23$$[$attrb$$3_bname$$6$$], $styleMap$$75$$)
};
D.$DvtButtonLAFUtils$$.$createExpandButton$ = function $$DvtButtonLAFUtils$$$$createExpandButton$$($context$$671$$, $dwn$$14_imageURIs$$10$$, $h$$68$$, $styleMap$$76$$, $bR2L$$7$$) {
  var $ena$$19$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$671$$, 0, $h$$68$$, $dwn$$14_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$], $styleMap$$76$$, $bR2L$$7$$), $ovr$$14$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$671$$, 1, $h$$68$$, $dwn$$14_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$], $styleMap$$76$$, $bR2L$$7$$);
  $dwn$$14_imageURIs$$10$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$671$$, 2, $h$$68$$, $dwn$$14_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$], $styleMap$$76$$, $bR2L$$7$$);
  return new D.$DvtButton$$($context$$671$$, $ena$$19$$, $ovr$$14$$, $dwn$$14_imageURIs$$10$$)
};
D.$DvtButtonLAFUtils$$.$createCollapseButton$ = function $$DvtButtonLAFUtils$$$$createCollapseButton$$($context$$672$$, $dwn$$15_imageURIs$$11$$, $h$$69$$, $styleMap$$77$$, $bR2L$$8$$) {
  var $ena$$20$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$672$$, 0, $h$$69$$, $dwn$$15_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$], $styleMap$$77$$, $bR2L$$8$$), $ovr$$15$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$672$$, 1, $h$$69$$, $dwn$$15_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$], $styleMap$$77$$, $bR2L$$8$$);
  $dwn$$15_imageURIs$$11$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$672$$, 2, $h$$69$$, $dwn$$15_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$], $styleMap$$77$$, $bR2L$$8$$);
  return new D.$DvtButton$$($context$$672$$, $ena$$20$$, $ovr$$15$$, $dwn$$15_imageURIs$$11$$)
};
D.$DvtButtonLAFUtils$$.$createQuickQueryButton$ = function $$DvtButtonLAFUtils$$$$createQuickQueryButton$$($context$$673$$, $imageURIs$$12$$) {
  var $ena$$21$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$673$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$]), $ovr$$16$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$673$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$]), $dwn$$16$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$673$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$]);
  return new D.$DvtButton$$($context$$673$$, $ena$$21$$, $ovr$$16$$, $dwn$$16$$)
};
D.$DvtButtonLAFUtils$$.$createClearResultsButton$ = function $$DvtButtonLAFUtils$$$$createClearResultsButton$$($context$$674$$, $imageURIs$$13$$) {
  var $ena$$22$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$674$$, $imageURIs$$13$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$]), $ovr$$17$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$674$$, $imageURIs$$13$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$]), $dwn$$17$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$674$$, $imageURIs$$13$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$]);
  return new D.$DvtButton$$($context$$674$$, $ena$$22$$, $ovr$$17$$, $dwn$$17$$)
};
D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$ = function $$DvtButtonLAFUtils$$$$_createButtonBaseImage$$($context$$675_image$$18$$, $base$$7_state$$88$$, $uri$$15$$, $styleMap$$78$$) {
  var $w$$76$$, $h$$70$$, $r$$79$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "buttonRadius", 0);
  if("undefined" === $w$$76$$ || $w$$76$$ == D.$JSCompiler_alias_NULL$$) {
    $w$$76$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "buttonWidth", 0)
  }
  if("undefined" === $h$$70$$ || $h$$70$$ == D.$JSCompiler_alias_NULL$$) {
    $h$$70$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "buttonWidth", 0)
  }
  $base$$7_state$$88$$ = D.$DvtButtonLAFUtils$$.$_drawBaseButton$($context$$675_image$$18$$, $base$$7_state$$88$$, $r$$79$$, $w$$76$$, $h$$70$$, $styleMap$$78$$);
  ($context$$675_image$$18$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$675_image$$18$$, $uri$$15$$, $w$$76$$, $h$$70$$)) && $base$$7_state$$88$$.$addChild$($context$$675_image$$18$$);
  return $base$$7_state$$88$$
};
D.$DvtButtonLAFUtils$$.$_loadIcon$ = function $$DvtButtonLAFUtils$$$$_loadIcon$$($context$$676$$, $uri$$16$$, $buttonWidth$$8$$, $buttonHeight$$3$$) {
  var $image$$19$$ = new D.$DvtImage$$($context$$676$$, $uri$$16$$);
  $image$$19$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$676$$, $uri$$16$$, function($context$$676$$) {
    $context$$676$$ != D.$JSCompiler_alias_NULL$$ && ($context$$676$$.width && $context$$676$$.height) && ($image$$19$$.$setWidth$($context$$676$$.width), $image$$19$$.$setHeight$($context$$676$$.height), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($image$$19$$, $buttonWidth$$8$$ / 2 - $context$$676$$.width / 2, $buttonHeight$$3$$ / 2 - $context$$676$$.height / 2))
  });
  return $image$$19$$
};
D.$DvtButtonLAFUtils$$.$_createPanButtonState$ = function $$DvtButtonLAFUtils$$$$_createPanButtonState$$($context$$677_image$$20$$, $uri$$17$$, $styleMap$$79$$) {
  var $mc$$5$$ = new D.$DvtContainer$$($context$$677_image$$20$$), $hitZone$$ = new D.$DvtCircle$$($context$$677_image$$20$$, 20, 20, 20);
  $hitZone$$.$setAlpha$(0);
  $hitZone$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$79$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $mc$$5$$.$addChild$($hitZone$$);
  ($context$$677_image$$20$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$677_image$$20$$, $uri$$17$$)) && $mc$$5$$.$addChild$($context$$677_image$$20$$);
  return $mc$$5$$
};
D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$ = function $$DvtButtonLAFUtils$$$$_createRecenterButtonState$$($context$$678_image$$21$$, $uri$$18$$, $styleMap$$80$$) {
  var $shape$$89$$ = new D.$DvtContainer$$($context$$678_image$$21$$), $hitZone$$1$$ = new D.$DvtCircle$$($context$$678_image$$21$$, 11, 11, 8);
  $hitZone$$1$$.$setAlpha$(0);
  $hitZone$$1$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$80$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $shape$$89$$.$addChild$($hitZone$$1$$);
  ($context$$678_image$$21$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$678_image$$21$$, $uri$$18$$)) && $shape$$89$$.$addChild$($context$$678_image$$21$$);
  return $shape$$89$$
};
D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$ = function $$DvtButtonLAFUtils$$$$_createCollapseExpandButtonState$$($context$$679_iconLoader$$, $sprite_state$$89$$, $nh$$5$$, $imageW_uri$$19$$, $styleMap$$81$$, $bR2L$$9_imageH$$) {
  $nh$$5$$ || ($nh$$5$$ = 47);
  $sprite_state$$89$$ = D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$($context$$679_iconLoader$$, $sprite_state$$89$$, $nh$$5$$, $styleMap$$81$$, $bR2L$$9_imageH$$);
  if($context$$679_iconLoader$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$679_iconLoader$$, $imageW_uri$$19$$)) {
    $imageW_uri$$19$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$81$$, "imageWidth", 0), $bR2L$$9_imageH$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$81$$, "imageHeight", 0), $sprite_state$$89$$.$addChild$($context$$679_iconLoader$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$679_iconLoader$$, ((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$81$$, "openCloseButtonWidth", 0) - $imageW_uri$$19$$) / 2, ($nh$$5$$ - $bR2L$$9_imageH$$) / 2)
  }
  return $sprite_state$$89$$
};
D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$ = function $$DvtButtonLAFUtils$$$$_createQuickQueryButtonState$$($context$$680$$, $uri$$20$$) {
  var $iconLoader$$1$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$680$$, $uri$$20$$);
  $iconLoader$$1$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  return $iconLoader$$1$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonBackground$ = function $$DvtButtonLAFUtils$$$$createPanButtonBackground$$($context$$681$$, $styleMap$$82$$) {
  var $shape$$90$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$681$$), $bgColor$$11$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$82$$, "background-color", D.$JSCompiler_alias_NULL$$), $borderColor$$54$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$82$$, "border-color", D.$JSCompiler_alias_NULL$$);
  "solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$82$$, "fill-type", D.$JSCompiler_alias_NULL$$) ? ($shape$$90$$.$setSolidStroke$($borderColor$$54$$), $shape$$90$$.$setSolidFill$($bgColor$$11$$)) : ($shape$$90$$.$setStroke$(new D.$DvtLinearGradientStroke$$(36, ["#8D93A5", "#E0EAEB", $borderColor$$54$$], [1, 1, 1], [0, 125 / 255, 1], [0, 0, 40, 40], 1)), $shape$$90$$.$setFill$(new D.$DvtLinearGradientFill$$(90, [$bgColor$$11$$, $bgColor$$11$$, "#5A83BE", $bgColor$$11$$], [0.9, 0.1, 0, 0.7], 
  [0, 105 / 255, 150 / 255, 1], [0, 0, 40, 40])));
  return $shape$$90$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$ = function $$DvtButtonLAFUtils$$$$createPanButtonUnderlay$$($context$$682$$, $styleMap$$83$$) {
  var $shape$$91$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$682$$), $color$$85$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$83$$, "background-color", D.$JSCompiler_alias_NULL$$);
  $shape$$91$$.$setSolidStroke$($color$$85$$);
  $shape$$91$$.$setSolidFill$($color$$85$$);
  return $shape$$91$$
};
D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$ = function $$DvtButtonLAFUtils$$$$_drawPanButtonBase$$($context$$683$$) {
  var $cmds$$22$$ = D.$DvtPathUtils$$.moveTo(40, 20) + D.$DvtPathUtils$$.$quadTo$(40, 20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + D.$DvtPathUtils$$.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20, 40) + D.$DvtPathUtils$$.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + D.$DvtPathUtils$$.$quadTo$(0, 
  20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20) + D.$DvtPathUtils$$.$quadTo$(0, 20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + D.$DvtPathUtils$$.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20, 0) + D.$DvtPathUtils$$.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + D.$DvtPathUtils$$.$quadTo$(40, 
  20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20) + D.$DvtPathUtils$$.closePath();
  return new D.$DvtPath$$($context$$683$$, $cmds$$22$$, "draw_pan_button")
};
D.$DvtButtonLAFUtils$$.$_setGradientBorder$ = function $$DvtButtonLAFUtils$$$$_setGradientBorder$$($shape$$92$$, $ww$$120$$, $hh$$102$$, $xx$$62$$, $yy$$62$$) {
  $shape$$92$$.$setSolidStroke$("#FFFFFF");
  $shape$$92$$.$setStroke$(new D.$DvtLinearGradientStroke$$(63, ["#8D93A5", "#E0EAEB", "#FFFFFF"], [1, 1, 1], [0, 155 / 255, 1], [$xx$$62$$, $yy$$62$$, $ww$$120$$, $hh$$102$$], 1))
};
D.$DvtButtonLAFUtils$$.$_setButtonColors$ = function $$DvtButtonLAFUtils$$$$_setButtonColors$$($state$$91$$, $shape$$93$$, $ww$$121$$, $hh$$103$$, $styleMap$$84$$, $isDropdownItem$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$84$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    !$isDropdownItem$$ || $isDropdownItem$$ && 0 == $state$$91$$ ? (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$93$$) : (1 == $state$$91$$ || 2 == $state$$91$$) && $shape$$93$$.$setFill$(new D.$DvtSolidFill$$("#EBECED"))
  }else {
    if("skyros" == $styleMap$$84$$.skin) {
      switch($state$$91$$) {
        case 1:
          $shape$$93$$.$setFill$(new D.$DvtSolidFill$$("#FFFFFF", 0.7));
          $shape$$93$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$84$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        case 2:
          $shape$$93$$.$setFill$(new D.$DvtSolidFill$$("#B3C6DB"));
          $shape$$93$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$84$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        default:
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$93$$)
      }
    }else {
      var $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$;
      switch($state$$91$$) {
        case 3:
        ;
        case 0:
          $fill_colors$$10$$ = ["#5B868A", "#FFFFFF", "#FFFFFF", "#5B868A"];
          $fill_alphas$$10$$ = [0.01, 0, 0.05, 0.01];
          $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 1:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$93$$, $ww$$121$$, $hh$$103$$, 0, 0);
          $fill_colors$$10$$ = ["#FFFFFF", "#4671B0", "#4671B0", "#FFFFFF"];
          $fill_alphas$$10$$ = [0.5, 0.2, 0.1, 0.7];
          $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$93$$, $ww$$121$$, $hh$$103$$, 0, 0), $fill_colors$$10$$ = ["#E0EAEB", "#5B868A", "#4671B0"], $fill_alphas$$10$$ = [0.1, 0.3, 0.6], $fill_ratios$$10$$ = [0, 130 / 255, 1]
      }
      $shape$$93$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$, [0, 0, $ww$$121$$, $hh$$103$$]))
    }
  }
};
D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$ = function $$DvtButtonLAFUtils$$$$_setCloseButtonColors$$($fill$$62_state$$92$$, $shape$$94$$, $bgColor$$12_ww$$122$$, $hh$$104$$, $styleMap$$85$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$85$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$94$$)
  }else {
    var $borderColor$$55_stroke$$104$$;
    $borderColor$$55_stroke$$104$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$85$$, "border-color", D.$JSCompiler_alias_NULL$$);
    if("solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$85$$, "fill-type", D.$JSCompiler_alias_NULL$$)) {
      $bgColor$$12_ww$$122$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$85$$, "background-color", D.$JSCompiler_alias_NULL$$);
      var $bgAlpha$$2$$, $strokeAlpha$$1$$;
      switch($fill$$62_state$$92$$) {
        case 0:
          $bgAlpha$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$85$$, "backgroundAlpha", 1);
          $strokeAlpha$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$85$$, "borderAlpha", 1);
          break;
        case 2:
        ;
        case 1:
          $bgAlpha$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$85$$, "backgroundHoverAlpha", 1), $strokeAlpha$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$85$$, "borderHoverAlpha", 1)
      }
      $fill$$62_state$$92$$ = new D.$DvtSolidFill$$($bgColor$$12_ww$$122$$, $bgAlpha$$2$$);
      $borderColor$$55_stroke$$104$$ = new D.$DvtSolidStroke$$($borderColor$$55_stroke$$104$$, $strokeAlpha$$1$$)
    }else {
      var $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$;
      switch($fill$$62_state$$92$$) {
        case 0:
          $fill_colors$$11$$ = ["#FFFFFF", "#5B868A", "#5B868A"];
          $fill_alphas$$11$$ = [0, 0.2, 0.3];
          $fill_ratios$$11$$ = [0, 130 / 255, 1];
          break;
        case 1:
          $fill_colors$$11$$ = ["#FFFFFF", "#FFFFFF", "#4671B0", "#4671B0"];
          $fill_alphas$$11$$ = [0.1, 0.2, 0.1, 0.6];
          $fill_ratios$$11$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          $fill_colors$$11$$ = ["#4671B0", "#5B868A", "#5B868A"], $fill_alphas$$11$$ = [0.5, 0.2, 0.4], $fill_ratios$$11$$ = [0, 130 / 255, 1]
      }
      $fill$$62_state$$92$$ = new D.$DvtLinearGradientFill$$(0, $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$, [0, 0, $bgColor$$12_ww$$122$$, $hh$$104$$]);
      $borderColor$$55_stroke$$104$$ = new D.$DvtSolidStroke$$($borderColor$$55_stroke$$104$$, 1, 0.8)
    }
    $shape$$94$$.$setStroke$($borderColor$$55_stroke$$104$$);
    $shape$$94$$.$setFill$($fill$$62_state$$92$$)
  }
};
D.$DvtButtonLAFUtils$$.$_setSliderButtonColors$ = function $$DvtButtonLAFUtils$$$$_setSliderButtonColors$$($state$$93$$, $shape$$95$$, $ww$$123$$, $hh$$105$$, $xx$$65$$, $yy$$65$$) {
  var $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$;
  switch($state$$93$$) {
    case 0:
      $shape$$95$$.$setSolidStroke$("#FFFFFF", 1, 0.25);
      $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB", "#FFFFFF"];
      $fill_alphas$$12$$ = [0.6, 0.3, 0.3, 0.8];
      $fill_ratios$$12$$ = [0, 125 / 255, 130 / 255, 1];
      break;
    case 1:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$95$$, $ww$$123$$, $hh$$105$$, $xx$$65$$, $yy$$65$$);
      $fill_colors$$12$$ = ["#4671B0", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
      $fill_alphas$$12$$ = [0.4, 0.3, 0.7, 1];
      $fill_ratios$$12$$ = [0, 70 / 255, 200 / 255, 1];
      break;
    case 2:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$95$$, $ww$$123$$, $hh$$105$$, $xx$$65$$, $yy$$65$$), $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB"], $fill_alphas$$12$$ = [0.6, 0.5, 0.8], $fill_ratios$$12$$ = [0, 130 / 255, 1]
  }
  $shape$$95$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$, [$xx$$65$$, $yy$$65$$, $ww$$123$$, $hh$$105$$]))
};
D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$ = function $$DvtButtonLAFUtils$$$$GetButtonPathCommands$$($buttonWidth$$10$$, $buttonHeight$$4$$, $r$$82$$, $bidi$$5$$) {
  return $bidi$$5$$ ? ["M", $buttonWidth$$10$$, 0, "L", $r$$82$$, 0, "A", $r$$82$$, $r$$82$$, 0, 0, 0, 0, $r$$82$$, "L", 0, $buttonHeight$$4$$ - $r$$82$$, "A", $r$$82$$, $r$$82$$, 0, 0, 0, $r$$82$$, $buttonHeight$$4$$, "L", $buttonWidth$$10$$, $buttonHeight$$4$$] : ["M", 0, 0, "L", $buttonWidth$$10$$ - $r$$82$$, 0, "A", $r$$82$$, $r$$82$$, 0, 0, 1, $buttonWidth$$10$$, $r$$82$$, "L", $buttonWidth$$10$$, $buttonHeight$$4$$ - $r$$82$$, "A", $r$$82$$, $r$$82$$, 0, 0, 1, $buttonWidth$$10$$ - $r$$82$$, 
  $buttonHeight$$4$$, "L", 0, $buttonHeight$$4$$]
};
D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$ = function $$DvtButtonLAFUtils$$$$_drawOpenCloseButtonHelper$$($context$$685_shape$$96$$, $state$$94$$, $buttonHeight$$5_nh$$6$$, $styleMap$$86$$, $bR2L$$10$$) {
  $buttonHeight$$5_nh$$6$$ || ($buttonHeight$$5_nh$$6$$ = 47);
  var $r$$83$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$86$$, "border-radius", 0)), $buttonWidth$$11$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$86$$, "openCloseButtonWidth", 0);
  $buttonHeight$$5_nh$$6$$ = window.Math.max($buttonHeight$$5_nh$$6$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$86$$, "buttonHeight", $buttonHeight$$5_nh$$6$$));
  $context$$685_shape$$96$$ = new D.$DvtPath$$($context$$685_shape$$96$$, D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$11$$, $buttonHeight$$5_nh$$6$$, $r$$83$$, $bR2L$$10$$));
  D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$($state$$94$$, $context$$685_shape$$96$$, $buttonWidth$$11$$, $buttonHeight$$5_nh$$6$$, $styleMap$$86$$);
  return $context$$685_shape$$96$$
};
D.$DvtButtonLAFUtils$$.$_drawBaseButton$ = function $$DvtButtonLAFUtils$$$$_drawBaseButton$$($context$$686_shape$$97$$, $state$$95$$, $r$$84$$, $ww$$124$$, $hh$$106$$, $styleMap$$87$$) {
  $context$$686_shape$$97$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$686_shape$$97$$, $r$$84$$, $ww$$124$$, $hh$$106$$, $styleMap$$87$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$95$$, $context$$686_shape$$97$$, $ww$$124$$, $hh$$106$$ + 2 * $r$$84$$, $styleMap$$87$$);
  return $context$$686_shape$$97$$
};
D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$ = function $$DvtButtonLAFUtils$$$$_createBaseButtonShape$$($context$$687$$, $r$$85$$, $ww$$125$$, $hh$$107$$, $styleMap$$88_x$$315$$) {
  if("skyros" == $styleMap$$88_x$$315$$.skin) {
    return new D.$DvtRect$$($context$$687$$, 0, 0, $ww$$125$$, $hh$$107$$)
  }
  $ww$$125$$ -= 2 * $r$$85$$;
  $hh$$107$$ -= 2 * $r$$85$$;
  $styleMap$$88_x$$315$$ = $ww$$125$$ + $r$$85$$;
  var $y$$280$$ = $hh$$107$$ + $r$$85$$, $cmds$$23$$ = D.$DvtPathUtils$$.moveTo($styleMap$$88_x$$315$$ + $r$$85$$, $y$$280$$) + D.$DvtPathUtils$$.$quadTo$($r$$85$$ + $styleMap$$88_x$$315$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $y$$280$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $styleMap$$88_x$$315$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $y$$280$$) + D.$DvtPathUtils$$.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $styleMap$$88_x$$315$$, $r$$85$$ + $y$$280$$, $styleMap$$88_x$$315$$, 
  $r$$85$$ + $y$$280$$) + D.$DvtPathUtils$$.lineTo($styleMap$$88_x$$315$$, $y$$280$$ + $r$$85$$) + D.$DvtPathUtils$$.lineTo($styleMap$$88_x$$315$$ - $ww$$125$$, $r$$85$$ + $y$$280$$);
  $styleMap$$88_x$$315$$ -= $ww$$125$$;
  $cmds$$23$$ += D.$DvtPathUtils$$.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $styleMap$$88_x$$315$$, $r$$85$$ + $y$$280$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $styleMap$$88_x$$315$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $y$$280$$) + D.$DvtPathUtils$$.$quadTo$(-$r$$85$$ + $styleMap$$88_x$$315$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $y$$280$$, -$r$$85$$ + $styleMap$$88_x$$315$$, $y$$280$$) + D.$DvtPathUtils$$.lineTo($styleMap$$88_x$$315$$ - $r$$85$$, $y$$280$$) + 
  D.$DvtPathUtils$$.lineTo($styleMap$$88_x$$315$$ - $r$$85$$, $y$$280$$ - $hh$$107$$);
  $y$$280$$ -= $hh$$107$$;
  $cmds$$23$$ += D.$DvtPathUtils$$.$quadTo$(-$r$$85$$ + $styleMap$$88_x$$315$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $y$$280$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $styleMap$$88_x$$315$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $y$$280$$) + D.$DvtPathUtils$$.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $styleMap$$88_x$$315$$, -$r$$85$$ + $y$$280$$, $styleMap$$88_x$$315$$, -$r$$85$$ + $y$$280$$) + D.$DvtPathUtils$$.lineTo($styleMap$$88_x$$315$$, -$r$$85$$ + 
  $y$$280$$) + D.$DvtPathUtils$$.lineTo($styleMap$$88_x$$315$$ + $ww$$125$$, -$r$$85$$ + $y$$280$$);
  $styleMap$$88_x$$315$$ += $ww$$125$$;
  $cmds$$23$$ += D.$DvtPathUtils$$.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $styleMap$$88_x$$315$$, -$r$$85$$ + $y$$280$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $styleMap$$88_x$$315$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $y$$280$$) + D.$DvtPathUtils$$.$quadTo$($r$$85$$ + $styleMap$$88_x$$315$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $y$$280$$, $r$$85$$ + $styleMap$$88_x$$315$$, $y$$280$$) + D.$DvtPathUtils$$.lineTo($styleMap$$88_x$$315$$ + $r$$85$$, $y$$280$$ + 
  $hh$$107$$) + D.$DvtPathUtils$$.closePath();
  return new D.$DvtPath$$($context$$687$$, $cmds$$23$$)
};
D.$DvtButtonLAFUtils$$.$drawDropdownShape$ = function $$DvtButtonLAFUtils$$$$drawDropdownShape$$($context$$688$$, $ww$$126$$, $hh$$108$$, $r$$86_styleMap$$89$$) {
  $r$$86_styleMap$$89$$ = (0,D.$DvtStyleUtils$getStyle$$)($r$$86_styleMap$$89$$, "radius", 0);
  $ww$$126$$ -= 2 * $r$$86_styleMap$$89$$;
  $hh$$108$$ -= $r$$86_styleMap$$89$$;
  var $x$$316$$ = $ww$$126$$ + $r$$86_styleMap$$89$$, $y$$281$$ = $hh$$108$$, $cmds$$24$$ = D.$DvtPathUtils$$.moveTo($x$$316$$ + $r$$86_styleMap$$89$$, $y$$281$$) + D.$DvtPathUtils$$.$quadTo$($r$$86_styleMap$$89$$ + $x$$316$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$86_styleMap$$89$$ + $y$$281$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$86_styleMap$$89$$ + $x$$316$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$86_styleMap$$89$$ + $y$$281$$) + D.$DvtPathUtils$$.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * 
  $r$$86_styleMap$$89$$ + $x$$316$$, $r$$86_styleMap$$89$$ + $y$$281$$, $x$$316$$, $r$$86_styleMap$$89$$ + $y$$281$$) + D.$DvtPathUtils$$.lineTo($x$$316$$, $r$$86_styleMap$$89$$ + $y$$281$$) + D.$DvtPathUtils$$.lineTo($x$$316$$ - $ww$$126$$, $r$$86_styleMap$$89$$ + $y$$281$$), $x$$316$$ = $x$$316$$ - $ww$$126$$, $cmds$$24$$ = $cmds$$24$$ + (D.$DvtPathUtils$$.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$86_styleMap$$89$$ + $x$$316$$, $r$$86_styleMap$$89$$ + $y$$281$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * 
  $r$$86_styleMap$$89$$ + $x$$316$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$86_styleMap$$89$$ + $y$$281$$) + D.$DvtPathUtils$$.$quadTo$(-$r$$86_styleMap$$89$$ + $x$$316$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$86_styleMap$$89$$ + $y$$281$$, -$r$$86_styleMap$$89$$ + $x$$316$$, $y$$281$$) + D.$DvtPathUtils$$.lineTo(-$r$$86_styleMap$$89$$ + $x$$316$$, $y$$281$$) + D.$DvtPathUtils$$.lineTo(-$r$$86_styleMap$$89$$ + $x$$316$$, $y$$281$$ - $hh$$108$$)), $y$$281$$ = $y$$281$$ - $hh$$108$$, $cmds$$24$$ = 
  $cmds$$24$$ + (D.$DvtPathUtils$$.lineTo($x$$316$$ + $ww$$126$$ + $r$$86_styleMap$$89$$, $y$$281$$) + D.$DvtPathUtils$$.lineTo($x$$316$$ + $ww$$126$$ + $r$$86_styleMap$$89$$, $y$$281$$ + $hh$$108$$) + D.$DvtPathUtils$$.closePath());
  return new D.$DvtPath$$($context$$688$$, $cmds$$24$$)
};
D.$DvtButtonLAFUtils$$.$_getDimForced$ = function $$DvtButtonLAFUtils$$$$_getDimForced$$($context$$689$$, $obj$$361$$) {
  $obj$$361$$ instanceof D.$DvtButton$$ && ($obj$$361$$ = $obj$$361$$.$getChildAt$(0));
  return(0,D.$DvtDisplayableUtils$_getDimForced$$)($context$$689$$, $obj$$361$$)
};
D.$DvtButtonLAFUtils$$.$parseStyle$ = function $$DvtButtonLAFUtils$$$$parseStyle$$($dispObj$$33$$, $buttonStyle$$31$$) {
  var $fillType$$12_linearGradient$$4$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_FILL_TYPE$, $borderColor$$56_stroke$$105$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_BORDER_COLOR$, $backgroundColor$$26$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$, $background$$13$$;
  $buttonStyle$$31$$ && ($buttonStyle$$31$$.$getStyle$("fill-type") && ($fillType$$12_linearGradient$$4$$ = $buttonStyle$$31$$.$getStyle$("fill-type")), $buttonStyle$$31$$.$getStyle$("border-color") && ($borderColor$$56_stroke$$105$$ = $buttonStyle$$31$$.$getStyle$("border-color")), $buttonStyle$$31$$.$getStyle$("background-color") && ($backgroundColor$$26$$ = $buttonStyle$$31$$.$getStyle$("background-color")), $buttonStyle$$31$$.$getStyle$("background") && ($background$$13$$ = $buttonStyle$$31$$.$getStyle$("background")));
  var $borderColor$$56_stroke$$105$$ = new D.$DvtSolidStroke$$($borderColor$$56_stroke$$105$$), $fill$$63_fill_colors$$13_midColor$$11$$;
  if("solid" == $fillType$$12_linearGradient$$4$$) {
    $fill$$63_fill_colors$$13_midColor$$11$$ = new D.$DvtSolidFill$$($backgroundColor$$26$$)
  }else {
    var $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$, $degree$$3$$;
    if($background$$13$$ && 0 <= $background$$13$$.indexOf("linear-gradient")) {
      if($fillType$$12_linearGradient$$4$$ = (0,D.$DvtGradientParser$parseCSSGradient$$)($background$$13$$)) {
        $degree$$3$$ = $fillType$$12_linearGradient$$4$$.$getAngle$(), $fill$$63_fill_colors$$13_midColor$$11$$ = $fillType$$12_linearGradient$$4$$.$_arColors$, $endColor$$16_fill_alphas$$13$$ = $fillType$$12_linearGradient$$4$$.$_arAlphas$, $fill_ratios$$13$$ = $fillType$$12_linearGradient$$4$$.$_arRatios$
      }
    }else {
      $fill$$63_fill_colors$$13_midColor$$11$$ = $backgroundColor$$26$$, $endColor$$16_fill_alphas$$13$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$, $fill$$63_fill_colors$$13_midColor$$11$$ != D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$ && ($endColor$$16_fill_alphas$$13$$ = D.$DvtColorUtils$$.$inferColor$(D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$, D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$, $fill$$63_fill_colors$$13_midColor$$11$$)), $fill$$63_fill_colors$$13_midColor$$11$$ = [$fill$$63_fill_colors$$13_midColor$$11$$, 
      $endColor$$16_fill_alphas$$13$$], $endColor$$16_fill_alphas$$13$$ = [0.6, 0.8], $fill_ratios$$13$$ = [0, 1], $degree$$3$$ = -270
    }
    $fill$$63_fill_colors$$13_midColor$$11$$ = new D.$DvtLinearGradientFill$$($degree$$3$$, $fill$$63_fill_colors$$13_midColor$$11$$, $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$)
  }
  $dispObj$$33$$.$setFill$($fill$$63_fill_colors$$13_midColor$$11$$);
  $dispObj$$33$$.$setStroke$($borderColor$$56_stroke$$105$$)
};
D.$DvtCommonLegendDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendDefaults$$, D.$DvtObj$$, "DvtCommonLegendDefaults");
D.$DvtCommonLegendDefaults$$.$SKIN_ALTA$ = {rowColGap:6, separatorGap:7, indicatorSize:16, buttonSize:12, dwn:"#0572CE", ovr:"#5D5D5D", ena:"#7E7F80", separatorColor:"#D9DFE3"};
D.$DvtCommonLegendDefaults$$.$SKIN_SKYROS$ = {dwn:"#202F48", ovr:"#184DD8", ena:"#003D5B"};
D.$DvtCommonLegendDefaults$$.$DEFAULT$ = {rowColGap:4, separatorGap:4, indicatorSize:11, buttonSize:11, dwn:"#000000", ovr:"#245EDD", ena:"#495D7C", separatorColor:"#ADB6C7"};
D.$DvtCommonLegendDefaults$$.$calcOptions$ = function $$DvtCommonLegendDefaults$$$$calcOptions$$($userOptions$$9$$) {
  var $defaults$$15$$ = D.$DvtCommonLegendDefaults$$.$_getDefaults$($userOptions$$9$$);
  return $userOptions$$9$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$9$$, $defaults$$15$$) : $defaults$$15$$
};
D.$DvtCommonLegendDefaults$$.$_getDefaults$ = function $$DvtCommonLegendDefaults$$$$_getDefaults$$($userOptions$$10$$) {
  var $defaults$$16$$ = D.$JSCompiler_alias_NULL$$;
  return $defaults$$16$$ = $userOptions$$10$$ && "skyros" === $userOptions$$10$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtCommonLegendDefaults$$.$SKIN_SKYROS$, D.$DvtCommonLegendDefaults$$.$DEFAULT$) : $userOptions$$10$$ && "alta" === $userOptions$$10$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtCommonLegendDefaults$$.$SKIN_ALTA$, D.$DvtCommonLegendDefaults$$.$DEFAULT$) : D.$DvtJSONUtils$$.clone(D.$DvtCommonLegendDefaults$$.$DEFAULT$)
};
D.DvtCommonLegend = function $DvtCommonLegend$($context$$690$$, $w$$77$$, $h$$71$$, $images$$24$$, $skinName$$9$$) {
  this.Init($context$$690$$, $w$$77$$, $h$$71$$, $images$$24$$, $skinName$$9$$)
};
D.$DvtObj$$.$createSubclass$(D.DvtCommonLegend, D.$DvtContainer$$, "DvtCommonLegend");
D.DvtCommonLegend.$LEGEND_DISCLOSED_KEY$ = "isLegendDisclosed";
D.DvtCommonLegend.$SKIN_NAME$ = "skin";
D.$JSCompiler_prototypeAlias$$ = D.DvtCommonLegend.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$691$$, $w$$78$$, $h$$72$$, $images$$25$$, $skinName$$10$$) {
  D.DvtCommonLegend.$superclass$.Init.call(this, $context$$691$$, D.$JSCompiler_alias_NULL$$, $w$$78$$, $h$$72$$);
  this.$_isBiDi$ = (0,D.$DvtAgent$isRightToLeft$$)();
  this.$_width$ = this.$_viewportWidth$ = $w$$78$$;
  this.$_height$ = $h$$72$$;
  this.$_attrLookUp$ = {};
  this.$_hideAttrsLookUp$ = {};
  this.$_associations$ = [];
  this.$_addSeparators$ = D.$JSCompiler_alias_FALSE$$;
  this.$_separators$ = [];
  this.$_rollOverEnabled$ = this.$_showHideEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_hidden$ = [];
  this.$_images$ = $images$$25$$;
  this.$_styleMap$ = D.$DvtCommonLegendDefaults$$.$calcOptions$($skinName$$10$$ ? {skin:$skinName$$10$$} : D.$JSCompiler_alias_NULL$$);
  this.$_isWordWrap$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bundle$ = new D.$DvtUtilBundle$$
};
D.$JSCompiler_prototypeAlias$$.$__getBundle$ = (0,D.$JSCompiler_get$$)("$_bundle$");
D.$JSCompiler_prototypeAlias$$.$isWordWrap$ = (0,D.$JSCompiler_get$$)("$_isWordWrap$");
D.$JSCompiler_prototypeAlias$$.$setXML$ = (0,D.$JSCompiler_set$$)("$_legendNode$");
D.$JSCompiler_prototypeAlias$$.$setJSON$ = function $$JSCompiler_prototypeAlias$$$$setJSON$$($json$$2$$) {
  $json$$2$$ && (this.$_legendJSON$ = $json$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_isDisclosed$");
D.$JSCompiler_StaticMethods__renderLegendSection$$ = function $$JSCompiler_StaticMethods__renderLegendSection$$$($JSCompiler_StaticMethods__renderLegendSection$self$$, $childNodes$$37_legendSectionNode$$, $parent$$87$$, $availSpace$$101$$, $isBiDi$$1$$) {
  var $section$$14_sectionTitle$$ = $childNodes$$37_legendSectionNode$$.$getAttr$("label"), $section$$14_sectionTitle$$ = new D.$DvtCommonLegendSection$$($JSCompiler_StaticMethods__renderLegendSection$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSection$self$$, $section$$14_sectionTitle$$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_sectionTitleStyle$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$);
  $section$$14_sectionTitle$$.$render$($parent$$87$$, $availSpace$$101$$, $isBiDi$$1$$);
  if($childNodes$$37_legendSectionNode$$ = $childNodes$$37_legendSectionNode$$.$getChildNodes$()) {
    for(var $i$$837$$ = 0;$i$$837$$ < $childNodes$$37_legendSectionNode$$.length;$i$$837$$++) {
      var $childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$ = $childNodes$$37_legendSectionNode$$[$i$$837$$], $JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$;
      if("item" == $childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$.getName()) {
        $JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$ = $JSCompiler_StaticMethods__renderLegendSection$self$$;
        var $i$$inline_8228_prop$$inline_8225$$ = {};
        $i$$inline_8228_prop$$inline_8225$$.itemId = $childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$.$getAttr$("itemId");
        $i$$inline_8228_prop$$inline_8225$$.attributeGroupId = $childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$.$getAttr$("attributeGroupId");
        $i$$inline_8228_prop$$inline_8225$$.hideAttrs = $childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$.$getAttr$("hideAttrs");
        $JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$.$_context$, $JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$, $i$$inline_8228_prop$$inline_8225$$, $JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$.$_legendItemStyle$, 
        $JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$.$_styleMap$);
        $childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$ = $childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$.$getChildNodes$();
        for($i$$inline_8228_prop$$inline_8225$$ = 0;$i$$inline_8228_prop$$inline_8225$$ < $childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$.length;$i$$inline_8228_prop$$inline_8225$$++) {
          if("marker" == $childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$[$i$$inline_8228_prop$$inline_8225$$].getName()) {
            var $legendRow$$inline_10987$$ = $JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$, $markerNode$$inline_10988_opacity$$inline_10993$$ = $childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$[$i$$inline_8228_prop$$inline_8225$$], $url$$inline_10989$$ = $markerNode$$inline_10988_opacity$$inline_10993$$.$getAttr$("url"), $shape$$inline_10990$$ = $markerNode$$inline_10988_opacity$$inline_10993$$.$getAttr$("shapeType"), $color$$inline_10991$$ = 
            $markerNode$$inline_10988_opacity$$inline_10993$$.$getAttr$("color"), $pattern$$inline_10992$$ = $markerNode$$inline_10988_opacity$$inline_10993$$.$getAttr$("pattern");
            ($markerNode$$inline_10988_opacity$$inline_10993$$ = $markerNode$$inline_10988_opacity$$inline_10993$$.$getAttr$("opacity")) && ($markerNode$$inline_10988_opacity$$inline_10993$$ = (0,window.parseFloat)($markerNode$$inline_10988_opacity$$inline_10993$$));
            $legendRow$$inline_10987$$.setMarker($url$$inline_10989$$, $shape$$inline_10990$$, $color$$inline_10991$$, $pattern$$inline_10992$$, $markerNode$$inline_10988_opacity$$inline_10993$$)
          }else {
            "text" == $childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$[$i$$inline_8228_prop$$inline_8225$$].getName() && $JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$.$setText$($childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$[$i$$inline_8228_prop$$inline_8225$$].$getAttr$("value"))
          }
        }
      }else {
        "text" == $childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$.getName() && ($JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__renderLegendSection$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSection$self$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_legendItemStyle$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$), 
        $JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$.$setText$($childNode$$14_itemChildren$$inline_8227_itemNode$$inline_8224$$.$getAttr$("value")))
      }
      $JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$ && ($JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$.$render$($section$$14_sectionTitle$$, $availSpace$$101$$, $isBiDi$$1$$), $section$$14_sectionTitle$$.$addItem$($JSCompiler_StaticMethods__parseItem$self$$inline_8223_legendListItem$$2_legendListItem$$inline_8226$$))
    }
  }
  $parent$$87$$.$addChild$($section$$14_sectionTitle$$);
  $availSpace$$101$$.y = $availSpace$$101$$.y - $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$.rowColGap;
  return $section$$14_sectionTitle$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$ = function $$JSCompiler_StaticMethods__renderLegendSectionJSON$$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, $legendSectionNode$$1_textItems$$1$$, $parent$$88$$, $availSpace$$102$$, $isBiDi$$2$$) {
  var $section$$15$$ = new D.$DvtCommonLegendSection$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, $legendSectionNode$$1_textItems$$1$$.label, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_sectionTitleStyle$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$);
  $section$$15$$.$render$($parent$$88$$, $availSpace$$102$$, $isBiDi$$2$$);
  var $legendItems$$2$$ = $legendSectionNode$$1_textItems$$1$$.item, $itemNode$$inline_8231_legendListItem$$3$$;
  if($legendItems$$2$$) {
    for(var $i$$838$$ = 0;$i$$838$$ < $legendItems$$2$$.length;$i$$838$$++) {
      var $JSCompiler_StaticMethods__parseItemJSON$self$$inline_8230_legendListItem$$inline_8233$$ = $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$;
      $itemNode$$inline_8231_legendListItem$$3$$ = $legendItems$$2$$[$i$$838$$];
      var $prop$$inline_8232_url$$inline_10997$$ = {};
      $prop$$inline_8232_url$$inline_10997$$.itemId = $itemNode$$inline_8231_legendListItem$$3$$.itemId;
      $prop$$inline_8232_url$$inline_10997$$.attributeGroupId = $itemNode$$inline_8231_legendListItem$$3$$.attributeGroupId;
      $prop$$inline_8232_url$$inline_10997$$.hideAttrs = $itemNode$$inline_8231_legendListItem$$3$$.hideAttrs;
      $JSCompiler_StaticMethods__parseItemJSON$self$$inline_8230_legendListItem$$inline_8233$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__parseItemJSON$self$$inline_8230_legendListItem$$inline_8233$$.$_context$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_8230_legendListItem$$inline_8233$$, $prop$$inline_8232_url$$inline_10997$$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_8230_legendListItem$$inline_8233$$.$_legendItemStyle$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_8230_legendListItem$$inline_8233$$.$_styleMap$);
      if($itemNode$$inline_8231_legendListItem$$3$$.marker) {
        var $markerNode$$inline_10996_opacity$$inline_11001$$ = $itemNode$$inline_8231_legendListItem$$3$$.marker, $prop$$inline_8232_url$$inline_10997$$ = $markerNode$$inline_10996_opacity$$inline_11001$$.url, $shape$$inline_10998$$ = $markerNode$$inline_10996_opacity$$inline_11001$$.shapeType, $color$$inline_10999$$ = $markerNode$$inline_10996_opacity$$inline_11001$$.color, $pattern$$inline_11000$$ = $markerNode$$inline_10996_opacity$$inline_11001$$.pattern;
        ($markerNode$$inline_10996_opacity$$inline_11001$$ = $markerNode$$inline_10996_opacity$$inline_11001$$.opacity) && ($markerNode$$inline_10996_opacity$$inline_11001$$ = (0,window.parseFloat)($markerNode$$inline_10996_opacity$$inline_11001$$));
        $JSCompiler_StaticMethods__parseItemJSON$self$$inline_8230_legendListItem$$inline_8233$$.setMarker($prop$$inline_8232_url$$inline_10997$$, $shape$$inline_10998$$, $color$$inline_10999$$, $pattern$$inline_11000$$, $markerNode$$inline_10996_opacity$$inline_11001$$)
      }
      $itemNode$$inline_8231_legendListItem$$3$$.text && $JSCompiler_StaticMethods__parseItemJSON$self$$inline_8230_legendListItem$$inline_8233$$.$setText$($itemNode$$inline_8231_legendListItem$$3$$.text.value);
      if($itemNode$$inline_8231_legendListItem$$3$$ = $JSCompiler_StaticMethods__parseItemJSON$self$$inline_8230_legendListItem$$inline_8233$$) {
        $itemNode$$inline_8231_legendListItem$$3$$.$render$($section$$15$$, $availSpace$$102$$, $isBiDi$$2$$), $section$$15$$.$addItem$($itemNode$$inline_8231_legendListItem$$3$$)
      }
    }
  }
  if($legendSectionNode$$1_textItems$$1$$ = $legendSectionNode$$1_textItems$$1$$.text) {
    for($i$$838$$ = 0;$i$$838$$ < $legendSectionNode$$1_textItems$$1$$.length;$i$$838$$++) {
      $itemNode$$inline_8231_legendListItem$$3$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_legendItemStyle$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$), $itemNode$$inline_8231_legendListItem$$3$$.$setText$($legendSectionNode$$1_textItems$$1$$[$i$$838$$].value), $itemNode$$inline_8231_legendListItem$$3$$ && 
      ($itemNode$$inline_8231_legendListItem$$3$$.$render$($section$$15$$, $availSpace$$102$$, $isBiDi$$2$$), $section$$15$$.$addItem$($itemNode$$inline_8231_legendListItem$$3$$))
    }
  }
  $parent$$88$$.$addChild$($section$$15$$);
  $availSpace$$102$$.y = $availSpace$$102$$.y - $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$.rowColGap;
  return $section$$15$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionGroup$$ = function $$JSCompiler_StaticMethods__renderLegendSectionGroup$$$($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, $childNodes$$38_legendSectionNode$$2$$, $bidiMultiplier_parent$$89$$, $availSpace$$103$$, $isBiDi$$3$$) {
  var $sectionGroup_sectionTitle$$2$$ = $childNodes$$38_legendSectionNode$$2$$.$getAttr$("label"), $disclosed$$4_i$$839$$ = "true" == $childNodes$$38_legendSectionNode$$2$$.$getAttr$("disclosed"), $childNode$$15_expandTooltip$$1_section$$16$$ = $childNodes$$38_legendSectionNode$$2$$.$getAttr$("expandTooltip"), $collapseTooltip$$1$$ = $childNodes$$38_legendSectionNode$$2$$.$getAttr$("collapseTooltip"), $sectionGroup_sectionTitle$$2$$ = new D.$DvtCommonLegendSectionGroup$$($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_context$, 
  $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, $sectionGroup_sectionTitle$$2$$, $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_sectionGroupTitleStyle$, $collapseTooltip$$1$$, $childNode$$15_expandTooltip$$1_section$$16$$, $disclosed$$4_i$$839$$, $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$);
  $sectionGroup_sectionTitle$$2$$.$render$($bidiMultiplier_parent$$89$$, $availSpace$$103$$, $isBiDi$$3$$);
  $bidiMultiplier_parent$$89$$ = $isBiDi$$3$$ ? -1 : 1;
  if($childNodes$$38_legendSectionNode$$2$$ = $childNodes$$38_legendSectionNode$$2$$.$getChildNodes$()) {
    for($disclosed$$4_i$$839$$ = 0;$disclosed$$4_i$$839$$ < $childNodes$$38_legendSectionNode$$2$$.length;$disclosed$$4_i$$839$$++) {
      $childNode$$15_expandTooltip$$1_section$$16$$ = $childNodes$$38_legendSectionNode$$2$$[$disclosed$$4_i$$839$$], "section" == $childNode$$15_expandTooltip$$1_section$$16$$.getName() && ($availSpace$$103$$.x += ($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap) * $bidiMultiplier_parent$$89$$, $childNode$$15_expandTooltip$$1_section$$16$$ = (0,D.$JSCompiler_StaticMethods__renderLegendSection$$)($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, 
      $childNode$$15_expandTooltip$$1_section$$16$$, $sectionGroup_sectionTitle$$2$$, $availSpace$$103$$, $isBiDi$$3$$), $availSpace$$103$$.x -= ($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap) * $bidiMultiplier_parent$$89$$, $sectionGroup_sectionTitle$$2$$.$addItem$($childNode$$15_expandTooltip$$1_section$$16$$))
    }
  }
  $availSpace$$103$$.y = $availSpace$$103$$.y - $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap;
  return $sectionGroup_sectionTitle$$2$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionGroupJSON$$ = function $$JSCompiler_StaticMethods__renderLegendSectionGroupJSON$$$($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$, $legendSectionNode$$3_sections$$3$$, $bidiMultiplier$$1_parent$$90$$, $availSpace$$104$$, $isBiDi$$4$$) {
  var $sectionGroup$$1$$ = new D.$DvtCommonLegendSectionGroup$$($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$, $legendSectionNode$$3_sections$$3$$.label, $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_sectionGroupTitleStyle$, $legendSectionNode$$3_sections$$3$$.collapseTooltip, $legendSectionNode$$3_sections$$3$$.expandTooltip, "true" == $legendSectionNode$$3_sections$$3$$.disclosed, $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$);
  $sectionGroup$$1$$.$render$($bidiMultiplier$$1_parent$$90$$, $availSpace$$104$$, $isBiDi$$4$$);
  $bidiMultiplier$$1_parent$$90$$ = $isBiDi$$4$$ ? -1 : 1;
  if($legendSectionNode$$3_sections$$3$$ = $legendSectionNode$$3_sections$$3$$.section) {
    for(var $i$$840$$ = 0;$i$$840$$ < $legendSectionNode$$3_sections$$3$$.length;$i$$840$$++) {
      $availSpace$$104$$.x += ($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap) * $bidiMultiplier$$1_parent$$90$$;
      var $section$$17$$ = (0,D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$)($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$, $legendSectionNode$$3_sections$$3$$[$i$$840$$], $sectionGroup$$1$$, $availSpace$$104$$, $isBiDi$$4$$);
      $availSpace$$104$$.x -= ($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap) * $bidiMultiplier$$1_parent$$90$$;
      $sectionGroup$$1$$.$addItem$($section$$17$$)
    }
  }
  $availSpace$$104$$.y = $availSpace$$104$$.y - $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap;
  return $sectionGroup$$1$$
};
D.$JSCompiler_StaticMethods__renderSeparator$$ = function $$JSCompiler_StaticMethods__renderSeparator$$$($JSCompiler_StaticMethods__renderSeparator$self$$, $container$$179$$, $availSpace$$105$$) {
  $availSpace$$105$$.y = $availSpace$$105$$.y - $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorGap;
  var $line1$$1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$, $availSpace$$105$$.x, $availSpace$$105$$.y, $availSpace$$105$$.x, $availSpace$$105$$.y);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line1$$1$$);
  $line1$$1$$.$setSolidStroke$($JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorColor);
  $JSCompiler_StaticMethods__renderSeparator$self$$.$_separators$.push($line1$$1$$);
  var $separator$$3$$;
  if("alta" == $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.skin) {
    $separator$$3$$ = $line1$$1$$
  }else {
    $availSpace$$105$$.y++;
    var $line2$$1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$, $availSpace$$105$$.x, $availSpace$$105$$.y, $availSpace$$105$$.x, $availSpace$$105$$.y);
    $line2$$1$$.$setSolidStroke$("#FFFFFF");
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line2$$1$$);
    $separator$$3$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$);
    $separator$$3$$.$addChild$($line1$$1$$);
    $separator$$3$$.$addChild$($line2$$1$$);
    $JSCompiler_StaticMethods__renderSeparator$self$$.$_separators$.push($line2$$1$$)
  }
  $container$$179$$.$addChild$($separator$$3$$);
  $availSpace$$105$$.y += $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorGap;
  return $separator$$3$$
};
D.DvtCommonLegend.prototype.update = function $DvtCommonLegend$$update$($updatedSection$$, $diff$$5$$) {
  for(var $idx$$37$$ = this.$_children$.indexOf($updatedSection$$), $idx$$37$$ = $idx$$37$$ + 1;$idx$$37$$ < this.$_children$.length;) {
    var $oldTransY$$ = this.$_children$[$idx$$37$$].$getTranslateY$();
    this.$_children$[$idx$$37$$].$setTranslateY$($oldTransY$$ + $diff$$5$$);
    $idx$$37$$++
  }
  this.$_dim$.$h$ += $diff$$5$$;
  this.$FireListener$(new D.$DvtResizeEvent$$(this.$_dim$.$w$, this.$_dim$.$h$, 0, 0))
};
D.DvtCommonLegend.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.DvtCommonLegend.prototype.$render$ = function $DvtCommonLegend$$$render$$() {
  if(this.$_legendNode$) {
    this.$_eventHandler$ = new D.$DvtCommonLegendEventManager$$(this.$_context$, this.$_legendEventHandler$, this);
    this.$_title$ = this.$_legendNode$.$getAttr$("label");
    this.$_isDisclosed$ = "true" == this.$_legendNode$.$getAttr$("disclosed");
    var $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ = this.$_legendNode$.getElementsByTagName("style");
    if($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ && ($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ = 
    $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$[0].$getChildNodes$())) {
      for(var $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ = 0;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ < $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.length;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$++) {
        var $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$ = $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$[$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$];
        "legend-title" == $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$.getName() ? this.$_legendTitleStyle$ = $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$.getTextContent() : "sectionGroup-title" == $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$.getName() ? 
        this.$_sectionGroupTitleStyle$ = $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$.getTextContent() : "section-title" == $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$.getName() ? this.$_sectionTitleStyle$ = $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$.getTextContent() : 
        "legend-item" == $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$.getName() && (this.$_legendItemStyle$ = $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$.getTextContent())
      }
    }
    if($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ = this.$_legendNode$.$getAttr$("noWrap")) {
      this.$_isWordWrap$ = "false" == $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$
    }
    $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ = this.$_isBiDi$ ? new D.$DvtRectangle$$(this.$_width$, 0, this.$_width$, this.$_height$) : new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    this.$_legendContent$ = new D.$DvtContainer$$(this.$_context$);
    this.$addChild$(this.$_legendContent$);
    if(this.$_title$ && ($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ = this.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$ = $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.$w$ - 
    $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.x, this.$_isBiDi$ && ($childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$ = $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.$w$ - 
    $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$), 0 < $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$ && (this.$_isBiDi$ && $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$alignRight$(), 
    this.$_legendTitleStyle$ && $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_legendTitleStyle$)), $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$setTextString$(this.$_title$), $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$setX$($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.x), 
    $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$setY$($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.y), D.$DvtTextUtils$$.$fitText$($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$, 
    $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$, $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.$h$, this.$_legendContent$), $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$isTruncated$() && 
    this.$_eventHandler$.$associate$($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), ($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ = $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$getDimensions$()) && 
    0 < $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$h$))) {
      $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.y = $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.y + 
      $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$h$ + this.$_styleMap$.rowColGap
    }
    this.$_children$ = [];
    if($childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$ = this.$_legendNode$.$getChildNodes$()) {
      for($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ = 0;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ < $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$.length;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$++) {
        var $childNode$$inline_8243_separators$$inline_8244_separators$$inline_8256$$ = $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$[$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$];
        if("separatorDef" == $childNode$$inline_8243_separators$$inline_8244_separators$$inline_8256$$.getName() && ($childNode$$inline_8243_separators$$inline_8244_separators$$inline_8256$$ = $childNode$$inline_8243_separators$$inline_8244_separators$$inline_8256$$.$getChildNodes$(), 0 < $childNode$$inline_8243_separators$$inline_8244_separators$$inline_8256$$.length && "separator" == $childNode$$inline_8243_separators$$inline_8244_separators$$inline_8256$$[0].getName())) {
          this.$_addSeparators$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
      for($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ = 0;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ < $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$.length;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$++) {
        $childNode$$inline_8243_separators$$inline_8244_separators$$inline_8256$$ = $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$[$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$], $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.x = 
        this.$_isBiDi$ ? this.$_width$ : 0, "sectionGroup" == $childNode$$inline_8243_separators$$inline_8244_separators$$inline_8256$$.getName() ? (this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionGroup$$)(this, $childNode$$inline_8243_separators$$inline_8244_separators$$inline_8256$$, this.$_legendContent$, $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$, this.$_isBiDi$))) : "section" == $childNode$$inline_8243_separators$$inline_8244_separators$$inline_8256$$.getName() && 
        (this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSection$$)(this, $childNode$$inline_8243_separators$$inline_8244_separators$$inline_8256$$, this.$_legendContent$, $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$, this.$_isBiDi$)))
      }
    }
    this.$_dim$ = this.$getDimensionsWithStroke$();
    for($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ = 0;$availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ < 
    this.$_separators$.length;$availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$++) {
      this.$_isBiDi$ ? this.$_separators$[$availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$].$setX2$(this.$_dim$.x) : this.$_separators$[$availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$].$setX2$(this.$_dim$.$w$)
    }
    this.$_eventHandler$.$addListeners$(this);
    for($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ = 0;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ < this.$_associations$.length;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$++) {
      $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ = this.$_associations$[$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$], this.$_eventHandler$.$associate$($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$, 
      $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$), this.$_hidden$ && -1 < D.$DvtArrayUtils$$.$getIndex$(this.$_hidden$, $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.$getAttributeGroup$() + 
      ":" + $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.$getItemId$()) && (0,D.$JSCompiler_StaticMethods_filterRow$$)($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$, 
      D.$JSCompiler_alias_TRUE$$)
    }
  }else {
    this.$_eventHandler$ = new D.$DvtCommonLegendEventManager$$(this.$_context$, this.$_legendEventHandler$, this);
    this.$_title$ = this.$_legendJSON$.label;
    this.$_isDisclosed$ = "true" == this.$_legendJSON$.disclosed;
    if($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ = this.$_legendJSON$.style) {
      this.$_legendTitleStyle$ = $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$["legend-title"], this.$_sectionGroupTitleStyle$ = $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$["sectionGroup-title"], 
      this.$_sectionTitleStyle$ = $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$["section-title"], this.$_legendItemStyle$ = $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$["legend-item"]
    }
    if($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ = this.$_legendJSON$.noWrap) {
      this.$_isWordWrap$ = "false" == $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$
    }
    $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ = this.$_isBiDi$ ? new D.$DvtRectangle$$(this.$_width$, 0, this.$_width$, this.$_height$) : new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    this.$_legendContent$ = new D.$DvtContainer$$(this.$_context$);
    this.$addChild$(this.$_legendContent$);
    if(this.$_title$ && ($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ = this.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$ = $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.$w$ - 
    $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.x, this.$_isBiDi$ && ($childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$ = $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.$w$ - 
    $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$), 0 < $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$ && (this.$_isBiDi$ && $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$alignRight$(), 
    this.$_legendTitleStyle$ && $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_legendTitleStyle$)), $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$setTextString$(this.$_title$), $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$setX$($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.x), 
    $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$setY$($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.y), D.$DvtTextUtils$$.$fitText$($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$, 
    $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$, $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.$h$, this.$_legendContent$), $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$isTruncated$() && 
    this.$_eventHandler$.$associate$($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), ($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ = $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$getDimensions$()) && 
    0 < $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$h$))) {
      $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.y = $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.y + 
      $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$.$h$ + this.$_styleMap$.rowColGap
    }
    this.$_children$ = [];
    if($childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$ = this.$_legendJSON$.separatorDef) {
      for($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ = 0;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ < $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$.length;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$++) {
        if(($childNode$$inline_8243_separators$$inline_8244_separators$$inline_8256$$ = $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$[$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$].separator) && 0 < $childNode$$inline_8243_separators$$inline_8244_separators$$inline_8256$$.length) {
          this.$_addSeparators$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$ = this.$_legendJSON$.sectionGroup;
    $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.x = this.$_isBiDi$ ? this.$_width$ : 0;
    if($childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$) {
      for($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ = 0;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ < $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$.length;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$++) {
        this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionGroupJSON$$)(this, $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$[$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$], this.$_legendContent$, $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$, 
        this.$_isBiDi$))
      }
    }
    if($childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$ = this.$_legendJSON$.section) {
      for($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ = 0;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ < $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$.length;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$++) {
        this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$)(this, $childNode$$inline_11007_childNodes$$inline_8241_fitWidth$$inline_8239_fitWidth$$inline_8252_sectionGroups$$inline_8257_sections$$inline_8258_separatorDefs$$inline_8254$$[$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$], this.$_legendContent$, $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$, 
        this.$_isBiDi$))
      }
    }
    this.$_dim$ = this.$getDimensionsWithStroke$();
    for($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ = 0;$availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ < 
    this.$_separators$.length;$availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$++) {
      this.$_isBiDi$ ? (this.$_dim$.x = this.$_separators$[$availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$].$getX1$() - this.$_dim$.$w$, this.$_separators$[$availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$].$setX2$(this.$_dim$.x)) : 
      this.$_separators$[$availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$].$setX2$(this.$_dim$.$w$ + this.$_separators$[$availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$].$getX1$())
    }
    this.$_eventHandler$.$addListeners$(this);
    for($i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ = 0;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$ < this.$_associations$.length;$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$++) {
      $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$ = this.$_associations$[$i$$inline_11006_i$$inline_8242_i$$inline_8255_legendTitle$$inline_8238_legendTitle$$inline_8251_titleDim$$inline_8240_titleDim$$inline_8253$$], this.$_eventHandler$.$associate$($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$, 
      $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$), this.$_hidden$ && -1 < D.$DvtArrayUtils$$.$getIndex$(this.$_hidden$, $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.$getAttributeGroup$() + 
      ":" + $availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$.$getItemId$()) && (0,D.$JSCompiler_StaticMethods_filterRow$$)($availSpace$$inline_8237_availSpace$$inline_8250_childNodes$$inline_11005_j$$inline_8245_j$$inline_8259_legendRow$$inline_8246_legendRow$$inline_8260_legendStyleNode$$inline_11004_legendStyleNode$$inline_11013_noWrap$$inline_8236_noWrap$$inline_8249$$)
    }
  }
  this.$_hidden$ && (this.$_dim$ = this.$getDimensionsWithStroke$(), this.$FireListener$(new D.$DvtResizeEvent$$(this.$_dim$.$w$, this.$_dim$.$h$, this.$_dim$.x, this.$_dim$.y)));
  this.$_isBiDi$ && this.$_legendContent$.$setTranslateX$(-this.$_dim$.x)
};
D.$DvtCommonLegendSectionGroup$$ = function $$DvtCommonLegendSectionGroup$$$($context$$692$$, $legend$$27$$, $sectionTitle$$4$$, $sectionTitleStyle$$, $collapseTooltip$$3$$, $expandTooltip$$3$$, $disclosed$$6$$, $styleMap$$90$$) {
  this.Init($context$$692$$, $legend$$27$$, $sectionTitle$$4$$, $sectionTitleStyle$$, $collapseTooltip$$3$$, $expandTooltip$$3$$, $disclosed$$6$$, $styleMap$$90$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendSectionGroup$$, D.$DvtContainer$$, "DvtCommonLegendSection");
D.$DvtCommonLegendSectionGroup$$.prototype.Init = function $$DvtCommonLegendSectionGroup$$$$Init$($context$$693$$, $legend$$28$$, $sectionTitle$$5$$, $sectionTitleStyle$$1$$, $collapseTooltip$$4$$, $expandTooltip$$4$$, $disclosed$$7$$, $styleMap$$91$$) {
  D.$DvtCommonLegendSection$$.$superclass$.Init.call(this, $context$$693$$);
  this.$_title$ = $sectionTitle$$5$$;
  this.$_titleStyle$ = $sectionTitleStyle$$1$$;
  this.$_items$ = [];
  this.$_legend$ = $legend$$28$$;
  this.$_collapseTooltip$ = $collapseTooltip$$4$$;
  this.$_expandTooltip$ = $expandTooltip$$4$$;
  this.$_buttonState$ = $disclosed$$7$$ ? 0 : 1;
  this.$_styleMap$ = $styleMap$$91$$
};
D.$JSCompiler_StaticMethods__createButton$$ = function $$JSCompiler_StaticMethods__createButton$$$($JSCompiler_StaticMethods__createButton$self$$, $dwn$$18_images$$27$$, $x$$317$$, $y$$282$$, $width$$157$$, $height$$132$$, $buttonState$$5_ena$$23$$) {
  if(!$dwn$$18_images$$27$$) {
    return new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$)
  }
  switch($buttonState$$5_ena$$23$$) {
    case 1:
      $buttonState$$5_ena$$23$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$18_images$$27$$.groupColEna, $x$$317$$, $y$$282$$, $width$$157$$, $height$$132$$);
      var $ovr$$18$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$18_images$$27$$.groupColOvr, $x$$317$$, $y$$282$$, $width$$157$$, $height$$132$$);
      $dwn$$18_images$$27$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$18_images$$27$$.groupColDwn, $x$$317$$, $y$$282$$, $width$$157$$, $height$$132$$);
      return new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $buttonState$$5_ena$$23$$, $ovr$$18$$, $dwn$$18_images$$27$$);
    default:
      return $buttonState$$5_ena$$23$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$18_images$$27$$.groupExpDwn, $x$$317$$, $y$$282$$, $width$$157$$, $height$$132$$), $ovr$$18$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$18_images$$27$$.groupExpOvr, $x$$317$$, $y$$282$$, $width$$157$$, $height$$132$$), $dwn$$18_images$$27$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$18_images$$27$$.groupExpDwn, 
      $x$$317$$, $y$$282$$, $width$$157$$, $height$$132$$), new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $buttonState$$5_ena$$23$$, $ovr$$18$$, $dwn$$18_images$$27$$)
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendSectionGroup$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_handleMouseClick$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseClick$$() {
  var $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$ = (0,D.$DvtAgent$isRightToLeft$$)() ? -1 : 1;
  this.$_sectionHeight$ || (this.$_sectionHeight$ = this.$getDimensionsWithStroke$().$h$ - this.$_headerHeight$);
  0 == this.$_buttonState$ ? ("alta" == this.$_styleMap$.skin ? ($bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$ = this.$_button$.getParent(), $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$.removeChild(this.$_button$), this.$_button$ = this.$_collapsedBtn$, $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$.$addChild$(this.$_button$)) : this.$_button$.$setPoints$([this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$, 
  this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$, this.$_buttonY$ + 5.5, this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$, this.$_buttonY$ + 9.5]), this.$_itemsVisible$ = D.$JSCompiler_alias_FALSE$$, this.$_buttonState$ = 1, $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$ = -this.$_sectionHeight$) : ("alta" == this.$_styleMap$.skin ? ($bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$ = 
  this.$_button$.getParent(), $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$.removeChild(this.$_button$), this.$_button$ = this.$_expandedBtn$, $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$.$addChild$(this.$_button$)) : this.$_button$.$setPoints$([this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$, 
  this.$_buttonY$ + 1.5, this.$_buttonX$ + 5.5 * $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$, this.$_buttonY$ + 9.5]), this.$_itemsVisible$ = D.$JSCompiler_alias_TRUE$$, this.$_buttonState$ = 0, $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$ = this.$_sectionHeight$);
  if(this.$_itemsVisible$) {
    for(var $i$$inline_8272$$ = 0;$i$$inline_8272$$ < this.$_items$.length;$i$$inline_8272$$++) {
      this.$addChild$(this.$_items$[$i$$inline_8272$$])
    }
  }else {
    for($i$$inline_8272$$ = 0;$i$$inline_8272$$ < this.$_items$.length;$i$$inline_8272$$++) {
      this.removeChild(this.$_items$[$i$$inline_8272$$])
    }
  }
  this.$_legend$.update(this, $bidiMultiplier$$inline_8269_diff$$inline_8270_parent$$inline_8271$$)
};
D.$JSCompiler_prototypeAlias$$.$_handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseOver$$() {
  "alta" == !this.$_styleMap$.skin && this.$_button$.$setSolidFill$(this.$_styleMap$.ovr)
};
D.$JSCompiler_prototypeAlias$$.$_handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseOut$$() {
  "alta" == !this.$_styleMap$.skin && this.$_button$.$setSolidFill$(this.$_styleMap$.ena)
};
D.$JSCompiler_prototypeAlias$$.$_handleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseDown$$() {
  "alta" == !this.$_styleMap$.skin && this.$_button$.$setSolidFill$(this.$_styleMap$.dwn)
};
D.$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($item$$48$$) {
  return this.$_items$.push($item$$48$$)
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($collapsibleHitArea_dim$$89_parent$$93$$, $availSpace$$109$$, $isBiDi$$6$$) {
  $collapsibleHitArea_dim$$89_parent$$93$$.$addChild$(this);
  $collapsibleHitArea_dim$$89_parent$$93$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$($collapsibleHitArea_dim$$89_parent$$93$$);
  this.$_buttonX$ = $availSpace$$109$$.x;
  this.$_buttonY$ = $availSpace$$109$$.y;
  var $bidiMultiplier$$inline_8278_sectionTitle$$6$$ = $isBiDi$$6$$ ? -1 : 1;
  if("alta" == this.$_styleMap$.skin) {
    var $fitWidth$$2_images$$inline_8279$$ = this.$_legend$.$_images$;
    this.$_expandedBtn$ = (0,D.$JSCompiler_StaticMethods__createButton$$)(this, $fitWidth$$2_images$$inline_8279$$, this.$_buttonX$, this.$_buttonY$, this.$_styleMap$.buttonSize, this.$_styleMap$.buttonSize, 0);
    this.$_collapsedBtn$ = (0,D.$JSCompiler_StaticMethods__createButton$$)(this, $fitWidth$$2_images$$inline_8279$$, this.$_buttonX$, this.$_buttonY$, this.$_styleMap$.buttonSize, this.$_styleMap$.buttonSize, 1);
    this.$_button$ = this.$_expandedBtn$
  }else {
    this.$_button$ = new D.$DvtPolygon$$(this.$_context$, [this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_8278_sectionTitle$$6$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_8278_sectionTitle$$6$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 5.5 * $bidiMultiplier$$inline_8278_sectionTitle$$6$$, this.$_buttonY$ + 9.5]), this.$_button$.$setSolidFill$(this.$_styleMap$.ena)
  }
  $collapsibleHitArea_dim$$89_parent$$93$$.$addChild$(this.$_button$);
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    $collapsibleHitArea_dim$$89_parent$$93$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_handleMouseClick$, D.$JSCompiler_alias_FALSE$$, this)
  }else {
    var $thisRef$$inline_8280$$ = this;
    this.$_legend$.$getEventManager$().$associate$($collapsibleHitArea_dim$$89_parent$$93$$, {$getTooltip$:function() {
      return 0 == $thisRef$$inline_8280$$.$_buttonState$ ? $thisRef$$inline_8280$$.$_collapseTooltip$ : $thisRef$$inline_8280$$.$_expandTooltip$
    }});
    $collapsibleHitArea_dim$$89_parent$$93$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$_handleMouseClick$, D.$JSCompiler_alias_FALSE$$, this);
    $collapsibleHitArea_dim$$89_parent$$93$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$_handleMouseOver$, D.$JSCompiler_alias_FALSE$$, this);
    $collapsibleHitArea_dim$$89_parent$$93$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_handleMouseOut$, D.$JSCompiler_alias_FALSE$$, this);
    $collapsibleHitArea_dim$$89_parent$$93$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_handleMouseDown$, D.$JSCompiler_alias_FALSE$$, this)
  }
  this.$_buttonState$ = 0;
  $availSpace$$109$$.x += (("alta" == this.$_styleMap$.skin && $isBiDi$$6$$ ? 0 : this.$_styleMap$.buttonSize) + this.$_styleMap$.rowColGap) * $bidiMultiplier$$inline_8278_sectionTitle$$6$$;
  this.$_title$ && ($bidiMultiplier$$inline_8278_sectionTitle$$6$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $fitWidth$$2_images$$inline_8279$$ = $availSpace$$109$$.$w$ - $availSpace$$109$$.x, $isBiDi$$6$$ && ($fitWidth$$2_images$$inline_8279$$ = $availSpace$$109$$.$w$ - $fitWidth$$2_images$$inline_8279$$), 0 < $fitWidth$$2_images$$inline_8279$$ && ($isBiDi$$6$$ && $bidiMultiplier$$inline_8278_sectionTitle$$6$$.$alignRight$(), 
  this.$_titleStyle$ && $bidiMultiplier$$inline_8278_sectionTitle$$6$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_titleStyle$)), $bidiMultiplier$$inline_8278_sectionTitle$$6$$.$setTextString$(this.$_title$), $bidiMultiplier$$inline_8278_sectionTitle$$6$$.$setX$($availSpace$$109$$.x), $bidiMultiplier$$inline_8278_sectionTitle$$6$$.$setY$($availSpace$$109$$.y), D.$DvtTextUtils$$.$fitText$($bidiMultiplier$$inline_8278_sectionTitle$$6$$, $fitWidth$$2_images$$inline_8279$$, $availSpace$$109$$.$h$, $collapsibleHitArea_dim$$89_parent$$93$$), 
  $bidiMultiplier$$inline_8278_sectionTitle$$6$$.$isTruncated$() && this.$_legend$.$getEventManager$().$associate$($bidiMultiplier$$inline_8278_sectionTitle$$6$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), $collapsibleHitArea_dim$$89_parent$$93$$ = $bidiMultiplier$$inline_8278_sectionTitle$$6$$.$getDimensions$(), $availSpace$$109$$.y = $availSpace$$109$$.y + window.Math.max($collapsibleHitArea_dim$$89_parent$$93$$ ? $collapsibleHitArea_dim$$89_parent$$93$$.$h$ : 0, this.$_styleMap$.buttonSize) + 
  this.$_styleMap$.rowColGap));
  $availSpace$$109$$.x += (this.$_styleMap$.buttonSize + this.$_styleMap$.rowColGap) * ($isBiDi$$6$$ ? 1 : -1);
  this.$_headerHeight$ = this.$getDimensionsWithStroke$().$h$
};
D.$DvtCommonLegendSection$$ = function $$DvtCommonLegendSection$$$($context$$694$$, $legend$$29$$, $sectionTitle$$7$$, $sectionTitleStyle$$2$$, $styleMap$$92$$) {
  this.Init($context$$694$$, $legend$$29$$, $sectionTitle$$7$$, $sectionTitleStyle$$2$$, $styleMap$$92$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendSection$$, D.$DvtContainer$$, "DvtCommonLegendSection");
D.$DvtCommonLegendSection$$.prototype.Init = function $$DvtCommonLegendSection$$$$Init$($context$$695$$, $legend$$30$$, $sectionTitle$$8$$, $sectionTitleStyle$$3$$, $styleMap$$93$$) {
  D.$DvtCommonLegendSection$$.$superclass$.Init.call(this, $context$$695$$);
  this.$_title$ = $sectionTitle$$8$$;
  this.$_titleStyle$ = $sectionTitleStyle$$3$$;
  this.$_items$ = [];
  this.$_legend$ = $legend$$30$$;
  this.$_styleMap$ = $styleMap$$93$$
};
D.$DvtCommonLegendSection$$.prototype.$addItem$ = function $$DvtCommonLegendSection$$$$$addItem$$($item$$49$$) {
  return this.$_items$.push($item$$49$$)
};
D.$DvtCommonLegendSection$$.prototype.$getItems$ = (0,D.$JSCompiler_get$$)("$_items$");
D.$DvtCommonLegendSection$$.prototype.$render$ = function $$DvtCommonLegendSection$$$$$render$$($parent$$94_sectionTitle$$9$$, $availSpace$$110$$, $dim$$90_isBiDi$$7$$) {
  $parent$$94_sectionTitle$$9$$.$addChild$(this);
  if(this.$_title$) {
    $parent$$94_sectionTitle$$9$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$);
    var $fitWidth$$3$$ = $availSpace$$110$$.$w$ - $availSpace$$110$$.x;
    $dim$$90_isBiDi$$7$$ && ($fitWidth$$3$$ = $availSpace$$110$$.$w$ - $fitWidth$$3$$);
    0 < $fitWidth$$3$$ && ($dim$$90_isBiDi$$7$$ && $parent$$94_sectionTitle$$9$$.$alignRight$(), this.$_titleStyle$ && $parent$$94_sectionTitle$$9$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_titleStyle$)), $parent$$94_sectionTitle$$9$$.$setTextString$(this.$_title$), $parent$$94_sectionTitle$$9$$.$setX$($availSpace$$110$$.x), $parent$$94_sectionTitle$$9$$.$setY$($availSpace$$110$$.y), D.$DvtTextUtils$$.$fitText$($parent$$94_sectionTitle$$9$$, $fitWidth$$3$$, $availSpace$$110$$.$h$, this), $parent$$94_sectionTitle$$9$$.$isTruncated$() && 
    this.$_legend$.$getEventManager$().$associate$($parent$$94_sectionTitle$$9$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), $dim$$90_isBiDi$$7$$ = $parent$$94_sectionTitle$$9$$.$getDimensions$(), $availSpace$$110$$.y = $availSpace$$110$$.y + ($dim$$90_isBiDi$$7$$ ? $dim$$90_isBiDi$$7$$.$h$ : 0) + this.$_styleMap$.rowColGap)
  }
};
D.$DvtCommonLegendRow$$ = function $$DvtCommonLegendRow$$$($context$$696$$, $legend$$31$$, $prop$$16$$, $itemStyle$$2$$, $styleMap$$94$$) {
  this.Init($context$$696$$, $legend$$31$$, $prop$$16$$, $itemStyle$$2$$, $styleMap$$94$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendRow$$, D.$DvtContainer$$, "DvtCommonLegendRow");
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendRow$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$697$$, $legend$$32$$, $prop$$17$$, $itemStyle$$3$$, $styleMap$$95$$) {
  D.$DvtCommonLegendRow$$.$superclass$.Init.call(this, $context$$697$$);
  this.$_legend$ = $legend$$32$$;
  this.$_prop$ = $prop$$17$$;
  this.$_itemStyle$ = $itemStyle$$3$$;
  this.$_bHidden$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $styleMap$$95$$
};
D.$JSCompiler_prototypeAlias$$.$getAttributeGroup$ = function $$JSCompiler_prototypeAlias$$$$getAttributeGroup$$() {
  return this.$_prop$.attributeGroupId
};
D.$JSCompiler_prototypeAlias$$.$getItemId$ = function $$JSCompiler_prototypeAlias$$$$getItemId$$() {
  return this.$_prop$.itemId
};
D.$JSCompiler_prototypeAlias$$.$getHideAttributes$ = function $$JSCompiler_prototypeAlias$$$$getHideAttributes$$() {
  return this.$_prop$.hideAttrs
};
D.$JSCompiler_prototypeAlias$$.$setText$ = (0,D.$JSCompiler_set$$)("$_text$");
D.$JSCompiler_prototypeAlias$$.setMarker = function $$JSCompiler_prototypeAlias$$$setMarker$($url$$30$$, $shape$$101$$, $color$$88$$, $pattern$$17$$, $opacity$$7$$) {
  this.$_url$ = $url$$30$$;
  this.$_shape$ = $shape$$101$$;
  this.$_color$ = $color$$88$$ ? $color$$88$$ : "#000000";
  this.$_pattern$ = $pattern$$17$$;
  this.$_opacity$ = $opacity$$7$$
};
D.$JSCompiler_StaticMethods_filterRow$$ = function $$JSCompiler_StaticMethods_filterRow$$$($JSCompiler_StaticMethods_filterRow$self$$, $suppressResize$$) {
  $JSCompiler_StaticMethods_filterRow$self$$.$_bHidden$ = !$JSCompiler_StaticMethods_filterRow$self$$.$_bHidden$;
  $JSCompiler_StaticMethods_filterRow$self$$.$_marker$.$setHollow$($JSCompiler_StaticMethods_filterRow$self$$.$_color$);
  $JSCompiler_StaticMethods_filterRow$self$$.$UpdateAriaLabel$();
  $suppressResize$$ || ($JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$ = $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$getDimensionsWithStroke$(), $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$FireListener$(new D.$DvtResizeEvent$$($JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$.$w$, $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$.$h$, $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$.x, $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$.y)))
};
D.$DvtCommonLegendRow$$.prototype.$getAriaLabel$ = function $$DvtCommonLegendRow$$$$$getAriaLabel$$() {
  if(this.$_legend$.$_showHideEnabled$) {
    var $bundle$$21$$ = this.$_legend$.$__getBundle$(), $states$$13$$ = [(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$21$$, this.$_bHidden$ ? "STATE_HIDDEN" : "STATE_VISIBLE")];
    return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_text$, $states$$13$$, $bundle$$21$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtCommonLegendRow$$.prototype.$UpdateAriaLabel$ = function $$DvtCommonLegendRow$$$$$UpdateAriaLabel$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this, "label", this.$getAriaLabel$())
};
D.$DvtCommonLegendRow$$.prototype.$render$ = function $$DvtCommonLegendRow$$$$$render$$($parent$$95_rowX$$, $availSpace$$111$$, $isBiDi$$8$$) {
  if(this.$_prop$) {
    var $JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$ = this.$_legend$, $attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$ = this.$_prop$.attributeGroupId, $itemId$$inline_8284$$ = this.$_prop$.itemId;
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$] == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$] = {});
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$][$itemId$$inline_8284$$] = this;
    this.$_legend$.$_associations$.push(this);
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$ = this.$_legend$;
    $attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$ = this.$_prop$.hideAttrs;
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$.$_hideAttrsLookUp$[$attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$] || ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$.$_hideAttrsLookUp$[$attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$] = this)
  }
  $parent$$95_rowX$$.$addChild$(this);
  $parent$$95_rowX$$ = $availSpace$$111$$.x;
  $isBiDi$$8$$ && ($availSpace$$111$$.x -= this.$_styleMap$.indicatorSize);
  var $marker$$31_textDim$$6$$;
  if(this.$_url$ || this.$_shape$ != D.$JSCompiler_alias_NULL$$) {
    $marker$$31_textDim$$6$$ = new D.$DvtMarker$$(this.$_context$, this.$_url$ ? [this.$_url$] : this.$_shape$, this.$_styleMap$[D.DvtCommonLegend.$SKIN_NAME$], $availSpace$$111$$.x, $availSpace$$111$$.y, this.$_styleMap$.indicatorSize, this.$_styleMap$.indicatorSize), $JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$ = D.$DvtMarkerUtils$$.$getCustomMarkerInfo$(this.$_context$, this.$_shape$), !this.$_url$ && 
    !$JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$ && (this.$_pattern$ ? $marker$$31_textDim$$6$$.$setFill$(new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$)) : $marker$$31_textDim$$6$$.$setSolidFill$(this.$_color$, this.$_opacity$)), this.$addChild$($marker$$31_textDim$$6$$), $availSpace$$111$$.x = $isBiDi$$8$$ ? $availSpace$$111$$.x - this.$_styleMap$.rowColGap : $availSpace$$111$$.x + this.$_styleMap$.indicatorSize + 
    this.$_styleMap$.rowColGap
  }
  this.$_marker$ = $marker$$31_textDim$$6$$;
  $marker$$31_textDim$$6$$ = new D.$DvtRectangle$$;
  this.$_text$ && (this.$_legend$.$_showHideEnabled$ && (this.$setAriaRole$("img"), this.$UpdateAriaLabel$()), $JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$ = $availSpace$$111$$.$w$ - $availSpace$$111$$.x, $isBiDi$$8$$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$ = $availSpace$$111$$.$w$ - $JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$), 
  0 > $JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$ ? this.$_legend$.$getEventManager$().$associate$(this.$_marker$, new D.$DvtSimpleObjPeer$$(this.$_text$)) : ($attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $isBiDi$$8$$ && $attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$.$alignRight$(), 
  this.$_itemStyle$ && $attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_itemStyle$)), $attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$.$setTextString$(this.$_text$), $attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$.$setX$($availSpace$$111$$.x), $attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$.$setY$($availSpace$$111$$.y), D.$DvtTextUtils$$.$fitText$($attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$, 
  $JSCompiler_StaticMethods_addAttrLookup$self$$inline_8282_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_8290_fitWidth$$4_isCustomShape$$, $availSpace$$111$$.$h$, this) ? ($marker$$31_textDim$$6$$ = $attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$.$getDimensions$(), $attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$.$isTruncated$() && this.$_legend$.$getEventManager$().$associate$($attributeGroupId$$inline_8283_hideAttrs$$inline_8291_text$$107$$, new D.$DvtSimpleObjPeer$$(this.$_text$))) : 
  this.$_legend$.$getEventManager$().$associate$(this.$_marker$, new D.$DvtSimpleObjPeer$$(this.$_text$))));
  $availSpace$$111$$.y = $availSpace$$111$$.y + window.Math.max(this.$_styleMap$.indicatorSize, $marker$$31_textDim$$6$$.$h$) + this.$_styleMap$.rowColGap;
  $availSpace$$111$$.x = $parent$$95_rowX$$
};
D.$DvtCommonLegendEventManager$$ = function $$DvtCommonLegendEventManager$$$($context$$698$$, $callback$$153$$, $legend$$33$$) {
  this.Init($context$$698$$, $callback$$153$$, $legend$$33$$);
  this.$_legend$ = $legend$$33$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendEventManager$$, D.$DvtEventManager$$, "DvtCommonLegendEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$671$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnClick$.call(this, $event$$671$$);
  this.$_handleClick$($event$$671$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$672$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$672$$);
  (0,D.$JSCompiler_StaticMethods__handleRollOver$$)(this, $event$$672$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$673$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$673$$);
  (0,D.$JSCompiler_StaticMethods__handleRollOver$$)(this, $event$$673$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$674$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$674$$);
  this.$_handleClick$($event$$674$$)
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($event$$675_listItemEvent$$inline_8299$$) {
  if(this.$_legend$.$_showHideEnabled$) {
    var $obj$$362$$ = this.$GetLogicalObject$($event$$675_listItemEvent$$inline_8299$$.target);
    if($obj$$362$$ instanceof D.$DvtCommonLegendRow$$) {
      var $listItemId$$inline_8297$$ = $obj$$362$$.$getItemId$(), $attributeGroupId$$inline_8298$$ = $obj$$362$$.$getAttributeGroup$();
      (0,D.$JSCompiler_StaticMethods_filterRow$$)($obj$$362$$);
      $event$$675_listItemEvent$$inline_8299$$ = new D.$DvtListItemEvent$$($listItemId$$inline_8297$$, $attributeGroupId$$inline_8298$$, $obj$$362$$.$_bHidden$ ? "hide" : "show", $event$$675_listItemEvent$$inline_8299$$);
      this.$_legend$.$FireListener$($event$$675_listItemEvent$$inline_8299$$)
    }
  }
};
D.$JSCompiler_StaticMethods__handleRollOver$$ = function $$JSCompiler_StaticMethods__handleRollOver$$$($JSCompiler_StaticMethods__handleRollOver$self$$, $event$$676$$) {
  var $obj$$363$$ = $JSCompiler_StaticMethods__handleRollOver$self$$.$GetLogicalObject$($event$$676$$.target);
  if($obj$$363$$ instanceof D.$DvtCommonLegendRow$$) {
    if($JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$_rollOverEnabled$) {
      var $listItemId$$inline_8304_rollOverEvent$$inline_8306$$ = $obj$$363$$.$getItemId$(), $attributeGroupId$$inline_8305$$ = $obj$$363$$.$getAttributeGroup$(), $listItemId$$inline_8304_rollOverEvent$$inline_8306$$ = new D.$DvtLegendItemRollOverEvent$$($listItemId$$inline_8304_rollOverEvent$$inline_8306$$, $attributeGroupId$$inline_8305$$, $obj$$363$$.$getHideAttributes$(), $event$$676$$.type, $event$$676$$);
      $JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$FireListener$($listItemId$$inline_8304_rollOverEvent$$inline_8306$$)
    }
    $JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$_showHideEnabled$ && $JSCompiler_StaticMethods__handleRollOver$self$$.$UpdateActiveElement$($obj$$363$$)
  }
};
});