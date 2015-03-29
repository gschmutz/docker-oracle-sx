"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore","jquery"],function(a,f){a.U=function(a,b,d){this.Init(a,b,d)};o_("Message",a.U,a);a.U.cg={CONFIRMATION:"confirmation",INFO:"info",WARNING:"warning",ERROR:"error",FATAL:"fatal"};o_("Message.SEVERITY_TYPE",a.U.cg,a);a.U.Mb={FATAL:5,ERROR:4,WARNING:3,INFO:2,CONFIRMATION:1};o_("Message.SEVERITY_LEVEL",a.U.Mb,a);a.b.sa(a.U,a.b,"oj.Message");a.U.prototype.Init=function(c,b,d){a.U.t.Init.call(this);this.summary=c;this.detail=b;this.severity=d||a.U.cg.ERROR};a.b.g("Message.prototype.Init",
{Init:a.U.prototype.Init});a.U.prototype.mH=function(){return!0};a.U.prototype.Ci=function(c){return c&&a.U.Gl(this.severity)===a.U.Gl(c.severity)&&this.summary===c.summary&&this.detail===c.detail?!0:!1};a.b.g("Message.prototype.equals",{Ci:a.U.prototype.Ci});a.U.prototype.clone=function(){return new a.U(this.summary,this.detail,this.severity)};a.b.g("Message.prototype.clone",{clone:a.U.prototype.clone});a.U.Gl=function(c){c&&("string"===typeof c?(c=a.U.it.indexOf(c,1),c=-1===c?a.U.Mb.ERROR:c):"number"===
typeof c&&c<a.U.Mb.CONFIRMATION&&c>a.U.Mb.FATAL&&(c=a.U.Mb.ERROR));return c?c:a.U.Mb.ERROR};o_("Message.getSeverityLevel",a.U.Gl,a);a.U.oW=function(c){var b;c&&("string"===typeof c?(b=a.U.it.indexOf(c,1),-1===b&&(c=a.U.cg.ERROR)):"number"===typeof c&&(c=c<a.U.Mb.CONFIRMATION&&c>a.U.Mb.FATAL?a.U.cg.ERROR:a.U.it[c]));return c||a.U.cg.ERROR};o_("Message.getSeverityType",a.U.oW,a);a.U.El=function(c){var b=-1,d;c&&0<c.length&&f.each(c,function(c,g){g&&(d=a.U.Gl(g.severity));b=b<d?d:b});return b};o_("Message.getMaxSeverity",
a.U.El,a);a.U.isValid=function(c){return a.U.El(c)>=a.U.Mb.ERROR?!1:!0};o_("Message.isValid",a.U.isValid,a);a.U.it=["none",a.U.cg.CONFIRMATION,a.U.cg.INFO,a.U.cg.WARNING,a.U.cg.ERROR,a.U.cg.FATAL];a.Rb=function(a,b,d,e){this.Init(a,b,d,e)};a.b.sa(a.Rb,a.U,"oj.ComponentMessage");a.Rb.lk={Ss:"shown",Qs:"hidden"};a.Rb.uK={display:a.Rb.lk.Ss,context:""};a.Rb.prototype.Init=function(c,b,d,e){a.Rb.t.Init.call(this,c,b,d);this.Wa=f.extend({},a.Rb.uK,e)};a.Rb.prototype.Ci=function(c){return a.Rb.t.Ci.call(this,
c)&&this.Wa.display===c.Wa.display};a.Rb.prototype.clone=function(){return new a.Rb(this.summary,this.detail,this.severity,this.Wa)};a.Rb.prototype.mH=function(){return!(this.Wa&&this.Wa.display&&this.Wa.display===a.Rb.lk.Qs)};a.Rb.prototype.dP=function(){this.Wa&&a.Rb.lk.Qs===this.Wa.display&&(this.Wa.display=a.Rb.lk.Ss)};a.Rb.prototype.TD=function(){return this.Wa&&this.Wa.context?!0:!1}});
//# sourceMappingURL=oj-modular.map