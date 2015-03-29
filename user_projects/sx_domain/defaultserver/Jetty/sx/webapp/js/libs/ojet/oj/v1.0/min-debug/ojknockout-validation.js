"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define("ojs/ojcore jquery knockout jqueryui ojs/ojknockout ojs/ojmessaging".split(" "), function($oj$$8$$, $$$$8$$, $ko$$2$$) {
  $oj$$8$$.$InvalidComponentTracker$ = function $$oj$$8$$$$InvalidComponentTracker$$() {
    this.Init();
  };
  $goog$exportPath_$$("InvalidComponentTracker", $oj$$8$$.$InvalidComponentTracker$, $oj$$8$$);
  $oj$$8$$.$Object$.$createSubclass$($oj$$8$$.$InvalidComponentTracker$, $oj$$8$$.$Object$, "oj.InvalidComponentTracker");
  $oj$$8$$.$InvalidComponentTracker$.prototype.Init = function $$oj$$8$$$$InvalidComponentTracker$$$Init$() {
    $oj$$8$$.$InvalidComponentTracker$.$superclass$.Init.call(this);
    this.$_tracked$ = [];
    this.$_invalid$ = [];
    this.$_invalidHidden$ = [];
    this.invalidHidden = this.invalidShown = !1;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$focusOnFirstInvalid$ = function $$oj$$8$$$$InvalidComponentTracker$$$$focusOnFirstInvalid$$() {
    var $firstInvalid$$ = null, $self$$43$$ = this, $updateCounter$$ = this.$_updateCounter$;
    this.invalidShown && ($firstInvalid$$ = this.$_getFirstInvalidComponent$());
    setTimeout(function() {
      ($firstInvalid$$ = $updateCounter$$ === $self$$43$$.$_updateCounter$ ? $firstInvalid$$ || $self$$43$$.$_getFirstInvalidComponent$() : $self$$43$$.$_getFirstInvalidComponent$()) && $firstInvalid$$.call($firstInvalid$$, "Focus");
    }, 1);
    return $firstInvalid$$ ? !0 : !1;
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("InvalidComponentTracker.prototype.focusOnFirstInvalid", {$focusOnFirstInvalid$:$oj$$8$$.$InvalidComponentTracker$.prototype.$focusOnFirstInvalid$});
  $oj$$8$$.$InvalidComponentTracker$.prototype.showMessages = function $$oj$$8$$$$InvalidComponentTracker$$$showMessages$() {
    var $tr$$, $len$$10$$, $index$$84$$;
    if (this.invalidHidden) {
      for ($len$$10$$ = this.$_invalidHidden$.length, $index$$84$$ = 0;$index$$84$$ < $len$$10$$;$index$$84$$++) {
        this.$_invalidHidden$[$index$$84$$] && ($tr$$ = this.$_tracked$[$index$$84$$].call($tr$$, "showMessages"));
      }
    }
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("InvalidComponentTracker.prototype.showMessages", {showMessages:$oj$$8$$.$InvalidComponentTracker$.prototype.showMessages});
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_getFirstInvalidComponent$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_getFirstInvalidComponent$$() {
    for (var $firstInvalid$$1$$, $idx$$8$$ = 0, $len$$11$$ = this.$_invalid$.length, $idx$$8$$ = 0;$idx$$8$$ < $len$$11$$;$idx$$8$$++) {
      if ($firstInvalid$$1$$ = this.$_invalid$[$idx$$8$$]) {
        return this.$_tracked$[$idx$$8$$];
      }
    }
    return null;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_update$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_update$$($component$$6$$, $option$$21$$, $value$$154$$) {
    var $compValid_isDisabled$$1$$ = $component$$6$$.call($component$$6$$, "isValid"), $trackedIndex$$ = -1;
    $$$$8$$.each(this.$_tracked$, function($index$$85$$, $item$$5$$) {
      0 > $trackedIndex$$ && $item$$5$$ === $component$$6$$ && ($trackedIndex$$ = $index$$85$$);
    });
    switch($option$$21$$) {
      case "messagesShown":
      ;
      case "messagesHidden":
        if ($value$$154$$) {
          0 > $trackedIndex$$ && ($trackedIndex$$ = this.$_tracked$.push($component$$6$$) - 1);
          this.$_updateInvalidTracker$(this.$_invalid$, $trackedIndex$$, !1);
          this.$_updateInvalidTracker$(this.$_invalidHidden$, $trackedIndex$$, !1);
          if (!$compValid_isDisabled$$1$$) {
            var $compValid_isDisabled$$1$$ = $component$$6$$.call($component$$6$$, "option", "disabled"), $isReadOnly$$1$$ = $component$$6$$.call($component$$6$$, "option", "readOnly");
            "messagesShown" === $option$$21$$ && $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidMessages$($value$$154$$) && this.$_updateInvalidTracker$(this.$_invalid$, $trackedIndex$$ || 0, $compValid_isDisabled$$1$$ || $isReadOnly$$1$$ ? !1 : !0);
            "messagesHidden" === $option$$21$$ && $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidMessages$($value$$154$$) && this.$_updateInvalidTracker$(this.$_invalidHidden$, $trackedIndex$$ || 0, !0);
          }
          this.$_updateInvalidProperties$();
          void 0 === this.$_updateCounter$ && (this.$_updateCounter$ = 0);
          this.$_updateCounter$++;
        }
        break;
      case "disabled":
      ;
      case "readOnly":
        $value$$154$$ && (this.$_updateInvalidTracker$(this.$_invalid$, $trackedIndex$$ || 0, !1), this.$_updateInvalidTracker$(this.$_invalidHidden$, $trackedIndex$$ || 0, !1), this.$_updateInvalidProperties$());
    }
    return!0;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_updateInvalidProperties$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_updateInvalidProperties$$() {
    this.invalidShown = 0 <= this.$_invalid$.indexOf(!0);
    this.invalidHidden = 0 <= this.$_invalidHidden$.indexOf(!0);
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_updateInvalidTracker$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_updateInvalidTracker$$($arr$$21$$, $trackedIndex$$1$$, $value$$155$$) {
    0 <= $trackedIndex$$1$$ ? $arr$$21$$.splice($trackedIndex$$1$$, 1, $value$$155$$) : $arr$$21$$.push($value$$155$$);
  };
  $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidMessages$ = function $$oj$$8$$$$InvalidComponentTracker$$$_hasInvalidMessages$$($messages$$11$$) {
    return!$oj$$8$$.$Message$.isValid($messages$$11$$);
  };
  $oj$$8$$.$ValueBinding$ = function $$oj$$8$$$$ValueBinding$$() {
  };
  $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ = "invalidComponentTracker";
  $oj$$8$$.$ValueBinding$.$_EVENT_OPTIONCHANGE$ = "ojoptionchange";
  $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$ = "messagesShown";
  $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$ = "messagesHidden";
  $oj$$8$$.$ValueBinding$.$_OPTION_DISABLED$ = "disabled";
  $oj$$8$$.$ValueBinding$.$_OPTION_READONLY$ = "readOnly";
  $oj$$8$$.$ValueBinding$.$_update$ = function $$oj$$8$$$$ValueBinding$$$_update$$($name$$86$$, $value$$156$$, $element$$36_updateProps$$1$$, $component$$7$$, $ictObs_valueAccessor$$10$$) {
    $element$$36_updateProps$$1$$ = {};
    $ictObs_valueAccessor$$10$$ = $ictObs_valueAccessor$$10$$.call()[$oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$];
    var $icTracker$$ = $ko$$2$$.utils.unwrapObservable($ictObs_valueAccessor$$10$$);
    if ($name$$86$$ === $oj$$8$$.$ValueBinding$.$_OPTION_DISABLED$ || $name$$86$$ === $oj$$8$$.$ValueBinding$.$_OPTION_READONLY$) {
      return null !== $icTracker$$ && $ko$$2$$.isWriteableObservable($ictObs_valueAccessor$$10$$) && $icTracker$$.$_update$.call($icTracker$$, $component$$7$$, $name$$86$$, $value$$156$$) && $ictObs_valueAccessor$$10$$.valueHasMutated(), $element$$36_updateProps$$1$$[$name$$86$$] = $value$$156$$, $element$$36_updateProps$$1$$;
    }
  };
  $oj$$8$$.$ValueBinding$._init = function $$oj$$8$$$$ValueBinding$$_init$($name$$87$$, $value$$157$$) {
    var $initProps$$1$$ = {};
    $initProps$$1$$[$name$$87$$] = $value$$157$$;
    return $initProps$$1$$;
  };
  $oj$$8$$.$ValueBinding$.$_afterCreate$ = function $$oj$$8$$$$ValueBinding$$$_afterCreate$$($property$$18$$, $element$$37$$, $component$$8$$, $optionsSet_valueAccessor$$11$$) {
    $optionsSet_valueAccessor$$11$$ = $optionsSet_valueAccessor$$11$$.call();
    var $isICTOptionSet$$;
    switch($property$$18$$) {
      case $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$:
        ($isICTOptionSet$$ = $optionsSet_valueAccessor$$11$$[$property$$18$$] ? !0 : !1) && $oj$$8$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$($property$$18$$, $optionsSet_valueAccessor$$11$$, $element$$37$$, $component$$8$$);
    }
    return{};
  };
  $oj$$8$$.$ValueBinding$.$_updateInvalidComponentTracker$ = function $$oj$$8$$$$ValueBinding$$$_updateInvalidComponentTracker$$($event$$42$$, $JSCompiler_OptimizeArgumentsArray_p0$$) {
    var $ictObs$$1$$ = $event$$42$$.data.$tracker$, $icTracker$$1$$ = $ko$$2$$.utils.unwrapObservable($ictObs$$1$$), $component$$9$$ = $event$$42$$.data.$component$, $option$$22$$ = $JSCompiler_OptimizeArgumentsArray_p0$$.option, $msgs$$6$$ = $JSCompiler_OptimizeArgumentsArray_p0$$.value;
    ($option$$22$$ === $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$ || $option$$22$$ === $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$) && $ko$$2$$.isWriteableObservable($ictObs$$1$$) && $icTracker$$1$$.$_update$.call($icTracker$$1$$, $component$$9$$, $option$$22$$, $msgs$$6$$) && $ictObs$$1$$.valueHasMutated();
  };
  $oj$$8$$.$ValueBinding$.$_beforeDestroy$ = function $$oj$$8$$$$ValueBinding$$$_beforeDestroy$$($element$$38_jelem$$8$$) {
    ($element$$38_jelem$$8$$ = $$$$8$$($element$$38_jelem$$8$$)) && $element$$38_jelem$$8$$.off($oj$$8$$.$ValueBinding$.$_EVENT_OPTIONCHANGE$, $oj$$8$$.$ValueBinding$.$_updateInvalidComponentTracker$);
  };
  $oj$$8$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$ = function $$oj$$8$$$$ValueBinding$$$_registerInvalidComponentTrackerWriteback$$($ictObs$$2_property$$19$$, $icTracker$$2_options$$196$$, $element$$39_jElem$$, $component$$10_eventData$$4$$) {
    $ictObs$$2_property$$19$$ = $icTracker$$2_options$$196$$[$ictObs$$2_property$$19$$];
    var $messagesShown$$, $messagesHidden$$;
    $icTracker$$2_options$$196$$ = $ko$$2$$.utils.unwrapObservable($ictObs$$2_property$$19$$);
    $element$$39_jElem$$ = $$$$8$$($element$$39_jElem$$);
    if ($ko$$2$$.isObservable($ictObs$$2_property$$19$$)) {
      null == $icTracker$$2_options$$196$$ && ($icTracker$$2_options$$196$$ = new $oj$$8$$.$InvalidComponentTracker$, $ictObs$$2_property$$19$$($icTracker$$2_options$$196$$));
    } else {
      throw Error("Binding attribute " + $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ + " should be bound to a ko observable.");
    }
    null !== $icTracker$$2_options$$196$$ && ($ko$$2$$.isWriteableObservable($ictObs$$2_property$$19$$) && ($messagesShown$$ = $component$$10_eventData$$4$$.call($component$$10_eventData$$4$$, "option", $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$), $messagesHidden$$ = $component$$10_eventData$$4$$.call($component$$10_eventData$$4$$, "option", $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$), $icTracker$$2_options$$196$$.$_update$.call($icTracker$$2_options$$196$$, $component$$10_eventData$$4$$, 
    $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$, $messagesShown$$), $icTracker$$2_options$$196$$.$_update$.call($icTracker$$2_options$$196$$, $component$$10_eventData$$4$$, $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$, $messagesHidden$$), $ictObs$$2_property$$19$$.valueHasMutated()), $component$$10_eventData$$4$$ = {$tracker$:$ictObs$$2_property$$19$$, $component$:$component$$10_eventData$$4$$}, $element$$39_jElem$$.on($oj$$8$$.$ValueBinding$.$_EVENT_OPTIONCHANGE$, $component$$10_eventData$$4$$, 
    $oj$$8$$.$ValueBinding$.$_updateInvalidComponentTracker$));
  };
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"editableValue", attributes:[$oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$, $oj$$8$$.$ValueBinding$.$_OPTION_DISABLED$, $oj$$8$$.$ValueBinding$.$_OPTION_READONLY$], init:$oj$$8$$.$ValueBinding$._init, update:$oj$$8$$.$ValueBinding$.$_update$, afterCreate:$oj$$8$$.$ValueBinding$.$_afterCreate$, beforeDestroy:$oj$$8$$.$ValueBinding$.$_beforeDestroy$});
});
