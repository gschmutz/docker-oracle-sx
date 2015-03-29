/*
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
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdatacollection-common", "ojs/ojinputtext"], function($oj$$10$$, $$$$10$$) {
  $oj$$10$$.$PagingDataSource$ = function $$oj$$10$$$$PagingDataSource$$($dataSource$$) {
    this.$dataSource$ = $dataSource$$;
    this.Init();
  };
  $goog$exportPath_$$("PagingDataSource", $oj$$10$$.$PagingDataSource$, $oj$$10$$);
  $oj$$10$$.$Object$.$createSubclass$($oj$$10$$.$PagingDataSource$, $oj$$10$$.$DataSource$, "oj.PagingDataSource");
  $oj$$10$$.$PagingDataSource$.prototype.Init = function $$oj$$10$$$$PagingDataSource$$$Init$() {
    $oj$$10$$.$PagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.Init", {Init:$oj$$10$$.$PagingDataSource$.prototype.Init});
  $oj$$10$$.$PagingDataSource$.prototype.fetch = function $$oj$$10$$$$PagingDataSource$$$fetch$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
    return $oj$$10$$.$Object$.$__getPromise$(function($resolve$$27$$, $reject$$27$$) {
      $reject$$27$$();
    });
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.fetch", {fetch:$oj$$10$$.$PagingDataSource$.prototype.fetch});
  $oj$$10$$.$PagingDataSource$.prototype.hasMore = function $$oj$$10$$$$PagingDataSource$$$hasMore$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
    return!1;
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.hasMore", {hasMore:$oj$$10$$.$PagingDataSource$.prototype.hasMore});
  $oj$$10$$.$PagingDataSource$.prototype.next = function $$oj$$10$$$$PagingDataSource$$$next$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
    return $oj$$10$$.$Object$.$__getPromise$(function($resolve$$28$$, $reject$$28$$) {
      $reject$$28$$();
    });
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.next", {next:$oj$$10$$.$PagingDataSource$.prototype.next});
  $oj$$10$$.$PagingDataSource$.prototype.previous = function $$oj$$10$$$$PagingDataSource$$$previous$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
    return $oj$$10$$.$Object$.$__getPromise$(function($resolve$$29$$, $reject$$29$$) {
      $reject$$29$$();
    });
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.previous", {previous:$oj$$10$$.$PagingDataSource$.prototype.previous});
  $oj$$10$$.$PagingDataSource$.prototype.setPageSize = function $$oj$$10$$$$PagingDataSource$$$setPageSize$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$10$$.$PagingDataSource$.prototype.startIndex = function $$oj$$10$$$$PagingDataSource$$$startIndex$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.startIndex", {startIndex:$oj$$10$$.$PagingDataSource$.prototype.startIndex});
  $oj$$10$$.$PagingDataSource$.prototype.size = function $$oj$$10$$$$PagingDataSource$$$size$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.size", {size:$oj$$10$$.$PagingDataSource$.prototype.size});
  $oj$$10$$.$PagingDataSource$.prototype.totalSize = function $$oj$$10$$$$PagingDataSource$$$totalSize$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.totalSize", {totalSize:$oj$$10$$.$PagingDataSource$.prototype.totalSize});
  $oj$$10$$.$PagingDataSource$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", SYNC:"sync", REFRESH:"refresh", SORT:"sort"};
  $goog$exportPath_$$("PagingDataSource.EventType", $oj$$10$$.$PagingDataSource$.$EventType$, $oj$$10$$);
  (function() {
    $oj$$10$$.$__registerWidget$("oj.ojPagingControl", $$$$10$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{data:null, overflow:"fit", pageSize:25, pageOptions:{layout:["auto"], maxPageLinks:6}, loadMoreOptions:{maxCount:500}, mode:"page", translations:{}}, $_BUNDLE_KEY$:{$_LABEL_ACC_PAGING$:"labelAccPaging", $_LABEL_ACC_NAV_FIRST_PAGE$:"labelAccNavFirstPage", $_LABEL_ACC_NAV_LAST_PAGE$:"labelAccNavLastPage", $_LABEL_ACC_NAV_NEXT_PAGE$:"labelAccNavNextPage", 
    $_LABEL_ACC_NAV_PREVIOUS_PAGE$:"labelAccNavPreviousPage", $_LABEL_ACC_NAV_PAGE$:"labelAccNavPage", $_LABEL_LOAD_MORE$:"labelLoadMore", $_LABEL_NAV_INPUT_PAGE$:"labelNavInputPage", $_LABEL_NAV_INPUT_PAGE_MAX$:"labelNavInputPageMax", $_LABEL_NAV_INPUT_PAGE_SUMMARY$:"labelNavInputPageSummary", $_MSG_ITEM_RANGE$:"msgItemRange", $_MSG_ITEM_RANGE_UNKNOWN$:"msgItemRangeUnknown", $_TIP_NAV_INPUT_PAGE$:"tipNavInputPage", $_TIP_NAV_PAGE_LINK$:"tipNavPageLink", $_TIP_NAV_NEXT_PAGE$:"tipNavNextPage", $_TIP_NAV_PREVIOUS_PAGE$:"tipNavPreviousPage", 
    $_TIP_NAV_FIRST_PAGE$:"tipNavFirstPage", $_TIP_NAV_LAST_PAGE$:"tipNavLastPage", $_ERR_PAGE_INVALID_SUMMARY$:"pageInvalid.summary", $_ERR_PAGE_INVALID_DETAIL$:"pageInvalid.detail", $_ERR_DATA_INVALID_TYPE_SUMMARY$:"dataInvalidType.summary", $_ERR_DATA_INVALID_TYPE_DETAIL$:"dataInvalidType.detail", $_ERR_MAXPAGELINKS_INVALID_SUMMARY$:"maxPageLinksInvalid.summary", $_ERR_MAXPAGELINKS_INVALID_DETAIL$:"maxPageLinksInvalid.detail"}, $_MARKER_STYLE_CLASSES$:{$_WIDGET$:"oj-component", $_ACTIVE$:"oj-active", 
    $_CLICKABLE_ICON$:"oj-clickable-icon", $_DISABLED$:"oj-disabled", $_ENABLED$:"oj-enabled", $_FOCUS$:"oj-focus", $_HOVER$:"oj-hover", $_SELECTED$:"oj-selected"}, $_CSS_CLASSES$:{$_PAGING_CONTROL_CLASS$:"oj-pagingcontrol", $_PAGING_CONTROL_ACC_LABEL_CLASS$:"oj-pagingcontrol-acc-label", $_PAGING_CONTROL_CONTENT_CLASS$:"oj-pagingcontrol-content", $_PAGING_CONTROL_LOAD_MORE_CLASS$:"oj-pagingcontrol-loadmore", $_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$:"oj-pagingcontrol-loadmore-link", $_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$:"oj-pagingcontrol-loadmore-range", 
    $_PAGING_CONTROL_NAV_CLASS$:"oj-pagingcontrol-nav", $_PAGING_CONTROL_NAV_ARROW_CLASS$:"oj-pagingcontrol-nav-arrow", $_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$:"oj-pagingcontrol-nav-arrow-section", $_PAGING_CONTROL_NAV_PAGE_CLASS$:"oj-pagingcontrol-nav-page", $_PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-page-acc-label", $_PAGING_CONTROL_NAV_LABEL_CLASS$:"oj-pagingcontrol-nav-label", $_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$:"oj-pagingcontrol-nav-input-section", $_PAGING_CONTROL_NAV_INPUT_CLASS$:"oj-pagingcontrol-nav-input", 
    $_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$:"oj-pagingcontrol-nav-input-max", $_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$:"oj-pagingcontrol-nav-input-summary", $_PAGING_CONTROL_NAV_PAGES_SECTION_CLASS$:"oj-pagingcontrol-nav-pages-section", $_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$:"oj-pagingcontrol-nav-pages-links", $_PAGING_CONTROL_NAV_FIRST_CLASS$:"oj-pagingcontrol-nav-first", $_PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-first-acc-label", $_PAGING_CONTROL_NAV_PREVIOUS_CLASS$:"oj-pagingcontrol-nav-previous", 
    $_PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-previous-acc-label", $_PAGING_CONTROL_NAV_NEXT_CLASS$:"oj-pagingcontrol-nav-next", $_PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-next-acc-label", $_PAGING_CONTROL_NAV_LAST_CLASS$:"oj-pagingcontrol-nav-last", $_PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-last-acc-label", $_PAGING_CONTROL_NAV_FIRST_ICON_CLASS$:"oj-pagingcontrol-nav-first-icon", $_PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS$:"oj-pagingcontrol-nav-previous-icon", 
    $_PAGING_CONTROL_NAV_NEXT_ICON_CLASS$:"oj-pagingcontrol-nav-next-icon", $_PAGING_CONTROL_NAV_LAST_ICON_CLASS$:"oj-pagingcontrol-nav-last-icon", $_WIDGET_ICON_CLASS$:"oj-component-icon", $_HIDDEN_CONTENT_ACC_CLASS$:"oj-helper-hidden-accessible"}, $_DATA_ATTR_PAGE_NUM$:"data-oj-pagenum", $_OPTION_ENABLED$:"enabled", $_OPTION_DISABLED$:"disabled", $_MODE$:{$_LOAD_MORE$:"loadMore", $_PAGE$:"page"}, $_PAGE_OPTION_LAYOUT$:{$_AUTO$:"auto", $_ALL$:"all", $_INPUT$:"input", $_RANGE_TEXT$:"rangeText", $_PAGES$:"pages", 
    $_NAV$:"nav"}, firstPage:function() {
      var $data$$55$$ = this.$_getData$();
      return null != $data$$55$$ ? (this.$_startIndex$ = 0, $data$$55$$.fetch({startIndex:0})) : $oj$$10$$.$Object$.$__getPromise$(function($resolve$$30$$, $reject$$30$$) {
        $reject$$30$$();
      });
    }, previousPage:function() {
      var $data$$56$$ = this.$_getData$();
      if (null != $data$$56$$) {
        var $page$$ = this.$_getCurrentPage$();
        if (1 < $page$$) {
          return this.$_startIndex$ = this.$_getStartIndexForPage$($page$$ - 1), 0 > this.$_startIndex$ && (this.$_startIndex$ = 0), $data$$56$$.fetch({startIndex:this.$_startIndex$});
        }
      }
      return $oj$$10$$.$Object$.$__getPromise$(function($resolve$$31$$, $reject$$31$$) {
        $reject$$31$$();
      });
    }, nextPage:function() {
      var $data$$57$$ = this.$_getData$();
      if (null != $data$$57$$) {
        var $page$$1$$ = this.$_getCurrentPage$();
        if ($page$$1$$ + 1 <= this.$_getTotalPages$() || 0 > this.$_getTotalPages$()) {
          return this.$_startIndex$ = this.$_getStartIndexForPage$($page$$1$$ + 1), $data$$57$$.fetch({startIndex:this.$_startIndex$});
        }
      }
      return $oj$$10$$.$Object$.$__getPromise$(function($resolve$$32$$, $reject$$32$$) {
        $reject$$32$$();
      });
    }, lastPage:function() {
      var $data$$58$$ = this.$_getData$();
      return null != $data$$58$$ && 0 < this.$_getTotalPages$() ? (this.$_startIndex$ = this.$_getStartIndexForPage$(this.$_getTotalPages$()), $data$$58$$.fetch({startIndex:this.$_startIndex$})) : $oj$$10$$.$Object$.$__getPromise$(function($resolve$$33$$, $reject$$33$$) {
        $reject$$33$$();
      });
    }, page:function($page$$2$$) {
      var $data$$59$$ = this.$_getData$();
      return null != $data$$59$$ && 0 < this.$_getTotalPages$() ? (this.$_startIndex$ = this.$_getStartIndexForPage$($page$$2$$), $data$$59$$.fetch({startIndex:this.$_startIndex$})) : $oj$$10$$.$Object$.$__getPromise$(function($resolve$$34$$, $reject$$34$$) {
        $reject$$34$$();
      });
    }, loadNext:function() {
      var $data$$60$$ = this.$_getData$();
      return null != $data$$60$$ ? $data$$60$$.next() : $oj$$10$$.$Object$.$__getPromise$(function($resolve$$35$$, $reject$$35$$) {
        $reject$$35$$();
      });
    }, refresh:function() {
      this._super();
      if (null != this.$_fetchTimer$) {
        this.$_fetchTimer$ = null;
        var $data$$61$$ = this.$_getData$();
        null != $data$$61$$ && ($data$$61$$.setPageSize(this.options.pageSize), $data$$61$$.fetch({startIndex:this.$_startIndex$}));
      }
      this.$_refresh$(!0);
    }, getNodeBySubId:function($index$$124_locator$$8$$) {
      if (null == $index$$124_locator$$8$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$4$$ = $index$$124_locator$$8$$.subId;
      return "oj-pagingcontrol-nav-input" === $subId$$4$$ ? this.$_getPagingControlNavInput$() : "oj-pagingcontrol-nav-input-max" === $subId$$4$$ ? this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$) : "oj-pagingcontrol-nav-input-summary" === $subId$$4$$ ? this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$) : "oj-pagingcontrol-nav-first" === $subId$$4$$ ? this.$_getPagingControlContainer$().find("." + 
      this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$) : "oj-pagingcontrol-nav-next" === $subId$$4$$ ? this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$) : "oj-pagingcontrol-nav-previous" === $subId$$4$$ ? this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$) : "oj-pagingcontrol-nav-last" === $subId$$4$$ ? this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$) : 
      "oj-pagingcontrol-nav-page" === $subId$$4$$ ? ($index$$124_locator$$8$$ = $index$$124_locator$$8$$.index, this.$_getPagingControlContainer$().find("[" + this.$_DATA_ATTR_PAGE_NUM$ + "\x3d" + $index$$124_locator$$8$$ + "]")) : null;
    }, _ComponentCreate:function() {
      this._super();
      this.$_registerDataSourceEventListeners$();
      this.$_draw$();
      this.$_registerResizeListener$(this.$_getPagingControlContainer$());
      this._on(this.$_events$);
      var $self$$47$$ = this;
      setInterval(function() {
        null != $self$$47$$.$_refreshTimer$ && ($self$$47$$.$_refreshInternal$(), $self$$47$$.$_refreshTimer$ = null);
      }, 50);
      setInterval(function() {
        if (null != $self$$47$$.$_fetchTimer$) {
          var $data$$62$$ = $self$$47$$.$_getData$();
          null != $data$$62$$ && ($data$$62$$.setPageSize($self$$47$$.options.pageSize), $data$$62$$.fetch({startIndex:$self$$47$$.$_startIndex$}), $self$$47$$.$_fetchTimer$ = null);
        }
      }, 100);
    }, _destroy:function() {
      this.$_unregisterDataSourceEventListeners$();
    }, $_draw$:function() {
      var $options$$235$$ = this.options;
      this.element.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_CLASS$);
      this.element.addClass(this.$_MARKER_STYLE_CLASSES$.$_WIDGET$);
      this.$_startIndex$ = 0;
      this.$_createPagingControlAccLabel$();
      this.$_createPagingControlContent$();
      $options$$235$$.mode == this.$_MODE$.$_LOAD_MORE$ ? (this.$_createPagingControlLoadMore$(), this.$_createPagingControlLoadMoreLink$(), this.$_createPagingControlLoadMoreRange$()) : this.$_createPagingControlNav$();
    }, $_events$:{"click .oj-pagingcontrol-loadmore-link":function($event$$48$$) {
      this.loadNext();
      $event$$48$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-page":function($event$$49$$) {
      var $pageNum$$ = $$$$10$$($event$$49$$.target).attr("data-oj-pagenum");
      this.page($pageNum$$);
      $event$$49$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-first":function($event$$50$$) {
      this.firstPage();
      $event$$50$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-previous":function($event$$51$$) {
      this.previousPage();
      $event$$51$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-next":function($event$$52$$) {
      this.nextPage();
      $event$$52$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-last":function($event$$53$$) {
      this.lastPage();
      $event$$53$$.preventDefault();
    }, "keypress .oj-pagingcontrol-nav-input":function($event$$54$$) {
      13 == $event$$54$$.which && $event$$54$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-first":function($event$$55$$) {
      $$$$10$$($event$$55$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$55$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-previous":function($event$$56$$) {
      $$$$10$$($event$$56$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$56$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-next":function($event$$57$$) {
      $$$$10$$($event$$57$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$57$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-last":function($event$$58$$) {
      $$$$10$$($event$$58$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$58$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-first":function($event$$59$$) {
      $$$$10$$($event$$59$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$59$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-previous":function($event$$60$$) {
      $$$$10$$($event$$60$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$60$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-next":function($event$$61$$) {
      $$$$10$$($event$$61$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$61$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-last":function($event$$62$$) {
      $$$$10$$($event$$62$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$62$$.preventDefault();
    }, "mouseleave .oj-pagingcontrol-nav-first":function($event$$63$$) {
      $$$$10$$($event$$63$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$63$$.preventDefault();
    }, "mouseleave .oj-pagingcontrol-nav-previous":function($event$$64$$) {
      $$$$10$$($event$$64$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$64$$.preventDefault();
    }, "mouseleave .oj-pagingcontrol-nav-next":function($event$$65$$) {
      $$$$10$$($event$$65$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$65$$.preventDefault();
    }, "mouseleave .oj-pagingcontrol-nav-last":function($event$$66$$) {
      $$$$10$$($event$$66$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$66$$.preventDefault();
    }}, $_refresh$:function($immediate$$) {
      $immediate$$ ? this.$_refreshInternal$() : this.$_refreshTimer$ = !0;
    }, $_refreshInternal$:function() {
      this.$_data$ != this.options.data && (this.$_clearCachedDataMetadata$(), this.$_fetchTimer$ = !0);
      if (this.options.mode == this.$_MODE$.$_LOAD_MORE$) {
        var $data$$63$$ = this.$_getData$(), $pagingControlLoadMore$$ = this.$_getPagingControlLoadMore$();
        null != $data$$63$$ && $data$$63$$.size() == $data$$63$$.totalSize() ? $pagingControlLoadMore$$.css("display", "none") : ($pagingControlLoadMore$$.css("display", ""), this.$_refreshPagingControlLoadMoreRange$());
      } else {
        this.$_refreshPagingControlNav$();
      }
    }, _setOption:function($key$$53$$, $value$$162$$) {
      this._superApply(arguments);
      this.$_fetchTimer$ = !0;
      this.$_refresh$(!0);
    }, $_clearCachedDataMetadata$:function() {
      null != this.$_data$ && this.$_unregisterDataSourceEventListeners$();
      this.$_data$ = null;
      this.$_startIndex$ = 0;
    }, $_clearCachedDomLoadMoreRange$:function() {
      this.$_cachedDomPagingControlLoadMoreRange$ = null;
    }, $_clearCachedDomPagingControlNav$:function() {
      this.$_cachedDomPagingControlNavInputSummary$ = this.$_cachedDomPagingControlNavInput$ = this.$_cachedDomPagingControlNav$ = null;
    }, $_getCurrentPage$:function() {
      return 0 == this.$_startIndex$ ? 1 : Math.ceil((this.$_startIndex$ + 1) / this.options.pageSize);
    }, $_getData$:function() {
      if (!this.$_data$ && null != this.options.data) {
        var $data$$64_errSummary$$ = this.options.data;
        if ($data$$64_errSummary$$ instanceof $oj$$10$$.$PagingDataSource$) {
          this.$_data$ = $data$$64_errSummary$$;
        } else {
          var $data$$64_errSummary$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_DATA_INVALID_TYPE_SUMMARY$), $errDetail$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_DATA_INVALID_TYPE_DETAIL$);
          throw Error($data$$64_errSummary$$ + "\n" + $errDetail$$);
        }
        this.$_data$.setPageSize(this.options.pageSize);
        this.$_registerDataSourceEventListeners$();
        var $self$$48$$ = this;
        setTimeout(function() {
          $self$$48$$.$_initFetch$();
        }, 0);
      }
      return this.$_data$;
    }, $_getItemRangeText$:function() {
      var $data$$65$$ = this.$_getData$(), $pageFrom$$ = this.$_startIndex$, $itemRangeText_pageTo$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE$, {pageFrom:$pageFrom$$, pageTo:0, pageTotal:0});
      null != $data$$65$$ && ($itemRangeText_pageTo$$ = parseInt(this.$_startIndex$, 10) + parseInt($data$$65$$.size(), 10), $pageFrom$$ = 0 < $itemRangeText_pageTo$$ ? $pageFrom$$ + 1 : 0, -1 != $data$$65$$.totalSize() ? ($itemRangeText_pageTo$$ = $itemRangeText_pageTo$$ > $data$$65$$.totalSize() ? $data$$65$$.totalSize() : $itemRangeText_pageTo$$, $itemRangeText_pageTo$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE$, {pageFrom:$pageFrom$$, pageTo:$itemRangeText_pageTo$$, pageTotal:$data$$65$$.totalSize()})) : 
      $itemRangeText_pageTo$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_UNKNOWN$, {pageFrom:$pageFrom$$, pageTo:$itemRangeText_pageTo$$}));
      return $itemRangeText_pageTo$$;
    }, $_getMaxPageLinks$:function() {
      return this.options.pageOptions.maxPageLinks;
    }, $_getStartIndexForPage$:function($page$$3$$) {
      var $startIndex$$3$$ = ($page$$3$$ - 1) * this.options.pageSize, $totalPages$$ = this.$_getTotalPages$();
      0 > $startIndex$$3$$ ? $oj$$10$$.$Logger$.error("Value must be greater than 0") : 0 < $totalPages$$ && $page$$3$$ > $totalPages$$ && $oj$$10$$.$Logger$.error("Value cannot be greater than the total number of pages");
      return $startIndex$$3$$;
    }, $_getTotalPages$:function() {
      var $data$$66$$ = this.$_getData$(), $totalSize$$ = 0;
      null != $data$$66$$ && ($totalSize$$ = $data$$66$$.totalSize());
      return-1 == $totalSize$$ ? -1 : Math.ceil($totalSize$$ / this.options.pageSize);
    }, $_handleDataFetchEnd$:function() {
      this.$_refresh$();
    }, $_handleDataReset$:function() {
      this.$_startIndex$ = 0;
      this.$_getData$().setPageSize(this.options.pageSize);
      this.$_refresh$(!0);
      this.$_getData$().fetch({startIndex:this.$_startIndex$, reset:!0});
    }, $_handleDataRefresh$:function() {
      this.$_refresh$();
      this.$_getData$().fetch({startIndex:this.$_startIndex$});
    }, $_handleDataSort$:function($event$$70$$) {
      this.options.mode == this.$_MODE$.$_LOAD_MORE$ ? this.$_handleDataReset$($event$$70$$) : this.$_handleDataRefresh$($event$$70$$);
    }, $_handleDataRowAdd$:function($event$$71_rowIdx$$) {
      if (this.options.mode == this.$_MODE$.$_PAGE$) {
        var $data$$67_pageSize$$2$$ = this.$_getData$(), $totalSize$$1$$ = 0;
        null != $data$$67_pageSize$$2$$ && ($totalSize$$1$$ = $data$$67_pageSize$$2$$.totalSize());
        $data$$67_pageSize$$2$$ = this.options.pageSize;
        $event$$71_rowIdx$$ = $event$$71_rowIdx$$.index;
        var $startIndex$$4$$ = this.$_getStartIndexForPage$(this.$_getCurrentPage$());
        if ($startIndex$$4$$ != this.$_startIndex$ || $event$$71_rowIdx$$ >= $startIndex$$4$$ && $event$$71_rowIdx$$ < $startIndex$$4$$ + $data$$67_pageSize$$2$$ && $totalSize$$1$$ > $data$$67_pageSize$$2$$) {
          this.$_startIndex$ = $startIndex$$4$$, this.$_fetchTimer$ = !0;
        }
      }
      this.$_refresh$();
    }, $_handleDataRowRemove$:function() {
      0 >= this.$_getTotalPages$() ? this.$_startIndex$ = 0 : this.$_getCurrentPage$() > this.$_getTotalPages$() && (this.$_startIndex$ = this.$_getStartIndexForPage$(this.$_getTotalPages$()), this.$_fetchTimer$ = !0);
      1 < this.$_getTotalPages$() && (this.$_fetchTimer$ = !0);
      this.$_refresh$();
    }, $_handlePageChange$:function($event$$73$$, $data$$68$$) {
      try {
        $data$$68$$.value != this.$_getCurrentPage$() && !isNaN($data$$68$$.value) && 0 < $data$$68$$.value && this.page($data$$68$$.value);
      } catch ($err$$4$$) {
        var $errSummary$$1$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_SUMMARY$), $errDetail$$1$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_DETAIL$);
        $oj$$10$$.$Logger$.error($errSummary$$1$$ + "\n" + $errDetail$$1$$);
      }
    }, $_initFetch$:function() {
      null != this.$_getData$() && this.$_getData$().size() < this.options.pageSize && (0 > this.$_getData$().totalSize() || this.$_getData$().totalSize() >= this.$_getData$().size()) && (this.$_getData$().setPageSize(this.options.pageSize), this.$_getData$().fetch({startIndex:this.$_startIndex$, fetchType:"init"}));
    }, $_refreshPagingControlLoadMoreRange$:function() {
      var $pagingControlLoadMoreRange$$ = this.$_getPagingControlLoadMoreRange$();
      $pagingControlLoadMoreRange$$[0].parentNode.removeChild($pagingControlLoadMoreRange$$[0]);
      this.$_createPagingControlLoadMoreRange$();
      this.$_clearCachedDomLoadMoreRange$();
    }, $_refreshPagingControlNav$:function() {
      var $elementWidth_overflowOption$$ = this.options.overflow;
      this.$_getPagingControlContent$().empty();
      this.$_clearCachedDomPagingControlNav$();
      this.$_createPagingControlNav$();
      this.$_refreshPagingControlNavArrows$();
      if ("fit" == $elementWidth_overflowOption$$) {
        var $elementWidth_overflowOption$$ = this.element.width(), $pagingControlNavArrowSection$$ = this.$_getPagingControlNavArrowSection$(), $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ = this.$_getPagingControlNavInputSection$(), $pagingControlNavPageLinks$$ = this.$_getPagingControlNavPageLinks$(), $pagingControlNavInputSummary$$ = this.$_getPagingControlNavInputSummary$(), $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ = null != $pagingControlNavArrowSection$$ ? 
        $pagingControlNavArrowSection$$[0].offsetWidth : 0, $pagingControlNavInputSectionWidth$$ = null != $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ ? $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$[0].offsetWidth : 0, $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ = null != $pagingControlNavPageLinks$$ ? $pagingControlNavPageLinks$$.width() : 0, $pagingControlNavInputSummaryWidth$$ = null != $pagingControlNavInputSummary$$ ? $pagingControlNavInputSummary$$.width() : 
        0, $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ = $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ + $pagingControlNavInputSectionWidth$$;
        $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ > $elementWidth_overflowOption$$ ? $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ - $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ <= $elementWidth_overflowOption$$ ? $pagingControlNavPageLinks$$.css("display", "none") : $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ - $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ - $pagingControlNavInputSummaryWidth$$ <= $elementWidth_overflowOption$$ ? 
        (null != $pagingControlNavPageLinks$$ && $pagingControlNavPageLinks$$.css("display", "none"), null != $pagingControlNavInputSummary$$ && $pagingControlNavInputSummary$$.css("display", "none")) : (null != $pagingControlNavPageLinks$$ && $pagingControlNavPageLinks$$.css("display", "none"), null != $pagingControlNavInputSummary$$ && $pagingControlNavInputSummary$$.css("display", "none"), null != $pagingControlNavArrowSection$$ && $pagingControlNavArrowSection$$.css("display", "none")) : 0 < 
        $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ && (null != $pagingControlNavPageLinks$$ && $pagingControlNavPageLinks$$.css("display", ""), null != $pagingControlNavInputSummary$$ && $pagingControlNavInputSummary$$.css("display", ""), null != $pagingControlNavArrowSection$$ && $pagingControlNavArrowSection$$.css("display", ""));
      }
    }, $_refreshPagingControlNavArrows$:function() {
      var $pagingControlNavArrowSection$$1_pagingControlNavNext$$ = this.$_getPagingControlNavArrowSection$(), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$);
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ && 0 < $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$10$$($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), 1 == this.$_getCurrentPage$() ? ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), 
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", "-1")) : ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", "0")));
      ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$)) && 0 < $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$10$$($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), 1 == this.$_getCurrentPage$() ? ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", "-1")) : ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", 
      "0")));
      ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$)) && 0 < $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$10$$($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), this.$_getCurrentPage$() == this.$_getTotalPages$() || 
      0 === this.$_getTotalPages$() ? ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", "-1")) : ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), 
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", "0")));
      ($pagingControlNavArrowSection$$1_pagingControlNavNext$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$)) && 0 < $pagingControlNavArrowSection$$1_pagingControlNavNext$$.length && ($pagingControlNavArrowSection$$1_pagingControlNavNext$$ = $$$$10$$($pagingControlNavArrowSection$$1_pagingControlNavNext$$[0]), this.$_getCurrentPage$() == this.$_getTotalPages$() || 0 === this.$_getTotalPages$() ? ($pagingControlNavArrowSection$$1_pagingControlNavNext$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $pagingControlNavArrowSection$$1_pagingControlNavNext$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavArrowSection$$1_pagingControlNavNext$$.attr("tabindex", "-1")) : ($pagingControlNavArrowSection$$1_pagingControlNavNext$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavArrowSection$$1_pagingControlNavNext$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavArrowSection$$1_pagingControlNavNext$$.attr("tabindex", "0")));
    }, $_registerDataSourceEventListeners$:function() {
      var $data$$69$$ = this.$_getData$();
      if (null != $data$$69$$) {
        this.$_unregisterDataSourceEventListeners$();
        this.$_dataSourceEventHandlers$ = [];
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingDataSource$.$EventType$.ADD, eventHandler:this.$_handleDataRowAdd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingDataSource$.$EventType$.REMOVE, eventHandler:this.$_handleDataRowRemove$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingDataSource$.$EventType$.REFRESH, eventHandler:this.$_handleDataRefresh$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataFetchEnd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataSort$.bind(this)});
        var $i$$156$$, $ev$$;
        for ($i$$156$$ = 0;$i$$156$$ < this.$_dataSourceEventHandlers$.length;$i$$156$$++) {
          ($ev$$ = $data$$69$$.on(this.$_dataSourceEventHandlers$[$i$$156$$].eventType, this.$_dataSourceEventHandlers$[$i$$156$$].eventHandler)) && (this.$_dataSourceEventHandlers$[$i$$156$$].eventHandler = $ev$$);
        }
      }
    }, $_registerResizeListener$:function($element$$40$$) {
      if (!this.$_isResizeListenerAdded$) {
        var $self$$49$$ = this;
        $oj$$10$$.$DomUtils$.$addResizeListener$($element$$40$$[0], function() {
          $self$$49$$.$_refresh$();
        });
        this.$_isResizeListenerAdded$ = !0;
      }
    }, $_unregisterDataSourceEventListeners$:function() {
      var $data$$70$$ = this.$_getData$();
      if (null != this.$_dataSourceEventHandlers$ && null != $data$$70$$) {
        var $i$$157$$;
        for ($i$$157$$ = 0;$i$$157$$ < this.$_dataSourceEventHandlers$.length;$i$$157$$++) {
          $data$$70$$.off(this.$_dataSourceEventHandlers$[$i$$157$$].eventType, this.$_dataSourceEventHandlers$[$i$$157$$].eventHandler);
        }
      }
    }, $_createAccLabelSpan$:function($text$$8$$, $className$$7$$) {
      var $accLabel$$ = $$$$10$$(document.createElement("span"));
      $accLabel$$.addClass($className$$7$$);
      $accLabel$$.addClass(this.$_CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
      $accLabel$$.append($text$$8$$);
      return $accLabel$$;
    }, $_createPagingControlAccLabel$:function() {
      var $pagingControlContainer$$ = this.$_getPagingControlContainer$(), $pagingControlAccLabel_pagingControlAccLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_PAGING$), $pagingControlAccLabel_pagingControlAccLabelText$$ = this.$_createAccLabelSpan$($pagingControlAccLabel_pagingControlAccLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_ACC_LABEL_CLASS$), $pagingControlAccLabelId$$ = this.element.attr("id") + "_oj_pgCtrl_acc_label";
      $pagingControlAccLabel_pagingControlAccLabelText$$.attr("id", $pagingControlAccLabelId$$);
      $pagingControlContainer$$.append($pagingControlAccLabel_pagingControlAccLabelText$$);
      return $pagingControlAccLabel_pagingControlAccLabelText$$;
    }, $_createPagingControlAccNavPageLabel$:function() {
      var $pagingControlAccNavPageLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavPageLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavFirstLabel$:function() {
      var $pagingControlAccNavFirstLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_FIRST_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavFirstLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavLastLabel$:function() {
      var $pagingControlAccNavLastLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_LAST_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavLastLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavNextLabel$:function() {
      var $pagingControlAccNavNextLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_NEXT_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavNextLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavPreviousLabel$:function() {
      var $pagingControlAccNavPreviousLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_PREVIOUS_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavPreviousLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS$);
    }, $_createPagingControlContent$:function() {
      var $pagingControlContainer$$1$$ = this.$_getPagingControlContainer$(), $pagingControlContent$$1$$ = $$$$10$$(document.createElement("div"));
      $pagingControlContent$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_CONTENT_CLASS$);
      var $pagingControlAccLabelId$$1$$ = this.$_getPagingControlAccLabel$().attr("id");
      $pagingControlContent$$1$$.attr("role", "navigation");
      $pagingControlContent$$1$$.attr("aria-labelledby", $pagingControlAccLabelId$$1$$);
      $pagingControlContainer$$1$$.append($pagingControlContent$$1$$);
      return $pagingControlContent$$1$$;
    }, $_createPagingControlLoadMore$:function() {
      var $pagingControlContent$$2$$ = this.$_getPagingControlContent$(), $pagingControlLoadMore$$1$$ = $$$$10$$(document.createElement("div"));
      $pagingControlLoadMore$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_CLASS$);
      $pagingControlContent$$2$$.append($pagingControlLoadMore$$1$$);
      return $pagingControlLoadMore$$1$$;
    }, $_createPagingControlLoadMoreLink$:function() {
      var $pagingControlLoadMore$$2$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreLink$$ = $$$$10$$(document.createElement("a"));
      $pagingControlLoadMoreLink$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$);
      var $loadMoreText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_LOAD_MORE$);
      $pagingControlLoadMoreLink$$.append($loadMoreText$$);
      $pagingControlLoadMoreLink$$.attr("tabindex", "0");
      $pagingControlLoadMoreLink$$.attr("href", "#");
      $pagingControlLoadMore$$2$$.append($pagingControlLoadMoreLink$$);
      return $pagingControlLoadMoreLink$$;
    }, $_createPagingControlLoadMoreRange$:function() {
      this.$_getData$();
      var $pagingControlLoadMore$$3$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreRange$$1$$ = $$$$10$$(document.createElement("span"));
      $pagingControlLoadMoreRange$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$);
      var $loadMoreRangeText$$ = this.$_getItemRangeText$();
      $pagingControlLoadMoreRange$$1$$.append($loadMoreRangeText$$);
      $pagingControlLoadMore$$3$$.append($pagingControlLoadMoreRange$$1$$);
      return $pagingControlLoadMoreRange$$1$$;
    }, $_createPagingControlNav$:function() {
      var $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = this.options.pageOptions.layout;
      null == $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$ && ($pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = [this.$_PAGE_OPTION_LAYOUT$.$_AUTO$]);
      var $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$ = this.$_getPagingControlContent$(), $pagingControlNav$$ = $$$$10$$(document.createElement("div"));
      $pagingControlNav$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_CLASS$);
      $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($pagingControlNav$$);
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_INPUT$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$ = $$$$10$$(document.createElement("div"));
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$);
        $pagingControlNav$$.append($pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$);
        var $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = $$$$10$$(document.createElement("label"));
        $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LABEL_CLASS$);
        var $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE$);
        $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$.append($navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$);
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$);
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$10$$(document.createElement("input"));
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$);
        var $navInputPageTip_pagingControlNavMaxLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_INPUT_PAGE$);
        this._focusable(this.element);
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("title", $navInputPageTip_pagingControlNavMaxLabel$$);
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("tabindex", "0");
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.val(this.$_getCurrentPage$());
        $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$.append($navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$);
        $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = 0;
        if (0 < this.$_getTotalPages$()) {
          $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = this.$_getTotalPages$();
          $navInputPageTip_pagingControlNavMaxLabel$$ = $$$$10$$(document.createElement("span"));
          $navInputPageTip_pagingControlNavMaxLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$);
          var $navInputPageMaxLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE_MAX$, {pageMax:$itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$});
          $navInputPageTip_pagingControlNavMaxLabel$$.append($navInputPageMaxLabel$$);
          $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navInputPageTip_pagingControlNavMaxLabel$$);
        } else {
          $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = this.$_getCurrentPage$() + 1;
        }
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.ojInputText({rootAttributes:{style:"width: auto; min-width: 0;"}, optionChange:this.$_handlePageChange$.bind(this), validators:[{type:"numberRange", options:{min:1, max:$itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$}}]});
        if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_RANGE_TEXT$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
          $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$10$$(document.createElement("span")), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$), 
          $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = this.$_getItemRangeText$(), $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE_SUMMARY$, {pageSummary:$itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$}), 
          $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$), $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$)
          ;
        }
      }
      $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$ = $$$$10$$(document.createElement("div"));
      $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$);
      $pagingControlNav$$.append($pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$);
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_NAV$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$10$$(document.createElement("a")), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), 
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_ICON_CLASS$), 
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), 
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_FIRST_PAGE$), 
        this._hoverable($navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), this._focusable($navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("title", $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("tabindex", 
        "0"), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("href", "#"), $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = this.$_createPagingControlAccNavFirstLabel$(), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$), 
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = 
        $$$$10$$(document.createElement("a")), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$), 
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS$), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), 
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
        $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_PREVIOUS_PAGE$), this._hoverable($navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        this._focusable($navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("title", 
        $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("tabindex", "0"), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("href", 
        "#"), $itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$ = this.$_createPagingControlAccNavPreviousLabel$(), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_maxPageVal_navFirstPageTip_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavLabel_pagingControlNavPreviousAccLabel$$), 
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$);
      }
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_PAGES$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$10$$(document.createElement("div")), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_SECTION_CLASS$), 
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), this.$_createPagingControlNavPages$($navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$, 
        this.$_getMaxPageLinks$());
      }
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_NAV$, $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
        $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = $$$$10$$(document.createElement("a")), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_ICON_CLASS$), 
        $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = 
        this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_NEXT_PAGE$), this._hoverable($pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$), this._focusable($pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("title", $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("tabindex", "0"), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("href", "#"), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = this.$_createPagingControlAccNavNextLabel$(), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.append($navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = $$$$10$$(document.createElement("a")), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$), 
        $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_ICON_CLASS$), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_LAST_PAGE$), this._hoverable($pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$), this._focusable($pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("title", 
        $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("tabindex", "0"), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("href", "#"), $navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = 
        this.$_createPagingControlAccNavLastLabel$(), $pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$.append($navInputPageLabel_navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavInput_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($pageOptionLayout_pagingControlNavLast$$1_pagingControlNavNext$$1$$)
        ;
      }
      return $pagingControlNav$$;
    }, $_createPagingControlNavPages$:function($parentDiv$$, $numLinks$$) {
      if (5 > $numLinks$$) {
        var $errSummary$$2_pagingControlNavPagesLinks$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_MAXPAGELINKS_INVALID_SUMMARY$), $errDetail$$2_totalPages$$1$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_MAXPAGELINKS_INVALID_DETAIL$);
        throw Error($errSummary$$2_pagingControlNavPagesLinks$$ + "\n" + $errDetail$$2_totalPages$$1$$);
      }
      $errSummary$$2_pagingControlNavPagesLinks$$ = $$$$10$$(document.createElement("div"));
      $errSummary$$2_pagingControlNavPagesLinks$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$);
      $parentDiv$$.append($errSummary$$2_pagingControlNavPagesLinks$$);
      var $errDetail$$2_totalPages$$1$$ = this.$_getTotalPages$(), $currentPage$$1_pageAfterCurrent_pageNum$$1$$ = this.$_getCurrentPage$(), $i$$158_numPagesToAdd$$ = $numLinks$$, $pageList$$ = [];
      if (1 <= $currentPage$$1_pageAfterCurrent_pageNum$$1$$) {
        if (-1 != $errDetail$$2_totalPages$$1$$ && $errDetail$$2_totalPages$$1$$ <= $i$$158_numPagesToAdd$$) {
          for ($i$$158_numPagesToAdd$$ = $pageList$$[0] = 1;$i$$158_numPagesToAdd$$ < $errDetail$$2_totalPages$$1$$;$i$$158_numPagesToAdd$$++) {
            $pageList$$[$i$$158_numPagesToAdd$$] = $i$$158_numPagesToAdd$$ + 1;
          }
        } else {
          $pageList$$.push(1);
          1 != $currentPage$$1_pageAfterCurrent_pageNum$$1$$ && $pageList$$.push($currentPage$$1_pageAfterCurrent_pageNum$$1$$);
          $currentPage$$1_pageAfterCurrent_pageNum$$1$$ != $errDetail$$2_totalPages$$1$$ && -1 != $errDetail$$2_totalPages$$1$$ && $pageList$$.push($errDetail$$2_totalPages$$1$$);
          var $i$$158_numPagesToAdd$$ = $i$$158_numPagesToAdd$$ - $pageList$$.length, $pageBeforeCurrent$$ = $currentPage$$1_pageAfterCurrent_pageNum$$1$$ - 1, $numPagesAfterCurrent$$ = 1;
          if ($currentPage$$1_pageAfterCurrent_pageNum$$1$$ == $errDetail$$2_totalPages$$1$$ || $currentPage$$1_pageAfterCurrent_pageNum$$1$$ == $errDetail$$2_totalPages$$1$$ - 1) {
            $numPagesAfterCurrent$$ = 0;
          }
          for (;$i$$158_numPagesToAdd$$ > $numPagesAfterCurrent$$ && 1 < $pageBeforeCurrent$$;) {
            $pageList$$.push($pageBeforeCurrent$$), $pageBeforeCurrent$$--, $i$$158_numPagesToAdd$$--;
          }
          $currentPage$$1_pageAfterCurrent_pageNum$$1$$ += 1;
          for (-1 == $errDetail$$2_totalPages$$1$$ && ($i$$158_numPagesToAdd$$ = 1);0 < $i$$158_numPagesToAdd$$ && ($currentPage$$1_pageAfterCurrent_pageNum$$1$$ <= $errDetail$$2_totalPages$$1$$ || -1 == $errDetail$$2_totalPages$$1$$);) {
            $pageList$$.push($currentPage$$1_pageAfterCurrent_pageNum$$1$$), $currentPage$$1_pageAfterCurrent_pageNum$$1$$++, $i$$158_numPagesToAdd$$--;
          }
        }
        $pageList$$.sort(function($a$$71$$, $b$$44$$) {
          return $a$$71$$ - $b$$44$$;
        });
        for ($i$$158_numPagesToAdd$$ = 0;$i$$158_numPagesToAdd$$ < $pageList$$.length;$i$$158_numPagesToAdd$$++) {
          $currentPage$$1_pageAfterCurrent_pageNum$$1$$ = $pageList$$[$i$$158_numPagesToAdd$$], this.$_createPagingControlNavPage$($errSummary$$2_pagingControlNavPagesLinks$$, $currentPage$$1_pageAfterCurrent_pageNum$$1$$), $i$$158_numPagesToAdd$$ != $pageList$$.length - 1 && $currentPage$$1_pageAfterCurrent_pageNum$$1$$ != $pageList$$[$i$$158_numPagesToAdd$$ + 1] - 1 && this.$_createPagingControlNavPage$($errSummary$$2_pagingControlNavPagesLinks$$, -1);
        }
        -1 == $errDetail$$2_totalPages$$1$$ && this.$_createPagingControlNavPage$($errSummary$$2_pagingControlNavPagesLinks$$, -1);
      }
      return $errSummary$$2_pagingControlNavPagesLinks$$;
    }, $_createPagingControlNavPage$:function($parentDiv$$1$$, $pageNum$$2$$) {
      var $accPageLabel_currentPage$$2_pageTitle$$ = this.$_getCurrentPage$(), $pagingControlNavPage$$ = null;
      -1 == $pageNum$$2$$ ? ($pagingControlNavPage$$ = $$$$10$$(document.createElement("span")), $pagingControlNavPage$$.append("...")) : ($accPageLabel_currentPage$$2_pageTitle$$ == $pageNum$$2$$ ? ($pagingControlNavPage$$ = $$$$10$$(document.createElement("div")), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$)) : 
      ($pagingControlNavPage$$ = $$$$10$$(document.createElement("a")), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$)), $pagingControlNavPage$$.attr("data-oj-pagenum", $pageNum$$2$$), $pagingControlNavPage$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_CLASS$), 
      $accPageLabel_currentPage$$2_pageTitle$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_PAGE_LINK$, {pageNum:$pageNum$$2$$.toString()}), this._hoverable($pagingControlNavPage$$), this._focusable($pagingControlNavPage$$), $pagingControlNavPage$$.attr("title", $accPageLabel_currentPage$$2_pageTitle$$), $pagingControlNavPage$$.attr("tabindex", "0"), $pagingControlNavPage$$.attr("href", "#"), $accPageLabel_currentPage$$2_pageTitle$$ = this.$_createPagingControlAccNavPageLabel$(), $pagingControlNavPage$$.append($accPageLabel_currentPage$$2_pageTitle$$), 
      $pagingControlNavPage$$.append($pageNum$$2$$.toString()), this._hoverable($pagingControlNavPage$$));
      $parentDiv$$1$$.append($pagingControlNavPage$$);
      return $pagingControlNavPage$$;
    }, $_getPagingControlAccLabel$:function() {
      var $pagingControlContainer$$2$$ = this.$_getPagingControlContainer$(), $pagingControlContentAccLabel$$ = null;
      $pagingControlContainer$$2$$ && ($pagingControlContentAccLabel$$ = $pagingControlContainer$$2$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_ACC_LABEL_CLASS$)) && 0 < $pagingControlContentAccLabel$$.length && ($pagingControlContentAccLabel$$ = $$$$10$$($pagingControlContentAccLabel$$.get(0)));
      return $pagingControlContentAccLabel$$;
    }, $_getPagingControlContainer$:function() {
      return $$$$10$$(this.element);
    }, $_getPagingControlContent$:function() {
      if (!this.$_cachedDomPagingControlContent$) {
        var $pagingControlContainer$$3$$ = this.$_getPagingControlContainer$(), $pagingControlContent$$4$$ = null;
        $pagingControlContainer$$3$$ && ($pagingControlContent$$4$$ = $pagingControlContainer$$3$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_CONTENT_CLASS$)) && 0 < $pagingControlContent$$4$$.length && (this.$_cachedDomPagingControlContent$ = $$$$10$$($pagingControlContent$$4$$.get(0)));
      }
      return this.$_cachedDomPagingControlContent$;
    }, $_getPagingControlLoadMore$:function() {
      if (!this.$_cachedDomPagingControlLoadMore$) {
        var $pagingControlContent$$5$$ = this.$_getPagingControlContent$(), $pagingControlLoadMore$$4$$ = null;
        $pagingControlContent$$5$$ && ($pagingControlLoadMore$$4$$ = $pagingControlContent$$5$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_CLASS$)) && 0 < $pagingControlLoadMore$$4$$.length && (this.$_cachedDomPagingControlLoadMore$ = $$$$10$$($pagingControlLoadMore$$4$$.get(0)));
      }
      return this.$_cachedDomPagingControlLoadMore$;
    }, $_getPagingControlLoadMoreLink$:function() {
      if (!this.$_cachedDomPagingControlLoadMoreLink$) {
        var $pagingControlLoadMore$$5$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreLink$$1$$ = null;
        $pagingControlLoadMore$$5$$ && ($pagingControlLoadMoreLink$$1$$ = $pagingControlLoadMore$$5$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$)) && 0 < $pagingControlLoadMoreLink$$1$$.length && (this.$_cachedDomPagingControlLoadMoreLink$ = $$$$10$$($pagingControlLoadMoreLink$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlLoadMoreLink$;
    }, $_getPagingControlLoadMoreRange$:function() {
      if (!this.$_cachedDomPagingControlLoadMoreRange$) {
        var $pagingControlLoadMore$$6$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreRange$$2$$ = null;
        $pagingControlLoadMore$$6$$ && ($pagingControlLoadMoreRange$$2$$ = $pagingControlLoadMore$$6$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$)) && 0 < $pagingControlLoadMoreRange$$2$$.length && (this.$_cachedDomPagingControlLoadMoreRange$ = $$$$10$$($pagingControlLoadMoreRange$$2$$.get(0)));
      }
      return this.$_cachedDomPagingControlLoadMoreRange$;
    }, $_getPagingControlNav$:function() {
      if (!this.$_cachedDomPagingControlNav$) {
        var $pagingControlContent$$6$$ = this.$_getPagingControlContent$(), $pagingControlNav$$1$$ = null;
        $pagingControlContent$$6$$ && ($pagingControlNav$$1$$ = $pagingControlContent$$6$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_CLASS$)) && 0 < $pagingControlNav$$1$$.length && (this.$_cachedDomPagingControlNav$ = $$$$10$$($pagingControlNav$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlNav$;
    }, $_getPagingControlNavInput$:function() {
      if (!this.$_cachedDomPagingControlNavInput$) {
        var $pagingControlNav$$2$$ = this.$_getPagingControlNav$(), $pagingControlNavInput$$1$$ = null;
        $pagingControlNav$$2$$ && ($pagingControlNavInput$$1$$ = $pagingControlNav$$2$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$)) && 0 < $pagingControlNavInput$$1$$.length && (this.$_cachedDomPagingControlNavInput$ = $$$$10$$($pagingControlNavInput$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlNavInput$;
    }, $_getPagingControlNavInputSummary$:function() {
      if (!this.$_cachedDomPagingControlNavInputSummary$) {
        var $pagingControlNav$$3$$ = this.$_getPagingControlNav$(), $pagingControlNavInputSummary$$1$$ = null;
        $pagingControlNav$$3$$ && ($pagingControlNavInputSummary$$1$$ = $pagingControlNav$$3$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$)) && 0 < $pagingControlNavInputSummary$$1$$.length && (this.$_cachedDomPagingControlNavInputSummary$ = $$$$10$$($pagingControlNavInputSummary$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlNavInputSummary$;
    }, $_getPagingControlNavPageLinks$:function() {
      var $pagingControlNav$$4$$ = this.$_getPagingControlNav$(), $pagingControlNavPageLinks$$1$$ = null;
      $pagingControlNav$$4$$ && ($pagingControlNavPageLinks$$1$$ = $pagingControlNav$$4$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$)) && 0 < $pagingControlNavPageLinks$$1$$.length && ($pagingControlNavPageLinks$$1$$ = $$$$10$$($pagingControlNavPageLinks$$1$$.get(0)));
      return $pagingControlNavPageLinks$$1$$;
    }, $_getPagingControlNavArrowSection$:function() {
      var $pagingControlNav$$5$$ = this.$_getPagingControlNav$(), $pagingControlNavArrowSection$$3$$ = null;
      if ($pagingControlNav$$5$$) {
        if (($pagingControlNavArrowSection$$3$$ = $pagingControlNav$$5$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$)) && 0 < $pagingControlNavArrowSection$$3$$.length) {
          $pagingControlNavArrowSection$$3$$ = $$$$10$$($pagingControlNavArrowSection$$3$$.get(0));
        } else {
          return null;
        }
      }
      return $pagingControlNavArrowSection$$3$$;
    }, $_getPagingControlNavInputSection$:function() {
      var $pagingControlNav$$6$$ = this.$_getPagingControlNav$(), $pagingControlNavInputSection$$2$$ = null;
      if ($pagingControlNav$$6$$) {
        if (($pagingControlNavInputSection$$2$$ = $pagingControlNav$$6$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$)) && 0 < $pagingControlNavInputSection$$2$$.length) {
          $pagingControlNavInputSection$$2$$ = $$$$10$$($pagingControlNavInputSection$$2$$.get(0));
        } else {
          return null;
        }
      }
      return $pagingControlNavInputSection$$2$$;
    }});
  })();
});
