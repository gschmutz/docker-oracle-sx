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
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore","jquery"],function(a,f){a.Nc=function(a){this.data=a;this.Init()};o_("DataSource",a.Nc,a);a.b.sa(a.Nc,a.b,"oj.DataSource");a.Nc.prototype.Init=function(){this.ib=[];a.Nc.t.Init.call(this)};a.b.g("DataSource.prototype.Init",{Init:a.Nc.prototype.Init});a.Nc.prototype.on=function(a,b){var d=!1,e;for(e=0;e<this.ib.length;e++)if(this.ib[e].eventType==a&&this.ib[e].eventHandlerFunc==b){d=!0;break}d||this.ib.push({eventType:a,eventHandlerFunc:b})};a.b.g("DataSource.prototype.on",{on:a.Nc.prototype.on});
a.Nc.prototype.off=function(a,b){var d;for(d=this.ib.length-1;0<=d;d--)if(this.ib[d].eventType==a&&this.ib[d].eventHandlerFunc==b){this.ib.splice(d,1);break}};a.b.g("DataSource.prototype.off",{off:a.Nc.prototype.off});a.Nc.prototype.handleEvent=function(a,b){var d;for(d=0;d<this.ib.length;d++){var e=this.ib[d];e.eventType==a&&e.eventHandlerFunc(b)}};a.b.g("DataSource.prototype.handleEvent",{handleEvent:a.Nc.prototype.handleEvent});a.Nc.prototype.getCapability=function(){return null};a.b.g("DataSource.prototype.getCapability",
{getCapability:a.Nc.prototype.getCapability});a.mc=function(c){a.mc.t.constructor.call(this,c)};o_("TreeDataSource",a.mc,a);a.b.sa(a.mc,a.Nc,"oj.TreeDataSource");a.mc.prototype.Yd=function(){return-1};a.b.g("TreeDataSource.prototype.getChildCount",{Yd:a.mc.prototype.Yd});a.mc.prototype.Wd=function(){a.i.fa()};a.b.g("TreeDataSource.prototype.fetchChildren",{Wd:a.mc.prototype.Wd});a.mc.prototype.Dh=function(){a.i.fa()};a.b.g("TreeDataSource.prototype.fetchDescendants",{Dh:a.mc.prototype.Dh});a.mc.prototype.sort=
function(){a.i.fa()};a.b.g("TreeDataSource.prototype.sort",{sort:a.mc.prototype.sort});a.mc.prototype.wo=function(){return{key:null,direction:"none"}};a.b.g("TreeDataSource.prototype.getSortCriteria",{wo:a.mc.prototype.wo});a.mc.prototype.move=function(){a.i.fa()};a.b.g("TreeDataSource.prototype.move",{move:a.mc.prototype.move});a.mc.prototype.Pi=function(){return"valid"};a.b.g("TreeDataSource.prototype.moveOK",{Pi:a.mc.prototype.Pi});a.mc.prototype.getCapability=function(){return null};a.b.g("TreeDataSource.prototype.getCapability",
{getCapability:a.mc.prototype.getCapability});a.ga=function(c,b){this.Kd=c;this.Qo=b;a.ga.t.constructor.call(this)};o_("FlattenedTreeDataSource",a.ga,a);a.b.sa(a.ga,a.Nc,"oj.FlattenedTreeDataSource");a.ga.prototype.Init=function(){var c;a.ga.t.Init.call(this);this.Kd.on("change",this.MQ.bind(this));this.iy=parseInt(this.Qo.fetchSize,10);isNaN(this.iy)&&(this.iy=25);this.$j=parseInt(this.Qo.maxCount,10);isNaN(this.$j)&&(this.$j=500);c=this.Qo.expanded;Array.isArray(c)?this.Hh=c:("all"===c&&(this.Kl=
[]),this.Hh=[]);this.Mi=[]};a.b.g("FlattenedTreeDataSource.prototype.Init",{Init:a.ga.prototype.Init});a.ga.prototype.handleEvent=function(c,b){a.ga.t.handleEvent.call(this,c,b)};a.b.g("FlattenedTreeDataSource.prototype.handleEvent",{handleEvent:a.ga.prototype.handleEvent});a.ga.prototype.Vy=function(){delete this.Mi;delete this.Hh;this.Kd.off("change");this.Kd.LJ&&this.Kd.LJ()};a.b.g("FlattenedTreeDataSource.prototype.Destroy",{Vy:a.ga.prototype.Vy});a.ga.prototype.Lx=function(){return this.iy};
a.ga.prototype.VH=function(){return this.Hh};a.b.g("FlattenedTreeDataSource.prototype.getExpandedKeys",{VH:a.ga.prototype.VH});a.ga.prototype.so=function(a){return null!=this.Qo?this.Qo[a]:null};a.b.g("FlattenedTreeDataSource.prototype.getOption",{so:a.ga.prototype.so});a.ga.prototype.getWrappedDataSource=function(){return this.Kd};a.b.g("FlattenedTreeDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:a.ga.prototype.getWrappedDataSource});a.ga.prototype.Zu=function(a){var b,d;b=this.Lx();
d=this.$j;return-1===b?-1===a?d:a:-1===a?Math.min(b,a):b};a.ga.prototype.DH=function(a,b){this.ar()?this.WO(a,b):this.VO(a,b)};a.ga.prototype.VO=function(c,b){var d,e,g,f,k,l;if(c.start>this.Pc()){d=this.hv();if(0>this.Pc()){c.count=Math.min(d,c.count);this.Kd.Wd(null,c,{success:function(a){this.Rq(a,null,0,c,0,b)}.bind(this)});return}if(0<d){e=this.LC();g=e.parent;f=this.Kd.Yd(g);k=e.index;l=e.depth;-1===f||k<f-1?(e=this.Zu(f),c.start=k+1,c.count=-1===f?e:Math.min(d,Math.min(e,f-c.start)),this.Kd.Wd(g,
c,{success:function(a){this.Rq(a,g,l,c,f,b)}.bind(this)})):k===f-1?(d=new a.Xc(null,c.start),null!=b&&null!=b.success&&b.success.call(null,d)):(d=this.kC(g,l,b,d),d||(d=new a.Xc(null,c.start),null!=b&&null!=b.success&&b.success.call(null,d)));return}}this.Tx(c,b)};a.ga.prototype.hv=function(){return this.$j-(this.Pc()+1)};a.ga.prototype.Rq=function(c,b,d,e,g,f){var k;k=[];c=new a.ad(c,this.Bo.bind(this),e);this.OS(c,b,d,k);-1===g&&0===c.Z()&&null!=b&&0<d?(b=this.kC(b,d,f))||null!=f&&null!=f.success&&
f.success.call(null,c):(null!=f&&null!=f.success&&f.success.call(null,c),this.SO(k))};a.ga.prototype.kC=function(a,b,d,e){var g,f,k,l,m,n,q,r,t;void 0===e&&(e=this.hv());this.KD()&&(g={queueOnly:!0});f=t=this.Zu(-1);for(k=this.Pc()-1;0<=k;k--)if(l=this.Fe(k),m=l.depth,m<b&&(a=l.parent,n=this.Kd.Yd(a),l=l.index,(q=-1===n)||l<n-1)){r={};r.start=l+1;q?(r.count=Math.min(e,Math.max(0,f)),g=void 0):r.count=Math.min(e,Math.min(f,n-r.start));if(0==r.count)break;this.Kd.Wd(a,r,{success:function(b){this.Rq(b,
a,m,r,n,d)}.bind(this)},g);b=m;f=Math.max(0,f-r.count);if(q||0===m||0===f)break}void 0!=g&&this.Kd.Wd(a,{start:r.count,count:0},{success:function(b){this.Rq(b,a,m,r,n,d)}.bind(this)});return f!=t};a.ga.prototype.OS=function(a,b,d,e){var g,f,k,l;g=a.Ka();f=a.Z();for(k=0;k<f;k++)l=a.getMetadata(g+k),l=l.key,this.Mp(l,d,g+k,b),this.br(l)&&e.push(l)};a.ga.prototype.Bo=function(a,b){this.br(a)&&!b.leaf?b.state="expanded":b.state=b.leaf?"leaf":"collapsed"};a.ga.prototype.WO=function(a,b){var d={maxCount:this.$j};
0<=this.Pc()&&(d.start=this.Fe(this.Pc()).key);this.Kd.Dh(null,{success:function(d){this.wQ(d,a,b)}.bind(this)},d)};a.ga.prototype.wQ=function(c,b,d){var e,g,f;b.start>this.Pc()?(e=this.hv(),g=Math.min(e,b.count),c=new a.ad(c,this.Bo.bind(this)),0<=this.Pc()?(f=this.LC(),e={index:0,found:!1,count:0},this.vw(c,null,0,f,g,e),g=e.index+1):(e={count:0},this.vw(c,null,0,null,g,e),g=0),null!=d&&null!=d.success&&(c=null!=e?0===e.count?new a.Xc(null,b.start):new a.Yc(c,g):new a.Yc(c),d.success.call(null,
c))):this.Tx(b,d)};a.ga.prototype.vw=function(a,b,d,e,g,f){var k,l,m,n,q;k=a.Ka();l=a.Z();for(m=0;m<l&&f.count!=g;m++){n=a.getMetadata(k+m);q=n.key;f.checkDepth&&e.depth===d&&(f.found=!0,f.checkDepth=!1);if(null==e||f.found)this.Mp(q,d,k+m,b),f.count+=1,n.state=n.leaf?"leaf":"expanded";null==e||f.found||(q===e.key?n.leaf||this.br(q)?f.found=!0:f.checkDepth=!0:f.index+=1);a.Hd&&(n=a.Hd(m),null!=n&&this.vw(n,q,d+1,e,g,f))}};a.ga.prototype.expand=function(a){this.Ce(a)};a.b.g("FlattenedTreeDataSource.prototype.expand",
{expand:a.ga.prototype.expand});a.ga.prototype.Ce=function(c,b){var d,e,g,f;d=this.Kd.Yd(c);e=this.Zu(d);g=this.$j;if(this.Pc()+1===g&&(f=this.Cl(c),f==g-1)){this.Sx(c,new a.Xc(c,0),0,b);return}0==e?this.Sx(c,new a.Xc(c,0),0,b):this.Kd.Wd(c,{start:0,count:e},{success:function(a){this.Sx(c,a,d,b)}.bind(this)})};a.ga.prototype.collapse=function(a){var b,d,e,g,f;b=this.Cl(a)+1;d=this.Fe(b-1);e=0;d=d.depth;g=this.Pc();for(f=b;f<g+1;f++){var k=this.Fe(f).depth;if(k>d)e+=1;else if(k==d)break}if(0!=e){this.ar()?
this.Kl.push(a):this.rT(a);g=[];for(d=0;d<e;d++)g.push({key:this.Fe(b+d).key,index:b+d});this.sF(b,e);this.Hs(g);this.handleEvent("collapse",{rowKey:a})}};a.b.g("FlattenedTreeDataSource.prototype.collapse",{collapse:a.ga.prototype.collapse});a.ga.prototype.br=function(a){return this.ar()?this.Kl&&0<this.Kl.length?-1===this.wC(a):!0:this.Hh&&0<this.Hh.length?-1<this.FC(a):!1};a.ga.prototype.wC=function(a){return this.KC(this.Kl,a)};a.ga.prototype.FC=function(a){return this.KC(this.Hh,a)};a.ga.prototype.KC=
function(a,b){var d,e;e=-1;for(d=0;d<a.length;d++)a[d]===b&&(e=d);return e};a.ga.prototype.rT=function(a){a=this.FC(a);-1<a&&this.Hh.splice(a,1)};a.ga.prototype.mT=function(a){a=this.wC(a);-1<a&&this.Kl.splice(a,1)};a.ga.prototype.Sx=function(c,b,d,e){var g,f,k,l,m,n,q,r,t,p,u;b=new a.ad(b,this.Bo.bind(this));f=g=this.Cl(c)+1;k=b.Ka();l=b.Z();m=this.Fe(g-1);n=m.depth+1;r=[];for(t=k;t<l;t++)k=b.getMetadata(t),q=k.key,this.br(q)&&r.push(q),this.ID(g,k,m.key,t,n),g++;this.ar()?this.mT(c):-1===this.Hh.indexOf(c)&&
this.Hh.push(c);void 0!=e&&(p=e.queue,u=e.prevNodeSetInfo);void 0!=u&&(b=new a.ge(u.nodeSet,b,c));if(0!=r.length||void 0!==p&&0!=p.length)void 0===p&&(p=[]),0<r.length&&p.push(r),void 0===u&&(u={},u.firstIndex=f,u.firstKey=c,u.keys=[]),u.nodeSet=b,u.keys.push(c),this.zU(p,u);else{void 0!=u?this.us(u.firstIndex,u.firstKey,b):this.us(f,c,b);b=this.$j;-1===d&&l===this.Lx()||d>l||g==b?this.xu(g):this.Pc()>=b&&this.xu(b);if(void 0!=u)for(d=0;d<u.keys.length;d++)this.handleEvent("expand",{rowKey:u.keys[d]});
this.handleEvent("expand",{rowKey:c})}};a.ga.prototype.zU=function(a,b){var d,e;d=a[a.length-1];e=d.shift();0===d.length&&a.pop();this.Ce(e,{prevNodeSetInfo:b,queue:a})};a.ga.prototype.SO=function(a){var b,d;this.KD()&&(b={queueOnly:!0});for(d=0;d<a.length;d++)d==a.length-1?this.Ce(a[d]):this.Ce(a[d],b)};a.ga.prototype.ID=function(a,b,d,e,g){b=b.key;a<=this.Pc()?this.Mp(b,g,e,d,a):this.Mp(b,g,e,d)};a.ga.prototype.xu=function(a,b){var d;void 0==b&&(b=this.Pc()+1-a);d=[];for(var e=0;e<b;e++)d.push({row:this.Fe(a+
e).key,index:a+e});this.sF(a,b);this.Hs(d)};a.ga.prototype.MQ=function(a){var b,d,e;b=a.operation;d=a.parent;d=Array.isArray(d)?d[d.length-1]:d;e=a.index;"insert"===b?this.zQ(d,e,a.data):"delete"===b?this.sQ(d,e):"refresh"===b&&this.PQ(d)};a.ga.prototype.zQ=function(a,b,d){var e,g;e=this.Cl(a);g=this.Fe(e).depth+1;e=e+b+1;d=d.getMetadata(d.Ka());this.ID(e,d,a,b,g)};a.ga.prototype.sQ=function(c,b){var d,e,g,f,k;d=this.Cl(c);e=this.Fe(d);d+=b;g=this.Fe(d);a.i.assert(g.parent===e&&g.depth===e.depth+
1);e=d+1;for(f=this.Pc();e<=f;){k=this.Fe(e);if(k.depth!=g.depth)break;e++}this.xu(d,1)};a.ga.prototype.PQ=function(a){null==a&&this.refresh()};a.ga.prototype.ar=function(){var a=this.Kd.getCapability("fetchDescendants");return void 0!=this.Kl&&null!=a&&"disable"!=a};a.ga.prototype.KD=function(){return"enable"===this.Kd.getCapability("batchFetch")};a.ga.prototype.refresh=function(){this.sN()};a.ga.prototype.Cl=function(a){var b,d,e;b=this.Pc();for(d=0;d<=b;d++)if(e=this.Fe(d),e.key==a)return d;return-1};
a.ga.prototype.getKey=function(a){return 0>a||a>this.Pc()?null:this.Fe(a).key};a.ga.prototype.hW=function(){return{start:0,end:this.Pc()+1}};a.ga.prototype.Tx=function(a,b){null!=b&&null!=b.error&&b.error.call(null)};a.ga.prototype.us=function(){a.i.fa()};a.ga.prototype.Hs=function(){a.i.fa()};a.ga.prototype.Pc=function(){return this.Mi.length-1};a.ga.prototype.LC=function(){return this.Mi[this.Pc()]};a.ga.prototype.Fe=function(a){return this.Mi[a]};a.ga.prototype.Mp=function(a,b,d,e,g){var f={};
f.key=a;f.depth=b;f.index=d;f.parent=e;void 0===g?this.Mi.push(f):this.Mi.splice(g,0,f)};a.ga.prototype.sF=function(a,b){this.Mi.splice(a,b)};a.ga.prototype.sN=function(){this.Mi.length=0};a.uk=function(){this.id=null;this.depth=0;this.parent=null;this.children=[];this.hy=this.attr=this.title=null};a.uk.prototype.RM=function(a){return function(b,d){return b.attr&&d.attr&&b.attr[a]&&d.attr[a]?b.attr[a]<d.attr[a]?0:1:b[a]<d[a]?0:1}};a.uk.prototype.uO=function(a){return function(b,d){return b.attr&&
d.attr&&b.attr[a]&&d.attr[a]?b.attr[a]<d.attr[a]?1:0:b[a]<d[a]?1:0}};a.uk.prototype.tG=function(a){var b=a.key;"ascending"===a.direction?this.children.sort(this.RM(b)):"descending"===a.direction&&this.children.sort(this.uO(b));for(var b=0,d=this.children.length;b<d;b++)this.children[b].tG(a)};a.$b=function(c){var b;b=new a.uk;c.id||(b.id="root");this.data=this.GB(0,b,c);a.$b.t.constructor.call(this,b)};o_("JsonTreeDataSource",a.$b,a);a.b.sa(a.$b,a.mc,"oj.JsonTreeDataSource");a.$b.prototype.Init=function(){a.$b.t.Init.call(this)};
a.b.g("JsonTreeDataSource.prototype.Init",{Init:a.$b.prototype.Init});a.$b.prototype.GB=function(c,b,d,e){var g,f,k,l,m,n,q;e||(e=0);for(l in d)if("children"==l||0==e&&d instanceof Array)for(g=0==e&&d instanceof Array?d:d[l],e++,q=0;q<g.length;q++){k=g[q];f=new a.uk;k.id||(c++,k.attr?k.attr.id||(k.attr.id="rid_"+c):f.id="rid_"+c);for(m in k)for(n in f)m==n&&"children"!=m&&(f[n]=k[m]),"depth"==n&&(f[n]=e);b.children.push(f);for(n in k)"children"==n&&this.GB(c,b.children[q],k,e)}return b};a.$b.prototype.Yd=
function(a){a||(a=this.data.id);a=this.ni(this.data,a);return a.children?a.children.length:0};a.b.g("JsonTreeDataSource.prototype.getChildCount",{Yd:a.$b.prototype.Yd});a.$b.prototype.Wd=function(c,b,d){var e,g,f,k,l;f=[];c||(c=this.data.id);k=this.ni(this.data,c);b||(b=[],b.start=0,b.count=k.children.length);b.count||(b.count=k.children.length);b.start||(b.start=0);e=b.start;g=Math.min(k.children.length,e+b.count);for(b=e;b<g;b+=1)l=new a.uk,k.children[b].attr&&(l.attr=k.children[b].attr),k.children[b].id&&
(l.id=k.children[b].id),k.children[b].depth&&(l.depth=k.children[b].depth),k.children[b].title&&(l.title=k.children[b].title),k.children[b].parent&&(l.parent=k.children[b].parent),l.hy=0<k.children[b].children.length?!1:!0,f.push(l);c=new a.$c(e,g,f,c);null!=d&&null!=d.success&&d.success.call(null,c)};a.b.g("JsonTreeDataSource.prototype.fetchChildren",{Wd:a.$b.prototype.Wd});a.$b.prototype.Dh=function(c,b){var d,e,g,f;g=[];c||(c=this.data.id);f=this.ni(this.data,c);d=[];d.start=0;d.count=f.children.length;
e=d.start;for(d=Math.min(f.children.length,e+d.count);e<d;e+=1)f.children[e].hy=0<f.children[e].children.length?!1:!0,g.push(f.children[e]);g=new a.$c(0,g.length,g,c);null!=b&&null!=b.success&&b.success.call(null,g)};a.b.g("JsonTreeDataSource.prototype.fetchDescendants",{Dh:a.$b.prototype.Dh});a.$b.prototype.move=function(a,b,d,e){var g;g=b;if(!g||g==this.data.id){if("inside"!=d){console.log("Error: root can not be the reference node if position equals to "+d);return}g||(g=this.data.id)}a=this.ni(null,
a);this.ni(a,g)?console.log("Error: the node to move contains the reference node as its sub-tree."):(b=this.ni(null,g),g=this.ov(g),this.sT(a),"inside"==d?(this.zh(a,a.depth-(b.depth+1)),b.children.push(a)):"before"==d?(this.zh(a,a.depth-b.depth),d=g.children.indexOf(b),-1<d&&(0!=d?g.children.splice(d-1,0,a):g.children.unshift(a))):"after"==d?(this.zh(a,a.depth-b.depth),d=g.children.indexOf(b),-1<d&&g.children.splice(d,0,a)):"first"==d?(this.zh(a,a.depth-b.depth),g.children.unshift(a)):"last"==d&&
(this.zh(a,a.depth-b.depth),g.children.push(a)),null!=e&&null!=e.success&&e.success.call(null,this.data))};a.b.g("JsonTreeDataSource.prototype.move",{move:a.$b.prototype.move});a.$b.prototype.sort=function(a,b){var d;d=this.ni(this.data,this.data.id);d.tG(a);null!=b&&null!=b.success&&b.success.call(null,d)};a.b.g("JsonTreeDataSource.prototype.sort",{sort:a.$b.prototype.sort});a.$b.prototype.ov=function(a,b){var d,e=null;if(a==this.data.id)return null;b||(b=this.data);if(b.children&&0<b.children.length){for(d=
0;d<b.children.length;d++)if(b.children[d].id&&b.children[d].id==a||b.children[d].attr&&b.children[d].attr.id==a)return b;for(d=0;d<b.children.length&&!(e=this.ov(a,b.children[d]));d++);}return e};a.$b.prototype.ni=function(a,b){var d,e=null;a||(a=this.data);if(a.id&&a.id==b||a.attr&&a.attr.id==b)return a;if(null!=a.children)for(d=0;d<a.children.length&&!e;d++)e=a.children[d].id&&a.children[d].id==b||a.children[d].attr&&a.children[d].attr.id==b?a.children[d]:this.ni(a.children[d],b);return e};a.$b.prototype.zh=
function(a,b){var d;a.depth-=b;if(a.children&&0!=a.children.length)for(d=0;d<a.children.length;d++)this.zh(a.children[d],b)};a.$b.prototype.sT=function(a){var b;a.id?b=a.id:a.attr&&(b=a.attr.id);(b=this.ov(b))||(b=this.data);a=b.children.indexOf(a);-1<a&&b.children.splice(a,1)};a.$b.prototype.getCapability=function(a){return"fetchDescendants"===a?"enable":"sort"===a?"default":"batchFetch"===a?"disable":"move"===a?"full":null};a.b.g("JsonTreeDataSource.prototype.getCapability",{getCapability:a.$b.prototype.getCapability});
a.bb=function(c,b){a.bb._init(this,c,b,null)};o_("Row",a.bb,a);a.b.sa(a.bb,a.b,"Row.Row");a.bb.prototype.Init=function(){a.bb.t.Init.call(this)};a.bb.prototype.attributes={};a.b.g("Row.prototype.attributes",{attributes:a.bb.prototype.attributes});a.bb.prototype.context={};a.b.g("Row.prototype.context",{context:a.bb.prototype.context});a.bb.prototype.id=null;a.b.g("Row.prototype.id",{id:a.bb.prototype.id});a.bb.prototype.Se=null;a.b.g("Row.prototype.idAttribute",{Se:a.bb.prototype.Se});a.bb._init=
function(a,b,d,e){b=null;a.Init();a.index=-1;d=d||{};a.attributes={};for(b in e)e.hasOwnProperty(b)&&(a[b]=e[b]);a.rowSet=d.rowSet;a.context=d.context};a.bb.prototype.clone=function(){a.i.fa();return null};a.b.g("Row.prototype.clone",{clone:a.bb.prototype.clone});a.bb.prototype.get=function(){a.i.fa();return null};a.b.g("Row.prototype.get",{get:a.bb.prototype.get});a.bb.prototype.set=function(){a.i.fa();return null};a.b.g("Row.prototype.set",{set:a.bb.prototype.set});a.bb.prototype.keys=function(){a.i.fa();
return null};a.b.g("Row.prototype.keys",{keys:a.bb.prototype.keys});a.bb.prototype.values=function(){a.i.fa();return null};a.b.g("Row.prototype.values",{values:a.bb.prototype.values});a.bb.prototype.pairs=function(){a.i.fa();return null};a.b.g("Row.prototype.pairs",{pairs:a.bb.prototype.pairs});a.Q=function(c,b){a.Q._init(this,c,b,null)};o_("RowSet",a.Q,a);a.Q.prototype.lf=null;a.b.g("RowSet.prototype.comparator",{lf:a.Q.prototype.lf});a.Q.prototype.Tf=!0;a.b.g("RowSet.prototype.sortSupported",{Tf:a.Q.prototype.Tf});
a.b.sa(a.Q,a.b,"RowSet.RowSet");a.Q.prototype.Init=function(){a.Q.t.Init.call(this)};a.Q._init=function(a,b,d,e){var g;a.ib=[];a.Init();if(e)for(g in e)e.hasOwnProperty(g)&&(a[g]=e[g])};a.Q.prototype.at=function(){a.i.fa();return null};a.b.g("RowSet.prototype.at",{at:a.Q.prototype.at});a.Q.prototype.fetch=function(){a.i.fa()};a.b.g("RowSet.prototype.fetch",{fetch:a.Q.prototype.fetch});a.Q.prototype.get=function(){a.i.fa();return null};a.b.g("RowSet.prototype.get",{get:a.Q.prototype.get});a.Q.prototype.hasMore=
function(){a.i.fa();return!1};a.b.g("RowSet.prototype.hasMore",{hasMore:a.Q.prototype.hasMore});a.Q.prototype.indexOf=function(){a.i.fa();return 0};a.b.g("RowSet.prototype.indexOf",{indexOf:a.Q.prototype.indexOf});a.Q.prototype.isEmpty=function(){a.i.fa();return!0};a.b.g("RowSet.prototype.isEmpty",{isEmpty:a.Q.prototype.isEmpty});a.Q.prototype.size=function(){a.i.fa();return 0};a.b.g("RowSet.prototype.size",{size:a.Q.prototype.size});a.Q.prototype.sort=function(){a.i.fa()};a.b.g("RowSet.prototype.sort",
{sort:a.Q.prototype.sort});a.Q.prototype.totalSize=function(){a.i.fa();return 0};a.b.g("RowSet.prototype.totalSize",{totalSize:a.Q.prototype.totalSize});a.Q.prototype.on=function(a,b){var d=!1,e;for(e=0;e<this.ib.length;e++)if(this.ib[e].eventType==a&&this.ib[e].eventHandlerFunc==b){d=!0;break}d||this.ib.push({eventType:a,eventHandlerFunc:b})};a.b.g("RowSet.prototype.on",{on:a.Q.prototype.on});a.Q.prototype.off=function(a,b){var d;for(d=0;d<this.ib.length;d++)if(this.ib[d].eventType==a&&this.ib[d].eventHandlerFunc==
b){this.ib.remove(this.ib[d]);break}};a.b.g("RowSet.prototype.off",{off:a.Q.prototype.off});a.Q.prototype.ac=function(a,b){var d;for(d=0;d<this.ib.length;d++){var e=this.ib[d];e.eventType==a&&e.eventHandlerFunc(b)}};a.Q.v={ADD:"add",REMOVE:"remove",RESET:"reset",REFRESH:"refresh",SORT:"sort",CHANGE:"change",REQUEST:"request",SYNC:"sync",ERROR:"error"};o_("RowSet.EventType",a.Q.v,a);a.Q.IL={IX:"added",NX:"deleted",TX:"updated",QX:"none"};o_("RowSet._ROW_STATUSES",a.Q.IL,a);a.Ta=function(c,b){a.Ta._init(this,
c,b,null)};o_("ArrayRow",a.Ta,a);a.b.sa(a.Ta,a.bb,"ArrayRow.ArrayRow");a.Ta.prototype.Init=function(){a.Ta.t.Init.call(this)};a.Ta.prototype.attributes={};a.b.g("ArrayRow.prototype.attributes",{attributes:a.Ta.prototype.attributes});a.Ta.prototype.id=null;a.b.g("ArrayRow.prototype.id",{id:a.Ta.prototype.id});a.Ta.prototype.Se=null;a.b.g("ArrayRow.prototype.idAttribute",{Se:a.Ta.prototype.Se});a.Ta._init=function(a,b,d,e){var g=null;a.Init();a.index=-1;d=d||{};a.attributes=b;for(g in e)e.hasOwnProperty(g)&&
(a[g]=e[g]);a.idAttribute=d.idAttribute;a.context=d.context;a.Qw()};a.Ta.prototype.clone=function(){var c=new this.constructor,b;for(b in this)this.hasOwnProperty(b)&&this[b]!==this.attributes&&(c[b]=this[b]);c.attributes=a.Ta.fh(this.attributes,null);c.Qw();return c};a.b.g("ArrayRow.prototype.clone",{clone:a.Ta.prototype.clone});a.Ta.prototype.get=function(a){return this.attributes[a]};a.b.g("ArrayRow.prototype.get",{get:a.Ta.prototype.get});a.Ta.prototype.set=function(c,b,d){var e={},g=!1;if(arguments&&
0<arguments.length)if(1<arguments.length&&arguments[arguments.length-1]&&(g=!0,e=arguments[arguments.length-1]||{}),a.Ta.xj(c))this.kl(c,e);else for(e=0;e<arguments.length;e+=2)(void 0!==arguments[e]||e<arguments.length-1||!g&&e===arguments.length-1)&&this.kl(arguments[e],arguments[e+1]);return this};a.b.g("ArrayRow.prototype.set",{set:a.Ta.prototype.set});a.Ta.prototype.keys=function(){var a,b=[];for(a in this.attributes)this.attributes.hasOwnProperty(a)&&b.push(a);return b};a.b.g("ArrayRow.prototype.keys",
{keys:a.Ta.prototype.keys});a.Ta.prototype.values=function(){var a,b=[];for(a in this.attributes)this.attributes.hasOwnProperty(a)&&b.push(this.get(a));return b};a.b.g("ArrayRow.prototype.values",{values:a.Ta.prototype.values});a.Ta.prototype.pairs=function(){var a,b=[],d;for(a in this.attributes)this.attributes.hasOwnProperty(a)&&(d=[],d.push(a),d.push(this.get(a)),b.push(d));return b};a.b.g("ArrayRow.prototype.pairs",{pairs:a.Ta.prototype.pairs});a.Ta.prototype.dv=function(){return this.idAttribute||
"id"};a.Ta.prototype.qv=function(a){return this[a]instanceof Function?this[a]():this[a]};a.Ta.xj=function(a){var b;if(a&&a instanceof Object)for(b in a)if(a.hasOwnProperty(b))return!0;return!1};a.Ta.prototype.Qw=function(){var a=this.dv();if("string"===f.type(a))this.id=this.attributes[a];else if(f.isArray(a)){var b;this.id=[];for(b=0;b<a.length;b++)this.id[b]=this.attributes[a[b]]}};a.Ta.prototype.Nw=function(c,b){return a.b.ej(this.attributes[c],b)?!1:(this.attributes[c]=b,this.Qw(),a.$.t.ac.call(this.rowSet,
a.Q.v.CHANGE,this),!0)};a.Ta.prototype.kl=function(a,b){if(null==a)return!0;var d={},e;if(1<arguments.length)d[a]=b;else for(e in a)a.hasOwnProperty(e)&&(d[e]=a[e]);for(e in d)d.hasOwnProperty(e)&&this.Nw(e,d[e]);return!0};a.Ta.fh=function(c,b){var d;b=b||{};for(d in c)c.hasOwnProperty(d)&&("object"!==typeof c[d]?b.hasOwnProperty(d)?void 0!==c[d]&&(b[d]=c[d]):b[d]=c[d]:b[d]=a.Ta.fh(c[d],null));return b};a.$=function(c,b){a.$._init(this,c,b,null)};o_("ArrayRowSet",a.$,a);a.$.prototype.lf=null;a.b.g("ArrayRowSet.prototype.comparator",
{lf:a.$.prototype.lf});a.$.prototype.Tf=!0;a.b.g("ArrayRowSet.prototype.sortSupported",{Tf:a.$.prototype.Tf});a.b.sa(a.$,a.Q,"ArrayRowSet.ArrayRowSet");a.$.prototype.Init=function(){a.$.t.Init.call(this)};a.$._init=function(c,b,d,e){var g;c.ib=[];c.C=0;c.Init();if(e)for(g in e)e.hasOwnProperty(g)&&(c[g]=e[g]);d=d||{};c.Ia=[];c.Kf=[];null!=b&&void 0!==b&&(c.rn="id",null!=d&&null!=d.idAttribute&&(c.rn=d.idAttribute),c.f=b instanceof Array?b:b(),c.Ia=a.$.rv(c.f,c.rn,c),c.Mf=c.f.length,b instanceof Array||
b.subscribe(function(d){var e,g,f=0;g=!0;for(e=0;e<d.length;e++)"deleted"!=d[e].status&&(g=!1);if(0==b().length&&g)c.reset();else{for(e=0;e<d.length;e++)"deleted"===d[e].status&&(g=new a.Ta(d[e].value,{idAttribute:c.rn}),g.index=d[e].index-f,c.mi(g,d[e].index-f),f++);for(e=0;e<d.length;e++)"added"===d[e].status&&(g=new a.Ta(d[e].value,{idAttribute:c.rn}),g.index=d[e].index,c.add(g,{at:d[e].index}))}},null,"arrayChange"))};a.$.prototype.add=function(c,b){b=b||{};var d=b.deferred;this.BM(c,b.at,b);
return d?a.b.ha(function(a){a()}):null};a.b.g("ArrayRowSet.prototype.add",{add:a.$.prototype.add});a.$.prototype.at=function(c,b){b=b||{};if(0>c||c>=this.Ia.length)return null;var d=this.Ia[c];return b.deferred?a.b.ha(function(a){a(d)}):d};a.b.g("ArrayRowSet.prototype.at",{at:a.$.prototype.at});a.$.prototype.clone=function(){var a=new this.constructor,b,d;for(b=0;b<this.Ia.length;b+=1)(d=this.at(b,null))&&a.add(d.clone(),{at:b});return a};a.b.g("ArrayRowSet.prototype.clone",{clone:a.$.prototype.clone});
a.$.prototype.fetch=function(c){c=c||{};this.Vw();try{this.na=0<c.pageSize?c.pageSize:-1,this.C=null!=c?null!=c.startIndex?c.startIndex:0:0,this.Kf=a.$.nv(this.Ia,this.C,this.na)}catch(b){this.If(c,b);return}c.pageSize=this.na;c.startIndex=this.C;c.refresh=!0;this.If(c,null)};a.b.g("ArrayRowSet.prototype.fetch",{fetch:a.$.prototype.fetch});a.$.prototype.get=function(c,b){b=b||{};var d=b.deferred,e,g,h,k=null;for(e=0;e<this.Ia.length;e+=1)if(h=this.Ia[e],void 0!==h){if(f.isArray(h.id)&&f.isArray(c)){if(h.id.length==
c.length){var l=!0;for(g=0;g<c.length;g++)if(h.id[g]!=c[g]){l=!1;break}l&&(k=h)}}else h.id==c&&(k=h);if(null!=k)return d?a.b.ha(function(a){a(k)}):k}return null};a.b.g("ArrayRowSet.prototype.get",{get:a.$.prototype.get});a.$.prototype.hasMore=function(){return!1};a.b.g("ArrayRowSet.prototype.hasMore",{hasMore:a.$.prototype.hasMore});a.$.prototype.indexOf=function(a,b){b=b||{};return b.deferred?this.get(a.id,null).then(function(a){return a.index}):this.get(a.id).index};a.b.g("ArrayRowSet.prototype.indexOf",
{indexOf:a.$.prototype.indexOf});a.$.prototype.isEmpty=function(){return 0===this.Kf.length};a.b.g("ArrayRowSet.prototype.isEmpty",{isEmpty:a.$.prototype.isEmpty});a.$.prototype.remove=function(a,b){b=b||{};this.mi(a,-1,b)};a.b.g("ArrayRowSet.prototype.remove",{remove:a.$.prototype.remove});a.$.prototype.reset=function(c,b){var d;b=b||{};b.previousRows=this.Ia;var e=b.silent;if(void 0===c||null==c||c instanceof Array&&0==c.length){for(d=0;d<this.Ia.length;d+=1)this.Ia[d]&&(this.Ia[d].rowSet=null);
this.Kf=[];this.Ia=[];this.Mf=0}else if(this.Ia=[],this.Kf=[],this.Mf=0,c instanceof Array)for(d=0;d<c.length;d+=1)this.add(c[d],b);else this.add(c,b);e||a.$.t.ac.call(this,a.Q.v.RESET,null)};a.b.g("ArrayRowSet.prototype.reset",{reset:a.$.prototype.reset});a.$.prototype.size=function(){return this.Kf.length};a.b.g("ArrayRowSet.prototype.size",{size:a.$.prototype.size});a.$.prototype.sort=function(){var c=this.comparator,b;this.Lv()&&(b=this,this.Ia.sort(function(d,e){return a.$.sG(d,e,c,b,b)}),this.el(0,
this.Ia),this.Kf=a.$.nv(this.Ia,this.C,this.na),this.uG=!0,a.$.t.ac.call(this,a.Q.v.SORT,null))};a.b.g("ArrayRowSet.prototype.sort",{sort:a.$.prototype.sort});a.$.prototype.totalSize=function(){return this.Mf};a.b.g("ArrayRowSet.prototype.totalSize",{totalSize:a.$.prototype.totalSize});a.$.prototype.BM=function(c,b,d){var e,g;d=d||{};var f=d.silent;c instanceof Array||(c=[c]);for(d=0;d<c.length;d++){g=c[d];g instanceof a.Ta||(g=new a.Ta(g,{idAttribute:this.rn}));this.Kf&&0!=this.Kf.length||(this.Kf=
a.$.nv(this.Ia,this.C,this.na));if(!0==this.uG&&0<this.Ia.length)for(e=0;e<this.Ia.length;e++)if(0>a.$.sG(g,this.Ia[e],this.comparator,this,this)){this.Ia.splice(e,0,g);g.index=e;break}else{if(e==this.Ia.length-1){this.Ia.push(g);g.index=e+1;break}}else void 0===b?(this.Ia.push(g),g.index=this.Ia.length-1):(this.Ia.splice(b+d,0,g),g.index=b+d);g.rowSet=this;g.index<=a.$.Xu(this.Ia,this.C,this.na)&&this.Kf.splice(g.index,0,g);this.Mf++;g.index!=this.Ia.length-1&&this.el(0,this.Ia);f||a.$.t.ac.call(this,
a.Q.v.ADD,g)}};a.$.prototype.xv=function(a){return void 0===a?[]:a.split(",")};a.$.prototype.yv=function(){return-1===this.sortDirection?"dsc":"asc"};a.$.prototype.Lv=function(){var a=this.comparator;return void 0!==a&&null!==a};a.$.prototype.el=function(a,b){for(var d,e=a;e<b.length;e++)(d=b[e])&&(d.index=e)};a.$.prototype.mi=function(c,b,d){var e,g;d=d||{};var f=d.silent;c instanceof Array||(c=[c]);for(e=0;e<c.length;e++)if(g=c[e],(0>b||!0==this.uG)&&null!=this.get(g.id)&&(b=this.get(g.id).index),
-1<b){void 0!==g&&g.hX===this&&(g.hX=null);var k=a.$.Xu(this.Ia,this.C,this.na);this.Ia.splice(b,1);b<=k&&this.Kf.splice(b,1);this.Mf--;this.el(0,this.Ia);f||(d.index=b,void 0!==g&&(f||a.$.t.ac.call(this,a.Q.v.REMOVE,g)))}return g};a.$.prototype.Vw=function(){a.$.t.ac.call(this,a.Q.v.REQUEST,null)};a.$.prototype.If=function(c,b){c=c||{};var d=c.success,e=c.error;null!=b?(a.$.t.ac.call(this,a.Q.v.ERROR,b),e&&e.call(this,c,b)):(a.$.t.ac.call(this,a.Q.v.SYNC,c),d&&d.call(this,c))};a.$.gh=function(a,
b,d){if(-1===d){if(a<b)return 1;if(b<a)return-1}else{if(a>b)return 1;if(b>a)return-1}return 0};a.$.Xu=function(a,b,d){var e=a.length-1;0<d&&(e=b+d-1,e=e>a.length-1?a.length-1:e);return e};a.$.en=function(c,b){return c instanceof a.bb?c.get(b):f.isFunction(c[b])?c[b]():c[b]};a.$.nv=function(c,b,d){b=a.$.Xu(c,b,d);d=[];var e,g;for(e=0;e<=b;e++)g=c[e],g.index=e,d[e]=g;return d};a.$.rv=function(c,b,d){var e=c.length-1,g=[],f,k;for(f=0;f<=e;f++){var l={},m=null,m=c[f]instanceof a.bb?c[f].pairs():c[f];
for(k in m)m.hasOwnProperty(k)&&(l[k]=m[k]);l=new a.Ta(l,{idAttribute:b});l.index=f;g[f]=l;l.rowSet=d}return g};a.$.sG=function(c,b,d,e,g){var h;if(f.isFunction(d)){if(1===d.length){h=d.call(g,c);g=d.call(g,b);c=a.fb.pd(h)?h.split(","):[h];b=a.fb.pd(g)?g.split(","):[g];for(d=0;d<c.length;d++)if(h=a.$.gh(c[d],b[d],e.sortDirection),0!==h)return h;return 0}return d.call(g,c,b)}if(a.fb.pd(d)){var k=d.split(",");for(d=0;d<k.length;d++)if(h=a.$.en(c,k[d]),g=a.$.en(b,k[d]),h=a.$.gh(h,g,e.sortDirection),
0!==h)return h}return 0};a.Xc=function(a,b){this.OW=a;this.vc=b};o_("EmptyNodeSet",a.Xc,a);a.Xc.prototype.getParent=function(){return this.OW};a.b.g("EmptyNodeSet.prototype.getParent",{getParent:a.Xc.prototype.getParent});a.Xc.prototype.Ka=function(){return this.vc};a.b.g("EmptyNodeSet.prototype.getStart",{Ka:a.Xc.prototype.Ka});a.Xc.prototype.Z=function(){return 0};a.b.g("EmptyNodeSet.prototype.getCount",{Z:a.Xc.prototype.Z});a.Xc.prototype.getData=function(){return null};a.b.g("EmptyNodeSet.prototype.getData",
{getData:a.Xc.prototype.getData});a.Xc.prototype.getMetadata=function(){return null};a.b.g("EmptyNodeSet.prototype.getMetadata",{getMetadata:a.Xc.prototype.getMetadata});a.ge=function(a,b,d){this.Ni=a;this.ky=b;this.jy=this.aP(d)};o_("MergedNodeSet",a.ge,a);a.ge.prototype.aP=function(a){var b,d,e;b=this.Ni.Ka();for(d=b+this.Ni.Z();b<d;b++)if(e=this.Ni.getMetadata(b).key,a===e)return b;return d-1};a.ge.prototype.getParent=function(){return this.Ni.getParent()};a.b.g("MergedNodeSet.prototype.getParent",
{getParent:a.ge.prototype.getParent});a.ge.prototype.Ka=function(){return this.Ni.Ka()};a.b.g("MergedNodeSet.prototype.getStart",{Ka:a.ge.prototype.Ka});a.ge.prototype.Z=function(){return this.Ni.Z()+this.ky.Z()};a.b.g("MergedNodeSet.prototype.getCount",{Z:a.ge.prototype.Z});a.ge.prototype.getData=function(a){a=this.WC(a);return a.set.getData(a.index)};a.b.g("MergedNodeSet.prototype.getData",{getData:a.ge.prototype.getData});a.ge.prototype.getMetadata=function(a){a=this.WC(a);return a.set.getMetadata(a.index)};
a.b.g("MergedNodeSet.prototype.getMetadata",{getMetadata:a.ge.prototype.getMetadata});a.ge.prototype.WC=function(a){if(a<=this.jy)return{set:this.Ni,index:a};var b=this.ky.Z();return a>this.jy+b?{set:this.Ni,index:a-b}:{set:this.ky,index:a-(this.jy+1)}};a.ad=function(a,b,d){this.kb=a;this.Pf=b;this.Ll=d};o_("NodeSetWrapper",a.ad,a);a.ad.prototype.getParent=function(){return this.kb.getParent()};a.b.g("NodeSetWrapper.prototype.getParent",{getParent:a.ad.prototype.getParent});a.ad.prototype.Ka=function(){return null!=
this.Ll?this.Ll.start:this.kb.Ka()};a.b.g("NodeSetWrapper.prototype.getStart",{Ka:a.ad.prototype.Ka});a.ad.prototype.Z=function(){var a,b;a=this.kb.Ka();b=this.kb.Z();null!=this.Ll&&(this.Ll.start>a?b=Math.min(0,b-(this.Ll.start-a)):this.Ll.start<a&&(b=0));return b};a.b.g("NodeSetWrapper.prototype.getCount",{Z:a.ad.prototype.Z});a.ad.prototype.getData=function(a){return this.kb.getData(a)};a.b.g("NodeSetWrapper.prototype.getData",{getData:a.ad.prototype.getData});a.ad.prototype.getMetadata=function(a){var b;
b=this.kb.getMetadata(a);b.index=a;b.parentKey=this.getParent();this.Pf.call(null,b.key,b);return b};a.b.g("NodeSetWrapper.prototype.getMetadata",{getMetadata:a.ad.prototype.getMetadata});a.ad.prototype.Hd=function(c){return this.kb.Hd&&(c=this.kb.Hd(c),null!=c)?new a.ad(c,this.Pf):null};a.b.g("NodeSetWrapper.prototype.getChildNodeSet",{Hd:a.ad.prototype.Hd});a.$c=function(c,b,d,e){a.i.fc(c,null);a.i.fc(b,null);this.NW=e;this.Oi=c;this.xs=b;this.Jd=d};o_("JsonNodeSet",a.$c,a);a.$c.prototype.getParent=
function(){return this.NW};a.b.g("JsonNodeSet.prototype.getParent",{getParent:a.$c.prototype.getParent});a.$c.prototype.Ka=function(){return this.Oi};a.b.g("JsonNodeSet.prototype.getStart",{Ka:a.$c.prototype.Ka});a.$c.prototype.Z=function(){return Math.max(0,this.xs-this.Oi)};a.b.g("JsonNodeSet.prototype.getCount",{Z:a.$c.prototype.Z});a.$c.prototype.getData=function(c){a.i.assert(c<=this.xs&&c>=this.Oi);c-=this.Oi;return this.Jd[c]?this.Jd[c].attr:null};a.b.g("JsonNodeSet.prototype.getData",{getData:a.$c.prototype.getData});
a.$c.prototype.getMetadata=function(c){var b=[];a.i.assert(c<=this.xs&&c>=this.Oi);c-=this.Oi;b.key=this.Jd[c].id?this.Jd[c].id:this.Jd[c].attr.id;b.leaf=this.Jd[c].hy;b.depth=this.Jd[c].depth;null==b.leaf&&(b.leaf=this.Jd[c].children&&0<this.Jd[c].children.length?!1:!0);return b};a.b.g("JsonNodeSet.prototype.getMetadata",{getMetadata:a.$c.prototype.getMetadata});a.$c.prototype.zh=function(a,b){var d;b++;a.depth=b;if(a.children&&0!=a.children.length)for(d=0;d<a.children.length;d++)this.zh(a.children[d],
b)};a.$c.prototype.Hd=function(c){var b,d,e;a.i.assert(c<=this.xs&&c>=this.Oi);c-=this.Oi;d=this.Jd[c].depth;b=this.Jd[c].children;if(0==b.length)return null;c=this.Jd[c].id?this.Jd[c].id:this.Jd[c].attr.id;for(e=0;e<b.length;e++)this.zh(b[e],d);return new a.$c(0,b.length,b,c)};a.b.g("JsonNodeSet.prototype.getChildNodeSet",{Hd:a.$c.prototype.Hd});a.Yc=function(a,b){this.kb=a;this.vc=b};o_("FlattenedNodeSet",a.Yc,a);a.Yc.prototype.getParent=function(){return this.kb.getParent()};a.b.g("FlattenedNodeSet.prototype.getParent",
{getParent:a.Yc.prototype.getParent});a.Yc.prototype.Ka=function(){return void 0!=this.vc?this.vc:this.kb.Ka()};a.b.g("FlattenedNodeSet.prototype.getStart",{Ka:a.Yc.prototype.Ka});a.Yc.prototype.Z=function(){void 0===this.ws&&(this.ws=this.CC(this.kb,0),void 0!=this.vc&&(this.ws-=this.vc));return this.ws};a.b.g("FlattenedNodeSet.prototype.getCount",{Z:a.Yc.prototype.Z});a.Yc.prototype.CC=function(a,b){var d,e,g,f;d=a.Ka();e=a.Z();b+=e;if(a.Hd)for(g=0;g<e;g++)f=a.Hd(g+d),null!=f&&(b=this.CC(f,b));
return b};a.Yc.prototype.getData=function(a){return this.Uu(this.kb,a,{index:this.kb.Ka()},this.za)};a.b.g("FlattenedNodeSet.prototype.getData",{getData:a.Yc.prototype.getData});a.Yc.prototype.getMetadata=function(a){return this.Uu(this.kb,a,{index:this.kb.Ka()},this.MP)};a.b.g("FlattenedNodeSet.prototype.getMetadata",{getMetadata:a.Yc.prototype.getMetadata});a.Yc.prototype.MP=function(a,b){return a.getMetadata(b)};a.Yc.prototype.za=function(a,b){return a.getData(b)};a.Yc.prototype.Uu=function(a,
b,d,e){var g,f,k,l;g=a.Ka();f=a.Z();for(k=0;k<f;k++){l=d.index;if(l===b)return e.call(this,a,k+g);d.index=l+1;if(a.Hd&&(l=a.Hd(k+g),null!=l&&(l=this.Uu(l,b,d,e),null!=l)))return l}return null};a.Eb=function(c){a.Eb.t.constructor.call(this,c)};o_("DataGridDataSource",a.Eb,a);a.b.sa(a.Eb,a.Nc,"oj.DataGridDataSource");a.Eb.prototype.Z=function(){return 0};a.b.g("DataGridDataSource.prototype.getCount",{Z:a.Eb.prototype.Z});a.Eb.prototype.pf=function(){return"exact"};a.b.g("DataGridDataSource.prototype.getCountPrecision",
{pf:a.Eb.prototype.pf});a.Eb.prototype.Xd=function(){a.i.fa()};a.b.g("DataGridDataSource.prototype.fetchHeaders",{Xd:a.Eb.prototype.Xd});a.Eb.prototype.Vd=function(){a.i.fa()};a.b.g("DataGridDataSource.prototype.fetchCells",{Vd:a.Eb.prototype.Vd});a.Eb.prototype.keys=function(){a.i.fa();return null};a.b.g("DataGridDataSource.prototype.keys",{keys:a.Eb.prototype.keys});a.Eb.prototype.$d=function(){a.i.fa();return null};a.b.g("DataGridDataSource.prototype.indexes",{$d:a.Eb.prototype.$d});a.Eb.prototype.sort=
function(){a.i.fa()};a.b.g("DataGridDataSource.prototype.sort",{sort:a.Eb.prototype.sort});a.Eb.prototype.move=function(){a.i.fa()};a.b.g("DataGridDataSource.prototype.move",{move:a.Eb.prototype.move});a.Eb.prototype.Pi=function(){return"valid"};a.b.g("DataGridDataSource.prototype.moveOK",{Pi:a.Eb.prototype.Pi});a.Eb.prototype.getCapability=function(){return null};a.b.g("DataGridDataSource.prototype.getCapability",{getCapability:a.Eb.prototype.getCapability})});
//# sourceMappingURL=oj-modular.map