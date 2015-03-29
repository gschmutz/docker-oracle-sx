"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtGauge"], function($oj$$17$$, $$$$17$$) {
  $oj$$17$$.$__registerWidget$("oj.dvtBaseGauge", $$$$17$$.oj.dvtBaseComponent, {$_GetChildStyleClasses$:function() {
    var $styleClasses$$1$$ = this._super();
    $styleClasses$$1$$["oj-gauge-metric-label"] = {path:"metricLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$1$$["oj-gauge-tick-label"] = {path:"tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$1$$;
  }, $_GetEventTypes$:function() {
    return["input", "optionChange"];
  }, $_GetTranslationMap$:function() {
    var $ret$$29$$ = this._super();
    $ret$$29$$["DvtGaugeBundle.EMPTY_TEXT"] = this.$_GetTranslatedResource$("msgNoData");
    return $ret$$29$$;
  }, $_HandleEvent$:function($event$$199$$) {
    var $type$$79$$ = $event$$199$$ && $event$$199$$.getType ? $event$$199$$.getType() : null;
    $type$$79$$ === DvtValueChangeEvent.TYPE ? this.$_UserOptionChange$("value", $event$$199$$.getNewValue()) : $type$$79$$ === DvtValueChangeEvent.TYPE_INPUT ? this._trigger("input", null, {value:$event$$199$$.getNewValue()}) : this._super($event$$199$$);
  }, $_SupportsOptionChangeEvent$:function($key$$85$$) {
    return "value" == $key$$85$$;
  }});
  $oj$$17$$.$__registerWidget$("oj.ojStatusMeterGauge", $$$$17$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_CreateDvtComponent$:function($context$$45$$, $callback$$90$$, $callbackObj$$1$$) {
    return DvtStatusMeterGauge.newInstance($context$$45$$, $callback$$90$$, $callbackObj$$1$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$2$$ = this._super();
    $styleClasses$$2$$.push("oj-statusmetergauge");
    return $styleClasses$$2$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
  $oj$$17$$.$__registerWidget$("oj.ojLedGauge", $$$$17$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{}, $_CreateDvtComponent$:function($context$$46$$, $callback$$91$$, $callbackObj$$2$$) {
    return DvtLedGauge.newInstance($context$$46$$, $callback$$91$$, $callbackObj$$2$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$3$$ = this._super();
    $styleClasses$$3$$.push("oj-ledgauge");
    return $styleClasses$$3$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
  $oj$$17$$.$__registerWidget$("oj.ojRatingGauge", $$$$17$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_CreateDvtComponent$:function($context$$47$$, $callback$$92$$, $callbackObj$$3$$) {
    return DvtRatingGauge.newInstance($context$$47$$, $callback$$92$$, $callbackObj$$3$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$4$$ = this._super();
    $styleClasses$$4$$.push("oj-ratinggauge");
    return $styleClasses$$4$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, $_SupportsOptionChangeEvent$:function($key$$86$$) {
    return "value" == $key$$86$$ || "changed" == $key$$86$$;
  }, $_UserOptionChange$:function($key$$87$$, $value$$193$$) {
    this._superApply(arguments);
    "value" == $key$$87$$ && this.$_UserOptionChange$("changed", !0);
  }});
  $oj$$17$$.$__registerWidget$("oj.ojDialGauge", $$$$17$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_CreateDvtComponent$:function($context$$48$$, $callback$$93$$, $callbackObj$$4$$) {
    return DvtDialGauge.newInstance($context$$48$$, $callback$$93$$, $callbackObj$$4$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$5$$ = this._super();
    $styleClasses$$5$$.push("oj-dialgauge");
    return $styleClasses$$5$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this.$_setImages$();
    this._super();
  }, $_setImages$:function() {
    var $backgroundImages$$ = this.options.background, $backgroundInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-circle-200x200.png"), width:200, height:200}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-circle-400x400.png"), width:400, height:400}], $indicatorImages$$ = this.options.indicator, $indicatorInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png"), 
    width:374, height:575}];
    "string" === typeof $backgroundImages$$ && ("rectangleAlta" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png"), width:200, height:154}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png"), width:400, height:309}] : "domeAlta" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-dome-200x200.png"), 
    width:200, height:154}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-dome-400x400.png"), width:400, height:309}] : "circleAntique" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-circle-200x200.png"), width:200, height:200}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-circle-400x400.png"), width:400, height:400}] : "rectangleAntique" === 
    $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png"), width:200, height:168}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png"), width:400, height:335}] : "domeAntique" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-dome-200x200.png"), width:200, height:176}, 
    {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-dome-400x400.png"), width:400, height:352}] : "circleLight" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-circle-200x200.png"), width:200, height:200}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-circle-400x400.png"), width:400, height:400}] : "rectangleLight" === $backgroundImages$$ ? $backgroundInfo$$ = 
    [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-rectangle-200x200.png"), width:200, height:154}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resourcesinternal-deps/dvt/gauge/light-rectangle-400x400.png"), width:400, height:307}] : "domeLight" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-dome-200x200.png"), width:200, height:138}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-dome-400x400.png"), 
    width:400, height:276}] : "circleDark" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-circle-200x200.png"), width:200, height:200}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-circle-400x400.png"), width:400, height:400}] : "rectangleDark" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png"), 
    width:200, height:154}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resourcesinternal-deps/dvt/gauge/dark-rectangle-400x400.png"), width:400, height:307}] : "domeDark" === $backgroundImages$$ && ($backgroundInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-dome-200x200.png"), width:200, height:138}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-dome-400x400.png"), width:400, height:276}]), this.options._backgroundImages = 
    $backgroundInfo$$);
    "string" === typeof $indicatorImages$$ && ("needleAntique" === $indicatorImages$$ ? $indicatorInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png"), width:81, height:734}] : "needleDark" === $indicatorImages$$ ? $indicatorInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png"), width:454, height:652}] : "needleLight" === $indicatorImages$$ && ($indicatorInfo$$ = [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-needle-1600x1600.png"), 
    width:454, height:652}]), this.options._indicatorImages = $indicatorInfo$$);
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
});
