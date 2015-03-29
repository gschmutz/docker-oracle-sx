"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$12$$, $$$$12$$) {
  var $_ComboUtils$$ = {$KEY$:{TAB:9, ENTER:13, $ESC$:27, SPACE:32, LEFT:37, UP:38, RIGHT:39, DOWN:40, $SHIFT$:16, $CTRL$:17, $ALT$:18, PAGE_UP:33, PAGE_DOWN:34, HOME:36, END:35, $BACKSPACE$:8, $DELETE$:46, $isControl$:function($e$$47$$) {
    switch($e$$47$$.which) {
      case $_ComboUtils$$.$KEY$.$SHIFT$:
      ;
      case $_ComboUtils$$.$KEY$.$CTRL$:
      ;
      case $_ComboUtils$$.$KEY$.$ALT$:
        return!0;
    }
    return $e$$47$$.metaKey ? !0 : !1;
  }, $isFunctionKey$:function($k$$7$$) {
    $k$$7$$ = $k$$7$$.which ? $k$$7$$.which : $k$$7$$;
    return 112 <= $k$$7$$ && 123 >= $k$$7$$;
  }}, $lastMousePosition$:{x:0, y:0}, $nextUid$:function() {
    var $counter$$ = 1;
    return function() {
      return $counter$$++;
    };
  }(), $scrollBarDimensions$:null, $each2$:function($list$$, $c$$27$$) {
    for (var $j$$26$$ = $$$$12$$($list$$[0]), $i$$168$$ = -1, $l$$5$$ = $list$$.length;++$i$$168$$ < $l$$5$$ && ($j$$26$$.context = $j$$26$$[0] = $list$$[$i$$168$$]) && !1 !== $c$$27$$.call($j$$26$$[0], $i$$168$$, $j$$26$$);) {
    }
    return $list$$;
  }, $measureScrollbar$:function() {
    var $$template$$ = $$$$12$$("\x3cdiv class\x3d'oj-listbox-measure-scrollbar'\x3e\x3c/div\x3e");
    $$template$$.appendTo("body");
    var $dim$$ = {width:$$template$$.width() - $$template$$[0].clientWidth, height:$$template$$.height() - $$template$$[0].clientHeight};
    $$template$$.remove();
    return $dim$$;
  }, $splitVal$:function($string$$3$$, $separator$$) {
    var $val$$28$$, $i$$169$$, $l$$6$$;
    if (null === $string$$3$$ || 1 > $string$$3$$.length) {
      return[];
    }
    $val$$28$$ = $string$$3$$.split($separator$$);
    $i$$169$$ = 0;
    for ($l$$6$$ = $val$$28$$.length;$i$$169$$ < $l$$6$$;$i$$169$$ += 1) {
      $val$$28$$[$i$$169$$] = $$$$12$$.trim($val$$28$$[$i$$169$$]);
    }
    return $val$$28$$;
  }, $getSideBorderPadding$:function($element$$45$$) {
    return $element$$45$$.outerWidth(!1) - $element$$45$$.width();
  }, $installKeyUpChangeEvent$:function($element$$46$$) {
    $element$$46$$.on("keydown", function() {
      void 0 === $$$$12$$.data($element$$46$$, "keyup-change-value") && $$$$12$$.data($element$$46$$, "keyup-change-value", $element$$46$$.val());
    });
    $element$$46$$.on("keyup", function($e$$48_val$$29$$) {
      $e$$48_val$$29$$.which === $_ComboUtils$$.$KEY$.ENTER ? $e$$48_val$$29$$.stopPropagation() : ($e$$48_val$$29$$ = $$$$12$$.data($element$$46$$, "keyup-change-value"), void 0 !== $e$$48_val$$29$$ && $element$$46$$.val() !== $e$$48_val$$29$$ && ($$$$12$$.removeData($element$$46$$, "keyup-change-value"), $element$$46$$.trigger("keyup-change")));
    });
  }, $installFilteredMouseMove$:function($element$$47$$) {
    $element$$47$$.on("mousemove", function($e$$49$$) {
      var $lastpos$$ = $_ComboUtils$$.$lastMousePosition$;
      if (void 0 === $lastpos$$ || $lastpos$$.x !== $e$$49$$.pageX || $lastpos$$.y !== $e$$49$$.pageY) {
        $$$$12$$($e$$49$$.target).trigger("mousemove-filtered", $e$$49$$), $_ComboUtils$$.$lastMousePosition$.x = $e$$49$$.pageX, $_ComboUtils$$.$lastMousePosition$.y = $e$$49$$.pageY;
      }
    });
  }, $thunk$:function($formula$$) {
    var $evaluated$$ = !1, $value$$165$$;
    return function() {
      !1 === $evaluated$$ && ($value$$165$$ = $formula$$(), $evaluated$$ = !0);
      return $value$$165$$;
    };
  }, $_focus$:function($$el$$) {
    $$el$$[0] !== document.activeElement && window.setTimeout(function() {
      var $el$$3_range$$18$$ = $$el$$[0], $pos$$5$$ = $$el$$.val().length;
      $$el$$.focus();
      $$el$$.is(":visible") && $el$$3_range$$18$$ === document.activeElement && ($el$$3_range$$18$$.setSelectionRange ? $el$$3_range$$18$$.setSelectionRange($pos$$5$$, $pos$$5$$) : $el$$3_range$$18$$.createTextRange && ($el$$3_range$$18$$ = $el$$3_range$$18$$.createTextRange(), $el$$3_range$$18$$.collapse(!1), $el$$3_range$$18$$.select()));
    }, 0);
  }, $getCursorInfo$:function($el$$4$$) {
    $el$$4$$ = $$$$12$$($el$$4$$)[0];
    var $offset$$17_sel$$ = 0, $length$$14$$ = 0;
    "selectionStart" in $el$$4$$ ? ($offset$$17_sel$$ = $el$$4$$.selectionStart, $length$$14$$ = $el$$4$$.selectionEnd - $offset$$17_sel$$) : "selection" in document && ($el$$4$$.focus(), $offset$$17_sel$$ = document.selection.createRange(), $length$$14$$ = document.selection.createRange().text.length, $offset$$17_sel$$.moveStart("character", -$el$$4$$.value.length), $offset$$17_sel$$ = $offset$$17_sel$$.text.length - $length$$14$$);
    return{offset:$offset$$17_sel$$, length:$length$$14$$};
  }, $killEvent$:function($event$$82$$) {
    $event$$82$$.preventDefault();
    $event$$82$$.stopPropagation();
  }, $killEventImmediately$:function($event$$83$$) {
    $event$$83$$.preventDefault();
    $event$$83$$.stopImmediatePropagation();
  }, $defaultEscapeMarkup$:function($markup$$) {
    var $replace_map$$ = {"\\":"\x26#92;", "\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#39;"};
    return String($markup$$).replace(/[&<>"'\\]/g, function($match$$14$$) {
      return $replace_map$$[$match$$14$$];
    });
  }, $local$:function($options$$244$$, $optKeys$$) {
    function $text$$9$$($item$$7$$) {
      return "" + $item$$7$$.label;
    }
    var $data$$81$$ = $options$$244$$, $dataText$$, $tmp$$1$$;
    $$$$12$$.isArray($data$$81$$) && ($tmp$$1$$ = $data$$81$$, $data$$81$$ = {$results$:$tmp$$1$$});
    !1 === $$$$12$$.isFunction($data$$81$$) && ($tmp$$1$$ = $data$$81$$, $data$$81$$ = function $$data$$81$$$() {
      return $tmp$$1$$;
    });
    var $dataItem$$ = $data$$81$$();
    $dataItem$$ && $dataItem$$.text && ($text$$9$$ = $dataItem$$.text, $$$$12$$.isFunction($text$$9$$) || ($dataText$$ = $dataItem$$.text, $text$$9$$ = function $$text$$9$$$($item$$8$$) {
      return $item$$8$$[$dataText$$];
    }));
    return function($query$$3$$) {
      var $t$$ = $query$$3$$.$term$, $filtered$$ = {$results$:[]}, $process$$;
      "" === $t$$ ? $query$$3$$.$callback$($data$$81$$()) : ($process$$ = function $$process$$$($datum$$, $collection$$26$$, $keys$$17$$) {
        var $group$$, $attr$$15$$;
        $datum$$ = $datum$$[0];
        !$datum$$.label && $keys$$17$$ && $keys$$17$$.label && ($datum$$.label = $datum$$[$keys$$17$$.label], delete $datum$$[$keys$$17$$.label]);
        !$datum$$.value && $keys$$17$$ && $keys$$17$$.value && ($datum$$.value = $datum$$[$keys$$17$$.value], delete $datum$$[$keys$$17$$.value]);
        !$datum$$.children && $keys$$17$$ && $keys$$17$$.children && ($datum$$.children = $datum$$[$keys$$17$$.children], delete $datum$$[$keys$$17$$.children]);
        if ($datum$$.children) {
          $group$$ = {};
          for ($attr$$15$$ in $datum$$) {
            $datum$$.hasOwnProperty($attr$$15$$) && ($group$$[$attr$$15$$] = $datum$$[$attr$$15$$]);
          }
          $group$$.children = [];
          $_ComboUtils$$.$each2$($$$$12$$($datum$$.children), function($i$$170$$, $childDatum$$) {
            $process$$($childDatum$$, $group$$.children, $keys$$17$$ && $keys$$17$$.childKeys ? $keys$$17$$.childKeys : null);
          });
          ($group$$.children.length || $query$$3$$.$matcher$($t$$, $text$$9$$($group$$), $datum$$)) && $collection$$26$$.push($group$$);
        } else {
          $query$$3$$.$matcher$($t$$, $text$$9$$($datum$$), $datum$$) && $collection$$26$$.push($datum$$);
        }
      }, $data$$81$$() && $_ComboUtils$$.$each2$($$$$12$$($data$$81$$().$results$), function($i$$171$$, $datum$$1$$) {
        $process$$($datum$$1$$, $filtered$$.$results$, $optKeys$$);
      }), $query$$3$$.$callback$($filtered$$));
    };
  }, $checkFormatter$:function($ojContext$$, $formatter$$, $formatterName$$) {
    if ($$$$12$$.isFunction($formatter$$)) {
      return!0;
    }
    if (!$formatter$$) {
      return!1;
    }
    throw Error($formatterName$$ + " must be a function or a false value");
  }, $clazz$:function($SuperClass$$, $methods$$1$$) {
    function $constructor$$1$$() {
    }
    $oj$$12$$.$Object$.$createSubclass$($constructor$$1$$, $SuperClass$$, "");
    $constructor$$1$$.prototype = $$$$12$$.extend($constructor$$1$$.prototype, $methods$$1$$);
    return $constructor$$1$$;
  }}, $_AbstractOjChoice$$ = $_ComboUtils$$.$clazz$(Object, {$_bind$:function($func$$11$$) {
    var $self$$53$$ = this;
    return function() {
      $func$$11$$.apply($self$$53$$, arguments);
    };
  }, _init:function($opts$$11$$) {
    var $search$$1$$, $className$$9$$ = this.$_classNm$, $elemName$$ = this.$_elemNm$;
    this.$ojContext$ = $opts$$11$$.$ojContext$;
    this.$opts$ = $opts$$11$$ = this.$_prepareOpts$($opts$$11$$);
    this.id = $opts$$11$$.id;
    void 0 !== $opts$$11$$.element.data($elemName$$) && null !== $opts$$11$$.element.data($elemName$$) && $opts$$11$$.element.data($elemName$$)._destroy();
    this.$container$ = this.$_createContainer$();
    var $clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$ = this.$opts$.rootAttributes;
    this.$containerId$ = $clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$ && $clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$.id ? $clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$.id : "ojChoiceId_" + ($opts$$11$$.element.attr("id") || "autogen" + $_ComboUtils$$.$nextUid$());
    this.$containerId$.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1");
    this.$container$.attr("id", this.$containerId$);
    this.body = $_ComboUtils$$.$thunk$(function() {
      return $opts$$11$$.element.closest("body");
    });
    this.$container$.attr("style", $opts$$11$$.element.attr("style"));
    this.$elementTabIndex$ = this.$opts$.element.attr("tabindex");
    this.$opts$.element.data($elemName$$, this).attr("tabindex", "-1").before(this.$container$);
    this.$container$.data($elemName$$, this);
    this.$dropdown$ = this.$container$.find(".oj-listbox-drop");
    this.$dropdown$.data("ojlistbox", this);
    this.$dropdown$.on("click", $_ComboUtils$$.$killEvent$);
    this.$dropdown$.attr($oj$$12$$.$DomUtils$.$SURROGATE_ID$, this.$containerId$);
    this.$results$ = this.$container$.find(".oj-listbox-results");
    this.search = $search$$1$$ = "oj-select" == $className$$9$$ ? this.$container$.find("input.oj-listbox-input") : this.$container$.find("input." + $className$$9$$ + "-input");
    this.$resultsPage$ = this.$queryCount$ = 0;
    this.context = null;
    this.$_initContainer$();
    this.$container$.on("click", $_ComboUtils$$.$killEvent$);
    $_ComboUtils$$.$installFilteredMouseMove$(this.$results$);
    this.$dropdown$.on("mousemove-filtered touchstart touchmove touchend", ".oj-listbox-results", this.$_bind$(this.$_highlightUnderEvent$));
    $$$$12$$(this.$container$).on("change", "." + $className$$9$$ + "-input", function($e$$50$$) {
      $e$$50$$.stopPropagation();
    });
    $$$$12$$(this.$dropdown$).on("change", "." + $className$$9$$ + "-input", function($e$$51$$) {
      $e$$51$$.stopPropagation();
    });
    $_ComboUtils$$.$installKeyUpChangeEvent$($search$$1$$);
    $search$$1$$.on("keyup-change input paste", this.$_bind$(this.$_updateResults$));
    $search$$1$$.on("focus", function() {
      $search$$1$$.addClass($className$$9$$ + "-focused");
    });
    $search$$1$$.on("blur", function() {
      $search$$1$$.removeClass($className$$9$$ + "-focused");
    });
    this.$dropdown$.on("mouseup", ".oj-listbox-results", this.$_bind$(function($e$$52$$) {
      0 < $$$$12$$($e$$52$$.target).closest(".oj-listbox-result-selectable").length && (this.$_highlightUnderEvent$($e$$52$$), this.$_selectHighlighted$(null, $e$$52$$));
    }));
    this.$dropdown$.on("click mouseup mousedown", function($e$$53$$) {
      $e$$53$$.stopPropagation();
    });
    $$$$12$$.isFunction(this.$opts$.$initSelection$) && this.$_initSelection$();
    $clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$ = $opts$$11$$.element.prop("disabled");
    void 0 === $clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$ && ($clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$ = !1);
    this.$_enable$(!$clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$);
    $clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$ = $opts$$11$$.element.prop("readonly");
    void 0 === $clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$ && ($clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$ = !1);
    this.$_readonly$($clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$);
    $_ComboUtils$$.$scrollBarDimensions$ = $_ComboUtils$$.$scrollBarDimensions$ || $_ComboUtils$$.$measureScrollbar$();
    this.autofocus = $opts$$11$$.element.prop("autofocus");
    $opts$$11$$.element.prop("autofocus", !1);
    this.autofocus && this.$_focus$();
    ($clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$ = $$$$12$$(document).data("ojChoiceClickAwayHandler-" + $elemName$$)) ? $clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$.$components$.push(this) : ($clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$ = function $$clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$$($event$$84$$) {
      var $dropdown_self$$54$$ = $$$$12$$("#oj-listbox-drop");
      !$$$$12$$($event$$84$$.target).closest($dropdown_self$$54$$).length && 0 < $dropdown_self$$54$$.length && ($dropdown_self$$54$$ = $dropdown_self$$54$$.data("ojlistbox"), $dropdown_self$$54$$.$opts$.$selectOnBlur$ && $dropdown_self$$54$$.$_selectHighlighted$({$noFocus$:!0}, $event$$84$$), $dropdown_self$$54$$.close($event$$84$$));
    }, document.addEventListener("mousedown", $clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$, !0), $clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$ = {$listener$:$clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$, $components$:[]}, $clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$.$components$.push(this), $$$$12$$(document).data("ojChoiceClickAwayHandler-" + $elemName$$, $clickAwayHandler_clickAwayListener_disabled$$2_readonly_rootAttr$$));
  }, _destroy:function() {
    var $clickAwayHandler$$1_element$$48$$ = this.$opts$.element, $index$$135_ojcomp$$ = $clickAwayHandler$$1_element$$48$$.data(this.$_elemNm$);
    this.close();
    this.$propertyObserver$ && (delete this.$propertyObserver$, this.$propertyObserver$ = null);
    void 0 !== $index$$135_ojcomp$$ && ($index$$135_ojcomp$$.$container$.remove(), $index$$135_ojcomp$$.$dropdown$.remove(), $clickAwayHandler$$1_element$$48$$.removeAttr("aria-hidden").removeData(this.$_elemNm$).off("." + this.$_classNm$).prop("autofocus", this.autofocus || !1), this.$elementTabIndex$ ? $clickAwayHandler$$1_element$$48$$.attr({$tabindex$:this.$elementTabIndex$}) : $clickAwayHandler$$1_element$$48$$.removeAttr("tabindex"), $clickAwayHandler$$1_element$$48$$.show());
    $clickAwayHandler$$1_element$$48$$ = $$$$12$$(document).data("ojChoiceClickAwayHandler-" + this.$_elemNm$);
    $index$$135_ojcomp$$ = $clickAwayHandler$$1_element$$48$$.$components$.indexOf(this);
    -1 < $index$$135_ojcomp$$ && ($clickAwayHandler$$1_element$$48$$.$components$.splice($index$$135_ojcomp$$, 1), $clickAwayHandler$$1_element$$48$$.$components$.length || (document.removeEventListener("mousedown", $clickAwayHandler$$1_element$$48$$.$listener$, !0), $$$$12$$(document).removeData("ojChoiceClickAwayHandler-" + this.$_elemNm$)));
  }, $_optionToData$:function($element$$49$$) {
    if ($element$$49$$.is("option")) {
      return{value:$element$$49$$.prop("value"), label:$element$$49$$.text(), element:$element$$49$$.get(), css:$element$$49$$.attr("class"), disabled:$element$$49$$.prop("disabled"), locked:"locked" === $element$$49$$.attr("locked") || !0 === $element$$49$$.data("locked")};
    }
    if ($element$$49$$.is("optgroup")) {
      return{label:$element$$49$$.attr("label"), children:[], element:$element$$49$$.get(), css:$element$$49$$.attr("class")};
    }
  }, $_prepareOpts$:function($opts$$12$$) {
    var $element$$50$$, $datalist$$, $self$$55$$ = this;
    $element$$50$$ = $opts$$12$$.element;
    var $tagName$$2$$ = $element$$50$$.get(0).tagName.toLowerCase();
    "input" === $tagName$$2$$ && $element$$50$$.attr("list") ? this.$datalist$ = $datalist$$ = $$$$12$$("#" + $element$$50$$.attr("list")) : "select" === $tagName$$2$$ && 0 < $element$$50$$.children().length && (this.$datalist$ = $datalist$$ = $element$$50$$);
    $opts$$12$$ = $$$$12$$.extend({}, {$populateResults$:function($container$$2$$, $results$$4$$, $query$$4$$, $showPlaceholder$$) {
      var $populate$$, $id$$15$$ = this.$opts$.id;
      $populate$$ = function $$populate$$$($results$$5$$, $container$$3$$, $depth$$18$$, $i$$172_showPlaceholder$$1$$) {
        var $l$$7_placeholder$$, $result$$22$$, $label$$4_selectable$$, $disabled$$3_formatted_innerContainer$$, $node$$21$$;
        $l$$7_placeholder$$ = $self$$55$$.$_getPlaceholder$();
        $i$$172_showPlaceholder$$1$$ && null !== $l$$7_placeholder$$ && !$query$$4$$.$term$ && ($result$$22$$ = {value:"", label:$l$$7_placeholder$$}, $node$$21$$ = $$$$12$$("\x3cli\x3e\x3c/li\x3e"), $node$$21$$.addClass("oj-listbox-placeholder oj-listbox-results-depth-0 oj-listbox-result oj-listbox-result-selectable"), $node$$21$$.attr("role", "presentation"), $label$$4_selectable$$ = $$$$12$$(document.createElement("div")), $label$$4_selectable$$.addClass("oj-listbox-result-label"), $label$$4_selectable$$.attr("id", 
        "oj-listbox-result-label-" + $_ComboUtils$$.$nextUid$()), $label$$4_selectable$$.attr("role", "option"), $disabled$$3_formatted_innerContainer$$ = $opts$$12$$.$formatResult$($result$$22$$), void 0 !== $disabled$$3_formatted_innerContainer$$ && $label$$4_selectable$$.text($disabled$$3_formatted_innerContainer$$), $node$$21$$.append($label$$4_selectable$$), $node$$21$$.data($self$$55$$.$_elemNm$, $result$$22$$), $container$$3$$.append($node$$21$$));
        $i$$172_showPlaceholder$$1$$ = 0;
        for ($l$$7_placeholder$$ = $results$$5$$.length;$i$$172_showPlaceholder$$1$$ < $l$$7_placeholder$$;$i$$172_showPlaceholder$$1$$ += 1) {
          $result$$22$$ = $results$$5$$[$i$$172_showPlaceholder$$1$$], $disabled$$3_formatted_innerContainer$$ = !0 === $result$$22$$.disabled, $label$$4_selectable$$ = !$disabled$$3_formatted_innerContainer$$ && void 0 !== $id$$15$$($result$$22$$), $node$$21$$ = $$$$12$$("\x3cli\x3e\x3c/li\x3e"), $node$$21$$.addClass("oj-listbox-results-depth-" + $depth$$18$$), $node$$21$$.addClass("oj-listbox-result"), $node$$21$$.addClass($label$$4_selectable$$ ? "oj-listbox-result-selectable" : "oj-listbox-result-unselectable"), 
          $disabled$$3_formatted_innerContainer$$ && $node$$21$$.addClass("oj-disabled"), $result$$22$$.children && $node$$21$$.addClass("oj-listbox-result-with-children"), $node$$21$$.attr("role", "presentation"), $label$$4_selectable$$ = $$$$12$$(document.createElement("div")), $label$$4_selectable$$.addClass("oj-listbox-result-label"), $label$$4_selectable$$.attr("id", "oj-listbox-result-label-" + $_ComboUtils$$.$nextUid$()), $label$$4_selectable$$.attr("role", "option"), $disabled$$3_formatted_innerContainer$$ && 
          $label$$4_selectable$$.attr("aria-disabled", "true"), $disabled$$3_formatted_innerContainer$$ = $opts$$12$$.$formatResult$($result$$22$$), void 0 !== $disabled$$3_formatted_innerContainer$$ && $label$$4_selectable$$.text($disabled$$3_formatted_innerContainer$$), $node$$21$$.append($label$$4_selectable$$), $result$$22$$.children && 0 < $result$$22$$.children.length && ($disabled$$3_formatted_innerContainer$$ = $$$$12$$("\x3cul\x3e\x3c/ul\x3e"), $disabled$$3_formatted_innerContainer$$.addClass("oj-listbox-result-sub"), 
          $populate$$($result$$22$$.children, $disabled$$3_formatted_innerContainer$$, $depth$$18$$ + 1, !1), $node$$21$$.append($disabled$$3_formatted_innerContainer$$)), $node$$21$$.data($self$$55$$.$_elemNm$, $result$$22$$), $container$$3$$.append($node$$21$$);
        }
      };
      $populate$$($results$$4$$, $container$$2$$, 0, $showPlaceholder$$);
    }}, $_ojChoice_defaults$$, $opts$$12$$);
    $opts$$12$$.id = function $$opts$$12$$$id$($e$$54$$) {
      return $e$$54$$.value;
    };
    $opts$$12$$.$formatResult$ = function $$opts$$12$$$$formatResult$$($result$$23$$) {
      var $markup$$1$$ = [];
      $markup$$1$$.push($opts$$12$$.$escapeMarkup$($result$$23$$.label));
      return $markup$$1$$.join("");
    };
    $opts$$12$$.$formatSelection$ = function $$opts$$12$$$$formatSelection$$($data$$82$$, $container$$4$$, $escapeMarkup$$1$$) {
      return $data$$82$$ && $data$$82$$.label ? $escapeMarkup$$1$$($data$$82$$.label) : void 0;
    };
    "select" !== $tagName$$2$$ && null !== $opts$$12$$.manageNewEntry && ($opts$$12$$.manageNewEntry = function $$opts$$12$$$manageNewEntry$($term$$) {
      var $entry$$1$$ = {};
      $entry$$1$$.value = $entry$$1$$.label = $$$$12$$.trim($term$$);
      return $entry$$1$$;
    });
    $datalist$$ ? $opts$$12$$.$query$ = this.$_bind$(function($query$$5$$) {
      var $data$$83$$ = {$results$:[], $more$:!1}, $term$$1$$ = $query$$5$$.$term$, $children$$2$$, $process$$1$$;
      $process$$1$$ = function $$process$$1$$$($element$$51$$, $collection$$27$$) {
        var $group$$1$$;
        $element$$51$$.is("option") ? $query$$5$$.$matcher$($term$$1$$, $element$$51$$.text(), $element$$51$$) && $collection$$27$$.push($self$$55$$.$_optionToData$($element$$51$$)) : $element$$51$$.is("optgroup") && ($group$$1$$ = $self$$55$$.$_optionToData$($element$$51$$), $_ComboUtils$$.$each2$($element$$51$$.children(), function($i$$173$$, $elm$$1$$) {
          $process$$1$$($elm$$1$$, $group$$1$$.children);
        }), 0 < $group$$1$$.children.length && $collection$$27$$.push($group$$1$$));
      };
      $children$$2$$ = $datalist$$.children();
      void 0 !== this.$_getPlaceholder$() && 0 < $children$$2$$.length && "" == $children$$2$$.first().attr("value") && ($children$$2$$ = $children$$2$$.slice(1));
      $_ComboUtils$$.$each2$($children$$2$$, function($i$$174$$, $elm$$2$$) {
        $process$$1$$($elm$$2$$, $data$$83$$.$results$);
      });
      $query$$5$$.$callback$($data$$83$$);
    }) : "options" in $opts$$12$$ && ($opts$$12$$.$query$ = $_ComboUtils$$.$local$($opts$$12$$.options, $opts$$12$$.optionsKeys ? $opts$$12$$.optionsKeys : null));
    return $opts$$12$$;
  }, $_triggerSelect$:function($data$$84_evt$$19$$) {
    $data$$84_evt$$19$$ = $$$$12$$.Event(this.$_elemNm$ + "-selecting", {val:this.id($data$$84_evt$$19$$), object:$data$$84_evt$$19$$});
    this.$opts$.element.trigger($data$$84_evt$$19$$);
    return!$data$$84_evt$$19$$.isDefaultPrevented();
  }, $_isInterfaceEnabled$:function() {
    return!0 === this.$enabledInterface$;
  }, $_enableInterface$:function() {
    var $enabled$$ = this.$_enabled$ && !this.$_readonly$;
    if ($enabled$$ === this.$enabledInterface$) {
      return!1;
    }
    this.$container$.toggleClass("oj-disabled", !$enabled$$);
    this.close();
    this.$enabledInterface$ = $enabled$$;
    return!0;
  }, $_enable$:function($enabled$$1$$) {
    void 0 === $enabled$$1$$ && ($enabled$$1$$ = !0);
    this.$_enabled$ !== $enabled$$1$$ && (this.$_enabled$ = $enabled$$1$$, this.$opts$.element.prop("disabled", !$enabled$$1$$), this.$_enableInterface$());
  }, $_disable$:function() {
    this.$_enable$(!1);
  }, $_readonly$:function($enabled$$2$$) {
    void 0 === $enabled$$2$$ && ($enabled$$2$$ = !1);
    if (this.$_readonly$ === $enabled$$2$$) {
      return!1;
    }
    this.$_readonly$ = $enabled$$2$$;
    this.$opts$.element.prop("readonly", $enabled$$2$$);
    this.$_enableInterface$();
    return!0;
  }, $_opened$:function() {
    return this.$container$.hasClass("oj-listbox-dropdown-open");
  }, $_positionDropdown$:function() {
    var $$dropdown$$ = this.$dropdown$, $offset$$18$$ = this.$container$.offset(), $dropTop_height$$14$$ = this.$container$.outerHeight(!1), $css_width$$15$$ = this.$container$.outerWidth(!1), $above_dropHeight$$ = $$dropdown$$.outerHeight(!1), $$window_bodyOffset$$ = $$$$12$$(window), $windowWidth$$ = $$window_bodyOffset$$.width(), $windowHeight$$ = $$window_bodyOffset$$.height(), $enoughRoomOnRight_viewPortRight$$ = $$window_bodyOffset$$.scrollLeft() + $windowWidth$$, $enoughRoomBelow_viewportBottom$$ = 
    $$window_bodyOffset$$.scrollTop() + $windowHeight$$, $dropTop_height$$14$$ = $offset$$18$$.top + $dropTop_height$$14$$, $dropLeft$$ = $offset$$18$$.left, $enoughRoomBelow_viewportBottom$$ = $dropTop_height$$14$$ + $above_dropHeight$$ <= $enoughRoomBelow_viewportBottom$$, $enoughRoomAbove$$ = $offset$$18$$.top - $above_dropHeight$$ >= this.body().scrollTop(), $dropWidth$$ = $$dropdown$$.outerWidth(!1), $enoughRoomOnRight_viewPortRight$$ = $dropLeft$$ + $dropWidth$$ <= $enoughRoomOnRight_viewPortRight$$, 
    $changeDirection$$;
    $$dropdown$$.hasClass("oj-listbox-drop-above") ? ($above_dropHeight$$ = !0, !$enoughRoomAbove$$ && $enoughRoomBelow_viewportBottom$$ && ($changeDirection$$ = !0, $above_dropHeight$$ = !1)) : ($above_dropHeight$$ = !1, !$enoughRoomBelow_viewportBottom$$ && $enoughRoomAbove$$ && ($above_dropHeight$$ = $changeDirection$$ = !0));
    $changeDirection$$ ? ($$dropdown$$.hide(), $offset$$18$$ = this.$container$.offset(), $dropTop_height$$14$$ = this.$container$.outerHeight(!1), $css_width$$15$$ = this.$container$.outerWidth(!1), $$dropdown$$.outerHeight(!1), $enoughRoomOnRight_viewPortRight$$ = $$window_bodyOffset$$.scrollLeft() + $windowWidth$$, $$window_bodyOffset$$.scrollTop(), $dropTop_height$$14$$ = $offset$$18$$.top + $dropTop_height$$14$$, !$above_dropHeight$$ && this.$_hasSearchBox$() && ($dropTop_height$$14$$ -= 1), 
    $dropLeft$$ = $offset$$18$$.left, $dropWidth$$ = $$dropdown$$.outerWidth(!1), $enoughRoomOnRight_viewPortRight$$ = $dropLeft$$ + $dropWidth$$ <= $enoughRoomOnRight_viewPortRight$$, $$dropdown$$.show()) : !$above_dropHeight$$ && this.$_hasSearchBox$() && ($dropTop_height$$14$$ -= 1);
    "static" !== this.body().css("position") && ($$window_bodyOffset$$ = this.body().offset(), $dropTop_height$$14$$ -= $$window_bodyOffset$$.top, $dropLeft$$ -= $$window_bodyOffset$$.left);
    $enoughRoomOnRight_viewPortRight$$ || ($dropLeft$$ = $offset$$18$$.left + $css_width$$15$$ - $dropWidth$$);
    $css_width$$15$$ = {left:$dropLeft$$, width:$css_width$$15$$};
    $above_dropHeight$$ ? ($css_width$$15$$.bottom = $windowHeight$$ - $offset$$18$$.top, $css_width$$15$$.top = "auto", this.$container$.addClass("oj-listbox-drop-above"), $$dropdown$$.addClass("oj-listbox-drop-above")) : ($css_width$$15$$.top = $dropTop_height$$14$$, $css_width$$15$$.bottom = "auto", this.$container$.removeClass("oj-listbox-drop-above"), $$dropdown$$.removeClass("oj-listbox-drop-above"));
    $$dropdown$$.css($css_width$$15$$);
  }, $_shouldOpen$:function() {
    var $event$$85$$;
    if (this.$_opened$() || !1 === this.$_enabled$ || !0 === this.$_readonly$) {
      return!1;
    }
    $event$$85$$ = $$$$12$$.Event(this.$_elemNm$ + "-opening");
    this.$opts$.element.trigger($event$$85$$);
    return!$event$$85$$.isDefaultPrevented();
  }, $_clearDropdownAlignmentPreference$:function() {
    this.$container$.removeClass("oj-listbox-drop-above");
    this.$dropdown$.removeClass("oj-listbox-drop-above");
  }, open:function($e$$56$$) {
    if (!this.$_shouldOpen$($e$$56$$)) {
      return!1;
    }
    this.$_opening$();
    return!0;
  }, $_opening$:function() {
    var $cid$$6$$ = this.$containerId$, $scroll$$ = "scroll." + $cid$$6$$, $resize$$ = "resize." + $cid$$6$$, $orient$$ = "orientationchange." + $cid$$6$$;
    this.$container$.addClass("oj-listbox-dropdown-open");
    this.$_clearDropdownAlignmentPreference$();
    this.$dropdown$[0] !== this.body().children().last()[0] && this.$dropdown$.detach().appendTo(this.body());
    this.$dropdown$.appendTo(this.body());
    $$$$12$$("#oj-listbox-drop").removeAttr("id");
    this.$dropdown$.attr("id", "oj-listbox-drop");
    this.$_positionDropdown$();
    this.$dropdown$.show();
    this.$_positionDropdown$();
    this.$_getActiveContainer$().attr("aria-expanded", !0);
    var $that$$2$$ = this;
    this.$container$.parents().add(window).each(function() {
      $$$$12$$(this).on($resize$$ + " " + $scroll$$ + " " + $orient$$, function() {
        $that$$2$$.$_positionDropdown$();
      });
    });
  }, close:function() {
    if (this.$_opened$()) {
      var $cid$$7$$ = this.$containerId$, $scroll$$1$$ = "scroll." + $cid$$7$$, $resize$$1$$ = "resize." + $cid$$7$$, $orient$$1$$ = "orientationchange." + $cid$$7$$;
      this.$container$.parents().add(window).each(function() {
        $$$$12$$(this).off($scroll$$1$$).off($resize$$1$$).off($orient$$1$$);
      });
      this.$_clearDropdownAlignmentPreference$();
      this.$dropdown$.removeAttr("id");
      this.$dropdown$.hide();
      this.$container$.removeClass("oj-listbox-dropdown-open");
      this.$results$.empty();
      this.$_getActiveContainer$().attr("aria-expanded", !1);
    }
  }, $_clearSearch$:function() {
  }, $_ensureHighlightVisible$:function() {
    var $results$$6$$ = this.$results$, $children$$3_more_rb$$, $index$$136$$, $child$$5$$, $hb_y$$37$$;
    $index$$136$$ = this.$_highlight$();
    0 > $index$$136$$ || (0 == $index$$136$$ ? $results$$6$$.scrollTop(0) : ($children$$3_more_rb$$ = this.$_findHighlightableChoices$().find(".oj-listbox-result-label"), $child$$5$$ = $$$$12$$($children$$3_more_rb$$[$index$$136$$]), $hb_y$$37$$ = $child$$5$$.offset().top + $child$$5$$.outerHeight(!0), $index$$136$$ === $children$$3_more_rb$$.length - 1 && ($children$$3_more_rb$$ = $results$$6$$.find("li.oj-listbox-more-results"), 0 < $children$$3_more_rb$$.length && ($hb_y$$37$$ = $children$$3_more_rb$$.offset().top + 
    $children$$3_more_rb$$.outerHeight(!0))), $children$$3_more_rb$$ = $results$$6$$.offset().top + $results$$6$$.outerHeight(!0), $hb_y$$37$$ > $children$$3_more_rb$$ && $results$$6$$.scrollTop($results$$6$$.scrollTop() + ($hb_y$$37$$ - $children$$3_more_rb$$)), $hb_y$$37$$ = $child$$5$$.offset().top - $results$$6$$.offset().top, 0 > $hb_y$$37$$ && "none" != $child$$5$$.css("display") && $results$$6$$.scrollTop($results$$6$$.scrollTop() + $hb_y$$37$$)));
  }, $_findHighlightableChoices$:function() {
    return this.$results$.find(".oj-listbox-result-selectable:not(.oj-disabled, .oj-selected)");
  }, $_moveHighlight$:function($delta$$2$$) {
    for (var $choices$$ = this.$_findHighlightableChoices$(), $index$$137$$ = this.$_highlight$();-1 <= $index$$137$$ && $index$$137$$ < $choices$$.length;) {
      var $index$$137$$ = $index$$137$$ + $delta$$2$$, $choice$$ = $$$$12$$($choices$$[$index$$137$$]);
      if ($choice$$.hasClass("oj-listbox-result-selectable") && !$choice$$.hasClass("oj-disabled") && !$choice$$.hasClass("oj-selected")) {
        this.$_highlight$($index$$137$$);
        break;
      }
    }
  }, $_highlight$:function($index$$138$$) {
    var $choice$$1_choices$$1$$ = this.$_findHighlightableChoices$();
    if (0 === arguments.length) {
      return $choice$$1_choices$$1$$.get().indexOf($choice$$1_choices$$1$$.filter(".oj-hover")[0]);
    }
    $index$$138$$ >= $choice$$1_choices$$1$$.length && ($index$$138$$ = $choice$$1_choices$$1$$.length - 1);
    0 > $index$$138$$ && ($index$$138$$ = 0);
    this.$_removeHighlight$();
    $choice$$1_choices$$1$$ = $$$$12$$($choice$$1_choices$$1$$[$index$$138$$]);
    $choice$$1_choices$$1$$.addClass("oj-hover");
    this.$_getActiveContainer$().attr("aria-activedescendant", $choice$$1_choices$$1$$.find(".oj-listbox-result-label").attr("id"));
    this.$_ensureHighlightVisible$();
  }, $_removeHighlight$:function() {
    this.$results$.find(".oj-hover").removeClass("oj-hover");
  }, $_highlightUnderEvent$:function($el$$5_event$$87$$) {
    $el$$5_event$$87$$ = $$$$12$$($el$$5_event$$87$$.target).closest(".oj-listbox-result-selectable");
    if (0 < $el$$5_event$$87$$.length && !$el$$5_event$$87$$.is(".oj-hover")) {
      var $choices$$2$$ = this.$_findHighlightableChoices$();
      this.$_highlight$($choices$$2$$.index($el$$5_event$$87$$));
    } else {
      0 == $el$$5_event$$87$$.length && this.$_removeHighlight$();
    }
  }, $_updateResults$:function($initial$$) {
    var $search$$2$$ = this.search, $results$$7$$ = this.$results$, $opts$$13$$ = this.$opts$, $self$$56$$ = this, $input$$2_term$$2$$;
    $input$$2_term$$2$$ = $search$$2$$.val();
    var $lastTerm$$ = $$$$12$$.data(this.$container$, this.$_classNm$ + "-last-term"), $queryNumber$$;
    !0 !== $initial$$ && $lastTerm$$ && $input$$2_term$$2$$ === $lastTerm$$ || ($$$$12$$.data(this.$container$, this.$_classNm$ + "-last-term", $input$$2_term$$2$$), $queryNumber$$ = ++this.$queryCount$, this.$_removeHighlight$(), $input$$2_term$$2$$ = this.search.val(), this.$resultsPage$ = 1, $opts$$13$$.$query$({element:$opts$$13$$.element, $term$:void 0 !== $input$$2_term$$2$$ && null != $input$$2_term$$2$$ && !0 !== $initial$$ ? $input$$2_term$$2$$ : "", page:this.$resultsPage$, context:null, 
    $matcher$:$opts$$13$$.$matcher$, $callback$:this.$_bind$(function($data$$87_html$$inline_679$$) {
      $queryNumber$$ == this.$queryCount$ && this.$_opened$() && (this.context = $data$$87_html$$inline_679$$ && void 0 !== $data$$87_html$$inline_679$$.context ? $data$$87_html$$inline_679$$.context : null, $data$$87_html$$inline_679$$ && 0 !== $data$$87_html$$inline_679$$.$results$.length || !$_ComboUtils$$.$checkFormatter$($self$$56$$.$ojContext$, $opts$$13$$.$formatNoMatches$, "formatNoMatches") ? ($results$$7$$.empty(), $self$$56$$.$opts$.$populateResults$.call(this, $results$$7$$, $data$$87_html$$inline_679$$.$results$, 
      {$term$:$search$$2$$.val(), page:this.$resultsPage$, context:null}, this.$_showPlaceholder$()), this.$_postprocessResults$($data$$87_html$$inline_679$$, $initial$$), $self$$56$$.$_positionDropdown$()) : "oj-select" == this.$_classNm$ ? ($data$$87_html$$inline_679$$ = "\x3cli class\x3d'oj-listbox-no-results'\x3e" + $opts$$13$$.$formatNoMatches$($self$$56$$.$ojContext$, $search$$2$$.val()) + "\x3c/li\x3e", $results$$7$$.html($data$$87_html$$inline_679$$), $self$$56$$.$_positionDropdown$()) : 
      this.close());
    })}));
  }, $_cancel$:function($event$$88$$) {
    this.close($event$$88$$);
  }, $_focusSearch$:function() {
    $_ComboUtils$$.$_focus$(this.search);
  }, $_selectHighlighted$:function($options$$245$$, $event$$89$$) {
    var $index$$139$$ = this.$_highlight$(), $data$$88$$ = this.$results$.find(".oj-hover").closest(".oj-listbox-result").data(this.$_elemNm$);
    $data$$88$$ ? (this.$_highlight$($index$$139$$), this.$_onSelect$($data$$88$$, $options$$245$$, $event$$89$$)) : $options$$245$$ && $options$$245$$.$noFocus$ && this.close($event$$89$$);
  }, $_getPlaceholder$:function() {
    return this.$opts$.element.attr("placeholder") || this.$opts$.element.attr("data-placeholder") || this.$opts$.element.data("placeholder") || this.$opts$.placeholder;
  }, $_setPlaceholder$:function() {
    var $placeholder$$1$$ = this.$_getPlaceholder$();
    $placeholder$$1$$ && (this.search.attr("placeholder", $placeholder$$1$$), this.$container$.removeClass(this.$_classNm$ + "-allowclear"));
  }, $_initContainerWidth$:function() {
    var $attrs$$inline_682_style$$inline_681_width$$16$$;
    a: {
      var $attr$$inline_686_matches$$inline_683$$, $i$$inline_684$$, $l$$inline_685$$;
      $attrs$$inline_682_style$$inline_681_width$$16$$ = this.$opts$.element.attr("style");
      if (void 0 !== $attrs$$inline_682_style$$inline_681_width$$16$$) {
        for ($attrs$$inline_682_style$$inline_681_width$$16$$ = $attrs$$inline_682_style$$inline_681_width$$16$$.split(";"), $i$$inline_684$$ = 0, $l$$inline_685$$ = $attrs$$inline_682_style$$inline_681_width$$16$$.length;$i$$inline_684$$ < $l$$inline_685$$;$i$$inline_684$$ += 1) {
          if ($attr$$inline_686_matches$$inline_683$$ = $attrs$$inline_682_style$$inline_681_width$$16$$[$i$$inline_684$$].replace(/\s/g, ""), $attr$$inline_686_matches$$inline_683$$ = $attr$$inline_686_matches$$inline_683$$.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== $attr$$inline_686_matches$$inline_683$$ && 1 <= $attr$$inline_686_matches$$inline_683$$.length) {
            $attrs$$inline_682_style$$inline_681_width$$16$$ = $attr$$inline_686_matches$$inline_683$$[1];
            break a;
          }
        }
      }
      $attrs$$inline_682_style$$inline_681_width$$16$$ = void 0;
    }
    null !== $attrs$$inline_682_style$$inline_681_width$$16$$ && this.$container$.css("width", $attrs$$inline_682_style$$inline_681_width$$16$$);
  }, $getVal$:function() {
    return this.$ojContext$.option("value");
  }, $setVal$:function($val$$30$$, $event$$90$$) {
    "string" === typeof $val$$30$$ ? this.$ojContext$.$_SetValue$([$val$$30$$], $event$$90$$, {$doValueChangeCheck$:!1}) : this.$ojContext$.$_SetValue$($val$$30$$, $event$$90$$, {$doValueChangeCheck$:!1});
    this.$opts$.element.val($val$$30$$);
  }, $_showPlaceholder$:function() {
    return!1;
  }, $_getActiveContainer$:function() {
    return this.search;
  }, $_hasSearchBox$:function() {
    return void 0 !== this.$opts$.minimumResultsForSearch && void 0 !== this.$container$.$_hasSearchBox$;
  }}), $_ojChoice_defaults$$ = {$closeOnSelect$:!0, $openOnEnter$:!0, $formatNoMatches$:function() {
    return "No matches found";
  }, id:function($e$$58$$) {
    return $e$$58$$.id;
  }, $matcher$:function($term$$3$$, $text$$10$$) {
    return 0 <= ("" + $text$$10$$).toUpperCase().indexOf(("" + $term$$3$$).toUpperCase());
  }, separator:",", $escapeMarkup$:$_ComboUtils$$.$defaultEscapeMarkup$, $blurOnChange$:!1, $selectOnBlur$:!1}, $_AbstractSingleChoice$$ = $_ComboUtils$$.$clazz$($_AbstractOjChoice$$, {$_enableInterface$:function() {
    $_AbstractSingleChoice$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$());
  }, $_focus$:function() {
    this.$_opened$() && this.close();
  }, _destroy:function() {
    $$$$12$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
    $_AbstractSingleChoice$$.$superclass$._destroy.apply(this, arguments);
  }, $_clear$:function($event$$91$$) {
    this.selection.data(this.$_elemNm$) && ($event$$91$$ || $oj$$12$$.$Logger$.warn("Event should not be null when user modified the value in UI"), this.$setVal$([], $event$$91$$), this.search.val(""), this.selection.removeData(this.$_elemNm$));
    this.$_setPlaceholder$();
  }, $_initSelection$:function() {
    this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, this.$_bind$(this.$_updateSelectedOption$));
  }, $_containerKeydownHandler$:function($e$$59$$) {
    if (this.$_isInterfaceEnabled$()) {
      if ($e$$59$$.which === $_ComboUtils$$.$KEY$.PAGE_UP || $e$$59$$.which === $_ComboUtils$$.$KEY$.PAGE_DOWN) {
        $_ComboUtils$$.$killEvent$($e$$59$$);
      } else {
        switch($e$$59$$.which) {
          case $_ComboUtils$$.$KEY$.UP:
          ;
          case $_ComboUtils$$.$KEY$.DOWN:
            this.$_opened$() ? this.$_moveHighlight$($e$$59$$.which === $_ComboUtils$$.$KEY$.UP ? -1 : 1) : this.open($e$$59$$);
            $_ComboUtils$$.$killEvent$($e$$59$$);
            return;
          case $_ComboUtils$$.$KEY$.ENTER:
            this.$_selectHighlighted$(null, $e$$59$$);
            $_ComboUtils$$.$killEvent$($e$$59$$);
            return;
          case $_ComboUtils$$.$KEY$.TAB:
            this.close($e$$59$$);
            return;
          case $_ComboUtils$$.$KEY$.$ESC$:
            this.$_cancel$($e$$59$$);
            $_ComboUtils$$.$killEvent$($e$$59$$);
            return;
        }
        this.$_userTyping$ = !0;
        this.$_opened$() || this.open($e$$59$$);
      }
    }
  }, $_containerKeyupHandler$:function($e$$60$$) {
    this.$_isInterfaceEnabled$() && !this.$_opened$() && this.open($e$$60$$);
  }, $_initContainer$:function() {
    var $container$$5_selection$$1$$;
    $container$$5_selection$$1$$ = this.$container$;
    var $idSuffix$$ = $_ComboUtils$$.$nextUid$(), $elementLabel$$;
    this.selection = $container$$5_selection$$1$$ = $container$$5_selection$$1$$.find("." + this.$_classNm$ + "-choice");
    $container$$5_selection$$1$$.attr("id", this.$_classNm$ + "-choice-" + $idSuffix$$);
    $elementLabel$$ = $$$$12$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
    $elementLabel$$.attr("id") || $elementLabel$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix$$);
    $container$$5_selection$$1$$.find("." + this.$_classNm$ + "-input").attr("id", this.$_classNm$ + "-input-" + $idSuffix$$);
    this.$results$.attr("id", "oj-listbox-results-" + $idSuffix$$);
    this.search.attr("aria-owns", "oj-listbox-results-" + $idSuffix$$);
    this.search.attr("aria-labelledby", $elementLabel$$.attr("id"));
    $container$$5_selection$$1$$.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
    $container$$5_selection$$1$$.on("mousedown", "abbr", this.$_bind$(function($e$$61$$) {
      this.$_isInterfaceEnabled$() && (this.$_clear$($e$$61$$), $_ComboUtils$$.$killEventImmediately$($e$$61$$), this.close($e$$61$$), this.selection.focus());
    }));
    $container$$5_selection$$1$$.on("mousedown", this.$_bind$(function($e$$62$$) {
      this.$opts$.element.prop("disabled") && $_ComboUtils$$.$killEvent$($e$$62$$);
      this.$_opened$() ? this.close($e$$62$$) : this.$_isInterfaceEnabled$() && this.open($e$$62$$);
      this.search.focus();
    }));
    $container$$5_selection$$1$$.on("focus", this.$_bind$(function($e$$63$$) {
      $_ComboUtils$$.$killEvent$($e$$63$$);
    }));
    this.search.on("blur", this.$_bind$(function($e$$64_formatted$$1$$) {
      if (void 0 !== this.search.val() && 0 >= this.$results$.children().length) {
        if (this.$opts$.manageNewEntry) {
          if (!this.selection.data("ojcombobox") && "" !== this.search.val() || this.selection.data("ojcombobox") && this.selection.data("ojcombobox").label !== this.search.val()) {
            var $data$$90$$ = this.$opts$.manageNewEntry(this.search.val());
            this.$_onSelect$($data$$90$$, null, $e$$64_formatted$$1$$);
          }
        } else {
          null == this.$opts$.manageNewEntry && ($data$$90$$ = this.selection.data(this.$_elemNm$), "" == this.search.val() ? this.$_clear$($e$$64_formatted$$1$$) : $data$$90$$ || "" === this.search.val() ? ($e$$64_formatted$$1$$ = this.$opts$.$formatSelection$($data$$90$$, 0, this.$opts$.$escapeMarkup$), void 0 !== $e$$64_formatted$$1$$ && this.search.val($e$$64_formatted$$1$$)) : this.$_clearSearch$());
        }
      }
      this.search.removeClass(this.$_classNm$ + "-focused");
    }));
    this.$_initContainerWidth$();
    this.$opts$.element.hide().attr("aria-hidden", !0);
    this.$_setPlaceholder$();
  }, $_prepareOpts$:function() {
    var $opts$$14$$ = $_AbstractSingleChoice$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$58$$ = this, $tagName$$3$$ = $opts$$14$$.element.get(0).tagName.toLowerCase();
    if ("input" === $tagName$$3$$ && $opts$$14$$.element.attr("list") || "select" === $tagName$$3$$ && 0 < $opts$$14$$.element.children().length) {
      $opts$$14$$.$initSelection$ = function $$opts$$14$$$$initSelection$$($element$$53$$, $callback$$85$$) {
        var $selected$$1$$, $value$$166$$ = $self$$58$$.$getVal$();
        Array.isArray($value$$166$$) && ($value$$166$$ = $value$$166$$[0]);
        $selected$$1$$ = void 0 !== $value$$166$$ && null !== $value$$166$$ ? $self$$58$$.$_optionToData$($element$$53$$.find("option").filter(function() {
          return this.value === $value$$166$$;
        })) : $self$$58$$.$_optionToData$($element$$53$$.find("option").filter(function() {
          return this.selected;
        }));
        $callback$$85$$($selected$$1$$);
      };
    } else {
      if ("options" in $opts$$14$$ || this.$getVal$() && 0 < this.$getVal$().length) {
        $opts$$14$$.$initSelection$ = $opts$$14$$.$initSelection$ || function($element$$54$$, $callback$$86$$) {
          var $id$$16$$ = "";
          $self$$58$$.$getVal$() && $self$$58$$.$getVal$().length && ($id$$16$$ = $self$$58$$.$getVal$()[0]);
          var $first$$5$$ = null, $match$$15$$ = null;
          $opts$$14$$.$query$({$matcher$:function($is_match_term$$4$$, $text$$11$$, $el$$6$$) {
            ($is_match_term$$4$$ = $id$$16$$ === $opts$$14$$.id($el$$6$$)) && ($match$$15$$ = $el$$6$$);
            $first$$5$$ || ($first$$5$$ = $el$$6$$);
            return $is_match_term$$4$$;
          }, $callback$:$$$$12$$.isFunction($callback$$86$$) ? function() {
            $match$$15$$ || "select" !== $tagName$$3$$ || ($match$$15$$ = $first$$5$$);
            $callback$$86$$($match$$15$$);
          } : $$$$12$$.noop});
        };
      }
    }
    return $opts$$14$$;
  }, $_postprocessResults$:function($data$$91_highlightableChoices$$, $initial$$1$$, $noHighlightUpdate$$) {
    var $selected$$2$$ = -1, $self$$59$$ = this;
    $data$$91_highlightableChoices$$ = this.$_findHighlightableChoices$();
    $_ComboUtils$$.$each2$($data$$91_highlightableChoices$$, function($i$$176$$, $elm$$3$$) {
      if ($self$$59$$.$getVal$() && $self$$59$$.$getVal$()[0] === $self$$59$$.id($elm$$3$$.data($self$$59$$.$_elemNm$))) {
        return $selected$$2$$ = $i$$176$$, !1;
      }
    });
    !1 !== $noHighlightUpdate$$ && !0 === $initial$$1$$ && 0 <= $selected$$2$$ && this.$_highlight$($selected$$2$$);
  }, $_onSelect$:function($data$$92$$, $options$$246$$, $event$$92$$) {
    this.$_triggerSelect$($data$$92$$) && (this.$getVal$() && this.$getVal$(), this.$_updateSelection$($data$$92$$), this.close($event$$92$$), this.$setVal$(0 === this.id($data$$92$$).length ? [] : this.id($data$$92$$), $event$$92$$));
  }, $_shouldOpen$:function($e$$65$$) {
    return this.$_opened$() || !1 === this.$_enabled$ || !0 === this.$_readonly$ ? !1 : this.$ojContext$._trigger("beforeExpand", $e$$65$$, {component:this.$opts$.element});
  }, $_clearSearch$:function() {
    this.search.val("");
  }}), $_OjSingleCombobox$$ = $_ComboUtils$$.$clazz$($_AbstractSingleChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-combobox oj-component"}).html("\x3cdiv class\x3d'oj-combobox-choice' tabindex\x3d'-1' role\x3d'presentation'\x3e   \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'       spellcheck\x3d'false' class\x3d'oj-combobox-input' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e   \x3cabbr class\x3d'oj-combobox-clear-entry' role\x3d'presentation'\x3e\x3c/abbr\x3e   \x3ca class\x3d'oj-combobox-arrow' role\x3d'presentation'\x3e\x3cb class\x3d'oj-combobox-icon oj-component-icon oj-clickable-icon oj-combobox-open-icon' role\x3d'presentation'\x3e\x3c/b\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop' style\x3d'display:none' role\x3d'presentation'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }, $_enable$:function($enabled$$3$$) {
    $_OjSingleCombobox$$.$superclass$.$_enable$.apply(this, arguments);
    this.$_enabled$ ? this.$container$.find(".oj-combobox-arrow").removeClass("oj-disabled") : this.$container$.find(".oj-combobox-arrow").addClass("oj-disabled");
  }, close:function($event$$93$$) {
    this.$_opened$() && $_OjSingleCombobox$$.$superclass$.close.apply(this, arguments);
  }, $_opening$:function($event$$94$$) {
    var $el$$7_range$$19$$, $len$$12$$;
    $_OjSingleCombobox$$.$superclass$.$_opening$.apply(this, arguments);
    $el$$7_range$$19$$ = this.search.get(0);
    $el$$7_range$$19$$.createTextRange ? ($el$$7_range$$19$$ = $el$$7_range$$19$$.createTextRange(), $el$$7_range$$19$$.collapse(!1), $el$$7_range$$19$$.select()) : $el$$7_range$$19$$.setSelectionRange && ($len$$12$$ = this.search.val().length, $el$$7_range$$19$$.setSelectionRange($len$$12$$, $len$$12$$));
    this.$_updateResults$(!0);
  }, $_updateSelection$:function($data$$93_formatted$$2$$) {
    this.selection.data(this.$_elemNm$, $data$$93_formatted$$2$$);
    null !== $data$$93_formatted$$2$$ ? ($data$$93_formatted$$2$$ = this.$opts$.$formatSelection$($data$$93_formatted$$2$$, 0, this.$opts$.$escapeMarkup$), void 0 !== $data$$93_formatted$$2$$ && this.search.val($data$$93_formatted$$2$$), this.search.removeClass(this.$_classNm$ + "-default")) : this.$_setPlaceholder$();
    this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear");
  }, $_updateSelectedOption$:function($data$$94_selected$$3_value$$167$$) {
    if (void 0 === $data$$94_selected$$3_value$$167$$ || null === $data$$94_selected$$3_value$$167$$) {
      $data$$94_selected$$3_value$$167$$ = ($data$$94_selected$$3_value$$167$$ = this.$getVal$()) ? Array.isArray($data$$94_selected$$3_value$$167$$) ? Array.isArray($data$$94_selected$$3_value$$167$$) && $data$$94_selected$$3_value$$167$$.length ? {label:$data$$94_selected$$3_value$$167$$[0]} : null : {label:$data$$94_selected$$3_value$$167$$} : null;
    }
    this.$_updateSelection$($data$$94_selected$$3_value$$167$$);
  }}), $_OjSingleSelect$$ = $_ComboUtils$$.$clazz$($_AbstractSingleChoice$$, {$_elemNm$:"ojselect", $_classNm$:"oj-select", $_userTyping$:!1, $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-select oj-component"}).html("\x3cdiv class\x3d'oj-select-choice' tabindex\x3d'0' role\x3d'combobox'      aria-autocomplete\x3d'none' aria-expanded\x3d'false' aria-ready\x3d'true'\x3e  \x3cspan class\x3d'oj-select-chosen'\x3e\x3c/span\x3e  \x3cabbr class\x3d'oj-select-search-choice-close' role\x3d'presentation'\x3e\x3c/abbr\x3e  \x3ca class\x3d'oj-select-arrow' role\x3d'presentation'\x3e    \x3cb class\x3d'oj-component-icon oj-clickable-icon oj-select-open-icon' role\x3d'presentation'\x3e\x3c/b\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop' style\x3d'display:none' role\x3d'presentation'\x3e  \x3cdiv class\x3d'oj-listbox-search-wrapper'\x3e  \x3cdiv class\x3d'oj-listbox-search'\x3e    \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'           spellcheck\x3d'false' class\x3d'oj-listbox-input' title\x3d'Search field'            role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e    \x3cspan class\x3d'oj-listbox-spyglass-box'\x3e      \x3cspan class\x3d'oj-component-icon oj-clickable-icon oj-listbox-search-icon' role\x3d'presentation'\x3e       \x3cb role\x3d'presentation'\x3e\x3c/b\x3e\x3c/span\x3e    \x3c/span\x3e  \x3c/div\x3e  \x3c/div\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }, $_enable$:function($enabled$$4$$) {
    $_OjSingleSelect$$.$superclass$.$_enable$.apply(this, arguments);
    this.$_enabled$ ? (this.$container$.find(".oj-select-choice").attr("tabindex", "0"), this.$container$.find(".oj-select-arrow").removeClass("oj-disabled")) : (this.$container$.find(".oj-select-choice").attr("tabindex", "-1"), this.$container$.find(".oj-select-arrow").addClass("oj-disabled"));
  }, close:function($event$$95$$) {
    this.$_opened$() && ($_OjSingleSelect$$.$superclass$.close.apply(this, arguments), this.$_testClear$($event$$95$$) || this.$_clearSearch$(), $_ComboUtils$$.$_focus$(this.selection), this.$container$.find(".oj-listbox-spyglass-box").off("mouseup click"));
  }, $_opening$:function($event$$96$$) {
    var $el$$8_range$$20$$, $len$$13$$;
    $_OjSingleSelect$$.$superclass$.$_opening$.apply(this, arguments);
    this.$_showSearchBox$();
    this.$_hasSearchBox$() && ($el$$8_range$$20$$ = this.search.get(0), $el$$8_range$$20$$.createTextRange ? ($el$$8_range$$20$$ = $el$$8_range$$20$$.createTextRange(), $el$$8_range$$20$$.collapse(!1), $el$$8_range$$20$$.select()) : $el$$8_range$$20$$.setSelectionRange && ($len$$13$$ = this.search.val().length, $el$$8_range$$20$$.setSelectionRange($len$$13$$, $len$$13$$)));
    this.$_updateResults$(!0);
  }, $_initContainer$:function() {
    var $selectedId$$ = this.$containerId$ + "_selected";
    this.text = this.$container$.find(".oj-select-chosen").attr("id", $selectedId$$);
    $_OjSingleSelect$$.$superclass$.$_initContainer$.apply(this, arguments);
    this.$container$.find(".oj-select-choice").attr({"aria-owns":this.search.attr("aria-owns"), "aria-labelledby":this.search.attr("aria-labelledby"), "aria-describedby":$selectedId$$});
    this.search.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
    this.search.on("keyup-change input", this.$_bind$(this.$_containerKeyupHandler$));
    var $self$$60$$ = this;
    this.selection.on("blur", function($e$$66$$) {
      $self$$60$$.$_testClear$($e$$66$$);
    });
  }, $_initSelection$:function() {
    this.$_isPlaceholderOptionSelected$() ? (this.$_updateSelection$(null), this.close(), this.$_setPlaceholder$()) : $_OjSingleSelect$$.$superclass$.$_initSelection$.apply(this, arguments);
  }, $_updateSelectedOption$:function($selected$$4$$) {
    if (void 0 !== $selected$$4$$ && null !== $selected$$4$$) {
      var $selectedVal$$, $value$$168$$ = this.$getVal$(), $value$$168$$ = Array.isArray($value$$168$$) ? $value$$168$$[0] : $value$$168$$;
      $selectedVal$$ = this.$opts$.id($selected$$4$$);
      $value$$168$$ !== $selectedVal$$ && (void 0 === $value$$168$$ || null === $value$$168$$ ? this.$ojContext$.options.value = Array.isArray($selectedVal$$) ? $selectedVal$$ : [$selectedVal$$] : this.$setVal$(Array.isArray($selectedVal$$) ? $selectedVal$$ : [$selectedVal$$]));
      this.$_updateSelection$($selected$$4$$);
      this.close();
    }
  }, $_updateSelection$:function($data$$95$$) {
    this.selection.data(this.$_elemNm$, $data$$95$$);
    null !== $data$$95$$ && this.text.text($data$$95$$.label);
    $data$$95$$ && "" != $data$$95$$.id && this.text.removeClass(this.$_classNm$ + "-default");
    this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear");
  }, $_getActiveContainer$:function() {
    return this.search.attr("aria-expanded") && this.$_hasSearchBox$() ? this.search : this.selection;
  }, $_isPlaceholderOptionSelected$:function() {
    if (null === this.$_getPlaceholder$()) {
      return!1;
    }
    var $cval$$ = this.$getVal$(), $cval$$ = Array.isArray($cval$$) ? $cval$$[0] : $cval$$;
    return "" === $cval$$ || void 0 === $cval$$ || null === $cval$$;
  }, $_getPlaceholder$:function() {
    return this.$opts$.placeholder;
  }, $_showPlaceholder$:function() {
    return!0;
  }, $_setPlaceholder$:function() {
    var $placeholder$$2$$ = this.$_getPlaceholder$();
    this.$_isPlaceholderOptionSelected$() && void 0 !== $placeholder$$2$$ && (void 0 === $placeholder$$2$$ && ($placeholder$$2$$ = ""), this.text.text($placeholder$$2$$).addClass(this.$_classNm$ + "-default"), this.$container$.removeClass(this.$_classNm$ + "-allowclear"));
  }, $setVal$:function($val$$32$$, $event$$97$$) {
    $_OjSingleSelect$$.$superclass$.$setVal$.call(this, $val$$32$$, $event$$97$$);
    this.selection.data("selectVal", $val$$32$$);
  }, $_containerKeydownHandler$:function($e$$67$$) {
    if (!$_ComboUtils$$.$KEY$.$isControl$($e$$67$$) && !$_ComboUtils$$.$KEY$.$isFunctionKey$($e$$67$$)) {
      switch($e$$67$$.which) {
        case $_ComboUtils$$.$KEY$.TAB:
          this.close($e$$67$$);
          this.selection.focus();
          this.$_testClear$($e$$67$$);
          return;
        case $_ComboUtils$$.$KEY$.ENTER:
          if ($e$$67$$.target === this.selection[0] && !this.$_opened$()) {
            this.open($e$$67$$);
            $_ComboUtils$$.$killEvent$($e$$67$$);
            return;
          }
        ;
      }
      $_OjSingleSelect$$.$superclass$.$_containerKeydownHandler$.apply(this, arguments);
    }
  }, $_testClear$:function($event$$98$$) {
    return "" == this.text.text() ? (this.$_clear$($event$$98$$), !0) : !1;
  }, $_showSearchBox$:function() {
    var $focusOnSearchBox$$ = !1, $searchBox$$ = this.$dropdown$.find(".oj-listbox-search");
    $searchBox$$ && (this.$_hasSearchBox$() ? (this.$dropdown$.find(".oj-listbox-search-wrapper").removeClass("oj-helper-hidden-accessible"), $$$$12$$($searchBox$$).removeAttr("aria-hidden"), $focusOnSearchBox$$ = !0) : (this.$dropdown$.find(".oj-listbox-search-wrapper").addClass("oj-helper-hidden-accessible"), $$$$12$$($searchBox$$).attr({"aria-hidden":"true"})));
    $_ComboUtils$$.$_focus$($focusOnSearchBox$$ ? this.search : this.selection);
    if ($focusOnSearchBox$$) {
      var $self$$61$$ = this;
      $searchBox$$.find(".oj-listbox-spyglass-box").on("mouseup click", function($e$$68$$) {
        $self$$61$$.search.focus();
        $e$$68$$.stopPropagation();
      });
    }
  }, $_hasSearchBox$:function() {
    return(this.$datalist$ ? this.$datalist$[0].length : this.$opts$.options ? this.$opts$.options.length : 0) > this.$opts$.minimumResultsForSearch || this.$_userTyping$;
  }});
  $oj$$12$$.$__registerWidget$("oj.ojCombobox", $$$$12$$.oj.editableValue, {defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:void 0, placeholder:void 0, multiple:!1, options:null, optionsKeys:null, beforeExpand:null}, widget:function() {
    return this.$combobox$.$container$;
  }, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, _InitOptions:function($originalDefaults$$6$$, $constructorOptions$$7$$) {
    this._super($originalDefaults$$6$$, $constructorOptions$$7$$);
    $oj$$12$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:null, validateOption:!0}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"required", defaultOptionValue:!1, coerceDomValue:!0, validateOption:!0}, {attribute:"title", defaultOptionValue:""}], $constructorOptions$$7$$, this);
    if (void 0 === this.options.value) {
      this.options.value = void 0 !== this.element.attr("value") ? $_ComboUtils$$.$splitVal$(this.element.val(), ",") : null;
    } else {
      var $value$$169$$ = this.options.value;
      Array.isArray($value$$169$$) ? $value$$169$$ = $value$$169$$.slice(0) : "string" === typeof $value$$169$$ && ($value$$169$$ = $_ComboUtils$$.$splitVal$($value$$169$$, ","));
      this.options.value = $value$$169$$;
    }
  }, $_setup$:function() {
    var $opts$$15$$, $multiple$$ = this.options.multiple;
    $opts$$15$$ = {};
    $opts$$15$$.element = this.element;
    $opts$$15$$.$ojContext$ = this;
    $opts$$15$$ = $$$$12$$.extend(this.options, $opts$$15$$);
    this.$combobox$ = $multiple$$ ? new $_OjMultiCombobox$$ : new $_OjSingleCombobox$$;
    this.$combobox$._init($opts$$15$$);
  }, _destroy:function() {
    this.$combobox$._destroy();
  }, refresh:function() {
    this._super();
    this.$combobox$._destroy();
    this.$_setup$();
  }, _setOption:function($key$$69$$, $value$$170$$, $flags$$25$$) {
    "value" === $key$$69$$ && (Array.isArray($value$$170$$) ? $value$$170$$ = $value$$170$$.slice(0) : "string" === typeof $value$$170$$ && ($value$$170$$ = $_ComboUtils$$.$splitVal$($value$$170$$, ",")));
    this._super($key$$69$$, $value$$170$$, $flags$$25$$);
    "options" === $key$$69$$ && this.refresh();
    "disabled" === $key$$69$$ && ($value$$170$$ ? this.$combobox$.$_disable$() : this.$combobox$.$_enable$());
  }, $_SetDisplayValue$:function() {
    this.$combobox$.$_initSelection$();
  }, _SetPlaceholder:function($value$$171$$) {
    this.$combobox$ && (this.$combobox$.$opts$.placeholder = $value$$171$$, this.$combobox$.$_setPlaceholder$ && this.$combobox$.$_setPlaceholder$());
  }, validate:function() {
    if (this.$combobox$) {
      return this.$_SetValue$(this.$combobox$.$getVal$(), null, this.$_VALIDATE_METHOD_OPTIONS$);
    }
  }, _GetMessagingLauncherElement:function() {
    return this.$combobox$.search;
  }, $_GetContentElement$:function() {
    return this.$combobox$.search;
  }, _GetDefaultStyleClass:function() {
    return "oj-combobox";
  }, getNodeBySubId:function($locator$$10_subId$$6$$) {
    var $node$$22$$ = null;
    if (null == $locator$$10_subId$$6$$) {
      return this.$combobox$.$container$ ? this.$combobox$.$container$[0] : null;
    }
    $node$$22$$ = this._super($locator$$10_subId$$6$$);
    if (!$node$$22$$) {
      switch($locator$$10_subId$$6$$ = $locator$$10_subId$$6$$.subId, "oj-combobox-drop" === $locator$$10_subId$$6$$ && ($locator$$10_subId$$6$$ = "oj-listbox-drop"), "oj-combobox-results" === $locator$$10_subId$$6$$ && ($locator$$10_subId$$6$$ = "oj-listbox-results"), "oj-combobox-selection" === $locator$$10_subId$$6$$ && ($locator$$10_subId$$6$$ = "oj-combobox-selected-choice"), $locator$$10_subId$$6$$) {
        case "oj-combobox-input":
        ;
        case "oj-combobox-arrow":
        ;
        case "oj-listbox-drop":
        ;
        case "oj-listbox-results":
          $node$$22$$ = this.widget().find("." + $locator$$10_subId$$6$$)[0];
          break;
        case "oj-combobox-selected-choice":
          $node$$22$$ = this.widget().find("." + $locator$$10_subId$$6$$);
      }
    }
    return $node$$22$$ || null;
  }});
  $oj$$12$$.$__registerWidget$("oj.ojSelect", $$$$12$$.oj.editableValue, {defaultElement:"\x3cselect\x3e", widgetEventPrefix:"oj", options:{minimumResultsForSearch:10, placeholder:void 0, options:null, optionsKeys:null, beforeExpand:null}, widget:function() {
    return this.select.$container$;
  }, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_setup$:function() {
    var $opts$$16$$ = {};
    $opts$$16$$.element = this.element;
    $opts$$16$$.$ojContext$ = this;
    $opts$$16$$ = $$$$12$$.extend(this.options, $opts$$16$$);
    this.select = new $_OjSingleSelect$$;
    this.select._init($opts$$16$$);
  }, refresh:function() {
    this._super();
    this.select._destroy();
    this.$_setup$();
  }, _destroy:function() {
    this.select._destroy();
  }, _SetPlaceholder:function() {
  }, $_HasPlaceholderSet$:function() {
    return "string" === typeof this.options.placeholder;
  }, $_ClearPlaceholder$:function() {
    this.$_SetPlaceholderOption$(null);
    this._SetPlaceholder(null);
  }, _InitOptions:function($originalDefaults$$7$$, $constructorOptions$$8$$) {
    this._super($originalDefaults$$7$$, $constructorOptions$$8$$);
    $oj$$12$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:null, validateOption:!0}, {attribute:"placeholder", defaultOptionValue:null}, {attribute:"required", defaultOptionValue:!1, coerceDomValue:!0, validateOption:!0}, {attribute:"title", defaultOptionValue:""}], $constructorOptions$$8$$, this);
    if (void 0 === this.options.value) {
      this.options.value = void 0 !== this.element.attr("value") ? $_ComboUtils$$.$splitVal$(this.element.val(), ",") : null;
    } else {
      var $value$$173$$ = this.options.value;
      Array.isArray($value$$173$$) && ($value$$173$$ = $value$$173$$.slice(0));
      this.options.value = $value$$173$$;
    }
  }, validate:function() {
    return this.$_SetValue$(this.select.$getVal$(), null, this.$_VALIDATE_METHOD_OPTIONS$);
  }, $_SetDisplayValue$:function() {
    this.select.$_initSelection$();
  }, _setOption:function($key$$70$$, $value$$174$$, $flags$$26$$) {
    "value" === $key$$70$$ ? Array.isArray($value$$174$$) && ($value$$174$$ = $value$$174$$.slice(0)) : "placeholder" === $key$$70$$ ? (this.select.$opts$.placeholder = $value$$174$$, this.select.$_setPlaceholder$()) : "minimumResultsForSearch" === $key$$70$$ && (this.select.$opts$.minimumResultsForSearch = $value$$174$$);
    this._super($key$$70$$, $value$$174$$, $flags$$26$$);
    "disabled" === $key$$70$$ ? $value$$174$$ ? this.select.$_disable$() : this.select.$_enable$() : "options" === $key$$70$$ && this.$_setup$();
  }, $_getDropdown$:function() {
    if (this.select && this.select.$_opened$()) {
      var $dropdown$$2$$ = $$$$12$$(".oj-listbox-drop");
      if ("oj-listbox-drop" == $dropdown$$2$$.attr("id") && $dropdown$$2$$.attr($oj$$12$$.$DomUtils$.$SURROGATE_ID$) == this.select.$containerId$) {
        return $dropdown$$2$$;
      }
    }
    return null;
  }, getNodeBySubId:function($index$$140_locator$$11$$) {
    var $node$$23$$ = null, $subId$$7$$;
    if (null == $index$$140_locator$$11$$) {
      return this.select.$container$ ? this.select.$container$[0] : null;
    }
    $node$$23$$ = this._super($index$$140_locator$$11$$);
    if (!$node$$23$$) {
      switch($subId$$7$$ = $index$$140_locator$$11$$.subId, "oj-select-drop" === $subId$$7$$ && ($subId$$7$$ = "oj-listbox-drop"), "oj-select-results" === $subId$$7$$ && ($subId$$7$$ = "oj-listbox-results"), "oj-select-search" === $subId$$7$$ && ($subId$$7$$ = "oj-listbox-search"), $subId$$7$$) {
        case "oj-select-choice":
        ;
        case "oj-select-chosen":
          $node$$23$$ = this.widget().find("." + $subId$$7$$)[0];
          break;
        case "oj-listbox-drop":
          var $ddlist_dropdown$$3$$ = this.$_getDropdown$();
          $ddlist_dropdown$$3$$ && ($node$$23$$ = $ddlist_dropdown$$3$$[0]);
          break;
        case "oj-listbox-input":
        ;
        case "oj-listbox-search":
        ;
        case "oj-listbox-results":
          ($ddlist_dropdown$$3$$ = this.$_getDropdown$()) && ($node$$23$$ = $ddlist_dropdown$$3$$.find("." + $subId$$7$$)[0]);
          break;
        case "oj-listbox-result-label":
          this.$_getDropdown$() && ($ddlist_dropdown$$3$$ = $$$$12$$("#" + this.select.$results$.attr("id")).children(), $index$$140_locator$$11$$ = $index$$140_locator$$11$$.index, $ddlist_dropdown$$3$$.length && $index$$140_locator$$11$$ < $ddlist_dropdown$$3$$.length && ($node$$23$$ = $ddlist_dropdown$$3$$.eq($index$$140_locator$$11$$).find("." + $subId$$7$$)[0]));
      }
    }
    return $node$$23$$ || null;
  }, _GetDefaultStyleClass:function() {
    return "oj-select";
  }, _GetMessagingLauncherElement:function() {
    return this.select.selection;
  }, $_GetContentElement$:function() {
    return this.select.selection;
  }});
  var $_OjMultiCombobox$$ = $_ComboUtils$$.$clazz$($_AbstractOjChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-combobox oj-combobox-multi oj-component"}).html("\x3cul class\x3d'oj-combobox-choices'\x3e  \x3cli class\x3d'oj-combobox-search-field'\x3e    \x3cinput type\x3d'text' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off' spellcheck\x3d'false' class\x3d'oj-combobox-input'\x3e  \x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'oj-combobox-description oj-helper-hidden-accessible'/\x3e\x3cdiv class\x3d'oj-listbox-drop oj-listbox-drop-multi' style\x3d'display:none'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }, $_prepareOpts$:function() {
    var $opts$$17$$ = $_OjMultiCombobox$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$62$$ = this;
    "input" === $opts$$17$$.element.get(0).tagName.toLowerCase() && $opts$$17$$.element.attr("list") ? $opts$$17$$.$initSelection$ = function $$opts$$17$$$$initSelection$$($element$$55$$, $callback$$87$$) {
      var $data$$96$$ = [];
      if ($self$$62$$.$getVal$() && $self$$62$$.$getVal$().length) {
        for (var $selected$$5$$, $ids$$ = $self$$62$$.$getVal$(), $i$$177$$ = 0;$i$$177$$ < $ids$$.length;$i$$177$$++) {
          var $id$$17$$ = $ids$$[$i$$177$$];
          ($selected$$5$$ = $element$$55$$.find("option").filter(function() {
            return this.value === $id$$17$$;
          })) && $selected$$5$$.length ? $data$$96$$.push($self$$62$$.$_optionToData$($selected$$5$$)) : $data$$96$$.push({value:$id$$17$$, label:$id$$17$$});
        }
      } else {
        $selected$$5$$ = $element$$55$$.find("option").filter(function() {
          return this.selected;
        }), $_ComboUtils$$.$each2$($selected$$5$$, function($i$$178$$, $elm$$4$$) {
          $data$$96$$.push($self$$62$$.$_optionToData$($elm$$4$$));
        });
      }
      $callback$$87$$($data$$96$$);
    } : "options" in $opts$$17$$ && ($opts$$17$$.$initSelection$ = $opts$$17$$.$initSelection$ || function($element$$56$$, $callback$$88$$) {
      var $ids$$1$$ = $self$$62$$.$getVal$(), $matches$$2$$ = [];
      $opts$$17$$.$query$({$matcher$:function($is_match$$1_term$$5$$, $text$$12$$, $el$$9$$) {
        ($is_match$$1_term$$5$$ = $$$$12$$.grep($ids$$1$$, function($id$$18$$) {
          return $id$$18$$ === $opts$$17$$.id($el$$9$$);
        }).length) && $matches$$2$$.push($el$$9$$);
        return $is_match$$1_term$$5$$;
      }, $callback$:$$$$12$$.isFunction($callback$$88$$) ? function() {
        for (var $ordered$$ = [], $i$$179$$ = 0;$i$$179$$ < $ids$$1$$.length;$i$$179$$++) {
          for (var $id$$19$$ = $ids$$1$$[$i$$179$$], $found$$3$$ = !1, $j$$27$$ = 0;$j$$27$$ < $matches$$2$$.length;$j$$27$$++) {
            var $match$$16$$ = $matches$$2$$[$j$$27$$];
            if ($id$$19$$ === $opts$$17$$.id($match$$16$$)) {
              $ordered$$.push($match$$16$$);
              $matches$$2$$.splice($j$$27$$, 1);
              $found$$3$$ = !0;
              break;
            }
          }
          $found$$3$$ || $ordered$$.push({value:$id$$19$$, label:$id$$19$$});
        }
        $callback$$88$$($ordered$$);
      } : $$$$12$$.noop});
    });
    return $opts$$17$$;
  }, $_selectChoice$:function($choice$$2$$) {
    var $selected$$6$$ = this.$container$.find("." + this.$_classNm$ + "-selected-choice.oj-focus");
    $selected$$6$$.length && $choice$$2$$ && $choice$$2$$[0] == $selected$$6$$[0] || ($selected$$6$$.length && this.$opts$.element.trigger("choice-deselected", $selected$$6$$), $selected$$6$$.removeClass("oj-focus"), $choice$$2$$ && $choice$$2$$.length && (this.close(), $choice$$2$$.addClass("oj-focus"), this.$container$.find(".oj-combobox-description").text($choice$$2$$.attr("valueText") + ". Press back space to delete.").attr("aria-live", "assertive"), this.$opts$.element.trigger("choice-selected", 
    $choice$$2$$)));
  }, _destroy:function() {
    $$$$12$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
    $_OjMultiCombobox$$.$superclass$._destroy.apply(this, arguments);
  }, $_initContainer$:function() {
    var $selector$$15$$ = "." + this.$_classNm$ + "-choices", $selection$$2$$, $idSuffix$$1$$ = $_ComboUtils$$.$nextUid$(), $elementLabel$$1$$;
    this.$searchContainer$ = this.$container$.find("." + this.$_classNm$ + "-search-field");
    this.selection = $selection$$2$$ = this.$container$.find($selector$$15$$);
    var $_this$$ = this;
    this.selection.on("click", "." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)", function() {
      $_this$$.search[0].focus();
      $_this$$.$_selectChoice$($$$$12$$(this));
    });
    $elementLabel$$1$$ = $$$$12$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
    $elementLabel$$1$$.attr("id") || $elementLabel$$1$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix$$1$$);
    $selection$$2$$.find("." + this.$_classNm$ + "-input").attr("id", this.$_classNm$ + "-input-" + $idSuffix$$1$$);
    this.$results$.attr("id", "oj-listbox-results-" + $idSuffix$$1$$);
    this.search.attr("aria-owns", "oj-listbox-results-" + $idSuffix$$1$$);
    this.search.attr("aria-labelledby", $elementLabel$$1$$.attr("id"));
    this.search.on("input paste", this.$_bind$(function() {
      this.$_isInterfaceEnabled$() && !this.$_opened$() && this.open();
    }));
    this.search.attr("tabindex", this.$elementTabIndex$);
    this.$keydowns$ = 0;
    this.search.on("keydown", this.$_bind$(function($e$$70$$) {
      if (this.$_isInterfaceEnabled$()) {
        ++this.$keydowns$;
        var $selected$$7$$ = $selection$$2$$.find("." + this.$_classNm$ + "-selected-choice.oj-focus"), $prev$$ = $selected$$7$$.prev("." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)"), $next$$ = $selected$$7$$.next("." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)"), $pos$$6_selectedChoice$$ = $_ComboUtils$$.$getCursorInfo$(this.search);
        if (!$selected$$7$$.length || $e$$70$$.which != $_ComboUtils$$.$KEY$.LEFT && $e$$70$$.which != $_ComboUtils$$.$KEY$.RIGHT && $e$$70$$.which != $_ComboUtils$$.$KEY$.$BACKSPACE$ && $e$$70$$.which != $_ComboUtils$$.$KEY$.$DELETE$ && $e$$70$$.which != $_ComboUtils$$.$KEY$.ENTER) {
          if (($e$$70$$.which !== $_ComboUtils$$.$KEY$.$BACKSPACE$ || 1 != this.$keydowns$) && $e$$70$$.which != $_ComboUtils$$.$KEY$.LEFT || 0 != $pos$$6_selectedChoice$$.offset || $pos$$6_selectedChoice$$.length) {
            this.$_selectChoice$(null);
            if (this.$_opened$()) {
              switch($e$$70$$.which) {
                case $_ComboUtils$$.$KEY$.UP:
                ;
                case $_ComboUtils$$.$KEY$.DOWN:
                  this.$_moveHighlight$($e$$70$$.which === $_ComboUtils$$.$KEY$.UP ? -1 : 1);
                  $_ComboUtils$$.$killEvent$($e$$70$$);
                  return;
                case $_ComboUtils$$.$KEY$.ENTER:
                  this.$_selectHighlighted$(null, $e$$70$$);
                  $_ComboUtils$$.$killEvent$($e$$70$$);
                  return;
                case $_ComboUtils$$.$KEY$.TAB:
                  this.close($e$$70$$);
                  return;
                case $_ComboUtils$$.$KEY$.$ESC$:
                  this.$_cancel$($e$$70$$);
                  $_ComboUtils$$.$killEvent$($e$$70$$);
                  return;
              }
            }
            $e$$70$$.which === $_ComboUtils$$.$KEY$.TAB || $_ComboUtils$$.$KEY$.$isControl$($e$$70$$) || $_ComboUtils$$.$KEY$.$isFunctionKey$($e$$70$$) || $e$$70$$.which === $_ComboUtils$$.$KEY$.$BACKSPACE$ || $e$$70$$.which === $_ComboUtils$$.$KEY$.$ESC$ || $e$$70$$.which === $_ComboUtils$$.$KEY$.ENTER && (!1 === this.$opts$.$openOnEnter$ || $e$$70$$.altKey || $e$$70$$.ctrlKey || $e$$70$$.shiftKey || $e$$70$$.metaKey) || (this.open(), $e$$70$$.which !== $_ComboUtils$$.$KEY$.PAGE_UP && $e$$70$$.which !== 
            $_ComboUtils$$.$KEY$.PAGE_DOWN || $_ComboUtils$$.$killEvent$($e$$70$$), $e$$70$$.which === $_ComboUtils$$.$KEY$.ENTER && $_ComboUtils$$.$killEvent$($e$$70$$));
          } else {
            this.$_selectChoice$($selection$$2$$.find("." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)").last()), $_ComboUtils$$.$killEvent$($e$$70$$);
          }
        } else {
          $pos$$6_selectedChoice$$ = $selected$$7$$, $e$$70$$.which == $_ComboUtils$$.$KEY$.LEFT && $prev$$.length ? $pos$$6_selectedChoice$$ = $prev$$ : $e$$70$$.which == $_ComboUtils$$.$KEY$.RIGHT ? $pos$$6_selectedChoice$$ = $next$$.length ? $next$$ : null : $e$$70$$.which === $_ComboUtils$$.$KEY$.$BACKSPACE$ ? (this.$_unselect$($selected$$7$$.first(), $e$$70$$), this.search.width(10), $pos$$6_selectedChoice$$ = $prev$$.length ? $prev$$ : $next$$) : $e$$70$$.which == $_ComboUtils$$.$KEY$.$DELETE$ ? 
          (this.$_unselect$($selected$$7$$.first(), $e$$70$$), this.search.width(10), $pos$$6_selectedChoice$$ = $next$$.length ? $next$$ : null) : $e$$70$$.which == $_ComboUtils$$.$KEY$.ENTER && ($pos$$6_selectedChoice$$ = null), this.$_selectChoice$($pos$$6_selectedChoice$$), $_ComboUtils$$.$killEvent$($e$$70$$), $pos$$6_selectedChoice$$ && $pos$$6_selectedChoice$$.length || this.open();
        }
      }
    }));
    this.search.on("keyup", this.$_bind$(function() {
      this.$keydowns$ = 0;
    }));
    this.search.on("blur", this.$_bind$(function($e$$72$$) {
      if (this.$opts$.manageNewEntry && this.search.val() && 0 >= this.$results$.children().length) {
        var $data$$97$$ = this.$opts$.manageNewEntry(this.search.val());
        this.$_onSelect$($data$$97$$, null, $e$$72$$);
      }
      this.search.removeClass(this.$_classNm$ + "-focused");
      this.$_selectChoice$(null);
      this.$_opened$() || this.$_clearSearch$();
      $e$$72$$.stopImmediatePropagation();
    }));
    this.$container$.on("click", $selector$$15$$, this.$_bind$(function($e$$73$$) {
      !this.$_isInterfaceEnabled$() || 0 < $$$$12$$($e$$73$$.target).closest("." + this.$_classNm$ + "-selected-choice").length || (this.$_selectChoice$(null), this.open(), this.$_focusSearch$(), $e$$73$$.preventDefault());
    }));
    this.$container$.on("focus", $selector$$15$$, this.$_bind$(function() {
    }));
    this.$_initContainerWidth$();
    this.$opts$.element.hide().attr("aria-hidden", !0);
    this.$_clearSearch$();
  }, $_enableInterface$:function() {
    $_OjMultiCombobox$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$());
  }, $_initSelection$:function() {
    null !== this.$getVal$() && 0 !== this.$getVal$().length || "" !== this.$opts$.element.text() || (this.$_updateSelection$([]), this.close(), this.$_clearSearch$());
    if (this.$datalist$ || null !== this.$getVal$() && this.$getVal$().length) {
      var $self$$63$$ = this;
      this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, function($data$$99$$) {
        void 0 !== $data$$99$$ && null !== $data$$99$$ && ($self$$63$$.$_updateSelection$($data$$99$$), $self$$63$$.close(), $self$$63$$.$_clearSearch$());
      });
    }
  }, $_clearSearch$:function() {
    var $placeholder$$3$$ = this.$_getPlaceholder$(), $maxWidth$$ = this.$_getMaxSearchWidth$();
    void 0 === $placeholder$$3$$ || this.$getVal$() && 0 !== this.$getVal$().length ? (this.search.attr("placeholder", ""), this.search.val("").width(10)) : (this.search.attr("placeholder", $placeholder$$3$$), this.search.width(0 < $maxWidth$$ ? $maxWidth$$ : this.$container$.css("width")));
  }, $_opening$:function($event$$99$$) {
    this.$ojContext$._trigger("beforeExpand", $event$$99$$) && (this.$_resizeSearch$(), $_OjMultiCombobox$$.$superclass$.$_opening$.apply(this, arguments), this.$_focusSearch$(), this.$_updateResults$(!0), this.search.focus());
  }, close:function($event$$100$$) {
    this.$_opened$() && $_OjMultiCombobox$$.$superclass$.close.apply(this, arguments);
  }, $_focus$:function() {
    this.close();
    this.search.focus();
  }, $_updateSelection$:function($data$$100$$) {
    var $ids$$2$$ = [], $filtered$$1$$ = [], $self$$64$$ = this;
    $$$$12$$($data$$100$$).each(function() {
      0 > $ids$$2$$.indexOf($self$$64$$.id(this)) && ($ids$$2$$.push($self$$64$$.id(this)), $filtered$$1$$.push(this));
    });
    $data$$100$$ = $filtered$$1$$;
    this.selection.find("." + this.$_classNm$ + "-selected-choice").remove();
    $$$$12$$($data$$100$$).each(function() {
      $self$$64$$.$_addSelectedChoice$(this);
    });
    $self$$64$$.$_postprocessResults$();
  }, $_onSelect$:function($data$$101$$, $options$$247$$, $event$$101$$) {
    if (this.$_triggerSelect$($data$$101$$)) {
      this.$_addSelectedChoice$($data$$101$$);
      var $id$$20$$ = this.id($data$$101$$), $val$$33$$ = this.$getVal$() ? this.$getVal$().slice(0) : [];
      this.$ojContext$.isValid() || ($val$$33$$ = $_ComboUtils$$.$splitVal$(this.$opts$.element.val(), this.$opts$.separator));
      $$$$12$$($data$$101$$).each(function() {
        0 > $val$$33$$.indexOf($id$$20$$) && $val$$33$$.push($id$$20$$);
      });
      this.$setVal$($val$$33$$, $event$$101$$);
      !this.select && this.$opts$.$closeOnSelect$ || this.$_postprocessResults$($data$$101$$, !1, !0 === this.$opts$.$closeOnSelect$);
      this.$opts$.$closeOnSelect$ && (this.close($event$$101$$), this.search.width(10));
      $options$$247$$ && $options$$247$$.$noFocus$ || this.$_focusSearch$();
    }
  }, $_cancel$:function($event$$102$$) {
    this.close($event$$102$$);
    this.$_focusSearch$();
  }, $_addSelectedChoice$:function($data$$102$$) {
    var $enableChoice$$ = !$data$$102$$.locked, $choice$$3_enabledItem$$ = $$$$12$$("\x3cli class\x3d'" + this.$_classNm$ + "-selected-choice'\x3e    \x3cdiv\x3e\x3c/div\x3e    \x3ca href\x3d'#' onclick\x3d'return false;' class\x3d'" + this.$_classNm$ + "-clear-entry' tabindex\x3d'-1'\x3e    \x3cspan class\x3d'oj-component-icon oj-clickable-icon oj-combobox-clear-entry-icon' role\x3d'presentation'\x3e\x3c/a\x3e\x3c/li\x3e"), $disabledItem_formatted$$4$$ = $$$$12$$("\x3cli class\x3d'" + this.$_classNm$ + 
    "-selected-choice " + this.$_classNm$ + "-locked'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/li\x3e"), $choice$$3_enabledItem$$ = $enableChoice$$ ? $choice$$3_enabledItem$$ : $disabledItem_formatted$$4$$;
    this.id($data$$102$$);
    $disabledItem_formatted$$4$$ = this.$opts$.$formatSelection$($data$$102$$, $choice$$3_enabledItem$$.find("div"), this.$opts$.$escapeMarkup$);
    void 0 !== $disabledItem_formatted$$4$$ && ($choice$$3_enabledItem$$.find("div").replaceWith("\x3cdiv class\x3d'" + this.$_classNm$ + "-selected-choice-label'\x3e" + $disabledItem_formatted$$4$$ + "\x3c/div\x3e"), $choice$$3_enabledItem$$.attr("valueText", $disabledItem_formatted$$4$$));
    if ($enableChoice$$) {
      $choice$$3_enabledItem$$.find("." + this.$_classNm$ + "-clear-entry").on("mousedown", $_ComboUtils$$.$killEvent$).on("click dblclick", this.$_bind$(function($e$$74$$) {
        this.$_isInterfaceEnabled$() && ($$$$12$$($e$$74$$.target).closest("." + this.$_classNm$ + "-selected-choice").fadeOut("fast", this.$_bind$(function() {
          this.$_unselect$($$$$12$$($e$$74$$.target), $e$$74$$);
          this.selection.find("." + this.$_classNm$ + "-selected-choice.oj-focus").removeClass("oj-focus");
          this.close($e$$74$$);
          this.$_focusSearch$();
        })).dequeue(), $_ComboUtils$$.$killEvent$($e$$74$$));
      }));
    }
    $choice$$3_enabledItem$$.data(this.$_elemNm$, $data$$102$$);
    $choice$$3_enabledItem$$.insertBefore(this.$searchContainer$);
  }, $_unselect$:function($selected$$8$$, $event$$103$$) {
    var $val$$34$$ = this.$getVal$() ? this.$getVal$().slice(0) : [], $data$$103$$, $index$$141$$;
    $selected$$8$$ = $selected$$8$$.closest("." + this.$_classNm$ + "-selected-choice");
    if (0 === $selected$$8$$.length) {
      throw "Invalid argument: " + $selected$$8$$ + ". Must be ." + this.$_classNm$ + "-selected-choice";
    }
    if ($data$$103$$ = $selected$$8$$.data(this.$_elemNm$)) {
      for (this.$ojContext$.isValid() || ($val$$34$$ = $_ComboUtils$$.$splitVal$(this.$opts$.element.val(), this.$opts$.separator));0 <= ($index$$141$$ = $val$$34$$.indexOf(this.id($data$$103$$)));) {
        $val$$34$$.splice($index$$141$$, 1), this.$setVal$($val$$34$$, $event$$103$$), this.select && this.$_postprocessResults$();
      }
      $selected$$8$$.remove();
    }
  }, $_postprocessResults$:function() {
    var $val$$35$$ = this.$getVal$() && (this.$opts$.element.val() || this.$ojContext$.isValid()) ? this.$getVal$() : [], $choices$$3$$ = this.$results$.find(".oj-listbox-result"), $compound$$ = this.$results$.find(".oj-listbox-result-with-children"), $self$$65$$ = this;
    $_ComboUtils$$.$each2$($choices$$3$$, function($i$$180$$, $choice$$4$$) {
      var $id$$22$$ = $self$$65$$.id($choice$$4$$.data($self$$65$$.$_elemNm$));
      $val$$35$$ && 0 <= $val$$35$$.indexOf($id$$22$$) && ($choice$$4$$.addClass("oj-selected"), $choice$$4$$.find(".oj-listbox-result-selectable").addClass("oj-selected"));
    });
    $_ComboUtils$$.$each2$($compound$$, function($i$$181$$, $choice$$5$$) {
      $choice$$5$$.is(".oj-listbox-result-selectable") || 0 !== $choice$$5$$.find(".oj-listbox-result-selectable:not(.oj-selected)").length || $choice$$5$$.addClass("oj-selected");
    });
    0 < !$choices$$3$$.filter(".oj-listbox-result:not(.oj-selected)").length && this.close();
  }, $_getMaxSearchWidth$:function() {
    return this.selection.width() - $_ComboUtils$$.$getSideBorderPadding$(this.search);
  }, $_textWidth$:function($text$$13_textSpan_width$$17$$) {
    $text$$13_textSpan_width$$17$$ = '\x3cspan style\x3d"display:none"\x3e' + $text$$13_textSpan_width$$17$$ + "\x3c/span\x3e";
    $$$$12$$("body").append($text$$13_textSpan_width$$17$$);
    $text$$13_textSpan_width$$17$$ = $$$$12$$("body").find("span:last").width();
    $$$$12$$("body").find("span:last").remove();
    return $text$$13_textSpan_width$$17$$;
  }, $_resizeSearch$:function() {
    var $minimumWidth$$, $left$$5_searchWidth$$, $maxWidth$$1$$, $containerLeft$$, $sideBorderPadding$$ = $_ComboUtils$$.$getSideBorderPadding$(this.search);
    $minimumWidth$$ = this.$_textWidth$(this.search.val()) + 10;
    $left$$5_searchWidth$$ = this.search.offset().left;
    $maxWidth$$1$$ = this.selection.width();
    $containerLeft$$ = this.selection.offset().left;
    $left$$5_searchWidth$$ = $maxWidth$$1$$ - ($left$$5_searchWidth$$ - $containerLeft$$) - $sideBorderPadding$$;
    $left$$5_searchWidth$$ < $minimumWidth$$ && ($left$$5_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
    40 > $left$$5_searchWidth$$ && ($left$$5_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
    0 >= $left$$5_searchWidth$$ && ($left$$5_searchWidth$$ = $minimumWidth$$);
    this.search.width(Math.floor($left$$5_searchWidth$$));
  }, $setVal$:function($val$$36$$, $event$$104$$) {
    var $unique$$;
    $unique$$ = [];
    "string" === typeof $val$$36$$ && ($val$$36$$ = $_ComboUtils$$.$splitVal$($val$$36$$, this.$opts$.separator));
    for (var $i$$182$$ = 0;$i$$182$$ < $val$$36$$.length;$i$$182$$++) {
      0 > $unique$$.indexOf($val$$36$$[$i$$182$$]) && $unique$$.push($val$$36$$[$i$$182$$]);
    }
    this.$ojContext$.$_SetValue$($unique$$, $event$$104$$, {$doValueChangeCheck$:!1});
    this.$opts$.element.val(0 === $unique$$.length ? "" : $unique$$.join(this.$opts$.separator));
    this.search.attr("aria-activedescendant", this.$opts$.element.attr("id"));
  }});
});
