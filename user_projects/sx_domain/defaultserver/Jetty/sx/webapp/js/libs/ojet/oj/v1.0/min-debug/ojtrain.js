define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$36$$, $$$$35$$) {
  (function() {
    $oj$$36$$.$__registerWidget$("oj.ojTrain", $$$$35$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{steps:[], selected:"", optionChange:null, beforeDeselect:null, deselect:null, beforeSelect:null, select:null}, $_stepNum$:0, $_stepArray$:null, _ComponentCreate:function() {
      this._super();
      var $i$$307_options$$329$$ = this.options, $stepTag_steps$$4$$ = $i$$307_options$$329$$.steps;
      this.$_stepNum$ = $stepTag_steps$$4$$.length;
      this.$_wrapper$ = $$$$35$$("\x3cdiv class\x3d'oj-train-wrapper'\x3e\x3c/div\x3e");
      this.$_wrapper$.appendTo(this.element);
      this.$_connectorWrapper$ = $$$$35$$("\x3cdiv class\x3d'oj-train-connector-wrapper'\x3e\x3c/div\x3e");
      this.$_connectorWrapper$.appendTo(this.$_wrapper$);
      (this.$_stretch$ = 0 <= this.element.attr("class").indexOf("oj-train-stretch") ? !0 : !1) && this.$_connectorWrapper$.css("padding", "0 " + 100 / (2 * this.$_stepNum$) + "%");
      this.$_connector$ = $$$$35$$("\x3cdiv class\x3d'oj-train-connector'\x3e\x3c/div\x3e");
      this.$_connector$.appendTo(this.$_connectorWrapper$);
      this.$_stepList$ = $$$$35$$("\x3cul\x3e");
      this.$_stepList$.addClass("oj-train-step-list");
      this.$_connectorFill$ = $$$$35$$("\x3cdiv class\x3d'oj-train-connector-fill'\x3e\x3c/div\x3e");
      this.$_connectorFill$.appendTo(this.$_connectorWrapper$);
      this.$_setupArray$();
      this.$_selectedIndex$ = this.$_getStepIndex$($i$$307_options$$329$$.selected);
      -1 === this.$_selectedIndex$ && (this.$_selectedIndex$ = 0, $i$$307_options$$329$$.selected = $stepTag_steps$$4$$[0].id);
      for ($i$$307_options$$329$$ = 0;$i$$307_options$$329$$ < this.$_stepNum$;$i$$307_options$$329$$++) {
        $stepTag_steps$$4$$ = $$$$35$$("\x3cli\x3e").addClass("oj-train-step-list-item").attr({id:this.$_stepArray$[$i$$307_options$$329$$][1]}), $stepTag_steps$$4$$.appendTo(this.$_stepList$), this.$_drawLabel$($i$$307_options$$329$$), this.$_drawStepFill$($i$$307_options$$329$$), this.$_drawButton$($i$$307_options$$329$$), this.$_drawMessageType$($i$$307_options$$329$$), this.$_stretch$ && $stepTag_steps$$4$$.css("width", 100 / this.$_stepNum$ + "%");
      }
      this.$_connectorFill$.css({width:(this.$_stepNum$ - 1 === this.$_selectedIndex$ ? 100 : 100 / (2 * (this.$_stepNum$ - 1)) + this.$_selectedIndex$ / (this.$_stepNum$ - 1) * 100) + "%"});
      this.$_stepList$.appendTo(this.$_wrapper$);
      this.element.addClass("oj-train");
    }, $_setupArray$:function() {
      var $options$$330$$ = this.options;
      this.$_stepArray$ = [];
      for (var $i$$308$$ = 0;$i$$308$$ < this.$_stepNum$;$i$$308$$++) {
        var $step$$2$$ = $options$$330$$.steps[$i$$308$$];
        this.$_stepArray$[$i$$308$$] = Array(5);
        this.$_stepArray$[$i$$308$$][0] = $step$$2$$.label ? $step$$2$$.label : null;
        this.$_stepArray$[$i$$308$$][1] = $step$$2$$.id ? $step$$2$$.id : null;
        this.$_stepArray$[$i$$308$$][2] = $step$$2$$.disabled ? !0 : !1;
        this.$_stepArray$[$i$$308$$][3] = $step$$2$$.visited ? !0 : !1;
        this.$_stepArray$[$i$$308$$][4] = $step$$2$$.messageType ? $step$$2$$.messageType : null;
      }
    }, $_drawButton$:function($index$$197$$) {
      var $button$$1$$ = $$$$35$$("\x3cdiv/\x3e").addClass("oj-train-button"), $scrnRead$$ = $$$$35$$("\x3cspan/\x3e"), $self$$139$$ = this, $desc$$ = "";
      if (this.$_stepArray$[$index$$197$$]) {
        var $stepBackground_visited$$ = this.$_stepArray$[$index$$197$$][3], $disabled$$7$$ = this.$_stepArray$[$index$$197$$][2];
        this.$_selectedIndex$ === $index$$197$$ ? ($button$$1$$.addClass("oj-selected"), $desc$$ = " current ") : $stepBackground_visited$$ && !$disabled$$7$$ ? ($button$$1$$.addClass("oj-visited"), $desc$$ = " visited ") : $stepBackground_visited$$ || $disabled$$7$$ ? $button$$1$$.addClass("oj-disabled") : ($button$$1$$.addClass("oj-default"), $desc$$ = " not visited ");
        this.$_stepArray$[$index$$197$$][2] || this.$_selectedIndex$ === $index$$197$$ || (this._hoverable($button$$1$$), $button$$1$$.on("click" + this.eventNamespace, function() {
          var $oldStepId$$ = $self$$139$$.options.selected;
          $self$$139$$.options.selected = this.parentNode.parentNode.id;
          $self$$139$$.$_fireOptionChange$("selected", $oldStepId$$, this.parentNode.parentNode.id, !0);
          $self$$139$$.refresh();
        }));
        $stepBackground_visited$$ = this.$_stepList$.children().eq($index$$197$$).find(".oj-train-button-connector");
        1 <= $stepBackground_visited$$.length && $stepBackground_visited$$.children().remove();
        $stepBackground_visited$$.append($button$$1$$);
        $scrnRead$$.text($desc$$);
        $scrnRead$$.addClass("oj-helper-hidden-accessible");
        this.$_stepList$.children().eq($index$$197$$).find("a").append($scrnRead$$);
      }
    }, $_drawMessageType$:function($index$$198$$) {
      var $icon$$4$$ = $$$$35$$("\x3cdiv/\x3e").addClass("oj-train-icon"), $scrnRead$$1$$ = $$$$35$$("\x3cspan/\x3e"), $desc$$1$$ = "", $self$$140$$ = this;
      if (this.$_stepArray$[$index$$198$$]) {
        var $messageType$$ = this.$_stepArray$[$index$$198$$][4];
        "confirmation" === $messageType$$ ? ($icon$$4$$.addClass("oj-confirmation"), $desc$$1$$ = " Confirmation ") : "info" === $messageType$$ ? ($icon$$4$$.addClass("oj-info"), $desc$$1$$ = " Info ") : "error" === $messageType$$ ? ($icon$$4$$.addClass("oj-error"), $desc$$1$$ = " Error ") : "fatal" === $messageType$$ ? ($icon$$4$$.addClass("oj-error"), $desc$$1$$ = " Error ") : "warning" === $messageType$$ && ($icon$$4$$.addClass("oj-warning"), $desc$$1$$ = " Warning ");
        var $button$$2$$ = this.$_stepList$.children().eq($index$$198$$).find(".oj-train-button");
        1 <= $button$$2$$.children().length && $button$$2$$.children().remove();
        this.$_stepArray$[$index$$198$$][2] || this.$_selectedIndex$ === $index$$198$$ || (this._hoverable($icon$$4$$), $icon$$4$$.on("click" + this.eventNamespace, function() {
          $self$$140$$.$_fireOptionChange$("selected", $self$$140$$.options.selected, this.parentNode.parentNode.parentNode.id, !0);
          $self$$140$$.refresh();
        }));
        null != $messageType$$ && ($scrnRead$$1$$.text($desc$$1$$), $scrnRead$$1$$.addClass("oj-helper-hidden-accessible"), this.$_stepList$.children().eq($index$$198$$).find("a").append($scrnRead$$1$$), $button$$2$$.append($icon$$4$$));
      }
    }, $_fireOptionChange$:function($eventData$$17_key$$121$$, $previousValue$$11_stepIndex$$, $value$$226$$, $originalEvent$$7$$) {
      var $optionChangeData$$ = {option:$eventData$$17_key$$121$$, previousValue:$previousValue$$11_stepIndex$$, value:$value$$226$$, optionMetadata:{writeback:$originalEvent$$7$$ ? "shouldWrite" : "shouldNotWrite"}};
      $eventData$$17_key$$121$$ = {option:$eventData$$17_key$$121$$, fromStep:this.getStep($previousValue$$11_stepIndex$$), toStep:this.getStep($value$$226$$), optionMetadata:{writeback:$originalEvent$$7$$ ? "shouldWrite" : "shouldNotWrite"}};
      !1 !== this._trigger("beforeDeselect", null, $eventData$$17_key$$121$$) && !1 !== this._trigger("beforeSelect", null, $eventData$$17_key$$121$$) && ($previousValue$$11_stepIndex$$ = this.$_getStepIndex$($previousValue$$11_stepIndex$$), -1 !== $previousValue$$11_stepIndex$$ && (this.options.steps[$previousValue$$11_stepIndex$$].visited = !0), this._trigger("deselect", null, $eventData$$17_key$$121$$), this.options.selected = $value$$226$$, this._trigger("select", null, $eventData$$17_key$$121$$), 
      this._trigger("optionChange", $originalEvent$$7$$, $optionChangeData$$));
    }, $_drawStepFill$:function($index$$199_stepLi$$) {
      var $stepFill$$ = $$$$35$$("\x3cdiv/\x3e");
      $stepFill$$.addClass("oj-train-button-connector");
      this.$_stepArray$[$index$$199_stepLi$$] && ($index$$199_stepLi$$ <= this.$_selectedIndex$ && $stepFill$$.addClass("oj-train-fill"), $index$$199_stepLi$$ = this.$_stepList$.children().eq($index$$199_stepLi$$).children(), $stepFill$$.insertBefore($index$$199_stepLi$$));
    }, $_drawLabel$:function($index$$200$$) {
      var $self$$141$$ = this;
      if (this.$_stepArray$[$index$$200$$]) {
        var $labelWrapper$$ = $$$$35$$("\x3cdiv/\x3e").addClass("oj-train-label-wrapper"), $label$$7_stepLi$$1$$ = $$$$35$$("\x3ca\x3e" + this.$_stepArray$[$index$$200$$][0] + "\x3c/a\x3e");
        $labelWrapper$$.append($label$$7_stepLi$$1$$);
        $label$$7_stepLi$$1$$.addClass("oj-train-label");
        $index$$200$$ === this.$_selectedIndex$ ? $label$$7_stepLi$$1$$.addClass("oj-selected") : this.$_stepArray$[$index$$200$$][3] ? $label$$7_stepLi$$1$$.addClass("oj-visited") : this.$_stepArray$[$index$$200$$][2] && $label$$7_stepLi$$1$$.addClass("oj-disabled");
        this.$_stepArray$[$index$$200$$][2] || this.$_selectedIndex$ === $index$$200$$ || ($label$$7_stepLi$$1$$.attr("href", "#"), this._hoverable($label$$7_stepLi$$1$$), $label$$7_stepLi$$1$$.on("click keydown" + this.eventNamespace, function($event$$389$$) {
          if ($event$$389$$.keyCode === $$$$35$$.ui.keyCode.ENTER || "click" === $event$$389$$.type) {
            $event$$389$$.preventDefault(), $self$$141$$.$_fireOptionChange$("selected", $self$$141$$.options.selected, this.parentNode.parentNode.id, !0), $self$$141$$.refresh();
          }
        }));
        $label$$7_stepLi$$1$$ = this.$_stepList$.children().eq($index$$200$$).children();
        1 <= $label$$7_stepLi$$1$$.length && $label$$7_stepLi$$1$$[0].remove();
        this.$_stepList$.children().eq($index$$200$$).append($labelWrapper$$);
      }
    }, $_getStepIndex$:function($id$$44$$) {
      for (var $i$$309$$ = 0;$i$$309$$ < this.$_stepNum$;$i$$309$$++) {
        if (this.$_stepArray$[$i$$309$$] && this.$_stepArray$[$i$$309$$][1] === $id$$44$$) {
          return $i$$309$$;
        }
      }
      return-1;
    }, getStep:function($id$$45$$) {
      for (var $i$$310$$ = 0;$i$$310$$ < this.$_stepNum$;$i$$310$$++) {
        if (this.$_stepArray$[$i$$310$$] && this.$_stepArray$[$i$$310$$][1] === $id$$45$$) {
          return jQuery.extend({}, this.options.steps[$i$$310$$]);
        }
      }
      return null;
    }, nextSelectableStep:function() {
      for (var $i$$311$$ = this.$_selectedIndex$;$i$$311$$ < this.$_stepNum$;$i$$311$$++) {
        if ($i$$311$$ + 1 < this.$_stepNum$ && this.$_stepArray$[$i$$311$$ + 1] && !this.$_stepArray$[$i$$311$$ + 1][2]) {
          return this.$_stepArray$[$i$$311$$ + 1][1];
        }
      }
      return null;
    }, previousSelectableStep:function() {
      for (var $i$$312$$ = this.$_selectedIndex$;0 <= $i$$312$$;$i$$312$$--) {
        if (this.$_stepArray$[$i$$312$$ - 1] && !this.$_stepArray$[$i$$312$$ - 1][2]) {
          return this.$_stepArray$[$i$$312$$ - 1][1];
        }
      }
      return null;
    }, setStep:function($stepProperties$$) {
      if ($stepProperties$$.id) {
        var $stepInfo$$ = this.getStep($stepProperties$$.id), $stepIndex$$1_stepObj$$ = this.$_getStepIndex$($stepProperties$$.id);
        -1 !== $stepIndex$$1_stepObj$$ && ($stepIndex$$1_stepObj$$ = this.options.steps[$stepIndex$$1_stepObj$$], $stepProperties$$.label && ($stepInfo$$[0] = $stepProperties$$.label, $stepIndex$$1_stepObj$$.label = $stepProperties$$.label), "boolean" === typeof $stepProperties$$.disabled && ($stepInfo$$[2] = $stepProperties$$.disabled, $stepIndex$$1_stepObj$$.disabled = $stepProperties$$.disabled), "boolean" === typeof $stepProperties$$.visited && ($stepInfo$$[3] = $stepProperties$$.visited, $stepIndex$$1_stepObj$$.visited = 
        $stepProperties$$.visited), $stepProperties$$.messageType && ($stepInfo$$[4] = $stepProperties$$.messageType, $stepIndex$$1_stepObj$$.messageType = $stepProperties$$.messageType));
      }
    }, _setOption:function($key$$122$$, $value$$227$$, $flags$$40$$) {
      if ("selected" === $key$$122$$) {
        var $oldValue$$ = this.options.selected;
        this.options.selected = $value$$227$$;
        $oldValue$$ && this.$_fireOptionChange$("selected", $oldValue$$, $value$$227$$, !0);
      }
      this._super($key$$122$$, $value$$227$$, $flags$$40$$);
    }, _setOptions:function($options$$331$$) {
      this._super($options$$331$$);
      this.refresh();
    }, refresh:function() {
      this._super();
      this._destroy();
      this._ComponentCreate();
    }, _destroy:function() {
      this.element.removeClass("oj-train oj-train-bar oj-train-wrapper oj-train-connector-wrapper oj-train-connector oj-train-connector-fill oj-train-fill oj-component-initnode");
      this.$_wrapper$.remove();
      this.$_connectorWrapper$.remove();
      this.$_connector$.remove();
      this.$_connectorFill$.remove();
      this.$_stepList$.remove();
      this.$_stepList$.children().each(function() {
        $$$$35$$(this).remove();
      });
      this._super();
    }, getNodeBySubId:function($locator$$31$$) {
      if (null === $locator$$31$$) {
        return this.element ? this.element[0] : null;
      }
      var $index$$201$$ = $locator$$31$$.index;
      if ("number" !== typeof $index$$201$$ || 0 > $index$$201$$ || $index$$201$$ >= this.$_stepNum$) {
        return null;
      }
      switch($locator$$31$$.subId) {
        case "oj-train-button":
          return this.$_stepList$.children().eq($index$$201$$).find(".oj-train-button");
        case "oj-train-button-connector":
          return this.$_stepList$.children().eq($index$$201$$).find(".oj-train-button-connector");
        case "oj-train-connector":
          return this.$_connector$;
        case "oj-train-connector-fill":
          return this.$_connectorFill$;
        case "oj-train-icon":
          return this.$_stepList$.children().eq($index$$201$$).find(".oj-train-icon");
        case "oj-train-label":
          return this.$_stepList$.children().eq($index$$201$$).find(".oj-train-button");
      }
      return null;
    }});
  })();
});
