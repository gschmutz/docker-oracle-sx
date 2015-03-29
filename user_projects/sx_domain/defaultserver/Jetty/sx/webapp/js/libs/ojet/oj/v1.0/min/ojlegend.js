"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtLegend"],function(a,f){a.hm=function(a){this.f=a};o_("LegendItem",a.hm,a);a.hm.prototype.getText=function(){return this.f?this.f.text:null};a.b.g("LegendItem.prototype.getText",{getText:a.hm.prototype.getText});a.Oa("oj.ojLegend",f.oj.dvtBaseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{categoryFilter:null,categoryHighlight:null},Cf:function(a,b,d){return DvtLegend.newInstance(a,b,d)},aj:function(){var a=
this._super();a["oj-legend"]={path:"textStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-legendTitle"]={path:"titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-legendSectionTitle"]={path:"_sectionTitleStyle",property:"CSS_TEXT_PROPERTIES"};return a},bj:function(){return["categoryFilter","categoryHighlight"]},cj:function(a){var b=a&&a.getType?a.getType():null;b===DvtCategoryHideShowEvent.TYPE_HIDE||b===DvtCategoryHideShowEvent.TYPE_SHOW?(b=b===DvtCategoryHideShowEvent.TYPE_HIDE?"out":"in",this.TG(this.options.sections,
a.getCategory(),b),this._trigger("categoryFilter",null,{category:a.getCategory(),type:b})):b===DvtCategoryRolloverEvent.TYPE_OVER||b===DvtCategoryRolloverEvent.TYPE_OUT?(b=b===DvtCategoryRolloverEvent.TYPE_OVER?"on":"off",this._trigger("categoryHighlight",null,{categories:[a.getCategory()],type:b})):this._super(a)},TG:function(a,b,d){if(a)for(var e=0;e<a.length;e++)if(a[e].items)for(var f=a[e].items,h=0;h<f.length;h++){if(f[h].id&&f[h].id==b||!f[h].id&&f[h].text==b)f[h].categoryVisibility="out"==
d?"hidden":"visible"}else this.TG(a[e].sections,b,d)},getNodeBySubId:function(a){return this._super(a)},getSubIdByNode:function(a){return this._super(a)},getTitle:function(){return this.Va.getAutomation().getTitle()},getSection:function(c){var b=this.Va.getAutomation();return new a.Ug(b.getSection(c))},getItem:function(c){var b=this.Va.getAutomation();return new a.hm(b.getItem(c))},getPreferredSize:function(a,b){var d=this.Va.getPreferredSize(this.options,a,b);return{width:d.getWidth(),height:d.getHeight()}}});
a.Ug=function(a){this.f=a};o_("LegendSection",a.Ug,a);a.Ug.prototype.getTitle=function(){return this.f?this.f.title:null};a.b.g("LegendSection.prototype.getTitle",{getTitle:a.Ug.prototype.getTitle});a.Ug.prototype.getSection=function(c){return this.f.sections?new a.Ug(this.f.sections[c]):null};a.b.g("LegendSection.prototype.getSection",{getSection:a.Ug.prototype.getSection});a.Ug.prototype.getItem=function(c){return this.f.items?new a.hm(this.f.items[c]):null};a.b.g("LegendSection.prototype.getItem",
{getItem:a.Ug.prototype.getItem})});
//# sourceMappingURL=oj-modular.map