define(["ojs/ojcore", "knockout", "ojs/ojmodel"], function($oj$$35$$, $ko$$4$$) {
  $oj$$35$$.$KnockoutUtils$ = function $$oj$$35$$$$KnockoutUtils$$() {
  };
  $goog$exportPath_$$("KnockoutUtils", $oj$$35$$.$KnockoutUtils$, $oj$$35$$);
  $oj$$35$$.$KnockoutUtils$.$internalObjectProperty$ = "oj._internalObj";
  $oj$$35$$.$KnockoutUtils$.$underUpdateProp$ = "oj._underUpdate";
  $oj$$35$$.$KnockoutUtils$.$collUpdatingProp$ = "oj.collectionUpdating";
  $oj$$35$$.$KnockoutUtils$.map = function $$oj$$35$$$$KnockoutUtils$$map$($m$$27$$, $callback$$105$$, $array$$15_data$$171_updateObservable_updateObservableArrayRemove$$) {
    function $_makeUpdateModel$$($argProp$$) {
      return function($value$$224$$) {
        $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] || $m$$27$$.set($argProp$$, $value$$224$$);
      };
    }
    var $koObject$$, $i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$, $converted_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$;
    if ($m$$27$$ instanceof $oj$$35$$.$Collection$) {
      $koObject$$ = $array$$15_data$$171_updateObservable_updateObservableArrayRemove$$ ? $ko$$4$$.observableArray() : [];
      $oj$$35$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$27$$);
      for ($i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$ = 0;$i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$ < $m$$27$$.$_getLength$();$i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$ += 1) {
        $koObject$$.push($oj$$35$$.$KnockoutUtils$.map($m$$27$$.$_atInternal$($i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$, null, !0, !1), $callback$$105$$));
      }
      $i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$ = function $$i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$$($changes$$5$$) {
        var $i$$304$$;
        try {
          if (!$koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$]) {
            $koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] = !0;
            for ($i$$304$$ = 0;$i$$304$$ < $changes$$5$$.length;$i$$304$$++) {
              var $index$$194$$ = $changes$$5$$[$i$$304$$].index, $model$$80$$ = $oj$$35$$.$KnockoutUtils$.$_getModel$($changes$$5$$[$i$$304$$].value), $status$$13$$ = $changes$$5$$[$i$$304$$].status;
              "added" === $status$$13$$ ? $index$$194$$ >= $m$$27$$.length - 1 ? $m$$27$$.add($model$$80$$) : $m$$27$$.add($model$$80$$, {at:$index$$194$$}) : "deleted" === $status$$13$$ && $m$$27$$.$_removeInternal$($model$$80$$, $index$$194$$);
            }
            $m$$27$$.comparator && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$88$$, $b$$54$$) {
              return $oj$$35$$.$KnockoutUtils$.$_callSort$($a$$88$$, $b$$54$$, $m$$27$$.comparator, $m$$27$$, this);
            }), $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1);
          }
        } catch ($e$$132$$) {
          throw $e$$132$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] = !1;
        }
      };
      $array$$15_data$$171_updateObservable_updateObservableArrayRemove$$ && $koObject$$.subscribe && $koObject$$.subscribe($i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$, null, "arrayChange");
      $array$$15_data$$171_updateObservable_updateObservableArrayRemove$$ = function $$array$$15_data$$171_updateObservable_updateObservableArrayRemove$$$($model$$81$$, $collection$$58$$, $options$$324$$) {
        var $index$$195$$;
        try {
          !$koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$58$$ instanceof $oj$$35$$.$Collection$ && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$195$$ = $options$$324$$.index, $koObject$$.splice($index$$195$$, 1));
        } catch ($e$$133$$) {
          throw $e$$133$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$ = function $$i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$$($model$$82$$, $collection$$59$$, $options$$325$$) {
        var $index$$196$$, $newObservable$$;
        try {
          if (!$koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$59$$ instanceof $oj$$35$$.$Collection$ && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$196$$ = $collection$$59$$.$_localIndexOf$($model$$82$$), void 0 !== $index$$196$$ && -1 < $index$$196$$)) {
            if ($newObservable$$ = $oj$$35$$.$KnockoutUtils$.map($model$$82$$, $callback$$105$$), $options$$325$$.fillIn) {
              for (var $i$$305$$ = Array.isArray($koObject$$) ? $koObject$$.length : $koObject$$().length;$i$$305$$ < $index$$196$$;$i$$305$$++) {
                $koObject$$.splice($i$$305$$, 0, $oj$$35$$.$KnockoutUtils$.map($collection$$59$$.$_atInternal$($i$$305$$, null, !0, !1), $callback$$105$$));
              }
              $koObject$$.splice($index$$196$$, 1, $newObservable$$);
            } else {
              $koObject$$.splice($index$$196$$, 0, $newObservable$$);
            }
          }
        } catch ($e$$134$$) {
          throw $e$$134$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $converted_updateObservableArrayReset$$ = function $$converted_updateObservableArrayReset$$$($collection$$60$$) {
        try {
          !$koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$60$$ instanceof $oj$$35$$.$Collection$ && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $ko$$4$$.isObservable($koObject$$) ? $koObject$$.removeAll() : $koObject$$ = []);
        } catch ($e$$135$$) {
          throw $e$$135$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $updateModel_updateObservableArraySort$$ = function $$updateModel_updateObservableArraySort$$$($collection$$61$$) {
        try {
          !$koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$61$$ instanceof $oj$$35$$.$Collection$ && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$89$$, $b$$55$$) {
            return $oj$$35$$.$KnockoutUtils$.$_callSort$($a$$89$$, $b$$55$$, $m$$27$$.comparator, $collection$$61$$, this);
          }));
        } catch ($e$$136$$) {
          throw $e$$136$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.ADD, $i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$, void 0, void 0, !0);
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.REMOVE, $array$$15_data$$171_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.RESET, $converted_updateObservableArrayReset$$, void 0, void 0, !0);
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.SORT, $updateModel_updateObservableArraySort$$, void 0, void 0, !0);
    } else {
      if (void 0 === $m$$27$$) {
        return;
      }
      $koObject$$ = {};
      $array$$15_data$$171_updateObservable_updateObservableArrayRemove$$ = $m$$27$$.attributes;
      $i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$ = null;
      for ($i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$ in $array$$15_data$$171_updateObservable_updateObservableArrayRemove$$) {
        $array$$15_data$$171_updateObservable_updateObservableArrayRemove$$.hasOwnProperty($i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$) && ($converted_updateObservableArrayReset$$ = $ko$$4$$.observable($m$$27$$.get($i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$)), $koObject$$[$i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$] = $converted_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$ = $_makeUpdateModel$$($i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$), 
        $updateModel_updateObservableArraySort$$.$_prop$ = $i$$303_prop$$81_updateCollection_updateObservableArrayAdd$$, $converted_updateObservableArrayReset$$.subscribe && $converted_updateObservableArrayReset$$.subscribe($updateModel_updateObservableArraySort$$));
      }
      $array$$15_data$$171_updateObservable_updateObservableArrayRemove$$ = function $$array$$15_data$$171_updateObservable_updateObservableArrayRemove$$$($model$$83$$) {
        var $attrs$$20$$, $prop$$82$$;
        try {
          for ($prop$$82$$ in $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $attrs$$20$$ = $model$$83$$.$changedAttributes$(), $attrs$$20$$) {
            if ($attrs$$20$$.hasOwnProperty($prop$$82$$)) {
              $koObject$$[$prop$$82$$]($model$$83$$.get($prop$$82$$));
            }
          }
        } catch ($e$$137$$) {
          throw $e$$137$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.CHANGE, $array$$15_data$$171_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $oj$$35$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$27$$);
      $callback$$105$$ && $callback$$105$$($koObject$$);
    }
    return $koObject$$;
  };
  $goog$exportPath_$$("KnockoutUtils.map", $oj$$35$$.$KnockoutUtils$.map, $oj$$35$$);
  $oj$$35$$.$KnockoutUtils$.$_getModels$ = function $$oj$$35$$$$KnockoutUtils$$$_getModels$$($arr$$24$$) {
    var $modelArray$$2$$ = [], $i$$306$$, $model$$84$$;
    for ($i$$306$$ = 0;$i$$306$$ < $arr$$24$$.length;$i$$306$$ += 1) {
      $model$$84$$ = $oj$$35$$.$KnockoutUtils$.$_getModel$($arr$$24$$[$i$$306$$]), $modelArray$$2$$.push($model$$84$$);
    }
    return $modelArray$$2$$;
  };
  $oj$$35$$.$KnockoutUtils$.$_getModel$ = function $$oj$$35$$$$KnockoutUtils$$$_getModel$$($val$$57$$) {
    return $val$$57$$ instanceof $oj$$35$$.$Model$ ? $val$$57$$ : $val$$57$$.hasOwnProperty($oj$$35$$.$KnockoutUtils$.$internalObjectProperty$) ? $val$$57$$[$oj$$35$$.$KnockoutUtils$.$internalObjectProperty$] : $val$$57$$;
  };
  $oj$$35$$.$KnockoutUtils$.$_callSort$ = function $$oj$$35$$$$KnockoutUtils$$$_callSort$$($a$$90$$, $b$$56$$, $comparator$$16$$, $collection$$62$$, $caller$$8$$) {
    return $oj$$35$$.$Collection$.$SortFunc$($oj$$35$$.$KnockoutUtils$.$_getModel$($a$$90$$), $oj$$35$$.$KnockoutUtils$.$_getModel$($b$$56$$), $comparator$$16$$, $collection$$62$$, $caller$$8$$);
  };
  $oj$$35$$.$KnockoutUtils$.$_storeOriginalObject$ = function $$oj$$35$$$$KnockoutUtils$$$_storeOriginalObject$$($object$$7$$, $value$$225$$) {
    Object.defineProperty($object$$7$$, $oj$$35$$.$KnockoutUtils$.$internalObjectProperty$, {value:$value$$225$$, enumerable:!1});
  };
});
