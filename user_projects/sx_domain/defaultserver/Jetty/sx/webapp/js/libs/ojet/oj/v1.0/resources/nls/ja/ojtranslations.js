define({"oj-message":{fatal:"致命的",error:"エラー",warning:"警告",info:"情報",confirmation:"確認","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"値が所定のフォーマットではありません。",detail:"所定のフォーマットで値を入力してください。","plural-separator":", ",hint:{summary:"例: {exampleValue}",detail:"次の例と同じフォーマットで値を入力してください: '{exampleValue}'","detail-plural":"次の例と同じフォーマットで値を入力してください: '{exampleValue}'"},optionHint:{detail:"オプション'{propertyName}'の許容値は'{propertyValueValid}'です。","detail-plural":"オプション'{propertyName}'の許容値は'{propertyValueValid}'です。"},
optionTypesMismatch:{summary:"オプション'{propertyName}'が'{propertyValue}'に設定されている場合、オプション'{requiredPropertyName}'の値が必要です。"},optionTypeInvalid:{summary:"オプション'{propertyName}'に所定のタイプの値が指定されませんでした。"},optionOutOfRange:{summary:"オプション'{propertyName}'の値{propertyValue}は範囲外です。"},optionValueInvalid:{summary:"オプション'{propertyName}'に無効な値'{propertyValue}'が指定されました。"},number:{decimalFormatMismatch:{summary:"10進数'{value}'は所定のフォーマットではありません。"},currencyFormatMismatch:{summary:"通貨'{value}'は所定のフォーマットではありません。"},percentFormatMismatch:{summary:"パーセント'{value}'は所定のフォーマットではありません。"}},
datetime:{datetimeOutOfRange:{summary:"'{propertyName}'の値'{value}'は範囲外です。",detail:"'{minValue}'から'{maxValue}'までの値を入力してください。"},dateFormatMismatch:{summary:"日付'{value}'は所定のフォーマットではありません。"},timeFormatMismatch:{summary:"時間'{value}'は所定のフォーマットではありません。"},datetimeFormatMismatch:{summary:"日時'{value}'は所定のフォーマットではありません。"},dateToWeekdayMismatch:{summary:"日付'{date}'は'{weekday}'ではありません。",detail:"日付に対応する曜日を入力してください。"}}},"oj-validator":{length:{hint:{min:"{min}文字以上の文字を入力してください。",max:"{max}文字以下の文字を入力してください",inRange:"{min}文字以上、最大{max}文字の文字を入力してください。",
exact:"{length}文字の文字を入力してください。"},messageDetail:{tooShort:"{min}文字以上の文字を入力してください。",tooLong:"{max}文字以下の文字を入力してください。"},messageSummary:{tooShort:"文字数が少なすぎます。",tooLong:"文字数が多すぎます。"}},range:{number:{hint:{min:"{min}以上の数値を入力してください。",max:"{max}以下の数値を入力してください。",inRange:"{min}から{max}までの数値を入力してください。"},messageDetail:{rangeUnderflow:"数値{value}は{min}以上とする必要があります。",rangeOverflow:"数値{value}は{max}以下とする必要があります。"},messageSummary:{rangeUnderflow:"数値が低すぎます。",rangeOverflow:"数値が高すぎます。"}},datetime:{hint:{min:"{min}以降の日時を入力してください。",
max:"{max}以前の日時を入力してください。",inRange:"{min}から{max}までの日時を入力してください。"},messageDetail:{rangeUnderflow:"日時は{min}以降とする必要があります。",rangeOverflow:"日時は{max}以前とする必要があります。"},messageSummary:{rangeUnderflow:"日時が最小日付より前です。",rangeOverflow:"日時が最大日付より後です。"}}},restriction:{date:{dayMetaData:{summary:"日付が無効なエントリです。",detail:"日付{value}は無効なエントリにしないでください。"}}},regExp:{summary:"フォーマットが不正です。",detail:"値'{value}'は次のパターンと一致している必要があります: '{pattern}'"},required:{summary:"値が必要です。",detail:"値を入力する必要があります。"}},"oj-editableValue":{required:{hint:"",
messageSummary:"",messageDetail:""}},"oj-ojInputDate":{closeText:"完了",prevText:"前",nextText:"次",currentText:"今日",weekHeader:"週",weekText:"週",datePicker:"日付ピッカー",inputHelp:"カレンダにアクセスするには$[↓$]キーまたは$[↑$]キーを押してください",inputHelpBoth:"カレンダにアクセスするには$[↓$]キーまたは$[↑$]キーを、時間ドロップ・ダウンにアクセスするには$[Shift$]+$[↓$]キーまたは$[Shift$]+$[↑$]キーを押してください"},"oj-ojInputTime":{inputHelp:"時間ドロップ・ダウンにアクセスするには$[↓$]キーまたは$[↑$]キーを押してください"},"oj-ojDataGrid":{accessibleSortAscending:"{id}は昇順でソートされました",accessibleSortDescending:"{id}は降順でソートされました",
accessibleActionableMode:"アクション可能モードの入力",accessibleNavigationMode:"ナビゲーション・モードの入力",accessibleSummaryExact:"これは{rownum}行、{colnum}列のデータ・グリッドです",accessibleSummaryEstimate:"これは行数と列数が不明なデータ・グリッドです",accessibleSummaryExpanded:"現在{num}行が展開されています",accessibleInitialFocus:"現在のセルにフォーカスするには$[Tab$]を押してください",accessibleRowExpanded:"行を展開済",accessibleRowCollapsed:"行を縮小済",accessibleRowSelected:"行{row}が選択済",accessibleColumnSelected:"列{column}が選択済",accessibleStateSelected:"選択済",accessibleMultiCellSelected:"{num}個のセルが選択済",
accessibleRowContext:"行{index}",accessibleColumnContext:"列{index}",accessibleRangeSelectModeOn:"選択したセル範囲の追加モード・オン",accessibleRangeSelectModeOff:"選択したセル範囲の追加モード・オフ",accessibleFirstRow:"最初の行に到達しました",accessibleLastRow:"最後の行に到達しました",accessibleFirstColumn:"最初の列に到達しました",accessibleLastColumn:"最後の列に到達しました",msgFetchingData:"データのフェッチ中...",msgNoData:"表示するデータがありません。",labelResize:"サイズ変更",labelResizeWidth:"幅のサイズ変更",labelResizeHeight:"高さのサイズ変更",labelSortRow:"行のソート",labelSortRowAsc:"行の昇順ソート",labelSortRowDsc:"行の降順ソート",
labelSortCol:"列のソート",labelSortColAsc:"列の昇順ソート",labelSortColDsc:"列の降順ソート",labelCut:"切取り",labelPaste:"貼付け"},"oj-ojRowExpander":{accessibleRowDescription:"レベル{level}、行{num} / {total}",accessibleRowExpanded:"行を展開済",accessibleRowCollapsed:"行を縮小済",accessibleStateExpanded:"展開済",accessibleStateCollapsed:"縮小済"},"oj-_ojLabel":{tooltipHelp:"ヘルプ",tooltipRequired:"必須"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",
rangeOverflow:""}},tooltipDecrement:"減分",tooltipIncrement:"増分"},"oj-ojTable":{labelSelectRow:"行の選択",labelSelectColumn:"列の選択",labelSort:"ソート",labelSortAsc:"昇順ソート",labelSortDsc:"降順ソート",msgFetchingData:"データのフェッチ中...",msgNoData:"表示するデータがありません。"},"oj-ojTabs":{removeCueText:"削除可能"},"oj-ojSelect":{noMatchesFound:"一致する検索文字列が見つかりませんでした。"},"oj-ojTree":{m_loading:"ロード中...",m_newnode:"新規ノード",m_multisel:"複数選択",m_edit:"編集",m_create:"作成",m_cut:"切取り",m_copy:"コピー",m_paste:"貼付け",m_remove:"削除",m_rename:"名前変更",m_emptyText:"データなし"},
"oj-ojPagingControl":{labelAccPaging:"ページ区切り",labelAccNavFirstPage:"最初のページ",labelAccNavLastPage:"最後のページ",labelAccNavNextPage:"次のページ",labelAccNavPreviousPage:"前のページ",labelAccNavPage:"ページ",labelLoadMore:"さらに表示...",labelNavInputPage:"ページ",labelNavInputPageMax:"/{pageMax}",labelNavInputPageSummary:"({pageSummary})",msgItemRange:"{pageFrom}-{pageTo}/{pageTotal}アイテム",msgItemRangeUnknown:"{pageFrom}-{pageTo}アイテム",tipNavInputPage:"ページに移動",tipNavPageLink:"{pageNum}ページに移動",tipNavNextPage:"次",tipNavPreviousPage:"前",
tipNavFirstPage:"最初",tipNavLastPage:"最後",pageInvalid:{summary:"入力したページの値が無効です。",detail:"0より大きい値を入力してください。"},maxPageLinksInvalid:{summary:"maxPageLinksの値が無効です。",detail:"4より大きい値を入力してください。"}},"oj-ojChart":{labelDefaultGroupName:"グループ{groupName}",labelSeries:"系列: {seriesName}",labelGroup:"グループ: {groupName}",labelValue:"値: {value}",labelTargetValue:"ターゲット: {targetValue}",labelX:"X: {x}",labelY:"Y: {y}",labelZ:"Z: {z}",labelLow:"低: {low}",labelHigh:"高: {high}",labelOther:"その他",tooltipPan:"パン",tooltipSelect:"マーキーの選択",
tooltipZoom:"マーキー・ズーム"},"oj-ojSunburst":{labelColor:"色",labelSize:"サイズ"},"oj-ojTreemap":{labelColor:"色",labelSize:"サイズ"},"oj-dvtBaseComponent":{labelClearSelection:"選択のクリア",labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",msgNoData:"表示するデータがありません",notReadyToRender:{summary:"レンダリングの前に、表示されているDOMのサブツリーにこのコンポーネントをアタッチする必要があります。"},stateSelected:"選択済",stateUnselected:"未選択",stateMaximized:"最大化",stateMinimized:"最小化",
stateExpanded:"展開済",stateCollapsed:"縮小済",stateIsolated:"分離",stateHidden:"非表示",stateVisible:"表示"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"ポップアップの入力中です。ポップアップと関連付けられたコントロールとの間を移動するには、$[F6$]を押してください。",ariaLiveRegionInitialFocusNone:"ポップアップが開きました。ポップアップと関連付けられたコントロールとの間を移動するには、$[F6$]を押してください。"}});