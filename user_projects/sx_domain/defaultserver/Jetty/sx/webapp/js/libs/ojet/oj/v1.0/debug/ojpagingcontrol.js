define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdatacollection-common', 'ojs/ojinputtext'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        * @param {Object} compCore
        */
       function(oj, $, compCore)
{

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*jslint browser: true,devel:true*/
/**
 * The base class for PagingDataSource.
 * @export
 * @class oj.PagingDataSource
 * @classdesc Decorator for DataSource to enable paging functionality to be used by the paging control.
 * @param {Object} dataSource
 * @param {Object|null} options Array of options for the PagingControlDataSource
 * @constructor
 */
oj.PagingDataSource = function(dataSource, options)
{
  this.dataSource = dataSource;
  this.Init();
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.PagingDataSource, oj.DataSource, "oj.PagingDataSource");

/**
 * Initializes the instance.
 * @export
 */
oj.PagingDataSource.prototype.Init = function()
{
  oj.PagingDataSource.superclass.Init.call(this);
};

/**
 * Calls fetch on the datasource with paging options.
 * @param {Object=} options Options to control fetch<p>
 *                  startIndex: The index at which to start fetching records.<p>
 *                  pageSize: The number of records to be fetched.<p>
 *                  success: a user callback called when the fetch has completed successfully. The callback is called passing the PagingDataSource object and the fetch options argument.<p>
 *                  error: a user callback function called if the fetch fails. The callback is called passing the PagingDataSource object and the fetch options argument.<p>
 * @return {Promise} promise object triggering done when complete.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingDataSource
 * @instance
 */
oj.PagingDataSource.prototype.fetch = function(options)
{
  oj.Assert.failedInAbstractFunction();
  return oj.Object.__getPromise(function(resolve, reject) {
          reject();
        });
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @expose
 * @memberof! oj.PagingDataSource
 * @instance
 */
oj.PagingDataSource.prototype.hasMore = function()
{
  oj.Assert.failedInAbstractFunction();
  return false;
};

/**
 * Calls fetch for the next page of data. No-op if no more data.
 * @return {Promise} promise object triggering done when complete.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingDataSource
 * @instance
 */
oj.PagingDataSource.prototype.next = function()
{
  oj.Assert.failedInAbstractFunction();
  return oj.Object.__getPromise(function(resolve, reject) {
          reject();
        });
};

/**
 * Calls fetch for the previous page of data. No-op if at the beginning.
 * @return {Promise} promise object triggering done when complete..
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingDataSource
 * @instance
 */
oj.PagingDataSource.prototype.previous = function()
{
  oj.Assert.failedInAbstractFunction();
  return oj.Object.__getPromise(function(resolve, reject) {
          reject();
        });
};

/**
 * Set or change the number of models in a page
 * 
 * @param {number} n page size
 */
oj.PagingDataSource.prototype.setPageSize = function(n)
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * @export
 * Return current start index. -1 if initial fetch has not been done yet.
 * @returns {number} start index
 * @expose
 * @memberof! oj.PagingDataSource
 * @instance
 */
oj.PagingDataSource.prototype.startIndex = function()
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};

/**
 * @export
 * Return the size of the data locally in the dataSource. -1 if an initial fetch has not been
 * done yet.
 * @returns {number} size of data
 * @expose
 * @memberof! oj.PagingDataSource
 * @instance
 */
oj.PagingDataSource.prototype.size = function()
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};

/**
 * @export
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @expose
 * @memberof! oj.PagingDataSource
 * @instance
 */
oj.PagingDataSource.prototype.totalSize = function()
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};

/**
 * @export
 * Event types
 * @enum {string}
 */
oj.PagingDataSource.EventType =
  {
    /** Triggered when a Row is added to a PagingDataSource */
    'ADD': "add",
    /** Triggered when a Row is removed from a PagingDataSource */
    'REMOVE': "remove",
    /** Triggered when a PagingDataSource is reset */
    'RESET': "reset",
    /** Triggered when a PagingDataSource has been updated by a fetch */
    'SYNC': "sync",
    /** Triggered when a PagingDataSource has been refreshed */
    'REFRESH': "refresh",
    /** Triggered when a PagingDataSource has been sorted */
    'SORT': "sort"
  };

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/**
 * The ojPagingControl component provides paging functionality.
 * 
 * <h3>Events:</h3>
 * <ul>
 * </ul>
 * 
 * @example  <caption>Initialize the paging control via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div id="paging" data-bind="ojComponent: {component: 'ojPagingControl', data: pagingDatasource, pageSize: 10}"&gt;
 *     
 * 
 * @class
 * @constructor
 * @name oj.ojPagingControl
 * @augments oj.baseComponent
 */
(function() {
  oj.__registerWidget("oj.ojPagingControl", $['oj']['baseComponent'],
    {
      version: '1.0.0',
      defaultElement: '<div>',
      widgetEventPrefix: 'oj',
      options:
        {
          /** 
           * The data to bind to the component.
           * <p>
           * Must be of type oj.PagingDataSource {@link oj.PagingDataSource} 
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {oj.PagingDataSource}
           * @default <code class="prettyprint">null</code>
           */
          data: null,
          /** 
           * Options for when the component width is too narrow to accomodate specified controls
           * <p>
           * Valid values are:
           * <ul>
           *   <li>fit: Display as many controls as can fit in the component width</li>
           *   <li>none: Display all specified controls. Controls which cannot fit will be truncated.</li>
           * </ul>
           * <p>
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {string}
           * @default <code class="prettyprint">fit</code>
           */
          overflow: 'fit',
          /** 
           * Page size.
           * <p>
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {number}
           * @default <code class="prettyprint">25</code>
           */
          pageSize: 25,
          /** 
           * Options for page mode. 
           * <p>
           * Supported options are:
           * <ul>
           *   <li>layout: Array of paging navigation controls to be displayed.
           *   <ul>Valid array values are:
           *     <li>auto: Component decides which controls to display</li>
           *     <li>all: Display all controls</li>
           *     <li>input: Display the page input control</li>
           *     <li>rangeText: Display the page range text control</li>
           *     <li>pages: Display the page links</li>
           *     <li>nav: Display the navigation arrows</li>
           *   </ul>
           *   </li>
           *   <li>maxPageLinks: The maximum number of page links to display. 
           *   An ellipsis '...' will be displayed for pages which exceed the maximum.
           *   maxPageLinks must be greater than 4.</li>
           * </ul>
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {Object.<string, Array|number>}
           * @property {Array} layout Array of paging navigation controls to be displayed
           * @property {number} maxPageLinks The maximum number of page links to display
           * @default <code class="prettyprint">{layout: ['auto'], maxPageLinks: 6}</code>
           * @example <caption>Initialize the paging control with the <code class="prettyprint">pageOptions</code> option specified:</caption>
           * &lt;div id="paging" data-bind="ojComponent: {component: 'ojPagingControl', data: pagingDatasource, pageSize: 10, pageOptions: {layout: ['auto', 'input', 'rangeText'], maxPageLinks: 8}}"&gt;
           */
          pageOptions: {'layout': ['auto'], 'maxPageLinks': 6},
          /** 
           * Options for loadMore mode. 
           * <p>
           * Supported options are:
           * <ul>
           *   <li>maxCount: Integer</li>
           * </ul> 
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {Object.<string, number>}
           * @property {number} maxCount The maximum number items to display
           * @default <code class="prettyprint">{maxCount: 500}</code>
           */
          loadMoreOptions: {'maxCount': 500},
          /** 
           * Paging mode. 
           * <p>
           * Valid values are:
           * <ul>
           *   <li>page: Display paging control in pagination mode</li>
           *   <li>loadMore: Display paging control in high watermark mode</li>
           * </ul>
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {string}
           * @default <code class="prettyprint">page</code>
           */
          mode: 'page',
          /** 
           * Translations for the component
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojPagingControl
           * @type {Object.<string, string>}
           * @property {string} labelAccPaging Paging control label for screen readers
           * @property {string} labelAccNavFirstPage First page label for screen readers
           * @property {string} labelAccNavLastPage Last page label for screen readers
           * @property {string} labelAccNavNextPage Next page label for screen readers
           * @property {string} labelAccNavPreviousPage Previous page label for screen readers
           * @property {string} labelAccNavPage Current page label for screen readers
           * @property {string} labelLoadMore Load more link text
           * @property {string} labelNavInputPage Current page label
           * @property {string} labelNavInputPageMax Maximum page label
           * @property {string} labelNavInputPageSummary Page item summary
           * @property {string} msgItemRange Item range text for known row count
           * @property {string} msgItemRangeUnknown Item range text for unknown row count
           * @property {string} tipNavInputPage Current page tip
           * @property {string} tipNavPageLink Current page link tip 
           * @property {string} tipNavNextPage Next page button tip
           * @property {string} tipNavPreviousPage Previous page button tip
           * @property {string} tipNavFirstPage First page button tip
           * @property {string} tipNavLastPage Last page button tip
           */
          translations: {}
        },
      /**
       * @private
       * @const
       */
      _BUNDLE_KEY:
        {
          _LABEL_ACC_PAGING:                              'labelAccPaging',
          _LABEL_ACC_NAV_FIRST_PAGE:                      'labelAccNavFirstPage',
          _LABEL_ACC_NAV_LAST_PAGE:                       'labelAccNavLastPage',
          _LABEL_ACC_NAV_NEXT_PAGE:                       'labelAccNavNextPage',
          _LABEL_ACC_NAV_PREVIOUS_PAGE:                   'labelAccNavPreviousPage',
          _LABEL_ACC_NAV_PAGE:                            'labelAccNavPage',
          _LABEL_LOAD_MORE:                               'labelLoadMore',
          _LABEL_NAV_INPUT_PAGE:                          'labelNavInputPage',
          _LABEL_NAV_INPUT_PAGE_MAX:                      'labelNavInputPageMax',
          _LABEL_NAV_INPUT_PAGE_SUMMARY:                  'labelNavInputPageSummary',
          _MSG_ITEM_RANGE:                                'msgItemRange',
          _MSG_ITEM_RANGE_UNKNOWN:                        'msgItemRangeUnknown',
          _TIP_NAV_INPUT_PAGE:                            'tipNavInputPage',
          _TIP_NAV_PAGE_LINK:                             'tipNavPageLink',
          _TIP_NAV_NEXT_PAGE:                             'tipNavNextPage',
          _TIP_NAV_PREVIOUS_PAGE:                         'tipNavPreviousPage',
          _TIP_NAV_FIRST_PAGE:                            'tipNavFirstPage',
          _TIP_NAV_LAST_PAGE:                             'tipNavLastPage',
          _ERR_PAGE_INVALID_SUMMARY:                      'pageInvalid.summary',
          _ERR_PAGE_INVALID_DETAIL:                       'pageInvalid.detail',
          _ERR_DATA_INVALID_TYPE_SUMMARY:                 'dataInvalidType.summary',
          _ERR_DATA_INVALID_TYPE_DETAIL:                  'dataInvalidType.detail',
          _ERR_MAXPAGELINKS_INVALID_SUMMARY:              'maxPageLinksInvalid.summary',
          _ERR_MAXPAGELINKS_INVALID_DETAIL:               'maxPageLinksInvalid.detail'
        },
      /**
       * @private
       * @const
       */
      _MARKER_STYLE_CLASSES:
        {
          _WIDGET:                                        'oj-component',
          _ACTIVE:                                        'oj-active',
          _CLICKABLE_ICON:                                'oj-clickable-icon',
          _DISABLED:                                      'oj-disabled',
          _ENABLED:                                       'oj-enabled',
          _FOCUS:                                         'oj-focus',
          _HOVER:                                         'oj-hover',
          _SELECTED:                                      'oj-selected'
        },
      /**
       * @private
       * @const
       */
      _CSS_CLASSES:
        {
          _PAGING_CONTROL_CLASS:                          'oj-pagingcontrol',
          _PAGING_CONTROL_ACC_LABEL_CLASS:                'oj-pagingcontrol-acc-label',
          _PAGING_CONTROL_CONTENT_CLASS:                  'oj-pagingcontrol-content',
          _PAGING_CONTROL_LOAD_MORE_CLASS:                'oj-pagingcontrol-loadmore',
          _PAGING_CONTROL_LOAD_MORE_LINK_CLASS:           'oj-pagingcontrol-loadmore-link',
          _PAGING_CONTROL_LOAD_MORE_RANGE_CLASS:          'oj-pagingcontrol-loadmore-range',
          _PAGING_CONTROL_NAV_CLASS:                      'oj-pagingcontrol-nav',
          _PAGING_CONTROL_NAV_ARROW_CLASS:                'oj-pagingcontrol-nav-arrow',
          _PAGING_CONTROL_NAV_ARROW_SECTION_CLASS:        'oj-pagingcontrol-nav-arrow-section',
          _PAGING_CONTROL_NAV_PAGE_CLASS:                 'oj-pagingcontrol-nav-page',
          _PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS:       'oj-pagingcontrol-nav-page-acc-label',
          _PAGING_CONTROL_NAV_LABEL_CLASS:                'oj-pagingcontrol-nav-label',
          _PAGING_CONTROL_NAV_INPUT_SECTION_CLASS:        'oj-pagingcontrol-nav-input-section',
          _PAGING_CONTROL_NAV_INPUT_CLASS:                'oj-pagingcontrol-nav-input',
          _PAGING_CONTROL_NAV_INPUT_MAX_CLASS:            'oj-pagingcontrol-nav-input-max',
          _PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS:        'oj-pagingcontrol-nav-input-summary',
          _PAGING_CONTROL_NAV_PAGES_SECTION_CLASS:        'oj-pagingcontrol-nav-pages-section',
          _PAGING_CONTROL_NAV_PAGES_LINKS_CLASS:          'oj-pagingcontrol-nav-pages-links',
          _PAGING_CONTROL_NAV_FIRST_CLASS:                'oj-pagingcontrol-nav-first',
          _PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS:      'oj-pagingcontrol-nav-first-acc-label',
          _PAGING_CONTROL_NAV_PREVIOUS_CLASS:             'oj-pagingcontrol-nav-previous',
          _PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS:   'oj-pagingcontrol-nav-previous-acc-label',
          _PAGING_CONTROL_NAV_NEXT_CLASS:                 'oj-pagingcontrol-nav-next',
          _PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS:       'oj-pagingcontrol-nav-next-acc-label',
          _PAGING_CONTROL_NAV_LAST_CLASS:                 'oj-pagingcontrol-nav-last',
          _PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS:       'oj-pagingcontrol-nav-last-acc-label',
          _PAGING_CONTROL_NAV_FIRST_ICON_CLASS:           'oj-pagingcontrol-nav-first-icon',
          _PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS:        'oj-pagingcontrol-nav-previous-icon',
          _PAGING_CONTROL_NAV_NEXT_ICON_CLASS:            'oj-pagingcontrol-nav-next-icon',
          _PAGING_CONTROL_NAV_LAST_ICON_CLASS:            'oj-pagingcontrol-nav-last-icon',
          _WIDGET_ICON_CLASS:                             'oj-component-icon',
          _HIDDEN_CONTENT_ACC_CLASS:                      'oj-helper-hidden-accessible'
        },
      /**
       * @private
       * @const
       * @type {string}
       */
      _DATA_ATTR_PAGE_NUM: 'data-oj-pagenum',
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_ENABLED: 'enabled',
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_DISABLED: 'disabled',
      /**
       * @private
       * @const
       */
      _MODE:
        {
          _LOAD_MORE:   'loadMore',
          _PAGE:        'page'
        },
      _PAGE_OPTION_LAYOUT:
        {
          _AUTO:  'auto',
          _ALL: 'all',
          _INPUT: 'input',
          _RANGE_TEXT: 'rangeText',
          _PAGES: 'pages',
          _NAV:   'nav'
        },
      /**** start Public APIs ****/

      /**
       * Load the first page of data
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @return {Promise} promise object triggering done when complete.
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">firstPage</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "firstPage" );
       */
      'firstPage': function()
      {
        var data = this._getData();
        if (data != null)
        {
          this._startIndex = 0;
          return data.fetch({'startIndex': 0});
        }
        return oj.Object.__getPromise(function(resolve, reject) {
          reject();
        });
      },
      /**
       * Load the previous page of data
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @return {Promise} promise object triggering done when complete.
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">previousPage</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "previousPage" );
       */
      'previousPage': function()
      {
        var data = this._getData();
        if (data != null)
        {
          var page = this._getCurrentPage();
          // can only go to previous page if on 2nd page or greater
          if (page > 1)
          {
            this._startIndex = this._getStartIndexForPage(page - 1);
            if (this._startIndex < 0) {
                // Guard against walking too far "left"
                this._startIndex = 0;
            }
            return data.fetch({'startIndex': this._startIndex});
          }
        }
        return oj.Object.__getPromise(function(resolve, reject) {
          reject();
        });
      },
      /**
       * Load the next page of data
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @return {Promise} promise object triggering done when complete.
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">nextPage</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "nextPage" );
       */
      'nextPage': function()
      {
        var data = this._getData();
        if (data != null)
        {
          var page = this._getCurrentPage();
          if (page + 1 <= this._getTotalPages() || this._getTotalPages() < 0) 
          {
            this._startIndex = this._getStartIndexForPage(page + 1);
            return data.fetch({'startIndex': this._startIndex});
          }
        }
        return oj.Object.__getPromise(function(resolve, reject) {
          reject();
        });
      },
      /**
       * Load the last page of data
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @return {Promise} promise object triggering done when complete.
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">lastPage</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "lastPage" );
       */
      'lastPage': function()
      {
        var data = this._getData();
        if (data != null)
        {
          if (this._getTotalPages() > 0)
          {
            this._startIndex = this._getStartIndexForPage(this._getTotalPages());
            return data.fetch({'startIndex': this._startIndex});
          }
        }
        return oj.Object.__getPromise(function(resolve, reject) {
          reject();
        });
      },
      /**
       * Load the specified page of data
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @param {number} page  Page number. 
       * @return {Promise} promise object triggering done when complete.
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">page</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "page", 5 );
       */
      'page': function(page)
      {
        var data = this._getData();
        if (data != null)
        {
          if (this._getTotalPages() > 0) {
            this._startIndex = this._getStartIndexForPage(page);
            return data.fetch({'startIndex': this._startIndex});
          }
        }
        return oj.Object.__getPromise(function(resolve, reject) {
          reject();
        });
      },
      /**
       * Load the next set of data
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @return {Promise} promise object triggering done when complete.
       * @throws {Error}
       * @export
       * @example <caption>Invoke the <code class="prettyprint">loadNext</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "loadNext" );
       */
      'loadNext': function()
      {
        var data = this._getData();
        if (data != null)
        {
          return data.next();
        }
        return oj.Object.__getPromise(function(resolve, reject) {
          reject();
        });
      },
      /**
       * Refresh the paging control.
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * @export
       * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
       * $( ".selector" ).ojPagingControl( "refresh" );
       */
      'refresh': function()
      {
        this._super();
        if (this._fetchTimer != null)
        {
          this._fetchTimer = null;
          var data = this._getData();
          if (data != null)
          {
            data.setPageSize(this.options['pageSize']);
            data.fetch({'startIndex': this._startIndex});
          }
        }
        this._refresh(true);
      },
      /**
       * Return the subcomponent node represented by the documented locator attribute values.
       * 
       * To lookup the paging control page number navigation input text:
       *          subId: 'oj-pagingcontrol-nav-input'
       *          
       * To lookup the paging control's current maximum page text:
       *          subId: 'oj-pagingcontrol-nav-input-max'
       *          
       * To lookup the paging control's current summary page text:
       *          subId: 'oj-pagingcontrol-nav-input-summary'
       *          
       * To lookup the paging control's first button:
       *          subId: 'oj-pagingcontrol-nav-first'
       *          
       * To lookup the paging control's next button:
       *          subId: 'oj-pagingcontrol-nav-next'
       *          
       * To lookup the paging control's previous button:
       *          subId: 'oj-pagingcontrol-nav-previous'
       *          
       * To lookup the paging control's last button:
       *          subId: 'oj-pagingcontrol-nav-last'
       *          
       * To lookup the paging control's page buttons:
       *          subId: 'oj-pagingcontrol-nav-page'
       *          index: page number
       *          
       * @override
       * @param {Object} locator An Object containing at minimum a subId property whose value is a string 
       * @return {Element|null} the subcomponent located by the subId string passed in locator, if found.
       * @export
       * @expose
       * @memberof! oj.ojPagingControl
       * @instance
       * 
       */
      'getNodeBySubId': function(locator)
      {
        if (locator == null)
        {
          return this.element ? this.element[0] : null;
        }

        var subId = locator['subId'];

        if (subId === 'oj-pagingcontrol-nav-input')
        {
          return this._getPagingControlNavInput();
        }
        else if (subId === 'oj-pagingcontrol-nav-input-max')
        {
            return this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_MAX_CLASS);
        }
        else if (subId === 'oj-pagingcontrol-nav-input-summary')
        {
            return this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS);
        }
        else if (subId === 'oj-pagingcontrol-nav-first')
        {
            return this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_CLASS);
        }
        else if (subId === 'oj-pagingcontrol-nav-next')
        {
            return this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS);
        }
        else if (subId === 'oj-pagingcontrol-nav-previous')
        {
            return this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS);
        }
        else if (subId === 'oj-pagingcontrol-nav-last')
        {
            return this._getPagingControlContainer().find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_CLASS);
        }
        else if (subId === 'oj-pagingcontrol-nav-page')
        {
            var index = locator['index'];
            return this._getPagingControlContainer().find("[" + this._DATA_ATTR_PAGE_NUM + "=" + index +"]");
        }

        // Non-null locators have to be handled by the component subclasses
        return null;
      },              
      
      /**** end Public APIs ****/

      /**** start internal widget functions ****/
      
      /**
       * @override
       * @protected
       * @instance
       * @memberof! oj.ojPagingControl
       */
      _ComponentCreate : function ()
      {
        this._super();
        this._registerDataSourceEventListeners();
        this._draw();
        this._registerResizeListener(this._getPagingControlContainer());
        this._on(this._events);
        
        var self = this;
        setInterval(
          function()
          {
            if (self._refreshTimer != null)
            {
              self._refreshInternal();
              self._refreshTimer = null;
            }
        }, 50);
        setInterval(
          function()
          {
            if (self._fetchTimer != null)
            {
              var data = self._getData();
              if (data != null)
              {
                data.setPageSize(self.options['pageSize']);
                data.fetch({'startIndex': self._startIndex});
                self._fetchTimer = null;
              }
            }
        }, 100);
      },
      /**
       * @override
       * @private
       */
      _destroy: function()
      {
        this._unregisterDataSourceEventListeners();
      },
      /**
       * @override
       * @private
       */
      _draw: function()
      {
        var options = this.options;
        // add main css class to element
        this.element.addClass(this._CSS_CLASSES._PAGING_CONTROL_CLASS);
        this.element.addClass(this._MARKER_STYLE_CLASSES._WIDGET);
        this._startIndex = 0;

        this._createPagingControlAccLabel();
        this._createPagingControlContent();
        if (options['mode'] == this._MODE._LOAD_MORE)
        {
          this._createPagingControlLoadMore();
          this._createPagingControlLoadMoreLink();
          this._createPagingControlLoadMoreRange();
        }
        else
        {
          this._createPagingControlNav();
        }
      },
      /**
       * @override
       * @private
       */
      _events:
        {
          /**
           * invoke loading next page of data
           */
          'click .oj-pagingcontrol-loadmore-link': function(event)
          {
            this['loadNext']();
            event.preventDefault();
          },
          /**
           * invoke loading page of data
           */
          'click .oj-pagingcontrol-nav-page': function(event)
          {
            var pageNum = $(event.target).attr('data-oj-pagenum');
            this['page'](pageNum);  
            event.preventDefault();
          },
          /**
           * invoke loading first page of data
           */
          'click .oj-pagingcontrol-nav-first': function(event)
          {
            this['firstPage']();
            event.preventDefault();
          },
          /**
           * invoke loading previous page of data
           */
          'click .oj-pagingcontrol-nav-previous': function(event)
          {
            this['previousPage']();
            event.preventDefault();
          },
          /**
           * invoke loading next page of data
           */
          'click .oj-pagingcontrol-nav-next': function(event)
          {
            this['nextPage']();
            event.preventDefault();
          },
          /**
           * invoke loading last page of data
           */
          'click .oj-pagingcontrol-nav-last': function(event)
          {
            this['lastPage']();
            event.preventDefault();
          },
          /**
           * prevent submission of form on enter
           */
          'keypress .oj-pagingcontrol-nav-input': function(event)
          {
            var keyCode = event.which;
            
            if (keyCode == 13)
            {
              event.preventDefault();
            }
          },
          /**
           * Add oj-active
           */
          'mousedown .oj-pagingcontrol-nav-first': function(event)
          {
            $(event.target).addClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Add oj-active
           */
          'mousedown .oj-pagingcontrol-nav-previous': function(event)
          {
            $(event.target).addClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Add oj-active
           */
          'mousedown .oj-pagingcontrol-nav-next': function(event)
          {
            $(event.target).addClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Add oj-active
           */
          'mousedown .oj-pagingcontrol-nav-last': function(event)
          {
            $(event.target).addClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseup .oj-pagingcontrol-nav-first': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseup .oj-pagingcontrol-nav-previous': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseup .oj-pagingcontrol-nav-next': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseup .oj-pagingcontrol-nav-last': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseleave .oj-pagingcontrol-nav-first': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseleave .oj-pagingcontrol-nav-previous': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseleave .oj-pagingcontrol-nav-next': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          },
          /**
           * Remove oj-active
           */
          'mouseleave .oj-pagingcontrol-nav-last': function(event)
          {
            $(event.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            event.preventDefault();
          }
        },
      /**
       * @param {boolean} immediate  refresh immediately
       * @private
       */
      _refresh: function(immediate)
      {
        if (immediate)
        {
          this._refreshInternal();
        }
        else
        {
          this._refreshTimer = true;
        }
      },
      /**
       * @override
       * @private
       */
      _refreshInternal: function()
      {
        if (this._data != this.options['data'])
        {
          this._clearCachedDataMetadata();
          this._fetchTimer = true;
        }
        
        if (this.options['mode'] == this._MODE._LOAD_MORE)
        {
          // hide loadMore if there are no more rows to fetch
          var data = this._getData();
          var pagingControlLoadMore = this._getPagingControlLoadMore();
          if (data != null && data.size() == data.totalSize())
          {
            pagingControlLoadMore.css('display', 'none');
          }
          else
          {
            pagingControlLoadMore.css('display', '');
            this._refreshPagingControlLoadMoreRange();
          }
        }
        else
        {
          this._refreshPagingControlNav();
        }
      },
      /**
       * @override
       * @private
       */
      _setOption: function(key, value)
      {
        this._superApply(arguments);
        this._fetchTimer = true;
        this._refresh(true);
      },
      /**** end internal widget functions ****/

      /**** start internal functions ****/
      /**
       * Clear any cached data metadata
       * @private
       */
      _clearCachedDataMetadata: function()
      {
        if (this._data != null)
        {
          this._unregisterDataSourceEventListeners();
        }
        this._data = null;
        this._startIndex = 0;
      },
      /**
       * Clear cached range text DOM
       * @private
       */
      _clearCachedDomLoadMoreRange: function()
      {
        this._cachedDomPagingControlLoadMoreRange = null;
      },
      /**
       * Clear any cached DOM nav elements
       * @private
       */
      _clearCachedDomPagingControlNav: function()
      {
        this._cachedDomPagingControlNav = null;
        this._cachedDomPagingControlNavInput = null;
        this._cachedDomPagingControlNavInputSummary = null;
      },
      /**
       * Return the current page
       * @return {number} Current page.
       * @throws {Error}
       * @private
       */
      _getCurrentPage: function()
      {
        if (this._startIndex == 0)
        {
          return 1;
        }
        return Math.ceil((this._startIndex + 1) / this.options['pageSize']);
      },
      /**
       * Return the datasource object defined for this paging control
       * @return {Object} Datasource object.
       * @throws {Error}
       * @private
       */
      _getData: function()
      {
        if (!this._data && this.options['data'] != null)
        {
          var data = this.options['data'];
          if (data instanceof oj.PagingDataSource)
          {
            this._data = data;
          }
          else
          {
            var errSummary = this.getTranslatedString(this._BUNDLE_KEY._ERR_DATA_INVALID_TYPE_SUMMARY);
            var errDetail = this.getTranslatedString(this._BUNDLE_KEY._ERR_DATA_INVALID_TYPE_DETAIL);
            throw new Error(errSummary + '\n' + errDetail);
          }
          this._data.setPageSize(this.options['pageSize']);
          this._dataMetadata = this.options['data'];
          // In case we get a delayed setting of the data property--check to rebind the listeners
          this._registerDataSourceEventListeners();
          var self = this;
          setTimeout(function(){self._initFetch()}, 0);
        }
        return this._data;
      },
      /**
       * Return the item range text
       * @return {String} Item range text.
       * @throws {Error}
       * @private
       */
      _getItemRangeText: function()
      {
        var data = this._getData();
        var pageFrom = this._startIndex;
        var itemRangeText = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE, {'pageFrom': pageFrom, 'pageTo': 0, 'pageTotal': 0});
        if (data != null)
        {
          var pageTo = parseInt(this._startIndex, 10) + parseInt(data.size(), 10);
          pageFrom = pageTo > 0 ? pageFrom + 1 : 0;
          if (data.totalSize() != -1)
          {
            pageTo = pageTo > data.totalSize() ? data.totalSize() : pageTo;
            itemRangeText = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE, {'pageFrom': pageFrom, 'pageTo': pageTo, 'pageTotal': data.totalSize()});
          }
          else
          {
            itemRangeText = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_UNKNOWN, {'pageFrom': pageFrom, 'pageTo': pageTo});
          }
        }
        return itemRangeText;
      },
      /**
       * Return maximum number of page links
       * @return {number} Max page links.
       * @private
       */
      _getMaxPageLinks: function()
      {
        var maxPageLinks = this.options['pageOptions']['maxPageLinks'];
        return maxPageLinks;
      },
      /**
       * Return the start index for the page
       * @param {number} page page number.
       * @return {number} start index.
       * @throws {Error}
       * @private
       */
      _getStartIndexForPage: function(page)
      {
        var startIndex = (page - 1) * this.options['pageSize'];
        var totalPages = this._getTotalPages();

        if (startIndex < 0)
        {
          oj.Logger.error('Value must be greater than 0');
        }
        else if (totalPages > 0 && page > totalPages)
        {
          oj.Logger.error('Value cannot be greater than the total number of pages');
        }
        return startIndex;
      },
      /**
       * Return the total number of pages
       * @return {number} Total pages.
       * @throws {Error}
       * @private
       */
      _getTotalPages: function()
      {
        var data = this._getData();
        var totalSize = 0;
        if (data != null)
        {
          totalSize = data.totalSize();
        }
        return totalSize == -1 ? -1 : Math.ceil(totalSize / this.options['pageSize']);
      },
      /**
       * Callback handler for fetch completed in the datasource.
       * status message.
       * @param {Object} event 
       * @private
       */
      _handleDataFetchEnd: function(event)
      {
        this._refresh();
      },
      /**
       * Callback handler for reset in the datasource.
       * status message.
       * @param {Object} event 
       * @private
       */
      _handleDataReset: function(event)
      {
        this._startIndex = 0;
        this._getData().setPageSize(this.options['pageSize']);        
        this._refresh(true);
        this._getData().fetch({'startIndex': this._startIndex, 'reset':true});        
      },
      /**
       * Callback handler for refresh in the datasource.
       * status message.
       * @param {Object} event 
       * @private
       */
      _handleDataRefresh: function(event)
      {
        this._refresh();
        this._getData().fetch({'startIndex': this._startIndex});        
      },
      /**
       * Callback handler for sort in the datasource.
       * status message.
       * @param {Object} event 
       * @private
       */
      _handleDataSort: function(event)
      {
        // Do a reset if the paging mode is loadmore, otherwise just refresh
        if (this.options['mode'] == this._MODE._LOAD_MORE) {
            this._handleDataReset(event);
        }
        else {
            this._handleDataRefresh(event);
        }
      },
      /**
       * Callback handler for row added into the datasource.
       * status message.
       * @param {Object} event
       * @private
       */
      _handleDataRowAdd: function(event)
      {
        if (this.options['mode'] == this._MODE._PAGE)
        {
          var data = this._getData();
          var totalSize = 0;
          if (data != null)
          {
            totalSize = data.totalSize();
          }
          var pageSize = this.options['pageSize'];
          var rowIdx = event.index;
          var currentPage = this._getCurrentPage();
          var startIndex = this._getStartIndexForPage(currentPage);

          if (startIndex != this._startIndex ||
              (rowIdx >= startIndex && (rowIdx < startIndex + pageSize) && totalSize > pageSize))
          {
            // this means that the add caused the pages to shift or
            // the row was added to the current page and the first page is full already
            // so we need to re-fetch the current page
            this._startIndex = startIndex;
            this._fetchTimer = true;
          }
        }
        this._refresh();
      },
      /**
       * Callback handler for row removed in the datasource.
       * status message.
       * @param {Object} event
       * @private
       */
      _handleDataRowRemove: function(event)
      {
        if (this._getTotalPages() <= 0)
        {
          this._startIndex = 0;
        }
        else if (this._getCurrentPage() > this._getTotalPages())
        {
          // if the number of pages decreased due to the removal, then
          // reset the startIndex
          this._startIndex = this._getStartIndexForPage(this._getTotalPages());
          this._fetchTimer = true;
        }
        if (this._getTotalPages() > 1)
        {
          this._fetchTimer = true;
        }
        this._refresh();
      },
      /**
       * Callback handler for page change.
       * @param {Object} event
       * @private
       */
      _handlePageChange: function(event, data)
      {
        try
        {
          if (data.value != this._getCurrentPage())
          {
            if (!isNaN(data.value) && data.value > 0)
            {
              this['page'](data.value);
            }
          }
        }
        catch (err)
        {
          var errSummary = this.getTranslatedString(this._BUNDLE_KEY._ERR_PAGE_INVALID_SUMMARY);
          var errDetail = this.getTranslatedString(this._BUNDLE_KEY._ERR_PAGE_INVALID_DETAIL);
          oj.Logger.error(errSummary + '\n' + errDetail);
        }
      },
      /**
       * Do an initial fetch
       * @private
       */
      _initFetch: function()
      {
        // do an initial fetch if there aren't enough rows to fill the first page
        // and there are more rows to fetch 
        if (this._getData() != null &&
            this._getData().size() < this.options['pageSize'] &&
            (this._getData().totalSize() < 0 || this._getData().totalSize() >= this._getData().size()))
        {
          this._getData().setPageSize(this.options['pageSize']);
          this._getData().fetch({'startIndex': this._startIndex, 'fetchType': 'init'});
        }
      },
      /**
       * @override
       * @private
       */
      _refreshPagingControlLoadMoreRange: function()
      {
        var pagingControlLoadMoreRange = this._getPagingControlLoadMoreRange();
        pagingControlLoadMoreRange[0].parentNode.removeChild(pagingControlLoadMoreRange[0]);
        this._createPagingControlLoadMoreRange();
        this._clearCachedDomLoadMoreRange();
      },
      /**
       * @override
       * @private
       */
      _refreshPagingControlNav: function()
      {
        var overflowOption = this.options['overflow'];
        var pagingControlContent = this._getPagingControlContent();
        pagingControlContent.empty();
        this._clearCachedDomPagingControlNav();
        this._createPagingControlNav();
        this._refreshPagingControlNavArrows();
        
        if (overflowOption == 'fit')
        {
          // dynamically hide controls based on available width
          var elementWidth = this.element.width();
          var pagingControlNavArrowSection = this._getPagingControlNavArrowSection();
          var pagingControlNavInputSection = this._getPagingControlNavInputSection();
          var pagingControlNavPageLinks = this._getPagingControlNavPageLinks();
          var pagingControlNavInputSummary = this._getPagingControlNavInputSummary();
          var pagingControlNavArrowSectionWidth = pagingControlNavArrowSection != null ? pagingControlNavArrowSection[0].offsetWidth:0;
          var pagingControlNavInputSectionWidth = pagingControlNavInputSection != null ? pagingControlNavInputSection[0].offsetWidth:0;
          var pagingControlNavPageLinksWidth = pagingControlNavPageLinks != null ? pagingControlNavPageLinks.width():0;
          var pagingControlNavInputSummaryWidth = pagingControlNavInputSummary != null ? pagingControlNavInputSummary.width():0;
          var pagingControlNavWidth = pagingControlNavArrowSectionWidth + pagingControlNavInputSectionWidth;
          
          if (pagingControlNavWidth > elementWidth)
          {
            if (pagingControlNavWidth 
                - pagingControlNavPageLinksWidth <= elementWidth)
            {
              // hide only the page links
              pagingControlNavPageLinks.css('display', 'none'); 
            }
            else if (pagingControlNavWidth 
                     - pagingControlNavPageLinksWidth 
                     - pagingControlNavInputSummaryWidth <= elementWidth)
            {
              // hide the range text too
              if (pagingControlNavPageLinks != null)
              {
                pagingControlNavPageLinks.css('display', 'none');
              }
              if (pagingControlNavInputSummary != null)
              {
                pagingControlNavInputSummary.css('display', 'none');
              }
            }
            else
            {
              // hide the arrows too
              if (pagingControlNavPageLinks != null)
              {
                pagingControlNavPageLinks.css('display', 'none');
              }
              if (pagingControlNavInputSummary != null)
              {
                pagingControlNavInputSummary.css('display', 'none');
              }
              if (pagingControlNavArrowSection != null)
              {
                pagingControlNavArrowSection.css('display', 'none'); 
              }
            }
          }
          else if (pagingControlNavWidth > 0)
          {
            if (pagingControlNavPageLinks != null)
            {
              pagingControlNavPageLinks.css('display', '');
            }
            if (pagingControlNavInputSummary != null)
            {
              pagingControlNavInputSummary.css('display', '');
            }
            if (pagingControlNavArrowSection != null)
            {
              pagingControlNavArrowSection.css('display', '');
            }
          }
        }
      },
      /**
       * @override
       * @private
       */
      _refreshPagingControlNavArrows: function()
      {
        var pagingControlNavArrowSection = this._getPagingControlNavArrowSection();
        var pagingControlNavFirst = pagingControlNavArrowSection.children('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_CLASS);
        if (pagingControlNavFirst && pagingControlNavFirst.length > 0)
        {
          pagingControlNavFirst = $(pagingControlNavFirst[0]);
          
          if (this._getCurrentPage() == 1)
          {
            pagingControlNavFirst.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavFirst.removeClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavFirst.attr('tabindex', '-1');
          }
          else
          {
            pagingControlNavFirst.addClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavFirst.removeClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavFirst.attr('tabindex', '0');
          }
        }
        var pagingControlNavPrevious = pagingControlNavArrowSection.children('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS);
        if (pagingControlNavPrevious && pagingControlNavPrevious.length > 0)
        {
          pagingControlNavPrevious = $(pagingControlNavPrevious[0]);
          
          if (this._getCurrentPage() == 1)
          {
            pagingControlNavPrevious.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavPrevious.removeClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavPrevious.attr('tabindex', '-1');
          }
          else
          {
            pagingControlNavPrevious.addClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavPrevious.removeClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavPrevious.attr('tabindex', '0');
          }
        }
        var pagingControlNavLast = pagingControlNavArrowSection.children('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_CLASS);
        if (pagingControlNavLast && pagingControlNavLast.length > 0)
        {
          pagingControlNavLast = $(pagingControlNavLast[0]);
          
          if (this._getCurrentPage() == this._getTotalPages() || this._getTotalPages() === 0)
          {
            pagingControlNavLast.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavLast.removeClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavLast.attr('tabindex', '-1');
          }
          else
          {
            pagingControlNavLast.addClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavLast.removeClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavLast.attr('tabindex', '0');
          }
        }
        var pagingControlNavNext = pagingControlNavArrowSection.children('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS);
        if (pagingControlNavNext && pagingControlNavNext.length > 0)
        {
          pagingControlNavNext = $(pagingControlNavNext[0]);
          
          if (this._getCurrentPage() == this._getTotalPages() || this._getTotalPages() === 0)
          {
            pagingControlNavNext.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavNext.removeClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavNext.attr('tabindex', '-1');
          }
          else
          {
            pagingControlNavNext.addClass(this._MARKER_STYLE_CLASSES._ENABLED);
            pagingControlNavNext.removeClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavNext.attr('tabindex', '0');
          }
        }
      },
      /**
       * Register event listeners which need to be registered datasource. 
       * @private
       */
      _registerDataSourceEventListeners: function()
      {
        // register the listeners on the datasource
        var data = this._getData();
        if (data != null)
        {
          this._unregisterDataSourceEventListeners();
          
          this._dataSourceEventHandlers = [];
          this._dataSourceEventHandlers.push({'eventType': oj.PagingDataSource.EventType['ADD'], 'eventHandler': this._handleDataRowAdd.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.PagingDataSource.EventType['REMOVE'], 'eventHandler': this._handleDataRowRemove.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.PagingDataSource.EventType['RESET'], 'eventHandler': this._handleDataReset.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.PagingDataSource.EventType['REFRESH'], 'eventHandler': this._handleDataRefresh.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.PagingDataSource.EventType['SYNC'], 'eventHandler': this._handleDataFetchEnd.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.PagingDataSource.EventType['SORT'], 'eventHandler': this._handleDataSort.bind(this)});

          var i, ev;
          for (i = 0; i < this._dataSourceEventHandlers.length; i++) {
            ev = data.on(this._dataSourceEventHandlers[i]['eventType'], this._dataSourceEventHandlers[i]['eventHandler']);
            if (ev) {
                this._dataSourceEventHandlers[i]['eventHandler'] = ev;
            }
            
        }
        }
      },
      /**
       * Register event listeners for resize the container DOM element.
       * @param {jQuery} element  DOM element
       * @private
       */
      _registerResizeListener: function(element)
      {         
        if (!this._isResizeListenerAdded)
        {
          var self = this;
          oj.DomUtils.addResizeListener(element[0], function(width, height)
                                                    {
                                                      self._refresh();
                                                    });
          this._isResizeListenerAdded = true;
        }
      },
      /**
       * Unregister event listeners which are registered on datasource. 
       * @private
       */
      _unregisterDataSourceEventListeners: function()
      {
        var data = this._getData();
        // unregister the listeners on the datasource
        if (this._dataSourceEventHandlers != null && data != null)
        {
          var i;
          for (i = 0; i < this._dataSourceEventHandlers.length; i++)
            data.off(this._dataSourceEventHandlers[i]['eventType'], this._dataSourceEventHandlers[i]['eventHandler']);
        }
      },
      /**** end internal functions ****/
      /**
       * Create a span element for acc purposes
       * @param {string} text span text
       * @param {string} className css class
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createAccLabelSpan: function(text, className)
      {
        var accLabel = $(document.createElement('span'));
        accLabel.addClass(className);
        accLabel.addClass(this._CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
        accLabel.append(text);

        return accLabel;
      },
      /**** start internal DOM functions ****/
      /**
       * Create the acc paging control label
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlAccLabel: function()
      {
        var pagingControlContainer = this._getPagingControlContainer();
        var pagingControlAccLabelText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_PAGING);
        var pagingControlAccLabel = this._createAccLabelSpan(pagingControlAccLabelText, this._CSS_CLASSES._PAGING_CONTROL_ACC_LABEL_CLASS);
        var pagingControlAccLabelId = this.element.attr('id') + '_oj_pgCtrl_acc_label';
        pagingControlAccLabel.attr('id', pagingControlAccLabelId);
        pagingControlContainer.append(pagingControlAccLabel);

        return pagingControlAccLabel;
      },
      /**
       * Create the acc page link label
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlAccNavPageLabel: function()
      {
        var pagingControlAccNavPageLabelText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_NAV_PAGE);
        var pagingControlAccNavPageLabel = this._createAccLabelSpan(pagingControlAccNavPageLabelText, this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS);

        return pagingControlAccNavPageLabel;
      },
      /**
       * Create the acc first page label
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlAccNavFirstLabel: function()
      {
        var pagingControlAccNavFirstLabelText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_NAV_FIRST_PAGE);
        var pagingControlAccNavFirstLabel = this._createAccLabelSpan(pagingControlAccNavFirstLabelText, this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS);

        return pagingControlAccNavFirstLabel;
      },
      /**
       * Create the acc last page label
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlAccNavLastLabel: function()
      {
        var pagingControlAccNavLastLabelText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_NAV_LAST_PAGE);
        var pagingControlAccNavLastLabel = this._createAccLabelSpan(pagingControlAccNavLastLabelText, this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS);

        return pagingControlAccNavLastLabel;
      },
      /**
       * Create the acc next page label
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlAccNavNextLabel: function()
      {
        var pagingControlAccNavNextLabelText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_NAV_NEXT_PAGE);
        var pagingControlAccNavNextLabel = this._createAccLabelSpan(pagingControlAccNavNextLabelText, this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS);

        return pagingControlAccNavNextLabel;
      },
      /**
       * Create the acc previous page label
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlAccNavPreviousLabel: function()
      {
        var pagingControlAccNavPreviousLabelText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_NAV_PREVIOUS_PAGE);
        var pagingControlAccNavPreviousLabel = this._createAccLabelSpan(pagingControlAccNavPreviousLabelText, this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS);

        return pagingControlAccNavPreviousLabel;
      },
      /**
       * Create an paging content div
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlContent: function()
      {
        var pagingControlContainer = this._getPagingControlContainer();
        var pagingControlContent = $(document.createElement('div'));
        pagingControlContent.addClass(this._CSS_CLASSES._PAGING_CONTROL_CONTENT_CLASS);
        var pagingControlAccLabelId = this._getPagingControlAccLabel().attr('id');
        pagingControlContent.attr('role', 'navigation');
        pagingControlContent.attr('aria-labelledby', pagingControlAccLabelId);
        pagingControlContainer.append(pagingControlContent);

        return pagingControlContent;
      },
      /**
       * Create an paging load more div
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlLoadMore: function()
      {
        var pagingControlContent = this._getPagingControlContent();
        var pagingControlLoadMore = $(document.createElement('div'));
        pagingControlLoadMore.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_CLASS);
        pagingControlContent.append(pagingControlLoadMore);

        return pagingControlLoadMore;
      },
      /**
       * Create an paging load more link
       * @return {jQuery} jQuery a DOM element
       * @private
       */
      _createPagingControlLoadMoreLink: function()
      {
        var pagingControlLoadMore = this._getPagingControlLoadMore();
        var pagingControlLoadMoreLink = $(document.createElement('a'));
        pagingControlLoadMoreLink.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_LINK_CLASS);
        var loadMoreText = this.getTranslatedString(this._BUNDLE_KEY._LABEL_LOAD_MORE);
        pagingControlLoadMoreLink.append(loadMoreText);
        pagingControlLoadMoreLink.attr('tabindex', '0');
        pagingControlLoadMoreLink.attr('href', '#');
        pagingControlLoadMore.append(pagingControlLoadMoreLink);

        return pagingControlLoadMoreLink;
      },
      /**
       * Create an paging load more link
       * @return {jQuery} jQuery a DOM element
       * @private
       */
      _createPagingControlLoadMoreRange: function()
      {
        var data = this._getData();
        var pagingControlLoadMore = this._getPagingControlLoadMore();
        var pagingControlLoadMoreRange = $(document.createElement('span'));
        pagingControlLoadMoreRange.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_CLASS);
        var loadMoreRangeText = this._getItemRangeText();
        pagingControlLoadMoreRange.append(loadMoreRangeText);
        pagingControlLoadMore.append(pagingControlLoadMoreRange);

        return pagingControlLoadMoreRange;
      },
      /**
       * Create the paging nav bar div
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlNav: function()
      {
        var options = this.options;
        var pageOptionLayout = options['pageOptions']['layout'];
        if (pageOptionLayout == null)
        {
          pageOptionLayout = [this._PAGE_OPTION_LAYOUT._AUTO];
        }
        var pagingControlContent = this._getPagingControlContent();
        var pagingControlNav = $(document.createElement('div'));
        pagingControlNav.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_CLASS);
        pagingControlContent.append(pagingControlNav);

        // page input section
        if ($.inArray(this._PAGE_OPTION_LAYOUT._AUTO, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._ALL, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._INPUT, pageOptionLayout) != -1)
        {
          var pagingControlNavInputSection = $(document.createElement('div'));
          pagingControlNavInputSection.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SECTION_CLASS);
          pagingControlNav.append(pagingControlNavInputSection);
          var pagingControlNavLabel = $(document.createElement('label'));
          pagingControlNavLabel.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_LABEL_CLASS);
          var navInputPageLabel = this.getTranslatedString(this._BUNDLE_KEY._LABEL_NAV_INPUT_PAGE);
          pagingControlNavLabel.append(navInputPageLabel);
          pagingControlNavInputSection.append(pagingControlNavLabel);

          var pagingControlNavInput = $(document.createElement('input'));
          pagingControlNavInput.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS);
          var navInputPageTip = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_INPUT_PAGE);
          this._focusable(this.element);
          pagingControlNavInput.attr('title', navInputPageTip);
          pagingControlNavInput.attr('tabindex', '0');
          pagingControlNavInput.val(this._getCurrentPage());
          pagingControlNavLabel.append(pagingControlNavInput);
          var maxPageVal = 0;
          
          if (this._getTotalPages() > 0)
          {
            maxPageVal = this._getTotalPages();
            var pagingControlNavMaxLabel = $(document.createElement('span'));
            pagingControlNavMaxLabel.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_MAX_CLASS);
            var navInputPageMaxLabel = this.getTranslatedString(this._BUNDLE_KEY._LABEL_NAV_INPUT_PAGE_MAX, {'pageMax': maxPageVal});
            pagingControlNavMaxLabel.append(navInputPageMaxLabel);
            pagingControlNavInputSection.append(pagingControlNavMaxLabel);
          }
          else
          {
            maxPageVal = this._getCurrentPage() + 1;
          }
          pagingControlNavInput.ojInputText({'rootAttributes': {'style':"width: auto; min-width: 0;"}, 'optionChange': this._handlePageChange.bind(this), 'validators': [{'type': 'numberRange', 'options': {'min': 1, max: maxPageVal}}]});
          
          if ($.inArray(this._PAGE_OPTION_LAYOUT._AUTO, pageOptionLayout) != -1 ||
              $.inArray(this._PAGE_OPTION_LAYOUT._ALL, pageOptionLayout) != -1 ||
              $.inArray(this._PAGE_OPTION_LAYOUT._RANGE_TEXT, pageOptionLayout) != -1)
          {
            var pagingControlNavSummaryLabel = $(document.createElement('span'));
            pagingControlNavSummaryLabel.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS);
            var itemRangeText = this._getItemRangeText();
            var navInputPageSummaryLabel = this.getTranslatedString(this._BUNDLE_KEY._LABEL_NAV_INPUT_PAGE_SUMMARY, {'pageSummary': itemRangeText});
            pagingControlNavSummaryLabel.append(navInputPageSummaryLabel);
            pagingControlNavInputSection.append(pagingControlNavSummaryLabel);
          }
        }

        // nav arrow section
        var pagingControlNavArrowSection = $(document.createElement('div'));
        pagingControlNavArrowSection.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_SECTION_CLASS);
        pagingControlNav.append(pagingControlNavArrowSection);
        
        if ($.inArray(this._PAGE_OPTION_LAYOUT._AUTO, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._ALL, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._NAV, pageOptionLayout) != -1)
        {
          var pagingControlNavFirst = $(document.createElement('a'));
          pagingControlNavFirst.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_CLASS);
          pagingControlNavFirst.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_CLASS);
          pagingControlNavFirst.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_ICON_CLASS);
          pagingControlNavFirst.addClass(this._CSS_CLASSES._WIDGET_ICON_CLASS);
          pagingControlNavFirst.addClass(this._MARKER_STYLE_CLASSES._CLICKABLE_ICON);
          pagingControlNavFirst.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
          var navFirstPageTip = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_FIRST_PAGE);
          this._hoverable(pagingControlNavFirst);
          this._focusable(pagingControlNavFirst);
          pagingControlNavFirst.attr('title', navFirstPageTip);
          pagingControlNavFirst.attr('tabindex', '0');
          pagingControlNavFirst.attr('href', '#');
          var pagingControlNavFirstAccLabel = this._createPagingControlAccNavFirstLabel();
          pagingControlNavFirst.append(pagingControlNavFirstAccLabel);
          pagingControlNavArrowSection.append(pagingControlNavFirst);

          var pagingControlNavPrevious = $(document.createElement('a'));
          pagingControlNavPrevious.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_CLASS);
          pagingControlNavPrevious.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS);
          pagingControlNavPrevious.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS);
          pagingControlNavPrevious.addClass(this._CSS_CLASSES._WIDGET_ICON_CLASS);
          pagingControlNavPrevious.addClass(this._MARKER_STYLE_CLASSES._CLICKABLE_ICON);
          pagingControlNavPrevious.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
          var navPreviousPageTip= this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_PREVIOUS_PAGE);
          this._hoverable(pagingControlNavPrevious);
          this._focusable(pagingControlNavPrevious);
          pagingControlNavPrevious.attr('title', navPreviousPageTip);
          pagingControlNavPrevious.attr('tabindex', '0');
          pagingControlNavPrevious.attr('href', '#');
          var pagingControlNavPreviousAccLabel = this._createPagingControlAccNavPreviousLabel();
          pagingControlNavPrevious.append(pagingControlNavPreviousAccLabel);
          pagingControlNavArrowSection.append(pagingControlNavPrevious);
        }

        // nav pages section
        if ($.inArray(this._PAGE_OPTION_LAYOUT._AUTO, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._ALL, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._PAGES, pageOptionLayout) != -1)
        {
          var pagingControlNavPagesSection = $(document.createElement('div'));
          pagingControlNavPagesSection.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGES_SECTION_CLASS);
          pagingControlNavArrowSection.append(pagingControlNavPagesSection);
          this._createPagingControlNavPages(pagingControlNavPagesSection, this._getMaxPageLinks());
        }

        if ($.inArray(this._PAGE_OPTION_LAYOUT._AUTO, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._ALL, pageOptionLayout) != -1 ||
            $.inArray(this._PAGE_OPTION_LAYOUT._NAV, pageOptionLayout) != -1)
        {
          var pagingControlNavNext = $(document.createElement('a'));
          pagingControlNavNext.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_CLASS);
          pagingControlNavNext.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS);
          pagingControlNavNext.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_ICON_CLASS);
          pagingControlNavNext.addClass(this._CSS_CLASSES._WIDGET_ICON_CLASS);
          pagingControlNavNext.addClass(this._MARKER_STYLE_CLASSES._CLICKABLE_ICON);
          pagingControlNavNext.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
          var navNextPageTip = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_NEXT_PAGE);
          this._hoverable(pagingControlNavNext);
          this._focusable(pagingControlNavNext);
          pagingControlNavNext.attr('title', navNextPageTip);
          pagingControlNavNext.attr('tabindex', '0');
          pagingControlNavNext.attr('href', '#');
          var pagingControlNavNextAccLabel = this._createPagingControlAccNavNextLabel();
          pagingControlNavNext.append(pagingControlNavNextAccLabel);
          pagingControlNavArrowSection.append(pagingControlNavNext);

          var pagingControlNavLast = $(document.createElement('a'));
          pagingControlNavLast.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_CLASS);
          pagingControlNavLast.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_CLASS);
          pagingControlNavLast.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_ICON_CLASS);
          pagingControlNavLast.addClass(this._CSS_CLASSES._WIDGET_ICON_CLASS);
          pagingControlNavLast.addClass(this._MARKER_STYLE_CLASSES._CLICKABLE_ICON);
          pagingControlNavLast.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
          var navLastPageTip = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_LAST_PAGE);
          this._hoverable(pagingControlNavLast);
          this._focusable(pagingControlNavLast);
          pagingControlNavLast.attr('title', navLastPageTip);
          pagingControlNavLast.attr('tabindex', '0');
          pagingControlNavLast.attr('href', '#');
          var pagingControlNavLastAccLabel = this._createPagingControlAccNavLastLabel();
          pagingControlNavLast.append(pagingControlNavLastAccLabel);
          pagingControlNavArrowSection.append(pagingControlNavLast);
        }

        return pagingControlNav;
      },
      /**
       * Create the page links
       * @param {jQuery} parentDiv parent element
       * @param {number} numLinks number of page links
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlNavPages: function(parentDiv, numLinks)
      {
        if (numLinks < 5)
        {
          var errSummary = this.getTranslatedString(this._BUNDLE_KEY._ERR_MAXPAGELINKS_INVALID_SUMMARY);
          var errDetail = this.getTranslatedString(this._BUNDLE_KEY._ERR_MAXPAGELINKS_INVALID_DETAIL);
          throw new Error(errSummary + '\n' + errDetail);
        }
        var pagingControlNavPagesLinks = $(document.createElement('div'));
        pagingControlNavPagesLinks.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGES_LINKS_CLASS);
        parentDiv.append(pagingControlNavPagesLinks);
        var totalPages = this._getTotalPages();
        var currentPage = this._getCurrentPage();
        
        var numPagesToAdd = numLinks;
        // this will hold our page list
        var pageList = [];

        if (currentPage >= 1)
        {
          var i;
          if (totalPages != -1 && totalPages <= numPagesToAdd)
          {
            // always add the first page
            pageList[0] = 1;
            
            // just enumerate the pages
            for (i = 1; i < totalPages; i++)
            {
              pageList[i] = i + 1;
            }
          }
          else
          {
            // add the first, current, and last page
            pageList.push(1);
            if (currentPage != 1)
            {
              pageList.push(currentPage);
            }
            // add last page if known row count
            if (currentPage != totalPages && totalPages != -1)
            {
              pageList.push(totalPages);
            }
            numPagesToAdd = numPagesToAdd - pageList.length;
            // keep adding before the current page till we get to the
            // first page or we've added numPagesToAdd - 1.
            // If the last page or 2nd to last page then add until numPagesToAdd
            var pageBeforeCurrent = currentPage - 1;
            // number of pages to add after current
            var numPagesAfterCurrent = 1;
            // if at last page or second to last page then don't add any pages
            // after current
            if (currentPage == totalPages || currentPage == totalPages - 1)
            {
              numPagesAfterCurrent = 0;
            }
            while (numPagesToAdd > numPagesAfterCurrent && pageBeforeCurrent > 1)
            {
              pageList.push(pageBeforeCurrent);
              pageBeforeCurrent--;
              numPagesToAdd--;
            }
            // keep adding after the current page
            var pageAfterCurrent = currentPage + 1;
            // if unknown row count, only add one page after current
            if (totalPages == -1)
            {
              numPagesToAdd = 1;
            }
            while (numPagesToAdd > 0 && (pageAfterCurrent <= totalPages || totalPages == -1))
            {
              pageList.push(pageAfterCurrent);
              pageAfterCurrent++;
              numPagesToAdd--;
            }
          }

          // sort the pageList array
          var compareNumbers = function (a, b) {
            return a - b;
          };
          
          pageList.sort(compareNumbers);

          for (i = 0; i < pageList.length; i++)
          {
            var pageNum = pageList[i];
            this._createPagingControlNavPage(pagingControlNavPagesLinks, pageNum);
            // check if we have a gap
            if (i != pageList.length - 1)
            {
              if (pageNum != pageList[i + 1] - 1)
              {
                this._createPagingControlNavPage(pagingControlNavPagesLinks, -1);
              }
            }
          }
          if (totalPages == -1)
          {
            this._createPagingControlNavPage(pagingControlNavPagesLinks, -1);
          }
        }
        return pagingControlNavPagesLinks;
      },
      /**
       * Create the page link or page gap
       * @param {jQuery} parentDiv parent element
       * @param {number} pageNum page number
       * @return {jQuery} jQuery div DOM element
       * @private
       */
      _createPagingControlNavPage: function(parentDiv, pageNum)
      {
        var currentPage = this._getCurrentPage();
        var pagingControlNavPage = null;
        if (pageNum == -1)
        {
          pagingControlNavPage = $(document.createElement('span'));
          pagingControlNavPage.append("...");
          parentDiv.append(pagingControlNavPage);
        }
        else
        {          
          if (currentPage == pageNum)
          {
             pagingControlNavPage = $(document.createElement('div'));
             pagingControlNavPage.addClass(this._MARKER_STYLE_CLASSES._SELECTED);
             pagingControlNavPage.addClass(this._MARKER_STYLE_CLASSES._ACTIVE);
             pagingControlNavPage.addClass(this._MARKER_STYLE_CLASSES._DISABLED);
             pagingControlNavPage.removeClass(this._MARKER_STYLE_CLASSES._ENABLED);
          }
          else
          {
            pagingControlNavPage = $(document.createElement('a'));
            pagingControlNavPage.removeClass(this._MARKER_STYLE_CLASSES._SELECTED);
            pagingControlNavPage.removeClass(this._MARKER_STYLE_CLASSES._ACTIVE);
            pagingControlNavPage.removeClass(this._MARKER_STYLE_CLASSES._DISABLED);
            pagingControlNavPage.addClass(this._MARKER_STYLE_CLASSES._ENABLED);
          }
          pagingControlNavPage.attr('data-oj-pagenum', pageNum);
          pagingControlNavPage.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGE_CLASS);
          var pageTitle = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_PAGE_LINK, {'pageNum': pageNum.toString()});
          this._hoverable(pagingControlNavPage);
          this._focusable(pagingControlNavPage);
          pagingControlNavPage.attr('title', pageTitle);
          pagingControlNavPage.attr('tabindex', '0');
          pagingControlNavPage.attr('href', '#');
          // create the acc label for the page link
          var accPageLabel = this._createPagingControlAccNavPageLabel();
          pagingControlNavPage.append(accPageLabel);
          pagingControlNavPage.append(pageNum.toString());
          this._hoverable(pagingControlNavPage);
          parentDiv.append(pagingControlNavPage);
        }
        return pagingControlNavPage;
      },
      /**
       * Return the paging content acc label
       * @return {jQuery|null} jQuery div DOM element
       * @private
       */
      _getPagingControlAccLabel: function()
      {
        var pagingControlContainer = this._getPagingControlContainer();
        var pagingControlContentAccLabel = null;
        
        if (pagingControlContainer)
        {
          pagingControlContentAccLabel = pagingControlContainer.find('.' + this._CSS_CLASSES._PAGING_CONTROL_ACC_LABEL_CLASS);
          if (pagingControlContentAccLabel && pagingControlContentAccLabel.length > 0)
          {
            pagingControlContentAccLabel = $(pagingControlContentAccLabel.get(0));
          }
        }
        
        return pagingControlContentAccLabel;
      },
      /**
       * Return the paging container
       * @return {jQuery|null} jQuery div DOM element
       * @private
       */
      _getPagingControlContainer: function()
      {
        return $(this.element);
      },
      /**
       * Return the paging content
       * @return {jQuery|null} jQuery div DOM element
       * @private
       */
      _getPagingControlContent: function()
      {
        if (!this._cachedDomPagingControlContent)
        {
          var pagingControlContainer = this._getPagingControlContainer();
          var pagingControlContent = null;
          if (pagingControlContainer)
          {
            pagingControlContent = pagingControlContainer.find('.' + this._CSS_CLASSES._PAGING_CONTROL_CONTENT_CLASS);
            if (pagingControlContent && pagingControlContent.length > 0)
            {
              this._cachedDomPagingControlContent = $(pagingControlContent.get(0));
            }
          }
        }

        return this._cachedDomPagingControlContent;
      },
      /**
       * Return the Load More div
       * @return {jQuery|null} jQuery a DOM element
       * @private
       */
      _getPagingControlLoadMore: function()
      {
        if (!this._cachedDomPagingControlLoadMore)
        {
          var pagingControlContent = this._getPagingControlContent();
          var pagingControlLoadMore = null;
          if (pagingControlContent)
          {
            pagingControlLoadMore = pagingControlContent.children('.' + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_CLASS);
            if (pagingControlLoadMore && pagingControlLoadMore.length > 0)
            {
              this._cachedDomPagingControlLoadMore = $(pagingControlLoadMore.get(0));
            }
          }
        }

        return this._cachedDomPagingControlLoadMore;
      },
      /**
       * Return the Load More link
       * @return {jQuery|null} jQuery a DOM element
       * @private
       */
      _getPagingControlLoadMoreLink: function()
      {
        if (!this._cachedDomPagingControlLoadMoreLink)
        {
          var pagingControlLoadMore = this._getPagingControlLoadMore();
          var pagingControlLoadMoreLink = null;
          if (pagingControlLoadMore)
          {
            pagingControlLoadMoreLink = pagingControlLoadMore.children('.' + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_LINK_CLASS);
            if (pagingControlLoadMoreLink && pagingControlLoadMoreLink.length > 0)
            {
              this._cachedDomPagingControlLoadMoreLink = $(pagingControlLoadMoreLink.get(0));
            }
          }
        }

        return this._cachedDomPagingControlLoadMoreLink;
      },
      /**
       * Return the Load More Range
       * @return {jQuery|null} jQuery span DOM element
       * @private
       */
      _getPagingControlLoadMoreRange: function()
      {
        if (!this._cachedDomPagingControlLoadMoreRange)
        {
          var pagingControlLoadMore = this._getPagingControlLoadMore();
          var pagingControlLoadMoreRange = null;
          if (pagingControlLoadMore)
          {
            pagingControlLoadMoreRange = pagingControlLoadMore.children('.' + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_CLASS);
            if (pagingControlLoadMoreRange && pagingControlLoadMoreRange.length > 0)
            {
              this._cachedDomPagingControlLoadMoreRange = $(pagingControlLoadMoreRange.get(0));
            }
          }
        }

        return this._cachedDomPagingControlLoadMoreRange;
      },
      /**
       * Return the paging nav bar
       * @return {jQuery|null} jQuery a DOM element
       * @private
       */
      _getPagingControlNav: function()
      {
        if (!this._cachedDomPagingControlNav)
        {
          var pagingControlContent = this._getPagingControlContent();
          var pagingControlNav = null;
          if (pagingControlContent)
          {
            pagingControlNav = pagingControlContent.children('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_CLASS);
            if (pagingControlNav && pagingControlNav.length > 0)
            {
              this._cachedDomPagingControlNav = $(pagingControlNav.get(0));
            }
          }
        }

        return this._cachedDomPagingControlNav;
      },
      /**
       * Return the paging nav input
       * @return {jQuery|null} jQuery input DOM element
       * @private
       */
      _getPagingControlNavInput: function()
      {
        if (!this._cachedDomPagingControlNavInput)
        {
          var pagingControlNav = this._getPagingControlNav();
          var pagingControlNavInput = null;
          if (pagingControlNav)
          {
            pagingControlNavInput = pagingControlNav.find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS);
            if (pagingControlNavInput && pagingControlNavInput.length > 0)
            {
              this._cachedDomPagingControlNavInput = $(pagingControlNavInput.get(0));
            }
          }
        }

        return this._cachedDomPagingControlNavInput;
      },
      /**
       * Return the paging nav input summary
       * @return {jQuery|null} jQuery input DOM element
       * @private
       */
      _getPagingControlNavInputSummary: function()
      {
        if (!this._cachedDomPagingControlNavInputSummary)
        {
          var pagingControlNav = this._getPagingControlNav();
          var pagingControlNavInputSummary = null;
          if (pagingControlNav)
          {
            pagingControlNavInputSummary = pagingControlNav.find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS);
            if (pagingControlNavInputSummary && pagingControlNavInputSummary.length > 0)
            {
              this._cachedDomPagingControlNavInputSummary = $(pagingControlNavInputSummary.get(0));
            }
          }
        }

        return this._cachedDomPagingControlNavInputSummary;
      },
      /**
       * Return the page links
       * @private
       */
      _getPagingControlNavPageLinks: function()
      {
        var pagingControlNav = this._getPagingControlNav();
        var pagingControlNavPageLinks = null;
        if (pagingControlNav)
        {
          pagingControlNavPageLinks = pagingControlNav.find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGES_LINKS_CLASS);
          if (pagingControlNavPageLinks && pagingControlNavPageLinks.length > 0)
          {
            pagingControlNavPageLinks = $(pagingControlNavPageLinks.get(0));
          }
        }

        return pagingControlNavPageLinks;
      },
      /**
       * Return the nav arrows
       * @private
       */
      _getPagingControlNavArrowSection: function()
      {
        var pagingControlNav = this._getPagingControlNav();
        var pagingControlNavArrowSection = null;
        if (pagingControlNav)
        {
          pagingControlNavArrowSection = pagingControlNav.find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_SECTION_CLASS);
          if (pagingControlNavArrowSection && pagingControlNavArrowSection.length > 0)
          {
            pagingControlNavArrowSection = $(pagingControlNavArrowSection.get(0));
          }
          else
          {
            return null;
          }
        }

        return pagingControlNavArrowSection;
      }
      ,
      /**
       * Return the nav input section
       * @private
       */
      _getPagingControlNavInputSection: function()
      {
        var pagingControlNav = this._getPagingControlNav();
        var pagingControlNavInputSection = null;
        if (pagingControlNav)
        {
          pagingControlNavInputSection = pagingControlNav.find('.' + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SECTION_CLASS);
          if (pagingControlNavInputSection && pagingControlNavInputSection.length > 0)
          {
            pagingControlNavInputSection = $(pagingControlNavInputSection.get(0));
          }
          else
          {
            return null;
          }
        }

        return pagingControlNavInputSection;
      }
      /**** end internal DOM functions ****/
    })
}());
});
