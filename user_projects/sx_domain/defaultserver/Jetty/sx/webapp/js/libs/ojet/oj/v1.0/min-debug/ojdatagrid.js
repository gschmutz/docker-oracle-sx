/*
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
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define("ojs/ojcore jquery ojs/internal-deps/datagrid/DvtDataGrid ojs/ojcomponentcore ojs/ojdatacollection-common ojs/ojinputnumber ojs/ojmenu ojs/ojdialog ojs/ojpagingcontrol".split(" "), function($oj$$11$$, $$$$11$$, $DvtDataGrid$$1$$) {
  $oj$$11$$.$ArrayDataGridDataSource$ = function $$oj$$11$$$$ArrayDataGridDataSource$$($data$$72$$, $options$$237$$) {
    if (!($data$$72$$ instanceof Array) && "function" != typeof $data$$72$$ && "function" != typeof $data$$72$$.$subscribe$) {
      throw Error("_ERR_DATA_INVALID_TYPE_SUMMARY\n_ERR_DATA_INVALID_TYPE_DETAIL");
    }
    null != $options$$237$$ && (this.$rowHeaderKey$ = $options$$237$$.rowHeader);
    this.$_startIndex$ = 0;
    this.$_pageSize$ = -1;
    $oj$$11$$.$ArrayDataGridDataSource$.$superclass$.constructor.call(this, $data$$72$$);
  };
  $goog$exportPath_$$("ArrayDataGridDataSource", $oj$$11$$.$ArrayDataGridDataSource$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$ArrayDataGridDataSource$, $oj$$11$$.$DataGridDataSource$, "oj.ArrayDataGridDataSource");
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.Init = function $$oj$$11$$$$ArrayDataGridDataSource$$$Init$() {
    this.columns = this.$_getColumnsForScaffolding$(this.$getDataArray$());
    this.$_initializeRowKeys$();
    "function" == typeof this.data && this.data.subscribe(this.$_subscribe$.bind(this), null, "arrayChange");
    $oj$$11$$.$ArrayDataGridDataSource$.$superclass$.Init.call(this);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.Init", {Init:$oj$$11$$.$ArrayDataGridDataSource$.prototype.Init});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_initializeRowKeys$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_initializeRowKeys$$() {
    var $data$$73$$;
    $data$$73$$ = this.$getDataArray$();
    for (this.$lastKey$ = 0;this.$lastKey$ < $data$$73$$.length;this.$lastKey$ += 1) {
      $data$$73$$[this.$lastKey$].ojKey = this.$lastKey$.toString();
    }
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_getColumnsForScaffolding$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_getColumnsForScaffolding$$($data$$74$$) {
    var $propertyName$$8$$, $columns$$;
    if ("number" !== typeof $data$$74$$.length || 0 === $data$$74$$.length) {
      return[];
    }
    $columns$$ = [];
    for ($propertyName$$8$$ in $data$$74$$[0]) {
      $data$$74$$[0].hasOwnProperty($propertyName$$8$$) && (void 0 != this.$rowHeaderKey$ && $propertyName$$8$$ == this.$rowHeaderKey$ || $columns$$.push($propertyName$$8$$));
    }
    return $columns$$;
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getCount$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getCount$$($axis$$2$$) {
    return "row" === $axis$$2$$ ? this.size() : "column" === $axis$$2$$ ? this.columns.length : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCount", {$getCount$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$getCount$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getHeaderData$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getHeaderData$$($axis$$3$$, $index$$125$$) {
    var $data$$75$$;
    if ("row" === $axis$$3$$) {
      return $data$$75$$ = this.$getDataArray$(), $index$$125$$ += this.$_startIndex$, void 0 != this.$rowHeaderKey$ ? $data$$75$$[$index$$125$$][this.$rowHeaderKey$] : 0 < $data$$75$$.length && $data$$75$$[0] instanceof Array ? void 0 === this.$_getRowKeyByIndex$($index$$125$$) ? $index$$125$$.toString() : this.$_getRowKeyByIndex$($index$$125$$) : null;
    }
    if ("column" === $axis$$3$$) {
      return this.columns[$index$$125$$];
    }
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getHeaderMetadata$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getHeaderMetadata$$($axis$$4$$, $index$$126$$) {
    return "row" === $axis$$4$$ && void 0 != this.$rowHeaderKey$ ? {key:this.$_getRowKeyByIndex$($index$$126$$ + this.$_startIndex$)} : {key:this.$getHeaderData$($axis$$4$$, $index$$126$$)};
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$fetchHeaders$$($headerRange$$1$$, $callbacks$$23$$, $callbackObjects$$4$$) {
    var $axis$$5_headerSet$$, $start$$26$$, $count$$32_end$$7$$, $data$$76$$;
    $axis$$5_headerSet$$ = $headerRange$$1$$.axis;
    $start$$26$$ = $headerRange$$1$$.start;
    $count$$32_end$$7$$ = $headerRange$$1$$.count;
    $oj$$11$$.$Assert$.assert("row" === $axis$$5_headerSet$$ || "column" === $axis$$5_headerSet$$);
    $oj$$11$$.$Assert$.assert($start$$26$$ < this.$getCount$($axis$$5_headerSet$$));
    $oj$$11$$.$Assert$.assert(0 < $count$$32_end$$7$$);
    $start$$26$$ = Math.max(0, $start$$26$$);
    "column" === $axis$$5_headerSet$$ ? $count$$32_end$$7$$ = Math.min(this.columns.length, $start$$26$$ + $count$$32_end$$7$$) : ($data$$76$$ = this.$getDataArray$(), void 0 !== this.$rowHeaderKey$ || 0 < $data$$76$$.length && $data$$76$$[0] instanceof Array ? ($count$$32_end$$7$$ = Math.min($data$$76$$.length, $start$$26$$ + $count$$32_end$$7$$), 0 < this.$_pageSize$ && ($count$$32_end$$7$$ = Math.min($count$$32_end$$7$$, this.totalSize() - this.$_startIndex$))) : $count$$32_end$$7$$ = $start$$26$$);
    $axis$$5_headerSet$$ = new $oj$$11$$.$ArrayHeaderSet$($start$$26$$, $count$$32_end$$7$$, $axis$$5_headerSet$$, this);
    null != $callbacks$$23$$ && null != $callbacks$$23$$.success && (null == $callbackObjects$$4$$ && ($callbackObjects$$4$$ = {}), $callbacks$$23$$.success.call($callbackObjects$$4$$.success, $axis$$5_headerSet$$, $headerRange$$1$$));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getCellData$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getCellData$$($row$$16$$, $column$$4$$) {
    var $col$$ = this.columns[$column$$4$$];
    return this.$getDataArray$()[$row$$16$$ + this.$_startIndex$][$col$$];
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getCellMetadata$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getCellMetadata$$($row$$17$$, $column$$5$$) {
    return{keys:{row:this.$_getRowKeyByIndex$($row$$17$$ + this.$_startIndex$), column:this.columns[$column$$5$$]}};
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$fetchCells$$($cellRanges$$, $callbacks$$24$$, $callbackObjects$$5$$) {
    var $cellSet_i$$159$$, $cellRange$$1$$, $rowStart$$1$$, $rowEnd$$, $colStart$$, $colEnd$$;
    for ($cellSet_i$$159$$ = 0;$cellSet_i$$159$$ < $cellRanges$$.length;$cellSet_i$$159$$ += 1) {
      $cellRange$$1$$ = $cellRanges$$[$cellSet_i$$159$$], $oj$$11$$.$Assert$.assert("row" === $cellRange$$1$$.axis || "column" === $cellRange$$1$$.axis), $oj$$11$$.$Assert$.assert($cellRange$$1$$.start < this.$getCount$($cellRange$$1$$.axis)), $oj$$11$$.$Assert$.assert(0 < $cellRange$$1$$.count), "row" === $cellRange$$1$$.axis ? ($rowStart$$1$$ = $cellRange$$1$$.start, $rowEnd$$ = Math.min(this.size(), $rowStart$$1$$ + $cellRange$$1$$.count), 0 < this.$_pageSize$ && ($rowEnd$$ = Math.min($rowEnd$$, 
      this.totalSize() - this.$_startIndex$))) : "column" === $cellRange$$1$$.axis && ($colStart$$ = $cellRange$$1$$.start, $colEnd$$ = Math.min(this.columns.length, $colStart$$ + $cellRange$$1$$.count));
    }
    void 0 === $rowEnd$$ || void 0 === $colEnd$$ ? null != $callbacks$$24$$ && null != $callbacks$$24$$.error && (null == $callbackObjects$$5$$ && ($callbackObjects$$5$$ = {}), $callbacks$$24$$.error.call($callbackObjects$$5$$.error)) : ($cellSet_i$$159$$ = new $oj$$11$$.$ArrayCellSet$($rowStart$$1$$, $rowEnd$$, $colStart$$, $colEnd$$, this), null != $callbacks$$24$$ && null != $callbacks$$24$$.success && (null == $callbackObjects$$5$$ && ($callbackObjects$$5$$ = {}), $callbacks$$24$$.success.call($callbackObjects$$5$$.success, 
    $cellSet_i$$159$$, $cellRanges$$)), 0 < this.$_pageSize$ && $oj$$11$$.$DataGridDataSource$.$superclass$.handleEvent.call(this, "sync", !0));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$fetchCells$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.keys = function $$oj$$11$$$$ArrayDataGridDataSource$$$keys$($indexes$$1$$) {
    var $rowIndex$$1$$ = $indexes$$1$$.row, $columnIndex$$ = $indexes$$1$$.column;
    return $oj$$11$$.$Object$.$__getPromise$(function($resolve$$36$$) {
      $resolve$$36$$({row:this.$_getRowKeyByIndex$($rowIndex$$1$$ + this.$_startIndex$), column:this.columns[$columnIndex$$]});
    }.bind(this));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.keys", {keys:$oj$$11$$.$ArrayDataGridDataSource$.prototype.keys});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$indexes$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$indexes$$($keys$$12$$) {
    var $rowKey$$13$$ = $keys$$12$$.row, $columnKey$$ = $keys$$12$$.column;
    return $oj$$11$$.$Object$.$__getPromise$(function($resolve$$37$$) {
      $resolve$$37$$({row:this.$_getRowIndexByKey$($rowKey$$13$$) - this.$_startIndex$, column:this.columns.indexOf($columnKey$$)});
    }.bind(this));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.indexes", {$indexes$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$indexes$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.sort = function $$oj$$11$$$$ArrayDataGridDataSource$$$sort$($criteria$$4_direction$$4$$, $callbacks$$25$$, $callbackObjects$$6$$) {
    var $sortArray$$ = [], $newColumns$$ = [], $axis$$6_i$$160$$, $headerIndex_headerKey$$;
    $axis$$6_i$$160$$ = $criteria$$4_direction$$4$$.axis;
    $headerIndex_headerKey$$ = $criteria$$4_direction$$4$$.key;
    $criteria$$4_direction$$4$$ = $criteria$$4_direction$$4$$.direction;
    null != $callbacks$$25$$ && null == $callbackObjects$$6$$ && ($callbackObjects$$6$$ = {});
    if ("column" === $axis$$6_i$$160$$) {
      this.$getDataArray$().sort(this.$_naturalSort$($criteria$$4_direction$$4$$, $headerIndex_headerKey$$)), null != $callbacks$$25$$ && null != $callbacks$$25$$.success && $callbacks$$25$$.success.call($callbackObjects$$6$$.success);
    } else {
      if ("row" === $axis$$6_i$$160$$) {
        $headerIndex_headerKey$$ = this.$_getRowIndexByKey$($headerIndex_headerKey$$);
        for ($axis$$6_i$$160$$ = 0;$axis$$6_i$$160$$ < this.columns.length;$axis$$6_i$$160$$ += 1) {
          $sortArray$$[$axis$$6_i$$160$$] = this.$getDataArray$()[$headerIndex_headerKey$$][this.columns[$axis$$6_i$$160$$]];
        }
        $sortArray$$.sort(this.$_naturalSort$($criteria$$4_direction$$4$$));
        for ($axis$$6_i$$160$$ = 0;$axis$$6_i$$160$$ < this.columns.length;$axis$$6_i$$160$$ += 1) {
          $newColumns$$[$axis$$6_i$$160$$] = this.columns[$sortArray$$.indexOf(this.$getDataArray$()[$headerIndex_headerKey$$][this.columns[$axis$$6_i$$160$$]])];
        }
        this.columns = $newColumns$$;
        null != $callbacks$$25$$ && null != $callbacks$$25$$.success && $callbacks$$25$$.success.call($callbackObjects$$6$$.success);
      } else {
        null !== $callbacks$$25$$ && null != $callbacks$$25$$.error && $callbacks$$25$$.error.call($callbackObjects$$6$$.error, "Invalid axis value");
      }
    }
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.sort", {sort:$oj$$11$$.$ArrayDataGridDataSource$.prototype.sort});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.getCapability = function $$oj$$11$$$$ArrayDataGridDataSource$$$getCapability$($feature$$8$$) {
    return "sort" === $feature$$8$$ ? "column" : "move" === $feature$$8$$ ? "row" : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCapability", {getCapability:$oj$$11$$.$ArrayDataGridDataSource$.prototype.getCapability});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_naturalSort$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_naturalSort$$($direction$$5$$, $key$$54$$) {
    if ("ascending" === $direction$$5$$) {
      return function($a$$72$$, $b$$45$$) {
        var $as$$, $bs$$;
        void 0 != $key$$54$$ && ($a$$72$$ instanceof Array ? ($a$$72$$ = $a$$72$$[parseInt($key$$54$$, 10)], $b$$45$$ = $b$$45$$[parseInt($key$$54$$, 10)]) : ($a$$72$$ = $a$$72$$[$key$$54$$], $b$$45$$ = $b$$45$$[$key$$54$$]));
        $as$$ = isNaN($a$$72$$);
        $bs$$ = isNaN($b$$45$$);
        $a$$72$$ instanceof Date && ($a$$72$$ = $a$$72$$.toISOString(), $as$$ = !0);
        $b$$45$$ instanceof Date && ($b$$45$$ = $b$$45$$.toISOString(), $bs$$ = !0);
        return $as$$ && $bs$$ ? $a$$72$$ < $b$$45$$ ? -1 : $a$$72$$ === $b$$45$$ ? 0 : 1 : $as$$ ? 1 : $bs$$ ? -1 : $a$$72$$ - $b$$45$$;
      };
    }
    if ("descending" === $direction$$5$$) {
      return function($a$$73$$, $b$$46$$) {
        var $as$$1$$, $bs$$1$$;
        void 0 != $key$$54$$ && ($a$$73$$ instanceof Array ? ($a$$73$$ = $a$$73$$[parseInt($key$$54$$, 10)], $b$$46$$ = $b$$46$$[parseInt($key$$54$$, 10)]) : ($a$$73$$ = $a$$73$$[$key$$54$$], $b$$46$$ = $b$$46$$[$key$$54$$]));
        $as$$1$$ = isNaN($a$$73$$);
        $bs$$1$$ = isNaN($b$$46$$);
        $a$$73$$ instanceof Date && ($a$$73$$ = $a$$73$$.toISOString(), $as$$1$$ = !0);
        $b$$46$$ instanceof Date && ($b$$46$$ = $b$$46$$.toISOString(), $bs$$1$$ = !0);
        return $as$$1$$ && $bs$$1$$ ? $a$$73$$ > $b$$46$$ ? -1 : $a$$73$$ === $b$$46$$ ? 0 : 1 : $as$$1$$ ? -1 : $bs$$1$$ ? 1 : $b$$46$$ - $a$$73$$;
      };
    }
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.move = function $$oj$$11$$$$ArrayDataGridDataSource$$$move$($moveKey$$, $atKey$$) {
    var $event$$74_moveKeyIndex$$, $moveData$$, $atKeyIndex$$;
    $event$$74_moveKeyIndex$$ = this.$_getRowIndexByKey$($moveKey$$);
    $moveData$$ = this.data.splice($event$$74_moveKeyIndex$$, 1)[0];
    this.data instanceof Array && ($event$$74_moveKeyIndex$$ = this.$_getModelEvent$("delete", $moveKey$$, null, $event$$74_moveKeyIndex$$, -1), this.handleEvent("change", $event$$74_moveKeyIndex$$));
    null === $atKey$$ ? this.data.push($moveData$$) : ($atKeyIndex$$ = this.$_getRowIndexByKey$($atKey$$), this.data.splice($atKeyIndex$$, 0, $moveData$$));
    this.data instanceof Array && ($event$$74_moveKeyIndex$$ = this.$_getModelEvent$("insert", $moveKey$$, null, $atKeyIndex$$, -1), this.handleEvent("change", $event$$74_moveKeyIndex$$));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.move", {move:$oj$$11$$.$ArrayDataGridDataSource$.prototype.move});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getDataArray$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getDataArray$$() {
    return "function" === typeof this.data ? this.data() : this.data;
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_getRowIndexByKey$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_getRowIndexByKey$$($key$$55$$) {
    var $i$$161$$, $data$$78$$ = this.$getDataArray$();
    for ($i$$161$$ = 0;$i$$161$$ < $data$$78$$.length;$i$$161$$++) {
      if ($data$$78$$[$i$$161$$].ojKey === $key$$55$$) {
        return $i$$161$$;
      }
    }
    return-1;
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_getRowKeyByIndex$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_getRowKeyByIndex$$($index$$127$$) {
    var $data$$79$$ = this.$getDataArray$();
    return $data$$79$$[$index$$127$$] ? $data$$79$$[$index$$127$$].ojKey : null;
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_getModelEvent$$($operation$$5$$, $rowKey$$14$$, $columnKey$$1$$, $rowIndex$$2$$, $columnIndex$$1$$, $silent$$23$$) {
    var $event$$75$$ = {source:this};
    $event$$75$$.operation = $operation$$5$$;
    $event$$75$$.keys = {row:$rowKey$$14$$, column:$columnKey$$1$$};
    $event$$75$$.indexes = {row:$rowIndex$$2$$, column:$columnIndex$$1$$};
    $event$$75$$.silent = $silent$$23$$;
    return $event$$75$$;
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_subscribe$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_subscribe$$($changes$$4$$) {
    var $i$$162$$, $move_rowData$$4$$, $rowKey$$15$$, $rowIndex$$3$$, $added$$1$$ = !1;
    $move_rowData$$4$$ = !1;
    var $keys$$13$$ = [], $indexes$$2$$ = [], $change_event$$76$$, $beforeDelCount$$ = 0;
    for ($i$$162$$ = 0;$i$$162$$ < $changes$$4$$.length;$i$$162$$++) {
      $change_event$$76$$ = $changes$$4$$[$i$$162$$];
      if (void 0 !== $change_event$$76$$.moved) {
        $move_rowData$$4$$ = !0;
        $change_event$$76$$ = this.$_getModelEvent$("refresh", null, null);
        this.handleEvent("change", $change_event$$76$$);
        break;
      }
      "added" === $change_event$$76$$.status && ($added$$1$$ = !0);
      0 < this.$_pageSize$ && "deleted" === $change_event$$76$$.status && $change_event$$76$$.index < this.$_startIndex$ && $beforeDelCount$$++;
    }
    if (!$move_rowData$$4$$) {
      for ($i$$162$$ = 0;$i$$162$$ < $changes$$4$$.length;$i$$162$$++) {
        $change_event$$76$$ = $changes$$4$$[$i$$162$$], "deleted" === $change_event$$76$$.status && ($move_rowData$$4$$ = $change_event$$76$$.value, $rowIndex$$3$$ = $change_event$$76$$.index, 0 < this.$_pageSize$ ? $rowIndex$$3$$ < this.$_startIndex$ ? ($rowIndex$$3$$ = 0, $rowKey$$15$$ = this.$_getRowKeyByIndex$(this.$_startIndex$ - $beforeDelCount$$), $beforeDelCount$$--) : $rowIndex$$3$$ < this.$_startIndex$ + this.$_pageSize$ && ($rowIndex$$3$$ -= this.$_startIndex$, $rowKey$$15$$ = $move_rowData$$4$$.ojKey) : 
        $rowKey$$15$$ = $move_rowData$$4$$.ojKey, $keys$$13$$.push({row:$rowKey$$15$$, column:-1}), $indexes$$2$$.push({row:$rowIndex$$3$$, column:-1}));
      }
      0 < $keys$$13$$.length && ($change_event$$76$$ = {source:this, operation:"delete", keys:$keys$$13$$, indexes:$indexes$$2$$, silent:$added$$1$$}, this.handleEvent("change", $change_event$$76$$));
      for ($i$$162$$ = 0;$i$$162$$ < $changes$$4$$.length;$i$$162$$++) {
        $change_event$$76$$ = $changes$$4$$[$i$$162$$], "added" === $change_event$$76$$.status && ($move_rowData$$4$$ = $change_event$$76$$.value, $rowIndex$$3$$ = $change_event$$76$$.index, null == $move_rowData$$4$$.ojKey && ($move_rowData$$4$$.ojKey = this.$lastKey$.toString(), this.$lastKey$++), 0 < this.$_pageSize$ && $rowIndex$$3$$ < this.$_startIndex$ + this.$_pageSize$ ? ($rowIndex$$3$$ < this.$_startIndex$ ? ($rowIndex$$3$$ = 0, $rowKey$$15$$ = this.$_getRowKeyByIndex$(this.$_startIndex$)) : 
        ($rowIndex$$3$$ = $change_event$$76$$.index - this.$_startIndex$, $rowKey$$15$$ = this.$_getRowKeyByIndex$($rowIndex$$3$$)), $change_event$$76$$ = this.$_getModelEvent$("insert", $rowKey$$15$$, null, $rowIndex$$3$$, -1), this.handleEvent("change", $change_event$$76$$), $change_event$$76$$ = this.$_getModelEvent$("delete", this.$_getRowKeyByIndex$(this.$_startIndex$ + this.$_pageSize$), null, this.$_pageSize$, -1, !0)) : ($rowKey$$15$$ = $move_rowData$$4$$.ojKey, $change_event$$76$$ = this.$_getModelEvent$("insert", 
        $rowKey$$15$$, null, $rowIndex$$3$$, -1)), this.handleEvent("change", $change_event$$76$$));
      }
    }
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.fetch = function $$oj$$11$$$$ArrayDataGridDataSource$$$fetch$($options$$238$$) {
    this.$_startIndex$ = null != $options$$238$$ ? null != $options$$238$$.startIndex ? $options$$238$$.startIndex : 0 : 0;
    this.handleEvent("change", {operation:"sync", pageSize:this.$_pageSize$});
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.setPageSize = function $$oj$$11$$$$ArrayDataGridDataSource$$$setPageSize$($n$$20$$) {
    var $oldSize$$ = this.$_pageSize$;
    this.$_pageSize$ = $n$$20$$;
    0 > $oldSize$$ && this.fetch({startIndex:this.$_startIndex$});
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.setPageSize", {setPageSize:$oj$$11$$.$ArrayDataGridDataSource$.prototype.setPageSize});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.size = function $$oj$$11$$$$ArrayDataGridDataSource$$$size$() {
    return null != this.$_pageSize$ && 0 < this.$_pageSize$ && this.$getDataArray$().length > this.$_pageSize$ ? this.$_pageSize$ : this.$getDataArray$().length;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.size", {size:$oj$$11$$.$ArrayDataGridDataSource$.prototype.size});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.totalSize = function $$oj$$11$$$$ArrayDataGridDataSource$$$totalSize$() {
    return this.$getDataArray$().length;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.totalSize", {totalSize:$oj$$11$$.$ArrayDataGridDataSource$.prototype.totalSize});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.hasMore = function $$oj$$11$$$$ArrayDataGridDataSource$$$hasMore$() {
    return!1;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.hasMore", {hasMore:$oj$$11$$.$ArrayDataGridDataSource$.prototype.hasMore});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getRowHeaderKey$$() {
    return this.$rowHeaderKey$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getRowHeaderKey", {$getRowHeaderKey$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getColumns$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$getColumns$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.getData = function $$oj$$11$$$$ArrayDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getData", {getData:$oj$$11$$.$ArrayDataGridDataSource$.prototype.getData});
  $oj$$11$$.$DataGridResources$ = function $$oj$$11$$$$DataGridResources$$($rtlMode$$, $translationFunction$$) {
    this.$rtlMode$ = $rtlMode$$;
    this.$translationFunction$ = $translationFunction$$;
    this.$styles$ = {};
    this.$styles$.datagrid = "oj-datagrid";
    this.$styles$.cell = "oj-datagrid-cell";
    this.$styles$.cellcontent = "oj-datagrid-cell-content";
    this.$styles$.celltext = "oj-datagrid-cell-text";
    this.$styles$.banded = "oj-datagrid-banded";
    this.$styles$.row = "oj-datagrid-row";
    this.$styles$.databody = "oj-datagrid-databody";
    this.$styles$.topcorner = "oj-datagrid-top-corner";
    this.$styles$.bottomcorner = "oj-datagrid-bottom-corner";
    this.$styles$.rowheaderspacer = "oj-datagrid-row-header-spacer";
    this.$styles$.colheaderspacer = "oj-datagrid-column-header-spacer";
    this.$styles$.status = "oj-datagrid-status";
    this.$styles$.emptytext = "oj-datagrid-empty-text";
    this.$styles$.header = "oj-datagrid-header";
    this.$styles$.headercell = "oj-datagrid-header-cell";
    this.$styles$.headercelltext = "oj-datagrid-header-cell-text";
    this.$styles$.headercellcontent = "oj-datagrid-header-cell-content";
    this.$styles$.rowheader = "oj-datagrid-row-header";
    this.$styles$.colheader = "oj-datagrid-column-header";
    this.$styles$.colheadercell = "oj-datagrid-column-header-cell";
    this.$styles$.rowheadercell = "oj-datagrid-row-header-cell";
    this.$styles$["scroller-mobile"] = "oj-datagrid-scroller-touch";
    this.$styles$.scroller = "oj-datagrid-scroller";
    this.$styles$.scrollers = "oj-datagrid-scrollers";
    this.$styles$.focus = "oj-focus";
    this.$styles$.hover = "oj-hover";
    this.$styles$.active = "oj-active";
    this.$styles$.selected = "oj-selected";
    this.$styles$.disabled = "oj-disabled";
    this.$styles$.enabled = "oj-enabled";
    this.$styles$["default"] = "oj-default";
    this.$styles$.sortcontainer = "oj-datagrid-sort-icon-container";
    this.$styles$.sortascending = "oj-datagrid-sort-ascending-icon";
    this.$styles$.sortdescending = "oj-datagrid-sort-descending-icon";
    this.$styles$.icon = "oj-component-icon";
    this.$styles$.clickableicon = "oj-clickable-icon-nocontext";
    this.$styles$.info = "oj-helper-hidden-accessible";
    this.$styles$.rowexpander = "oj-rowexpander";
    this.$styles$.cut = "oj-datagrid-cut";
    this.$styles$.selectaffordancetop = "oj-datagrid-touch-selection-affordance-top";
    this.$styles$.selectaffordancebottom = "oj-datagrid-touch-selection-affordance-bottom";
    this.$styles$.toucharea = "oj-datagrid-touch-area";
    this.$styles$.draggable = "oj-draggable";
    this.$styles$.drag = "oj-drag";
    this.$styles$.drop = "oj-drop";
    this.$styles$.activedrop = "oj-active-drop";
    this.$styles$.validdrop = "oj-valid-drop";
    this.$styles$.invaliddrop = "oj-invalid-drop";
    this.$commands$ = {};
    this.$commands$.sortCol = "oj-datagrid-sortCol";
    this.$commands$.sortColAsc = "oj-datagrid-sortColAsc";
    this.$commands$.sortColDsc = "oj-datagrid-sortColDsc";
    this.$commands$.sortRow = "oj-datagrid-sortRow";
    this.$commands$.sortRowAsc = "oj-datagrid-sortRowAsc";
    this.$commands$.sortRowDsc = "oj-datagrid-sortRowDsc";
    this.$commands$.resize = "oj-datagrid-resize";
    this.$commands$.resizeWidth = "oj-datagrid-resizeWidth";
    this.$commands$.resizeHeight = "oj-datagrid-resizeHeight";
    this.$commands$.cut = "oj-datagrid-cut";
    this.$commands$.paste = "oj-datagrid-paste";
    this.attributes = {};
    this.attributes.key = "data-oj-key";
    this.attributes.resizable = "data-oj-resizable";
    this.attributes.sortable = "data-oj-sortable";
    this.attributes.sortDir = "data-oj-sortdir";
    this.attributes.expander = "data-oj-expander";
    this.attributes.expanderIndex = "data-oj-expander-index";
    this.attributes.container = $oj$$11$$.Components.$_OJ_CONTAINER_ATTR$;
  };
  $goog$exportPath_$$("DataGridResources", $oj$$11$$.$DataGridResources$, $oj$$11$$);
  $oj$$11$$.$DataGridResources$.prototype.$isRTLMode$ = function $$oj$$11$$$$DataGridResources$$$$isRTLMode$$() {
    return "rtl" === this.$rtlMode$ ? !0 : !1;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.isRTLMode", {$isRTLMode$:$oj$$11$$.$DataGridResources$.prototype.$isRTLMode$});
  $oj$$11$$.$DataGridResources$.prototype.$getTranslatedText$ = function $$oj$$11$$$$DataGridResources$$$$getTranslatedText$$($key$$56$$, $args$$12$$) {
    return this.$translationFunction$($key$$56$$, $args$$12$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getTranslatedText", {$getTranslatedText$:$oj$$11$$.$DataGridResources$.prototype.$getTranslatedText$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedStyle$ = function $$oj$$11$$$$DataGridResources$$$$getMappedStyle$$($key$$57$$) {
    return null != $key$$57$$ ? this.$styles$[$key$$57$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedStyle", {$getMappedStyle$:$oj$$11$$.$DataGridResources$.prototype.$getMappedStyle$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedCommand$ = function $$oj$$11$$$$DataGridResources$$$$getMappedCommand$$($key$$58$$) {
    return null != $key$$58$$ ? this.$commands$[$key$$58$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedCommand", {$getMappedCommand$:$oj$$11$$.$DataGridResources$.prototype.$getMappedCommand$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedAttribute$ = function $$oj$$11$$$$DataGridResources$$$$getMappedAttribute$$($key$$59$$) {
    return null != $key$$59$$ ? this.attributes[$key$$59$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedAttribute", {$getMappedAttribute$:$oj$$11$$.$DataGridResources$.prototype.$getMappedAttribute$});
  $oj$$11$$.$__registerWidget$("oj.ojDataGrid", $$$$11$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{bandingInterval:{row:0, column:0}, data:null, emptyText:null, gridlines:{horizontal:"visible", vertical:"visible"}, scrollPosition:null, selectionMode:null, dnd:{$reorder$:{row:"disable"}}, scrollPolicy:"auto", selection:[], header:{row:{className:null, renderer:null, resizable:{width:"disable", height:"disable"}, sortable:"auto", style:null}, column:{className:null, renderer:null, resizable:{width:"disable", 
  height:"disable"}, sortable:"auto", style:null}}, cell:{className:null, renderer:null, style:null}, resize:null, sort:null, optionChange:null}, _ComponentCreate:function() {
    this._super();
    this.root = this.element[0];
    this.$rootId$ = this.root.getAttribute("id");
    this.grid = new $DvtDataGrid$$1$$;
    this.$redrawSet$ = {data:"all", header:["className", "renderer", "style", "template"]};
  }, $_AfterCreate$:function() {
    var $self$$50$$ = this;
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
    this._super();
    this.$resources$ = new $oj$$11$$.$DataGridResources$(this.$_GetReadingDirection$(), this.$_getTranslation$.bind($self$$50$$));
    this.$_setDataSource$();
    this.$_setSelection$();
    this.$_addContextMenu$();
    null != this.$datasource$ && this.grid.SetDataSource(this.$datasource$);
    this.grid.SetOptions(this.options);
    this.grid.SetResources(this.$resources$);
    this.grid.SetCreateContextCallback(this.$_modifyContext$.bind($self$$50$$));
    this.grid.addListener("resize", function($details$$) {
      $self$$50$$._trigger("resize", $details$$.event, $details$$.ui);
    });
    this.grid.addListener("select", function($details$$1$$) {
      $self$$50$$.$_fireOptionChange$("selection", $details$$1$$.ui.previousSelection, $details$$1$$.ui.selection, $details$$1$$.event);
    });
    this.grid.addListener("sort", function($details$$2$$) {
      $self$$50$$._trigger("sort", $details$$2$$.event, $details$$2$$.ui);
    });
    this.grid.addListener("keydown", function($details$$3$$) {
      $self$$50$$._trigger("keydown", $details$$3$$.event, $details$$3$$.ui);
    });
    this.grid.addListener("active", function($details$$4$$) {
      $self$$50$$._trigger("active", $details$$4$$.event, $details$$4$$.ui);
    });
    this.grid.render(this.root);
    null != this.$datasource$ && this.$_registerResizeListener$(this.root);
  }, refresh:function() {
    this._super();
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
    this.$_setDataSource$();
    null != this.$datasource$ && this.grid.SetDataSource(this.$datasource$);
    this.grid.SetOptions(this.options);
    this.grid.SetResources(this.$resources$);
    this.grid.refresh(this.root);
    null != this.$datasource$ && this.$_registerResizeListener$(this.root);
  }, _destroy:function() {
    this.grid.destroy();
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
  }, $_fireOptionChange$:function($key$$60$$, $previousValue$$3$$, $value$$163$$, $originalEvent$$3$$) {
    this._trigger("optionChange", $originalEvent$$3$$, {option:$key$$60$$, previousValue:$previousValue$$3$$, value:$value$$163$$, optionMetadata:{writeback:$originalEvent$$3$$ ? "shouldWrite" : "shouldNotWrite"}});
  }, _setOptions:function($options$$239$$, $flags$$24$$) {
    var $isRefresh$$;
    this.$datasource$ ? ($isRefresh$$ = this.$_shouldRefresh$($options$$239$$), this._super($options$$239$$, $flags$$24$$), $isRefresh$$ ? this.refresh() : this.grid.UpdateOptions($options$$239$$)) : (this._super($options$$239$$, $flags$$24$$), null != $options$$239$$.data && this.refresh());
  }, $_shouldRefresh$:function($options$$240$$) {
    var $i$$163$$, $key$$61$$, $isRefresh$$1$$, $elm$$, $itm$$, $opt$$19$$;
    $isRefresh$$1$$ = !1;
    for ($key$$61$$ in $options$$240$$) {
      if ($key$$61$$ in this.$redrawSet$) {
        if ("data" === $key$$61$$) {
          $isRefresh$$1$$ = !0;
          break;
        } else {
          if ("header" == $key$$61$$) {
            for ($elm$$ in $options$$240$$.header) {
              if ("column" == $elm$$ || "row" == $elm$$ || "cell" == $elm$$) {
                for ($itm$$ in $options$$240$$.header[$elm$$]) {
                  for ($i$$163$$ = 0;$i$$163$$ < this.$redrawSet$.header.length;$i$$163$$++) {
                    if ($itm$$ == this.$redrawSet$.header[$i$$163$$]) {
                      for ($opt$$19$$ in this.options.header[$elm$$]) {
                        if ($opt$$19$$ == $itm$$ && $options$$240$$.header[$elm$$][$itm$$] != this.options.header[$elm$$][$itm$$]) {
                          $isRefresh$$1$$ = !0;
                          break;
                        }
                      }
                    }
                  }
                  if ($isRefresh$$1$$) {
                    break;
                  }
                }
              }
              if ($isRefresh$$1$$) {
                break;
              }
            }
          } else {
            for ($opt$$19$$ in this.options) {
              if ($opt$$19$$ == $key$$61$$ && !$oj$$11$$.$Object$.$compareValues$($options$$240$$[$key$$61$$], this.options[$opt$$19$$])) {
                $isRefresh$$1$$ = !0;
                break;
              }
            }
          }
        }
      }
    }
    return $isRefresh$$1$$;
  }, $_isResizeEnabled$:function($axis$$7$$, $direction$$6$$) {
    return "disable" !== this.options.header[$axis$$7$$].resizable[$direction$$6$$];
  }, $_isSortEnabled$:function($axis$$8$$) {
    return "disable" !== this.options.header[$axis$$8$$].sortable;
  }, $_addContextMenu$:function() {
    var $self$$51$$, $menuContainer$$, $listItems_resizeMenu$$ = null, $sortMenu$$ = null, $moveMenu$$ = null, $sortCapability$$;
    $self$$51$$ = this;
    if (null == this.options.contextMenu) {
      if (null != this.$datasource$) {
        $menuContainer$$ = $$$$11$$("\x3cul\x3e");
        $menuContainer$$.css("display", "none").attr("id", this.$rootId$ + "contextmenu");
        $$$$11$$(this.root).append($menuContainer$$);
        if (this.$_isResizeEnabled$("column", "width") || this.$_isResizeEnabled$("column", "height") || this.$_isResizeEnabled$("row", "width") || this.$_isResizeEnabled$("row", "height")) {
          $listItems_resizeMenu$$ = this.$_buildContextMenuItem$("resize");
        }
        $sortCapability$$ = this.$datasource$.getCapability("sort");
        !this.$_isSortEnabled$("column") || "column" !== $sortCapability$$ && "full" !== $sortCapability$$ || ($sortMenu$$ = this.$_buildContextMenuItem$("sortCol"));
        !this.$_isSortEnabled$("row") || "row" !== $sortCapability$$ && "full" !== $sortCapability$$ || ($sortMenu$$ = null != $sortMenu$$ ? $sortMenu$$.add(this.$_buildContextMenuItem$("sortRow")) : this.$_buildContextMenuItem$("sortRow"));
        if ("enable" === this.options.dnd.reorder) {
          switch(this.$datasource$.getCapability("move")) {
            case "none":
              break;
            default:
              $moveMenu$$ = $$$$11$$(this.$_buildContextMenuListItem$("cut")).add($$$$11$$(this.$_buildContextMenuListItem$("paste")));
          }
        }
        $menuContainer$$.append($listItems_resizeMenu$$).append($sortMenu$$).append($moveMenu$$);
        $menuContainer$$.ojMenu();
        this._setOption("contextMenu", "#" + $menuContainer$$.attr("id"));
        $menuContainer$$.on("ojbeforeopen", this.$_handleContextMenuBeforeShow$.bind(this));
        $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this));
      }
    } else {
      $menuContainer$$ = $$$$11$$(this.options.contextMenu), $listItems_resizeMenu$$ = $menuContainer$$.find("[data-oj-command]"), $listItems_resizeMenu$$.each(function() {
        var $command$$;
        0 === $$$$11$$(this).children("a").length && ($command$$ = $$$$11$$(this).attr("data-oj-command").split("-"), $$$$11$$(this).replaceWith($self$$51$$.$_buildContextMenuItem$($command$$[$command$$.length - 1])));
      }), $menuContainer$$.ojMenu("refresh"), $menuContainer$$.on("ojbeforeopen", this.$_handleContextMenuBeforeShow$.bind(this)), $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this));
    }
  }, $_buildContextMenuItem$:function($command$$1$$) {
    if ("resize" === $command$$1$$) {
      return $$$$11$$(this.$_buildContextMenuListItem$("resize")).append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append($$$$11$$(this.$_buildContextMenuListItem$("resizeWidth"))).append($$$$11$$(this.$_buildContextMenuListItem$("resizeHeight"))));
    }
    if ("sortCol" === $command$$1$$) {
      return $$$$11$$(this.$_buildContextMenuListItem$("sortCol")).append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append($$$$11$$(this.$_buildContextMenuListItem$("sortColAsc"))).append($$$$11$$(this.$_buildContextMenuListItem$("sortColDsc"))));
    }
    if ("sortRow" === $command$$1$$) {
      return $$$$11$$(this.$_buildContextMenuListItem$("sortRow")).append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append($$$$11$$(this.$_buildContextMenuListItem$("sortRowAsc"))).append($$$$11$$(this.$_buildContextMenuListItem$("sortRowDsc"))));
    }
    if (-1 != Object.keys(this.$resources$.$commands$).indexOf($command$$1$$)) {
      return $$$$11$$(this.$_buildContextMenuListItem$($command$$1$$));
    }
  }, $_buildContextMenuListItem$:function($command$$2$$) {
    return "\x3cli data-oj-command\x3d" + this.$_getMappedCommand$($command$$2$$) + "\x3e" + this.$_buildContextMenuLabel$($command$$2$$) + "\x3c/li\x3e";
  }, $_buildContextMenuLabel$:function($command$$3_key$$62$$) {
    $command$$3_key$$62$$ = "label" + $command$$3_key$$62$$.charAt(0).toUpperCase() + $command$$3_key$$62$$.slice(1);
    return'\x3ca href\x3d"#"\x3e' + this.$_getTranslation$($command$$3_key$$62$$) + "\x3c/a\x3e";
  }, $_getContextMenu$:function() {
    return $$$$11$$(this.options.contextMenu).get(0);
  }, $_getTranslation$:function($key$$63$$, $args$$13$$) {
    return this.$getTranslatedString$($key$$63$$, $args$$13$$);
  }, $_handleResizeDialog$:function() {
    var $value$$164$$ = $$$$11$$("#" + this.$rootId$ + "spinner").ojInputNumber("option", "value");
    $$$$11$$("#" + this.$rootId$ + "dialog").remove();
    this.grid.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, $value$$164$$);
    this.$contextMenuEvent$.target.focus();
  }, $_buildResizeDialog$:function($title$$8$$, $initialSize$$) {
    var $dialog$$, $dialogBody$$, $spinner$$, $dialogFooter$$, $dialogOKButton$$;
    $dialog$$ = $$$$11$$("#" + this.$rootId$ + "dialog");
    $spinner$$ = $$$$11$$("#" + this.$rootId$ + "spinner");
    if (0 === $dialog$$.length || 0 === $spinner$$.length) {
      $dialog$$ = $$$$11$$("\x3cdiv\x3e"), $dialog$$.attr("id", this.$rootId$ + "dialog"), $dialog$$.attr("title", $title$$8$$), $dialogBody$$ = $$$$11$$('\x3cdiv class\x3d"oj-dialog-body"\x3e\x3c/div\x3e'), $dialogFooter$$ = $$$$11$$('\x3cdiv class\x3d"oj-dialog-footer"\x3e\x3c/div\x3e'), $dialog$$.append($dialogBody$$).append($dialogFooter$$), $spinner$$ = $$$$11$$('\x3cinput id\x3d"' + this.$rootId$ + 'spinner"/\x3e'), $dialogOKButton$$ = $$$$11$$("\x3cbutton\x3e"), $dialogBody$$.append($spinner$$), 
      $dialogFooter$$.append($dialogOKButton$$), $$$$11$$(this.root).append($dialog$$), $dialogOKButton$$.ojButton({$component$:"ojButton", label:"OK"}), $dialogOKButton$$.on("click", this.$_handleResizeDialog$.bind(this));
    }
    $spinner$$.ojInputNumber({$component$:"ojInputNumber", max:1E3, min:20, step:1, value:$initialSize$$});
    $dialog$$.ojDialog({initialVisibility:"show", position:{my:"center center", at:"center center", collision:"none", of:$$$$11$$(this.root)}});
  }, $_handleContextMenuSelect$:function($event$$78$$, $ui$$1$$) {
    var $initialSize$$1_parent$$25$$;
    this.$menuItemFunction$ = $ui$$1$$.item.attr("data-oj-command");
    if (this.$menuItemFunction$ === this.$_getMappedCommand$("sortColAsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("sortColDsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("cut") || this.$menuItemFunction$ === this.$_getMappedCommand$("paste")) {
      this.grid.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, null);
    } else {
      if (this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") || this.$menuItemFunction$ === this.$_getMappedCommand$("resizeHeight")) {
        $initialSize$$1_parent$$25$$ = this.$_findFirstAncestor$($$$$11$$(this.$contextMenuEvent$.target), "oj-datagrid-headercell"), $initialSize$$1_parent$$25$$ = null != $initialSize$$1_parent$$25$$ ? this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") ? $initialSize$$1_parent$$25$$.outerWidth() : $initialSize$$1_parent$$25$$.outerHeight() : this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") ? $$$$11$$(this.$contextMenuEvent$.target).outerWidth() : $$$$11$$(this.$contextMenuEvent$.target).outerHeight(), 
        this.$_buildResizeDialog$($ui$$1$$.item.text(), $initialSize$$1_parent$$25$$);
      }
    }
  }, $_handleContextMenuBeforeShow$:function($event$$79$$, $ui$$2$$) {
    var $capabilities_cell_header$$4$$;
    $$$$11$$(this.$_getContextMenu$());
    this.$contextMenuEvent$ = $event$$79$$.originalEvent.originalEvent;
    $ui$$2$$.openOptions.position = "keydown" === this.$contextMenuEvent$.type ? {my:"start top", at:"start bottom", of:this.$contextMenuEvent$.target} : {my:"start top", at:"start bottom"};
    $capabilities_cell_header$$4$$ = this.$_findFirstAncestor$($$$$11$$(this.$contextMenuEvent$.target).eq(0), this.$_getMappedStyle$("cell"));
    null != $capabilities_cell_header$$4$$ ? $capabilities_cell_header$$4$$ = this.$_getCellCapability$($capabilities_cell_header$$4$$) : ($capabilities_cell_header$$4$$ = this.$_findFirstAncestor$($$$$11$$(this.$contextMenuEvent$.target).eq(0), this.$_getMappedStyle$("headercell")), $capabilities_cell_header$$4$$ = this.$_getHeaderCapability$($capabilities_cell_header$$4$$));
    this.$_manageContextMenu$($capabilities_cell_header$$4$$);
  }, $_addContextMenuCapability$:function($command$$4$$) {
    var $contextMenu$$1$$;
    $contextMenu$$1$$ = $$$$11$$(this.$_getContextMenu$());
    $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").hasClass("oj-disabled") || $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").addClass("oj-disabled");
  }, $_removeContextMenuCapability$:function($command$$5$$) {
    $$$$11$$(this.$_getContextMenu$()).find("[data-oj-command\x3d" + $command$$5$$ + "]").removeClass("oj-disabled");
  }, $_manageContextMenu$:function($capabilities$$1$$) {
    var $property$$24$$, $command$$6$$;
    for ($property$$24$$ in $capabilities$$1$$) {
      $capabilities$$1$$.hasOwnProperty($property$$24$$) && ($command$$6$$ = this.$resources$.$getMappedCommand$($property$$24$$), "disable" === $capabilities$$1$$[$property$$24$$] ? this.$_addContextMenuCapability$($command$$6$$) : this.$_removeContextMenuCapability$($command$$6$$));
    }
  }, $_findFirstAncestor$:function($element$$41$$, $className$$8$$) {
    var $parents$$1$$;
    if ($element$$41$$.hasClass($className$$8$$)) {
      return $element$$41$$;
    }
    $parents$$1$$ = $element$$41$$.parents("." + $className$$8$$);
    return 0 != $parents$$1$$.length ? $parents$$1$$.eq(0) : null;
  }, $_findCellIndex$:function($columnIndex$$2_element$$42$$) {
    var $row$$18$$;
    $row$$18$$ = $columnIndex$$2_element$$42$$.parent();
    $columnIndex$$2_element$$42$$ = $row$$18$$.children().index($columnIndex$$2_element$$42$$);
    return{rowIndex:$row$$18$$.parent().children().index($row$$18$$) - 1, columnIndex:$columnIndex$$2_element$$42$$};
  }, $_findHeadersByCellIndex$:function($columnHeader_index$$128$$) {
    var $rowHeader$$;
    $rowHeader$$ = this.$_getRowHeader$().children().eq(0).children().eq($columnHeader_index$$128$$.rowIndex + 1);
    $columnHeader_index$$128$$ = this.$_getColumnHeader$().children().eq(0).children().eq($columnHeader_index$$128$$.columnIndex);
    return{rowHeader:$rowHeader$$, columnHeader:$columnHeader_index$$128$$};
  }, $_getGrid$:function() {
    return $$$$11$$(this.root);
  }, $_getColumnHeader$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:columnHeader");
  }, $_getRowHeader$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:rowHeader");
  }, $_getDatabody$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:databody");
  }, $_getDatabodyRows$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:databody ." + this.$_getMappedStyle$("row"));
  }, $_getCellCapability$:function($capabilities$$2_cell$$1_index$$129$$) {
    var $columnHeader$$1_headers$$2$$, $rowHeader$$1$$;
    $capabilities$$2_cell$$1_index$$129$$ = this.$_findCellIndex$($capabilities$$2_cell$$1_index$$129$$);
    $columnHeader$$1_headers$$2$$ = this.$_findHeadersByCellIndex$($capabilities$$2_cell$$1_index$$129$$);
    $capabilities$$2_cell$$1_index$$129$$ = {$resizeWidth$:"disable", $resizeHeight$:"disable", $sortRow$:"disable", $sortCol$:"disable"};
    $rowHeader$$1$$ = $columnHeader$$1_headers$$2$$.rowHeader;
    $columnHeader$$1_headers$$2$$ = $columnHeader$$1_headers$$2$$.columnHeader;
    0 !== $columnHeader$$1_headers$$2$$.length && ("true" === $columnHeader$$1_headers$$2$$.attr(this.$_getMappedAttribute$("resizable")) && ($capabilities$$2_cell$$1_index$$129$$.resizeWidth = "enable"), "true" === $columnHeader$$1_headers$$2$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$2_cell$$1_index$$129$$.sortCol = "enable"));
    0 !== $rowHeader$$1$$.length && ("true" === $rowHeader$$1$$.attr(this.$_getMappedAttribute$("resizable")) && ($capabilities$$2_cell$$1_index$$129$$.resizeHeight = "enable"), "true" === $rowHeader$$1$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$2_cell$$1_index$$129$$.sortRow = "enable"));
    return $capabilities$$2_cell$$1_index$$129$$;
  }, $_getHeaderCapability$:function($header$$5$$) {
    var $capabilities$$3$$;
    $capabilities$$3$$ = {$resizeWidth$:"disable", $resizeHeight$:"disable", $sortRow$:"disable", $sortCol$:"disable"};
    null !== $header$$5$$ && ($header$$5$$.hasClass(this.$_getMappedStyle$("colheadercell")) ? ("true" === $header$$5$$.attr(this.$_getMappedAttribute$("resizable")) && ($capabilities$$3$$.resizeWidth = "enable"), $capabilities$$3$$.resizeHeight = this.$_isResizeEnabled$("column", "height") ? "enable" : "disable", "true" === $header$$5$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$3$$.sortCol = "enable")) : ("true" === $header$$5$$.attr(this.$_getMappedAttribute$("resizable")) && 
    ($capabilities$$3$$.resizeHeight = "enable"), $capabilities$$3$$.resizeWidth = this.$_isResizeEnabled$("row", "width") ? "enable" : "disable", "true" === $header$$5$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$3$$.sortRow = "enable")));
    return $capabilities$$3$$;
  }, $_setDataSource$:function() {
    this.$datasource$ = null != this.options.data ? this.options.data : null;
  }, $_setSelection$:function() {
    var $selection$$ = this.options.selection;
    null != $selection$$ && this.grid.SetSelection($selection$$);
  }, $_modifyContext$:function($context$$38$$) {
    $context$$38$$.component = this;
  }, $_setAccessibleContext$:function($context$$39$$) {
    this.grid.SetAccessibleContext($context$$39$$);
  }, $_unregisterResizeListener$:function($element$$43$$) {
    $element$$43$$ && this.$_resizeHandler$ && $oj$$11$$.$DomUtils$.$removeResizeListener$($element$$43$$, this.$_resizeHandler$);
  }, $_registerResizeListener$:function($element$$44$$) {
    $element$$44$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$11$$.$DomUtils$.$addResizeListener$($element$$44$$, this.$_resizeHandler$));
  }, $_handleResize$:function($width$$14$$, $height$$13$$) {
    0 < $width$$14$$ && 0 < $height$$13$$ && this.grid.HandleResize($width$$14$$, $height$$13$$);
  }, getNodeBySubId:function($columnIndex$$3_index$$130_locator$$9$$) {
    var $rowIndex$$5_subId$$5$$, $header$$6$$, $axis$$9$$;
    if (null == $columnIndex$$3_index$$130_locator$$9$$) {
      return this.element ? this.element[0] : null;
    }
    $rowIndex$$5_subId$$5$$ = $columnIndex$$3_index$$130_locator$$9$$.subId;
    return "oj-datagrid-cell" === $rowIndex$$5_subId$$5$$ ? ($rowIndex$$5_subId$$5$$ = $columnIndex$$3_index$$130_locator$$9$$.rowIndex - this.grid.getStartRow(), $columnIndex$$3_index$$130_locator$$9$$ = $columnIndex$$3_index$$130_locator$$9$$.columnIndex - this.grid.getStartColumn(), this.$_getDatabodyRows$().eq($rowIndex$$5_subId$$5$$).children().eq($columnIndex$$3_index$$130_locator$$9$$).get(0)) : "oj-datagrid-sort-icon" === $rowIndex$$5_subId$$5$$ || "oj-datagrid-header" === $rowIndex$$5_subId$$5$$ ? 
    ($axis$$9$$ = $columnIndex$$3_index$$130_locator$$9$$.axis, $columnIndex$$3_index$$130_locator$$9$$ = $columnIndex$$3_index$$130_locator$$9$$.index, "column" === $axis$$9$$ ? $header$$6$$ = $$$$11$$("#" + this.$rootId$ + "\\:columnHeader ." + this.$_getMappedStyle$("headercell")).eq($columnIndex$$3_index$$130_locator$$9$$ - this.grid.getStartColumnHeader()) : "row" === $axis$$9$$ && ($header$$6$$ = $$$$11$$("#" + this.$rootId$ + "\\:rowHeader ." + this.$_getMappedStyle$("headercell")).eq($columnIndex$$3_index$$130_locator$$9$$ - 
    this.grid.getStartRowHeader())), "oj-datagrid-sort-icon" === $rowIndex$$5_subId$$5$$ ? $header$$6$$.children("." + this.$_getMappedStyle$("sortcontainer")).children().get(0) : $header$$6$$.get(0)) : null;
  }, $_getMappedStyle$:function($key$$64$$) {
    return this.$resources$.$getMappedStyle$($key$$64$$);
  }, $_getMappedAttribute$:function($key$$65$$) {
    return this.$resources$.$getMappedAttribute$($key$$65$$);
  }, $_getMappedCommand$:function($key$$66$$) {
    return this.$resources$.$getMappedCommand$($key$$66$$);
  }});
  $oj$$11$$.$FlattenedTreeCellSet$ = function $$oj$$11$$$$FlattenedTreeCellSet$$($startRow$$, $endRow$$, $startColumn$$, $endColumn$$, $nodeSet$$22$$, $columns$$1$$) {
    $oj$$11$$.$Assert$.$assertNumber$($startRow$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($endRow$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($startColumn$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($endColumn$$, null);
    $oj$$11$$.$Assert$.$assertArrayOrNull$($columns$$1$$);
    this.$m_startRow$ = $startRow$$;
    this.$m_endRow$ = $endRow$$;
    this.$m_startColumn$ = $startColumn$$;
    this.$m_endColumn$ = $endColumn$$;
    this.$m_nodeSet$ = $nodeSet$$22$$;
    this.$m_columns$ = $columns$$1$$;
  };
  $goog$exportPath_$$("FlattenedTreeCellSet", $oj$$11$$.$FlattenedTreeCellSet$, $oj$$11$$);
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.getData = function $$oj$$11$$$$FlattenedTreeCellSet$$$getData$($indexes$$3_row$$19_rowData$$5$$) {
    var $column$$6_columnKey$$2_relIndex$$2$$;
    $column$$6_columnKey$$2_relIndex$$2$$ = this.$_getRelIndexes$($indexes$$3_row$$19_rowData$$5$$);
    if (null == $column$$6_columnKey$$2_relIndex$$2$$) {
      return null;
    }
    $indexes$$3_row$$19_rowData$$5$$ = $column$$6_columnKey$$2_relIndex$$2$$[0];
    $column$$6_columnKey$$2_relIndex$$2$$ = $column$$6_columnKey$$2_relIndex$$2$$[1];
    $oj$$11$$.$Assert$.assert($indexes$$3_row$$19_rowData$$5$$ < this.$m_nodeSet$.$getStart$() + this.$m_nodeSet$.$getCount$() && $column$$6_columnKey$$2_relIndex$$2$$ < this.$m_columns$.length);
    $column$$6_columnKey$$2_relIndex$$2$$ = this.$m_columns$[$column$$6_columnKey$$2_relIndex$$2$$];
    $indexes$$3_row$$19_rowData$$5$$ = this.$m_nodeSet$.getData($indexes$$3_row$$19_rowData$$5$$);
    return null != $indexes$$3_row$$19_rowData$$5$$ ? $indexes$$3_row$$19_rowData$$5$$.get ? $indexes$$3_row$$19_rowData$$5$$.get($column$$6_columnKey$$2_relIndex$$2$$) : $indexes$$3_row$$19_rowData$$5$$[$column$$6_columnKey$$2_relIndex$$2$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getData", {getData:$oj$$11$$.$FlattenedTreeCellSet$.prototype.getData});
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.getMetadata = function $$oj$$11$$$$FlattenedTreeCellSet$$$getMetadata$($indexes$$4_metadata$$9_row$$20$$) {
    var $column$$7_columnKey$$3_relIndex$$3$$;
    $column$$7_columnKey$$3_relIndex$$3$$ = this.$_getRelIndexes$($indexes$$4_metadata$$9_row$$20$$);
    if (null == $column$$7_columnKey$$3_relIndex$$3$$) {
      return null;
    }
    $indexes$$4_metadata$$9_row$$20$$ = $column$$7_columnKey$$3_relIndex$$3$$[0];
    $column$$7_columnKey$$3_relIndex$$3$$ = $column$$7_columnKey$$3_relIndex$$3$$[1];
    $oj$$11$$.$Assert$.assert($indexes$$4_metadata$$9_row$$20$$ < this.$m_nodeSet$.$getStart$() + this.$m_nodeSet$.$getCount$() && $column$$7_columnKey$$3_relIndex$$3$$ < this.$m_columns$.length);
    $column$$7_columnKey$$3_relIndex$$3$$ = this.$m_columns$[$column$$7_columnKey$$3_relIndex$$3$$];
    $indexes$$4_metadata$$9_row$$20$$ = this.$m_nodeSet$.getMetadata($indexes$$4_metadata$$9_row$$20$$);
    $indexes$$4_metadata$$9_row$$20$$.keys = {row:$indexes$$4_metadata$$9_row$$20$$.key, column:$column$$7_columnKey$$3_relIndex$$3$$};
    return $indexes$$4_metadata$$9_row$$20$$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$FlattenedTreeCellSet$.prototype.getMetadata});
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.$_getRelIndexes$ = function $$oj$$11$$$$FlattenedTreeCellSet$$$$_getRelIndexes$$($column$$8_indexes$$5$$) {
    var $row$$21$$;
    $oj$$11$$.$Assert$.$assertObject$($column$$8_indexes$$5$$);
    if (null == this.$m_nodeSet$ || 0 == this.$m_nodeSet$.length) {
      return null;
    }
    $row$$21$$ = $column$$8_indexes$$5$$.row - this.$m_startRow$ + this.$m_nodeSet$.$getStart$();
    $column$$8_indexes$$5$$ = $column$$8_indexes$$5$$.column;
    $oj$$11$$.$Assert$.$assertNumber$($row$$21$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($column$$8_indexes$$5$$, null);
    $oj$$11$$.$Assert$.assert(0 <= $row$$21$$ && 0 <= $column$$8_indexes$$5$$);
    return[$row$$21$$, $column$$8_indexes$$5$$];
  };
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.$getStart$ = function $$oj$$11$$$$FlattenedTreeCellSet$$$$getStart$$($axis$$10$$) {
    return "row" === $axis$$10$$ ? this.$m_startRow$ : "column" === $axis$$10$$ ? this.$m_startColumn$ : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getStart", {$getStart$:$oj$$11$$.$FlattenedTreeCellSet$.prototype.$getStart$});
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.$getCount$ = function $$oj$$11$$$$FlattenedTreeCellSet$$$$getCount$$($axis$$11$$) {
    return "row" === $axis$$11$$ ? Math.min(this.$m_endRow$ - this.$m_startRow$, this.$m_nodeSet$.$getCount$()) : "column" === $axis$$11$$ ? this.$m_endColumn$ - this.$m_startColumn$ : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getCount", {$getCount$:$oj$$11$$.$FlattenedTreeCellSet$.prototype.$getCount$});
  $oj$$11$$.$FlattenedTreeHeaderSet$ = function $$oj$$11$$$$FlattenedTreeHeaderSet$$($start$$27$$, $end$$8$$, $headers$$3$$, $nodeSet$$23$$, $rowHeader$$2$$) {
    $oj$$11$$.$Assert$.$assertNumber$($start$$27$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($end$$8$$, null);
    $oj$$11$$.$Assert$.$assertArrayOrNull$($headers$$3$$);
    this.$m_start$ = $start$$27$$;
    this.$m_end$ = $end$$8$$;
    this.$m_headers$ = $headers$$3$$;
    this.$m_nodeSet$ = $nodeSet$$23$$;
    this.$m_rowHeader$ = $rowHeader$$2$$;
  };
  $goog$exportPath_$$("FlattenedTreeHeaderSet", $oj$$11$$.$FlattenedTreeHeaderSet$, $oj$$11$$);
  $oj$$11$$.$FlattenedTreeHeaderSet$.prototype.getData = function $$oj$$11$$$$FlattenedTreeHeaderSet$$$getData$($index$$131_rowData$$6$$) {
    $oj$$11$$.$Assert$.assert($index$$131_rowData$$6$$ <= this.$m_end$ && $index$$131_rowData$$6$$ >= this.$m_start$);
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? ($index$$131_rowData$$6$$ = this.$m_nodeSet$.getData($index$$131_rowData$$6$$), null != $index$$131_rowData$$6$$ ? $index$$131_rowData$$6$$.get(this.$m_rowHeader$) : null) : this.$m_headers$[$index$$131_rowData$$6$$];
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getData", {getData:$oj$$11$$.$FlattenedTreeHeaderSet$.prototype.getData});
  $oj$$11$$.$FlattenedTreeHeaderSet$.prototype.getMetadata = function $$oj$$11$$$$FlattenedTreeHeaderSet$$$getMetadata$($index$$132$$) {
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? this.$m_nodeSet$.getMetadata($index$$132$$) : {key:this.getData($index$$132$$)};
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$FlattenedTreeHeaderSet$.prototype.getMetadata});
  $oj$$11$$.$FlattenedTreeHeaderSet$.prototype.$getCount$ = function $$oj$$11$$$$FlattenedTreeHeaderSet$$$$getCount$$() {
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? Math.min(this.$m_nodeSet$.$getCount$(), this.$m_end$ - this.$m_start$) : Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getCount", {$getCount$:$oj$$11$$.$FlattenedTreeHeaderSet$.prototype.$getCount$});
  $oj$$11$$.$ArrayCellSet$ = function $$oj$$11$$$$ArrayCellSet$$($startRow$$1$$, $endRow$$1$$, $startColumn$$1$$, $endColumn$$1$$, $callback$$83$$) {
    $oj$$11$$.$Assert$.$assertNumber$($startRow$$1$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($endRow$$1$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($startColumn$$1$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($endColumn$$1$$, null);
    this.$m_startRow$ = $startRow$$1$$;
    this.$m_endRow$ = $endRow$$1$$;
    this.$m_startColumn$ = $startColumn$$1$$;
    this.$m_endColumn$ = $endColumn$$1$$;
    this.$m_callback$ = $callback$$83$$;
  };
  $goog$exportPath_$$("ArrayCellSet", $oj$$11$$.$ArrayCellSet$, $oj$$11$$);
  $oj$$11$$.$ArrayCellSet$.prototype.getData = function $$oj$$11$$$$ArrayCellSet$$$getData$($indexes$$6$$) {
    return this.$m_callback$.$getCellData$($indexes$$6$$.row, $indexes$$6$$.column);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getData", {getData:$oj$$11$$.$ArrayCellSet$.prototype.getData});
  $oj$$11$$.$ArrayCellSet$.prototype.getMetadata = function $$oj$$11$$$$ArrayCellSet$$$getMetadata$($indexes$$7$$) {
    return this.$m_callback$.$getCellMetadata$($indexes$$7$$.row, $indexes$$7$$.column);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$ArrayCellSet$.prototype.getMetadata});
  $oj$$11$$.$ArrayCellSet$.prototype.$getStart$ = function $$oj$$11$$$$ArrayCellSet$$$$getStart$$($axis$$12$$) {
    return "row" == $axis$$12$$ ? this.$m_startRow$ : "column" == $axis$$12$$ ? this.$m_startColumn$ : -1;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStart", {$getStart$:$oj$$11$$.$ArrayCellSet$.prototype.$getStart$});
  $oj$$11$$.$ArrayCellSet$.prototype.$getCount$ = function $$oj$$11$$$$ArrayCellSet$$$$getCount$$($axis$$13$$) {
    return "row" === $axis$$13$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$13$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getCount", {$getCount$:$oj$$11$$.$ArrayCellSet$.prototype.$getCount$});
  $oj$$11$$.$ArrayCellSet$.prototype.getStartRow = function $$oj$$11$$$$ArrayCellSet$$$getStartRow$() {
    return this.$m_startRow$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartRow", {getStartRow:$oj$$11$$.$ArrayCellSet$.prototype.getStartRow});
  $oj$$11$$.$ArrayCellSet$.prototype.getStartColumn = function $$oj$$11$$$$ArrayCellSet$$$getStartColumn$() {
    return this.$m_startColumn$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartColumn", {getStartColumn:$oj$$11$$.$ArrayCellSet$.prototype.getStartColumn});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$($treeDataSource$$1$$, $options$$241$$) {
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.constructor.call(this, $treeDataSource$$1$$, $options$$241$$);
  };
  $goog$exportPath_$$("FlattenedTreeDataGridDataSource", $oj$$11$$.$FlattenedTreeDataGridDataSource$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$FlattenedTreeDataGridDataSource$, $oj$$11$$.$FlattenedTreeDataSource$, "oj.FlattenedTreeDataGridDataSource");
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.Init = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$Init$() {
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.Init.call(this);
    this.$m_columns$ = $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "columns");
    this.$m_rowHeader$ = $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "rowHeader");
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.Init", {Init:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.Init});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$getCountPrecision$$($axis$$14$$) {
    return "row" === $axis$$14$$ ? "estimate" : "actual";
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$getCount$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$getCount$$($axis$$15$$) {
    return "row" === $axis$$15$$ ? -1 : "column" === $axis$$15$$ ? this.$m_columns$.length : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCount", {$getCount$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$getCount$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$fetchHeaders$$($headerRange$$2$$, $callbacks$$27$$, $callbackObjects$$8$$) {
    var $axis$$16$$, $headerSet$$1$$;
    $axis$$16$$ = $headerRange$$2$$.axis;
    if ("column" === $axis$$16$$) {
      $headerSet$$1$$ = new $oj$$11$$.$FlattenedTreeHeaderSet$($headerRange$$2$$.start, $headerRange$$2$$.start + $headerRange$$2$$.count, this.$m_columns$);
    } else {
      if ("row" === $axis$$16$$) {
        if (null != this.$m_rowHeader$) {
          this.$m_fetchHeaderRequest$ = {range:$headerRange$$2$$, callbacks:$callbacks$$27$$, callbackObjects:$callbackObjects$$8$$};
          return;
        }
        $headerSet$$1$$ = new $oj$$11$$.$ArrayHeaderSet$($headerRange$$2$$.start, $headerRange$$2$$.start, $axis$$16$$, null);
      }
    }
    null != $headerSet$$1$$ && null != $callbacks$$27$$ && null != $callbacks$$27$$.success && (null == $callbackObjects$$8$$ && ($callbackObjects$$8$$ = {}), $callbacks$$27$$.success.call($callbackObjects$$8$$.success, $headerSet$$1$$, $headerRange$$2$$));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$fetchCells$$($cellRanges$$1$$, $callbacks$$28$$, $callbackObjects$$9$$) {
    var $i$$164$$, $cellRange$$2$$, $rowStart$$2$$, $rowCount$$1$$;
    for ($i$$164$$ = 0;$i$$164$$ < $cellRanges$$1$$.length;$i$$164$$++) {
      if ($cellRange$$2$$ = $cellRanges$$1$$[$i$$164$$], "row" == $cellRange$$2$$.axis) {
        $rowStart$$2$$ = $cellRange$$2$$.start;
        $rowCount$$1$$ = $cellRange$$2$$.count;
        break;
      }
    }
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$fetchRows$.call(this, {start:$rowStart$$2$$, count:$rowCount$$1$$}, {success:function($nodeSet$$24$$) {
      this.$_handleFetchRowsSuccess$($nodeSet$$24$$, $cellRanges$$1$$, $callbacks$$28$$, $callbackObjects$$9$$, 0);
    }.bind(this), error:function($status$$8$$) {
      this.$_handleFetchRowsError$($status$$8$$, {start:$rowStart$$2$$, count:$rowCount$$1$$}, $callbacks$$28$$, $callbackObjects$$9$$);
    }.bind(this)});
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchCells$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.keys = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$keys$($colIndex_indexes$$8$$) {
    var $rowIndex$$6$$;
    $rowIndex$$6$$ = $colIndex_indexes$$8$$.row;
    $colIndex_indexes$$8$$ = $colIndex_indexes$$8$$.column;
    return $rowIndex$$6$$ > $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getFetchedRange$.call(this).end || $colIndex_indexes$$8$$ > this.$m_columns$.length ? null : {row:$oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.getKey.call(this, $rowIndex$$6$$), column:this.$m_columns$[$colIndex_indexes$$8$$]};
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.keys", {keys:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.keys});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$indexes$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$indexes$$($colKey$$1_keys$$14$$) {
    var $rowIndex$$7_rowKey$$18$$, $colIndex$$1$$, $i$$165$$;
    $rowIndex$$7_rowKey$$18$$ = $colKey$$1_keys$$14$$.row;
    $colKey$$1_keys$$14$$ = $colKey$$1_keys$$14$$.column;
    $rowIndex$$7_rowKey$$18$$ = $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getIndex$.call(this, $rowIndex$$7_rowKey$$18$$);
    for ($i$$165$$ = 0;$i$$165$$ < this.$m_columns$.length;$i$$165$$++) {
      if (this.$m_columns$[$i$$165$$] === $colKey$$1_keys$$14$$) {
        $colIndex$$1$$ = $i$$165$$;
        break;
      }
    }
    return 0 <= $rowIndex$$7_rowKey$$18$$ && 0 <= $colIndex$$1$$ ? {row:$rowIndex$$7_rowKey$$18$$, column:$colIndex$$1$$} : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.indexes", {$indexes$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$indexes$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.sort = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$sort$($criteria$$5$$, $callbacks$$29$$, $callbackObjects$$10$$) {
    return $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).sort($criteria$$5$$, {success:function() {
      this.$_handleSortSuccess$($callbacks$$29$$, $callbackObjects$$10$$);
    }.bind(this), error:$callbacks$$29$$.error});
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.sort", {sort:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.sort});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleSortSuccess$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$_handleSortSuccess$$($callbacks$$30$$, $callbackObjects$$11$$) {
    this.refresh();
    $callbacks$$30$$.success && (null == $callbackObjects$$11$$ && ($callbackObjects$$11$$ = {}), $callbacks$$30$$.success.call($callbackObjects$$11$$.success));
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.move = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$move$($rowToMove$$4$$, $referenceRow$$4$$, $position$$8$$, $callbacks$$31$$) {
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).move($rowToMove$$4$$, $referenceRow$$4$$, $position$$8$$, $callbacks$$31$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.move", {move:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.move});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$getCapability$($feature$$9$$) {
    return "default" === $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).getCapability($feature$$9$$) ? "column" : "none";
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCapability", {getCapability:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$insertMetadata$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$insertMetadata$$($key$$67$$, $metadata$$10$$) {
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$insertMetadata$.call(this, $key$$67$$, $metadata$$10$$);
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsSuccess$$($cellSet$$1_nodeSet$$25$$, $cellRanges$$2$$, $callbacks$$32$$, $callbackObjects$$12$$) {
    var $headerRange$$3_i$$166$$, $cellRange$$3$$, $rowStart$$3$$, $rowCount$$2$$, $columnStart$$, $columnCount$$;
    for ($headerRange$$3_i$$166$$ = 0;$headerRange$$3_i$$166$$ < $cellRanges$$2$$.length;$headerRange$$3_i$$166$$++) {
      $cellRange$$3$$ = $cellRanges$$2$$[$headerRange$$3_i$$166$$], "row" == $cellRange$$3$$.axis ? ($rowStart$$3$$ = $cellRange$$3$$.start, $rowCount$$2$$ = $cellRange$$3$$.count) : "column" == $cellRange$$3$$.axis && ($columnStart$$ = $cellRange$$3$$.start, $columnCount$$ = $cellRange$$3$$.count);
    }
    this.$m_fetchHeaderRequest$ && ($headerRange$$3_i$$166$$ = this.$m_fetchHeaderRequest$.range, $headerRange$$3_i$$166$$.start == $rowStart$$3$$ && $headerRange$$3_i$$166$$.count == $rowCount$$2$$ && this.$_handleRowHeaderFetchSuccess$($cellSet$$1_nodeSet$$25$$, $headerRange$$3_i$$166$$, this.$m_fetchHeaderRequest$.callbacks, this.$m_fetchHeaderRequest$.callbackObjects), this.$m_fetchHeaderRequest$ = null);
    $cellSet$$1_nodeSet$$25$$ = new $oj$$11$$.$FlattenedTreeCellSet$($rowStart$$3$$, $rowStart$$3$$ + $rowCount$$2$$, $columnStart$$, $columnStart$$ + $columnCount$$, $cellSet$$1_nodeSet$$25$$, this.$m_columns$);
    $callbacks$$32$$.success && (null == $callbackObjects$$12$$ && ($callbackObjects$$12$$ = {}), $callbacks$$32$$.success.call($callbackObjects$$12$$.success, $cellSet$$1_nodeSet$$25$$, $cellRanges$$2$$));
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsError$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsError$$($status$$9$$, $headerCallbacks_range$$16$$, $callbacks$$33$$, $callbackObjects$$13$$) {
    var $headerCallbackObjects_headerRange$$4$$;
    this.$m_fetchHeaderRequest$ && ($headerCallbackObjects_headerRange$$4$$ = this.$m_fetchHeaderRequest$.range, $headerCallbackObjects_headerRange$$4$$.start == $headerCallbacks_range$$16$$.start && $headerCallbackObjects_headerRange$$4$$.count == $headerCallbacks_range$$16$$.count && ($headerCallbacks_range$$16$$ = this.$m_fetchHeaderRequest$.callbacks, $headerCallbackObjects_headerRange$$4$$ = this.$m_fetchHeaderRequest$.callbackObjects, $headerCallbacks_range$$16$$.error && (null == $headerCallbackObjects_headerRange$$4$$ && 
    ($headerCallbackObjects_headerRange$$4$$ = {}), $headerCallbacks_range$$16$$.error.call($headerCallbackObjects_headerRange$$4$$.error, $status$$9$$))), this.$m_fetchHeaderRequest$ = null);
    $callbacks$$33$$.error && (null == $callbackObjects$$13$$ && ($callbackObjects$$13$$ = {}), $callbacks$$33$$.success.call($callbackObjects$$13$$.error, $status$$9$$));
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleRowHeaderFetchSuccess$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$_handleRowHeaderFetchSuccess$$($headerSet$$2_nodeSet$$26$$, $headerRange$$5$$, $callbacks$$34$$, $callbackObjects$$14$$) {
    $headerSet$$2_nodeSet$$26$$ = new $oj$$11$$.$FlattenedTreeHeaderSet$($headerRange$$5$$.start, $headerRange$$5$$.start + $headerRange$$5$$.count, this.$m_columns$, $headerSet$$2_nodeSet$$26$$, this.$m_rowHeader$);
    $callbacks$$34$$.success && (null == $callbackObjects$$14$$ && ($callbackObjects$$14$$ = {}), $callbacks$$34$$.success.call($callbackObjects$$14$$.success, $headerSet$$2_nodeSet$$26$$, $headerRange$$5$$));
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$insertRows$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$insertRows$$($cellSet$$2_insertAtIndex$$1$$, $insertAtRowKey$$, $event$$80_nodeSet$$27$$) {
    $cellSet$$2_insertAtIndex$$1$$ = new $oj$$11$$.$FlattenedTreeCellSet$($cellSet$$2_insertAtIndex$$1$$, $cellSet$$2_insertAtIndex$$1$$ + $event$$80_nodeSet$$27$$.$getCount$(), 0, this.$m_columns$.length, $event$$80_nodeSet$$27$$, this.$m_columns$);
    $event$$80_nodeSet$$27$$ = {source:this, operation:"insert"};
    $event$$80_nodeSet$$27$$.result = $cellSet$$2_insertAtIndex$$1$$;
    $event$$80_nodeSet$$27$$.keys = {row:$insertAtRowKey$$};
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$80_nodeSet$$27$$);
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$removeRows$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$removeRows$$($event$$81_rowKeys$$1$$) {
    var $keys$$15$$, $i$$167$$;
    $keys$$15$$ = [];
    for ($i$$167$$ = 0;$i$$167$$ < $event$$81_rowKeys$$1$$.length;$i$$167$$++) {
      $keys$$15$$.push({row:$event$$81_rowKeys$$1$$[$i$$167$$].key});
    }
    $event$$81_rowKeys$$1$$ = {source:this, operation:"delete"};
    $event$$81_rowKeys$$1$$.keys = $keys$$15$$;
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$81_rowKeys$$1$$);
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$handleMaxCountReached$$($range$$17$$, $callbacks$$35$$) {
    $callbacks$$35$$.success.call(null, new $oj$$11$$.$EmptyNodeSet$(null, $range$$17$$.start));
  };
  $oj$$11$$.$PagingDataGridDataSource$ = function $$oj$$11$$$$PagingDataGridDataSource$$($dataSource$$4$$) {
    if (!($dataSource$$4$$ instanceof $oj$$11$$.$DataGridDataSource$)) {
      throw new $oj$$11$$.$Message$("Not a datagridatasource", "Not a datagridatasource", $oj$$11$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.$dataSource$ = $dataSource$$4$$;
    this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("PagingDataGridDataSource", $oj$$11$$.$PagingDataGridDataSource$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$PagingDataGridDataSource$, $oj$$11$$.$PagingDataSource$, "oj.PagingDataGridDataSource");
  $oj$$11$$.$PagingDataGridDataSource$.prototype.Init = function $$oj$$11$$$$PagingDataGridDataSource$$$Init$() {
    $oj$$11$$.$PagingDataGridDataSource$.$superclass$.Init.call(this);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.Init", {Init:$oj$$11$$.$PagingDataGridDataSource$.prototype.Init});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.fetch = function $$oj$$11$$$$PagingDataGridDataSource$$$fetch$($options$$243$$) {
    this.$_initialized$ = !0;
    this.$_startIndex$ = $options$$243$$.startIndex;
    this.$dataSource$.setPageSize(this.$_currentPageSize$);
    var $self$$52$$ = this;
    return $oj$$11$$.$Object$.$__getPromise$(function($resolve$$38$$) {
      $self$$52$$.$dataSource$.fetch($options$$243$$);
      $resolve$$38$$();
    });
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetch", {fetch:$oj$$11$$.$PagingDataGridDataSource$.prototype.fetch});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.hasMore = function $$oj$$11$$$$PagingDataGridDataSource$$$hasMore$() {
    return this.$dataSource$.hasMore();
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.hasMore", {hasMore:$oj$$11$$.$PagingDataGridDataSource$.prototype.hasMore});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.next = function $$oj$$11$$$$PagingDataGridDataSource$$$next$() {
    return this.$dataSource$.totalSize() > this.$_startIndex$ ? (this.$_currentPageSize$ += this.$_pageSize$, this.$dataSource$.setPageSize(this.$_currentPageSize$), this.fetch({startIndex:this.$_startIndex$})) : $oj$$11$$.$Object$.$__getPromise$(function($resolve$$39$$, $reject$$39$$) {
      $reject$$39$$();
    });
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.next", {next:$oj$$11$$.$PagingDataGridDataSource$.prototype.next});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.previous = function $$oj$$11$$$$PagingDataGridDataSource$$$previous$() {
    return 0 != this.$_startIndex$ || -1 != this.$_startIndex$ ? (this.$_startIndex$ -= this.$_pageSize$, this.$_startIndex$ = 0 > this.$_startIndex$ ? 0 : this.$_startIndex$, this.$_currentPageSize$ += this.$_pageSize$, this.$dataSource$.setPageSize(this.$_currentPageSize$), this.fetch({startIndex:this.$_startIndex$})) : $oj$$11$$.$Object$.$__getPromise$(function($resolve$$40$$, $reject$$40$$) {
      $reject$$40$$();
    });
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.previous", {previous:$oj$$11$$.$PagingDataGridDataSource$.prototype.previous});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.setPageSize = function $$oj$$11$$$$PagingDataGridDataSource$$$setPageSize$($n$$21$$) {
    this.$_pageSize$ = $n$$21$$;
    this.$_currentPageSize$ = this.$_startIndex$ + $n$$21$$;
    this.$dataSource$.setPageSize(this.$_currentPageSize$);
  };
  $oj$$11$$.$PagingDataGridDataSource$.prototype.startIndex = function $$oj$$11$$$$PagingDataGridDataSource$$$startIndex$() {
    return this.$_startIndex$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.startIndex", {startIndex:$oj$$11$$.$PagingDataGridDataSource$.prototype.startIndex});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$getCount$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$getCount$$($axis$$17$$) {
    return this.$dataSource$.$getCount$($axis$$17$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCount", {$getCount$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$getCount$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$getCountPrecision$$($axis$$18$$) {
    return this.$dataSource$.$getCountPrecision$($axis$$18$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$fetchHeaders$$($headerRange$$6$$, $callbacks$$36$$, $callbackObjects$$15$$) {
    var $headerSet$$3$$;
    null == this.$_initialized$ ? ($headerSet$$3$$ = new $oj$$11$$.$ArrayHeaderSet$(0, 0, $headerRange$$6$$.axis, null), null != $callbacks$$36$$ && $callbacks$$36$$.success && $callbacks$$36$$.success.call($callbackObjects$$15$$.success, $headerSet$$3$$, $headerRange$$6$$)) : this.$dataSource$.$fetchHeaders$($headerRange$$6$$, $callbacks$$36$$, $callbackObjects$$15$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$fetchCells$$($cellRanges$$3$$, $callbacks$$37$$, $callbackObjects$$16$$) {
    var $cellSet$$3$$;
    null == this.$_initialized$ ? ($cellSet$$3$$ = new $oj$$11$$.$ArrayCellSet$(0, 0, 0, 0, null), null != $callbacks$$37$$ && $callbacks$$37$$.success && $callbacks$$37$$.success.call($callbackObjects$$16$$.success, $cellSet$$3$$, $cellRanges$$3$$)) : this.$dataSource$.$fetchCells$($cellRanges$$3$$, $callbacks$$37$$, $callbackObjects$$16$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$fetchCells$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.keys = function $$oj$$11$$$$PagingDataGridDataSource$$$keys$($indexes$$9$$) {
    return this.$dataSource$.keys($indexes$$9$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.keys", {keys:$oj$$11$$.$PagingDataGridDataSource$.prototype.keys});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$indexes$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$indexes$$($keys$$16$$) {
    return this.$dataSource$.$indexes$($keys$$16$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.indexes", {$indexes$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$indexes$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.on = function $$oj$$11$$$$PagingDataGridDataSource$$$on$($eventType$$29$$, $eventHandler$$6$$) {
    this.$dataSource$.on($eventType$$29$$, $eventHandler$$6$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.on", {on:$oj$$11$$.$PagingDataGridDataSource$.prototype.on});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.off = function $$oj$$11$$$$PagingDataGridDataSource$$$off$($eventType$$30$$, $eventHandler$$7$$) {
    this.$dataSource$.off($eventType$$30$$, $eventHandler$$7$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.off", {off:$oj$$11$$.$PagingDataGridDataSource$.prototype.off});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.getCapability = function $$oj$$11$$$$PagingDataGridDataSource$$$getCapability$($feature$$10$$) {
    return this.$dataSource$.getCapability($feature$$10$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCapability", {getCapability:$oj$$11$$.$PagingDataGridDataSource$.prototype.getCapability});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.size = function $$oj$$11$$$$PagingDataGridDataSource$$$size$() {
    return null == this.$_initialized$ ? -1 : this.$dataSource$.size();
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.size", {size:$oj$$11$$.$PagingDataGridDataSource$.prototype.size});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.sort = function $$oj$$11$$$$PagingDataGridDataSource$$$sort$($criteria$$6$$, $callbacks$$38$$, $callbackObjects$$17$$) {
    this.$dataSource$.sort($criteria$$6$$, $callbacks$$38$$, $callbackObjects$$17$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.sort", {sort:$oj$$11$$.$PagingDataGridDataSource$.prototype.sort});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.totalSize = function $$oj$$11$$$$PagingDataGridDataSource$$$totalSize$() {
    return null == this.$_initialized$ ? -1 : this.$dataSource$.totalSize();
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.totalSize", {totalSize:$oj$$11$$.$PagingDataGridDataSource$.prototype.totalSize});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.move = function $$oj$$11$$$$PagingDataGridDataSource$$$move$($moveKey$$1$$, $atKey$$1$$) {
    this.$dataSource$.move($moveKey$$1$$, $atKey$$1$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.move", {move:$oj$$11$$.$PagingDataGridDataSource$.prototype.move});
  $oj$$11$$.$ArrayHeaderSet$ = function $$oj$$11$$$$ArrayHeaderSet$$($start$$28$$, $end$$9$$, $axis$$19$$, $callback$$84$$) {
    $oj$$11$$.$Assert$.$assertNumber$($start$$28$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($end$$9$$, null);
    this.$m_start$ = $start$$28$$;
    this.$m_end$ = $end$$9$$;
    this.$m_axis$ = $axis$$19$$;
    this.$m_callback$ = $callback$$84$$;
  };
  $goog$exportPath_$$("ArrayHeaderSet", $oj$$11$$.$ArrayHeaderSet$, $oj$$11$$);
  $oj$$11$$.$ArrayHeaderSet$.prototype.getData = function $$oj$$11$$$$ArrayHeaderSet$$$getData$($index$$133$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$11$$.$Assert$.assert($index$$133$$ <= this.$m_end$ && $index$$133$$ >= this.$m_start$);
    return this.$m_callback$.$getHeaderData$(this.$m_axis$, $index$$133$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getData", {getData:$oj$$11$$.$ArrayHeaderSet$.prototype.getData});
  $oj$$11$$.$ArrayHeaderSet$.prototype.getMetadata = function $$oj$$11$$$$ArrayHeaderSet$$$getMetadata$($index$$134$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$11$$.$Assert$.assert($index$$134$$ <= this.$m_end$ && $index$$134$$ >= this.$m_start$);
    return this.$m_callback$.$getHeaderMetadata$(this.$m_axis$, $index$$134$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$ArrayHeaderSet$.prototype.getMetadata});
  $oj$$11$$.$ArrayHeaderSet$.prototype.$getCount$ = function $$oj$$11$$$$ArrayHeaderSet$$$$getCount$$() {
    return null == this.$m_callback$ ? 0 : Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getCount", {$getCount$:$oj$$11$$.$ArrayHeaderSet$.prototype.$getCount$});
  $oj$$11$$.$ArrayHeaderSet$.prototype.$getStart$ = function $$oj$$11$$$$ArrayHeaderSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getStart", {$getStart$:$oj$$11$$.$ArrayHeaderSet$.prototype.$getStart$});
});
