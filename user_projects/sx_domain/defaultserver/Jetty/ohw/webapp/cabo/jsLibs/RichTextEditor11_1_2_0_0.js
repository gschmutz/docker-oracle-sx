function RichTextEditorProxy(a0,a1,a2,a3,a4)
{
this.formName=a0;
this.iframeBeanId=a1+"_IFRAME";
this.dataBeanId=a1;
this.isText=(a2=="T");
this.maxLength=a3;
this.browserFlag=a4;
this.isIE=(this.browserFlag=="IE_Win");
this.isGecko=(this.browserFlag=="Gecko");
this.isWebkit=(this.browserFlag=="Webkit");
this.maxLengthAlertMsgStr="";
this.textLoaded=false;
this.removeUnwantedBrowserTags=false;
var a5=RichTextEditorProxy.prototype.familyOfRTEs;
var a6=a5.toString();
if(a6.indexOf(''+this)==-1)
{
RichTextEditorProxy.prototype.familyOfRTEs
=RichTextEditorProxy.prototype.familyOfRTEs.concat(this);
}
}
RichTextEditorProxy.blockElements=_getBlockElements();
RichTextEditorProxy.prototype.setRemoveUnwantedBrowserTags=_setRemoveUnwantedBrowserTags;
RichTextEditorProxy.prototype.onMouseOver=_onMouseOver;
RichTextEditorProxy.prototype.onMouseOut=_onMouseOut;
RichTextEditorProxy.prototype.onMouseDown=_onMouseDown;
RichTextEditorProxy.prototype.onMouseUp=_onMouseUp;
RichTextEditorProxy.prototype.createHyperlink=_createHyperlink;
RichTextEditorProxy.prototype.execHTMLCommand=_execHTMLCommand;
RichTextEditorProxy.prototype.getField=_getField;
RichTextEditorProxy.prototype.setFontBarDropdown=_setFontBarDropdown;
RichTextEditorProxy.prototype.insertHTMLTag=_insertHTMLTag;
RichTextEditorProxy.prototype.setContentOnBlur=_setContentOnBlur;
RichTextEditorProxy.prototype.insertText=_insertText;
RichTextEditorProxy.prototype.insertImageTag=_insertImageTag;
RichTextEditorProxy.prototype.setValue=_setValue;
RichTextEditorProxy.prototype.setHref=_setHref;
RichTextEditorProxy.prototype.viewHtmlSource=_viewHtmlSource;
RichTextEditorProxy.prototype.disableFontDropDowns=_disableFontDropDowns;
RichTextEditorProxy.prototype.checkRTEDataLength=_checkRTEDataLength;
RichTextEditorProxy.prototype.validateContent=_validateContent;
RichTextEditorProxy.prototype.setMaxLengthAlert=_setMaxLengthAlert;
RichTextEditorProxy.prototype.getMaxLengthAlert=_getMaxLengthAlert;
RichTextEditorProxy.prototype.getContentWindow=_getContentWindow;
RichTextEditorProxy.prototype.familyOfRTEs=new Array();
RichTextEditorProxy.prototype.storeState=_storeState;
RichTextEditorProxy.prototype.toString=_toString;
RichTextEditorProxy.prototype.getData=_getData
function _storeState()
{
var a0=document.getElementById(this.iframeBeanId);
var a1=document.getElementById(this.dataBeanId);
a1.value=this.getData(a0.contentWindow);
}
function _toString()
{
return this.dataBeanId;
}
function storeIFrames()
{
var a0=RichTextEditorProxy.prototype.familyOfRTEs;
for(var a1 in a0){
var a2=a0[a1];
if(!a2.isText)
a2.storeState();
}
}
function _onMouseOver()
{
if(window.getSelection){
this.style.border="outset 2px";
}
else if(document.selection)
{
var a0=window.event;
var a1=getReal(a0.toElement,"className",this.className);
var a2=getReal(a0.fromElement,"className",this.className);
if(a1==a2)return;
var a3=a1;
var a4=a3.getAttribute("cDisabled");
a4=(a4!=null);
if(a3.className==this.className)
a3.onselectstart=new Function("return false");
if((a3.className==this.className)&&!a4)
{
makeRaised(a3);
}
}
}
function _onMouseOut()
{
if(window.getSelection)
{
this.style.border="solid 2px #C0C0C0";
}
else if(document.selection)
{
var a0=window.event;
var a1=getReal(a0.toElement,"className",this.className);
var a2=getReal(a0.fromElement,"className",this.className);
if(a1==a2)
return;
var a3=a2;
var a4=a3.getAttribute("PressedEx");
var a5=a3.getAttribute("cDisabled");
a5=(a5!=null);
var a6=a3.getAttribute("cToggle");
toggle_disabled=(a6!=null);
if(a6&&a3.value||a4==true)
{
makePressed(a3);
}
else if((a3.className==this.className)&&!a5)
{
makeFlat(a3);
}
}
}
function _onMouseDown(a0)
{
if(window.getSelection)
{
if(this.firstChild["style"])
{
this.firstChild.style.left=2;
this.firstChild.style.top=2;
}
this.style.border="inset 2px";
a0.preventDefault();
}
else if(document.selection)
{
el=getReal(window.event.srcElement,"className",this.className);
var a1=el.getAttribute("cDisabled");
a1=(a1!=null);
if((el.className==this.className)&&!a1)
{
makePressed(el);
}
}
}
function _onMouseUp()
{
if(window.getSelection)
{
if(this.firstChild["style"])
{
this.firstChild.style.left=1;
this.firstChild.style.top=1;
}
this.style.border="outset 2px";
}
else if(document.selection)
{
el=getReal(window.event.srcElement,"className",this.className);
var a0=el.getAttribute("cDisabled");
a0=(a0!=null);
if((el.className==this.className)&&!a0)
{
makeRaised(el);
}
}
}
function getReal(el,type,value)
{
temp=el;
while((temp!=null)&&(temp.tagName!="BODY"))
{
if(eval("temp."+type)==value)
{
el=temp;
return el;
}
temp=temp.parentElement;
}
return el;
}
function makeFlat(a0)
{
with(a0.style)
{
background="";
border="0px solid";
padding="2px";
}
}
function makeRaised(a0)
{
with(a0.style)
{
borderLeft="1px solid #ffffff";
borderRight="1px solid #555533";
borderTop="1px solid #ffffff";
borderBottom="1px solid #555533";
padding="1px";
}
}
function makePressed(a0)
{
with(a0.style)
{
borderLeft="1px solid #555533";
borderRight="1px solid #ffffff";
borderTop="1px solid #555533";
borderBottom="1px solid #ffffff";
paddingTop="2px";
paddingLeft="2px";
paddingBottom="0px";
paddingRight="0px";
}
}
function _createHyperlink(a0)
{
if(this.isText)
return;
var a1=this.getContentWindow(document);
if(this.isGecko||this.isWebkit)
{
var a2=a1.getSelection();
var a3=a2.getRangeAt(0);
var a4=a3.commonAncestorContainer;
var a5=getFirstAncestor("A",a4);
var a6=prompt(a0,a5?a5.href:"http://");
if((a6!=null)&&(a6!="")&&a6!="http://")
{
a1.document.execCommand("CreateLink",false,a6);
}
}
else
{
a1.focus();
var a7=a1.document.selection;
var a8=a7.type;
var a4;
if(a8=="Control")
{
a4=a7.createRange().item(0);
}
else
{
a4=a7.createRange().parentElement();
}
var a5=getNode("A",a4);
var a6=prompt(a0,a5?a5.href:"http://");
if(a6&&a6!="http://")
{
if(a8=="None")
{
var a3=a7.createRange();
a3.pasteHTML('<A HREF="'+a6+'"></A>');
a3.select();
}
else
{
this.execHTMLCommand("CreateLink",a6);
}
}
}
}
function getNode(a0,a1)
{
while(a1&&a1.tagName!=a0)
{
a1=a1.parentElement;
}
return a1;
}
function getFirstAncestor(a0,a1)
{
while(a1&&a1.tagName!=a0)
{
a1=a1.parentNode;
}
return a1;
}
function _execHTMLCommand(a0)
{
if(this.isText)
return;
var a1=this.getContentWindow(document);
var a2=a1.document;
if(this.isGecko)
{
a2.execCommand('useCSS',false,true);
}
a1.focus();
a2.execCommand(a0,false,arguments[1]);
a1.focus();
}
function _setFontBarDropdown(a0,a1)
{
var a2=this.getField(a0);
this.execHTMLCommand(a1,a2.options[a2.selectedIndex].value);
}
function _insertHTMLTag(a0)
{
if(this.isText)
return;
var a1=this.getContentWindow(document);
if(this.isIE)
{
a1.focus();
var a2=a1.document.selection.createRange();
a2.pasteHTML(a0);
a2.select();
a1.focus();
}
else if(this.isGecko||this.isWebkit)
{
a1.focus();
var a3=a1.getSelection();
var a2=a3.getRangeAt(0);
a2.deleteContents();
var a4=a1.document.createElement('span');
a4.innerHTML=a0;
if(a2.startContainer instanceof HTMLHtmlElement)
{
a1.document.body.appendChild(a4);
a1.document.body.insertBefore(a4.firstChild,a4);
a1.document.body.removeChild(a4);
}
else
{
a2.insertNode(a4);
var a5=a4.parentNode;
a5.insertBefore(a4.firstChild,a4);
a5.removeChild(a4);
}
}
}
function _insertText(a0)
{
if(!this.isText)
{
if(this.isIE)
{
var a1=this.getContentWindow(document);
a1.focus();
var a2=a1.document.selection.createRange();
a2.text=a0;
a2.select();
a1.focus();
}
else if(this.isGecko||this.isWebkit)
{
var a1=this.getContentWindow(document);
var a3=a1.getSelection();
var a2=a3.getRangeAt(0);
a2.deleteContents();
a3.removeAllRanges();
var a4=a2.startContainer;
var a5=a2.startOffset;
a2=document.createRange();
if(a4 instanceof Text)
{
a4.insertData(a5,a0);
a2.setEnd(a4,a5+a0.length);
a2.setStart(a4,a5+a0.length);
}
else
{
var a6=a4.ownerDocument;
if(a4.childNodes.length==1)
{
a6.open();
a6.write(a0);
a6.close();
return;
}
var a7=a6.createTextNode(a0);
a4.replaceChild(a7,a4.lastChild);
a2.setStart(a7,(a0.length));
a2.setEnd(a7,(a0.length));
}
a3.addRange(a2);
}
else
{
var a8=this.getField(this.dataBeanId);
a8.value=a8.value+" "+a0;
}
}
else
{
var a8=this.getField(this.dataBeanId);
a8.value=a8.value+" "+a0;
}
}
function _getField(p_strObjName)
{
var obj=eval("document.forms[this.formName].elements['"+p_strObjName+"']");
return obj;
}
function _validateContent()
{
this.setContentOnBlur();
return this.checkRTEDataLength();
}
function _setContentOnBlur()
{
var a0=document.forms[this.formName].elements;
for(i=0;i<a0.length;i++)
{
var a1=a0[i].name;
if(a1==this.dataBeanId)
{
var a2=a0[i];
var a3=this.getContentWindow(document);
if(a3!=undefined&&this.textLoaded)
{
a2.value=this.getData(a3);
}
}
}
return true;
}
function _insertImageTag(a0)
{
if(this.isText)
return;
var a1=this.getContentWindow(document);
var a2=a1.document;
if(this.isIE)
{
a1.focus();
var a3=a2.selection;
var a4=a3.createRange().parentElement();
var a5=getNode("IMG",a4);
if(a0&&a0!="http://")
{
if(a3.type=="None")
{
var a6=a3.createRange();
a6.pasteHTML('<IMG SRC="'+a0+'">');
a6.select();
}
else
{
this.execHTMLCommand("insertImage",a0);
}
}
}
else if(this.isGecko||this.isWebkit)
{
if((a0!=null)
&&(a0!="")
&&a0!="http://")
{
a2.execCommand('InsertImage',false,a0);
}
}
}
function _setValue(a0)
{
if(this.isGecko||this.isWebkit||this.isIE)
{
_setData(this.getContentWindow(document),a0)
}
else
{
var a1=this.getField(this.dataBeanId);
a1.value=a0;
}
}
function _setHref(a0)
{
if(this.isText)
return;
var a1=this.getContentWindow(document);
if(this.isIE)
{
a1.focus();
var a2=a1.document.selection;
if(a2.type=="None")
{
var a3=a2.createRange();
a3.pasteHTML('<A HREF="'+a0+'"></A>');
a3.select();
}
else
{
this.execHTMLCommand("CreateLink",a0);
}
}
else if(this.isGecko||this.isWebkit)
{
a1.document.execCommand("CreateLink",false,a0);
}
}
function _viewHtmlSource(a0)
{
var a1=this.getContentWindow(document);
var a2=a1.document.body;
this.disableFontDropDowns(a0);
this.isText=a0;
if(a0)
{
if(this.isIE)
{
var a3=a1.document.URL;
var a4=a3.split('&');
a3=a4.join('&amp;');
a2.innerText=a2.innerHTML.replace(a3,'');
}
else
{
var a5=a2.innerHTML;
var a6=a5.length;
var a7=a5.toLowerCase();
var a8=a7.substring(0,6);
if((a8.indexOf("<br>\r\n")!=-1)&&(a6==6))
{
a2.innerHTML="";
}
else
{
var a9=document.createTextNode(a5);
a2.innerHTML="";
a2.appendChild(a9);
}
}
}
else
{
if(this.isIE)
{
var a10=a2.innerText;
a2.innerHTML="";
a1.document.write('<body>'+a10);
}
else
{
var a9=a2.ownerDocument.createRange();
a9.selectNodeContents(a2);
a2.innerHTML=a9.toString();
}
}
a1.focus();
}
function _disableFontDropDowns(a0)
{
var a1=this.dataBeanId;
var a2=this.getField(a1+'fontFamily');
if(a2!=null)
a2.disabled=a0;
var a3=this.getField(a1+'fontColor');
if(a3!=null)
a3.disabled=a0;
var a4=this.getField(a1+'fontWeight');
if(a4!=null)
a4.disabled=a0;
var a5=document.getElementById(this.dataBeanId+'uixButtonBar');
if(a5)
{
if(a0)
a5.style.visibility="hidden";
else
a5.style.visibility="visible";
}
}
function _checkRTEDataLength()
{
if(this.maxLength==-1)
return true;
data=this.getData(this.getContentWindow(document));
if(this.isIE&&data=="<P>&nbsp;</P>")
{
return true;
}
else if(this.isIE==false&&data=="<br>")
{
return true;
}
if(data.length>this.maxLength)
{
return false;
}
return true;
}
function _setMaxLengthAlert(a0)
{
this.maxLengthAlertMsgStr=a0;
}
function _getMaxLengthAlert()
{
return this.maxLengthAlertMsgStr;
}
function _getContentWindow(a0)
{
return a0.getElementById(this.iframeBeanId).contentWindow;
}
function _setData(a0,a1)
{
var a2=a0.document.body;
a0.focus();
if(this.isText)
a2.innerText=a1;
else
a2.innerHTML=a1;
a0.focus();
}
function _setRemoveUnwantedBrowserTags(a0)
{
this.removeUnwantedBrowserTags=a0;
}
function _getBlockElements()
{
var a0='h1,h2,h3,h4,h5,h6,hr,p,div,address,pre,form,table,tbody,thead,tfoot,'+
'th,tr,td,li,ol,ul,caption,blockquote,center,dl,dt,dd,dir,fieldset,'+
'noscript,menu,isindex,samp,header,footer,article,section,hgroup,body';
var a1=a0.split(",");
var a2={};
var a3=a1.length;
while(a3--)
a2[a1[a3].toUpperCase()]=1;
return a2;
}
function _removeUnwantedBRs(a0)
{
var a1=a0.getElementsByTagName("BR");
var a2=a1.length,unwantedbrs=[],node,parentNode,prevNode,prevNodeName;
for(var a3=0;a3<a2;a3++)
{
node=a1[a3];
if(node)
parentNode=node.parentNode;
if(parentNode&&RichTextEditorProxy.blockElements[parentNode.tagName]&&node===parentNode.lastChild)
{
prevNode=node.prev;
while(prevNode)
{
prevNodeName=prevNode.name;
if(prevNodeName!=="br")
break;
if(prevNodeName==='br')
{
node=null;
break;
}
prevNode=prevNode.prev;
}
if(node)
unwantedbrs.push(node);
}
}
while(unwantedbrs.length>0)
{
node=unwantedbrs.pop();
if(node)
parentNode=node.parentNode;
if(parentNode)
parentNode.removeChild(node);
}
}
function _getData(a0)
{
var a1=a0.document.body;
if(this.isText)
{
if((a1.innerText!="")&&(a1.innerText!=(void 0)))
{
return a1.innerText;
}
}
if(this.isIE)
{
var a2=a0.document.URL;
var a3=a2.split('&');
a2=a3.join('&amp;');
return a1.innerHTML.replace(a2,'');
}
else
{
var a4=a1.innerHTML;
var a5=a4.length;
var a6=a4.toLowerCase();
var a7=a6.substring(0,6);
if((a7.indexOf("<br>\r\n")!=-1)&&(a5==6))
{
a1.innerHTML="";
}
else if(this.removeUnwantedBrowserTags&&(this.isGecko||this.isWebkit))
{
_removeUnwantedBRs(a1);
}
return a1.innerHTML;
}
}
function _rte_isEmpty(a0)
{
var a1=""+a0;
if(_agent.isIE&&a1=="<P>&nbsp;</P>")
{
return true;
}
else if(_agent.isIE==false&&a1=="<br>")
{
return true;
}
var a2=0;
while(a2<a1.length)
{
if(a1.charAt(a2)!=' '&&a1.charAt(a2)!='\u3000')
return false;
a2++;
}
return true;
}
