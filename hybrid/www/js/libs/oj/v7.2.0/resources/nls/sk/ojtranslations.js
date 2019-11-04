define({"oj-message":{fatal:"Závažné",error:"Chyba ",warning:"Upozornenie",info:"Informácie",confirmation:"Potvrdenie","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Hodnota nie je v očakávanom formáte.",detail:"Zadajte hodnotu v očakávanom formáte.","plural-separator":", ",hint:{summary:"Príklad: {exampleValue}",detail:"Zadajte hodnotu v rovnakom formáte ako tento príklad: '{exampleValue}'.","detail-plural":"Zadajte hodnotu v rovnakom formáte ako tieto príklady: '{exampleValue}'."},optionHint:{detail:"Akceptovaná hodnota pre voľbu '{propertyName}' je '{propertyValueValid}'.","detail-plural":"Akceptované hodnoty pre voľbu '{propertyName}' sú '{propertyValueValid}'."},optionTypesMismatch:{summary:"Hodnota pre voľbu '{requiredPropertyName}' je povinná, keď je voľba '{propertyName}' nastavená na '{propertyValue}'."},optionTypeInvalid:{summary:"Pre voľbu '{propertyName}' nebola zadaná hodnota očakávaného typu."},optionOutOfRange:{summary:"Hodnota {propertyValue} je mimo rozsahu pre voľbu '{propertyName}'."},optionValueInvalid:{summary:"Pre voľbu '{propertyName}' bola zadaná neplatná hodnota '{propertyValue}'."},number:{decimalFormatMismatch:{summary:"'{value}' nie je v očakávanom číselnom formáte."},shortLongUnsupportedParse:{summary:"Dátové typy 'short' a 'long' nie sú podporované na syntaktickú analýzu konvertora.",detail:"Zmeňte komponent na Len na čítanie. Polia určené iba na čítanie nevolajú funkciu syntaktickej analýzy konvertora."},currencyFormatMismatch:{summary:"'{value}' nie je v očakávanom formáte meny."},percentFormatMismatch:{summary:"'{value}' nie je v očakávanom formáte percenta."},invalidNumberFormat:{summary:"Zadaná hodnota {value} nie je platné číslo.",detail:"Zadajte platné číslo."}},color:{invalidFormat:{summary:"Neplatný formát farieb.",detail:"Neplatná špecifikácia voľby formátu farieb."},invalidSyntax:{summary:"Neplatná špecifikácia farieb.",detail:"Špecifikácia farieb nevyhovuje štandardu CSS3."}},datetime:{datetimeOutOfRange:{summary:"Hodnota '{value}' je mimo rozsahu pre '{propertyName}'.",detail:"Zadajte hodnotu medzi '{minValue}' a '{maxValue}'.",hour:"h",minute:"min",second:"s",millisec:"ms",month:"mesiac",day:"deň",year:"rok","month name":"názov mesiaca",weekday:"pracovný deň"},dateFormatMismatch:{summary:"'{value}' nie je v očakávanom formáte dátumu."},invalidTimeZoneID:{summary:"Zadali ste neplatné ID časového pásma {timeZoneID}."},nonExistingTime:{summary:"Vstupný čas neexistuje, pretože pripadá na čas prechodu na letný čas."},missingTimeZoneData:{summary:"Chýbajú dáta o časovom pásme. Je potrebné vyvolať require 'ojs/ojtimezonedata' na načítanie dát o časovom pásme."},timeFormatMismatch:{summary:"'{value}' nie je v očakávanom formáte času."},datetimeFormatMismatch:{summary:"'{value}' nie je v očakávanom formáte dátumu a času."},dateToWeekdayMismatch:{summary:"Deň '{date}' nepripadá na '{weekday}'.",detail:"Zadajte pracovný deň, ktorý zodpovedá tomuto dátumu."},invalidISOString:{invalidRangeSummary:"Hodnota '{value}' je mimo rozsahu pre pole '{propertyName}' v reťazci ISO 8601 '{isoStr}'.",summary:"Zadaný reťazec {isoStr} nie je platným reťazcom v štandarde ISO 8601.",detail:"Zadajte platný reťazec v štandarde ISO 8601."}}},"oj-validator":{length:{hint:{min:"Zadajte {min} alebo viac znakov.",max:"Zadajte {max} alebo menej znakov.",inRange:"Zadajte {min} alebo viac znakov, maximálne {max}.",exact:"Zadajte {length} znakov."},messageDetail:{tooShort:"Zadajte {min} alebo viac znakov, nie menej.",tooLong:"Zadajte {max} alebo menej znakov, nie viac."},messageSummary:{tooShort:"Príliš málo znakov.",tooLong:"Príliš veľa znakov."}},range:{number:{hint:{min:"Zadajte číslo, ktoré je väčšie alebo rovnaké ako {min}.",max:"Zadajte číslo, ktoré je menšie alebo rovnaké ako {max} .",inRange:"Zadajte číslo medzi {min} a {max}.",exact:"Zadajte číslo {num}."},messageDetail:{rangeUnderflow:"Číslo musí byť väčšie alebo rovnaké ako {min}.",rangeOverflow:"Číslo musí byť menšie alebo rovnaké ako {max}.",exact:"Číslo musí byť {num}."},messageSummary:{rangeUnderflow:"Číslo je príliš nízke.",rangeOverflow:"Číslo je príliš vysoké."}},datetime:{hint:{min:"Zadajte dátum a čas {min} alebo neskorší.",max:"Zadajte dátum a čas {max} alebo skorší.",inRange:"Zadajte dátum a čas medzi {min} a {max}."},messageDetail:{rangeUnderflow:"Dátum a čas musí byť {min} alebo neskorší.",rangeOverflow:"Dátum a čas musí byť {max} alebo skorší."},messageSummary:{rangeUnderflow:"Dátum a čas je skorší ako minimálny dátum a čas.",rangeOverflow:"Dátum a čas je neskorší ako maximálny dátum a čas."}},date:{hint:{min:"Zadajte dátum {min} alebo neskorší.",max:"Zadajte dátum {max} alebo skorší.",inRange:"Zadajte dátum medzi {min} a {max}."},messageDetail:{rangeUnderflow:"Dátum musí byť {min} alebo neskorší.",rangeOverflow:"Dátum musí byť {max} alebo skorší."},messageSummary:{rangeUnderflow:"Dátum je skorší ako minimálny dátum.",rangeOverflow:"Dátum je neskorší ako maximálny dátum."}},time:{hint:{min:"Zadajte čas {min} alebo neskorší.",max:"Zadajte čas {max} alebo skorší.",inRange:"Zadajte čas medzi {min} a {max}."},messageDetail:{rangeUnderflow:"Čas musí byť {min} alebo neskorší.",rangeOverflow:"Čas musí byť {max} alebo skorší."},messageSummary:{rangeUnderflow:"Čas je skorší ako minimálny čas.",rangeOverflow:"Čas je neskorší ako maximálny čas."}}},restriction:{date:{messageSummary:"Dátum {value} patrí k deaktivovanej položke.",messageDetail:"Dátum {value} by nemal patriť k deaktivovanej položke."}},regExp:{summary:"Formát je nesprávny.",detail:"Hodnota '{value}' sa musí zhodovať s týmto vzorom: '{pattern}'."},required:{summary:"Požaduje sa hodnota.",detail:"Musíte zadať hodnotu."}},"oj-ojEditableValue":{loading:"Načítava sa"},"oj-ojInputDate":{done:"Hotovo",cancel:"Zrušiť",prevText:"Predchádzajúci",nextText:"Nasledujúci",currentText:"Dnes",weekHeader:"Týž.",tooltipCalendar:"Vybrať dátum.",tooltipCalendarTime:"Vybrať dátum a čas.",tooltipCalendarDisabled:"Výber dátumu je deaktivovaný.",tooltipCalendarTimeDisabled:"Výber dátumu a času je deaktivovaný.",picker:"Výber",weekText:"Týždeň ",datePicker:"Výber dátumu",inputHelp:"Na prístup do kalendára stlačte kláves so šípkou nadol alebo nahor.",inputHelpBoth:"Na prístup do kalendára stlačte kláves so šípkou nadol alebo nahor. Na prístup do rozbaľovacieho zoznamu času stlačte Shift + kláves so šípkou nadol alebo Shift + kláves so šípkou nahor.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Zrušiť",okText:"OK",currentTimeText:"Teraz",hourWheelLabel:"Hodina",minuteWheelLabel:"Minúta",ampmWheelLabel:"dop./odp.",tooltipTime:"Vybrať čas.",tooltipTimeDisabled:"Výber času je deaktivovaný.",inputHelp:"Na prístup do rozbaľovacieho zoznamu času stlačte kláves so šípkou nadol alebo nahor.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"Hodnota sa musí zhodovať s týmto vzorom: '{pattern}'."}},"oj-ojFilmStrip":{labelAccFilmStrip:"Zobrazuje sa stránka {pageIndex} z {pageCount}",labelAccArrowNextPage:"Vyberte položku Nasledujúca na zobrazenie ďalšej stránky",labelAccArrowPreviousPage:"Vyberte položku Predchádzajúca na zobrazenie predchádzajúcej stránky",tipArrowNextPage:"Nasledujúca",tipArrowPreviousPage:"Predchádzajúca"},"oj-ojDataGrid":{accessibleSortAscending:"{id} triedené vo vzostupnom poradí",accessibleSortDescending:"{id} triedené v zostupnom poradí",accessibleActionableMode:"Prejsť do režimu vykonávania akcií.",accessibleNavigationMode:"Prejdite do režimu navigácie a stlačte kláves F2 na prechod do režimu úprav alebo režimu vykonávania akcií.",accessibleEditableMode:"Prejdite do režimu úprav, stlačením klávesu Esc prejdete mimo dátovej mriežky.",accessibleSummaryExact:"Toto je mriežka dát s počtom riadkov: {rownum} a počtom stĺpcov: {colnum}",accessibleSummaryEstimate:"Toto je mriežka dát s neznámym počtom riadkov a stĺpcov",accessibleSummaryExpanded:"Momentálne rozbalené riadky: {num}",accessibleRowExpanded:"Rozbalený riadok",accessibleRowCollapsed:"Zbalený riadok",accessibleRowSelected:"Vybraný riadok {row}",accessibleColumnSelected:"Vybraný stĺpec {column}",accessibleStateSelected:"vybrané",accessibleMultiCellSelected:"Vybrané bunky: {num}",accessibleColumnSpanContext:"Šírka {extent}",accessibleRowSpanContext:"Výška {extent}",accessibleRowContext:"Riadok {index}",accessibleColumnContext:"Stĺpec {index}",accessibleRowHeaderContext:"Hlavička riadka {index}",accessibleColumnHeaderContext:"Hlavička stĺpca {index}",accessibleRowEndHeaderContext:"Hlavička konca riadka {index}",accessibleColumnEndHeaderContext:"Hlavička konca stĺpca {index}",accessibleRowHeaderLabelContext:"Návesť hlavičky riadka {level}",accessibleColumnHeaderLabelContext:"Návesť hlavičky stĺpca {level}",accessibleRowEndHeaderLabelContext:"Návesť hlavičky konca riadka {level}",accessibleColumnEndHeaderLabelContext:"Návesť hlavičky konca stĺpca {level}",accessibleLevelContext:"Úroveň {level}",accessibleRangeSelectModeOn:"Režim pridania vybraného rozsahu buniek zapnutý.",accessibleRangeSelectModeOff:"Režim pridania vybraného rozsahu buniek vypnutý.",accessibleFirstRow:"Ste na prvom riadku.",accessibleLastRow:"Ste na poslednom riadku.",accessibleFirstColumn:"Ste na prvom stĺpci",accessibleLastColumn:"Ste na poslednom stĺpci.",accessibleSelectionAffordanceTop:"Horná rukoväť výberu.",accessibleSelectionAffordanceBottom:"Dolná rukoväť výberu.",msgFetchingData:"Vyvolávajú sa dáta...",msgNoData:"Neexistujú položky na zobrazenie.",labelResize:"Zmeniť veľkosť",labelResizeWidth:"Zmeniť veľkosť šírky",labelResizeHeight:"Zmeniť veľkosť výšky",labelSortRow:"Triediť riadok",labelSortRowAsc:"Triediť riadok vzostupne",labelSortRowDsc:"Triediť riadok zostupne",labelSortCol:"Triediť stĺpec",labelSortColAsc:"Triediť stĺpec vzostupne",labelSortColDsc:"Triediť stĺpec zostupne",labelCut:"Vystrihnúť",labelPaste:"Prilepiť",labelEnableNonContiguous:"Aktivovať nesúvislý výber",labelDisableNonContiguous:"Deaktivovať nesúvislý výber",labelResizeDialogSubmit:"OK"},"oj-ojRowExpander":{accessibleLevelDescription:"Úroveň {level}",accessibleRowDescription:"Úroveň {level}, riadok {num} z {total}",accessibleRowExpanded:"Rozbalený riadok",accessibleRowCollapsed:"Zbalený riadok",accessibleStateExpanded:"rozbalené",accessibleStateCollapsed:"zbalené"},"oj-ojListView":{msgFetchingData:"Vyvolávajú sa dáta...",msgNoData:"Neexistujú položky na zobrazenie.",msgItemsAppended:"Počet položiek pripojených na koniec: {count}.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleReorderTouchInstructionText:"Dvakrát ťuknite a podržte. Počkajte na zvukový signál a potom posunutím zmeňte poradie.",accessibleReorderBeforeItem:"Pred {item}",accessibleReorderAfterItem:"Po {item}",accessibleReorderInsideItem:"Dnu {item}",accessibleNavigateSkipItems:"Počet položiek, ktoré sa vynechajú: {numSkip}",labelCut:"Vystrihnúť",labelCopy:"Kopírovať",labelPaste:"Prilepiť",labelPasteBefore:"Prilepiť pred",labelPasteAfter:"Prilepiť za"},"oj-_ojLabel":{tooltipHelp:"Pomoc",tooltipRequired:"Povinné"},"oj-ojLabel":{tooltipHelp:"Pomoc",tooltipRequired:"Povinné"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Zníženie",tooltipIncrement:"Zvýšenie"},"oj-ojTable":{labelAccSelectionAffordanceTop:"Horná rukoväť výberu",labelAccSelectionAffordanceBottom:"Dolná rukoväť výberu",labelEnableNonContiguousSelection:"Aktivovať nesúvislý výber",labelDisableNonContiguousSelection:"Deaktivovať nesúvislý výber",labelResize:"Zmeniť veľkosť",labelResizePopupSubmit:"OK",labelResizePopupSpinner:"Zmeniť veľkosť stĺpca",labelSelectRow:"Vybrať riadok",labelEditRow:"Upraviť riadok",labelSelectAndEditRow:"Vybrať a upraviť riadok",labelSelectColumn:"Vybrať stĺpec",labelSort:"Triediť",labelSortAsc:"Triediť vzostupne",labelSortDsc:"Triediť zostupne",msgFetchingData:"Vyvolávajú sa dáta...",msgNoData:"Žiadne dáta na zobrazenie.",msgInitializing:"Inicializuje sa...",msgColumnResizeWidthValidation:"Hodnota šírky musí byť celé číslo.",msgScrollPolicyMaxCountSummary:"Prekročili ste maximálny počet riadkov pre posúvanie v tabuľke.",msgScrollPolicyMaxCountDetail:"Znova načítajte s menšou množinou dát.",msgStatusSortAscending:"{0} triedené vo vzostupnom poradí.",msgStatusSortDescending:"{0} triedené v zostupnom poradí."},"oj-ojTabs":{labelCut:"Vystrihnúť",labelPasteBefore:"Prilepiť pred",labelPasteAfter:"Prilepiť za",labelRemove:"Odstrániť",labelReorder:"Zmeniť poradie",removeCueText:"Odstrániteľné"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:""},searchField:"Pole vyhľadávania",noMatchesFound:"Nenašli sa žiadne zhody",oneMatchesFound:"Našla sa jedna zodpovedajúca hodnota",moreMatchesFound:"Nájdené zhody: {num}",filterFurther:"K dispozícii je viac výsledkov, použite ďalšie filtre."},"oj-ojSwitch":{SwitchON:"Zap.",SwitchOFF:"Vyp."},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Nenašli sa žiadne zhody",oneMatchesFound:"Našla sa jedna zodpovedajúca hodnota",moreMatchesFound:"Nájdené zhody: {num}",filterFurther:"K dispozícii je viac výsledkov, použite ďalšie filtre."},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Nenašli sa žiadne zhody",oneMatchesFound:"Našla sa jedna zodpovedajúca hodnota",moreMatchesFound:"Nájdené zhody: {num}"},"oj-ojTree":{stateLoading:"Načítava sa...",labelNewNode:"Nový uzol",labelMultiSelection:"Viacnásobný výber",labelEdit:"Upraviť",labelCreate:"Vytvoriť",labelCut:"Vystrihnúť",labelCopy:"Kopírovať",labelPaste:"Prilepiť",labelPasteAfter:"Prilepiť za",labelPasteBefore:"Prilepiť pred",labelRemove:"Odstrániť",labelRename:"Premenovať",labelNoData:"Žiadne dáta"},"oj-ojPagingControl":{labelAccPaging:"Stránkovanie",labelAccPageNumber:"Obsah stránky {pageNum} bol načítaný",labelAccNavFirstPage:"Prvá stránka",labelAccNavLastPage:"Posledná stránka",labelAccNavNextPage:"Nasledujúca stránka",labelAccNavPreviousPage:"Predchádzajúca stránka",labelAccNavPage:"Stránka",labelLoadMore:"Zobraziť ďalšie...",labelLoadMoreMaxRows:"Dosiahli ste maximálny limit {maxRows} riadkov",labelNavInputPage:"Stránka",labelNavInputPageMax:"z {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} z {pageMax} položiek",fullMsgItemRangeAtLeast:"{pageFrom} - {pageTo} z minimálne {pageMax} položiek",fullMsgItemRangeApprox:"{pageFrom} - {pageTo} z približne {pageMax} položiek",msgItemRangeNoTotal:"{pageFrom}-{pageTo} položiek",fullMsgItem:"{pageTo} z {pageMax} položiek",fullMsgItemAtLeast:"{pageTo} z minimálne {pageMax} položiek",fullMsgItemApprox:"{pageTo} z približne {pageMax} položiek",msgItemNoTotal:"{pageTo} položky",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"z",msgItemRangeOfAtLeast:"z najmenej",msgItemRangeOfApprox:"z približne",msgItemRangeItems:"položiek",tipNavInputPage:"Prejsť na stránku",tipNavPageLink:"Prejsť na stránku {pageNum}",tipNavNextPage:"Nasledujúca",tipNavPreviousPage:"Predchádzajúca",tipNavFirstPage:"Prvá",tipNavLastPage:"Posledná",pageInvalid:{summary:"Zadaná hodnota stránky je neplatná.",detail:"Zadajte hodnotu väčšiu ako 0."},maxPageLinksInvalid:{summary:"Hodnota pre voľbu maxPageLinks je neplatná.",detail:"Zadajte hodnotu väčšiu ako 4."}},"oj-ojMasonryLayout":{labelCut:"Vystrihnúť",labelPasteBefore:"Prilepiť pred",labelPasteAfter:"Prilepiť za"},"oj-panel":{labelAccButtonExpand:"Rozbaliť",labelAccButtonCollapse:"Zbaliť",labelAccButtonRemove:"Odstrániť",labelAccFlipForward:"Prevrátiť dopredu",labelAccFlipBack:"Prevrátiť späť",tipDragToReorder:"Presunutím zmeniť poradie",labelAccDragToReorder:"Presunutím zmeniť poradie, kontextová ponuka dostupná"},"oj-ojChart":{labelDefaultGroupName:"Skupina {0}",labelSeries:"Séria",labelGroup:"Skupina",labelDate:"Dátum",labelValue:"Hodnota",labelTargetValue:"Cieľ",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Percento",labelLow:"Minimum",labelHigh:"Maximum",labelOpen:"Otvorenie",labelClose:"Záver",labelVolume:"Objem",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Min.",labelMax:"Max.",labelOther:"Iné",tooltipPan:"Posunutie",tooltipSelect:"Pohybujúci sa text - výber",tooltipZoom:"Pohybujúci sa text - priblíženie",componentName:"Graf"},"oj-dvtBaseGauge":{componentName:"Merač"},"oj-ojDiagram":{promotedLink:"Prepojenie {0}",promotedLinks:"Prepojenia {0}",promotedLinkAriaDesc:"Nepriame",componentName:"Diagram"},"oj-ojGantt":{componentName:"Ganttov diagram",accessibleDurationDays:"{0} d.",accessibleDurationHours:"{0} h",accessibleTaskInfo:"Počiatočný čas je {0}, koncový čas je {1}, trvanie je {2}",accessibleMilestoneInfo:"Čas je {0}",accessibleRowInfo:"Riadok {0}",accessibleTaskTypeMilestone:"Kľúčová udalosť",accessibleTaskTypeSummary:"Súhrn",accessiblePredecessorInfo:"Predchodcovia {0}",accessibleSuccessorInfo:"Následníci {0}",accessibleDependencyInfo:"Typ závislosti {0}, spája {1} k {2}",startStartDependencyAriaDesc:"začiatok - začiatok",startFinishDependencyAriaDesc:"začiatok - koniec",finishStartDependencyAriaDesc:"koniec - začiatok",finishFinishDependencyAriaDesc:"koniec - koniec",tooltipZoomIn:"Priblížiť",tooltipZoomOut:"Oddialiť",labelLevel:"Úroveň",labelRow:"Riadok",labelStart:"Začiatok",labelEnd:"Koniec",labelDate:"Dátum",labelBaselineStart:"Autorizovaný začiatok",labelBaselineEnd:"Autorizovaný koniec",labelBaselineDate:"Autorizovaný dátum",labelLabel:"Návesť",labelProgress:"Priebeh",labelMoveBy:"Presunúť o",labelResizeBy:"Zmeniť veľkosť o",taskMoveInitiated:"Presun úlohy bol spustený",taskResizeEndInitiated:"Koniec zmeny veľkosti úlohy bol spustený",taskResizeStartInitiated:"Začiatok zmeny veľkosti úlohy bol spustený",taskMoveSelectionInfo:"Ďalšie vybrané: {0}",taskResizeSelectionInfo:"Ďalšie vybrané: {0}",taskMoveInitiatedInstruction:"Na presun použite klávesy so šípkami",taskResizeInitiatedInstruction:"Na zmenu veľkosti použite klávesy so šípkami",taskMoveFinalized:"Presun úlohy bol dokončený",taskResizeFinalized:"Zmena veľkosti úlohy bola dokončená",taskMoveCancelled:"Presun úlohy bol zrušený",taskResizeCancelled:"Zmena veľkosti úlohy bola zrušená",taskResizeStartHandle:"Popisovač začiatku zmeny veľkosti úlohy",taskResizeEndHandle:"Popisovač konca zmeny veľkosti úlohy"},"oj-ojLegend":{componentName:"Legenda",tooltipExpand:"Rozbaliť",tooltipCollapse:"Zbaliť"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Iné",labelGroup:"Skupina",labelSize:"Veľkosť",labelAdditionalData:"Ďalšie údaje",componentName:"Políčko {0}"},"oj-ojPictoChart":{componentName:"Obrázkový graf"},"oj-ojSparkChart":{componentName:"Graf"},"oj-ojSunburst":{labelColor:"Farba",labelSize:"Veľkosť",tooltipExpand:"Rozbaliť",tooltipCollapse:"Zbaliť",componentName:"Viacúrovňový koláčový graf"},"oj-ojTagCloud":{componentName:"Mračno značiek"},"oj-ojThematicMap":{componentName:"Tematická mapa",areasRegion:"Oblasti",linksRegion:"Prepojenia",markersRegion:"Markery"},"oj-ojTimeAxis":{componentName:"Časová os"},"oj-ojTimeline":{componentName:"Časová os",accessibleItemDesc:"Popis je {0}.",accessibleItemEnd:"Koncový čas je {0}.",accessibleItemStart:"Počiatočný čas je {0}.",accessibleItemTitle:"Názov je {0}.",labelSeries:"Séria",tooltipZoomIn:"Priblížiť",tooltipZoomOut:"Oddialiť",labelStart:"Začiatok",labelEnd:"Koniec",labelDate:"Dátum",labelTitle:"Nadpis",labelDescription:"Popis"},"oj-ojTreemap":{labelColor:"Farba",labelSize:"Veľkosť",tooltipIsolate:"Izolovať",tooltipRestore:"Obnoviť",componentName:"Treemap"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"tis.",labelScalingSuffixMillion:"mil.",labelScalingSuffixBillion:"mld.",labelScalingSuffixTrillion:"tril.",labelScalingSuffixQuadrillion:"kvad.",labelInvalidData:"Neplatné dáta",labelNoData:"Žiadne dáta na zobrazenie",labelClearSelection:"Vymazať výber",labelDataVisualization:"Vizualizácia dát",stateSelected:"Vybrané",stateUnselected:"Nevybrané",stateMaximized:"Maximalizované",stateMinimized:"Minimalizované",stateExpanded:"Rozbalené",stateCollapsed:"Zbalené",stateIsolated:"Izolované",stateHidden:"Skryté",stateVisible:"Viditeľné",stateDrillable:"Možno použiť funkciu prechodu",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} z {1}"},"oj-ojNavigationList":{defaultRootLabel:"Navigačný zoznam",hierMenuBtnLabel:"Tlačidlo hierarchickej ponuky",selectedLabel:"vybrané",previousIcon:"Predchádzajúca",msgFetchingData:"Vyvolávajú sa dáta...",msgNoData:"Neexistujú položky na zobrazenie.",overflowItemLabel:"Ďalšie",accessibleReorderTouchInstructionText:"Dvakrát ťuknite a podržte. Počkajte na zvukový signál a potom posunutím zmeňte poradie.",accessibleReorderBeforeItem:"Pred {item}",accessibleReorderAfterItem:"Po {item}",labelCut:"Vystrihnúť",labelPasteBefore:"Prilepiť pred",labelPasteAfter:"Prilepiť za",labelRemove:"Odstrániť",removeCueText:"Odstrániteľné"},"oj-ojSlider":{noValue:"ojSlider nemá žiadnu hodnotu",maxMin:"Maximum nesmie byť menšie ani rovnaké ako minimum",valueRange:"Hodnota musí byť v rozsahu minimálnej a maximálnej hodnoty",optionNum:"Voľba {option} nie je číslo",invalidStep:"Neplatný krok; krok musí byť > 0"},"oj-ojDialog":{labelCloseIcon:"Záver"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Vstupujete do rozbaľovacieho okna. Na navigáciu medzi rozbaľovacím oknom a súvisiacim ovládacím prvkom stlačte kláves F6.",ariaLiveRegionInitialFocusNone:"Otvorilo sa rozbaľovacie okno. Na navigáciu medzi rozbaľovacím oknom a súvisiacim ovládacím prvkom stlačte kláves F6.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Vstupujete do rozbaľovacieho okna. Rozbaľovacie okno môžete zavrieť prechodom na posledné prepojenie v rozbaľovacom okne.",ariaLiveRegionInitialFocusNoneTouch:"Otvorilo sa rozbaľovacie okno. Prejdite na posledné prepojenie na vytvorenie aktivácie v rozbaľovacom okne.",ariaFocusSkipLink:"Dvojitým ťuknutím prejdite do otvoreného rozbaľovacieho okna.",ariaCloseSkipLink:"Dvojitým ťuknutím zavrite otvorené rozbaľovacie okno."},"oj-ojRefresher":{ariaRefreshLink:"Aktivujte prepojenie na obnovenie obsahu",ariaRefreshingLink:"Obnovuje sa obsah",ariaRefreshCompleteLink:"Obnovenie dokončené"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Zobraziť počiatočné akcie",ariaShowEndActionsDescription:"Zobraziť koncové akcie",ariaHideActionsDescription:"Skryť akcie"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"Žiadna zhodná hlavička skupiny",ariaOthersLabel:"číslo",ariaInBetweenText:"Medzi {first} a {second}",ariaKeyboardInstructionText:"Stlačte kláves Enter a vyberte hodnotu.",ariaTouchInstructionText:"Dvakrát ťuknite a podržte na zadanie režimu gest, potom posunutím nahor alebo nadol upravte hodnotu."},"oj-ojMenu":{labelCancel:"Zrušiť",ariaFocusSkipLink:"Máte aktívnu ponuku, dvakrát ťuknite alebo potiahnite prstom a presuňte sa na prvú položku v ponuke."},"oj-ojColorSpectrum":{labelHue:"Odtieň",labelOpacity:"Nepriehľadnosť",labelSatLum:"Sýtosť/Svetelnosť",labelThumbDesc:"Jazdec farebného spektra na posúvanie 4 smermi."},"oj-ojColorPalette":{labelNone:"Žiadne"},"oj-ojColorPicker":{labelSwatches:"Vzorkovnice farieb",labelCustomColors:"Vlastné farby",labelPrevColor:"Predchádzajúca farba",labelDefColor:"Predvolená farba",labelDelete:"Odstrániť",labelDeleteQ:"Odstrániť?",labelAdd:"Pridať",labelAddColor:"Pridať farbu",labelMenuHex:"HEX",labelMenuRgba:"RGBA",labelMenuHsla:"HSLA",labelSliderHue:"Odtieň",labelSliderSaturation:"Sýtosť",labelSliderSat:"Sýtosť",labelSliderLightness:"Svetlosť",labelSliderLum:"Jas",labelSliderAlpha:"Alfa",labelOpacity:"Nepriehľadnosť",labelSliderRed:"Červená",labelSliderGreen:"Zelená",labelSliderBlue:"Modrá"},"oj-ojFilePicker":{dropzoneText:"Súbory presuňte sem alebo kliknite a nahrajte"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"Prebieha"},"oj-ojMessage":{labelCloseIcon:"Záver",categories:{error:"Chyba ",warning:"Upozornenie",info:"Informácie",confirmation:"Potvrdenie"}},"oj-ojMessages":{labelLandmark:"Správy",ariaLiveRegion:{navigationFromKeyboard:"Vstupujete do oblasti správ. Stlačte kláves F6, ak sa chcete vrátiť na predchádzajúci aktívny prvok.",navigationToTouch:"Oblasť správ obsahuje nové správy. Použite rotor VoiceOver na prechod na orientačný bod správ.",navigationToKeyboard:"Oblasť správ obsahuje nové správy.  Stlačením klávesu F6 prejdete do oblasti s najnovšou správou.",newMessage:"Kategória správ {category}. {summary}."}}});