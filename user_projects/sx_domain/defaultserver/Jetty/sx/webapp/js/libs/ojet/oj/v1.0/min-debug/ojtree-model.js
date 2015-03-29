define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$30$$) {
  $oj$$30$$.$CollectionTreeDataSource$ = function $$oj$$30$$$$CollectionTreeDataSource$$($options$$305$$) {
    $options$$305$$ = $options$$305$$ || {};
    this.$rootCollection$ = $options$$305$$.root;
    this.$childCollectionCallback$ = $options$$305$$.childCollectionCallback;
    this.$parseMetadata$ = $options$$305$$.parseMetadata;
    this.$sortkey$ = null;
    this.$sortdir$ = "none";
    this.$cache$ = {};
    $oj$$30$$.$CollectionTreeDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionTreeDataSource", $oj$$30$$.$CollectionTreeDataSource$, $oj$$30$$);
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$parseMetadata$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$parseMetadata$$($model$$54$$) {
    return{key:$model$$54$$.idAttribute + "\x3d" + $model$$54$$.id};
  };
  $oj$$30$$.$Object$.$createSubclass$($oj$$30$$.$CollectionTreeDataSource$, $oj$$30$$.$TreeDataSource$, "oj.CollectionTreeDataSource");
  $oj$$30$$.$CollectionTreeDataSource$.prototype.Init = function $$oj$$30$$$$CollectionTreeDataSource$$$Init$() {
    $oj$$30$$.$CollectionTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.Init", {Init:$oj$$30$$.$CollectionTreeDataSource$.prototype.Init});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$getChildCount$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$getChildCount$$($parent$$30$$) {
    var $childColl$$ = this.$cache$[$parent$$30$$];
    if ($childColl$$ && 0 < $childColl$$.length) {
      return $childColl$$.length;
    }
    this.$getChildCollection$($parent$$30$$, {success:function($coll$$3$$) {
      return $coll$$3$$.length;
    }});
    return-1;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$getChildCount$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$getChildCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$getChildCollection$$($key$$105$$, $callbacks$$39$$) {
    this.$fetchChildren$($key$$105$$, null, {success:function($nodeSet$$33$$) {
      $callbacks$$39$$.success($nodeSet$$33$$.$collection$);
    }, error:$callbacks$$39$$.error});
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCollection", {$getChildCollection$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$getChildCollection$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$fetchChildren$$($parent$$31$$, $range$$22$$, $callbacks$$40$$) {
    $range$$22$$ = $range$$22$$ || {};
    var $start$$31$$ = $range$$22$$.start ? $range$$22$$.start : 0, $count$$33$$ = $range$$22$$.count ? $range$$22$$.count : -1;
    if (null === $parent$$31$$) {
      this.$FetchCollection$(null, $start$$31$$, $count$$33$$, $callbacks$$40$$, null);
    } else {
      var $self$$122$$ = this;
      this.$_getModelForId$(this.$rootCollection$, $parent$$31$$, 0).then(function($collection$$33_parentModel$$) {
        $collection$$33_parentModel$$ ? ($collection$$33_parentModel$$ = $self$$122$$.$GetChildCollection$($collection$$33_parentModel$$.$model$), $self$$122$$.$FetchCollection$($collection$$33_parentModel$$, $start$$31$$, $count$$33$$, $callbacks$$40$$, $parent$$31$$)) : $callbacks$$40$$ && $callbacks$$40$$.error && $callbacks$$40$$.error($parent$$31$$);
      });
    }
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$fetchChildren$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$ModelAdded$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$ModelAdded$$($event$$350_model$$55$$, $collection$$34$$, $options$$307$$) {
    var $index$$165$$ = 0;
    $options$$307$$ && $options$$307$$.at && ($index$$165$$ = $options$$307$$.at);
    $event$$350_model$$55$$ = this.$_createEvent$(this, "insert", $index$$165$$, this.$_getParentChain$($collection$$34$$), this.$_putModelInRowset$($event$$350_model$$55$$));
    this.handleEvent("change", $event$$350_model$$55$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$ModelRemoved$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$ModelRemoved$$($event$$351_model$$56$$, $collection$$35$$, $options$$308$$) {
    var $index$$166$$ = 0;
    $options$$308$$ && $options$$308$$.index && ($index$$166$$ = $options$$308$$.index);
    this.$_removeCollectionFromCache$($event$$351_model$$56$$);
    $event$$351_model$$56$$ = this.$_createEvent$(this, "delete", $index$$166$$, this.$_getParentChain$($collection$$35$$), null);
    this.handleEvent("change", $event$$351_model$$56$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$ModelUpdated$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$ModelUpdated$$($event$$352_model$$57$$) {
    var $collectionForModel$$ = this.$_getCollectionForModel$($event$$352_model$$57$$), $index$$167$$ = null, $parents$$3$$ = null;
    $collectionForModel$$ && ($index$$167$$ = $collectionForModel$$.index, $parents$$3$$ = this.$_getParentChain$($collectionForModel$$.$collection$));
    $event$$352_model$$57$$ = this.$_createEvent$(this, "update", $index$$167$$, $parents$$3$$, this.$_putModelInRowset$($event$$352_model$$57$$));
    this.handleEvent("change", $event$$352_model$$57$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$CollectionRefreshed$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$CollectionRefreshed$$($collection$$36_event$$353$$) {
    $collection$$36_event$$353$$ = this.$_createEvent$(this, "refresh", null, this.$_getParentChain$($collection$$36_event$$353$$), null);
    this.handleEvent("change", $collection$$36_event$$353$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_putModelInRowset$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_putModelInRowset$$($model$$58_rowset$$) {
    var $rows$$13$$ = [];
    $rows$$13$$.push($model$$58_rowset$$.attributes);
    var $options$$311$$ = {};
    $options$$311$$.idAttribute = $model$$58_rowset$$.idAttribute;
    $model$$58_rowset$$ = new $oj$$30$$.$ArrayRowSet$($rows$$13$$, $options$$311$$);
    $model$$58_rowset$$.fetch();
    return $model$$58_rowset$$;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getParentChain$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getParentChain$$($coll$$4_collection$$37$$) {
    var $parents$$4$$ = [], $parent$$32$$ = null;
    do {
      $parent$$32$$ = this.$_getParentOfCollection$($coll$$4_collection$$37$$), null !== $parent$$32$$ && ($parent$$32$$ !== $oj$$30$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ && $parents$$4$$.unshift($parent$$32$$), $coll$$4_collection$$37$$ = this.$_getCollectionOfKey$($parent$$32$$));
    } while (null != $parent$$32$$);
    return $parents$$4$$;
  };
  $oj$$30$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ = "%!@ROOT%#@!";
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getCacheKey$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getCacheKey$$($model$$59$$) {
    var $key$$106$$ = $model$$59$$ instanceof $oj$$30$$.$Model$ ? this.$parseMetadata$($model$$59$$).key : $model$$59$$;
    return $model$$59$$ ? $key$$106$$ : $oj$$30$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$__getParentsChildCollectionFromCache$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$__getParentsChildCollectionFromCache$$($model$$60$$) {
    return this.$cache$[this.$_getCacheKey$($model$$60$$)];
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_setCollectionInCache$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_setCollectionInCache$$($model$$61$$, $collection$$38$$) {
    $collection$$38$$.on($oj$$30$$.$Events$.$EventType$.ADD, this.$ModelAdded$, this);
    $collection$$38$$.on($oj$$30$$.$Events$.$EventType$.REMOVE, this.$ModelRemoved$, this);
    $collection$$38$$.on($oj$$30$$.$Events$.$EventType$.CHANGE, this.$ModelUpdated$, this);
    $collection$$38$$.on($oj$$30$$.$Events$.$EventType$.SYNC, this.$CollectionRefreshed$, this);
    this.$cache$[this.$_getCacheKey$($model$$61$$)] = $collection$$38$$;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_removeCollectionFromCache$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_removeCollectionFromCache$$($key$$107_model$$62$$) {
    $key$$107_model$$62$$ = this.$_getCacheKey$($key$$107_model$$62$$);
    for (var $prop$$76$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$76$$) && $prop$$76$$ === $key$$107_model$$62$$) {
        this.$cache$[$key$$107_model$$62$$].off(null, null, this);
        delete this.$cache$[$key$$107_model$$62$$];
        break;
      }
    }
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_keyInCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_keyInCollection$$($key$$108$$, $collection$$39$$) {
    for (var $count$$34$$ = $collection$$39$$.length, $i$$297$$ = 0;$i$$297$$ < $count$$34$$;$i$$297$$++) {
      var $currKey$$1$$ = this.$_getCacheKey$($collection$$39$$.at($i$$297$$));
      if ($key$$108$$ === $currKey$$1$$) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getCollectionForModel$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getCollectionForModel$$($model$$63$$) {
    for (var $prop$$77$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$77$$)) {
        for (var $collection$$40$$ = this.$cache$[$prop$$77$$], $i$$298$$ = 0;$i$$298$$ < $collection$$40$$.length;$i$$298$$++) {
          if ($collection$$40$$.at($i$$298$$) === $model$$63$$) {
            return{index:$i$$298$$, $collection$:$collection$$40$$};
          }
        }
      }
    }
    return null;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getCollectionOfKey$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getCollectionOfKey$$($key$$109$$) {
    for (var $prop$$78$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$78$$)) {
        var $collection$$41$$ = this.$cache$[$prop$$78$$];
        if (this.$_keyInCollection$($key$$109$$, $collection$$41$$)) {
          return $collection$$41$$;
        }
      }
    }
    return null;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getParentOfCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getParentOfCollection$$($collection$$42$$) {
    for (var $prop$$79$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$79$$) && this.$cache$[$prop$$79$$] === $collection$$42$$) {
        return $prop$$79$$;
      }
    }
    return null;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$GetChildCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$GetChildCollection$$($parentModel$$1$$) {
    var $cached$$ = !0, $collection$$43$$ = this.$__getParentsChildCollectionFromCache$($parentModel$$1$$);
    $collection$$43$$ || ($cached$$ = !1, $collection$$43$$ = this.$childCollectionCallback$(this.$rootCollection$, $parentModel$$1$$), null != $collection$$43$$ && (this.$_applySortToCollection$($collection$$43$$), this.$_setCollectionInCache$($parentModel$$1$$, $collection$$43$$)));
    return{$collection$:$collection$$43$$, $cached$:$cached$$};
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_createEvent$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_createEvent$$($source$$12$$, $operation$$6$$, $index$$168$$, $parent$$33$$, $data$$169$$) {
    return{source:$source$$12$$, operation:$operation$$6$$, index:$index$$168$$, parent:$parent$$33$$, data:$data$$169$$};
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$FetchCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$FetchCollection$$($collection$$44$$, $start$$32$$, $count$$35$$, $callbacks$$41$$, $parent$$34$$) {
    var $self$$123$$ = this;
    null === $collection$$44$$ && (($collection$$44$$ = this.$__getParentsChildCollectionFromCache$(null)) ? $collection$$44$$ = {$collection$:$collection$$44$$, $cached$:!0} : ($collection$$44$$ = {$collection$:$self$$123$$.$rootCollection$, $cached$:!1}, $self$$123$$.$_setCollectionInCache$(null, this.$rootCollection$)));
    $collection$$44$$ && $self$$123$$.$_fetch$($collection$$44$$, function($coll$$5$$) {
      $callbacks$$41$$.success && $callbacks$$41$$.success($self$$123$$.$_getNodeSet$($coll$$5$$, $parent$$34$$, $start$$32$$, $count$$35$$));
    }, $callbacks$$41$$.error);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getNodeSet$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getNodeSet$$($collection$$45$$, $parent$$35$$, $start$$33$$, $count$$36$$) {
    return new $oj$$30$$.$CollectionNodeSet$($parent$$35$$, $collection$$45$$, this, $start$$33$$, $count$$36$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_scanForKey$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_scanForKey$$($collection$$46$$, $key$$110$$) {
    var $self$$124$$ = this;
    return $oj$$30$$.$Object$.$__getPromise$(function($resolve$$59$$) {
      function $checkNext$$($index$$169$$, $collection$$47$$, $key$$111$$) {
        $index$$169$$ < $collection$$47$$.length ? $collection$$47$$.at($index$$169$$, {deferred:!0}).then(function($model$$64$$) {
          if ($model$$64$$) {
            var $parse$$5$$ = $self$$124$$.$parseMetadata$($model$$64$$);
            if ($key$$111$$ === $parse$$5$$.key) {
              $resolve$$59$$($model$$64$$);
              return;
            }
          }
          $index$$169$$++;
          $checkNext$$($index$$169$$, $collection$$47$$, $key$$111$$);
        }) : $resolve$$59$$(null);
      }
      $checkNext$$(0, $collection$$46$$, $key$$110$$);
    });
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getModelForId$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getModelForId$$($collection$$48$$, $key$$112$$, $depth$$19$$) {
    var $self$$125$$ = this;
    return $oj$$30$$.$Object$.$__getPromise$(function($resolve$$60$$) {
      $self$$125$$.$_scanForKey$($collection$$48$$, $key$$112$$).then(function($model$$65$$) {
        function $getNextCollection$$($index$$170$$, $tds$$) {
          if ($index$$170$$ < $max$$7$$) {
            var $childColl$$1$$ = $tds$$.$GetChildCollection$($collection$$48$$.at($index$$170$$));
            $childColl$$1$$.$collection$ ? $tds$$.$_fetch$($childColl$$1$$, function($fetchColl$$) {
              $tds$$.$_getModelForId$($fetchColl$$, $key$$112$$, $depth$$19$$ + 1).then(function($childModel$$) {
                $childModel$$ ? $resolve$$60$$($childModel$$) : ($index$$170$$++, $getNextCollection$$($index$$170$$, $tds$$));
              });
            }, null) : ($index$$170$$++, $getNextCollection$$($index$$170$$, $tds$$));
          } else {
            $resolve$$60$$(null);
          }
        }
        if ($model$$65$$) {
          $resolve$$60$$({$model$:$model$$65$$, depth:$depth$$19$$});
        } else {
          var $max$$7$$ = $collection$$48$$.length;
          $getNextCollection$$(0, $self$$125$$);
        }
      });
    });
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_fetch$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_fetch$$($collectionCacheObj$$, $success$$21$$, $error$$25$$) {
    $collectionCacheObj$$.$cached$ ? $success$$21$$($collectionCacheObj$$.$collection$) : (this.$sortkey$ && "none" !== this.$sortkey$ && ($collectionCacheObj$$.$collection$.$comparator$ = this.$sortkey$, $collectionCacheObj$$.$collection$.$sortDirection$ = this.$sortdir$), 0 < $collectionCacheObj$$.$collection$.length ? $success$$21$$($collectionCacheObj$$.$collection$) : $collectionCacheObj$$.$collection$.fetch({success:function($fetchColl$$1$$) {
      $success$$21$$($fetchColl$$1$$);
    }, error:$error$$25$$}));
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$fetchDescendants$$($parent$$36$$, $callbacks$$42$$) {
    var $self$$126$$ = this;
    null === $parent$$36$$ ? this.$FetchCollection$(null, 0, -1, {success:function($nodeSet$$34$$) {
      $nodeSet$$34$$.$FetchDescendants$({success:function() {
        $callbacks$$42$$.success && $callbacks$$42$$.success($nodeSet$$34$$);
      }});
    }}, null) : this.$_getModelForId$(this.$rootCollection$, $parent$$36$$, 0).then(function($collection$$49_parentModel$$2$$) {
      $collection$$49_parentModel$$2$$ && ($collection$$49_parentModel$$2$$ = $self$$126$$.$GetChildCollection$($collection$$49_parentModel$$2$$.$model$), $self$$126$$.$FetchCollection$($collection$$49_parentModel$$2$$, 0, -1, {success:function($nodeSet$$35$$) {
        $nodeSet$$35$$.$FetchDescendants$({success:function() {
          $callbacks$$42$$.success && $callbacks$$42$$.success($nodeSet$$35$$);
        }});
      }}, $parent$$36$$));
    });
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.sort = function $$oj$$30$$$$CollectionTreeDataSource$$$sort$($criteria$$14$$, $callbacks$$43$$) {
    var $key$$113$$ = $criteria$$14$$.key, $dir$$1$$ = $criteria$$14$$.direction, $needSort$$2$$ = !1;
    $key$$113$$ !== this.$sortkey$ && (this.$sortkey$ = $key$$113$$, $needSort$$2$$ = !0);
    $dir$$1$$ !== this.$sortdir$ && (this.$sortdir$ = $dir$$1$$, $needSort$$2$$ = !0);
    if ($needSort$$2$$) {
      "none" === this.$sortdir$ && (this.$cache$ = {});
      for (var $prop$$80$$ in this.$cache$) {
        this.$cache$.hasOwnProperty($prop$$80$$) && this.$_applySortToCollection$(this.$cache$[$prop$$80$$]);
      }
    }
    $callbacks$$43$$ && $callbacks$$43$$.success && $callbacks$$43$$.success();
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.sort", {sort:$oj$$30$$.$CollectionTreeDataSource$.prototype.sort});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_applySortToCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_applySortToCollection$$($collection$$51$$) {
    $collection$$51$$.comparator = this.$sortkey$;
    $collection$$51$$.sortDirection = "ascending" === this.$sortdir$ ? 1 : -1;
    $collection$$51$$.sort();
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$getSortCriteria$$() {
    return{key:this.$sortkey$, direction:this.$sortdir$};
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.move = function $$oj$$30$$$$CollectionTreeDataSource$$$move$() {
    $oj$$30$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.move", {move:$oj$$30$$.$CollectionTreeDataSource$.prototype.move});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$moveOK$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$moveOK$$() {
    return "invalid";
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$moveOK$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.getCapability = function $$oj$$30$$$$CollectionTreeDataSource$$$getCapability$($feature$$15$$) {
    return "sort" === $feature$$15$$ ? "default" : "move" === $feature$$15$$ ? "none" : "batchFetch" === $feature$$15$$ || "fetchDescendants" === $feature$$15$$ ? "disable" : null;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getCapability", {getCapability:$oj$$30$$.$CollectionTreeDataSource$.prototype.getCapability});
  $oj$$30$$.$CollectionNodeSet$ = function $$oj$$30$$$$CollectionNodeSet$$($parentKey$$11$$, $collection$$52$$, $treeDataSource$$2$$, $start$$34$$, $count$$37$$) {
    this.$parentKey$ = $parentKey$$11$$;
    this.$collection$ = $collection$$52$$;
    this.$childNodeSet$ = [];
    this.$treeDataSource$ = $treeDataSource$$2$$;
    this.start = $start$$34$$ < $collection$$52$$.length ? $start$$34$$ : $collection$$52$$.length - 1;
    this.count = -1 === $count$$37$$ ? $collection$$52$$.length : Math.min($collection$$52$$.length, $count$$37$$);
  };
  $goog$exportPath_$$("CollectionNodeSet", $oj$$30$$.$CollectionNodeSet$, $oj$$30$$);
  $oj$$30$$.$CollectionNodeSet$.prototype.$FetchDescendants$ = function $$oj$$30$$$$CollectionNodeSet$$$$FetchDescendants$$($callbacks$$45$$) {
    this.$_fetchDescendants$(this).then(function() {
      $callbacks$$45$$.success && $callbacks$$45$$.success();
    });
  };
  $oj$$30$$.$CollectionNodeSet$.prototype.$_fetchDescendants$ = function $$oj$$30$$$$CollectionNodeSet$$$$_fetchDescendants$$($nodeSet$$36$$) {
    return $oj$$30$$.$Object$.$__getPromise$(function($resolve$$61$$) {
      function $nextNode$$($index$$171$$) {
        $index$$171$$ < $count$$38$$ ? $nodeSet$$36$$.$FetchChildNodeSet$($index$$171$$, {success:function($childNodeSet$$1$$) {
          null !== $childNodeSet$$1$$ ? $nodeSet$$36$$.$_fetchDescendants$($childNodeSet$$1$$).then(function() {
            $nextNode$$($index$$171$$ + 1);
          }) : $nextNode$$($index$$171$$ + 1);
        }}) : $resolve$$61$$();
      }
      var $count$$38$$ = $nodeSet$$36$$.$getCount$();
      $nextNode$$(0);
    });
  };
  $oj$$30$$.$CollectionNodeSet$.prototype.$FetchChildNodeSet$ = function $$oj$$30$$$$CollectionNodeSet$$$$FetchChildNodeSet$$($index$$172$$, $callbacks$$46$$) {
    var $model$$66_parentKey$$12$$ = this.$collection$.at($index$$172$$);
    if (this.$treeDataSource$.$parseMetadata$($model$$66_parentKey$$12$$).leaf) {
      this.$childNodeSet$[$index$$172$$] = null, $callbacks$$46$$.success(null);
    } else {
      var $collection$$53$$ = this.$treeDataSource$.$GetChildCollection$($model$$66_parentKey$$12$$), $model$$66_parentKey$$12$$ = this.$treeDataSource$.$parseMetadata$($model$$66_parentKey$$12$$).key, $self$$127$$ = this;
      this.$treeDataSource$.$FetchCollection$($collection$$53$$, 0, -1, {success:function($nodeSet$$37$$) {
        $self$$127$$.$childNodeSet$[$index$$172$$] = $nodeSet$$37$$;
        $callbacks$$46$$.success($nodeSet$$37$$);
      }}, $model$$66_parentKey$$12$$);
    }
  };
  $oj$$30$$.$CollectionNodeSet$.prototype.getParent = function $$oj$$30$$$$CollectionNodeSet$$$getParent$() {
    return this.$parentKey$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getParent", {getParent:$oj$$30$$.$CollectionNodeSet$.prototype.getParent});
  $oj$$30$$.$CollectionNodeSet$.prototype.$getStart$ = function $$oj$$30$$$$CollectionNodeSet$$$$getStart$$() {
    return this.start;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getStart", {$getStart$:$oj$$30$$.$CollectionNodeSet$.prototype.$getStart$});
  $oj$$30$$.$CollectionNodeSet$.prototype.$getCount$ = function $$oj$$30$$$$CollectionNodeSet$$$$getCount$$() {
    return this.count;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getCount", {$getCount$:$oj$$30$$.$CollectionNodeSet$.prototype.$getCount$});
  $oj$$30$$.$CollectionNodeSet$.prototype.getData = function $$oj$$30$$$$CollectionNodeSet$$$getData$($index$$173$$) {
    this.$_checkRange$($index$$173$$);
    return this.$collection$.at($index$$173$$).attributes;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getData", {getData:$oj$$30$$.$CollectionNodeSet$.prototype.getData});
  $oj$$30$$.$CollectionNodeSet$.prototype.$_checkRange$ = function $$oj$$30$$$$CollectionNodeSet$$$$_checkRange$$($index$$174$$) {
    if ($index$$174$$ < this.start || $index$$174$$ > this.start + this.count) {
      throw "Out of range";
    }
  };
  $oj$$30$$.$CollectionNodeSet$.prototype.getMetadata = function $$oj$$30$$$$CollectionNodeSet$$$getMetadata$($index$$175_model$$67_parse$$7$$) {
    this.$_checkRange$($index$$175_model$$67_parse$$7$$);
    var $metadata$$11$$ = {};
    $index$$175_model$$67_parse$$7$$ = this.$collection$.at($index$$175_model$$67_parse$$7$$);
    $index$$175_model$$67_parse$$7$$ = this.$treeDataSource$.$parseMetadata$($index$$175_model$$67_parse$$7$$);
    $metadata$$11$$.key = $index$$175_model$$67_parse$$7$$.key;
    $metadata$$11$$.leaf = $index$$175_model$$67_parse$$7$$.leaf;
    $metadata$$11$$.depth = $index$$175_model$$67_parse$$7$$.depth;
    return $metadata$$11$$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getMetadata", {getMetadata:$oj$$30$$.$CollectionNodeSet$.prototype.getMetadata});
  $oj$$30$$.$CollectionNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$30$$$$CollectionNodeSet$$$$getChildNodeSet$$($index$$176$$) {
    this.$_checkRange$($index$$176$$);
    return this.$childNodeSet$[$index$$176$$];
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$30$$.$CollectionNodeSet$.prototype.$getChildNodeSet$});
});
