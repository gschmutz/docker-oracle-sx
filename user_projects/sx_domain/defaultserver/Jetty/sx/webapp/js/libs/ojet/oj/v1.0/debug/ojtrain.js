define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

/**
   * The ojTrain component allows a user to display a navigation visual that allows a user to go between different "steps"
   * Each step can display information about the visited of the step("visited", "unvisited", "disabled")
   * and display a message type("error", "confirmation", "warning", "info", "fatal")
   *
   *
   * @example <caption>Initialize component using widget API</caption>
   * &lt;div id="train"/&gt;<br/>
   * $("#train").ojTrain({'selected': "stp1", 'steps': [{label:'Step One', id:'stp1'},
   * {label:'Step Two', id:'stp2'},{label:'Step Three', id:'stp3'}]});
   * @example <caption>Using knockout, selected bind to observables - selectedStep</caption>
   * &lt;div id="train" data-bind="ojComponent:{component: 'ojTrain', selected: selectedStep, steps:[{label:'Step One', id:'stp1'},
   * {label:'Step Two', id:'stp2'},{label:'Step Three', id:'stp3'}]}"/&gt;gt;
   *
   * @class
   * @constructor
   * @name oj.ojTrain
   * @augments oj.baseComponent
   */
  (function() 
  {
    oj.__registerWidget("oj.ojTrain", $['oj']['baseComponent'], 
	{
      version: "1.0.0",
      defaultElement: "<div>",
      widgetEventPrefix: "oj",
      options: {
        /**
         * The array of step objects. Each step must have an 'id' and 'label' variable, optional additonal variables are:
         * 'disabled' - Indicates if the step is selectable. 'disabled' is a boolean type with a default value of false.
         * 'visited' - Indicates if the step has been visited. 'visited' is a boolean type with a default value of false.
         * 'messageType' - The messageType icon to display on the step. Possible options are 'confirmation', 'info', 'error', 'fatal', or 'warning'. Default value is null.
         * @expose
         * @public
         * @instance
         * @memberof! oj.ojTrain
         */
        steps: [],
        /**
         * The selected variable indicates the id of the current selected step.
         * @expose
         * @public
         * @instance
         * @memberof! oj.ojTrain
         */
        selected: "",
        // Events

        /**
         * Fired whenever a supported component option changes, whether due to user interaction or programmatic
         * intervention.  If the new value is the same as the previous value, no event will be fired.
         *
         * Currently there is one supported option, <code class="prettyprint">"selected"</code>.  Additional
         * options may be supported in the future, so listeners should verify which option is changing
         * before taking any action.
         *
         * @expose
         * @event
         * @memberof! oj.ojTrain
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {string} ui.option the name of the option that is changing
         * @property {string} ui.previousValue the previous value of the option
         * @property {string} ui.value the current value of the option
         * @property {Object} ui.optionMetadata information about the option that is changing
         * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
         *           <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
         *
         */
        optionChange: null,
        /**
         * Triggered immediately before a step is deselected.
         * The beforeDeselect can be cancelled by calling <code class="prettyprint">event.
         
         Default()</code>.
         *
         * @expose 
         * @event 
         * @memberof! oj.ojTrain
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {jQuery} ui.toStep The step that is about to be deselected.
         * @property {jQuery} ui.fromStep The step that is about to be selected.
         * 
         * @example <caption>Initialize the train with the <code class="prettyprint">beforeDeselect</code> callback specified:</caption>
         * $( ".deselector" ).ojTrain({
         *     "beforeDeselect": function( event, ui ) {}
         * });
         *
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforedeselect</code> event:</caption>
         * $( ".deselector" ).on( "ojbeforedeselect", function( event, ui ) {} );
         */
        beforeDeselect: null,
        /**
         * Triggered after a step has been deselected.
         * The deselect can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
         *
         * @expose 
         * @event 
         * @memberof! oj.ojTrain
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {jQuery} ui.toStep The step that is about to be deselected.
         * @property {jQuery} ui.fromStep The step that is about to be selected.
         * 
         * @example <caption>Initialize the train with the <code class="prettyprint">deselect</code> callback specified:</caption>
         * $( ".deselector" ).ojTrain({
         *     "deselect": function( event, ui ) {}
         * });
         *
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojdeselect</code> event:</caption>
         * $( ".deselector" ).on( "ojdeselect", function( event, ui ) {} );
         */
        deselect: null,
        /**
         * Triggered immediately before a Step is selected.
         * The beforeSelect can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
         *
         * @expose 
         * @event 
         * @memberof! oj.ojTrain
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {jQuery} ui.toStep The step that is about to be deselected.
         * @property {jQuery} ui.fromStep The step that is about to be selected.
         * 
         * @example <caption>Initialize the train with the <code class="prettyprint">beforeSelect</code> callback specified:</caption>
         * $( ".selector" ).ojTrain({
         *     "beforeSelect": function( event, ui ) {}
         * });
         *
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeselect</code> event:</caption>
         * $( ".selector" ).on( "ojbeforeselect", function( event, ui ) {} );
         */
        beforeSelect: null,
        /**
         * Triggered after a step has been selected.
         *
         * @expose 
         * @event 
         * @memberof! oj.ojTrain
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {jQuery} ui.toStep The step that is about to be deselected.
         * @property {jQuery} ui.fromStep The step that is about to be selected.
         * 
         * @example <caption>Initialize the train with the <code class="prettyprint">select</code> callback specified:</caption>
         * $( ".selector" ).ojTrain({
         *     "select": function( event, ui ) {}
         * });
         *
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
         * $( ".selector" ).on( "ojselect", function( event, ui ) {} );
         */
        select: null
      },
	  
      /**
       * Variable for storing the number of steps in the train
       *
       * @private
       */
      _stepNum: 0,
	  
      /**
       * Variable for storing the train information about each step in 2D Array form
       *
       * @private
       */
      _stepArray: null,
	  
      /**
       * _create contains all actions that are needed fo the initialization of the train and is only called once.
       *
       * @override
       * @private
       */
      _ComponentCreate: function() {
        this._super();
        
        // Constrain initial value
        var options = this.options;
        var steps = options.steps;
        this._stepNum = steps.length;
	
        // Train Wrapper
        this._wrapper = $("<div class='oj-train-wrapper'></div>");
        this._wrapper.appendTo(this.element);
        
        this._connectorWrapper = $("<div class='oj-train-connector-wrapper'></div>");
        this._connectorWrapper.appendTo(this._wrapper);
        
        this._stretch = this.element.attr('class').indexOf("oj-train-stretch") >=0 ? true : false;
        if(this._stretch)
            this._connectorWrapper.css("padding", "0 " + 100 / (this._stepNum *2) + "%");
		
        // Draw the connector bar  for the train
        this._connector = $("<div class='oj-train-connector'></div>");
        this._connector.appendTo(this._connectorWrapper);
		
        this._stepList = $("<ul>");
        this._stepList.addClass('oj-train-step-list');
        

        // Initialize the background progressbar object that will be updated to have the correct width based on the current step.
        this._connectorFill = $("<div class='oj-train-connector-fill'></div>");
        this._connectorFill.appendTo(this._connectorWrapper);

        // Setup array that stores train information for each step.
        this._setupArray();
        this._selectedIndex = this._getStepIndex(options.selected);
        if (this._selectedIndex === -1)
        {
          this._selectedIndex = 0;
          options.selected = steps[0]['id'];
        }

        // Draw each step. Visually each step consists of a background circle, a button, an icon, and a label.
        for (var i = 0; i < this._stepNum; i++)
        {
          // Create a list item to store each step.
          var stepTag = $("<li>")
		          .addClass("oj-train-step-list-item")
                  .attr({'id': this._stepArray[i][1]})              
          stepTag.appendTo(this._stepList);
          this._drawLabel(i);
          this._drawStepFill(i);
          this._drawButton(i);
          this._drawMessageType(i);
          if(this._stretch)
            stepTag.css("width", 100 / (this._stepNum) + "%");  
        }
        // Update background progressbar width to show the progress.
        var connectorFillWidth = this._stepNum - 1 === this._selectedIndex ? 100 : (100/ (2 *(this._stepNum - 1)) + this._selectedIndex / (this._stepNum - 1) * 100)
        this._connectorFill.css({'width':  connectorFillWidth + "%"});
        this._stepList.appendTo(this._wrapper);
        this.element.addClass("oj-train");
      },
	  
	  
      /**
       * Set up the _stepArray(). The first dimension indicates the step index and the second dimension indicates the step variables.
       * The order of the step variables are: label, id, selection, visited, messageType
       *
       * @private
       */
      _setupArray: function() {
        var options = this.options;
        this._stepArray = [];
        for (var i = 0; i < this._stepNum; i++) {
          var step = options.steps[i];
          this._stepArray[i] = new Array(5);
          this._stepArray[i][0] = step['label'] ? step['label'] : null;
          this._stepArray[i][1] = step['id'] ? step['id'] : null;
          this._stepArray[i][2] = step['disabled'] ? true : false;
          this._stepArray[i][3] = step['visited'] ? true : false;
          this._stepArray[i][4] = step['messageType'] ? step['messageType'] : null;
        }
      },
	  
      /**
       * Draw the button object for the step based on the index. If a button for that step alread exists remove it and draw the new one.
       * @param {number} index - The index of the step for which the button is being drawn.
       *
       * @private
       */
      _drawButton: function(index)
      {
        var button = $("<div/>")
             .addClass("oj-train-button");
        var scrnRead = $("<span/>");
        var self = this;
        var desc = "";
        if (this._stepArray[index])
        {
          var visited = this._stepArray[index][3];
          var disabled = this._stepArray[index][2];
          if (this._selectedIndex === index) {
            button.addClass("oj-selected");
            desc = " current ";
          }
          else
          {
            if (visited && !disabled) {
              button.addClass("oj-visited");
              desc = " visited ";
            }
            else if (!visited && !disabled) {
              button.addClass("oj-default");
              desc = " not visited ";
            }
            else
              button.addClass("oj-disabled");
          }

          if (!this._stepArray[index][2] && this._selectedIndex !== index) {
            this._hoverable(button);
            button.on("click" + this.eventNamespace, function() {
              var oldStepId = self.options.selected;
              self.options.selected = this.parentNode.parentNode.id;
              self._fireOptionChange("selected", oldStepId, this.parentNode.parentNode.id, true);
              self.refresh();
            });
          };
          var stepBackground = this._stepList.children().eq(index).find('.oj-train-button-connector');

          // Check that there are at least 3 items in the list item indicating that a button has already been created for this step.
          // If there is remove it and insert the new button in the same position. If there isn't a preexsisting button, simply add one.
          if (stepBackground.length >= 1) {
            stepBackground.children().remove();
            stepBackground.append(button);
          }
          else
             stepBackground.append(button);
          scrnRead.text(desc);
          scrnRead.addClass("oj-helper-hidden-accessible");
          this._stepList.children().eq(index).find('a').append(scrnRead);
        }
      },
	  
      /**
       * Draw the icon that displays the messageType for the step based on the index. If there already is an icon remove it and draw the new one.
       * @param {number} index - The index of the step for which the icon is being drawn.
       *
       * @private
       */
      _drawMessageType: function(index)
      {
        var icon = $("<div/>")
		     .addClass("oj-train-icon");
        var scrnRead = $("<span/>");
        var desc = "";
        var self = this;
        if (this._stepArray[index])
        {
          var messageType = this._stepArray[index][4];
          if (messageType === "confirmation") {
            icon.addClass("oj-confirmation");
            desc = " Confirmation ";
          }
          else if (messageType === "info") {
            icon.addClass("oj-info");
            desc = " Info ";
          }
          else if (messageType === "error") {
            icon.addClass("oj-error");
            desc = " Error ";
          }
          else if (messageType === "fatal") {
            icon.addClass("oj-error");
            desc = " Error ";
          }
          else if (messageType === "warning") {
            icon.addClass("oj-warning");
            desc = " Warning ";
          }

          // Remove previous messageType
          var button = this._stepList.children().eq(index).find('.oj-train-button');
          if (button.children().length >= 1) {
            button.children().remove();
          }
          // Make icon clickable
          if (!this._stepArray[index][2] && this._selectedIndex !== index) {
            this._hoverable(icon);
            icon.on("click" + this.eventNamespace, function() {
              var oldStepId = self.options.selected;
              self._fireOptionChange("selected", oldStepId, this.parentNode.parentNode.parentNode.id, true);
              self.refresh();
            });
          }
          // Add new message
          if (messageType != null) {
            // If there is remove it and insert the new icon in the same position.
            // Add description to span
            scrnRead.text(desc);
            scrnRead.addClass("oj-helper-hidden-accessible");
            this._stepList.children().eq(index).find('a').append(scrnRead);
            button.append(icon);

          }
        }
      },
	  
      /**
       * Fire optionChange event 
       * @param {String} key - 'selected'
       * @param {String} previousValue 
       * @param {String} value
       * @param {Boolean} originalEvent  
       *
       * @private
       */
      _fireOptionChange: function(key, previousValue, value, originalEvent)
      {

        var optionChangeData = {
          "option": key,
          "previousValue": previousValue,
          "value": value,
          // (originalEvent is non-null) iff (option change is due to user interaction) iff (binding should write back the value)
          "optionMetadata": {'writeback': originalEvent ? "shouldWrite" : "shouldNotWrite"}
        };
        var eventData = {
          "option": key,
          "fromStep": this.getStep(previousValue),
          "toStep": this.getStep(value),
          // (originalEvent is non-null) iff (option change is due to user interaction) iff (binding should write back the value)
          "optionMetadata": {'writeback': originalEvent ? "shouldWrite" : "shouldNotWrite"}
        };
        if(this._trigger("beforeDeselect", null, eventData) === false || this._trigger("beforeSelect", null, eventData) === false)
          return;
        
        // Set the previous step to visited
        var stepIndex = this._getStepIndex(previousValue);
        if( stepIndex !== -1) {
          var oldStepProperties = this.options.steps[stepIndex];
          oldStepProperties['visited'] = true;
        }
        
        this._trigger("deselect", null, eventData);
        this.options.selected = value;
        this._trigger("select", null, eventData);
        
        this._trigger('optionChange', originalEvent, optionChangeData);

      },
	  
      /**
       * Draw the background circle for the step which is either light or dark base on if the step is before or after the selected step.
       * @param {number} index - The index of the step for which the icon is being drawn.
       *
       * @private
       */
      _drawStepFill: function(index)
      {
        var stepFill = $("<div/>");
        stepFill.addClass("oj-train-button-connector");
        if (this._stepArray[index])
        {
          if (index <= this._selectedIndex)
            stepFill.addClass("oj-train-fill");
          var stepLi = this._stepList.children().eq(index).children();
          stepFill.insertBefore(stepLi);
        }
      },
	  
      /**
       * Draw the label for the step.
       * @param {number} index - The index of the step for which the icon is being drawn.
       *
       * @private
       */
      _drawLabel: function(index)
      {
        var self = this;
        if (this._stepArray[index])
        {
          var labelWrapper = $("<div/>")
		            .addClass("oj-train-label-wrapper");
          var label = $("<a>" + this._stepArray[index][0] + "</a>");
          labelWrapper.append(label);
          label.addClass("oj-train-label");
          if (index === this._selectedIndex)
            label.addClass("oj-selected");
          else if (this._stepArray[index][3])
            label.addClass("oj-visited");
          else if (this._stepArray[index][2])
            label.addClass("oj-disabled");
          if (!this._stepArray[index][2] && this._selectedIndex !== index) {
            label.attr("href", "#");
            this._hoverable(label);
            label.on("click keydown" + this.eventNamespace,
							 /**
							 * @suppress {missingProperties}
							 */
                            function(event) {
                              if (event.keyCode === $.ui.keyCode.ENTER || event.type === "click") {
                                event.preventDefault();
                                var oldStepId = self.options.selected;
                                self._fireOptionChange("selected", oldStepId, this.parentNode.parentNode.id, true);
                                self.refresh();
                              }
                            });
                  }
          var stepLi = this._stepList.children().eq(index).children();
          if (stepLi.length >= 1)
            stepLi[0].remove();
          this._stepList.children().eq(index).append(labelWrapper);
        }
      },
	  
      /**
       * Return the index of the step
       * @param {String} id - The index of the id whose id is being passed in.
       * @return {number} index of step. -1 for not valid ids.
       * @private
       */
      _getStepIndex: function(id)
      {
        for (var i = 0; i < this._stepNum; i++) {
          if (this._stepArray[i] && this._stepArray[i][1] === id)
            return i;
        }
        return -1;
      },
	  
      /**
       * <p>Returns the step based on the id passed in. If the step doesn't exist, return null;</p>
       * @public
       * @param {String} id - The id of the step.
       * @return {Object} step object.
       * @expose
       * @instance
       * @memberof! oj.ojTrain
       */
      getStep: function(id)
      {
        for (var i = 0; i < this._stepNum; i++) {
          if (this._stepArray[i] && this._stepArray[i][1] === id)
            return jQuery.extend({}, this.options.steps[i]);
        }
        return null;
      },
	  
      /**
       * <p>Returns the id of the next selectable step based on the selected id. If the current step is the last selectable step, returns null</p>
       * @public
       * @return {String} next selectable Id
       * @expose
       * @instance
       * @memberof! oj.ojTrain
       */
      nextSelectableStep: function()
      {
        for (var i = this._selectedIndex; i < this._stepNum; i++) {
          if (i + 1 < this._stepNum && this._stepArray[i + 1] && !this._stepArray[i + 1][2])
          {
            return this._stepArray[i + 1][1];
          }
        }
        return null;

      },
	  
      /**
       * <p>Returns the id of the previous selectable step based on the selected id. If the current step is the first selectable step, returns null</p>
       * @public
       * @return {String} previous selectable Id
       * @expose
       * @instance
       * @memberof! oj.ojTrain
       */
      previousSelectableStep: function()
      {
        for (var i = this._selectedIndex; i >= 0; i--) {
          if (this._stepArray[i - 1] && !this._stepArray[i - 1][2])
          {
            return this._stepArray[i - 1][1];
          }
        }
        return null;
      },
	  
      /**
       * <p>Sets the properties for the step. Takes in the object conatining the properties for the step.</p>
       * @public
       * @param {Object} stepProperties - The property bag to overwrite properties on the step.
       * @expose
       * @instance
       * @memberof! oj.ojTrain
       */
      setStep: function(stepProperties)
      {

        if (stepProperties['id'])
        {
          var stepInfo = this.getStep(stepProperties['id']);
          var stepIndex = this._getStepIndex(stepProperties['id']);
          if(stepIndex !== -1)
          {
            var stepObj = this.options.steps[stepIndex];
            if (stepProperties['label'])
            {
                  stepInfo[0] = stepProperties['label'];
                  stepObj['label'] = stepProperties['label'];
            }
            if (typeof (stepProperties['disabled']) === 'boolean')
            {
                  stepInfo[2] = stepProperties['disabled'];
                  stepObj['disabled'] = stepProperties['disabled'];
            }
            if (typeof (stepProperties['visited']) === 'boolean')
            {
                  stepInfo[3] = stepProperties['visited'];
                  stepObj['visited'] = stepProperties['visited'];
            }
            if (stepProperties['messageType'])
            {
              stepInfo[4] = stepProperties['messageType'];
              stepObj['messageType'] = stepProperties['messageType'];
            }
          }
        }
      },
      _setOption: function(key, value, flags) {
        if (key === "selected")
        {
          var oldValue = this.options.selected;
          this.options.selected = value;
          if (oldValue)
            this._fireOptionChange("selected", oldValue, value, true);
        }
        this._super(key, value, flags);
      },
      _setOptions: function(options) {
        this._super(options);
        this.refresh();
      },
	  
      /**
       * Refreshes the train.
       *
       * <p>This method does not accept any arguments.</p>
       * 
       * @expose 
       * @memberof! oj.ojTrain
       * @instance
       */
      refresh: function()
      {
        this._super();
        this._destroy();
        this._ComponentCreate();
      },
	  
      /**
       * @override
       * @private
       */
      _destroy: function()
      {
        this.element.removeClass("oj-train oj-train-bar oj-train-wrapper oj-train-connector-wrapper oj-train-connector oj-train-connector-fill oj-train-fill oj-component-initnode");
        this._wrapper.remove();
        this._connectorWrapper.remove();
        this._connector.remove();
        this._connectorFill.remove();
        this._stepList.remove();
        this._stepList.children().each(function() {
          $(this).remove();
        })
        this._super();
      },
	  
      /**
       * Return the subcomponent node represented by the documented locator attribute values.
       *
       * 
       *      *
       * Test authors should target sub elements using the following names:
       * <ul>
       * <li><b>oj-train-button</b>: train step button </li>
       * <li><b>oj-train-button-connector</b>: train step button connector background </li>
       * <li><b>oj-train-connector</b>: train connector bar </li>
       * <li><b>oj-train-connector-fill</b>: train connector fill indicating progress </li>
       * <li><b>oj-train-icon</b>: train step message icon </li>
       * <li><b>oj-train-label</b>: train step label </li>
       * </ul>
       *
       * @expose
       * @override
       * @memberof! oj.ojTrain
       * @instance
       * @param {Object} locator An Object containing at minimum a subId property 
       * whose value is a string, documented by the component, that allows the component to 
       * look up the subcomponent associated with that string.  It contains:
       * <ul>
       * <li>
         index: a number, the index of train.
       * </li>
       * <li>
       * subId: the string, documented by the component, that the component expects 
       * in getNodeBySubId to locate a particular subcomponent 
       * </li>
       * </ul>  
       * @returns {Element|null} the subcomponent located by the subId string 
       * passed in locator, if found.
       */
      getNodeBySubId: function(locator)
      {

        if (locator === null)
        {
          return this.element ? this.element[0] : null;
        }

      var subId = locator['subId'],
          index = locator['index'];

      if ((typeof index !== 'number') ||
           index < 0 || index >= this._stepNum)
        return null;

      switch (subId)
      {
      case 'oj-train-button':
        return this._stepList.children().eq(index).find('.oj-train-button');

      case 'oj-train-button-connector':
        return this._stepList.children().eq(index).find('.oj-train-button-connector');

      case 'oj-train-connector':
        return this._connector;

      case 'oj-train-connector-fill':
        return this._connectorFill;

      case 'oj-train-icon':
        return this._stepList.children().eq(index).find('.oj-train-icon');
        
      case 'oj-train-label':
        return this._stepList.children().eq(index).find('.oj-train-button');
      }

      // Non-null locators have to be handled by the component subclasses
      return null;
    }
      
    });
  }
());
});
