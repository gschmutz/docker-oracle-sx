/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "knockout", "ojs/ojpagingcontrol", "ojs/ojknockout-model"], function($oj$$18$$, $$$$18$$, $ko$$3$$) {
  $oj$$18$$.$CollectionPagingDataSource$ = function $$oj$$18$$$$CollectionPagingDataSource$$($collection$$32$$) {
    this.$collection$ = $collection$$32$$;
    this.current = 0;
    this.Init();
    this.$dataWindow$ = [];
    this.setPageSize(10);
  };
  $goog$exportPath_$$("CollectionPagingDataSource", $oj$$18$$.$CollectionPagingDataSource$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CollectionPagingDataSource$, $oj$$18$$.$PagingDataSource$, "oj.CollectionPagingDataSource");
  $oj$$18$$.$CollectionPagingDataSource$.prototype.Init = function $$oj$$18$$$$CollectionPagingDataSource$$$Init$() {
    $oj$$18$$.$CollectionPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.Init", {Init:$oj$$18$$.$CollectionPagingDataSource$.prototype.Init});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.$_getSize$ = function $$oj$$18$$$$CollectionPagingDataSource$$$$_getSize$$() {
    return this.hasMore() ? this.pageSize : this.totalSize() - this.startIndex();
  };
  $oj$$18$$.$CollectionPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$18$$$$CollectionPagingDataSource$$$$_refreshDataWindow$$() {
    this.$dataWindow$ = Array(this.$_getSize$());
    var $self$$101$$ = this;
    return this.$collection$.$IterativeAt$(this.startIndex(), this.startIndex() + this.$dataWindow$.length).then(function($array$$13$$) {
      for (var $i$$239$$ = 0;$i$$239$$ < $array$$13$$.length;$i$$239$$++) {
        $self$$101$$.$dataWindow$[$i$$239$$] = $array$$13$$[$i$$239$$];
      }
      $self$$101$$.$_refreshObservableDataWindow$();
    });
  };
  $oj$$18$$.$CollectionPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$18$$$$CollectionPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$240$$ = 0;$i$$240$$ < this.$dataWindow$.length;$i$$240$$++) {
        this.$observableDataWindow$.push($oj$$18$$.$KnockoutUtils$.map(this.$dataWindow$[$i$$240$$]));
      }
    }
  };
  $oj$$18$$.$CollectionPagingDataSource$.prototype.$getWindow$ = function $$oj$$18$$$$CollectionPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$18$$.$CollectionPagingDataSource$.prototype.$getWindow$});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$18$$$$CollectionPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$3$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$18$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.fetch = function $$oj$$18$$$$CollectionPagingDataSource$$$fetch$($options$$297$$) {
    var $opts$$20$$ = $options$$297$$ || {};
    void 0 !== $opts$$20$$.startIndex && (this.current = $opts$$20$$.startIndex);
    void 0 !== $opts$$20$$.pageSize && (this.pageSize = $opts$$20$$.pageSize);
    var $self$$102$$ = this;
    try {
      this.$collection$.fetch({success:function() {
        $self$$102$$.$_refreshDataWindow$().then(function() {
          $self$$102$$.$_processSuccess$($opts$$20$$);
        });
      }});
    } catch ($e$$85$$) {
      $self$$102$$.$_refreshDataWindow$().then(function() {
        $self$$102$$.$_processSuccess$($opts$$20$$);
      });
    }
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.fetch", {fetch:$oj$$18$$.$CollectionPagingDataSource$.prototype.fetch});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.$_processSuccess$ = function $$oj$$18$$$$CollectionPagingDataSource$$$$_processSuccess$$($options$$298_opts$$21$$) {
    $options$$298_opts$$21$$ = $options$$298_opts$$21$$ || {};
    this.handleEvent("sync", null);
    $options$$298_opts$$21$$.success && $options$$298_opts$$21$$.success();
  };
  $oj$$18$$.$CollectionPagingDataSource$.prototype.handleEvent = function $$oj$$18$$$$CollectionPagingDataSource$$$handleEvent$($eventType$$38$$, $event$$200$$) {
    $oj$$18$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$38$$, $event$$200$$);
  };
  $oj$$18$$.$CollectionPagingDataSource$.prototype.hasMore = function $$oj$$18$$$$CollectionPagingDataSource$$$hasMore$() {
    return this.startIndex() + this.pageSize < this.totalSize();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.hasMore", {hasMore:$oj$$18$$.$CollectionPagingDataSource$.prototype.hasMore});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.next = function $$oj$$18$$$$CollectionPagingDataSource$$$next$() {
    if (this.hasMore()) {
      this.current += this.pageSize;
      var $self$$103$$ = this;
      return this.$_refreshDataWindow$().then(function() {
        $self$$103$$.$_processSuccess$(null);
      });
    }
    this.$_processSuccess$(null);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.next", {next:$oj$$18$$.$CollectionPagingDataSource$.prototype.next});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.previous = function $$oj$$18$$$$CollectionPagingDataSource$$$previous$() {
    0 > this.startIndex() - this.pageSize ? this.current = 0 : this.current -= this.pageSize;
    var $self$$104$$ = this;
    return this.$_refreshDataWindow$().then(function() {
      $self$$104$$.$_processSuccess$(null);
    });
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.previous", {previous:$oj$$18$$.$CollectionPagingDataSource$.prototype.previous});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.setPageSize = function $$oj$$18$$$$CollectionPagingDataSource$$$setPageSize$($n$$23$$) {
    this.pageSize = $n$$23$$;
  };
  $oj$$18$$.$CollectionPagingDataSource$.prototype.startIndex = function $$oj$$18$$$$CollectionPagingDataSource$$$startIndex$() {
    return this.current;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.startIndex", {startIndex:$oj$$18$$.$CollectionPagingDataSource$.prototype.startIndex});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.size = function $$oj$$18$$$$CollectionPagingDataSource$$$size$() {
    var $w$$5$$ = this.$getWindow$();
    return $w$$5$$ ? $w$$5$$.length : 0;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.size", {size:$oj$$18$$.$CollectionPagingDataSource$.prototype.size});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.totalSize = function $$oj$$18$$$$CollectionPagingDataSource$$$totalSize$() {
    return this.$collection$.length;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.totalSize", {totalSize:$oj$$18$$.$CollectionPagingDataSource$.prototype.totalSize});
  $oj$$18$$.$ArrayPagingDataSource$ = function $$oj$$18$$$$ArrayPagingDataSource$$($data$$138$$) {
    this.data = $data$$138$$;
    this.current = 0;
    this.Init();
    this.setPageSize(10);
  };
  $goog$exportPath_$$("ArrayPagingDataSource", $oj$$18$$.$ArrayPagingDataSource$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$ArrayPagingDataSource$, $oj$$18$$.$PagingDataSource$, "oj.ArrayPagingDataSource");
  $oj$$18$$.$ArrayPagingDataSource$.prototype.Init = function $$oj$$18$$$$ArrayPagingDataSource$$$Init$() {
    $oj$$18$$.$ArrayPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.Init", {Init:$oj$$18$$.$ArrayPagingDataSource$.prototype.Init});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.$_getSize$ = function $$oj$$18$$$$ArrayPagingDataSource$$$$_getSize$$() {
    return this.hasMore() ? this.pageSize : this.totalSize() - this.startIndex();
  };
  $oj$$18$$.$ArrayPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$18$$$$ArrayPagingDataSource$$$$_refreshDataWindow$$() {
    this.$dataWindow$ = Array(this.$_getSize$());
    for (var $i$$241$$ = 0;$i$$241$$ < this.$dataWindow$.length;$i$$241$$++) {
      this.$dataWindow$[$i$$241$$] = this.data[this.startIndex() + $i$$241$$];
    }
    this.$_refreshObservableDataWindow$();
    this.handleEvent("sync", null);
  };
  $oj$$18$$.$ArrayPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$18$$$$ArrayPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$242$$ = 0;$i$$242$$ < this.$dataWindow$.length;$i$$242$$++) {
        this.$observableDataWindow$.push(this.$dataWindow$[$i$$242$$]);
      }
    }
  };
  $oj$$18$$.$ArrayPagingDataSource$.prototype.handleEvent = function $$oj$$18$$$$ArrayPagingDataSource$$$handleEvent$($eventType$$39$$, $event$$201$$) {
    $oj$$18$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$39$$, $event$$201$$);
  };
  $oj$$18$$.$ArrayPagingDataSource$.prototype.$getWindow$ = function $$oj$$18$$$$ArrayPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$18$$.$ArrayPagingDataSource$.prototype.$getWindow$});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$18$$$$ArrayPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$3$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$18$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.fetch = function $$oj$$18$$$$ArrayPagingDataSource$$$fetch$($options$$299_opts$$22$$) {
    $options$$299_opts$$22$$ = $options$$299_opts$$22$$ || {};
    void 0 !== $options$$299_opts$$22$$.startIndex && (this.current = $options$$299_opts$$22$$.startIndex);
    void 0 !== $options$$299_opts$$22$$.pageSize && (this.pageSize = $options$$299_opts$$22$$.pageSize);
    this.$_refreshDataWindow$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.fetch", {fetch:$oj$$18$$.$ArrayPagingDataSource$.prototype.fetch});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.hasMore = function $$oj$$18$$$$ArrayPagingDataSource$$$hasMore$() {
    return this.startIndex() + this.pageSize < this.totalSize();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.hasMore", {hasMore:$oj$$18$$.$ArrayPagingDataSource$.prototype.hasMore});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.next = function $$oj$$18$$$$ArrayPagingDataSource$$$next$() {
    this.hasMore() && (this.current += this.pageSize, this.$_refreshDataWindow$());
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.next", {next:$oj$$18$$.$ArrayPagingDataSource$.prototype.next});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.previous = function $$oj$$18$$$$ArrayPagingDataSource$$$previous$() {
    0 > this.startIndex() - this.pageSize ? this.current = 0 : this.current -= this.pageSize;
    this.$_refreshDataWindow$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.previous", {previous:$oj$$18$$.$ArrayPagingDataSource$.prototype.previous});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.setPageSize = function $$oj$$18$$$$ArrayPagingDataSource$$$setPageSize$($n$$24$$) {
    this.pageSize = $n$$24$$;
    this.$_refreshDataWindow$();
  };
  $oj$$18$$.$ArrayPagingDataSource$.prototype.startIndex = function $$oj$$18$$$$ArrayPagingDataSource$$$startIndex$() {
    return this.current;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.startIndex", {startIndex:$oj$$18$$.$ArrayPagingDataSource$.prototype.startIndex});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.size = function $$oj$$18$$$$ArrayPagingDataSource$$$size$() {
    return this.$getWindow$().length;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.size", {size:$oj$$18$$.$ArrayPagingDataSource$.prototype.size});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.totalSize = function $$oj$$18$$$$ArrayPagingDataSource$$$totalSize$() {
    return this.data.length;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.totalSize", {totalSize:$oj$$18$$.$ArrayPagingDataSource$.prototype.totalSize});
});
