/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$5$$, $$$$5$$) {
  $oj$$5$$.$__registerWidget$("oj.inputBase", $$$$5$$.oj.editableValue, {version:"1.0.0", widgetEventPrefix:"oj", _ATTR_CHECK:[], _CLASS_NAMES:"", _WIDGET_CLASS_NAMES:"", _INPUT_HELPER_KEY:"", $_BLUR_HANDLER_KEY$:"blur", $_KEYDOWN_HANDLER_KEY$:"keydown", $_DROP_HANDLER_KEY$:"drop", options:{converter:void 0, placeholder:void 0, readOnly:void 0}, $_SaveAttributes$:function($element$$23$$) {
    var $ret$$2$$ = this._superApply(arguments);
    this.$_processAttrCheck$();
    return $ret$$2$$;
  }, _InitOptions:function($originalDefaults$$5$$, $constructorOptions$$6$$) {
    this._super($originalDefaults$$5$$, $constructorOptions$$6$$);
    $oj$$5$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:!1, validateOption:!0}, {attribute:"pattern", defaultOptionValue:""}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"value", defaultOptionValue:null}, {attribute:"readonly", option:"readOnly", defaultOptionValue:!1, validateOption:!0}, {attribute:"required", defaultOptionValue:!1, coerceDomValue:!0, validateOption:!0}, {attribute:"title", defaultOptionValue:""}], $constructorOptions$$6$$, 
    this);
  }, _ComponentCreate:function() {
    var $node$$15$$ = this.element, $ret$$3$$ = this._superApply(arguments), $savedAttributes$$2$$ = this.$_GetSavedAttributes$($node$$15$$);
    "boolean" === typeof this.options.readOnly && this.element.prop("readonly", this.options.readOnly);
    this.$_DoWrapElement$() && this.$_wrapElement$();
    "pattern" in $savedAttributes$$2$$ && $node$$15$$.removeAttr("pattern");
    this.$__defaultRegExpOptions$ = {};
    this.$_eventHandlers$ = null;
    return $ret$$3$$;
  }, $_AfterCreate$:function() {
    var $ret$$4$$ = this._superApply(arguments), $self$$41$$ = this;
    this._CLASS_NAMES && this.element.addClass(this._CLASS_NAMES);
    this.$_attachDetachEventHandlers$();
    this.$_AppendInputHelper$();
    $$$$5$$.each(["disabled", "readOnly"], function($index$$78$$, $ele$$2$$) {
      $self$$41$$.options[$ele$$2$$] && $self$$41$$.$_processDisabledReadOnly$($ele$$2$$, $self$$41$$.options[$ele$$2$$]);
    });
    return $ret$$4$$;
  }, $_processDisabledReadOnly$:function __processDisabledReadOnly($key$$34$$, $value$$92$$) {
    "disabled" === $key$$34$$ && this.element.prop("disabled", $value$$92$$);
    "readOnly" === $key$$34$$ && (this.element.prop("readonly", $value$$92$$), this.$_refreshStateTheming$("readOnly", $value$$92$$));
    "disabled" !== $key$$34$$ && "readOnly" !== $key$$34$$ || this.$_attachDetachEventHandlers$();
  }, _setOption:function __setOption($key$$35$$, $value$$93$$) {
    var $retVal$$5$$ = this._superApply(arguments);
    "disabled" !== $key$$35$$ && "readOnly" !== $key$$35$$ || this.$_processDisabledReadOnly$($key$$35$$, $value$$93$$);
    "pattern" === $key$$35$$ && (this.$__defaultRegExpOptions$.pattern = $value$$93$$, this.$_ResetAllValidators$(), this.$_AfterSetOptionValidators$());
    return $retVal$$5$$;
  }, _destroy:function __destroy() {
    var $ret$$5$$ = this._superApply(arguments);
    this.element.off("blur drop keydown");
    this.$_inputHelper$ && this.$_inputHelper$.remove();
    this.$_DoWrapElement$() && this.element.unwrap();
    this.$_RestoreAttributes$();
    return $ret$$5$$;
  }, $_attachDetachEventHandlers$:function __attachDetachEventHandlers() {
    if (!this.options.readOnly && !this.options.disabled) {
      this.$_eventHandlers$ = {};
      var $blurHandler_eventEntries$$ = $$$$5$$.proxy(this.$_onBlurHandler$, this), $i$$98_keyDownHandler$$ = $$$$5$$.proxy(this.$_onKeyDownHandler$, this), $dropHandler_j$$12$$ = function $$dropHandler_j$$12$$$() {
        this.focus();
      };
      this.element.on("blur", $blurHandler_eventEntries$$);
      this.element.on("keydown", $i$$98_keyDownHandler$$);
      this.element.on("drop", $dropHandler_j$$12$$);
      this.$_eventHandlers$[this.$_BLUR_HANDLER_KEY$] = $blurHandler_eventEntries$$;
      this.$_eventHandlers$[this.$_KEYDOWN_HANDLER_KEY$] = $i$$98_keyDownHandler$$;
      this.$_eventHandlers$[this.$_DROP_HANDLER_KEY$] = $dropHandler_j$$12$$;
    } else {
      if (this.$_eventHandlers$) {
        for ($blurHandler_eventEntries$$ = [this.$_BLUR_HANDLER_KEY$, this.$_KEYDOWN_HANDLER_KEY$, this.$_DROP_HANDLER_KEY$], $i$$98_keyDownHandler$$ = 0, $dropHandler_j$$12$$ = $blurHandler_eventEntries$$.length;$i$$98_keyDownHandler$$ < $dropHandler_j$$12$$;$i$$98_keyDownHandler$$++) {
          this.$_eventHandlers$[$blurHandler_eventEntries$$[$i$$98_keyDownHandler$$]] && (this.element.off($blurHandler_eventEntries$$[$i$$98_keyDownHandler$$], this.$_eventHandlers$[$blurHandler_eventEntries$$[$i$$98_keyDownHandler$$]]), delete this.$_eventHandlers$[$blurHandler_eventEntries$$[$i$$98_keyDownHandler$$]]);
        }
      }
    }
  }, $_OPTION_TO_CSS_MAPPING$:{readOnly:"oj-read-only"}, $_processAttrCheck$:function __processAttrCheck() {
    for (var $attrCheck$$ = this._ATTR_CHECK, $i$$99$$ = 0, $j$$13$$ = $attrCheck$$.length;$i$$99$$ < $j$$13$$;$i$$99$$++) {
      var $attr$$12$$ = $attrCheck$$[$i$$99$$].attr;
      "setMandatory" in $attrCheck$$[$i$$99$$] && this.element.attr($attr$$12$$, $attrCheck$$[$i$$99$$].setMandatory);
    }
  }, $_onBlurHandler$:function __onBlurHandler($event$$37$$) {
    this.$_SetValue$(this.$_GetDisplayValue$(), $event$$37$$);
  }, $_onKeyDownHandler$:function __onKeyDownHandler($event$$38$$) {
    $event$$38$$.keyCode === $$$$5$$.ui.keyCode.ENTER && this.$_SetValue$(this.$_GetDisplayValue$(), $event$$38$$);
  }, $_DoWrapElement$:function() {
    return this._WIDGET_CLASS_NAMES;
  }, $_wrapElement$:function __wrapElement() {
    $$$$5$$(this.element).wrap($$$$5$$("\x3cdiv\x3e").addClass(this._WIDGET_CLASS_NAMES));
    this.$_wrapper$ = this.element.parent();
  }, $_AppendInputHelper$:function __AppendInputHelper() {
    if (this._INPUT_HELPER_KEY && this.$_DoWrapElement$()) {
      var $describedBy$$ = this.element.attr("aria-describedby") || "", $helperDescribedById$$ = this.$_GetSubId$(this._INPUT_HELPER_KEY);
      this.element.attr("aria-describedby", $describedBy$$ + (" " + $helperDescribedById$$));
      this.$_inputHelper$ = $$$$5$$("\x3cdiv class\x3d'oj-helper-hidden-accessible' id\x3d'" + $helperDescribedById$$ + "'\x3e" + this.$getTranslatedString$(this._INPUT_HELPER_KEY) + "\x3c/div\x3e");
      this.$_AppendInputHelperParent$().append(this.$_inputHelper$);
    }
  }, $_AppendInputHelperParent$:function __AppendInputHelperParent() {
    return this.widget();
  }, $_ResetComponentState$:function() {
    this.$__defaultRegExpOptions$ = {};
    this._super();
  }, $_GetImplicitValidators$:function() {
    var $ret$$6$$ = this._superApply(arguments), $validatorMap$$ = {};
    return this.options.pattern ? ($validatorMap$$[$oj$$5$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP] = this.$_getDefaultRegExpValidator$(), $oj$$5$$.$CollectionUtils$.$copyInto$($validatorMap$$, $ret$$6$$)) : $ret$$6$$;
  }, $_refreshStateTheming$:function($option$$12$$, $value$$94$$) {
    -1 != Object.keys(this.$_OPTION_TO_CSS_MAPPING$).indexOf($option$$12$$) && this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$12$$], !!$value$$94$$);
  }, $_getDefaultRegExpValidator$:function() {
    var $vf$$1$$;
    this.$__defaultRegExpOptions$ = {pattern:this.options.pattern, label:this.$_getLabelText$()};
    return($vf$$1$$ = $oj$$5$$.$Validation$.$validatorFactory$($oj$$5$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP)) ? $vf$$1$$.createValidator(this.$__defaultRegExpOptions$) : null;
  }, $_GetSubId$:function __getSubId($sub$$) {
    return this.uuid + "_" + $sub$$;
  }, $_IsRTL$:function() {
    return "rtl" === this.$_GetReadingDirection$();
  }, getNodeBySubId:function($locator$$4$$) {
    return this._super($locator$$4$$);
  }, widget:function _widget() {
    return this.$_DoWrapElement$() ? this.$_wrapper$ : this.element;
  }});
  $oj$$5$$.$__registerWidget$("oj.ojInputText", $$$$5$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[{attr:"type", setMandatory:"text"}], _CLASS_NAMES:"oj-inputtext-input", _WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-component", options:{pattern:void 0}, getNodeBySubId:function($locator$$5$$) {
    var $node$$16$$ = this._superApply(arguments), $subId$$1$$;
    $node$$16$$ || ($subId$$1$$ = $locator$$5$$.subId, "oj-inputtext-input" === $subId$$1$$ && ($node$$16$$ = this.element ? this.element[0] : null));
    return $node$$16$$ || null;
  }, _GetDefaultStyleClass:function() {
    return "oj-inputtext";
  }});
  $oj$$5$$.$__registerWidget$("oj.ojTextArea", $$$$5$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3ctextarea\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[], _CLASS_NAMES:"oj-textarea-input", _WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-component", options:{pattern:void 0}, getNodeBySubId:function($locator$$6$$) {
    var $node$$17$$ = this._superApply(arguments), $subId$$2$$;
    $node$$17$$ || ($subId$$2$$ = $locator$$6$$.subId, "oj-textarea-input" === $subId$$2$$ && ($node$$17$$ = this.element ? this.element[0] : null));
    return $node$$17$$ || null;
  }, _GetDefaultStyleClass:function() {
    return "oj-textarea";
  }});
  $oj$$5$$.$__registerWidget$("oj.ojInputPassword", $$$$5$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[{attr:"type", setMandatory:"password"}], _CLASS_NAMES:"oj-inputpassword-input", _WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-component", options:{pattern:void 0}, getNodeBySubId:function($locator$$7$$) {
    var $node$$18$$ = this._superApply(arguments), $subId$$3$$;
    $node$$18$$ || ($subId$$3$$ = $locator$$7$$.subId, "oj-inputpassword-input" === $subId$$3$$ && ($node$$18$$ = this.element ? this.element[0] : null));
    return $node$$18$$ || null;
  }, _GetDefaultStyleClass:function() {
    return "oj-inputpassword";
  }});
});
