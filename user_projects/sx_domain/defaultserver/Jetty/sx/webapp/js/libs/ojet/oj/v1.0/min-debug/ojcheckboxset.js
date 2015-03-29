"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$26$$, $$$$26$$) {
  $oj$$26$$.$__registerWidget$("oj.ojCheckboxset", $$$$26$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:null, value:void 0}, refresh:function() {
    this._super();
    this.$$checkboxes$.each(function() {
      var $disabledValue$$ = void 0 !== $$$$26$$(this).attr("disabled") ? !!$$$$26$$(this).prop("disabled") : !1;
      $$$$26$$(this)._ojRadioCheckbox("option", "disabled", $disabledValue$$);
    });
    this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$().filter(".oj-checkbox")._ojRadioCheckbox("refresh").end().not(".oj-checkbox")._ojRadioCheckbox().end();
    this.$_setup$();
  }, widget:function() {
    return this.$uiCheckboxset$;
  }, _InitOptions:function($originalDefaults$$10$$, $constructorOptions$$11$$) {
    var $checkboxes_previousValue$$8_selectedCheckbox$$, $checkedValues$$ = [];
    this._super($originalDefaults$$10$$, $constructorOptions$$11$$);
    $oj$$26$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:!1, validateOption:!0}, {attribute:"title", defaultOptionValue:""}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"required", defaultOptionValue:!1, coerceDomValue:!0, validateOption:!0}], $constructorOptions$$11$$, this);
    void 0 === $constructorOptions$$11$$.value && ($checkboxes_previousValue$$8_selectedCheckbox$$ = this.$_findCheckboxesWithMatchingName$(), $checkboxes_previousValue$$8_selectedCheckbox$$ = $checkboxes_previousValue$$8_selectedCheckbox$$.filter(":checked"), 0 < $checkboxes_previousValue$$8_selectedCheckbox$$.length && ($checkboxes_previousValue$$8_selectedCheckbox$$.each(function() {
      $checkedValues$$.push($$$$26$$(this).val());
    }), $checkboxes_previousValue$$8_selectedCheckbox$$ = this.options.value, this.$_InitializedOptionFromDom$("value", $checkboxes_previousValue$$8_selectedCheckbox$$), this.options.value = $checkedValues$$), void 0 === this.options.value && (this.options.value = []));
  }, _ComponentCreate:function() {
    this._super();
    if (this.element.is("fieldset")) {
      throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");
    }
    this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$()._ojRadioCheckbox();
    this.$uiCheckboxset$ = this.element.addClass("oj-checkboxset oj-component").attr("role", "group");
    this._on(this.$_events$);
    this.$_setup$();
  }, Focus:function() {
    this.$_GetContentElement$().first().focus();
    return!0;
  }, $_findCheckboxesWithMatchingName$:function() {
    var $allcheckboxes_first$$8_name$$92$$ = this.element.find("input[type\x3dcheckbox]:first");
    0 === $allcheckboxes_first$$8_name$$92$$.length && $oj$$26$$.$Logger$.warn("Could not find any input type\x3dcheckbox within this element");
    $allcheckboxes_first$$8_name$$92$$ = $allcheckboxes_first$$8_name$$92$$.attr("name");
    return void 0 === $allcheckboxes_first$$8_name$$92$$ ? ($allcheckboxes_first$$8_name$$92$$ = this.element.find("input[type\x3dcheckbox]"), $allcheckboxes_first$$8_name$$92$$.not("[name]")) : this.element.find("input[type\x3dcheckbox][name\x3d" + $allcheckboxes_first$$8_name$$92$$ + "]");
  }, _OpenContextMenu:function($menu$$13$$, $event$$336$$) {
    var $launcher$$5$$ = this.element.find("input[type\x3dcheckbox]:tabbable").first();
    $menu$$13$$.open($event$$336$$, {launcher:$launcher$$5$$, initialFocus:"menu"});
  }, $_setup$:function() {
    this.options.disabled ? this.disable() : !1 === this.options.disabled && this.enable();
  }, $_events$:{change:function($event$$337$$) {
    this.$_HandleChangeEvent$($event$$337$$);
  }}, $_HandleChangeEvent$:function($event$$338$$) {
    this._super($event$$338$$);
  }, $_GetDisplayValue$:function() {
    return this.$_GetElementValue$();
  }, $_SetDisplayValue$:function($checkedBoxes$$) {
    var $checkboxWithMatchingValue_displayValue$$8_valueFilter$$;
    this.$$checkboxes$._ojRadioCheckbox("option", "checked", !1);
    if (null != $checkedBoxes$$) {
      for (var $i$$293$$ = 0;$i$$293$$ < $checkedBoxes$$.length;$i$$293$$++) {
        $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ = $checkedBoxes$$[$i$$293$$], $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ = "[value\x3d'" + $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ + "']", $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ = this.$$checkboxes$.filter($checkboxWithMatchingValue_displayValue$$8_valueFilter$$), void 0 !== $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ && 0 < $checkboxWithMatchingValue_displayValue$$8_valueFilter$$.length && 
        ($checkboxWithMatchingValue_displayValue$$8_valueFilter$$.prop("checked") || $checkboxWithMatchingValue_displayValue$$8_valueFilter$$._ojRadioCheckbox("option", "checked", !0));
      }
    }
  }, $_GetElementValue$:function() {
    var $checkedValues$$1$$ = [], $selectedCheckbox$$1$$ = this.$$checkboxes$.filter(":checked");
    if (0 === $selectedCheckbox$$1$$.length) {
      return[];
    }
    $selectedCheckbox$$1$$.each(function() {
      $checkedValues$$1$$.push($$$$26$$(this).val());
    });
    return $checkedValues$$1$$;
  }, _GetDefaultStyleClass:function() {
    return "oj-checkboxset";
  }, $_GetContentElement$:function() {
    return this.$_findCheckboxesWithMatchingName$();
  }, $_RefreshAriaRequired$:function($ariaValue$$1_value$$207$$) {
    var $rootNode$$ = this.$uiCheckboxset$;
    ($ariaValue$$1_value$$207$$ = $ariaValue$$1_value$$207$$ ? !0 : !1) && $rootNode$$ ? $rootNode$$.attr("aria-required", $ariaValue$$1_value$$207$$) : $rootNode$$.removeAttr("aria-required");
  }, _setOption:function($key$$101$$, $value$$208$$, $flags$$34$$) {
    this._super($key$$101$$, $value$$208$$, $flags$$34$$);
    "disabled" === $key$$101$$ && (this.$$checkboxes$.each(function() {
      $$$$26$$(this).data("oj-_ojRadioCheckbox").$__setAncestorComponentDisabled$($value$$208$$);
    }), this.$$checkboxes$._ojRadioCheckbox("refresh"));
  }, getNodeBySubId:function($locator$$23_subId$$17$$) {
    var $node$$81$$ = this._super($locator$$23_subId$$17$$);
    return $node$$81$$ || ($locator$$23_subId$$17$$ = $locator$$23_subId$$17$$.subId, "oj-checkboxset-inputs" !== $locator$$23_subId$$17$$) ? $node$$81$$ || null : this.$$checkboxes$;
  }, _destroy:function() {
    this.$$checkboxes$ && this.$$checkboxes$._ojRadioCheckbox("destroy");
    this.$_RestoreAttributes$();
    return this._super();
  }});
});
