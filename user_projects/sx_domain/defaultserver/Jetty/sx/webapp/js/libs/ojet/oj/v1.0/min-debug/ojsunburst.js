"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtSunburst"], function($oj$$19$$, $$$$19$$) {
  $oj$$19$$.$SunburstNode$ = function $$oj$$19$$$$SunburstNode$$($data$$139$$) {
    this.$_data$ = $data$$139$$;
  };
  $goog$exportPath_$$("SunburstNode", $oj$$19$$.$SunburstNode$, $oj$$19$$);
  $oj$$19$$.$SunburstNode$.prototype.$getColor$ = function $$oj$$19$$$$SunburstNode$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.getColor", {$getColor$:$oj$$19$$.$SunburstNode$.prototype.$getColor$});
  $oj$$19$$.$SunburstNode$.prototype.$getLabel$ = function $$oj$$19$$$$SunburstNode$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.getLabel", {$getLabel$:$oj$$19$$.$SunburstNode$.prototype.$getLabel$});
  $oj$$19$$.$SunburstNode$.prototype.$getSize$ = function $$oj$$19$$$$SunburstNode$$$$getSize$$() {
    return this.$_data$ ? this.$_data$.size : null;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.getSize", {$getSize$:$oj$$19$$.$SunburstNode$.prototype.$getSize$});
  $oj$$19$$.$SunburstNode$.prototype.$getTooltip$ = function $$oj$$19$$$$SunburstNode$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.getTooltip", {$getTooltip$:$oj$$19$$.$SunburstNode$.prototype.$getTooltip$});
  $oj$$19$$.$SunburstNode$.prototype.isSelected = function $$oj$$19$$$$SunburstNode$$$isSelected$() {
    return this.$_data$ ? this.$_data$.selected : !1;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.isSelected", {isSelected:$oj$$19$$.$SunburstNode$.prototype.isSelected});
  $oj$$19$$.$__registerWidget$("oj.ojSunburst", $$$$19$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{optionChange:null, rotate:null, rotateInput:null, select:null}, $_CreateDvtComponent$:function($context$$49$$, $callback$$95$$, $callbackObj$$5$$) {
    return DvtSunburst.newInstance($context$$49$$, $callback$$95$$, $callbackObj$$5$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$6$$ = this._super();
    $styleClasses$$6$$.push("oj-sunburst");
    return $styleClasses$$6$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$7$$ = this._super();
    $styleClasses$$7$$["oj-sunburst-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$7$$["oj-sunburst-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$7$$;
  }, $_GetEventTypes$:function() {
    return["optionChange", "rotate", "rotateInput", "select"];
  }, $_GetTranslationMap$:function() {
    var $ret$$30$$ = this._super();
    $ret$$30$$["DvtSunburstBundle.COLOR"] = this.$_GetTranslatedResource$("labelColor");
    $ret$$30$$["DvtSunburstBundle.SIZE"] = this.$_GetTranslatedResource$("labelSize");
    return $ret$$30$$;
  }, $_HandleEvent$:function($event$$202_selection$$6$$) {
    var $selectedItems_type$$80$$ = $event$$202_selection$$6$$ && $event$$202_selection$$6$$.getType ? $event$$202_selection$$6$$.getType() : null, $selectedItem$$, $i$$243$$;
    if ($selectedItems_type$$80$$ === DvtSelectionEvent.TYPE) {
      $selectedItems_type$$80$$ = [];
      $event$$202_selection$$6$$ = $event$$202_selection$$6$$.getSelection();
      for ($i$$243$$ = 0;$i$$243$$ < $event$$202_selection$$6$$.length;$i$$243$$++) {
        $selectedItem$$ = {id:$event$$202_selection$$6$$[$i$$243$$]}, $selectedItems_type$$80$$.push($selectedItem$$);
      }
      this.$_UserOptionChange$("selectedNodes", $event$$202_selection$$6$$);
      this._trigger("select", null, {items:$selectedItems_type$$80$$});
    } else {
      $selectedItems_type$$80$$ === DvtSunburstRotationEvent.TYPE ? (this.$_UserOptionChange$("startAngle", $event$$202_selection$$6$$.getStartAngle()), this._trigger("rotate", null, {value:$event$$202_selection$$6$$.getStartAngle()})) : $selectedItems_type$$80$$ === DvtSunburstRotationEvent.TYPE_INPUT ? this._trigger("rotateInput", null, {value:$event$$202_selection$$6$$.getStartAngle()}) : this._super($event$$202_selection$$6$$);
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.rotateCursor = $oj$$19$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/sunburst/rotate.cur");
  }, $_SupportsOptionChangeEvent$:function($key$$88$$) {
    return "selectedNodes" == $key$$88$$ || "startAngle" == $key$$88$$;
  }, getNodeBySubId:function($locator$$17$$) {
    return this._super($locator$$17$$);
  }, getSubIdByNode:function($node$$37$$) {
    return this._super($node$$37$$);
  }, getNode:function($subIdPath$$) {
    var $auto$$3$$ = this.$_component$.getAutomation();
    return new $oj$$19$$.$SunburstNode$($auto$$3$$.getNode($subIdPath$$));
  }});
});
