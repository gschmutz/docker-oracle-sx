/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$20$$, $$$$20$$) {
  (function() {
    function $_radioGroup$$($radio$$, $$elems$$) {
      var $name$$90_selector$$17$$ = $radio$$.name, $$radios_form$$1$$ = $radio$$.form;
      $name$$90_selector$$17$$ ? ($name$$90_selector$$17$$ = $name$$90_selector$$17$$.replace(/'/g, "\\'"), $name$$90_selector$$17$$ = ":radio[name\x3d'" + $name$$90_selector$$17$$ + "']:oj-button", $$radios_form$$1$$ = $$elems$$ ? $$elems$$.filter($name$$90_selector$$17$$) : $$radios_form$$1$$ ? $$$$20$$($$radios_form$$1$$).find($name$$90_selector$$17$$) : $$$$20$$($name$$90_selector$$17$$, $radio$$.ownerDocument).filter(function() {
        return!this.form;
      })) : $$radios_form$$1$$ = ($$elems$$ ? $$elems$$.filter($radio$$) : $$$$20$$($radio$$)).filter(":oj-button");
      return $$radios_form$$1$$;
    }
    $oj$$20$$.$__registerWidget$("oj.ojButton", $$$$20$$.oj.baseComponent, {defaultElement:"\x3cbutton\x3e", widgetEventPrefix:"oj", options:{disabled:null, display:"all", label:null, icons:{start:void 0, end:void 0}, menu:null}, _create:function() {
      this.element.closest("form").unbind("reset" + $BUTTON_EVENT_NAMESPACE$$).bind("reset" + $BUTTON_EVENT_NAMESPACE$$, function() {
        var $form$$ = $$$$20$$(this);
        setTimeout(function() {
          $form$$.find(":oj-button").each(function() {
            $$$$20$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1);
          }).length || $form$$.unbind("reset" + $BUTTON_EVENT_NAMESPACE$$);
        }, 1);
      });
      "boolean" !== typeof this.options.disabled && (this.options.disabled = !!this.element.prop("disabled"));
      this.$menuEventNamespace$ = this.eventNamespace + "menu";
      this.$_initButtonTypes$();
      this.$hasTitle$ = !!this.$rootElement$.attr("title");
      var $self$$105$$ = this, $options$$300$$ = this.options, $tabIndex$$1_toggleButton$$ = this.$_isToggle$, $activeClass$$ = $tabIndex$$1_toggleButton$$ ? "" : "oj-active";
      this.$rootElement$.addClass($BASE_CLASSES$$);
      this.$buttonElement$.bind("mouseenter" + this.eventNamespace, function() {
        $self$$105$$.$_IsEffectivelyDisabled$() || (this === $_lastActive$$ && $self$$105$$.$rootElement$.addClass("oj-active"), $self$$105$$.$rootElement$.addClass("oj-hover").removeClass("oj-default oj-focus-only"));
      }).bind("mouseleave" + this.eventNamespace, function() {
        $self$$105$$.$rootElement$.removeClass("oj-hover");
        $self$$105$$.$_IsEffectivelyDisabled$() || ($self$$105$$.$rootElement$.removeClass($activeClass$$), $self$$105$$.$_toggleDefaultClasses$());
      }).bind("click" + this.eventNamespace, function($event$$203$$) {
        var $effectivelyDisabled$$ = $self$$105$$.$_IsEffectivelyDisabled$();
        $effectivelyDisabled$$ && $event$$203$$.preventDefault();
        $effectivelyDisabled$$ && $event$$203$$.stopImmediatePropagation();
      });
      this.element.attr("role", "button").bind("focus" + this.eventNamespace, function() {
        $self$$105$$.$rootElement$.addClass("oj-focus");
        $self$$105$$.$_toggleDefaultClasses$();
      }).bind("blur" + this.eventNamespace, function() {
        $self$$105$$.$rootElement$.removeClass("oj-focus");
        $self$$105$$.$_toggleDefaultClasses$();
      });
      $tabIndex$$1_toggleButton$$ && (this.element.bind("change" + this.eventNamespace, function($event$$204$$) {
        $self$$105$$.$_applyCheckedStateFromDom$(!0);
        var $buttonset$$ = $$$$20$$(this).closest(":oj-buttonset").data("oj-ojButtonset"), $checkedState$$ = $buttonset$$ && $buttonset$$.$_getCheckedFromDom$($buttonset$$.$$buttons$);
        $buttonset$$ && void 0 !== $checkedState$$ && ($buttonset$$.$_optionChangeOriginalEvent$ = $event$$204$$, $buttonset$$._setOption("checked", $checkedState$$));
      }), this.$buttonElement$.bind("mousedown" + this.eventNamespace, function() {
        $self$$105$$.$_IsEffectivelyDisabled$() || ($_lastToggleActive$$ = this, $self$$105$$.document.one("mouseup", function() {
          $_lastToggleActive$$ = null;
        }));
      }).bind("mouseup" + this.eventNamespace, function() {
        $self$$105$$.$_IsEffectivelyDisabled$() || this !== $_lastToggleActive$$ || $self$$105$$.element.focus();
      }));
      "checkbox" === this.type ? (this.$buttonElement$.bind("click" + this.eventNamespace, function() {
        if ($self$$105$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
      }), this.element.bind("keyup" + this.eventNamespace, function($event$$208$$) {
        $event$$208$$.keyCode === $$$$20$$.ui.keyCode.ENTER && ($self$$105$$.$_IsEffectivelyDisabled$() || $self$$105$$.element.click());
      })) : "radio" === this.type ? (this.$buttonElement$.bind("click" + this.eventNamespace, function() {
        if ($self$$105$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
      }), this.element.bind("keyup" + this.eventNamespace, function($event$$209$$) {
        $event$$209$$.keyCode !== $$$$20$$.ui.keyCode.ENTER || $self$$105$$.element[0].checked || $self$$105$$.$_IsEffectivelyDisabled$() || ($self$$105$$.element[0].checked = !0, $self$$105$$.element.change(), $self$$105$$.element.click());
      })) : (this.$buttonElement$.bind("mousedown" + this.eventNamespace, function($event$$210$$) {
        if ($self$$105$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
        1 === $event$$210$$.which && ($$$$20$$(this).addClass("oj-active").removeClass("oj-default oj-focus-only"), $_lastActive$$ = this, $self$$105$$.document.one("mouseup", function() {
          $_lastActive$$ = null;
        }));
      }).bind("mouseup" + this.eventNamespace, function() {
        if ($self$$105$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
        $$$$20$$(this).removeClass("oj-active");
        $self$$105$$.$_toggleDefaultClasses$();
      }).bind("keydown" + this.eventNamespace, function($event$$211$$) {
        if ($self$$105$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
        var $isSpace$$ = $event$$211$$.keyCode === $$$$20$$.ui.keyCode.SPACE;
        "anchor" === $self$$105$$.type && $isSpace$$ && $event$$211$$.preventDefault();
        ($isSpace$$ || $event$$211$$.keyCode === $$$$20$$.ui.keyCode.ENTER) && $$$$20$$(this).addClass("oj-active").removeClass("oj-default oj-focus-only");
      }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
        $$$$20$$(this).removeClass("oj-active");
        $self$$105$$.$_toggleDefaultClasses$();
      }), "anchor" === this.type && ($tabIndex$$1_toggleButton$$ = this.$buttonElement$.attr("tabindex"), ("undefined" === $tabIndex$$1_toggleButton$$ || null === $tabIndex$$1_toggleButton$$ || isNaN($tabIndex$$1_toggleButton$$)) && this.$buttonElement$.attr("tabindex", "0"), this.$buttonElement$.bind("keyup" + this.eventNamespace, function($event$$212$$) {
        $event$$212$$.keyCode === $$$$20$$.ui.keyCode.SPACE && $$$$20$$(this).click();
      })));
      this._setOption("disabled", $options$$300$$.disabled);
      this.$_handleLabelAndIconsAtCreateTime$();
      this.$_doEagerMenuButtonSetup$();
      this.$_toggleDefaultClasses$();
      this._super();
    }, $_initButtonTypes$:function() {
      var $checked_labelSelector$$;
      if (this.element.is("input[type\x3dcheckbox]")) {
        this.type = "checkbox", this.$_isToggle$ = !0;
      } else {
        if (this.element.is("input[type\x3dradio]")) {
          this.type = "radio", this.$_isToggle$ = !0;
        } else {
          if (this.element.is("input[type\x3dbutton],input[type\x3dsubmit],input[type\x3dreset]")) {
            this.type = "inputPush";
          } else {
            if (this.element.is("button")) {
              this.type = "button";
            } else {
              if (this.element.is("a")) {
                this.type = "anchor";
              } else {
                throw Error("JET Button not supported on this element type");
              }
            }
          }
        }
      }
      this.$_isToggle$ ? ($checked_labelSelector$$ = "label[for\x3d'" + this.element.attr("id") + "']", this.$buttonElement$ = this.element.siblings().filter($checked_labelSelector$$).addClass("oj-button-label"), this.element.addClass("oj-helper-hidden-accessible").add(this.$buttonElement$).wrapAll("\x3cspan\x3e\x3c/span\x3e"), this.$rootElement$ = this.element.parent(), ($checked_labelSelector$$ = this.element[0].checked) && this.$rootElement$.addClass("oj-selected").removeClass("oj-default oj-focus-only"), 
      this.element.attr("aria-pressed", $checked_labelSelector$$)) : this.$rootElement$ = this.$buttonElement$ = this.element;
    }, widget:function() {
      return this.$rootElement$;
    }, _destroy:function() {
      this.$_removeMenuBehavior$();
      this.element.removeClass("oj-helper-hidden-accessible").removeAttr("role").removeAttr("aria-pressed");
      var $isToggle$$ = this.$_isToggle$;
      $isToggle$$ || this.$rootElement$.removeClass($BASE_CLASSES$$ + " " + $STATE_CLASSES$$ + " " + $TYPE_CLASSES$$);
      this.$buttonElement$.html(this.$buttonElement$.find(".oj-button-text").html());
      if ($isToggle$$) {
        this.$buttonElement$.removeClass("oj-button-label");
        var $self$$106$$ = this;
        setTimeout(function() {
          $self$$106$$.$rootElement$.parent().length && $self$$106$$.element.unwrap();
        }, 0);
      } else {
        this.$hasTitle$ || this.$rootElement$.removeAttr("title");
      }
      $_lastToggleActive$$ === this.$buttonElement$[0] && ($_lastToggleActive$$ = null);
    }, $_NotifyDetached$:function() {
      this.$rootElement$.removeClass("oj-active oj-hover oj-focus");
      this.$_toggleDefaultClasses$();
    }, $__setAncestorComponentDisabled$:function($disabled$$5$$) {
      this._super($disabled$$5$$);
      this.$_updateEffectivelyDisabled$();
    }, $_updateEffectivelyDisabled$:function() {
      var $effectivelyDisabled$$1$$ = this.$_IsEffectivelyDisabled$();
      this.$rootElement$.toggleClass("oj-disabled", $effectivelyDisabled$$1$$);
      this.$rootElement$.toggleClass("oj-enabled", !$effectivelyDisabled$$1$$);
      "anchor" !== this.type ? (this.element.prop("disabled", $effectivelyDisabled$$1$$), this.$rootElement$.removeAttr("aria-disabled")) : this.$rootElement$.attr("aria-disabled", $effectivelyDisabled$$1$$);
      $effectivelyDisabled$$1$$ ? (this.widget().removeClass("oj-active oj-default oj-focus-only oj-hover oj-focus"), $_lastActive$$ = null, this.$_dismissMenu$()) : this.$_toggleDefaultClasses$();
    }, _setOption:function($key$$89$$, $value$$194$$, $flags$$30$$) {
      this._super($key$$89$$, $value$$194$$, $flags$$30$$);
      switch($key$$89$$) {
        case "disabled":
          this.$_updateEffectivelyDisabled$();
          break;
        case "label":
          this.$_setLabelOption$();
          break;
        case "display":
          "inputPush" !== this.type && this.$_setDisplayOptionOnDom$();
          break;
        case "icons":
          this.$_setIconsOption$(!0);
          break;
        case "menu":
          this.$_doEagerMenuButtonSetup$();
      }
    }, refresh:function() {
      this._super();
      this.$_ancestorDisabled$ && !$$$$20$$(this).closest(":oj-buttonset").length && this.$__setAncestorComponentDisabled$(!1);
    }, $_applyCheckedStateFromDom$:function($wholeGroup$$) {
      "radio" === this.type ? ($wholeGroup$$ ? $_radioGroup$$(this.element[0]) : this.element).each(function() {
        var $$radioWidget$$ = $$$$20$$(this).data("oj-ojButton");
        this.checked ? ($$radioWidget$$.$rootElement$.addClass("oj-selected").removeClass("oj-default oj-focus-only"), $$radioWidget$$.element.attr("aria-pressed", "true")) : ($$radioWidget$$.$rootElement$.removeClass("oj-selected"), $$radioWidget$$.$_toggleDefaultClasses$(), $$radioWidget$$.element.attr("aria-pressed", "false"));
      }) : "checkbox" === this.type && (this.element[0].checked ? (this.$rootElement$.addClass("oj-selected").removeClass("oj-default oj-focus-only"), this.element.attr("aria-pressed", "true")) : (this.$rootElement$.removeClass("oj-selected"), this.$_toggleDefaultClasses$(), this.element.attr("aria-pressed", "false")));
    }, $_handleLabelAndIconsAtCreateTime$:function() {
      var $keepDom_textSpan$$1$$ = !1;
      null === this.options.label && ($keepDom_textSpan$$1$$ = !0, this.options.label = "inputPush" === this.type ? this.$buttonElement$.val() : this.$buttonElement$.html());
      if ("inputPush" === this.type) {
        this.$_setLabelOnDomOfSpanlessButton$();
      } else {
        $keepDom_textSpan$$1$$ = this.$_setLabelOnDomAtCreateTime$($keepDom_textSpan$$1$$);
        void 0 === this.options.icons.end && (this.options.icons.end = this.options.menu ? "oj-component-icon oj-button-menu-dropdown-icon" : null);
        var $hasStartIcon$$ = this.$_setIconOnDom$(!0), $hasEndIcon$$ = this.$_setIconOnDom$(!1);
        this.$_setDisplayOptionOnDom$($keepDom_textSpan$$1$$, $hasStartIcon$$, $hasEndIcon$$);
      }
    }, $_setLabelOnDomAtCreateTime$:function($keepDom$$1$$) {
      var $buttonElement$$ = this.$buttonElement$, $textSpan$$2$$ = $$$$20$$("\x3cspan class\x3d'oj-button-text'\x3e\x3c/span\x3e", this.document[0]);
      $keepDom$$1$$ ? $textSpan$$2$$.append($buttonElement$$.contents()) : ($buttonElement$$.empty(), $textSpan$$2$$.text(this.options.label));
      $buttonElement$$.append($textSpan$$2$$);
      return $textSpan$$2$$;
    }, $_setLabelOption$:function() {
      if ("inputPush" === this.type) {
        this.$_setLabelOnDomOfSpanlessButton$();
      } else {
        var $textSpan$$3$$ = this.$buttonElement$.find(".oj-button-text");
        $textSpan$$3$$.text(this.options.label);
        this.$_setDisplayOptionOnDom$($textSpan$$3$$);
      }
    }, $_setLabelOnDomOfSpanlessButton$:function() {
      this.options.label && this.element.val(this.options.label);
    }, $_setIconsOption$:function() {
      if ("inputPush" !== this.type) {
        var $hasStartIcon$$1$$ = this.$_setIconOnDom$(!0), $hasEndIcon$$1$$ = this.$_setIconOnDom$(!1);
        this.$_setDisplayOptionOnDom$(void 0, $hasStartIcon$$1$$, $hasEndIcon$$1$$);
      }
    }, $_setIconOnDom$:function($isStart_standardIconClasses$$) {
      if ($isStart_standardIconClasses$$) {
        var $iconSpan_iconSpanSelector$$ = ".oj-button-icon.oj-start";
        $isStart_standardIconClasses$$ = "oj-button-icon oj-start";
        var $appIconClass$$ = this.options.icons.start, $lastIvar$$ = "_lastStartIcon", $pendTo$$ = "prependTo";
      } else {
        $iconSpan_iconSpanSelector$$ = ".oj-button-icon.oj-end", $isStart_standardIconClasses$$ = "oj-button-icon oj-end", $appIconClass$$ = this.options.icons.end, $lastIvar$$ = "_lastEndIcon", $pendTo$$ = "appendTo";
      }
      $iconSpan_iconSpanSelector$$ = this.$buttonElement$.find($iconSpan_iconSpanSelector$$);
      $appIconClass$$ ? ($iconSpan_iconSpanSelector$$.length ? $iconSpan_iconSpanSelector$$.removeClass(this[$lastIvar$$]) : $iconSpan_iconSpanSelector$$ = $$$$20$$("\x3cspan\x3e\x3c/span\x3e").addClass($isStart_standardIconClasses$$)[$pendTo$$](this.$buttonElement$), $iconSpan_iconSpanSelector$$.addClass($appIconClass$$)) : $iconSpan_iconSpanSelector$$.remove();
      this[$lastIvar$$] = $appIconClass$$;
      return!!$appIconClass$$;
    }, $_setDisplayOptionOnDom$:function($buttonText_textSpan$$4$$, $buttonClass_hasStartIcon$$2$$, $atLeastOneIcon_hasEndIcon$$2$$) {
      void 0 === $buttonText_textSpan$$4$$ && ($buttonText_textSpan$$4$$ = this.$buttonElement$.find(".oj-button-text"));
      void 0 === $buttonClass_hasStartIcon$$2$$ && ($buttonClass_hasStartIcon$$2$$ = !!this.options.icons.start);
      void 0 === $atLeastOneIcon_hasEndIcon$$2$$ && ($atLeastOneIcon_hasEndIcon$$2$$ = !!this.options.icons.end);
      var $multipleIcons$$ = $buttonClass_hasStartIcon$$2$$ && $atLeastOneIcon_hasEndIcon$$2$$;
      $atLeastOneIcon_hasEndIcon$$2$$ = $buttonClass_hasStartIcon$$2$$ || $atLeastOneIcon_hasEndIcon$$2$$;
      var $displayIsIcons$$ = "icons" === this.options.display;
      $atLeastOneIcon_hasEndIcon$$2$$ && $displayIsIcons$$ ? ($buttonText_textSpan$$4$$.addClass("oj-helper-hidden-accessible"), this.$hasTitle$ || ($buttonText_textSpan$$4$$ = $buttonText_textSpan$$4$$.text(), this.$rootElement$.attr("title", $$$$20$$.trim($buttonText_textSpan$$4$$)))) : ($buttonText_textSpan$$4$$.removeClass("oj-helper-hidden-accessible"), this.$hasTitle$ || this.$rootElement$.removeAttr("title"));
      $buttonClass_hasStartIcon$$2$$ = $atLeastOneIcon_hasEndIcon$$2$$ ? $displayIsIcons$$ ? $multipleIcons$$ ? "oj-button-icons-only" : "oj-button-icon-only" : $multipleIcons$$ ? "oj-button-text-icons" : $buttonClass_hasStartIcon$$2$$ ? "oj-button-text-icon-start" : "oj-button-text-icon-end" : "oj-button-text-only";
      this.$rootElement$.removeClass($TYPE_CLASSES$$).addClass($buttonClass_hasStartIcon$$2$$);
    }, $_doEagerMenuButtonSetup$:function() {
      if (this.options.menu && this.element.is("input")) {
        throw Error("Menu Button functionality is not supported on input elements.");
      }
      this.$_removeMenuBehavior$();
      if (this.options.menu) {
        var $self$$107$$ = this;
        this.element.attr("aria-haspopup", !0).on("keydown" + this.$menuEventNamespace$, function($event$$213$$) {
          if ($event$$213$$.which === $$$$20$$.ui.keyCode.DOWN) {
            $self$$107$$.$_showMenu$($event$$213$$, "firstItem"), $event$$213$$.preventDefault();
          } else {
            if ($event$$213$$.which === $$$$20$$.ui.keyCode.ESCAPE) {
              return $self$$107$$.$_dismissMenu$($event$$213$$), !1;
            }
          }
          return!0;
        }).on("click" + this.$menuEventNamespace$, function($event$$214$$) {
          var $menu$$3$$ = $self$$107$$.$_getMenu$();
          $menu$$3$$.$__spaceEnterDownInMenu$ || $self$$107$$.$_showMenu$($event$$214$$, "firstItem");
          $menu$$3$$.$__spaceEnterDownInMenu$ = !1;
          $event$$214$$.preventDefault();
          return!0;
        });
      }
    }, $_doLazyMenuButtonSetup$:function($menu$$4$$) {
      this.$_menu$ = $menu$$4$$;
      var $self$$108$$ = this;
      $menu$$4$$.widget().on("oj__dismiss" + this.$menuEventNamespace$, function($event$$215$$) {
        $self$$108$$.$_menuDismissHandler$($event$$215$$);
      }).on("ojbeforeopen" + this.$menuEventNamespace$, function($event$$216$$) {
        $self$$108$$.$_launchingMenu$ || $self$$108$$.$_menuDismissHandler$($event$$216$$);
        $self$$108$$.$_launchingMenu$ = !1;
      });
    }, $_removeMenuBehavior$:function() {
      this.element.removeAttr("aria-haspopup").off(this.$menuEventNamespace$);
      this.$_dismissMenu$();
      this.$_menu$ && this.$_menu$.widget().off(this.$menuEventNamespace$);
      this.$_menu$ = void 0;
    }, $_getMenu$:function() {
      var $menu$$5$$ = this.$_menu$;
      $menu$$5$$ || (($menu$$5$$ = $$$$20$$(this.options.menu).data("oj-ojMenu")) ? this.$_doLazyMenuButtonSetup$($menu$$5$$) : this.options.menu && $oj$$20$$.$Logger$.warn('JET Button: "menu" option specified, but does not reference a valid JET Menu.'));
      return $menu$$5$$;
    }, $_showMenu$:function($event$$217$$, $focus$$) {
      if (!this.$_IsEffectivelyDisabled$()) {
        var $menu$$6$$ = this.$_getMenu$();
        $menu$$6$$ && (this.$rootElement$.addClass("oj-selected").removeClass("oj-default oj-focus-only"), this.$_launchingMenu$ = !0, $menu$$6$$.open($event$$217$$, {launcher:this.element, initialFocus:$focus$$}), this.$_menuVisible$ = !0);
      }
    }, $_dismissMenu$:function($event$$218$$) {
      this.$_menuVisible$ && (this.$_menu$.$__collapseAll$($event$$218$$, !0), this.$_menu$.$__dismiss$($event$$218$$));
    }, $_menuDismissHandler$:function() {
      if ("button" === this.type || "anchor" === this.type) {
        this.$rootElement$.removeClass("oj-selected"), this.$_toggleDefaultClasses$();
      }
      this.$_menuVisible$ = !1;
    }, $_toggleDefaultClasses$:function() {
      var $defaultState$$, $focused$$4_focusedOnly$$;
      this.$rootElement$.is(".oj-hover, .oj-active, .oj-selected, .oj-disabled") ? $focused$$4_focusedOnly$$ = $defaultState$$ = !1 : ($focused$$4_focusedOnly$$ = this.$rootElement$.is(".oj-focus"), $defaultState$$ = !$focused$$4_focusedOnly$$);
      this.$rootElement$.toggleClass("oj-default", $defaultState$$);
      this.$rootElement$.toggleClass("oj-focus-only", $focused$$4_focusedOnly$$);
    }});
    $oj$$20$$.$__registerWidget$("oj.ojButtonset", $$$$20$$.oj.baseComponent, {$_items$:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a", widgetEventPrefix:"oj", options:{checked:void 0, focusManagement:"oneTabstop", optionChange:null}, $_setCheckedOnDom$:function($checked$$1$$, $$buttons$$1$$) {
      var $name$$88_type$$81_valid$$8$$ = $$$$20$$.type($checked$$1$$);
      if ("string" === $name$$88_type$$81_valid$$8$$ || "null" === $name$$88_type$$81_valid$$8$$) {
        return($name$$88_type$$81_valid$$8$$ = (($name$$88_type$$81_valid$$8$$ = $$buttons$$1$$[0].name) || 1 >= $$buttons$$1$$.length) && $$buttons$$1$$.filter("input[type\x3dradio][name\x3d" + $name$$88_type$$81_valid$$8$$ + "]").length === $$buttons$$1$$.length && (null === $checked$$1$$ || $$buttons$$1$$.filter("[value\x3d" + $checked$$1$$ + "]").length)) && $$buttons$$1$$.each(function() {
          this.checked = this.value === $checked$$1$$;
        }), $name$$88_type$$81_valid$$8$$;
      }
      if ("array" === $name$$88_type$$81_valid$$8$$) {
        var $name$$88_type$$81_valid$$8$$ = $$buttons$$1$$.filter("input[type\x3dcheckbox]").length === $$buttons$$1$$.length, $last$$1$$;
        ($name$$88_type$$81_valid$$8$$ = $name$$88_type$$81_valid$$8$$ && $checked$$1$$.concat().sort().every(function($elem$$20$$) {
          var $retVal$$13$$ = $elem$$20$$ !== $last$$1$$ && $$buttons$$1$$.filter("[value\x3d" + $elem$$20$$ + "]").length;
          $last$$1$$ = $elem$$20$$;
          return $retVal$$13$$;
        })) && $$buttons$$1$$.each(function() {
          this.checked = -1 < $checked$$1$$.indexOf(this.value);
        });
        return $name$$88_type$$81_valid$$8$$;
      }
      return!1;
    }, $_getCheckedFromDom$:function($$buttons$$2$$) {
      var $checked$$2$$ = void 0, $isRadio$$ = null, $name$$89$$ = null;
      $$buttons$$2$$.each(function() {
        if ("input" !== this.tagName.toLowerCase()) {
          return $checked$$2$$ = void 0, !1;
        }
        var $currentIsRadio_currentType$$ = this.type.toLowerCase(), $currentName$$;
        if ("radio" === $currentIsRadio_currentType$$) {
          $currentIsRadio_currentType$$ = !0, $currentName$$ = this.name.toLowerCase();
        } else {
          if ("checkbox" === $currentIsRadio_currentType$$) {
            $currentIsRadio_currentType$$ = !1, $currentName$$ = null;
          } else {
            return $checked$$2$$ = void 0, !1;
          }
        }
        if (void 0 !== $checked$$2$$ && ($currentIsRadio_currentType$$ !== $isRadio$$ || $currentName$$ !== $name$$89$$ || $isRadio$$ && !$name$$89$$)) {
          return $checked$$2$$ = void 0, !1;
        }
        void 0 === $checked$$2$$ ? ($checked$$2$$ = $currentIsRadio_currentType$$ ? this.checked ? this.value : null : this.checked ? [this.value] : [], $isRadio$$ = $currentIsRadio_currentType$$, $name$$89$$ = $currentName$$) : this.checked && ($isRadio$$ ? $checked$$2$$ = this.value : $checked$$2$$.push(this.value));
      });
      return $checked$$2$$;
    }, $_checkedEquals$:function($checked1$$, $checked2$$) {
      return $checked1$$ === $checked2$$ ? !0 : "array" === $$$$20$$.type($checked1$$) && "array" === $$$$20$$.type($checked2$$) && !$$$$20$$($checked1$$).not($checked2$$).length && !$$$$20$$($checked2$$).not($checked1$$).length;
    }, _create:function() {
      this.element.addClass("oj-buttonset oj-component");
      "oneTabstop" === this.options.focusManagement && this.element.attr("role", "toolbar");
      this.$_setup$(!0);
      this._super();
    }, _OpenContextMenu:function($menu$$7$$, $event$$220$$) {
      $menu$$7$$.open($event$$220$$, {launcher:this.element.find(":oj-button[tabindex\x3d0]"), initialFocus:"menu"});
    }, $_propagateDisabled$:function($disabled$$6$$) {
      $disabled$$6$$ = !!$disabled$$6$$;
      this.$$buttons$.each(function() {
        $$$$20$$(this).data("oj-ojButton").$__setAncestorComponentDisabled$($disabled$$6$$);
      });
    }, _setOption:function($key$$90$$, $value$$195$$) {
      var $bail_previousValue$$6$$ = !1, $optionChangeOriginalEvent$$ = this.$_optionChangeOriginalEvent$;
      this.$_optionChangeOriginalEvent$ = null;
      "disabled" === $key$$90$$ && this.$_propagateDisabled$($value$$195$$);
      "checked" !== $key$$90$$ || $optionChangeOriginalEvent$$ || null === $value$$195$$ && void 0 === this.$_getCheckedFromDom$(this.$$buttons$) || (this.$_setCheckedOnDom$($value$$195$$, this.$$buttons$) ? this.$$buttons$.each(function() {
        $$$$20$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1);
      }) : $bail_previousValue$$6$$ = !0);
      $bail_previousValue$$6$$ || ($bail_previousValue$$6$$ = this.options[$key$$90$$], this._superApply(arguments), "checked" === $key$$90$$ && this.$_fireOptionChange$($key$$90$$, $bail_previousValue$$6$$, $value$$195$$, this.$_checkedEquals$, $optionChangeOriginalEvent$$));
    }, $_fireOptionChange$:function($key$$91$$, $previousValue$$7$$, $value$$196$$, $equals$$, $originalEvent$$4$$) {
      $equals$$.call(this, $previousValue$$7$$, $value$$196$$) || this._trigger("optionChange", $originalEvent$$4$$, {option:$key$$91$$, previousValue:$previousValue$$7$$, value:$value$$196$$, optionMetadata:{writeback:$originalEvent$$4$$ ? "shouldWrite" : "shouldNotWrite"}});
    }, refresh:function() {
      this._super();
      this.$_setup$(!1);
    }, $_setup$:function($isCreate$$) {
      var $self$$109$$ = this;
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$$buttons$ = this.element.find(this.$_items$);
      if ($isCreate$$ && !this.$_setCheckedOnDom$(this.options.checked, this.$$buttons$)) {
        var $newChecked$$ = this.$_getCheckedFromDom$(this.$$buttons$);
        this.options.checked = void 0 === $newChecked$$ ? null : $newChecked$$;
      }
      this.$$buttons$.filter(":oj-button").ojButton("refresh").each(function() {
        $$$$20$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1);
      }).end().not(":oj-button").ojButton().end().map(function() {
        return $$$$20$$(this).ojButton("widget")[0];
      }).removeClass("oj-buttonset-first oj-buttonset-last").filter(":first").addClass("oj-buttonset-first").end().filter(":last").addClass("oj-buttonset-last").end().end();
      this.$_propagateDisabled$(this.options.disabled);
      "oneTabstop" === this.options.focusManagement && (this.$$buttons$.unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$221$$) {
        $self$$109$$.$_handleKeyDown$($event$$221$$, $$$$20$$(this));
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $$$$20$$(this).data("oj-ojButton").$_IsEffectivelyDisabled$() || $self$$109$$.$_setTabStop$($$$$20$$(this));
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$109$$.$_setTabStop$($$$$20$$(this));
      }), this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$20$$(this).data("oj-ojButton").$_IsEffectivelyDisabled$();
      }), this.$_initTabindexes$($isCreate$$));
    }, $_initTabindexes$:function($$newTabStop_isCreate$$1$$) {
      var $$last$$ = $$$$20$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop_isCreate$$1$$ = $$newTabStop_isCreate$$1$$ || !$$last$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$;
      this.$_setTabStop$($$newTabStop_isCreate$$1$$);
    }, $_mapToTabbable$:function($$button$$) {
      var $$enabledButtons$$ = this.$$enabledButtons$;
      return $$button$$.map(function($index$$156$$, $elem$$21$$) {
        if ("radio" != $elem$$21$$.type || $elem$$21$$.checked || "" == $elem$$21$$.name) {
          return $elem$$21$$;
        }
        var $$checkedRadio$$ = $_radioGroup$$($elem$$21$$, $$enabledButtons$$).filter(":checked");
        return $$checkedRadio$$.length ? $$checkedRadio$$[0] : $elem$$21$$;
      });
    }, $_setTabStop$:function($$button$$1$$) {
      $$button$$1$$ = this.$_mapToTabbable$($$button$$1$$);
      var $button$$ = $$button$$1$$[0], $last$$2$$ = this.$_lastTabStop$;
      $button$$ !== $last$$2$$ && ($$$$20$$($last$$2$$).attr("tabindex", "-1"), $$button$$1$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$);
    }, $_handleKeyDown$:function($event$$224$$, $$button$$2$$) {
      switch($event$$224$$.which) {
        case $$$$20$$.ui.keyCode.LEFT:
        ;
        case $$$$20$$.ui.keyCode.RIGHT:
          $event$$224$$.preventDefault();
          var $$enabledButtons$$1$$ = this.$$enabledButtons$, $length$$15$$ = $$enabledButtons$$1$$.length;
          if (2 > $length$$15$$) {
            break;
          }
          var $oldIndex$$ = $$enabledButtons$$1$$.index($$button$$2$$);
          $$enabledButtons$$1$$.eq(($oldIndex$$ + ($event$$224$$.which == $$$$20$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$15$$) % $length$$15$$).focus();
          break;
        case $$$$20$$.ui.keyCode.UP:
        ;
        case $$$$20$$.ui.keyCode.DOWN:
          "radio" == $$button$$2$$.attr("type") && $event$$224$$.preventDefault();
      }
    }, _destroy:function() {
      this.element.removeClass("oj-buttonset oj-component").removeAttr("role");
      "oneTabstop" === this.options.focusManagement && this.$$buttons$.attr("tabindex", "0");
      this.$$buttons$.map(function() {
        return $$$$20$$(this).ojButton("widget")[0];
      }).removeClass("oj-buttonset-first oj-buttonset-last").end().ojButton("destroy");
    }});
    var $_lastActive$$, $_lastToggleActive$$, $BUTTON_EVENT_NAMESPACE$$ = ".ojButton", $BASE_CLASSES$$ = "oj-button oj-component oj-enabled oj-default", $STATE_CLASSES$$ = "oj-hover oj-active oj-selected", $TYPE_CLASSES$$ = "oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only";
  })();
});
