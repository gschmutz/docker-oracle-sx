/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$25$$, $$$$25$$) {
  (function() {
    function $_addSheet$$($opts$$23$$) {
      var $tmp$$2$$ = !1, $isNew$$2$$ = !0;
      $opts$$23$$.$str$ && ($opts$$23$$.title && ($tmp$$2$$ = $$$$25$$("style[id\x3d'" + $opts$$23$$.title + "-stylesheet']")[0]), $tmp$$2$$ ? $isNew$$2$$ = !1 : ($tmp$$2$$ = document.createElement("style"), $tmp$$2$$.setAttribute("type", "text/css"), $opts$$23$$.title && $tmp$$2$$.setAttribute("id", $opts$$23$$.title + "-stylesheet")), $tmp$$2$$.styleSheet ? $isNew$$2$$ ? (document.getElementsByTagName("head")[0].appendChild($tmp$$2$$), $tmp$$2$$.styleSheet.cssText = $opts$$23$$.$str$) : $tmp$$2$$.styleSheet.cssText = 
      $tmp$$2$$.styleSheet.cssText + " " + $opts$$23$$.$str$ : ($tmp$$2$$.appendChild(document.createTextNode($opts$$23$$.$str$)), document.getElementsByTagName("head")[0].appendChild($tmp$$2$$)));
    }
    function $_removeSheet$$() {
      $$$$25$$("#oj-tree-drag-stylesheet").remove();
    }
    function $_addKeyFilter$$($obj$$53$$) {
      $_aKeyHandlerStack$$.push($obj$$53$$);
      $$$$25$$($obj$$53$$.$_selector$).keydown($_KeyFilterHandler$$);
    }
    function $_KeyFilterHandler$$($e$$87$$) {
      var $s$$11$$ = "";
      $oj$$25$$.$DomUtils$.$isMetaKeyPressed$($e$$87$$) ? $s$$11$$ += "ctrl+" : $e$$87$$.shiftKey && ($s$$11$$ += "shift+");
      var $key$$95$$ = $e$$87$$.which;
      switch($key$$95$$) {
        case 32:
          $s$$11$$ += "space";
          break;
        case 37:
          $s$$11$$ += "left";
          break;
        case 38:
          $s$$11$$ += "up";
          break;
        case 39:
          $s$$11$$ += "right";
          break;
        case 40:
          $s$$11$$ += "down";
          break;
        case 46:
          $s$$11$$ += "del";
          break;
        case 33:
          $s$$11$$ += "pgup";
          break;
        case 34:
          $s$$11$$ += "pgdn";
          break;
        case 35:
          $s$$11$$ += "end";
          break;
        case 36:
          $s$$11$$ += "home";
          break;
        case 56:
          $s$$11$$ = "*";
          break;
        case 113:
          $s$$11$$ += "f" + (1 - (112 - $key$$95$$));
      }
      if (0 !== $s$$11$$.length) {
        var $retHandler$$ = void 0;
        $$$$25$$.each($_aKeyHandlerStack$$, function($i$$264$$, $obj$$54$$) {
          if ($obj$$54$$.$_this$.$_data$.ui.$focused$ && $obj$$54$$.$_handler$[$s$$11$$]) {
            return $e$$87$$.preventDefault(), $retHandler$$ = $obj$$54$$.$_handler$[$s$$11$$].call($obj$$54$$.$_this$, $e$$87$$), !1;
          }
        });
        return $retHandler$$;
      }
    }
    function $_removeKeyFilter$$($selector$$18$$) {
      $$$$25$$.each($_aKeyHandlerStack$$, function($i$$265$$) {
        if ($_aKeyHandlerStack$$[$i$$265$$].$_selector$ === $selector$$18$$) {
          return $$$$25$$($selector$$18$$).off("keydown"), $_aKeyHandlerStack$$[$i$$265$$] = null, $_aKeyHandlerStack$$.splice($i$$265$$, 1), !1;
        }
      });
    }
    var $_arMenuCmdMap$$ = {cut:"ojtreecut", copy:"ojtreecopy", paste:"ojtreepaste", remove:"ojtreeremove", rename:"ojtreerename"}, $_aEvNames$$ = "optionChange select deselect hover dehover expand collapse loaded move remove deselectAll rename refresh expandAll collapseAll destroy create before remove cut copy paste".split(" "), $scrollbar_width$$, $e1$$, $e2$$;
    $$$$25$$(function() {
      /msie/.test(navigator.userAgent.toLowerCase()) ? ($e1$$ = $$$$25$$('\x3ctextarea cols\x3d"10" rows\x3d"2"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $e2$$ = $$$$25$$('\x3ctextarea cols\x3d"10" rows\x3d"2" style\x3d"overflow: hidden;"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $scrollbar_width$$ = $e1$$.width() - $e2$$.width(), $e1$$.add($e2$$).remove()) : ($e1$$ = $$$$25$$("\x3cdiv /\x3e").css({width:100, 
      height:100, overflow:"auto", position:"absolute", top:-1E3, left:0}).prependTo("body").append("\x3cdiv /\x3e").find("div").css({width:"100%", height:200}), $scrollbar_width$$ = 100 - $e1$$.width(), $e1$$.parent().remove());
    });
    var $_aKeyHandlerStack$$ = [], $_instance$$ = -1, $_aInstances$$ = [];
    $oj$$25$$.$__registerWidget$("oj.ojTree", $$$$25$$.oj.baseComponent, {widgetEventPrefix:"oj", defaultElement:"\x3cdiv\x3e", options:{animDuration:500, dnd:{$reorder$:"disable"}, expandParents:!1, initExpanded:null, $initLoaded$:[], selection:[], selectionMode:"single", selectedParentCollapse:!1, selectedParentExpand:!0, selectPrevOnDelete:!1, data:null, emptyText:null, icons:!0, types:null, before:null, collapse:null, create:null, collapseAll:null, cut:null, dehover:null, remove:null, deselect:null, 
    deselectAll:null, destroy:null, expand:null, expandAll:null, hover:null, loaded:null, move:null, optionChange:null, paste:null, refresh:null, rename:null, select:null}, collapse:function($node$$41$$, $skipAnim$$) {
      var $t$$1$$ = this, $dur$$ = $skipAnim$$ ? 0 : this.options.animDuration || 0;
      $node$$41$$ = this.$_getNode$($node$$41$$);
      if (!$node$$41$$.length || -1 === $node$$41$$ || !$node$$41$$.hasClass("oj-expanded") || this.$_data$.$core$.locked || $node$$41$$.hasClass("oj-disabled")) {
        return!1;
      }
      var $rslt$$ = this.$_emitEvent$({obj:$node$$41$$, func:"collapse"}, "before");
      if ("boolean" != typeof $rslt$$ || $rslt$$) {
        ($skipAnim$$ || $dur$$) && $node$$41$$.children("ul").attr("style", "display:block !important"), $node$$41$$.removeClass("oj-expanded").addClass("oj-collapsed").attr("aria-expanded", "false"), $$$$25$$($node$$41$$.children()[0]).removeClass("oj-selected").addClass("oj-default"), $skipAnim$$ || $dur$$ ? $node$$41$$.children("ul").stop(!0, !0).slideUp($dur$$, function() {
          this.style.display = "";
          $t$$1$$.after_close($node$$41$$);
        }) : $t$$1$$.after_close($node$$41$$), this.$_emitEvent$({obj:$node$$41$$}, "collapse");
      }
    }, collapseAll:function($node$$42$$, $anim$$) {
      var $origTarg$$ = $node$$42$$ ? $node$$42$$ : -1, $_this$$1$$ = this;
      if (!this.$_data$.$core$.locked && (($node$$42$$ = $node$$42$$ ? this.$_getNode$($node$$42$$) : this.$_$container$) && -1 !== $origTarg$$ && ($origTarg$$ = $node$$42$$), $node$$42$$ && -1 !== $origTarg$$ || ($node$$42$$ = this.$_$container_ul$), !$node$$42$$.hasClass("oj-disabled"))) {
        var $subject$$;
        -1 !== $origTarg$$ && this.isExpanded($node$$42$$) && ($subject$$ = $node$$42$$[0]);
        var $objs$$ = $node$$42$$.find("li.oj-expanded");
        $objs$$.length && $objs$$.each(function() {
          $_this$$1$$.collapse(this, !$anim$$);
        });
        $subject$$ && (this.collapse($subject$$, !$anim$$), $objs$$.splice(0, 0, $subject$$));
        $objs$$.length && this.$_emitEvent$({obj:$objs$$, targ:$origTarg$$}, "collapseAll");
      }
    }, expand:function($node$$43$$, $skipAnim$$1$$) {
      this.$_expand$($node$$43$$, !1, $skipAnim$$1$$);
    }, expanded:function($nodes$$, $skipAnim$$2$$) {
      var $exlr$$, $exlen$$, $_this$$2$$ = this;
      if ($nodes$$ && "array" === $$$$25$$.type($nodes$$)) {
        if (this.$_data$.$core$.locked) {
          return null;
        }
        $exlen$$ = $nodes$$.length;
        $$$$25$$.each($nodes$$, function($i$$266$$, $val$$39$$) {
          $_this$$2$$.$_expand$($val$$39$$, !1, $skipAnim$$2$$);
        });
        return null;
      }
      $nodes$$ = this.$_$container_ul$.find("li.oj-expanded");
      $exlen$$ = $nodes$$.length;
      $exlr$$ = [];
      for (var $n$$27$$ = 0;$n$$27$$ < $exlen$$;$n$$27$$++) {
        $exlr$$.push($nodes$$[$n$$27$$]);
      }
      return $$$$25$$($exlr$$);
    }, expandAll:function($node$$44$$, $anim$$1$$) {
      this.$_expandAll$($node$$44$$, $anim$$1$$);
    }, toggleExpand:function($node$$45$$, $skipAnim$$3$$) {
      $node$$45$$ = this.$_getNode$($node$$45$$);
      if (-1 !== $node$$45$$ && !$node$$45$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if ($node$$45$$.hasClass("oj-collapsed")) {
          return this.expand($node$$45$$, $skipAnim$$3$$);
        }
        if ($node$$45$$.hasClass("oj-expanded")) {
          return this.collapse($node$$45$$, $skipAnim$$3$$);
        }
      }
    }, deselect:function($node$$46$$) {
      $node$$46$$ = this.$_getNode$($node$$46$$);
      if (!$node$$46$$.length) {
        return!1;
      }
      $node$$46$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || (this.isSelected($node$$46$$) && ($node$$46$$.children("a").removeClass("oj-selected"), $node$$46$$.removeAttr("aria-selected"), this.$_data$.ui.selected = this.$_data$.ui.selected.not($node$$46$$), this.$_data$.ui.$last_selected$.get(0) === $node$$46$$.get(0) && (this.$_data$.ui.$last_selected$ = this.$_data$.ui.selected.eq(0)), this.$_emitEvent$({obj:$node$$46$$}, "deselect")), this.$_maintainSelected$($node$$46$$, !1));
    }, deselectAll:function($context$$51$$) {
      this.$_data$.$core$.locked || this.$_deselectAll$($context$$51$$, !1);
    }, select:function($node$$47$$) {
      this.$_select$($node$$47$$);
    }, toggleSelect:function($node$$48$$) {
      $node$$48$$ = this.$_getNode$($node$$48$$);
      if (!$node$$48$$.length) {
        return!1;
      }
      $node$$48$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || (this.isSelected($node$$48$$) ? this.deselect($node$$48$$) : this.$_select$($node$$48$$, !0));
    }, isCollapsed:function($node$$49$$) {
      return($node$$49$$ = this.$_getNode$($node$$49$$)) && -1 !== $node$$49$$ && $node$$49$$.hasClass("oj-collapsed");
    }, isExpanded:function($node$$50$$) {
      return($node$$50$$ = this.$_getNode$($node$$50$$)) && -1 !== $node$$50$$ && $node$$50$$.hasClass("oj-expanded");
    }, isLeaf:function($node$$51$$) {
      return this.$_isLeaf$($node$$51$$);
    }, isSelected:function($node$$52$$) {
      return 0 <= this.$_data$.ui.selected.index(this.$_getNode$($node$$52$$));
    }, create:function($refnode$$, $position$$12$$, $data$$147$$) {
      return this.$_create_node$($refnode$$, $position$$12$$, $data$$147$$);
    }, remove:function($node$$53$$) {
      $node$$53$$ = this.$_getNode$($node$$53$$);
      if (!$node$$53$$.length || $node$$53$$.hasClass("oj-disabled") || this.$_data$.$core$.locked) {
        return!1;
      }
      var $p$$7_rslt$$1$$ = this.$_emitEvent$({obj:$node$$53$$, func:"remove"}, "before");
      if ("boolean" == typeof $p$$7_rslt$$1$$ && !$p$$7_rslt$$1$$) {
        return!1;
      }
      this.$__rollback$();
      var $p$$7_rslt$$1$$ = this.$_getParent$($node$$53$$), $prev$$3$$ = $$$$25$$([]), $t$$2$$ = this, $sib$$ = this.$_getPrev$($node$$53$$);
      $node$$53$$.each(function() {
        $prev$$3$$ = $prev$$3$$.add($t$$2$$.$_getPrev$(this));
      });
      $node$$53$$ = $node$$53$$.detach();
      -1 !== $p$$7_rslt$$1$$ && 0 === $p$$7_rslt$$1$$.find("\x3e ul \x3e li").length && $p$$7_rslt$$1$$.removeClass("oj-expanded oj-collapsed").addClass("oj-tree-leaf").removeAttr("aria-expanded");
      this.$_clean_node$($p$$7_rslt$$1$$);
      this.$_emitEvent$({obj:$node$$53$$, prev:$sib$$, parent:$p$$7_rslt$$1$$}, "remove");
      return $node$$53$$;
    }, getText:function($node$$54$$) {
      $node$$54$$ = this.$_getNode$($node$$54$$);
      if (!$node$$54$$.length) {
        return!1;
      }
      var $ht$$ = this.$_data$.$core$.$htmlTitles$;
      $node$$54$$ = $node$$54$$.children("a:eq(0)");
      if ($ht$$) {
        return $node$$54$$ = $node$$54$$.clone(), $node$$54$$.children("INS").remove(), $node$$54$$.html();
      }
      $node$$54$$ = $node$$54$$.find("span:eq(0)");
      return $node$$54$$[0].textContent;
    }, rename:function($node$$55$$, $text$$15$$) {
      this.$_rename_node$($node$$55$$, $text$$15$$);
    }, hover:function($node$$56$$) {
      $node$$56$$ = this.$_getNode$($node$$56$$);
      if (!$node$$56$$.length) {
        return!1;
      }
      if (!$node$$56$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        var $rslt$$2$$ = this.$_emitEvent$({obj:$node$$56$$, func:"hover"}, "before");
        if ("boolean" != typeof $rslt$$2$$ || $rslt$$2$$) {
          this.$_data$.$core$.$initFocus$ = !0, $node$$56$$.hasClass("oj-hover") || this.dehover(), this.$_data$.ui.$hovered$ = $node$$56$$.children("a").addClass("oj-hover").parent(), this.$_$container_ul$.attr("aria-activedescendant", this.$_data$.ui.$hovered$.attr("id")), this.$_fix_scroll$($node$$56$$), this.$_emitEvent$({obj:$node$$56$$}, "hover");
        }
      }
    }, dehover:function() {
      var $obj$$55$$ = this.$_data$.ui.$hovered$, $p$$8$$;
      if (!$obj$$55$$ || !$obj$$55$$.length) {
        return!1;
      }
      $obj$$55$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || ($p$$8$$ = $obj$$55$$.children("a").removeClass("oj-hover").parent(), this.$_$container_ul$.removeAttr("aria-activedescendant"), this.$_data$.ui.$hovered$[0] === $p$$8$$[0] && (this.$_data$.ui.$hovered$ = null), this.$_emitEvent$({obj:$obj$$55$$}, "dehover"));
    }, getPath:function($node$$57$$, $idMode$$) {
      var $p$$9$$ = [], $_this$$3$$ = this;
      $node$$57$$ = this.$_getNode$($node$$57$$);
      if (-1 === $node$$57$$ || !$node$$57$$ || !$node$$57$$.length) {
        return!1;
      }
      $node$$57$$.parentsUntil(".oj-tree", "li").each(function() {
        $p$$9$$.push($idMode$$ ? this.id : $_this$$3$$.getText(this));
      });
      $p$$9$$.reverse();
      $p$$9$$.push($idMode$$ ? $node$$57$$.attr("id") : this.getText($node$$57$$));
      return $p$$9$$;
    }, getRoot:function() {
      return this.$_$container$.children("ul:eq(0)");
    }, refresh:function($node$$58$$) {
      this._super();
      this.$_data$.$core$.locked || this.$_refresh$($node$$58$$);
    }, move:function($node$$59$$, $refnode$$1$$, $position$$13$$, $iscopy$$) {
      this.$_move_node$($node$$59$$, $refnode$$1$$, $position$$13$$, $iscopy$$);
    }, getType:function($node$$60$$) {
      return this.$_getType$($node$$60$$);
    }, setType:function($node$$61$$, $str$$17$$) {
      return this.$_setType$($node$$61$$, $str$$17$$);
    }, getNodeBySubId:function($locator$$21$$) {
      return $locator$$21$$ ? this.$_processSubId$($locator$$21$$) : this.element ? this.element[0] : null;
    }, getParent:function($l$$9_node$$62$$) {
      return($l$$9_node$$62$$ = this.$_getParent$($l$$9_node$$62$$)) && 0 < $l$$9_node$$62$$.length ? $l$$9_node$$62$$ : null;
    }, getPrevSibling:function($l$$10_node$$63$$) {
      return($l$$10_node$$63$$ = this.$_getPrev$($l$$10_node$$63$$, !0)) && 0 < $l$$10_node$$63$$.length ? $l$$10_node$$63$$ : null;
    }, getNextSibling:function($l$$11_node$$64$$) {
      return($l$$11_node$$64$$ = this.$_getNext$($l$$11_node$$64$$, !0)) && 0 < $l$$11_node$$64$$.length ? $l$$11_node$$64$$ : null;
    }, getChildren:function($l$$12_node$$65$$) {
      return($l$$12_node$$65$$ = this.$_getChildren$($l$$12_node$$65$$ ? $l$$12_node$$65$$ : -1)) && 0 < $l$$12_node$$65$$.length ? $l$$12_node$$65$$ : null;
    }, destroy:function() {
      this.$_emitEvent$({obj:-1}, "destroy");
      this._super();
    }, _ComponentCreate:function() {
      this._super();
      this.$_index$ = this.$_newIndex$();
      $_aInstances$$.push(this);
      this.$_elemId$ = this.element.attr("id");
      void 0 === this.$_elemId$ && (this.$_elemId$ = "oj-tree-" + this.$_index$, this.element.attr("id", this.$_elemId$));
      this.$_elemId$ = "#" + this.$_elemId$;
      var $JSCompiler_inline_result$$7_hash$$inline_768$$;
      $JSCompiler_inline_result$$7_hash$$inline_768$$ = ($JSCompiler_inline_result$$7_hash$$inline_768$$ = this.$_elemId$) ? $JSCompiler_inline_result$$7_hash$$inline_768$$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : "";
      this.$_$container$ = $$$$25$$($JSCompiler_inline_result$$7_hash$$inline_768$$);
      this.$_$container_ul$ = null;
      this.$_data$ = {};
      this.$_tds$ = null;
      this.$_isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_initTree$();
    }, _destroy:function() {
      this.$_clearTree$();
      this.$_data$.html.$markup_ul$ && (this.$_$container$.append(this.$_data$.html.$markup_ul$), this.$_data$.html.$markup_div$.remove(), this.$_data$.html.$markup_div$ = !1, this.$_data$.html.$useExistingMarkup$ = !1);
      this.$_data$.$ds$.type = 0;
      this._super();
    }, _setOption:function($key$$96$$, $newval$$, $flags$$33$$) {
      var $prev$$4_val$$40$$ = this.options[$key$$96$$];
      if ("selection" === $key$$96$$) {
        this._super($key$$96$$, $newval$$, $flags$$33$$), this.$_handleSelectionOptionChange$(), this.$_fireOptionChange$($key$$96$$, $prev$$4_val$$40$$, $newval$$, null);
      } else {
        if ("selectionMode" === $key$$96$$) {
          "none" === $newval$$ ? $prev$$4_val$$40$$ = 0 : "single" === $newval$$ ? $prev$$4_val$$40$$ = 1 : "multiple" === $newval$$ ? $prev$$4_val$$40$$ = -1 : ($prev$$4_val$$40$$ = 0, $newval$$ = "none"), $prev$$4_val$$40$$ != this.$_data$.$core$.$selectMode$ && (this.$_data$.$core$.$selectMode$ = $prev$$4_val$$40$$);
        } else {
          if ("icons" === $key$$96$$) {
            "boolean" == $$$$25$$.type($newval$$) && $newval$$ != this.$_data$.$themes$.icons && ((this.$_data$.$themes$.icons = $newval$$) ? this.$_showIcons$() : this.$_hideIcons$());
          } else {
            if ("contextMenu" === $key$$96$$) {
              this.$_clearMenu$(), $newval$$ && this.$_initMenu$($newval$$);
            } else {
              if ("disabled" === $key$$96$$) {
                this.$_handleDisabledChanged$($newval$$);
              } else {
                if ("data" === $key$$96$$) {
                  this._super($key$$96$$, $newval$$, $flags$$33$$);
                  this.$_initDSOpts$();
                  this.$_initDataSource$();
                  this.$_initExpandedOpts$();
                  this.$_loadNodes$();
                  return;
                }
                if ("dnd" === $key$$96$$) {
                  this._super($key$$96$$, $newval$$, $flags$$33$$);
                  this.$_initDnDOpts$();
                  return;
                }
              }
            }
          }
        }
        this._super($key$$96$$, $newval$$, $flags$$33$$);
      }
    }, $_clearTree$:function() {
      var $n$$28$$ = this.$_index$;
      this.$_$container$.unbind(".oj-tree").undelegate(".oj-tree").removeData("oj-tree-instance-id").find("[class^\x3d'oj-tree']").addBack().attr("class", function() {
        return this.className.replace(/oj-tree[^ ]*|$/ig, "");
      });
      var $cl$$ = this.$_$container$.attr("class"), $cl$$ = $cl$$.trim();
      0 === $cl$$.length && this.$_$container$.removeAttr("class");
      $_removeKeyFilter$$(this.$_$container_ul$);
      $$$$25$$(document).unbind(".oj-tree-" + $n$$28$$).undelegate(".oj-tree-" + $n$$28$$);
      this.$_$container_ul$.remove();
      this.$_$container_ul$ = null;
    }, $_getNode$:function($obj$$56$$, $allow_multiple$$) {
      if ("undefined" === typeof $obj$$56$$ || null === $obj$$56$$) {
        return $allow_multiple$$ ? this.$_data$.ui.selected : this.$_data$.ui.$last_selected$;
      }
      var $$obj$$ = $$$$25$$($obj$$56$$, this.$_$container$);
      if ($$obj$$.is(".oj-tree") || -1 === $obj$$56$$) {
        return-1;
      }
      $$obj$$ = $$obj$$.closest("li", this.$_$container$);
      return $$obj$$.length ? $$obj$$ : !1;
    }, $_getPrev$:function($obj$$57$$, $strict$$) {
      $obj$$57$$ = this.$_getNode$($obj$$57$$);
      if (-1 === $obj$$57$$) {
        return this.$_$container$.find("\x3e ul \x3e li:last-child");
      }
      if (!$obj$$57$$.length) {
        return!1;
      }
      if ($strict$$) {
        return 0 < $obj$$57$$.prevAll("li").length ? $obj$$57$$.prevAll("li:eq(0)") : !1;
      }
      if ($obj$$57$$.prev("li").length) {
        for ($obj$$57$$ = $obj$$57$$.prev("li").eq(0);$obj$$57$$.hasClass("oj-expanded");) {
          $obj$$57$$ = $obj$$57$$.children("ul:eq(0)").children("li:last");
        }
        return $obj$$57$$;
      }
      var $o$$11$$ = $obj$$57$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$11$$.length ? $o$$11$$ : !1;
    }, $_getNext$:function($obj$$58$$, $strict$$1$$) {
      $obj$$58$$ = this.$_getNode$($obj$$58$$);
      return-1 === $obj$$58$$ ? this.$_$container$.find("\x3e ul \x3e li:first-child") : $obj$$58$$.length ? $strict$$1$$ ? 0 < $obj$$58$$.nextAll("li").size() ? $obj$$58$$.nextAll("li:eq(0)") : !1 : $obj$$58$$.hasClass("oj-expanded") ? $obj$$58$$.find("li:eq(0)") : 0 < $obj$$58$$.nextAll("li").size() ? $obj$$58$$.nextAll("li:eq(0)") : $obj$$58$$.parentsUntil(".oj-tree", "li").next("li").eq(0) : !1;
    }, $_getParent$:function($o$$12_obj$$59$$) {
      $o$$12_obj$$59$$ = this.$_getNode$($o$$12_obj$$59$$);
      if (-1 == $o$$12_obj$$59$$ || !$o$$12_obj$$59$$.length) {
        return!1;
      }
      $o$$12_obj$$59$$ = $o$$12_obj$$59$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$12_obj$$59$$.length ? $o$$12_obj$$59$$ : -1;
    }, $_getChildren$:function($obj$$60$$) {
      $obj$$60$$ = this.$_getNode$($obj$$60$$);
      return-1 === $obj$$60$$ ? this.$_$container$.children("ul:eq(0)").children("li") : $obj$$60$$.length ? $obj$$60$$.children("ul:eq(0)").children("li") : !1;
    }, $_isLeaf$:function($node$$66$$) {
      return($node$$66$$ = this.$_getNode$($node$$66$$)) && -1 !== $node$$66$$ && $node$$66$$.hasClass("oj-tree-leaf");
    }, $_reference$:function($node$$67$$) {
      $node$$67$$.parents("div").eq(0);
      return this;
    }, $_applyDefaults$:function($to$$1$$, $from$$1$$) {
      void 0 != $to$$1$$ && void 0 != $from$$1$$ && $$$$25$$.each($from$$1$$, function($prop$$75$$, $val$$41$$) {
        void 0 == $to$$1$$[$prop$$75$$] && ($to$$1$$[$prop$$75$$] = $val$$41$$);
      });
    }, $_handleDisabledChanged$:function($newval$$1$$) {
      var $curState$$ = this.$_$container_ul$.hasClass("oj-disabled");
      $curState$$ || ($curState$$ = !1);
      "undefined" !== typeof $newval$$1$$ && $curState$$ != $newval$$1$$ && ($newval$$1$$ ? (this.$_$container_ul$.addClass("oj-disabled"), this.$_$container_ul$.prop("disabled", "disabled")) : (this.$_$container_ul$.removeClass("oj-disabled"), this.$_$container_ul$.removeAttr("disabled")), this.$_treeDisable$($newval$$1$$));
    }, $_treeDisable$:function($lstate$$) {
      $lstate$$ ? (this.$_data$.$core$.locked = !0, this.$_data$.ui.opacity = this.$_$container$.children("ul").css("opacity"), this.$_$container_ul$.addClass("oj-disabled").css("opacity", "0.9")) : (this.$_data$.$core$.locked = !1, this.$_$container_ul$.removeClass("oj-disabled").css("opacity", this.$_data$.ui.opacity));
    }, $_handleSelectionOptionChange$:function() {
      var $cur$$2$$ = [], $_this$$5$$ = this;
      $$$$25$$.each(this.options.selection, function($i$$267$$, $node$$68$$) {
        ($node$$68$$ = $_this$$5$$.$_getNode$($node$$68$$)) && 1 === $node$$68$$.length && $cur$$2$$.push("#" + $node$$68$$.attr("id"));
      });
      var $aSelected$$ = this.$_getSelected$();
      $$$$25$$.each($aSelected$$, function($i$$268$$, $node$$69$$) {
        0 > $$$$25$$.inArray($$$$25$$($node$$69$$).attr("id"), $cur$$2$$) && $_this$$5$$.deselect($node$$69$$);
      });
      this.$_setSelected$($cur$$2$$);
    }, $_prepare_move$:function($o$$13$$, $r$$1$$, $pos$$9$$, $cb$$1$$, $is_cb$$) {
      var $p$$10$$ = {$ot$:this};
      $p$$10$$.$o$ = $p$$10$$.$ot$.$_getNode$($o$$13$$);
      $p$$10$$.$r$ = -1 === $r$$1$$ ? -1 : this.$_getNode$($r$$1$$);
      $p$$10$$.$p$ = "undefined" === typeof $pos$$9$$ || !1 === $pos$$9$$ ? "last" : $pos$$9$$;
      if (!$is_cb$$ && this.$_data$.$core$.$prepared_move$.$o$ && this.$_data$.$core$.$prepared_move$.$o$[0] === $p$$10$$.$o$[0] && this.$_data$.$core$.$prepared_move$.$r$[0] === $p$$10$$.$r$[0] && this.$_data$.$core$.$prepared_move$.$p$ === $p$$10$$.$p$) {
        this.$_emitEvent$(this.$_data$.$core$.$prepared_move$), $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$);
      } else {
        $p$$10$$.$ot$ = this;
        $p$$10$$.$rt$ = this;
        if (-1 !== $p$$10$$.$r$ && $p$$10$$.$r$) {
          if (!/^(before|after)$/.test($p$$10$$.$p$) && !this.$_is_loaded$($p$$10$$.$r$)) {
            return this.$_load_node$($p$$10$$.$r$, function() {
              this.$_prepare_move$($o$$13$$, $r$$1$$, $pos$$9$$, $cb$$1$$, !0);
            });
          }
          switch($p$$10$$.$p$) {
            case "before":
              $p$$10$$.$cp$ = $p$$10$$.$r$.index();
              $p$$10$$.$cr$ = $p$$10$$.$rt$.$_getParent$($p$$10$$.$r$);
              break;
            case "after":
              $p$$10$$.$cp$ = $p$$10$$.$r$.index() + 1;
              $p$$10$$.$cr$ = $p$$10$$.$rt$.$_getParent$($p$$10$$.$r$);
              break;
            case "inside":
            ;
            case "first":
              $p$$10$$.$cp$ = 0;
              $p$$10$$.$cr$ = $p$$10$$.$r$;
              break;
            case "last":
              $p$$10$$.$cp$ = $p$$10$$.$r$.find(" \x3e ul \x3e li").length;
              $p$$10$$.$cr$ = $p$$10$$.$r$;
              break;
            default:
              $p$$10$$.$cp$ = $p$$10$$.$p$, $p$$10$$.$cr$ = $p$$10$$.$r$;
          }
        } else {
          switch($p$$10$$.$cr$ = -1, $p$$10$$.$p$) {
            case "first":
            ;
            case "before":
            ;
            case "inside":
              $p$$10$$.$cp$ = 0;
              break;
            case "after":
            ;
            case "last":
              $p$$10$$.$cp$ = $p$$10$$.$rt$.$_$container$.find(" \x3e ul \x3e li").length;
              break;
            default:
              $p$$10$$.$cp$ = $p$$10$$.$p$;
          }
        }
        $p$$10$$.$np$ = -1 == $p$$10$$.$cr$ ? $p$$10$$.$rt$.$_$container$ : $p$$10$$.$cr$;
        $p$$10$$.$op$ = $p$$10$$.$ot$.$_getParent$($p$$10$$.$o$);
        $p$$10$$.$cop$ = $p$$10$$.$o$.index();
        -1 === $p$$10$$.$op$ && ($p$$10$$.$op$ = $p$$10$$.$ot$ ? $p$$10$$.$ot$.$_$container$ : this.$_$container$);
        !/^(before|after)$/.test($p$$10$$.$p$) && $p$$10$$.$op$ && $p$$10$$.$np$ && $p$$10$$.$op$[0] === $p$$10$$.$np$[0] && $p$$10$$.$o$.index() < $p$$10$$.$cp$ && $p$$10$$.$cp$++;
        $p$$10$$.$or$ = $p$$10$$.$np$.find(" \x3e ul \x3e li:nth-child(" + ($p$$10$$.$cp$ + 1) + ")");
        this.$_data$.$core$.$prepared_move$ = $p$$10$$;
        this.$_emitEvent$(this.$_data$.$core$.$prepared_move$, "prepare_move");
        $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$, "prepare_move");
      }
    }, check_move:function() {
      var $obj$$61$$ = this.$_data$.$core$.$prepared_move$, $ret$$31$$ = !0, $r$$2$$;
      $r$$2$$ = -1 === $obj$$61$$.$r$ ? this.$_$container$ : $obj$$61$$.$r$;
      if (!$obj$$61$$ || !$obj$$61$$.$o$ || $obj$$61$$.$or$[0] === $obj$$61$$.$o$[0] || !$obj$$61$$.$r$) {
        return!1;
      }
      if (!$obj$$61$$.$cy$) {
        if ($obj$$61$$.$op$ && $obj$$61$$.$np$ && $obj$$61$$.$op$[0] === $obj$$61$$.$np$[0] && $obj$$61$$.$cp$ - 1 === $obj$$61$$.$o$.index()) {
          return!1;
        }
        $obj$$61$$.$o$.each(function() {
          if (-1 !== $r$$2$$.parentsUntil(".oj-tree", "li").addBack().index(this)) {
            return $ret$$31$$ = !1;
          }
        });
      }
      return $ret$$31$$;
    }, $_rename_node$:function($node$$70$$, $text$$16$$) {
      var $t$$3$$;
      $node$$70$$ = this.$_getNode$($node$$70$$);
      this.$__rollback$();
      $t$$3$$ = this.getText($node$$70$$);
      if ($node$$70$$ && $node$$70$$.length) {
        var $rslt$$3$$ = this.$_emitEvent$({obj:$node$$70$$, func:"rename", title:$text$$16$$, prevTitle:$t$$3$$}, "before");
        if ("boolean" == typeof $rslt$$3$$ && !$rslt$$3$$) {
          return;
        }
      }
      $node$$70$$ && $node$$70$$.length && this.$_set_text$.apply(this, Array.prototype.slice.call(arguments)) && this.$_emitEvent$({obj:$node$$70$$, title:$text$$16$$, prevTitle:$t$$3$$}, "rename");
    }, $_move_node$:function($obj$$62$$, $d$$6_o$$14_ref$$3$$, $position$$14$$, $is_copy$$, $is_prepared$$, $skip_check$$) {
      if (!($obj$$62$$.hasClass && $obj$$62$$.hasClass("oj-disabled") || this.$_data$.$core$.locked)) {
        if (!$is_prepared$$) {
          return this.$_prepare_move$($obj$$62$$, $d$$6_o$$14_ref$$3$$, $position$$14$$, function($p$$11$$) {
            this.$_move_node$($p$$11$$, !1, !1, $is_copy$$, !0, $skip_check$$);
          });
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0);
        if (!$skip_check$$ && !this.check_move()) {
          return!1;
        }
        this.$__rollback$();
        $d$$6_o$$14_ref$$3$$ = !1;
        $is_copy$$ ? ($d$$6_o$$14_ref$$3$$ = $obj$$62$$.$o$.clone(!0), $d$$6_o$$14_ref$$3$$.find("*[id]").addBack().each(function() {
          this.id && (this.id = "copy_" + this.id);
        })) : $d$$6_o$$14_ref$$3$$ = $obj$$62$$.$o$;
        $obj$$62$$.$or$.length ? $obj$$62$$.$or$.before($d$$6_o$$14_ref$$3$$) : ($obj$$62$$.$np$.children("ul").length || $$$$25$$("\x3cul /\x3e").appendTo($obj$$62$$.$np$), $obj$$62$$.$np$.children("ul:eq(0)").append($d$$6_o$$14_ref$$3$$));
        try {
          $obj$$62$$.$ot$.$_clean_node$($obj$$62$$.$op$), $obj$$62$$.$rt$.$_clean_node$($obj$$62$$.$np$), $obj$$62$$.$op$.find("\x3e ul \x3e li").length || $obj$$62$$.$op$.removeClass("oj-expanded oj-collapsed").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
        } catch ($e$$88$$) {
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0, this.$_data$.$core$.$prepared_move$.$oc$ = $d$$6_o$$14_ref$$3$$);
        $d$$6_o$$14_ref$$3$$ = $$$$25$$.extend(!0, {}, this.$_data$.$core$.$prepared_move$);
        $d$$6_o$$14_ref$$3$$.obj = $obj$$62$$.$o$;
        this.$_emitEvent$($d$$6_o$$14_ref$$3$$, "move");
        return this.$_data$.$core$.$prepared_move$;
      }
    }, $_getMove$:function() {
      return this.$_data$.$crrm$.$prepared_move$;
    }, $_getType$:function($node$$71$$) {
      var $n$$29$$ = null;
      this.options.types && ($n$$29$$ = this.$_getNode$($node$$71$$));
      return $n$$29$$ && $n$$29$$.length ? $n$$29$$.attr(this.options.types.attr) || "default" : !1;
    }, $_setType$:function($str$$18$$, $node$$72$$) {
      var $s$$12$$ = this.options.types, $ret$$32$$ = !1;
      $node$$72$$ = this.$_getNode$($node$$72$$);
      ($ret$$32$$ = $s$$12$$ ? $node$$72$$.length && $str$$18$$ ? $node$$72$$.attr(this.options.types.attr, $str$$18$$) : !1 : !1) && this.$_emitEvent$({obj:$node$$72$$, type:$str$$18$$}, "settype");
      return $ret$$32$$;
    }, $_check$:function($rule$$3$$, $obj$$63$$, $opts$$24$$) {
      $obj$$63$$ = this.$_getNode$($obj$$63$$);
      var $v$$1$$ = !1, $ty$$ = this.$_getType$($obj$$63$$), $d$$7$$ = 0, $_this$$6$$ = this, $s$$13$$ = this.$_getOptions$().types, $data$$148$$ = !1;
      if (-1 === $obj$$63$$) {
        if ($s$$13$$[$rule$$3$$]) {
          $v$$1$$ = $s$$13$$[$rule$$3$$];
        } else {
          return;
        }
      } else {
        if (!1 === $ty$$) {
          return;
        }
        ($data$$148$$ = this.$_data$.types.$defaults$.useData ? $obj$$63$$.data("oj-tree") : !1) && $data$$148$$.types && "undefined" !== typeof $data$$148$$.types[$rule$$3$$] ? $v$$1$$ = $data$$148$$.types[$rule$$3$$] : $s$$13$$.types[$ty$$] && "undefined" !== typeof $s$$13$$.types[$ty$$][$rule$$3$$] ? $v$$1$$ = $s$$13$$.types[$ty$$][$rule$$3$$] : $s$$13$$.types["default"] && "undefined" !== typeof $s$$13$$.types["default"][$rule$$3$$] && ($v$$1$$ = $s$$13$$.types["default"][$rule$$3$$]);
      }
      $$$$25$$.isFunction($v$$1$$) && ($v$$1$$ = $v$$1$$.call(this, $obj$$63$$));
      var $md$$ = this.$_data$.types.$defaults$.maxDepth;
      "maxDepth" === $rule$$3$$ && -1 !== $obj$$63$$ && !1 !== $opts$$24$$ && -2 !== this.$_data$.types.$defaults$.maxDepth && 0 !== $v$$1$$ && $obj$$63$$.children("a:eq(0)").parentsUntil(".oj-tree", "li").each(function($i$$269$$) {
        if (-1 !== $md$$ && 0 >= $md$$ - ($i$$269$$ + 1)) {
          return $v$$1$$ = 0, !1;
        }
        $d$$7$$ = 0 === $i$$269$$ ? $v$$1$$ : $_this$$6$$.$_check$($rule$$3$$, this, !1);
        if (-1 !== $d$$7$$ && 0 >= $d$$7$$ - ($i$$269$$ + 1)) {
          return $v$$1$$ = 0, !1;
        }
        0 <= $d$$7$$ && ($d$$7$$ - ($i$$269$$ + 1) < $v$$1$$ || 0 > $v$$1$$) && ($v$$1$$ = $d$$7$$ - ($i$$269$$ + 1));
        0 <= $md$$ && ($md$$ - ($i$$269$$ + 1) < $v$$1$$ || 0 > $v$$1$$) && ($v$$1$$ = $md$$ - ($i$$269$$ + 1));
      });
      return $v$$1$$;
    }, $_clean_node$:function($obj$$64$$) {
      $obj$$64$$ = $obj$$64$$ && -1 != $obj$$64$$ ? $$$$25$$($obj$$64$$) : this.$_$container_ul$;
      $obj$$64$$ = $obj$$64$$.is("li") ? $obj$$64$$.find("li").addBack() : $obj$$64$$.find("li");
      $obj$$64$$.removeClass("oj-tree-last").addClass("oj-tree-node").addClass("oj-draggable").filter("li:last-child").addClass("oj-tree-last").end().filter(":has(li)").not(".oj-expanded").removeClass("oj-tree-leaf").addClass("oj-collapsed").attr("aria-expanded", "false");
      $obj$$64$$.not(".oj-expanded, .oj-collapsed").addClass("oj-tree-leaf").children("ul").remove();
      $obj$$64$$.find("li");
      var $disc$$, $t$$5$$;
      $$$$25$$.each($obj$$64$$, function() {
        $t$$5$$ = $$$$25$$(this);
        $disc$$ = $t$$5$$.find("\x3e ins");
        1 < $disc$$.length && ($disc$$ = $$$$25$$($disc$$[0]));
        $t$$5$$.hasClass("oj-tree-leaf") ? ($disc$$.removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), $disc$$.addClass("oj-tree-icon")) : ($disc$$.addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), $disc$$.removeClass("oj-tree-node-icon"));
      });
      this.$_emitEvent$({obj:$obj$$64$$}, "clean_node");
    }, $_create_node$:function($obj$$65$$, $position$$15$$, $js$$, $callback$$97$$, $is_loaded$$) {
      $obj$$65$$ = this.$_getNode$($obj$$65$$);
      if (-1 !== $obj$$65$$ && !$obj$$65$$.length) {
        return!1;
      }
      var $ht$$1$$ = this.$_data$.$core$.$htmlTitles$;
      $position$$15$$ = "undefined" === typeof $position$$15$$ ? "last" : $position$$15$$;
      var $d$$8$$ = $$$$25$$("\x3cli /\x3e"), $tmp$$3$$;
      if (!$is_loaded$$ && !this.$_is_loaded$($obj$$65$$)) {
        return this.$_load_node$($obj$$65$$, function() {
          this.$_create_node$($obj$$65$$, $position$$15$$, $js$$, $callback$$97$$, !0);
        }), !1;
      }
      this.$__rollback$();
      "string" === typeof $js$$ && ($js$$ = {data:$js$$});
      $js$$ || ($js$$ = {});
      $js$$.attr && $d$$8$$.attr($js$$.attr);
      $js$$.metadata && $d$$8$$.data($js$$.metadata);
      $js$$.state && $d$$8$$.addClass("oj-tree-" + ("expanded" === $js$$.state ? "open" : "closed"));
      $js$$.data || ($js$$.data = void 0 !== $js$$.title ? $js$$.title : this.$getTranslatedString$("m_newnode"));
      $$$$25$$.isArray($js$$.data) || ($tmp$$3$$ = $js$$.data, $js$$.data = [], $js$$.data.push($tmp$$3$$));
      var $sp$$2$$;
      $$$$25$$.each($js$$.data, function($i$$271$$, $m$$24$$) {
        $tmp$$3$$ = $$$$25$$("\x3ca tabindex\x3d'-1' /\x3e");
        $$$$25$$.isFunction($m$$24$$) && ($m$$24$$ = $m$$24$$.call(this, $js$$));
        $sp$$2$$ = $$$$25$$("\x3cspan class\x3d'oj-tree-title'\x3e");
        "string" == typeof $m$$24$$ ? ($sp$$2$$[$ht$$1$$ ? "html" : "text"]($m$$24$$), $tmp$$3$$.attr("href", "#")) : ($m$$24$$.attr || ($m$$24$$.attr = {}), $m$$24$$.attr.href || ($m$$24$$.attr.href = "#"), $sp$$2$$[$ht$$1$$ ? "html" : "text"]($m$$24$$.title), $m$$24$$.language && $tmp$$3$$.addClass($m$$24$$.language));
        $tmp$$3$$.append($sp$$2$$);
        $tmp$$3$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-node-icon'\x3e\x26#160;\x3c/ins\x3e");
        !$m$$24$$.icon && $js$$.icon && ($m$$24$$.icon = $js$$.icon);
        $m$$24$$.icon && (-1 === $m$$24$$.icon.indexOf("/") ? $tmp$$3$$.children("ins").addClass($m$$24$$.icon) : $tmp$$3$$.children("ins").css("background", "url('" + $m$$24$$.icon + "') center center no-repeat"));
        $d$$8$$.append($tmp$$3$$);
      });
      $d$$8$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default'\x3e\x26#160;\x3c/ins\x3e");
      -1 === $obj$$65$$ && ($obj$$65$$ = this.$_$container$, "before" === $position$$15$$ && ($position$$15$$ = "first"), "after" === $position$$15$$ && ($position$$15$$ = "last"));
      switch($position$$15$$) {
        case "before":
          $obj$$65$$.before($d$$8$$);
          $tmp$$3$$ = this.$_getParent$($obj$$65$$);
          break;
        case "after":
          $obj$$65$$.after($d$$8$$);
          $tmp$$3$$ = this.$_getParent$($obj$$65$$);
          break;
        case "inside":
        ;
        case "first":
          $obj$$65$$.children("ul").length || $obj$$65$$.append("\x3cul /\x3e");
          $obj$$65$$.children("ul").prepend($d$$8$$);
          $tmp$$3$$ = $obj$$65$$;
          break;
        case "last":
          $obj$$65$$.children("ul").length || $obj$$65$$.append("\x3cul /\x3e");
          $obj$$65$$.children("ul").append($d$$8$$);
          $tmp$$3$$ = $obj$$65$$;
          break;
        default:
          $obj$$65$$.children("ul").length || $obj$$65$$.append("\x3cul /\x3e"), $position$$15$$ || ($position$$15$$ = 0), $tmp$$3$$ = $obj$$65$$.children("ul").children("li").eq($position$$15$$), $tmp$$3$$.length ? $tmp$$3$$.before($d$$8$$) : $obj$$65$$.children("ul").append($d$$8$$), $tmp$$3$$ = $obj$$65$$;
      }
      if (-1 === $tmp$$3$$ || $tmp$$3$$.get(0) === this.$_$container$.get(0)) {
        $tmp$$3$$ = -1;
      }
      this.$_clean_node$($tmp$$3$$);
      this.$_emitEvent$({obj:$d$$8$$, parent:$tmp$$3$$}, "create_node");
      $callback$$97$$ && $callback$$97$$.call(this, $d$$8$$);
      return $d$$8$$;
    }, $_expand$:function($obj$$66$$, $callback$$98$$, $skipAnim$$4$$) {
      $obj$$66$$ = this.$_getNode$($obj$$66$$);
      if (!$obj$$66$$.length) {
        return!1;
      }
      if (!$obj$$66$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if (!$obj$$66$$.hasClass("oj-collapsed")) {
          return $callback$$98$$ && $callback$$98$$.call(), !1;
        }
        var $dur$$1_rslt$$4$$ = this.$_emitEvent$({obj:$obj$$66$$, func:"expand"}, "before");
        if ("boolean" != typeof $dur$$1_rslt$$4$$ || $dur$$1_rslt$$4$$) {
          var $dur$$1_rslt$$4$$ = $skipAnim$$4$$ ? 0 : this.options.animDuration || 0, $t$$6$$ = this;
          this.$_is_loaded$($obj$$66$$) ? (this.options.expandParents && $obj$$66$$.parentsUntil(".oj-tree", ".oj-collapsed").each(function() {
            $t$$6$$.expand(this, !1, !0);
          }), ($skipAnim$$4$$ || $dur$$1_rslt$$4$$) && $obj$$66$$.children("ul").css("display", "none"), $obj$$66$$.removeClass("oj-collapsed").addClass("oj-expanded").attr("aria-expanded", "true").children("a").removeClass("oj-tree-loading"), $$$$25$$($obj$$66$$.children()[0]).removeClass("oj-selected").addClass("oj-default"), $skipAnim$$4$$ || $dur$$1_rslt$$4$$ ? $obj$$66$$.children("ul").stop(!0, !0).slideDown($dur$$1_rslt$$4$$, function() {
            this.style.display = "";
            $t$$6$$.after_open($obj$$66$$);
          }) : $t$$6$$.after_open($obj$$66$$), this.$_emitEvent$({obj:$obj$$66$$}, "expand"), $callback$$98$$ && $callback$$98$$.call()) : ($obj$$66$$.children("a").addClass("oj-tree-loading"), this.$_load_node$($obj$$66$$, function() {
            $t$$6$$.expand($obj$$66$$, $callback$$98$$, $skipAnim$$4$$);
          }, $callback$$98$$));
        }
      }
    }, $_expandAll$:function($obj$$67$$, $do_animation$$, $original_obj$$) {
      var $origTarg$$1$$ = $obj$$67$$ ? $obj$$67$$ : -1;
      ($obj$$67$$ = $obj$$67$$ ? this.$_getNode$($obj$$67$$) : -1) && -1 !== $obj$$67$$ ? $origTarg$$1$$ = $obj$$67$$ : $obj$$67$$ = this.$_$container_ul$;
      $original_obj$$ ? $obj$$67$$ = $obj$$67$$.find("li.oj-collapsed") : ($original_obj$$ = $obj$$67$$, $obj$$67$$ = $obj$$67$$.is(".oj-collapsed") ? $obj$$67$$.find("li.oj-collapsed").addBack() : $obj$$67$$.find("li.oj-collapsed"));
      var $_this$$8$$ = this;
      $obj$$67$$.each(function() {
        var $__this$$ = this;
        $_this$$8$$.$_is_loaded$(this) ? $_this$$8$$.$_expand$(this, !1, !$do_animation$$) : $_this$$8$$.expand(this, function() {
          $_this$$8$$.$_expandAll$($__this$$, $do_animation$$, $original_obj$$);
        }, !$do_animation$$);
      });
      0 === $original_obj$$.find("li.oj-collapsed").length && this.$_emitEvent$({obj:$obj$$67$$, targ:$origTarg$$1$$}, "expandAll");
    }, $_select$:function($node$$73$$, $check$$, $e$$89$$) {
      if (0 == this.$_data$.$core$.$selectMode$) {
        return!1;
      }
      $node$$73$$ = this.$_getNode$($node$$73$$);
      if (-1 == $node$$73$$ || !$node$$73$$ || !$node$$73$$.length) {
        return!1;
      }
      if (!$node$$73$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        this.$_data$.$core$.$initFocus$ = !0;
        var $isSelected$$ = this.isSelected($node$$73$$);
        if (!$isSelected$$) {
          var $rslt$$5_s$$15$$ = this.$_emitEvent$({obj:$node$$73$$, func:"select"}, "before");
          if ("boolean" == typeof $rslt$$5_s$$15$$ && !$rslt$$5_s$$15$$) {
            return;
          }
        }
        var $rslt$$5_s$$15$$ = this.options, $isMultiple_selMultMod$$ = this.$_data$.ui.$defaults$.selectMultipleModifier, $isRange_selRangeMod$$ = this.$_data$.ui.$defaults$.selectRangeModifier, $disSelChildren$$ = this.$_data$.ui.$defaults$.disableSelectingChildren, $isMultiple_selMultMod$$ = "on" == $isMultiple_selMultMod$$ || !1 !== $isMultiple_selMultMod$$ && $e$$89$$ && $oj$$25$$.$DomUtils$.$isMetaKeyPressed$($e$$89$$), $isRange_selRangeMod$$ = !1 !== $isRange_selRangeMod$$ && $e$$89$$ && $e$$89$$[$isRange_selRangeMod$$ + 
        "Key"] && this.$_data$.ui.$last_selected$ && this.$_data$.ui.$last_selected$[0] !== $node$$73$$[0] && this.$_data$.ui.$last_selected$.parent()[0] === $node$$73$$.parent()[0], $proceed$$ = !0, $t$$7$$ = this;
        if ($check$$) {
          if ($disSelChildren$$ && $isMultiple_selMultMod$$ && ($node$$73$$.parentsUntil(".oj-tree", "li").children("a.oj-selected").length || $node$$73$$.children("ul").find("a.oj-selected:eq(0)").length)) {
            return!1;
          }
          $proceed$$ = !1;
          switch(!0) {
            case $isRange_selRangeMod$$:
              this.$_data$.ui.$last_selected$.addClass("oj-tree-last-selected");
              $node$$73$$ = $node$$73$$[$node$$73$$.index() < this.$_data$.ui.$last_selected$.index() ? "nextUntil" : "prevUntil"](".oj-tree-last-selected").addBack();
              -1 == this.$_data$.$core$.$selectMode$ || $node$$73$$.length < this.$_data$.$core$.$selectMode$ ? (this.$_data$.ui.$last_selected$.removeClass("oj-tree-last-selected"), this.$_data$.ui.selected.each(function() {
                this !== $t$$7$$.$_data$.ui.$last_selected$[0] && $t$$7$$.deselect(this);
              }), $isSelected$$ = !1, $proceed$$ = !0) : $proceed$$ = !1;
              break;
            case $isSelected$$ && !$isMultiple_selMultMod$$:
              if (!$e$$89$$) {
                break;
              }
              this.deselectAll();
              this.$_data$.ui.$spacebar$ || ($isSelected$$ = !1);
              $proceed$$ = !0;
              break;
            case !$isSelected$$ && !$isMultiple_selMultMod$$:
              $e$$89$$ ? this.$_data$.ui.selected && 1 == this.$_data$.ui.selected.length ? this.deselect(this.$_data$.ui.selected) : this.deselectAll(this.$_data$.ui.selected) : 1 === this.$_data$.$core$.$selectMode$ ? this.deselect(this.$_data$.ui.selected) : 1 < this.$_data$.$core$.$selectMode$ && this.deselectAll();
              $proceed$$ = !0;
              break;
            case $isSelected$$ && $isMultiple_selMultMod$$:
              this.deselect($node$$73$$);
              break;
            case !$isSelected$$ && $isMultiple_selMultMod$$:
              if (-1 == this.$_data$.$core$.$selectMode$ || this.$_data$.ui.selected.length + 1 <= this.$_data$.$core$.$selectMode$) {
                $proceed$$ = !0;
              }
            ;
          }
        }
        $proceed$$ && !$isSelected$$ && ($isRange_selRangeMod$$ || (this.$_data$.ui.$last_selected$ = $node$$73$$), $node$$73$$.children("a").addClass("oj-selected"), $node$$73$$.attr("aria-selected", "true"), $rslt$$5_s$$15$$.selectedParentExpand && $node$$73$$.parents(".oj-collapsed").each(function() {
          $t$$7$$.expand(this, !1, !0);
        }), this.$_data$.ui.selected = this.$_data$.ui.selected.add($node$$73$$), this.$_fix_scroll$($node$$73$$.eq(0)), this.$_maintainSelected$($node$$73$$, !0), this.$_emitEvent$({obj:$node$$73$$, e:$e$$89$$}, "select"));
      }
    }, $_deselectAll$:function($context$$52$$, $bSeparate$$) {
      if (!this.$_data$.$core$.locked) {
        if ($bSeparate$$) {
          $a$$81_origTarg$$2$$ = $context$$52$$ ? $context$$52$$ : -1, $ret$$33$$ = $context$$52$$ ? $$$$25$$($context$$52$$).find("a.oj-selected").parent() : this.$_$container$.find("a.oj-selected").parent(), $ret$$33$$.not(".oj-disabled"), 0 !== $ret$$33$$.length && ($_this$$9$$ = this, $$$$25$$.each($ret$$33$$, function() {
            $_this$$9$$.deselect(this);
          }));
        } else {
          var $a$$81_origTarg$$2$$ = $context$$52$$ ? $context$$52$$ : -1, $ret$$33$$ = $context$$52$$ ? $$$$25$$($context$$52$$).find("a.oj-selected").parent() : this.$_$container$.find("a.oj-selected").parent();
          $ret$$33$$.not(".oj-disabled");
          if (0 === $ret$$33$$.length) {
            if (-1 === $a$$81_origTarg$$2$$) {
              for ($a$$81_origTarg$$2$$ = this.options.selection;$a$$81_origTarg$$2$$.length;) {
                $a$$81_origTarg$$2$$.pop();
              }
            }
          } else {
            $ret$$33$$.children("a.oj-selected").removeClass("oj-selected");
            $ret$$33$$.removeAttr("aria-selected");
            var $_this$$9$$ = this;
            $$$$25$$.each($ret$$33$$, function($i$$272$$, $n$$30$$) {
              $_this$$9$$.$_maintainSelected$($$$$25$$($n$$30$$), !1);
            });
            this.$_data$.ui.selected = $$$$25$$([]);
            this.$_data$.ui.$last_selected$ = !1;
            $ret$$33$$.length && this.$_emitEvent$({obj:$ret$$33$$, targ:$a$$81_origTarg$$2$$}, "deselectAll");
          }
        }
      }
    }, $_setSelected$:function($nodes$$2$$) {
      if (this.$_data$.$core$.locked) {
        return null;
      }
      if ($nodes$$2$$ && 0 < $nodes$$2$$.length) {
        var $_this$$10$$ = this;
        $$$$25$$.each($nodes$$2$$, function($i$$273$$, $val$$43$$) {
          $val$$43$$ && $_this$$10$$.$_select$($val$$43$$, !0);
        });
      }
    }, $_maintainSelected$:function($node$$74$$, $bAdd$$) {
      var $ar$$1$$, $i$$274_id$$33$$;
      $node$$74$$ && ($ar$$1$$ = this.options.selection, $i$$274_id$$33$$ = "#" + $node$$74$$.attr("id"), $bAdd$$ ? 0 > $$$$25$$.inArray($i$$274_id$$33$$, $ar$$1$$) && $ar$$1$$.push($i$$274_id$$33$$) : ($i$$274_id$$33$$ = $$$$25$$.inArray($i$$274_id$$33$$, $ar$$1$$), 0 <= $i$$274_id$$33$$ && $ar$$1$$.splice($i$$274_id$$33$$, 1)));
    }, $_disclosureHover$:function($elem$$43$$, $bHover$$) {
      $elem$$43$$ = $$$$25$$($elem$$43$$);
      if (!$elem$$43$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        var $par$$ = $elem$$43$$.parent(), $bClosed$$ = $par$$.hasClass("oj-collapsed");
        if ($par$$.hasClass("oj-expanded") || $bClosed$$) {
          $bHover$$ ? ($elem$$43$$.addClass("oj-hover"), $elem$$43$$.removeClass("oj-default"), $elem$$43$$.removeClass("oj-selected")) : ($elem$$43$$.removeClass("oj-hover"), $elem$$43$$.addClass("oj-default"));
        }
      }
    }, $_refresh$:function($node$$75$$) {
      this.$_refresh_core$($node$$75$$);
    }, $_refresh_core$:function($node$$76$$) {
      var $origTarg$$3$$ = $node$$76$$ ? $node$$76$$ : -1, $_this$$11$$ = this;
      this.$_save_opened$();
      $node$$76$$ || ($node$$76$$ = -1);
      ($node$$76$$ = this.$_getNode$($node$$76$$)) ? $origTarg$$3$$ = $node$$76$$ : $node$$76$$ = -1;
      -1 !== $node$$76$$ ? $node$$76$$.children("UL").remove() : (this.$_$container_ul$.empty(), this.$_processExistingMarkup$());
      this.$_load_node$($node$$76$$, function() {
        $_this$$11$$.$_emitEvent$({obj:$origTarg$$3$$}, "refresh");
        $_this$$11$$.$_reload_nodes$();
      });
    }, $_refresh_ui$:function($obj$$68$$) {
      this.saveSelected();
      this.$_refresh_core$($obj$$68$$);
    }, after_open:function($obj$$69$$) {
      this.$_emitEvent$({obj:$obj$$69$$}, "after_open");
    }, after_close:function($obj$$70$$) {
      this.$_emitEvent$({obj:$obj$$70$$}, "after_close");
    }, $_reopen$:function() {
      var $_this$$12$$ = this;
      this.$_data$.$core$.$toExpand$.length && $$$$25$$.each(this.$_data$.$core$.$toExpand$, function($i$$275$$, $val$$44$$) {
        $_this$$12$$.$_expand$($val$$44$$, !1, !0);
      });
      this.$_emitEvent$({}, "reopen");
    }, $_getSelected$:function($context$$53$$) {
      return $context$$53$$ ? $$$$25$$($context$$53$$).find("a.oj-selected").parent() : this.$_data$.ui.selected;
    }, $_set_text$:function($obj$$71$$, $val$$45$$) {
      $obj$$71$$ = this.$_getNode$($obj$$71$$);
      if (!$obj$$71$$.length) {
        return!1;
      }
      $obj$$71$$ = $obj$$71$$.children("a:eq(0)");
      if (this.$_data$.$core$.$htmlTitles$) {
        var $tmp$$4$$ = $obj$$71$$.children("INS").clone();
        $obj$$71$$.html($val$$45$$).prepend($tmp$$4$$);
        this.$_emitEvent$({obj:$obj$$71$$, name:$val$$45$$}, "set_text");
        return!0;
      }
      $obj$$71$$ = $obj$$71$$.find("span:eq(0)");
      this.$_emitEvent$({obj:$obj$$71$$, name:$val$$45$$}, "set_text");
      return $obj$$71$$[0].textContent = $val$$45$$;
    }, $_loadNodes$:function() {
      0 !== this.$_data$.$ds$.type && -1 !== this.$_data$.$ds$.type ? this.$_load_node$(-1, function() {
        this.$_loaded$();
        this.$_reload_nodes$();
      }) : (this.$_applyEmptyText$(), this.$_loaded$());
    }, $_load_node$:function($obj$$72$$) {
      this.$_emitEvent$({obj:$obj$$72$$}, "load_node");
    }, $_is_loaded$:function() {
      return!0;
    }, $_load_node_DS$:function($obj$$74$$, $s_call$$, $e_call$$) {
      var $_this$$13$$ = this;
      this.$_load_node_tree$($obj$$74$$, function() {
        $_this$$13$$.$_emitEvent$({obj:$_this$$13$$.$_getNode$($obj$$74$$)}, "load_node");
        $s_call$$.call(this);
      }, $e_call$$);
    }, $_is_loaded_DS$:function($obj$$75$$) {
      $obj$$75$$ = this.$_getNode$($obj$$75$$);
      return-1 === $obj$$75$$ || !$obj$$75$$ || $obj$$75$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$75$$.children("ul").children("li").length;
    }, $_refresh_DS$:function($obj$$76$$) {
      ($obj$$76$$ = this.$_getNode$($obj$$76$$)) && -1 !== $obj$$76$$ && $obj$$76$$.removeData("oj-tree-children");
      return this.$_refresh_ui$($obj$$76$$);
    }, $_load_node_J$:function($obj$$77$$, $s_call$$1$$, $e_call$$1$$) {
      var $_this$$14$$ = this;
      this.$_load_node_json$($obj$$77$$, function() {
        $_this$$14$$.$_emitEvent$({obj:$_this$$14$$.$_getNode$($obj$$77$$)}, "load_node");
        $s_call$$1$$.call(this);
      }, $e_call$$1$$);
    }, $_is_loaded_J$:function($obj$$78$$) {
      var $s$$16$$ = this.options.data;
      $obj$$78$$ = this.$_getNode$($obj$$78$$);
      return-1 == $obj$$78$$ || !$obj$$78$$ || !$s$$16$$.ajax && !this.$_data$.$ds$.$progressiveRender$ && !$$$$25$$.isFunction($s$$16$$.data) || $obj$$78$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$78$$.children("ul").children("li").length;
    }, $_load_node_H$:function($obj$$79$$, $s_call$$2$$, $e_call$$2$$) {
      var $_this$$15$$ = this;
      this.$_load_node_html$($obj$$79$$, function() {
        $_this$$15$$.$_emitEvent$({obj:$_this$$15$$.$_getNode$($obj$$79$$)}, "load_node");
        $s_call$$2$$.call(this);
      }, $e_call$$2$$);
    }, $_is_loaded_H$:function($obj$$80$$) {
      var $s$$17$$ = this.options.data, $data$$149$$ = null, $ajax$$ = null;
      $s$$17$$ && ($data$$149$$ = $s$$17$$.data || null, $ajax$$ = $s$$17$$.ajax || null);
      $obj$$80$$ = this.$_getNode$($obj$$80$$);
      return-1 == $obj$$80$$ || !$obj$$80$$ || !$ajax$$ && !$$$$25$$.isFunction($data$$149$$) || $obj$$80$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$80$$.children("ul").children("li").size();
    }, reselect:function() {
      var $_this$$16$$ = this, $s$$18$$ = this.$_data$.ui.$to_select$, $s$$18$$ = $$$$25$$.map($$$$25$$.makeArray($s$$18$$), function($n$$31$$) {
        return "#" + $n$$31$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      $$$$25$$.each($s$$18$$, function($i$$276$$, $val$$46$$) {
        $val$$46$$ && "#" !== $val$$46$$ && $_this$$16$$.select($val$$46$$);
      });
      this.$_data$.ui.selected = this.$_data$.ui.selected.filter(function() {
        return this.parentNode;
      });
      this.$_emitEvent$(null, "reselect");
    }, saveSelected:function() {
      var $_this$$17$$ = this;
      this.$_data$.ui.$to_select$ = [];
      this.$_data$.ui.selected.each(function() {
        this.id && $_this$$17$$.$_data$.ui.$to_select$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
      this.$_emitEvent$(this.$_data$.ui.$to_select$, "savedselected");
    }, rollback:function($rb$$1$$) {
      $rb$$1$$ && ($$$$25$$.isArray($rb$$1$$) || ($rb$$1$$ = [$rb$$1$$]), $$$$25$$.each($rb$$1$$, function() {
      }));
    }, get_rollback:function() {
      this.$_emitEvent$(null, "get_rollback");
      return{$i$:this.$_index$, $h$:this.$_$container$.children("ul").clone(!0), $d$:this.data};
    }, set_rollback:function($html$$3$$, $data$$150$$) {
      this.$_$container$ && this.$_$container_ul$ && this.$_$container_ul$.empty().append($html$$3$$);
      this.data = $data$$150$$;
      this.$_emitEvent$(null, "set_rollback");
    }, $_load_node_tree$:function($obj$$81$$, $s_call$$3$$) {
      var $d$$9_rslt$$6$$ = this.$_JsonDSToJson$($obj$$81$$);
      if ($d$$9_rslt$$6$$.success && $d$$9_rslt$$6$$.$js$) {
        var $$u_bTree$$ = !$obj$$81$$ || -1 === $obj$$81$$, $s$$19$$ = this.options.data;
        if ($s$$19$$.data && !$s$$19$$.ajax || $s$$19$$.data && $s$$19$$.ajax && $$u_bTree$$) {
          $$u_bTree$$ && (($d$$9_rslt$$6$$ = this.$_parseJson$($d$$9_rslt$$6$$.$js$, $obj$$81$$)) ? (this.$_$container_ul$.empty().append($d$$9_rslt$$6$$.children()), this.$_clean_node$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty()), $s_call$$3$$ && $s_call$$3$$.call(this);
        } else {
          if (!$s$$19$$.data && $s$$19$$.ajax || $s$$19$$.data && $s$$19$$.ajax && !$$u_bTree$$) {
            ($d$$9_rslt$$6$$ = this.$_parseJson$($d$$9_rslt$$6$$.$js$, $obj$$81$$)) ? ($$u_bTree$$ ? ($$u_bTree$$ = this.$_$container_ul$, $$u_bTree$$.empty().append($d$$9_rslt$$6$$.children()), $$u_bTree$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u_bTree$$.attr("aria-multiselectable", !0)) : ($obj$$81$$.append($d$$9_rslt$$6$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$81$$.removeData("oj-tree-is-loading")), 
            this.$_clean_node$($obj$$81$$), $s_call$$3$$ && $s_call$$3$$.call(this)) : $$u_bTree$$ ? this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$3$$ && $s_call$$3$$.call(this)) : ($obj$$81$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$81$$.removeData("oj-tree-is-loading"), $s$$19$$.correct_state && (this.$_correct_state$($obj$$81$$), $s_call$$3$$ && $s_call$$3$$.call(this)));
          }
        }
      }
    }, $_JsonDSToJson$:function($parentKey$$10$$, $node$$77$$) {
      var $arJson$$ = [], $ds$$ = this.$_tds$, $cc$$, $range$$21$$ = {}, $rslt$$7$$ = {success:!1, $js$:null};
      -1 == $parentKey$$10$$ && ($parentKey$$10$$ = null, $range$$21$$.start = 0);
      $cc$$ = $ds$$.$getChildCount$($parentKey$$10$$);
      0 < $cc$$ && ($range$$21$$.count = $cc$$, $ds$$.$fetchChildren$($parentKey$$10$$, $range$$21$$, {success:$$$$25$$.proxy(function($jns$$) {
        for (var $c$$30$$ = $jns$$.$getCount$(), $attr$$18_n$$32_r$$3$$, $i$$278$$ = 0;$i$$278$$ < $c$$30$$;$i$$278$$++) {
          $node$$77$$ = {};
          ($attr$$18_n$$32_r$$3$$ = $jns$$.getData($i$$278$$)) && ($node$$77$$.attr = $attr$$18_n$$32_r$$3$$);
          $node$$77$$.title = $jns$$.$m_nodes$[$i$$278$$].title;
          $attr$$18_n$$32_r$$3$$.$metadata$ && ($node$$77$$.metadata = $jns$$.$m_nodes$[$i$$278$$].metadata);
          var $key$$97$$ = $node$$77$$.attr.id;
          $attr$$18_n$$32_r$$3$$ = $ds$$.$getChildCount$($key$$97$$);
          0 < $attr$$18_n$$32_r$$3$$ && ($attr$$18_n$$32_r$$3$$ = this.$_JsonDSToJson$($key$$97$$, $node$$77$$), $node$$77$$.children = $attr$$18_n$$32_r$$3$$.$js$);
          $arJson$$.push($node$$77$$);
        }
        $rslt$$7$$.success = !0;
        $rslt$$7$$.$js$ = $arJson$$;
      }, this), error:function() {
        $rslt$$7$$.success = !1;
      }}));
      return $rslt$$7$$;
    }, $_refresh_json$:function($obj$$82$$) {
      $obj$$82$$ = this.$_getNode$($obj$$82$$);
      if (!this.$_data$.$core$.locked) {
        var $bTree$$1$$ = !$obj$$82$$ || -1 !== $obj$$82$$ || !$obj$$82$$.length;
        if ($bTree$$1$$ || !$obj$$82$$.hasClass("oj-disabled")) {
          var $s$$20$$ = this.options.data.json;
          !$bTree$$1$$ && this.$_data$.$ds$.$progressiveUnload$ && ($$$$25$$.isFunction($s$$20$$.data) || $s$$20$$.ajax) && $obj$$82$$.removeData("oj-tree-children");
          return this.$_refresh_ui$($obj$$82$$);
        }
      }
    }, $_load_node_json$:function($obj$$83$$, $s_call$$4$$, $e_call$$4$$) {
      function $success_func$$() {
      }
      function $error_func$$() {
      }
      var $d$$10_s$$21$$ = this.$_getOptions$().data, $data$$151$$ = $d$$10_s$$21$$ && $d$$10_s$$21$$.data || null, $ajax$$1$$ = $d$$10_s$$21$$ && $d$$10_s$$21$$.ajax || null;
      !$d$$10_s$$21$$ || $data$$151$$ || $ajax$$1$$ || ($data$$151$$ = $d$$10_s$$21$$);
      if (($obj$$83$$ = this.$_getNode$($obj$$83$$)) && -1 !== $obj$$83$$ && (this.$_data$.$ds$.$progressiveRender$ || this.$_data$.$ds$.$progressiveUnload$) && !$obj$$83$$.is(".oj-expanded, .oj-tree-leaf") && 0 === $obj$$83$$.children("ul").children("li").length && $obj$$83$$.data("oj-tree-children")) {
        if ($d$$10_s$$21$$ = this.$_parseJson$($obj$$83$$.data("oj-tree-children"), $obj$$83$$)) {
          $obj$$83$$.append($d$$10_s$$21$$), this.$_data$.$ds$.$progressiveUnload$ || $obj$$83$$.removeData("oj-tree-children");
        }
        this.$_clean_node$($obj$$83$$);
        $s_call$$4$$ && $s_call$$4$$.call(this);
      } else {
        if ($obj$$83$$ && -1 !== $obj$$83$$) {
          if ($obj$$83$$.data("oj-tree-is-loading")) {
            return;
          }
          $obj$$83$$.data("oj-tree-is-loading", !0);
        }
        switch(!0) {
          case !$data$$151$$ && !$ajax$$1$$:
            throw "ojTree - neither data nor ajax settings supplied.";;
          case $$$$25$$.isFunction($data$$151$$):
            $data$$151$$.call(this, $obj$$83$$, $$$$25$$.proxy(function($d$$11$$) {
              ($d$$11$$ = this.$_parseJson$($d$$11$$, $obj$$83$$)) ? (-1 !== $obj$$83$$ && $obj$$83$$ ? ($obj$$83$$.append($d$$11$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading")) : this.$_$container_ul$.empty().append($d$$11$$.children()), this.$_clean_node$($obj$$83$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : (-1 !== $obj$$83$$ && $obj$$83$$ ? ($obj$$83$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading"), 
              this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$83$$)) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty(), $e_call$$4$$ && $e_call$$4$$.call(this));
            }, this));
            break;
          case !!$data$$151$$ && !$ajax$$1$$ || !!$data$$151$$ && !!$ajax$$1$$ && (!$obj$$83$$ || -1 === $obj$$83$$):
            $obj$$83$$ && -1 != $obj$$83$$ || (($d$$10_s$$21$$ = this.$_parseJson$($data$$151$$, $obj$$83$$)) ? (this.$_$container_ul$.empty().append($d$$10_s$$21$$.children()), this.$_clean_node$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty());
            $s_call$$4$$ && $s_call$$4$$.call(this);
            break;
          case !$data$$151$$ && !!$ajax$$1$$ || !!$data$$151$$ && !!$ajax$$1$$ && $obj$$83$$ && -1 !== $obj$$83$$:
            $error_func$$ = function $$error_func$$$($x$$54$$, $t$$8$$, $e$$90$$) {
              var $ef$$ = this.$_getOptions$().data.ajax.error;
              $ef$$ && $ef$$.call(this, $t$$8$$, $e$$90$$, $x$$54$$);
              -1 != $obj$$83$$ && $obj$$83$$.length ? ($obj$$83$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading"), "success" === $t$$8$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$83$$)) : "success" === $t$$8$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
              $e_call$$4$$ && $e_call$$4$$.call(this);
            }, $success_func$$ = function $$success_func$$$($d$$12$$, $$u$$1_t$$9$$, $x$$55$$) {
              var $sf$$ = this.$_getOptions$().data.ajax.success;
              $sf$$ && ($d$$12$$ = $sf$$.call(this, $d$$12$$, $$u$$1_t$$9$$, $x$$55$$) || $d$$12$$);
              if ("" === $d$$12$$ || $d$$12$$ && $d$$12$$.toString && "" === $d$$12$$.toString().replace(/^[\s\n]+$/, "") || !$$$$25$$.isArray($d$$12$$) && !$$$$25$$.isPlainObject($d$$12$$)) {
                return $error_func$$.call(this, $x$$55$$, $$u$$1_t$$9$$, "");
              }
              ($d$$12$$ = this.$_parseJson$($d$$12$$, $obj$$83$$)) ? (-1 !== $obj$$83$$ && $obj$$83$$ ? ($obj$$83$$.append($d$$12$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading")) : ($$u$$1_t$$9$$ = this.$_$container_ul$, $$u$$1_t$$9$$.empty().append($d$$12$$.children()), $$u$$1_t$$9$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u$$1_t$$9$$.attr("aria-multiselectable", !0)), 
              this.$_clean_node$($obj$$83$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : -1 !== $obj$$83$$ && $obj$$83$$ ? ($obj$$83$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$83$$), $s_call$$4$$ && $s_call$$4$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$4$$ && $s_call$$4$$.call(this));
            }, $d$$10_s$$21$$.ajax.context = this, $d$$10_s$$21$$.ajax.error = $error_func$$, $d$$10_s$$21$$.ajax.success = $success_func$$, $d$$10_s$$21$$.dataType || ($d$$10_s$$21$$.ajax.dataType = "json"), $$$$25$$.isFunction($d$$10_s$$21$$.ajax.url) && ($d$$10_s$$21$$.ajax.url = $d$$10_s$$21$$.ajax.url.call(this, $obj$$83$$)), $$$$25$$.isFunction($d$$10_s$$21$$.ajax.data) && ($d$$10_s$$21$$.ajax.data = $d$$10_s$$21$$.ajax.data.call(this, $obj$$83$$)), $$$$25$$.ajax($d$$10_s$$21$$.ajax);
        }
      }
    }, $_parseJson$:function($js$$1$$, $obj$$84_ul2$$, $isRecurse_ul1$$) {
      var $d$$13$$ = !1, $tmp$$5$$, $i$$279$$, $j$$42$$, $title$$11$$;
      if (!$js$$1$$) {
        return $d$$13$$;
      }
      this.$_data$.$ds$.$progressiveUnload$ && $obj$$84_ul2$$ && -1 !== $obj$$84_ul2$$ && $obj$$84_ul2$$.data("oj-tree-children", $d$$13$$);
      if ("string" == typeof $js$$1$$) {
        try {
          $js$$1$$ = $$$$25$$.parseJSON($js$$1$$);
        } catch ($err$$6$$) {
          $js$$1$$ = [];
        }
      }
      if ($$$$25$$.isArray($js$$1$$)) {
        $d$$13$$ = $$$$25$$("\x3cul\x3e");
        if (!$js$$1$$.length) {
          return!1;
        }
        $i$$279$$ = 0;
        for ($j$$42$$ = $js$$1$$.length;$i$$279$$ < $j$$42$$;$i$$279$$++) {
          $tmp$$5$$ = this.$_parseJson$($js$$1$$[$i$$279$$], $obj$$84_ul2$$, !0), $tmp$$5$$.length && ($d$$13$$ = $d$$13$$.append($tmp$$5$$));
        }
        $d$$13$$ = $d$$13$$.children();
      } else {
        "string" == typeof $js$$1$$ && ($js$$1$$ = {data:$js$$1$$});
        $title$$11$$ = "string" == typeof $js$$1$$.title ? $js$$1$$.title : " ";
        $d$$13$$ = $$$$25$$("\x3cli role\x3d'treeitem' /\x3e");
        $js$$1$$.attr && (this.$_data$.types.$defType$ && !$js$$1$$.attr.type && ($js$$1$$.attr.type = "oj-tree-deftype"), $d$$13$$.attr($js$$1$$.attr));
        $js$$1$$.metadata && $d$$13$$.data($js$$1$$.metadata);
        ($js$$1$$.state || $js$$1$$.children && 0 === $js$$1$$.children.length) && $d$$13$$.addClass("oj-tree-" + ("expanded" === $js$$1$$.state ? "open" : "closed"));
        $js$$1$$.data || ($js$$1$$.data = {dummy:0});
        var $ht$$2$$ = this.$_data$.$core$.$htmlTitles$, $bIns$$ = !1, $sp$$3$$;
        $tmp$$5$$ = $$$$25$$("\x3ca tabindex\x3d'-1' /\x3e");
        $$$$25$$.each($js$$1$$.data, function($i$$280$$, $m$$25$$) {
          $$$$25$$.isFunction($m$$25$$) && ($m$$25$$ = $m$$25$$.call(this, $js$$1$$));
          "string" != typeof $m$$25$$ && ("attr" == $i$$280$$ ? $tmp$$5$$.attr($m$$25$$) : "style" == $i$$280$$ && $tmp$$5$$.css($m$$25$$), "language" == $i$$280$$ && $tmp$$5$$.addClass($m$$25$$));
          $bIns$$ || ($sp$$3$$ = $$$$25$$("\x3cspan class\x3d'oj-tree-title'\x3e"), $sp$$3$$[$ht$$2$$ ? "html" : "text"]($title$$11$$), $tmp$$5$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-node-icon'\x3e\x26#160;\x3c/ins\x3e", $sp$$3$$), $bIns$$ = !0);
          !$m$$25$$.icon && $js$$1$$.icon && ($m$$25$$.icon = $js$$1$$.icon);
          $m$$25$$.icon && (-1 === $m$$25$$.icon.indexOf("/") ? $tmp$$5$$.children("ins").addClass($m$$25$$.icon) : $tmp$$5$$.children("ins").css("background", "url('" + $m$$25$$.icon + "') center center no-repeat"));
        });
        $d$$13$$.append($tmp$$5$$);
        $d$$13$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default'\x3e\x26#160;\x3c/ins\x3e");
        $js$$1$$.children && (this.$_data$.$ds$.$progressiveRender$ && "expanded" !== $js$$1$$.state ? $d$$13$$.addClass("oj-collapsed").attr("aria-expanded", "false").data("oj-tree-children", $js$$1$$.children) : (this.$_data$.$ds$.$progressiveUnload$ && $d$$13$$.data("oj-tree-children", $js$$1$$.children), $$$$25$$.isArray($js$$1$$.children) && $js$$1$$.children.length && ($tmp$$5$$ = this.$_parseJson$($js$$1$$.children, $obj$$84_ul2$$, !0), $tmp$$5$$.length && ($obj$$84_ul2$$ = $$$$25$$("\x3cul role\x3d'group' /\x3e"), 
        $obj$$84_ul2$$.append($tmp$$5$$), $d$$13$$.append($obj$$84_ul2$$)))));
      }
      $isRecurse_ul1$$ || ($isRecurse_ul1$$ = $$$$25$$("\x3cul /\x3e"), $isRecurse_ul1$$.append($d$$13$$), $d$$13$$ = $isRecurse_ul1$$);
      return $d$$13$$;
    }, $_correct_state$:function($obj$$85$$) {
      $obj$$85$$ = this.$_getNode$($obj$$85$$);
      if (!$obj$$85$$ || -1 === $obj$$85$$) {
        return!1;
      }
      $obj$$85$$.removeClass("oj-collapsed oj-expanded").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
      $obj$$85$$.find("ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").addClass("oj-tree-icon");
      this.$_emitEvent$({obj:$obj$$85$$}, "correct_state");
    }, $_loaded$:function() {
      this.$_emitEvent$(null, "loaded");
    }, $_load_node_html$:function($obj$$86$$, $s_call$$5$$, $e_call$$5$$) {
      function $success_func$$1$$() {
      }
      function $error_func$$1$$() {
      }
      var $d$$14_s$$22$$ = this.$_getOptions$().data, $data$$152$$ = $d$$14_s$$22$$ && $d$$14_s$$22$$.data || null, $ajax$$2$$ = $d$$14_s$$22$$ && $d$$14_s$$22$$.ajax || null;
      if (($obj$$86$$ = this.$_getNode$($obj$$86$$)) && -1 !== $obj$$86$$) {
        if ($obj$$86$$.data("oj-tree-is-loading")) {
          return;
        }
        $obj$$86$$.data("oj-tree-is-loading", !0);
      }
      switch(!0) {
        case !$data$$152$$ && !$ajax$$2$$ && $d$$14_s$$22$$ && "string" === typeof $d$$14_s$$22$$:
          this.$_loadHtmlString$($d$$14_s$$22$$, $obj$$86$$, $s_call$$5$$, $e_call$$5$$);
          break;
        case $$$$25$$.isFunction($data$$152$$):
          $data$$152$$.call(this, $obj$$86$$, $$$$25$$.proxy(function($d$$15$$) {
            this.$_loadHtmlString$($d$$15$$, $obj$$86$$, $s_call$$5$$, $e_call$$5$$);
          }, this));
          break;
        case !$data$$152$$ && !$ajax$$2$$:
          $obj$$86$$ && -1 != $obj$$86$$ || (this.$_$container_ul$.empty().append(this.$_data$.html.$cloneMarkup$).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon' \x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li").children("ins:first-child").addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && this.$_addDefType$(this.$_$container_ul$), this.$_clean_node$(), 
          this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", -1));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !!$data$$152$$ && !$ajax$$2$$ || !!$data$$152$$ && !!$ajax$$2$$ && (!$obj$$86$$ || -1 === $obj$$86$$):
          $obj$$86$$ && -1 != $obj$$86$$ || ($d$$14_s$$22$$ = $$$$25$$($data$$152$$), $d$$14_s$$22$$.is("ul") || ($d$$14_s$$22$$ = $$$$25$$("\x3cul /\x3e").append($d$$14_s$$22$$)), this.$_$container_ul$.empty().append($d$$14_s$$22$$.children()).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && 
          this.$_addDefType$(this.$_$container_ul$), this.$_clean_node$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", "-1"));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !$data$$152$$ && !!$ajax$$2$$ || !!$data$$152$$ && !!$ajax$$2$$ && $obj$$86$$ && -1 !== $obj$$86$$:
          $obj$$86$$ = this.$_getNode$($obj$$86$$), $error_func$$1$$ = function $$error_func$$1$$$($x$$56$$, $t$$10$$, $e$$91$$) {
            var $ef$$1$$ = this.$_getOptions$().data.ajax.error;
            $ef$$1$$ && $ef$$1$$.call(this, $x$$56$$, $t$$10$$, $e$$91$$);
            -1 != $obj$$86$$ && $obj$$86$$.length ? ($obj$$86$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$86$$.removeData("oj-tree-is-loading"), "success" === $t$$10$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$86$$)) : "success" === $t$$10$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
            $e_call$$5$$ && $e_call$$5$$.call(this);
          }, $success_func$$1$$ = function $$success_func$$1$$$($d$$16_parent$$26$$, $t$$11$$, $x$$57$$) {
            var $sf$$1$$ = this.$_getOptions$().data.ajax.success;
            $sf$$1$$ && ($d$$16_parent$$26$$ = $sf$$1$$.call(this, $d$$16_parent$$26$$, $t$$11$$, $x$$57$$) || $d$$16_parent$$26$$);
            if ("" === $d$$16_parent$$26$$ || $d$$16_parent$$26$$ && $d$$16_parent$$26$$.toString && "" === $d$$16_parent$$26$$.toString().replace(/^[\s\n]+$/, "")) {
              return $error_func$$1$$.call(this, $x$$57$$, $t$$11$$, "");
            }
            $d$$16_parent$$26$$ ? ($d$$16_parent$$26$$ = $$$$25$$($d$$16_parent$$26$$), $d$$16_parent$$26$$.is("ul") || ($d$$16_parent$$26$$ = $$$$25$$("\x3cul /\x3e").append($d$$16_parent$$26$$)), -1 != $obj$$86$$ && $obj$$86$$ ? ($obj$$86$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), this.$_removeEmptyUL$($obj$$86$$), $obj$$86$$.append($d$$16_parent$$26$$).children("ul").find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$86$$.removeData("oj-tree-is-loading"), $obj$$86$$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$16_parent$$26$$ = $obj$$86$$) : 
            (this.$_$container_ul$.empty().append($d$$16_parent$$26$$.children()).find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$16_parent$$26$$ = this.$_$container_ul$), this.$_handleHtmlParentNoChildren$($d$$16_parent$$26$$), 
            this.$_insertHtmlTextSpan$($d$$16_parent$$26$$), this.$_data$.types.$defType$ && $d$$16_parent$$26$$ && this.$_addDefType$(this.$_$container_ul$), this.$_clean_node$($obj$$86$$), $s_call$$5$$ && $s_call$$5$$.call(this)) : ($obj$$86$$ && -1 !== $obj$$86$$ ? ($obj$$86$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$86$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$86$$), $s_call$$5$$ && $s_call$$5$$.call(this))) : 
            this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$5$$ && $s_call$$5$$.call(this)), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"));
          }, $d$$14_s$$22$$.ajax.context = this, $d$$14_s$$22$$.ajax.error = $error_func$$1$$, $d$$14_s$$22$$.ajax.success = $success_func$$1$$, $d$$14_s$$22$$.ajax.dataType || ($d$$14_s$$22$$.ajax.dataType = "html"), $$$$25$$.isFunction($d$$14_s$$22$$.ajax.url) && ($d$$14_s$$22$$.ajax.url = $d$$14_s$$22$$.ajax.url.call(this, $obj$$86$$)), $$$$25$$.isFunction($d$$14_s$$22$$.ajax.data) && ($d$$14_s$$22$$.ajax.data = $d$$14_s$$22$$.ajax.data.call(this, $obj$$86$$)), $$$$25$$.ajax($d$$14_s$$22$$.ajax);
      }
    }, $_handleHtmlParentNoChildren$:function($lazy$$1_parent$$27$$) {
      $lazy$$1_parent$$27$$ = $lazy$$1_parent$$27$$.find($lazy$$1_parent$$27$$.is("ul") ? "li ul" : "ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      $$$$25$$.each($lazy$$1_parent$$27$$, function() {
        $$$$25$$(this).closest("li").addClass("oj-collapsed");
      });
    }, $_removeEmptyUL$:function($l$$13_parent$$28$$) {
      $l$$13_parent$$28$$ = $l$$13_parent$$28$$.find("ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      0 < $l$$13_parent$$28$$.length && $l$$13_parent$$28$$.remove();
    }, $_loadHtmlString$:function($parent$$29_s$$23$$, $obj$$87$$, $s_call$$6$$) {
      $parent$$29_s$$23$$ && "" !== $parent$$29_s$$23$$ && $parent$$29_s$$23$$.toString && "" !== $parent$$29_s$$23$$.toString().replace(/^[\s\n]+$/, "") ? ($parent$$29_s$$23$$ = $$$$25$$($parent$$29_s$$23$$), $parent$$29_s$$23$$.is("ul") || ($parent$$29_s$$23$$ = $$$$25$$("\x3cul /\x3e").append($parent$$29_s$$23$$)), -1 != $obj$$87$$ && $obj$$87$$ ? ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.append($parent$$29_s$$23$$).children("ul").find("li, a").filter(function() {
        return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
      }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$87$$.removeData("oj-tree-is-loading"), $parent$$29_s$$23$$ = $obj$$87$$, this.$_addDefType$(this.$obj$)) : (this.$_$container_ul$.empty().append($parent$$29_s$$23$$.children()).find("li, a").filter(function() {
        return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
      }).prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $parent$$29_s$$23$$ = this.$_$container_ul$, this.$_addDefType$(this.$_$container_ul$)), 
      $parent$$29_s$$23$$ && this.$_insertHtmlTextSpan$($parent$$29_s$$23$$), this.$_clean_node$($obj$$87$$), $s_call$$6$$ && $s_call$$6$$.call(this)) : $obj$$87$$ && -1 !== $obj$$87$$ ? ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$87$$), $s_call$$6$$ && $s_call$$6$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$6$$ && 
      $s_call$$6$$.call(this));
    }, $_insertHtmlTextSpan$:function($elem$$44$$) {
      $$$$25$$.each($elem$$44$$.find("li a"), function($i$$281$$, $val$$48$$) {
        var $ih$$ = $val$$48$$.innerHTML, $ih$$ = $ih$$.replace("ins\x3e", "ins\x3e\x3cspan class\x3d'oj-tree-title'\x3e");
        $val$$48$$.innerHTML = $ih$$ + "\x3c/span\x3e";
      });
    }, $_addDefType$:function($obj$$88$$) {
      var $s$$24$$, $typeAttr$$;
      this.$_data$.types.$defType$ && ($typeAttr$$ = ($s$$24$$ = this.options.types) ? $s$$24$$.attr : this.$_data$.types.$defaults$.attr, $$$$25$$.each($obj$$88$$.find("li"), function($i$$282$$, $val$$49$$) {
        $val$$49$$ = $$$$25$$($val$$49$$);
        $val$$49$$.attr($typeAttr$$) || $val$$49$$.attr($typeAttr$$, "oj-tree-deftype");
      }));
    }, $_dnd_prepare$:function() {
      var $a$$82_vars$$ = this.$_data$.dnd.$vars$;
      if ($a$$82_vars$$.$r$ && $a$$82_vars$$.$r$.length) {
        this.$_data$.dnd.off = $a$$82_vars$$.$r$.offset();
        this.$_isRtl$ && (this.$_data$.dnd.off.right = this.$_data$.dnd.off.left + $a$$82_vars$$.$r$.width() - $a$$82_vars$$.$r$.find("\x3ea").width() - 14);
        this.$_data$.dnd.$targ_ml_width$ = $a$$82_vars$$.$r$.find("a").width();
        if (this.$_data$.dnd.$foreign$) {
          return $a$$82_vars$$ = this.options.dnd.drag_check.call(this, {o:$a$$82_vars$$.$o$, r:$a$$82_vars$$.$r$}), this.$_data$.dnd.after = $a$$82_vars$$.after, this.$_data$.dnd.before = $a$$82_vars$$.before, this.$_data$.dnd.inside = $a$$82_vars$$.inside, this.$_data$.dnd.$prepared$ = !0, this.$_dnd_show$();
        }
        this.$_prepare_move$($a$$82_vars$$.$o$, $a$$82_vars$$.$r$, "before");
        this.$_data$.dnd.before = this.check_move();
        this.$_prepare_move$($a$$82_vars$$.$o$, $a$$82_vars$$.$r$, "after");
        this.$_data$.dnd.after = this.check_move();
        this.$_is_loaded$($a$$82_vars$$.$r$) ? (this.$_prepare_move$($a$$82_vars$$.$o$, $a$$82_vars$$.$r$, "inside"), this.$_data$.dnd.inside = this.check_move()) : this.$_data$.dnd.inside = !1;
        this.$_data$.dnd.$prepared$ = !0;
        return this.$_dnd_show$();
      }
    }, $_dnd_show$:function() {
      var $dnd_mLeft$$ = this.$_data$.dnd, $isParent$$1_o$$15$$ = !1, $mlLeft_pos$$10$$;
      if ($dnd_mLeft$$.$prepared$) {
        var $isParent$$1_o$$15$$ = ["before", "inside", "after"], $r$$4$$ = !1, $ctl$$ = $dnd_mLeft$$.$ctl$, $vars$$1$$ = $dnd_mLeft$$.$vars$, $isParent$$1_o$$15$$ = $dnd_mLeft$$.$w$ < this.$_data$.$core$.$li_height$ / 3 ? ["before", "inside", "after"] : $dnd_mLeft$$.$w$ <= 2 * this.$_data$.$core$.$li_height$ / 3 ? $dnd_mLeft$$.$w$ < this.$_data$.$core$.$li_height$ / 2 ? ["inside", "before", "after"] : ["inside", "after", "before"] : ["after", "inside", "before"];
        $$$$25$$.each($isParent$$1_o$$15$$, $$$$25$$.proxy(function($i$$283$$, $val$$50$$) {
          if (this.$_data$.dnd[$val$$50$$]) {
            return $ctl$$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), $$$$25$$("body").removeClass("oj-tree-invalid-drop"), $r$$4$$ = $val$$50$$, !1;
          }
        }, this));
        !1 === $r$$4$$ && ($ctl$$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid"), $$$$25$$("body").addClass("oj-tree-invalid-drop"));
        $mlLeft_pos$$10$$ = this.$_isRtl$ ? this.$_data$.dnd.off.right - 18 : this.$_data$.dnd.off.left + 5;
        $isParent$$1_o$$15$$ = !this.isLeaf($vars$$1$$.$r$);
        $dnd_mLeft$$ = this.$_isRtl$ ? $mlLeft_pos$$10$$ + this.$_data$.dnd.$targ_ml_width$ + 18 : $mlLeft_pos$$10$$;
        $mlLeft_pos$$10$$ = this.$_isRtl$ ? $dnd_mLeft$$ - this.$_data$.dnd.$ml_width$ : $mlLeft_pos$$10$$ + 8;
        switch($r$$4$$) {
          case "before":
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + "px", top:this.$_data$.dnd.off.top - this.$_data$.$core$.$li_height$ / 2 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$mlLeft_pos$$10$$ + "px", top:this.$_data$.dnd.off.top - 3 + "px"}).show();
            break;
          case "after":
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ - 3 - 6 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$mlLeft_pos$$10$$ + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ - 3 + 2 + "px"}).show();
            break;
          case "inside":
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + (this.$_isRtl$ ? $isParent$$1_o$$15$$ ? -4 : 0 : 4) + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ / 2 - 10 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide();
            break;
          default:
            $vars$$1$$.$m$.hide(), $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide();
        }
        return $vars$$1$$.$last_pos$ = $r$$4$$;
      }
    }, $_dnd_enter$:function($obj$$89_openTimeout_s$$25$$) {
      var $dnd$$1$$ = this.$_data$.dnd, $vars$$2$$ = $dnd$$1$$.$vars$;
      $dnd$$1$$.$mto$ && (clearTimeout($dnd$$1$$.$mto$), $dnd$$1$$.$mto$ = !1);
      $dnd$$1$$.$prepared$ = !1;
      $vars$$2$$.$r$ = this.$_getNode$($obj$$89_openTimeout_s$$25$$);
      $obj$$89_openTimeout_s$$25$$ = this.options.dnd;
      var $checkTimeout$$ = $obj$$89_openTimeout_s$$25$$.check_timeout;
      $checkTimeout$$ ? ($dnd$$1$$.$to1$ && clearTimeout($dnd$$1$$.$to1$), $dnd$$1$$.$to1$ = setTimeout($$$$25$$.proxy(this.$_dnd_prepare$, this), $checkTimeout$$)) : this.$_dnd_prepare$();
      ($obj$$89_openTimeout_s$$25$$ = $obj$$89_openTimeout_s$$25$$.open_timeout) ? ($dnd$$1$$.$to2$ && clearTimeout($dnd$$1$$.$to2$), $vars$$2$$.$r$ && $vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-collapsed") && ($dnd$$1$$.$to2$ = setTimeout($$$$25$$.proxy(this.$_dnd_open$, this), $obj$$89_openTimeout_s$$25$$))) : $vars$$2$$.$r$ && $vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-collapsed") && this.$_dnd_open$();
    }, $_dnd_leave$:function($e$$92$$) {
      var $dnd$$2$$ = this.$_data$.dnd, $vars$$3$$ = this.$_data$.dnd.$vars$;
      $dnd$$2$$.after = !1;
      $dnd$$2$$.before = !1;
      $dnd$$2$$.inside = !1;
      this.$_data$.dnd.$ctl$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid");
      $$$$25$$("body").addClass("oj-tree-invalid-drop");
      $vars$$3$$.$r$ && $vars$$3$$.$r$.removeClass("oj-valid-drop").removeClass("oj-invalid-drop");
      $vars$$3$$.$m$.hide();
      $vars$$3$$.$ml$ && $vars$$3$$.$ml$.hide();
      $vars$$3$$.$r$ && $vars$$3$$.$r$[0] === $e$$92$$.target.parentNode && ($dnd$$2$$.$to1$ && (clearTimeout($dnd$$2$$.$to1$), $dnd$$2$$.$to1$ = !1), $dnd$$2$$.$to2$ && (clearTimeout($dnd$$2$$.$to2$), $dnd$$2$$.$to2$ = !1));
    }, $_dnd_open$:function() {
      var $vars$$4$$ = this.$_data$.dnd.$vars$;
      this.$_data$.dnd.$to2$ = !1;
      this.expand($vars$$4$$.$r$, $$$$25$$.proxy(this.$_dnd_prepare$, this), !0);
    }, $_dnd_finish$:function($e$$93$$) {
      var $dnd$$3$$ = this.$_data$.dnd, $vars$$5$$ = this.$_data$.dnd.$vars$;
      $dnd$$3$$.$foreign$ ? ($dnd$$3$$.after || $dnd$$3$$.before || $dnd$$3$$.inside) && this.options.dnd.drag_finish.call(this, {o:$vars$$5$$.$o$, r:$vars$$5$$.$r$, p:$vars$$5$$.$last_pos$}) : (this.$_dnd_prepare$(), this.$_move_node$($vars$$5$$.$o$, $vars$$5$$.$r$, $vars$$5$$.$last_pos$, $e$$93$$[this.options.dnd.copy_modifier + "Key"]));
      $_removeSheet$$();
      $vars$$5$$.$o$ && $vars$$5$$.$o$.removeClass("oj-drag");
      $vars$$5$$.$o$ = !1;
      $vars$$5$$.$r$ = !1;
      $vars$$5$$.$m$.hide();
      $vars$$5$$.$ml$ && $vars$$5$$.$ml$.hide();
    }, $_start_drag$:function($obj$$90$$, $e$$94$$) {
      var $dnd$$4$$ = this.$_data$.dnd, $vars$$6$$ = this.$_data$.dnd.$vars$;
      $vars$$6$$.$o$ = this.$_getNode$($obj$$90$$);
      if (!$vars$$6$$.$o$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        this.$_data$.ui && this.isSelected($vars$$6$$.$o$) && ($vars$$6$$.$o$ = this.$_getNode$(null, !0));
        var $dt$$ = 1 < $vars$$6$$.$o$.length ? this.$getTranslatedString$("m_multisel") : this.getText($vars$$6$$.$o$), $cnt$$ = this.$_$container$;
        this.$_data$.$core$.$htmlTitles$ || ($dt$$ = $dt$$.replace(/</ig, "\x26lt;").replace(/>/ig, "\x26gt;"));
        $vars$$6$$.$o$.addClass("oj-drag");
        $_addSheet$$({$str$:"body.oj-tree-invalid-drop { cursor: not-allowed ;}", title:"oj-tree-drag"});
        this.$_drag_start$($e$$94$$, {$jstree$:!0, $obj$:$vars$$6$$.$o$}, "\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e" + $dt$$);
        this.$_data$.$themes$ && ($vars$$6$$.$m$ && $vars$$6$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $dnd$$4$$.$ctl$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
        $dnd$$4$$.$cof$ = $cnt$$.offset();
        $dnd$$4$$.$cw$ = parseInt($cnt$$.width(), 10);
        $dnd$$4$$.ch = parseInt($cnt$$.height(), 10);
        $dnd$$4$$.$active$ = !0;
      }
    }, $_drag_start$:function($e$$95$$, $data$$153$$, $html$$4$$) {
      var $ctl$$1$$ = this.$_data$.dnd.$ctl$;
      $ctl$$1$$.$is_drag$ && this.$_drag_stop$();
      try {
        $e$$95$$.currentTarget.unselectable = "on", $e$$95$$.currentTarget.onselectstart = function $$e$$95$$$currentTarget$onselectstart$() {
          return!1;
        }, $e$$95$$.currentTarget.style && ($e$$95$$.currentTarget.style.MozUserSelect = "none");
      } catch ($err$$7$$) {
      }
      $ctl$$1$$.$init_x$ = $e$$95$$.pageX;
      $ctl$$1$$.$init_y$ = $e$$95$$.pageY;
      $ctl$$1$$.$user_data$ = $data$$153$$;
      $ctl$$1$$.$is_down$ = !0;
      $ctl$$1$$.helper = $$$$25$$("\x3cdiv class\x3d'oj-tree-drag-text' /\x3e").html($html$$4$$);
      $$$$25$$(document).bind("mousemove", this.$_drag$.bind(this));
      $$$$25$$(document).bind("mouseup", this.$_drag_stop$.bind(this));
      return!1;
    }, $_drag$:function($e$$96$$) {
      var $ctl$$2$$ = this.$_data$.dnd.$ctl$, $vars$$7$$ = this.$_data$.dnd.$vars$;
      if ($ctl$$2$$.$is_down$) {
        if (!$ctl$$2$$.$is_drag$) {
          if (5 < Math.abs($e$$96$$.pageX - $ctl$$2$$.$init_x$) || 5 < Math.abs($e$$96$$.pageY - $ctl$$2$$.$init_y$)) {
            $ctl$$2$$.helper.appendTo("body"), $ctl$$2$$.$is_drag$ = !0, $$$$25$$(document).triggerHandler("drag_start.ojtreeu", [{event:$e$$96$$, data:$ctl$$2$$.$user_data$}]);
          } else {
            return;
          }
        }
        if ("mousemove" === $e$$96$$.type) {
          var $d$$17_l$$14$$ = $$$$25$$(document), $t$$12$$ = $d$$17_l$$14$$.scrollTop(), $d$$17_l$$14$$ = $d$$17_l$$14$$.scrollLeft();
          20 > $e$$96$$.pageY - $t$$12$$ ? ($vars$$7$$.$sti$ && "down" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0), $vars$$7$$.$sti$ || ($vars$$7$$.$dir1$ = "up", $vars$$7$$.$sti$ = setInterval(function() {
            $$$$25$$(document).scrollTop($$$$25$$(document).scrollTop() - $ctl$$2$$.$scroll_spd$);
          }, 150))) : $vars$$7$$.$sti$ && "up" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0);
          20 > $$$$25$$(window).height() - ($e$$96$$.pageY - $t$$12$$) ? ($vars$$7$$.$sti$ && "up" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0), $vars$$7$$.$sti$ || ($vars$$7$$.$dir1$ = "down", $vars$$7$$.$sti$ = setInterval(function() {
            $$$$25$$(document).scrollTop(Number($$$$25$$(document).scrollTop()) + $ctl$$2$$.$scroll_spd$);
          }, 150))) : $vars$$7$$.$sti$ && "down" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0);
          20 > $e$$96$$.pageX - $d$$17_l$$14$$ ? ($vars$$7$$.$sli$ && "right" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0), $vars$$7$$.$sli$ || ($vars$$7$$.$dir2$ = "left", $vars$$7$$.$sli$ = setInterval(function() {
            $$$$25$$(document).scrollLeft($$$$25$$(document).scrollLeft() - $ctl$$2$$.$scroll_spd$);
          }, 150))) : $vars$$7$$.$sli$ && "left" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0);
          20 > $$$$25$$(window).width() - ($e$$96$$.pageX - $d$$17_l$$14$$) ? ($vars$$7$$.$sli$ && "left" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0), $vars$$7$$.$sli$ || ($vars$$7$$.$dir2$ = "right", $vars$$7$$.$sli$ = setInterval(function() {
            $$$$25$$(document).scrollLeft(Number($$$$25$$(document).scrollLeft()) + $ctl$$2$$.$scroll_spd$);
          }, 150))) : $vars$$7$$.$sli$ && "right" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0);
        }
        $ctl$$2$$.helper.css({left:$e$$96$$.pageX + $ctl$$2$$.$helper_left$ + "px", top:$e$$96$$.pageY + $ctl$$2$$.$helper_top$ + "px"});
        $$$$25$$(document).triggerHandler("drag.ojtreeu", [{event:$e$$96$$, data:$ctl$$2$$.$user_data$}]);
      }
    }, $_drag_stop$:function($e$$97$$) {
      var $vars$$8$$ = this.$_data$.dnd.$vars$, $ctl$$3$$ = this.$_data$.dnd.$ctl$;
      $vars$$8$$.$sli$ && clearInterval($vars$$8$$.$sli$);
      $vars$$8$$.$sti$ && clearInterval($vars$$8$$.$sti$);
      $vars$$8$$.$o$ && $vars$$8$$.$o$.removeClass("oj-drag");
      $_removeSheet$$();
      $$$$25$$(document).unbind("mousemove", this.$_drag$.bind(this));
      $$$$25$$(document).unbind("mouseup", this.$_drag_stop$.bind(this));
      $$$$25$$(document).triggerHandler("drag_stop.ojtreeu", [{event:$e$$97$$ ? $e$$97$$ : {}, data:$ctl$$3$$.$user_data$}]);
      $ctl$$3$$.helper.remove();
      $ctl$$3$$.$init_x$ = 0;
      $ctl$$3$$.$init_y$ = 0;
      $ctl$$3$$.$user_data$ = {};
      $ctl$$3$$.$is_down$ = !1;
      $ctl$$3$$.$is_drag$ = !1;
      $$$$25$$("body").removeClass("oj-tree-invalid-drop");
    }, $_save_opened$:function() {
      var $_this$$18$$ = this;
      this.$_data$.$core$.$toExpand$ = [];
      this.$_$container_ul$.find("li.oj-expanded").each(function() {
        this.id && $_this$$18$$.$_data$.$core$.$toExpand$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
      this.$_emitEvent$($_this$$18$$.$_data$.$core$.$toExpand$, "save_opened");
    }, $_reload_nodes$:function($bExpandAll_is_callback$$) {
      var $_this$$19$$ = this, $done$$1$$ = !0, $current$$7$$ = [], $remaining$$ = [];
      $bExpandAll_is_callback$$ || (this.$_data$.$core$.$reopen$ = !1, this.$_data$.$core$.$refreshing$ = !0, ($bExpandAll_is_callback$$ = "all" === this.$_data$.$core$.$toExpand$) ? this.$_data$.$core$.$toExpand$ = [] : "array" === $$$$25$$.type(this.$_data$.$core$.$toExpand$) && 0 < this.$_data$.$core$.$toExpand$.length && "all" === this.$_data$.$core$.$toExpand$[0] && (this.$_data$.$core$.$toExpand$.length = 0, $bExpandAll_is_callback$$ = !0), $bExpandAll_is_callback$$ && this.$_$container_ul$.find("li.oj-collapsed").each(function() {
        $$$$25$$(this).attr("id");
        $_this$$19$$.$_data$.$core$.$toExpand$.push("#" + $$$$25$$(this).attr("id"));
      }), this.$_data$.$core$.$toExpand$ = $$$$25$$.map($$$$25$$.makeArray(this.$_data$.$core$.$toExpand$), function($n$$33$$) {
        return "#" + $n$$33$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      }), this.$_data$.$core$.$toLoad$ = $$$$25$$.map($$$$25$$.makeArray(this.$_data$.$core$.$toLoad$), function($n$$34$$) {
        return "#" + $n$$34$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      }), this.$_data$.$core$.$toExpand$.length && (this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.concat(this.$_data$.$core$.$toExpand$)));
      this.$_data$.$core$.$toLoad$.length && ($$$$25$$.each(this.$_data$.$core$.$toLoad$, function($i$$284$$, $val$$51$$) {
        if ("#" == $val$$51$$) {
          return!0;
        }
        $$$$25$$($val$$51$$).length ? $current$$7$$.push($val$$51$$) : $remaining$$.push($val$$51$$);
      }), $current$$7$$.length && (this.$_data$.$core$.$toLoad$ = $remaining$$, $$$$25$$.each($current$$7$$, function($i$$285$$, $val$$52$$) {
        $_this$$19$$.$_is_loaded$($val$$52$$) || ($_this$$19$$.$_load_node$($val$$52$$, function() {
          $_this$$19$$.$_reload_nodes$(!0);
        }, function() {
          $_this$$19$$.$_reload_nodes$(!0);
        }), $done$$1$$ = !1);
      })));
      this.$_data$.$core$.$toExpand$.length && $$$$25$$.each(this.$_data$.$core$.$toExpand$, function($i$$286$$, $val$$53$$) {
        $_this$$19$$.expand($val$$53$$, !1, !0);
      });
      $done$$1$$ && (this.$_data$.$core$.$reopen$ && clearTimeout(this.$_data$.$core$.$reopen$), this.$_data$.$core$.$reopen$ = setTimeout(function() {
        $_this$$19$$.$_emitEvent$({}, "reload_nodes");
      }, 50), this.$_data$.$core$.$refreshing$ = !1, this.$_reopen$());
    }, set_theme:function($theme_name$$, $theme_url$$) {
      if (!$theme_name$$) {
        return!1;
      }
      $theme_url$$ || ($theme_url$$ = this.$_data$.$themes$.$_themes$ + $theme_name$$ + "/style.css");
      -1 == $$$$25$$.inArray($theme_url$$, this.$_data$.$themes$.$themes_loaded$) && ($_addSheet$$({url:$theme_url$$}), this.$_data$.$themes$.$themes_loaded$.push($theme_url$$));
      this.$_data$.$themes$.$theme$ != $theme_name$$ && (this.$_$container$.removeClass("oj-tree-" + this.$_data$.$themes$.$theme$), this.$_data$.$themes$.$theme$ = $theme_name$$);
      this.$_$container$.addClass("oj-tree-" + $theme_name$$);
      this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
      this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
      this.$_emitEvent$(null, "set_theme");
    }, isIcons:function() {
      return this.$_data$.$themes$.icons;
    }, $_showIcons$:function() {
      this.$_data$.$themes$.icons = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-icons");
    }, $_hideIcons$:function() {
      this.$_data$.$themes$.icons = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-icons");
    }, toggleIcons:function() {
    }, $_enableKeys$:function() {
      this.$_data$.keys.$enabled$ = !0;
    }, $_initTree$:function() {
      this.$_initData$();
      this.$_initCoreOpts$();
      this.$_initDSOpts$(!0);
      this.$_initTypeOpts$();
      this.$_initDnDOpts$();
      this.$_initCore$();
      this.$_initUI$();
      this.$_initThemes$();
      this.$_initDataSource$();
      this.$_initTypes$();
      this.$_initDnD$();
      this.$_initMenu$();
      this.$_start$();
    }, $_emitEvent$:function($data$$154$$, $eventname$$) {
      if ($eventname$$ && "string" === $$$$25$$.type($eventname$$)) {
        var $args$$14_rslt$$8$$, $func$$12_inst$$;
        $args$$14_rslt$$8$$ = Array.prototype.slice.call(arguments);
        var $evname_s$$inline_770$$ = $eventname$$;
        $func$$12_inst$$ = this.$_$container$;
        var $isBefore$$ = "before" === $eventname$$, $b$$inline_773_isPublic$$ = !1, $item$$14$$;
        if (!0 !== this.$_data$.$core$.locked || "unlock" === $eventname$$ || "isLocked" === $eventname$$ || "lock" === $eventname$$) {
          $evname_s$$inline_770$$ = $eventname$$;
          "rename_node" === $evname_s$$inline_770$$ ? $evname_s$$inline_770$$ = "rename" : "set_focus" === $evname_s$$inline_770$$ ? $evname_s$$inline_770$$ = "focus" : "unset_focus" === $evname_s$$inline_770$$ ? $evname_s$$inline_770$$ = "unfocus" : "delete_node" === $evname_s$$inline_770$$ ? $evname_s$$inline_770$$ = "remove" : "move_node" === $evname_s$$inline_770$$ ? $evname_s$$inline_770$$ = "move" : "create_node" === $evname_s$$inline_770$$ && ($evname_s$$inline_770$$ = "create");
          ($b$$inline_773_isPublic$$ = 0 <= $$$$25$$.inArray($evname_s$$inline_770$$, $_aEvNames$$)) || "create_node" != $evname_s$$inline_770$$ || ($b$$inline_773_isPublic$$ = !0);
          $b$$inline_773_isPublic$$ || ($evname_s$$inline_770$$ = "tree" + $evname_s$$inline_770$$);
          $item$$14$$ = $data$$154$$ ? $data$$154$$.obj : void 0;
          if ("loaded" === $evname_s$$inline_770$$ || "optionChange" == $evname_s$$inline_770$$) {
            $item$$14$$ = -1;
          }
          var $eventdata$$ = {};
          $eventdata$$.item = $item$$14$$;
          $eventdata$$.inst = $func$$12_inst$$;
          $isBefore$$ ? ($func$$12_inst$$ = $data$$154$$.func, $eventdata$$.func = $func$$12_inst$$, $eventdata$$.args = $args$$14_rslt$$8$$, "rename" === $func$$12_inst$$ && ($eventdata$$.title = $data$$154$$.title, $eventdata$$.prevTitle = $data$$154$$.prevTitle)) : $b$$inline_773_isPublic$$ && ("move" == $evname_s$$inline_770$$ ? ($eventdata$$.position = $data$$154$$.$p$, $eventdata$$.reference = $data$$154$$.$r$, $eventdata$$.data = $data$$154$$) : "rename" == $evname_s$$inline_770$$ ? ($eventdata$$.title = 
          $data$$154$$.title, $eventdata$$.prevTitle = $data$$154$$.prevTitle) : "remove" == $evname_s$$inline_770$$ ? ($eventdata$$.parent = $data$$154$$.parent, $eventdata$$.prev = $data$$154$$.prev) : "delete" == $evname_s$$inline_770$$ ? ($eventdata$$.prev = $data$$154$$.prev, $eventdata$$.parent = $data$$154$$.parent) : "expandAll" === $evname_s$$inline_770$$ || "collapseAll" === $evname_s$$inline_770$$ || "deselectAll" === $evname_s$$inline_770$$ ? $eventdata$$.targ = $data$$154$$.targ : "optionChange" == 
          $evname_s$$inline_770$$ && ($eventdata$$.option = $data$$154$$.option, $eventdata$$.previousValue = $data$$154$$.previousValue, $eventdata$$.value = $data$$154$$.value, $eventdata$$.optionMetadata = $data$$154$$.optionMetadata));
          if ($b$$inline_773_isPublic$$) {
            if ($args$$14_rslt$$8$$ = this._trigger($evname_s$$inline_770$$, new $$$$25$$.Event("oj" + $evname_s$$inline_770$$), $eventdata$$), $isBefore$$) {
              return "undefined" != typeof $args$$14_rslt$$8$$ && ($args$$14_rslt$$8$$ = $args$$14_rslt$$8$$ ? !0 : !1), $args$$14_rslt$$8$$;
            }
          } else {
            this.$_$container$.trigger($evname_s$$inline_770$$, $eventdata$$);
          }
        }
      }
    }, $_fireOptionChange$:function($key$$98$$, $prevVal$$, $newVal$$, $origEvent$$) {
      this.$_emitEvent$({option:$key$$98$$, previousValue:$prevVal$$, value:$newVal$$, optionMetadata:{writeback:$origEvent$$ ? "shouldWrite" : "shouldNotWrite"}}, "optionChange");
    }, $__rollback$:function() {
      return this.get_rollback();
    }, $__call_old$:function() {
    }, $_start$:function() {
      this.$_isRtl$ && this.$_$container$.addClass("oj-tree-rtl").css("direction", "rtl");
      this.$_$container$.html("\x3cul role\x3d'tree' tabindex\x3d'0' class\x3d'oj-tree-list' style\x3d'outline:none'" + (-1 === this.$_data$.$core$.$selectMode$ ? " aria-multiselectable\x3d'true'" : "") + "\x3e\x3cli class\x3d'oj-tree-last oj-tree-leaf'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e\x3ca class\x3d'oj-tree-loading' href\x3d'#'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e" + this.$getTranslatedString$("m_loading") + "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e");
      this.$_$container_ul$ = this.$_$container$.children("ul:eq(0)");
      this.$_$container$.data("oj-tree-instance-id", this.$_index$);
      this.$_data$.$core$.$li_height$ = this.$_$container_ul$.find("li.oj-collapsed, li.oj-tree-leaf").eq(0).height() || 18;
      this.$_$container$.delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "click.ojtree", $$$$25$$.proxy(function($event$$317_trgt$$) {
        $event$$317_trgt$$ = $$$$25$$($event$$317_trgt$$.target);
        this.toggleExpand($event$$317_trgt$$);
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mousedown", $$$$25$$.proxy(function($event$$318$$) {
        $$$$25$$($event$$318$$.target).removeClass("oj-default").removeClass("oj-hover").addClass("oj-selected");
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mouseup", $$$$25$$.proxy(function($event$$319$$) {
        $$$$25$$($event$$319$$.target).removeClass("oj-selected").addClass("oj-default");
      }, this)).bind("mousedown.ojtree", $$$$25$$.proxy(function() {
      }, this)).bind("dblclick.ojtree", function() {
        var $sel$$2$$;
        if (document.selection && document.selection.empty) {
          document.selection.empty();
        } else {
          if (window.getSelection) {
            $sel$$2$$ = window.getSelection();
            try {
              $sel$$2$$.removeAllRanges(), $sel$$2$$.collapse(document.getElementsByTagName("body")[0], 0);
            } catch ($err$$8$$) {
            }
          }
        }
      });
      this.$_$container_ul$.focus($$$$25$$.proxy(function() {
        this.$_data$.ui.$focused$ = !0;
        if (this.$_data$.$core$.$initFocus$) {
          this.$_data$.ui.$lastHovered$ && (this.$_data$.ui.$hovered$ = this.$_data$.ui.$lastHovered$, this.hover(this.$_data$.ui.$hovered$), this.$_data$.ui.$lastHovered$ = null), this.$_$container_ul$.find("a.oj-selected").removeClass("oj-tree-inactive");
        } else {
          this.$_data$.$core$.$initFocus$ = !0;
          var $first$$7$$ = this.$_$container_ul$.find("li:first");
          this.hover($first$$7$$);
        }
      }, this)).blur($$$$25$$.proxy(function() {
        this.$_data$.ui.$focused$ = !1;
        this.$_data$.ui.$lastHovered$ = this.$_data$.ui.$hovered$;
        this.$_data$.ui.$lastHovered$ && this.dehover(this.$_data$.ui.$hovered$);
        this.$_$container_ul$.find("a.oj-selected").addClass("oj-tree-inactive");
      }, this));
      this.$_data$.$core$.$load_open$ && this.$_$container$.bind("treeload_node", $$$$25$$.proxy(function($e$$100$$, $ui$$21$$) {
        var $o$$16$$ = this.$_getNode$($ui$$21$$.item);
        -1 === $o$$16$$ && ($o$$16$$ = this.$_$container_ul$);
        $o$$16$$.length && $o$$16$$.find("li.oj-expanded:not(:has(ul))").each(function() {
          this.$_load_node$(this, $$$$25$$.noop, $$$$25$$.noop);
        });
      }, this));
      this.$_emitEvent$({}, "init");
      this.$_loadNodes$();
      this.$_data$.menu.$usermenu$ && this.$_applyMenu$();
      $_addKeyFilter$$({$_handler$:this.$_keyHandler$, $_selector$:this.$_$container_ul$, $_this$:this});
      this.$_enableKeys$();
      this.$_$container_ul$.focus();
    }, $_initCore$:function() {
      this.$_data$.$core$.locked = !1;
      this.$_$container$.addClass("oj-tree oj-tree-" + this.$_index$);
      this.$_$container$.css("outline", "none");
      this.$_$container$.css("MozUserSelect", "none");
      this.$_$container$.css("WebkitTouchCallout", "none");
      this.$_$container$.css("WebkitUserSelect", "none");
      this.$_$container$.css("WebkitTapHighlightColor", "rgba(0,0,0,0)");
    }, $_initUI$:function() {
      this.$_data$.ui.selected = $$$$25$$();
      this.$_data$.ui.$last_selected$ = !1;
      this.$_data$.ui.$hovered$ = null;
      var $a$$83$$ = this.options.selection;
      $a$$83$$ && "array" === $$$$25$$.type($a$$83$$) && 0 < $a$$83$$.length && (this.$_data$.ui.$to_select$ = $a$$83$$, this.options.selection = []);
      this.$_$container$.delegate(".oj-tree-list a", "click.ojtree", $$$$25$$.proxy(function($event$$321$$) {
        $event$$321$$.preventDefault();
        $event$$321$$.currentTarget.blur();
        $$$$25$$($event$$321$$.currentTarget).hasClass("oj-tree-loading") || (this.$_select$($event$$321$$.currentTarget, !0, $event$$321$$), this.$_$container_ul$.focus());
      }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$25$$.proxy(function($event$$322$$) {
        $$$$25$$($event$$322$$.currentTarget).hasClass("oj-tree-loading") || this.hover($event$$322$$.target);
      }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$25$$.proxy(function($event$$323$$) {
        $$$$25$$($event$$323$$.currentTarget).hasClass("oj-tree-loading") || this.dehover($event$$323$$.target);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseenter.ojtree", $$$$25$$.proxy(function($event$$324$$) {
        $$$$25$$($event$$324$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$324$$.target, !0);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseleave.ojtree", $$$$25$$.proxy(function($event$$325$$) {
        $$$$25$$($event$$325$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$325$$.target, !1);
      }, this)).bind("treereopen", $$$$25$$.proxy(function() {
        this.reselect();
      }, this)).bind("treeget_rollback", $$$$25$$.proxy(function() {
        this.dehover();
        this.saveSelected();
      }, this)).bind("treeset_rollback", $$$$25$$.proxy(function() {
        this.reselect();
      }, this)).bind("ojcollapse", $$$$25$$.proxy(function($event$$326$$, $ui$$22$$) {
        var $obj$$91$$ = this.$_getNode$($ui$$22$$.item), $clk$$ = $obj$$91$$ && $obj$$91$$.length ? $obj$$91$$.children("ul").find("a.oj-selected") : $$$$25$$();
        !1 !== this.options.selectedParentCollapse && $clk$$.length && $clk$$.each(function() {
          this.deselect(this);
          "selectParent" === this.options.selectedParentCollapse && this.select($obj$$91$$);
        });
      }, this)).bind("ojremove", $$$$25$$.proxy(function($event$$327$$, $ui$$23$$) {
        var $s$$26$$ = this.options.selectPrevOnDelete, $clk$$1_obj$$92$$ = this.$_getNode$($ui$$23$$.item), $clk$$1_obj$$92$$ = $clk$$1_obj$$92$$ && $clk$$1_obj$$92$$.length ? $clk$$1_obj$$92$$.find("a.oj-selected") : [], $_this$$21$$ = this;
        $clk$$1_obj$$92$$.each(function() {
          $_this$$21$$.deselect(this);
        });
        $s$$26$$ && $clk$$1_obj$$92$$.length && $ui$$23$$.prev.each(function() {
          if (this.parentNode) {
            return $_this$$21$$.select(this), !1;
          }
        });
      }, this)).bind("ojmove", $$$$25$$.proxy(function($event$$328$$, $ui$$24$$) {
        var $data$$155$$ = $ui$$24$$.data;
        $data$$155$$.cy && ($data$$155$$.oc.find("a.oj-selected").removeClass("oj-selected"), $data$$155$$.oc.removeAttr("aria-selected"));
      }, this));
    }, $_initDataSource$:function() {
      this.$_initTreeData$();
      this.$_initJsonData$();
      this.$_initHtmlData$();
    }, $_initTreeData$:function() {
      1 === this.$_data$.$ds$.type && (this.$_tds$ = this.options.data || null, this.$_load_node$ = this.$_load_node_DS$, this.$_is_loaded$ = this.$_is_loaded_DS$, this.$_refresh$ = this.$_refresh_DS$);
    }, $_initJsonData$:function() {
      3 === this.$_data$.$ds$.type && (this.$_data$.$ds$.$progressiveUnload$ && this.$_$container$.bind("treeafter_close", function($e$$101$$, $ui$$25$$) {
        $ui$$25$$.item.children("ul").remove();
      }), this.$_load_node$ = this.$_load_node_J$, this.$_is_loaded$ = this.$_is_loaded_J$, this.$_refresh$ = this.$_refresh_json$);
    }, $_initHtmlData$:function() {
      4 === this.$_data$.$ds$.type && (this.$_processExistingMarkup$(), this.$_load_node$ = this.$_load_node_H$, this.$_is_loaded$ = this.$_is_loaded_H$, this.$_refresh$ = this.$_refresh_ui$);
    }, $_processExistingMarkup$:function() {
      this.$_data$.html.$useExistingMarkup$ && (this.$_data$.html.$markup_ul$ || (this.$_data$.html.$markup_ul$ = this.$_$container$.find(" \x3e ul"), this.$_data$.html.$markup_div$ = $$$$25$$("\x3cdiv id\x3d'oj-tree-existing-markup-" + this.$_index$ + "' style\x3d'display:none'\x3e").append(this.$_data$.html.$markup_ul$), this.$_$container$.after(this.$_data$.html.$markup_div$)), this.$_data$.html.$markup$ = this.$_data$.html.$markup_ul$.find(" \x3e li"), this.$_data$.html.$cloneMarkup$ = this.$_data$.html.$markup$.clone(!0), 
      this.$_data$.html.$cloneMarkup$.find("li").addBack().contents().filter(function() {
        return 3 == this.nodeType;
      }).remove());
    }, $_initThemes$:function() {
      !1 === this.$_data$.$themes$.$_themes$ && $$$$25$$("script").each(function() {
        if (this.src.toString().match(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/)) {
          return this.$_data$.$themes$.$_themes$ = this.src.toString().replace(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/, "") + "themes/", !1;
        }
      });
      !1 === this.$_data$.$themes$.$_themes$ && (this.$_data$.$themes$.$_themes$ = "themes/");
      this.$_$container$.bind("treeinit", $$$$25$$.proxy(function() {
        var $s$$27$$ = this.options;
        this.$_data$.$themes$.$dots$ = $s$$27$$.dots;
        this.$_data$.$themes$.icons = $s$$27$$.icons;
        this.set_theme(this.$_data$.$themes$.$theme$, this.$_data$.$themes$.url);
      }, this)).bind("ojloaded", $$$$25$$.proxy(function() {
        this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
        this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
      }, this));
    }, $_initTypes$:function() {
      var $s$$28$$ = this.options.types;
      $s$$28$$ && this.$_$container$.bind("treeinit", $$$$25$$.proxy(function() {
        var $types$$ = $$$$25$$.extend(!0, {}, $s$$28$$.types), $attr$$19$$ = $s$$28$$.attr || this.$_data$.types.$defaults$.attr, $icons_css$$ = "", $_this$$22$$ = this;
        $$$$25$$.each($types$$, function($i$$287$$, $tp$$) {
          $$$$25$$.each($tp$$, function($k$$9$$) {
            /^(maxDepth|maxChildren|icon|validChildren)$/.test($k$$9$$) || $_this$$22$$.$_data$.types.$attachTo$.push($k$$9$$);
          });
          var $ot$$ = typeof $tp$$.icon;
          if ("undefined" === $ot$$) {
            $ot$$ = typeof $tp$$.image;
            if ("boolean" === $ot$$ && !$tp$$.image) {
              $tp$$.image = "ojt$none";
            } else {
              if (!$tp$$.image && !$tp$$.position) {
                return!0;
              }
            }
            $tp$$.icon = {};
            $tp$$.image && ($tp$$.icon.image = $tp$$.image, delete $tp$$.image);
            void 0 !== $tp$$.position && ($tp$$.icon.position = $tp$$.position, delete $tp$$.position);
          }
          if ($tp$$.icon.image || $tp$$.icon.position) {
            "default" == $i$$287$$ ? ($_this$$22$$.$_data$.types.$defType$ = !0, $icons_css$$ += ".oj-tree-" + $_this$$22$$.$_index$ + " .oj-tree-list a \x3e .oj-tree-node-icon { ", $icons_css$$ += $_this$$22$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ", $icons_css$$ += ".oj-tree-" + $_this$$22$$.$_index$ + " .oj-tree-list li[" + $attr$$19$$ + '\x3d"oj-tree-deftype"] \x3e a .oj-tree-node-icon { ') : $tp$$.icon.image && ($icons_css$$ += ".oj-tree-" + $_this$$22$$.$_index$ + " .oj-tree-list li[" + 
            $attr$$19$$ + '\x3d"' + $i$$287$$ + '"] \x3e a \x3e ins.oj-tree-node-icon { '), $icons_css$$ += $_this$$22$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ";
          }
        });
        "" !== $icons_css$$ && $_addSheet$$({$str$:$icons_css$$, title:"oj-tree-types"});
      }, this)).bind("ojbefore", $$$$25$$.proxy(function($e$$102$$, $data$$156$$) {
        var $d$$18_o$$17_s$$29$$, $ty$$1$$, $func$$13$$ = $data$$156$$.func, $item$$15$$ = $data$$156$$.item;
        if (($d$$18_o$$17_s$$29$$ = ($d$$18_o$$17_s$$29$$ = this.$_data$.types.$defaults$.useData ? this.$_getNode$($item$$15$$) : !1) && -1 !== $d$$18_o$$17_s$$29$$ && $d$$18_o$$17_s$$29$$.length ? $d$$18_o$$17_s$$29$$.data("oj-tree") : !1) && $d$$18_o$$17_s$$29$$.types && !1 === $d$$18_o$$17_s$$29$$[$func$$13$$] || -1 !== $$$$25$$.inArray($func$$13$$, this.$_data$.types.$attachTo$) && $data$$156$$.item && ($data$$156$$.item.tagName || $data$$156$$.item.jquery) && ($d$$18_o$$17_s$$29$$ = this.options.types.types, 
        $ty$$1$$ = this.$_getType$($item$$15$$), ($d$$18_o$$17_s$$29$$[$ty$$1$$] && "undefined" !== typeof $d$$18_o$$17_s$$29$$[$ty$$1$$][$func$$13$$] || $d$$18_o$$17_s$$29$$["default"] && "undefined" !== typeof $d$$18_o$$17_s$$29$$["default"][$func$$13$$]) && !1 === this.$_check$($func$$13$$, $item$$15$$))) {
          return $e$$102$$.stopImmediatePropagation(), !1;
        }
      }, this));
    }, $_addTypeCss$:function($tp$$1$$) {
      var $css$$2$$ = "", $css$$2$$ = "ojt$none" !== $tp$$1$$.icon.image ? $css$$2$$ + (" background-image:url(" + $tp$$1$$.icon.image + "); ") : $css$$2$$ + " background-image:none; ";
      return $css$$2$$ = $tp$$1$$.icon.position ? $css$$2$$ + (" background-position:" + $tp$$1$$.icon.position + "; ") : $css$$2$$ + " background-position:0 0; ";
    }, $_initDnD$:function() {
      if (this.$_data$.dnd.$reorder$) {
        var $s$$30_vars$$9$$ = this.$_data$.dnd.$vars$;
        $s$$30_vars$$9$$.$m$ = $$$$25$$("\x3cdiv class\x3d'oj-tree-marker'\x3e\x3cspan class\x3d'oj-tree-ptr oj-component-icon'\x3e\x26#160;\x3c/span\x3e\x3c/div\x3e").hide().bind("mouseleave mouseenter", $$$$25$$.proxy(function($e$$103$$) {
          var $vars$$10$$ = this.$_data$.dnd.$vars$;
          $vars$$10$$.$m$.hide();
          $vars$$10$$.$ml$.hide();
          $e$$103$$.preventDefault();
          $e$$103$$.stopImmediatePropagation();
          return!1;
        }, this)).appendTo("body");
        $s$$30_vars$$9$$.$ml$ = $$$$25$$("\x3cdiv /\x3e").addClass("oj-tree-marker-line").hide().bind("mouseup", function($e$$104$$) {
          var $vars$$11$$ = this.$_data$.dnd.$vars$;
          if ($vars$$11$$.$r$ && $vars$$11$$.$r$.length) {
            return $vars$$11$$.$r$.children("a").trigger($e$$104$$), $e$$104$$.preventDefault(), $e$$104$$.stopImmediatePropagation(), !1;
          }
        }).bind("mouseleave", $$$$25$$.proxy(function($e$$105$$) {
          var $vars$$12$$ = this.$_data$.dnd.$vars$, $rt$$ = $$$$25$$($e$$105$$.relatedTarget);
          if (($rt$$.is(".oj-tree") || 0 === $rt$$.closest(".oj-tree").length) && $vars$$12$$.$r$ && $vars$$12$$.$r$.length) {
            return $vars$$12$$.$r$.children("a").trigger($e$$105$$), $vars$$12$$.$m$.hide(), $vars$$12$$.$ml$.hide(), $e$$105$$.preventDefault(), $e$$105$$.stopImmediatePropagation(), !1;
          }
        }, this)).appendTo("body");
        this.$_data$.dnd.$ml_width$ = $s$$30_vars$$9$$.$ml$.width();
        $$$$25$$(document).bind("drag_start.ojtreeu", $$$$25$$.proxy(function($e$$106$$, $data$$157$$) {
          var $vars$$13$$ = this.$_data$.dnd.$vars$;
          $data$$157$$.data.$jstree$ && ($vars$$13$$.$m$.show(), $vars$$13$$.$ml$ && $vars$$13$$.$ml$.show());
        }, this));
        $$$$25$$(document).bind("drag_stop.ojtreeu", $$$$25$$.proxy(function($e$$107$$, $data$$158$$) {
          var $vars$$14$$ = this.$_data$.dnd.$vars$;
          $data$$158$$.data.$jstree$ && ($vars$$14$$.$m$.hide(), $vars$$14$$.$ml$ && $vars$$14$$.$ml$.hide());
        }, this));
        this.$_$container$.bind("mouseenter.ojtree", $$$$25$$.proxy(function($dc_e$$108_tr$$1$$) {
          var $ctl$$4$$ = this.$_data$.dnd.$ctl$, $vars$$15$$ = this.$_data$.dnd.$vars$;
          if ($ctl$$4$$.$is_drag$ && $ctl$$4$$.$user_data$.$jstree$ && (this.options.themes && ($vars$$15$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $vars$$15$$.$ml$ && $vars$$15$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $ctl$$4$$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$)), $dc_e$$108_tr$$1$$.currentTarget === $dc_e$$108_tr$$1$$.target && $ctl$$4$$.$user_data$.$obj$ && $$$$25$$($ctl$$4$$.$user_data$.$obj$).length && $$$$25$$($ctl$$4$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== 
          $dc_e$$108_tr$$1$$.target)) {
            if ($dc_e$$108_tr$$1$$ = this.$_reference$($dc_e$$108_tr$$1$$.target), $dc_e$$108_tr$$1$$.data.dnd.$foreign$) {
              if ($dc_e$$108_tr$$1$$ = $dc_e$$108_tr$$1$$.options.dnd.drag_check.call(this, {o:$vars$$15$$.$o$, r:$dc_e$$108_tr$$1$$.$_$container$, is_root:!0}), !0 === $dc_e$$108_tr$$1$$ || !0 === $dc_e$$108_tr$$1$$.inside || !0 === $dc_e$$108_tr$$1$$.before || !0 === $dc_e$$108_tr$$1$$.after) {
                $ctl$$4$$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), $$$$25$$("body").removeClass("oj-tree-invalid-drop"), $vars$$15$$.$o$ && $vars$$15$$.$o$.removeClass("oj-invalid-drop").addClass("oj-valid-drop");
              }
            } else {
              $dc_e$$108_tr$$1$$.$_prepare_move$($vars$$15$$.$o$, $dc_e$$108_tr$$1$$.$_$container$, "last"), $dc_e$$108_tr$$1$$.check_move() && ($ctl$$4$$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), $$$$25$$("body").removeClass("oj-tree-invalid-drop"), $vars$$15$$.$o$ && $vars$$15$$.$o$.removeClass("oj-invalid-drop").addClass("oj-valid-drop"));
            }
          }
        }, this)).bind("mouseup.ojtree", $$$$25$$.proxy(function($dc$$1_e$$109$$) {
          var $vars$$16$$ = this.$_data$.dnd.$vars$, $ctl$$5_tr$$2$$ = this.$_data$.dnd.$ctl$;
          $ctl$$5_tr$$2$$.$is_drag$ && $ctl$$5_tr$$2$$.$user_data$.$jstree$ && $dc$$1_e$$109$$.currentTarget === $dc$$1_e$$109$$.target && $ctl$$5_tr$$2$$.$user_data$.$obj$ && $$$$25$$($ctl$$5_tr$$2$$.$user_data$.$obj$).length && $$$$25$$($ctl$$5_tr$$2$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== $dc$$1_e$$109$$.target && ($ctl$$5_tr$$2$$ = this.$_reference$($dc$$1_e$$109$$.currentTarget), $ctl$$5_tr$$2$$.data.dnd.foreign ? ($dc$$1_e$$109$$ = $ctl$$5_tr$$2$$.$_getOptions$().dnd.drag_check.call(this, 
          {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$2$$.$_$container$, is_root:!0}), !0 !== $dc$$1_e$$109$$ && !0 !== $dc$$1_e$$109$$.inside && !0 !== $dc$$1_e$$109$$.before && !0 !== $dc$$1_e$$109$$.after || $ctl$$5_tr$$2$$.$_getOptions$().dnd.drag_finish.call(this, {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$2$$.$_$container$, is_root:!0})) : $ctl$$5_tr$$2$$.$_move_node$($vars$$16$$.$o$, $ctl$$5_tr$$2$$.$_$container$, "last", $dc$$1_e$$109$$[$ctl$$5_tr$$2$$.options.dnd.copy_modifier + "Key"]));
        }, this)).bind("mouseleave.ojtree", $$$$25$$.proxy(function($e$$110$$) {
          var $ctl$$6$$ = this.$_data$.dnd.$ctl$;
          if ($e$$110$$.relatedTarget && $$$$25$$($e$$110$$.relatedTarget).hasClass("oj-tree-marker-line")) {
            return!1;
          }
          $ctl$$6$$.$is_drag$ && $ctl$$6$$.$user_data$.$jstree$ && (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$to1$ && clearTimeout(this.$_data$.dnd.$to1$), this.$_data$.dnd.$to2$ && clearTimeout(this.$_data$.dnd.$to2$), $ctl$$6$$.helper.children("ins").hasClass("oj-tree-drop-ok") && ($ctl$$6$$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid"), $$$$25$$("body").addClass("oj-tree-invalid-drop"), 
          this.$_data$.dnd.$vars$.$o$ && this.$_data$.dnd.$vars$.$o$.removeClass("oj-valid-drop").addClass("oj-invalid-drop")));
        }, this)).bind("mousemove.ojtree", $$$$25$$.proxy(function($e$$111$$) {
          var $ctl$$7$$ = this.$_data$.dnd.$ctl$;
          if ($ctl$$7$$.$is_drag$ && $ctl$$7$$.$user_data$.$jstree$) {
            var $cnt$$1$$ = this.$_$container$[0];
            $e$$111$$.pageX + 24 > this.$_data$.dnd.$cof$.left + this.$_data$.dnd.$cw$ ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$25$$.proxy(function() {
              this.scrollLeft += $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : $e$$111$$.pageX - 24 < this.$_data$.dnd.$cof$.left ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$25$$.proxy(function() {
              this.scrollLeft -= $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$);
            $e$$111$$.pageY + 24 > this.$_data$.dnd.$cof$.top + this.$_data$.dnd.ch ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$25$$.proxy(function() {
              this.scrollTop += $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : $e$$111$$.pageY - 24 < this.$_data$.dnd.$cof$.top ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$25$$.proxy(function() {
              this.scrollTop -= $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$);
          }
        }, this)).bind("scroll.ojtree", $$$$25$$.proxy(function() {
          var $ctl$$8$$ = this.$_data$.dnd.$ctl$, $vars$$17$$ = this.$_data$.dnd.$vars$;
          $ctl$$8$$.$is_drag$ && $ctl$$8$$.$user_data$.$jstree$ && $vars$$17$$.$m$ && $vars$$17$$.$ml$ && ($vars$$17$$.$m$.hide(), $vars$$17$$.$ml$.hide());
        }, this)).delegate(".oj-tree-list a", "mousedown.ojtree", $$$$25$$.proxy(function($e$$113$$) {
          if (1 === $e$$113$$.which) {
            return this.$_start_drag$($e$$113$$.currentTarget, $e$$113$$), !1;
          }
        }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$25$$.proxy(function($e$$114$$) {
          var $ctl$$9$$ = this.$_data$.dnd.$ctl$;
          $ctl$$9$$.$is_drag$ && $ctl$$9$$.$user_data$.$jstree$ && this.$_dnd_enter$($e$$114$$.currentTarget);
        }, this)).delegate(".oj-tree-list a", "mousemove.ojtree", $$$$25$$.proxy(function($e$$115$$) {
          var $ctl$$10$$ = this.$_data$.dnd.$ctl$, $vars$$18$$ = this.$_data$.dnd.$vars$;
          $ctl$$10$$.$is_drag$ && $ctl$$10$$.$user_data$.$jstree$ && ($vars$$18$$.$r$ && $vars$$18$$.$r$.length && $vars$$18$$.$r$.children("a")[0] === $e$$115$$.currentTarget || this.$_dnd_enter$($e$$115$$.currentTarget), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$25$$($e$$115$$.target).offset()), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$25$$($e$$115$$.target).offset()), this.$_data$.dnd.$w$ = ($e$$115$$.pageY - (this.$_data$.dnd.off.top || 
          0)) % this.$_data$.$core$.$li_height$, 0 > this.$_data$.dnd.$w$ && (this.$_data$.dnd.$w$ += this.$_data$.$core$.$li_height$), this.$_dnd_show$());
        }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$25$$.proxy(function($e$$116$$) {
          var $ctl$$11$$ = this.$_data$.dnd.$ctl$, $vars$$19$$ = this.$_data$.dnd.$vars$;
          if ($ctl$$11$$.$is_drag$ && $ctl$$11$$.$user_data$.$jstree$) {
            if ($e$$116$$.relatedTarget && $$$$25$$($e$$116$$.relatedTarget).hasClass("oj-tree-marker-line")) {
              return!1;
            }
            $vars$$19$$.$m$ && $vars$$19$$.$m$.hide();
            $vars$$19$$.$ml$ && $vars$$19$$.$ml$.hide();
            this.$_data$.dnd.$mto$ = setTimeout(function($t$$14$$) {
              return function() {
                $t$$14$$.$_dnd_leave$($e$$116$$);
              };
            }(this), 0);
          }
        }, this)).delegate(".oj-tree-list a", "mouseup.ojtree", $$$$25$$.proxy(function($e$$117$$) {
          var $ctl$$12$$ = this.$_data$.dnd.$ctl$;
          $ctl$$12$$.$is_drag$ && $ctl$$12$$.$user_data$.$jstree$ && this.$_dnd_finish$($e$$117$$);
        }, this));
        $$$$25$$(document).bind("drag_stop.ojtreeu", $$$$25$$.proxy(function() {
          var $dnd$$5$$ = this.$_data$.dnd, $vars$$20$$ = this.$_data$.dnd.$vars$;
          $dnd$$5$$.$to1$ && clearTimeout($dnd$$5$$.$to1$);
          $dnd$$5$$.$to2$ && clearTimeout($dnd$$5$$.$to2$);
          $dnd$$5$$.$i1$ && clearInterval($dnd$$5$$.$i1$);
          $dnd$$5$$.$i2$ && clearInterval($dnd$$5$$.$i2$);
          $dnd$$5$$.after = !1;
          $dnd$$5$$.before = !1;
          $dnd$$5$$.inside = !1;
          $dnd$$5$$.off = !1;
          $dnd$$5$$.$prepared$ = !1;
          $dnd$$5$$.$w$ = !1;
          $dnd$$5$$.$to1$ = !1;
          $dnd$$5$$.$to2$ = !1;
          $dnd$$5$$.$i1$ = !1;
          $dnd$$5$$.$i2$ = !1;
          $dnd$$5$$.$active$ = !1;
          $dnd$$5$$.$foreign$ = !1;
          $vars$$20$$.$m$ && $vars$$20$$.$m$.css({top:"-2000px"});
          $vars$$20$$.$ml$ && $vars$$20$$.$ml$.css({top:"-2000px"});
        }, this)).bind("drag_start.ojtreeu", $$$$25$$.proxy(function($e$$118$$, $data$$159$$) {
          if ($data$$159$$.data.$jstree$) {
            var $et$$ = $$$$25$$($data$$159$$.event.target);
            $et$$.closest(".jstree").hasClass("oj-tree-" + this.$_index$) && this.$_dnd_enter$($et$$);
          }
        }, this));
        $s$$30_vars$$9$$ = this.options.dnd;
        $s$$30_vars$$9$$.drag_target && $$$$25$$(document).delegate($s$$30_vars$$9$$.drag_target, "mousedown.ojtree-" + this.$_index$, $$$$25$$.proxy(function($e$$119$$) {
          var $cnt$$2_ctl$$13$$ = this.$_data$.dnd.$ctl$, $dnd$$6$$ = this.$_data$.dnd, $vars$$21$$ = this.$_data$.dnd.$vars$;
          $vars$$21$$.$o$ = $e$$119$$.target;
          this.$_drag_start$($e$$119$$, {$jstree$:!0, $obj$:$e$$119$$.target}, "\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e" + $$$$25$$($e$$119$$.target).text());
          this.$_data$.$themes$ && ($vars$$21$$.$m$ && $vars$$21$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $vars$$21$$.$ml$ && $vars$$21$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $cnt$$2_ctl$$13$$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
          $cnt$$2_ctl$$13$$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid");
          $$$$25$$("body").addClass("oj-tree-invalid-drop");
          $vars$$21$$.$o$ && $vars$$21$$.$o$.removeClass("oj-valid-drop").addClass("oj-invalid-drop");
          $cnt$$2_ctl$$13$$ = this.$_$container$;
          $dnd$$6$$.$cof$ = $cnt$$2_ctl$$13$$.offset();
          $dnd$$6$$.$cw$ = parseInt($cnt$$2_ctl$$13$$.width(), 10);
          $dnd$$6$$.ch = parseInt($cnt$$2_ctl$$13$$.height(), 10);
          $dnd$$6$$.$foreign$ = !0;
          $e$$119$$.preventDefault();
        }, this));
        $s$$30_vars$$9$$.drop_target && $$$$25$$(document).delegate($s$$30_vars$$9$$.drop_target, "mouseenter.ojtreex-" + this.$_index$, $$$$25$$.proxy(function($e$$120$$) {
          var $dnd$$7$$ = this.$_data$.dnd, $vars$$22$$ = this.$_data$.dnd.$vars$;
          $dnd$$7$$.$active$ && this.options.dnd.drop_check.call(this, {o:$vars$$22$$.$o$, r:$$$$25$$($e$$120$$.target), e:$e$$120$$}) && ($dnd$$7$$.$ctl$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), $$$$25$$("body").removeClass("oj-tree-invalid-drop"), $vars$$22$$.$o$ && $vars$$22$$.$o$.removeClass("oj-invalid-drop").addClass("oj-valid-drop"));
        }, this)).delegate($s$$30_vars$$9$$.drop_target, "mouseleave.ojtree-" + this.$_index$, $$$$25$$.proxy(function() {
          this.$_data$.dnd.$active$ && (this.$_data$.dnd.$ctl$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid"), $$$$25$$("body").addClass("oj-tree-invalid-drop"));
        }, this)).delegate($s$$30_vars$$9$$.drop_target, "mouseup.ojtreex-" + this.$_index$, $$$$25$$.proxy(function($e$$122$$) {
          var $vars$$23$$ = this.$_data$.dnd.$vars$;
          this.$_data$.dnd.$active$ && this.$_data$.dnd.$ctl$.helper.children("ins").hasClass("oj-tree-drop-ok") && this.options.dnd.drop_finish.call(this, {o:$vars$$23$$.$o$, r:$$$$25$$($e$$122$$.target), e:$e$$122$$});
        }, this));
      }
    }, $_initDnDOpts$:function() {
      this.$_data$.dnd.$reorder$ = !1;
      var $opts$$25$$ = this.options.dnd, $bFixup$$ = !0;
      "object" === typeof $opts$$25$$ && ($opts$$25$$ = $opts$$25$$.reorder, "string" === typeof $opts$$25$$ && ("enable" === $opts$$25$$ ? (this.$_data$.dnd.$reorder$ = !0, $bFixup$$ = !1) : "disable" == $opts$$25$$ && ($bFixup$$ = !1)));
      this.$_data$.dnd.$reorder$ ? (this.options.dnd = {}, this.$_applyDefaults$(this.options.dnd, this.$_data$.dnd.$defaults$), this.options.dnd.reorder = "enable") : $bFixup$$ && (this.options.dnd = {reorder:"disable"});
    }, $_initKeys$:function() {
    }, $_initMenu$:function($newVal$$1$$) {
      var $$m_menu$$11$$, $dm_t$$15$$;
      $newVal$$1$$ || this.options.contextMenu || ($$m_menu$$11$$ = this.$_$container$.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m_menu$$11$$);
      if ($newVal$$1$$ || this.options.contextMenu) {
        $$m_menu$$11$$ = $newVal$$1$$ || this.options.contextMenu;
        $dm_t$$15$$ = $$$$25$$.type($$m_menu$$11$$);
        if ("function" == $dm_t$$15$$) {
          try {
            $$m_menu$$11$$ = $$m_menu$$11$$();
          } catch ($e$$123$$) {
            $$m_menu$$11$$ = null;
          }
          $dm_t$$15$$ = $$$$25$$.type($$m_menu$$11$$);
        }
        if ("string" === $dm_t$$15$$) {
          if ($$m_menu$$11$$ = $$$$25$$($$m_menu$$11$$)) {
            $$m_menu$$11$$.css("display", "none"), $dm_t$$15$$ = this.$_data$.menu, $dm_t$$15$$.$$container$ = $$m_menu$$11$$, $dm_t$$15$$.$usermenu$ = !0;
          }
          this.$_data$.menu.$usermenu$ && $newVal$$1$$ && this.$_applyMenu$();
        }
      }
    }, $_handleContextMenuBeforeShow$:function($e$$124$$, $ui$$26$$) {
      this.$_data$.menu.$node$ = "keydown" === $e$$124$$.originalEvent.originalEvent.type ? this.$_data$.ui.$hovered$ : $$$$25$$($e$$124$$.originalEvent.target.parentNode);
      this.$_data$.menu.$treeDivId$ = this.$_data$.menu.$node$.closest("div").attr("id");
      $ui$$26$$.openOptions.position = {my:"start top", at:"start bottom", of:this.$_data$.menu.$node$[0]};
      if (this.$_data$.menu.$usermenu$ && this.$_data$.menu.$$elemPaste$) {
        var $state$$3$$ = this.$_data$.menu.$$elemPaste$.hasClass("oj-disabled"), $disabledState$$ = !this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$;
        $state$$3$$ || ($state$$3$$ = !1);
        $state$$3$$ != $disabledState$$ && ($disabledState$$ ? this.$_data$.menu.$$elemPaste$.addClass("oj-disabled") : this.$_data$.menu.$$elemPaste$.removeClass("oj-disabled"), this.$_data$.menu.$$container$.ojMenu("refresh"));
      }
    }, $_handleContextMenuSelect$:function($ev$$4$$, $ui$$27$$) {
      if (!$ui$$27$$.inst && this.$_data$.menu.$treeDivId$ == this.$_elemId$.substr(1)) {
        var $id$$35$$ = $ui$$27$$ ? $ui$$27$$.item.attr("id") : void 0;
        "ojtreecopy" === $id$$35$$ ? this.$_crrm_copy$(this.$_data$.menu.$node$) : "ojtreecut" === $id$$35$$ ? this.$_crrm_cut$(this.$_data$.menu.$node$) : "ojtreepaste" === $id$$35$$ ? this.$_crrm_paste$(this.$_data$.menu.$node$) : "ojtreeremove" === $id$$35$$ ? this.isSelected(this.$_data$.menu.$node$) ? this.$_crrm_remove$() : this.$_crrm_remove$(this.$_data$.menu.$node$) : "ojtreerename" === $id$$35$$ ? this.$_crrm_rename$(this.$_data$.menu.$node$) : "ojtreecreate" === $id$$35$$ && this.$_crrm_create$(this.$_data$.menu.$node$);
      }
    }, _OpenContextMenu:function($menu$$12$$, $event$$329$$) {
      $menu$$12$$.open($event$$329$$, {launcher:this.$_$container_ul$, initialFocus:"menu"});
    }, $_initCoreOpts$:function() {
      var $val$$54$$ = this.options.selectionMode, $val$$54$$ = void 0 == $val$$54$$ ? "single" : $val$$54$$;
      "none" === $val$$54$$ ? $val$$54$$ = 0 : "single" === $val$$54$$ ? $val$$54$$ = 1 : "multiple" === $val$$54$$ && ($val$$54$$ = -1);
      this.$_data$.$core$.$selectMode$ = $val$$54$$;
      this.$_data$.$themes$.icons = this.options.icons;
      this.$_data$.$core$.$toExpand$ = this.$_varCopy$(this.options, "initExpanded");
      null == this.$_data$.$core$.$toExpand$ && (this.$_data$.$core$.$toExpand$ = []);
      this.$_data$.$core$.$toLoad$ = this.options.initLoaded;
    }, $_initUIOpts$:function() {
    }, $_initDSOpts$:function($bInit$$2$$) {
      var $s$$31$$ = this.options.data, $dt$$1_ot$$2$$;
      this.$_data$.$ds$.type = 0;
      this.$_data$.html.$useExistingMarkup$ = !1;
      this.$_data$.html.$cloneMarkup$ = !1;
      if ($s$$31$$) {
        if ($dt$$1_ot$$2$$ = $$$$25$$.type($s$$31$$), "string" === $dt$$1_ot$$2$$) {
          this.$_isHtml$($s$$31$$) ? this.$_data$.$ds$.type = 4 : this.$_data$.$ds$.type = 3;
        } else {
          if ("array" === $dt$$1_ot$$2$$) {
            this.$_data$.$ds$.type = 3;
          } else {
            if ("object" === $dt$$1_ot$$2$$) {
              try {
                $s$$31$$ instanceof $oj$$25$$.$JsonTreeDataSource$ && (this.$_data$.$ds$.type = 1);
              } catch ($e$$125$$) {
                this.$_data$.$ds$.type = -1;
              }
              if (1 !== this.$_data$.$ds$.type) {
                try {
                  $s$$31$$ instanceof $oj$$25$$.$CollectionTreeDataSource$ && (this.$_data$.$ds$.type = 2);
                } catch ($e$$126$$) {
                  this.$_data$.$ds$.type = -1;
                }
              }
              1 !== this.$_data$.$ds$.type && 2 !== this.$_data$.$ds$.type && ($s$$31$$.data || $s$$31$$.ajax) && (($dt$$1_ot$$2$$ = $s$$31$$.dataType) ? "json" === $dt$$1_ot$$2$$ ? this.$_data$.$ds$.type = 3 : "html" === $dt$$1_ot$$2$$ && (this.$_data$.$ds$.type = 4) : ($s$$31$$.dataType = "json", this.$_data$.$ds$.type = 3));
            }
          }
        }
      }
      $bInit$$2$$ && 0 == this.$_data$.$ds$.type && 0 < this.$_$container$.find("ul").length && (this.$_data$.$ds$.type = 4, this.$_data$.html.$useExistingMarkup$ = !0);
    }, $_initTreeDSOpts$:function() {
    }, $_initJsonOpts$:function() {
    }, $_initHtmlOpts$:function() {
    }, $_initCrrmOpts$:function() {
    }, $_initMenuOpts$:function() {
    }, $_initThemeOpts$:function() {
    }, $_initTypeOpts$:function() {
      var $o$$18$$ = this.options.types;
      "object" === typeof $o$$18$$ && this.$_applyDefaults$($o$$18$$, {attr:this.$_data$.types.$defaults$.attr});
    }, $_initExpandedOpts$:function() {
      this.$_data$.$core$.$toExpand$ = this.$_varCopy$(this.options, "initExpanded");
      null == this.$_data$.$core$.$toExpand$ && (this.$_data$.$core$.$toExpand$ = []);
    }, $_initData$:function() {
      var $data$$160$$ = this.$_data$;
      $data$$160$$.$core$ = {$htmlTitles$:!1, $initLoaded$:[], $selectMode$:1, $load_open$:!1, $li_height$:0, $notify_plugins$:!1, $toExpand$:!1, $toLoad$:!1, $prepared_move$:{}, $initFocus$:!1};
      $data$$160$$.ui = {selected:$$$$25$$(), $last_selected$:!1, $hovered$:null, $lastHovered$:null, $to_select$:null, opacity:1, $spacebar$:!1, $focused$:!1};
      $data$$160$$.ui.$defaults$ = {selectMultipleModifier:"ctrl", selectRangeModifier:"shift", disableSelectingChildren:!1};
      $data$$160$$.$crrm$ = {};
      $data$$160$$.$crrm$.$cp_nodes$ = !1;
      $data$$160$$.$crrm$.$ct_nodes$ = !1;
      $data$$160$$.$crrm$.$defaults$ = {inputWidthLimit:200, move:{alwaysCopy:!1, openOnMove:!0, defaultPosition:"last", checkMove:function $$data$$160$$$$crrm$$$defaults$$move$checkMove$() {
        return!0;
      }}};
      $data$$160$$.$crrm$.$prepared_move$ = {};
      $data$$160$$.$ds$ = {};
      $data$$160$$.$ds$.$progressiveRender$ = !1;
      $data$$160$$.$ds$.$progressiveUnload$ = !1;
      $data$$160$$.$ds$.$correctState$ = !0;
      $data$$160$$.$ds$.type = 0;
      $data$$160$$.$json$ = {};
      $data$$160$$.$json$.$defaults$ = {data:!1, ajax:!1};
      $data$$160$$.html = {};
      $data$$160$$.html.$defaults$ = {data:!1, ajax:!1};
      $data$$160$$.html.$useExistingMarkup$ = !1;
      $data$$160$$.html.$markup_ul$ = !1;
      $data$$160$$.html.$markup_div$ = !1;
      $data$$160$$.html.$markup$ = !1;
      $data$$160$$.html.$cloneMarkup$ = !1;
      $data$$160$$.$themes$ = {};
      $data$$160$$.$themes$.icons = !0;
      $data$$160$$.$themes$.$dots$ = !1;
      $data$$160$$.$themes$.$theme$ = "default";
      $data$$160$$.$themes$.url = !1;
      $data$$160$$.$themes$.$themes_loaded$ = [];
      $data$$160$$.$themes$.$_themes$ = !1;
      $data$$160$$.types = {};
      $data$$160$$.types.$attachTo$ = [];
      $data$$160$$.types.$defType$ = !1;
      $data$$160$$.types.$defaults$ = {maxChildren:-1, maxDepth:-1, validChildren:"all", useData:!1, attr:"type", types:{"default":{maxChildren:-1, maxDepth:-1, validChildren:"all"}}};
      $data$$160$$.menu = {};
      $data$$160$$.menu.$usermenu$ = !1;
      $data$$160$$.menu.$$container$ = !1;
      $data$$160$$.menu.$$elemPaste$ = !1;
      $data$$160$$.menu.$node$ = !1;
      $data$$160$$.keys = {};
      $data$$160$$.keys.$enabled$ = !0;
      $data$$160$$.keys.bound = [];
      $data$$160$$.dnd = {};
      $data$$160$$.dnd.$reorder$ = !1;
      $data$$160$$.dnd.$active$ = !1;
      $data$$160$$.dnd.after = !1;
      $data$$160$$.dnd.inside = !1;
      $data$$160$$.dnd.before = !1;
      $data$$160$$.dnd.off = !1;
      $data$$160$$.dnd.$prepared$ = !1;
      $data$$160$$.dnd.$w$ = 0;
      $data$$160$$.dnd.$to1$ = !1;
      $data$$160$$.dnd.$to2$ = !1;
      $data$$160$$.dnd.$cof$ = !1;
      $data$$160$$.dnd.$cw$ = !1;
      $data$$160$$.dnd.ch = !1;
      $data$$160$$.dnd.$i1$ = !1;
      $data$$160$$.dnd.$i2$ = !1;
      $data$$160$$.dnd.$mto$ = !1;
      $data$$160$$.dnd.$ml_width$ = 100;
      $data$$160$$.dnd.$targ_ml_width$ = 100;
      $data$$160$$.dnd.$defaults$ = {copy_modifier:"ctrl", check_timeout:100, open_timeout:500, drop_target:".oj-tree-drop", drop_check:function $$data$$160$$$dnd$$defaults$$drop_check$() {
        return!0;
      }, drop_finish:$$$$25$$.noop, drag_target:".oj-tree-draggable", drag_finish:$$$$25$$.noop, drag_check:function $$data$$160$$$dnd$$defaults$$drag_check$() {
        return{after:!1, before:!1, inside:!0};
      }};
      $data$$160$$.dnd.$vars$ = {};
      $data$$160$$.dnd.$vars$.$o$ = !1;
      $data$$160$$.dnd.$vars$.$r$ = !1;
      $data$$160$$.dnd.$vars$.$m$ = !1;
      $data$$160$$.dnd.$vars$.$ml$ = !1;
      $data$$160$$.dnd.$vars$.$sli$ = void 0;
      $data$$160$$.dnd.$vars$.$sti$ = void 0;
      $data$$160$$.dnd.$vars$.$dir1$ = !1;
      $data$$160$$.dnd.$vars$.$dir2$ = !1;
      $data$$160$$.dnd.$vars$.$last_pos$ = !1;
      $data$$160$$.dnd.$ctl$ = {};
      $data$$160$$.dnd.$ctl$.$is_down$ = !1;
      $data$$160$$.dnd.$ctl$.$is_drag$ = !1;
      $data$$160$$.dnd.$ctl$.helper = !1;
      $data$$160$$.dnd.$ctl$.$scroll_spd$ = 10;
      $data$$160$$.dnd.$ctl$.$init_x$ = 0;
      $data$$160$$.dnd.$ctl$.$init_y$ = 0;
      $data$$160$$.dnd.$ctl$.$threshold$ = 5;
      $data$$160$$.dnd.$ctl$.$helper_left$ = -15;
      $data$$160$$.dnd.$ctl$.$helper_top$ = 5;
      $data$$160$$.dnd.$ctl$.$user_data$ = {};
    }, $_fix_scroll$:function($obj$$93_t$$16$$) {
      var $c$$31$$ = this.$_$container$[0];
      $c$$31$$.scrollHeight > $c$$31$$.offsetHeight && ($obj$$93_t$$16$$ = this.$_getNode$($obj$$93_t$$16$$)) && -1 !== $obj$$93_t$$16$$ && $obj$$93_t$$16$$.length && $obj$$93_t$$16$$.is(":visible") && ($obj$$93_t$$16$$ = $obj$$93_t$$16$$.offset().top - this.$_$container$.offset().top, 0 > $obj$$93_t$$16$$ && ($c$$31$$.scrollTop = $c$$31$$.scrollTop + $obj$$93_t$$16$$ - 1), $obj$$93_t$$16$$ + this.$_data$.$core$.$li_height$ + ($c$$31$$.scrollWidth > $c$$31$$.offsetWidth ? $scrollbar_width$$ : 0) > 
      $c$$31$$.offsetHeight && ($c$$31$$.scrollTop += $obj$$93_t$$16$$ - $c$$31$$.offsetHeight + this.$_data$.$core$.$li_height$ + 1 + ($c$$31$$.scrollWidth > $c$$31$$.offsetWidth ? $scrollbar_width$$ : 0)));
    }, $set_focus$:function() {
    }, $_isFocused$:function() {
      return this.$_data$.ui.$focused$;
    }, $unset_focus$:function() {
    }, $_focused$:function() {
      var $ret$$34$$ = null;
      $$$$25$$.each($_aInstances$$, function($i$$288$$, $_this$$23$$) {
        if ($_this$$23$$.$_data$.ui.$focused$) {
          return $ret$$34$$ = $_this$$23$$, !1;
        }
      });
      return $ret$$34$$;
    }, $_newIndex$:function() {
      return++$_instance$$;
    }, $_getIndex$:function() {
      return this.$_index$;
    }, $_getOptions$:function() {
      return $$$$25$$.extend(!0, {}, this.options);
    }, $_getContainer$:function() {
      return this.$_$container$;
    }, $_keyHandler$:{up:function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1;
    }, "ctrl+up":function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1;
    }, "shift+up":function() {
      this.select(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, down:function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1;
    }, "ctrl+down":function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1;
    }, "shift+down":function() {
      this.select(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, left:function() {
      var $o$$25$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$25$$ && ($o$$25$$.hasClass("oj-expanded") ? this.collapse($o$$25$$) : this.hover(this.$_getPrev$($o$$25$$)));
      return!1;
    }, "ctrl+left":function() {
      var $o$$26$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$26$$ && ($o$$26$$.hasClass("oj-expanded") ? this.collapse($o$$26$$) : this.hover(this.$_getPrev$($o$$26$$)));
      return!1;
    }, "shift+left":function() {
      var $o$$27$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$27$$ && ($o$$27$$.hasClass("oj-expanded") ? this.collapse($o$$27$$) : this.hover(this.$_getPrev$($o$$27$$)));
      return!1;
    }, right:function() {
      var $o$$28$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$28$$ && $o$$28$$.length && ($o$$28$$.hasClass("oj-collapsed") ? this.expand($o$$28$$) : this.hover(this.$_getNext$($o$$28$$)));
      return!1;
    }, "ctrl+right":function() {
      var $o$$29$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$29$$ && $o$$29$$.length && ($o$$29$$.hasClass("oj-collapsed") ? this.expand($o$$29$$) : this.hover(this.$_getNext$($o$$29$$)));
      return!1;
    }, "shift+right":function() {
      var $o$$30$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$30$$ && $o$$30$$.length && ($o$$30$$.hasClass("oj-collapsed") ? this.expand($o$$30$$) : this.hover(this.$_getNext$($o$$30$$)));
      return!1;
    }, space:function() {
      this.$_data$.ui.$hovered$ && (this.$_data$.ui.$spacebar$ = !0, this.$_data$.ui.$hovered$.children("a:eq(0)").click(), this.$_data$.ui.$spacebar$ = !1);
      return!1;
    }, home:function() {
      this.hover(this.$_$container_ul$.find("li:first"));
      return!1;
    }, end:function() {
      var $a$$84$$ = this.$_$container_ul$.find("li.oj-tree-last:visible");
      $a$$84$$ && $a$$84$$.length && this.hover($a$$84$$[$a$$84$$.length - 1]);
      return!1;
    }, "*":function() {
      this.$_$container_ul$.find("a");
      this.$_expandAll$(-1, !1);
      return!1;
    }, "ctrl+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$5$$ = $$$$25$$.Event("click");
        $ev$$5$$.ctrlKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$5$$);
      }
      return!1;
    }, "shift+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$6$$ = $$$$25$$.Event("click");
        $ev$$6$$.shiftKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$6$$);
      }
      return!1;
    }, "shift+home":function() {
      var $hover$$1$$ = this.$_data$.ui.$hovered$;
      if ($hover$$1$$) {
        var $bContinue$$ = !0, $_this$$24$$ = this, $nodes$$3$$ = this.$_$container_ul$.find("li:visible"), $hover$$1$$ = $hover$$1$$[0];
        $$$$25$$.each($nodes$$3$$, function($i$$289$$, $node$$78$$) {
          $node$$78$$ == $hover$$1$$ && ($bContinue$$ = !1);
          $_this$$24$$.$_select$($node$$78$$, !0);
          return $bContinue$$;
        });
      }
      return!1;
    }, "shift+pgdn":function() {
      var $hover$$2$$ = this.$_data$.ui.$last_selected$ || this.$_data$.ui.$hovered$;
      if ($hover$$2$$) {
        var $bFound$$ = !1, $_this$$25$$ = this, $l$$16$$ = this.$_$container_ul$.find("li:visible"), $hover$$2$$ = $hover$$2$$[0];
        $$$$25$$.each($l$$16$$, function($i$$290$$, $node$$79$$) {
          $bFound$$ || ($bFound$$ = $node$$79$$ == $hover$$2$$);
          $bFound$$ && !$_this$$25$$.isSelected($node$$79$$) && $_this$$25$$.$_select$($node$$79$$, !0);
          return!0;
        });
      }
      return!1;
    }, f2:function() {
      this.rename(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$);
      return!1;
    }, del:function() {
      this.remove(this.$_data$.ui.$hovered$ || this.$_getNode$(null));
      return!1;
    }}, $_applyMenu$:function() {
      if (this.$_data$.menu.$usermenu$) {
        var $$menuContainer$$ = this.$_data$.menu.$$container$, $_this$$26$$ = this;
        $$menuContainer$$.on("ojselect", $$$$25$$.proxy(this.$_handleContextMenuSelect$, this));
        $$menuContainer$$.on("ojbeforeopen", $$$$25$$.proxy(this.$_handleContextMenuBeforeShow$, this));
        var $bChanged$$ = !1;
        $$menuContainer$$.find("[data-oj-command]").each(function() {
          var $cmd$$;
          0 === $$$$25$$(this).children("a").length && ($cmd$$ = $$$$25$$(this).attr("data-oj-command").split("-"), $$$$25$$(this).replaceWith($_this$$26$$.$_buildContextMenuItem$($cmd$$[$cmd$$.length - 1])), $$$$25$$(this).hasClass("oj-menu-divider") && $$$$25$$(this).removeClass("oj-menu-divider").addClass("oj-menu-item"), $bChanged$$ = !0);
        });
        $bChanged$$ && $$menuContainer$$.ojMenu("refresh");
        this.$_data$.menu.$$elemPaste$ = $$menuContainer$$.find("#ojtreepaste");
      }
    }, $_clearMenu$:function() {
      var $um$$ = this.$_data$.menu;
      $um$$.$usermenu$ && ($um$$.$usermenu$ = !1, $um$$.$$container$.off("ojselect"), $um$$.$$container$.off("ojbeforeopen"), $um$$.$$container$ = null);
    }, $_buildContextMenuItem$:function($cmd$$1$$) {
      return $$$$25$$(this.$_buildContextMenuListItem$($cmd$$1$$));
    }, $_buildContextMenuListItem$:function($cmd$$2$$) {
      return "\x3cli id\x3d" + $_arMenuCmdMap$$[$cmd$$2$$] + "\x3e" + this.$_buildContextMenuLabel$($cmd$$2$$) + "\x3c/li\x3e";
    }, $_buildContextMenuLabel$:function($cmd$$3$$) {
      return'\x3ca href\x3d"#"\x3e' + this.$getTranslatedString$("m_" + $cmd$$3$$) + "\x3c/a\x3e";
    }, $_crrm_cut$:function($obj$$94$$) {
      $obj$$94$$ = this.$_getNode$($obj$$94$$, !0);
      if (!$obj$$94$$ || !$obj$$94$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$cp_nodes$ = !1;
      this.$_data$.$crrm$.$ct_nodes$ = $obj$$94$$;
      this.$_emitEvent$({obj:$obj$$94$$}, "cut");
    }, $_crrm_copy$:function($obj$$95$$) {
      $obj$$95$$ = this.$_getNode$($obj$$95$$, !0);
      if (!$obj$$95$$ || !$obj$$95$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ = !1;
      this.$_data$.$crrm$.$cp_nodes$ = $obj$$95$$;
      this.$_emitEvent$({obj:$obj$$95$$}, "copy");
    }, $_crrm_paste$:function($obj$$96$$) {
      $obj$$96$$ = this.$_getNode$($obj$$96$$);
      if (!$obj$$96$$ || !$obj$$96$$.length) {
        return!1;
      }
      var $nodes$$4$$ = this.$_data$.$crrm$.$ct_nodes$ ? this.$_data$.$crrm$.$ct_nodes$ : this.$_data$.$crrm$.$cp_nodes$;
      if (!this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$96$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$96$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$cp_nodes$ && this.$_crrm_move_node$(this.$_data$.$crrm$.$cp_nodes$, $obj$$96$$, !1, !0);
      this.$_emitEvent$({obj:$obj$$96$$, nodes:$nodes$$4$$}, "paste");
    }, $_crrm_move_node$:function($obj$$97$$, $ref$$4$$, $position$$16$$, $is_copy$$1$$, $is_prepared$$1$$, $skip_check$$1$$) {
      var $s$$32$$ = this.$_data$.$crrm$.$defaults$.move;
      if (!$is_prepared$$1$$) {
        return "undefined" === typeof $position$$16$$ && ($position$$16$$ = $s$$32$$.defaultPosition), "inside" !== $position$$16$$ || $s$$32$$.defaultPosition.match(/^(before|after)$/) || ($position$$16$$ = $s$$32$$.defaultPosition), this.$_move_node$($obj$$97$$, $ref$$4$$, $position$$16$$, $is_copy$$1$$, !1, $skip_check$$1$$);
      }
      if (!0 === $s$$32$$.alwaysCopy || "multitree" === $s$$32$$.alwaysCopy && $obj$$97$$.$rt$.$_index$ !== $obj$$97$$.$ot$.$_index$) {
        $is_copy$$1$$ = !0;
      }
      this.$_move_node$($obj$$97$$, $ref$$4$$, $position$$16$$, $is_copy$$1$$, !0, $skip_check$$1$$);
    }, $_crrm_remove$:function($obj$$98$$) {
      $obj$$98$$ = this.$_getNode$($obj$$98$$, !0);
      this.$__rollback$();
      this.remove($obj$$98$$);
    }, $_crrm_rename$:function($obj$$99$$) {
      $obj$$99$$ = this.$_getNode$($obj$$99$$);
      this.$__rollback$();
      this.$_crrm_showInput$($obj$$99$$, function() {
      });
    }, $_crrm_showInput$:function($obj$$101$$, $callback$$99$$) {
      $obj$$101$$ = this.$_getNode$($obj$$101$$);
      var $rtl$$2$$ = this.$_isRtl$, $w$$8$$ = this.$_data$.$crrm$.$defaults$.inputWidthLimit, $w1$$ = $obj$$101$$.children("ins").width(), $w2$$ = $obj$$101$$.find("\x3e a:visible \x3e ins").width() * $obj$$101$$.find("\x3e a:visible \x3e ins").length, $t$$18$$ = this.getText($obj$$101$$), $_this$$27$$ = this, $h1$$ = $$$$25$$("\x3cdiv /\x3e", {css:{position:"absolute", top:"-200px", left:$rtl$$2$$ ? "0px" : "-1000px", visibility:"hidden"}}).appendTo("body"), $h2$$ = $obj$$101$$.css("position", 
      "relative").append($$$$25$$("\x3cinput /\x3e", {value:$t$$18$$, "class":"oj-tree-rename-input", css:{padding:"0", border:"1px solid silver", position:"absolute", left:$rtl$$2$$ ? "auto" : $w1$$ + $w2$$ + 4 + "px", right:$rtl$$2$$ ? $w1$$ + $w2$$ + 4 + "px" : "auto", top:"0px", height:this.$_data$.$core$.$li_height$ - 2 + "px", lineHeight:this.$_data$.$core$.$li_height$ - 2 + "px", width:"150px"}, blur:$$$$25$$.proxy(function() {
        var $i$$291$$ = $obj$$101$$.children(".oj-tree-rename-input"), $v$$3$$ = $i$$291$$.val();
        "" === $v$$3$$ && ($v$$3$$ = $t$$18$$);
        $h1$$.remove();
        $i$$291$$.remove();
        this.$_set_text$($obj$$101$$, $t$$18$$);
        this.$_rename_node$($obj$$101$$, $v$$3$$);
        $callback$$99$$.call(this, $obj$$101$$, $v$$3$$, $t$$18$$);
        $obj$$101$$.css("position", "");
      }, this), keyup:function($event$$334_key$$99$$) {
        $event$$334_key$$99$$ = $event$$334_key$$99$$.keyCode || $event$$334_key$$99$$.which;
        if (!$_this$$27$$.$_done$) {
          return $_this$$27$$.$_done$ = !0, !1;
        }
        27 == $event$$334_key$$99$$ ? ($_this$$27$$.$_done$ = !1, this.value = $t$$18$$, this.blur()) : 13 == $event$$334_key$$99$$ ? ($_this$$27$$.$_done$ = !1, this.blur()) : $h2$$.width(Math.min($h1$$.text("pW" + this.value).width(), $w$$8$$));
      }, keypress:function($event$$335$$) {
        if (13 == ($event$$335$$.keyCode || $event$$335$$.which)) {
          return!1;
        }
      }})).children(".oj-tree-rename-input");
      this.$_set_text$($obj$$101$$, "");
      $h1$$.css({fontFamily:$h2$$.css("fontFamily") || "", fontSize:$h2$$.css("fontSize") || "", fontWeight:$h2$$.css("fontWeight") || "", fontStyle:$h2$$.css("fontStyle") || "", fontStretch:$h2$$.css("fontStretch") || "", fontVariant:$h2$$.css("fontVariant") || "", letterSpacing:$h2$$.css("letterSpacing") || "", wordSpacing:$h2$$.css("wordSpacing") || ""});
      $h2$$.width(Math.min($h1$$.text("pW" + $h2$$[0].value).width(), $w$$8$$))[0].select();
    }, $_crrm_create$:function($obj$$102$$, $position$$17$$, $js$$2$$, $callback$$100$$, $skip_rename$$) {
      var $_this$$28$$ = this;
      ($obj$$102$$ = this.$_getNode$($obj$$102$$)) || ($obj$$102$$ = -1);
      this.$__rollback$();
      return this.$_create_node$($obj$$102$$, $position$$17$$, $js$$2$$, function($t$$20$$) {
        var $p$$12$$ = this.$_getParent$($t$$20$$), $pos$$11$$ = $$$$25$$($t$$20$$).index();
        $callback$$100$$ && $callback$$100$$.call(this, $t$$20$$);
        $p$$12$$.length && $p$$12$$.hasClass("oj-collapsed") && this.expand($p$$12$$, !1, !0);
        $skip_rename$$ ? $_this$$28$$.$_emitEvent$({obj:$t$$20$$, name:this.getText($t$$20$$), parent:$p$$12$$, position:$pos$$11$$}) : this.$_crrm_showInput$($t$$20$$, function($obj$$103$$, $new_name$$1$$) {
          $_this$$28$$.$_emitEvent$({obj:$obj$$103$$, name:$new_name$$1$$, parent:$p$$12$$, position:$pos$$11$$});
        });
      });
    }, $_crrm_check_move$:function() {
      return!1;
    }, $_isHtml$:function($s$$34$$) {
      if (!$s$$34$$ || 3 > $s$$34$$.length) {
        return!1;
      }
      $s$$34$$ = $s$$34$$.trim();
      return "\x3c" === $s$$34$$.charAt(0);
    }, $_applyEmptyText$:function() {
      var $d$$19_txt$$ = this.option.emptyText;
      "string" !== typeof $d$$19_txt$$ && ($d$$19_txt$$ = this.$getTranslatedString$("m_emptyText"));
      $d$$19_txt$$ && 0 < $d$$19_txt$$.length && ($d$$19_txt$$ = "\x3cli class\x3d'oj-tree-empty'\x3e" + $d$$19_txt$$ + "\x3c/li\x3e", this.$_$container_ul$.empty().append($d$$19_txt$$));
    }, $_processSubId$:function($locator$$22_sNode$$) {
      var $c$$32_i$$292_subId$$16$$, $node$$80$$, $a$$85_sKey$$;
      $a$$85_sKey$$ = null;
      var $ret$$35$$;
      $locator$$22_sNode$$ && ($c$$32_i$$292_subId$$16$$ = $locator$$22_sNode$$.subId);
      if (!$c$$32_i$$292_subId$$16$$) {
        return null;
      }
      $a$$85_sKey$$ = $c$$32_i$$292_subId$$16$$.split("[");
      if (3 === $a$$85_sKey$$.length && ($a$$85_sKey$$[0] = $a$$85_sKey$$[0].trim(), "oj-tree-node" === $a$$85_sKey$$[0] && ($a$$85_sKey$$[1] = $a$$85_sKey$$[1].trim(), $c$$32_i$$292_subId$$16$$ = $a$$85_sKey$$[1].charAt(0), $c$$32_i$$292_subId$$16$$ = $a$$85_sKey$$[1].indexOf($c$$32_i$$292_subId$$16$$, 1), 0 <= $c$$32_i$$292_subId$$16$$ && ($locator$$22_sNode$$ = $a$$85_sKey$$[1].substring(1, $c$$32_i$$292_subId$$16$$).trim(), $a$$85_sKey$$[2] = $a$$85_sKey$$[2].trim(), $c$$32_i$$292_subId$$16$$ = 
      $a$$85_sKey$$[2].charAt(0), $c$$32_i$$292_subId$$16$$ = $a$$85_sKey$$[2].indexOf($c$$32_i$$292_subId$$16$$, 1), 0 <= $c$$32_i$$292_subId$$16$$)))) {
        $a$$85_sKey$$ = $a$$85_sKey$$[2].substring(1, $c$$32_i$$292_subId$$16$$).trim();
        try {
          $node$$80$$ = this.$_getNode$($locator$$22_sNode$$);
        } catch ($e$$127$$) {
          $node$$80$$ = null;
        }
        if ($a$$85_sKey$$ && $node$$80$$ && -1 !== $node$$80$$) {
          switch($a$$85_sKey$$) {
            case "icon":
              this.$_data$.$themes$.icons && ($ret$$35$$ = $node$$80$$.find(" \x3e a \x3e ins:eq(0)"));
              break;
            case "link":
              $ret$$35$$ = $node$$80$$.find(" \x3e a:eq(0)");
              break;
            case "disclosure":
              this.$_isLeaf$($node$$80$$) || ($ret$$35$$ = $node$$80$$.find(" \x3e ins:eq(0)"));
              break;
            case "title":
              $ret$$35$$ = $node$$80$$.find(" \x3e a \x3e span");
          }
        }
      }
      return $ret$$35$$ ? $ret$$35$$.length ? $ret$$35$$[0] : null : null;
    }, $_hideDots$:function() {
      this.$_data$.$themes$.$dots$ = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-dots");
    }, $_showDots$:function() {
      this.$_data$.$themes$.$dots$ = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-dots");
    }, $_varCopy$:function($obj$$104$$, $s$$35$$) {
      var $o$$31$$ = {};
      $o$$31$$[$s$$35$$] = $obj$$104$$[$s$$35$$];
      return $$$$25$$.extend(!0, {}, $o$$31$$)[$s$$35$$];
    }});
  })();
});
