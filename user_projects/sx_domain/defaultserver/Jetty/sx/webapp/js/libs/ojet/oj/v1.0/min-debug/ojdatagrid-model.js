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
define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$33$$) {
  $oj$$33$$.$CollectionCellSet$ = function $$oj$$33$$$$CollectionCellSet$$($startRow$$2$$, $endRow$$2$$, $startColumn$$2$$, $endColumn$$2$$, $columns$$19$$) {
    $oj$$33$$.$Assert$.$assertNumber$($startRow$$2$$, null);
    $oj$$33$$.$Assert$.$assertNumber$($endRow$$2$$, null);
    $oj$$33$$.$Assert$.$assertNumber$($startColumn$$2$$, null);
    $oj$$33$$.$Assert$.$assertNumber$($endColumn$$2$$, null);
    $oj$$33$$.$Assert$.$assertArrayOrNull$($columns$$19$$);
    this.$m_startRow$ = $startRow$$2$$;
    this.$m_endRow$ = $endRow$$2$$;
    this.$m_startColumn$ = $startColumn$$2$$;
    this.$m_endColumn$ = $endColumn$$2$$;
    this.$m_columns$ = $columns$$19$$;
  };
  $goog$exportPath_$$("CollectionCellSet", $oj$$33$$.$CollectionCellSet$, $oj$$33$$);
  $oj$$33$$.$CollectionCellSet$.prototype.$setModels$ = function $$oj$$33$$$$CollectionCellSet$$$$setModels$$($models$$9$$) {
    $oj$$33$$.$Assert$.$assertArray$($models$$9$$);
    null != $models$$9$$ && $models$$9$$.length === this.$getCount$("row") && (this.$m_models$ = $models$$9$$);
  };
  $oj$$33$$.$CollectionCellSet$.prototype.getData = function $$oj$$33$$$$CollectionCellSet$$$getData$($indexes$$10$$) {
    var $model$$68$$;
    $model$$68$$ = this.$_getModel$($indexes$$10$$);
    return null == $model$$68$$ ? null : $model$$68$$.get(this.$m_columns$[$indexes$$10$$.column]);
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getData", {getData:$oj$$33$$.$CollectionCellSet$.prototype.getData});
  $oj$$33$$.$CollectionCellSet$.prototype.getMetadata = function $$oj$$33$$$$CollectionCellSet$$$getMetadata$($indexes$$11$$) {
    var $model$$69$$;
    $model$$69$$ = this.$_getModel$($indexes$$11$$);
    return null == $model$$69$$ ? null : {keys:{row:$oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$($model$$69$$), column:this.$m_columns$[$indexes$$11$$.column]}};
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getMetadata", {getMetadata:$oj$$33$$.$CollectionCellSet$.prototype.getMetadata});
  $oj$$33$$.$CollectionCellSet$.prototype.$_getModel$ = function $$oj$$33$$$$CollectionCellSet$$$$_getModel$$($column$$25_indexes$$12$$) {
    var $row$$53$$;
    if (null == this.$m_models$) {
      return null;
    }
    $oj$$33$$.$Assert$.$assertObject$($column$$25_indexes$$12$$);
    $row$$53$$ = $column$$25_indexes$$12$$.row;
    $column$$25_indexes$$12$$ = $column$$25_indexes$$12$$.column;
    $oj$$33$$.$Assert$.assert($row$$53$$ >= this.$m_startRow$ && $row$$53$$ <= this.$m_endRow$ && $column$$25_indexes$$12$$ >= this.$m_startColumn$ && $column$$25_indexes$$12$$ <= this.$m_endColumn$);
    return this.$m_models$[$row$$53$$ - this.$m_startRow$];
  };
  $oj$$33$$.$CollectionCellSet$.prototype.$getCount$ = function $$oj$$33$$$$CollectionCellSet$$$$getCount$$($axis$$22$$) {
    return "row" === $axis$$22$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$22$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCount", {$getCount$:$oj$$33$$.$CollectionCellSet$.prototype.$getCount$});
  $oj$$33$$.$CollectionCellSet$.prototype.getStartRow = function $$oj$$33$$$$CollectionCellSet$$$getStartRow$() {
    return this.$m_startRow$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartRow", {getStartRow:$oj$$33$$.$CollectionCellSet$.prototype.getStartRow});
  $oj$$33$$.$CollectionCellSet$.prototype.$getEndRow$ = function $$oj$$33$$$$CollectionCellSet$$$$getEndRow$$() {
    return this.$m_endRow$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndRow", {$getEndRow$:$oj$$33$$.$CollectionCellSet$.prototype.$getEndRow$});
  $oj$$33$$.$CollectionCellSet$.prototype.getStartColumn = function $$oj$$33$$$$CollectionCellSet$$$getStartColumn$() {
    return this.$m_startColumn$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartColumn", {getStartColumn:$oj$$33$$.$CollectionCellSet$.prototype.getStartColumn});
  $oj$$33$$.$CollectionCellSet$.prototype.$getEndColumn$ = function $$oj$$33$$$$CollectionCellSet$$$$getEndColumn$$() {
    return this.$m_endColumn$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndColumn", {$getEndColumn$:$oj$$33$$.$CollectionCellSet$.prototype.$getEndColumn$});
  $oj$$33$$.$CollectionCellSet$.prototype.$getColumns$ = function $$oj$$33$$$$CollectionCellSet$$$$getColumns$$() {
    return this.$m_columns$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getColumns", {$getColumns$:$oj$$33$$.$CollectionCellSet$.prototype.$getColumns$});
  $oj$$33$$.$CollectionDataGridUtils$ = function $$oj$$33$$$$CollectionDataGridUtils$$() {
  };
  $oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$ = function $$oj$$33$$$$CollectionDataGridUtils$$$_getModelKey$$($model$$70$$) {
    var $key$$118$$;
    $key$$118$$ = $model$$70$$.$GetId$();
    null == $key$$118$$ && ($key$$118$$ = $model$$70$$.$GetCid$());
    return $key$$118$$;
  };
  $oj$$33$$.$CollectionHeaderSet$ = function $$oj$$33$$$$CollectionHeaderSet$$($start$$36$$, $end$$11$$, $headers$$5$$, $rowHeader$$3$$) {
    $oj$$33$$.$Assert$.$assertNumber$($start$$36$$, null);
    $oj$$33$$.$Assert$.$assertNumber$($end$$11$$, null);
    $oj$$33$$.$Assert$.$assertArrayOrNull$($headers$$5$$);
    this.$m_start$ = $start$$36$$;
    this.$m_end$ = $end$$11$$;
    this.$m_headers$ = $headers$$5$$;
    this.$m_rowHeader$ = $rowHeader$$3$$;
  };
  $goog$exportPath_$$("CollectionHeaderSet", $oj$$33$$.$CollectionHeaderSet$, $oj$$33$$);
  $oj$$33$$.$CollectionHeaderSet$.prototype.$setModels$ = function $$oj$$33$$$$CollectionHeaderSet$$$$setModels$$($models$$10$$) {
    $oj$$33$$.$Assert$.$assertArray$($models$$10$$);
    null != $models$$10$$ && $models$$10$$.length === this.$getCount$() && (this.$m_models$ = $models$$10$$);
  };
  $oj$$33$$.$CollectionHeaderSet$.prototype.getData = function $$oj$$33$$$$CollectionHeaderSet$$$getData$($index$$190_model$$71$$) {
    $oj$$33$$.$Assert$.assert($index$$190_model$$71$$ <= this.$m_end$ && $index$$190_model$$71$$ >= this.$m_start$);
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $index$$190_model$$71$$ = this.$m_models$[$index$$190_model$$71$$ - this.$m_start$];
      return $index$$190_model$$71$$.get(this.$m_rowHeader$);
    }
    return this.$m_headers$[$index$$190_model$$71$$];
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getData", {getData:$oj$$33$$.$CollectionHeaderSet$.prototype.getData});
  $oj$$33$$.$CollectionHeaderSet$.prototype.getMetadata = function $$oj$$33$$$$CollectionHeaderSet$$$getMetadata$($index$$191_model$$72$$) {
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $index$$191_model$$72$$ = this.$m_models$[$index$$191_model$$72$$ - this.$m_start$];
      return{key:$oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$($index$$191_model$$72$$)};
    }
    return{key:this.getData($index$$191_model$$72$$)};
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getMetadata", {getMetadata:$oj$$33$$.$CollectionHeaderSet$.prototype.getMetadata});
  $oj$$33$$.$CollectionHeaderSet$.prototype.$getCount$ = function $$oj$$33$$$$CollectionHeaderSet$$$$getCount$$() {
    return Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCount", {$getCount$:$oj$$33$$.$CollectionHeaderSet$.prototype.$getCount$});
  $oj$$33$$.$CollectionHeaderSet$.prototype.$getStart$ = function $$oj$$33$$$$CollectionHeaderSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getStart", {$getStart$:$oj$$33$$.$CollectionHeaderSet$.prototype.$getStart$});
  $oj$$33$$.$CollectionHeaderSet$.prototype.$getEnd$ = function $$oj$$33$$$$CollectionHeaderSet$$$$getEnd$$() {
    return this.$m_end$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getEnd", {$getEnd$:$oj$$33$$.$CollectionHeaderSet$.prototype.$getEnd$});
  $oj$$33$$.$CollectionHeaderSet$.prototype.$getHeaders$ = function $$oj$$33$$$$CollectionHeaderSet$$$$getHeaders$$() {
    return this.$m_headers$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getHeaders", {$getHeaders$:$oj$$33$$.$CollectionHeaderSet$.prototype.$getHeaders$});
  $oj$$33$$.$CollectionHeaderSet$.prototype.$getRowHeader$ = function $$oj$$33$$$$CollectionHeaderSet$$$$getRowHeader$$() {
    return this.$m_rowHeader$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getRowHeader", {$getRowHeader$:$oj$$33$$.$CollectionHeaderSet$.prototype.$getRowHeader$});
  $oj$$33$$.$CollectionDataGridDataSource$ = function $$oj$$33$$$$CollectionDataGridDataSource$$($collection$$54$$, $options$$320$$) {
    this.$collection$ = $collection$$54$$;
    null != $options$$320$$ && (this.$rowHeader$ = $options$$320$$.rowHeader, this.columns = $options$$320$$.columns);
    this.$_startIndex$ = 0;
    this.$_pageSize$ = -1;
    $oj$$33$$.$CollectionDataGridDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionDataGridDataSource", $oj$$33$$.$CollectionDataGridDataSource$, $oj$$33$$);
  $oj$$33$$.$Object$.$createSubclass$($oj$$33$$.$CollectionDataGridDataSource$, $oj$$33$$.$DataGridDataSource$, "oj.CollectionDataGridDataSource");
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.Init = function $$oj$$33$$$$CollectionDataGridDataSource$$$Init$() {
    $oj$$33$$.$CollectionDataGridDataSource$.$superclass$.Init.call(this);
    this.$pendingHeaderCallback$ = {};
    this.$_isRemote$() || (null == this.columns && 0 < this.$collection$.length ? (this.columns = this.$collection$.first().keys(), -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1)) : this.columns = []);
    this.$_registerEventListeners$();
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.Init", {Init:$oj$$33$$.$CollectionDataGridDataSource$.prototype.Init});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_registerEventListeners$$() {
    this.$collection$.on("add", this.$_handleModelAdded$.bind(this));
    this.$collection$.on("remove", this.$_handleModelDeleted$.bind(this));
    this.$collection$.on("change", this.$_handleModelChanged$.bind(this));
    this.$collection$.on("refresh", this.$_handleCollectionRefresh$.bind(this));
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_isRemote$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_isRemote$$() {
    return null != this.$collection$.url || null != this.$collection$.customURL;
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_isDataAvailable$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_isDataAvailable$$() {
    return this.$_isRemote$() ? null != this.data : !0;
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_isHeaderAvailable$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_isHeaderAvailable$$($axis$$23$$) {
    if (this.$_isRemote$()) {
      if ("column" === $axis$$23$$) {
        return null != this.columns;
      }
      if ("row" === $axis$$23$$ && null != this.$rowHeader$) {
        return null != this.data;
      }
    }
    return!0;
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$getCount$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$getCount$$($axis$$24$$) {
    if (!this.$_isHeaderAvailable$($axis$$24$$)) {
      return this.precision = "estimate", -1;
    }
    this.precision = "exact";
    return "row" == $axis$$24$$ ? this.size() : "column" == $axis$$24$$ ? this.columns.length : 0;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCount", {$getCount$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$getCount$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$getCountPrecision$$($axis$$25$$) {
    null == this.precision && this.$getCount$($axis$$25$$);
    return this.precision;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$fetchHeaders$$($headerRange$$7$$, $callbacks$$47$$, $callbackObjects$$18$$) {
    var $axis$$26$$, $callback$$104$$;
    $axis$$26$$ = $headerRange$$7$$.axis;
    this.$_isHeaderAvailable$($axis$$26$$) ? this.$_handleHeaderFetchSuccess$($headerRange$$7$$, $callbacks$$47$$, $callbackObjects$$18$$) : null != $callbacks$$47$$ && ($callback$$104$$ = {}, $callback$$104$$.$headerRange$ = $headerRange$$7$$, $callback$$104$$.callbacks = $callbacks$$47$$, $callback$$104$$.$callbackObjects$ = $callbackObjects$$18$$, this.$pendingHeaderCallback$[$axis$$26$$] = $callback$$104$$);
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_handleHeaderFetchSuccess$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_handleHeaderFetchSuccess$$($headerRange$$8$$, $callbacks$$48$$, $callbackObjects$$19$$, $actualRange_end$$12$$) {
    var $axis$$27$$, $start$$37$$, $count$$39$$, $headerSet$$4$$;
    $axis$$27$$ = $headerRange$$8$$.axis;
    $start$$37$$ = $headerRange$$8$$.start;
    $count$$39$$ = $headerRange$$8$$.count;
    $oj$$33$$.$Assert$.assert("row" === $axis$$27$$ || "column" === $axis$$27$$);
    $oj$$33$$.$Assert$.assert(0 < $count$$39$$);
    if ("column" === $axis$$27$$) {
      null != this.columns ? ($actualRange_end$$12$$ = Math.min(this.columns.length, $start$$37$$ + $count$$39$$), $headerSet$$4$$ = new $oj$$33$$.$CollectionHeaderSet$($start$$37$$, $actualRange_end$$12$$, this.columns)) : $headerSet$$4$$ = new $oj$$33$$.$ArrayHeaderSet$($start$$37$$, $start$$37$$, $axis$$27$$, null);
    } else {
      if ("row" === $axis$$27$$) {
        if (null != this.$rowHeader$) {
          null != $actualRange_end$$12$$ && ($count$$39$$ = $actualRange_end$$12$$.count);
          $actualRange_end$$12$$ = Math.min(this.size(), $start$$37$$ + $count$$39$$);
          0 < this.$_pageSize$ && ($actualRange_end$$12$$ = Math.min($actualRange_end$$12$$, this.totalSize() - this.$_startIndex$));
          $headerSet$$4$$ = new $oj$$33$$.$CollectionHeaderSet$($start$$37$$, $actualRange_end$$12$$, this.columns, this.$rowHeader$);
          this.$_resolveModels$($start$$37$$, $actualRange_end$$12$$, $headerSet$$4$$, $headerRange$$8$$, $callbacks$$48$$, $callbackObjects$$19$$);
          return;
        }
        $headerSet$$4$$ = new $oj$$33$$.$ArrayHeaderSet$($start$$37$$, $start$$37$$, $axis$$27$$, null);
      }
    }
    null != $callbacks$$48$$ && $callbacks$$48$$.success && $callbacks$$48$$.success.call($callbackObjects$$19$$.success, $headerSet$$4$$, $headerRange$$8$$);
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_getRanges$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_getRanges$$($cellRanges$$4$$) {
    var $i$$300$$, $cellRange$$4$$, $rowStart$$4$$, $rowCount$$3$$, $colStart$$1$$, $colCount$$;
    for ($i$$300$$ = 0;$i$$300$$ < $cellRanges$$4$$.length;$i$$300$$ += 1) {
      $cellRange$$4$$ = $cellRanges$$4$$[$i$$300$$], $oj$$33$$.$Assert$.assert("row" === $cellRange$$4$$.axis || "column" === $cellRange$$4$$.axis), $oj$$33$$.$Assert$.assert(0 < $cellRange$$4$$.count), "row" === $cellRange$$4$$.axis ? ($rowStart$$4$$ = $cellRange$$4$$.start, $rowCount$$3$$ = $cellRange$$4$$.count) : "column" === $cellRange$$4$$.axis && ($colStart$$1$$ = $cellRange$$4$$.start, $colCount$$ = $cellRange$$4$$.count);
    }
    return{rowStart:$rowStart$$4$$, rowCount:$rowCount$$3$$, colStart:$colStart$$1$$, colCount:$colCount$$};
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_handleCellFetchSuccess$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_handleCellFetchSuccess$$($cellRanges$$5$$, $callbacks$$49$$, $callbackObjects$$20$$, $actualRange$$1_rowEnd$$1$$) {
    var $cellSet$$4_colEnd$$1_ranges$$, $rowStart$$5$$, $colStart$$2$$;
    $cellSet$$4_colEnd$$1_ranges$$ = this.$_getRanges$($cellRanges$$5$$);
    $rowStart$$5$$ = $cellSet$$4_colEnd$$1_ranges$$.rowStart;
    $actualRange$$1_rowEnd$$1$$ = null != $actualRange$$1_rowEnd$$1$$ ? Math.min(this.size(), $rowStart$$5$$ + $actualRange$$1_rowEnd$$1$$.count) : Math.min(this.size(), $rowStart$$5$$ + $cellSet$$4_colEnd$$1_ranges$$.rowCount);
    $colStart$$2$$ = $cellSet$$4_colEnd$$1_ranges$$.colStart;
    $cellSet$$4_colEnd$$1_ranges$$ = Math.min(this.columns.length, $colStart$$2$$ + $cellSet$$4_colEnd$$1_ranges$$.colCount);
    0 < this.$_pageSize$ && ($actualRange$$1_rowEnd$$1$$ = Math.min($actualRange$$1_rowEnd$$1$$, this.totalSize() - this.$_startIndex$));
    $cellSet$$4_colEnd$$1_ranges$$ = new $oj$$33$$.$CollectionCellSet$($rowStart$$5$$, $actualRange$$1_rowEnd$$1$$, $colStart$$2$$, $cellSet$$4_colEnd$$1_ranges$$, this.columns);
    this.$_resolveModels$($rowStart$$5$$, $actualRange$$1_rowEnd$$1$$, $cellSet$$4_colEnd$$1_ranges$$, $cellRanges$$5$$, $callbacks$$49$$, $callbackObjects$$20$$);
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_resolveModels$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_resolveModels$$($i$$301_rowStart$$6$$, $rowEnd$$2$$, $set$$4$$, $ranges$$1$$, $callbacks$$50$$, $callbackObjects$$21$$) {
    var $promises$$;
    for ($promises$$ = [];$i$$301_rowStart$$6$$ < $rowEnd$$2$$;$i$$301_rowStart$$6$$++) {
      $promises$$.push(this.$collection$.at($i$$301_rowStart$$6$$ + this.$_startIndex$, {deferred:!0}));
    }
    Promise.all($promises$$).then(function($models$$11$$) {
      $set$$4$$.$setModels$($models$$11$$);
      $callbacks$$50$$.success.call($callbackObjects$$21$$.success, $set$$4$$, $ranges$$1$$);
    });
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$fetchCells$$($cellRanges$$6$$, $callbacks$$51$$, $callbackObjects$$22$$) {
    this.$_isDataAvailable$() ? this.$_handleCellFetchSuccess$($cellRanges$$6$$, $callbacks$$51$$, $callbackObjects$$22$$) : (null != $callbacks$$51$$ && (this.$pendingCellCallback$ = {}, this.$pendingCellCallback$.$cellRanges$ = $cellRanges$$6$$, this.$pendingCellCallback$.callbacks = $callbacks$$51$$, this.$pendingCellCallback$.$callbackObjects$ = $callbackObjects$$22$$), this.$_fetchCells$($cellRanges$$6$$));
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$fetchCells$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderCallbacks$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_processPendingHeaderCallbacks$$($axis$$28$$) {
    var $pendingCallback$$, $headerRange$$9$$, $callbacks$$52$$, $callbackObjects$$23$$, $actualRange$$2$$;
    $pendingCallback$$ = this.$pendingHeaderCallback$[$axis$$28$$];
    null != $pendingCallback$$ && ($headerRange$$9$$ = $pendingCallback$$.$headerRange$, $callbacks$$52$$ = $pendingCallback$$.callbacks, $callbackObjects$$23$$ = $pendingCallback$$.$callbackObjects$, "row" === $axis$$28$$ && ($actualRange$$2$$ = $pendingCallback$$.$actualRange$), this.$_handleHeaderFetchSuccess$($headerRange$$9$$, $callbacks$$52$$, $callbackObjects$$23$$, $actualRange$$2$$), this.$pendingHeaderCallback$[$axis$$28$$] = null);
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellCallbacks$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_processPendingCellCallbacks$$() {
    this.$_handleCellFetchSuccess$(this.$pendingCellCallback$.$cellRanges$, this.$pendingCellCallback$.callbacks, this.$pendingCellCallback$.$callbackObjects$, this.$pendingCellCallback$.$actualRange$);
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_fetchCells$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_fetchCells$$($cellRanges$$8_ranges$$2$$) {
    var $rowStart$$7$$;
    $cellRanges$$8_ranges$$2$$ = this.$_getRanges$($cellRanges$$8_ranges$$2$$);
    $rowStart$$7$$ = $cellRanges$$8_ranges$$2$$.rowStart;
    0 < this.$_pageSize$ && ($rowStart$$7$$ += this.$_startIndex$);
    this.$collection$.$setRangeLocal$($rowStart$$7$$, $cellRanges$$8_ranges$$2$$.rowCount).then(function($actual$$2$$) {
      var $first$$9$$ = this.$collection$.at($rowStart$$7$$, {deferred:!0});
      this.$_setActualCallbackRanges$($actual$$2$$.start, $actual$$2$$.count);
      null != $first$$9$$ && void 0 === this.columns ? $first$$9$$.then(function($model$$73$$) {
        this.$_setupColumns$($model$$73$$);
        this.$_fetchCellsComplete$();
      }.bind(this)) : this.$_fetchCellsComplete$();
    }.bind(this));
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_fetchCellsComplete$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_fetchCellsComplete$$() {
    null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderCallbacks$("column"), this.$_processPendingHeaderCallbacks$("row"));
    null != this.$pendingCellCallback$ && this.$_processPendingCellCallbacks$();
    0 < this.$_pageSize$ && $oj$$33$$.$DataGridDataSource$.$superclass$.handleEvent.call(this, "sync", !0);
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_setActualCallbackRanges$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_setActualCallbackRanges$$($start$$38$$, $count$$40$$) {
    var $actualRange$$4$$ = {start:$start$$38$$, count:$count$$40$$};
    null != this.$pendingHeaderCallback$.row && (this.$pendingHeaderCallback$.row.$actualRange$ = $actualRange$$4$$);
    null != this.$pendingCellCallback$ && (this.$pendingCellCallback$.$actualRange$ = $actualRange$$4$$);
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_setupColumns$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_setupColumns$$($model$$74$$) {
    this.columns = $model$$74$$.keys();
    -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1);
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.keys = function $$oj$$33$$$$CollectionDataGridDataSource$$$keys$($indexes$$13$$) {
    var $rowIndex$$8$$, $columnIndex$$4$$, $rowKey$$26$$, $columnKey$$5$$, $atPromise$$, $self$$137$$;
    $rowIndex$$8$$ = $indexes$$13$$.row + this.$_startIndex$;
    $columnIndex$$4$$ = $indexes$$13$$.column;
    $self$$137$$ = this;
    return $oj$$33$$.$Object$.$__getPromise$(function($resolve$$62$$) {
      $atPromise$$ = $self$$137$$.$collection$.at($rowIndex$$8$$, {deferred:!0});
      null != $atPromise$$ ? $atPromise$$.then(function($rowModel$$) {
        $rowKey$$26$$ = $oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$($rowModel$$);
        null == $self$$137$$.columns && $self$$137$$.$_setupColumns$($rowModel$$);
        $columnKey$$5$$ = $self$$137$$.columns[$columnIndex$$4$$];
        $resolve$$62$$({row:null == $rowKey$$26$$ ? null : $rowKey$$26$$, column:null == $columnKey$$5$$ ? null : $columnKey$$5$$});
      }.bind($self$$137$$)) : $resolve$$62$$({row:null, column:null});
    });
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.keys", {keys:$oj$$33$$.$CollectionDataGridDataSource$.prototype.keys});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$indexes$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$indexes$$($keys$$19$$) {
    var $rowKey$$27$$, $columnKey$$6$$, $columnIndex$$5$$, $self$$138$$;
    $rowKey$$27$$ = $keys$$19$$.row;
    $columnKey$$6$$ = $keys$$19$$.column;
    $self$$138$$ = this;
    return $oj$$33$$.$Object$.$__getPromise$(function($resolve$$63$$) {
      $self$$138$$.$collection$.indexOf($rowKey$$27$$, {deferred:!0}).then(function($rowIndex$$9$$) {
        -1 != $rowIndex$$9$$ && ($rowIndex$$9$$ -= this.$_startIndex$);
        null == $self$$138$$.columns ? $self$$138$$.$collection$.first(1, {deferred:!0}).then(function($model$$75$$) {
          $self$$138$$.$_setupColumns$($model$$75$$);
          $columnIndex$$5$$ = $self$$138$$.columns.indexOf($columnKey$$6$$);
          $resolve$$63$$({row:$rowIndex$$9$$, column:$columnIndex$$5$$});
        }.bind($self$$138$$)) : ($columnIndex$$5$$ = $self$$138$$.columns.indexOf($columnKey$$6$$), $resolve$$63$$({row:$rowIndex$$9$$, column:$columnIndex$$5$$}));
      }.bind($self$$138$$));
    });
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.indexes", {$indexes$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$indexes$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.getCapability = function $$oj$$33$$$$CollectionDataGridDataSource$$$getCapability$($feature$$16$$) {
    return "sort" === $feature$$16$$ ? "column" : "move" === $feature$$16$$ ? "row" : null;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCapability", {getCapability:$oj$$33$$.$CollectionDataGridDataSource$.prototype.getCapability});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.sort = function $$oj$$33$$$$CollectionDataGridDataSource$$$sort$($axis$$29_criteria$$15$$, $callbacks$$54$$, $callbackObjects$$25$$) {
    var $comparator$$15$$, $direction$$10$$ = $axis$$29_criteria$$15$$.direction, $key$$119$$ = $axis$$29_criteria$$15$$.key;
    $axis$$29_criteria$$15$$ = $axis$$29_criteria$$15$$.axis;
    null == $callbackObjects$$25$$ && ($callbackObjects$$25$$ = {});
    "column" === $axis$$29_criteria$$15$$ ? (-1 < this.$collection$.$fetchSize$ && this.$collection$.hasMore ? (this.$collection$.comparator = $key$$119$$, this.$collection$.sortDirection = "ascending" === $direction$$10$$ ? 1 : -1) : ("ascending" === $direction$$10$$ && ($comparator$$15$$ = function $$comparator$$15$$$($a$$86$$, $b$$52$$) {
      var $as$$2$$, $bs$$2$$;
      $a$$86$$ = $a$$86$$.get($key$$119$$);
      $b$$52$$ = $b$$52$$.get($key$$119$$);
      $as$$2$$ = isNaN($a$$86$$);
      $bs$$2$$ = isNaN($b$$52$$);
      $a$$86$$ instanceof Date && ($a$$86$$ = $a$$86$$.toISOString(), $as$$2$$ = !0);
      $b$$52$$ instanceof Date && ($b$$52$$ = $b$$52$$.toISOString(), $bs$$2$$ = !0);
      return $as$$2$$ && $bs$$2$$ ? $a$$86$$ < $b$$52$$ ? -1 : $a$$86$$ === $b$$52$$ ? 0 : 1 : $as$$2$$ ? 1 : $bs$$2$$ ? -1 : $a$$86$$ - $b$$52$$;
    }), "descending" === $direction$$10$$ && ($comparator$$15$$ = function $$comparator$$15$$$($a$$87$$, $b$$53$$) {
      var $as$$3$$, $bs$$3$$;
      $a$$87$$ = $a$$87$$.get($key$$119$$);
      $b$$53$$ = $b$$53$$.get($key$$119$$);
      $as$$3$$ = isNaN($a$$87$$);
      $bs$$3$$ = isNaN($b$$53$$);
      $a$$87$$ instanceof Date && ($a$$87$$ = $a$$87$$.toISOString());
      $b$$53$$ instanceof Date && ($b$$53$$ = $b$$53$$.toISOString());
      return $as$$3$$ && $bs$$3$$ ? $a$$87$$ > $b$$53$$ ? -1 : $a$$87$$ === $b$$53$$ ? 0 : 1 : $as$$3$$ ? -1 : $bs$$3$$ ? 1 : $b$$53$$ - $a$$87$$;
    }), this.$collection$.comparator = $comparator$$15$$), this.$collection$.sort(), null != $callbacks$$54$$ && null != $callbacks$$54$$.success && $callbacks$$54$$.success.call($callbackObjects$$25$$.success)) : null != $callbacks$$54$$ && null != $callbacks$$54$$.error && $callbacks$$54$$.error.call($callbackObjects$$25$$.error, "Axis value not supported");
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.sort", {sort:$oj$$33$$.$CollectionDataGridDataSource$.prototype.sort});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.move = function $$oj$$33$$$$CollectionDataGridDataSource$$$move$($moveKey$$2$$, $atKey$$2$$) {
    var $indexPromise$$;
    this.$collection$.get($moveKey$$2$$, {deferred:!0}).then(function($moveModel$$) {
      null == $atKey$$2$$ ? (this.$collection$.remove($moveModel$$), this.$collection$.add($moveModel$$)) : ($moveKey$$2$$ === $atKey$$2$$ ? ($indexPromise$$ = this.$collection$.indexOf($atKey$$2$$, {deferred:!0}), this.$collection$.remove($moveModel$$)) : (this.$collection$.remove($moveModel$$), $indexPromise$$ = this.$collection$.indexOf($atKey$$2$$, {deferred:!0})), $indexPromise$$.then(function($newIndex$$1$$) {
        this.$collection$.add($moveModel$$, {at:$newIndex$$1$$, $force$:!0});
      }.bind(this)));
    }.bind(this));
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.move", {move:$oj$$33$$.$CollectionDataGridDataSource$.prototype.move});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_getModelEvent$$($operation$$7$$, $rowKey$$28$$, $columnKey$$7$$, $rowIndex$$10$$, $columnIndex$$6$$) {
    var $event$$372$$ = {source:this};
    $event$$372$$.operation = $operation$$7$$;
    $event$$372$$.keys = {row:$rowKey$$28$$, column:$columnKey$$7$$};
    $event$$372$$.indexes = {row:$rowIndex$$10$$, column:$columnIndex$$6$$};
    return $event$$372$$;
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_handleModelAdded$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_handleModelAdded$$($model$$76$$) {
    var $event$$373$$, $rowKey$$29$$;
    this.$collection$.indexOf($model$$76$$, {deferred:!0}).then(function($atPromise$$1_index$$192$$) {
      $rowKey$$29$$ = $oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$($model$$76$$);
      $event$$373$$ = this.$_getModelEvent$("insert", $rowKey$$29$$, null, 0 < $atPromise$$1_index$$192$$ - this.$_startIndex$ ? $atPromise$$1_index$$192$$ - this.$_startIndex$ : 0, -1);
      this.handleEvent("change", $event$$373$$);
      $atPromise$$1_index$$192$$ < this.$_pageSize$ + this.$_startIndex$ && ($atPromise$$1_index$$192$$ = this.$collection$.at(this.$_startIndex$ + this.$_pageSize$, {deferred:!0}), null != $atPromise$$1_index$$192$$ && $atPromise$$1_index$$192$$.then(function($overfillModel$$) {
        null != $model$$76$$ && this.$_handleModelDeleted$($overfillModel$$, 0, {index:this.$_startIndex$ + this.$_pageSize$ - 1});
      }.bind(this)));
    }.bind(this));
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_handleModelDeleted$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_handleModelDeleted$$($atPromise$$2_model$$77$$, $collection$$56$$, $args$$16$$) {
    var $event$$374$$, $rowKey$$30$$, $rowIndex$$12$$;
    $rowIndex$$12$$ = $args$$16$$.index;
    0 < this.$_pageSize$ && $rowIndex$$12$$ < this.$_startIndex$ ? ($rowIndex$$12$$ < this.$_startIndex$ && ($rowIndex$$12$$ = 0), $atPromise$$2_model$$77$$ = this.$collection$.at(this.$_startIndex$ - 1, {deferred:!0}), null != $atPromise$$2_model$$77$$ && $atPromise$$2_model$$77$$.then(function($model$$78$$) {
      null != $model$$78$$ && ($rowKey$$30$$ = $oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$($model$$78$$), $event$$374$$ = this.$_getModelEvent$("delete", $rowKey$$30$$, null, $rowIndex$$12$$, -1), this.handleEvent("change", $event$$374$$));
    }.bind(this))) : (0 < this.$_pageSize$ && ($rowIndex$$12$$ -= this.$_startIndex$), $rowKey$$30$$ = $oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$($atPromise$$2_model$$77$$), $event$$374$$ = this.$_getModelEvent$("delete", $rowKey$$30$$, null, $rowIndex$$12$$, -1), this.handleEvent("change", $event$$374$$));
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_handleModelChanged$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_handleModelChanged$$($model$$79$$) {
    var $event$$375$$, $rowKey$$31$$;
    this.$collection$.indexOf($model$$79$$, {deferred:!0}).then(function($index$$193$$) {
      $rowKey$$31$$ = $oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$($model$$79$$);
      $index$$193$$ = 0 < $index$$193$$ - this.$_startIndex$ ? $index$$193$$ - this.$_startIndex$ : -1;
      $event$$375$$ = this.$_getModelEvent$("update", $rowKey$$31$$, null, $index$$193$$, -1);
      this.handleEvent("change", $event$$375$$);
    }.bind(this));
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionRefresh$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_handleCollectionRefresh$$() {
    this.handleEvent("change", this.$_getModelEvent$("refresh", null, null));
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.setPageSize = function $$oj$$33$$$$CollectionDataGridDataSource$$$setPageSize$($n$$35$$) {
    this.$_pageSize$ = $n$$35$$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.setPageSize", {setPageSize:$oj$$33$$.$CollectionDataGridDataSource$.prototype.setPageSize});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.size = function $$oj$$33$$$$CollectionDataGridDataSource$$$size$() {
    return null != this.$_pageSize$ && 0 < this.$_pageSize$ && this.$collection$.size() > this.$_pageSize$ ? this.$_pageSize$ : this.$collection$.size();
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.size", {size:$oj$$33$$.$CollectionDataGridDataSource$.prototype.size});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.totalSize = function $$oj$$33$$$$CollectionDataGridDataSource$$$totalSize$() {
    return null != this.$collection$ ? this.$collection$.totalResults : -1;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.totalSize", {totalSize:$oj$$33$$.$CollectionDataGridDataSource$.prototype.totalSize});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.hasMore = function $$oj$$33$$$$CollectionDataGridDataSource$$$hasMore$() {
    return null != this.$collection$ ? this.$collection$.hasMore : !1;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.hasMore", {hasMore:$oj$$33$$.$CollectionDataGridDataSource$.prototype.hasMore});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.fetch = function $$oj$$33$$$$CollectionDataGridDataSource$$$fetch$($options$$321$$) {
    this.$_startIndex$ = null != $options$$321$$ ? null != $options$$321$$.startIndex ? $options$$321$$.startIndex : 0 : 0;
    this.handleEvent("change", {operation:"sync", pageSize:this.$_pageSize$});
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.getCollection = function $$oj$$33$$$$CollectionDataGridDataSource$$$getCollection$() {
    return this.$collection$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCollection", {getCollection:$oj$$33$$.$CollectionDataGridDataSource$.prototype.getCollection});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$getColumns$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$getColumns$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$getRowHeader$$() {
    return this.$rowHeader$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getRowHeader", {$getRowHeader$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$getStartIndex$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$getStartIndex$$() {
    return this.$_startIndex$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getStartIndex", {$getStartIndex$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$getStartIndex$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$getPageSize$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$getPageSize$$() {
    return this.$_pageSize$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getPageSize", {$getPageSize$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$getPageSize$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.getData = function $$oj$$33$$$$CollectionDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getData", {getData:$oj$$33$$.$CollectionDataGridDataSource$.prototype.getData});
});
