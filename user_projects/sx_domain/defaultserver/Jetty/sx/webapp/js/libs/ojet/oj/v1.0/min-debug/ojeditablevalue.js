"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojvalidation", "ojs/ojpopup"], function($oj$$4$$, $$$$4$$) {
  $oj$$4$$.$PopupMessagingStrategy$ = function $$oj$$4$$$$PopupMessagingStrategy$$($displayOptions$$5$$) {
    this.Init($displayOptions$$5$$);
  };
  $oj$$4$$.$ComponentMessaging$.$registerMessagingStrategy$($oj$$4$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$, $oj$$4$$.$PopupMessagingStrategy$);
  $oj$$4$$.$Object$.$createSubclass$($oj$$4$$.$PopupMessagingStrategy$, $oj$$4$$.$MessagingStrategy$, "oj.PopupMessagingStrategy");
  $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$ = {ojRadioset:{position:"launcher", $events$:{open:"focusin mouseover", close:"mouseout"}}, ojCheckboxset:{position:"launcher", $events$:{open:"focusin mouseover", close:"mouseout"}}, "default":{$events$:{open:"focusin"}}};
  $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULT_STATUS_ICON_SELECTORS$ = "oj-component-icon oj-message-status-icon ";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE$ = "oj-message";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_SUMMARY$ = "oj-message-summary";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_DETAIL$ = "oj-message-detail";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_CONTENT$ = "oj-message-content";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT$ = "oj-form-control-hint";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT_CONVERTER$ = "oj-form-control-hint-converter";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT_VALIDATOR$ = "oj-form-control-hint-validator";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT_TITLE$ = "oj-form-control-hint-title";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_ERROR_ICON$ = "oj-message-error-icon";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_WARNING_ICON$ = "oj-message-warning-icon";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_INFO_ICON$ = "oj-message-info-icon";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_CONFIRMATION_ICON$ = "oj-message-confirmation-icon";
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$activate$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$activate$$($cm$$3$$) {
    $oj$$4$$.$PopupMessagingStrategy$.$superclass$.$activate$.call(this, $cm$$3$$);
    this.$_initMessagingPopup$();
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$reactivate$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$reactivate$$($newDisplayOptions$$2$$) {
    $oj$$4$$.$PopupMessagingStrategy$.$superclass$.$reactivate$.call(this, $newDisplayOptions$$2$$);
    this.$_updatePopupIfOpen$();
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.update = function $$oj$$4$$$$PopupMessagingStrategy$$$update$() {
    $oj$$4$$.$PopupMessagingStrategy$.$superclass$.update.call(this);
    this.$_updatePopupIfOpen$();
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$deactivate$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$deactivate$$() {
    var $compDefaults_events$$ = $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$[this.$GetComponent$().widgetName], $compDefaults_events$$ = $compDefaults_events$$ ? $compDefaults_events$$.$events$ : $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$["default"].$events$;
    $compDefaults_events$$.open && (this.$GetLauncher$().off($compDefaults_events$$.open, this.$_openPopup$), this.$GetLauncher$().off($compDefaults_events$$.open, this.$_wireUpPopupOnFirstLauncherFocus$));
    $compDefaults_events$$.close && this.$GetLauncher$().off($compDefaults_events$$.close, this.$_closePopup$);
    this.$_destroyTooltip$();
    $oj$$4$$.$PopupMessagingStrategy$.$superclass$.$deactivate$.call(this);
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_closePopup$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_closePopup$$($event$$22_self$$36$$) {
    $event$$22_self$$36$$ = $event$$22_self$$36$$.data && $event$$22_self$$36$$.data.strategy;
    $event$$22_self$$36$$.$$messagingContentRoot$.ojPopup("close", $event$$22_self$$36$$.$GetLauncher$());
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_initMessagingPopup$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_initMessagingPopup$$() {
    var $jqLauncher$$ = this.$GetLauncher$(), $compDefaults$$1_events$$1$$ = $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$[this.$GetComponent$().widgetName], $compDefaults$$1_events$$1$$ = $compDefaults$$1_events$$1$$ ? $compDefaults$$1_events$$1$$.$events$ : $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$["default"].$events$;
    if (!this.$_isPopupInitialized$()) {
      $jqLauncher$$.on($compDefaults$$1_events$$1$$.open, {strategy:this}, this.$_wireUpPopupOnFirstLauncherFocus$);
    }
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_openPopup$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_openPopup$$($event$$23$$) {
    ($event$$23$$.data && $event$$23$$.data.strategy).$_doOpenPopup$();
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_doOpenPopup$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_doOpenPopup$$() {
    var $domNode_launcher$$3$$, $latestContent_surrogateId$$1$$;
    this.$_canOpenPopup$() && ($latestContent_surrogateId$$1$$ = this.$_buildPopupHtml$(), this.$_isPopupInitialized$() && $latestContent_surrogateId$$1$$ && ($domNode_launcher$$3$$ = this.$$messagingContentRoot$[0], $domNode_launcher$$3$$.innerHTML = "", $domNode_launcher$$3$$.innerHTML = $latestContent_surrogateId$$1$$, $domNode_launcher$$3$$ = this.$GetLauncher$(), $latestContent_surrogateId$$1$$ = $domNode_launcher$$3$$.is("[id]") ? $domNode_launcher$$3$$.attr("id") : $domNode_launcher$$3$$.uniqueId().attr("id"), 
    this.$$messagingContentRoot$.ojPopup("widget").attr($oj$$4$$.$DomUtils$.$SURROGATE_ID$, $latestContent_surrogateId$$1$$), this.$$messagingContentRoot$.ojPopup("open", $domNode_launcher$$3$$)));
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_canOpenPopup$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_canOpenPopup$$() {
    var $options$$111$$ = this.$GetComponent$().options, $isReadOnly$$ = $options$$111$$.readOnly || !1;
    return!($options$$111$$.disabled || $isReadOnly$$);
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_updatePopupIfOpen$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_updatePopupIfOpen$$() {
    var $domNode$$1_isPopupOpen$$;
    $domNode$$1_isPopupOpen$$ = !1;
    var $contentToShow$$, $isLauncherActiveElement$$;
    this.$_isPopupInitialized$() && ($domNode$$1_isPopupOpen$$ = this.$$messagingContentRoot$.ojPopup("isOpen"), $contentToShow$$ = this.$_buildPopupHtml$(), $isLauncherActiveElement$$ = document.activeElement === this.$GetLauncher$()[0] ? !0 : !1, $domNode$$1_isPopupOpen$$ ? $contentToShow$$ ? ($domNode$$1_isPopupOpen$$ = this.$$messagingContentRoot$[0], $domNode$$1_isPopupOpen$$.innerHTML = "", $domNode$$1_isPopupOpen$$.innerHTML = $contentToShow$$, this.$$messagingContentRoot$.ojPopup("refresh")) : 
    this.$$messagingContentRoot$.ojPopup("close", this.$GetLauncher$()) : $isLauncherActiveElement$$ && $contentToShow$$ && this.$_doOpenPopup$());
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_wireUpPopupOnFirstLauncherFocus$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_wireUpPopupOnFirstLauncherFocus$$($event$$24_self$$40$$) {
    $event$$24_self$$40$$ = $event$$24_self$$40$$.data && $event$$24_self$$40$$.data.strategy;
    if (!$event$$24_self$$40$$.$_isPopupInitialized$()) {
      var $jqLauncher$$1$$ = $event$$24_self$$40$$.$GetLauncher$(), $eventData$$1_jPositionOf$$ = $event$$24_self$$40$$.$_getPopupPosition$(), $compDefaults$$2_events$$2$$ = $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$[$event$$24_self$$40$$.$GetComponent$().widgetName], $compDefaults$$2_events$$2$$ = $compDefaults$$2_events$$2$$ ? $compDefaults$$2_events$$2$$.$events$ : $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$["default"].$events$;
      $event$$24_self$$40$$.$GetComponent$().widget();
      $event$$24_self$$40$$.$$messagingContentRoot$ = $$$$4$$("\x3cdiv class\x3d'oj-messaging-popup-container'\x3e\x3c/div\x3e");
      $$$$4$$("body").append($event$$24_self$$40$$.$$messagingContentRoot$);
      $event$$24_self$$40$$.$$messagingContentRoot$.ojPopup({rootAttributes:{"class":"oj-messaging-popup"}, initialFocus:"none", tail:"simple", autoDismiss:"focusLoss", position:{my:"start bottom", at:"end top", collision:"flip", of:$eventData$$1_jPositionOf$$}});
      $eventData$$1_jPositionOf$$ = {strategy:$event$$24_self$$40$$};
      if ($compDefaults$$2_events$$2$$.open) {
        $jqLauncher$$1$$.on($compDefaults$$2_events$$2$$.open, $eventData$$1_jPositionOf$$, $event$$24_self$$40$$.$_openPopup$);
      }
      if ($compDefaults$$2_events$$2$$.close) {
        $jqLauncher$$1$$.on($compDefaults$$2_events$$2$$.close, $eventData$$1_jPositionOf$$, $event$$24_self$$40$$.$_closePopup$);
      }
      $event$$24_self$$40$$.$GetLauncher$().off($compDefaults$$2_events$$2$$.open, $event$$24_self$$40$$.$_wireUpPopupOnFirstLauncherFocus$);
      $event$$24_self$$40$$.$_doOpenPopup$();
    }
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_getPopupPosition$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_getPopupPosition$$() {
    var $compDefaults$$3$$ = $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$[this.$GetComponent$().widgetName];
    return $compDefaults$$3$$ && $compDefaults$$3$$.position && "launcher" === $compDefaults$$3$$.position ? this.$GetLauncher$() : this.$GetComponent$().widget();
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_destroyTooltip$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_destroyTooltip$$() {
    this.$_isPopupInitialized$() && this.$$messagingContentRoot$ && (this.$$messagingContentRoot$.ojPopup("destroy"), this.$$messagingContentRoot$.remove());
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_buildPopupHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_buildPopupHtml$$() {
    var $nwHtml$$ = "", $document$$1$$ = this.$GetComponent$().document[0], $nwContent$$ = [], $addSeparator$$ = !1, $that$$1$$ = this;
    this.$ShowMessages$() && $nwContent$$.push(this.$_buildMessagesHtml$($document$$1$$));
    (this.$ShowConverterHint$() || this.$ShowValidatorHint$() || this.$ShowTitle$()) && $nwContent$$.push(this.$_buildHintsHtml$($document$$1$$));
    $$$$4$$.each($nwContent$$, function($i$$80$$, $content$$8$$) {
      $content$$8$$ && ($addSeparator$$ ? $nwHtml$$ = $nwHtml$$.concat($that$$1$$.$_getSeparatorHtml$($document$$1$$)) : $addSeparator$$ = !0, $nwHtml$$ = $nwHtml$$.concat($content$$8$$));
    });
    return $nwHtml$$;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_buildMessagesHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_buildMessagesHtml$$($document$$2$$) {
    var $messages$$9_messagesByType$$, $content$$9$$ = "", $i$$81$$, $j$$10_maxSeverity$$2$$, $severityStr_summary$$4$$, $severityLevel$$, $detail$$7_message$$29_messageObj$$;
    $j$$10_maxSeverity$$2$$ = this.$GetMaxSeverity$();
    var $messagesByTypes$$ = {};
    $messages$$9_messagesByType$$ = [];
    if (this.$HasMessages$()) {
      $messages$$9_messagesByType$$ = this.$GetMessages$();
      for ($i$$81$$ = 0;$i$$81$$ < $messages$$9_messagesByType$$.length;$i$$81$$++) {
        $detail$$7_message$$29_messageObj$$ = $messages$$9_messagesByType$$[$i$$81$$], $detail$$7_message$$29_messageObj$$ = $detail$$7_message$$29_messageObj$$ instanceof $oj$$4$$.$Message$ ? $detail$$7_message$$29_messageObj$$ : new $oj$$4$$.$Message$($detail$$7_message$$29_messageObj$$.summary, $detail$$7_message$$29_messageObj$$.detail, $detail$$7_message$$29_messageObj$$.severity), $severityLevel$$ = $oj$$4$$.$Message$.$getSeverityLevel$($detail$$7_message$$29_messageObj$$.severity), $messagesByTypes$$[$severityLevel$$] || 
        ($messagesByTypes$$[$severityLevel$$] = []), $messagesByTypes$$[$severityLevel$$].push($detail$$7_message$$29_messageObj$$);
      }
      for ($i$$81$$ = $j$$10_maxSeverity$$2$$;$i$$81$$ >= $oj$$4$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION;$i$$81$$--) {
        for ($messages$$9_messagesByType$$ = $messagesByTypes$$[$i$$81$$] || [], $j$$10_maxSeverity$$2$$ = 0;$j$$10_maxSeverity$$2$$ < $messages$$9_messagesByType$$.length;$j$$10_maxSeverity$$2$$++) {
          $detail$$7_message$$29_messageObj$$ = $messages$$9_messagesByType$$[$j$$10_maxSeverity$$2$$], $oj$$4$$.$Assert$.$assertPrototype$($detail$$7_message$$29_messageObj$$, $oj$$4$$.$Message$), $severityLevel$$ = $oj$$4$$.$Message$.$getSeverityLevel$($detail$$7_message$$29_messageObj$$.severity), $severityStr_summary$$4$$ = this.$_getSeverityTranslatedString$($severityLevel$$), $severityStr_summary$$4$$ = $detail$$7_message$$29_messageObj$$.summary || $severityStr_summary$$4$$, $detail$$7_message$$29_messageObj$$ = 
          $detail$$7_message$$29_messageObj$$.detail || "", $content$$9$$ = $content$$9$$.concat(this.$_buildMessageHtml$($document$$2$$, $severityStr_summary$$4$$, $detail$$7_message$$29_messageObj$$, $severityLevel$$));
        }
      }
    }
    return $content$$9$$;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_buildMessageHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_buildMessageHtml$$($$msgDetail_document$$3$$, $summary$$5$$, $detail$$8$$, $$msgContent_severityLevel$$1$$) {
    var $$msgDom$$, $$msgIcon_$msgSummary$$, $severityStr$$1$$ = this.$_getSeverityTranslatedString$($$msgContent_severityLevel$$1$$);
    $$msgDom$$ = $$$$4$$($$msgDetail_document$$3$$.createElement("div"));
    $$msgDom$$.addClass($oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE$);
    $$msgIcon_$msgSummary$$ = $$$$4$$($$msgDetail_document$$3$$.createElement("span"));
    $$msgIcon_$msgSummary$$.addClass(this.$_getSeverityIconSelector$($$msgContent_severityLevel$$1$$)).attr("title", $severityStr$$1$$).attr("role", "img");
    $$msgDom$$.append($$msgIcon_$msgSummary$$);
    $$msgContent_severityLevel$$1$$ = $$$$4$$($$msgDetail_document$$3$$.createElement("span"));
    $$msgContent_severityLevel$$1$$.addClass($oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_CONTENT$);
    $$msgIcon_$msgSummary$$ = $$$$4$$($$msgDetail_document$$3$$.createElement("div"));
    $$msgIcon_$msgSummary$$.addClass($oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_SUMMARY$).text($summary$$5$$);
    $$msgContent_severityLevel$$1$$.append($$msgIcon_$msgSummary$$);
    $detail$$8$$ && ($detail$$8$$ = this.$_getTextDom$($$msgDetail_document$$3$$, $detail$$8$$, !0), $$msgDetail_document$$3$$ = $$$$4$$($$msgDetail_document$$3$$.createElement("div")), $$msgDetail_document$$3$$.addClass($oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_DETAIL$).append($detail$$8$$), $$msgContent_severityLevel$$1$$.append($$msgDetail_document$$3$$));
    $$msgDom$$.append($$msgContent_severityLevel$$1$$);
    return $$msgDom$$ ? $$msgDom$$.get(0).outerHTML : "";
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_buildHintsHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_buildHintsHtml$$($document$$4$$) {
    var $hint$$2_hints$$3$$ = [], $i$$82$$, $hintsHtml$$ = "";
    this.$ShowConverterHint$() && ($hint$$2_hints$$3$$ = this.$GetConverterHint$(), $hint$$2_hints$$3$$ = $hint$$2_hints$$3$$.length ? $hint$$2_hints$$3$$[0] : "", $hintsHtml$$ += this.$_buildHintHtml$($document$$4$$, $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT_CONVERTER$, $hint$$2_hints$$3$$));
    if (this.$ShowValidatorHint$()) {
      for ($hint$$2_hints$$3$$ = this.$GetValidatorHints$(), $i$$82$$ = 0;$i$$82$$ < $hint$$2_hints$$3$$.length;$i$$82$$++) {
        $hintsHtml$$ += this.$_buildHintHtml$($document$$4$$, $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT_VALIDATOR$, $hint$$2_hints$$3$$[$i$$82$$]);
      }
    }
    this.$ShowTitle$() && ($hintsHtml$$ += this.$_buildHintHtml$($document$$4$$, $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT_TITLE$, this.$GetTitle$(), !0));
    return $hintsHtml$$ ? "\x3cdiv class\x3d'oj-form-control-hints'\x3e" + $hintsHtml$$ + "\x3c/div\x3e" : "";
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_buildHintHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_buildHintHtml$$($document$$5$$, $selector$$14$$, $hintText$$, $htmlAllowed$$) {
    var $jTitleDom$$, $classes$$ = $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT$;
    $hintText$$ && ($jTitleDom$$ = $$$$4$$($document$$5$$.createElement("div")), $jTitleDom$$.addClass($classes$$ + (" " + $selector$$14$$)), $jTitleDom$$.append(this.$_getTextDom$($document$$5$$, $hintText$$, $htmlAllowed$$)));
    return $jTitleDom$$ ? $jTitleDom$$.get(0).outerHTML : "";
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_getTextDom$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_getTextDom$$($document$$6$$, $value$$73$$, $htmlAllowed$$1$$) {
    var $textDom$$ = null;
    $htmlAllowed$$1$$ && $oj$$4$$.$DomUtils$.$isHTMLContent$($value$$73$$) ? $textDom$$ = $oj$$4$$.$DomUtils$.$cleanHtml$($value$$73$$.substring(6, $value$$73$$.length - 7)) : $oj$$4$$.$StringUtils$.$isString$($value$$73$$) && ($textDom$$ = $document$$6$$.createElement("span"), $textDom$$.textContent = $value$$73$$);
    return $textDom$$;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_getSeparatorHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_getSeparatorHtml$$($document$$7_jSeparatorDom$$) {
    return($document$$7_jSeparatorDom$$ = $$$$4$$($document$$7_jSeparatorDom$$.createElement("hr"))) ? $document$$7_jSeparatorDom$$.get(0).outerHTML : "";
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_getSeverityTranslatedString$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_getSeverityTranslatedString$$($severity$$5$$) {
    var $sevTypeStr$$;
    switch($severity$$5$$) {
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.FATAL:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.fatal");
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.ERROR:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.error");
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.WARNING:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.warning");
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.INFO:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.info");
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.confirmation");
    }
    return $sevTypeStr$$;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_getSeverityIconSelector$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_getSeverityIconSelector$$($severity$$6$$) {
    var $sevIconStr$$;
    switch($severity$$6$$) {
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.FATAL:
        $sevIconStr$$ = $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_ERROR_ICON$;
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.ERROR:
        $sevIconStr$$ = $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_ERROR_ICON$;
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.WARNING:
        $sevIconStr$$ = $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_WARNING_ICON$;
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.INFO:
        $sevIconStr$$ = $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_INFO_ICON$;
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION:
        $sevIconStr$$ = $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_MESSAGE_CONFIRMATION_ICON$;
    }
    return $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULT_STATUS_ICON_SELECTORS$ + $sevIconStr$$;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_isPopupInitialized$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_isPopupInitialized$$() {
    return this.$$messagingContentRoot$ ? this.$$messagingContentRoot$.is(":oj-popup") : !1;
  };
  var $_sValidationContext$$ = {$COMPONENT_CREATE$:1, $CONVERTER_OPTION_CHANGE$:2, $DISABLED_OPTION_CHANGE$:3, $READONLY_OPTION_CHANGE$:4, $REFRESH_METHOD$:5, $REQUIRED_OPTION_CHANGE$:6, $RESET_METHOD$:7, $USER_ACTION$:8, $VALIDATE_METHOD$:9, $VALIDATORS_OPTION_CHANGE$:10, $VALUE_OPTION_CHANGE$:11}, $_sConverterOptionOptions$$ = {$doNotClearMessages$:!0, $validationContext$:$_sValidationContext$$.$CONVERTER_OPTION_CHANGE$}, $_sDisabledOptionOptions$$ = {$doNotClearMessages$:!0, $validationContext$:$_sValidationContext$$.$DISABLED_OPTION_CHANGE$}, 
  $_sRequiredOptionOptions$$ = {$doNotClearMessages$:!0, $validationContext$:$_sValidationContext$$.$REQUIRED_OPTION_CHANGE$}, $_sReadOnlyOptionOptions$$ = {$doNotClearMessages$:!0, $validationContext$:$_sValidationContext$$.$READONLY_OPTION_CHANGE$}, $_sRefreshMethodOptions$$ = {$doNotClearMessages$:!0, $validationContext$:$_sValidationContext$$.$REFRESH_METHOD$}, $_sValidatorsOptionOptions$$ = {$doNotClearMessages$:!0, $validationContext$:$_sValidationContext$$.$VALIDATORS_OPTION_CHANGE$};
  $oj$$4$$.$__registerWidget$("oj.editableValue", $$$$4$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{disabled:!1, displayOptions:void 0, help:{definition:void 0, source:void 0}, messagesCustom:void 0, messagesHidden:void 0, messagesShown:void 0, required:void 0, title:void 0, validators:void 0, value:void 0, optionChange:void 0}, getNodeBySubId:function($locator$$2$$) {
    return this._super($locator$$2$$);
  }, isValid:function() {
    return void 0 === this.$_valid$ ? !0 : this.$_valid$;
  }, refresh:function() {
    this._super();
    this.$_doRefresh$(!0);
  }, reset:function() {
    this.$_clearAllMessages$();
    this.$_runDeferredValidation$(this.$_VALIDATION_CONTEXT$.$RESET_METHOD$);
    this.$_refreshComponentDisplayValue$(this.options.value, !0);
  }, showMessages:function() {
    var $msgs$$ = this.options.messagesHidden, $msg$$4$$, $mutated$$ = !1, $i$$83$$, $clonedMsgs$$ = [];
    for ($i$$83$$ = 0;$i$$83$$ < $msgs$$.length;$i$$83$$++) {
      $mutated$$ = !0, $msg$$4$$ = $msgs$$[$i$$83$$], $msg$$4$$ instanceof $oj$$4$$.$ComponentMessage$ && $msg$$4$$.$_forceDisplayToShown$(), $clonedMsgs$$.push($msg$$4$$.clone());
    }
    $mutated$$ && (this.$_clearMessagesHidden$(), this.$_updateMessagesShownOption$($clonedMsgs$$));
  }, validate:function() {
    return this.$_SetValue$(this.$_GetDisplayValue$(), null, this.$_VALIDATE_METHOD_OPTIONS$);
  }, $_VALIDATION_MODE$:{$FULL$:1, $VALIDATORS_ONLY$:2, $REQUIRED_VALIDATOR_ONLY$:3}, $_VALIDATION_CONTEXT$:$_sValidationContext$$, $_VALIDATE_METHOD_OPTIONS$:{$doValueChangeCheck$:!1, $validationContext$:$_sValidationContext$$.$VALIDATE_METHOD$}, _InitOptions:function($originalDefaults$$3$$, $constructorOptions$$3$$) {
    this._super($originalDefaults$$3$$, $constructorOptions$$3$$);
    this.$_optionsInitializedFromDom$ = [];
  }, _ComponentCreate:function() {
    var $node$$13$$ = this.element, $savedAttributes$$1$$ = this.$_GetSavedAttributes$($node$$13$$);
    this._super();
    this.options.messagesCustom = this.options.messagesCustom || [];
    this.options.messagesHidden = [];
    this.options.messagesShown = 0 < this.options.messagesCustom.length ? this.$_cloneMessagesBeforeSet$(this.options.messagesCustom) : [];
    "boolean" === typeof this.options.disabled && $node$$13$$.prop("disabled", this.options.disabled);
    this.$_HasPlaceholderSet$() && (this._SetPlaceholder(this.options.placeholder), this.$_customPlaceholderSet$ = !0);
    $$$$4$$.each(["required", "title"], function($index$$77$$, $value$$74$$) {
      $value$$74$$ in $savedAttributes$$1$$ && $node$$13$$.removeAttr($value$$74$$);
    });
  }, $_AfterCreate$:function() {
    this._super();
    this.$_createOjLabel$();
    this.$_doRefresh$(!1);
    this.$_initComponentMessaging$();
    this.$_applyAfterCreateOptionChanges$();
    this.$_runDeferredValidationAfterCreate$();
    this.widget().addClass("oj-form-control");
  }, $_AfterSetOption$:function($option$$, $previous$$, $flags$$7$$) {
    switch($option$$) {
      case "disabled":
        this.$_AfterSetOptionDisabledReadOnly$($option$$, $_sDisabledOptionOptions$$);
        break;
      case "converter":
        this.$_AfterSetOptionConverter$($option$$);
        break;
      case "displayOptions":
        this.$_initComponentMessaging$();
        break;
      case "help":
        this.$_Refresh$($option$$, this.options[$option$$]);
        break;
      case "messagesCustom":
        this.$_messagesCustomOptionChanged$($previous$$, $flags$$7$$);
        break;
      case "placeholder":
        this.$_placeholderOptionChanged$($flags$$7$$);
        break;
      case "readOnly":
        this.$_AfterSetOptionDisabledReadOnly$($option$$, $_sReadOnlyOptionOptions$$);
        break;
      case "required":
        this.$_AfterSetOptionRequired$($option$$);
        break;
      case "title":
        this.$_titleOptionChanged$();
        break;
      case "translations":
        this.refresh();
        break;
      case "value":
        this.$_AfterSetOptionValue$($option$$, $previous$$, $flags$$7$$);
        break;
      case "validators":
        this.$_AfterSetOptionValidators$($option$$);
    }
  }, $_AfterSetOptionConverter$:function($option$$1$$) {
    var $runFullValidation$$ = !1;
    this.$_ResetConverter$();
    this.$_hasInvalidMessagesShowing$() && ($runFullValidation$$ = !0);
    $runFullValidation$$ ? (this.$_clearComponentMessages$(), this.$_updateValue$($_sConverterOptionOptions$$)) : this.$_Refresh$($option$$1$$, this.options[$option$$1$$], !0);
  }, $_AfterSetOptionDisabledReadOnly$:function($option$$2$$, $validationOptions$$) {
    var $isEnabled$$ = !this.options[$option$$2$$];
    this.$_Refresh$($option$$2$$, this.options[$option$$2$$]);
    $isEnabled$$ && this.$_runMixedValidationAfterSetOption$($validationOptions$$);
  }, $_AfterSetOptionRequired$:function($option$$3$$) {
    this.$_Refresh$($option$$3$$, this.options[$option$$3$$]);
    this.$_runMixedValidationAfterSetOption$($_sRequiredOptionOptions$$);
  }, $_AfterSetOptionValue$:function($option$$4$$, $previous$$1$$, $flags$$8$$) {
    var $isUIValueChange$$ = !1, $doNotClearMessages$$;
    this.$_valueOptionChanged$($previous$$1$$, $flags$$8$$);
    $flags$$8$$ && ($isUIValueChange$$ = $flags$$8$$._oj_originalEvent ? !0 : !1, $doNotClearMessages$$ = $flags$$8$$._oj_doNotClearMessages || !1);
    $isUIValueChange$$ || ($doNotClearMessages$$ || this.$_clearAllMessages$(null), this.$_runDeferredValidation$(this.$_VALIDATION_CONTEXT$.$VALUE_OPTION_CHANGE$));
    this.$_Refresh$($option$$4$$, this.options[$option$$4$$], !0);
  }, $_AfterSetOptionValidators$:function() {
    var $runFullValidation$$1$$ = !1;
    this.$_ResetAllValidators$();
    this.$_hasInvalidMessagesShowing$() && ($runFullValidation$$1$$ = !0);
    $runFullValidation$$1$$ && (this.$_clearComponentMessages$(), this.$_updateValue$($_sValidatorsOptionOptions$$));
  }, $_CanSetValue$:function() {
    var $readOnly$$ = this.options.readOnly || !1;
    return this.options.disabled || $readOnly$$ ? !1 : !0;
  }, _destroy:function() {
    this.widget();
    this.$_clearAllMessages$(null, !0);
    this.$_getComponentMessaging$().$deactivate$();
    this.$$label$ && this.$$label$._ojLabel("destroy");
    this.$_RestoreAttributes$();
    return this._super();
  }, Focus:function() {
    this.$_GetContentElement$().focus();
    return!0;
  }, _setOption:function($name$$67$$, $value$$75$$, $flags$$9$$) {
    var $retVal$$4_skipSetOption$$, $previous$$2$$;
    $retVal$$4_skipSetOption$$ = !1;
    if ("string" === typeof $name$$67$$ && void 0 !== $value$$75$$) {
      switch($name$$67$$) {
        case "messagesCustom":
          $previous$$2$$ = this.options.messagesCustom || [];
          break;
        case "messagesHidden":
          $retVal$$4_skipSetOption$$ = !0;
          break;
        case "messagesShown":
          $retVal$$4_skipSetOption$$ = !0;
          break;
        case "value":
          $previous$$2$$ = this.options.value;
      }
    }
    if ($retVal$$4_skipSetOption$$) {
      return $oj$$4$$.$Logger$.error($name$$67$$ + " option cannot be set"), this;
    }
    $retVal$$4_skipSetOption$$ = this._superApply(arguments);
    this.$_AfterSetOption$($name$$67$$, $previous$$2$$, $flags$$9$$);
    return $retVal$$4_skipSetOption$$;
  }, $_GetContentElement$:function() {
    return this.element;
  }, $_GetLabelElement$:function() {
    var $ariaElement_id$$11_queryResult$$ = this.$_getAriaLabelledByElement$(this.element);
    if (null !== $ariaElement_id$$11_queryResult$$ && 0 !== $ariaElement_id$$11_queryResult$$.length) {
      return $ariaElement_id$$11_queryResult$$;
    }
    $ariaElement_id$$11_queryResult$$ = this.element.prop("id");
    if (void 0 !== $ariaElement_id$$11_queryResult$$ && ($ariaElement_id$$11_queryResult$$ = $$$$4$$("label[for\x3d'" + $ariaElement_id$$11_queryResult$$ + "']"), 0 !== $ariaElement_id$$11_queryResult$$.length)) {
      return $ariaElement_id$$11_queryResult$$;
    }
    $ariaElement_id$$11_queryResult$$ = this.element.closest("[aria-labelledby]");
    return 0 !== $ariaElement_id$$11_queryResult$$.length && ($ariaElement_id$$11_queryResult$$ = this.$_getAriaLabelledByElement$($ariaElement_id$$11_queryResult$$), null !== $ariaElement_id$$11_queryResult$$ && 0 !== $ariaElement_id$$11_queryResult$$.length) ? $ariaElement_id$$11_queryResult$$ : null;
  }, $_GetElementValue$:function() {
    return this.element.val();
  }, _GetMessagingLauncherElement:function() {
    return this.$_GetContentElement$();
  }, $_GetConverter$:function() {
    this.$_converter$ || (this.$_converter$ = $oj$$4$$.IntlConverterUtils.getConverterInstance(this.options.converter));
    return this.$_converter$ || null;
  }, $_GetImplicitValidators$:function() {
    this.$_implicitValidators$ || (this.$_implicitValidators$ = {});
    return this.$_implicitValidators$;
  }, $_GetDisplayValue$:function() {
    return this.$_GetContentElement$().val();
  }, $_GetAllValidators$:function() {
    if (!this.$_allValidators$) {
      var $allValidators$$ = [], $validatorsOption$$ = this.options.validators, $vOptions_valType_validator$$, $isValidatorInstance$$ = !0, $implicitValidatorMap_vType$$ = this.$_GetImplicitValidators$(), $implicitValidators_normalizedValidators$$ = [], $idx_vTypeStr$$, $i$$84_keys$$6$$;
      $i$$84_keys$$6$$ = Object.keys($implicitValidatorMap_vType$$);
      if (0 < $i$$84_keys$$6$$.length) {
        for ($idx_vTypeStr$$ in $i$$84_keys$$6$$) {
          $vOptions_valType_validator$$ = $i$$84_keys$$6$$[$idx_vTypeStr$$], $implicitValidators_normalizedValidators$$.push($implicitValidatorMap_vType$$[$vOptions_valType_validator$$]);
        }
        $allValidators$$ = $allValidators$$.concat($implicitValidators_normalizedValidators$$);
      }
      if ($validatorsOption$$) {
        $implicitValidators_normalizedValidators$$ = [];
        for ($i$$84_keys$$6$$ = 0;$i$$84_keys$$6$$ < $validatorsOption$$.length;$i$$84_keys$$6$$++) {
          $vOptions_valType_validator$$ = $validatorsOption$$[$i$$84_keys$$6$$], "object" === typeof $vOptions_valType_validator$$ ? ($vOptions_valType_validator$$.validate && "function" === typeof $vOptions_valType_validator$$.validate || ($isValidatorInstance$$ = !1), $isValidatorInstance$$ || ($idx_vTypeStr$$ = $vOptions_valType_validator$$.type) && "string" === typeof $idx_vTypeStr$$ && (($implicitValidatorMap_vType$$ = $oj$$4$$.$Validation$.$validatorFactory$($idx_vTypeStr$$)) ? ($vOptions_valType_validator$$ = 
          $oj$$4$$.$CollectionUtils$.$copyInto$({}, $vOptions_valType_validator$$.options) || {}, $vOptions_valType_validator$$.converter = $vOptions_valType_validator$$.converter || this.$_GetConverter$(), $vOptions_valType_validator$$.label = $vOptions_valType_validator$$.label || this.$_getLabelText$(), $vOptions_valType_validator$$ = $implicitValidatorMap_vType$$.createValidator($vOptions_valType_validator$$)) : $oj$$4$$.$Logger$.error("Unable to locate a validatorFactory for the requested type: " + 
          $idx_vTypeStr$$)), $implicitValidators_normalizedValidators$$.push($vOptions_valType_validator$$)) : $oj$$4$$.$Logger$.error("Unable to parse the validator provided:" + $vOptions_valType_validator$$);
        }
        $allValidators$$ = $allValidators$$.concat($implicitValidators_normalizedValidators$$);
      }
      this.$_allValidators$ = $allValidators$$;
    }
    return this.$_allValidators$ || [];
  }, $_ResetAllValidators$:function() {
    this.$_allValidators$ && (this.$_allValidators$.length = 0);
    this.$_allValidators$ = null;
    this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDATOR_HINTS$));
  }, $_ResetConverter$:function() {
    this.$_converter$ = null;
    this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$CONVERTER_HINT$));
  }, $_InitializedOptionFromDom$:function($option$$5$$, $previousValue$$) {
    this.$_optionsInitializedFromDom$.push({option:$option$$5$$, previousValue:$previousValue$$});
  }, $_IsRequired$:function() {
    return this.options.required;
  }, $_HandleChangeEvent$:function($event$$25$$) {
    var $submittedValue$$ = this.$_GetDisplayValue$();
    this.$_SetValue$($submittedValue$$, $event$$25$$);
  }, $_Refresh$:function($helpDef_name$$68$$, $helpSource_value$$77$$, $forceDisplayValueRefresh_labelHelpIconWrapper$$) {
    switch($helpDef_name$$68$$) {
      case "converter":
        $helpSource_value$$77$$ = this.options.value;
        this.$_refreshComponentDisplayValue$($helpSource_value$$77$$, $forceDisplayValueRefresh_labelHelpIconWrapper$$);
        break;
      case "disabled":
        this.$_refreshTheming$("disabled", this.options.disabled);
        break;
      case "help":
        $helpDef_name$$68$$ = this.options.help.definition;
        $helpSource_value$$77$$ = this.options.help.source;
        $forceDisplayValueRefresh_labelHelpIconWrapper$$ = this.$_ariaDescribedByHelpIconWrapper$($helpSource_value$$77$$);
        this.$$label$ && (this.$$label$._ojLabel("option", "describedById", $forceDisplayValueRefresh_labelHelpIconWrapper$$), this.$$label$._ojLabel("option", "help", {definition:$helpDef_name$$68$$, source:$helpSource_value$$77$$}));
        break;
      case "required":
        this.$_refreshTheming$("required", this.$_IsRequired$());
        this.$_RefreshAriaRequired$($helpSource_value$$77$$);
        this.$$label$ && this.$$label$._ojLabel("option", "required", $helpSource_value$$77$$);
        break;
      case "value":
        this.$_refreshComponentDisplayValue$($helpSource_value$$77$$, $forceDisplayValueRefresh_labelHelpIconWrapper$$);
    }
  }, $_RefreshAriaRequired$:function($value$$78$$) {
    var $contentNode$$ = this.$_GetContentElement$();
    $value$$78$$ && $contentNode$$ ? $contentNode$$.attr("aria-required", $value$$78$$) : $contentNode$$.removeAttr("aria-required");
  }, $_ResetComponentState$:function() {
    this.$_converter$ = this.$_implicitReqValidator$ = null;
    this.$_ResetAllValidators$();
  }, $_SetDisplayValue$:function($displayValue$$) {
    this.$_GetContentElement$().val($displayValue$$);
  }, _SetPlaceholder:function($value$$79$$) {
    this.$_GetContentElement$().attr("placeholder", $value$$79$$);
  }, $_SetPlaceholderOption$:function($value$$80$$) {
    this.options.placeholder = $value$$80$$;
  }, $_HasPlaceholderSet$:function() {
    return this.options.placeholder;
  }, $_ClearPlaceholder$:function() {
    this.$_SetPlaceholderOption$("");
    this._SetPlaceholder("");
  }, $_SetValue$:function($newValue_parsed$$, $event$$26$$, $options$$112$$) {
    var $doValueChangeCheck$$ = $options$$112$$ && "boolean" === typeof $options$$112$$.$doValueChangeCheck$ ? $options$$112$$.$doValueChangeCheck$ : !0;
    if (void 0 === $newValue_parsed$$) {
      return $oj$$4$$.$Logger$.warn("Attempt to set a value of undefined"), !1;
    }
    if ($doValueChangeCheck$$ && $newValue_parsed$$ === this.$_oj_lastElementValue$) {
      $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("Validation skipped and value option not updated as submitted value '" + $newValue_parsed$$.toString ? $newValue_parsed$$.toString() : $newValue_parsed$$ + " same as previous.");
    } else {
      if ($newValue_parsed$$ = this.$_Validate$($newValue_parsed$$, $event$$26$$, $options$$112$$), void 0 !== $newValue_parsed$$ && this.isValid()) {
        return this.$_updateValueOption$($newValue_parsed$$, $event$$26$$, $options$$112$$ && $options$$112$$.$validationContext$), !0;
      }
    }
    return!1;
  }, $_Validate$:function($newValue$$1$$, $event$$27$$, $doNotClearMessages$$1_options$$113$$) {
    var $mode$$11$$ = $doNotClearMessages$$1_options$$113$$ && $doNotClearMessages$$1_options$$113$$.$validationMode$ ? $doNotClearMessages$$1_options$$113$$.$validationMode$ : this.$_VALIDATION_MODE$.$FULL$, $context$$31$$ = $doNotClearMessages$$1_options$$113$$ && $doNotClearMessages$$1_options$$113$$.$validationContext$ ? $doNotClearMessages$$1_options$$113$$.$validationContext$ : this.$_VALIDATION_CONTEXT$.$USER_ACTION$;
    $doNotClearMessages$$1_options$$113$$ = $doNotClearMessages$$1_options$$113$$ && $doNotClearMessages$$1_options$$113$$.$doNotClearMessages$ || !1;
    if (void 0 === $newValue$$1$$) {
      $oj$$4$$.$Logger$.warn("Attempt to set a value of undefined");
    } else {
      if (this.$_CanSetValue$()) {
        $doNotClearMessages$$1_options$$113$$ || this.$_clearAllMessages$($event$$27$$);
        this.$_setLastSubmittedValue$($newValue$$1$$);
        try {
          return this.$_runNormalValidation$($newValue$$1$$, $mode$$11$$, $context$$31$$, $event$$27$$);
        } catch ($e$$27$$) {
        }
      } else {
        $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("Validation skipped and value option not set as component state does not  allow setting value. For example if the component is readonly or disabled.");
      }
    }
  }, $_TriggerOptionChange$:function($option$$6$$, $dataHash_previousValue$$1$$, $shouldWriteback_writebackVal$$, $originalEvent$$) {
    $oj$$4$$.$Assert$.$assertNonEmptyString$($option$$6$$, "");
    $shouldWriteback_writebackVal$$ = $shouldWriteback_writebackVal$$ ? {writeback:"shouldWrite"} : {writeback:"shouldNotWrite"};
    $dataHash_previousValue$$1$$ = {option:$option$$6$$, component:$oj$$4$$.Components.$getWidgetConstructor$(this.element), previousValue:$dataHash_previousValue$$1$$, value:this.options[$option$$6$$], optionMetadata:$shouldWriteback_writebackVal$$};
    switch($option$$6$$) {
      case "messagesShown":
      ;
      case "messagesHidden":
      ;
      case "messagesCustom":
        this._trigger("optionChange", $originalEvent$$ || null, $dataHash_previousValue$$1$$);
        break;
      case "value":
        this._trigger("optionChange", $originalEvent$$ || null, $dataHash_previousValue$$1$$);
    }
  }, $_ValueEquals$:function($value1$$6$$, $value2$$6$$) {
    return $oj$$4$$.$Object$.$compareValues$($value1$$6$$, $value2$$6$$);
  }, _GetDefaultStyleClass:function() {
    $oj$$4$$.$Assert$.$failedInAbstractFunction$();
    return "";
  }, $_MESSAGING_CONTENT_UPDATE_TYPE$:{$ALL$:1, $VALIDITY_STATE$:2, $CONVERTER_HINT$:3, $VALIDATOR_HINTS$:4, $TITLE$:5}, $_OPTION_TO_CSS_MAPPING$:{disabled:"oj-disabled", required:"oj-required"}, $_applyAfterCreateOptionChanges$:function() {
    var $i$$85$$, $item$$1$$;
    for ($i$$85$$ = 0;$i$$85$$ < this.$_optionsInitializedFromDom$.length;$i$$85$$++) {
      $item$$1$$ = this.$_optionsInitializedFromDom$[$i$$85$$], this.$_TriggerOptionChange$($item$$1$$.option, $item$$1$$.previousValue, !0);
    }
    this.$_optionsInitializedFromDom$ = null;
  }, $_clearAllMessages$:function($event$$28$$, $doNotSetOption$$) {
    $doNotSetOption$$ ? (this.options.messagesHidden = [], this.options.messagesShown = [], this.options.messagesCustom = []) : (this.$_clearMessagesHidden$($event$$28$$), this.$_clearMessagesShown$($event$$28$$), this.$_clearMessagesCustom$($event$$28$$));
  }, $_clearComponentMessages$:function() {
    var $shownMsgs$$ = this.options.messagesShown, $beforeLen$$ = $shownMsgs$$.length, $msg$$5$$, $flags$$10$$ = {};
    this.$_clearMessagesHidden$();
    for (var $i$$86$$ = $beforeLen$$ - 1;0 <= $i$$86$$;$i$$86$$--) {
      $msg$$5$$ = $shownMsgs$$[$i$$86$$], $msg$$5$$ instanceof $oj$$4$$.$ComponentMessage$ && $shownMsgs$$.splice($i$$86$$, 1);
    }
    $flags$$10$$.changed = this.options.messagesShown.length !== $beforeLen$$ ? !0 : !1;
    this.$_messagesChanged$("messagesShown", this.options.messagesShown, $flags$$10$$);
  }, $_clearMessagesHidden$:function($event$$29$$) {
    var $flags$$11$$ = {};
    $flags$$11$$.changed = 0 < this.options.messagesHidden.length ? !0 : !1;
    $event$$29$$ && ($flags$$11$$._oj_originalEvent = $event$$29$$);
    this.options.messagesHidden = [];
    this.$_messagesHiddenOptionChanged$(this.options.messagesHidden, $flags$$11$$);
  }, $_clearMessagesShown$:function($event$$30$$) {
    var $flags$$12$$ = {};
    $flags$$12$$.changed = 0 < this.options.messagesShown.length ? !0 : !1;
    $event$$30$$ && ($flags$$12$$._oj_originalEvent = $event$$30$$);
    this.options.messagesShown = [];
    this.$_messagesShownOptionChanged$(this.options.messagesShown, $flags$$12$$);
  }, $_clearMessagesCustom$:function($event$$31$$) {
    var $msgsHash$$ = {}, $flags$$13$$ = {};
    $flags$$13$$.changed = 0 < this.options.messagesCustom.length ? !0 : !1;
    $msgsHash$$.messagesCustom = [];
    $event$$31$$ && ($flags$$13$$._oj_originalEvent = $event$$31$$);
    this.option($msgsHash$$, $flags$$13$$);
  }, $_cloneMessagesBeforeSet$:function($value$$81$$) {
    var $msg$$6_val$$20$$, $msgsClone$$ = [], $i$$87$$;
    if ($value$$81$$ && 0 < $value$$81$$.length) {
      for ($i$$87$$ = 0;$i$$87$$ < $value$$81$$.length;$i$$87$$++) {
        $msg$$6_val$$20$$ = $value$$81$$[$i$$87$$], $msg$$6_val$$20$$ instanceof $oj$$4$$.$Message$ ? $msgsClone$$.push($msg$$6_val$$20$$.clone()) : ($msg$$6_val$$20$$ = new $oj$$4$$.$Message$($msg$$6_val$$20$$.summary, $msg$$6_val$$20$$.detail, $msg$$6_val$$20$$.severity), $msg$$6_val$$20$$ = Object.freeze ? Object.freeze($msg$$6_val$$20$$) : $msg$$6_val$$20$$, $msgsClone$$.push($msg$$6_val$$20$$));
      }
    }
    return $msgsClone$$;
  }, $_createOjLabel$:function() {
    if (this.$$label$ = this.$_GetLabelElement$()) {
      var $helpDef$$1$$ = this.options.help.definition, $helpSource$$1$$ = this.options.help.source, $labelHelpIconWrapper$$1$$ = this.$_ariaDescribedByHelpIconWrapper$($helpSource$$1$$);
      this.$$label$._ojLabel({rootAttributes:{"class":this._GetDefaultStyleClass() + "-label"}, describedById:$labelHelpIconWrapper$$1$$, required:this.options.required, help:{definition:$helpDef$$1$$, source:$helpSource$$1$$}});
    }
  }, $_doRefresh$:function($fullRefresh$$) {
    var $runFullValidation$$2$$ = !1;
    $fullRefresh$$ ? (this.$$label$ && this.$$label$._ojLabel("refresh"), this.$_ResetComponentState$(), this.$_initComponentMessaging$(), this.$_hasInvalidMessagesShowing$() && ($runFullValidation$$2$$ = !0), this.$_clearComponentMessages$(), $runFullValidation$$2$$ ? this.$_updateValue$($_sRefreshMethodOptions$$) : (this.$_IsRequired$() && this.$_runDeferredValidation$($_sRefreshMethodOptions$$.$validationContext$), this.$_Refresh$("value", this.options.value, !0))) : (this.$_Refresh$("value", 
    this.options.value), this.$_Refresh$("required", this.options.required));
    this.$_Refresh$("disabled", this.options.disabled);
  }, $_getLastModelValue$:function() {
    return this.$_oj_lastModelValue$;
  }, $_getLastDisplayValue$:function() {
    return this.$_oj_lastElementValue$;
  }, $_getAriaLabelledByElement$:function($ariaId_elem$$17$$) {
    $ariaId_elem$$17$$ = $ariaId_elem$$17$$.attr("aria-labelledby");
    return void 0 !== $ariaId_elem$$17$$ ? $$$$4$$("label[id\x3d'" + $ariaId_elem$$17$$ + "']") : null;
  }, $_ariaDescribedByHelpIconWrapper$:function($helpSource$$2$$) {
    this.element.uniqueId();
    var $labelHelpIconWrapperId$$ = this.element.prop("id") + "Icons";
    $helpSource$$2$$ && this.$_GetContentElement$().each(function() {
      var $ariaDescBy$$ = $$$$4$$(this).attr("aria-describedby");
      $ariaDescBy$$ ? $$$$4$$(this).attr("aria-describedby", $ariaDescBy$$ + " " + $labelHelpIconWrapperId$$) : $$$$4$$(this).attr("aria-describedby", $labelHelpIconWrapperId$$);
    });
    return $labelHelpIconWrapperId$$;
  }, $_getMessages$:function() {
    return this.options.messagesShown.concat(this.options.messagesHidden);
  }, $_getLabelText$:function() {
    if (this.$$label$) {
      return this.$$label$.text();
    }
  }, $_getValidityState$:function() {
    this.$_validityState$ || (this.$_validityState$ = new $oj$$4$$.$ComponentValidity$(this.isValid(), this.$_getMessages$()));
    return this.$_validityState$;
  }, $_hasInvalidMessages$:function() {
    return!$oj$$4$$.$Message$.isValid(this.$_getMessages$());
  }, $_hasInvalidMessagesShowing$:function() {
    return!this.isValid() && 0 < this.options.messagesShown.length;
  }, $_hasInvalidComponentMessagesShowing$:function() {
    for (var $shown$$ = this.options.messagesShown, $msg$$7$$, $compMsgs$$, $i$$88$$ = 0;$i$$88$$ < $shown$$.length;$i$$88$$++) {
      $msg$$7$$ = $shown$$[$i$$88$$], $msg$$7$$ instanceof $oj$$4$$.$ComponentMessage$ && $msg$$7$$.$_isMessageAddedByComponent$() && ($compMsgs$$ = $compMsgs$$ || [], $compMsgs$$.push($msg$$7$$));
    }
    return void 0 === $compMsgs$$ ? !1 : !$oj$$4$$.$Message$.isValid($compMsgs$$);
  }, $_initComponentMessaging$:function() {
    var $compMessaging$$ = this.$_getComponentMessaging$(), $messagingLauncher$$ = this._GetMessagingLauncherElement(), $messagingContent$$ = this.$_getMessagingContent$(this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$);
    this.$_customPlaceholderSet$ || this.$_ClearPlaceholder$();
    $compMessaging$$.$activate$($messagingLauncher$$, $messagingContent$$);
  }, $_messagesHiddenOptionChanged$:function($previous$$3$$, $flags$$14$$) {
    this.$_messagesChanged$("messagesHidden", $previous$$3$$, $flags$$14$$);
  }, $_messagesShownOptionChanged$:function($previous$$4$$, $flags$$15$$) {
    this.$_messagesChanged$("messagesShown", $previous$$4$$, $flags$$15$$);
  }, $_messagesCustomOptionChanged$:function($previous$$5$$, $flags$$16$$) {
    var $customMsgs$$ = this.options.messagesCustom, $previousShown$$ = this.options.messagesShown, $msg$$8$$, $compShownMsgs$$ = [], $i$$89$$;
    for ($i$$89$$ = 0;$i$$89$$ < $previousShown$$.length;$i$$89$$++) {
      $msg$$8$$ = $previousShown$$[$i$$89$$], $msg$$8$$ instanceof $oj$$4$$.$ComponentMessage$ && $msg$$8$$.$_isMessageAddedByComponent$() && $compShownMsgs$$.push($msg$$8$$);
    }
    this.options.messagesShown = $compShownMsgs$$;
    for ($i$$89$$ = 0;$i$$89$$ < $customMsgs$$.length;$i$$89$$++) {
      this.options.messagesShown.push($customMsgs$$[$i$$89$$]);
    }
    this.$_messagesChanged$("messagesCustom", $previous$$5$$, $flags$$16$$);
    this.$_messagesChanged$("messagesShown", $previousShown$$, $flags$$16$$);
  }, $_messagesChanged$:function($option$$7$$, $previous$$6$$, $flags$$17$$) {
    var $shouldTriggerOptionChange$$ = !1, $msgs$$1$$ = this.options[$option$$7$$], $originalEvent$$1$$;
    $flags$$17$$ && ($shouldTriggerOptionChange$$ = $flags$$17$$.changed || !1, $originalEvent$$1$$ = $flags$$17$$._oj_originalEvent || null);
    this.$_updateValid$();
    this.$_getComponentMessaging$().update(this.$_getMessagingContent$());
    !$shouldTriggerOptionChange$$ && this.$_messagesEquals$($previous$$6$$, $msgs$$1$$) || this.$_TriggerOptionChange$($option$$7$$, $previous$$6$$, !1, $originalEvent$$1$$);
  }, $_placeholderOptionChanged$:function($flags$$18_refreshMessagingOptions$$) {
    $flags$$18_refreshMessagingOptions$$ = $flags$$18_refreshMessagingOptions$$ && $flags$$18_refreshMessagingOptions$$._oj_messaging_update ? !1 : !0;
    this._SetPlaceholder(this.options.placeholder);
    $flags$$18_refreshMessagingOptions$$ ? (this.$_customPlaceholderSet$ = !0, this.$_initComponentMessaging$()) : this.$_customPlaceholderSet$ = !1;
  }, $_setLastModelValue$:function($value$$83$$) {
    this.$_oj_lastModelValue$ = $value$$83$$;
  }, $_setLastSubmittedValue$:function($value$$84$$) {
    this.$_oj_lastElementValue$ = $value$$84$$;
  }, $_titleOptionChanged$:function() {
    this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$TITLE$));
  }, $_updateMessagesHiddenOption$:function($message$$30$$, $event$$32$$) {
    var $flags$$19$$ = {}, $len$$3$$, $i$$90$$;
    $oj$$4$$.$Assert$.$assertPrototype$($message$$30$$, $oj$$4$$.$Message$);
    if ("object" === typeof $message$$30$$ && Array.isArray($message$$30$$)) {
      for ($flags$$19$$.changed = !0, $len$$3$$ = $message$$30$$.length, $i$$90$$ = 0;$i$$90$$ < $len$$3$$;$i$$90$$++) {
        this.options.messagesHidden.push($message$$30$$[$i$$90$$]);
      }
    }
    $event$$32$$ && ($flags$$19$$._oj_originalEvent = $event$$32$$);
    this.$_messagesHiddenOptionChanged$(this.options.messagesHidden, $flags$$19$$);
  }, $_updateMessagesShownOption$:function($message$$31$$, $event$$33$$) {
    var $flags$$20$$ = {}, $len$$4$$, $i$$91$$;
    $oj$$4$$.$Assert$.$assertPrototype$($message$$31$$, $oj$$4$$.$Message$);
    if ("object" === typeof $message$$31$$ && Array.isArray($message$$31$$)) {
      for ($flags$$20$$.changed = !0, $len$$4$$ = $message$$31$$.length, $i$$91$$ = 0;$i$$91$$ < $len$$4$$;$i$$91$$++) {
        this.options.messagesShown.push($message$$31$$[$i$$91$$]);
      }
    }
    $event$$33$$ && ($flags$$20$$._oj_originalEvent = $event$$33$$);
    this.$_messagesShownOptionChanged$(this.options.messagesShown, $flags$$20$$);
  }, $_updateValueOption$:function($newValue$$2$$, $event$$34$$, $validationContext$$) {
    var $values$$7$$ = {}, $flags$$21$$ = {}, $shouldWriteback$$2$$ = !1;
    $values$$7$$.value = $newValue$$2$$;
    $event$$34$$ && ($flags$$21$$._oj_originalEvent = $event$$34$$);
    switch($validationContext$$) {
      case this.$_VALIDATION_CONTEXT$.$CONVERTER_OPTION_CHANGE$:
      ;
      case this.$_VALIDATION_CONTEXT$.$DISABLED_OPTION_CHANGE$:
      ;
      case this.$_VALIDATION_CONTEXT$.$READONLY_OPTION_CHANGE$:
      ;
      case this.$_VALIDATION_CONTEXT$.$REFRESH_METHOD$:
      ;
      case this.$_VALIDATION_CONTEXT$.$REQUIRED_OPTION_CHANGE$:
      ;
      case this.$_VALIDATION_CONTEXT$.$VALIDATE_METHOD$:
      ;
      case this.$_VALIDATION_CONTEXT$.$VALIDATORS_OPTION_CHANGE$:
        $shouldWriteback$$2$$ = !0, $flags$$21$$._oj_doNotClearMessages = !0;
    }
    $flags$$21$$.shouldWriteback = $shouldWriteback$$2$$;
    this.option($values$$7$$, $flags$$21$$);
  }, $_updateValid$:function() {
    var $hasMessages_msgs$$2$$ = this.$_getMessages$(), $hasMessages_msgs$$2$$ = $hasMessages_msgs$$2$$ && 0 !== $hasMessages_msgs$$2$$.length;
    this.$_valid$ = !0;
    $hasMessages_msgs$$2$$ && (this.$_valid$ = !this.$_hasInvalidMessages$());
  }, $_valueOptionChanged$:function($previous$$7$$, $flags$$22$$) {
    var $newValue$$3$$ = this.options.value, $shouldTriggerOptionChange$$1$$ = !1, $shouldWriteback$$3$$ = !1, $originalEvent$$2$$;
    $flags$$22$$ && ($shouldTriggerOptionChange$$1$$ = $flags$$22$$.changed || !1, $originalEvent$$2$$ = $flags$$22$$._oj_originalEvent || null, $shouldWriteback$$3$$ = $flags$$22$$.shouldWriteback || $originalEvent$$2$$ ? !0 : !1);
    !$shouldTriggerOptionChange$$1$$ && this.$_ValueEquals$($previous$$7$$, $newValue$$3$$) || this.$_TriggerOptionChange$("value", $previous$$7$$, $shouldWriteback$$3$$, $originalEvent$$2$$);
  }, $_formatValue$:function($value$$85$$) {
    var $formattedValue$$ = $value$$85$$, $converter$$ = this.$_GetConverter$();
    $converter$$ && "object" === typeof $converter$$ && ($converter$$.format && "function" === typeof $converter$$.format ? $formattedValue$$ = $converter$$.format($value$$85$$) : $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("converter does not support the format method."));
    return $formattedValue$$;
  }, $_getComponentMessaging$:function() {
    this.$_componentMessaging$ || (this.$_componentMessaging$ = new $oj$$4$$.$ComponentMessaging$(this));
    return this.$_componentMessaging$;
  }, $_getHintsForAllValidators$:function($allValidators$$1$$) {
    var $vHint_validator$$1$$, $validatorHints$$ = [];
    $vHint_validator$$1$$ = "";
    var $i$$92$$;
    this.$_IsRequired$() && ($vHint_validator$$1$$ = this.$_getImplicitRequiredValidator$(), $vHint_validator$$1$$.getHint && "function" === typeof $vHint_validator$$1$$.getHint && ($vHint_validator$$1$$ = $vHint_validator$$1$$.getHint()) && $validatorHints$$.push($vHint_validator$$1$$));
    for ($i$$92$$ = 0;$i$$92$$ < $allValidators$$1$$.length;$i$$92$$++) {
      $vHint_validator$$1$$ = $allValidators$$1$$[$i$$92$$], "object" === typeof $vHint_validator$$1$$ && $vHint_validator$$1$$.getHint && "function" === typeof $vHint_validator$$1$$.getHint && ($vHint_validator$$1$$ = $vHint_validator$$1$$.getHint()) && $validatorHints$$.push($vHint_validator$$1$$);
    }
    return $validatorHints$$;
  }, $_getImplicitRequiredValidator$:function() {
    var $reqTrans_vf$$;
    $reqTrans_vf$$ = {};
    var $reqValOptions$$;
    null == this.$_implicitReqValidator$ && ($reqTrans_vf$$ = this.options.translations ? this.options.translations.required || {} : {}, $reqValOptions$$ = {hint:$reqTrans_vf$$.hint || null, label:this.$_getLabelText$(), messageSummary:$reqTrans_vf$$.messageSummary || null, messageDetail:$reqTrans_vf$$.messageDetail || null}, this.$_implicitReqValidator$ = ($reqTrans_vf$$ = $oj$$4$$.$Validation$.$validatorFactory$($oj$$4$$.$ValidatorFactory$.VALIDATOR_TYPE_REQUIRED)) ? $reqTrans_vf$$.createValidator($reqValOptions$$) : 
    null);
    return this.$_implicitReqValidator$;
  }, $_getMessagingContent$:function($updateType$$) {
    var $messagingContent$$1$$ = {}, $allValidators$$2_converter$$1_converterHint$$1$$ = this.$_GetConverter$(), $messages$$10_validatorHints$$1$$ = [];
    $updateType$$ = $updateType$$ || this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDITY_STATE$;
    if ($updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDITY_STATE$) {
      $messages$$10_validatorHints$$1$$ = this.$_getMessages$(), this.$_getValidityState$().update(this.isValid(), $messages$$10_validatorHints$$1$$), $messagingContent$$1$$.validityState = this.$_getValidityState$();
    }
    ($updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$CONVERTER_HINT$) && $allValidators$$2_converter$$1_converterHint$$1$$ && "object" === typeof $allValidators$$2_converter$$1_converterHint$$1$$ && $allValidators$$2_converter$$1_converterHint$$1$$.getHint && "function" === typeof $allValidators$$2_converter$$1_converterHint$$1$$.getHint && ($allValidators$$2_converter$$1_converterHint$$1$$ = $allValidators$$2_converter$$1_converterHint$$1$$.getHint() || 
    "", $messagingContent$$1$$.converterHint = $allValidators$$2_converter$$1_converterHint$$1$$);
    if ($updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDATOR_HINTS$) {
      $allValidators$$2_converter$$1_converterHint$$1$$ = this.$_GetAllValidators$(), $messages$$10_validatorHints$$1$$ = this.$_getHintsForAllValidators$($allValidators$$2_converter$$1_converterHint$$1$$) || [], $messagingContent$$1$$.validatorHint = $messages$$10_validatorHints$$1$$;
    }
    if ($updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$TITLE$) {
      $messagingContent$$1$$.title = this.options.title || "";
    }
    return $messagingContent$$1$$;
  }, $_messagesEquals$:function($pm$$, $m$$10$$) {
    var $match$$ = -1, $pmo$$, $passed$$ = !0, $previousMsgs$$ = $$$$4$$.extend([], $pm$$), $msgs$$3$$ = $$$$4$$.extend([], $m$$10$$);
    if ($previousMsgs$$ === $msgs$$3$$) {
      return!0;
    }
    if (null == $previousMsgs$$ || null == $msgs$$3$$ || $previousMsgs$$.length !== $msgs$$3$$.length) {
      return!1;
    }
    $$$$4$$.each($previousMsgs$$, function($i$$93$$, $pMsg$$) {
      $pMsg$$ instanceof $oj$$4$$.$Message$ ? $pmo$$ = $pMsg$$ : ($pmo$$ = new $oj$$4$$.$Message$($pMsg$$.summary, $pMsg$$.detail, $pMsg$$.severity), $pmo$$ = Object.freeze ? Object.freeze($pmo$$) : $pmo$$);
      $match$$ = -1;
      $$$$4$$.each($msgs$$3$$, function($j$$11$$, $msg$$9$$) {
        $pmo$$.$equals$($msg$$9$$) && ($match$$ = $j$$11$$);
      });
      -1 < $match$$ ? $msgs$$3$$.splice($match$$, 1) : $passed$$ = !1;
    });
    return $passed$$;
  }, $_parseValue$:function($submittedValue$$1$$) {
    var $converter$$2$$ = this.$_GetConverter$(), $parsedValue$$ = $submittedValue$$1$$;
    $converter$$2$$ && "object" === typeof $converter$$2$$ && ($converter$$2$$.parse && "function" === typeof $converter$$2$$.parse ? $parsedValue$$ = $converter$$2$$.parse($submittedValue$$1$$) : $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("converter does not support the parse method."));
    return $parsedValue$$;
  }, $_addValidationError$:function($e$$28$$, $msgs$$4$$) {
    var $detail$$9_ojmessage$$, $summary$$6$$, $severity$$7$$;
    $e$$28$$ instanceof $oj$$4$$.$ConverterError$ || $e$$28$$ instanceof $oj$$4$$.$ValidatorError$ ? ($detail$$9_ojmessage$$ = $e$$28$$.$getMessage$(), $oj$$4$$.$Assert$.$assertPrototype$($detail$$9_ojmessage$$, $oj$$4$$.$Message$), $severity$$7$$ = $detail$$9_ojmessage$$.severity, $summary$$6$$ = $detail$$9_ojmessage$$.summary, $detail$$9_ojmessage$$ = $detail$$9_ojmessage$$.detail) : ($severity$$7$$ = $oj$$4$$.$Message$.$SEVERITY_LEVEL$.ERROR, $summary$$6$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.error"), 
    $detail$$9_ojmessage$$ = $e$$28$$.message || $oj$$4$$.$Translations$.$getTranslatedString$("oj-converter.detail"));
    $msgs$$4$$.push({summary:$summary$$6$$, detail:$detail$$9_ojmessage$$, severity:$severity$$7$$});
  }, $_processValidationErrors$:function($e$$29_msg$$10$$, $context$$32_i$$94$$, $display$$) {
    var $options$$114$$ = {}, $componentMsgs$$ = [], $msgs$$5$$ = $e$$29_msg$$10$$.$_messages$ || [];
    $options$$114$$.context = $context$$32_i$$94$$ || 0;
    $options$$114$$.display = $display$$ || $oj$$4$$.$ComponentMessage$.$DISPLAY$.$SHOWN$;
    0 === $msgs$$5$$.length && this.$_addValidationError$($e$$29_msg$$10$$, $msgs$$5$$);
    for ($context$$32_i$$94$$ = 0;$context$$32_i$$94$$ < $msgs$$5$$.length;$context$$32_i$$94$$++) {
      $e$$29_msg$$10$$ = $msgs$$5$$[$context$$32_i$$94$$], $componentMsgs$$.push(this.$_createComponentMessage$($e$$29_msg$$10$$.summary, $e$$29_msg$$10$$.detail, $e$$29_msg$$10$$.severity, $options$$114$$));
    }
    return $componentMsgs$$ || null;
  }, $_createComponentMessage$:function($cMsg_summary$$7$$, $detail$$10$$, $severity$$8$$, $options$$115$$) {
    $cMsg_summary$$7$$ = new $oj$$4$$.$ComponentMessage$($cMsg_summary$$7$$, $detail$$10$$, $severity$$8$$, $options$$115$$);
    return $cMsg_summary$$7$$ = Object.seal ? Object.seal($cMsg_summary$$7$$) : $cMsg_summary$$7$$;
  }, $_refreshComponentDisplayValue$:function($value$$86$$, $fullRefresh$$1$$) {
    var $modelValue$$ = $value$$86$$ || this.options.value, $lastModelValue$$;
    $lastModelValue$$ = this.$_oj_lastModelValue$;
    ($fullRefresh$$1$$ || $modelValue$$ !== $lastModelValue$$) && this.$_updateElementDisplayValue$($modelValue$$);
  }, $_refreshTheming$:function($option$$8$$, $value$$87$$) {
    -1 != Object.keys(this.$_OPTION_TO_CSS_MAPPING$).indexOf($option$$8$$) && this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$8$$], !!$value$$87$$);
  }, $_runDeferredValidation$:function($context$$33_newMsg$$) {
    if (this.$_CanSetValue$()) {
      try {
        this.$_validateValue$(this.options.value, this.$_VALIDATION_MODE$.$REQUIRED_VALIDATOR_ONLY$);
      } catch ($ve$$) {
        ($context$$33_newMsg$$ = this.$_processValidationErrors$($ve$$, $context$$33_newMsg$$, $oj$$4$$.$ComponentMessage$.$DISPLAY$.$HIDDEN$)) && this.$_updateMessagesHiddenOption$($context$$33_newMsg$$);
      }
    } else {
      $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("Deferred validation skipped as component is readonly or disabled.");
    }
  }, $_runDeferredValidationAfterCreate$:function() {
    this.$_runDeferredValidation$(this.$_VALIDATION_CONTEXT$.$COMPONENT_CREATE$);
    0 < this.options.messagesShown.length && this.$_messagesShownOptionChanged$([], {changed:!0});
  }, $_runNormalValidation$:function($newMsg$$1_value$$88$$, $mode$$12$$, $context$$34$$, $event$$35$$) {
    var $newValue$$5$$ = $newMsg$$1_value$$88$$;
    try {
      $mode$$12$$ === this.$_VALIDATION_MODE$.$FULL$ && ($newValue$$5$$ = this.$_parseValue$($newMsg$$1_value$$88$$)), this.$_validateValue$($newValue$$5$$, $mode$$12$$ === this.$_VALIDATION_MODE$.$REQUIRED_VALIDATOR_ONLY$);
    } catch ($ve$$1$$) {
      throw $newMsg$$1_value$$88$$ = this.$_processValidationErrors$($ve$$1$$, $context$$34$$), this.$_updateMessagesShownOption$($newMsg$$1_value$$88$$, $event$$35$$), $ve$$1$$;
    }
    return $newValue$$5$$;
  }, $_runMixedValidationAfterSetOption$:function($validationOptions$$1$$) {
    var $runDeferredValidation$$ = !0;
    this.$_hasInvalidMessagesShowing$() && ($runDeferredValidation$$ = !1);
    this.$_clearComponentMessages$();
    $runDeferredValidation$$ ? this.$_IsRequired$() && this.$_runDeferredValidation$($validationOptions$$1$$.$validationContext$) : this.$_updateValue$($validationOptions$$1$$);
  }, $_updateElementDisplayValue$:function($modelValue$$1$$, $event$$36$$) {
    var $displayValue$$1$$, $newMsg$$2$$;
    this.$_setLastModelValue$($modelValue$$1$$);
    $displayValue$$1$$ = $modelValue$$1$$;
    try {
      $displayValue$$1$$ = this.$_formatValue$($modelValue$$1$$);
    } catch ($e$$30$$) {
      $newMsg$$2$$ = this.$_processValidationErrors$($e$$30$$), this.$_updateMessagesShownOption$($newMsg$$2$$, $event$$36$$);
    }
    this.$_SetDisplayValue$($displayValue$$1$$);
    this.$_setLastSubmittedValue$(this.$_GetDisplayValue$());
  }, $_updateValue$:function($options$$116$$) {
    var $newValue$$6$$;
    $newValue$$6$$ = this.$_Validate$(this.$_GetDisplayValue$(), null, $options$$116$$);
    void 0 === $newValue$$6$$ || !this.isValid() && this.$_hasInvalidComponentMessagesShowing$() || this.$_updateValueOption$($newValue$$6$$, null, $options$$116$$.$validationContext$);
  }, $_validateValue$:function($value$$89$$, $requiredOnly$$) {
    var $allValidators$$3_ve$$2$$ = this.$_GetAllValidators$(), $validator$$2$$, $i$$95$$, $valMsgs$$ = [];
    if (this.$_IsRequired$()) {
      $validator$$2$$ = this.$_getImplicitRequiredValidator$();
      try {
        $validator$$2$$.validate($oj$$4$$.$StringUtils$.trim($value$$89$$));
      } catch ($e$$31$$) {
        this.$_addValidationError$($e$$31$$, $valMsgs$$);
      }
    }
    if (!$requiredOnly$$) {
      for ($i$$95$$ = 0;$i$$95$$ < $allValidators$$3_ve$$2$$.length;$i$$95$$++) {
        if ($validator$$2$$ = $allValidators$$3_ve$$2$$[$i$$95$$], "object" === typeof $validator$$2$$) {
          if ($validator$$2$$.validate && "function" === typeof $validator$$2$$.validate) {
            try {
              $validator$$2$$.validate($value$$89$$);
            } catch ($e$$32$$) {
              this.$_addValidationError$($e$$32$$, $valMsgs$$);
            }
          } else {
            $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("validator does not support the validate method.");
          }
        }
      }
    }
    if (0 < $valMsgs$$.length) {
      throw $allValidators$$3_ve$$2$$ = Error(), $allValidators$$3_ve$$2$$.$_messages$ = $valMsgs$$, $allValidators$$3_ve$$2$$;
    }
  }});
  $oj$$4$$.Components.$setDefaultOptions$({editableValue:{displayOptions:$oj$$4$$.Components.$createDynamicPropertyGetter$(function() {
    return{messages:["notewindow"], converterHint:["placeholder", "notewindow"], validatorHint:["notewindow"], title:["notewindow"]};
  })}});
  $oj$$4$$.$__registerWidget$("oj._ojLabel", $$$$4$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3clabel\x3e", widgetEventPrefix:"oj", options:{describedById:null, help:{definition:void 0, source:void 0}, required:null, rootAttributes:void 0}, $_BUNDLE_KEY$:{$_TOOLTIP_HELP$:"tooltipHelp", $_TOOLTIP_REQUIRED$:"tooltipRequired"}, widget:function() {
    return this.$uiLabel$;
  }, refresh:function() {
    this._super();
    this.$_refreshRequired$();
    this.$_refreshHelp$();
  }, _InitOptions:function($originalDefaults$$4$$, $constructorOptions$$4$$) {
    this._super($originalDefaults$$4$$, $constructorOptions$$4$$);
    this.$_checkDescribedByIdOption$();
  }, _ComponentCreate:function() {
    this._super();
    this.$_drawOnCreate$();
  }, $_drawOnCreate$:function() {
    var $needsDescribedBySpan$$ = this.options.help.source || this.options.required, $describedByDom$$ = null;
    this.$uiLabel$ = this.element.wrap(this.$_uiLabelWrapperHtml$()).closest(".oj-component");
    this.$_moveClassesToRoot$();
    $needsDescribedBySpan$$ && ($describedByDom$$ = this.$_createDescribedBySpan$());
    if (this.options.help.definition || this.options.help.source) {
      this.$_insertHelpHtml$($describedByDom$$), this.$_addHelpDefToLabel$();
    }
    this.options.required && $describedByDom$$.append(this.$_requiredHtml$());
  }, $_checkDescribedByIdOption$:function() {
    if ((this.options.help.source || this.options.required) && null == this.options.describedById) {
      throw Error("ojLabel's describedById option must be set if required or help source is set.");
    }
  }, $_moveClassesToRoot$:function() {
    var $arrayOfClasses_classes$$1$$ = this.element.attr("class"), $numClasses$$;
    if ($arrayOfClasses_classes$$1$$ && ($arrayOfClasses_classes$$1$$ = $arrayOfClasses_classes$$1$$.split(/\s+/), null != $arrayOfClasses_classes$$1$$)) {
      $numClasses$$ = $arrayOfClasses_classes$$1$$.length;
      for (var $i$$96$$ = 0;$i$$96$$ < $numClasses$$;$i$$96$$++) {
        var $className$$6$$ = $arrayOfClasses_classes$$1$$[$i$$96$$];
        0 < $className$$6$$.indexOf("-label") && (this.$uiLabel$.addClass($className$$6$$), this.element.removeClass($className$$6$$));
      }
    }
  }, $_createDescribedBySpan$:function() {
    var $ojLabelGroupDom$$ = this.$uiLabel$.find(".oj-label-group"), $describedBySpan$$ = $$$$4$$("\x3cspan\x3e\x3c/span\x3e", this.document[0]);
    $describedBySpan$$.attr("id", this.options.describedById);
    return $ojLabelGroupDom$$.prepend($describedBySpan$$).children().first();
  }, $_uiLabelWrapperHtml$:function() {
    var $inputLabelClass$$;
    this.options.rootAttributes && ($inputLabelClass$$ = this.options.rootAttributes["class"]);
    return null !== $inputLabelClass$$ ? "\x3cdiv class\x3d'oj-label oj-component " + $inputLabelClass$$ + "'\x3e\x3cdiv class\x3d'oj-label-group'\x3e\x3c/div\x3e\x3c/div\x3e" : "\x3cdiv class\x3d'oj-label oj-component'\x3e\x3cdiv class\x3d'oj-label-group'\x3e\x3c/div\x3e\x3c/div\x3e";
  }, $_requiredHtml$:function() {
    return "\x3cspan class\x3d'oj-label-required-icon oj-component-icon' title\x3d'" + this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_REQUIRED$) + "' role\x3d'img'\x3e\x3c/span\x3e";
  }, $_helpHtml$:function($helpDef$$2$$, $source$$8$$) {
    var $sourceLink$$, $helpIconSpan$$;
    $source$$8$$ && ($sourceLink$$ = $$$$4$$("\x3ca target\x3d'_blank' class\x3d'oj-label-help-icon-anchor'\x3e\x3c/a\x3e", this.document[0]), $sourceLink$$.attr("href", $source$$8$$), $helpIconSpan$$ = $$$$4$$("\x3cspan class\x3d'oj-label-help-icon oj-component-icon oj-clickable-icon' role\x3d'img'\x3e\x3c/span\x3e", this.document[0]), $helpDef$$2$$ ? $helpIconSpan$$.attr("title", $helpDef$$2$$) : $helpIconSpan$$.attr("title", this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_HELP$)), $sourceLink$$.append($helpIconSpan$$));
    return $sourceLink$$;
  }, $_addHelpDefToLabel$:function() {
    var $helpDef$$3$$ = this.options.help.definition, $title$$7$$;
    $helpDef$$3$$ && (this.element.addClass("oj-label-help-def"), ($title$$7$$ = this.element.attr("title")) ? this.element.attr("title", $title$$7$$ + " " + $helpDef$$3$$) : this.element.attr("title", $helpDef$$3$$));
  }, $_removeHelpDefToLabel$:function() {
    this.element.removeClass("oj-label-help-def");
    this.element.attr("title", "");
  }, $_insertHelpHtml$:function($describedByDom$$1$$) {
    var $helpSource$$3$$ = this.options.help.source, $helpDef$$4$$;
    $helpSource$$3$$ && ($helpDef$$4$$ = this.options.help.definition, $describedByDom$$1$$.prepend(this.$_helpHtml$($helpDef$$4$$, $helpSource$$3$$)));
  }, $_refreshHelp$:function() {
    var $describedById_describedBySpan$$1$$, $helpIconSpan$$1_needsDescribedBySpan$$2$$;
    this.$_checkDescribedByIdOption$();
    $describedById_describedBySpan$$1$$ = "#" + this.options.describedById;
    this.$_removeHelpDefToLabel$();
    $helpIconSpan$$1_needsDescribedBySpan$$2$$ = this.$uiLabel$.find(".oj-label-help-icon");
    1 === $helpIconSpan$$1_needsDescribedBySpan$$2$$.length && $helpIconSpan$$1_needsDescribedBySpan$$2$$.parent().remove();
    $helpIconSpan$$1_needsDescribedBySpan$$2$$ = this.options.help.source;
    $describedById_describedBySpan$$1$$ = this.$uiLabel$.find($describedById_describedBySpan$$1$$);
    null != $helpIconSpan$$1_needsDescribedBySpan$$2$$ && 0 === $describedById_describedBySpan$$1$$.length ? $describedById_describedBySpan$$1$$ = this.$_createDescribedBySpan$() : null == $helpIconSpan$$1_needsDescribedBySpan$$2$$ && 0 < $describedById_describedBySpan$$1$$.length && 0 === $describedById_describedBySpan$$1$$.children().size() && $describedById_describedBySpan$$1$$.remove();
    this.$_insertHelpHtml$($describedById_describedBySpan$$1$$);
    this.$_addHelpDefToLabel$();
  }, $_refreshRequired$:function() {
    var $describedById$$1_describedBySpan$$2$$;
    $describedById$$1_describedBySpan$$2$$ = "#" + this.options.describedById;
    this.options.required ? (this.$_checkDescribedByIdOption$(), 0 === this.$uiLabel$.find(".oj-label-required-icon").length && ($describedById$$1_describedBySpan$$2$$ = this.$uiLabel$.find($describedById$$1_describedBySpan$$2$$), 0 === $describedById$$1_describedBySpan$$2$$.length && ($describedById$$1_describedBySpan$$2$$ = this.$_createDescribedBySpan$()), $describedById$$1_describedBySpan$$2$$.append(this.$_requiredHtml$()))) : (this.$uiLabel$.find(".oj-label-required-icon").remove(), $describedById$$1_describedBySpan$$2$$ = 
    this.$uiLabel$.find($describedById$$1_describedBySpan$$2$$), 0 < $describedById$$1_describedBySpan$$2$$.length && 0 === $describedById$$1_describedBySpan$$2$$.children().size() && $describedById$$1_describedBySpan$$2$$.remove());
  }, _setOption:function($key$$33$$, $value$$90$$) {
    this._superApply(arguments);
    "required" === $key$$33$$ && this.$_refreshRequired$();
    "help" === $key$$33$$ && this.$_refreshHelp$();
  }, getNodeBySubId:function($locator$$3_subId$$) {
    var $node$$14$$;
    $node$$14$$ = this._super($locator$$3_subId$$);
    $node$$14$$ || ($locator$$3_subId$$ = $locator$$3_subId$$.subId, "oj-label-help-icon" === $locator$$3_subId$$ && ($node$$14$$ = this.widget().find(".oj-label-help-icon")[0]), "oj-label-help-icon-anchor" === $locator$$3_subId$$ && ($node$$14$$ = this.widget().find(".oj-label-help-icon").parent()[0]), "oj-label-required-icon" === $locator$$3_subId$$ && ($node$$14$$ = this.widget().find(".oj-label-required-icon")[0]));
    return $node$$14$$ || null;
  }, _destroy:function() {
    this.$uiLabel$.replaceWith(this.element);
    this.$_RestoreAttributes$();
    return this._super();
  }});
  $oj$$4$$.$EditableValueUtils$ = {};
  $goog$exportPath_$$("EditableValueUtils", $oj$$4$$.$EditableValueUtils$, $oj$$4$$);
  $oj$$4$$.$EditableValueUtils$.$getAttributeValue$ = function $$oj$$4$$$$EditableValueUtils$$$getAttributeValue$$($element$$21$$, $attribute$$2$$) {
    var $attrVal_result$$4$$, $propVal$$, $returnVal$$ = {};
    if ($element$$21$$ && $attribute$$2$$) {
      switch($attribute$$2$$) {
        case "disabled":
          $attrVal_result$$4$$ = void 0 !== $element$$21$$.attr("disabled") ? !!$element$$21$$.prop("disabled") : void 0;
          break;
        case "pattern":
          $attrVal_result$$4$$ = $element$$21$$.prop("pattern") || void 0;
          break;
        case "placeholder":
          $attrVal_result$$4$$ = $element$$21$$.prop("placeholder") || void 0;
          break;
        case "readonly":
          $attrVal_result$$4$$ = void 0 !== $element$$21$$.attr("readonly") ? !!$element$$21$$.prop("readonly") : void 0;
          break;
        case "required":
          $attrVal_result$$4$$ = $element$$21$$.attr("required");
          $propVal$$ = $element$$21$$.prop("required");
          $attrVal_result$$4$$ = void 0 !== $attrVal_result$$4$$ ? void 0 !== $propVal$$ ? !!$propVal$$ : !!$attrVal_result$$4$$ : void 0;
          break;
        case "title":
          $attrVal_result$$4$$ = $element$$21$$.prop("title");
          break;
        case "value":
          $attrVal_result$$4$$ = $element$$21$$.val() || void 0;
          break;
        default:
          $attrVal_result$$4$$ = $element$$21$$.attr($attribute$$2$$) || void 0;
      }
    }
    void 0 !== $attrVal_result$$4$$ ? ($returnVal$$.$fromDom$ = !0, $returnVal$$.value = $attrVal_result$$4$$) : $returnVal$$.$fromDom$ = !1;
    return $returnVal$$;
  };
  $oj$$4$$.$EditableValueUtils$.$initializeOptionsFromDom$ = function $$oj$$4$$$$EditableValueUtils$$$initializeOptionsFromDom$$($props$$4$$, $constructorOptions$$5$$, $comp$$1$$) {
    for (var $i$$97$$ = 0;$i$$97$$ < $props$$4$$.length;$i$$97$$++) {
      var $finalValue_prop$$47$$, $attribute$$3_result$$5$$;
      $finalValue_prop$$47$$ = $props$$4$$[$i$$97$$];
      $attribute$$3_result$$5$$ = $finalValue_prop$$47$$.attribute;
      var $option$$9$$ = $finalValue_prop$$47$$.option || $attribute$$3_result$$5$$, $coerceDomValue$$ = $finalValue_prop$$47$$.coerceDomValue, $validateOption$$ = $finalValue_prop$$47$$.validateOption, $element$$22$$ = $comp$$1$$.element, $previousValue$$2$$ = $comp$$1$$.options[$option$$9$$];
      void 0 === $constructorOptions$$5$$[$option$$9$$] && ($previousValue$$2$$ = $comp$$1$$.options[$option$$9$$], $attribute$$3_result$$5$$ = $oj$$4$$.$EditableValueUtils$.$getAttributeValue$($element$$22$$, $attribute$$3_result$$5$$), $attribute$$3_result$$5$$.$fromDom$ ? ($finalValue_prop$$47$$ = $attribute$$3_result$$5$$.value, $coerceDomValue$$ && ("boolean" === typeof $coerceDomValue$$ ? $finalValue_prop$$47$$ = $oj$$4$$.$EditableValueUtils$.$coerceDomValueForOption$($option$$9$$, $finalValue_prop$$47$$) : 
      "function" === typeof $coerceDomValue$$ && ($finalValue_prop$$47$$ = $coerceDomValue$$.call($comp$$1$$, $finalValue_prop$$47$$))), $comp$$1$$.options[$option$$9$$] = $finalValue_prop$$47$$, $comp$$1$$.$_InitializedOptionFromDom$($option$$9$$, $previousValue$$2$$)) : void 0 === $previousValue$$2$$ && ($comp$$1$$.options[$option$$9$$] = $finalValue_prop$$47$$.defaultOptionValue));
      $validateOption$$ && ("boolean" === typeof $validateOption$$ ? $oj$$4$$.$EditableValueUtils$.$validateValueForOption$($option$$9$$, $comp$$1$$.options[$option$$9$$]) : "function" === typeof $validateOption$$ && $validateOption$$.call($comp$$1$$));
    }
  };
  $oj$$4$$.$EditableValueUtils$.$validateValueForOption$ = function $$oj$$4$$$$EditableValueUtils$$$validateValueForOption$$($option$$10$$, $value$$91$$) {
    var $error$$13$$ = !1;
    switch($option$$10$$) {
      case "required":
        null !== $value$$91$$ && "boolean" !== typeof $value$$91$$ && ($error$$13$$ = !0);
        break;
      case "readOnly":
      ;
      case "disabled":
        null !== $value$$91$$ && "boolean" !== typeof $value$$91$$ && ($error$$13$$ = !0);
    }
    if ($error$$13$$) {
      throw "Option '" + $option$$10$$ + " 'has invalid value set: " + $value$$91$$;
    }
  };
  $oj$$4$$.$EditableValueUtils$.$coerceDomValueForOption$ = function $$oj$$4$$$$EditableValueUtils$$$coerceDomValueForOption$$($option$$11$$, $domValue$$) {
    var $coerced$$ = $domValue$$;
    switch($option$$11$$) {
      case "required":
        $coerced$$ = $domValue$$ ? !0 : !1;
    }
    return $coerced$$;
  };
});
