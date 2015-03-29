var $goog$global$$ = this;
function $goog$exportPath_$$($name$$53_parts$$, $opt_object$$, $cur_opt_objectToExportTo$$) {
  $name$$53_parts$$ = $name$$53_parts$$.split(".");
  $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$ || $goog$global$$;
  $name$$53_parts$$[0] in $cur_opt_objectToExportTo$$ || !$cur_opt_objectToExportTo$$.execScript || $cur_opt_objectToExportTo$$.execScript("var " + $name$$53_parts$$[0]);
  for (var $part$$;$name$$53_parts$$.length && ($part$$ = $name$$53_parts$$.shift());) {
    $name$$53_parts$$.length || void 0 === $opt_object$$ ? $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$[$part$$] ? $cur_opt_objectToExportTo$$[$part$$] : $cur_opt_objectToExportTo$$[$part$$] = {} : $cur_opt_objectToExportTo$$[$part$$] = $opt_object$$;
  }
}
;define(["require", "ojL10n!ojtranslations/nls/ojtranslations"], function($require$$2$$, $ojt$$1$$) {
  var $_scope$$ = {};
  "undefined" !== typeof window ? $_scope$$ = window : "undefined" !== typeof self && ($_scope$$ = self);
  var $_oldVal$$ = $_scope$$.oj, $oj$$ = $_scope$$.oj = {version:"1.0", build:"3157", revision:"10321", noConflict:function $$_scope$$$oj$noConflict$() {
    $_scope$$.oj = $_oldVal$$;
  }};
  $oj$$.$Logger$ = {};
  $goog$exportPath_$$("Logger", $oj$$.$Logger$, $oj$$);
  $oj$$.$Logger$.$LEVEL_NONE$ = 0;
  $goog$exportPath_$$("Logger.LEVEL_NONE", $oj$$.$Logger$.$LEVEL_NONE$, $oj$$);
  $oj$$.$Logger$.$LEVEL_ERROR$ = 1;
  $goog$exportPath_$$("Logger.LEVEL_ERROR", $oj$$.$Logger$.$LEVEL_ERROR$, $oj$$);
  $oj$$.$Logger$.$LEVEL_WARN$ = 2;
  $goog$exportPath_$$("Logger.LEVEL_WARN", $oj$$.$Logger$.$LEVEL_WARN$, $oj$$);
  $oj$$.$Logger$.$LEVEL_INFO$ = 3;
  $goog$exportPath_$$("Logger.LEVEL_INFO", $oj$$.$Logger$.$LEVEL_INFO$, $oj$$);
  $oj$$.$Logger$.$LEVEL_LOG$ = 4;
  $goog$exportPath_$$("Logger.LEVEL_LOG", $oj$$.$Logger$.$LEVEL_LOG$, $oj$$);
  $oj$$.$Logger$.$_METHOD_ERROR$ = "error";
  $oj$$.$Logger$.$_METHOD_WARN$ = "warn";
  $oj$$.$Logger$.$_METHOD_INFO$ = "info";
  $oj$$.$Logger$.$_METHOD_LOG$ = "log";
  $oj$$.$Logger$.$_defaultOptions$ = {level:$oj$$.$Logger$.$LEVEL_ERROR$, writer:null};
  $oj$$.$Logger$.$_options$ = $oj$$.$Logger$.$_defaultOptions$;
  $oj$$.$Logger$.error = function $$oj$$$$Logger$$error$($obj$$40$$) {
    $oj$$.$Logger$.$_write$($oj$$.$Logger$.$LEVEL_ERROR$, $oj$$.$Logger$.$_METHOD_ERROR$, arguments);
  };
  $goog$exportPath_$$("Logger.error", $oj$$.$Logger$.error, $oj$$);
  $oj$$.$Logger$.info = function $$oj$$$$Logger$$info$($obj$$41$$) {
    $oj$$.$Logger$.$_write$($oj$$.$Logger$.$LEVEL_INFO$, $oj$$.$Logger$.$_METHOD_INFO$, arguments);
  };
  $goog$exportPath_$$("Logger.info", $oj$$.$Logger$.info, $oj$$);
  $oj$$.$Logger$.warn = function $$oj$$$$Logger$$warn$($obj$$42$$) {
    $oj$$.$Logger$.$_write$($oj$$.$Logger$.$LEVEL_WARN$, $oj$$.$Logger$.$_METHOD_WARN$, arguments);
  };
  $goog$exportPath_$$("Logger.warn", $oj$$.$Logger$.warn, $oj$$);
  $oj$$.$Logger$.log = function $$oj$$$$Logger$$log$($obj$$43$$) {
    $oj$$.$Logger$.$_write$($oj$$.$Logger$.$LEVEL_LOG$, $oj$$.$Logger$.$_METHOD_LOG$, arguments);
  };
  $goog$exportPath_$$("Logger.log", $oj$$.$Logger$.log, $oj$$);
  $oj$$.$Logger$.option = function $$oj$$$$Logger$$option$($key$$20$$, $value$$53$$) {
    var $ret$$ = {}, $opt$$;
    if (0 == arguments.length) {
      for ($opt$$ in $oj$$.$Logger$.$_options$) {
        $oj$$.$Logger$.$_options$.hasOwnProperty($opt$$) && ($ret$$[$opt$$] = $oj$$.$Logger$.$_options$[$opt$$]);
      }
      return $ret$$;
    }
    if ("string" === typeof $key$$20$$ && void 0 === $value$$53$$) {
      return void 0 === $oj$$.$Logger$.$_options$[$key$$20$$] ? null : $oj$$.$Logger$.$_options$[$key$$20$$];
    }
    if ("string" === typeof $key$$20$$) {
      $oj$$.$Logger$.$_options$[$key$$20$$] = $value$$53$$;
    } else {
      for ($opt$$ in $key$$20$$) {
        $key$$20$$.hasOwnProperty($opt$$) && $oj$$.$Logger$.option($opt$$, $key$$20$$[$opt$$]);
      }
    }
  };
  $goog$exportPath_$$("Logger.option", $oj$$.$Logger$.option, $oj$$);
  $oj$$.$Logger$.$_write$ = function $$oj$$$$Logger$$$_write$$($level$$7$$, $method$$1$$, $args$$7$$) {
    if (!($oj$$.$Logger$.option("level") < $level$$7$$)) {
      var $writer$$ = $oj$$.$Logger$.$_getWriter$();
      null != $writer$$ && (1 == $args$$7$$.length && $args$$7$$[0] instanceof Function && ($args$$7$$ = [$args$$7$$[0]()]), $writer$$[$method$$1$$] && $writer$$[$method$$1$$].apply ? $writer$$[$method$$1$$].apply($writer$$, $args$$7$$) : $writer$$[$method$$1$$] && ($writer$$[$method$$1$$] = Function.prototype.bind.call($writer$$[$method$$1$$], $writer$$), $oj$$.$Logger$.$_write$($level$$7$$, $method$$1$$, $args$$7$$)));
    }
  };
  $oj$$.$Logger$.$_getWriter$ = function $$oj$$$$Logger$$$_getWriter$$() {
    var $writer$$1$$ = null;
    $oj$$.$Logger$.option("writer") ? $writer$$1$$ = $oj$$.$Logger$.option("writer") : void 0 !== window && void 0 !== window.console && ($writer$$1$$ = window.console);
    return $writer$$1$$;
  };
  $oj$$.$Logger$.$_validateOption$ = function $$oj$$$$Logger$$$_validateOption$$($key$$21$$) {
    return void 0 !== $oj$$.$Logger$.$_defaultOptions$[$key$$21$$];
  };
  $oj$$.$Object$ = function $$oj$$$$Object$$() {
    this.Init();
  };
  $goog$exportPath_$$("Object", $oj$$.$Object$, $oj$$);
  $oj$$.$Object$.$superclass$ = null;
  $oj$$.$Object$.$_typeName$ = "oj.Object";
  $oj$$.$Object$.$_GET_FUNCTION_NAME_REGEXP$ = /function\s+([\w\$][\w\$\d]*)\s*\(/;
  $oj$$.$Object$.prototype = {};
  $oj$$.$Object$.prototype.constructor = $oj$$.$Object$;
  $oj$$.$Object$.$exportPrototypeSymbol$ = function $$oj$$$$Object$$$exportPrototypeSymbol$$($name$$60$$, $valueMapping$$) {
    var $renamed$$ = null, $val$$11$$ = null, $constructor_prop$$5$$;
    for ($constructor_prop$$5$$ in $valueMapping$$) {
      if ($valueMapping$$.hasOwnProperty($constructor_prop$$5$$)) {
        $renamed$$ = $constructor_prop$$5$$;
        $val$$11$$ = $valueMapping$$[$constructor_prop$$5$$];
        break;
      }
    }
    var $original_tokens$$ = $name$$60$$.split(".");
    $constructor_prop$$5$$ = $oj$$[$original_tokens$$[0]];
    $original_tokens$$ = $original_tokens$$[2];
    if ($renamed$$ != $original_tokens$$ && null != $renamed$$) {
      var $renameMap$$ = $constructor_prop$$5$$.$_r2o$;
      $renameMap$$ || ($renameMap$$ = {}, $constructor_prop$$5$$.$_r2o$ = $renameMap$$);
      $renameMap$$[$renamed$$] = $original_tokens$$;
      $constructor_prop$$5$$.prototype[$original_tokens$$] = $val$$11$$;
    }
  };
  $oj$$.$Object$.$createSubclass$ = function $$oj$$$$Object$$$createSubclass$$($extendingClass$$, $baseClass$$, $typeName$$) {
    $oj$$.$Assert$.$assertFunction$($extendingClass$$);
    $oj$$.$Assert$.$assertFunctionOrNull$($baseClass$$);
    $oj$$.$Assert$.$assertStringOrNull$($typeName$$);
    void 0 === $baseClass$$ && ($baseClass$$ = $oj$$.$Object$);
    $oj$$.$Assert$.assert($extendingClass$$ !== $baseClass$$, "Class can't extend itself");
    var $TempConstructor$$ = $oj$$.$Object$.$_tempSubclassConstructor$;
    $TempConstructor$$.prototype = $baseClass$$.prototype;
    $extendingClass$$.prototype = new $TempConstructor$$;
    $extendingClass$$.prototype.constructor = $extendingClass$$;
    $extendingClass$$.$superclass$ = $extendingClass$$.superclass = $baseClass$$.prototype;
    $typeName$$ && ($extendingClass$$.$_typeName$ = $typeName$$);
  };
  $goog$exportPath_$$("Object.createSubclass", $oj$$.$Object$.$createSubclass$, $oj$$);
  $oj$$.$Object$.$copyPropertiesForClass$ = function $$oj$$$$Object$$$copyPropertiesForClass$$($targetClass$$, $source$$3$$) {
    var $prop$$6$$;
    $oj$$.$Assert$.$assertFunction$($targetClass$$);
    $oj$$.$Assert$.assert(null != $source$$3$$, "source object cannot be null");
    for ($prop$$6$$ in $source$$3$$) {
      $source$$3$$.hasOwnProperty($prop$$6$$) && ($targetClass$$.prototype[$prop$$6$$] = $source$$3$$[$prop$$6$$]);
    }
  };
  $goog$exportPath_$$("Object.copyPropertiesForClass", $oj$$.$Object$.$copyPropertiesForClass$, $oj$$);
  $oj$$.$Object$.$_tempSubclassConstructor$ = function $$oj$$$$Object$$$_tempSubclassConstructor$$() {
  };
  $oj$$.$Object$.prototype.$getClass$ = function $$oj$$$$Object$$$$getClass$$($otherInstance$$) {
    if (void 0 === $otherInstance$$) {
      $otherInstance$$ = this;
    } else {
      if (null === $otherInstance$$) {
        return null;
      }
    }
    return $otherInstance$$.constructor;
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.getClass", {$getClass$:$oj$$.$Object$.prototype.$getClass$});
  $oj$$.$Object$.prototype.clone = function $$oj$$$$Object$$$clone$() {
    var $clone$$1$$ = new this.constructor;
    $oj$$.$CollectionUtils$.$copyInto$($clone$$1$$, this);
    return $clone$$1$$;
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.clone", {clone:$oj$$.$Object$.prototype.clone});
  $oj$$.$Object$.prototype.toString = function $$oj$$$$Object$$$toString$() {
    return this.$toDebugString$();
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.toString", {toString:$oj$$.$Object$.prototype.toString});
  $oj$$.$Object$.prototype.$toDebugString$ = function $$oj$$$$Object$$$$toDebugString$$() {
    return this.getTypeName() + " Object";
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.toDebugString", {$toDebugString$:$oj$$.$Object$.prototype.$toDebugString$});
  $oj$$.$Object$.getTypeName = function $$oj$$$$Object$$getTypeName$($clazz$$) {
    $oj$$.$Assert$.$assertFunction$($clazz$$);
    var $constructorText_matches_typeName$$1$$ = $clazz$$.$_typeName$;
    null == $constructorText_matches_typeName$$1$$ && ($constructorText_matches_typeName$$1$$ = $clazz$$.toString(), $constructorText_matches_typeName$$1$$ = ($constructorText_matches_typeName$$1$$ = $oj$$.$Object$.$_GET_FUNCTION_NAME_REGEXP$.exec($constructorText_matches_typeName$$1$$)) ? $constructorText_matches_typeName$$1$$[1] : "anonymous", $clazz$$.$_typeName$ = $constructorText_matches_typeName$$1$$);
    return $constructorText_matches_typeName$$1$$;
  };
  $goog$exportPath_$$("Object.getTypeName", $oj$$.$Object$.getTypeName, $oj$$);
  $oj$$.$Object$.prototype.getTypeName = function $$oj$$$$Object$$$getTypeName$() {
    return $oj$$.$Object$.getTypeName(this.constructor);
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.getTypeName", {getTypeName:$oj$$.$Object$.prototype.getTypeName});
  $oj$$.$Object$.prototype.Init = function $$oj$$$$Object$$$Init$() {
    $oj$$.$Assert$.$DEBUG$ && $oj$$.$Assert$.assert(this.getTypeName, "Not an oj.Object");
    var $currClass$$ = this.constructor;
    $currClass$$.$_initialized$ || $oj$$.$Object$.$_initClasses$($currClass$$);
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.Init", {Init:$oj$$.$Object$.prototype.Init});
  $oj$$.$Object$.$ensureClassInitialization$ = function $$oj$$$$Object$$$ensureClassInitialization$$($clazz$$1$$) {
    $oj$$.$Assert$.$assertFunction$($clazz$$1$$);
    $clazz$$1$$.$_initialized$ || $oj$$.$Object$.$_initClasses$($clazz$$1$$);
  };
  $goog$exportPath_$$("Object.ensureClassInitialization", $oj$$.$Object$.$ensureClassInitialization$, $oj$$);
  $oj$$.$Object$.prototype.$equals$ = function $$oj$$$$Object$$$$equals$$($object$$2$$) {
    return this === $object$$2$$;
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.equals", {$equals$:$oj$$.$Object$.prototype.$equals$});
  $oj$$.$Object$.$createCallback$ = function $$oj$$$$Object$$$createCallback$$($obj$$44$$, $func$$3$$) {
    $oj$$.$Assert$.$assertFunction$($func$$3$$);
    return $func$$3$$.bind($obj$$44$$);
  };
  $goog$exportPath_$$("Object.createCallback", $oj$$.$Object$.$createCallback$, $oj$$);
  $oj$$.$Object$.$_applyFunctionProperties$ = function $$oj$$$$Object$$$_applyFunctionProperties$$($target$$48$$, $className$$4$$) {
    var $funcNameProperty$$ = $oj$$.$Assert$.$FUNC_NAME_PROPERTY$, $classNameProperty$$ = $oj$$.$Assert$.$CLASS_NAME_PROPERTY$, $currPropName$$, $currProp$$;
    for ($currPropName$$ in $target$$48$$) {
      $target$$48$$.hasOwnProperty($currPropName$$) && ($currProp$$ = $target$$48$$[$currPropName$$], "function" !== typeof $currProp$$ || $currProp$$.hasOwnProperty($funcNameProperty$$) || ($currProp$$[$funcNameProperty$$] = $currPropName$$, $currProp$$[$classNameProperty$$] = $className$$4$$));
    }
  };
  $oj$$.$Object$.$_initClasses$ = function $$oj$$$$Object$$$_initClasses$$($currClass$$1$$) {
    $oj$$.$Assert$.$DEBUG$ && ($oj$$.$Assert$.$assertFunction$($currClass$$1$$), $oj$$.$Assert$.assert(!$currClass$$1$$.$_initialized$));
    $currClass$$1$$.$_initialized$ = !0;
    var $superclass_superclassConstructor_typeName$$2$$ = $currClass$$1$$.$superclass$, $InitClassFunc$$;
    $superclass_superclassConstructor_typeName$$2$$ && (($superclass_superclassConstructor_typeName$$2$$ = $superclass_superclassConstructor_typeName$$2$$.constructor) && !$superclass_superclassConstructor_typeName$$2$$.$_initialized$ && $oj$$.$Object$.$_initClasses$($superclass_superclassConstructor_typeName$$2$$), $oj$$.$Object$.$_applyRenamesToSubclass$($currClass$$1$$));
    $superclass_superclassConstructor_typeName$$2$$ = $oj$$.$Object$.getTypeName($currClass$$1$$);
    try {
      ($InitClassFunc$$ = $currClass$$1$$.InitClass || null) || ($InitClassFunc$$ = $currClass$$1$$.InitClass), $InitClassFunc$$ && $InitClassFunc$$.call($currClass$$1$$);
    } finally {
      $oj$$.$Assert$.$DEBUG$ && ($oj$$.$Object$.$_applyFunctionProperties$($currClass$$1$$.prototype, $superclass_superclassConstructor_typeName$$2$$), $oj$$.$Object$.$_applyFunctionProperties$($currClass$$1$$, "static " + $superclass_superclassConstructor_typeName$$2$$));
    }
  };
  $oj$$.$Object$.$compareValues$ = function $$oj$$$$Object$$$compareValues$$($obj1$$, $obj2$$) {
    if ($obj1$$ === $obj2$$) {
      return!0;
    }
    if (typeof $obj1$$ !== typeof $obj2$$ || null === $obj1$$ || null === $obj2$$) {
      return!1;
    }
    if ($obj1$$.constructor === $obj2$$.constructor) {
      if (Array.isArray($obj1$$)) {
        return $oj$$.$Object$.$_compareArrayValues$($obj1$$, $obj2$$);
      }
      if ($obj1$$.constructor === Object) {
        return $oj$$.$Object$.$__innerEquals$($obj1$$, $obj2$$);
      }
      if ($obj1$$.valueOf && "function" === typeof $obj1$$.valueOf) {
        return $obj1$$.valueOf() === $obj2$$.valueOf();
      }
    }
    return!1;
  };
  $goog$exportPath_$$("Object.compareValues", $oj$$.$Object$.$compareValues$, $oj$$);
  $oj$$.$Object$.$_compareArrayValues$ = function $$oj$$$$Object$$$_compareArrayValues$$($array1$$, $array2$$) {
    if ($array1$$.length !== $array2$$.length) {
      return!1;
    }
    for (var $i$$7$$ = 0, $j$$1$$ = $array1$$.length;$i$$7$$ < $j$$1$$;$i$$7$$++) {
      if (!$oj$$.$Object$.$compareValues$($array1$$[$i$$7$$], $array2$$[$i$$7$$])) {
        return!1;
      }
    }
    return!0;
  };
  $oj$$.$Object$.$__innerEquals$ = function $$oj$$$$Object$$$__innerEquals$$($obj1$$1$$, $obj2$$1$$) {
    var $prop$$7$$, $hasProperties$$ = !1;
    if ($obj1$$1$$ === $obj2$$1$$) {
      return!0;
    }
    if (!($obj1$$1$$ instanceof Object && $obj2$$1$$ instanceof Object) || $obj1$$1$$.constructor !== $obj2$$1$$.constructor) {
      return!1;
    }
    for ($prop$$7$$ in $obj1$$1$$) {
      if ($hasProperties$$ || ($hasProperties$$ = !0), $obj1$$1$$.hasOwnProperty($prop$$7$$) && (!$obj2$$1$$.hasOwnProperty($prop$$7$$) || $obj1$$1$$[$prop$$7$$] !== $obj2$$1$$[$prop$$7$$] && ("object" !== typeof $obj1$$1$$[$prop$$7$$] || !$oj$$.$Object$.$__innerEquals$($obj1$$1$$[$prop$$7$$], $obj2$$1$$[$prop$$7$$])))) {
        return!1;
      }
    }
    for ($prop$$7$$ in $obj2$$1$$) {
      if ($hasProperties$$ || ($hasProperties$$ = !0), $obj2$$1$$.hasOwnProperty($prop$$7$$) && !$obj1$$1$$.hasOwnProperty($prop$$7$$)) {
        return!1;
      }
    }
    return $hasProperties$$ ? !0 : JSON.stringify($obj1$$1$$) === JSON.stringify($obj2$$1$$);
  };
  $oj$$.$Object$.isEmpty = function $$oj$$$$Object$$isEmpty$($object$$3$$) {
    var $prop$$8$$;
    if (void 0 === $object$$3$$ || null === $object$$3$$) {
      return!0;
    }
    for ($prop$$8$$ in $object$$3$$) {
      if ($object$$3$$.hasOwnProperty($prop$$8$$)) {
        return!1;
      }
    }
    return!0;
  };
  $oj$$.$Object$.$_applyRenamesToSubclass$ = function $$oj$$$$Object$$$_applyRenamesToSubclass$$($currClass$$2$$) {
    $oj$$.$Object$.$_r2o$ && $oj$$.$Object$.$_applyRenamesFromChain$($currClass$$2$$, $currClass$$2$$.$superclass$);
  };
  $oj$$.$Object$.$_applyRenamesFromChain$ = function $$oj$$$$Object$$$_applyRenamesFromChain$$($currClass$$3$$, $superclass$$1$$) {
    if ($superclass$$1$$) {
      var $ancestor$$1_renameMap$$1$$ = $superclass$$1$$.constructor;
      $oj$$.$Object$.$_applyRenamesFromChain$($currClass$$3$$, $ancestor$$1_renameMap$$1$$.$superclass$);
      var $ancestor$$1_renameMap$$1$$ = $ancestor$$1_renameMap$$1$$.$_r2o$, $alias$$;
      if ($ancestor$$1_renameMap$$1$$) {
        for ($alias$$ in $ancestor$$1_renameMap$$1$$) {
          if ($ancestor$$1_renameMap$$1$$.hasOwnProperty($alias$$)) {
            var $orig$$ = $ancestor$$1_renameMap$$1$$[$alias$$];
            if ($alias$$ != $orig$$) {
              var $prot$$ = $currClass$$3$$.prototype;
              !$prot$$.hasOwnProperty($alias$$) && $prot$$.hasOwnProperty($orig$$) ? $prot$$[$alias$$] = $prot$$[$orig$$] : !$prot$$.hasOwnProperty($orig$$) && $prot$$.hasOwnProperty($alias$$) && ($prot$$[$orig$$] = $prot$$[$alias$$]);
            }
          }
        }
      }
    }
  };
  $oj$$.$Object$.$__getPromise$ = function $$oj$$$$Object$$$__getPromise$$($func$$4$$) {
    Promise.prototype.done || (Promise.prototype.done = Promise.prototype.then);
    return new Promise($func$$4$$);
  };
  $oj$$.$__isAmdLoaderPresent$ = function $$oj$$$$__isAmdLoaderPresent$$() {
    return "function" === typeof define && define.amd;
  };
  $oj$$.$Assert$ = {};
  $goog$exportPath_$$("Assert", $oj$$.$Assert$, $oj$$);
  $oj$$.$Assert$.$forceDebug$ = function $$oj$$$$Assert$$$forceDebug$$() {
    $oj$$.$Assert$.$DEBUG$ = $oj$$.$Assert$.DEBUG = !0;
  };
  $goog$exportPath_$$("Assert.forceDebug", $oj$$.$Assert$.$forceDebug$, $oj$$);
  $oj$$.$Assert$.$FUNC_NAME_PROPERTY$ = "_funcName";
  $oj$$.$Assert$.$CLASS_NAME_PROPERTY$ = "_className";
  $oj$$.$Assert$.$_MAX_STACK_DEPTH_LIMIT$ = 20;
  $oj$$.$Assert$.assert = function $$oj$$$$Assert$$assert$($condition$$1$$, $message$$19$$) {
    if ($oj$$.$Assert$.$DEBUG$ && !$condition$$1$$) {
      var $myMessage$$ = $message$$19$$ || "", $i$$8$$;
      if (2 < arguments.length) {
        $myMessage$$ += "(";
        for ($i$$8$$ = 2;$i$$8$$ < arguments.length;$i$$8$$ += 1) {
          $myMessage$$ += arguments[$i$$8$$];
        }
        $myMessage$$ += ")";
      }
      $oj$$.$Assert$.$assertionFailed$($myMessage$$, 1);
    }
  };
  $goog$exportPath_$$("Assert.assert", $oj$$.$Assert$.assert, $oj$$);
  $oj$$.$Assert$.$failedInAbstractFunction$ = function $$oj$$$$Assert$$$failedInAbstractFunction$$() {
    $oj$$.$Assert$.$DEBUG$ && $oj$$.$Assert$.$assertionFailed$("Abstract function called", 1);
  };
  $goog$exportPath_$$("Assert.failedInAbstractFunction", $oj$$.$Assert$.$failedInAbstractFunction$, $oj$$);
  $oj$$.$Assert$.$assertPrototype$ = function $$oj$$$$Assert$$$assertPrototype$$($target$$49$$, $theConstructor$$, $reason$$) {
    var $thePrototype$$;
    $oj$$.$Assert$.$DEBUG$ && (null !== $target$$49$$ ? ($oj$$.$Assert$.$assertType$($theConstructor$$, "function", null, 1, !1), $thePrototype$$ = $theConstructor$$.prototype, $thePrototype$$.isPrototypeOf($target$$49$$) || $oj$$.$Assert$.$assertionFailed$("object '" + $target$$49$$ + "' doesn't match prototype " + $thePrototype$$, 1, $reason$$)) : $oj$$.$Assert$.$assertionFailed$("null object doesn't match prototype " + $thePrototype$$, 1, $reason$$));
  };
  $goog$exportPath_$$("Assert.assertPrototype", $oj$$.$Assert$.$assertPrototype$, $oj$$);
  $oj$$.$Assert$.$assertPrototypeOrNull$ = function $$oj$$$$Assert$$$assertPrototypeOrNull$$($target$$50$$, $theConstructor$$1$$, $reason$$1$$) {
    var $thePrototype$$1$$;
    $oj$$.$Assert$.$DEBUG$ && null !== $target$$50$$ && (null !== $target$$50$$ ? ($oj$$.$Assert$.$assertType$($theConstructor$$1$$, "function", null, 1, !1), $thePrototype$$1$$ = $theConstructor$$1$$.prototype, $thePrototype$$1$$.isPrototypeOf($target$$50$$) || $oj$$.$Assert$.$assertionFailed$("object '" + $target$$50$$ + "' doesn't match prototype " + $thePrototype$$1$$, 1, $reason$$1$$)) : $oj$$.$Assert$.$assertionFailed$("null object doesn't match prototype " + $thePrototype$$1$$, 1, $reason$$1$$));
  };
  $goog$exportPath_$$("Assert.assertPrototypeOrNull", $oj$$.$Assert$.$assertPrototypeOrNull$, $oj$$);
  $oj$$.$Assert$.$assertPrototypes$ = function $$oj$$$$Assert$$$assertPrototypes$$($target$$51$$, $instanceOne_thePrototype$$2$$, $instanceTwo_thePrototypeTwo$$, $reason$$2$$) {
    $oj$$.$Assert$.$DEBUG$ && ($instanceOne_thePrototype$$2$$ = $instanceOne_thePrototype$$2$$.prototype, $instanceTwo_thePrototypeTwo$$ = $instanceTwo_thePrototypeTwo$$.prototype, $instanceOne_thePrototype$$2$$.isPrototypeOf($target$$51$$) || $instanceTwo_thePrototypeTwo$$.isPrototypeOf($target$$51$$) || $oj$$.$Assert$.$assertionFailed$("object '" + $target$$51$$ + "' doesn't match prototype " + $instanceOne_thePrototype$$2$$ + " or " + $instanceTwo_thePrototypeTwo$$, 1, $reason$$2$$));
  };
  $goog$exportPath_$$("Assert.assertPrototypes", $oj$$.$Assert$.$assertPrototypes$, $oj$$);
  $oj$$.$Assert$.$assertDomNodeOrNull$ = function $$oj$$$$Assert$$$assertDomNodeOrNull$$($target$$52$$, $depth$$1$$) {
    $oj$$.$Assert$.$DEBUG$ && $target$$52$$ && void 0 === $target$$52$$.nodeType && $oj$$.$Assert$.$assertionFailed$($target$$52$$ + " is not a DOM Node", $depth$$1$$ + 1);
  };
  $goog$exportPath_$$("Assert.assertDomNodeOrNull", $oj$$.$Assert$.$assertDomNodeOrNull$, $oj$$);
  $oj$$.$Assert$.$assertDomNode$ = function $$oj$$$$Assert$$$assertDomNode$$($target$$53$$, $depth$$2$$) {
    $oj$$.$Assert$.$DEBUG$ && ($target$$53$$ && void 0 !== $target$$53$$.nodeType || $oj$$.$Assert$.$assertionFailed$($target$$53$$ + " is not a DOM Node", $depth$$2$$ + 1));
  };
  $goog$exportPath_$$("Assert.assertDomNode", $oj$$.$Assert$.$assertDomNode$, $oj$$);
  $oj$$.$Assert$.$assertDomElement$ = function $$oj$$$$Assert$$$assertDomElement$$($target$$54$$, $nodeName$$) {
    $oj$$.$Assert$.$DEBUG$ && ($oj$$.$Assert$.$assertDomNode$($target$$54$$, 1), 1 !== $target$$54$$.nodeType ? $oj$$.$Assert$.$assertionFailed$($target$$54$$ + " is not a DOM Element", 1) : $nodeName$$ && $target$$54$$.nodeName !== $nodeName$$ && $oj$$.$Assert$.$assertionFailed$($target$$54$$ + " is not a " + $nodeName$$ + " Element", 1));
  };
  $goog$exportPath_$$("Assert.assertDomElement", $oj$$.$Assert$.$assertDomElement$, $oj$$);
  $oj$$.$Assert$.$assertDomElementOrNull$ = function $$oj$$$$Assert$$$assertDomElementOrNull$$($target$$55$$, $nodeName$$1$$) {
    $oj$$.$Assert$.$DEBUG$ && null !== $target$$55$$ && ($oj$$.$Assert$.$assertDomNode$($target$$55$$, 1), 1 !== $target$$55$$.nodeType ? $oj$$.$Assert$.$assertionFailed$($target$$55$$ + " is not a DOM Element", 1) : $nodeName$$1$$ && $target$$55$$.nodeName !== $nodeName$$1$$ && $oj$$.$Assert$.$assertionFailed$($target$$55$$ + " is not a " + $nodeName$$1$$ + " Element", 1));
  };
  $goog$exportPath_$$("Assert.assertDomElementOrNull", $oj$$.$Assert$.$assertDomElementOrNull$, $oj$$);
  $oj$$.$Assert$.$assertType$ = function $$oj$$$$Assert$$$assertType$$($message$$20_target$$56$$, $type$$62$$, $prefix$$2$$, $depth$$3$$, $nullOK$$) {
    !$oj$$.$Assert$.$DEBUG$ || null === $message$$20_target$$56$$ && $nullOK$$ || typeof $message$$20_target$$56$$ === $type$$62$$ || ($message$$20_target$$56$$ = $message$$20_target$$56$$ + " is not of type " + $type$$62$$, $prefix$$2$$ && ($message$$20_target$$56$$ = $prefix$$2$$ + $message$$20_target$$56$$), $depth$$3$$ || ($depth$$3$$ = 0), $oj$$.$Assert$.$assertionFailed$($message$$20_target$$56$$, $depth$$3$$ + 1));
  };
  $goog$exportPath_$$("Assert.assertType", $oj$$.$Assert$.$assertType$, $oj$$);
  $oj$$.$Assert$.$assertObject$ = function $$oj$$$$Assert$$$assertObject$$($target$$57$$, $prefix$$3$$) {
    $oj$$.$Assert$.$DEBUG$ && $oj$$.$Assert$.$assertType$($target$$57$$, "object", $prefix$$3$$, 1, !1);
  };
  $goog$exportPath_$$("Assert.assertObject", $oj$$.$Assert$.$assertObject$, $oj$$);
  $oj$$.$Assert$.$assertObjectOrNull$ = function $$oj$$$$Assert$$$assertObjectOrNull$$($target$$58$$, $prefix$$4$$) {
    $oj$$.$Assert$.$DEBUG$ && $oj$$.$Assert$.$assertType$($target$$58$$, "object", $prefix$$4$$, 1, !0);
  };
  $goog$exportPath_$$("Assert.assertObjectOrNull", $oj$$.$Assert$.$assertObjectOrNull$, $oj$$);
  $oj$$.$Assert$.$assertNonEmptyString$ = function $$oj$$$$Assert$$$assertNonEmptyString$$($target$$59$$, $prefix$$5$$) {
    $oj$$.$Assert$.$DEBUG$ && ($oj$$.$Assert$.$assertType$($target$$59$$, "string", $prefix$$5$$, 1, !1), $oj$$.$Assert$.assert(0 < $target$$59$$.length, "empty string"));
  };
  $goog$exportPath_$$("Assert.assertNonEmptyString", $oj$$.$Assert$.$assertNonEmptyString$, $oj$$);
  $oj$$.$Assert$.$assertString$ = function $$oj$$$$Assert$$$assertString$$($target$$60$$, $prefix$$6$$) {
    $oj$$.$Assert$.$DEBUG$ && $oj$$.$Assert$.$assertType$($target$$60$$, "string", $prefix$$6$$, 1, !1);
  };
  $goog$exportPath_$$("Assert.assertString", $oj$$.$Assert$.$assertString$, $oj$$);
  $oj$$.$Assert$.$assertStringOrNull$ = function $$oj$$$$Assert$$$assertStringOrNull$$($target$$61$$, $prefix$$7$$) {
    $oj$$.$Assert$.$DEBUG$ && $oj$$.$Assert$.$assertType$($target$$61$$, "string", $prefix$$7$$, 1, !0);
  };
  $goog$exportPath_$$("Assert.assertStringOrNull", $oj$$.$Assert$.$assertStringOrNull$, $oj$$);
  $oj$$.$Assert$.$assertFunction$ = function $$oj$$$$Assert$$$assertFunction$$($target$$62$$, $prefix$$8$$) {
    $oj$$.$Assert$.$DEBUG$ && $oj$$.$Assert$.$assertType$($target$$62$$, "function", $prefix$$8$$, 1, !1);
  };
  $goog$exportPath_$$("Assert.assertFunction", $oj$$.$Assert$.$assertFunction$, $oj$$);
  $oj$$.$Assert$.$assertFunctionOrNull$ = function $$oj$$$$Assert$$$assertFunctionOrNull$$($target$$63$$, $prefix$$9$$) {
    $oj$$.$Assert$.$DEBUG$ && $oj$$.$Assert$.$assertType$($target$$63$$, "function", $prefix$$9$$, 1, !0);
  };
  $goog$exportPath_$$("Assert.assertFunctionOrNull", $oj$$.$Assert$.$assertFunctionOrNull$, $oj$$);
  $oj$$.$Assert$.$assertBoolean$ = function $$oj$$$$Assert$$$assertBoolean$$($target$$64$$, $prefix$$10$$) {
    $oj$$.$Assert$.$DEBUG$ && $oj$$.$Assert$.$assertType$($target$$64$$, "boolean", $prefix$$10$$, 1, !1);
  };
  $goog$exportPath_$$("Assert.assertBoolean", $oj$$.$Assert$.$assertBoolean$, $oj$$);
  $oj$$.$Assert$.$assertNumber$ = function $$oj$$$$Assert$$$assertNumber$$($target$$65$$, $prefix$$11$$) {
    $oj$$.$Assert$.$DEBUG$ && $oj$$.$Assert$.$assertType$($target$$65$$, "number", $prefix$$11$$, 1, !1);
  };
  $goog$exportPath_$$("Assert.assertNumber", $oj$$.$Assert$.$assertNumber$, $oj$$);
  $oj$$.$Assert$.$assertNumberOrNull$ = function $$oj$$$$Assert$$$assertNumberOrNull$$($target$$66$$, $prefix$$12$$) {
    $oj$$.$Assert$.$DEBUG$ && $oj$$.$Assert$.$assertType$($target$$66$$, "number", $prefix$$12$$, 1, !0);
  };
  $goog$exportPath_$$("Assert.assertNumberOrNull", $oj$$.$Assert$.$assertNumberOrNull$, $oj$$);
  $oj$$.$Assert$.$assertArray$ = function $$oj$$$$Assert$$$assertArray$$($target$$67$$, $message$$21$$) {
    $oj$$.$Assert$.$DEBUG$ && !Array.isArray($target$$67$$) && (void 0 === $message$$21$$ && ($message$$21$$ = $target$$67$$ + " is not an array"), $oj$$.$Assert$.$assertionFailed$($message$$21$$, 1));
  };
  $goog$exportPath_$$("Assert.assertArray", $oj$$.$Assert$.$assertArray$, $oj$$);
  $oj$$.$Assert$.$assertArrayOrNull$ = function $$oj$$$$Assert$$$assertArrayOrNull$$($target$$68$$, $message$$22$$) {
    $oj$$.$Assert$.$DEBUG$ && null !== $target$$68$$ && !Array.isArray($target$$68$$) && (void 0 === $message$$22$$ && ($message$$22$$ = $target$$68$$ + " is not an array"), $oj$$.$Assert$.$assertionFailed$($message$$22$$, 1));
  };
  $goog$exportPath_$$("Assert.assertArrayOrNull", $oj$$.$Assert$.$assertArrayOrNull$, $oj$$);
  $oj$$.$Assert$.$assertNonNumeric$ = function $$oj$$$$Assert$$$assertNonNumeric$$($target$$69$$, $message$$23$$) {
    $oj$$.$Assert$.$DEBUG$ && !isNaN($target$$69$$) && (void 0 === $message$$23$$ && ($message$$23$$ = $target$$69$$ + " is convertible to a number"), $oj$$.$Assert$.$assertionFailed$($message$$23$$, 1));
  };
  $goog$exportPath_$$("Assert.assertNonNumeric", $oj$$.$Assert$.$assertNonNumeric$, $oj$$);
  $oj$$.$Assert$.$assertNumeric$ = function $$oj$$$$Assert$$$assertNumeric$$($target$$70$$, $message$$24$$) {
    $oj$$.$Assert$.$DEBUG$ && isNaN($target$$70$$) && (void 0 === $message$$24$$ && ($message$$24$$ = $target$$70$$ + " is not convertible to a number"), $oj$$.$Assert$.$assertionFailed$($message$$24$$, 1));
  };
  $goog$exportPath_$$("Assert.assertNumeric", $oj$$.$Assert$.$assertNumeric$, $oj$$);
  $oj$$.$Assert$.$assertInSet$ = function $$oj$$$$Assert$$$assertInSet$$($value$$54$$, $set$$1$$, $keyString_message$$25$$) {
    var $k$$;
    if (null === $value$$54$$ || void 0 === $set$$1$$[$value$$54$$.toString()]) {
      if (void 0 === $keyString_message$$25$$) {
        $keyString_message$$25$$ = " is not in set: {";
        for ($k$$ in $set$$1$$) {
          $set$$1$$.hasOwnProperty($k$$) && ($keyString_message$$25$$ += $k$$, $keyString_message$$25$$ += ",");
        }
        $keyString_message$$25$$ = $value$$54$$ + ($keyString_message$$25$$ + "}");
      }
      $oj$$.$Assert$.$assertionFailed$($keyString_message$$25$$, 1);
    }
  };
  $goog$exportPath_$$("Assert.assertInSet", $oj$$.$Assert$.$assertInSet$, $oj$$);
  $oj$$.$Assert$.$assertionFailed$ = function $$oj$$$$Assert$$$assertionFailed$$($error$$2_message$$26_stackTrace_stackTraceString$$, $skipLevel$$, $reason$$3$$) {
    $skipLevel$$ || ($skipLevel$$ = 0);
    var $errorMessage$$1$$ = "Assertion";
    $reason$$3$$ && ($errorMessage$$1$$ += " (" + $reason$$3$$ + ")");
    $errorMessage$$1$$ += " failed: ";
    void 0 !== $error$$2_message$$26_stackTrace_stackTraceString$$ && ($errorMessage$$1$$ += $error$$2_message$$26_stackTrace_stackTraceString$$);
    $error$$2_message$$26_stackTrace_stackTraceString$$ = $oj$$.$Assert$.$_getStackTrace$($skipLevel$$ + 1);
    $error$$2_message$$26_stackTrace_stackTraceString$$ = $oj$$.$Assert$.$_getStackString$($error$$2_message$$26_stackTrace_stackTraceString$$);
    $errorMessage$$1$$ += "\nStackTrace:\n" + $error$$2_message$$26_stackTrace_stackTraceString$$;
    $error$$2_message$$26_stackTrace_stackTraceString$$ = Error($errorMessage$$1$$);
    window.alert($errorMessage$$1$$);
    throw $error$$2_message$$26_stackTrace_stackTraceString$$;
  };
  $goog$exportPath_$$("Assert.assertionFailed", $oj$$.$Assert$.$assertionFailed$, $oj$$);
  $oj$$.$Assert$.getFunctionName = function $$oj$$$$Assert$$getFunctionName$($func$$5$$) {
    var $funcName_functionString$$ = $func$$5$$[$oj$$.$Assert$.$FUNC_NAME_PROPERTY$], $startFuncParamsIndex$$, $startFuncNameIndex$$;
    void 0 === $funcName_functionString$$ && ($funcName_functionString$$ = $func$$5$$.toString(), $startFuncParamsIndex$$ = $funcName_functionString$$.indexOf("("), $startFuncNameIndex$$ = $funcName_functionString$$.lastIndexOf(" ", $startFuncParamsIndex$$), $funcName_functionString$$ = $funcName_functionString$$.substring($startFuncNameIndex$$ + 1, $startFuncParamsIndex$$), $funcName_functionString$$.length || ($funcName_functionString$$ = null), $func$$5$$[$oj$$.$Assert$.$FUNC_NAME_PROPERTY$] = 
    $funcName_functionString$$);
    return $funcName_functionString$$;
  };
  $goog$exportPath_$$("Assert.getFunctionName", $oj$$.$Assert$.getFunctionName, $oj$$);
  $oj$$.$Assert$.$getStackString$ = function $$oj$$$$Assert$$$getStackString$$() {
    return $oj$$.$Assert$.$_getStackString$($oj$$.$Assert$.$_getStackTrace$(1));
  };
  $goog$exportPath_$$("Assert.getStackString", $oj$$.$Assert$.$getStackString$, $oj$$);
  $oj$$.$Assert$.$_getStackTrace$ = function $$oj$$$$Assert$$$_getStackTrace$$($skipLevel$$1$$) {
    void 0 === $skipLevel$$1$$ && ($skipLevel$$1$$ = 0);
    $oj$$.$Assert$.assert(0 <= $skipLevel$$1$$);
    var $stackTrace$$1$$ = [], $currCaller$$;
    try {
      for ($currCaller$$ = $oj$$.$Assert$.$_getStackTrace$.caller;$currCaller$$ && $stackTrace$$1$$.length < $oj$$.$Assert$.$_MAX_STACK_DEPTH_LIMIT$;) {
        $skipLevel$$1$$ ? $skipLevel$$1$$ -= 1 : $stackTrace$$1$$.push($currCaller$$), $currCaller$$ = $currCaller$$.caller;
      }
    } catch ($e$$12$$) {
    }
    return $stackTrace$$1$$;
  };
  $oj$$.$Assert$.$_getFuncParams$ = function $$oj$$$$Assert$$$_getFuncParams$$($func$$6$$) {
    var $currFunctionString_funcParams$$ = $func$$6$$[$oj$$.$Assert$.$_PARAMS_NAME_PROPERTY$], $startFuncParams$$, $endFuncParams$$;
    void 0 === $currFunctionString_funcParams$$ && ($currFunctionString_funcParams$$ = $func$$6$$.toString(), $startFuncParams$$ = $currFunctionString_funcParams$$.indexOf("("), $endFuncParams$$ = $currFunctionString_funcParams$$.indexOf(")", $startFuncParams$$ + 1), $currFunctionString_funcParams$$ = $currFunctionString_funcParams$$.substring($startFuncParams$$, $endFuncParams$$ + 1), $currFunctionString_funcParams$$ = $currFunctionString_funcParams$$.replace(/\s+/g, ""), $currFunctionString_funcParams$$.length || 
    ($currFunctionString_funcParams$$ = null), $func$$6$$[$oj$$.$Assert$.$_PARAMS_NAME_PROPERTY$] = $currFunctionString_funcParams$$);
    return $currFunctionString_funcParams$$;
  };
  $oj$$.$Assert$.$_getStackString$ = function $$oj$$$$Assert$$$_getStackString$$($stackTrace$$2$$) {
    if (!$stackTrace$$2$$) {
      return "";
    }
    var $functionCount$$ = $stackTrace$$2$$.length, $stackStrings$$ = [], $stackIndex$$, $argsArray_currFunction$$, $funcName$$1$$, $className$$5_funcParams$$1$$, $functionArgs_stackStringArray$$, $argCount$$, $argIndex$$, $argFuncParams_currArg$$, $argFuncName$$;
    for ($stackIndex$$ = 0;$stackIndex$$ < $functionCount$$;$stackIndex$$ += 1) {
      $argsArray_currFunction$$ = $stackTrace$$2$$[$stackIndex$$];
      ($funcName$$1$$ = $oj$$.$Assert$.getFunctionName($argsArray_currFunction$$)) || ($funcName$$1$$ = "anonymous");
      ($className$$5_funcParams$$1$$ = $argsArray_currFunction$$[$oj$$.$Assert$.$CLASS_NAME_PROPERTY$]) && ($funcName$$1$$ = $className$$5_funcParams$$1$$ + "." + $funcName$$1$$);
      $className$$5_funcParams$$1$$ = $oj$$.$Assert$.$_getFuncParams$($argsArray_currFunction$$);
      $functionArgs_stackStringArray$$ = $argsArray_currFunction$$.arguments;
      $argCount$$ = $functionArgs_stackStringArray$$.length;
      $argsArray_currFunction$$ = null;
      if ($argCount$$) {
        for ($argsArray_currFunction$$ = [], $argIndex$$ = 0;$argIndex$$ < $argCount$$;$argIndex$$ += 1) {
          $argFuncParams_currArg$$ = $functionArgs_stackStringArray$$[$argIndex$$], "function" === typeof $argFuncParams_currArg$$ && (($argFuncName$$ = $oj$$.$Assert$.getFunctionName($argFuncParams_currArg$$)) || ($argFuncName$$ = "anonymous"), $argFuncParams_currArg$$ = $oj$$.$Assert$.$_getFuncParams$($argFuncParams_currArg$$), $argFuncParams_currArg$$ = "function " + $argFuncName$$ + $argFuncParams_currArg$$), $argsArray_currFunction$$[$argIndex$$] = $argFuncParams_currArg$$;
        }
      }
      $functionArgs_stackStringArray$$ = [];
      $functionArgs_stackStringArray$$[0] = $funcName$$1$$;
      $functionArgs_stackStringArray$$[1] = $className$$5_funcParams$$1$$;
      $argsArray_currFunction$$ && ($functionArgs_stackStringArray$$[2] = "\n", $functionArgs_stackStringArray$$[3] = "[", $functionArgs_stackStringArray$$[4] = $oj$$.$Assert$.$_safeJoin$($argsArray_currFunction$$), $functionArgs_stackStringArray$$[5] = "]");
      $stackStrings$$[$stackIndex$$] = $functionArgs_stackStringArray$$.join("");
    }
    return $stackStrings$$.join("\n");
  };
  $oj$$.$Assert$.$_safeJoin$ = function $$oj$$$$Assert$$$_safeJoin$$($arr$$16$$) {
    var $length$$11$$ = $arr$$16$$.length, $joinedString$$ = "", $i$$9$$, $ele_str$$10$$;
    for ($i$$9$$ = 0;$i$$9$$ < $length$$11$$;$i$$9$$ += 1) {
      $ele_str$$10$$ = ($ele_str$$10$$ = $arr$$16$$[$i$$9$$]) ? $ele_str$$10$$.toString ? $ele_str$$10$$.toString() : "Unknown" : "(empty)", $joinedString$$ += $ele_str$$10$$, $i$$9$$ < $length$$11$$ - 1 && ($joinedString$$ += ",");
    }
    return $joinedString$$;
  };
  $oj$$.$Assert$.$_PARAMS_NAME_PROPERTY$ = "_funcParams";
  $oj$$.$Config$ = {};
  $goog$exportPath_$$("Config", $oj$$.$Config$, $oj$$);
  $oj$$.$Config$.$getLocale$ = function $$oj$$$$Config$$$getLocale$$() {
    var $loc_rl$$;
    if ($oj$$.$__isAmdLoaderPresent$()) {
      return $oj$$.$Assert$.assert(void 0 !== $ojt$$1$$, "ojtranslations module must be defined"), $loc_rl$$ = $ojt$$1$$._ojLocale_, "root" == $loc_rl$$ ? "en" : $loc_rl$$;
    }
    $loc_rl$$ = $oj$$.$Config$.$_locale$;
    null == $loc_rl$$ && (($loc_rl$$ = document.documentElement.lang) || ($loc_rl$$ = void 0 === navigator ? "en" : (navigator.language || navigator.userLanguage || "en").toLowerCase()), $oj$$.$Config$.$_locale$ = $loc_rl$$ = $loc_rl$$.toLowerCase());
    return $loc_rl$$;
  };
  $goog$exportPath_$$("Config.getLocale", $oj$$.$Config$.$getLocale$, $oj$$);
  $oj$$.$Config$.$setLocale$ = function $$oj$$$$Config$$$setLocale$$($locale$$, $callback$$56$$) {
    if ($oj$$.$__isAmdLoaderPresent$()) {
      var $requestedBundles$$ = ["ojL10n!ojtranslations/nls/" + $locale$$ + "/ojtranslations"];
      $oj$$.$LocaleData$ && $requestedBundles$$.push("ojL10n!ojtranslations/nls/" + $locale$$ + "/localeElements");
      $require$$2$$($requestedBundles$$, function($translations$$, $localeElements$$) {
        $ojt$$1$$ = $translations$$;
        $localeElements$$ && $oj$$.$LocaleData$.$__updateBundle$($localeElements$$);
        $callback$$56$$ && $callback$$56$$();
      });
    } else {
      $oj$$.$Config$.$_locale$ = $locale$$, $callback$$56$$ && $callback$$56$$();
    }
  };
  $goog$exportPath_$$("Config.setLocale", $oj$$.$Config$.$setLocale$, $oj$$);
  $oj$$.$Config$.$getResourceUrl$ = function $$oj$$$$Config$$$getResourceUrl$$($relativePath$$) {
    var $base$$2_fullUrlExp_modulePath$$ = /^\/|:/;
    return null == $relativePath$$ || $base$$2_fullUrlExp_modulePath$$.test($relativePath$$) ? $relativePath$$ : ($base$$2_fullUrlExp_modulePath$$ = $oj$$.$Config$.$_resourceBaseUrl$) ? $base$$2_fullUrlExp_modulePath$$ + ("/" == $base$$2_fullUrlExp_modulePath$$.charAt($base$$2_fullUrlExp_modulePath$$.length - 1) ? "" : "/") + $relativePath$$ : $oj$$.$__isAmdLoaderPresent$() ? ($base$$2_fullUrlExp_modulePath$$ = $require$$2$$.toUrl("ojs/_foo_"), $base$$2_fullUrlExp_modulePath$$.replace(/[^\/]*$/, 
    "../" + $relativePath$$)) : $relativePath$$;
  };
  $goog$exportPath_$$("Config.getResourceUrl", $oj$$.$Config$.$getResourceUrl$, $oj$$);
  $oj$$.$Config$.$setResourceBaseUrl$ = function $$oj$$$$Config$$$setResourceBaseUrl$$($baseUrl$$) {
    $oj$$.$Config$.$_resourceBaseUrl$ = $baseUrl$$;
  };
  $goog$exportPath_$$("Config.setResourceBaseUrl", $oj$$.$Config$.$setResourceBaseUrl$, $oj$$);
  $oj$$.$Config$.$setAutomationMode$ = function $$oj$$$$Config$$$setAutomationMode$$($mode$$10$$) {
    $oj$$.$Config$.$_automationMode$ = $mode$$10$$;
  };
  $goog$exportPath_$$("Config.setAutomationMode", $oj$$.$Config$.$setAutomationMode$, $oj$$);
  $oj$$.$Config$.$getAutomationMode$ = function $$oj$$$$Config$$$getAutomationMode$$() {
    return $oj$$.$Config$.$_automationMode$;
  };
  $goog$exportPath_$$("Config.getAutomationMode", $oj$$.$Config$.$getAutomationMode$, $oj$$);
  $oj$$.$StringUtils$ = {};
  $goog$exportPath_$$("StringUtils", $oj$$.$StringUtils$, $oj$$);
  $oj$$.$StringUtils$.$_TRIM_ALL_RE$ = /^\s*|\s*$/g;
  $oj$$.$StringUtils$.isEmpty = function $$oj$$$$StringUtils$$isEmpty$($value$$55$$) {
    return null === $value$$55$$ ? !0 : 0 === $oj$$.$StringUtils$.trim($value$$55$$).length;
  };
  $goog$exportPath_$$("StringUtils.isEmpty", $oj$$.$StringUtils$.isEmpty, $oj$$);
  $oj$$.$StringUtils$.$isEmptyOrUndefined$ = function $$oj$$$$StringUtils$$$isEmptyOrUndefined$$($value$$56$$) {
    return void 0 === $value$$56$$ || $oj$$.$StringUtils$.isEmpty($value$$56$$) ? !0 : !1;
  };
  $goog$exportPath_$$("StringUtils.isEmptyOrUndefined", $oj$$.$StringUtils$.$isEmptyOrUndefined$, $oj$$);
  $oj$$.$StringUtils$.$isString$ = function $$oj$$$$StringUtils$$$isString$$($obj$$45$$) {
    return null !== $obj$$45$$ && ("string" === typeof $obj$$45$$ || $obj$$45$$ instanceof String);
  };
  $goog$exportPath_$$("StringUtils.isString", $oj$$.$StringUtils$.$isString$, $oj$$);
  $oj$$.$StringUtils$.trim = function $$oj$$$$StringUtils$$trim$($data$$32$$) {
    return $oj$$.$StringUtils$.$isString$($data$$32$$) ? $data$$32$$.replace($oj$$.$StringUtils$.$_TRIM_ALL_RE$, "") : $data$$32$$;
  };
  $goog$exportPath_$$("StringUtils.trim", $oj$$.$StringUtils$.trim, $oj$$);
  $oj$$.$CollectionUtils$ = {};
  $goog$exportPath_$$("CollectionUtils", $oj$$.$CollectionUtils$, $oj$$);
  $oj$$.$CollectionUtils$.$copyInto$ = function $$oj$$$$CollectionUtils$$$copyInto$$($target$$71$$, $source$$4$$, $keyConverter$$, $recurse$$, $maxRecursionDepth$$) {
    return $oj$$.$CollectionUtils$.$_copyIntoImpl$($target$$71$$, $source$$4$$, $keyConverter$$, $recurse$$, $maxRecursionDepth$$, 0);
  };
  $goog$exportPath_$$("CollectionUtils.copyInto", $oj$$.$CollectionUtils$.$copyInto$, $oj$$);
  $oj$$.$CollectionUtils$.isPlainObject = function $$oj$$$$CollectionUtils$$isPlainObject$($obj$$46$$) {
    if ("object" === typeof $obj$$46$$) {
      try {
        if ($obj$$46$$.constructor && $obj$$46$$.constructor.prototype.hasOwnProperty("isPrototypeOf")) {
          return!0;
        }
      } catch ($e$$13$$) {
      }
    }
    return!1;
  };
  $goog$exportPath_$$("CollectionUtils.isPlainObject", $oj$$.$CollectionUtils$.isPlainObject, $oj$$);
  $oj$$.$CollectionUtils$.$_copyIntoImpl$ = function $$oj$$$$CollectionUtils$$$_copyIntoImpl$$($target$$72$$, $source$$5$$, $keyConverter$$1$$, $recurse$$1$$, $maxRecursionDepth$$1$$, $currentLevel$$) {
    var $k$$1_sourceVal$$, $targetKey$$, $keys$$;
    if ($target$$72$$ && $source$$5$$ && $target$$72$$ !== $source$$5$$) {
      $keys$$ = Object.keys($source$$5$$);
      for (var $i$$10$$ = 0;$i$$10$$ < $keys$$.length;$i$$10$$++) {
        $k$$1_sourceVal$$ = $keys$$[$i$$10$$];
        $targetKey$$ = $keyConverter$$1$$ ? $keyConverter$$1$$($k$$1_sourceVal$$) : $k$$1_sourceVal$$;
        $k$$1_sourceVal$$ = $source$$5$$[$k$$1_sourceVal$$];
        var $recursed$$ = !1;
        if ($recurse$$1$$ && $currentLevel$$ < $maxRecursionDepth$$1$$) {
          var $targetVal$$ = $target$$72$$[$targetKey$$];
          $oj$$.$CollectionUtils$.isPlainObject($targetVal$$) && $oj$$.$CollectionUtils$.isPlainObject($k$$1_sourceVal$$) && ($recursed$$ = !0, $oj$$.$CollectionUtils$.$_copyIntoImpl$($targetVal$$, $k$$1_sourceVal$$, $keyConverter$$1$$, !0, $maxRecursionDepth$$1$$, $currentLevel$$ + 1));
        }
        $recursed$$ || ($target$$72$$[$targetKey$$] = $k$$1_sourceVal$$);
      }
    }
    return $target$$72$$;
  };
  $oj$$.$Translations$ = {};
  $goog$exportPath_$$("Translations", $oj$$.$Translations$, $oj$$);
  $oj$$.$Translations$.$setBundle$ = function $$oj$$$$Translations$$$setBundle$$($bundle$$) {
    $oj$$.$Translations$.$_bundle$ = $bundle$$;
  };
  $goog$exportPath_$$("Translations.setBundle", $oj$$.$Translations$.$setBundle$, $oj$$);
  $oj$$.$Translations$.$getResource$ = function $$oj$$$$Translations$$$getResource$$($key$$22$$) {
    return $oj$$.$Translations$.$_getResourceString$($key$$22$$);
  };
  $goog$exportPath_$$("Translations.getResource", $oj$$.$Translations$.$getResource$, $oj$$);
  $oj$$.$Translations$.$applyParameters$ = function $$oj$$$$Translations$$$applyParameters$$($pattern$$1$$, $parameters$$) {
    return null == $pattern$$1$$ ? null : $oj$$.$Translations$.$_format$($pattern$$1$$, $parameters$$);
  };
  $goog$exportPath_$$("Translations.applyParameters", $oj$$.$Translations$.$applyParameters$, $oj$$);
  $oj$$.$Translations$.$getTranslatedString$ = function $$oj$$$$Translations$$$getTranslatedString$$($key$$23$$, $var_args$$45$$) {
    var $val$$12$$ = $oj$$.$Translations$.$_getResourceString$($key$$23$$);
    if (null == $val$$12$$) {
      return $key$$23$$;
    }
    var $params$$1$$ = {};
    2 < arguments.length ? $params$$1$$ = Array.prototype.slice.call(arguments, 1) : 2 == arguments.length && ($params$$1$$ = arguments[1], "object" === typeof $params$$1$$ || $params$$1$$ instanceof Array || ($params$$1$$ = [$params$$1$$]));
    return $oj$$.$Translations$.$applyParameters$($val$$12$$, $params$$1$$);
  };
  $goog$exportPath_$$("Translations.getTranslatedString", $oj$$.$Translations$.$getTranslatedString$, $oj$$);
  $oj$$.$Translations$.$getComponentTranslations$ = function $$oj$$$$Translations$$$getComponentTranslations$$($bundle$$1_componentName$$) {
    $bundle$$1_componentName$$ = $oj$$.$Translations$.$_getBundle$()[$bundle$$1_componentName$$];
    var $translations$$1$$, $k$$2$$;
    if (null == $bundle$$1_componentName$$) {
      return{};
    }
    $translations$$1$$ = {};
    for ($k$$2$$ in $bundle$$1_componentName$$) {
      $bundle$$1_componentName$$.hasOwnProperty($k$$2$$) && ($translations$$1$$[$k$$2$$] = $bundle$$1_componentName$$[$k$$2$$]);
    }
    return $translations$$1$$;
  };
  $goog$exportPath_$$("Translations.getComponentTranslations", $oj$$.$Translations$.$getComponentTranslations$, $oj$$);
  $oj$$.$Translations$.$_getResourceString$ = function $$oj$$$$Translations$$$_getResourceString$$($key$$24_keys$$1$$) {
    $key$$24_keys$$1$$ = $key$$24_keys$$1$$ ? $key$$24_keys$$1$$.split(".") : [];
    var $bundle$$2$$ = $oj$$.$Translations$.$_getBundle$(), $iteration$$ = $key$$24_keys$$1$$.length, $index$$46$$ = 0, $subkey$$ = $key$$24_keys$$1$$[$index$$46$$];
    for ($oj$$.$Assert$.$assertObject$($bundle$$2$$);0 < --$iteration$$ && $bundle$$2$$;) {
      $bundle$$2$$ = $bundle$$2$$[$subkey$$], $index$$46$$++, $subkey$$ = $key$$24_keys$$1$$[$index$$46$$];
    }
    return $bundle$$2$$ ? $bundle$$2$$[$subkey$$] || null : null;
  };
  $oj$$.$Translations$.$_format$ = function $$oj$$$$Translations$$$_format$$($formatString$$1$$, $parameters$$1$$) {
    var $formatLength$$ = $formatString$$1$$.length, $buffer$$8$$ = [], $token$$4$$ = null, $escaped$$1$$ = !1, $isToken_val$$13$$ = !1, $isGroup$$ = !1, $isExcluded$$ = !1, $tokenTerminated$$, $i$$11$$;
    for ($i$$11$$ = 0;$i$$11$$ < $formatLength$$;$i$$11$$++) {
      var $ch$$ = $formatString$$1$$.charAt($i$$11$$), $accumulate$$ = !1;
      if ($escaped$$1$$) {
        $accumulate$$ = !0, $escaped$$1$$ = !1;
      } else {
        switch($ch$$) {
          case "$":
            $escaped$$1$$ = !0;
            break;
          case "{":
            $isExcluded$$ || ($isToken_val$$13$$ || ($tokenTerminated$$ = !1, $token$$4$$ = []), $isToken_val$$13$$ = !0);
            break;
          case "}":
            $isToken_val$$13$$ && 0 < $token$$4$$.length && ($isToken_val$$13$$ = $parameters$$1$$[$token$$4$$.join("")], $buffer$$8$$.push(void 0 === $isToken_val$$13$$ ? "null" : $isToken_val$$13$$));
            $isToken_val$$13$$ = !1;
            break;
          case "[":
            $isToken_val$$13$$ || ($isGroup$$ ? $isExcluded$$ = !0 : $isGroup$$ = !0);
            break;
          case "]":
            $isExcluded$$ ? $isExcluded$$ = !1 : $isGroup$$ = !1;
            break;
          default:
            $accumulate$$ = !0;
        }
      }
      $accumulate$$ && ($isToken_val$$13$$ ? "," == $ch$$ || " " == $ch$$ ? $tokenTerminated$$ = !0 : $tokenTerminated$$ || $token$$4$$.push($ch$$) : $isExcluded$$ || $buffer$$8$$.push($ch$$));
    }
    return $buffer$$8$$.join("");
  };
  $oj$$.$Translations$.$_getBundle$ = function $$oj$$$$Translations$$$_getBundle$$() {
    var $b$$28$$ = $oj$$.$Translations$.$_bundle$;
    return $b$$28$$ ? $b$$28$$ : $oj$$.$__isAmdLoaderPresent$() ? ($oj$$.$Assert$.assert(void 0 !== $ojt$$1$$, "ojtranslations module must be defined"), $ojt$$1$$) : {};
  };
  return $oj$$;
});
