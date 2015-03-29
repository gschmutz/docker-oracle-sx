var _THAI_BUDDHA=2;
var _ENGLISH_HIJRAH=3;
var _ARABIC_HIJRAH=4;
function _dfsv(
a0,
a1,
a2
)
{
if((a0==(void 0))||(a1==(void 0)))
return;
var a3=_getTimePortionInLocaleContextTimeZone();
midnightGmtInMillis=a1+a2*60*1000;
var a4=new Date(midnightGmtInMillis+a3);
var a5;
if(typeof(_cal)!="undefined")
{
var a6=new Date(a4.getUTCFullYear(),a4.getUTCMonth(),
a4.getUTCDate(),a4.getUTCHours(),a4.getUTCMinutes(),
a4.getUTCSeconds(),a4.getUTCMilliseconds());
if(_cal==_THAI_BUDDHA)
{
a5=new BuddhistDate(a6.getTime());
}
else
{
a5=new HijrahDate(a6.getTime());
}
}
else
{
a5=new Date(a4.getUTCFullYear(),a4.getUTCMonth(),
a4.getUTCDate(),a4.getUTCHours(),a4.getUTCMinutes(),
a4.getUTCSeconds(),a4.getUTCMilliseconds());
}
var a7=_getDateFieldFormat(a0);
var a8=a0.value;
var a1=a7.format(a5);
if(a0.value!=a1)
{
if(a0.onchange!=(void 0))
{
if(_agent.isIE)
{
a0.onpropertychange=function()
{
var a9=window.event;
if(a9.propertyName=='value')
{
a0.onpropertychange=function(){};
a0.onchange(a9);
}
}
a0.value=a1;
}
else
{
a0.value=a1;
var a9=new Object();
a9.type='change';
a9.target=a0;
a0.onchange(a9);
}
}
else
{
a0.value=a1;
}
}
a0.select();
a0.focus();
}
function _returnCalendarValue(
a0,
a1
)
{
var a2=a0.returnValue;
var a3=a0.gmtOffsetInMinutes;
if(a2!=(void 0))
{
var a4=a0._dateField;
if(a4==(void 0))
{
a4=_savedField1879034;
}
_dfsv(a4,a2,a3);
}
}
function _ldp(
a0,
a1,
a2,
a3,
a4
)
{
var a5=document.forms[a0][a1];
var a6=_dfgv(a5);
if(!a6)
{
a6=new Date();
}
if(!a4)
{
a4=_jspDir+_getQuerySeparator(_jspDir);
if((typeof(_cal)!="undefined")
&&((_cal==_ENGLISH_HIJRAH)||(_cal==_ARABIC_HIJRAH)))
{
a4+="_t=fred&_red=hcd";
}
else
{
a4+="_t=fred&_red=cd";
}
}
else
{
var a7=a4.lastIndexOf('?');
var a8="";
if(a7==-1)
{
a7=a4.length;
}
else
{
a8=a4.substr(a7+1);
}
var a9=a4.lastIndexOf('/',a7);
var a10=a4.substring(0,a9+1);
a10+=_jspDir+_getQuerySeparator(_jspDir);
a10+=a8;
a10+=_getQuerySeparator(a10);
a10+="_t=fred";
var a11=a4.substring(a9+1,a7);
a4=a10;
a4+="&redirect="+escape(a11);
}
a4+="&value="+(a6.getTime()-_getLocaleTimeZoneDifference());
if(_configName.length>0)
{
a4+="&configName="+escape(_configName);
}
a4+="&loc="+_locale;
if(window["_enc"])
{
a4+="&enc="+_enc;
}
if(window["_contextURI"])
{
a4+="&contextURI="+escape(_contextURI);
}
var a12=-1*a6.getTimezoneOffset();
a4+="&tzOffset="+a12;
if(typeof(_cal)!="undefined")
{
a4+="&calType="+_cal;
}
if(_uixLocaleTZId)
{
a4+="&tzId="+encodeURIComponent(_uixLocaleTZId);
}
if(a2!=(void 0))
{
a4+="&minValue="+a2;
}
if(a3!=(void 0))
{
a4+="&maxValue="+a3;
}
a4+="&_minWidth=350&_minHeight=300";
if(typeof(_firstDOW)!="undefined")
{
a4+="&firstDOW="+_firstDOW;
}
var a13=openWindow(self,
a4,
'uix_2807778',
{width:350,height:300},
true,
void 0,
_returnCalendarValue);
a13._dateField=a5;
_savedField1879034=a5;
}
function _dfgv(a0)
{
if(a0.value!="")
return _getDateFieldFormat(a0).parse(a0.value);
return null;
}
function _getTimePortion(a0)
{
var a1=_dfgv(a0);
if(!a1)
{
if(typeof(_cal)!="undefined")
{
if(_cal==_THAI_BUDDHA)
{
a1=new BuddhistDate();
}
else if((_cal==_ENGLISH_HIJRAH)||(_cal==_ARABIC_HIJRAH))
{
a1=new HijrahDate();
}
}
else
{
a1=new Date();
}
}
var a2;
if((typeof(_cal)!="undefined")&&(_cal==_THAI_BUDDHA))
{
a2=new BuddhistDate(a1.getFullYear(),
a1.getMonth(),
a1.getDate());
}
else if((typeof(_cal)!="undefined")
&&((_cal==_ENGLISH_HIJRAH)||(_cal==_ARABIC_HIJRAH)))
{
a2=new HijrahDate(a1.getFullYear(),
a1.getMonth(),
a1.getDate());
}
else
{
a2=new Date(a1.getFullYear(),
a1.getMonth(),
a1.getDate());
}
return a1-a2;
}
function _getTimePortionInLocaleContextTimeZone()
{
var a0=new Date();
var a1=a0.getUTCHours();
var a2=a0.getUTCMinutes();
var a3=60*a1+a2;
var a4=-1*a0.getTimezoneOffset();
if(_uixLocaleTZ)
{
a4=_uixLocaleTZ;
}
var a5=a3+a4;
if(a5>24*60)
{
a5-=24*60;
}
else if(a5<0)
{
a5+=24*60;
}
var a6=a5*60+a0.getUTCSeconds();
var a7=a6*1000+a0.getUTCMilliseconds();
return a7;
}
function _getLocaleTimeZoneDifference()
{
var a0=new Date();
var a1=a0.getTimezoneOffset()*-1;
var a2=0;
if(_uixLocaleTZ)
a2=(_uixLocaleTZ-a1)*60*1000;
return a2;
}
function _dfb(a0,a1,a2)
{
if(a1)
_fixDFF(a0);
}
function _dff(a0,a1)
{
_dfa(a0,a1);
}
function _dfa(a0,a1)
{
if(a1!=(void 0))
{
if(window._calActiveDateFields===(void 0))
window._calActiveDateFields=new Object();
if(typeof(a0)=="string")
{
a0=_getElementById(document,a0);
}
window._calActiveDateFields[a1]=a0;
}
}
function _calsd(a0,a1,a2)
{
if(window._calActiveDateFields!=(void 0))
{
var a3=window._calActiveDateFields[a0];
if(a3)
_dfsv(a3,a1,a2);
}
return false;
}
function _updateCal(a0,a1,a2)
{
a1+=('&scrolledValue='+a0.options[a0.selectedIndex].value);
if(a2)
_firePartialChange(a1);
else
document.location.href=a1;
}
function _changeView(a0,a1)
{
a1+=('&view='+a0.options[a0.selectedIndex].value);
document.location.href=a1;
}
function _doCancel()
{
top.returnValue=(void 0);
_focusMainWindow();
top.close();
return false;
}
function _selectDate(a0,a1)
{
top.returnValue=a0;
top.gmtOffsetInMinutes=a1;
top._unloadUIXDialog(window.event);
_focusMainWindow();
top.close();return false;
}
var _savedField1879034;
