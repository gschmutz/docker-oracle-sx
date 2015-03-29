function _decimalFormat(
a0
)
{
return""+a0;
}
function _parseGroupSeparator(a0,a1,a2)
{
var a3=0;
var a4=3;
var a5=a0.length;
var a6=false;
var a7=false;
for(var a8=a0.length;a8>=0;a8--)
{
if(a0.charAt(a8)==a1)
{
a6=true;
}
if(a0.charAt(a8)==a2)
{
a7=true;
a5=a8-1;
break;
}
}
if(a7&&a6)
{
return false;
}
else if(!a7&&!a6)
{
return true;
}
if(a5>=a0.length)
a5=a5-1;
for(var a9=a5;a9>=0;a9--)
{
if(a0.charAt(a9)==a1)
{
if(a3!=a4)
{
return false;
}
else
{
a3=0;
}
}
else
{
a3++;
}
}
return true;
}
function _decimalParse(
a0
)
{
if(!a0)
return(void 0);
var a1=getLocaleSymbols();
if(a1)
{
var a2=a1.getGroupingSeparator();
var a3=a1.getDecimalSeparator();
if((a0.indexOf(a2)==0)||
(a0.lastIndexOf(a2)==(a0.length-1)))
return(void 0);
if(!_parseGroupSeparator(a0,a2,a3))
return(void 0);
var a4=new RegExp("\\"+a2,"g");
a0=a0.replace(a4,"");
var a5=new RegExp("\\"+a3,"g");
a0=a0.replace(a5,".");
}
var a6=a0.length-1;
while(a6>=0)
{
if(a0.charAt(a6)!=' ')
break;
a6--;
}
if(a6>=0)
{
if((a0.indexOf('e')<0)&&
(a0.indexOf('E')<0)&&
(((a0*a0)==0)||
((a0/a0)==1)))
{
var a7=parseFloat(a0);
if(!isNaN(a7))
{
var a8=a0.length;
var a9=0;
var a10=a0.lastIndexOf('.');
if(a10!=-1)
{
a8=a10;
a9=a0.length-a10-1;
}
var a11;
if((this._maxValue!=(void 0))&&
(a7>this._maxValue))
{
a11=DecimalFormat.LV;
}
else if((this._minValue!=(void 0))&&
(a7<this._minValue))
{
a11=DecimalFormat.MV;
}
else if((this._maxPrecision!=(void 0))&&
(a8>this._maxPrecision))
{
a11=DecimalFormat.LID;
}
else if((this._maxScale!=(void 0))&&
(a9>this._maxScale))
{
a11=DecimalFormat.LFD;
}
if(a11!=(void 0))
{
var a12=this._messages;
if((a12==(void 0))||
(a12[a11]==(void 0)))
return(void 0);
else
return new ParseException(a12[a11]);
}
return a7;
}
}
}
return(void 0);
}
function DecimalFormat(
a0,
a1,
a2,
a3,
a4)
{
this._messages=a0;
this._maxPrecision=a1;
this._maxScale=a2;
this._maxValue=a3;
this._minValue=a4;
this._class="DecimalFormat";
}
DecimalFormat.prototype=new Format();
DecimalFormat.prototype.format=_decimalFormat;
DecimalFormat.prototype.parse=_decimalParse;
DecimalFormat.LFD='LFD';
DecimalFormat.LID='LID';
DecimalFormat.LV='LV';
DecimalFormat.MV='MV';
function _regExpFormat(
a0
)
{
return a0;
}
function _regExpParse(
a0
)
{
var a1=a0.match(this._pattern);
if((a1!=(void 0))&&(a1[0]==a0))
{
return a0;
}
else
{
return(void 0);
}
}
function RegExpFormat(
a0
)
{
this._class="RegExpFormat";
this._pattern=a0;
}
RegExpFormat.prototype=new Format();
RegExpFormat.prototype.format=_regExpFormat;
RegExpFormat.prototype.parse=_regExpParse;
