function HijrahDate()
{
this.hijcal=new HijrahCalendar();
if(typeof(deviation)!="undefined")this.hijcal.setDeviation(deviation);
switch(arguments.length){
case 0:this.setTime((new Date()).getTime());
break;
case 1:this.setTime(arguments[0]);
break;
case 3:this.setFullYear(arguments[0]);
this.setMonth(arguments[1]);
this.setDate(arguments[2]);
this.setHours(0);
this.setMinutes(0);
this.setSeconds(0);
this.setMilliseconds(0);
break;
default:alert("HijrahDate supports only 0, 1, and 3 argument constructors.");
}
}
HijrahDate.prototype.valueOf=hijdate_getTime;
HijrahDate.prototype.getTime=hijdate_getTime;
HijrahDate.prototype.getFullYear=_getFullYear;
HijrahDate.prototype.getMonth=_getMonth;
HijrahDate.prototype.getDate=_getDate;
HijrahDate.prototype.getDay=_getDay;
HijrahDate.prototype.getHours=_getHours;
HijrahDate.prototype.getMinutes=_getMinutes;
HijrahDate.prototype.getSeconds=_getSeconds;
HijrahDate.prototype.getMilliseconds=_getMilliseconds;
HijrahDate.prototype.getTimezoneOffset=_getTimezoneOffset;
HijrahDate.prototype.setTime=hijdate_setTime;
HijrahDate.prototype.setFullYear=_setFullYear;
HijrahDate.prototype.setMonth=_setMonth;
HijrahDate.prototype.setDate=_setDate;
HijrahDate.prototype.setHours=_setHours;
HijrahDate.prototype.setMinutes=_setMinutes;
HijrahDate.prototype.setSeconds=_setSeconds;
HijrahDate.prototype.setMilliseconds=_setMilliseconds;
function hijdate_getTime()
{
return this.hijcal.getTimeInMillis();
}
function _getFullYear()
{
return this.hijcal.get(Calendar.YEAR);
}
function _getMonth()
{
return this.hijcal.get(Calendar.MONTH);
}
function _getDate()
{
return this.hijcal.get(Calendar.DATE);
}
function _getDay()
{
return this.hijcal.get(Calendar.DAY_OF_WEEK)-1;
}
function _getHours()
{
return this.hijcal.get(Calendar.HOUR_OF_DAY);
}
function _getMinutes()
{
return this.hijcal.get(Calendar.MINUTE);
}
function _getSeconds()
{
return this.hijcal.get(Calendar.SECOND);
}
function _getMilliseconds()
{
return this.hijcal.get(Calendar.MILLISECOND);
}
function _getTimezoneOffset()
{
return this.hijcal.getTimezoneOffset();
}
function hijdate_setTime(
a0
)
{
return this.hijcal.setTimeInMillis(a0);
}
function _setFullYear(
a0
)
{
this.hijcal.set(Calendar.YEAR,a0);
}
function _setMonth(
a0
)
{
this.hijcal.set(Calendar.MONTH,a0);
}
function _setDate(
a0
)
{
this.hijcal.set(Calendar.DATE,a0);
}
function _setHours(
a0
)
{
return this.hijcal.set(Calendar.HOUR_OF_DAY,a0);
}
function _setMinutes(
a0
)
{
return this.hijcal.set(Calendar.MINUTE,a0);
}
function _setSeconds(
a0
)
{
return this.hijcal.set(Calendar.SECOND,a0);
}
function _setMilliseconds(
a0
)
{
return this.hijcal.set(Calendar.MILLISECOND,a0);
}
Calendar.ERA=0;
Calendar.YEAR=1;
Calendar.MONTH=2;
Calendar.WEEK_OF_YEAR=3;
Calendar.WEEK_OF_MONTH=4;
Calendar.DATE=5;
Calendar.DAY_OF_MONTH=5;
Calendar.DAY_OF_YEAR=6;
Calendar.DAY_OF_WEEK=7;
Calendar.DAY_OF_WEEK_IN_MONTH=8;
Calendar.AM_PM=9;
Calendar.HOUR=10;
Calendar.HOUR_OF_DAY=11;
Calendar.MINUTE=12;
Calendar.SECOND=13;
Calendar.MILLISECOND=14;
Calendar.FIELD_COUNT=15;
Calendar.SUNDAY=1;
Calendar.MONDAY=2;
Calendar.TUESDAY=3;
Calendar.WEDNESDAY=4;
Calendar.THURSDAY=5;
Calendar.FRIDAY=6;
Calendar.SATURDAY=7;
Calendar.JANUARY=0;
Calendar.FEBRUARY=1;
Calendar.MARCH=2;
Calendar.APRIL=3;
Calendar.MAY=4;
Calendar.JUNE=5;
Calendar.JULY=6;
Calendar.AUGUST=7;
Calendar.SEPTEMBER=8;
Calendar.OCTOBER=9;
Calendar.NOVEMBER=10;
Calendar.DECEMBER=11;
Calendar.BE=0;
Calendar.AE=1;
Calendar.EPOCH_YEAR=1970;
Calendar.EPOCH_JULIAN_DAY=2440588;
Calendar.ONE_SECOND=1000;
Calendar.ONE_MINUTE=60*Calendar.ONE_SECOND;
Calendar.ONE_HOUR=60*Calendar.ONE_MINUTE;
Calendar.ONE_DAY=24*Calendar.ONE_HOUR;
function Calendar()
{
this.mFields=new Array(Calendar.FIELD_COUNT);
}
Calendar.prototype.getTime=_getTime;
Calendar.prototype.getTimeInMillis=_getTimeInMillis;
Calendar.prototype.setTime=_setTime;
Calendar.prototype.setTimeInMillis=_setTimeInMillis;
Calendar.prototype.get=_get;
Calendar.prototype.internalGet=_internalGet;
Calendar.prototype.internalSet=_internalSet;
Calendar.prototype.set=_set;
Calendar.prototype.computeTime=_computeTime;
Calendar.prototype.computeFieldsImpl=_computeFieldsImpl;
Calendar.prototype.getTimezoneOffset=_getTimezoneOffset;
Calendar.prototype.computeJulianDay=_computeJulianDay;
Calendar.prototype.timeToFields=_timeToFields;
Calendar.prototype.millisToJulianDay=_millisToJulianDay;
Calendar.prototype.julianDayToMillis=_julianDayToMillis;
function _getTime(){
return new Date(this.getTimeInMillis());
}
function _getTimeInMillis(
)
{
this.computeTime();
return this.mTime;
}
function _setTime(
a0
)
{
this.setTimeInMillis(a0.getTime());
}
function _setTimeInMillis(
a0
)
{
this.mTime=a0;
this.computeFieldsImpl();
}
function _get(
a0
)
{
return this.internalGet(a0);
}
function _internalGet(
a0
)
{
return this.mFields[a0];
}
function _internalSet(
a0,
a1
)
{
this.mFields[a0]=a1;
}
function _set(
a0,
a1
)
{
this.internalSet(a0,a1);
}
function _computeTime(
)
{
var a0=this.internalGet(Calendar.YEAR);
if(a0==null)a0=Calendar.EPOCH_YEAR;
var a1=this.internalGet(Calendar.ERA)
if(a1==null)a1=this.getCurrentEra();
var a2=this.computeJulianDay(a1,a0);
var a3=this.julianDayToMillis(a2);
var a4=0;
var a5=this.internalGet(Calendar.HOUR_OF_DAY);
if(a5!=null)a4+=a5;
a4*=60;
var a6=this.internalGet(Calendar.MINUTE);
if(a6!=null)a4+=a6;
a4*=60;
var a7=this.internalGet(Calendar.SECOND);
if(a7!=null)a4+=a7;
a4*=1000;
var a8=this.internalGet(Calendar.MILLISECOND);
if(a8!=null)a4+=a8;
a3+=a4;
var a9=new Date(a3);
var a10=a9.getTimezoneOffset()*Calendar.ONE_MINUTE;
this.mTime=a3+a10;
}
function _computeFieldsImpl(
)
{
var a0=new Date(this.mTime);
var a1=(-1)*a0.getTimezoneOffset()*Calendar.ONE_MINUTE;
var a2=this.mTime+a1;
if(this.mTime>0&&a2<0&&a1>0){
a2=Number.MAX_VALUE;
}else if(this.mTime<0&&a2>0&&a1<0){
a2=Number.MIN_VALUE;
}
this.timeToFields(a2);
var a3=Math.floor(a2/Calendar.ONE_DAY);
var a4=a2-(a3*Calendar.ONE_DAY);
if(a4<0){
a4+=Calendar.ONE_DAY;
}
this.internalSet(Calendar.MILLISECOND,a4%1000);
a4=Math.floor(a4/1000);
this.internalSet(Calendar.SECOND,a4%60);
a4=Math.floor(a4/60);
this.internalSet(Calendar.MINUTE,a4%60);
a4=Math.floor(a4/60);
this.internalSet(Calendar.HOUR_OF_DAY,a4);
this.internalSet(Calendar.AM_PM,Math.floor(a4/12));
this.internalSet(Calendar.HOUR,a4%12);
}
function _getTimezoneOffset()
{
var a0=new Date(this.hijcal.mTime);
return a0.getTimezoneOffset();
}
function _computeJulianDay(
a0,
a1
)
{
var a2=0,date=1;
var a3=this.internalGet(Calendar.MONTH);
if(typeof(a3)!="undefined")a2=a3-Calendar.JANUARY;
if(a2<0||a2>11){
a1+=Math.floor(a2/12);
a2=a2%12;
}
var a4=this.yearToJulianDay(a0,a1);
var a5=(a0==Calendar.BE)?1-a1:a1;
a4+=this.monthDays(a2,a5);
var a6=this.internalGet(Calendar.DAY_OF_MONTH);
if(typeof(a6)!="undefined")date=a6;
a4+=date;
return a4;
}
function _timeToFields(
a0
)
{
var a1,month,date,dayOfWeek,era;
var a2=this.fieldInfo(this.millisToJulianDay(a0));
era=a2[0];
a1=a2[1];
month=a2[2];
date=a2[3];
dayOfWeek=a2[4];
this.internalSet(Calendar.ERA,era);
this.internalSet(Calendar.YEAR,a1);
this.internalSet(Calendar.MONTH,month+Calendar.JANUARY);
this.internalSet(Calendar.DATE,date);
this.internalSet(Calendar.DAY_OF_WEEK,dayOfWeek);
}
function _millisToJulianDay(
a0
)
{
return Calendar.EPOCH_JULIAN_DAY+Math.floor(a0/Calendar.ONE_DAY);
}
function _julianDayToMillis(
a0
)
{
return(a0-Calendar.EPOCH_JULIAN_DAY)*Calendar.ONE_DAY;
}
function inherit(
a0,
a1
)
{
copy_undef_properties(a1.prototype,a0.prototype);
}
function copy_undef_properties(
a0,
a1
)
{
for(var a2 in a0){
if(typeof(a1[a2])=="undefined"){
a1[a2]=a0[a2];
}
}
}
HijrahCalendar.BH=Calendar.BE;
HijrahCalendar.AH=Calendar.AE;
HijrahCalendar.CURRENT_ERA=HijrahCalendar.AH;
HijrahCalendar.JAN_1_1_JULIAN_DAY=1948440;
HijrahCalendar.NUM_DAYS=new Array
(0,30,59,89,118,148,177,207,236,266,295,325);
HijrahCalendar.LEAP_NUM_DAYS=new Array
(0,30,59,89,118,148,177,207,236,266,295,325);
HijrahCalendar.CYCLEYEAR_START_DATE=new Array(
0,
354,
709,
1063,
1417,
1772,
2126,
2481,
2835,
3189,
3544,
3898,
4252,
4607,
4961,
5315,
5670,
6024,
6379,
6733,
7087,
7442,
7796,
8150,
8505,
8859,
9214,
9568,
9922,
10277);
HijrahCalendar.isLeapYearInternal=hij_isLeapYear;
function HijrahCalendar()
{
this.temp=Calendar;
this.temp();
this.m_Deviation=new Deviation();
}
HijrahCalendar.prototype.isLeapYear=hij_isLeapYear;
HijrahCalendar.prototype.setDeviation=_setDeviation;
HijrahCalendar.prototype.monthDays=hij_monthDays;
HijrahCalendar.prototype.fieldInfo=hij_fieldInfo;
HijrahCalendar.prototype.yearToJulianDay=hij_yearToJulianDay;
HijrahCalendar.prototype.getCurrentEra=hij_getCurrentEra;
HijrahCalendar.prototype.getCycleNumber=_getCycleNumber;
HijrahCalendar.prototype.getDayOfCycle=_getDayOfCycle;
HijrahCalendar.prototype.getYearInCycle=_getYearInCycle;
HijrahCalendar.prototype.getAdjustedCycle=_getAdjustedCycle;
HijrahCalendar.prototype.getAdjustedMonthDays=_getAdjustedMonthDays;
HijrahCalendar.prototype.getDayOfYear=_getDayOfYear;
HijrahCalendar.prototype.getMonthOfYear=_getMonthOfYear;
HijrahCalendar.prototype.getDayOfMonth=_getDayOfMonth;
function hij_isLeapYear(
a0
)
{
return(14+11*(a0>0?a0:-a0))%30<11;
}
function _setDeviation(
a0
)
{
this.m_Deviation=a0;
}
function hij_monthDays(
a0,
a1
)
{
var a2=this.getAdjustedMonthDays(a1);
return a2[a0];
}
function hij_fieldInfo(
a0
)
{
var a1,rawYear,year,month,date,dayOfWeek,dayOfYear;
var a2,yearOfCycle,dayOfCycle;
var a3=a0-HijrahCalendar.JAN_1_1_JULIAN_DAY;
if(a3>=0){
a2=this.getCycleNumber(a3);
dayOfCycle=this.getDayOfCycle(a3,a2);
yearOfCycle=this.getYearInCycle(a2,dayOfCycle);
dayOfYear=this.getDayOfYear(a2,dayOfCycle,yearOfCycle);
year=a2*30+yearOfCycle+1;
month=this.getMonthOfYear(dayOfYear,year);
date=this.getDayOfMonth(dayOfYear,month,year);
++date;
a1=HijrahCalendar.AH;
}else{
a2=Math.floor(a3/10631);
dayOfCycle=a3%10631;
yearOfCycle=this.getYearInCycle(a2,dayOfCycle);
dayOfYear=this.getDayOfYear(a2,dayOfCycle,yearOfCycle);
year=a2*30-yearOfCycle;
year=1-year;
month=this.getMonthOfYear(dayOfYear,year);
date=this.getDayOfMonth(dayOfYear,month,year);
++date;
a1=HijrahCalendar.BH;
}
dayOfWeek=(a0+1)%7;
dayOfWeek+=(dayOfWeek<0)?(Calendar.SUNDAY+7):Calendar.SUNDAY;
var a4=new Array(6);
a4[0]=a1;
a4[1]=year;
a4[2]=month;
a4[3]=date;
a4[4]=dayOfWeek;
a4[5]=dayOfYear;
return a4;
}
function hij_yearToJulianDay(
a0,
a1
)
{
if(a0==HijrahCalendar.BH)
a1=1-a1;
var a2=Math.floor((a1-1)/30);
var a3=(a1-1)%30;
var a4=this.getAdjustedCycle(a2)[Math.abs(a3)];
if(a3<0)a4=-a4;
var a5=this.m_Deviation.mAdjustedCycles[a2];
if(a5==null)
var a5=new Number(a2*10631);
return a5+a4+HijrahCalendar.JAN_1_1_JULIAN_DAY-1;
}
function hij_getCurrentEra(){
return HijrahCalendar.CURRENT_ERA;
}
function _getCycleNumber(
a0
)
{
var a1=Math.floor(a0/10631);
var a2=this.m_Deviation.mAdjustedCycles;
var a3=0;
for(var a4=0;a4<a2.length;a4++){
if(a0<a2[a4]){
return a4-1;
}
}
return a1;
}
function _getDayOfCycle(
a0,
a1
)
{
var a2=this.m_Deviation.mAdjustedCycles[a1];
if(a2==null)
a2=a1*10631;
return Math.floor(a0-a2);
}
function _getYearInCycle(
a0,
a1
)
{
var a2=this.getAdjustedCycle(a0);
if(a1==0)
return 0;
if(a1>0){
for(var a3=0;a3<a2.length;a3++){
if(a1<a2[a3])
return a3-1;
}
return 29;
}else{
a1=-a1;
for(var a3=0;a3<a2.length;a3++){
if(a1<=a2[a3]){
return a3-1;
}
}
return 29;
}
}
function _getAdjustedCycle(
a0
)
{
var a1=this.m_Deviation.mAdjustedCycleYears[a0];
if(a1==null)
a1=HijrahCalendar.CYCLEYEAR_START_DATE;
return a1;
}
function _getAdjustedMonthDays(
a0
)
{
var a1=this.m_Deviation.mAdjustedMonthDays[a0];
if(a1==null){
if(this.isLeapYear(a0)){
a1=HijrahCalendar.LEAP_NUM_DAYS;
}else{
a1=HijrahCalendar.NUM_DAYS;
}
}
return a1;
}
function _getDayOfYear(
a0,
a1,
a2
)
{
var a3=this.getAdjustedCycle(a0);
if(a1>0){
return a1-a3[a2];
}else{
return a3[a2]+a1;
}
}
function _getMonthOfYear(
a0,
a1
)
{
var a2=this.getAdjustedMonthDays(a1);
if(a0>=0){
for(var a3=0;a3<a2.length;a3++){
if(a0<a2[a3])
return a3-1;
}
return 11;
}else{
a0=(this.isLeapYear(a1)?(a0+355):(a0+354));
for(var a3=0;a3<a2.length;a3++){
if(a0<a2[a3]){
return a3-1;
}
}
return 11;
}
}
function _getDayOfMonth(
a0,
a1,
a2
)
{
var a3=this.getAdjustedMonthDays(a2);
if(a0>=0){
if(a1>0)
return a0-a3[a1];
else
return a0;
}else{
a0=(this.isLeapYear(a2)?(a0+355):(a0+354));
if(a1>0){
return a0-a3[a1];
}else
return a0;
}
}
inherit(HijrahCalendar,Calendar);
function Deviation()
{
this.mAdjustedCycles=new Array(100);
for(var a0=0;a0<this.mAdjustedCycles.length;a0++){
this.mAdjustedCycles[a0]=10631*a0;
}
this.mAdjustedCycleYears=new Array();
this.mAdjustedMonthDays=new Array();
}
Deviation.prototype.addDeviationAsHijrah=_addDeviationAsHijrah;
function _addDeviationAsHijrah(
a0,
a1,
a2,
a3,
a4
)
{
if(a0<1)alert("startYear must be positive.");
if(a2<1)alert("endYear must be positive.");
if(a2<a0)alert("endYear must be greater than or equal to startYear.");
var a5=HijrahCalendar.isLeapYearInternal(a0);
var a6=this.mAdjustedMonthDays[a0];
if(a6==null){
if(a5){
a6=new Array(HijrahCalendar.LEAP_NUM_DAYS.length);
for(var a7=0;a7<HijrahCalendar.LEAP_NUM_DAYS.length;a7++){
a6[a7]=HijrahCalendar.LEAP_NUM_DAYS[a7];
}
}else{
a6=new Array(HijrahCalendar.NUM_DAYS.length);
for(var a7=0;a7<HijrahCalendar.NUM_DAYS.length;a7++){
a6[a7]=HijrahCalendar.NUM_DAYS[a7];
}
}
}
var a8=new Array(a6.length);
for(var a9=0;a9<12;a9++){
if(a9>a1)
a8[a9]=a6[a9]-a4;
else
a8[a9]=a6[a9];
}
this.mAdjustedMonthDays[a0]=a8;
if(a0!=a2){
var a10=Math.floor((a0-1)/30);
var a11=(a0-1)%30;
var a12=this.mAdjustedCycleYears[a10];
if(a12==null){
a12=new Array(HijrahCalendar.CYCLEYEAR_START_DATE.length);
for(var a13=0;a13<a12.length;a13++){
a12[a13]=HijrahCalendar.CYCLEYEAR_START_DATE[a13];
}
}
for(var a13=a11+1;a13<HijrahCalendar.CYCLEYEAR_START_DATE.length;a13++){
a12[a13]=a12[a13]-a4;
}
this.mAdjustedCycleYears[a10]=a12;
var a14=Math.floor((a0-1)/30);
var a15=Math.floor((a2-1)/30);
if(a14!=a15){
for(var a13=a14+1;a13<this.mAdjustedCycles.length;a13++){
this.mAdjustedCycles[a13]=this.mAdjustedCycles[a13]-a4;
}
for(var a13=a15+1;a13<this.mAdjustedCycles.length;a13++){
this.mAdjustedCycles[a13]=this.mAdjustedCycles[a13]+a4;
}
}
var a16=Math.floor((a2-1)/30);
var a17=(a2-1)%30;
var a18=this.mAdjustedCycleYears[a16];
if(a18==null){
a18=new Array(HijrahCalendar.CYCLEYEAR_START_DATE.length);
for(var a13=0;a13<a18.length;a13++){
a18[a13]=HijrahCalendar.CYCLEYEAR_START_DATE[a13];
}
}
for(var a13=a17+1;a13<HijrahCalendar.CYCLEYEAR_START_DATE.length;a13++){
a18[a13]=a18[a13]+a4;
}
this.mAdjustedCycleYears[a16]=a18;
}
var a19=HijrahCalendar.isLeapYearInternal(a2);
var a20=this.mAdjustedMonthDays[a2];
if(a20==null){
if(a19){
a20=new Array(HijrahCalendar.LEAP_NUM_DAYS.length);
for(var a7=0;a7<HijrahCalendar.LEAP_NUM_DAYS.length;a7++){
a20[a7]=HijrahCalendar.LEAP_NUM_DAYS[a7];
}
}else{
a20=new Array(HijrahCalendar.NUM_DAYS.length);
for(var a7=0;a7<HijrahCalendar.NUM_DAYS.length;a7++){
a20[a7]=HijrahCalendar.NUM_DAYS[a7];
}
}
}
var a21=new Array(a20.length);
for(var a9=0;a9<12;a9++){
if(a9>a3)
a21[a9]=a20[a9]+a4;
else{
a21[a9]=a20[a9];
}
}
this.mAdjustedMonthDays[a2]=a21;
}
