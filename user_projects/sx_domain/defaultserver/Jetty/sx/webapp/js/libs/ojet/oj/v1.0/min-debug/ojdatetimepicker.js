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
*/
define("ojs/ojcore jquery ojs/ojeditablevalue ojs/ojinputtext ojs/ojvalidation ojs/ojpopup ojs/ojbutton".split(" "), function($oj$$13$$, $$$$13$$) {
  function $disableEnableSpan$$($children$$4$$, $val$$37$$) {
    var $filteredChildren$$ = $children$$4$$.filter("span");
    $val$$37$$ ? $filteredChildren$$.addClass("oj-disabled").removeClass("oj-enabled oj-default") : $filteredChildren$$.removeClass("oj-disabled").addClass("oj-enabled oj-default");
  }
  function $copyTimeOver$$($from$$, $to$$) {
    $to$$.setHours($from$$.getHours());
    $to$$.setMinutes($from$$.getMinutes());
    $to$$.setSeconds($from$$.getSeconds());
    $to$$.setMilliseconds($from$$.getMilliseconds());
    return $to$$;
  }
  function $bindHover$$($dpDiv$$) {
    return $dpDiv$$.delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-calendar td a", "mouseout", function() {
      $$$$13$$(this).removeClass("oj-hover");
    }).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-calendar td a", "mouseover", function() {
      $$$$13$$(this).addClass("oj-hover");
    }).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-calendar td a", "focus", function() {
      $$$$13$$(this).addClass("oj-focus");
    }).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-calendar td a", "blur", function() {
      $$$$13$$(this).removeClass("oj-focus");
    });
  }
  var $yearDisplay$$ = $oj$$13$$.$Validation$.$converterFactory$($oj$$13$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME).createConverter({year:"numeric"});
  $oj$$13$$.$__registerWidget$("oj.ojInputDate", $$$$13$$.oj.inputBase, {version:"1.0.0", widgetEventPrefix:"oj", _CLASS_NAMES:"oj-inputdatetime-input", _WIDGET_CLASS_NAMES:"oj-inputdatetime-date-only oj-component oj-inputdatetime", _INPUT_HELPER_KEY:"inputHelp", _ATTR_CHECK:[{attr:"type", setMandatory:"text"}], $_TRIGGER_CLASS$:"oj-inputdatetime-input-trigger", $_TRIGGER_CALENDAR_CLASS$:"oj-inputdatetime-calendar-icon", $_CURRENT_CLASS$:"oj-datepicker-current-day", $_DAYOVER_CLASS$:"oj-datepicker-days-cell-over", 
  $_UNSELECTABLE_CLASS$:"oj-datepicker-unselectable", $_DATEPICKER_DESCRIPTION_ID$:"oj-datepicker-desc", $_CALENDAR_DESCRIPTION_ID$:"oj-datepicker-calendar", $_MAIN_DIV_ID$:"oj-datepicker-div", $_INLINE_CLASS$:"oj-datepicker-inline", $_INPUT_CONTAINER_CLASS$:" oj-inputdatetime-input-container", options:{datePicker:{footerLayout:"", changeMonth:"select", changeYear:"select", currentMonthPos:0, daysOutsideMonth:"hidden", numberOfMonths:1, showOn:"image", stepMonths:"numberOfMonths", stepBigMonths:12, 
  weekDisplay:"none", yearRange:"c-10:c+10"}, converter:$oj$$13$$.$Validation$.$converterFactory$($oj$$13$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME).createConverter({day:"2-digit", month:"2-digit", year:"2-digit"}), max:void 0, min:void 0, dayFormatter:null}, _InitOptions:function($originalDefaults$$8$$, $constructorOptions$$9$$) {
    this._super($originalDefaults$$8$$, $constructorOptions$$9$$);
    $oj$$13$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:!1, validateOption:!0}, {attribute:"title", defaultOptionValue:""}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"value", defaultOptionValue:null}, {attribute:"required", defaultOptionValue:!1, coerceDomValue:!0, validateOption:!0}, {attribute:"min", defaultOptionValue:null}, {attribute:"max", defaultOptionValue:null}], $constructorOptions$$9$$, this);
  }, $_InitBase$:function __InitBase() {
    this.$_triggerNode$ = null;
    this.$_ignoreShow$ = !1;
    this.$_maxRows$ = 4;
    this.$_drawYear$ = this.$_currentYear$ = this.$_drawMonth$ = this.$_currentMonth$ = this.$_currentDay$ = 0;
    this.$_datePickerDefaultValidators$ = {};
    var $nodeName$$2$$ = this.element[0].nodeName.toLowerCase();
    this.$_isInLine$ = "div" === $nodeName$$2$$ || "span" === $nodeName$$2$$;
    this.$_dpDiv$ = $bindHover$$($$$$13$$("\x3cdiv id\x3d'" + this.$_GetSubId$(this.$_MAIN_DIV_ID$) + "' role\x3d'region' aria-describedby\x3d'" + this.$_GetSubId$(this.$_DATEPICKER_DESCRIPTION_ID$) + "' class\x3d'oj-datepicker-content'\x3e\x3c/div\x3e"));
    $$$$13$$("body").append(this.$_dpDiv$);
    if (this.$_isInLine$) {
      this._CLASS_NAMES = "";
    } else {
      this._WIDGET_CLASS_NAMES += this.$_INPUT_CONTAINER_CLASS$;
      var $self$$66$$ = this;
      this.$_popUpDpDiv$ = this.$_dpDiv$.ojPopup({initialFocus:"none", rootAttributes:{"class":"datetimepicker-dropdown"}, open:function() {
        $self$$66$$.$_dpDiv$.find(".oj-datepicker-calendar").focus();
      }});
    }
  }, _ComponentCreate:function __ComponentCreate() {
    this.$_InitBase$();
    var $retVal$$7$$ = this._super();
    this.$_setCurrentDate$(this.$_getDate$());
    this.$_isInLine$ ? (this.element.append(this.$_dpDiv$), this.element.addClass(this.$_INLINE_CLASS$), this.$_dpDiv$.css("display", "block")) : this.$_attachTrigger$();
    return $retVal$$7$$;
  }, $_AfterCreate$:function() {
    var $ret$$20$$ = this._superApply(arguments);
    this.$_disableEnable$(this.options.disabled);
    return $ret$$20$$;
  }, _setOption:function __setOption$$1($key$$71$$, $updateDatePicker_value$$175$$, $flags$$27$$) {
    var $retVal$$8$$ = null, $dateRestrictionOptions_dateTimeRangeOptions$$ = {}, $dateRestrictionOptions_dateTimeRangeOptions$$ = {};
    if ("value" === $key$$71$$) {
      return $updateDatePicker_value$$175$$ || ($updateDatePicker_value$$175$$ = null), $retVal$$8$$ = this._super($key$$71$$, $updateDatePicker_value$$175$$, $flags$$27$$), this.$_setCurrentDate$($updateDatePicker_value$$175$$), this.$_datepickerShowing$() && this.$_updateDatepicker$(), $retVal$$8$$;
    }
    $retVal$$8$$ = this._super($key$$71$$, $updateDatePicker_value$$175$$, $flags$$27$$);
    "disabled" === $key$$71$$ ? this.$_disableEnable$($updateDatePicker_value$$175$$) : "max" === $key$$71$$ || "min" === $key$$71$$ ? ($dateRestrictionOptions_dateTimeRangeOptions$$ = {min:this.options.min, max:this.options.max, converter:this.$_GetConverter$()}, this.$_datePickerDefaultValidators$[$oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE] = $oj$$13$$.$Validation$.$validatorFactory$($oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE).createValidator($dateRestrictionOptions_dateTimeRangeOptions$$), 
    this.$_AfterSetOptionValidators$()) : "readOnly" === $key$$71$$ && $updateDatePicker_value$$175$$ ? this.hide() : "dayFormatter" === $key$$71$$ && ($dateRestrictionOptions_dateTimeRangeOptions$$ = {dayFormatter:this.options.dayFormatter, converter:this.$_GetConverter$()}, this.$_datePickerDefaultValidators$[$oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATERESTRICTION] = $oj$$13$$.$Validation$.$validatorFactory$($oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATERESTRICTION).createValidator($dateRestrictionOptions_dateTimeRangeOptions$$), 
    this.$_AfterSetOptionValidators$());
    "datePicker" === $key$$71$$ && "currentMonthPos" === $flags$$27$$.subkey && this.$_setCurrentDate$(this.options.value);
    $updateDatePicker_value$$175$$ = {max:!0, min:!0, dayFormatter:!0, datePicker:!0, translations:!0, dayMetaData:!0};
    this.$_datepickerShowing$() && $key$$71$$ in $updateDatePicker_value$$175$$ && this.$_updateDatepicker$();
    return $retVal$$8$$;
  }, $_AppendInputHelperParent$:function __AppendInputHelperParent$$1() {
    return this.$_triggerNode$;
  }, _destroy:function __destroy$$1() {
    var $retVal$$9$$ = this._super();
    this.element.off("focus");
    this.$_triggerNode$ && this.$_triggerNode$.remove();
    this.$_isInLine$ && (this.element.removeProp("disabled"), this.element.removeProp("readonly"));
    this.$_dpDiv$.remove();
    return $retVal$$9$$;
  }, $_datepickerShowing$:function() {
    return this.$_isInLine$ || this.$_popUpDpDiv$.ojPopup("isOpen");
  }, $_attachTrigger$:function __attachTrigger() {
    var $showOn_triggerCalendar$$ = this.options.datePicker.showOn, $triggerContainer$$ = $$$$13$$("\x3cspan\x3e").addClass(this.$_TRIGGER_CLASS$);
    if ("focus" === $showOn_triggerCalendar$$) {
      this.element.on("focus", $$$$13$$.proxy(this.show, this));
    }
    $showOn_triggerCalendar$$ = $$$$13$$("\x3cspan/\x3e").addClass(this.$_TRIGGER_CALENDAR_CLASS$ + " oj-clickable-icon oj-component-icon");
    $triggerContainer$$.append($showOn_triggerCalendar$$);
    var $self$$67$$ = this;
    $showOn_triggerCalendar$$.on("click", function() {
      $self$$67$$.$_datepickerShowing$() ? $self$$67$$.hide() : $self$$67$$.show();
      return!1;
    }).on("mouseenter", function() {
      $$$$13$$(this).addClass("oj-hover");
    }).on("mousedown", function() {
      $$$$13$$(this).addClass("oj-active");
    }).on("mouseleave", function() {
      $$$$13$$(this).removeClass("oj-hover oj-active");
    });
    this.$_triggerNode$ = $triggerContainer$$;
    this.element.after($triggerContainer$$);
  }, $_doCalendarKeyDown$:function __doCalendarKeyDown($event$$105$$) {
    var $handled_sel$$1$$;
    $handled_sel$$1$$ = !1;
    var $kc$$ = $$$$13$$.ui.keyCode, $isRTL$$ = this.$_IsRTL$();
    if (this.$_datepickerShowing$()) {
      switch($event$$105$$.keyCode) {
        case 84:
          $event$$105$$.altKey && $event$$105$$.ctrlKey && (this.$_dpDiv$.find(".oj-datepicker-current").focus(), $handled_sel$$1$$ = !0);
          break;
        case $kc$$.TAB:
          this.hide();
          break;
        case $kc$$.ENTER:
          return $handled_sel$$1$$ = $$$$13$$("td." + this.$_DAYOVER_CLASS$ + ":not(." + this.$_CURRENT_CLASS$ + ")", this.$_dpDiv$), $handled_sel$$1$$[0] && this.$_selectDay$(this.$_currentMonth$, this.$_currentYear$, $handled_sel$$1$$[0], $event$$105$$), $event$$105$$.preventDefault(), $event$$105$$.stopPropagation(), !1;
        case $kc$$.ESCAPE:
          this.hide();
          this.element.focus();
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.PAGE_UP:
          $event$$105$$.ctrlKey && $event$$105$$.altKey ? this.$_adjustDate$(-this.options.datePicker.stepBigMonths, "M", !0) : $event$$105$$.altKey ? this.$_adjustDate$(-1, "Y", !0) : this.$_adjustDate$(-this.$_getStepMonths$(), "M", !0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.PAGE_DOWN:
          $event$$105$$.ctrlKey && $event$$105$$.altKey ? this.$_adjustDate$(+this.options.datePicker.stepBigMonths, "M", !0) : $event$$105$$.altKey ? this.$_adjustDate$(1, "Y", !0) : this.$_adjustDate$(+this.$_getStepMonths$(), "M", !0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.END:
          this.$_currentDay$ = this.$_getDaysInMonth$(this.$_currentYear$, this.$_currentMonth$);
          this.$_updateDatepicker$(!0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.HOME:
          this.$_currentDay$ = 1;
          this.$_updateDatepicker$(!0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.LEFT:
          this.$_adjustDate$($isRTL$$ ? 1 : -1, "D", !0);
          $event$$105$$.originalEvent.altKey && this.$_adjustDate$($event$$105$$.ctrlKey ? -this.options.datePicker.stepBigMonths : -this.$_getStepMonths$(), "M", !0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.UP:
          this.$_adjustDate$(-7, "D", !0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.RIGHT:
          this.$_adjustDate$($isRTL$$ ? -1 : 1, "D", !0);
          $event$$105$$.originalEvent.altKey && this.$_adjustDate$($event$$105$$.ctrlKey ? +this.options.datePicker.stepBigMonths : +this.$_getStepMonths$(), "M", !0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.DOWN:
          this.$_adjustDate$(7, "D", !0), $handled_sel$$1$$ = !0;
      }
    } else {
      $event$$105$$.keyCode === $kc$$.HOME && $event$$105$$.ctrlKey && (this.show(), $handled_sel$$1$$ = !0);
    }
    $handled_sel$$1$$ && ($event$$105$$.preventDefault(), $event$$105$$.stopPropagation());
  }, $_updateDatepicker$:function __updateDatepicker($calendar_focusOnCalendar$$) {
    this.$_maxRows$ = 4;
    var $generatedHtmlContent_numMonths$$ = this.$_generateHTML$();
    this.$_dpDiv$.empty().append($generatedHtmlContent_numMonths$$.html);
    var $buttons_cols$$ = $$$$13$$("button", this.$_dpDiv$);
    0 < $buttons_cols$$.length && (1 === $buttons_cols$$.length && $$$$13$$($buttons_cols$$[0]).addClass("oj-datepicker-single-button"), $$$$13$$.each($buttons_cols$$, function($index$$142$$, $ele$$3$$) {
      $$$$13$$($ele$$3$$).ojButton();
    }));
    this.$_attachHandlers$();
    $generatedHtmlContent_numMonths$$.$dayOverId$ && this.$_dpDiv$.find(".oj-datepicker-calendar").attr("aria-activedescendant", $generatedHtmlContent_numMonths$$.$dayOverId$);
    $generatedHtmlContent_numMonths$$ = this.$_getNumberOfMonths$();
    $buttons_cols$$ = $generatedHtmlContent_numMonths$$[1];
    this.$_dpDiv$.removeClass("oj-datepicker-multi-2 oj-datepicker-multi-3 oj-datepicker-multi-4").width("");
    1 < $buttons_cols$$ && this.$_dpDiv$.addClass("oj-datepicker-multi-" + $buttons_cols$$).css("width", 17 * $buttons_cols$$ + "em");
    this.$_dpDiv$[(1 !== $generatedHtmlContent_numMonths$$[0] || 1 !== $generatedHtmlContent_numMonths$$[1] ? "add" : "remove") + "Class"]("oj-datepicker-multi");
    this.$_datepickerShowing$() && this.element.is(":visible") && !this.element.is(":disabled") && ($calendar_focusOnCalendar$$ || this.$_isInLine$ ? ($calendar_focusOnCalendar$$ = this.$_dpDiv$.find(".oj-datepicker-calendar"), $calendar_focusOnCalendar$$[0] !== document.activeElement && $calendar_focusOnCalendar$$.focus()) : this.element[0] !== document.activeElement && this.element.focus());
  }, $_adjustDate$:function __adjustDate($offset$$19$$, $period$$, $focusOnCalendar$$1$$) {
    this.options.disabled || (this.$_adjustInstDate$($offset$$19$$ + ("M" === $period$$ ? this.options.datePicker.currentMonthPos : 0), $period$$), this.$_updateDatepicker$($focusOnCalendar$$1$$));
  }, $_gotoToday$:function __gotoToday() {
    var $date$$6$$ = new Date;
    this.$_currentDay$ = $date$$6$$.getDate();
    this.$_drawMonth$ = this.$_currentMonth$ = $date$$6$$.getMonth();
    this.$_drawYear$ = this.$_currentYear$ = $date$$6$$.getFullYear();
    this.$_adjustDate$();
  }, $_selectMonthYear$:function __selectMonthYear($select$$, $period$$1$$) {
    var $selected$$9$$ = parseInt($select$$.options[$select$$.selectedIndex].value, 10);
    "M" === $period$$1$$ ? this.$_currentMonth$ = this.$_drawMonth$ = $selected$$9$$ : this.$_currentYear$ = this.$_drawYear$ = $selected$$9$$;
    $$$$13$$("#" + this.$_GetSubId$(this.$_CALENDAR_DESCRIPTION_ID$)).html(this.options.monthWide[this.$_drawMonth$] + " " + $yearDisplay$$.format((new Date(this.$_drawYear$, this.$_drawMonth$, 1)).toISOString()));
    this.$_adjustDate$();
  }, $_selectDay$:function __selectDay($isoString$$2_month$$5_value$$176$$, $formatted$$5_temp$$1_year$$5$$, $td$$, $event$$106$$) {
    $$$$13$$($td$$).hasClass(this.$_UNSELECTABLE_CLASS$) || this.options.disabled || (this.$_currentDay$ = $$$$13$$("a", $td$$).html(), this.$_currentMonth$ = $isoString$$2_month$$5_value$$176$$, this.$_currentYear$ = $formatted$$5_temp$$1_year$$5$$, ($isoString$$2_month$$5_value$$176$$ = this.options.value ? $oj$$13$$.IntlConverterUtils.isoToLocalDate(this.options.value) : null) ? ($formatted$$5_temp$$1_year$$5$$ = new Date(this.$_currentYear$, this.$_currentMonth$, this.$_currentDay$), $copyTimeOver$$($isoString$$2_month$$5_value$$176$$, 
    $formatted$$5_temp$$1_year$$5$$), $isoString$$2_month$$5_value$$176$$ = $formatted$$5_temp$$1_year$$5$$) : $isoString$$2_month$$5_value$$176$$ = new Date(this.$_currentYear$, this.$_currentMonth$, this.$_currentDay$), $isoString$$2_month$$5_value$$176$$ = $isoString$$2_month$$5_value$$176$$.toISOString(), $formatted$$5_temp$$1_year$$5$$ = this.$_GetConverter$().format($isoString$$2_month$$5_value$$176$$), this.$_SetDisplayValue$($formatted$$5_temp$$1_year$$5$$), this.$_SetValue$($isoString$$2_month$$5_value$$176$$, 
    $event$$106$$), this.hide());
  }, $_determineDate$:function __determineDate($date$$7$$, $defaultDate$$) {
    return $date$$7$$ ? "string" === typeof $date$$7$$ ? $oj$$13$$.IntlConverterUtils.isoToLocalDate($date$$7$$) : new Date($date$$7$$.getTime()) : $defaultDate$$;
  }, $_setCurrentDate$:function __setCurrentDate($date$$8_newDate$$) {
    $date$$8_newDate$$ = this.$_determineDate$($date$$8_newDate$$, this.$_getTodayDate$());
    this.$_currentDay$ = $date$$8_newDate$$.getDate();
    this.$_drawMonth$ = this.$_currentMonth$ = $date$$8_newDate$$.getMonth();
    this.$_drawYear$ = this.$_currentYear$ = $date$$8_newDate$$.getFullYear();
    this.$_adjustInstDate$();
  }, $_getStepMonths$:function __getStepMonths() {
    var $stepMonths$$ = this.options.datePicker.stepMonths;
    return $$$$13$$.isNumeric($stepMonths$$) ? $stepMonths$$ : this.options.datePicker.numberOfMonths;
  }, $_attachHandlers$:function __attachHandlers() {
    var $stepMonths$$1$$ = this.$_getStepMonths$(), $self$$68$$ = this;
    this.$_dpDiv$.find("[data-handler]").map(function() {
      $$$$13$$(this).bind(this.getAttribute("data-event"), {prev:function($evt$$20$$) {
        $self$$68$$.$_adjustDate$(-$stepMonths$$1$$, "M", !0);
        $evt$$20$$.preventDefault();
      }, next:function($evt$$21$$) {
        $self$$68$$.$_adjustDate$(+$stepMonths$$1$$, "M", !0);
        $evt$$21$$.preventDefault();
      }, today:function($evt$$22$$) {
        if ("keyup" === $evt$$22$$.type && 13 === $evt$$22$$.keyCode || "click" === $evt$$22$$.type) {
          $self$$68$$.$_gotoToday$(), $evt$$22$$.preventDefault(), $evt$$22$$.stopPropagation();
        }
      }, selectDay:function($evt$$23$$) {
        $self$$68$$.$_selectDay$(+this.getAttribute("data-month"), +this.getAttribute("data-year"), this, $evt$$23$$);
        return!1;
      }, selectMonth:function() {
        $self$$68$$.$_selectMonthYear$(this, "M");
        return!1;
      }, selectYear:function() {
        $self$$68$$.$_selectMonthYear$(this, "Y");
        return!1;
      }, calendarKey:function($evt$$24$$) {
        $self$$68$$.$_doCalendarKeyDown$($evt$$24$$);
      }}[this.getAttribute("data-handler")]);
    });
  }, $_generateHTML$:function __generateHTML() {
    var $maxDraw_prev$$1_prevText$$, $next$$1_nextText$$, $currentText_daysOutsideMonth_loop$$, $html$$1_todayControl$$, $footerLayout$$, $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$, $dayNames$$ = this.options.dayWide, $dayNamesMin$$ = this.options.dayNarrow, $monthNames$$ = this.options.monthWide, $monthNamesShort$$ = this.options.monthAbbreviated, $firstDay$$ = this.options.firstDayOfWeek, $calculatedWeek_dow_leadDays_monthControl$$, $row$$22$$, $group$$2$$, $col$$1$$, $selected$$10$$, 
    $rowCellId$$, $dayOverClass$$, $dayOverId$$ = "", $calender$$, $curRows_daysInMonth$$3_numRows_thead$$, $day$$3_printDate$$, $dRow$$, $tbody$$, $daySettings$$, $otherMonth$$, $currMetaData_pYear_unselectable$$, $tempDate_today$$1$$ = new Date, $tempDate_today$$1$$ = new Date($tempDate_today$$1$$.getFullYear(), $tempDate_today$$1$$.getMonth(), $tempDate_today$$1$$.getDate()), $isRTL$$1$$ = this.$_IsRTL$();
    $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$ = this.options.datePicker.footerLayout;
    var $numMonths$$1$$ = this.$_getNumberOfMonths$(), $currentMonthPos_drawMonth$$ = this.options.datePicker.currentMonthPos, $dayFormatter$$1$$ = this.options.dayFormatter;
    $currMetaData_pYear_unselectable$$ = null;
    var $isMultiMonth$$ = 1 !== $numMonths$$1$$[0] || 1 !== $numMonths$$1$$[1], $minDate$$ = this.$_getMinMaxDate$("min"), $maxDate$$ = this.$_getMinMaxDate$("max"), $currentMonthPos_drawMonth$$ = this.$_drawMonth$ - $currentMonthPos_drawMonth$$, $drawYear$$ = this.$_drawYear$, $compareDate$$ = new Date(this.$_currentYear$, this.$_currentMonth$, this.$_currentDay$), $valueDate$$2$$ = new Date(this.$_getDate$()), $selectedDay$$ = $valueDate$$2$$.getDate(), $selectedMonth$$ = $valueDate$$2$$.getMonth(), 
    $selectedYear$$ = $valueDate$$2$$.getFullYear(), $wDisabled$$ = this.options.disabled, $weekText$$ = this.$getTranslatedString$("weekText");
    $valueDate$$2$$.setHours(0);
    $valueDate$$2$$.setMinutes(0);
    $valueDate$$2$$.setSeconds(0);
    $valueDate$$2$$.setMilliseconds(0);
    0 > $currentMonthPos_drawMonth$$ && ($currentMonthPos_drawMonth$$ += 12, $drawYear$$--);
    if ($maxDate$$) {
      for ($maxDraw_prev$$1_prevText$$ = new Date($maxDate$$.getFullYear(), $maxDate$$.getMonth() - $numMonths$$1$$[0] * $numMonths$$1$$[1] + 1, $maxDate$$.getDate()), $maxDraw_prev$$1_prevText$$ = $minDate$$ && $maxDraw_prev$$1_prevText$$ < $minDate$$ ? $minDate$$ : $maxDraw_prev$$1_prevText$$;new Date($drawYear$$, $currentMonthPos_drawMonth$$, 1) > $maxDraw_prev$$1_prevText$$;) {
        $currentMonthPos_drawMonth$$--, 0 > $currentMonthPos_drawMonth$$ && ($currentMonthPos_drawMonth$$ = 11, $drawYear$$--);
      }
    }
    this.$_drawMonth$ = $currentMonthPos_drawMonth$$;
    this.$_drawYear$ = $drawYear$$;
    $maxDraw_prev$$1_prevText$$ = this.$getTranslatedString$("prevText");
    $maxDraw_prev$$1_prevText$$ = this.$_canAdjustMonth$(-1, $drawYear$$, $currentMonthPos_drawMonth$$) && !$wDisabled$$ ? "\x3ca href\x3d'#' class\x3d'oj-datepicker-prev-icon oj-enabled oj-default oj-component-icon oj-clickable-icon' data-handler\x3d'prev' data-event\x3d'click' title\x3d'" + $maxDraw_prev$$1_prevText$$ + "'\x3e\x3c/a\x3e" : "\x3ca class\x3d'oj-datepicker-prev-icon oj-disabled oj-component-icon oj-clickable-icon' title\x3d'" + $maxDraw_prev$$1_prevText$$ + "'\x3e\x3c/a\x3e";
    $next$$1_nextText$$ = this.$getTranslatedString$("nextText");
    $next$$1_nextText$$ = this.$_canAdjustMonth$(1, $drawYear$$, $currentMonthPos_drawMonth$$) && !$wDisabled$$ ? "\x3ca href\x3d'#' class\x3d'oj-datepicker-next-icon oj-enabled oj-default oj-component-icon oj-clickable-icon' data-handler\x3d'next' data-event\x3d'click' title\x3d'" + $next$$1_nextText$$ + "'\x3e\x3c/a\x3e" : "\x3ca class\x3d'oj-datepicker-next-icon oj-disabled oj-component-icon oj-clickable-icon' title\x3d'" + $next$$1_nextText$$ + "'\x3e\x3c/a\x3e";
    $currentText_daysOutsideMonth_loop$$ = this.$getTranslatedString$("currentText");
    $footerLayout$$ = "";
    $html$$1_todayControl$$ = "\x3cbutton type\x3d'button' class\x3d'oj-datepicker-current oj-priority-secondary' data-handler\x3d'today' data-event\x3d'click keyup'\x3e" + $currentText_daysOutsideMonth_loop$$ + "\x3c/button\x3e";
    if (1 < $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$.length) {
      $currentText_daysOutsideMonth_loop$$ = 0;
      $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$ = [{index:$footerLayoutButtons_footerLayoutDisplay_weekDisplay$$.indexOf("today"), content:this.$_isInRange$($tempDate_today$$1$$) ? $html$$1_todayControl$$ : ""}];
      for ($footerLayoutButtons_footerLayoutDisplay_weekDisplay$$.sort(function($a$$74$$, $b$$47$$) {
        return $a$$74$$.index - $b$$47$$.index;
      });$currentText_daysOutsideMonth_loop$$ < $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$.length && 0 > $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$[$currentText_daysOutsideMonth_loop$$].index;) {
        $currentText_daysOutsideMonth_loop$$++;
      }
      for (;$currentText_daysOutsideMonth_loop$$ < $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$.length;) {
        $footerLayout$$ += $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$[$currentText_daysOutsideMonth_loop$$++].content;
      }
      0 < $footerLayout$$.length && ($footerLayout$$ = "\x3cdiv class\x3d'oj-datepicker-buttonpane'\x3e" + $footerLayout$$ + "\x3c/div\x3e");
    }
    $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$ = this.options.datePicker.weekDisplay;
    $currentText_daysOutsideMonth_loop$$ = this.options.datePicker.daysOutsideMonth;
    $html$$1_todayControl$$ = "";
    $calculatedWeek_dow_leadDays_monthControl$$ = "all";
    for ($row$$22$$ = 0;$row$$22$$ < $numMonths$$1$$[0];$row$$22$$++) {
      $group$$2$$ = "";
      this.$_maxRows$ = 4;
      for ($col$$1$$ = 0;$col$$1$$ < $numMonths$$1$$[1];$col$$1$$++) {
        $calculatedWeek_dow_leadDays_monthControl$$ = "all";
        $calender$$ = "";
        if ($isMultiMonth$$) {
          $calender$$ += "\x3cdiv class\x3d'oj-datepicker-group";
          if (1 < $numMonths$$1$$[1]) {
            switch($col$$1$$) {
              case 0:
                $calender$$ += " oj-datepicker-group-first";
                $calculatedWeek_dow_leadDays_monthControl$$ = $isRTL$$1$$ ? "right" : "left";
                break;
              case $numMonths$$1$$[1] - 1:
                $calender$$ += " oj-datepicker-group-last";
                $calculatedWeek_dow_leadDays_monthControl$$ = $isRTL$$1$$ ? "left" : "right";
                break;
              default:
                $calender$$ += " oj-datepicker-group-middle", $calculatedWeek_dow_leadDays_monthControl$$ = "";
            }
          }
          $calender$$ += "'\x3e";
        }
        $calender$$ += "\x3cdiv class\x3d'oj-datepicker-header" + ($wDisabled$$ ? " oj-disabled " : " oj-enabled oj-default ") + "'\x3e" + (/all|left/.test($calculatedWeek_dow_leadDays_monthControl$$) && 0 === $row$$22$$ ? $isRTL$$1$$ ? $next$$1_nextText$$ : $maxDraw_prev$$1_prevText$$ : "") + (/all|right/.test($calculatedWeek_dow_leadDays_monthControl$$) && 0 === $row$$22$$ ? $isRTL$$1$$ ? $maxDraw_prev$$1_prevText$$ : $next$$1_nextText$$ : "") + this.$_generateMonthYearHeader$($currentMonthPos_drawMonth$$, 
        $drawYear$$, $minDate$$, $maxDate$$, 0 < $row$$22$$ || 0 < $col$$1$$, $monthNames$$, $monthNamesShort$$) + "\x3c/div\x3e\x3ctable class\x3d'oj-datepicker-calendar" + ($wDisabled$$ ? " oj-disabled " : " oj-enabled oj-default ") + "' tabindex\x3d-1 data-handler\x3d'calendarKey' data-event\x3d'keydown' aria-readonly\x3d'true' role\x3d'grid' aria-labelledby\x3d'" + this.$_GetSubId$(this.$_CALENDAR_DESCRIPTION_ID$) + "'\x3e\x3cthead role\x3d'presentation'\x3e\x3ctr role\x3d'row'\x3e";
        $curRows_daysInMonth$$3_numRows_thead$$ = "number" === $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$ ? "\x3cth class\x3d'oj-datepicker-week-col'\x3e" + this.$getTranslatedString$("weekHeader") + "\x3c/th\x3e" : "";
        for ($calculatedWeek_dow_leadDays_monthControl$$ = 0;7 > $calculatedWeek_dow_leadDays_monthControl$$;$calculatedWeek_dow_leadDays_monthControl$$++) {
          $day$$3_printDate$$ = ($calculatedWeek_dow_leadDays_monthControl$$ + parseInt($firstDay$$, 10)) % 7, $curRows_daysInMonth$$3_numRows_thead$$ += "\x3cth role\x3d'columnheader' aria-label\x3d'" + $dayNames$$[$day$$3_printDate$$] + "'" + (5 <= ($calculatedWeek_dow_leadDays_monthControl$$ + $firstDay$$ + 6) % 7 ? " class\x3d'oj-datepicker-week-end'" : "") + "\x3e\x3cspan title\x3d'" + $dayNames$$[$day$$3_printDate$$] + "'\x3e" + $dayNamesMin$$[$day$$3_printDate$$] + "\x3c/span\x3e\x3c/th\x3e"
          ;
        }
        $calender$$ += $curRows_daysInMonth$$3_numRows_thead$$ + "\x3c/tr\x3e\x3c/thead\x3e\x3ctbody role\x3d'presentation'\x3e";
        $curRows_daysInMonth$$3_numRows_thead$$ = this.$_getDaysInMonth$($drawYear$$, $currentMonthPos_drawMonth$$);
        $drawYear$$ === $selectedYear$$ && $currentMonthPos_drawMonth$$ === $selectedMonth$$ && ($selectedDay$$ = Math.min($selectedDay$$, $curRows_daysInMonth$$3_numRows_thead$$));
        $calculatedWeek_dow_leadDays_monthControl$$ = (this.$_getFirstDayOfMonth$($drawYear$$, $currentMonthPos_drawMonth$$) - $firstDay$$ + 7) % 7;
        $curRows_daysInMonth$$3_numRows_thead$$ = Math.ceil(($calculatedWeek_dow_leadDays_monthControl$$ + $curRows_daysInMonth$$3_numRows_thead$$) / 7);
        this.$_maxRows$ = $curRows_daysInMonth$$3_numRows_thead$$ = $isMultiMonth$$ ? this.$_maxRows$ > $curRows_daysInMonth$$3_numRows_thead$$ ? this.$_maxRows$ : $curRows_daysInMonth$$3_numRows_thead$$ : $curRows_daysInMonth$$3_numRows_thead$$;
        $day$$3_printDate$$ = new Date($drawYear$$, $currentMonthPos_drawMonth$$, 1 - $calculatedWeek_dow_leadDays_monthControl$$);
        for ($dRow$$ = 0;$dRow$$ < $curRows_daysInMonth$$3_numRows_thead$$;$dRow$$++) {
          $calender$$ += "\x3ctr role\x3d'row'\x3e";
          $calculatedWeek_dow_leadDays_monthControl$$ = this.$_GetConverter$().$calculateWeek$($day$$3_printDate$$.toISOString());
          $tbody$$ = "none" === $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$ ? "" : "\x3ctd class\x3d'oj-datepicker-week-col' role\x3d'rowheader' aria-label\x3d'" + $weekText$$ + " " + $calculatedWeek_dow_leadDays_monthControl$$ + "'\x3e" + $calculatedWeek_dow_leadDays_monthControl$$ + "\x3c/td\x3e";
          for ($calculatedWeek_dow_leadDays_monthControl$$ = 0;7 > $calculatedWeek_dow_leadDays_monthControl$$;$calculatedWeek_dow_leadDays_monthControl$$++) {
            $otherMonth$$ = $day$$3_printDate$$.getMonth() !== $currentMonthPos_drawMonth$$;
            $selected$$10$$ = $day$$3_printDate$$.getTime() === $valueDate$$2$$.getTime();
            $rowCellId$$ = "oj-dp-" + $dRow$$ + "-" + $calculatedWeek_dow_leadDays_monthControl$$;
            ($dayOverClass$$ = $day$$3_printDate$$.getTime() === $compareDate$$.getTime() && $currentMonthPos_drawMonth$$ === this.$_currentMonth$) && ($dayOverId$$ = $rowCellId$$);
            $daySettings$$ = [!0, ""];
            $currMetaData_pYear_unselectable$$ = $day$$3_printDate$$.getFullYear();
            var $pMonth_selectedDate$$ = $day$$3_printDate$$.getMonth(), $pDate$$ = $day$$3_printDate$$.getDate();
            $dayFormatter$$1$$ && ($currMetaData_pYear_unselectable$$ = $dayFormatter$$1$$({fullYear:$currMetaData_pYear_unselectable$$, month:$pMonth_selectedDate$$ + 1, date:$pDate$$})) && ($daySettings$$ = [!$currMetaData_pYear_unselectable$$.disabled, $currMetaData_pYear_unselectable$$.className || ""], $currMetaData_pYear_unselectable$$.tooltip && $daySettings$$.push($currMetaData_pYear_unselectable$$.tooltip));
            $pMonth_selectedDate$$ = $day$$3_printDate$$.getTime() === $valueDate$$2$$.getTime();
            $currMetaData_pYear_unselectable$$ = $otherMonth$$ && "selectable" !== $currentText_daysOutsideMonth_loop$$ || !$daySettings$$[0] || $minDate$$ && $day$$3_printDate$$ < $minDate$$ || $maxDate$$ && $day$$3_printDate$$ > $maxDate$$;
            $tbody$$ += "\x3ctd role\x3d'gridcell' aria-disabled\x3d'" + !!$currMetaData_pYear_unselectable$$ + "' aria-selected\x3d'" + $selected$$10$$ + "' id\x3d'" + $rowCellId$$ + "' class\x3d'" + (5 <= ($calculatedWeek_dow_leadDays_monthControl$$ + $firstDay$$ + 6) % 7 ? " oj-datepicker-week-end" : "") + ($otherMonth$$ ? " oj-datepicker-other-month" : "") + ($dayOverClass$$ ? " " + this.$_DAYOVER_CLASS$ : "") + ($currMetaData_pYear_unselectable$$ || $wDisabled$$ ? " " + this.$_UNSELECTABLE_CLASS$ + 
            " oj-disabled" : " oj-enabled ") + ($otherMonth$$ && "hidden" === $currentText_daysOutsideMonth_loop$$ ? "" : " " + $daySettings$$[1] + ($selected$$10$$ ? " " + this.$_CURRENT_CLASS$ : "") + ($day$$3_printDate$$.getTime() === $tempDate_today$$1$$.getTime() ? " oj-datepicker-today" : "")) + "'" + ($otherMonth$$ && "hidden" === $currentText_daysOutsideMonth_loop$$ || !$daySettings$$[2] ? "" : " title\x3d'" + $daySettings$$[2].replace(/'/g, "\x26#39;") + "'") + ($currMetaData_pYear_unselectable$$ ? 
            "" : " data-handler\x3d'selectDay' data-event\x3d'click' data-month\x3d'" + $day$$3_printDate$$.getMonth() + "' data-year\x3d'" + $day$$3_printDate$$.getFullYear() + "'") + "\x3e" + ($otherMonth$$ && "hidden" === $currentText_daysOutsideMonth_loop$$ ? "\x26#xa0;" : $currMetaData_pYear_unselectable$$ || $wDisabled$$ ? "\x3cspan class\x3d'oj-disabled'\x3e" + $day$$3_printDate$$.getDate() + "\x3c/span\x3e" : "\x3ca class\x3d'oj-enabled" + ($pMonth_selectedDate$$ ? " oj-selected" : "") + 
            ($otherMonth$$ ? " oj-priority-secondary" : "") + "' " + ($pMonth_selectedDate$$ || $dayOverClass$$ ? "" : "tabindex\x3d'-1' ") + " href\x3d'#'\x3e" + $day$$3_printDate$$.getDate() + "\x3c/a\x3e") + "\x3c/td\x3e";
            $day$$3_printDate$$.setDate($day$$3_printDate$$.getDate() + 1);
          }
          $calender$$ += $tbody$$ + "\x3c/tr\x3e";
        }
        $currentMonthPos_drawMonth$$++;
        11 < $currentMonthPos_drawMonth$$ && ($currentMonthPos_drawMonth$$ = 0, $drawYear$$++);
        $calender$$ += "\x3c/tbody\x3e\x3c/table\x3e" + ($isMultiMonth$$ ? "\x3c/div\x3e" + (0 < $numMonths$$1$$[0] && $col$$1$$ === $numMonths$$1$$[1] - 1 ? "\x3cdiv class\x3d'oj-datepicker-row-break'\x3e\x3c/div\x3e" : "") : "");
        $group$$2$$ += $calender$$;
      }
      $html$$1_todayControl$$ += $group$$2$$;
    }
    return{html:$html$$1_todayControl$$ + $footerLayout$$, $dayOverId$:$dayOverId$$};
  }, $_generateMonthYearHeader$:function __generateMonthYearHeader($drawMonth$$1$$, $drawYear$$1$$, $minDate$$1$$, $maxDate$$1$$, $secondary$$, $monthNames$$1$$, $monthNamesShort$$1_year$$6$$) {
    var $endYear_inMinYear_years$$, $determineYear_inMaxYear$$, $month$$6$$, $thisYear$$, $changeMonth$$ = this.options.datePicker.changeMonth, $changeYear$$ = this.options.datePicker.changeYear, $positionOfMonthToYear$$ = $oj$$13$$.$LocaleData$.$isMonthPriorToYear$() ? "before" : "after", $html$$2$$ = "\x3cdiv class\x3d'oj-datepicker-title' role\x3d'header'\x3e", $monthHtml$$ = "", $wDisabled$$1$$ = this.options.disabled;
    if ($secondary$$ || "none" === $changeMonth$$) {
      $monthHtml$$ += "\x3cspan class\x3d'oj-datepicker-month'\x3e" + $monthNames$$1$$[$drawMonth$$1$$] + "\x3c/span\x3e";
    } else {
      $endYear_inMinYear_years$$ = $minDate$$1$$ && $minDate$$1$$.getFullYear() === $drawYear$$1$$;
      $determineYear_inMaxYear$$ = $maxDate$$1$$ && $maxDate$$1$$.getFullYear() === $drawYear$$1$$;
      $monthHtml$$ += "\x3cselect tabindex\x3d'-1' class\x3d'oj-datepicker-month " + ($wDisabled$$1$$ ? "oj-disabled' disabled" : "oj-enabled'") + " data-handler\x3d'selectMonth' data-event\x3d'change' role\x3d'listbox'\x3e";
      for ($month$$6$$ = 0;12 > $month$$6$$;$month$$6$$++) {
        (!$endYear_inMinYear_years$$ || $month$$6$$ >= $minDate$$1$$.getMonth()) && (!$determineYear_inMaxYear$$ || $month$$6$$ <= $maxDate$$1$$.getMonth()) && ($monthHtml$$ += "\x3coption role\x3d'option' value\x3d'" + $month$$6$$ + "' aria-selected\x3d'" + ($month$$6$$ === $drawMonth$$1$$ ? "true' selected\x3d'selected'" : "false'") + "\x3e" + $monthNamesShort$$1_year$$6$$[$month$$6$$] + "\x3c/option\x3e");
      }
      $monthHtml$$ += "\x3c/select\x3e";
    }
    "before" === $positionOfMonthToYear$$ && ($html$$2$$ += $monthHtml$$ + ($secondary$$ || "select" !== $changeMonth$$ || "select" !== $changeYear$$ ? "\x26#xa0;" : ""));
    if (!this.$yearshtml$) {
      if (this.$yearshtml$ = "", $secondary$$ || "none" === $changeYear$$) {
        $html$$2$$ += "\x3cspan class\x3d'oj-datepicker-year'\x3e" + $yearDisplay$$.format((new Date($drawYear$$1$$, $drawMonth$$1$$, 1)).toISOString()) + "\x3c/span\x3e";
      } else {
        $endYear_inMinYear_years$$ = this.options.datePicker.yearRange.split(":");
        $thisYear$$ = (new Date).getFullYear();
        $determineYear_inMaxYear$$ = function $$determineYear_inMaxYear$$$($value$$177_year$$7$$) {
          $value$$177_year$$7$$ = $value$$177_year$$7$$.match(/c[+\-].*/) ? $drawYear$$1$$ + parseInt($value$$177_year$$7$$.substring(1), 10) : $value$$177_year$$7$$.match(/[+\-].*/) ? $thisYear$$ + parseInt($value$$177_year$$7$$, 10) : parseInt($value$$177_year$$7$$, 10);
          return isNaN($value$$177_year$$7$$) ? $thisYear$$ : $value$$177_year$$7$$;
        };
        $monthNamesShort$$1_year$$6$$ = $determineYear_inMaxYear$$($endYear_inMinYear_years$$[0]);
        $endYear_inMinYear_years$$ = Math.max($monthNamesShort$$1_year$$6$$, $determineYear_inMaxYear$$($endYear_inMinYear_years$$[1] || ""));
        $monthNamesShort$$1_year$$6$$ = $minDate$$1$$ ? Math.max($monthNamesShort$$1_year$$6$$, $minDate$$1$$.getFullYear()) : $monthNamesShort$$1_year$$6$$;
        $endYear_inMinYear_years$$ = $maxDate$$1$$ ? Math.min($endYear_inMinYear_years$$, $maxDate$$1$$.getFullYear()) : $endYear_inMinYear_years$$;
        for (this.$yearshtml$ += "\x3cselect tabindex\x3d'-1' class\x3d'oj-datepicker-year " + ($wDisabled$$1$$ ? "oj-disabled' disabled" : "oj-enabled'") + " data-handler\x3d'selectYear' data-event\x3d'change' role\x3d'listbox'\x3e";$monthNamesShort$$1_year$$6$$ <= $endYear_inMinYear_years$$;$monthNamesShort$$1_year$$6$$++) {
          this.$yearshtml$ += "\x3coption role\x3d'option' value\x3d'" + $monthNamesShort$$1_year$$6$$ + "' aria-selected\x3d'" + ($monthNamesShort$$1_year$$6$$ === $drawYear$$1$$ ? "true' selected\x3d'selected'" : "false'") + "\x3e" + $yearDisplay$$.format((new Date($monthNamesShort$$1_year$$6$$, $drawMonth$$1$$, 1)).toISOString()) + "\x3c/option\x3e";
        }
        this.$yearshtml$ += "\x3c/select\x3e";
        $html$$2$$ += this.$yearshtml$;
        this.$yearshtml$ = null;
      }
    }
    "after" === $positionOfMonthToYear$$ && ($html$$2$$ += ($secondary$$ || "select" !== $changeMonth$$ || "select" !== $changeYear$$ ? "\x26#xa0;" : "") + $monthHtml$$);
    $html$$2$$ += "\x3cspan class\x3d'oj-helper-hidden-accessible' id\x3d'" + this.$_GetSubId$(this.$_CALENDAR_DESCRIPTION_ID$) + "'\x3e" + $monthNames$$1$$[$drawMonth$$1$$] + " " + $yearDisplay$$.format((new Date($drawYear$$1$$, $drawMonth$$1$$, 1)).toISOString()) + "\x3c/span\x3e";
    $html$$2$$ += "\x3cspan class\x3d'oj-helper-hidden-accessible' id\x3d'" + this.$_GetSubId$(this.$_DATEPICKER_DESCRIPTION_ID$) + "'\x3e" + this.$getTranslatedString$("datePicker") + "\x3c/span\x3e";
    return $html$$2$$ + "\x3c/div\x3e";
  }, $_adjustInstDate$:function __adjustInstDate($offset$$20$$, $period$$2$$) {
    var $date$$9_year$$8$$ = this.$_drawYear$ + ("Y" === $period$$2$$ ? $offset$$20$$ : 0), $month$$7$$ = this.$_drawMonth$ + ("M" === $period$$2$$ ? $offset$$20$$ : 0), $day$$4$$ = Math.min(this.$_currentDay$, this.$_getDaysInMonth$($date$$9_year$$8$$, $month$$7$$)) + ("D" === $period$$2$$ ? $offset$$20$$ : 0), $date$$9_year$$8$$ = new Date($date$$9_year$$8$$, $month$$7$$, $day$$4$$);
    this.$_currentDay$ = $date$$9_year$$8$$.getDate();
    this.$_drawMonth$ = this.$_currentMonth$ = $date$$9_year$$8$$.getMonth();
    this.$_drawYear$ = this.$_currentYear$ = $date$$9_year$$8$$.getFullYear();
  }, $_getNumberOfMonths$:function __getNumberOfMonths() {
    var $numMonths$$2$$ = this.options.datePicker.numberOfMonths, $numMonths$$2$$ = "string" === typeof $numMonths$$2$$ ? parseInt($numMonths$$2$$, 10) : $numMonths$$2$$;
    return null == $numMonths$$2$$ ? [1, 1] : "number" === typeof $numMonths$$2$$ ? [1, $numMonths$$2$$] : $numMonths$$2$$;
  }, $_getMinMaxDate$:function __getMinMaxDate($minMax$$) {
    return this.$_determineDate$(this.options[$minMax$$], null);
  }, $_getDaysInMonth$:function __getDaysInMonth($year$$9$$, $month$$8$$) {
    return 32 - (new Date($year$$9$$, $month$$8$$, 32)).getDate();
  }, $_getFirstDayOfMonth$:function __getFirstDayOfMonth($year$$10$$, $month$$9$$) {
    return(new Date($year$$10$$, $month$$9$$, 1)).getDay();
  }, $_canAdjustMonth$:function __canAdjustMonth($offset$$21$$, $curYear_date$$10$$, $curMonth$$) {
    var $numMonths$$3$$ = this.$_getNumberOfMonths$();
    $curYear_date$$10$$ = new Date($curYear_date$$10$$, $curMonth$$ + (0 > $offset$$21$$ ? $offset$$21$$ : $numMonths$$3$$[0] * $numMonths$$3$$[1]), 1);
    0 > $offset$$21$$ && $curYear_date$$10$$.setDate(this.$_getDaysInMonth$($curYear_date$$10$$.getFullYear(), $curYear_date$$10$$.getMonth()));
    return this.$_isInRange$($curYear_date$$10$$);
  }, $_isInRange$:function __isInRange($date$$11$$) {
    var $yearSplit_years$$1$$, $currentYear$$, $minDate$$2$$ = this.$_getMinMaxDate$("min"), $maxDate$$2$$ = this.$_getMinMaxDate$("max"), $minYear$$ = null, $maxYear$$ = null;
    if ($yearSplit_years$$1$$ = this.options.datePicker.yearRange) {
      $yearSplit_years$$1$$ = $yearSplit_years$$1$$.split(":"), $currentYear$$ = (new Date).getFullYear(), $minYear$$ = parseInt($yearSplit_years$$1$$[0], 10), $maxYear$$ = parseInt($yearSplit_years$$1$$[1], 10), $yearSplit_years$$1$$[0].match(/[+\-].*/) && ($minYear$$ += $currentYear$$), $yearSplit_years$$1$$[1].match(/[+\-].*/) && ($maxYear$$ += $currentYear$$);
    }
    return(!$minDate$$2$$ || $date$$11$$.getTime() >= $minDate$$2$$.getTime()) && (!$maxDate$$2$$ || $date$$11$$.getTime() <= $maxDate$$2$$.getTime()) && (!$minYear$$ || $date$$11$$.getFullYear() >= $minYear$$) && (!$maxYear$$ || $date$$11$$.getFullYear() <= $maxYear$$);
  }, $_disableEnable$:function __disableEnable($val$$38$$) {
    this.$_triggerNode$ && $disableEnableSpan$$(this.$_triggerNode$.children(), $val$$38$$);
    $val$$38$$ && this.hide();
    this.$_isInLine$ && this.$_updateDatepicker$();
  }, $_AppendInputHelper$:function __AppendInputHelper$$1() {
    this.$_isInLine$ || this._superApply(arguments);
  }, $_onBlurHandler$:function __onBlurHandler$$1($event$$107$$) {
    this.$_isInLine$ || this._superApply(arguments);
  }, $_onKeyDownHandler$:function __onKeyDownHandler$$1($event$$108$$) {
    if (!this.$_isInLine$) {
      this._superApply(arguments);
      var $kc$$1$$ = $$$$13$$.ui.keyCode, $handled$$1$$ = !1;
      if (this.$_datepickerShowing$()) {
        switch($event$$108$$.keyCode) {
          case $kc$$1$$.TAB:
            this.hide();
            break;
          case $kc$$1$$.ESCAPE:
            this.hide();
            $handled$$1$$ = !0;
            break;
          case $kc$$1$$.UP:
          ;
          case $kc$$1$$.DOWN:
            this.$_dpDiv$.find(".oj-datepicker-calendar").focus(), $handled$$1$$ = !0;
        }
      } else {
        switch($event$$108$$.keyCode) {
          case $kc$$1$$.UP:
          ;
          case $kc$$1$$.DOWN:
            this.show(), $handled$$1$$ = !0;
        }
      }
      if ($handled$$1$$) {
        return $event$$108$$.preventDefault(), $event$$108$$.stopPropagation(), !1;
      }
    }
  }, $_SetDisplayValue$:function($displayValue$$5$$) {
    this.$_isInLine$ || this._superApply(arguments);
    this.$_setCurrentDate$(this.$_getDate$());
    this.$_datepickerShowing$() && this.$_updateDatepicker$();
  }, $_GetConverter$:function() {
    return this.options.converter ? this._superApply(arguments) : $$$$13$$.oj.ojInputDate.prototype.options.converter;
  }, $_GetElementValue$:function() {
    return this.options.value || "";
  }, _GetDefaultStyleClass:function() {
    return "oj-inputdate";
  }, $_GetImplicitValidators$:function() {
    var $ret$$21$$ = this._superApply(arguments), $maxDate$$3$$ = this.options.max, $dateRestrictionOptions$$1_dateTimeRangeOptions$$1$$ = {}, $dateRestrictionOptions$$1_dateTimeRangeOptions$$1$$ = {};
    if (null != this.options.min || null != $maxDate$$3$$) {
      $dateRestrictionOptions$$1_dateTimeRangeOptions$$1$$ = {min:this.options.min, max:this.options.max, converter:this.$_GetConverter$()}, this.$_datePickerDefaultValidators$[$oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE] = $oj$$13$$.$Validation$.$validatorFactory$($oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE).createValidator($dateRestrictionOptions$$1_dateTimeRangeOptions$$1$$);
    }
    null != this.options.dayFormatter && ($dateRestrictionOptions$$1_dateTimeRangeOptions$$1$$ = {dayFormatter:this.options.dayFormatter, converter:this.$_GetConverter$()}, this.$_datePickerDefaultValidators$[$oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATERESTRICTION] = $oj$$13$$.$Validation$.$validatorFactory$($oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATERESTRICTION).createValidator($dateRestrictionOptions$$1_dateTimeRangeOptions$$1$$));
    return $$$$13$$.extend(this.$_datePickerDefaultValidators$, $ret$$21$$);
  }, $_getTodayDate$:function __getTodayDate() {
    var $date$$12$$ = new Date;
    $date$$12$$.setHours(0);
    $date$$12$$.setMinutes(0);
    $date$$12$$.setSeconds(0);
    $date$$12$$.setMilliseconds(0);
    return $date$$12$$;
  }, $_getDate$:function __getDate() {
    return this.$_determineDate$(this.options.value, this.$_getTodayDate$());
  }, getNodeBySubId:function($locator$$12$$) {
    var $node$$24$$ = null, $subId$$8$$ = $locator$$12$$ && $locator$$12$$.subId, $dpDiv$$1$$ = this.$_dpDiv$;
    if ($subId$$8$$) {
      switch($subId$$8$$) {
        case "oj-datepicker-content":
          $node$$24$$ = $dpDiv$$1$$[0];
          break;
        case "oj-inputdatetime-calendar-icon":
          $node$$24$$ = $$$$13$$(".oj-inputdatetime-calendar-icon", this.$_triggerNode$)[0];
          break;
        case "oj-datepicker-prev-icon":
          $node$$24$$ = $$$$13$$(".oj-datepicker-prev-icon", $dpDiv$$1$$)[0];
          break;
        case "oj-datepicker-next-icon":
          $node$$24$$ = $$$$13$$(".oj-datepicker-next-icon", $dpDiv$$1$$)[0];
          break;
        case "oj-datepicker-month":
          $node$$24$$ = $$$$13$$(".oj-datepicker-month", $dpDiv$$1$$)[0];
          break;
        case "oj-datepicker-year":
          $node$$24$$ = $$$$13$$(".oj-datepicker-year", $dpDiv$$1$$)[0];
          break;
        case "oj-datepicker-current":
          $node$$24$$ = $$$$13$$(".oj-datepicker-current", $dpDiv$$1$$)[0];
          break;
        default:
          $node$$24$$ = null;
      }
    }
    return $node$$24$$ || this._superApply(arguments);
  }, getSubIdByNode:function($node$$25$$) {
    var $dpDiv$$2_i$$183$$ = this.$_dpDiv$, $subId$$9$$ = null, $checks$$ = [{selector:".oj-inputdatetime-calendar-icon", ele:this.$_triggerNode$}, {selector:".oj-datepicker-prev-icon", ele:$dpDiv$$2_i$$183$$}, {selector:".oj-datepicker-next-icon", ele:$dpDiv$$2_i$$183$$}, {selector:".oj-datepicker-month", ele:$dpDiv$$2_i$$183$$}, {selector:".oj-datepicker-year", ele:$dpDiv$$2_i$$183$$}, {selector:".oj-datepicker-current", ele:$dpDiv$$2_i$$183$$}];
    if ($node$$25$$ === $dpDiv$$2_i$$183$$[0]) {
      return "oj-datepicker-content";
    }
    for (var $dpDiv$$2_i$$183$$ = 0, $j$$28$$ = $checks$$.length;$dpDiv$$2_i$$183$$ < $j$$28$$;$dpDiv$$2_i$$183$$++) {
      var $map$$1$$ = $checks$$[$dpDiv$$2_i$$183$$], $entry$$2$$ = $$$$13$$($map$$1$$.selector, $map$$1$$.ele);
      if (1 === $entry$$2$$.length && $entry$$2$$[0] === $node$$25$$) {
        $subId$$9$$ = $map$$1$$.selector.substr(1);
        break;
      }
    }
    return $subId$$9$$ || this._superApply(arguments);
  }, hide:function __hide() {
    this.$_datepickerShowing$() && !this.$_isInLine$ && (this.$_popUpDpDiv$.ojPopup("close"), "focus" === this.options.datePicker.showOn && (this.$_ignoreShow$ = !0), this.element.focus());
    return this;
  }, refresh:function __refresh() {
    return this._superApply(arguments) || this;
  }, show:function __show() {
    if (!(this.$_datepickerShowing$() || this.options.disabled || this.options.readOnly)) {
      if (this.$_ignoreShow$) {
        this.$_ignoreShow$ = !1;
      } else {
        var $rtl$$ = this.$_IsRTL$();
        this.$_dpDiv$.empty();
        this.$_updateDatepicker$();
        var $surrogateId$$3_widget$$4$$ = this.widget(), $surrogateId$$3_widget$$4$$ = $surrogateId$$3_widget$$4$$.is("[id]") ? $surrogateId$$3_widget$$4$$.attr("id") : $surrogateId$$3_widget$$4$$.uniqueId().attr("id");
        this.$_popUpDpDiv$.ojPopup("widget").attr($oj$$13$$.$DomUtils$.$SURROGATE_ID$, $surrogateId$$3_widget$$4$$);
        this.$_popUpDpDiv$.ojPopup("open", this.element, {my:$rtl$$ ? "right top" : "left top", at:$rtl$$ ? "right bottom" : "left bottom", collision:"fit"});
        return this;
      }
    }
  }});
  $oj$$13$$.Components.$setDefaultOptions$({ojInputDate:{firstDayOfWeek:$oj$$13$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$13$$.$LocaleData$.$getFirstDayOfWeek$();
  }), dayWide:$oj$$13$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$13$$.$LocaleData$.$getDayNames$("wide");
  }), dayNarrow:$oj$$13$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$13$$.$LocaleData$.$getDayNames$("narrow");
  }), monthWide:$oj$$13$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$13$$.$LocaleData$.$getMonthNames$("wide");
  }), monthAbbreviated:$oj$$13$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$13$$.$LocaleData$.$getMonthNames$("abbreviated");
  })}});
  $oj$$13$$.$__registerWidget$("oj.ojInputTime", $$$$13$$.oj.inputBase, {version:"1.0.0", widgetEventPrefix:"oj", _CLASS_NAMES:"oj-inputdatetime-input", _WIDGET_CLASS_NAMES:"oj-inputdatetime-time-only oj-component oj-inputdatetime oj-inputdatetime-input-container", _INPUT_HELPER_KEY:"inputHelp", _ATTR_CHECK:[{attr:"type", setMandatory:"text"}], $_TIME_PICKER_ID$:"ojInputTime", $_TRIGGER_CLASS$:"oj-inputdatetime-input-trigger", $_TRIGGER_TIME_CLASS$:"oj-inputdatetime-time-icon", options:{converter:$oj$$13$$.$Validation$.$converterFactory$($oj$$13$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME).createConverter({hour:"2-digit", 
  hour12:!0, minute:"2-digit"}), max:void 0, min:void 0, datePickerComp:null, timePicker:{timeIncrement:"00:30:00:00"}}, _InitOptions:function($originalDefaults$$9$$, $constructorOptions$$10$$) {
    this._super($originalDefaults$$9$$, $constructorOptions$$10$$);
    $oj$$13$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:!1, validateOption:!0}, {attribute:"title", defaultOptionValue:""}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"value", defaultOptionValue:null}, {attribute:"required", defaultOptionValue:!1, coerceDomValue:!0, validateOption:!0}, {attribute:"min", defaultOptionValue:null}, {attribute:"max", defaultOptionValue:null}], $constructorOptions$$10$$, this);
  }, $_InitBase$:function __InitBase$$1() {
    this.$_timePickerDefaultValidators$ = {};
    this.$_datePickerComp$ = this.options.datePickerComp;
    this.$_timePickerDisplay$ = $$$$13$$("\x3cdiv id\x3d'" + this.$_GetSubId$(this.$_TIME_PICKER_ID$) + "' class\x3d'oj-listbox-drop' style\x3d'display:none'\x3e\x3c/div\x3e");
    $$$$13$$("body").append(this.$_timePickerDisplay$);
    var $self$$69$$ = this;
    this.$_popUpTimePickerDisplay$ = this.$_timePickerDisplay$.ojPopup({initialFocus:"none", rootAttributes:{"class":"datetimepicker-dropdown"}, open:function() {
      var $selected$$11$$ = $$$$13$$("[aria-selected]", $self$$69$$.$_timePickerDisplay$);
      1 === $selected$$11$$.length && $$$$13$$($selected$$11$$);
      $$$$13$$("ul", $self$$69$$.$_timePickerDisplay$).focus();
    }});
  }, $_timepickerShowing$:function() {
    return this.$_popUpTimePickerDisplay$.ojPopup("isOpen");
  }, _ComponentCreate:function __ComponentCreate$$1() {
    this.$_InitBase$();
    var $ret$$22$$ = this._superApply(arguments);
    this.$_isContainedInDateTimePicker$() && !this.$_isDatePickerInline$() && (this._CLASS_NAMES = "");
    this.$_attachTrigger$();
    return $ret$$22$$;
  }, $_AfterCreate$:function() {
    var $ret$$23$$ = this._superApply(arguments);
    $disableEnableSpan$$(this.$_triggerNode$.children(), this.options.disabled);
    return $ret$$23$$;
  }, _setOption:function __setOption$$2($key$$72$$, $value$$178$$, $flags$$28$$) {
    var $retVal$$10$$ = null, $timeRangeOptions$$ = {};
    if ("value" === $key$$72$$) {
      return $value$$178$$ || ($value$$178$$ = null), $retVal$$10$$ = this._super($key$$72$$, $value$$178$$, $flags$$28$$), this.$_generateTime$(), $retVal$$10$$;
    }
    $retVal$$10$$ = this._superApply(arguments);
    "disabled" === $key$$72$$ ? ($value$$178$$ && this.hide(), $disableEnableSpan$$(this.$_triggerNode$.children(), $value$$178$$)) : "max" !== $key$$72$$ && "min" !== $key$$72$$ || !this.$_isIndependentInput$() ? "readOnly" === $key$$72$$ && $value$$178$$ && this.hide() : ($timeRangeOptions$$ = {min:this.options.min, max:this.options.max, converter:this.$_GetConverter$()}, this.$_timePickerDefaultValidators$[$oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE] = $oj$$13$$.$Validation$.$validatorFactory$($oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE).createValidator($timeRangeOptions$$), 
    this.$_AfterSetOptionValidators$());
    $key$$72$$ in {max:!0, min:!0, converter:!0, timePicker:!0} && this.$_generateTime$();
    return $retVal$$10$$;
  }, _destroy:function __destroy$$2() {
    var $retVal$$11$$ = this._super();
    this.$_triggerNode$ && this.$_triggerNode$.remove();
    this.$_timePickerDisplay$.remove();
    return $retVal$$11$$;
  }, $_AppendInputHelper$:function __AppendInputHelper$$2() {
    this.$_isIndependentInput$() && this._superApply(arguments);
  }, $_AppendInputHelperParent$:function __AppendInputHelperParent$$2() {
    return this.$_triggerNode$;
  }, $_onKeyDownHandler$:function __onKeyDownHandler$$2($event$$109$$) {
    if (this.$_isIndependentInput$()) {
      this._superApply(arguments);
      var $kc$$2$$ = $$$$13$$.ui.keyCode, $handled$$2$$ = !1;
      if (this.$_timepickerShowing$()) {
        switch($event$$109$$.keyCode) {
          case $kc$$2$$.TAB:
            this.hide();
            break;
          case $kc$$2$$.ESCAPE:
            this.hide();
            $handled$$2$$ = !0;
            break;
          case $kc$$2$$.UP:
          ;
          case $kc$$2$$.DOWN:
            $$$$13$$("ul", this.$_timePickerDisplay$).focus(), $handled$$2$$ = !0;
        }
      } else {
        switch($event$$109$$.keyCode) {
          case $kc$$2$$.UP:
          ;
          case $kc$$2$$.DOWN:
            this.show(), $handled$$2$$ = !0;
        }
      }
      if ($handled$$2$$ || $event$$109$$.keyCode === $kc$$2$$.ENTER) {
        return $event$$109$$.preventDefault(), $event$$109$$.stopPropagation(), !1;
      }
    }
  }, $_attachTrigger$:function __attachTrigger$$1() {
    var $createNewSpan$$ = this.$_isIndependentInput$(), $triggerContainer$$1$$ = $createNewSpan$$ ? $$$$13$$($$$$13$$("\x3cspan\x3e").addClass(this.$_TRIGGER_CLASS$)) : $$$$13$$("+ span", this.element), $triggerTime$$ = $$$$13$$("\x3cspan/\x3e").addClass(this.$_TRIGGER_TIME_CLASS$ + " oj-clickable-icon oj-component-icon");
    $triggerContainer$$1$$.append($triggerTime$$);
    var $self$$70$$ = this;
    $triggerTime$$.on("click", function() {
      $self$$70$$.$_timepickerShowing$() ? $self$$70$$.hide() : $self$$70$$.show();
    }).on("mouseenter", function() {
      $$$$13$$(this).addClass("oj-hover");
    }).on("mousedown", function() {
      $$$$13$$(this).addClass("oj-active");
    }).on("mouseleave", function() {
      $$$$13$$(this).removeClass("oj-hover oj-active");
    });
    this.$_triggerNode$ = $triggerContainer$$1$$;
    $createNewSpan$$ && this.element.after($triggerContainer$$1$$);
  }, $_inMinMaxRange$:function __inMinMaxRange($date$$13$$) {
    var $minDate$$4$$ = this.options.min ? $oj$$13$$.IntlConverterUtils.isoToLocalDate(this.options.min) : null, $maxDate$$4$$ = this.options.max ? $oj$$13$$.IntlConverterUtils.isoToLocalDate(this.options.max) : null;
    return null !== $minDate$$4$$ && $date$$13$$ < $minDate$$4$$ || null !== $maxDate$$4$$ && $date$$13$$ > $maxDate$$4$$;
  }, $_generateTime$:function __generateTime() {
    var $i$$184_processDate$$ = this.options.value ? $oj$$13$$.IntlConverterUtils.isoToLocalDate(this.options.value) : new Date, $timeNode$$ = $$$$13$$("\x3cul class\x3d'oj-listbox-results' tabindex\x3d'-1' role\x3d'listbox'\x3e\x3c/ul\x3e"), $selectedDateFormat$$ = this.$_getFormattedValue$(), $source$$10$$ = [], $j$$29$$;
    $i$$184_processDate$$.setHours(0);
    $i$$184_processDate$$.setMinutes(0);
    $i$$184_processDate$$.setSeconds(0);
    $i$$184_processDate$$.setMilliseconds(0);
    $source$$10$$ = this.$_getTimeSource$($i$$184_processDate$$);
    $selectedDateFormat$$ = $selectedDateFormat$$ || $source$$10$$[0].value;
    this.$_timePickerDisplay$.empty();
    $i$$184_processDate$$ = 0;
    for ($j$$29$$ = $source$$10$$.length;$i$$184_processDate$$ < $j$$29$$;$i$$184_processDate$$++) {
      var $value$$179$$ = $source$$10$$[$i$$184_processDate$$].value, $minMaxRange_node$$26$$ = $source$$10$$[$i$$184_processDate$$].minMaxRange, $liNode$$ = $$$$13$$("\x3cli class\x3d'oj-listbox-result " + ($minMaxRange_node$$26$$ ? "oj-disabled" : "") + "' role\x3d'presentation'\x3e"), $nodeId$$ = this.uuid + "_sel" + $i$$184_processDate$$, $minMaxRange_node$$26$$ = $$$$13$$("\x3cdiv class\x3d'oj-listbox-result-label' " + ($minMaxRange_node$$26$$ ? "aria-disabled " : "") + "data-value\x3d'" + $value$$179$$ + 
      "' role\x3d'option' id\x3d'" + $nodeId$$ + "'\x3e" + $source$$10$$[$i$$184_processDate$$].label + "\x3c/li\x3e");
      $selectedDateFormat$$ === $value$$179$$ && ($minMaxRange_node$$26$$.attr("aria-selected", "true"), $liNode$$.addClass("oj-hover"), $timeNode$$.attr("aria-activedescendant", $nodeId$$));
      $liNode$$.append($minMaxRange_node$$26$$);
      $timeNode$$.append($liNode$$);
    }
    this.$_timePickerDisplay$.append($timeNode$$);
    $$$$13$$(".oj-listbox-result", $timeNode$$).on("mousemove", function() {
      var $ref$$2$$ = $$$$13$$(this);
      $ref$$2$$.hasClass("oj-disabled") || ($$$$13$$(".oj-hover", $timeNode$$).removeClass("oj-hover"), $ref$$2$$.addClass("oj-hover"), $timeNode$$.attr("aria-activedescendant", $ref$$2$$.children()[0].id));
    });
    var $self$$71$$ = this;
    $timeNode$$.on("click", function($event$$110$$) {
      var $target$$78$$ = $$$$13$$($event$$110$$.target);
      $target$$78$$.hasClass("oj-disabled") || void 0 !== $target$$78$$.attr("aria-disabled") || ($self$$71$$.hide(), $self$$71$$.$_processTimeSelection$($event$$110$$));
    }).on("keydown", function($event$$111$$) {
      $self$$71$$.$_timeNodeKeyDown$($event$$111$$);
    });
  }, $_getTimeSource$:function __getTimeSource($date$$14$$) {
    var $source$$11$$ = [], $converter$$3$$ = this.$_GetConverter$();
    if ($date$$14$$) {
      var $JSCompiler_object_inline_millisecondIncr_3_splitted$$ = this.options.timePicker.timeIncrement.split(":");
      if (4 === $JSCompiler_object_inline_millisecondIncr_3_splitted$$.length) {
        var $JSCompiler_object_inline_hourIncr_0$$ = parseInt($JSCompiler_object_inline_millisecondIncr_3_splitted$$[0].substring(0), 10), $JSCompiler_object_inline_minuteIncr_1$$ = parseInt($JSCompiler_object_inline_millisecondIncr_3_splitted$$[1], 10), $JSCompiler_object_inline_secondIncr_2$$ = parseInt($JSCompiler_object_inline_millisecondIncr_3_splitted$$[2], 10), $JSCompiler_object_inline_millisecondIncr_3_splitted$$ = parseInt($JSCompiler_object_inline_millisecondIncr_3_splitted$$[3], 10), 
        $processDate$$1$$ = new Date($date$$14$$), $formatted$$6$$ = "";
        do {
          $formatted$$6$$ = $converter$$3$$.format($processDate$$1$$.toISOString()), $source$$11$$.push({label:$formatted$$6$$, value:$formatted$$6$$, minMaxRange:this.$_inMinMaxRange$($processDate$$1$$)}), $processDate$$1$$.setHours($processDate$$1$$.getHours() + $JSCompiler_object_inline_hourIncr_0$$), $processDate$$1$$.setMinutes($processDate$$1$$.getMinutes() + $JSCompiler_object_inline_minuteIncr_1$$), $processDate$$1$$.setSeconds($processDate$$1$$.getSeconds() + $JSCompiler_object_inline_secondIncr_2$$), 
          $processDate$$1$$.setMilliseconds($processDate$$1$$.getMilliseconds() + $JSCompiler_object_inline_millisecondIncr_3_splitted$$);
        } while ($processDate$$1$$.getDate() === $date$$14$$.getDate());
      } else {
        throw Error("timeIncrement value should be in the format of hh:mm:ss:SS");
      }
    }
    return $source$$11$$;
  }, $_timeNodeKeyDown$:function __timeNodeKeyDown($event$$112$$) {
    if (this.$_timepickerShowing$()) {
      var $kc$$3$$ = $$$$13$$.ui.keyCode, $handled$$3$$ = !1;
      switch($event$$112$$.keyCode) {
        case $kc$$3$$.TAB:
          this.hide();
          break;
        case $kc$$3$$.ESCAPE:
          this.hide();
          this.element.focus();
          $handled$$3$$ = !0;
          break;
        case $kc$$3$$.UP:
          this.$_processNextPrevSibling$($event$$112$$, "prev");
          $handled$$3$$ = !0;
          break;
        case $kc$$3$$.DOWN:
          this.$_processNextPrevSibling$($event$$112$$, "next");
          $handled$$3$$ = !0;
          break;
        case $kc$$3$$.ENTER:
          this.$_processTimeSelection$($event$$112$$), $handled$$3$$ = !0;
      }
      if ($handled$$3$$) {
        return $event$$112$$.preventDefault(), $event$$112$$.stopPropagation(), !1;
      }
    }
  }, $_processNextPrevSibling$:function __processNextPrevSibling($event$$113$$, $prevOrNext$$) {
    var $prevActive$$ = $$$$13$$(".oj-hover", this.$_timePickerDisplay$), $ulElement$$ = $$$$13$$("ul", this.$_timePickerDisplay$);
    if (1 === $prevActive$$.length) {
      var $node$$27$$ = $prevActive$$[$prevOrNext$$]();
      1 === $node$$27$$.length && ($prevActive$$.removeClass("oj-hover"), $node$$27$$.addClass("oj-hover"), $ulElement$$.attr("aria-activedescendant", $node$$27$$.children()[0].id));
    }
  }, $_processTimeSelection$:function __processTimeSelection($event$$114$$) {
    var $selected$$12_timePickerDisplay$$ = this.$_timePickerDisplay$, $prevSelected$$ = $$$$13$$("[aria-selected]", $selected$$12_timePickerDisplay$$), $ulElement$$1$$ = $$$$13$$("ul", $selected$$12_timePickerDisplay$$), $selected$$12_timePickerDisplay$$ = $$$$13$$(".oj-hover div", $selected$$12_timePickerDisplay$$);
    1 === $selected$$12_timePickerDisplay$$.length && (1 === $prevSelected$$.length && ($prevSelected$$.removeAttr("aria-selected"), $prevSelected$$.parent().removeClass("oj-hover")), $selected$$12_timePickerDisplay$$.attr("aria-selected", "true"), $selected$$12_timePickerDisplay$$.parent().addClass("oj-hover"), this.$_SetDisplayValue$($selected$$12_timePickerDisplay$$.attr("data-value")), this.$_SetValue$($selected$$12_timePickerDisplay$$.attr("data-value"), $event$$114$$), $ulElement$$1$$.attr("aria-activedescendant", 
    $selected$$12_timePickerDisplay$$[0].id), this.hide(), this.element.focus(), this.$_isContainedInDateTimePicker$() && this.$_datePickerComp$.widget.hide());
  }, $_onBlurHandler$:function __onBlurHandler$$2($event$$115$$) {
    this.$_isIndependentInput$() && this._superApply(arguments);
  }, show:function __show$$1() {
    if (!this.options.disabled && !this.options.readOnly) {
      this.$_isContainedInDateTimePicker$() && this.$_datePickerComp$.widget.hide();
      0 === this.$_timePickerDisplay$.children().length && this.$_generateTime$();
      this.$_timePickerDisplay$.width(this.element.parent().width());
      this.$_timePickerDisplay$.css({position:"relative"});
      var $rtl$$1$$ = this.$_IsRTL$(), $surrogateId$$4_widget$$5$$ = this.widget(), $surrogateId$$4_widget$$5$$ = $surrogateId$$4_widget$$5$$.is("[id]") ? $surrogateId$$4_widget$$5$$.attr("id") : $surrogateId$$4_widget$$5$$.uniqueId().attr("id");
      this.$_popUpTimePickerDisplay$.ojPopup("widget").attr($oj$$13$$.$DomUtils$.$SURROGATE_ID$, $surrogateId$$4_widget$$5$$);
      this.$_popUpTimePickerDisplay$.ojPopup("open", this.element, {my:$rtl$$1$$ ? "right top" : "left top", at:$rtl$$1$$ ? "right bottom" : "left bottom", collision:"fit"});
    }
  }, hide:function __hide$$1() {
    this.$_timepickerShowing$() && (this.$_popUpTimePickerDisplay$.ojPopup("close"), this.element.focus());
  }, refresh:function __refresh$$1() {
    return this._superApply(arguments) || this;
  }, $_SetDisplayValue$:function __setDisplayValue($displayValue$$6$$) {
    this.$_isIndependentInput$() && this._superApply(arguments);
    this.$_timepickerShowing$() && this.$_generateTime$();
  }, $_DoWrapElement$:function() {
    return this.$_isIndependentInput$();
  }, $_isIndependentInput$:function __isIndependentInput() {
    return!this.$_isContainedInDateTimePicker$() || this.$_isDatePickerInline$();
  }, _GetDefaultStyleClass:function() {
    return "oj-inputtime";
  }, $_GetElementValue$:function() {
    return this.options.value || "";
  }, $_GetImplicitValidators$:function() {
    var $ret$$24$$ = this._superApply(arguments), $minDate$$5$$ = this.options.min, $maxDate$$5$$ = this.options.max, $timeRangeOptions$$1$$ = {};
    null == $minDate$$5$$ && null == $maxDate$$5$$ || !this.$_isIndependentInput$() || ($timeRangeOptions$$1$$ = {min:$minDate$$5$$, max:$maxDate$$5$$, converter:this.$_GetConverter$()}, this.$_timePickerDefaultValidators$[$oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE] = $oj$$13$$.$Validation$.$validatorFactory$($oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE).createValidator($timeRangeOptions$$1$$));
    return $$$$13$$.extend(this.$_timePickerDefaultValidators$, $ret$$24$$);
  }, $_GetConverter$:function() {
    return this.options.converter ? this._superApply(arguments) : $$$$13$$.oj.ojInputTime.prototype.options.converter;
  }, $_checkScrollTop$:function() {
  }, $_getFormattedValue$:function __getFormattedValue() {
    var $converter$$4$$ = this.$_GetConverter$(), $date$$15$$ = this.options.value;
    return $date$$15$$ ? $converter$$4$$.format($date$$15$$) : "";
  }, $_isContainedInDateTimePicker$:function __isContainedInDateTimePicker() {
    return null !== this.$_datePickerComp$;
  }, $_isDatePickerInline$:function __isDatePickerInline() {
    return this.$_datePickerComp$.inline;
  }, getNodeBySubId:function($locator$$13$$) {
    var $node$$29$$ = null, $subId$$10$$ = $locator$$13$$ && $locator$$13$$.subId;
    $subId$$10$$ && ("oj-listbox-drop" === $subId$$10$$ ? $node$$29$$ = this.$_timePickerDisplay$[0] : "oj-inputdatetime-time-icon" === $subId$$10$$ && ($node$$29$$ = $$$$13$$(".oj-inputdatetime-time-icon", this.$_triggerNode$)[0]));
    return $node$$29$$ || this._superApply(arguments);
  }, getSubIdByNode:function($node$$30$$) {
    var $timeIcon$$ = $$$$13$$(".oj-inputdatetime-time-icon", this.$_triggerNode$), $subId$$11$$ = null;
    $node$$30$$ === this.$_timePickerDisplay$[0] ? $subId$$11$$ = "oj-listbox-drop" : $node$$30$$ === $timeIcon$$[0] && ($subId$$11$$ = "oj-inputdatetime-time-icon");
    return $subId$$11$$ || this._superApply(arguments);
  }, widget:function __widget() {
    return this.$_isIndependentInput$() ? this._super() : this.$_datePickerComp$.widget.widget();
  }});
  $oj$$13$$.$__registerWidget$("oj.ojInputDateTime", $$$$13$$.oj.ojInputDate, {version:"1.0.0", widgetEventPrefix:"oj", _WIDGET_CLASS_NAMES:"oj-inputdatetime-date-time oj-component oj-inputdatetime", _INPUT_HELPER_KEY:"inputHelpBoth", options:{converter:$oj$$13$$.$Validation$.$converterFactory$($oj$$13$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME).createConverter({day:"2-digit", month:"2-digit", year:"2-digit", hour:"2-digit", hour12:!0, minute:"2-digit"}), timePicker:{timeIncrement:"00:30:00:00"}}, 
  $_InitBase$:function __InitBase$$2() {
    this._super();
    this.$_timePickerElement$ = this.element;
    this.$_timeConverter$ = this.$_timePicker$ = null;
  }, _ComponentCreate:function __ComponentCreate$$2() {
    var $ret$$25$$ = this._super(), $timeConverter$$ = this.$_getTimePickerConverter$(this.$_GetConverter$());
    if (null === $timeConverter$$) {
      throw Error("Plase use ojInputDate if you do not have time portion");
    }
    if (this.$_isInLine$) {
      var $input$$3$$ = $$$$13$$("\x3cinput type\x3d'text'\x3e");
      $input$$3$$.insertAfter(this.element);
      this.$_timePickerElement$ = $input$$3$$;
    }
    this.$_timePicker$ = this.$_timePickerElement$.ojInputTime({converter:$timeConverter$$, min:this.options.min, max:this.options.max, value:this.$_getDate$().toISOString(), optionChange:$$$$13$$.proxy(this.$_timeSelected$, this), timePicker:this.options.timePicker, datePickerComp:{widget:this, inline:this.$_isInLine$}});
    this.$_timePicker$.ojInputTime("option", "disabled", this.options.disabled);
    return $ret$$25$$;
  }, _setOption:function __setOption$$3($key$$73$$, $value$$180$$, $flags$$29$$) {
    var $retVal$$12$$ = this._superApply(arguments);
    this.$_timePicker$ && ($key$$73$$ in {disabled:!0, min:!0, max:!0} ? this.$_timePicker$.ojInputTime("option", $key$$73$$, $value$$180$$) : "timePicker" === $key$$73$$ && "timeIncrement" === $flags$$29$$.subkey ? this.$_timePicker$.ojInputTime("option", "timePicker.timeIncrement", $value$$180$$.timeIncrement) : "converter" === $key$$73$$ && (this.$_timeConverter$ = null, this.$_timePicker$.ojInputTime("option", $key$$73$$, this.$_getTimePickerConverter$(this.$_GetConverter$()))));
    return $retVal$$12$$;
  }, _destroy:function __destroy$$3() {
    var $ret$$26$$ = this._super();
    this.$_timePicker$.ojInputTime("destroy");
    this.$_isInLine$ && this.$_timePickerElement$.remove();
    return $ret$$26$$;
  }, $_getTimePickerConverter$:function __getTimePickerConverter($converter$$5_resolvedOptions$$5_timeConverter$$1$$) {
    if (null !== this.$_timeConverter$) {
      return this.$_timeConverter$;
    }
    $converter$$5_resolvedOptions$$5_timeConverter$$1$$ = $converter$$5_resolvedOptions$$5_timeConverter$$1$$.resolvedOptions();
    var $options$$248$$ = {}, $params$$15$$ = "hour hour12 minute second millisecond timeFormat".split(" "), $i$$185$$, $j$$30$$;
    $i$$185$$ = 0;
    for ($j$$30$$ = $params$$15$$.length;$i$$185$$ < $j$$30$$;$i$$185$$++) {
      $params$$15$$[$i$$185$$] in $converter$$5_resolvedOptions$$5_timeConverter$$1$$ && ("timeFormat" === $params$$15$$[$i$$185$$] && ($options$$248$$.formatType = "time"), $options$$248$$[$params$$15$$[$i$$185$$]] = $converter$$5_resolvedOptions$$5_timeConverter$$1$$[$params$$15$$[$i$$185$$]]);
    }
    return $$$$13$$.isEmptyObject($options$$248$$) ? null : this.$_timeConverter$ = $converter$$5_resolvedOptions$$5_timeConverter$$1$$ = $oj$$13$$.$Validation$.$converterFactory$($oj$$13$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME).createConverter($options$$248$$);
  }, $_timeSelected$:function __timeSelected($event$$116$$, $params$$16$$) {
    "value" === $params$$16$$.option && $params$$16$$.value && this.$_SetValue$($copyTimeOver$$($params$$16$$.value ? $oj$$13$$.IntlConverterUtils.isoToLocalDate($params$$16$$.value) : new Date, this.$_getDate$()).toISOString(), $event$$116$$);
  }, $_onKeyDownHandler$:function __onKeyDownHandler$$3($event$$117$$) {
    var $kc$$4$$ = $$$$13$$.ui.keyCode, $handled$$4$$ = !1;
    switch($event$$117$$.keyCode) {
      case $kc$$4$$.UP:
      ;
      case $kc$$4$$.DOWN:
        $event$$117$$.shiftKey && (this.$_timePicker$.ojInputTime("show"), $handled$$4$$ = !0);
    }
    return $handled$$4$$ ? ($event$$117$$.preventDefault(), $event$$117$$.stopPropagation(), !1) : this._superApply(arguments);
  }, show:function __show$$2() {
    this.$_timePicker$.ojInputTime("hide");
    return this._super();
  }, showTimePicker:function __showTimePicker() {
    this.hide();
    return this.$_timePicker$.ojInputTime("show");
  }, hideTimePicker:function __hideTimePicker() {
    return this.$_timePicker$.ojInputTime("hide");
  }, refresh:function __refresh$$2() {
    return this._superApply(arguments) || this;
  }, $_SetDisplayValue$:function($displayValue$$7$$) {
    this._superApply(arguments);
    this.$_timePicker$ && this.$_timePicker$.ojInputTime("option", "value", this.options.value);
  }, getNodeBySubId:function($locator$$14$$) {
    var $subId$$12$$ = $locator$$14$$ && $locator$$14$$.subId;
    return!$subId$$12$$ || "oj-listbox-drop" !== $subId$$12$$ && "oj-inputdatetime-time-icon" !== $subId$$12$$ ? this._superApply(arguments) : this.$_timePicker$.ojInputTime("getNodeBySubId", $locator$$14$$);
  }, getSubIdByNode:function($node$$31$$) {
    return this.$_timePicker$.ojInputTime("getSubIdByNode", $node$$31$$) || this._superApply(arguments);
  }, $_GetConverter$:function() {
    return this.options.converter ? this._superApply(arguments) : $$$$13$$.oj.ojInputDateTime.prototype.options.converter;
  }, _GetMessagingLauncherElement:function() {
    return this.$_isInLine$ ? this.$_timePickerElement$ : this._super();
  }, _GetDefaultStyleClass:function() {
    return "oj-inputdatetime";
  }, $_GetTranslationsSectionName$:function() {
    return "oj-ojInputDate";
  }});
});
