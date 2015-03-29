"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTreemap"], function($oj$$27$$, $$$$27$$) {
  $oj$$27$$.$__registerWidget$("oj.ojTreemap", $$$$27$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{isolate:null, optionChange:null, select:null}, $_CreateDvtComponent$:function($context$$54$$, $callback$$101$$, $callbackObj$$7$$) {
    return DvtTreemap.newInstance($context$$54$$, $callback$$101$$, $callbackObj$$7$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$10$$ = this._super();
    $styleClasses$$10$$.push("oj-treemap");
    return $styleClasses$$10$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$11$$ = this._super();
    $styleClasses$$11$$["oj-treemap-isolate-icon"] = {path:"_resources/isolate", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-isolate-icon oj-hover"] = {path:"_resources/isolateOver", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-isolate-icon oj-active"] = {path:"_resources/isolateDown", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-restore-icon"] = {path:"_resources/restore", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-restore-icon oj-hover"] = {path:"_resources/restoreOver", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-restore-icon oj-active"] = {path:"_resources/restoreDown", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-treemap-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-treemap-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-treemap-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$11$$["oj-treemap-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    $styleClasses$$11$$["oj-treemap-node-header"] = [{path:"nodeDefaults/header/backgroundColor", property:"background-color"}, {path:"nodeDefaults/header/borderColor", property:"border-top-color"}, {path:"nodeDefaults/header/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$11$$["oj-treemap-node-header oj-hover"] = [{path:"nodeDefaults/header/hoverBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/hoverOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$11$$["oj-treemap-node-header oj-selected"] = [{path:"nodeDefaults/header/selectedBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$11$$;
  }, $_GetEventTypes$:function() {
    return["isolate", "optionChange", "select"];
  }, $_GetTranslationMap$:function() {
    var $ret$$36$$ = this._super();
    $ret$$36$$["DvtTreemapBundle.COLOR"] = this.$_GetTranslatedResource$("labelColor");
    $ret$$36$$["DvtTreemapBundle.SIZE"] = this.$_GetTranslatedResource$("labelSize");
    return $ret$$36$$;
  }, $_HandleEvent$:function($event$$339_isolatedNode_selection$$8$$) {
    var $isolatedNodes_selectedItems$$2_type$$85$$ = $event$$339_isolatedNode_selection$$8$$ && $event$$339_isolatedNode_selection$$8$$.getType ? $event$$339_isolatedNode_selection$$8$$.getType() : null, $i$$294_isolateType$$, $selectedItem$$2$$;
    if ($isolatedNodes_selectedItems$$2_type$$85$$ === DvtSelectionEvent.TYPE) {
      $isolatedNodes_selectedItems$$2_type$$85$$ = [];
      $event$$339_isolatedNode_selection$$8$$ = $event$$339_isolatedNode_selection$$8$$.getSelection();
      for ($i$$294_isolateType$$ = 0;$i$$294_isolateType$$ < $event$$339_isolatedNode_selection$$8$$.length;$i$$294_isolateType$$++) {
        $selectedItem$$2$$ = {id:$event$$339_isolatedNode_selection$$8$$[$i$$294_isolateType$$]}, $isolatedNodes_selectedItems$$2_type$$85$$.push($selectedItem$$2$$);
      }
      this.$_UserOptionChange$("selectedNodes", $event$$339_isolatedNode_selection$$8$$);
      this._trigger("select", null, {items:$isolatedNodes_selectedItems$$2_type$$85$$});
    } else {
      $isolatedNodes_selectedItems$$2_type$$85$$ === DvtTreemapIsolateEvent.TYPE ? ($isolatedNodes_selectedItems$$2_type$$85$$ = this.options.$_isolatedNodes$, $isolatedNodes_selectedItems$$2_type$$85$$ || (this.options.$_isolatedNodes$ = [], $isolatedNodes_selectedItems$$2_type$$85$$ = this.options.$_isolatedNodes$), ($event$$339_isolatedNode_selection$$8$$ = $event$$339_isolatedNode_selection$$8$$.getId()) ? ($i$$294_isolateType$$ = "on", $isolatedNodes_selectedItems$$2_type$$85$$.push($event$$339_isolatedNode_selection$$8$$), 
      this.$_UserOptionChange$("isolatedNode", $event$$339_isolatedNode_selection$$8$$)) : ($i$$294_isolateType$$ = "off", $event$$339_isolatedNode_selection$$8$$ = $isolatedNodes_selectedItems$$2_type$$85$$.pop(), this.$_UserOptionChange$("isolatedNode", 0 < $isolatedNodes_selectedItems$$2_type$$85$$.length ? $isolatedNodes_selectedItems$$2_type$$85$$[$isolatedNodes_selectedItems$$2_type$$85$$.length] : null)), this._trigger("isolate", null, {item:{id:$event$$339_isolatedNode_selection$$8$$}, type:$i$$294_isolateType$$})) : 
      this._super($event$$339_isolatedNode_selection$$8$$);
    }
  }, $_SupportsOptionChangeEvent$:function($key$$102$$) {
    return "isolatedNode" == $key$$102$$ || "selectedNodes" == $key$$102$$;
  }, getNodeBySubId:function($locator$$24$$) {
    return this._super($locator$$24$$);
  }, getSubIdByNode:function($node$$82$$) {
    return this._super($node$$82$$);
  }, getNode:function($subIdPath$$1$$) {
    var $auto$$6$$ = this.$_component$.getAutomation();
    return new $oj$$27$$.$TreemapNode$($auto$$6$$.getNode($subIdPath$$1$$));
  }});
  $oj$$27$$.$TreemapNode$ = function $$oj$$27$$$$TreemapNode$$($data$$163$$) {
    this.$_data$ = $data$$163$$;
  };
  $goog$exportPath_$$("TreemapNode", $oj$$27$$.$TreemapNode$, $oj$$27$$);
  $oj$$27$$.$TreemapNode$.prototype.$getColor$ = function $$oj$$27$$$$TreemapNode$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("TreemapNode.prototype.getColor", {$getColor$:$oj$$27$$.$TreemapNode$.prototype.$getColor$});
  $oj$$27$$.$TreemapNode$.prototype.$getLabel$ = function $$oj$$27$$$$TreemapNode$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("TreemapNode.prototype.getLabel", {$getLabel$:$oj$$27$$.$TreemapNode$.prototype.$getLabel$});
  $oj$$27$$.$TreemapNode$.prototype.$getSize$ = function $$oj$$27$$$$TreemapNode$$$$getSize$$() {
    return this.$_data$ ? this.$_data$.size : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("TreemapNode.prototype.getSize", {$getSize$:$oj$$27$$.$TreemapNode$.prototype.$getSize$});
  $oj$$27$$.$TreemapNode$.prototype.$getTooltip$ = function $$oj$$27$$$$TreemapNode$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("TreemapNode.prototype.getTooltip", {$getTooltip$:$oj$$27$$.$TreemapNode$.prototype.$getTooltip$});
  $oj$$27$$.$TreemapNode$.prototype.isSelected = function $$oj$$27$$$$TreemapNode$$$isSelected$() {
    return this.$_data$ ? this.$_data$.selected : !1;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("TreemapNode.prototype.isSelected", {isSelected:$oj$$27$$.$TreemapNode$.prototype.isSelected});
});
