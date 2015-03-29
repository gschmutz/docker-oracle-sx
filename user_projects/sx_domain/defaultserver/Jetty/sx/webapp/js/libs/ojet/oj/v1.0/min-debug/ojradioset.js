"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$37$$, $$$$36$$) {
  $oj$$37$$.$__registerWidget$("oj.ojRadioset", $$$$36$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:null, value:void 0}, refresh:function() {
    this._super();
    this.$$radios$.each(function() {
      var $disabledValue$$1$$ = void 0 !== $$$$36$$(this).attr("disabled") ? !!$$$$36$$(this).prop("disabled") : !1;
      $$$$36$$(this)._ojRadioCheckbox("option", "disabled", $disabledValue$$1$$);
    });
    this.$$radios$ = this.$_findRadiosWithMatchingName$().filter(".oj-radio")._ojRadioCheckbox("refresh").end().not(".oj-radio")._ojRadioCheckbox().end();
    this.$_setup$();
  }, widget:function() {
    return this.$uiRadioset$;
  }, _InitOptions:function($originalDefaults$$12$$, $constructorOptions$$13$$) {
    var $checkedRadio_domValue$$2_radios$$, $previousValue$$12$$;
    this._super($originalDefaults$$12$$, $constructorOptions$$13$$);
    $oj$$37$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:!1, validateOption:!0}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"required", defaultOptionValue:!1, coerceDomValue:!0, validateOption:!0}, {attribute:"title", defaultOptionValue:""}], $constructorOptions$$13$$, this);
    void 0 === $constructorOptions$$13$$.value && ($checkedRadio_domValue$$2_radios$$ = this.$_findRadiosWithMatchingName$(), $checkedRadio_domValue$$2_radios$$ = $checkedRadio_domValue$$2_radios$$.filter(":checked"), $checkedRadio_domValue$$2_radios$$ = 0 === $checkedRadio_domValue$$2_radios$$.length ? void 0 : $checkedRadio_domValue$$2_radios$$.val(), void 0 !== $checkedRadio_domValue$$2_radios$$ && ($previousValue$$12$$ = this.options.value, this.options.value = $checkedRadio_domValue$$2_radios$$, 
    this.$_InitializedOptionFromDom$("value", $previousValue$$12$$)), void 0 === this.options.value && (this.options.value = null));
  }, _ComponentCreate:function() {
    this._super();
    if (this.element.is("fieldset")) {
      throw Error("ojRadioset cannot be bound to a fieldset. Use a div instead.");
    }
    this.$$radios$ = this.$_findRadiosWithMatchingName$()._ojRadioCheckbox();
    this.$uiRadioset$ = this.element.addClass("oj-radioset oj-component").attr("role", "radiogroup");
    this._on(this.$_events$);
    this.$_setup$();
  }, Focus:function() {
    this.$_GetContentElement$().first().focus();
    return!0;
  }, $_findRadiosWithMatchingName$:function() {
    var $allradios_first$$10_name$$94$$ = this.element.find("input[type\x3dradio]:first");
    0 === $allradios_first$$10_name$$94$$.length && $oj$$37$$.$Logger$.warn("Could not find any input type\x3dradio within this element");
    $allradios_first$$10_name$$94$$ = $allradios_first$$10_name$$94$$.attr("name");
    return void 0 === $allradios_first$$10_name$$94$$ ? ($allradios_first$$10_name$$94$$ = this.element.find("input[type\x3dradio]"), $allradios_first$$10_name$$94$$.not("[name]")) : this.element.find("input[type\x3dradio][name\x3d" + $allradios_first$$10_name$$94$$ + "]");
  }, _OpenContextMenu:function($menu$$19$$, $event$$390$$) {
    var $launcher$$6_radios$$1$$ = this.element.find("input[type\x3dradio]"), $checked$$3$$ = $launcher$$6_radios$$1$$.filter(":checked"), $launcher$$6_radios$$1$$ = $checked$$3$$.length ? $checked$$3$$ : $launcher$$6_radios$$1$$.filter(":enabled").first();
    $menu$$19$$.open($event$$390$$, {launcher:$launcher$$6_radios$$1$$, initialFocus:"menu"});
  }, $_setup$:function() {
    !0 === this.options.disabled ? this.disable() : !1 === this.options.disabled && this.enable();
  }, $_events$:{change:function($event$$391$$) {
    this.$_HandleChangeEvent$($event$$391$$);
  }}, $_HandleChangeEvent$:function($event$$392$$) {
    this._super($event$$392$$);
  }, $_GetDisplayValue$:function() {
    return this.$_GetElementValue$();
  }, $_SetDisplayValue$:function($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$) {
    null != $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ && ($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ = "[value\x3d'" + $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ + "']", void 0 !== $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ && void 0 !== this.$$radios$ && ($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ = this.$$radios$.filter($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$), void 0 !== $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ && 
    0 < $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$.length ? $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$.prop("checked") || $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$._ojRadioCheckbox("option", "checked", !0) : this.$$radios$._ojRadioCheckbox("option", "checked", !1)));
  }, $_GetElementValue$:function() {
    var $checkedRadio$$1$$ = this.$$radios$.filter(":checked");
    return 0 === $checkedRadio$$1$$.length ? null : $checkedRadio$$1$$.val();
  }, _GetDefaultStyleClass:function() {
    return "oj-radioset";
  }, $_GetContentElement$:function() {
    return this.$_findRadiosWithMatchingName$();
  }, $_RefreshAriaRequired$:function($value$$229$$) {
    var $rootNode$$1$$ = this.$uiRadioset$;
    $value$$229$$ && $rootNode$$1$$ ? $rootNode$$1$$.attr("aria-required", $value$$229$$) : $rootNode$$1$$.removeAttr("aria-required");
  }, _setOption:function($key$$123$$, $value$$230$$) {
    this._superApply(arguments);
    "disabled" === $key$$123$$ && (this.$$radios$.each(function() {
      $$$$36$$(this).data("oj-_ojRadioCheckbox").$__setAncestorComponentDisabled$($value$$230$$);
    }), this.$$radios$._ojRadioCheckbox("refresh"));
  }, getNodeBySubId:function($locator$$32_subId$$23$$) {
    var $node$$87$$ = this._super($locator$$32_subId$$23$$);
    $node$$87$$ || ($locator$$32_subId$$23$$ = $locator$$32_subId$$23$$.subId, "oj-radioset-inputs" === $locator$$32_subId$$23$$ && ($node$$87$$ = this.$$radios$));
    return $node$$87$$ || null;
  }, _destroy:function() {
    this.$$radios$ && this.$$radios$._ojRadioCheckbox("destroy");
    this.$_RestoreAttributes$();
    return this._super();
  }});
});
