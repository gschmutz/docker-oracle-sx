define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojmodel','ojs/ojdatacollection-common'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $, compCore)
{

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * @class 
 * @name oj.ojRowExpander
 * @augments oj.baseComponent
 *
 * @classdesc
 * <h3 id="rowexpanderOverview-section">
 *   JET RowExpander Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rowexpanderOverview-section"></a>
 * </h3>
 * <p>Description: A JET RowExpander is a component that is primarily used inside the JET Table and JET DataGrid widgets.  It enables hierarchical data to be display in a JET Table and JET DataGrid.</p>
 *
 * <p>To enable expand and collapse of rows, developers must specify oj.FlattenedTreeTableDataSource as data when used within JET Table and oj.FlattenedTreeDataGridDataSource as data when used within JET DataGrid.</p>
 *
 * <h3 id="keyboard-section">
 *   Keyboard End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Use</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>Ctrl+Right Arrow</kbd></td>
 *       <td>Expand the currently focused row that contains a row expander.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+Left Arrow</kbd></td>
 *       <td>Collapse the currently focused row that contains a row expander.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>The location of the row expander will be reversed in RTL reading direction.</p>
 * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the component containing the row expander (JET Table or JET DataGrid) must be <code class="prettyprint">refresh()</code>ed.  
 */
oj.__registerWidget('oj.ojRowExpander', $['oj']['baseComponent'],
{
    version: "1.0.0",
    widgetEventPrefix: 'oj',
    options:
            {
                /**
                 * The context object obtained from the column renderer (Table) or cell renderer (DataGrid)
                 * 
                 * @expose 
                 * @memberof! oj.ojRowExpander
                 * @instance
                 * @type {Object}
                 * @default <code class="prettyprint">null</code>
                 * 
                 */
                context: null,
                /**
                 * Triggered when a expand is performed on the row expander
                 *
                 * @expose 
                 * @event 
                 * @memberof! oj.ojRowExpander
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {string} ui.rowKey the key of the row expanded
                 * 
                 * @example <caption>Initialize the row expander with the <code class="prettyprint">expand</code> callback specified:</caption>
                 * $( ".selector" ).ojRowExpander({
                 *     "expand": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpand</code> event:</caption>
                 * $( ".selector" ).on( "ojexpand", function( event, ui ) {} );
                 */
                expand: null,
                /**
                 * Triggered when a collapse is performed on the row expander
                 *
                 * @expose 
                 * @event 
                 * @memberof! oj.ojRowExpander
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {string} ui.rowKey the key of the row collapsed
                 * 
                 * @example <caption>Initialize the row expander with the <code class="prettyprint">collapse</code> callback specified:</caption>
                 * $( ".selector" ).ojRowExpander({
                 *     "collapse": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojcollapse</code> event:</caption>
                 * $( ".selector" ).on( "ojcollapse", function( event, ui ) {} );
                 */
                collapse: null
            },
    classNames:
            {
                'root': 'oj-rowexpander',
                'icon': 'oj-component-icon',
                'clickable': 'oj-clickable-icon-nocontext',
                'expand': 'oj-rowexpander-expand-icon',
                'collapse': 'oj-rowexpander-collapse-icon',
                'leaf': 'oj-rowexpander-leaf-icon',
                'lazyload': 'oj-rowexpander-lazyload-icon',
                'toucharea': 'oj-rowexpander-touch-area',
                'indent': 'oj-rowexpander-indent',
                'iconspacer': 'oj-rowexpander-icon-spacer',
                'depth0': 'oj-rowexpander-depth-0',
                'depth1': 'oj-rowexpander-depth-1',
                'depth2': 'oj-rowexpander-depth-2',
                'depth3': 'oj-rowexpander-depth-3',
                'depth4': 'oj-rowexpander-depth-4',
                'depth5': 'oj-rowexpander-depth-5',
                'depth6': 'oj-rowexpander-depth-6',
                'depth7': 'oj-rowexpander-depth-7'
    },
    constants :{
        MAX_STYLE_DEPTH: 7,
        NUM5_KEY: 53
    },
    /**
     * Create the row expander
     * @override
     * @memberof! oj.ojRowExpander
     * @protected
     */
    _ComponentCreate: function()
    {
        this._super();
        this.element.addClass(this.classNames['root']);
        this._initContent();
    },
    /**
     * Initialize the row expander after creation
     * @private
     */        
    _initContent : function () 
    {
        var self = this, context;
        
        context = this.options['context'];
        this.component = context['component'];
        this.datasource = context['datasource'];

        //root hidden so subtract 1
        this.depth = context['depth'];
        this.iconState = context['state'];
        this.rowKey = context['key'];
        this.index = context['index'];
        this.parentKey = context['parentKey'];

        this._addIndentation();
        this._addIcon();
        this._setIconStateClass();

        if (this.iconState === 'expanded' || this.iconState === 'collapsed')
        {
            $(this.toucharea).on('click', function(event) {
                //prevent scroll to top and # append
                event.preventDefault();
                self._fireExpandCollapse();
            });
            $(this.element).on('keypress', function(event) {
                var code = event.keyCode || event.which;
                if (code === $.ui.keyCode.ENTER || $.ui.keyCode.SPACE)
                {
                    // do expand or collapse
                    self._fireExpandCollapse();
                    // stop browser from for example scrolling the page
                    event.preventDefault();
                    // ensure focus stays
                    event.target.focus();
                }
            });

            // listen for key down event from host component
            if (this.component != null)
            {
                this.handleKeyDownCallback = this._handleKeyDownEvent.bind(this);
                $(this.component.element).on('ojkeydown', this.handleKeyDownCallback);
            }

            // listens for expand and collapse event from flattened datasource
            // this could be due to user clicks, keyboard shortcuts or programmatically
            if (this.datasource != null)
            {
                this.handleExpandCallback = this._handleExpandEvent.bind(this);
                this.handleCollapseCallback = this._handleCollapseEvent.bind(this);

                this.datasource.on("expand", this.handleExpandCallback, this);
                this.datasource.on("collapse", this.handleCollapseCallback, this);
            }
        }

        // listen for active key change event from host component
        if (this.component != null)
        {
            this.handleActiveKeyChangeCallback = this._handleActiveKeyChangeEvent.bind(this);
            $(this.component.element).on('ojactive', this.handleActiveKeyChangeCallback);
        }
    },
    /**
     * Refresh the row expander having made external modifications
     *      
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojRowExpander
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojRowExpander( "refresh" );
     */
    refresh: function()
    {
        this.element.empty();
        this._initContent();
    },
    /**
     * destroy the row expander
     *      
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojRowExpander
     * @instance
     * @private     
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojRowExpander( "destroy" );
     */
    _destroy: function()
    {
        // unregister keydown and active key change handlers
        if (this.component != null)
        {
            $(this.component.element).off('ojkeydown', this.handleKeyDownCallback);
            $(this.component.element).off('ojactive', this.handleActiveKeyChangeCallback);
        }

        // unregister expand/collapse events
        if (this.datasource != null)
        {
            this.datasource.off("expand", this.handleExpandCallback, this);
            this.datasource.off("collapse", this.handleCollapseCallback, this);
        }

        this.removeClass(this.classNames['root']);
        this.element.empty();
    },
    /**
     * Sets a single option value
     * @param {Object} key the option key
     * @param {Object} value the option value
     * @param {Object} flags additional flags for option* 
     * @override
     * @private
     */
    _setOption: function(key, value, flags)
    {
        this._super(key, value, flags);
        // refresh if context is updated
        if (key == 'context')
        {
            this.refresh();
        }
    },
    /**
     * Add athe indentation spacers to the row 
     * @private	 
     */
    _addIndentation: function()
    {
        var remainder, i, depth;
        //0 index the depth for style purposes
        depth = this.depth-1;
        if (depth < this.constants.MAX_STYLE_DEPTH)
        {
            this._appendSpacer(depth);
        }
        else
        {
            for (i=1; i <= (depth/(this.constants.MAX_STYLE_DEPTH)); i++)
            {
                this._appendSpacer(this.constants.MAX_STYLE_DEPTH);
            }
            remainder = (depth % this.constants.MAX_STYLE_DEPTH);
            if (remainder < this.constants.MAX_STYLE_DEPTH)
            {
                this._appendSpacer(remainder);
            }
        }
    },
    /**
     * Append appropriate spacer based on depth to the row expander
     * @param {number} depth the depth
     * @private
     */
    _appendSpacer: function(depth)
    {
        var spacer = $(document.createElement('span')).addClass(this.classNames['indent']).addClass(this.classNames['depth'+depth]);
        this.element.append(spacer);
    },
    /**
     * Add an icon to the row expander with appropriate class names for a clickable icon.
     * @private	 
     */
    _addIcon: function()
    {
        var iconSpacer = $(document.createElement('div')).addClass(this.classNames['iconspacer']);
        this.toucharea = $(document.createElement('div')).addClass(this.classNames['toucharea']);
        this.icon = $(document.createElement('a')).attr('href', '#').addClass(this.classNames['icon']).addClass(this.classNames['clickable']);
        this.element.append(iconSpacer.append(this.toucharea.append(this.icon)));
    },
    /**
     * Add a class name on the icon
     * @private	 
     * @param {string} classKey the key of the appropriate icon class expand/collapse/leaf
     */
    _addIconClass: function(classKey)
    {
        this.icon.addClass(this.classNames[classKey]);
    },
    /**
     * Remove a class name on the icon
     * @private
     * @param {string} classKey the key of the appropriate icon class expand/collapse/leaf
     */
    _removeIconClass: function(classKey)
    {
        this.icon.removeClass(this.classNames[classKey]);
    },
    /**
     * Set the icon class to the the iconState property
     * @private
     */
    _setIconStateClass: function()
    {
        switch (this.iconState)
        {
            case 'leaf':
                this._removeIconClass('icon');                
                this._removeIconClass('clickable');                
                this._addIconClass('leaf');
                break;
            case 'collapsed':
                this._addIconClass('expand');
                this._ariaExpanded(false);
                break;
            case 'expanded':
                this._addIconClass('collapse');
                this._ariaExpanded(true);
                break;
            case 'loading':
                this._removeIconClass('clickable');                 
                this._addIconClass('lazyload');
                break;
        }

    },
    /**
     * Removes the icon class of the iconState property
     * @private
     */
    _removeIconStateClass: function()
    {
        switch (this.iconState)
        {
            case 'leaf':
                this._removeIconClass('leaf');
                this._addIconClass('icon');   
                this._addIconClass('clickable');                                
                break;
            case 'collapsed':
                this._removeIconClass('expand');
                break;
            case 'expanded':
                this._removeIconClass('collapse');
                break;
            case 'loading':
                this._removeIconClass('lazyload');
                this._addIconClass('clickable');                    
                break;
        }

    },
    /**
     * Handles active key change event from host component (ojDataGrid or ojTable)
     * @param {Event} event
     * @param {Object} ui
     * @private
     */
    _handleActiveKeyChangeEvent: function(event, ui)
    {
        var rowKey, context, state;

        if (ui['activeKey'] != null)
        {
            rowKey = ui['activeKey']['rowKey'];
            // if the event is for this row and the active key change event is triggered
            // by row change and not column change
            if (this.rowKey === rowKey && (ui['previousActiveKey'] == null || ui['previousActiveKey']['row'] != ui['activeKey']['row']))
            {   
                // if the component allows AccessibleContext to be set
                if (this.component._setAccessibleContext)
                {
                    // row context of row expander for screen reader
                    // todo: get index from TreeDataSource as well since that could change
                    context = this.getTranslatedString('accessibleRowDescription', {'level': this.depth, 'num': this.index+1, 'total': this.datasource.getWrappedDataSource().getChildCount(this.parentKey)});
                    // state of row expander for screen reader
                    if (this.iconState === 'collapsed')
                    {
                        state = this.getTranslatedString('accessibleStateCollapsed');
                    }
                    else if (this.iconState === 'expanded')
                    {
                        state = this.getTranslatedString('accessibleStateExpanded');
                    }
                    else
                    {
                        // for leaf node don't read anything
                        state = '';
                    }

                    this.component._setAccessibleContext({'context': context, 'state': state});
                }
            }
        }
    },
    /**
     * Handles keydown event from host component (ojDataGrid or ojTable)
     * @param {Event} event
     * @param {Object} ui
     * @private
     */
    _handleKeyDownEvent: function(event, ui)
    {
        var rowKey, code, context;

        rowKey = ui['rowKey'];
        if (this.rowKey === rowKey)
        {
            code = event.keyCode || event.which;
            // ctrl (or equivalent) is pressed
            if (oj.DomUtils.isMetaKeyPressed(event))
            {
                // Ctrl+Right expands, Ctrl+Left collapse in accordance with WAI-ARIA best practice
                // consume the event as it's processed
                if (code == $.ui.keyCode.RIGHT)
                {
                    this._loading();
                    this.datasource.expand(this.rowKey);
                }
                else if (code == $.ui.keyCode.LEFT)
                {
                    this._loading();
                    this.datasource.collapse(this.rowKey);
                }
                else if (event.altKey && code == this.constants.NUM5_KEY)
                {
                    // read current cell context
                    if (this.component._setAccessibleContext)
                    {
                        context = this.getTranslatedString('accessibleRowDescription', {'level': this.depth, 'num': this.index+1, 'total': this.datasource.getWrappedDataSource().getChildCount(this.parentKey)});
                        this.component._setAccessibleContext({'context': context, 'state': ''});
                    }
                }
            }
        }
    },
    /**
     * Put row expander in a loading state.  This is called during expand/collapse.
     * @private
     */
    _loading: function()
    {
        this._removeIconStateClass();
        this.iconState = 'loading';
        this._setIconStateClass();
    },
    /**
     * Handle an expand event coming from the datasource, 
     * update the icon and the aria-expand property
     * @param {Object} event the expand event from the data source, should contain rowKey
     * @private
     */
    _handleExpandEvent: function(event)
    {
        var rowKey = event['rowKey'];
        if (rowKey === this.rowKey)
        {
            this._removeIconStateClass();
            this.iconState = 'expanded';
            this._setIconStateClass();
            this._ariaExpanded(true);
            this._trigger('expand', null, {'rowKey': rowKey});
        }
    },
    /**
     * Handle a collapse event coming from the datasource, 
     * update the icon and the aria-expand property
     * @param {Object} event the collapse event from the data source, should contain rowKey
     * @private
     */
    _handleCollapseEvent: function(event)
    {
        var rowKey = event['rowKey'];
        if (rowKey === this.rowKey)
        {
            this._removeIconStateClass();
            this.iconState = 'collapsed';
            this._setIconStateClass();
            this._ariaExpanded(false);
            this._trigger('collapse', null, {'rowKey': rowKey});        
        }
    },
    /**
     * Fire the expand or collapse on the datasource and the oj event on the widget 
     * @private
     */
    _fireExpandCollapse: function()
    {
        var state = this.iconState; 

        // show loading icon, note this changes the icon state to 'loading'
        this._loading();
        
        // invoke expand/collapse on datasource
        if (state === 'collapsed')
        {
            this.datasource.expand(this.rowKey);
        }
        else if (state === 'expanded')
        {
            this.datasource.collapse(this.rowKey);
        }
    },
    /**
     * Sets the icon's aria-expanded property to the boolean passed in
     * @param {boolean|null} bool true if expanded false if not
     * @private
     */
    _ariaExpanded: function(bool)
    {
        this.icon.attr('aria-expanded', bool);
    },
    /**
     * Return the subcomponent node represented by the documented locator attribute values.
     * <p>
     * To lookup the expand/collapse icon the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-rowexpander-icon'</li>
     * </ul>          
     *          
     * @expose
     * @memberof! oj.ojRowExpander
     * @instance
     * @override
     * @param {Object} locator An Object containing at minimum a subId property 
     *        whose value is a string, documented by the component, that allows 
     *         the component to look up the subcomponent associated with that 
     *        string.  It contains:<p>
     *        component: optional - in the future there may be more than one 
     *        component contained within a page element<p>
     *        subId: the string, documented by the component, that the component 
     *        expects in getNodeBySubId to locate a particular subcomponent
     * @returns {Array.<(Element|null)>|Element|null} the subcomponent located by the subId string passed
     *          in locator, if found.<p>
     */
    getNodeBySubId: function(locator)
    {
        var subId;
 
        if (locator == null)
        {
          return this.element ? this.element[0] : null;
        }

        subId = locator['subId'];
        if (subId === 'oj-rowexpander-icon')
        {
          return this.icon;
        }
        // Non-null locators have to be handled by the component subclasses
        return null;
    }
});

});
