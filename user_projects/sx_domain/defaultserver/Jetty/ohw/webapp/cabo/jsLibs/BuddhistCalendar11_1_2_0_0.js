function BuddhistDate()
{
this.gregorianDate=new Date();
switch(arguments.length){
case 0:
break;
case 1:
this.setTime(arguments[0]);
break;
case 3:
this.setFullYear(arguments[0]);
this.setMonth(arguments[1]);
this.setDate(arguments[2]);
this.setHours(0);
this.setMinutes(0);
this.setSeconds(0);
this.setMilliseconds(0);
break;
default:alert("BuddhistDate supports only 0, 1, 3 and 7 argument constructors.");
}
}
BuddhistDate.prototype.valueOf=_BuddhistDate_getTime;
BuddhistDate.prototype.getTime=_BuddhistDate_getTime;
BuddhistDate.prototype.getFullYear=_BuddhistDate_getFullYear;
BuddhistDate.prototype.getMonth=_BuddhistDate_getMonth;
BuddhistDate.prototype.getDate=_BuddhistDate_getDate;
BuddhistDate.prototype.getDay=_BuddhistDate_getDay;
BuddhistDate.prototype.getHours=_BuddhistDate_getHours;
BuddhistDate.prototype.getMinutes=_BuddhistDate_getMinutes;
BuddhistDate.prototype.getSeconds=_BuddhistDate_getSeconds;
BuddhistDate.prototype.getMilliseconds=_BuddhistDate_getMilliseconds;
BuddhistDate.prototype.getTimezoneOffset=_BuddhistDate_getTimezoneOffset;
BuddhistDate.prototype.setTime=_BuddhistDate_setTime;
BuddhistDate.prototype.setFullYear=_BuddhistDate_setFullYear;
BuddhistDate.prototype.setMonth=_BuddhistDate_setMonth;
BuddhistDate.prototype.setDate=_BuddhistDate_setDate;
BuddhistDate.prototype.setHours=_BuddhistDate_setHours;
BuddhistDate.prototype.setMinutes=_BuddhistDate_setMinutes;
BuddhistDate.prototype.setSeconds=_BuddhistDate_setSeconds;
BuddhistDate.prototype.setMilliseconds=_BuddhistDate_setMilliseconds;
function _BuddhistDate_getTime(){
return this.gregorianDate.getTime();
}
function _BuddhistDate_getFullYear()
{
return this.gregorianDate.getFullYear()+543;
}
function _BuddhistDate_getMonth()
{
return this.gregorianDate.getMonth();
}
function _BuddhistDate_getDate()
{
return this.gregorianDate.getDate();
}
function _BuddhistDate_getDay()
{
return this.gregorianDate.getDay();
}
function _BuddhistDate_getHours()
{
return this.gregorianDate.getHours();
}
function _BuddhistDate_getMinutes()
{
return this.gregorianDate.getMinutes();
}
function _BuddhistDate_getSeconds()
{
return this.gregorianDate.getSeconds();
}
function _BuddhistDate_getMilliseconds()
{
return this.gregorianDate.getMilliseconds();
}
function _BuddhistDate_getTimezoneOffset()
{
return this.gregorianDate.getTimezoneOffset();
}
function _BuddhistDate_setTime(
a0
)
{
this.gregorianDate.setTime(a0);
}
function _BuddhistDate_setFullYear(
a0
)
{
this.gregorianDate.setFullYear(a0-543);
}
function _BuddhistDate_setMonth(
a0
)
{
this.gregorianDate.setMonth(a0);
}
function _BuddhistDate_setDate(
a0
)
{
this.gregorianDate.setDate(a0);
}
function _BuddhistDate_setHours(
a0
)
{
return this.gregorianDate.setHours(a0);
}
function _BuddhistDate_setMinutes(
a0
)
{
return this.gregorianDate.setMinutes(a0);
}
function _BuddhistDate_setSeconds(
a0
)
{
return this.gregorianDate.setSeconds(a0);
}
function _BuddhistDate_setMilliseconds(
a0
)
{
return this.gregorianDate.setMilliseconds(a0);
}
