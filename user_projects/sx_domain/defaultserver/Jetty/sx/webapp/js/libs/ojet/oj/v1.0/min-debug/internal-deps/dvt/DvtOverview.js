"use strict";
define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtTimeUtils$$ = {$supportsTouch$:function $$DvtTimeUtils$$$$supportsTouch$$() {
  return(0,D.$DvtAgent$isTouchDevice$$)()
}};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeUtils$$, D.$DvtObj$$, "DvtTimeUtils");
D.$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$2_startTime$$6$$, $endTime$$5$$, $number$$3_time$$13$$, $width$$92$$) {
  $number$$3_time$$13$$ = ($number$$3_time$$13$$ - $denominator$$2_startTime$$6$$) * $width$$92$$;
  $denominator$$2_startTime$$6$$ = $endTime$$5$$ - $denominator$$2_startTime$$6$$;
  return 0 == $number$$3_time$$13$$ || 0 == $denominator$$2_startTime$$6$$ ? 0 : $number$$3_time$$13$$ / $denominator$$2_startTime$$6$$
};
D.$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$7$$, $endTime$$6_number$$4$$, $pos$$43$$, $width$$93$$) {
  $endTime$$6_number$$4$$ = $pos$$43$$ * ($endTime$$6_number$$4$$ - $startTime$$7$$);
  return 0 == $endTime$$6_number$$4$$ || 0 == $width$$93$$ ? $startTime$$7$$ : $endTime$$6_number$$4$$ / $width$$93$$ + $startTime$$7$$
};
D.$DvtOverview$$ = function $$DvtOverview$$$($context$$224$$, $callback$$75$$, $callbackObj$$50$$) {
  this.Init($context$$224$$, $callback$$75$$, $callbackObj$$50$$)
};
(0,D.$goog$exportSymbol$$)("DvtOverview", D.$DvtOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtOverview$$, D.$DvtContainer$$, "DvtOverview");
D.$DvtOverview$$.prototype.Init = function $$DvtOverview$$$$Init$($context$$225$$, $callback$$76$$, $callbackObj$$51$$) {
  D.$DvtOverview$$.$superclass$.Init.call(this, $context$$225$$);
  this.$_callback$ = $callback$$76$$;
  this.$_callbackObj$ = $callbackObj$$51$$;
  this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
  if(this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$) {
    D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleTouchStart$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$HandleTouchMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$HandleTouchEnd$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, 
    this.$HandleShapeMouseOver$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandleMouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleMouseUp$, D.$JSCompiler_alias_FALSE$$, 
    this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandleMouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, this.$HandleKeyUp$, D.$JSCompiler_alias_FALSE$$, this))
  }
  this.$_initPos$ = 0
};
D.$DvtOverview$$.prototype.$setViewportRange$ = function $$DvtOverview$$$$$setViewportRange$$($start$$25$$, $end$$19$$) {
  var $viewportStart$$ = this.$getDatePosition$($start$$25$$), $slidingWindow$$1_viewportEnd$$ = this.$getDatePosition$($end$$19$$);
  if(!($viewportStart$$ < this.$_leftMargin$ || $slidingWindow$$1_viewportEnd$$ > (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)(this))) {
    var $size$$25$$ = window.Math.max($slidingWindow$$1_viewportEnd$$ - $viewportStart$$, (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)(this));
    0 < $size$$25$$ && (0 <= $viewportStart$$ && $slidingWindow$$1_viewportEnd$$ <= this.$Width$) && ($slidingWindow$$1_viewportEnd$$ = this.$getChildAt$(1), this.$isRTL$() ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow$$1_viewportEnd$$, this.$Width$ - ($viewportStart$$ + $size$$25$$)) : (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow$$1_viewportEnd$$, $viewportStart$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $slidingWindow$$1_viewportEnd$$, 
    $size$$25$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this))
  }
};
D.$JSCompiler_StaticMethods_isFeatureOff$$ = function $$JSCompiler_StaticMethods_isFeatureOff$$$($JSCompiler_StaticMethods_isFeatureOff$self$$) {
  return $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : -1 != $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$.indexOf("zoom")
};
D.$DvtOverview$$.prototype.$render$ = function $$DvtOverview$$$$$render$$($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$) {
  if($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ == D.$JSCompiler_alias_NULL$$) {
    var $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ = this.$_start$, $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$ = this.$_end$, $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$ = 
    this.$getChildAt$(1), $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$);
    $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$ != D.$JSCompiler_alias_NULL$$ && 0 != $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$ && (this.$_renderStart$ = D.$DvtTimeUtils$$.$getPositionDate$($day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$, 
    $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$, $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$, this.$Width$));
    this.$removeChildren$()
  }
  $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ != D.$JSCompiler_alias_NULL$$ && $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$ != D.$JSCompiler_alias_NULL$$ && (this.$Width$ = $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, this.$Height$ = $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$);
  $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ && ($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ = this.$Parse$($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$), 
  this.$_applyParsedProperties$($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$));
  $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ = this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$;
  this.$createBackground$($actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$);
  if($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$) {
    $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$ = ($day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ = this.$isVertical$()) ? new D.$DvtRect$$(this.$_context$, 
    0, 0, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, 0, "window") : new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, "window");
    $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$);
    if(!(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)(this)) {
      var $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$ = (0,D.$JSCompiler_StaticMethods_getHandleSize$$)(), $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)();
      if($day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$) {
        var $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ = ($actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ - 36) / 2, $leftHandle$$inline_4324_leftHandleCmds$$inline_4316$$ = D.$DvtPathUtils$$.moveTo($handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$, 0) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 3, 6, 
        $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 8, 8) + D.$DvtPathUtils$$.lineTo($handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 28, 8) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 33, 6, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 36, 0);
        D.$DvtPathUtils$$.closePath();
        $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$ = D.$DvtPathUtils$$.moveTo($handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$, 0) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 3, -6, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 8, -8) + D.$DvtPathUtils$$.lineTo($handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 
        28, -8) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 33, -6, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 36, 0);
        D.$DvtPathUtils$$.closePath();
        var $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$, "lhb"), $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$ = 
        new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$, "rhb"), $cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$ = "row-resize";
        if(this.$_handleBackgroundImage$) {
          var $leftGrippy$$inline_4321$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, 10), $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, 
          10)
        }else {
          $leftGrippy$$inline_4321$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$), $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$)
        }
      }else {
        $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ = ($bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$ - 36) / 2, $leftHandle$$inline_4324_leftHandleCmds$$inline_4316$$ = D.$DvtPathUtils$$.moveTo(0, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$) + D.$DvtPathUtils$$.$quadTo$(6, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 3, 8, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 
        8) + D.$DvtPathUtils$$.lineTo(8, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 28) + D.$DvtPathUtils$$.$quadTo$(6, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 33, 0, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 36), D.$DvtPathUtils$$.closePath(), $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$ = 
        D.$DvtPathUtils$$.moveTo(0, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$) + D.$DvtPathUtils$$.$quadTo$(-6, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 3, -8, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 8) + D.$DvtPathUtils$$.lineTo(-8, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 28) + D.$DvtPathUtils$$.$quadTo$(-6, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 
        33, 0, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ + 36), D.$DvtPathUtils$$.closePath(), $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$ = new D.$DvtRect$$(this.$_context$, 0 - $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, 
        0, $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, "lhb"), $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$ = new D.$DvtRect$$(this.$_context$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, 
        0, $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, "rhb"), $cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$ = "col-resize", this.$_handleBackgroundImage$ ? ($leftGrippy$$inline_4321$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$), 
        $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$)) : ($leftGrippy$$inline_4321$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$), $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, 
        $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$))
      }
      $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$);
      $leftHandle$$inline_4324_leftHandleCmds$$inline_4316$$ = new D.$DvtPath$$(this.$_context$, $leftHandle$$inline_4324_leftHandleCmds$$inline_4316$$, "lh");
      $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$ = new D.$DvtPath$$(this.$_context$, $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$, "rh");
      $leftHandle$$inline_4324_leftHandleCmds$$inline_4316$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle$$inline_4324_leftHandleCmds$$inline_4316$$.$setSolidStroke$(this.$_handleFillColor$);
      $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$.$setSolidFill$(this.$_handleFillColor$);
      $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ((0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($leftHandle$$inline_4324_leftHandleCmds$$inline_4316$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$));
      $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$.setCursor($cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$);
      $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$.setCursor($cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$);
      $leftHandle$$inline_4324_leftHandleCmds$$inline_4316$$.setCursor($cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$);
      $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$.setCursor($cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$);
      $leftGrippy$$inline_4321$$.setCursor($cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$);
      $handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$.setCursor($cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$);
      $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$addChild$($color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$);
      $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$addChild$($leftHandle$$inline_4324_leftHandleCmds$$inline_4316$$);
      $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$addChild$($leftGrippy$$inline_4321$$);
      $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$addChild$($handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$);
      $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$addChild$($end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$);
      $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$addChild$($handleX$$inline_4315_handleY$$inline_4323_rightGrippy$$inline_4322$$)
    }
    $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.setCursor("move");
    this.$addChild$($end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$);
    $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$ = $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ ? new D.$DvtLine$$(this.$_context$, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ - 
    this.$getTimeAxisWidth$(), 0, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ - this.$getTimeAxisWidth$(), $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, "tab") : "above" == this.$_overviewPosition$ ? new D.$DvtLine$$(this.$_context$, 0, this.$getTimeAxisHeight$(), $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, 
    this.$getTimeAxisHeight$(), "tab") : new D.$DvtLine$$(this.$_context$, 0, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$ - this.$getTimeAxisHeight$(), $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$ - this.$getTimeAxisHeight$(), "tab");
    $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$);
    this.$_timeAxisTopBar$ = $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$;
    this.$addChild$($end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$);
    this.$isLeftAndRightFilterRendered$() && ($day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ ? ($end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, 0, "lbg"), $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, 
    0, "rbg")) : ($end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, "lbg"), $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, "rbg")), $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$setSolidFill$(this.$_leftFilterPanelColor$, this.$_leftFilterPanelAlpha$), this.$addChild$($end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$), 
    $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), this.$addChild$($color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$), D.$DvtTimeUtils$$.$supportsTouch$() && $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ != 
    D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ ? ($day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, "lbgrh"), $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, "rbgrh")) : ($day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, "lbgrh"), $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, "rbgrh")), $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$.$setSolidFill$(this.$_leftFilterPanelColor$, 
    0), this.$addChild$($day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$), $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$.$setSolidFill$(this.$_rightFilterPanelColor$, 
    0), this.$addChild$($actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$)))
  }
  this.$updateTimeAxis$($actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$);
  if(this.$_formattedTimeRanges$ != D.$JSCompiler_alias_NULL$$) {
    for($actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ = 0;$actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ < this.$_formattedTimeRanges$.length;$actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$++) {
      $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$ = this.$_formattedTimeRanges$[$actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$], $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ = 
      $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$ = $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, $cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$ = 
      (0,window.parseInt)($color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$.$getAttr$("rs"), 10), $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$ = (0,window.parseInt)($color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$.$getAttr$("re"), 
      10), $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$ = $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$.$getAttr$("c"), $cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$ != D.$JSCompiler_alias_NULL$$ && $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$ != 
      D.$JSCompiler_alias_NULL$$ && ($handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$ = this.$getDatePosition$($cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$), $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$ = 
      this.$getDatePosition$($end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$) - $cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$, this.$isRTL$() && ($cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$ = $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$ - $cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$ - 
      $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$), $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ = this.$isVertical$() ? new D.$DvtRect$$(this.$_context$, 0, $cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$, 
      $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ - this.$getTimeAxisWidth$(), $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$, "ftr") : new D.$DvtRect$$(this.$_context$, $cursor$$inline_4320_rangeStart$$inline_10331_rangeStart_pos$$inline_10335$$, 
      "above" == this.$_overviewPosition$ ? this.$getTimeAxisHeight$() : 0, $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$, $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$ - this.$getTimeAxisHeight$(), "ftr"), $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$ != 
      D.$JSCompiler_alias_NULL$$ && $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$.$setSolidFill$($color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$, 0.4), $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$.setCursor("move"), 
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$), this.$addChild$($day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$))
    }
  }
  this.$_currentTime$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)(this.$_currentTime$) || ($actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ = this.$getDatePosition$(this.$_currentTime$), this.$isVertical$() ? $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ = 
  new D.$DvtLine$$(this.$_context$, 0, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, 
  "ocd") : (this.$isRTL$() && ($actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ = $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ - $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$), 
  $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ = new D.$DvtLine$$(this.$_context$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, 
  0, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, "ocd")), $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$), this.$addChild$($actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$));
  this.$parseDataXML$($actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$);
  $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ && ($end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$ = this.$getChildAt$(1), this.$isVertical$() ? ($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ = 
  $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$getY$(), $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ = $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$getY$() + 
  $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.getHeight() - 1, this.$isFlashEnvironment$() || (0,D.$DvtAgent$isPlatformWebkit$$)() ? ($day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ = 
  0, $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$ = $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ - 1) : ($day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ = 1, $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$ = 
  $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$), $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$ = new D.$DvtLine$$(this.$_context$, 0, $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, 
  $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, "lh"), $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$ = new D.$DvtLine$$(this.$_context$, 
  0, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, 
  "rh"), $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$, 0, $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$, 
  $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, "ltb"), $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$, 
  $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, 
  "rtb"), $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$ = new D.$DvtLine$$(this.$_context$, $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$, $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$, 
  $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, "bb"), $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$, 
  $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, 
  "tb")) : ($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ = 1, this.$isFlashEnvironment$() && ($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ = 0), $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ = 
  $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$ - 1, $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ = $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$getX$(), 
  $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$ = $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$getX$() + $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.getWidth() - 
  1, $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$, $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, 
  $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, "lh"), $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$ = 
  new D.$DvtLine$$(this.$_context$, $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$, $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, 
  "rh"), $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$ = new D.$DvtLine$$(this.$_context$, 0, window.Math.max(0, $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ - 1), $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ + 
  1, window.Math.max(0, $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ - 1), "ltb"), $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ = new D.$DvtLine$$(this.$_context$, $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$ - 1, window.Math.max(0, 
  $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ - 1), $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, window.Math.max(0, $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ - 
  1), "rtb"), $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, 
  $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, "bb"), $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ = 
  new D.$DvtLine$$(this.$_context$, $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$, $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, $handleSize$$inline_4312_right$$inline_4352_rightHandleBackground$$inline_4319_size$$inline_10334$$, 
  $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, "tb")), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$), "none" != this.$_windowBorderLeftStyle$ && $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$.$setSolidStroke$(this.$_windowBorderLeftColor$), 
  this.$addChild$($end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$), "none" != this.$_windowBorderRightStyle$ && $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$.$setSolidStroke$(this.$_windowBorderRightColor$), this.$addChild$($color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$), 
  "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$.$setSolidStroke$(this.$_borderTopColor$), $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$.$setSolidStroke$(this.$_borderTopColor$)), this.$addChild$($end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$), 
  this.$addChild$($actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$), "none" != this.$_windowBorderBottomStyle$ && $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$.$setSolidStroke$(this.$_windowBorderBottomColor$), this.$addChild$($bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$), "none" != this.$_windowBorderTopStyle$ && $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$.$setSolidStroke$(this.$_windowBorderTopColor$), 
  this.$addChild$($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$), this.$isFlashEnvironment$() && ($actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ = this.$isVertical$() ? D.$DvtPathUtils$$.moveTo(6, 0) + D.$DvtPathUtils$$.lineTo(0, 5) + D.$DvtPathUtils$$.lineTo(5, 5) + D.$DvtPathUtils$$.lineTo(5, 
  17) + D.$DvtPathUtils$$.lineTo(0, 17) + D.$DvtPathUtils$$.lineTo(6, 22) + D.$DvtPathUtils$$.lineTo(12, 17) + D.$DvtPathUtils$$.lineTo(7, 17) + D.$DvtPathUtils$$.lineTo(7, 5) + D.$DvtPathUtils$$.lineTo(12, 5) + D.$DvtPathUtils$$.closePath() : D.$DvtPathUtils$$.moveTo(5, 0) + D.$DvtPathUtils$$.lineTo(0, 6) + D.$DvtPathUtils$$.lineTo(5, 12) + D.$DvtPathUtils$$.lineTo(5, 7) + D.$DvtPathUtils$$.lineTo(17, 7) + D.$DvtPathUtils$$.lineTo(17, 12) + D.$DvtPathUtils$$.lineTo(22, 6) + D.$DvtPathUtils$$.lineTo(17, 
  0) + D.$DvtPathUtils$$.lineTo(17, 4) + D.$DvtPathUtils$$.lineTo(5, 4) + D.$DvtPathUtils$$.lineTo(5, 0) + D.$DvtPathUtils$$.closePath(), $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ = new D.$DvtPath$$(this.$_context$, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, "arr"), $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$.$setSolidFill$("#ffffff"), 
  $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$.$setSolidStroke$("#000000"), $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$addChild$($actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$), 
  this.$_resizeArrow$ = $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$), $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ = this.$isVertical$(), $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$ = this.$getChildAt$(1), $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ = 
  (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ = $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ ? this.$Height$ : this.$Width$, $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$ = 
  this.$_width$, $color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$ = this.$_start$, $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$ = this.$_end$, $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ = 
  this.$_renderStart$, $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ = D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$, $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$, 
  0, $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$), $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$ = D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_10333_elem$$inline_10328_leftHandleBackground$$inline_4318_rightBackground$$inline_4328_rightHandle$$inline_4354_slidingWindow$$2_start$$inline_4370$$, 
  $end$$inline_4371_leftTopBar$$inline_4355_rangeEnd$$inline_10332_rangeWidth$$inline_10336_rightHandle$$inline_4325_rightHandleCmds$$inline_4317_slidingWindowPos$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, $end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$), 
  $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ = this.$getDatePosition$($day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$), $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ = 
  window.Math.min($actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, this.$getDatePosition$($end$$20_height$$inline_10330_leftBackground$$inline_4327_leftHandle$$inline_4353_rangeEndTime$$inline_4374_slidingWindow$$inline_4311_slidingWindow$$inline_4348_timeAxisTopBar$$inline_4326_timelineWidth$$inline_4369$$)), $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ = 
  this.$getDatePosition$($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$), $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ -= $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$, 
  this.$isRTL$() ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ - $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ - $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$) : 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$), 
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this), $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$ = this.$_width$, $interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$ = this.$_start$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$ = 
  this.$_end$, $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, 
  1, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$), $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, 
  $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, 2, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$), $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$ = 
  D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$, 
  $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$), this.$_increment$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$141_props$$22_renderStart$$inline_4372_renderStartPos$$inline_4377_start$$inline_10342_top$$inline_4349_topBar$$inline_4358_vertical$$inline_4365$$, $actualSize$$inline_4368_bottom$$inline_4350_end$$inline_10343_handleStart$$inline_4313_i$$inline_4337_line$$inline_4343_newWidth$$inline_4378_rangeEndPos$$inline_4376_rightBackgroundResizeHandle$$inline_4330_time_pos$$inline_4342$$, 
  $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$, $bottomBar$$inline_4357_height$$61_timelineWidth$$inline_10341_window$$inline_4366$$) - $day1$$inline_10344_displayable$$inline_10337_left$$inline_4351_leftBackgroundResizeHandle$$inline_4329_pos1$$inline_10346_rangeStartPos$$inline_4375_rangeStartTime$$inline_4373_start$$26_vertical$$inline_4310_width$$inline_10329$$);
  this.$_initialFocusTime$ != D.$JSCompiler_alias_NULL$$ && (this.$_initPos$ = window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
  0 < this.$_initPos$ && ($actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ = this.$_initPos$ / this.$_increment$, this.$isRTL$() && ($actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$ = 0 - $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$), 
  (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $actualAmount$$inline_4382_arrow$$inline_4362_arrowCmds$$inline_4361_day2$$inline_10345_rightTopBar$$inline_4356_size$$inline_4367_width$$78$$))
};
D.$DvtOverview$$.prototype.render = D.$DvtOverview$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new D.$DvtOverviewParser$$(this)
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($obj$$143$$) {
  return this.$getParser$($obj$$143$$).parse($obj$$143$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$23$$) {
  this.$_start$ = $props$$23$$.start;
  this.$_end$ = $props$$23$$.end;
  this.$_width$ = $props$$23$$.width;
  this.$_renderStart$ = $props$$23$$.$renderStart$;
  this.$_currentTime$ = $props$$23$$.currentTime;
  this.$_initialFocusTime$ = $props$$23$$.$initialFocusTime$;
  this.$_animationOnClick$ = $props$$23$$.$animationOnClick$;
  this.$_leftMargin$ = window.Math.max(0, $props$$23$$.$leftMargin$);
  this.$_rightMargin$ = window.Math.max(0, $props$$23$$.$rightMargin$);
  (0,window.isNaN)(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
  (0,window.isNaN)(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
  this.$_orientation$ = $props$$23$$.orientation;
  this.$_overviewPosition$ = $props$$23$$.$overviewPosition$;
  this.$_isRtl$ = $props$$23$$.$isRtl$;
  $props$$23$$.$featuresOff$ != D.$JSCompiler_alias_NULL$$ && (this.$_featuresOff$ = $props$$23$$.$featuresOff$.split(" "));
  $props$$23$$.$minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ && 0 < $props$$23$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $props$$23$$.$minimumWindowSize$);
  this.$_borderStyles$ = $props$$23$$.$borderStyles$;
  this.$_timeAxisInfo$ = $props$$23$$.$timeAxisInfo$;
  $props$$23$$.$timeAxisInfo$ != D.$JSCompiler_alias_NULL$$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
  this.$_formattedTimeRanges$ = $props$$23$$.$formattedTimeRanges$;
  this.$_borderTopStyle$ = $props$$23$$.borderTopStyle;
  this.$_borderTopColor$ = $props$$23$$.borderTopColor;
  this.$_windowBackgroundColor$ = $props$$23$$.$windowBackgroundColor$;
  this.$_windowBackgroundAlpha$ = $props$$23$$.$windowBackgroundAlpha$;
  this.$_windowBorderTopStyle$ = $props$$23$$.$windowBorderTopStyle$;
  this.$_windowBorderRightStyle$ = $props$$23$$.$windowBorderRightStyle$;
  this.$_windowBorderBottomStyle$ = $props$$23$$.$windowBorderBottomStyle$;
  this.$_windowBorderLeftStyle$ = $props$$23$$.$windowBorderLeftStyle$;
  this.$_windowBorderTopColor$ = $props$$23$$.$windowBorderTopColor$;
  this.$_windowBorderRightColor$ = $props$$23$$.$windowBorderRightColor$;
  this.$_windowBorderBottomColor$ = $props$$23$$.$windowBorderBottomColor$;
  this.$_windowBorderLeftColor$ = $props$$23$$.$windowBorderLeftColor$;
  this.$_handleTextureColor$ = $props$$23$$.$handleTextureColor$;
  this.$_handleFillColor$ = $props$$23$$.$handleFillColor$;
  this.$_handleBackgroundImage$ = $props$$23$$.$handleBackgroundImage$;
  this.$_handleWidth$ = $props$$23$$.$handleWidth$;
  this.$_handleHeight$ = $props$$23$$.$handleHeight$;
  this.$_overviewBackgroundColor$ = $props$$23$$.$overviewBackgroundColor$;
  this.$_currentTimeIndicatorColor$ = $props$$23$$.$currentTimeIndicatorColor$;
  this.$_timeIndicatorColor$ = $props$$23$$.$timeIndicatorColor$;
  this.$_timeAxisBarColor$ = $props$$23$$.$timeAxisBarColor$;
  this.$_timeAxisBarOpacity$ = $props$$23$$.$timeAxisBarOpacity$;
  this.$_leftFilterPanelColor$ = $props$$23$$.$leftFilterPanelColor$;
  this.$_leftFilterPanelAlpha$ = $props$$23$$.$leftFilterPanelAlpha$;
  this.$_rightFilterPanelColor$ = $props$$23$$.$rightFilterPanelColor$;
  this.$_rightFilterPanelAlpha$ = $props$$23$$.$rightFilterPanelAlpha$
};
D.$JSCompiler_prototypeAlias$$.$getDatePosition$ = function $$JSCompiler_prototypeAlias$$$$getDatePosition$$($date$$19$$) {
  return window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $date$$19$$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))) + this.$_leftMargin$
};
D.$JSCompiler_prototypeAlias$$.$getPositionDate$ = function $$JSCompiler_prototypeAlias$$$$getPositionDate$$($pos$$33$$) {
  return D.$DvtTimeUtils$$.$getPositionDate$(this.$_start$, this.$_end$, window.Math.max(0, $pos$$33$$ - this.$_leftMargin$), (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$isRTL$ = function $$JSCompiler_prototypeAlias$$$$isRTL$$() {
  return!this.$isVertical$() && "true" == this.$_isRtl$
};
D.$JSCompiler_prototypeAlias$$.$isVertical$ = function $$JSCompiler_prototypeAlias$$$$isVertical$$() {
  return"vertical" == this.$_orientation$
};
D.$JSCompiler_StaticMethods_getOverviewSize$$ = function $$JSCompiler_StaticMethods_getOverviewSize$$$($JSCompiler_StaticMethods_getOverviewSize$self$$) {
  return $JSCompiler_StaticMethods_getOverviewSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getOverviewSize$self$$.$Height$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getOverviewSize$self$$.$Width$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMaximumPosition$$ = function $$JSCompiler_StaticMethods_getMaximumPosition$$$($JSCompiler_StaticMethods_getMaximumPosition$self$$) {
  return $JSCompiler_StaticMethods_getMaximumPosition$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Height$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Width$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMinimumWindowSize$$ = function $$JSCompiler_StaticMethods_getMinimumWindowSize$$$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$) {
  return $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ : $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ = D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$, $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_end$, 
  $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$ + $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_getMinimumWindowSize$self$$)), $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$) : 10
};
D.$JSCompiler_StaticMethods_getHandleStart$$ = function $$JSCompiler_StaticMethods_getHandleStart$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? (0,D.$JSCompiler_StaticMethods_getHandleSize$$)() / 2 : 0
};
D.$JSCompiler_StaticMethods_getHandleSize$$ = function $$JSCompiler_StaticMethods_getHandleSize$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? 30 : 10
};
D.$JSCompiler_StaticMethods_isHandle$$ = function $$JSCompiler_StaticMethods_isHandle$$$($drawable$$24$$) {
  var $id$$122$$ = $drawable$$24$$.getId();
  return"lh" == $id$$122$$ || "rh" == $id$$122$$ || "lhb" == $id$$122$$ || "rhb" == $id$$122$$ || "grpy" == $id$$122$$ || "lbgrh" == $id$$122$$ || "rbgrh" == $id$$122$$ || $drawable$$24$$.getParent() != D.$JSCompiler_alias_NULL$$ && "grpy" == $drawable$$24$$.getParent().getId()
};
D.$DvtOverview$$.prototype.$getTimeAxisWidth$ = function $$DvtOverview$$$$$getTimeAxisWidth$$() {
  if(this.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if(this.$_timeAxisWidth$ == D.$JSCompiler_alias_NULL$$) {
    var $width$$79$$ = (0,window.parseInt)(this.$_timeAxisInfo$.width, 10);
    this.$_timeAxisWidth$ = !(0,window.isNaN)($width$$79$$) && $width$$79$$ < this.$Width$ ? $width$$79$$ : 40
  }
  return this.$_timeAxisWidth$
};
D.$DvtOverview$$.prototype.$getTimeAxisHeight$ = function $$DvtOverview$$$$$getTimeAxisHeight$$() {
  if(this.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if(this.$_timeAxisHeight$ == D.$JSCompiler_alias_NULL$$) {
    var $height$$62$$ = (0,window.parseInt)(this.$_timeAxisInfo$.height, 10);
    this.$_timeAxisHeight$ = !(0,window.isNaN)($height$$62$$) && $height$$62$$ < this.$Height$ ? $height$$62$$ : 20
  }
  return this.$_timeAxisHeight$
};
D.$JSCompiler_StaticMethods_getPageX$$ = function $$JSCompiler_StaticMethods_getPageX$$$($event$$288$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$288$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$288$$.targetTouches.length ? $event$$288$$.targetTouches[0].pageX : D.$JSCompiler_alias_NULL$$ : $event$$288$$.pageX
};
D.$JSCompiler_StaticMethods_getPageY$$ = function $$JSCompiler_StaticMethods_getPageY$$$($event$$289$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$289$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$289$$.targetTouches.length ? $event$$289$$.targetTouches[0].pageY : D.$JSCompiler_alias_NULL$$ : $event$$289$$.pageY
};
D.$DvtOverview$$.prototype.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_StaticMethods_getLeftBackground$$ = function $$JSCompiler_StaticMethods_getLeftBackground$$$($JSCompiler_StaticMethods_getLeftBackground$self$$) {
  return $JSCompiler_StaticMethods_getLeftBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getLeftBackground$self$$.$getChildAt$(3) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackground$$ = function $$JSCompiler_StaticMethods_getRightBackground$$$($JSCompiler_StaticMethods_getRightBackground$self$$) {
  return $JSCompiler_StaticMethods_getRightBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getRightBackground$self$$.$getChildAt$(4) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$ = function $$JSCompiler_StaticMethods_getRightBackgroundHandle$$$($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) {
  return $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) ? $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$getChildAt$(6) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_setLinePos$$ = function $$JSCompiler_StaticMethods_setLinePos$$$($JSCompiler_StaticMethods_setLinePos$self$$, $line$$15$$, $pos1$$, $pos2$$) {
  $JSCompiler_StaticMethods_setLinePos$self$$.$isVertical$() ? (-1 != $pos1$$ && $line$$15$$.$setY1$($pos1$$), -1 != $pos2$$ && $line$$15$$.$setY2$($pos2$$)) : (-1 != $pos1$$ && $line$$15$$.$setX1$($pos1$$), -1 != $pos2$$ && $line$$15$$.$setX2$($pos2$$))
};
D.$JSCompiler_StaticMethods_getLinePos1$$ = function $$JSCompiler_StaticMethods_getLinePos1$$$($JSCompiler_StaticMethods_getLinePos1$self$$, $line$$16$$) {
  return $JSCompiler_StaticMethods_getLinePos1$self$$.$isVertical$() ? $line$$16$$.$getY1$() : $line$$16$$.$getX1$()
};
D.$DvtOverview$$.prototype.$_findDrawable$ = function $$DvtOverview$$$$$_findDrawable$$($event$$290_target$$62$$) {
  $event$$290_target$$62$$ = $event$$290_target$$62$$.target;
  if($event$$290_target$$62$$ != D.$JSCompiler_alias_NULL$$) {
    var $id$$123$$ = $event$$290_target$$62$$.getId();
    if($id$$123$$ == D.$JSCompiler_alias_NULL$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    if("_border" == $id$$123$$.substr($id$$123$$.length - 7)) {
      return this.$getChildAfter$($event$$290_target$$62$$)
    }
    if("tick" != $id$$123$$.substr(0, 4) && "ltb" != $id$$123$$ && "rtb" != $id$$123$$ && "bb" != $id$$123$$ && "tab" != $id$$123$$) {
      return $event$$290_target$$62$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_isMovable$$ = function $$JSCompiler_StaticMethods_isMovable$$$($drawable$$25$$) {
  return"window" == $drawable$$25$$.getId() || "ftr" == $drawable$$25$$.getId() || "sta" == $drawable$$25$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$25$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtOverview$$.prototype.$isFlashEnvironment$ = function $$DvtOverview$$$$$isFlashEnvironment$$() {
  return window && window.$isFlashEnvironment$
};
D.$DvtOverview$$.prototype.$createBackground$ = function $$DvtOverview$$$$$createBackground$$($width$$80$$, $height$$63$$) {
  var $background$$5$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $width$$80$$, $height$$63$$, "bg");
  $background$$5$$.$setSolidFill$(this.$_overviewBackgroundColor$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$5$$);
  this.$addChild$($background$$5$$);
  return $background$$5$$
};
D.$JSCompiler_StaticMethods_createGrippyImage$$ = function $$JSCompiler_StaticMethods_createGrippyImage$$$($JSCompiler_StaticMethods_createGrippyImage$self$$, $width$$82$$, $height$$65$$) {
  return new D.$DvtImage$$($JSCompiler_StaticMethods_createGrippyImage$self$$.$_context$, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleBackgroundImage$, ($width$$82$$ - $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleWidth$) / 2, ($height$$65$$ - $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleHeight$) / 2, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleWidth$, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleHeight$, "grpy")
};
D.$JSCompiler_StaticMethods_createGrippy$$ = function $$JSCompiler_StaticMethods_createGrippy$$$($JSCompiler_StaticMethods_createGrippy$self$$, $handlePos$$) {
  var $grippy$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, "grpy"), $color$$37$$ = $JSCompiler_StaticMethods_createGrippy$self$$.$_handleTextureColor$;
  if($JSCompiler_StaticMethods_createGrippy$self$$.$isVertical$()) {
    for(var $startx$$1$$ = 8 + $handlePos$$, $starty$$1$$ = 3, $i$$438$$ = 0;9 > $i$$438$$;$i$$438$$++) {
      var $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 2 * $i$$438$$, $starty$$1$$, $startx$$1$$ + 2 * $i$$438$$ + 1, $starty$$1$$, "dot1" + $i$$438$$);
      $dot$$.$setSolidStroke$($color$$37$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 1 + 2 * $i$$438$$, $starty$$1$$, $startx$$1$$ + 1 + 2 * $i$$438$$ + 1, $starty$$1$$, "dot2" + $i$$438$$);
      $dot$$.$setSolidStroke$($color$$37$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 2 * $i$$438$$, $starty$$1$$, $startx$$1$$ + 2 * $i$$438$$ + 1, $starty$$1$$, "dot3" + $i$$438$$);
      $dot$$.$setSolidStroke$($color$$37$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$1$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 18, $starty$$1$$, $startx$$1$$ + 18 + 1, $starty$$1$$, "dot4");
    $dot$$.$setSolidStroke$($color$$37$$);
    $grippy$$.$addChild$($dot$$);
    $starty$$1$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 18, $starty$$1$$, $startx$$1$$ + 18 + 1, $starty$$1$$, "dot5")
  }else {
    $startx$$1$$ = 3;
    $starty$$1$$ = 8 + $handlePos$$;
    for($i$$438$$ = 0;9 > $i$$438$$;$i$$438$$++) {
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 2 * $i$$438$$, $startx$$1$$, $starty$$1$$ + 2 * $i$$438$$ + 1, "dot1" + $i$$438$$), $dot$$.$setSolidStroke$($color$$37$$), $grippy$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 1 + 2 * $i$$438$$, $startx$$1$$, $starty$$1$$ + 1 + 2 * $i$$438$$ + 1, "dot2" + $i$$438$$), $dot$$.$setSolidStroke$($color$$37$$), 
      $grippy$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 2 * $i$$438$$, $startx$$1$$, $starty$$1$$ + 2 * $i$$438$$ + 1, "dot3" + $i$$438$$), $dot$$.$setSolidStroke$($color$$37$$), $grippy$$.$addChild$($dot$$), $startx$$1$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 18, $startx$$1$$, $starty$$1$$ + 18 + 1, "dot4");
    $dot$$.$setSolidStroke$($color$$37$$);
    $grippy$$.$addChild$($dot$$);
    $startx$$1$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 18, $startx$$1$$, $starty$$1$$ + 18 + 1, "dot5")
  }
  $dot$$.$setSolidStroke$($color$$37$$);
  $grippy$$.$addChild$($dot$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($grippy$$);
  return $grippy$$
};
D.$JSCompiler_StaticMethods_getRectSize$$ = function $$JSCompiler_StaticMethods_getRectSize$$$($JSCompiler_StaticMethods_getRectSize$self$$, $rect$$19$$) {
  return $JSCompiler_StaticMethods_getRectSize$self$$.$isVertical$() ? $rect$$19$$.getHeight() : $rect$$19$$.getWidth()
};
D.$JSCompiler_StaticMethods_getSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_getSlidingWindowPos$$$($JSCompiler_StaticMethods_getSlidingWindowPos$self$$, $slidingWindow$$5$$) {
  return $JSCompiler_StaticMethods_getSlidingWindowPos$self$$.$isVertical$() ? $slidingWindow$$5$$.$getTranslateY$() : $slidingWindow$$5$$.$getTranslateX$()
};
D.$JSCompiler_StaticMethods_setSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_setSlidingWindowPos$$$($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$6$$, $pos$$35$$) {
  $pos$$35$$ = window.Math.max(0, $pos$$35$$);
  $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isVertical$() ? $rightStart_slidingWindow$$6$$.$setTranslateY$($pos$$35$$) : $rightStart_slidingWindow$$6$$.$setTranslateX$($pos$$35$$);
  if($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$()) {
    (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setWidth$($pos$$35$$);
    $rightStart_slidingWindow$$6$$ = $pos$$35$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$6$$);
    var $handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$);
    $handleStart$$1_rightBackground$$1$$.$setX$($rightStart_slidingWindow$$6$$);
    $handleStart$$1_rightBackground$$1$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$Width$ - $rightStart_slidingWindow$$6$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) && ($handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), ($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) ? $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$getChildAt$(5) : 
    D.$JSCompiler_alias_NULL$$).$setX$($pos$$35$$ - $handleStart$$1_rightBackground$$1$$), (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setX$($rightStart_slidingWindow$$6$$))
  }
};
D.$JSCompiler_StaticMethods_setSlidingWindowSize$$ = function $$JSCompiler_StaticMethods_setSlidingWindowSize$$$($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$8$$, $size$$28$$) {
  $size$$28$$ = window.Math.max((0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$), $size$$28$$);
  var $rightHandleBackground$$1_rightStart$$1_size$$inline_4390$$ = $size$$28$$ = window.Math.min($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Height$ : $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$, $size$$28$$);
  $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $rightGrippy$$1_slidingWindow$$8$$.$setHeight$($rightHandleBackground$$1_rightStart$$1_size$$inline_4390$$) : $rightGrippy$$1_slidingWindow$$8$$.$setWidth$($rightHandleBackground$$1_rightStart$$1_size$$inline_4390$$);
  if($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isLeftAndRightFilterRendered$()) {
    var $rightHandleBackground$$1_rightStart$$1_size$$inline_4390$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$8$$) + $size$$28$$, $rightBackground$$2_rightHandle$$2$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$);
    $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_4390$$);
    $rightBackground$$2_rightHandle$$2$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$ - $rightHandleBackground$$1_rightStart$$1_size$$inline_4390$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) && (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$).$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_4390$$)
  }
  (0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) || ($rightHandleBackground$$1_rightStart$$1_size$$inline_4390$$ = $rightGrippy$$1_slidingWindow$$8$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $rightGrippy$$1_slidingWindow$$8$$.$getChildAt$(4), $rightGrippy$$1_slidingWindow$$8$$ = $rightGrippy$$1_slidingWindow$$8$$.$getChildAt$(5), $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($size$$28$$), 
  $rightHandleBackground$$1_rightStart$$1_size$$inline_4390$$.$setTranslateY$($size$$28$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$8$$.$setTranslateY$($size$$28$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($size$$28$$), $rightHandleBackground$$1_rightStart$$1_size$$inline_4390$$.$setTranslateX$($size$$28$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$8$$.$setTranslateX$($size$$28$$ - 10)))
};
D.$DvtOverview$$.prototype.$updateTimeAxis$ = function $$DvtOverview$$$$$updateTimeAxis$$($width$$85$$, $height$$68$$) {
  if(this.$_ticks$ != D.$JSCompiler_alias_NULL$$) {
    this.$isVertical$();
    for(var $size$$29$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $i$$439$$ = 0;$i$$439$$ < this.$_ticks$.length;$i$$439$$++) {
      var $child$$28_label$$67$$ = this.$_ticks$[$i$$439$$], $time$$8_time_pos$$2$$ = (0,window.parseInt)($child$$28_label$$67$$.$getAttr$("time"), 10), $time$$8_time_pos$$2$$ = this.$getDatePosition$($time$$8_time_pos$$2$$), $child$$28_label$$67$$ = $child$$28_label$$67$$.$getAttr$("label"), $maxWidth$$16_next_time$$ = 0;
      $i$$439$$ + 1 < this.$_ticks$.length ? ($maxWidth$$16_next_time$$ = (0,window.parseInt)(this.$_ticks$[$i$$439$$ + 1].$getAttr$("time"), 10), $maxWidth$$16_next_time$$ = this.$getDatePosition$($maxWidth$$16_next_time$$) - $time$$8_time_pos$$2$$) : $maxWidth$$16_next_time$$ = $size$$29$$ - $time$$8_time_pos$$2$$;
      this.$isRTL$() && ($time$$8_time_pos$$2$$ = $size$$29$$ - $time$$8_time_pos$$2$$);
      this.$addTick$($time$$8_time_pos$$2$$, $width$$85$$, $height$$68$$, "tick" + $i$$439$$);
      this.$addLabel$($time$$8_time_pos$$2$$, $child$$28_label$$67$$, $width$$85$$, $height$$68$$, $maxWidth$$16_next_time$$, "label" + $i$$439$$)
    }
  }
};
D.$DvtOverview$$.prototype.$addTick$ = function $$DvtOverview$$$$$addTick$$($line$$17_pos$$36$$, $stroke$$53_width$$86$$, $height$$69$$, $id$$124$$) {
  $line$$17_pos$$36$$ = this.$isVertical$() ? new D.$DvtLine$$(this.$_context$, 0, $line$$17_pos$$36$$, $stroke$$53_width$$86$$, $line$$17_pos$$36$$, $id$$124$$) : new D.$DvtLine$$(this.$_context$, $line$$17_pos$$36$$, 0, $line$$17_pos$$36$$, $height$$69$$, $id$$124$$);
  $stroke$$53_width$$86$$ = new D.$DvtSolidStroke$$(this.$_timeIndicatorColor$);
  $stroke$$53_width$$86$$.$setStyle$(1, 3);
  $line$$17_pos$$36$$.$setStroke$($stroke$$53_width$$86$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$17_pos$$36$$);
  this.$addChild$($line$$17_pos$$36$$)
};
D.$DvtOverview$$.prototype.$addLabel$ = function $$DvtOverview$$$$$addLabel$$($label$$68_pos$$37$$, $text$$47$$, $width$$87_y$$133$$, $height$$70$$, $maxWidth$$17$$, $id$$125$$) {
  this.$isVertical$() ? $label$$68_pos$$37$$ = new D.$DvtOutputText$$(this.$_context$, $text$$47$$, 4, $label$$68_pos$$37$$, $id$$125$$) : ($width$$87_y$$133$$ = "above" == this.$_overviewPosition$ ? 2 : $height$$70$$ - this.$getTimeAxisHeight$() + 2, $label$$68_pos$$37$$ = new D.$DvtOutputText$$(this.$_context$, $text$$47$$, $label$$68_pos$$37$$ + 5, $width$$87_y$$133$$, $id$$125$$));
  $label$$68_pos$$37$$.$setCSSStyle$(new D.$DvtCSSStyle$$("font-weight:bold"));
  D.$DvtTextUtils$$.$fitText$($label$$68_pos$$37$$, $maxWidth$$17$$, window.Infinity, this);
  $label$$68_pos$$37$$.$_rawText$ = $label$$68_pos$$37$$.$_untruncatedTextString$
};
D.$DvtOverview$$.prototype.$parseDataXML$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_animateSlidingWindow$$ = function $$JSCompiler_StaticMethods_animateSlidingWindow$$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $newLeft$$1$$) {
  var $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(1);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getChildAt$(3);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getChildAt$(4);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getChildAt$(5);
  if($newLeft$$1$$ != (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$)) {
    var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    1)), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 2)), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - 
    ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 3)), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 4)), $rightBackgroundHandleSetter_topBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - 
    ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 5));
    if($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$()) {
      var $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getTranslateY$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getY1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setY1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, 
      $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
    }else {
      $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getTranslateX$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getX1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setX1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, 
      $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX2$
    }
    var $animator$$77_minPos$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_leftMargin$, $maxPos$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $rightStart$$2_slidingWindowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$);
    $newLeft$$1$$ = window.Math.max($animator$$77_minPos$$, window.Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $newLeft$$1$$));
    $animator$$77_minPos$$ = "off" !== $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_animationOnClick$ ? new D.$DvtAnimator$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_context$, 0.5, 0, D.$DvtEasing$linear$$) : D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $posGetter$$, $posSetter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $newLeft$$1$$ + 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$ - 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.getWidth, 
    $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setWidth$, $newLeft$$1$$), $rightStart$$2_slidingWindowSize$$ = $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.getWidth, 
    $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$() ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Height$ : $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Width$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ - 
    $rightStart$$2_slidingWindowSize$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) && 
    ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(5) : D.$JSCompiler_alias_NULL$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = 
    $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, 
    $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $newLeft$$1$$ - $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$77_minPos$$, 
    $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
    $animator$$77_minPos$$ != D.$JSCompiler_alias_NULL$$ && $animator$$77_minPos$$.play()
  }
};
D.$JSCompiler_StaticMethods_animateProperty$$ = function $$JSCompiler_StaticMethods_animateProperty$$$($animator$$78$$, $obj$$144$$, $getter$$, $setter$$, $value$$106$$) {
  $animator$$78$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$78$$, "typeNumber", $obj$$144$$, $getter$$, $setter$$, $value$$106$$) : $setter$$.call($obj$$144$$, $value$$106$$)
};
D.$DvtOverview$$.prototype.$HandleShapeMouseOver$ = function $$DvtOverview$$$$$HandleShapeMouseOver$$($event$$291_relPos$$38$$) {
  var $drawable$$26$$ = this.$_findDrawable$($event$$291_relPos$$38$$);
  if($drawable$$26$$ && !("bg" == $drawable$$26$$.getId() || "ocd" == $drawable$$26$$.getId())) {
    if("label" == $drawable$$26$$.getId().substr(0, 5) && $drawable$$26$$ instanceof D.$DvtOutputText$$) {
      $drawable$$26$$.$isTruncated$() && this.$_context$.$getTooltipManager$().$showDatatip$($event$$291_relPos$$38$$.pageX, $event$$291_relPos$$38$$.pageY, $drawable$$26$$.$_rawText$, "#000000")
    }else {
      if(this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$26$$) && ($event$$291_relPos$$38$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$291_relPos$$38$$.pageX, $event$$291_relPos$$38$$.pageY), $event$$291_relPos$$38$$ = this.$stageToLocal$($event$$291_relPos$$38$$), this.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$291_relPos$$38$$.x + 6, $event$$291_relPos$$38$$.y - 
      10) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$291_relPos$$38$$.x - 6, $event$$291_relPos$$38$$.y - 20), this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_TRUE$$)), "window" == $drawable$$26$$.getId() || "ftr" == $drawable$$26$$.getId() || "arr" == $drawable$$26$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$26$$)) {
        this.$isFlashEnvironment$() && this.setCursor("move")
      }else {
        return $drawable$$26$$
      }
    }
  }
};
D.$DvtOverview$$.prototype.$HandleShapeMouseOut$ = function $$DvtOverview$$$$$HandleShapeMouseOut$$($drawable$$27_event$$292$$) {
  this.$_moveDrawable$ == D.$JSCompiler_alias_NULL$$ && this.setCursor("default");
  $drawable$$27_event$$292$$ = this.$_findDrawable$($drawable$$27_event$$292$$);
  if($drawable$$27_event$$292$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$27_event$$292$$) && this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_FALSE$$), $drawable$$27_event$$292$$
  }
};
D.$DvtOverview$$.prototype.$HandleShapeClick$ = function $$DvtOverview$$$$$HandleShapeClick$$($event$$293_newEndTime_relPos$$39_slidingWindow$$10$$, $newPos$$2_pageX$$8$$, $evt$$41_pageY$$8_pos$$38$$) {
  $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$.stopPropagation();
  var $drawable$$28_newStartTime_size$$31$$ = this.$_findDrawable$($event$$293_newEndTime_relPos$$39_slidingWindow$$10$$);
  if($drawable$$28_newStartTime_size$$31$$ && !("window" == $drawable$$28_newStartTime_size$$31$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$28_newStartTime_size$$31$$))) {
    if("bg" == $drawable$$28_newStartTime_size$$31$$.getId() || "label" == $drawable$$28_newStartTime_size$$31$$.getId().substr(0, 5) || "ocd" == $drawable$$28_newStartTime_size$$31$$.getId() || "lbg" == $drawable$$28_newStartTime_size$$31$$.getId() || "rbg" == $drawable$$28_newStartTime_size$$31$$.getId()) {
      $newPos$$2_pageX$$8$$ == D.$JSCompiler_alias_VOID$$ && ($newPos$$2_pageX$$8$$ = $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$.pageX);
      $evt$$41_pageY$$8_pos$$38$$ == D.$JSCompiler_alias_VOID$$ && ($evt$$41_pageY$$8_pos$$38$$ = $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$.pageY);
      $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $newPos$$2_pageX$$8$$, $evt$$41_pageY$$8_pos$$38$$);
      $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$ = this.$stageToLocal$($event$$293_newEndTime_relPos$$39_slidingWindow$$10$$);
      this.$isVertical$() ? ($evt$$41_pageY$$8_pos$$38$$ = $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$.y, $drawable$$28_newStartTime_size$$31$$ = this.$Height$) : ($evt$$41_pageY$$8_pos$$38$$ = $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$.x, $drawable$$28_newStartTime_size$$31$$ = this.$Width$);
      $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$ = this.$getChildAt$(1);
      $newPos$$2_pageX$$8$$ = $evt$$41_pageY$$8_pos$$38$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$) / 2;
      (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $newPos$$2_pageX$$8$$);
      this.$isRTL$() && ($evt$$41_pageY$$8_pos$$38$$ = this.$Width$ - $evt$$41_pageY$$8_pos$$38$$);
      var $time$$9$$ = this.$getPositionDate$($evt$$41_pageY$$8_pos$$38$$);
      $evt$$41_pageY$$8_pos$$38$$ = new D.$DvtOverviewEvent$$("scrollTime");
      $evt$$41_pageY$$8_pos$$38$$.setTime($time$$9$$);
      $newPos$$2_pageX$$8$$ = window.Math.max(0, window.Math.min($newPos$$2_pageX$$8$$, $drawable$$28_newStartTime_size$$31$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$)));
      this.$isRTL$() ? ($drawable$$28_newStartTime_size$$31$$ = this.$getPositionDate$(this.$Width$ - ($newPos$$2_pageX$$8$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$))), $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$ = this.$getPositionDate$(this.$Width$ - $newPos$$2_pageX$$8$$)) : ($drawable$$28_newStartTime_size$$31$$ = this.$getPositionDate$($newPos$$2_pageX$$8$$), $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$ = 
      this.$getPositionDate$($newPos$$2_pageX$$8$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$)));
      (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$41_pageY$$8_pos$$38$$, $drawable$$28_newStartTime_size$$31$$);
      (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$41_pageY$$8_pos$$38$$, $event$$293_newEndTime_relPos$$39_slidingWindow$$10$$);
      this.dispatchEvent($evt$$41_pageY$$8_pos$$38$$)
    }else {
      return $drawable$$28_newStartTime_size$$31$$
    }
  }
};
D.$DvtOverview$$.prototype.$HandleMouseDown$ = function $$DvtOverview$$$$$HandleMouseDown$$($event$$294$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$)(this, $event$$294$$)
};
D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$ = function $$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$$($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$, $event$$295$$) {
  $event$$295$$.stopPropagation();
  var $drawable$$29_evt$$42$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_findDrawable$($event$$295$$);
  if($drawable$$29_evt$$42$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$29_evt$$42$$)) {
    if("ftr" == $drawable$$29_evt$$42$$.getId() || "sta" == $drawable$$29_evt$$42$$.getId()) {
      $drawable$$29_evt$$42$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1)
    }
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_initX$ = (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$295$$);
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_initY$ = (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$295$$);
    if((0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$29_evt$$42$$)) {
      var $cursor$$inline_4393_slidingWindow$$11$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1);
      $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isRTL$() ? ($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldEndPos$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$Width$ - $cursor$$inline_4393_slidingWindow$$11$$.$getX$(), $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldEndPos$ - $cursor$$inline_4393_slidingWindow$$11$$.getWidth()) : ($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ = 
      $cursor$$inline_4393_slidingWindow$$11$$.$getX$(), $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldEndPos$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ + $cursor$$inline_4393_slidingWindow$$11$$.getWidth());
      "grpy" == $drawable$$29_evt$$42$$.getParent().getId() && ($drawable$$29_evt$$42$$ = $drawable$$29_evt$$42$$.getParent());
      var $drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$ = $drawable$$29_evt$$42$$.getId();
      "grpy" == $drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$ && ($drawable$$29_evt$$42$$ = $cursor$$inline_4393_slidingWindow$$11$$.$getChildBefore$($drawable$$29_evt$$42$$), $drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$ = $drawable$$29_evt$$42$$.getId());
      if("lh" == $drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$ || "rh" == $drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$) {
        $drawable$$29_evt$$42$$ = $cursor$$inline_4393_slidingWindow$$11$$.$getChildBefore$($drawable$$29_evt$$42$$), $drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$ = $drawable$$29_evt$$42$$.getId()
      }
      "lbgrh" == $drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$ && ($drawable$$29_evt$$42$$ = $cursor$$inline_4393_slidingWindow$$11$$.$getChildAt$(0));
      "rbgrh" == $drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$ && ($drawable$$29_evt$$42$$ = $cursor$$inline_4393_slidingWindow$$11$$.$getChildAt$($cursor$$inline_4393_slidingWindow$$11$$.$getNumChildren$() - 3));
      D.$DvtTimeUtils$$.$supportsTouch$() || ($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isVertical$() ? ($drawable$$29_evt$$42$$.$setY$(-20), $drawable$$29_evt$$42$$.$setHeight$(2 * ($drawable$$29_evt$$42$$.getHeight() + 20))) : ($drawable$$29_evt$$42$$.$setX$(-20), $drawable$$29_evt$$42$$.$setWidth$(2 * ($drawable$$29_evt$$42$$.getWidth() + 20))));
      $cursor$$inline_4393_slidingWindow$$11$$ = $drawable$$29_evt$$42$$.getCursor();
      $drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1);
      $drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$ != D.$JSCompiler_alias_NULL$$ && $drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$.setCursor($cursor$$inline_4393_slidingWindow$$11$$);
      if($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isLeftAndRightFilterRendered$()) {
        var $drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$), $rightBackground$$inline_4396$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$);
        $drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_4396$$ != D.$JSCompiler_alias_NULL$$ && ($drawableId$$1_leftBackground$$inline_4395_slidingWindow$$inline_4394$$.setCursor($cursor$$inline_4393_slidingWindow$$11$$), $rightBackground$$inline_4396$$.setCursor($cursor$$inline_4393_slidingWindow$$11$$))
      }
    }
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_moveDrawable$ = $drawable$$29_evt$$42$$;
    $drawable$$29_evt$$42$$ = new D.$DvtOverviewEvent$$("dropCallback");
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.dispatchEvent($drawable$$29_evt$$42$$)
  }
};
D.$DvtOverview$$.prototype.$HandleMouseUp$ = function $$DvtOverview$$$$$HandleMouseUp$$($event$$296$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$)(this, $event$$296$$)
};
D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$ = function $$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$$($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$, $event$$297$$) {
  $event$$297$$ != D.$JSCompiler_alias_NULL$$ && $event$$297$$.stopPropagation();
  if($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$) {
    if("window" == $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.getId()) {
      $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$finishWindowDrag$(0, 0, 0)
    }else {
      if((0,D.$JSCompiler_StaticMethods_isHandle$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$)) {
        $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$finishHandleDrag$();
        D.$DvtTimeUtils$$.$supportsTouch$() || ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$isVertical$() ? ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setY$(0), $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setHeight$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())) : ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setX$(0), $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setWidth$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())));
        var $leftBackground$$inline_4400_slidingWindow$$inline_4399$$ = $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$getChildAt$(1);
        $leftBackground$$inline_4400_slidingWindow$$inline_4399$$ != D.$JSCompiler_alias_NULL$$ && $leftBackground$$inline_4400_slidingWindow$$inline_4399$$.setCursor("move");
        if($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$isLeftAndRightFilterRendered$()) {
          var $leftBackground$$inline_4400_slidingWindow$$inline_4399$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$), $rightBackground$$inline_4401$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$);
          $leftBackground$$inline_4400_slidingWindow$$inline_4399$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_4401$$ != D.$JSCompiler_alias_NULL$$ && ($leftBackground$$inline_4400_slidingWindow$$inline_4399$$.setCursor("default"), $rightBackground$$inline_4401$$.setCursor("default"))
        }
      }
    }
    $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_initX$ = -1
  }
};
D.$DvtOverview$$.prototype.$HandleMouseMove$ = function $$DvtOverview$$$$$HandleMouseMove$$($event$$298$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$)(this, $event$$298$$)
};
D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$ = function $$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$$($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$, $event$$299$$) {
  $event$$299$$.stopPropagation();
  if($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$ && -1 != $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$) {
    var $pageX$$9$$ = (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$299$$), $pageY$$9$$ = (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$299$$), $diffX$$3$$ = $pageX$$9$$ - $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$, $diffY$$4$$ = $pageY$$9$$ - $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initY$;
    $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$ = $pageX$$9$$;
    $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initY$ = $pageY$$9$$;
    "window" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() ? $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$handleWindowDragPositioning$(0, $diffX$$3$$, $diffY$$4$$) : "lh" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() || "lhb" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() ? (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$, 
    $event$$299$$, $diffX$$3$$, $diffY$$4$$, D.$JSCompiler_alias_TRUE$$) : ("rh" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() || "rhb" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId()) && $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$handleRightHandleDragPositioning$($event$$299$$, $diffX$$3$$, $diffY$$4$$)
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$300$$) {
  var $target$$63$$ = $event$$300$$.targetTouches[0];
  this.$_touchStartX$ = $target$$63$$.pageX;
  this.$_touchStartY$ = $target$$63$$.pageY;
  2 == $event$$300$$.targetTouches.length ? ($event$$300$$.preventDefault(), $target$$63$$ = $event$$300$$.targetTouches[1], this.$_touchStartX2$ = $target$$63$$.pageX, this.$_touchStartY2$ = $target$$63$$.pageY, 20 > window.Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$) : (0,D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$)(this, $event$$300$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchMove$$($event$$301$$) {
  $event$$301$$.preventDefault();
  if(this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$) {
    if(50 > this.$_counter$) {
      this.$_counter$++
    }else {
      var $target$$64$$ = $event$$301$$.targetTouches[1];
      this.$handleRightHandleDragPositioning$(D.$JSCompiler_alias_NULL$$, $target$$64$$.pageX - this.$_touchStartX2$, 0);
      this.$_touchStartX2$ = $target$$64$$.pageX;
      this.$_counter$ = 0
    }
  }else {
    $target$$64$$ = $event$$301$$.targetTouches[0];
    if(this.$_touchStartX$ != $target$$64$$.pageX || this.$_touchStartY$ != $target$$64$$.pageY) {
      this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
    }
    (0,D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$)(this, $event$$301$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$302$$) {
  this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$ ? this.$finishHandleDrag$() : ((0,D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$)(this, $event$$302$$), this.$_touchStartX$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY$ != D.$JSCompiler_alias_NULL$$ && this.$HandleShapeClick$($event$$302$$, this.$_touchStartX$, this.$_touchStartY$));
  this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$303$$) {
  var $delta$$3_keyCode$$20$$ = $event$$303$$.keyCode;
  if(37 === $delta$$3_keyCode$$20$$ || 39 === $delta$$3_keyCode$$20$$) {
    $delta$$3_keyCode$$20$$ = 37 === $delta$$3_keyCode$$20$$ ? -1 : 1, ($event$$303$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $event$$303$$, $delta$$3_keyCode$$20$$, $delta$$3_keyCode$$20$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyUp$$($event$$304$$) {
  var $delta$$4_keyCode$$21$$ = $event$$304$$.keyCode;
  if(37 === $delta$$4_keyCode$$21$$ || 39 === $delta$$4_keyCode$$21$$) {
    $delta$$4_keyCode$$21$$ = 37 === $delta$$4_keyCode$$21$$ ? -1 : 1, ($event$$304$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $event$$304$$, $delta$$4_keyCode$$21$$, $delta$$4_keyCode$$21$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$handleWindowDragPositioning$ = function $$JSCompiler_prototypeAlias$$$$handleWindowDragPositioning$$($event$$305$$, $deltaX$$4$$, $deltaY$$3$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollPos", $deltaX$$4$$, $deltaY$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$finishWindowDrag$ = function $$JSCompiler_prototypeAlias$$$$finishWindowDrag$$($event$$306$$, $deltaX$$5$$, $deltaY$$4$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollEnd", $deltaX$$5$$, $deltaY$$4$$)
};
D.$JSCompiler_StaticMethods_fireScrollEvent$$ = function $$JSCompiler_StaticMethods_fireScrollEvent$$$($JSCompiler_StaticMethods_fireScrollEvent$self$$, $evt$$43_type$$123$$, $delta$$5_deltaX$$6$$, $deltaY$$5$$) {
  var $newEndTime$$1_slidingWindow$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getChildAt$(1), $pos$$42$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$), $newStartTime$$1_scrollTo_size$$32$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$), $minPos$$1$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$, 
  $maxPos$$1$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $delta$$5_deltaX$$6$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isVertical$() ? $deltaY$$5$$ : $delta$$5_deltaX$$6$$;
  $pos$$42$$ + $delta$$5_deltaX$$6$$ <= $minPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$, $minPos$$1$$), $newStartTime$$1_scrollTo_size$$32$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? -2 : -1) : $pos$$42$$ + $newStartTime$$1_scrollTo_size$$32$$ + $delta$$5_deltaX$$6$$ >= $maxPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, 
  $newEndTime$$1_slidingWindow$$18$$, $maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$32$$), $newStartTime$$1_scrollTo_size$$32$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? -1 : -2) : ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$, $pos$$42$$ + $delta$$5_deltaX$$6$$), $newStartTime$$1_scrollTo_size$$32$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? ($maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$32$$ - 
  $pos$$42$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$ : ($pos$$42$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$);
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $evt$$43_type$$123$$ = new D.$DvtOverviewEvent$$($evt$$43_type$$123$$);
  $evt$$43_type$$123$$.$setPosition$($newStartTime$$1_scrollTo_size$$32$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? ($newStartTime$$1_scrollTo_size$$32$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - ($pos$$42$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$))), $newEndTime$$1_slidingWindow$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - 
  $pos$$42$$)) : ($newStartTime$$1_scrollTo_size$$32$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$42$$), $newEndTime$$1_slidingWindow$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$42$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$)));
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$43_type$$123$$, $newStartTime$$1_scrollTo_size$$32$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$43_type$$123$$, $newEndTime$$1_slidingWindow$$18$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.dispatchEvent($evt$$43_type$$123$$)
};
D.$DvtOverview$$.prototype.$handleRightHandleDragPositioning$ = function $$DvtOverview$$$$$handleRightHandleDragPositioning$$($event$$308$$, $deltaX$$8$$, $deltaY$$7$$) {
  (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$308$$, $deltaX$$8$$, $deltaY$$7$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$ = function $$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$, $deltaX$$9_newEndTime$$2_slidingWindow$$19$$, $delta$$6_deltaY$$8$$, $isLeft$$5_newStartTime$$2$$) {
  var $evt$$44_size$$33$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
  $delta$$6_deltaY$$8$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? $delta$$6_deltaY$$8$$ : $deltaX$$9_newEndTime$$2_slidingWindow$$19$$;
  if(0 != $delta$$6_deltaY$$8$$) {
    $deltaX$$9_newEndTime$$2_slidingWindow$$19$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getChildAt$(1);
    var $windowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$9_newEndTime$$2_slidingWindow$$19$$), $windowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$9_newEndTime$$2_slidingWindow$$19$$);
    if($isLeft$$5_newStartTime$$2$$) {
      if($windowSize$$ - $delta$$6_deltaY$$8$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $delta$$6_deltaY$$8$$ <= $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_leftMargin$) {
        return
      }
      $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$)).x;
      $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$);
      if(0 < $delta$$6_deltaY$$8$$ && $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$ <= $windowPos$$ || 0 > $delta$$6_deltaY$$8$$ && $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$ >= $windowPos$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$9_newEndTime$$2_slidingWindow$$19$$, $windowPos$$ + $delta$$6_deltaY$$8$$);
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$9_newEndTime$$2_slidingWindow$$19$$, $windowSize$$ - $delta$$6_deltaY$$8$$)
    }else {
      if($windowSize$$ + $delta$$6_deltaY$$8$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $windowSize$$ + $delta$$6_deltaY$$8$$ >= (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$)) {
        return
      }
      $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$)).x;
      $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$);
      if(0 < $delta$$6_deltaY$$8$$ && $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$6_deltaY$$8$$ && $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$ >= $windowPos$$ + $windowSize$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$9_newEndTime$$2_slidingWindow$$19$$, $windowSize$$ + $delta$$6_deltaY$$8$$)
    }
    (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
    $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$9_newEndTime$$2_slidingWindow$$19$$));
    $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$ = $evt$$44_size$$33$$ * ($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_end$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$) / ($endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$);
    $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRangeChangingSupported$() && ($evt$$44_size$$33$$ = new D.$DvtOverviewEvent$$("rangeChanging"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$44_size$$33$$, "newSize", $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$), $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRTL$() ? $isLeft$$5_newStartTime$$2$$ : 
    !$isLeft$$5_newStartTime$$2$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$44_size$$33$$, "endHandle", $endHandle$$inline_4412_event$$309_newSize$$1_relPos$$40_time$$11$$), $isLeft$$5_newStartTime$$2$$ ? (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$44_size$$33$$, "expand", 0 > $delta$$6_deltaY$$8$$) : (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$44_size$$33$$, "expand", 0 < $delta$$6_deltaY$$8$$), $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRTL$() ? 
    ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$9_newEndTime$$2_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$9_newEndTime$$2_slidingWindow$$19$$))), $deltaX$$9_newEndTime$$2_slidingWindow$$19$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$9_newEndTime$$2_slidingWindow$$19$$))) : ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$9_newEndTime$$2_slidingWindow$$19$$)), $deltaX$$9_newEndTime$$2_slidingWindow$$19$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$9_newEndTime$$2_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$9_newEndTime$$2_slidingWindow$$19$$))), 
    (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$44_size$$33$$, $isLeft$$5_newStartTime$$2$$), (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$44_size$$33$$, $deltaX$$9_newEndTime$$2_slidingWindow$$19$$), $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.dispatchEvent($evt$$44_size$$33$$))
  }
};
D.$DvtOverview$$.prototype.$isRangeChangingSupported$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtOverview$$.prototype.$finishHandleDrag$ = function $$DvtOverview$$$$$finishHandleDrag$$() {
  var $newSize$$2_start$$33$$ = this.$_start$, $end$$27_oldStartTime$$ = this.$_end$, $oldSize$$ = this.$_width$, $oldEndTime_size$$34$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $newEndTime$$3_slidingWindow$$20$$ = this.$getChildAt$(1), $newStartTime$$3_time$$12$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$20$$)), $newSize$$2_start$$33$$ = $oldEndTime_size$$34$$ * ($end$$27_oldStartTime$$ - $newSize$$2_start$$33$$) / 
  ($newStartTime$$3_time$$12$$ - $newSize$$2_start$$33$$), $end$$27_oldStartTime$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime_size$$34$$ = this.$getPositionDate$(this.$_oldEndPos$);
  this.$isRTL$() ? ($newStartTime$$3_time$$12$$ = this.$getPositionDate$(this.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$20$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$20$$))), $newEndTime$$3_slidingWindow$$20$$ = this.$getPositionDate$(this.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$20$$))) : ($newStartTime$$3_time$$12$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, 
  $newEndTime$$3_slidingWindow$$20$$)), $newEndTime$$3_slidingWindow$$20$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$20$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$20$$)));
  var $evt$$45$$ = new D.$DvtOverviewEvent$$("rangeChange");
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$45$$, "oldSize", $oldSize$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$45$$, "newSize", $newSize$$2_start$$33$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$45$$, "oldStartTime", $end$$27_oldStartTime$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$45$$, "oldEndTime", $oldEndTime_size$$34$$);
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$45$$, $newStartTime$$3_time$$12$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$45$$, $newEndTime$$3_slidingWindow$$20$$);
  this.dispatchEvent($evt$$45$$)
};
D.$JSCompiler_StaticMethods_ScrollTimeAxis$$ = function $$JSCompiler_StaticMethods_ScrollTimeAxis$$$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$) {
  var $slidingWindow$$21$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$(1), $leftHandle$$3$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$), $rightHandle$$4$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 
  1)), $leftTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 2)), $rightTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 3)), $bottomBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - 
  ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 4)), $topBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 5));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$), (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$), (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, 
  $slidingWindow$$21$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftTopBar$$2$$, -1, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$) + 1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightTopBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$) - 1, -1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $bottomBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $topBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$))
};
D.$DvtOverview$$.prototype.dispatchEvent = function $$DvtOverview$$$$dispatchEvent$($event$$311$$) {
  D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$311$$)
};
D.$DvtOverviewParser$$ = function $$DvtOverviewParser$$$($view$$25$$) {
  this.Init($view$$25$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewParser$$, D.$DvtObj$$, "DvtOverviewParser");
D.$DvtOverviewParser$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($data$$92$$) {
  return this.$ParseRootAttributes$($data$$92$$)
};
D.$DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($options$$170$$) {
  var $ret$$89$$ = {};
  $ret$$89$$.$animationOnClick$ = $options$$170$$.animationOnClick;
  $options$$170$$.startTime != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.start = $options$$170$$.startTime);
  $options$$170$$.endTime != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.end = $options$$170$$.endTime);
  $ret$$89$$.start == D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.start = (new window.Date).getTime());
  if($ret$$89$$.end == D.$JSCompiler_alias_NULL$$ || $ret$$89$$.end <= $ret$$89$$.start) {
    $ret$$89$$.end = $ret$$89$$.start + 864E5
  }
  $options$$170$$.currentTime != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.currentTime = $options$$170$$.currentTime);
  $options$$170$$.initialFocusTime != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$initialFocusTime$ = $options$$170$$.initialFocusTime);
  $ret$$89$$.orientation = "horizontal";
  $options$$170$$.orientation != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.orientation = $options$$170$$.orientation);
  $ret$$89$$.$featuresOff$ = $options$$170$$.featuresOff;
  $ret$$89$$.$minimumWindowSize$ = $options$$170$$.minimumWindowSize;
  $ret$$89$$.$leftMargin$ = $options$$170$$.leftMargin;
  $ret$$89$$.$rightMargin$ = $options$$170$$.rightMargin;
  if($options$$170$$.viewportEndTime != D.$JSCompiler_alias_NULL$$) {
    var $viewportEndTime$$ = $options$$170$$.viewportEndTime, $viewportStartTime$$ = $ret$$89$$.start;
    $options$$170$$.viewportStartTime != D.$JSCompiler_alias_NULL$$ && $options$$170$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $options$$170$$.viewportStartTime);
    $ret$$89$$.width = $options$$170$$.viewportEndPos != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$89$$.start, $ret$$89$$.end, $viewportStartTime$$, $viewportEndTime$$, $options$$170$$.viewportEndPos) : (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$89$$.start, $ret$$89$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
    $ret$$89$$.$renderStart$ = $viewportStartTime$$
  }else {
    $ret$$89$$.$renderStart$ = $ret$$89$$.start
  }
  0 == $ret$$89$$.width && ($ret$$89$$.width = 1E3);
  $ret$$89$$.$overviewPosition$ = "below";
  $ret$$89$$.$selectionMode$ = "none";
  $ret$$89$$.$isRtl$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_view$.$_context$).toString();
  $options$$170$$.rtl != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$isRtl$ = $options$$170$$.rtl.toString());
  $ret$$89$$.$handleFillColor$ = "#FFFFFF";
  $ret$$89$$.$handleTextureColor$ = "#B3C6DB";
  $ret$$89$$.$windowBackgroundColor$ = "#FFFFFF";
  $ret$$89$$.$windowBackgroundAlpha$ = 1;
  $ret$$89$$.$windowBorderTopStyle$ = "solid";
  $ret$$89$$.$windowBorderRightStyle$ = "solid";
  $ret$$89$$.$windowBorderBottomStyle$ = "solid";
  $ret$$89$$.$windowBorderLeftStyle$ = "solid";
  $ret$$89$$.$windowBorderTopColor$ = "#4F4F4F";
  $ret$$89$$.$windowBorderRightColor$ = "#4F4F4F";
  $ret$$89$$.$windowBorderBottomColor$ = "#4F4F4F";
  $ret$$89$$.$windowBorderLeftColor$ = "#4F4F4F";
  $ret$$89$$.$overviewBackgroundColor$ = "#E6ECF3";
  $ret$$89$$.$currentTimeIndicatorColor$ = "#C000D1";
  $ret$$89$$.$timeIndicatorColor$ = "#BCC7D2";
  $ret$$89$$.$timeAxisBarColor$ = "#e5e5e5";
  $ret$$89$$.$timeAxisBarOpacity$ = 1;
  $ret$$89$$.$leftFilterPanelColor$ = "#FFFFFF";
  $ret$$89$$.$leftFilterPanelAlpha$ = 0.7;
  $ret$$89$$.$rightFilterPanelColor$ = "#FFFFFF";
  $ret$$89$$.$rightFilterPanelAlpha$ = 0.7;
  $options$$170$$.style != D.$JSCompiler_alias_NULL$$ && ($options$$170$$.style.handleFillColor != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$handleFillColor$ = $options$$170$$.style.handleFillColor), $options$$170$$.style.handleTextureColor != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$handleTextureColor$ = $options$$170$$.style.handleTextureColor), $options$$170$$.style.handleBackgroundImage != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$handleBackgroundImage$ = $options$$170$$.style.handleBackgroundImage), 
  $options$$170$$.style.handleWidth != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$handleWidth$ = $options$$170$$.style.handleWidth), $options$$170$$.style.handleHeight != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$handleHeight$ = $options$$170$$.style.handleHeight), $options$$170$$.style.windowBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$windowBackgroundColor$ = $options$$170$$.style.windowBackgroundColor), $options$$170$$.style.windowBackgroundAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$89$$.$windowBackgroundAlpha$ = $options$$170$$.style.windowBackgroundAlpha), $options$$170$$.style.windowBorderTopStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$windowBorderTopStyle$ = $options$$170$$.style.windowBorderTopStyle), $options$$170$$.style.windowBorderRightStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$windowBorderRightStyle$ = $options$$170$$.style.windowBorderRightStyle), $options$$170$$.style.windowBorderBottomStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$windowBorderBottomStyle$ = 
  $options$$170$$.style.windowBorderBottomStyle), $options$$170$$.style.windowBorderLeftStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$windowBorderLeftStyle$ = $options$$170$$.style.windowBorderLeftStyle), $options$$170$$.style.windowBorderTopColor != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$windowBorderTopColor$ = $options$$170$$.style.windowBorderTopColor), $options$$170$$.style.windowBorderRightColor != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$windowBorderRightColor$ = $options$$170$$.style.windowBorderRightColor), 
  $options$$170$$.style.windowBorderBottomColor != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$windowBorderBottomColor$ = $options$$170$$.style.windowBorderBottomColor), $options$$170$$.style.windowBorderLeftColor != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$windowBorderLeftColor$ = $options$$170$$.style.windowBorderLeftColor), $options$$170$$.style.overviewBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$overviewBackgroundColor$ = $options$$170$$.style.overviewBackgroundColor), $options$$170$$.style.currentTimeIndicatorColor != 
  D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$currentTimeIndicatorColor$ = $options$$170$$.style.currentTimeIndicatorColor), $options$$170$$.style.timeIndicatorColor != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$timeIndicatorColor$ = $options$$170$$.style.timeIndicatorColor), $options$$170$$.style.leftFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$leftFilterPanelColor$ = $options$$170$$.style.leftFilterPanelColor), $options$$170$$.style.leftFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$89$$.$leftFilterPanelAlpha$ = $options$$170$$.style.leftFilterPanelAlpha), $options$$170$$.style.rightFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$rightFilterPanelColor$ = $options$$170$$.style.rightFilterPanelColor), $options$$170$$.style.rightFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && ($ret$$89$$.$rightFilterPanelAlpha$ = $options$$170$$.style.rightFilterPanelAlpha));
  return $ret$$89$$
};
D.$JSCompiler_StaticMethods_calculateWidth$$ = function $$JSCompiler_StaticMethods_calculateWidth$$$($number$$2_startTime$$5$$, $endTime$$4$$, $denominator$$1_viewportStartTime$$1$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
  $number$$2_startTime$$5$$ = $viewportEndPos$$ * ($endTime$$4$$ - $number$$2_startTime$$5$$);
  $denominator$$1_viewportStartTime$$1$$ = $viewportEndTime$$1$$ - $denominator$$1_viewportStartTime$$1$$;
  return 0 == $number$$2_startTime$$5$$ || 0 == $denominator$$1_viewportStartTime$$1$$ ? 0 : $number$$2_startTime$$5$$ / $denominator$$1_viewportStartTime$$1$$
};
D.$DvtOverviewEvent$$ = function $$DvtOverviewEvent$$$($type$$124$$) {
  this.Init("overview");
  this.$_subtype$ = $type$$124$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEvent$$, D.$DvtBaseComponentEvent$$, "DvtOverviewEvent");
D.$DvtOverviewEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtOverviewEvent$$.prototype.setTime = function $$DvtOverviewEvent$$$$setTime$($time$$14$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "time", $time$$14$$)
};
D.$DvtOverviewEvent$$.prototype.getTime = function $$DvtOverviewEvent$$$$getTime$() {
  return this.$getParamValue$("time")
};
D.$JSCompiler_StaticMethods_setNewStartTime$$ = function $$JSCompiler_StaticMethods_setNewStartTime$$$($JSCompiler_StaticMethods_setNewStartTime$self$$, $newStartTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewStartTime$self$$, "newStartTime", $newStartTime$$4$$)
};
D.$JSCompiler_StaticMethods_setNewEndTime$$ = function $$JSCompiler_StaticMethods_setNewEndTime$$$($JSCompiler_StaticMethods_setNewEndTime$self$$, $newEndTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewEndTime$self$$, "newEndTime", $newEndTime$$4$$)
};
D.$DvtOverviewEvent$$.prototype.$setPosition$ = function $$DvtOverviewEvent$$$$$setPosition$$($pos$$44$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "pos", $pos$$44$$)
};
D.$DvtOverviewEvent$$.prototype.$getPosition$ = function $$DvtOverviewEvent$$$$$getPosition$$() {
  return this.$getParamValue$("pos")
};
});