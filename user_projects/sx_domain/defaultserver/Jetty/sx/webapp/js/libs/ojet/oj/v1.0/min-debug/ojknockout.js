/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "knockout"], function($oj$$7$$, $$$$7$$, $ko$$1$$) {
  function $_processDayMetaData$$($name$$85$$, $value$$153$$, $element$$35$$, $widgetConstructor$$4$$) {
    "dayMetaData" === $name$$85$$ && $widgetConstructor$$4$$({dayFormatter:$value$$153$$ ? function($dateInfo$$) {
      return $getMetaData$$($value$$153$$, 0, [$dateInfo$$.fullYear, $dateInfo$$.month, $dateInfo$$.date]);
    } : null});
  }
  function $_extractValueFromChangeEvent$$($event$$39$$, $eventData$$2$$) {
    var $nameVal$$ = {};
    $nameVal$$.value = $eventData$$2$$.value;
    return $nameVal$$;
  }
  function $_extractOptionChange$$($event$$40$$, $eventData$$3$$) {
    var $nameVal$$1$$ = {}, $metadata$$ = $eventData$$3$$.optionMetadata;
    $metadata$$ && "shouldWrite" === $metadata$$.writeback && ($nameVal$$1$$[$eventData$$3$$.option] = $eventData$$3$$.value);
    return $nameVal$$1$$;
  }
  function $GlobalChangeQueue$$() {
    this.Init();
  }
  function $ComponentChangeTracker$$($component$$4$$, $element$$24$$, $queue$$) {
    this.Init($component$$4$$, $element$$24$$, $queue$$);
  }
  function $_getDataGridHeaderRenderer$$($bindingContext$$, $template$$) {
    return function($context$$36$$) {
      var $parent$$2$$, $childContext$$;
      $parent$$2$$ = $context$$36$$.parentElement;
      $childContext$$ = $bindingContext$$.createChildContext($context$$36$$.data, null, function($binding$$) {
        $binding$$.$key = $context$$36$$.key;
        $binding$$.$metadata = $context$$36$$.metadata;
        $binding$$.$headerContext = $context$$36$$;
      });
      $ko$$1$$.renderTemplate($template$$, $childContext$$, null, $parent$$2$$);
      return null;
    };
  }
  function $_getDataGridCellRenderer$$($bindingContext$$1$$, $template$$1$$) {
    return function($context$$37$$) {
      var $parent$$3$$, $childContext$$1$$;
      $parent$$3$$ = $context$$37$$.parentElement;
      $childContext$$1$$ = $bindingContext$$1$$.createChildContext($context$$37$$.data, null, function($binding$$1$$) {
        $binding$$1$$.$keys = $context$$37$$.keys;
        $binding$$1$$.$metadata = $context$$37$$.metadata;
        $binding$$1$$.$cellContext = $context$$37$$;
      });
      $ko$$1$$.renderTemplate($template$$1$$, $childContext$$1$$, null, $parent$$3$$);
      return null;
    };
  }
  function $_getTableColumnTemplateRenderer$$($bindingContext$$2$$, $type$$75$$, $template$$2$$) {
    var $rendererOption$$ = {};
    (function($template$$3$$, $type$$76$$) {
      $rendererOption$$ = function $$rendererOption$$$($params$$12$$) {
        var $childContext$$2$$ = null, $parentElement$$ = null;
        "header" == $type$$76$$ ? ($childContext$$2$$ = $bindingContext$$2$$.extend({$column:$params$$12$$.column, $headerContext:$params$$12$$.headerContext}), $parentElement$$ = $params$$12$$.headerContext.parentElement) : "cell" == $type$$76$$ && ($childContext$$2$$ = $bindingContext$$2$$.createChildContext($params$$12$$.row, null, function($binding$$2$$) {
          $binding$$2$$.$column = $params$$12$$.column;
          $binding$$2$$.$cellContext = $params$$12$$.cellContext;
        }), $parentElement$$ = $params$$12$$.cellContext.parentElement);
        "footer" == $type$$76$$ && ($childContext$$2$$ = $bindingContext$$2$$.extend({$column:$params$$12$$.column, $footerContext:$params$$12$$.footerContext}), $parentElement$$ = $params$$12$$.footerContext.parentElement);
        $ko$$1$$.renderTemplate($template$$3$$, $childContext$$2$$, null, $parentElement$$, "replaceNode");
      };
    })($template$$2$$, $type$$75$$);
    return $rendererOption$$;
  }
  function $_getTableRowTemplateRenderer$$($bindingContext$$3$$, $template$$4$$) {
    return function($params$$13$$) {
      var $childContext$$3$$ = $bindingContext$$3$$.createChildContext($params$$13$$.row, null, function($binding$$3$$) {
        $binding$$3$$.$rowContext = $params$$13$$.rowContext;
      });
      $ko$$1$$.renderTemplate($template$$4$$, $childContext$$3$$, null, $params$$13$$.rowContext.parentElement, "replaceNode");
    };
  }
  function $getMetaData$$($dayMetaData$$, $position$$1$$, $params$$14$$) {
    if (!$dayMetaData$$ || $position$$1$$ === $params$$14$$.length) {
      return $dayMetaData$$;
    }
    var $nextPos$$ = $position$$1$$ + 1;
    return $getMetaData$$($dayMetaData$$[$params$$14$$[$position$$1$$]], $nextPos$$, $params$$14$$) || $getMetaData$$($dayMetaData$$["*"], $nextPos$$, $params$$14$$);
  }
  $oj$$7$$.$ComponentBinding$ = function $$oj$$7$$$$ComponentBinding$$($name$$76$$, $options$$190$$) {
    this.Init($name$$76$$, $options$$190$$);
  };
  $goog$exportPath_$$("ComponentBinding", $oj$$7$$.$ComponentBinding$, $oj$$7$$);
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$ComponentBinding$, $oj$$7$$.$Object$, "oj.ComponentBinding");
  $oj$$7$$.$ComponentBinding$.create = function $$oj$$7$$$$ComponentBinding$$create$($name$$77$$, $options$$191$$) {
    if (null == $name$$77$$) {
      throw "Binding name is required!";
    }
    var $instance$$14$$ = new $oj$$7$$.$ComponentBinding$($name$$77$$, $options$$191$$), $handlers$$5$$ = $ko$$1$$.bindingHandlers, $i$$109$$, $names$$1$$ = Array.isArray($name$$77$$) ? $name$$77$$ : [$name$$77$$];
    for ($i$$109$$ = 0;$i$$109$$ < $names$$1$$.length;$i$$109$$++) {
      $handlers$$5$$[$names$$1$$[$i$$109$$]] = $instance$$14$$;
    }
    return $instance$$14$$;
  };
  $goog$exportPath_$$("ComponentBinding.create", $oj$$7$$.$ComponentBinding$.create, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$ = function $$oj$$7$$$$ComponentBinding$$$getDefaultInstance$$() {
    return $oj$$7$$.$ComponentBinding$.$_INSTANCE$;
  };
  $goog$exportPath_$$("ComponentBinding.getDefaultInstance", $oj$$7$$.$ComponentBinding$.$getDefaultInstance$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.prototype.$setupManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$$setupManagedAttributes$$($opts$$8$$) {
    var $forName$$ = $opts$$8$$["for"], $forName$$ = null == $forName$$ ? "@global" : $forName$$, $managers$$ = this.$_managedAttrOptions$[$forName$$] || [];
    $managers$$.push($opts$$8$$);
    this.$_managedAttrOptions$[$forName$$] = $managers$$;
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ComponentBinding.prototype.setupManagedAttributes", {$setupManagedAttributes$:$oj$$7$$.$ComponentBinding$.prototype.$setupManagedAttributes$});
  $oj$$7$$.$ComponentBinding$.$deliverChanges$ = function $$oj$$7$$$$ComponentBinding$$$deliverChanges$$() {
    $oj$$7$$.$ComponentBinding$.$_changeQueue$.$deliverChanges$();
  };
  $goog$exportPath_$$("ComponentBinding.deliverChanges", $oj$$7$$.$ComponentBinding$.$deliverChanges$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.prototype.Init = function $$oj$$7$$$$ComponentBinding$$$Init$($names$$2$$, $options$$192$$) {
    $oj$$7$$.$ComponentBinding$.$superclass$.Init.call(this);
    "string" === typeof $options$$192$$ && ($options$$192$$ = {componentName:$options$$192$$});
    this.$_bindingOptions$ = $options$$192$$ || {};
    this.$_bindingNames$ = Array.isArray($names$$2$$) ? $names$$2$$ : [$names$$2$$];
    this.init = $oj$$7$$.$Object$.$createCallback$(this, this._init);
    this.update = $oj$$7$$.$Object$.$createCallback$(this, this.$_update$);
    this.$_managedAttrOptions$ = {};
  };
  $oj$$7$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$ = "_ojNeedsJUIBInit";
  $oj$$7$$.$ComponentBinding$.prototype._init = function $$oj$$7$$$$ComponentBinding$$$_init$($element$$25$$, $valueAccessor$$, $allBindingsAccessor$$, $viewModel$$1$$, $bindingContext$$4$$) {
    $ko$$1$$.applyBindingsToDescendants($bindingContext$$4$$, $element$$25$$);
    $$$$7$$($element$$25$$).data($oj$$7$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$, !0);
    return{controlsDescendantBindings:!0};
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_update$ = function $$oj$$7$$$$ComponentBinding$$$$_update$$($element$$26$$, $valueAccessor$$1$$, $allBindingsAccessor$$1$$, $jelem$$4_viewModel$$2$$, $bindingContext$$5$$) {
    $jelem$$4_viewModel$$2$$ = $$$$7$$($element$$26$$);
    $jelem$$4_viewModel$$2$$.data($oj$$7$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$) && ($jelem$$4_viewModel$$2$$.data($oj$$7$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$, null), this.$_initComponent$($element$$26$$, $jelem$$4_viewModel$$2$$, $valueAccessor$$1$$, $allBindingsAccessor$$1$$, $bindingContext$$5$$));
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_initComponent$ = function $$oj$$7$$$$ComponentBinding$$$$_initComponent$$($element$$27$$, $jelem$$5$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$6$$) {
    var $options$$193$$ = $valueAccessor$$2$$(), $roleAttrName$$ = null, $disposed$$ = !1, $registeredListers$$ = [], $tracker$$3$$ = null, $comp$$2$$ = null, $bindingMap$$ = $oj$$7$$.$ComponentBinding$.$_getBindingValueMap$(this.$_bindingNames$, $element$$27$$, $bindingContext$$6$$), $stage$$ = 0, $attributeEvaluatorCache$$ = {}, $componentName$$1$$ = this.$_bindingOptions$.componentName;
    if (null == $componentName$$1$$) {
      $roleAttrName$$ = "component";
      if (!$bindingMap$$[$roleAttrName$$] && ($roleAttrName$$ = "role", !$bindingMap$$[$roleAttrName$$])) {
        $oj$$7$$.$Logger$.error("component attribute is required for the ojComponent binding");
        return;
      }
      var $role$$ = $options$$193$$[$roleAttrName$$];
      if (null == $role$$) {
        $oj$$7$$.$Logger$.error("non-null component attribute is required for the ojComponent binding");
        return;
      }
      $ko$$1$$.computed(function() {
        $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$($bindingMap$$[$roleAttrName$$], $roleAttrName$$, $attributeEvaluatorCache$$, $bindingContext$$6$$, !1);
        if (0 == $stage$$) {
          $componentName$$1$$ = $ko$$1$$.utils.unwrapObservable($role$$);
        } else {
          $disposed$$ = !0;
          $bindingMap$$ = null;
          $oj$$7$$.$ComponentBinding$.$_unregisterWritebacks$($jelem$$5$$);
          if ($comp$$2$$) {
            $tracker$$3$$.$dispose$();
            $tracker$$3$$ = null;
            var $destroyCallback_l$$2$$ = this.$_bindingOptions$.beforeDestroy;
            $destroyCallback_l$$2$$ && $destroyCallback_l$$2$$($element$$27$$, $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$6$$);
            $comp$$2$$("destroy");
            $comp$$2$$ = null;
            for ($destroyCallback_l$$2$$ = 0;$destroyCallback_l$$2$$ < $registeredListers$$.length;$destroyCallback_l$$2$$++) {
              $registeredListers$$[$destroyCallback_l$$2$$].$dispose$();
            }
            $registeredListers$$ = null;
          }
          this.$_initComponent$($element$$27$$, $jelem$$5$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$6$$);
        }
        return null;
      }, this, {disposeWhenNodeIsRemoved:$element$$27$$});
    }
    if (null != $componentName$$1$$) {
      if ($comp$$2$$ = $jelem$$5$$[$componentName$$1$$], "function" === typeof $comp$$2$$) {
        var $comp$$2$$ = $comp$$2$$.bind($jelem$$5$$), $managedAttrMap$$ = $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $bindingMap$$, $componentName$$1$$), $specifiedManagedAttrs$$ = {}, $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$ = $oj$$7$$.$ComponentBinding$.$getDefaultInstance$();
        this !== $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$ && ($defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$ = $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$.$_getManagedAttributes$($bindingMap$$, $componentName$$1$$), $oj$$7$$.$CollectionUtils$.$copyInto$($defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$, $managedAttrMap$$), $managedAttrMap$$ = $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$);
        for (var $propertyMap$$ = {}, $tracker$$3$$ = new $ComponentChangeTracker$$($comp$$2$$, $element$$27$$, $oj$$7$$.$ComponentBinding$.$_changeQueue$), $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$ = {"^slider$":[{event:"slidechange", getter:$_extractValueFromChangeEvent$$}], "^oj*":[{event:"ojoptionchange", getter:$_extractOptionChange$$}]}, $handler$$45$$ = function $$handler$$45$$$() {
          var $initProps_prop$$51_updateProps$$ = this.$_property$, $currentVal_exp$$1_updateKeys_v_value$$144$$ = $bindingMap$$[$initProps_prop$$51_updateProps$$];
          if (!$currentVal_exp$$1_updateKeys_v_value$$144$$) {
            throw "Binding expression for property " + $initProps_prop$$51_updateProps$$ + " is not found";
          }
          $currentVal_exp$$1_updateKeys_v_value$$144$$ = $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$($currentVal_exp$$1_updateKeys_v_value$$144$$, $initProps_prop$$51_updateProps$$, $attributeEvaluatorCache$$, $bindingContext$$6$$, 0 !== $stage$$ && !$disposed$$);
          if (0 === $stage$$) {
            var $currentVal_exp$$1_updateKeys_v_value$$144$$ = $oj$$7$$.$ComponentBinding$.$_toJS$($options$$193$$[$initProps_prop$$51_updateProps$$]), $initFunc_k$$4_managedPropEntry_updateFunc$$ = $managedAttrMap$$[$initProps_prop$$51_updateProps$$];
            null != $initFunc_k$$4_managedPropEntry_updateFunc$$ ? ($specifiedManagedAttrs$$[$initProps_prop$$51_updateProps$$] = $initFunc_k$$4_managedPropEntry_updateFunc$$, $initFunc_k$$4_managedPropEntry_updateFunc$$ = $initFunc_k$$4_managedPropEntry_updateFunc$$.$init$, null != $initFunc_k$$4_managedPropEntry_updateFunc$$ && ($initProps_prop$$51_updateProps$$ = $initFunc_k$$4_managedPropEntry_updateFunc$$($initProps_prop$$51_updateProps$$, $currentVal_exp$$1_updateKeys_v_value$$144$$, $element$$27$$, 
            $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$6$$) || {}, $oj$$7$$.$CollectionUtils$.$copyInto$($propertyMap$$, $initProps_prop$$51_updateProps$$))) : $propertyMap$$[$initProps_prop$$51_updateProps$$] = $currentVal_exp$$1_updateKeys_v_value$$144$$;
          } else {
            if (!$disposed$$) {
              if ($currentVal_exp$$1_updateKeys_v_value$$144$$ = $oj$$7$$.$ComponentBinding$.$_toJS$($currentVal_exp$$1_updateKeys_v_value$$144$$), null != $managedAttrMap$$[$initProps_prop$$51_updateProps$$]) {
                if ($initFunc_k$$4_managedPropEntry_updateFunc$$ = $managedAttrMap$$[$initProps_prop$$51_updateProps$$].update, null != $initFunc_k$$4_managedPropEntry_updateFunc$$) {
                  for ($initProps_prop$$51_updateProps$$ = $initFunc_k$$4_managedPropEntry_updateFunc$$($initProps_prop$$51_updateProps$$, $currentVal_exp$$1_updateKeys_v_value$$144$$, $element$$27$$, $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$6$$) || {}, $currentVal_exp$$1_updateKeys_v_value$$144$$ = Object.keys($initProps_prop$$51_updateProps$$), $initFunc_k$$4_managedPropEntry_updateFunc$$ = 0;$initFunc_k$$4_managedPropEntry_updateFunc$$ < $currentVal_exp$$1_updateKeys_v_value$$144$$.length;$initFunc_k$$4_managedPropEntry_updateFunc$$++) {
                    var $p$$4$$ = $currentVal_exp$$1_updateKeys_v_value$$144$$[$initFunc_k$$4_managedPropEntry_updateFunc$$];
                    $tracker$$3$$.$addChange$($p$$4$$, $initProps_prop$$51_updateProps$$[$p$$4$$]);
                  }
                }
              } else {
                $tracker$$3$$.$addChange$($initProps_prop$$51_updateProps$$, $currentVal_exp$$1_updateKeys_v_value$$144$$);
              }
            }
          }
          return null;
        }, $p$$3$$, $optionKeys$$ = Object.keys($options$$193$$), $k$$3$$ = 0;$k$$3$$ < $optionKeys$$.length;$k$$3$$++) {
          $p$$3$$ = $optionKeys$$[$k$$3$$], $p$$3$$ !== $roleAttrName$$ && $registeredListers$$.push($ko$$1$$.computed($handler$$45$$, {$_property$:$p$$3$$}, {disposeWhenNodeIsRemoved:$element$$27$$}));
        }
        $oj$$7$$.$ComponentBinding$.$_registerWritebacks$($jelem$$5$$, $componentName$$1$$, $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$, $bindingMap$$, $tracker$$3$$, $bindingContext$$6$$, $attributeEvaluatorCache$$);
        $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$ = $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$($propertyMap$$);
        $comp$$2$$($propertyMap$$);
        for (var $createCallback_mo$$ in $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$) {
          $comp$$2$$("option", $createCallback_mo$$, $defaultInstance_defaultManagedMap_mutationOptions_writablePropMap$$[$createCallback_mo$$]);
        }
        ($createCallback_mo$$ = this.$_bindingOptions$.afterCreate) && $createCallback_mo$$($element$$27$$, $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$6$$);
        $oj$$7$$.$ComponentBinding$.$_deliverCreateToManagedProps$($specifiedManagedAttrs$$, $element$$27$$, $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$6$$);
        $propertyMap$$ = null;
      } else {
        $oj$$7$$.$Logger$.error("Component %s is not found", $componentName$$1$$);
      }
    }
    $stage$$ = 1;
  };
  $oj$$7$$.$ComponentBinding$.$_getBindingValueMap$ = function $$oj$$7$$$$ComponentBinding$$$_getBindingValueMap$$($n$$17_names$$3$$, $elem$$18_keyValueArray$$, $bindingContext$$7_stringTrimRegex$$) {
    var $map$$ = {}, $bindingValue_i$$110_provider$$ = null, $bindingValue_i$$110_provider$$ = $ko$$1$$.bindingProvider.instance, $e$$45_selfVal$$;
    $e$$45_selfVal$$ = null;
    var $keyValueEntry$$, $bindingValue_i$$110_provider$$ = $bindingValue_i$$110_provider$$.$getBindingsString$ ? $bindingValue_i$$110_provider$$.$getBindingsString$($elem$$18_keyValueArray$$, $bindingContext$$7_stringTrimRegex$$) : $elem$$18_keyValueArray$$.getAttribute("data-bind");
    if (!$bindingValue_i$$110_provider$$) {
      return $map$$;
    }
    $elem$$18_keyValueArray$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($bindingValue_i$$110_provider$$);
    $bindingContext$$7_stringTrimRegex$$ = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
    for ($bindingValue_i$$110_provider$$ = 0;$bindingValue_i$$110_provider$$ < $elem$$18_keyValueArray$$.length;$bindingValue_i$$110_provider$$ += 1) {
      $keyValueEntry$$ = $elem$$18_keyValueArray$$[$bindingValue_i$$110_provider$$];
      var $bindingKey$$ = $keyValueEntry$$.key.replace($bindingContext$$7_stringTrimRegex$$, "");
      if (0 <= $n$$17_names$$3$$.indexOf($bindingKey$$)) {
        $e$$45_selfVal$$ = $keyValueEntry$$.value;
        break;
      }
    }
    if (!$e$$45_selfVal$$) {
      return $map$$;
    }
    $elem$$18_keyValueArray$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($e$$45_selfVal$$);
    for ($n$$17_names$$3$$ = 0;$n$$17_names$$3$$ < $elem$$18_keyValueArray$$.length;$n$$17_names$$3$$ += 1) {
      $e$$45_selfVal$$ = $elem$$18_keyValueArray$$[$n$$17_names$$3$$], $map$$[$e$$45_selfVal$$.key.replace($bindingContext$$7_stringTrimRegex$$, "")] = $e$$45_selfVal$$.value.replace($bindingContext$$7_stringTrimRegex$$, "");
    }
    return $map$$;
  };
  $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$ = function $$oj$$7$$$$ComponentBinding$$$_evaluatePropertyExpression$$($expOrCallback$$1_expOrCallback$$inline_556$$, $key$$38$$, $cache$$, $bindingContext$$8$$, $evalSimpleExpr$$1$$) {
    var $evaluator$$inline_559_info$$ = $cache$$[$key$$38$$], $first$$inline_561_isNew$$1$$ = void 0 === $evaluator$$inline_559_info$$;
    if ($first$$inline_561_isNew$$1$$ || null === $evaluator$$inline_559_info$$.$evaluator$ && $evaluator$$inline_559_info$$.$simple$ && $evalSimpleExpr$$1$$) {
      "string" !== typeof $expOrCallback$$1_expOrCallback$$inline_556$$ && ($expOrCallback$$1_expOrCallback$$inline_556$$ = $expOrCallback$$1_expOrCallback$$inline_556$$());
      var $evaluator$$inline_559_info$$ = null, $isSimple$$inline_560$$ = !1;
      if (null !== $expOrCallback$$1_expOrCallback$$inline_556$$) {
        if ($first$$inline_561_isNew$$1$$) {
          if ($first$$inline_561_isNew$$1$$ = $expOrCallback$$1_expOrCallback$$inline_556$$.charAt(0), "'" === $first$$inline_561_isNew$$1$$ || '"' === $first$$inline_561_isNew$$1$$ || 0 >= $expOrCallback$$1_expOrCallback$$inline_556$$.indexOf("(")) {
            $isSimple$$inline_560$$ = !0;
          }
        } else {
          $isSimple$$inline_560$$ = !0;
        }
        if (!$isSimple$$inline_560$$ || $evalSimpleExpr$$1$$) {
          $evaluator$$inline_559_info$$ = new Function("$context", "with($context){with($data||{}){return " + $expOrCallback$$1_expOrCallback$$inline_556$$ + ";}}");
        }
      }
      $evaluator$$inline_559_info$$ = {$evaluator$:$evaluator$$inline_559_info$$, $simple$:$isSimple$$inline_560$$};
      $cache$$[$key$$38$$] = $evaluator$$inline_559_info$$;
    }
    return!$evaluator$$inline_559_info$$.$evaluator$ || !$evalSimpleExpr$$1$$ && $evaluator$$inline_559_info$$.$simple$ ? null : $evaluator$$inline_559_info$$.$evaluator$($bindingContext$$8$$);
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_getManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$$_getManagedAttributes$$($bindingMap$$1$$, $componentName$$2$$) {
    return $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $bindingMap$$1$$, $componentName$$2$$);
  };
  $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$_resolveManagedAttributes$$($optionMap$$, $attrs$$16_bindingMap$$2$$, $componentName$$3_k$$5_proto$$4_widgetClass$$) {
    function $traverseOptions$$($name$$78$$, $followLinks$$) {
      var $managers$$1$$ = $optionMap$$[$name$$78$$];
      if (null != $managers$$1$$) {
        for (var $n$$18$$ = $managers$$1$$.length - 1;0 <= $n$$18$$;$n$$18$$--) {
          var $opt$$16_parents$$ = $managers$$1$$[$n$$18$$];
          null != $opt$$16_parents$$.attributes && $applicableOptions$$.push($opt$$16_parents$$);
          if ($followLinks$$ && ($opt$$16_parents$$ = $opt$$16_parents$$.use, null != $opt$$16_parents$$)) {
            for (var $opt$$16_parents$$ = Array.isArray($opt$$16_parents$$) ? $opt$$16_parents$$ : [$opt$$16_parents$$], $i$$111$$ = 0;$i$$111$$ < $opt$$16_parents$$.length;$i$$111$$++) {
              $traverseOptions$$($opt$$16_parents$$[$i$$111$$], !0);
            }
          }
        }
      }
    }
    var $managedAttrMap$$1$$ = {}, $applicableOptions$$ = [];
    $traverseOptions$$($componentName$$3_k$$5_proto$$4_widgetClass$$, !0);
    $componentName$$3_k$$5_proto$$4_widgetClass$$ = $$$$7$$.oj[$componentName$$3_k$$5_proto$$4_widgetClass$$];
    if (null != $componentName$$3_k$$5_proto$$4_widgetClass$$) {
      for ($componentName$$3_k$$5_proto$$4_widgetClass$$ = Object.getPrototypeOf($componentName$$3_k$$5_proto$$4_widgetClass$$.prototype);null != $componentName$$3_k$$5_proto$$4_widgetClass$$ && "oj" === $componentName$$3_k$$5_proto$$4_widgetClass$$.namespace;) {
        $traverseOptions$$($componentName$$3_k$$5_proto$$4_widgetClass$$.widgetName, !0), $componentName$$3_k$$5_proto$$4_widgetClass$$ = Object.getPrototypeOf($componentName$$3_k$$5_proto$$4_widgetClass$$);
      }
    }
    $traverseOptions$$("@global", !1);
    if (0 < $applicableOptions$$.length) {
      for ($attrs$$16_bindingMap$$2$$ = Object.keys($attrs$$16_bindingMap$$2$$), $componentName$$3_k$$5_proto$$4_widgetClass$$ = 0;$componentName$$3_k$$5_proto$$4_widgetClass$$ < $attrs$$16_bindingMap$$2$$.length;$componentName$$3_k$$5_proto$$4_widgetClass$$++) {
        for (var $attr$$13$$ = $attrs$$16_bindingMap$$2$$[$componentName$$3_k$$5_proto$$4_widgetClass$$], $l$$3$$ = 0;$l$$3$$ < $applicableOptions$$.length;$l$$3$$++) {
          var $opts$$9$$ = $applicableOptions$$[$l$$3$$];
          if (0 <= $opts$$9$$.attributes.indexOf($attr$$13$$)) {
            $managedAttrMap$$1$$[$attr$$13$$] = {$init$:$opts$$9$$.init, update:$opts$$9$$.update, $afterCreate$:$opts$$9$$.afterCreate};
            break;
          }
        }
      }
    }
    return $managedAttrMap$$1$$;
  };
  $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$ = ".ojWriteback";
  $oj$$7$$.$ComponentBinding$.$_unregisterWritebacks$ = function $$oj$$7$$$$ComponentBinding$$$_unregisterWritebacks$$($jelem$$6$$) {
    $jelem$$6$$ && $jelem$$6$$.off($oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$);
  };
  $oj$$7$$.$ComponentBinding$.$_registerWritebacks$ = function $$oj$$7$$$$ComponentBinding$$$_registerWritebacks$$($jelem$$7$$, $componentName$$4_eventInfos$$, $i$$112_writablePropMap$$1$$, $bindingMap$$3$$, $tracker$$4$$, $bindingContext$$9$$, $attributeEvaluatorCache$$1$$) {
    var $cachedPropertyExpressionWriters$$ = {}, $info$$1_pattern$$11$$;
    for ($info$$1_pattern$$11$$ in $i$$112_writablePropMap$$1$$) {
      if ($componentName$$4_eventInfos$$.match($info$$1_pattern$$11$$)) {
        $componentName$$4_eventInfos$$ = $i$$112_writablePropMap$$1$$[$info$$1_pattern$$11$$];
        for ($i$$112_writablePropMap$$1$$ = 0;$i$$112_writablePropMap$$1$$ < $componentName$$4_eventInfos$$.length;$i$$112_writablePropMap$$1$$++) {
          $info$$1_pattern$$11$$ = $componentName$$4_eventInfos$$[$i$$112_writablePropMap$$1$$], $jelem$$7$$.on($info$$1_pattern$$11$$.event + $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$, {$getter$:$info$$1_pattern$$11$$.getter}, function($evt$$18$$, $data$$48$$) {
            $evt$$18$$.stopPropagation();
            var $nameValues$$ = $evt$$18$$.data.$getter$($evt$$18$$, $data$$48$$);
            $tracker$$4$$.$suspend$();
            try {
              for (var $name$$79$$ in $nameValues$$) {
                if ($bindingMap$$3$$[$name$$79$$]) {
                  var $target$$75$$ = $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$($bindingMap$$3$$[$name$$79$$], $name$$79$$, $attributeEvaluatorCache$$1$$, $bindingContext$$9$$, !0);
                  $oj$$7$$.$ComponentBinding$.$_writeValueToProperty$($name$$79$$, $target$$75$$, $nameValues$$[$name$$79$$], $bindingMap$$3$$[$name$$79$$], $bindingContext$$9$$, $cachedPropertyExpressionWriters$$);
                }
              }
            } finally {
              $tracker$$4$$.$resume$();
            }
          });
        }
        break;
      }
    }
  };
  $oj$$7$$.$ComponentBinding$.$_getPropertyWriterExpression$ = function $$oj$$7$$$$ComponentBinding$$$_getPropertyWriterExpression$$($expression$$3$$) {
    var $match$$13_reserveddWords$$ = ["true", "false", "null", "undefined"];
    if (null == $expression$$3$$ || 0 <= $match$$13_reserveddWords$$.indexOf($expression$$3$$)) {
      return null;
    }
    $match$$13_reserveddWords$$ = $expression$$3$$.match(/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i);
    return null === $match$$13_reserveddWords$$ ? null : "function(v){" + ($match$$13_reserveddWords$$[1] ? "Object(" + $match$$13_reserveddWords$$[1] + ")" + $match$$13_reserveddWords$$[2] : $expression$$3$$) + "\x3dv;}";
  };
  $oj$$7$$.$ComponentBinding$.$_writeValueToProperty$ = function $$oj$$7$$$$ComponentBinding$$$_writeValueToProperty$$($func$$9_name$$80$$, $property$$16$$, $value$$145$$, $propertyExpression$$, $bindingContext$$10$$, $cachedPropertyExpressionWriters$$1$$) {
    null != $property$$16$$ && $ko$$1$$.isObservable($property$$16$$) ? $ko$$1$$.isWriteableObservable($property$$16$$) && $property$$16$$($value$$145$$) : ($func$$9_name$$80$$ = $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$(function() {
      return $oj$$7$$.$ComponentBinding$.$_getPropertyWriterExpression$($propertyExpression$$);
    }, $func$$9_name$$80$$, $cachedPropertyExpressionWriters$$1$$, $bindingContext$$10$$, !0)) && $func$$9_name$$80$$($value$$145$$);
  };
  $oj$$7$$.$ComponentBinding$.$_toJS$ = function $$oj$$7$$$$ComponentBinding$$$_toJS$$($prop$$52$$) {
    $prop$$52$$ = $ko$$1$$.utils.unwrapObservable($prop$$52$$);
    (Array.isArray($prop$$52$$) || $oj$$7$$.$CollectionUtils$.isPlainObject($prop$$52$$)) && $prop$$52$$.ojConvertToJS && ($prop$$52$$ = $ko$$1$$.toJS($prop$$52$$));
    return $prop$$52$$;
  };
  $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$ = function $$oj$$7$$$$ComponentBinding$$$_extractDotNotationOptions$$($options$$194$$) {
    var $mutationOptions$$1$$ = {}, $opt$$17$$;
    for ($opt$$17$$ in $options$$194$$) {
      0 <= $opt$$17$$.indexOf(".") && ($mutationOptions$$1$$[$opt$$17$$] = $options$$194$$[$opt$$17$$]);
    }
    for (var $mo$$1$$ in $mutationOptions$$1$$) {
      delete $options$$194$$[$mo$$1$$];
    }
    return $mutationOptions$$1$$;
  };
  $oj$$7$$.$ComponentBinding$.$_deliverCreateToManagedProps$ = function $$oj$$7$$$$ComponentBinding$$$_deliverCreateToManagedProps$$($managedAttrMap$$2$$, $element$$28$$, $comp$$3$$, $valueAccessor$$3$$, $allBindingsAccessor$$3$$, $bindingContext$$11$$) {
    for (var $props$$7$$ = Object.keys($managedAttrMap$$2$$), $i$$113$$ = 0;$i$$113$$ < $props$$7$$.length;$i$$113$$++) {
      var $prop$$53$$ = $props$$7$$[$i$$113$$], $callback$$82$$ = $managedAttrMap$$2$$[$prop$$53$$].$afterCreate$;
      $callback$$82$$ && $callback$$82$$($prop$$53$$, $element$$28$$, $comp$$3$$, $valueAccessor$$3$$, $allBindingsAccessor$$3$$, $bindingContext$$11$$);
    }
  };
  $oj$$7$$.$Object$.$createSubclass$($GlobalChangeQueue$$, $oj$$7$$.$Object$, "ComponentBinding.GlobalChangeQueue");
  $GlobalChangeQueue$$.prototype.Init = function $$GlobalChangeQueue$$$$Init$() {
    $GlobalChangeQueue$$.$superclass$.Init.call(this);
    this.$_trackers$ = [];
    this.$_queue$ = [];
  };
  $GlobalChangeQueue$$.prototype.$registerComponentChanges$ = function $$GlobalChangeQueue$$$$$registerComponentChanges$$($tracker$$5$$) {
    -1 === this.$_trackers$.indexOf($tracker$$5$$) && (this.$_trackers$.push($tracker$$5$$), this.$_delayTimer$ || (this.$_delayTimer$ = setTimeout($oj$$7$$.$Object$.$createCallback$(this, this.$_deliverChangesImpl$), 1)));
  };
  $GlobalChangeQueue$$.prototype.$removeComponentChanges$ = function $$GlobalChangeQueue$$$$$removeComponentChanges$$($index$$83_tracker$$6$$) {
    $index$$83_tracker$$6$$ = this.$_trackers$.indexOf($index$$83_tracker$$6$$);
    0 <= $index$$83_tracker$$6$$ && this.$_trackers$.splice($index$$83_tracker$$6$$, 1);
  };
  $GlobalChangeQueue$$.prototype.$deliverChanges$ = function $$GlobalChangeQueue$$$$$deliverChanges$$() {
    this.$_delayTimer$ && clearTimeout(this.$_delayTimer$);
    this.$_deliverChangesImpl$();
  };
  $GlobalChangeQueue$$.prototype.$_deliverChangesImpl$ = function $$GlobalChangeQueue$$$$$_deliverChangesImpl$$() {
    var $i$$114_record$$2$$;
    this.$_delayTimer$ = null;
    var $trackers$$ = this.$_trackers$;
    this.$_trackers$ = [];
    for ($i$$114_record$$2$$ = 0;$i$$114_record$$2$$ < $trackers$$.length;$i$$114_record$$2$$++) {
      var $tracker$$7$$ = $trackers$$[$i$$114_record$$2$$];
      this.$_queue$.push({$tracker$:$tracker$$7$$, $changes$:$tracker$$7$$.$flushChanges$()});
    }
    for (;0 < this.$_queue$.length;) {
      $i$$114_record$$2$$ = this.$_queue$.shift(), $i$$114_record$$2$$.$tracker$.$applyChanges$($i$$114_record$$2$$.$changes$);
    }
  };
  $oj$$7$$.$Object$.$createSubclass$($ComponentChangeTracker$$, $oj$$7$$.$Object$, "ComponentBinding.ComponentChangeTracker");
  $ComponentChangeTracker$$.prototype.Init = function $$ComponentChangeTracker$$$$Init$($component$$5$$, $element$$29$$, $queue$$1$$) {
    $ComponentChangeTracker$$.$superclass$.Init.call(this);
    this.$_component$ = $component$$5$$;
    this.$_element$ = $element$$29$$;
    this.$_queue$ = $queue$$1$$;
    this.$_changes$ = {};
    this.$_suspendCount$ = 0;
  };
  $ComponentChangeTracker$$.prototype.$addChange$ = function $$ComponentChangeTracker$$$$$addChange$$($property$$17$$, $value$$146$$) {
    this.$_isSuspended$() || this.$_disposed$ || (this.$_changes$[$property$$17$$] = $value$$146$$, this.$_queue$.$registerComponentChanges$(this));
  };
  $ComponentChangeTracker$$.prototype.$dispose$ = function $$ComponentChangeTracker$$$$$dispose$$() {
    this.$_queue$.$removeComponentChanges$(this);
    this.$_disposed$ = !0;
  };
  $ComponentChangeTracker$$.prototype.$resume$ = function $$ComponentChangeTracker$$$$$resume$$() {
    $oj$$7$$.$Assert$.assert(0 < this.$_suspendCount$, "ComponentChangeTracker._suspendCount underflow");
    this.$_suspendCount$ -= 1;
  };
  $ComponentChangeTracker$$.prototype.$suspend$ = function $$ComponentChangeTracker$$$$$suspend$$() {
    this.$_suspendCount$ += 1;
  };
  $ComponentChangeTracker$$.prototype.$applyChanges$ = function $$ComponentChangeTracker$$$$$applyChanges$$($changes$$1$$) {
    if (null != $oj$$7$$.Components.$getWidgetConstructor$(this.$_element$)) {
      var $mutationOptions$$2$$ = $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$($changes$$1$$), $flags$$23$$ = {changed:!0};
      this.$_component$("option", $changes$$1$$, $flags$$23$$);
      for (var $mo$$2$$ in $mutationOptions$$2$$) {
        this.$_component$("option", $mo$$2$$, $mutationOptions$$2$$[$mo$$2$$], $flags$$23$$);
      }
    }
  };
  $ComponentChangeTracker$$.prototype.$flushChanges$ = function $$ComponentChangeTracker$$$$$flushChanges$$() {
    var $changes$$2$$ = this.$_changes$;
    this.$_changes$ = {};
    return $changes$$2$$;
  };
  $ComponentChangeTracker$$.prototype.$_isSuspended$ = function $$ComponentChangeTracker$$$$$_isSuspended$$() {
    return 1 <= this.$_suspendCount$;
  };
  $oj$$7$$.$ComponentBinding$.$_changeQueue$ = new $GlobalChangeQueue$$;
  $oj$$7$$.$ComponentBinding$.$_INSTANCE$ = $oj$$7$$.$ComponentBinding$.create(["ojComponent", "jqueryUI"]);
  $oj$$7$$.$koStringTemplateEngine$ = {};
  $goog$exportPath_$$("koStringTemplateEngine", $oj$$7$$.$koStringTemplateEngine$, $oj$$7$$);
  $oj$$7$$.$koStringTemplateEngine$.$install$ = function $$oj$$7$$$$koStringTemplateEngine$$$install$$() {
    function $StringTemplate$$($template$$5$$) {
      this.$_templateName$ = $template$$5$$;
      this.text = function $this$text$($value$$147$$) {
        if (!$value$$147$$) {
          return $_templateText$$[this.$_templateName$];
        }
        $_templateText$$[this.$_templateName$] = $value$$147$$;
      };
      this.data = function $this$data$($key$$39$$, $value$$148$$) {
        $_templateData$$[this.$_templateName$] || ($_templateData$$[this.$_templateName$] = {});
        if (1 === arguments.length) {
          return $_templateData$$[this.$_templateName$][$key$$39$$];
        }
        $_templateData$$[this.$_templateName$][$key$$39$$] = $value$$148$$;
      };
    }
    var $_templateText$$ = {}, $_templateData$$ = {}, $_engine$$ = new $ko$$1$$.nativeTemplateEngine;
    $_engine$$.makeTemplateSource = function $$_engine$$$makeTemplateSource$($template$$6$$, $templateDocument$$) {
      if ("string" == typeof $template$$6$$) {
        $templateDocument$$ = $templateDocument$$ || document;
        var $elem$$19$$ = $templateDocument$$.getElementById($template$$6$$);
        return $elem$$19$$ ? new $ko$$1$$.templateSources.domElement($elem$$19$$) : new $StringTemplate$$($template$$6$$);
      }
      if ($template$$6$$ && 1 == $template$$6$$.nodeType || 8 == $template$$6$$.nodeType) {
        return new $ko$$1$$.templateSources.anonymousTemplate($template$$6$$);
      }
    };
    $ko$$1$$.templates = $_templateText$$;
    $ko$$1$$.setTemplateEngine($_engine$$);
  };
  $goog$exportPath_$$("koStringTemplateEngine.install", $oj$$7$$.$koStringTemplateEngine$.$install$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["header", "cell"], init:function($cellTemplate_column_name$$81_row$$, $value$$149$$, $columnTemplate_element$$30_rowTemplate$$, $widgetConstructor$$, $valueAccessor$$4$$, $allBindingsAccessor$$4$$, $bindingContext$$12$$) {
    "header" === $cellTemplate_column_name$$81_row$$ ? ($cellTemplate_column_name$$81_row$$ = $value$$149$$.row, null != $cellTemplate_column_name$$81_row$$ && ($columnTemplate_element$$30_rowTemplate$$ = $cellTemplate_column_name$$81_row$$.template, null != $columnTemplate_element$$30_rowTemplate$$ && ($cellTemplate_column_name$$81_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$12$$, $columnTemplate_element$$30_rowTemplate$$))), $cellTemplate_column_name$$81_row$$ = $value$$149$$.column, 
    null != $cellTemplate_column_name$$81_row$$ && ($columnTemplate_element$$30_rowTemplate$$ = $cellTemplate_column_name$$81_row$$.template, null != $columnTemplate_element$$30_rowTemplate$$ && ($cellTemplate_column_name$$81_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$12$$, $columnTemplate_element$$30_rowTemplate$$))), $widgetConstructor$$({header:$value$$149$$})) : "cell" === $cellTemplate_column_name$$81_row$$ && ($cellTemplate_column_name$$81_row$$ = $value$$149$$.template, 
    null != $cellTemplate_column_name$$81_row$$ && ($value$$149$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$12$$, $cellTemplate_column_name$$81_row$$)), $widgetConstructor$$({cell:$value$$149$$}));
  }, update:function($cellTemplate$$1_column$$1_name$$82_row$$1$$, $value$$150$$, $columnTemplate$$1_element$$31_rowTemplate$$1$$, $widgetConstructor$$1$$, $valueAccessor$$5$$, $allBindingsAccessor$$5$$, $bindingContext$$13$$) {
    return "header" === $cellTemplate$$1_column$$1_name$$82_row$$1$$ ? ($cellTemplate$$1_column$$1_name$$82_row$$1$$ = $value$$150$$.row, null != $cellTemplate$$1_column$$1_name$$82_row$$1$$ && ($columnTemplate$$1_element$$31_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$82_row$$1$$.template, null != $columnTemplate$$1_element$$31_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$82_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$13$$, $columnTemplate$$1_element$$31_rowTemplate$$1$$))), 
    $cellTemplate$$1_column$$1_name$$82_row$$1$$ = $value$$150$$.column, null != $cellTemplate$$1_column$$1_name$$82_row$$1$$ && ($columnTemplate$$1_element$$31_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$82_row$$1$$.template, null != $columnTemplate$$1_element$$31_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$82_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$13$$, $columnTemplate$$1_element$$31_rowTemplate$$1$$))), {header:$value$$150$$}) : "cell" === $cellTemplate$$1_column$$1_name$$82_row$$1$$ ? 
    ($cellTemplate$$1_column$$1_name$$82_row$$1$$ = $value$$150$$.template, null != $cellTemplate$$1_column$$1_name$$82_row$$1$$ && ($value$$150$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$13$$, $cellTemplate$$1_column$$1_name$$82_row$$1$$)), {cell:$value$$150$$}) : null;
  }, "for":"ojDataGrid"});
  $ko$$1$$.bindingHandlers.ojContextMenu = {update:function $$ko$$1$$$bindingHandlers$ojContextMenu$update$($element$$32$$, $valueAccessor$$6$$) {
    $$$$7$$($element$$32$$).off(".ojContextMenu");
    var $menu$$2$$ = $ko$$1$$.utils.unwrapObservable($valueAccessor$$6$$());
    "string" !== $$$$7$$.type($menu$$2$$) && ($menu$$2$$ = $element$$32$$.getAttribute("contextmenu")) && ($menu$$2$$ = "#" + $menu$$2$$);
    $menu$$2$$ && ($menu$$2$$ = $$$$7$$($menu$$2$$).data("oj-ojMenu"));
    if ($menu$$2$$) {
      var $$element$$ = $$$$7$$($element$$32$$);
      $$element$$.on("keydown.ojContextMenu contextmenu.ojContextMenu", function($event$$41$$) {
        return "contextmenu" === $event$$41$$.type || 121 == $event$$41$$.which && $event$$41$$.shiftKey ? ($menu$$2$$.open($event$$41$$, {launcher:$$element$$, initialFocus:"menu"}), !1) : !0;
      });
    }
  }};
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["columns", "columnsDefault", "rowTemplate"], init:function($name$$83$$, $value$$151$$, $element$$33_i$$115$$, $widgetConstructor$$2$$, $template$$7_valueAccessor$$7$$, $allBindingsAccessor$$6_footerTemplate$$, $bindingContext$$15$$) {
    if ("columns" == $name$$83$$ || "columnsDefault" == $name$$83$$) {
      var $headerTemplate$$;
      for ($element$$33_i$$115$$ = 0;$element$$33_i$$115$$ < $value$$151$$.length;$element$$33_i$$115$$++) {
        var $column$$2$$ = $value$$151$$[$element$$33_i$$115$$];
        $template$$7_valueAccessor$$7$$ = $column$$2$$.template;
        $allBindingsAccessor$$6_footerTemplate$$ = $column$$2$$.footerTemplate;
        $headerTemplate$$ = $column$$2$$.headerTemplate;
        null != $template$$7_valueAccessor$$7$$ && ($column$$2$$.renderer = $_getTableColumnTemplateRenderer$$($bindingContext$$15$$, "cell", $template$$7_valueAccessor$$7$$));
        null != $allBindingsAccessor$$6_footerTemplate$$ && ($column$$2$$.footerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$15$$, "footer", $allBindingsAccessor$$6_footerTemplate$$));
        null != $headerTemplate$$ && ($column$$2$$.headerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$15$$, "header", $headerTemplate$$));
      }
      "columns" == $name$$83$$ ? $widgetConstructor$$2$$({columns:$value$$151$$}) : $widgetConstructor$$2$$({columnsDefault:$value$$151$$});
    } else {
      "rowTemplate" == $name$$83$$ && $widgetConstructor$$2$$({rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$15$$, $value$$151$$)});
    }
  }, update:function($name$$84$$, $value$$152$$, $element$$34_i$$116$$, $widgetConstructor$$3$$, $template$$8_valueAccessor$$8$$, $allBindingsAccessor$$7_footerTemplate$$1$$, $bindingContext$$16$$) {
    if ("columns" == $name$$84$$ || "columnsDefault" == $name$$84$$) {
      var $headerTemplate$$1$$;
      for ($element$$34_i$$116$$ = 0;$element$$34_i$$116$$ < $value$$152$$.length;$element$$34_i$$116$$++) {
        var $column$$3$$ = $value$$152$$[$element$$34_i$$116$$];
        $template$$8_valueAccessor$$8$$ = $column$$3$$.template;
        $allBindingsAccessor$$7_footerTemplate$$1$$ = $column$$3$$.footerTemplate;
        $headerTemplate$$1$$ = $column$$3$$.headerTemplate;
        null != $template$$8_valueAccessor$$8$$ && ($column$$3$$.renderer = $_getTableColumnTemplateRenderer$$($bindingContext$$16$$, "cell", $template$$8_valueAccessor$$8$$));
        null != $allBindingsAccessor$$7_footerTemplate$$1$$ && ($column$$3$$.footerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$16$$, "footer", $allBindingsAccessor$$7_footerTemplate$$1$$));
        null != $headerTemplate$$1$$ && ($column$$3$$.headerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$16$$, "header", $headerTemplate$$1$$));
      }
      "columns" == $name$$84$$ ? $widgetConstructor$$3$$({columns:$value$$152$$}) : $widgetConstructor$$3$$({columnsDefault:$value$$152$$});
    } else {
      if ("rowTemplate" == $name$$84$$) {
        return{rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$16$$, $value$$152$$)};
      }
    }
    return null;
  }, "for":"ojTable"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojDayMetaData", attributes:["dayMetaData"], init:$_processDayMetaData$$, update:$_processDayMetaData$$});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputDateTime", use:"ojDayMetaData"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputDate", use:"ojDayMetaData"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputTime", use:"ojDayMetaData"});
});
