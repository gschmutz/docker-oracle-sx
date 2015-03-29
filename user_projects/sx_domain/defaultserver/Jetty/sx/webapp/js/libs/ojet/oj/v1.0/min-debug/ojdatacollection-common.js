/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery"], function($oj$$9$$, $$$$9$$) {
  $oj$$9$$.$DataSource$ = function $$oj$$9$$$$DataSource$$($data$$49$$) {
    this.data = $data$$49$$;
    this.Init();
  };
  $goog$exportPath_$$("DataSource", $oj$$9$$.$DataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$DataSource$, $oj$$9$$.$Object$, "oj.DataSource");
  $oj$$9$$.$DataSource$.prototype.Init = function $$oj$$9$$$$DataSource$$$Init$() {
    this.$_eventHandlers$ = [];
    $oj$$9$$.$DataSource$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.Init", {Init:$oj$$9$$.$DataSource$.prototype.Init});
  $oj$$9$$.$DataSource$.prototype.on = function $$oj$$9$$$$DataSource$$$on$($eventType$$22$$, $eventHandler$$) {
    var $foundEventHandler$$ = !1, $i$$118$$;
    for ($i$$118$$ = 0;$i$$118$$ < this.$_eventHandlers$.length;$i$$118$$++) {
      if (this.$_eventHandlers$[$i$$118$$].eventType == $eventType$$22$$ && this.$_eventHandlers$[$i$$118$$].eventHandlerFunc == $eventHandler$$) {
        $foundEventHandler$$ = !0;
        break;
      }
    }
    $foundEventHandler$$ || this.$_eventHandlers$.push({eventType:$eventType$$22$$, eventHandlerFunc:$eventHandler$$});
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.on", {on:$oj$$9$$.$DataSource$.prototype.on});
  $oj$$9$$.$DataSource$.prototype.off = function $$oj$$9$$$$DataSource$$$off$($eventType$$23$$, $eventHandler$$1$$) {
    var $i$$119$$;
    for ($i$$119$$ = this.$_eventHandlers$.length - 1;0 <= $i$$119$$;$i$$119$$--) {
      if (this.$_eventHandlers$[$i$$119$$].eventType == $eventType$$23$$ && this.$_eventHandlers$[$i$$119$$].eventHandlerFunc == $eventHandler$$1$$) {
        this.$_eventHandlers$.splice($i$$119$$, 1);
        break;
      }
    }
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.off", {off:$oj$$9$$.$DataSource$.prototype.off});
  $oj$$9$$.$DataSource$.prototype.handleEvent = function $$oj$$9$$$$DataSource$$$handleEvent$($eventType$$24$$, $event$$43$$) {
    var $i$$120$$;
    for ($i$$120$$ = 0;$i$$120$$ < this.$_eventHandlers$.length;$i$$120$$++) {
      var $eventHandler$$2$$ = this.$_eventHandlers$[$i$$120$$];
      $eventHandler$$2$$.eventType == $eventType$$24$$ && $eventHandler$$2$$.eventHandlerFunc($event$$43$$);
    }
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.handleEvent", {handleEvent:$oj$$9$$.$DataSource$.prototype.handleEvent});
  $oj$$9$$.$DataSource$.prototype.getCapability = function $$oj$$9$$$$DataSource$$$getCapability$() {
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.getCapability", {getCapability:$oj$$9$$.$DataSource$.prototype.getCapability});
  $oj$$9$$.$TreeDataSource$ = function $$oj$$9$$$$TreeDataSource$$($data$$50$$) {
    $oj$$9$$.$TreeDataSource$.$superclass$.constructor.call(this, $data$$50$$);
  };
  $goog$exportPath_$$("TreeDataSource", $oj$$9$$.$TreeDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$TreeDataSource$, $oj$$9$$.$DataSource$, "oj.TreeDataSource");
  $oj$$9$$.$TreeDataSource$.prototype.$getChildCount$ = function $$oj$$9$$$$TreeDataSource$$$$getChildCount$$() {
    return-1;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$9$$.$TreeDataSource$.prototype.$getChildCount$});
  $oj$$9$$.$TreeDataSource$.prototype.$fetchChildren$ = function $$oj$$9$$$$TreeDataSource$$$$fetchChildren$$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$9$$.$TreeDataSource$.prototype.$fetchChildren$});
  $oj$$9$$.$TreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$9$$$$TreeDataSource$$$$fetchDescendants$$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$9$$.$TreeDataSource$.prototype.$fetchDescendants$});
  $oj$$9$$.$TreeDataSource$.prototype.sort = function $$oj$$9$$$$TreeDataSource$$$sort$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.sort", {sort:$oj$$9$$.$TreeDataSource$.prototype.sort});
  $oj$$9$$.$TreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$9$$$$TreeDataSource$$$$getSortCriteria$$() {
    return{key:null, direction:"none"};
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$9$$.$TreeDataSource$.prototype.$getSortCriteria$});
  $oj$$9$$.$TreeDataSource$.prototype.move = function $$oj$$9$$$$TreeDataSource$$$move$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.move", {move:$oj$$9$$.$TreeDataSource$.prototype.move});
  $oj$$9$$.$TreeDataSource$.prototype.$moveOK$ = function $$oj$$9$$$$TreeDataSource$$$$moveOK$$() {
    return "valid";
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.moveOK", {$moveOK$:$oj$$9$$.$TreeDataSource$.prototype.$moveOK$});
  $oj$$9$$.$TreeDataSource$.prototype.getCapability = function $$oj$$9$$$$TreeDataSource$$$getCapability$() {
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TreeDataSource.prototype.getCapability", {getCapability:$oj$$9$$.$TreeDataSource$.prototype.getCapability});
  $oj$$9$$.$FlattenedTreeDataSource$ = function $$oj$$9$$$$FlattenedTreeDataSource$$($treeDataSource$$, $options$$199$$) {
    this.$m_wrapped$ = $treeDataSource$$;
    this.$m_options$ = $options$$199$$;
    $oj$$9$$.$FlattenedTreeDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("FlattenedTreeDataSource", $oj$$9$$.$FlattenedTreeDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$FlattenedTreeDataSource$, $oj$$9$$.$DataSource$, "oj.FlattenedTreeDataSource");
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.Init = function $$oj$$9$$$$FlattenedTreeDataSource$$$Init$() {
    var $expanded$$;
    $oj$$9$$.$FlattenedTreeDataSource$.$superclass$.Init.call(this);
    this.$m_wrapped$.on("change", this.$_handleModelEvent$.bind(this));
    this.$m_fetchSize$ = parseInt(this.$m_options$.fetchSize, 10);
    isNaN(this.$m_fetchSize$) && (this.$m_fetchSize$ = 25);
    this.$m_maxCount$ = parseInt(this.$m_options$.maxCount, 10);
    isNaN(this.$m_maxCount$) && (this.$m_maxCount$ = 500);
    $expanded$$ = this.$m_options$.expanded;
    Array.isArray($expanded$$) ? this.$m_expandedKeys$ = $expanded$$ : ("all" === $expanded$$ && (this.$m_collapsedKeys$ = []), this.$m_expandedKeys$ = []);
    this.$m_cache$ = [];
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.Init", {Init:$oj$$9$$.$FlattenedTreeDataSource$.prototype.Init});
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.handleEvent = function $$oj$$9$$$$FlattenedTreeDataSource$$$handleEvent$($eventType$$25$$, $event$$44$$) {
    $oj$$9$$.$FlattenedTreeDataSource$.$superclass$.handleEvent.call(this, $eventType$$25$$, $event$$44$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.handleEvent", {handleEvent:$oj$$9$$.$FlattenedTreeDataSource$.prototype.handleEvent});
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$Destroy$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$Destroy$$() {
    delete this.$m_cache$;
    delete this.$m_expandedKeys$;
    this.$m_wrapped$.off("change");
    this.$m_wrapped$.$Destory$ && this.$m_wrapped$.$Destory$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.Destroy", {$Destroy$:$oj$$9$$.$FlattenedTreeDataSource$.prototype.$Destroy$});
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$getFetchSize$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$getFetchSize$$() {
    return this.$m_fetchSize$;
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$getExpandedKeys$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$getExpandedKeys$$() {
    return this.$m_expandedKeys$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getExpandedKeys", {$getExpandedKeys$:$oj$$9$$.$FlattenedTreeDataSource$.prototype.$getExpandedKeys$});
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$getOption$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$getOption$$($option$$23$$) {
    return null != this.$m_options$ ? this.$m_options$[$option$$23$$] : null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getOption", {$getOption$:$oj$$9$$.$FlattenedTreeDataSource$.prototype.$getOption$});
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.getWrappedDataSource = function $$oj$$9$$$$FlattenedTreeDataSource$$$getWrappedDataSource$() {
    return this.$m_wrapped$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$9$$.$FlattenedTreeDataSource$.prototype.getWrappedDataSource});
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_getFetchSizeToUse$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_getFetchSizeToUse$$($count$$19$$) {
    var $fetchSize$$, $maxCount$$;
    $fetchSize$$ = this.$getFetchSize$();
    $maxCount$$ = this.$m_maxCount$;
    return-1 === $fetchSize$$ ? -1 === $count$$19$$ ? $maxCount$$ : $count$$19$$ : -1 === $count$$19$$ ? Math.min($fetchSize$$, $count$$19$$) : $fetchSize$$;
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$fetchRows$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$fetchRows$$($range$$6$$, $callbacks$$8$$) {
    this.$_isExpandAll$() ? this.$_fetchRowsFromDescendants$($range$$6$$, $callbacks$$8$$) : this.$_fetchRowsFromChildren$($range$$6$$, $callbacks$$8$$);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_fetchRowsFromChildren$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_fetchRowsFromChildren$$($range$$7$$, $callbacks$$9$$) {
    var $maxFetchSize_nodeSet_processed$$, $fetchSize$$1_lastEntry$$, $parent$$7$$, $count$$20$$, $index$$86$$, $depth$$5$$;
    if ($range$$7$$.start > this.$_getLastIndex$()) {
      $maxFetchSize_nodeSet_processed$$ = this.$_getMaxFetchSize$();
      if (0 > this.$_getLastIndex$()) {
        $range$$7$$.count = Math.min($maxFetchSize_nodeSet_processed$$, $range$$7$$.count);
        this.$m_wrapped$.$fetchChildren$(null, $range$$7$$, {success:function($nodeSet$$1$$) {
          this.$_handleFetchSuccess$($nodeSet$$1$$, null, 0, $range$$7$$, 0, $callbacks$$9$$);
        }.bind(this)});
        return;
      }
      if (0 < $maxFetchSize_nodeSet_processed$$) {
        $fetchSize$$1_lastEntry$$ = this.$_getLastEntry$();
        $parent$$7$$ = $fetchSize$$1_lastEntry$$.parent;
        $count$$20$$ = this.$m_wrapped$.$getChildCount$($parent$$7$$);
        $index$$86$$ = $fetchSize$$1_lastEntry$$.index;
        $depth$$5$$ = $fetchSize$$1_lastEntry$$.depth;
        -1 === $count$$20$$ || $index$$86$$ < $count$$20$$ - 1 ? ($fetchSize$$1_lastEntry$$ = this.$_getFetchSizeToUse$($count$$20$$), $range$$7$$.start = $index$$86$$ + 1, $range$$7$$.count = -1 === $count$$20$$ ? $fetchSize$$1_lastEntry$$ : Math.min($maxFetchSize_nodeSet_processed$$, Math.min($fetchSize$$1_lastEntry$$, $count$$20$$ - $range$$7$$.start)), this.$m_wrapped$.$fetchChildren$($parent$$7$$, $range$$7$$, {success:function($nodeSet$$2$$) {
          this.$_handleFetchSuccess$($nodeSet$$2$$, $parent$$7$$, $depth$$5$$, $range$$7$$, $count$$20$$, $callbacks$$9$$);
        }.bind(this)})) : $index$$86$$ === $count$$20$$ - 1 ? ($maxFetchSize_nodeSet_processed$$ = new $oj$$9$$.$EmptyNodeSet$(null, $range$$7$$.start), null != $callbacks$$9$$ && null != $callbacks$$9$$.success && $callbacks$$9$$.success.call(null, $maxFetchSize_nodeSet_processed$$)) : ($maxFetchSize_nodeSet_processed$$ = this.$_fetchFromAncestors$($parent$$7$$, $depth$$5$$, $callbacks$$9$$, $maxFetchSize_nodeSet_processed$$), $maxFetchSize_nodeSet_processed$$ || ($maxFetchSize_nodeSet_processed$$ = 
        new $oj$$9$$.$EmptyNodeSet$(null, $range$$7$$.start), null != $callbacks$$9$$ && null != $callbacks$$9$$.success && $callbacks$$9$$.success.call(null, $maxFetchSize_nodeSet_processed$$)));
        return;
      }
    }
    this.$handleMaxCountReached$($range$$7$$, $callbacks$$9$$);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_getMaxFetchSize$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_getMaxFetchSize$$() {
    return this.$m_maxCount$ - (this.$_getLastIndex$() + 1);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_handleFetchSuccess$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_handleFetchSuccess$$($nodeSet$$3$$, $parent$$8_processed$$1$$, $depth$$6$$, $range$$8$$, $count$$21$$, $callbacks$$10$$) {
    var $toExpand$$;
    $toExpand$$ = [];
    $nodeSet$$3$$ = new $oj$$9$$.$NodeSetWrapper$($nodeSet$$3$$, this.$insertMetadata$.bind(this), $range$$8$$);
    this.$_processNodeSet$($nodeSet$$3$$, $parent$$8_processed$$1$$, $depth$$6$$, $toExpand$$);
    -1 === $count$$21$$ && 0 === $nodeSet$$3$$.$getCount$() && null != $parent$$8_processed$$1$$ && 0 < $depth$$6$$ ? ($parent$$8_processed$$1$$ = this.$_fetchFromAncestors$($parent$$8_processed$$1$$, $depth$$6$$, $callbacks$$10$$)) || null != $callbacks$$10$$ && null != $callbacks$$10$$.success && $callbacks$$10$$.success.call(null, $nodeSet$$3$$) : (null != $callbacks$$10$$ && null != $callbacks$$10$$.success && $callbacks$$10$$.success.call(null, $nodeSet$$3$$), this.$_expandRows$($toExpand$$));
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_fetchFromAncestors$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_fetchFromAncestors$$($parent$$9$$, $depth$$7$$, $callbacks$$11$$, $maxFetchSize$$1$$) {
    var $options$$200$$, $remainToFetch$$, $i$$121$$, $currEntry_index$$87$$, $currDepth$$, $count$$22$$, $countUnknown$$, $range$$9$$, $fetchSize$$2$$;
    void 0 === $maxFetchSize$$1$$ && ($maxFetchSize$$1$$ = this.$_getMaxFetchSize$());
    this.$_isBatchFetching$() && ($options$$200$$ = {queueOnly:!0});
    $remainToFetch$$ = $fetchSize$$2$$ = this.$_getFetchSizeToUse$(-1);
    for ($i$$121$$ = this.$_getLastIndex$() - 1;0 <= $i$$121$$;$i$$121$$--) {
      if ($currEntry_index$$87$$ = this.$_getEntry$($i$$121$$), $currDepth$$ = $currEntry_index$$87$$.depth, $currDepth$$ < $depth$$7$$ && ($parent$$9$$ = $currEntry_index$$87$$.parent, $count$$22$$ = this.$m_wrapped$.$getChildCount$($parent$$9$$), $currEntry_index$$87$$ = $currEntry_index$$87$$.index, ($countUnknown$$ = -1 === $count$$22$$) || $currEntry_index$$87$$ < $count$$22$$ - 1)) {
        $range$$9$$ = {};
        $range$$9$$.start = $currEntry_index$$87$$ + 1;
        $countUnknown$$ ? ($range$$9$$.count = Math.min($maxFetchSize$$1$$, Math.max(0, $remainToFetch$$)), $options$$200$$ = void 0) : $range$$9$$.count = Math.min($maxFetchSize$$1$$, Math.min($remainToFetch$$, $count$$22$$ - $range$$9$$.start));
        if (0 == $range$$9$$.count) {
          break;
        }
        this.$m_wrapped$.$fetchChildren$($parent$$9$$, $range$$9$$, {success:function($nodeSet$$4$$) {
          this.$_handleFetchSuccess$($nodeSet$$4$$, $parent$$9$$, $currDepth$$, $range$$9$$, $count$$22$$, $callbacks$$11$$);
        }.bind(this)}, $options$$200$$);
        $depth$$7$$ = $currDepth$$;
        $remainToFetch$$ = Math.max(0, $remainToFetch$$ - $range$$9$$.count);
        if ($countUnknown$$ || 0 === $currDepth$$ || 0 === $remainToFetch$$) {
          break;
        }
      }
    }
    void 0 != $options$$200$$ && this.$m_wrapped$.$fetchChildren$($parent$$9$$, {start:$range$$9$$.count, count:0}, {success:function($nodeSet$$5$$) {
      this.$_handleFetchSuccess$($nodeSet$$5$$, $parent$$9$$, $currDepth$$, $range$$9$$, $count$$22$$, $callbacks$$11$$);
    }.bind(this)});
    return $remainToFetch$$ != $fetchSize$$2$$;
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_processNodeSet$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_processNodeSet$$($nodeSet$$6$$, $parent$$10$$, $depth$$8$$, $toExpand$$1$$) {
    var $nodeStart$$, $nodeCount$$, $i$$122$$, $key$$40_metadata$$1$$;
    $nodeStart$$ = $nodeSet$$6$$.$getStart$();
    $nodeCount$$ = $nodeSet$$6$$.$getCount$();
    for ($i$$122$$ = 0;$i$$122$$ < $nodeCount$$;$i$$122$$++) {
      $key$$40_metadata$$1$$ = $nodeSet$$6$$.getMetadata($nodeStart$$ + $i$$122$$), $key$$40_metadata$$1$$ = $key$$40_metadata$$1$$.key, this.$_addEntry$($key$$40_metadata$$1$$, $depth$$8$$, $nodeStart$$ + $i$$122$$, $parent$$10$$), this.$_isExpanded$($key$$40_metadata$$1$$) && $toExpand$$1$$.push($key$$40_metadata$$1$$);
    }
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$insertMetadata$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$insertMetadata$$($key$$41$$, $metadata$$2$$) {
    this.$_isExpanded$($key$$41$$) && !$metadata$$2$$.leaf ? $metadata$$2$$.state = "expanded" : $metadata$$2$$.state = $metadata$$2$$.leaf ? "leaf" : "collapsed";
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_fetchRowsFromDescendants$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_fetchRowsFromDescendants$$($range$$10$$, $callbacks$$12$$) {
    var $options$$201$$ = {maxCount:this.$m_maxCount$};
    0 <= this.$_getLastIndex$() && ($options$$201$$.start = this.$_getEntry$(this.$_getLastIndex$()).key);
    this.$m_wrapped$.$fetchDescendants$(null, {success:function($nodeSet$$7$$) {
      this.$_handleFetchDescendantsSuccess$($nodeSet$$7$$, $range$$10$$, $callbacks$$12$$);
    }.bind(this)}, $options$$201$$);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_handleFetchDescendantsSuccess$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_handleFetchDescendantsSuccess$$($nodeSet$$8$$, $range$$11$$, $callbacks$$13$$) {
    var $maxFetchSize$$2_options$$202$$, $actualStart_count$$23$$, $lastEntry$$1$$;
    $range$$11$$.start > this.$_getLastIndex$() ? ($maxFetchSize$$2_options$$202$$ = this.$_getMaxFetchSize$(), $actualStart_count$$23$$ = Math.min($maxFetchSize$$2_options$$202$$, $range$$11$$.count), $nodeSet$$8$$ = new $oj$$9$$.$NodeSetWrapper$($nodeSet$$8$$, this.$insertMetadata$.bind(this)), 0 <= this.$_getLastIndex$() ? ($lastEntry$$1$$ = this.$_getLastEntry$(), $maxFetchSize$$2_options$$202$$ = {index:0, found:!1, count:0}, this.$_processDescendantsNodeSet$($nodeSet$$8$$, null, 0, $lastEntry$$1$$, 
    $actualStart_count$$23$$, $maxFetchSize$$2_options$$202$$), $actualStart_count$$23$$ = $maxFetchSize$$2_options$$202$$.index + 1) : ($maxFetchSize$$2_options$$202$$ = {count:0}, this.$_processDescendantsNodeSet$($nodeSet$$8$$, null, 0, null, $actualStart_count$$23$$, $maxFetchSize$$2_options$$202$$), $actualStart_count$$23$$ = 0), null != $callbacks$$13$$ && null != $callbacks$$13$$.success && ($nodeSet$$8$$ = null != $maxFetchSize$$2_options$$202$$ ? 0 === $maxFetchSize$$2_options$$202$$.count ? 
    new $oj$$9$$.$EmptyNodeSet$(null, $range$$11$$.start) : new $oj$$9$$.$FlattenedNodeSet$($nodeSet$$8$$, $actualStart_count$$23$$) : new $oj$$9$$.$FlattenedNodeSet$($nodeSet$$8$$), $callbacks$$13$$.success.call(null, $nodeSet$$8$$))) : this.$handleMaxCountReached$($range$$11$$, $callbacks$$13$$);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_processDescendantsNodeSet$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_processDescendantsNodeSet$$($nodeSet$$9$$, $parent$$11$$, $depth$$9$$, $lastEntry$$2$$, $maxCount$$1$$, $options$$203$$) {
    var $nodeStart$$1$$, $nodeCount$$1$$, $i$$123$$, $childNodeSet_metadata$$3$$, $key$$42$$;
    $nodeStart$$1$$ = $nodeSet$$9$$.$getStart$();
    $nodeCount$$1$$ = $nodeSet$$9$$.$getCount$();
    for ($i$$123$$ = 0;$i$$123$$ < $nodeCount$$1$$ && $options$$203$$.count != $maxCount$$1$$;$i$$123$$++) {
      $childNodeSet_metadata$$3$$ = $nodeSet$$9$$.getMetadata($nodeStart$$1$$ + $i$$123$$);
      $key$$42$$ = $childNodeSet_metadata$$3$$.key;
      $options$$203$$.checkDepth && $lastEntry$$2$$.depth === $depth$$9$$ && ($options$$203$$.found = !0, $options$$203$$.checkDepth = !1);
      if (null == $lastEntry$$2$$ || $options$$203$$.found) {
        this.$_addEntry$($key$$42$$, $depth$$9$$, $nodeStart$$1$$ + $i$$123$$, $parent$$11$$), $options$$203$$.count += 1, $childNodeSet_metadata$$3$$.state = $childNodeSet_metadata$$3$$.leaf ? "leaf" : "expanded";
      }
      null == $lastEntry$$2$$ || $options$$203$$.found || ($key$$42$$ === $lastEntry$$2$$.key ? $childNodeSet_metadata$$3$$.leaf || this.$_isExpanded$($key$$42$$) ? $options$$203$$.found = !0 : $options$$203$$.checkDepth = !0 : $options$$203$$.index += 1);
      $nodeSet$$9$$.$getChildNodeSet$ && ($childNodeSet_metadata$$3$$ = $nodeSet$$9$$.$getChildNodeSet$($i$$123$$), null != $childNodeSet_metadata$$3$$ && this.$_processDescendantsNodeSet$($childNodeSet_metadata$$3$$, $key$$42$$, $depth$$9$$ + 1, $lastEntry$$2$$, $maxCount$$1$$, $options$$203$$));
    }
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.expand = function $$oj$$9$$$$FlattenedTreeDataSource$$$expand$($rowKey$$) {
    this.$_expand$($rowKey$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.expand", {expand:$oj$$9$$.$FlattenedTreeDataSource$.prototype.expand});
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_expand$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_expand$$($rowKey$$1$$, $options$$204$$) {
    var $count$$24$$, $fetchSize$$3$$, $maxCount$$2$$, $refIndex$$;
    $count$$24$$ = this.$m_wrapped$.$getChildCount$($rowKey$$1$$);
    $fetchSize$$3$$ = this.$_getFetchSizeToUse$($count$$24$$);
    $maxCount$$2$$ = this.$m_maxCount$;
    if (this.$_getLastIndex$() + 1 === $maxCount$$2$$ && ($refIndex$$ = this.$getIndex$($rowKey$$1$$), $refIndex$$ == $maxCount$$2$$ - 1)) {
      this.$handleExpandSuccess$($rowKey$$1$$, new $oj$$9$$.$EmptyNodeSet$($rowKey$$1$$, 0), 0, $options$$204$$);
      return;
    }
    0 == $fetchSize$$3$$ ? this.$handleExpandSuccess$($rowKey$$1$$, new $oj$$9$$.$EmptyNodeSet$($rowKey$$1$$, 0), 0, $options$$204$$) : this.$m_wrapped$.$fetchChildren$($rowKey$$1$$, {start:0, count:$fetchSize$$3$$}, {success:function($nodeSet$$10$$) {
      this.$handleExpandSuccess$($rowKey$$1$$, $nodeSet$$10$$, $count$$24$$, $options$$204$$);
    }.bind(this)});
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.collapse = function $$oj$$9$$$$FlattenedTreeDataSource$$$collapse$($rowKey$$2$$) {
    var $rowIndex$$, $depth$$10_i$$124_parent$$12$$, $count$$25$$, $keys$$7_lastIndex$$, $j$$20$$;
    $rowIndex$$ = this.$getIndex$($rowKey$$2$$) + 1;
    $depth$$10_i$$124_parent$$12$$ = this.$_getEntry$($rowIndex$$ - 1);
    $count$$25$$ = 0;
    $depth$$10_i$$124_parent$$12$$ = $depth$$10_i$$124_parent$$12$$.depth;
    $keys$$7_lastIndex$$ = this.$_getLastIndex$();
    for ($j$$20$$ = $rowIndex$$;$j$$20$$ < $keys$$7_lastIndex$$ + 1;$j$$20$$++) {
      var $rowDepth$$ = this.$_getEntry$($j$$20$$).depth;
      if ($rowDepth$$ > $depth$$10_i$$124_parent$$12$$) {
        $count$$25$$ += 1;
      } else {
        if ($rowDepth$$ == $depth$$10_i$$124_parent$$12$$) {
          break;
        }
      }
    }
    if (0 != $count$$25$$) {
      this.$_isExpandAll$() ? this.$m_collapsedKeys$.push($rowKey$$2$$) : this.$_removeExpanded$($rowKey$$2$$);
      $keys$$7_lastIndex$$ = [];
      for ($depth$$10_i$$124_parent$$12$$ = 0;$depth$$10_i$$124_parent$$12$$ < $count$$25$$;$depth$$10_i$$124_parent$$12$$++) {
        $keys$$7_lastIndex$$.push({key:this.$_getEntry$($rowIndex$$ + $depth$$10_i$$124_parent$$12$$).key, index:$rowIndex$$ + $depth$$10_i$$124_parent$$12$$});
      }
      this.$_removeEntry$($rowIndex$$, $count$$25$$);
      this.$removeRows$($keys$$7_lastIndex$$);
      this.handleEvent("collapse", {rowKey:$rowKey$$2$$});
    }
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.collapse", {collapse:$oj$$9$$.$FlattenedTreeDataSource$.prototype.collapse});
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_isExpanded$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_isExpanded$$($rowKey$$3$$) {
    return this.$_isExpandAll$() ? this.$m_collapsedKeys$ && 0 < this.$m_collapsedKeys$.length ? -1 === this.$_getCollapsedKeyIndex$($rowKey$$3$$) : !0 : this.$m_expandedKeys$ && 0 < this.$m_expandedKeys$.length ? -1 < this.$_getExpandedKeyIndex$($rowKey$$3$$) : !1;
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_getCollapsedKeyIndex$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_getCollapsedKeyIndex$$($rowKey$$4$$) {
    return this.$_getKeyIndex$(this.$m_collapsedKeys$, $rowKey$$4$$);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_getExpandedKeyIndex$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_getExpandedKeyIndex$$($rowKey$$5$$) {
    return this.$_getKeyIndex$(this.$m_expandedKeys$, $rowKey$$5$$);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_getKeyIndex$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_getKeyIndex$$($arr$$22$$, $rowKey$$6$$) {
    var $i$$125$$, $index$$88$$;
    $index$$88$$ = -1;
    for ($i$$125$$ = 0;$i$$125$$ < $arr$$22$$.length;$i$$125$$++) {
      $arr$$22$$[$i$$125$$] === $rowKey$$6$$ && ($index$$88$$ = $i$$125$$);
    }
    return $index$$88$$;
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_removeExpanded$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_removeExpanded$$($index$$89_rowKey$$7$$) {
    $index$$89_rowKey$$7$$ = this.$_getExpandedKeyIndex$($index$$89_rowKey$$7$$);
    -1 < $index$$89_rowKey$$7$$ && this.$m_expandedKeys$.splice($index$$89_rowKey$$7$$, 1);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_removeCollapsed$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_removeCollapsed$$($index$$90_rowKey$$8$$) {
    $index$$90_rowKey$$8$$ = this.$_getCollapsedKeyIndex$($index$$90_rowKey$$8$$);
    -1 < $index$$90_rowKey$$8$$ && this.$m_collapsedKeys$.splice($index$$90_rowKey$$8$$, 1);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$handleExpandSuccess$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$handleExpandSuccess$$($rowKey$$9$$, $maxCount$$3_nodeSet$$11$$, $childCount_j$$21$$, $options$$205$$) {
    var $refIndex$$1$$, $rangeStart$$, $metadata$$4_rowStart$$, $rowCount$$, $parent$$13$$, $depth$$11$$, $key$$43$$, $toExpand$$2$$, $i$$126$$, $queue$$3$$, $prevNodeSetInfo$$1$$;
    $maxCount$$3_nodeSet$$11$$ = new $oj$$9$$.$NodeSetWrapper$($maxCount$$3_nodeSet$$11$$, this.$insertMetadata$.bind(this));
    $rangeStart$$ = $refIndex$$1$$ = this.$getIndex$($rowKey$$9$$) + 1;
    $metadata$$4_rowStart$$ = $maxCount$$3_nodeSet$$11$$.$getStart$();
    $rowCount$$ = $maxCount$$3_nodeSet$$11$$.$getCount$();
    $parent$$13$$ = this.$_getEntry$($refIndex$$1$$ - 1);
    $depth$$11$$ = $parent$$13$$.depth + 1;
    $toExpand$$2$$ = [];
    for ($i$$126$$ = $metadata$$4_rowStart$$;$i$$126$$ < $rowCount$$;$i$$126$$++) {
      $metadata$$4_rowStart$$ = $maxCount$$3_nodeSet$$11$$.getMetadata($i$$126$$), $key$$43$$ = $metadata$$4_rowStart$$.key, this.$_isExpanded$($key$$43$$) && $toExpand$$2$$.push($key$$43$$), this.$_insertRow$($refIndex$$1$$, $metadata$$4_rowStart$$, $parent$$13$$.key, $i$$126$$, $depth$$11$$), $refIndex$$1$$++;
    }
    this.$_isExpandAll$() ? this.$_removeCollapsed$($rowKey$$9$$) : -1 === this.$m_expandedKeys$.indexOf($rowKey$$9$$) && this.$m_expandedKeys$.push($rowKey$$9$$);
    void 0 != $options$$205$$ && ($queue$$3$$ = $options$$205$$.queue, $prevNodeSetInfo$$1$$ = $options$$205$$.prevNodeSetInfo);
    void 0 != $prevNodeSetInfo$$1$$ && ($maxCount$$3_nodeSet$$11$$ = new $oj$$9$$.$MergedNodeSet$($prevNodeSetInfo$$1$$.nodeSet, $maxCount$$3_nodeSet$$11$$, $rowKey$$9$$));
    if (0 != $toExpand$$2$$.length || void 0 !== $queue$$3$$ && 0 != $queue$$3$$.length) {
      void 0 === $queue$$3$$ && ($queue$$3$$ = []), 0 < $toExpand$$2$$.length && $queue$$3$$.push($toExpand$$2$$), void 0 === $prevNodeSetInfo$$1$$ && ($prevNodeSetInfo$$1$$ = {}, $prevNodeSetInfo$$1$$.firstIndex = $rangeStart$$, $prevNodeSetInfo$$1$$.firstKey = $rowKey$$9$$, $prevNodeSetInfo$$1$$.keys = []), $prevNodeSetInfo$$1$$.nodeSet = $maxCount$$3_nodeSet$$11$$, $prevNodeSetInfo$$1$$.keys.push($rowKey$$9$$), this.$_syncExpandRows$($queue$$3$$, $prevNodeSetInfo$$1$$);
    } else {
      void 0 != $prevNodeSetInfo$$1$$ ? this.$insertRows$($prevNodeSetInfo$$1$$.firstIndex, $prevNodeSetInfo$$1$$.firstKey, $maxCount$$3_nodeSet$$11$$) : this.$insertRows$($rangeStart$$, $rowKey$$9$$, $maxCount$$3_nodeSet$$11$$);
      $maxCount$$3_nodeSet$$11$$ = this.$m_maxCount$;
      -1 === $childCount_j$$21$$ && $rowCount$$ === this.$getFetchSize$() || $childCount_j$$21$$ > $rowCount$$ || $refIndex$$1$$ == $maxCount$$3_nodeSet$$11$$ ? this.$_deleteAllRowsBelow$($refIndex$$1$$) : this.$_getLastIndex$() >= $maxCount$$3_nodeSet$$11$$ && this.$_deleteAllRowsBelow$($maxCount$$3_nodeSet$$11$$);
      if (void 0 != $prevNodeSetInfo$$1$$) {
        for ($childCount_j$$21$$ = 0;$childCount_j$$21$$ < $prevNodeSetInfo$$1$$.keys.length;$childCount_j$$21$$++) {
          this.handleEvent("expand", {rowKey:$prevNodeSetInfo$$1$$.keys[$childCount_j$$21$$]});
        }
      }
      this.handleEvent("expand", {rowKey:$rowKey$$9$$});
    }
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_syncExpandRows$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_syncExpandRows$$($queue$$4$$, $prevNodeSetInfo$$2$$) {
    var $last$$, $key$$44$$;
    $last$$ = $queue$$4$$[$queue$$4$$.length - 1];
    $key$$44$$ = $last$$.shift();
    0 === $last$$.length && $queue$$4$$.pop();
    this.$_expand$($key$$44$$, {prevNodeSetInfo:$prevNodeSetInfo$$2$$, queue:$queue$$4$$});
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_expandRows$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_expandRows$$($keys$$8$$) {
    var $options$$207$$, $i$$127$$;
    this.$_isBatchFetching$() && ($options$$207$$ = {queueOnly:!0});
    for ($i$$127$$ = 0;$i$$127$$ < $keys$$8$$.length;$i$$127$$++) {
      $i$$127$$ == $keys$$8$$.length - 1 ? this.$_expand$($keys$$8$$[$i$$127$$]) : this.$_expand$($keys$$8$$[$i$$127$$], $options$$207$$);
    }
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_insertRow$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_insertRow$$($index$$91$$, $key$$45_metadata$$5$$, $parentKey$$, $childIndex$$, $depth$$12$$) {
    $key$$45_metadata$$5$$ = $key$$45_metadata$$5$$.key;
    $index$$91$$ <= this.$_getLastIndex$() ? this.$_addEntry$($key$$45_metadata$$5$$, $depth$$12$$, $childIndex$$, $parentKey$$, $index$$91$$) : this.$_addEntry$($key$$45_metadata$$5$$, $depth$$12$$, $childIndex$$, $parentKey$$);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_deleteAllRowsBelow$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_deleteAllRowsBelow$$($index$$92$$, $count$$26$$) {
    var $keys$$9$$;
    void 0 == $count$$26$$ && ($count$$26$$ = this.$_getLastIndex$() + 1 - $index$$92$$);
    $keys$$9$$ = [];
    for (var $i$$128$$ = 0;$i$$128$$ < $count$$26$$;$i$$128$$++) {
      $keys$$9$$.push({row:this.$_getEntry$($index$$92$$ + $i$$128$$).key, index:$index$$92$$ + $i$$128$$});
    }
    this.$_removeEntry$($index$$92$$, $count$$26$$);
    this.$removeRows$($keys$$9$$);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_handleModelEvent$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_handleModelEvent$$($event$$46$$) {
    var $operation$$4$$, $ancestors_parentKey$$1$$, $index$$93$$;
    $operation$$4$$ = $event$$46$$.operation;
    $ancestors_parentKey$$1$$ = $event$$46$$.parent;
    $ancestors_parentKey$$1$$ = Array.isArray($ancestors_parentKey$$1$$) ? $ancestors_parentKey$$1$$[$ancestors_parentKey$$1$$.length - 1] : $ancestors_parentKey$$1$$;
    $index$$93$$ = $event$$46$$.index;
    "insert" === $operation$$4$$ ? this.$_handleInsertEvent$($ancestors_parentKey$$1$$, $index$$93$$, $event$$46$$.data) : "delete" === $operation$$4$$ ? this.$_handleDeleteEvent$($ancestors_parentKey$$1$$, $index$$93$$) : "refresh" === $operation$$4$$ && this.$_handleRefreshEvent$($ancestors_parentKey$$1$$);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_handleInsertEvent$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_handleInsertEvent$$($parentKey$$2$$, $index$$94$$, $metadata$$6_nodeSet$$12$$) {
    var $insertIndex_parentIndex$$, $depth$$13$$;
    $insertIndex_parentIndex$$ = this.$getIndex$($parentKey$$2$$);
    $depth$$13$$ = this.$_getEntry$($insertIndex_parentIndex$$).depth + 1;
    $insertIndex_parentIndex$$ = $insertIndex_parentIndex$$ + $index$$94$$ + 1;
    $metadata$$6_nodeSet$$12$$ = $metadata$$6_nodeSet$$12$$.getMetadata($metadata$$6_nodeSet$$12$$.$getStart$());
    this.$_insertRow$($insertIndex_parentIndex$$, $metadata$$6_nodeSet$$12$$, $parentKey$$2$$, $index$$94$$, $depth$$13$$);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_handleDeleteEvent$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_handleDeleteEvent$$($parentKey$$3$$, $index$$95$$) {
    var $parentIndex$$1_startIndex$$, $currentIndex_parent$$15$$, $start$$20$$, $lastIndex$$1$$, $current$$5$$;
    $parentIndex$$1_startIndex$$ = this.$getIndex$($parentKey$$3$$);
    $currentIndex_parent$$15$$ = this.$_getEntry$($parentIndex$$1_startIndex$$);
    $parentIndex$$1_startIndex$$ += $index$$95$$;
    $start$$20$$ = this.$_getEntry$($parentIndex$$1_startIndex$$);
    $oj$$9$$.$Assert$.assert($start$$20$$.parent === $currentIndex_parent$$15$$ && $start$$20$$.depth === $currentIndex_parent$$15$$.depth + 1);
    $currentIndex_parent$$15$$ = $parentIndex$$1_startIndex$$ + 1;
    for ($lastIndex$$1$$ = this.$_getLastIndex$();$currentIndex_parent$$15$$ <= $lastIndex$$1$$;) {
      $current$$5$$ = this.$_getEntry$($currentIndex_parent$$15$$);
      if ($current$$5$$.depth != $start$$20$$.depth) {
        break;
      }
      $currentIndex_parent$$15$$++;
    }
    this.$_deleteAllRowsBelow$($parentIndex$$1_startIndex$$, 1);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_handleRefreshEvent$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_handleRefreshEvent$$($parentKey$$4$$) {
    null == $parentKey$$4$$ && this.refresh();
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_isExpandAll$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_isExpandAll$$() {
    var $capability$$ = this.$m_wrapped$.getCapability("fetchDescendants");
    return void 0 != this.$m_collapsedKeys$ && null != $capability$$ && "disable" != $capability$$;
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_isBatchFetching$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_isBatchFetching$$() {
    return "enable" === this.$m_wrapped$.getCapability("batchFetch");
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.refresh = function $$oj$$9$$$$FlattenedTreeDataSource$$$refresh$() {
    this.$_clearAll$();
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$getIndex$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$getIndex$$($rowKey$$10$$) {
    var $lastIndex$$2$$, $i$$129$$, $rowData$$2$$;
    $lastIndex$$2$$ = this.$_getLastIndex$();
    for ($i$$129$$ = 0;$i$$129$$ <= $lastIndex$$2$$;$i$$129$$++) {
      if ($rowData$$2$$ = this.$_getEntry$($i$$129$$), $rowData$$2$$.key == $rowKey$$10$$) {
        return $i$$129$$;
      }
    }
    return-1;
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.getKey = function $$oj$$9$$$$FlattenedTreeDataSource$$$getKey$($index$$96$$) {
    return 0 > $index$$96$$ || $index$$96$$ > this.$_getLastIndex$() ? null : this.$_getEntry$($index$$96$$).key;
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$getFetchedRange$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$getFetchedRange$$() {
    return{start:0, end:this.$_getLastIndex$() + 1};
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$handleMaxCountReached$$($range$$12$$, $callbacks$$14$$) {
    null != $callbacks$$14$$ && null != $callbacks$$14$$.error && $callbacks$$14$$.error.call(null);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$insertRows$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$insertRows$$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$removeRows$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$removeRows$$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_getLastIndex$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_getLastIndex$$() {
    return this.$m_cache$.length - 1;
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_getLastEntry$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_getLastEntry$$() {
    return this.$m_cache$[this.$_getLastIndex$()];
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_getEntry$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_getEntry$$($index$$97$$) {
    return this.$m_cache$[$index$$97$$];
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_addEntry$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_addEntry$$($key$$46$$, $depth$$14$$, $index$$98$$, $parent$$16$$, $insertAt$$) {
    var $rowData$$3$$ = {};
    $rowData$$3$$.key = $key$$46$$;
    $rowData$$3$$.depth = $depth$$14$$;
    $rowData$$3$$.index = $index$$98$$;
    $rowData$$3$$.parent = $parent$$16$$;
    void 0 === $insertAt$$ ? this.$m_cache$.push($rowData$$3$$) : this.$m_cache$.splice($insertAt$$, 0, $rowData$$3$$);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_removeEntry$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_removeEntry$$($index$$99$$, $count$$28$$) {
    this.$m_cache$.splice($index$$99$$, $count$$28$$);
  };
  $oj$$9$$.$FlattenedTreeDataSource$.prototype.$_clearAll$ = function $$oj$$9$$$$FlattenedTreeDataSource$$$$_clearAll$$() {
    this.$m_cache$.length = 0;
  };
  $oj$$9$$.$_JsonTreeNodeDataSource$ = function $$oj$$9$$$$_JsonTreeNodeDataSource$$() {
    this.id = null;
    this.depth = 0;
    this.parent = null;
    this.children = [];
    this.$leaf$ = this.attr = this.title = null;
  };
  $oj$$9$$.$_JsonTreeNodeDataSource$.prototype.$_ascending$ = function $$oj$$9$$$$_JsonTreeNodeDataSource$$$$_ascending$$($key$$47$$) {
    return function($a$$67$$, $b$$40$$) {
      return $a$$67$$.attr && $b$$40$$.attr && $a$$67$$.attr[$key$$47$$] && $b$$40$$.attr[$key$$47$$] ? $a$$67$$.attr[$key$$47$$] < $b$$40$$.attr[$key$$47$$] ? 0 : 1 : $a$$67$$[$key$$47$$] < $b$$40$$[$key$$47$$] ? 0 : 1;
    };
  };
  $oj$$9$$.$_JsonTreeNodeDataSource$.prototype.$_descending$ = function $$oj$$9$$$$_JsonTreeNodeDataSource$$$$_descending$$($key$$48$$) {
    return function($a$$68$$, $b$$41$$) {
      return $a$$68$$.attr && $b$$41$$.attr && $a$$68$$.attr[$key$$48$$] && $b$$41$$.attr[$key$$48$$] ? $a$$68$$.attr[$key$$48$$] < $b$$41$$.attr[$key$$48$$] ? 1 : 0 : $a$$68$$[$key$$48$$] < $b$$41$$[$key$$48$$] ? 1 : 0;
    };
  };
  $oj$$9$$.$_JsonTreeNodeDataSource$.prototype.$_sortRecursive$ = function $$oj$$9$$$$_JsonTreeNodeDataSource$$$$_sortRecursive$$($criteria$$1$$) {
    var $i$$130_key$$49$$ = $criteria$$1$$.key;
    "ascending" === $criteria$$1$$.direction ? this.children.sort(this.$_ascending$($i$$130_key$$49$$)) : "descending" === $criteria$$1$$.direction && this.children.sort(this.$_descending$($i$$130_key$$49$$));
    for (var $i$$130_key$$49$$ = 0, $l$$4$$ = this.children.length;$i$$130_key$$49$$ < $l$$4$$;$i$$130_key$$49$$++) {
      this.children[$i$$130_key$$49$$].$_sortRecursive$($criteria$$1$$);
    }
  };
  $oj$$9$$.$JsonTreeDataSource$ = function $$oj$$9$$$$JsonTreeDataSource$$($data$$51$$) {
    var $tree$$;
    $tree$$ = new $oj$$9$$.$_JsonTreeNodeDataSource$;
    $data$$51$$.id || ($tree$$.id = "root");
    this.data = this.$_createTreeDataSource$(0, $tree$$, $data$$51$$);
    $oj$$9$$.$JsonTreeDataSource$.$superclass$.constructor.call(this, $tree$$);
  };
  $goog$exportPath_$$("JsonTreeDataSource", $oj$$9$$.$JsonTreeDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$JsonTreeDataSource$, $oj$$9$$.$TreeDataSource$, "oj.JsonTreeDataSource");
  $oj$$9$$.$JsonTreeDataSource$.prototype.Init = function $$oj$$9$$$$JsonTreeDataSource$$$Init$() {
    $oj$$9$$.$JsonTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.Init", {Init:$oj$$9$$.$JsonTreeDataSource$.prototype.Init});
  $oj$$9$$.$JsonTreeDataSource$.prototype.$_createTreeDataSource$ = function $$oj$$9$$$$JsonTreeDataSource$$$$_createTreeDataSource$$($c$$25$$, $target$$77$$, $source$$9$$, $depth$$15$$) {
    var $children$$1$$, $node$$19$$, $child$$2$$, $prop$$54$$, $propr$$, $prp$$, $j$$22$$;
    $depth$$15$$ || ($depth$$15$$ = 0);
    for ($prop$$54$$ in $source$$9$$) {
      if ("children" == $prop$$54$$ || 0 == $depth$$15$$ && $source$$9$$ instanceof Array) {
        for ($children$$1$$ = 0 == $depth$$15$$ && $source$$9$$ instanceof Array ? $source$$9$$ : $source$$9$$[$prop$$54$$], $depth$$15$$++, $j$$22$$ = 0;$j$$22$$ < $children$$1$$.length;$j$$22$$++) {
          $child$$2$$ = $children$$1$$[$j$$22$$];
          $node$$19$$ = new $oj$$9$$.$_JsonTreeNodeDataSource$;
          $child$$2$$.id || ($c$$25$$++, $child$$2$$.attr ? $child$$2$$.attr.id || ($child$$2$$.attr.id = "rid_" + $c$$25$$) : $node$$19$$.id = "rid_" + $c$$25$$);
          for ($propr$$ in $child$$2$$) {
            for ($prp$$ in $node$$19$$) {
              $propr$$ == $prp$$ && "children" != $propr$$ && ($node$$19$$[$prp$$] = $child$$2$$[$propr$$]), "depth" == $prp$$ && ($node$$19$$[$prp$$] = $depth$$15$$);
            }
          }
          $target$$77$$.children.push($node$$19$$);
          for ($prp$$ in $child$$2$$) {
            "children" == $prp$$ && this.$_createTreeDataSource$($c$$25$$, $target$$77$$.children[$j$$22$$], $child$$2$$, $depth$$15$$);
          }
        }
      }
    }
    return $target$$77$$;
  };
  $oj$$9$$.$JsonTreeDataSource$.prototype.$getChildCount$ = function $$oj$$9$$$$JsonTreeDataSource$$$$getChildCount$$($parent$$17_parentKey$$5$$) {
    $parent$$17_parentKey$$5$$ || ($parent$$17_parentKey$$5$$ = this.data.id);
    $parent$$17_parentKey$$5$$ = this.$_searchTreeById$(this.data, $parent$$17_parentKey$$5$$);
    return $parent$$17_parentKey$$5$$.children ? $parent$$17_parentKey$$5$$.children.length : 0;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$9$$.$JsonTreeDataSource$.prototype.$getChildCount$});
  $oj$$9$$.$JsonTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$9$$$$JsonTreeDataSource$$$$fetchChildren$$($nodeSet$$14_parentKey$$6$$, $i$$131_range$$13$$, $callbacks$$15$$) {
    var $childStart$$, $childEnd$$, $results$$, $parent$$18$$, $node$$20$$;
    $results$$ = [];
    $nodeSet$$14_parentKey$$6$$ || ($nodeSet$$14_parentKey$$6$$ = this.data.id);
    $parent$$18$$ = this.$_searchTreeById$(this.data, $nodeSet$$14_parentKey$$6$$);
    $i$$131_range$$13$$ || ($i$$131_range$$13$$ = [], $i$$131_range$$13$$.start = 0, $i$$131_range$$13$$.count = $parent$$18$$.children.length);
    $i$$131_range$$13$$.count || ($i$$131_range$$13$$.count = $parent$$18$$.children.length);
    $i$$131_range$$13$$.start || ($i$$131_range$$13$$.start = 0);
    $childStart$$ = $i$$131_range$$13$$.start;
    $childEnd$$ = Math.min($parent$$18$$.children.length, $childStart$$ + $i$$131_range$$13$$.count);
    for ($i$$131_range$$13$$ = $childStart$$;$i$$131_range$$13$$ < $childEnd$$;$i$$131_range$$13$$ += 1) {
      $node$$20$$ = new $oj$$9$$.$_JsonTreeNodeDataSource$, $parent$$18$$.children[$i$$131_range$$13$$].attr && ($node$$20$$.attr = $parent$$18$$.children[$i$$131_range$$13$$].attr), $parent$$18$$.children[$i$$131_range$$13$$].id && ($node$$20$$.id = $parent$$18$$.children[$i$$131_range$$13$$].id), $parent$$18$$.children[$i$$131_range$$13$$].depth && ($node$$20$$.depth = $parent$$18$$.children[$i$$131_range$$13$$].depth), $parent$$18$$.children[$i$$131_range$$13$$].title && ($node$$20$$.title = $parent$$18$$.children[$i$$131_range$$13$$].title), 
      $parent$$18$$.children[$i$$131_range$$13$$].parent && ($node$$20$$.parent = $parent$$18$$.children[$i$$131_range$$13$$].parent), $node$$20$$.$leaf$ = 0 < $parent$$18$$.children[$i$$131_range$$13$$].children.length ? !1 : !0, $results$$.push($node$$20$$);
    }
    $nodeSet$$14_parentKey$$6$$ = new $oj$$9$$.$JsonNodeSet$($childStart$$, $childEnd$$, $results$$, $nodeSet$$14_parentKey$$6$$);
    null != $callbacks$$15$$ && null != $callbacks$$15$$.success && $callbacks$$15$$.success.call(null, $nodeSet$$14_parentKey$$6$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$9$$.$JsonTreeDataSource$.prototype.$fetchChildren$});
  $oj$$9$$.$JsonTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$9$$$$JsonTreeDataSource$$$$fetchDescendants$$($parentKey$$7$$, $callbacks$$16$$) {
    var $childEnd$$1_range$$14$$, $childStart$$1_i$$132$$, $nodeSet$$15_results$$1$$, $parent$$19$$;
    $nodeSet$$15_results$$1$$ = [];
    $parentKey$$7$$ || ($parentKey$$7$$ = this.data.id);
    $parent$$19$$ = this.$_searchTreeById$(this.data, $parentKey$$7$$);
    $childEnd$$1_range$$14$$ = [];
    $childEnd$$1_range$$14$$.start = 0;
    $childEnd$$1_range$$14$$.count = $parent$$19$$.children.length;
    $childStart$$1_i$$132$$ = $childEnd$$1_range$$14$$.start;
    for ($childEnd$$1_range$$14$$ = Math.min($parent$$19$$.children.length, $childStart$$1_i$$132$$ + $childEnd$$1_range$$14$$.count);$childStart$$1_i$$132$$ < $childEnd$$1_range$$14$$;$childStart$$1_i$$132$$ += 1) {
      $parent$$19$$.children[$childStart$$1_i$$132$$].$leaf$ = 0 < $parent$$19$$.children[$childStart$$1_i$$132$$].children.length ? !1 : !0, $nodeSet$$15_results$$1$$.push($parent$$19$$.children[$childStart$$1_i$$132$$]);
    }
    $nodeSet$$15_results$$1$$ = new $oj$$9$$.$JsonNodeSet$(0, $nodeSet$$15_results$$1$$.length, $nodeSet$$15_results$$1$$, $parentKey$$7$$);
    null != $callbacks$$16$$ && null != $callbacks$$16$$.success && $callbacks$$16$$.success.call(null, $nodeSet$$15_results$$1$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$9$$.$JsonTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$9$$.$JsonTreeDataSource$.prototype.move = function $$oj$$9$$$$JsonTreeDataSource$$$move$($moveNode_nodeToMove$$, $refNode$$8_referenceNode$$, $index$$100_position$$4$$, $callbacks$$17$$) {
    var $parent$$20_refNodeKey$$;
    $parent$$20_refNodeKey$$ = $refNode$$8_referenceNode$$;
    if (!$parent$$20_refNodeKey$$ || $parent$$20_refNodeKey$$ == this.data.id) {
      if ("inside" != $index$$100_position$$4$$) {
        console.log("Error: root can not be the reference node if position equals to " + $index$$100_position$$4$$);
        return;
      }
      $parent$$20_refNodeKey$$ || ($parent$$20_refNodeKey$$ = this.data.id);
    }
    $moveNode_nodeToMove$$ = this.$_searchTreeById$(null, $moveNode_nodeToMove$$);
    this.$_searchTreeById$($moveNode_nodeToMove$$, $parent$$20_refNodeKey$$) ? console.log("Error: the node to move contains the reference node as its sub-tree.") : ($refNode$$8_referenceNode$$ = this.$_searchTreeById$(null, $parent$$20_refNodeKey$$), $parent$$20_refNodeKey$$ = this.$_getParentById$($parent$$20_refNodeKey$$), this.$_removeFromTree$($moveNode_nodeToMove$$), "inside" == $index$$100_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - ($refNode$$8_referenceNode$$.depth + 
    1)), $refNode$$8_referenceNode$$.children.push($moveNode_nodeToMove$$)) : "before" == $index$$100_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $index$$100_position$$4$$ = $parent$$20_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$), -1 < $index$$100_position$$4$$ && (0 != $index$$100_position$$4$$ ? $parent$$20_refNodeKey$$.children.splice($index$$100_position$$4$$ - 1, 0, $moveNode_nodeToMove$$) : $parent$$20_refNodeKey$$.children.unshift($moveNode_nodeToMove$$))) : 
    "after" == $index$$100_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $index$$100_position$$4$$ = $parent$$20_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$), -1 < $index$$100_position$$4$$ && $parent$$20_refNodeKey$$.children.splice($index$$100_position$$4$$, 0, $moveNode_nodeToMove$$)) : "first" == $index$$100_position$$4$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - 
    $refNode$$8_referenceNode$$.depth), $parent$$20_refNodeKey$$.children.unshift($moveNode_nodeToMove$$)) : "last" == $index$$100_position$$4$$ && (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$.depth), $parent$$20_refNodeKey$$.children.push($moveNode_nodeToMove$$)), null != $callbacks$$17$$ && null != $callbacks$$17$$.success && $callbacks$$17$$.success.call(null, this.data));
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.move", {move:$oj$$9$$.$JsonTreeDataSource$.prototype.move});
  $oj$$9$$.$JsonTreeDataSource$.prototype.sort = function $$oj$$9$$$$JsonTreeDataSource$$$sort$($criteria$$2$$, $callbacks$$18$$) {
    var $parent$$21$$;
    $parent$$21$$ = this.$_searchTreeById$(this.data, this.data.id);
    $parent$$21$$.$_sortRecursive$($criteria$$2$$);
    null != $callbacks$$18$$ && null != $callbacks$$18$$.success && $callbacks$$18$$.success.call(null, $parent$$21$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.sort", {sort:$oj$$9$$.$JsonTreeDataSource$.prototype.sort});
  $oj$$9$$.$JsonTreeDataSource$.prototype.$_getParentById$ = function $$oj$$9$$$$JsonTreeDataSource$$$$_getParentById$$($refNodeKey$$1$$, $currNode$$) {
    var $i$$133$$, $parent$$22$$ = null;
    if ($refNodeKey$$1$$ == this.data.id) {
      return null;
    }
    $currNode$$ || ($currNode$$ = this.data);
    if ($currNode$$.children && 0 < $currNode$$.children.length) {
      for ($i$$133$$ = 0;$i$$133$$ < $currNode$$.children.length;$i$$133$$++) {
        if ($currNode$$.children[$i$$133$$].id && $currNode$$.children[$i$$133$$].id == $refNodeKey$$1$$ || $currNode$$.children[$i$$133$$].attr && $currNode$$.children[$i$$133$$].attr.id == $refNodeKey$$1$$) {
          return $currNode$$;
        }
      }
      for ($i$$133$$ = 0;$i$$133$$ < $currNode$$.children.length && !($parent$$22$$ = this.$_getParentById$($refNodeKey$$1$$, $currNode$$.children[$i$$133$$]));$i$$133$$++) {
      }
    }
    return $parent$$22$$;
  };
  $oj$$9$$.$JsonTreeDataSource$.prototype.$_searchTreeById$ = function $$oj$$9$$$$JsonTreeDataSource$$$$_searchTreeById$$($currChild$$, $parentKey$$9$$) {
    var $i$$134$$, $result$$16$$ = null;
    $currChild$$ || ($currChild$$ = this.data);
    if ($currChild$$.id && $currChild$$.id == $parentKey$$9$$ || $currChild$$.attr && $currChild$$.attr.id == $parentKey$$9$$) {
      return $currChild$$;
    }
    if (null != $currChild$$.children) {
      for ($i$$134$$ = 0;$i$$134$$ < $currChild$$.children.length && !$result$$16$$;$i$$134$$++) {
        $result$$16$$ = $currChild$$.children[$i$$134$$].id && $currChild$$.children[$i$$134$$].id == $parentKey$$9$$ || $currChild$$.children[$i$$134$$].attr && $currChild$$.children[$i$$134$$].attr.id == $parentKey$$9$$ ? $currChild$$.children[$i$$134$$] : this.$_searchTreeById$($currChild$$.children[$i$$134$$], $parentKey$$9$$);
      }
    }
    return $result$$16$$;
  };
  $oj$$9$$.$JsonTreeDataSource$.prototype.$_updateDepth$ = function $$oj$$9$$$$JsonTreeDataSource$$$$_updateDepth$$($currChild$$1$$, $offset$$15$$) {
    var $i$$135$$;
    $currChild$$1$$.depth -= $offset$$15$$;
    if ($currChild$$1$$.children && 0 != $currChild$$1$$.children.length) {
      for ($i$$135$$ = 0;$i$$135$$ < $currChild$$1$$.children.length;$i$$135$$++) {
        this.$_updateDepth$($currChild$$1$$.children[$i$$135$$], $offset$$15$$);
      }
    }
  };
  $oj$$9$$.$JsonTreeDataSource$.prototype.$_removeFromTree$ = function $$oj$$9$$$$JsonTreeDataSource$$$$_removeFromTree$$($currChild$$2_index$$101$$) {
    var $key$$50_parent$$23$$;
    $currChild$$2_index$$101$$.id ? $key$$50_parent$$23$$ = $currChild$$2_index$$101$$.id : $currChild$$2_index$$101$$.attr && ($key$$50_parent$$23$$ = $currChild$$2_index$$101$$.attr.id);
    ($key$$50_parent$$23$$ = this.$_getParentById$($key$$50_parent$$23$$)) || ($key$$50_parent$$23$$ = this.data);
    $currChild$$2_index$$101$$ = $key$$50_parent$$23$$.children.indexOf($currChild$$2_index$$101$$);
    -1 < $currChild$$2_index$$101$$ && $key$$50_parent$$23$$.children.splice($currChild$$2_index$$101$$, 1);
  };
  $oj$$9$$.$JsonTreeDataSource$.prototype.getCapability = function $$oj$$9$$$$JsonTreeDataSource$$$getCapability$($feature$$6$$) {
    return "fetchDescendants" === $feature$$6$$ ? "enable" : "sort" === $feature$$6$$ ? "default" : "batchFetch" === $feature$$6$$ ? "disable" : "move" === $feature$$6$$ ? "full" : null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getCapability", {getCapability:$oj$$9$$.$JsonTreeDataSource$.prototype.getCapability});
  $oj$$9$$.$Row$ = function $$oj$$9$$$$Row$$($attributes$$13$$, $options$$209$$) {
    $oj$$9$$.$Row$._init(this, $attributes$$13$$, $options$$209$$, null);
  };
  $goog$exportPath_$$("Row", $oj$$9$$.$Row$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$Row$, $oj$$9$$.$Object$, "Row.Row");
  $oj$$9$$.$Row$.prototype.Init = function $$oj$$9$$$$Row$$$Init$() {
    $oj$$9$$.$Row$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$Row$.prototype.attributes = {};
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("Row.prototype.attributes", {attributes:$oj$$9$$.$Row$.prototype.attributes});
  $oj$$9$$.$Row$.prototype.context = {};
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("Row.prototype.context", {context:$oj$$9$$.$Row$.prototype.context});
  $oj$$9$$.$Row$.prototype.id = null;
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("Row.prototype.id", {id:$oj$$9$$.$Row$.prototype.id});
  $oj$$9$$.$Row$.prototype.$idAttribute$ = null;
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("Row.prototype.idAttribute", {$idAttribute$:$oj$$9$$.$Row$.prototype.$idAttribute$});
  $oj$$9$$.$Row$._init = function $$oj$$9$$$$Row$$_init$($row$$2$$, $attributes$$14_prop$$55$$, $options$$210$$, $properties$$7$$) {
    $attributes$$14_prop$$55$$ = null;
    $row$$2$$.Init();
    $row$$2$$.index = -1;
    $options$$210$$ = $options$$210$$ || {};
    $row$$2$$.attributes = {};
    for ($attributes$$14_prop$$55$$ in $properties$$7$$) {
      $properties$$7$$.hasOwnProperty($attributes$$14_prop$$55$$) && ($row$$2$$[$attributes$$14_prop$$55$$] = $properties$$7$$[$attributes$$14_prop$$55$$]);
    }
    $row$$2$$.rowSet = $options$$210$$.rowSet;
    $row$$2$$.context = $options$$210$$.context;
  };
  $oj$$9$$.$Row$.prototype.clone = function $$oj$$9$$$$Row$$$clone$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("Row.prototype.clone", {clone:$oj$$9$$.$Row$.prototype.clone});
  $oj$$9$$.$Row$.prototype.get = function $$oj$$9$$$$Row$$$get$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("Row.prototype.get", {get:$oj$$9$$.$Row$.prototype.get});
  $oj$$9$$.$Row$.prototype.set = function $$oj$$9$$$$Row$$$set$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("Row.prototype.set", {set:$oj$$9$$.$Row$.prototype.set});
  $oj$$9$$.$Row$.prototype.keys = function $$oj$$9$$$$Row$$$keys$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("Row.prototype.keys", {keys:$oj$$9$$.$Row$.prototype.keys});
  $oj$$9$$.$Row$.prototype.values = function $$oj$$9$$$$Row$$$values$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("Row.prototype.values", {values:$oj$$9$$.$Row$.prototype.values});
  $oj$$9$$.$Row$.prototype.pairs = function $$oj$$9$$$$Row$$$pairs$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("Row.prototype.pairs", {pairs:$oj$$9$$.$Row$.prototype.pairs});
  $oj$$9$$.$RowSet$ = function $$oj$$9$$$$RowSet$$($rows$$, $options$$212$$) {
    $oj$$9$$.$RowSet$._init(this, $rows$$, $options$$212$$, null);
  };
  $goog$exportPath_$$("RowSet", $oj$$9$$.$RowSet$, $oj$$9$$);
  $oj$$9$$.$RowSet$.prototype.$comparator$ = null;
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.comparator", {$comparator$:$oj$$9$$.$RowSet$.prototype.$comparator$});
  $oj$$9$$.$RowSet$.prototype.$sortSupported$ = !0;
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.sortSupported", {$sortSupported$:$oj$$9$$.$RowSet$.prototype.$sortSupported$});
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$RowSet$, $oj$$9$$.$Object$, "RowSet.RowSet");
  $oj$$9$$.$RowSet$.prototype.Init = function $$oj$$9$$$$RowSet$$$Init$() {
    $oj$$9$$.$RowSet$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$RowSet$._init = function $$oj$$9$$$$RowSet$$_init$($rowSet$$, $rows$$1$$, $options$$213$$, $properties$$8$$) {
    var $prop$$56$$;
    $rowSet$$.$_eventHandlers$ = [];
    $rowSet$$.Init();
    if ($properties$$8$$) {
      for ($prop$$56$$ in $properties$$8$$) {
        $properties$$8$$.hasOwnProperty($prop$$56$$) && ($rowSet$$[$prop$$56$$] = $properties$$8$$[$prop$$56$$]);
      }
    }
  };
  $oj$$9$$.$RowSet$.prototype.at = function $$oj$$9$$$$RowSet$$$at$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.at", {at:$oj$$9$$.$RowSet$.prototype.at});
  $oj$$9$$.$RowSet$.prototype.fetch = function $$oj$$9$$$$RowSet$$$fetch$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.fetch", {fetch:$oj$$9$$.$RowSet$.prototype.fetch});
  $oj$$9$$.$RowSet$.prototype.get = function $$oj$$9$$$$RowSet$$$get$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.get", {get:$oj$$9$$.$RowSet$.prototype.get});
  $oj$$9$$.$RowSet$.prototype.hasMore = function $$oj$$9$$$$RowSet$$$hasMore$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return!1;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.hasMore", {hasMore:$oj$$9$$.$RowSet$.prototype.hasMore});
  $oj$$9$$.$RowSet$.prototype.indexOf = function $$oj$$9$$$$RowSet$$$indexOf$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.indexOf", {indexOf:$oj$$9$$.$RowSet$.prototype.indexOf});
  $oj$$9$$.$RowSet$.prototype.isEmpty = function $$oj$$9$$$$RowSet$$$isEmpty$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return!0;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.isEmpty", {isEmpty:$oj$$9$$.$RowSet$.prototype.isEmpty});
  $oj$$9$$.$RowSet$.prototype.size = function $$oj$$9$$$$RowSet$$$size$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.size", {size:$oj$$9$$.$RowSet$.prototype.size});
  $oj$$9$$.$RowSet$.prototype.sort = function $$oj$$9$$$$RowSet$$$sort$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.sort", {sort:$oj$$9$$.$RowSet$.prototype.sort});
  $oj$$9$$.$RowSet$.prototype.totalSize = function $$oj$$9$$$$RowSet$$$totalSize$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.totalSize", {totalSize:$oj$$9$$.$RowSet$.prototype.totalSize});
  $oj$$9$$.$RowSet$.prototype.on = function $$oj$$9$$$$RowSet$$$on$($eventType$$26$$, $eventHandler$$3$$) {
    var $foundEventHandler$$1$$ = !1, $i$$136$$;
    for ($i$$136$$ = 0;$i$$136$$ < this.$_eventHandlers$.length;$i$$136$$++) {
      if (this.$_eventHandlers$[$i$$136$$].eventType == $eventType$$26$$ && this.$_eventHandlers$[$i$$136$$].eventHandlerFunc == $eventHandler$$3$$) {
        $foundEventHandler$$1$$ = !0;
        break;
      }
    }
    $foundEventHandler$$1$$ || this.$_eventHandlers$.push({eventType:$eventType$$26$$, eventHandlerFunc:$eventHandler$$3$$});
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.on", {on:$oj$$9$$.$RowSet$.prototype.on});
  $oj$$9$$.$RowSet$.prototype.off = function $$oj$$9$$$$RowSet$$$off$($eventType$$27$$, $eventHandler$$4$$) {
    var $i$$137$$;
    for ($i$$137$$ = 0;$i$$137$$ < this.$_eventHandlers$.length;$i$$137$$++) {
      if (this.$_eventHandlers$[$i$$137$$].eventType == $eventType$$27$$ && this.$_eventHandlers$[$i$$137$$].eventHandlerFunc == $eventHandler$$4$$) {
        this.$_eventHandlers$.remove(this.$_eventHandlers$[$i$$137$$]);
        break;
      }
    }
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("RowSet.prototype.off", {off:$oj$$9$$.$RowSet$.prototype.off});
  $oj$$9$$.$RowSet$.prototype.$_handleEvent$ = function $$oj$$9$$$$RowSet$$$$_handleEvent$$($eventType$$28$$, $event$$47$$) {
    var $i$$138$$;
    for ($i$$138$$ = 0;$i$$138$$ < this.$_eventHandlers$.length;$i$$138$$++) {
      var $eventHandler$$5$$ = this.$_eventHandlers$[$i$$138$$];
      $eventHandler$$5$$.eventType == $eventType$$28$$ && $eventHandler$$5$$.eventHandlerFunc($event$$47$$);
    }
  };
  $oj$$9$$.$RowSet$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", REFRESH:"refresh", SORT:"sort", CHANGE:"change", REQUEST:"request", SYNC:"sync", ERROR:"error"};
  $goog$exportPath_$$("RowSet.EventType", $oj$$9$$.$RowSet$.$EventType$, $oj$$9$$);
  $oj$$9$$.$RowSet$.$_ROW_STATUSES$ = {$_ADDED$:"added", $_DELETED$:"deleted", $_UPDATED$:"updated", $_NONE$:"none"};
  $goog$exportPath_$$("RowSet._ROW_STATUSES", $oj$$9$$.$RowSet$.$_ROW_STATUSES$, $oj$$9$$);
  $oj$$9$$.$ArrayRow$ = function $$oj$$9$$$$ArrayRow$$($attributes$$15$$, $options$$218$$) {
    $oj$$9$$.$ArrayRow$._init(this, $attributes$$15$$, $options$$218$$, null);
  };
  $goog$exportPath_$$("ArrayRow", $oj$$9$$.$ArrayRow$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$ArrayRow$, $oj$$9$$.$Row$, "ArrayRow.ArrayRow");
  $oj$$9$$.$ArrayRow$.prototype.Init = function $$oj$$9$$$$ArrayRow$$$Init$() {
    $oj$$9$$.$ArrayRow$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$ArrayRow$.prototype.attributes = {};
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.attributes", {attributes:$oj$$9$$.$ArrayRow$.prototype.attributes});
  $oj$$9$$.$ArrayRow$.prototype.id = null;
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.id", {id:$oj$$9$$.$ArrayRow$.prototype.id});
  $oj$$9$$.$ArrayRow$.prototype.$idAttribute$ = null;
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.idAttribute", {$idAttribute$:$oj$$9$$.$ArrayRow$.prototype.$idAttribute$});
  $oj$$9$$.$ArrayRow$._init = function $$oj$$9$$$$ArrayRow$$_init$($row$$4$$, $attributes$$16$$, $options$$219$$, $properties$$9$$) {
    var $prop$$57$$ = null;
    $row$$4$$.Init();
    $row$$4$$.index = -1;
    $options$$219$$ = $options$$219$$ || {};
    $row$$4$$.attributes = $attributes$$16$$;
    for ($prop$$57$$ in $properties$$9$$) {
      $properties$$9$$.hasOwnProperty($prop$$57$$) && ($row$$4$$[$prop$$57$$] = $properties$$9$$[$prop$$57$$]);
    }
    $row$$4$$.idAttribute = $options$$219$$.idAttribute;
    $row$$4$$.context = $options$$219$$.context;
    $row$$4$$.$_setupId$();
  };
  $oj$$9$$.$ArrayRow$.prototype.clone = function $$oj$$9$$$$ArrayRow$$$clone$() {
    var $c$$26$$ = new this.constructor, $prop$$58$$;
    for ($prop$$58$$ in this) {
      this.hasOwnProperty($prop$$58$$) && this[$prop$$58$$] !== this.attributes && ($c$$26$$[$prop$$58$$] = this[$prop$$58$$]);
    }
    $c$$26$$.attributes = $oj$$9$$.$ArrayRow$.$_cloneAttributes$(this.attributes, null);
    $c$$26$$.$_setupId$();
    return $c$$26$$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.clone", {clone:$oj$$9$$.$ArrayRow$.prototype.clone});
  $oj$$9$$.$ArrayRow$.prototype.get = function $$oj$$9$$$$ArrayRow$$$get$($property$$22$$) {
    return this.attributes[$property$$22$$];
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.get", {get:$oj$$9$$.$ArrayRow$.prototype.get});
  $oj$$9$$.$ArrayRow$.prototype.set = function $$oj$$9$$$$ArrayRow$$$set$($property$$23$$, $value$$159$$, $options$$220$$) {
    var $i$$139_opts$$10$$ = {}, $ignoreLastArg$$2$$ = !1;
    if (arguments && 0 < arguments.length) {
      if (1 < arguments.length && arguments[arguments.length - 1] && ($ignoreLastArg$$2$$ = !0, $i$$139_opts$$10$$ = arguments[arguments.length - 1] || {}), $oj$$9$$.$ArrayRow$.$_hasProperties$($property$$23$$)) {
        this.$_setProp$($property$$23$$, $i$$139_opts$$10$$);
      } else {
        for ($i$$139_opts$$10$$ = 0;$i$$139_opts$$10$$ < arguments.length;$i$$139_opts$$10$$ += 2) {
          (void 0 !== arguments[$i$$139_opts$$10$$] || $i$$139_opts$$10$$ < arguments.length - 1 || !$ignoreLastArg$$2$$ && $i$$139_opts$$10$$ === arguments.length - 1) && this.$_setProp$(arguments[$i$$139_opts$$10$$], arguments[$i$$139_opts$$10$$ + 1]);
        }
      }
    }
    return this;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.set", {set:$oj$$9$$.$ArrayRow$.prototype.set});
  $oj$$9$$.$ArrayRow$.prototype.keys = function $$oj$$9$$$$ArrayRow$$$keys$() {
    var $prop$$60$$, $retArray$$3$$ = [];
    for ($prop$$60$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$60$$) && $retArray$$3$$.push($prop$$60$$);
    }
    return $retArray$$3$$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.keys", {keys:$oj$$9$$.$ArrayRow$.prototype.keys});
  $oj$$9$$.$ArrayRow$.prototype.values = function $$oj$$9$$$$ArrayRow$$$values$() {
    var $prop$$61$$, $retArray$$4$$ = [];
    for ($prop$$61$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$61$$) && $retArray$$4$$.push(this.get($prop$$61$$));
    }
    return $retArray$$4$$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.values", {values:$oj$$9$$.$ArrayRow$.prototype.values});
  $oj$$9$$.$ArrayRow$.prototype.pairs = function $$oj$$9$$$$ArrayRow$$$pairs$() {
    var $prop$$62$$, $retObj$$7$$ = [], $item$$6$$;
    for ($prop$$62$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$62$$) && ($item$$6$$ = [], $item$$6$$.push($prop$$62$$), $item$$6$$.push(this.get($prop$$62$$)), $retObj$$7$$.push($item$$6$$));
    }
    return $retObj$$7$$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRow.prototype.pairs", {pairs:$oj$$9$$.$ArrayRow$.prototype.pairs});
  $oj$$9$$.$ArrayRow$.prototype.$_getIdAttr$ = function $$oj$$9$$$$ArrayRow$$$$_getIdAttr$$() {
    return this.idAttribute || "id";
  };
  $oj$$9$$.$ArrayRow$.prototype.$_getProp$ = function $$oj$$9$$$$ArrayRow$$$$_getProp$$($prop$$63$$) {
    return this[$prop$$63$$] instanceof Function ? this[$prop$$63$$]() : this[$prop$$63$$];
  };
  $oj$$9$$.$ArrayRow$.$_hasProperties$ = function $$oj$$9$$$$ArrayRow$$$_hasProperties$$($object$$5$$) {
    var $prop$$64$$;
    if ($object$$5$$ && $object$$5$$ instanceof Object) {
      for ($prop$$64$$ in $object$$5$$) {
        if ($object$$5$$.hasOwnProperty($prop$$64$$)) {
          return!0;
        }
      }
    }
    return!1;
  };
  $oj$$9$$.$ArrayRow$.prototype.$_setupId$ = function $$oj$$9$$$$ArrayRow$$$$_setupId$$() {
    var $idAttr$$2$$ = this.$_getIdAttr$();
    if ("string" === $$$$9$$.type($idAttr$$2$$)) {
      this.id = this.attributes[$idAttr$$2$$];
    } else {
      if ($$$$9$$.isArray($idAttr$$2$$)) {
        var $i$$140$$;
        this.id = [];
        for ($i$$140$$ = 0;$i$$140$$ < $idAttr$$2$$.length;$i$$140$$++) {
          this.id[$i$$140$$] = this.attributes[$idAttr$$2$$[$i$$140$$]];
        }
      }
    }
  };
  $oj$$9$$.$ArrayRow$.prototype.$_setPropInternal$ = function $$oj$$9$$$$ArrayRow$$$$_setPropInternal$$($prop$$65$$, $value$$160$$) {
    return $oj$$9$$.$Object$.$__innerEquals$(this.attributes[$prop$$65$$], $value$$160$$) ? !1 : (this.attributes[$prop$$65$$] = $value$$160$$, this.$_setupId$(), $oj$$9$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this.rowSet, $oj$$9$$.$RowSet$.$EventType$.CHANGE, this), !0);
  };
  $oj$$9$$.$ArrayRow$.prototype.$_setProp$ = function $$oj$$9$$$$ArrayRow$$$$_setProp$$($prop$$66$$, $value$$161$$) {
    if (null == $prop$$66$$) {
      return!0;
    }
    var $attrs$$17$$ = {}, $p$$5$$;
    if (1 < arguments.length) {
      $attrs$$17$$[$prop$$66$$] = $value$$161$$;
    } else {
      for ($p$$5$$ in $prop$$66$$) {
        $prop$$66$$.hasOwnProperty($p$$5$$) && ($attrs$$17$$[$p$$5$$] = $prop$$66$$[$p$$5$$]);
      }
    }
    for ($p$$5$$ in $attrs$$17$$) {
      $attrs$$17$$.hasOwnProperty($p$$5$$) && this.$_setPropInternal$($p$$5$$, $attrs$$17$$[$p$$5$$]);
    }
    return!0;
  };
  $oj$$9$$.$ArrayRow$.$_cloneAttributes$ = function $$oj$$9$$$$ArrayRow$$$_cloneAttributes$$($oldData$$1$$, $newData$$1$$) {
    var $prop$$67$$;
    $newData$$1$$ = $newData$$1$$ || {};
    for ($prop$$67$$ in $oldData$$1$$) {
      $oldData$$1$$.hasOwnProperty($prop$$67$$) && ("object" !== typeof $oldData$$1$$[$prop$$67$$] ? $newData$$1$$.hasOwnProperty($prop$$67$$) ? void 0 !== $oldData$$1$$[$prop$$67$$] && ($newData$$1$$[$prop$$67$$] = $oldData$$1$$[$prop$$67$$]) : $newData$$1$$[$prop$$67$$] = $oldData$$1$$[$prop$$67$$] : $newData$$1$$[$prop$$67$$] = $oj$$9$$.$ArrayRow$.$_cloneAttributes$($oldData$$1$$[$prop$$67$$], null));
    }
    return $newData$$1$$;
  };
  $oj$$9$$.$ArrayRowSet$ = function $$oj$$9$$$$ArrayRowSet$$($rows$$2$$, $options$$221$$) {
    $oj$$9$$.$ArrayRowSet$._init(this, $rows$$2$$, $options$$221$$, null);
  };
  $goog$exportPath_$$("ArrayRowSet", $oj$$9$$.$ArrayRowSet$, $oj$$9$$);
  $oj$$9$$.$ArrayRowSet$.prototype.$comparator$ = null;
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.comparator", {$comparator$:$oj$$9$$.$ArrayRowSet$.prototype.$comparator$});
  $oj$$9$$.$ArrayRowSet$.prototype.$sortSupported$ = !0;
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.sortSupported", {$sortSupported$:$oj$$9$$.$ArrayRowSet$.prototype.$sortSupported$});
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$ArrayRowSet$, $oj$$9$$.$RowSet$, "ArrayRowSet.ArrayRowSet");
  $oj$$9$$.$ArrayRowSet$.prototype.Init = function $$oj$$9$$$$ArrayRowSet$$$Init$() {
    $oj$$9$$.$ArrayRowSet$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$ArrayRowSet$._init = function $$oj$$9$$$$ArrayRowSet$$_init$($rowSet$$1$$, $rows$$3$$, $options$$222$$, $properties$$10$$) {
    var $prop$$68$$;
    $rowSet$$1$$.$_eventHandlers$ = [];
    $rowSet$$1$$.$_startIndex$ = 0;
    $rowSet$$1$$.Init();
    if ($properties$$10$$) {
      for ($prop$$68$$ in $properties$$10$$) {
        $properties$$10$$.hasOwnProperty($prop$$68$$) && ($rowSet$$1$$[$prop$$68$$] = $properties$$10$$[$prop$$68$$]);
      }
    }
    $options$$222$$ = $options$$222$$ || {};
    $rowSet$$1$$.$_rows$ = [];
    $rowSet$$1$$.$_pagedRows$ = [];
    null != $rows$$3$$ && void 0 !== $rows$$3$$ && ($rowSet$$1$$.$_idAttribute$ = "id", null != $options$$222$$ && null != $options$$222$$.idAttribute && ($rowSet$$1$$.$_idAttribute$ = $options$$222$$.idAttribute), $rowSet$$1$$.$_data$ = $rows$$3$$ instanceof Array ? $rows$$3$$ : $rows$$3$$(), $rowSet$$1$$.$_rows$ = $oj$$9$$.$ArrayRowSet$.$_getRowArray$($rowSet$$1$$.$_data$, $rowSet$$1$$.$_idAttribute$, $rowSet$$1$$), $rowSet$$1$$.$_totalSize$ = $rowSet$$1$$.$_data$.length, $rows$$3$$ instanceof 
    Array || $rows$$3$$.subscribe(function($changes$$3$$) {
      var $i$$141$$, $removeAll$$2_row$$5$$, $delIndx$$ = 0;
      $removeAll$$2_row$$5$$ = !0;
      for ($i$$141$$ = 0;$i$$141$$ < $changes$$3$$.length;$i$$141$$++) {
        "deleted" != $changes$$3$$[$i$$141$$].status && ($removeAll$$2_row$$5$$ = !1);
      }
      if (0 == $rows$$3$$().length && $removeAll$$2_row$$5$$) {
        $rowSet$$1$$.reset();
      } else {
        for ($i$$141$$ = 0;$i$$141$$ < $changes$$3$$.length;$i$$141$$++) {
          "deleted" === $changes$$3$$[$i$$141$$].status && ($removeAll$$2_row$$5$$ = new $oj$$9$$.$ArrayRow$($changes$$3$$[$i$$141$$].value, {idAttribute:$rowSet$$1$$.$_idAttribute$}), $removeAll$$2_row$$5$$.index = $changes$$3$$[$i$$141$$].index - $delIndx$$, $rowSet$$1$$.$_removeInternal$($removeAll$$2_row$$5$$, $changes$$3$$[$i$$141$$].index - $delIndx$$), $delIndx$$++);
        }
        for ($i$$141$$ = 0;$i$$141$$ < $changes$$3$$.length;$i$$141$$++) {
          "added" === $changes$$3$$[$i$$141$$].status && ($removeAll$$2_row$$5$$ = new $oj$$9$$.$ArrayRow$($changes$$3$$[$i$$141$$].value, {idAttribute:$rowSet$$1$$.$_idAttribute$}), $removeAll$$2_row$$5$$.index = $changes$$3$$[$i$$141$$].index, $rowSet$$1$$.add($removeAll$$2_row$$5$$, {at:$changes$$3$$[$i$$141$$].index}));
        }
      }
    }, null, "arrayChange"));
  };
  $oj$$9$$.$ArrayRowSet$.prototype.add = function $$oj$$9$$$$ArrayRowSet$$$add$($m$$18$$, $options$$223$$) {
    $options$$223$$ = $options$$223$$ || {};
    var $deferred$$26$$ = $options$$223$$.deferred;
    this.$_addToRowSet$($m$$18$$, $options$$223$$.at, $options$$223$$);
    return $deferred$$26$$ ? $oj$$9$$.$Object$.$__getPromise$(function($resolve$$24$$) {
      $resolve$$24$$();
    }) : null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.add", {add:$oj$$9$$.$ArrayRowSet$.prototype.add});
  $oj$$9$$.$ArrayRowSet$.prototype.at = function $$oj$$9$$$$ArrayRowSet$$$at$($index$$104$$, $options$$224$$) {
    $options$$224$$ = $options$$224$$ || {};
    if (0 > $index$$104$$ || $index$$104$$ >= this.$_rows$.length) {
      return null;
    }
    var $row$$6$$ = this.$_rows$[$index$$104$$];
    return $options$$224$$.deferred ? $oj$$9$$.$Object$.$__getPromise$(function($resolve$$25$$) {
      $resolve$$25$$($row$$6$$);
    }) : $row$$6$$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.at", {at:$oj$$9$$.$ArrayRowSet$.prototype.at});
  $oj$$9$$.$ArrayRowSet$.prototype.clone = function $$oj$$9$$$$ArrayRowSet$$$clone$() {
    var $rs$$ = new this.constructor, $i$$142$$, $row$$7$$;
    for ($i$$142$$ = 0;$i$$142$$ < this.$_rows$.length;$i$$142$$ += 1) {
      ($row$$7$$ = this.at($i$$142$$, null)) && $rs$$.add($row$$7$$.clone(), {at:$i$$142$$});
    }
    return $rs$$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.clone", {clone:$oj$$9$$.$ArrayRowSet$.prototype.clone});
  $oj$$9$$.$ArrayRowSet$.prototype.fetch = function $$oj$$9$$$$ArrayRowSet$$$fetch$($options$$225$$) {
    $options$$225$$ = $options$$225$$ || {};
    this.$_startFetch$();
    try {
      this.$_pageSize$ = 0 < $options$$225$$.pageSize ? $options$$225$$.pageSize : -1, this.$_startIndex$ = null != $options$$225$$ ? null != $options$$225$$.startIndex ? $options$$225$$.startIndex : 0 : 0, this.$_pagedRows$ = $oj$$9$$.$ArrayRowSet$.$_getPagedRows$(this.$_rows$, this.$_startIndex$, this.$_pageSize$);
    } catch ($err$$3$$) {
      this.$_endFetch$($options$$225$$, $err$$3$$);
      return;
    }
    $options$$225$$.pageSize = this.$_pageSize$;
    $options$$225$$.startIndex = this.$_startIndex$;
    $options$$225$$.refresh = !0;
    this.$_endFetch$($options$$225$$, null);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.fetch", {fetch:$oj$$9$$.$ArrayRowSet$.prototype.fetch});
  $oj$$9$$.$ArrayRowSet$.prototype.get = function $$oj$$9$$$$ArrayRowSet$$$get$($id$$14$$, $options$$226$$) {
    $options$$226$$ = $options$$226$$ || {};
    var $deferred$$28$$ = $options$$226$$.deferred, $i$$143$$, $j$$23$$, $row$$8$$, $result$$17$$ = null;
    for ($i$$143$$ = 0;$i$$143$$ < this.$_rows$.length;$i$$143$$ += 1) {
      if ($row$$8$$ = this.$_rows$[$i$$143$$], void 0 !== $row$$8$$) {
        if ($$$$9$$.isArray($row$$8$$.id) && $$$$9$$.isArray($id$$14$$)) {
          if ($row$$8$$.id.length == $id$$14$$.length) {
            var $equal$$ = !0;
            for ($j$$23$$ = 0;$j$$23$$ < $id$$14$$.length;$j$$23$$++) {
              if ($row$$8$$.id[$j$$23$$] != $id$$14$$[$j$$23$$]) {
                $equal$$ = !1;
                break;
              }
            }
            $equal$$ && ($result$$17$$ = $row$$8$$);
          }
        } else {
          $row$$8$$.id == $id$$14$$ && ($result$$17$$ = $row$$8$$);
        }
        if (null != $result$$17$$) {
          return $deferred$$28$$ ? $oj$$9$$.$Object$.$__getPromise$(function($resolve$$26$$) {
            $resolve$$26$$($result$$17$$);
          }) : $result$$17$$;
        }
      }
    }
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.get", {get:$oj$$9$$.$ArrayRowSet$.prototype.get});
  $oj$$9$$.$ArrayRowSet$.prototype.hasMore = function $$oj$$9$$$$ArrayRowSet$$$hasMore$() {
    return!1;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.hasMore", {hasMore:$oj$$9$$.$ArrayRowSet$.prototype.hasMore});
  $oj$$9$$.$ArrayRowSet$.prototype.indexOf = function $$oj$$9$$$$ArrayRowSet$$$indexOf$($row$$9$$, $options$$227$$) {
    $options$$227$$ = $options$$227$$ || {};
    return $options$$227$$.deferred ? this.get($row$$9$$.id, null).then(function($loc$$2$$) {
      return $loc$$2$$.index;
    }) : this.get($row$$9$$.id).index;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.indexOf", {indexOf:$oj$$9$$.$ArrayRowSet$.prototype.indexOf});
  $oj$$9$$.$ArrayRowSet$.prototype.isEmpty = function $$oj$$9$$$$ArrayRowSet$$$isEmpty$() {
    return 0 === this.$_pagedRows$.length;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.isEmpty", {isEmpty:$oj$$9$$.$ArrayRowSet$.prototype.isEmpty});
  $oj$$9$$.$ArrayRowSet$.prototype.remove = function $$oj$$9$$$$ArrayRowSet$$$remove$($m$$19$$, $options$$228$$) {
    $options$$228$$ = $options$$228$$ || {};
    this.$_removeInternal$($m$$19$$, -1, $options$$228$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.remove", {remove:$oj$$9$$.$ArrayRowSet$.prototype.remove});
  $oj$$9$$.$ArrayRowSet$.prototype.reset = function $$oj$$9$$$$ArrayRowSet$$$reset$($data$$52$$, $options$$229$$) {
    var $i$$144$$;
    $options$$229$$ = $options$$229$$ || {};
    $options$$229$$.previousRows = this.$_rows$;
    var $silent$$20$$ = $options$$229$$.silent;
    if (void 0 === $data$$52$$ || null == $data$$52$$ || $data$$52$$ instanceof Array && 0 == $data$$52$$.length) {
      for ($i$$144$$ = 0;$i$$144$$ < this.$_rows$.length;$i$$144$$ += 1) {
        this.$_rows$[$i$$144$$] && (this.$_rows$[$i$$144$$].rowSet = null);
      }
      this.$_pagedRows$ = [];
      this.$_rows$ = [];
      this.$_totalSize$ = 0;
    } else {
      if (this.$_rows$ = [], this.$_pagedRows$ = [], this.$_totalSize$ = 0, $data$$52$$ instanceof Array) {
        for ($i$$144$$ = 0;$i$$144$$ < $data$$52$$.length;$i$$144$$ += 1) {
          this.add($data$$52$$[$i$$144$$], $options$$229$$);
        }
      } else {
        this.add($data$$52$$, $options$$229$$);
      }
    }
    $silent$$20$$ || $oj$$9$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$9$$.$RowSet$.$EventType$.RESET, null);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.reset", {reset:$oj$$9$$.$ArrayRowSet$.prototype.reset});
  $oj$$9$$.$ArrayRowSet$.prototype.size = function $$oj$$9$$$$ArrayRowSet$$$size$() {
    return this.$_pagedRows$.length;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.size", {size:$oj$$9$$.$ArrayRowSet$.prototype.size});
  $oj$$9$$.$ArrayRowSet$.prototype.sort = function $$oj$$9$$$$ArrayRowSet$$$sort$() {
    var $comparator$$10$$ = this.comparator, $self$$44$$;
    this.$_hasComparator$() && ($self$$44$$ = this, this.$_rows$.sort(function($a$$69$$, $b$$42$$) {
      return $oj$$9$$.$ArrayRowSet$.$_sortFunc$($a$$69$$, $b$$42$$, $comparator$$10$$, $self$$44$$, $self$$44$$);
    }), this.$_realignRowIndices$(0, this.$_rows$), this.$_pagedRows$ = $oj$$9$$.$ArrayRowSet$.$_getPagedRows$(this.$_rows$, this.$_startIndex$, this.$_pageSize$), this.$_sorted$ = !0, $oj$$9$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$9$$.$RowSet$.$EventType$.SORT, null));
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.sort", {sort:$oj$$9$$.$ArrayRowSet$.prototype.sort});
  $oj$$9$$.$ArrayRowSet$.prototype.totalSize = function $$oj$$9$$$$ArrayRowSet$$$totalSize$() {
    return this.$_totalSize$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("ArrayRowSet.prototype.totalSize", {totalSize:$oj$$9$$.$ArrayRowSet$.prototype.totalSize});
  $oj$$9$$.$ArrayRowSet$.prototype.$_addToRowSet$ = function $$oj$$9$$$$ArrayRowSet$$$$_addToRowSet$$($m$$20$$, $index$$105$$, $i$$145_options$$230$$) {
    var $j$$24$$, $row$$10$$;
    $i$$145_options$$230$$ = $i$$145_options$$230$$ || {};
    var $silent$$21$$ = $i$$145_options$$230$$.silent;
    $m$$20$$ instanceof Array || ($m$$20$$ = [$m$$20$$]);
    for ($i$$145_options$$230$$ = 0;$i$$145_options$$230$$ < $m$$20$$.length;$i$$145_options$$230$$++) {
      $row$$10$$ = $m$$20$$[$i$$145_options$$230$$];
      $row$$10$$ instanceof $oj$$9$$.$ArrayRow$ || ($row$$10$$ = new $oj$$9$$.$ArrayRow$($row$$10$$, {idAttribute:this.$_idAttribute$}));
      this.$_pagedRows$ && 0 != this.$_pagedRows$.length || (this.$_pagedRows$ = $oj$$9$$.$ArrayRowSet$.$_getPagedRows$(this.$_rows$, this.$_startIndex$, this.$_pageSize$));
      if (!0 == this.$_sorted$ && 0 < this.$_rows$.length) {
        for ($j$$24$$ = 0;$j$$24$$ < this.$_rows$.length;$j$$24$$++) {
          if (0 > $oj$$9$$.$ArrayRowSet$.$_sortFunc$($row$$10$$, this.$_rows$[$j$$24$$], this.comparator, this, this)) {
            this.$_rows$.splice($j$$24$$, 0, $row$$10$$);
            $row$$10$$.index = $j$$24$$;
            break;
          } else {
            if ($j$$24$$ == this.$_rows$.length - 1) {
              this.$_rows$.push($row$$10$$);
              $row$$10$$.index = $j$$24$$ + 1;
              break;
            }
          }
        }
      } else {
        void 0 === $index$$105$$ ? (this.$_rows$.push($row$$10$$), $row$$10$$.index = this.$_rows$.length - 1) : (this.$_rows$.splice($index$$105$$ + $i$$145_options$$230$$, 0, $row$$10$$), $row$$10$$.index = $index$$105$$ + $i$$145_options$$230$$);
      }
      $row$$10$$.rowSet = this;
      $row$$10$$.index <= $oj$$9$$.$ArrayRowSet$.$_getEndIndex$(this.$_rows$, this.$_startIndex$, this.$_pageSize$) && this.$_pagedRows$.splice($row$$10$$.index, 0, $row$$10$$);
      this.$_totalSize$++;
      $row$$10$$.index != this.$_rows$.length - 1 && this.$_realignRowIndices$(0, this.$_rows$);
      $silent$$21$$ || $oj$$9$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$9$$.$RowSet$.$EventType$.ADD, $row$$10$$);
    }
  };
  $oj$$9$$.$ArrayRowSet$.prototype.$_getSortAttrs$ = function $$oj$$9$$$$ArrayRowSet$$$$_getSortAttrs$$($sortStr$$1$$) {
    return void 0 === $sortStr$$1$$ ? [] : $sortStr$$1$$.split(",");
  };
  $oj$$9$$.$ArrayRowSet$.prototype.$_getSortDirStr$ = function $$oj$$9$$$$ArrayRowSet$$$$_getSortDirStr$$() {
    return-1 === this.sortDirection ? "dsc" : "asc";
  };
  $oj$$9$$.$ArrayRowSet$.prototype.$_hasComparator$ = function $$oj$$9$$$$ArrayRowSet$$$$_hasComparator$$() {
    var $comparator$$11$$ = this.comparator;
    return void 0 !== $comparator$$11$$ && null !== $comparator$$11$$;
  };
  $oj$$9$$.$ArrayRowSet$.prototype.$_realignRowIndices$ = function $$oj$$9$$$$ArrayRowSet$$$$_realignRowIndices$$($start$$21$$, $rows$$4$$) {
    for (var $row$$11$$, $i$$146$$ = $start$$21$$;$i$$146$$ < $rows$$4$$.length;$i$$146$$++) {
      ($row$$11$$ = $rows$$4$$[$i$$146$$]) && ($row$$11$$.index = $i$$146$$);
    }
  };
  $oj$$9$$.$ArrayRowSet$.prototype.$_removeInternal$ = function $$oj$$9$$$$ArrayRowSet$$$$_removeInternal$$($m$$21$$, $index$$106$$, $options$$231$$) {
    var $i$$147$$, $row$$12$$;
    $options$$231$$ = $options$$231$$ || {};
    var $silent$$22$$ = $options$$231$$.silent;
    $m$$21$$ instanceof Array || ($m$$21$$ = [$m$$21$$]);
    for ($i$$147$$ = 0;$i$$147$$ < $m$$21$$.length;$i$$147$$++) {
      if ($row$$12$$ = $m$$21$$[$i$$147$$], (0 > $index$$106$$ || !0 == this.$_sorted$) && null != this.get($row$$12$$.id) && ($index$$106$$ = this.get($row$$12$$.id).index), -1 < $index$$106$$) {
        void 0 !== $row$$12$$ && $row$$12$$.$rowSet$ === this && ($row$$12$$.$rowSet$ = null);
        var $endIndex$$1$$ = $oj$$9$$.$ArrayRowSet$.$_getEndIndex$(this.$_rows$, this.$_startIndex$, this.$_pageSize$);
        this.$_rows$.splice($index$$106$$, 1);
        $index$$106$$ <= $endIndex$$1$$ && this.$_pagedRows$.splice($index$$106$$, 1);
        this.$_totalSize$--;
        this.$_realignRowIndices$(0, this.$_rows$);
        $silent$$22$$ || ($options$$231$$.index = $index$$106$$, void 0 !== $row$$12$$ && ($silent$$22$$ || $oj$$9$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$9$$.$RowSet$.$EventType$.REMOVE, $row$$12$$)));
      }
    }
    return $row$$12$$;
  };
  $oj$$9$$.$ArrayRowSet$.prototype.$_startFetch$ = function $$oj$$9$$$$ArrayRowSet$$$$_startFetch$$() {
    $oj$$9$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$9$$.$RowSet$.$EventType$.REQUEST, null);
  };
  $oj$$9$$.$ArrayRowSet$.prototype.$_endFetch$ = function $$oj$$9$$$$ArrayRowSet$$$$_endFetch$$($options$$232$$, $e$$46$$) {
    $options$$232$$ = $options$$232$$ || {};
    var $success$$15$$ = $options$$232$$.success, $error$$18$$ = $options$$232$$.error;
    null != $e$$46$$ ? ($oj$$9$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$9$$.$RowSet$.$EventType$.ERROR, $e$$46$$), $error$$18$$ && $error$$18$$.call(this, $options$$232$$, $e$$46$$)) : ($oj$$9$$.$ArrayRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$9$$.$RowSet$.$EventType$.SYNC, $options$$232$$), $success$$15$$ && $success$$15$$.call(this, $options$$232$$));
  };
  $oj$$9$$.$ArrayRowSet$.$_compareKeys$ = function $$oj$$9$$$$ArrayRowSet$$$_compareKeys$$($keyA$$4$$, $keyB$$4$$, $sortDirection$$1$$) {
    if (-1 === $sortDirection$$1$$) {
      if ($keyA$$4$$ < $keyB$$4$$) {
        return 1;
      }
      if ($keyB$$4$$ < $keyA$$4$$) {
        return-1;
      }
    } else {
      if ($keyA$$4$$ > $keyB$$4$$) {
        return 1;
      }
      if ($keyB$$4$$ > $keyA$$4$$) {
        return-1;
      }
    }
    return 0;
  };
  $oj$$9$$.$ArrayRowSet$.$_getEndIndex$ = function $$oj$$9$$$$ArrayRowSet$$$_getEndIndex$$($rows$$5$$, $startIndex$$1$$, $pageSize$$) {
    var $endIndex$$2$$ = $rows$$5$$.length - 1;
    0 < $pageSize$$ && ($endIndex$$2$$ = $startIndex$$1$$ + $pageSize$$ - 1, $endIndex$$2$$ = $endIndex$$2$$ > $rows$$5$$.length - 1 ? $rows$$5$$.length - 1 : $endIndex$$2$$);
    return $endIndex$$2$$;
  };
  $oj$$9$$.$ArrayRowSet$.$_getKey$ = function $$oj$$9$$$$ArrayRowSet$$$_getKey$$($val$$27$$, $attr$$14$$) {
    return $val$$27$$ instanceof $oj$$9$$.$Row$ ? $val$$27$$.get($attr$$14$$) : $$$$9$$.isFunction($val$$27$$[$attr$$14$$]) ? $val$$27$$[$attr$$14$$]() : $val$$27$$[$attr$$14$$];
  };
  $oj$$9$$.$ArrayRowSet$.$_getPagedRows$ = function $$oj$$9$$$$ArrayRowSet$$$_getPagedRows$$($rows$$6$$, $endIndex$$3_startIndex$$2$$, $pageSize$$1_pagedRowArray$$) {
    $endIndex$$3_startIndex$$2$$ = $oj$$9$$.$ArrayRowSet$.$_getEndIndex$($rows$$6$$, $endIndex$$3_startIndex$$2$$, $pageSize$$1_pagedRowArray$$);
    $pageSize$$1_pagedRowArray$$ = [];
    var $i$$148$$, $row$$14$$;
    for ($i$$148$$ = 0;$i$$148$$ <= $endIndex$$3_startIndex$$2$$;$i$$148$$++) {
      $row$$14$$ = $rows$$6$$[$i$$148$$], $row$$14$$.index = $i$$148$$, $pageSize$$1_pagedRowArray$$[$i$$148$$] = $row$$14$$;
    }
    return $pageSize$$1_pagedRowArray$$;
  };
  $oj$$9$$.$ArrayRowSet$.$_getRowArray$ = function $$oj$$9$$$$ArrayRowSet$$$_getRowArray$$($values$$10$$, $idAttribute$$, $rowSet$$2$$) {
    var $endIndex$$4$$ = $values$$10$$.length - 1, $rowArray$$ = [], $i$$149$$, $prop$$69$$;
    for ($i$$149$$ = 0;$i$$149$$ <= $endIndex$$4$$;$i$$149$$++) {
      var $clonedRowValues_row$$15$$ = {}, $rowValues$$ = null, $rowValues$$ = $values$$10$$[$i$$149$$] instanceof $oj$$9$$.$Row$ ? $values$$10$$[$i$$149$$].pairs() : $values$$10$$[$i$$149$$];
      for ($prop$$69$$ in $rowValues$$) {
        $rowValues$$.hasOwnProperty($prop$$69$$) && ($clonedRowValues_row$$15$$[$prop$$69$$] = $rowValues$$[$prop$$69$$]);
      }
      $clonedRowValues_row$$15$$ = new $oj$$9$$.$ArrayRow$($clonedRowValues_row$$15$$, {idAttribute:$idAttribute$$});
      $clonedRowValues_row$$15$$.index = $i$$149$$;
      $rowArray$$[$i$$149$$] = $clonedRowValues_row$$15$$;
      $clonedRowValues_row$$15$$.rowSet = $rowSet$$2$$;
    }
    return $rowArray$$;
  };
  $oj$$9$$.$ArrayRowSet$.$_sortFunc$ = function $$oj$$9$$$$ArrayRowSet$$$_sortFunc$$($a$$70_attrs1$$2$$, $attrs2$$2_b$$43$$, $comparator$$12_i$$150$$, $rowSet$$3$$, $keyB$$5_self$$46$$) {
    var $keyA$$5_retVal$$6$$;
    if ($$$$9$$.isFunction($comparator$$12_i$$150$$)) {
      if (1 === $comparator$$12_i$$150$$.length) {
        $keyA$$5_retVal$$6$$ = $comparator$$12_i$$150$$.call($keyB$$5_self$$46$$, $a$$70_attrs1$$2$$);
        $keyB$$5_self$$46$$ = $comparator$$12_i$$150$$.call($keyB$$5_self$$46$$, $attrs2$$2_b$$43$$);
        $a$$70_attrs1$$2$$ = $oj$$9$$.$StringUtils$.$isString$($keyA$$5_retVal$$6$$) ? $keyA$$5_retVal$$6$$.split(",") : [$keyA$$5_retVal$$6$$];
        $attrs2$$2_b$$43$$ = $oj$$9$$.$StringUtils$.$isString$($keyB$$5_self$$46$$) ? $keyB$$5_self$$46$$.split(",") : [$keyB$$5_self$$46$$];
        for ($comparator$$12_i$$150$$ = 0;$comparator$$12_i$$150$$ < $a$$70_attrs1$$2$$.length;$comparator$$12_i$$150$$++) {
          if ($keyA$$5_retVal$$6$$ = $oj$$9$$.$ArrayRowSet$.$_compareKeys$($a$$70_attrs1$$2$$[$comparator$$12_i$$150$$], $attrs2$$2_b$$43$$[$comparator$$12_i$$150$$], $rowSet$$3$$.sortDirection), 0 !== $keyA$$5_retVal$$6$$) {
            return $keyA$$5_retVal$$6$$;
          }
        }
        return 0;
      }
      return $comparator$$12_i$$150$$.call($keyB$$5_self$$46$$, $a$$70_attrs1$$2$$, $attrs2$$2_b$$43$$);
    }
    if ($oj$$9$$.$StringUtils$.$isString$($comparator$$12_i$$150$$)) {
      var $attrs$$18$$ = $comparator$$12_i$$150$$.split(",");
      for ($comparator$$12_i$$150$$ = 0;$comparator$$12_i$$150$$ < $attrs$$18$$.length;$comparator$$12_i$$150$$++) {
        if ($keyA$$5_retVal$$6$$ = $oj$$9$$.$ArrayRowSet$.$_getKey$($a$$70_attrs1$$2$$, $attrs$$18$$[$comparator$$12_i$$150$$]), $keyB$$5_self$$46$$ = $oj$$9$$.$ArrayRowSet$.$_getKey$($attrs2$$2_b$$43$$, $attrs$$18$$[$comparator$$12_i$$150$$]), $keyA$$5_retVal$$6$$ = $oj$$9$$.$ArrayRowSet$.$_compareKeys$($keyA$$5_retVal$$6$$, $keyB$$5_self$$46$$, $rowSet$$3$$.sortDirection), 0 !== $keyA$$5_retVal$$6$$) {
          return $keyA$$5_retVal$$6$$;
        }
      }
    }
    return 0;
  };
  $oj$$9$$.$EmptyNodeSet$ = function $$oj$$9$$$$EmptyNodeSet$$($parent$$24$$, $start$$22$$) {
    this.$m_parent$ = $parent$$24$$;
    this.$m_start$ = $start$$22$$;
  };
  $goog$exportPath_$$("EmptyNodeSet", $oj$$9$$.$EmptyNodeSet$, $oj$$9$$);
  $oj$$9$$.$EmptyNodeSet$.prototype.getParent = function $$oj$$9$$$$EmptyNodeSet$$$getParent$() {
    return this.$m_parent$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getParent", {getParent:$oj$$9$$.$EmptyNodeSet$.prototype.getParent});
  $oj$$9$$.$EmptyNodeSet$.prototype.$getStart$ = function $$oj$$9$$$$EmptyNodeSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getStart", {$getStart$:$oj$$9$$.$EmptyNodeSet$.prototype.$getStart$});
  $oj$$9$$.$EmptyNodeSet$.prototype.$getCount$ = function $$oj$$9$$$$EmptyNodeSet$$$$getCount$$() {
    return 0;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getCount", {$getCount$:$oj$$9$$.$EmptyNodeSet$.prototype.$getCount$});
  $oj$$9$$.$EmptyNodeSet$.prototype.getData = function $$oj$$9$$$$EmptyNodeSet$$$getData$() {
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getData", {getData:$oj$$9$$.$EmptyNodeSet$.prototype.getData});
  $oj$$9$$.$EmptyNodeSet$.prototype.getMetadata = function $$oj$$9$$$$EmptyNodeSet$$$getMetadata$() {
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getMetadata", {getMetadata:$oj$$9$$.$EmptyNodeSet$.prototype.getMetadata});
  $oj$$9$$.$MergedNodeSet$ = function $$oj$$9$$$$MergedNodeSet$$($nodeSet1$$, $nodeSet2$$, $mergeAt$$) {
    this.$m_nodeSet1$ = $nodeSet1$$;
    this.$m_nodeSet2$ = $nodeSet2$$;
    this.$m_mergeAt$ = this.$_findIndex$($mergeAt$$);
  };
  $goog$exportPath_$$("MergedNodeSet", $oj$$9$$.$MergedNodeSet$, $oj$$9$$);
  $oj$$9$$.$MergedNodeSet$.prototype.$_findIndex$ = function $$oj$$9$$$$MergedNodeSet$$$$_findIndex$$($key$$51$$) {
    var $i$$151_start$$23$$, $end$$5$$, $rowKey$$11$$;
    $i$$151_start$$23$$ = this.$m_nodeSet1$.$getStart$();
    for ($end$$5$$ = $i$$151_start$$23$$ + this.$m_nodeSet1$.$getCount$();$i$$151_start$$23$$ < $end$$5$$;$i$$151_start$$23$$++) {
      if ($rowKey$$11$$ = this.$m_nodeSet1$.getMetadata($i$$151_start$$23$$).key, $key$$51$$ === $rowKey$$11$$) {
        return $i$$151_start$$23$$;
      }
    }
    return $end$$5$$ - 1;
  };
  $oj$$9$$.$MergedNodeSet$.prototype.getParent = function $$oj$$9$$$$MergedNodeSet$$$getParent$() {
    return this.$m_nodeSet1$.getParent();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getParent", {getParent:$oj$$9$$.$MergedNodeSet$.prototype.getParent});
  $oj$$9$$.$MergedNodeSet$.prototype.$getStart$ = function $$oj$$9$$$$MergedNodeSet$$$$getStart$$() {
    return this.$m_nodeSet1$.$getStart$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getStart", {$getStart$:$oj$$9$$.$MergedNodeSet$.prototype.$getStart$});
  $oj$$9$$.$MergedNodeSet$.prototype.$getCount$ = function $$oj$$9$$$$MergedNodeSet$$$$getCount$$() {
    return this.$m_nodeSet1$.$getCount$() + this.$m_nodeSet2$.$getCount$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getCount", {$getCount$:$oj$$9$$.$MergedNodeSet$.prototype.$getCount$});
  $oj$$9$$.$MergedNodeSet$.prototype.getData = function $$oj$$9$$$$MergedNodeSet$$$getData$($index$$110_result$$18$$) {
    $index$$110_result$$18$$ = this.$_getRelativeIndex$($index$$110_result$$18$$);
    return $index$$110_result$$18$$.set.getData($index$$110_result$$18$$.index);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getData", {getData:$oj$$9$$.$MergedNodeSet$.prototype.getData});
  $oj$$9$$.$MergedNodeSet$.prototype.getMetadata = function $$oj$$9$$$$MergedNodeSet$$$getMetadata$($index$$111_result$$19$$) {
    $index$$111_result$$19$$ = this.$_getRelativeIndex$($index$$111_result$$19$$);
    return $index$$111_result$$19$$.set.getMetadata($index$$111_result$$19$$.index);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getMetadata", {getMetadata:$oj$$9$$.$MergedNodeSet$.prototype.getMetadata});
  $oj$$9$$.$MergedNodeSet$.prototype.$_getRelativeIndex$ = function $$oj$$9$$$$MergedNodeSet$$$$_getRelativeIndex$$($index$$112$$) {
    if ($index$$112$$ <= this.$m_mergeAt$) {
      return{set:this.$m_nodeSet1$, index:$index$$112$$};
    }
    var $count$$29$$ = this.$m_nodeSet2$.$getCount$();
    return $index$$112$$ > this.$m_mergeAt$ + $count$$29$$ ? {set:this.$m_nodeSet1$, index:$index$$112$$ - $count$$29$$} : {set:this.$m_nodeSet2$, index:$index$$112$$ - (this.$m_mergeAt$ + 1)};
  };
  $oj$$9$$.$NodeSetWrapper$ = function $$oj$$9$$$$NodeSetWrapper$$($nodeSet$$16$$, $metadataCallback$$, $range$$15$$) {
    this.$m_nodeSet$ = $nodeSet$$16$$;
    this.$m_callback$ = $metadataCallback$$;
    this.$m_range$ = $range$$15$$;
  };
  $goog$exportPath_$$("NodeSetWrapper", $oj$$9$$.$NodeSetWrapper$, $oj$$9$$);
  $oj$$9$$.$NodeSetWrapper$.prototype.getParent = function $$oj$$9$$$$NodeSetWrapper$$$getParent$() {
    return this.$m_nodeSet$.getParent();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getParent", {getParent:$oj$$9$$.$NodeSetWrapper$.prototype.getParent});
  $oj$$9$$.$NodeSetWrapper$.prototype.$getStart$ = function $$oj$$9$$$$NodeSetWrapper$$$$getStart$$() {
    return null != this.$m_range$ ? this.$m_range$.start : this.$m_nodeSet$.$getStart$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getStart", {$getStart$:$oj$$9$$.$NodeSetWrapper$.prototype.$getStart$});
  $oj$$9$$.$NodeSetWrapper$.prototype.$getCount$ = function $$oj$$9$$$$NodeSetWrapper$$$$getCount$$() {
    var $nodeStart$$2$$, $nodeCount$$2$$;
    $nodeStart$$2$$ = this.$m_nodeSet$.$getStart$();
    $nodeCount$$2$$ = this.$m_nodeSet$.$getCount$();
    null != this.$m_range$ && (this.$m_range$.start > $nodeStart$$2$$ ? $nodeCount$$2$$ = Math.min(0, $nodeCount$$2$$ - (this.$m_range$.start - $nodeStart$$2$$)) : this.$m_range$.start < $nodeStart$$2$$ && ($nodeCount$$2$$ = 0));
    return $nodeCount$$2$$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getCount", {$getCount$:$oj$$9$$.$NodeSetWrapper$.prototype.$getCount$});
  $oj$$9$$.$NodeSetWrapper$.prototype.getData = function $$oj$$9$$$$NodeSetWrapper$$$getData$($index$$113$$) {
    return this.$m_nodeSet$.getData($index$$113$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getData", {getData:$oj$$9$$.$NodeSetWrapper$.prototype.getData});
  $oj$$9$$.$NodeSetWrapper$.prototype.getMetadata = function $$oj$$9$$$$NodeSetWrapper$$$getMetadata$($index$$114$$) {
    var $metadata$$7$$;
    $metadata$$7$$ = this.$m_nodeSet$.getMetadata($index$$114$$);
    $metadata$$7$$.index = $index$$114$$;
    $metadata$$7$$.parentKey = this.getParent();
    this.$m_callback$.call(null, $metadata$$7$$.key, $metadata$$7$$);
    return $metadata$$7$$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getMetadata", {getMetadata:$oj$$9$$.$NodeSetWrapper$.prototype.getMetadata});
  $oj$$9$$.$NodeSetWrapper$.prototype.$getChildNodeSet$ = function $$oj$$9$$$$NodeSetWrapper$$$$getChildNodeSet$$($index$$115_result$$20$$) {
    return this.$m_nodeSet$.$getChildNodeSet$ && ($index$$115_result$$20$$ = this.$m_nodeSet$.$getChildNodeSet$($index$$115_result$$20$$), null != $index$$115_result$$20$$) ? new $oj$$9$$.$NodeSetWrapper$($index$$115_result$$20$$, this.$m_callback$) : null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$9$$.$NodeSetWrapper$.prototype.$getChildNodeSet$});
  $oj$$9$$.$JsonNodeSet$ = function $$oj$$9$$$$JsonNodeSet$$($startNode$$, $endNode$$, $data$$53$$, $currKey$$) {
    $oj$$9$$.$Assert$.$assertNumber$($startNode$$, null);
    $oj$$9$$.$Assert$.$assertNumber$($endNode$$, null);
    this.$m_key$ = $currKey$$;
    this.$m_startNode$ = $startNode$$;
    this.$m_endNode$ = $endNode$$;
    this.$m_nodes$ = $data$$53$$;
  };
  $goog$exportPath_$$("JsonNodeSet", $oj$$9$$.$JsonNodeSet$, $oj$$9$$);
  $oj$$9$$.$JsonNodeSet$.prototype.getParent = function $$oj$$9$$$$JsonNodeSet$$$getParent$() {
    return this.$m_key$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getParent", {getParent:$oj$$9$$.$JsonNodeSet$.prototype.getParent});
  $oj$$9$$.$JsonNodeSet$.prototype.$getStart$ = function $$oj$$9$$$$JsonNodeSet$$$$getStart$$() {
    return this.$m_startNode$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getStart", {$getStart$:$oj$$9$$.$JsonNodeSet$.prototype.$getStart$});
  $oj$$9$$.$JsonNodeSet$.prototype.$getCount$ = function $$oj$$9$$$$JsonNodeSet$$$$getCount$$() {
    return Math.max(0, this.$m_endNode$ - this.$m_startNode$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getCount", {$getCount$:$oj$$9$$.$JsonNodeSet$.prototype.$getCount$});
  $oj$$9$$.$JsonNodeSet$.prototype.getData = function $$oj$$9$$$$JsonNodeSet$$$getData$($index$$116$$) {
    $oj$$9$$.$Assert$.assert($index$$116$$ <= this.$m_endNode$ && $index$$116$$ >= this.$m_startNode$);
    $index$$116$$ -= this.$m_startNode$;
    return this.$m_nodes$[$index$$116$$] ? this.$m_nodes$[$index$$116$$].attr : null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getData", {getData:$oj$$9$$.$JsonNodeSet$.prototype.getData});
  $oj$$9$$.$JsonNodeSet$.prototype.getMetadata = function $$oj$$9$$$$JsonNodeSet$$$getMetadata$($index$$117$$) {
    var $metadata$$8$$ = [];
    $oj$$9$$.$Assert$.assert($index$$117$$ <= this.$m_endNode$ && $index$$117$$ >= this.$m_startNode$);
    $index$$117$$ -= this.$m_startNode$;
    $metadata$$8$$.key = this.$m_nodes$[$index$$117$$].id ? this.$m_nodes$[$index$$117$$].id : this.$m_nodes$[$index$$117$$].attr.id;
    $metadata$$8$$.leaf = this.$m_nodes$[$index$$117$$].$leaf$;
    $metadata$$8$$.depth = this.$m_nodes$[$index$$117$$].depth;
    null == $metadata$$8$$.leaf && ($metadata$$8$$.leaf = this.$m_nodes$[$index$$117$$].children && 0 < this.$m_nodes$[$index$$117$$].children.length ? !1 : !0);
    return $metadata$$8$$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getMetadata", {getMetadata:$oj$$9$$.$JsonNodeSet$.prototype.getMetadata});
  $oj$$9$$.$JsonNodeSet$.prototype.$_updateDepth$ = function $$oj$$9$$$$JsonNodeSet$$$$_updateDepth$$($currChild$$3$$, $offset$$16$$) {
    var $i$$152$$;
    $offset$$16$$++;
    $currChild$$3$$.depth = $offset$$16$$;
    if ($currChild$$3$$.children && 0 != $currChild$$3$$.children.length) {
      for ($i$$152$$ = 0;$i$$152$$ < $currChild$$3$$.children.length;$i$$152$$++) {
        this.$_updateDepth$($currChild$$3$$.children[$i$$152$$], $offset$$16$$);
      }
    }
  };
  $oj$$9$$.$JsonNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$9$$$$JsonNodeSet$$$$getChildNodeSet$$($index$$118_key$$52$$) {
    var $results$$2$$, $depth$$17$$, $i$$153$$;
    $oj$$9$$.$Assert$.assert($index$$118_key$$52$$ <= this.$m_endNode$ && $index$$118_key$$52$$ >= this.$m_startNode$);
    $index$$118_key$$52$$ -= this.$m_startNode$;
    $depth$$17$$ = this.$m_nodes$[$index$$118_key$$52$$].depth;
    $results$$2$$ = this.$m_nodes$[$index$$118_key$$52$$].children;
    if (0 == $results$$2$$.length) {
      return null;
    }
    $index$$118_key$$52$$ = this.$m_nodes$[$index$$118_key$$52$$].id ? this.$m_nodes$[$index$$118_key$$52$$].id : this.$m_nodes$[$index$$118_key$$52$$].attr.id;
    for ($i$$153$$ = 0;$i$$153$$ < $results$$2$$.length;$i$$153$$++) {
      this.$_updateDepth$($results$$2$$[$i$$153$$], $depth$$17$$);
    }
    return new $oj$$9$$.$JsonNodeSet$(0, $results$$2$$.length, $results$$2$$, $index$$118_key$$52$$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$9$$.$JsonNodeSet$.prototype.$getChildNodeSet$});
  $oj$$9$$.$FlattenedNodeSet$ = function $$oj$$9$$$$FlattenedNodeSet$$($nodeSet$$17$$, $actualStart$$1$$) {
    this.$m_nodeSet$ = $nodeSet$$17$$;
    this.$m_start$ = $actualStart$$1$$;
  };
  $goog$exportPath_$$("FlattenedNodeSet", $oj$$9$$.$FlattenedNodeSet$, $oj$$9$$);
  $oj$$9$$.$FlattenedNodeSet$.prototype.getParent = function $$oj$$9$$$$FlattenedNodeSet$$$getParent$() {
    return this.$m_nodeSet$.getParent();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getParent", {getParent:$oj$$9$$.$FlattenedNodeSet$.prototype.getParent});
  $oj$$9$$.$FlattenedNodeSet$.prototype.$getStart$ = function $$oj$$9$$$$FlattenedNodeSet$$$$getStart$$() {
    return void 0 != this.$m_start$ ? this.$m_start$ : this.$m_nodeSet$.$getStart$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getStart", {$getStart$:$oj$$9$$.$FlattenedNodeSet$.prototype.$getStart$});
  $oj$$9$$.$FlattenedNodeSet$.prototype.$getCount$ = function $$oj$$9$$$$FlattenedNodeSet$$$$getCount$$() {
    void 0 === this.$m_count$ && (this.$m_count$ = this.$_getCount$(this.$m_nodeSet$, 0), void 0 != this.$m_start$ && (this.$m_count$ -= this.$m_start$));
    return this.$m_count$;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getCount", {$getCount$:$oj$$9$$.$FlattenedNodeSet$.prototype.$getCount$});
  $oj$$9$$.$FlattenedNodeSet$.prototype.$_getCount$ = function $$oj$$9$$$$FlattenedNodeSet$$$$_getCount$$($nodeSet$$18$$, $total$$) {
    var $start$$24$$, $count$$30$$, $i$$154$$, $child$$3$$;
    $start$$24$$ = $nodeSet$$18$$.$getStart$();
    $count$$30$$ = $nodeSet$$18$$.$getCount$();
    $total$$ += $count$$30$$;
    if ($nodeSet$$18$$.$getChildNodeSet$) {
      for ($i$$154$$ = 0;$i$$154$$ < $count$$30$$;$i$$154$$++) {
        $child$$3$$ = $nodeSet$$18$$.$getChildNodeSet$($i$$154$$ + $start$$24$$), null != $child$$3$$ && ($total$$ = this.$_getCount$($child$$3$$, $total$$));
      }
    }
    return $total$$;
  };
  $oj$$9$$.$FlattenedNodeSet$.prototype.getData = function $$oj$$9$$$$FlattenedNodeSet$$$getData$($index$$119$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$119$$, {index:this.$m_nodeSet$.$getStart$()}, this.$_getData$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getData", {getData:$oj$$9$$.$FlattenedNodeSet$.prototype.getData});
  $oj$$9$$.$FlattenedNodeSet$.prototype.getMetadata = function $$oj$$9$$$$FlattenedNodeSet$$$getMetadata$($index$$120$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$120$$, {index:this.$m_nodeSet$.$getStart$()}, this.$_getMetadata$);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getMetadata", {getMetadata:$oj$$9$$.$FlattenedNodeSet$.prototype.getMetadata});
  $oj$$9$$.$FlattenedNodeSet$.prototype.$_getMetadata$ = function $$oj$$9$$$$FlattenedNodeSet$$$$_getMetadata$$($nodeSet$$19$$, $index$$121$$) {
    return $nodeSet$$19$$.getMetadata($index$$121$$);
  };
  $oj$$9$$.$FlattenedNodeSet$.prototype.$_getData$ = function $$oj$$9$$$$FlattenedNodeSet$$$$_getData$$($nodeSet$$20$$, $index$$122$$) {
    return $nodeSet$$20$$.getData($index$$122$$);
  };
  $oj$$9$$.$FlattenedNodeSet$.prototype.$_getDataOrMetadata$ = function $$oj$$9$$$$FlattenedNodeSet$$$$_getDataOrMetadata$$($nodeSet$$21$$, $index$$123$$, $current$$6$$, $func$$10$$) {
    var $start$$25$$, $count$$31$$, $i$$155$$, $child$$4_currIndex_result$$21$$;
    $start$$25$$ = $nodeSet$$21$$.$getStart$();
    $count$$31$$ = $nodeSet$$21$$.$getCount$();
    for ($i$$155$$ = 0;$i$$155$$ < $count$$31$$;$i$$155$$++) {
      $child$$4_currIndex_result$$21$$ = $current$$6$$.index;
      if ($child$$4_currIndex_result$$21$$ === $index$$123$$) {
        return $func$$10$$.call(this, $nodeSet$$21$$, $i$$155$$ + $start$$25$$);
      }
      $current$$6$$.index = $child$$4_currIndex_result$$21$$ + 1;
      if ($nodeSet$$21$$.$getChildNodeSet$ && ($child$$4_currIndex_result$$21$$ = $nodeSet$$21$$.$getChildNodeSet$($i$$155$$ + $start$$25$$), null != $child$$4_currIndex_result$$21$$ && ($child$$4_currIndex_result$$21$$ = this.$_getDataOrMetadata$($child$$4_currIndex_result$$21$$, $index$$123$$, $current$$6$$, $func$$10$$), null != $child$$4_currIndex_result$$21$$))) {
        return $child$$4_currIndex_result$$21$$;
      }
    }
    return null;
  };
  $oj$$9$$.$DataGridDataSource$ = function $$oj$$9$$$$DataGridDataSource$$($data$$54$$) {
    $oj$$9$$.$DataGridDataSource$.$superclass$.constructor.call(this, $data$$54$$);
  };
  $goog$exportPath_$$("DataGridDataSource", $oj$$9$$.$DataGridDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$DataGridDataSource$, $oj$$9$$.$DataSource$, "oj.DataGridDataSource");
  $oj$$9$$.$DataGridDataSource$.prototype.$getCount$ = function $$oj$$9$$$$DataGridDataSource$$$$getCount$$() {
    return 0;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.getCount", {$getCount$:$oj$$9$$.$DataGridDataSource$.prototype.$getCount$});
  $oj$$9$$.$DataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$9$$$$DataGridDataSource$$$$getCountPrecision$$() {
    return "exact";
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$9$$.$DataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$9$$.$DataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$9$$$$DataGridDataSource$$$$fetchHeaders$$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$9$$.$DataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$9$$.$DataGridDataSource$.prototype.$fetchCells$ = function $$oj$$9$$$$DataGridDataSource$$$$fetchCells$$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$9$$.$DataGridDataSource$.prototype.$fetchCells$});
  $oj$$9$$.$DataGridDataSource$.prototype.keys = function $$oj$$9$$$$DataGridDataSource$$$keys$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.keys", {keys:$oj$$9$$.$DataGridDataSource$.prototype.keys});
  $oj$$9$$.$DataGridDataSource$.prototype.$indexes$ = function $$oj$$9$$$$DataGridDataSource$$$$indexes$$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.indexes", {$indexes$:$oj$$9$$.$DataGridDataSource$.prototype.$indexes$});
  $oj$$9$$.$DataGridDataSource$.prototype.sort = function $$oj$$9$$$$DataGridDataSource$$$sort$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.sort", {sort:$oj$$9$$.$DataGridDataSource$.prototype.sort});
  $oj$$9$$.$DataGridDataSource$.prototype.move = function $$oj$$9$$$$DataGridDataSource$$$move$() {
    $oj$$9$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.move", {move:$oj$$9$$.$DataGridDataSource$.prototype.move});
  $oj$$9$$.$DataGridDataSource$.prototype.$moveOK$ = function $$oj$$9$$$$DataGridDataSource$$$$moveOK$$() {
    return "valid";
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.moveOK", {$moveOK$:$oj$$9$$.$DataGridDataSource$.prototype.$moveOK$});
  $oj$$9$$.$DataGridDataSource$.prototype.getCapability = function $$oj$$9$$$$DataGridDataSource$$$getCapability$() {
    return null;
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataGridDataSource.prototype.getCapability", {getCapability:$oj$$9$$.$DataGridDataSource$.prototype.getCapability});
});
