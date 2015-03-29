if(!_pprBackRestoreInlineScripts)
{
var iFrameElement=document.getElementById("_pprIFrame");
if(iFrameElement!=null)
{
var code=
_getCommentedScript(iFrameElement.contentWindow.document,"_pprScripts");
if(code==null)
{
code=_getCommentedScript(document,"_pprScripts");
}
if(code!=null)
{
if(_agent.isSafari)
window.setTimeout(code,1);
else
{
_eval(window,code);
if(_agent.isIE)
window.status=_uixDoneMessage;
}
}
}
}
else
{
var saveScriptElement=_getElementById(document,"_pprSaveScript");
if(saveScriptElement!=null&&saveScriptElement.value!="")
{
_eval(window,saveScriptElement.value);
}
_pprBackRestoreInlineScripts=false;
}
