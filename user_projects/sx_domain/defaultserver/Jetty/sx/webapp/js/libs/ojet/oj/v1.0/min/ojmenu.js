/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(a,f){(function(){a.Oa("oj.ojMenu",f.oj.baseComponent,{defaultElement:"\x3cul\x3e",delay:300,role:"menu",widgetEventPrefix:"oj",yp:"ojMenuClickAwayHandler",options:{menuSelector:"ul",openOptions:{initialFocus:"menu",launcher:null,position:{my:"start top",at:"start bottom"}},submenuOpenOptions:{position:{my:"start top",at:"end top"}},beforeOpen:null,select:null},_create:function(){this._focusForTesting=this.Qd;this._nextForTesting=this.wE;
this._selectForTesting=this.qg;this.Qj=this.element;this.ly=!1;this.element.uniqueId().addClass("oj-menu oj-component").toggleClass("oj-menu-icons",!!this.element.find(".oj-component-icon").length).attr({role:this.role,tabIndex:"0"});this._on(!0,{"mousedown .oj-menu-item":function(a){this.options.disabled&&a.preventDefault()},click:function(a){this.options.disabled&&a.preventDefault()},keydown:function(a){this.options.disabled&&a.keyCode===f.ui.keyCode.ESCAPE&&this.Nb&&this.Nu(a)}});this.options.disabled&&
this.element.addClass("oj-disabled").attr("aria-disabled","true");this._on({"mousedown .oj-menu-item \x3e a":function(a){a.preventDefault()},"click .oj-disabled \x3e a":function(a){a.preventDefault()},click:function(){this.ly=!1},"click .oj-menu-item:has(a)":function(a){var c=f(a.target).closest(".oj-menu-item");!this.ly&&c.not(".oj-disabled").length&&(this.ly=!0,a.preventDefault(),this.oa&&this.oa.closest(c).length&&this.oa.get(0)!=c.get(0)||(c.has(".oj-menu").length?this.Ce(a):(this.qg(a),this.element.is(":focus")||
(this.element.trigger("focus",[!0]),this.oa&&1===this.oa.parents(".oj-menu").length&&clearTimeout(this.xf)))))},"mouseenter .oj-menu-item":function(a){var c=f(a.currentTarget);c.siblings().children(".oj-focus-ancestor").removeClass("oj-focus-ancestor");this.Qd(a,c)},mouseleave:function(a){this.ij(a,"eventSubtree")},"mouseleave .oj-menu":function(a){this.ij(a,"eventSubtree")},focus:function(a,c){if(!c){var e=this.oa||this.element.children(".oj-menu-item").eq(0);this.Qd(a,e)}},keydown:this.Fj,keyup:function(a){if(a.keyCode==
f.ui.keyCode.ENTER||a.keyCode==f.ui.keyCode.SPACE)this.Ip=!1}});this.sb();this.eT();this._super()},eT:function(){var a=this.document.data(this.yp);a||(a=function(a){if("focus"===a.type||"mousedown"===a.type||93==a.which||121==a.which&&a.shiftKey||93==a.keyCode){var b=c.slice(0,c.length);f.each(b,function(b,c){!f(a.target).closest(c.element).length&&("keydown"===a.type||"mousedown"===a.type&&3===a.which||!f(a.target).closest(c.Nb).length||c.yR&&"mousedown"===a.type&&3!==a.which)&&(c.ij(a,"eventSubtree"),
c.Nb&&c.Hp(a))})}},this.document.data(this.yp,a),this.document[0].addEventListener("keydown",a,!0),this.document[0].addEventListener("mousedown",a,!0),this.document[0].addEventListener("focus",a,!0))},OU:function(){var a=this.document.data(this.yp);a&&1===f(":oj-menu").length&&(this.document[0].removeEventListener("keydown",a,!0),this.document[0].removeEventListener("mousedown",a,!0),this.document[0].removeEventListener("focus",a,!0),this.document.removeData(this.yp))},_setOption:function(b,c){this._superApply(arguments);
this.Nb||("submenuOpenOptions"===b?this.Ir=a.he.Jg(c.position,this.Eg):"submenuOpenOptions.position"===b&&(this.Ir=a.he.Jg(c,this.Eg)))},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".oj-menu").addBack().removeClass("oj-menu oj-component oj-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var a=
f(this);a.data("oj-ojMenu-submenu-icon")&&a.remove()});this.element.find("a").removeAttr("aria-expanded");this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");this.OU();0<=c.indexOf(this)&&c.splice(c.indexOf(this),1)},Fj:function(a){function c(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$\x26")}var e,g,h,k,l=!0;switch(a.keyCode){case f.ui.keyCode.HOME:this.lr("first","first",a);break;case f.ui.keyCode.END:this.lr("last","last",a);break;case f.ui.keyCode.UP:this.LS(a);
break;case f.ui.keyCode.DOWN:this.wE(a);break;case f.ui.keyCode.LEFT:case f.ui.keyCode.RIGHT:a.keyCode===f.ui.keyCode.RIGHT^this.Eg?this.oa&&!this.oa.is(".oj-disabled")&&this.Ce(a):this.ij(a,"active");break;case f.ui.keyCode.ENTER:case f.ui.keyCode.SPACE:this.uQ(a);this.Ip=!0;var m=this;setTimeout(function(){m.Ip=!1},100);break;case f.ui.keyCode.ESCAPE:this.Nb?(g=this.element.attr("aria-activedescendant"),h="#"+this.element.attr("id")+"\x3e*\x3ea",g&&!f("#"+g).is(h)?this.ij(a,"active"):this.Nu(a)):
this.ij(a,"active");break;default:l=!1,e=this.Fs||"",g=String.fromCharCode(a.keyCode),h=!1,clearTimeout(this.WV),g===e?h=!0:g=e+g,k=new RegExp("^"+c(g),"i"),e=this.Qj.children(".oj-menu-item").filter(function(){return k.test(f(this).children("a").text())}),e=h&&-1!==e.index(this.oa.next())?this.oa.nextAll(".oj-menu-item"):e,e.length||(g=String.fromCharCode(a.keyCode),k=new RegExp("^"+c(g),"i"),e=this.Qj.children(".oj-menu-item").filter(function(){return k.test(f(this).children("a").text())})),e.length?
(this.Qd(a,e),1<e.length?(this.Fs=g,this.WV=this._delay(function(){delete this.Fs},1E3)):delete this.Fs):delete this.Fs}l&&a.preventDefault()},uQ:function(a){this.oa.is(".oj-disabled")||(this.oa.children("a[aria-haspopup\x3d'true']").length?this.Ce(a):this.qg(a))},refresh:function(){this._super();this.sb()},sb:function(){this.Eg="rtl"===this.Ec();this.Ir=a.he.Jg(this.options.submenuOpenOptions.position,this.Eg);var b=this,c=this.element.find(this.options.menuSelector);c.filter(":not(.oj-menu)").addClass("oj-menu oj-component").hide().attr({role:this.role,
"aria-hidden":"true"}).each(function(){var a=f(this),c=b.Bv(a),d=f("\x3cspan\x3e");d.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon",!0);c.attr("aria-haspopup","true").attr("aria-expanded","false").prepend(d);c=c.attr("id");a.attr("aria-labelledby",c)});c=c.add(this.element).children();c.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");c.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role","presentation").children("a").uniqueId().attr({tabIndex:"-1",
role:"menuitem"});c.filter(":not(.oj-menu-item)").each(function(){var a=f(this);/[^\-\u2014\u2013\s]/.test(a.text())||a.addClass("oj-menu-divider").attr("role","separator")});c.filter(".oj-disabled").children("a").attr("aria-disabled","true");c.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");this.oa&&!f.contains(this.element[0],this.oa[0])&&this.Lt()},Bv:function(a){return a.prev("a")},CY:function(){return"menuitem"},Qd:function(a,c){a&&"focus"===a.type||clearTimeout(this.xf);
c=c.first();this.gE(c,a);c.parent().closest(".oj-menu-item").children("a:first").addClass("oj-focus-ancestor");a&&"keydown"===a.type?this.Nm():this.xf=this._delay(function(){this.Nm()},this.delay);var e=c.children(".oj-menu");e.length&&a&&/^mouse/.test(a.type)&&!this.oa.hasClass("oj-disabled")&&this.vU(e);this.Qj=c.parent()},gE:function(a,c){if(!a.is(this.oa)){var e=this.oa?this.oa:f(),g=a.children("a");this.oa=a;this.element.attr("aria-activedescendant",g.attr("id"));e.children("a").removeClass("oj-focus");
g.addClass("oj-focus");this._trigger("_activeItem",c,{previousItem:e,item:a,privateNotice:"The _activeItem event is private.  Do not use."})}},lT:function(a){if(this.oa){var c=this.oa;this.oa=null;this.element.removeAttr("aria-activedescendant");c.children("a").removeClass("oj-focus");this._trigger("_activeItem",a,{previousItem:c,item:f(),privateNotice:"The _activeItem event is private.  Do not use."})}},Lt:function(a){clearTimeout(this.xf);this.lT(a)},Nu:function(a){this.Nb.focus();this.Hp(a)},Hp:function(a){this.element.hide().attr("aria-hidden",
"true");this.Nb=void 0;this._trigger("__dismiss",a,{});0<=c.indexOf(this)&&c.splice(c.indexOf(this),1)},open:function(b,d,e){d=f.extend({},this.options.openOptions,d);e=f.extend({},this.options.submenuOpenOptions,e);this.GS||(this.FS(),this.GS=!0);this.yR=b?("mousedown"===b.type||"contextmenu"===b.type)&&3===b.which||93==b.which||121==b.which&&b.shiftKey:!1;if(this._trigger("beforeOpen",b,{openOptions:d})){var g=d.launcher;if((g="string"===f.type(g)?f(g):g)&&g.length){var h=this.element[0],k=c.slice(0,
c.length);f.each(k,function(a,c){c.element[0]!==h&&(c.ij(b,"eventSubtree"),c.Nb&&c.Hp(b))});k=a.he.Jg(d.position,this.Eg);null==k.of&&(k.of=b&&"contextmenu"===b.type?b:g);this.Ir=a.he.Jg(e.position,this.Eg);this.element.show().removeAttr("aria-hidden").position(k);d=d.initialFocus;((e="firstItem"===d)||"menu"===d)&&this.element.focus();e?this.Qd(b,this.element.children().first()):this.Lt(b);this.Nb=g;c.push(this)}else a.D.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call.")}},
FS:function(){this.element.css({position:"absolute"})},vU:function(a){clearTimeout(this.xf);"true"===a.attr("aria-hidden")&&(this.xf=this._delay(function(){this.Nm();this.BE(a)},this.delay))},BE:function(a){var d=f.extend({of:this.oa},this.Ir);clearTimeout(this.xf);this.element.find(".oj-menu").not(a.parents(".oj-menu")).hide().attr("aria-hidden","true");a.show().removeAttr("aria-hidden").position(d);this.Bv(a).attr("aria-expanded","true");!this.Nb&&0>c.indexOf(this)&&c.push(this)},Ct:function(a,
c,e){function g(){var e=c?h.element:f(a&&a.target).closest(h.element.find(".oj-menu"));e.length||(e=h.element);h.Nm(e);h.Lt(a);h.Qj=e}clearTimeout(this.xf);var h=this;e?this.xf=this._delay(g,e):g()},Nm:function(a){a||(a=this.oa?this.oa.parent():this.element);var d=a.find(".oj-menu");d.hide().attr("aria-hidden","true");this.Bv(d).attr("aria-expanded","false");a.find("a.oj-focus-ancestor").removeClass("oj-focus-ancestor");this.Nb||0<=c.indexOf(this)&&a===this.element&&c.splice(c.indexOf(this),1)},ij:function(b,
c){if(null==c||"active"===c){var e=this.Qj&&this.Qj.closest(".oj-menu-item",this.element);e&&e.length&&(this.Nm(),this.Qd(b,e))}else"all"===c||"eventSubtree"===c?this.Ct(b,"all"===c,this.delay):a.D.warn("Invalid param "+c+" passed to Menu._collapse().  Ignoring the call.")},Ce:function(a){var c=this.oa&&this.oa.children(".oj-menu ").children(".oj-menu-item").first();c&&c.length&&(this.BE(c.parent()),this._delay(function(){this.Qd(a,c)}))},wE:function(a){this.lr("next","first",a)},LS:function(a){this.lr("prev",
"last",a)},xY:function(){return this.oa&&!this.oa.prevAll(".oj-menu-item").length},yY:function(){return this.oa&&!this.oa.nextAll(".oj-menu-item").length},lr:function(a,c,e){var f;this.oa&&(f="first"===a||"last"===a?this.oa["first"===a?"prevAll":"nextAll"](".oj-menu-item").eq(-1):this.oa[a+"All"](".oj-menu-item").eq(0));f&&f.length&&this.oa||(f=this.Qj.children(".oj-menu-item")[c]());this.Qd(e,f)},qg:function(b){if(!this.oa&&b&&b.target){var c=f(b.target).closest(".oj-menu-item");c.closest(this.element).length&&
this.gE(c,b)}this.oa?this.oa.has(".oj-menu").length||this.oa.is(".oj-disabled")?a.D.warn("Selecting a disabled menu item or parent menu item is not allowed."):(c={item:this.oa},this.Ct(b,!0),this.Nb&&this.Nu(b),this._trigger("select",b,c)):a.D.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.")}});var c=[]})()});
//# sourceMappingURL=oj-modular.map