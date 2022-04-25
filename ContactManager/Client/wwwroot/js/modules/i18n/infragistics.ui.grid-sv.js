/*!@license
* Infragistics.Web.ClientUI Grid localization resources 21.2.13
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.sv=$.ig.locale.sv||{};$.ig.Grid=$.ig.Grid||{};$.ig.locale.sv.Grid={noSuchWidget:"{featureName} k\xe4ndes inte igen. Kontrollera att en s\xe5dan funktion finns och att stavningen \xe4r korrekt.",autoGenerateColumnsNoRecords:"autoGenerateColumns \xe4r aktiverat, men det finns inga poster i datak\xe4llan. Ladda en datak\xe4lla med poster f\xf6r att kunna best\xe4mma kolumnerna.",optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",optionChangeNotScrollingGrid:"{optionName} kan inte redigeras efter initialisering eftersom ditt rutn\xe4t initialt inte rullar och fullst\xe4ndig \xe5tergivning kr\xe4vs. Det h\xe4r alternativet ska st\xe4llas in under initialiseringen.",widthChangeFromPixelsToPercentagesNotSupported:"Det g\xe5r inte att \xe4ndra rutn\xe4tets alternativbredd dynamiskt fr\xe5n pixlar till procentandelar.",widthChangeFromPercentagesToPixelsNotSupported:"Det g\xe5r inte att \xe4ndra rutn\xe4tets alternativbredd dynamiskt fr\xe5n procent till pixlar.",noPrimaryKeyDefined:"Det finns ingen prim\xe4r nyckel definierad f\xf6r rutn\xe4tet. Definiera en prim\xe4r nyckel f\xf6r att anv\xe4nda funktioner som Grid Editing.",indexOutOfRange:"Det angivna radindexet ligger utanf\xf6r intervallet. Ett radindex mellan 0 och {max} ska anges.",noSuchColumnDefined:"Den angivna kolumnnyckeln \xe4r inte giltig. En kolumnyckel som matchar nyckeln till en av de definierade rutn\xe4tkolumnerna ska tillhandah\xe5llas.",columnIndexOutOfRange:"Det angivna kolumnindexet \xe4r utanf\xf6r intervallet. Ett kolumnindex mellan 0 och {max} ska anges.",recordNotFound:"En post med id {id} kunde inte hittas i datavyn. Verifiera id som anv\xe4nds f\xf6r s\xf6kningen och justera det vid behov.",columnNotFound:"En kolumn med nyckel {key} kunde inte hittas. Verifiera nyckeln som anv\xe4nds f\xf6r s\xf6kningen och justera den vid behov.",colPrefix:"Kolumn ",columnVirtualizationRequiresWidth:"Virtualisering och kolumnVirtualisering kr\xe4ver att rutn\xe4tets bredd eller dess kolumner ska st\xe4llas in. Ange ett v\xe4rde f\xf6r rutn\xe4tets bredd, defaultColumnWidth eller bredden f\xf6r varje kolumn.",virtualizationRequiresHeight:"Virtualisering kr\xe4ver att h\xf6jden p\xe5 rutn\xe4tet ska st\xe4llas in. Ett v\xe4rde f\xf6r n\xe4th\xf6jden b\xf6r anges.",colVirtualizationDenied:"columnVirtualization kr\xe4ver en annan inst\xe4llning f\xf6r virtualizationMode. VirtualizationMode ska st\xe4llas in p\xe5 'fixed'.",noColumnsButAutoGenerateTrue:"autoGenerateColumns \xe4r inaktiverat och inga kolumner har definierats f\xf6r rutn\xe4tet. Antingen aktivera autoGenerateColumn eller ange kolumnerna manuellt.",expandTooltip:"Expandera rad",collapseTooltip:"D\xf6lj rad",movingNotAllowedOrIncompatible:"Den angivna kolumnen kunde inte flyttas. Kontrollera att en s\xe5dan kolumn finns och att dess slutposition inte skulle bryta kolumnlayouten.",allColumnsHiddenOnInitialization:"Alla kolumner kan inte d\xf6ljas under initialiseringen. Minst en kolumn ska konfigureras som synlig.",virtualizationNotSupportedWithAutoSizeCols:"Virtualisering kr\xe4ver en annan kolumnbreddskonfiguration \xe4n '*'. Kolumnbredden ska st\xe4llas in som ett antal i pixlar.",columnVirtualizationNotSupportedWithPercentageWidth:"Kolumnvirtualisering kr\xe4ver en annan konfiguration f\xf6r rutn\xe4tbredd. Kolumnbredden ska st\xe4llas in som ett antal i pixlar.",mixedWidthsNotSupported:"Alla kolumner m\xe5ste ha sin bredd inst\xe4lld p\xe5 samma s\xe4tt. St\xe4ll in alla kolumnbredder antingen som procent eller som antal i pixlar.",multiRowLayoutColumnError:"Kolumnen med nyckel: {key1} kunde inte l\xe4ggas till i Multi-Row Layout eftersom dess plats i layouten redan har tagits av kolumnen med key: {key2}.",multiRowLayoutNotComplete:"Multi-Row Layout \xe4r inte komplett. Kolumndefinitionen skapar en layout som har tomma utrymmen och som inte kan renderas korrekt.",multiRowLayoutMixedWidths:"Blandade bredder (procent och pixlar) st\xf6ds inte i Multi-Row Layout. Definiera alla kolumnbredder i antingen pixlar eller procent. ",multiRowLayoutHidingNotSupported:"Multi-Row Layout st\xf6der inte dolda kolumner. Ta bort dolda kolumner fr\xe5n kolumndefinitionerna.",scrollableGridAreaNotVisible:"De fasta sidhuvuds- och sidfotsytorna \xe4r st\xf6rre \xe4n det tillg\xe4ngliga rutn\xe4tets h\xf6jd. Det skrollbara omr\xe5det syns inte. St\xe4ll in en st\xf6rre rutn\xe4th\xf6jd.",featureNotSupportedWithMRL:"{featureName} st\xf6ds inte med Layout f\xf6r flera rader. Ta bort funktionen fr\xe5n funktionslistan.",editorTypeCannotBeDetermined:"Uppdatering hade inte tillr\xe4ckligt med information f\xf6r att korrekt avg\xf6ra vilken typ av redigerare som ska anv\xe4ndas f\xf6r kolumn: "};$.ig.HierarchicalGrid=$.ig.HierarchicalGrid||{};$.ig.locale.sv.HierarchicalGrid={noPrimaryKey:"igHierarchicalGrid kr\xe4ver att en prim\xe4r nyckel definieras. En prim\xe4r nyckel b\xf6r tillhandah\xe5llas.",expandTooltip:"Expandera rad",collapseTooltip:"D\xf6lj rad"};$.ig.GridFeatureChooser=$.ig.GridFeatureChooser||{};$.ig.locale.sv.GridFeatureChooser={featureChooserTooltip:"Funktionsv\xe4ljare"};$.ig.GridFiltering=$.ig.GridFiltering||{};$.ig.locale.sv.GridFiltering={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",startsWithNullText:"B\xf6rjar med...",endsWithNullText:"Slutar med...",containsNullText:"Inneh\xe5ller...",doesNotContainNullText:"Inneh\xe5ller inte...",equalsNullText:"\xc4r lika med...",doesNotEqualNullText:"\xc4r inte lika med...",greaterThanNullText:"St\xf6rre \xe4n...",lessThanNullText:"Mindre \xe4n...",greaterThanOrEqualToNullText:"St\xf6rre \xe4n eller lika med...",lessThanOrEqualToNullText:"Mindre \xe4n eller lika med...",onNullText:"P\xe5...",notOnNullText:"Inte p\xe5...",afterNullText:"Efter",beforeNullText:"Innan",emptyNullText:"Tom",notEmptyNullText:"Inte tom",nullNullText:"Null",notNullNullText:"Inte null",emptyLabel:"Tom",notEmptyLabel:"Inte tom",nullLabel:"Null",notNullLabel:"Inte null",startsWithLabel:"B\xf6rjar med",endsWithLabel:"Slutar med",containsLabel:"Inneh\xe5ller",doesNotContainLabel:"Inneh\xe5ller inte",equalsLabel:"\xc4r lika med",doesNotEqualLabel:"\xc4r inte lika med",greaterThanLabel:"St\xf6rre \xe4n",lessThanLabel:"Mindre \xe4n",greaterThanOrEqualToLabel:"St\xf6rre \xe4n eller lika med",lessThanOrEqualToLabel:"Mindre \xe4n eller lika med",trueLabel:"True",falseLabel:"False",afterLabel:"Efter",beforeLabel:"Innan",todayLabel:"I dag",yesterdayLabel:"I g\xe5r",thisMonthLabel:"Den h\xe4r m\xe5naden",lastMonthLabel:"F\xf6rra m\xe5naden",nextMonthLabel:"N\xe4sta m\xe5nad",thisYearLabel:"Det h\xe4r \xe5ret",lastYearLabel:"F\xf6rra \xe5ret",nextYearLabel:"N\xe4sta \xe5r",atLabel:"Vid",atNullText:"P\xe5...",notAtLabel:"Inte vid",notAtNullText:"Inte vid...",atBeforeLabel:"Vid eller f\xf6re",atBeforeNullText:"Vid eller f\xf6re ...",atAfterLabel:"Vid eller efter",atAfterNullText:"Vid eller efter ...",clearLabel:"Rensa filtret",noFilterLabel:"Nej",onLabel:"\ufeffP\xe5",notOnLabel:"Inte p\xe5",advancedButtonLabel:"Avancerad",filterDialogCaptionLabel:"Avancerat filter",filterDialogConditionLabel1:"Visa matchande uppgifter ",filterDialogConditionLabel2:" av f\xf6ljande kriterier",filterDialogConditionDropDownLabel:"Filtreringsvillkor",filterDialogOkLabel:"S\xf6k",filterDialogCancelLabel:"Avbryt",filterDialogAnyLabel:"SAMTLIGA",filterDialogAllLabel:"ALLT",filterDialogAddLabel:"L\xe4gg till",filterDialogErrorLabel:"Du n\xe5dde det maximala antalet filter som st\xf6ds.",filterDialogCloseLabel:"St\xe4ng filtreringsdialogrutan",filterSummaryTitleLabel:"S\xf6kresultat",filterSummaryTemplate:"${matches} matchande uppgifter",filterDialogClearAllLabel:"Rensa alla",tooltipTemplate:"${condition} -filter till\xe4mpat",featureChooserText:"D\xf6lj filter",featureChooserTextHide:"Visa filter",featureChooserTextAdvancedFilter:"Avancerat filter",virtualizationSimpleFilteringNotAllowed:"Kolumnvirtualisering kr\xe4ver en annan typ av filtrering. St\xe4ll in filtreringsl\xe4ge p\xe5 'advanced' eller inaktivera advancedModeEditorsVisible",multiRowLayoutSimpleFilteringNotAllowed:"Multi-Row Layout kr\xe4ver en annan typ av filtrering. St\xe4ll in filtreringsl\xe4ge p\xe5 'advanced'",featureChooserNotReferenced:"En referens till Feature Chooser saknas. Inkludera infragistics.ui.grid.featurechooser.js i ditt projekt, anv\xe4nd en laddare eller n\xe5gon av de kombinerade skriptfilerna.",conditionListLengthCannotBeZero:"Arrayen conditionList i columnSettings \xe4r tom. En l\xe4mplig matris f\xf6r conditionList b\xf6r tillhandah\xe5llas.",conditionNotValidForColumnType:"Villkoret '{0}' \xe4r inte giltigt f\xf6r den aktuella konfigurationen. Det b\xf6r ers\xe4ttas med ett villkor som \xe4r l\xe4mpligt f\xf6r kolumntypen {1}.",defaultConditionContainsInvalidCondition:"defaultExpression f\xf6r kolumnen '{0}' inneh\xe5ller ett villkor som inte \xe4r till\xe5tet. Det b\xf6r ers\xe4ttas med ett villkor som \xe4r l\xe4mpligt f\xf6r kolumntypen {0}.",initialConditionIsNotInTheConditionsListArrayOrIsNotInTheDefaultConditions:"Det ursprungliga villkoret i kolumninst\xe4llningarna f\xf6r kolumnen '{0}' kommer inte fr\xe5n standard (eller anpassade villkor) eller \xe4r inte tillg\xe4ngligt i arrayen conditionList i columnSettings. Anv\xe4nd ett giltigt villkor."};$.ig.GridGroupBy=$.ig.GridGroupBy||{};$.ig.locale.sv.GridGroupBy={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",emptyGroupByAreaContent:"Dra en kolumn hit eller {0} till Gruppera efter",emptyGroupByAreaContentSelectColumns:"v\xe4lj kolumner",emptyGroupByAreaContentSelectColumnsCaption:"v\xe4lj kolumner",expandTooltip:"Expandera grupperad rad",collapseTooltip:"D\xf6lj grupperad rad",removeButtonTooltip:"Ta bort grupperad kolumn",modalDialogCaptionButtonDesc:"Sortera stigande",modalDialogCaptionButtonAsc:"Sortera fallande",modalDialogCaptionButtonUngroup:"Avgruppera",modalDialogGroupByButtonText:"Gruppera Efter",modalDialogCaptionText:"L\xe4gg till i Gruppera Efter",modalDialogDropDownLabel:"Som visar:",modalDialogClearAllButtonLabel:"Rensa ALLT",modalDialogRootLevelHierarchicalGrid:"Rot",modalDialogDropDownButtonCaption:"Visa/G\xf6mma",modalDialogButtonApplyText:"Till\xe4mpa",modalDialogButtonCancelText:"Avbryt",fixedVirualizationNotSupported:"Group By kr\xe4ver en annan virtualiseringsinst\xe4llning. VirtualizationMode ska st\xe4llas in p\xe5 'continuous'.",summaryRowTitle:"Grupperingssammanfattningsrad",summaryIconTitle:"Sammanfattning f\xf6r {0}: {1}"};$.ig.GridHiding=$.ig.GridHiding||{};$.ig.locale.sv.GridHiding={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",columnChooserDisplayText:"Kolumnv\xe4ljare",hiddenColumnIndicatorTooltipText:"Dolda kolumner",columnHideText:"D\xf6lj",columnChooserCaptionLabel:"Kolumnv\xe4ljare",columnChooserCloseButtonTooltip:"St\xe4ng",hideColumnIconTooltip:"D\xf6lj",featureChooserNotReferenced:"En referens till Feature Chooser saknas. Inkludera infragistics.ui.grid.featurechooser.js i ditt projekt eller anv\xe4nd en av de kombinerade skriptfilerna.",columnChooserShowText:"Visa",columnChooserHideText:"D\xf6lj",columnChooserResetButtonLabel:"\xc5terst\xe4ll",columnChooserButtonApplyText:"Till\xe4mpa",columnChooserButtonCancelText:"Avbryt"};$.ig.GridResizing=$.ig.GridResizing||{};$.ig.locale.sv.GridResizing={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",noSuchVisibleColumn:"Det finns ingen synlig kolumn f\xf6r den angivna nyckeln. Metoden showColumn() ska anv\xe4ndas p\xe5 kolumnen innan du f\xf6rs\xf6ker \xe4ndra storlek p\xe5 den.",resizingAndFixedVirtualizationNotSupported:"Att \xe4ndra storlek p\xe5 kolumner kr\xe4ver en annan virtualiseringsinst\xe4llning. Anv\xe4nd rowVirtualization och st\xe4ll virtualizationMode till 'continuous'."};$.ig.GridPaging=$.ig.GridPaging||{};$.ig.locale.sv.GridPaging={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",pageSizeDropDownLabel:"Visa ",pageSizeDropDownTrailingLabel:"uppgifter",nextPageLabelText:"N\xe4sta",prevPageLabelText:"F\xf6reg\xe5ende",firstPageLabelText:"",lastPageLabelText:"",currentPageDropDownLeadingLabel:"Sid",currentPageDropDownTrailingLabel:"av ${count}",currentPageDropDownTooltip:"V\xe4lj sidindex",pageSizeDropDownTooltip:"V\xe4lj antal poster per sida",pagerRecordsLabelTooltip:"Nuvarande registerintervall",prevPageTooltip:"F\xf6reg\xe5ende sida",nextPageTooltip:"N\xe4sta sida",firstPageTooltip:"F\xf6rsta sidan",lastPageTooltip:"Sista sidan",pageTooltipFormat:"Sida ${index}",pagerRecordsLabelTemplate:"${startRecord} - ${endRecord} av ${recordCount} uppgifter",invalidPageIndex:"Det angivna sidindexet \xe4r inte giltigt. Ange ett sidindex som \xe4r st\xf6rre \xe4n eller lika med 0 och mindre \xe4n det totala antalet sidor."};$.ig.GridSelection=$.ig.GridSelection||{};$.ig.locale.sv.GridSelection={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",persistenceImpossible:"Best\xe5ende val kr\xe4ver en annan konfiguration. Det prim\xe4ra nyckelalternativet f\xf6r rutn\xe4tet ska konfigureras."};$.ig.GridRowSelectors=$.ig.GridRowSelectors||{};$.ig.locale.sv.GridRowSelectors={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",selectionNotLoaded:"igGridSelection har inte initierats. Val b\xf6r vara aktiverat f\xf6r rutn\xe4tet.",columnVirtualizationEnabled:"Radv\xe4ljare kr\xe4ver en annan virtualiseringsinst\xe4llning. Anv\xe4nd rowVirtualization eller st\xe4ll virtualizationMode till 'continuous'.",selectedRecordsText:"Du har valt ${kontrollerat} poster.",deselectedRecordsText:"Du har avmarkerat ${unchecked} poster.",selectAllText:"V\xe4lj alla ${totalRecordsCount} -poster",deselectAllText:"Avmarkera alla ${totalRecordsCount} -poster",requireSelectionWithCheckboxes:"Markering kr\xe4vs n\xe4r det finns kryssrutor aktiverade"};$.ig.GridSorting=$.ig.GridSorting||{};$.ig.locale.sv.GridSorting={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",sortedColumnTooltip:"Sorterat ${riktning}",unsortedColumnTooltip:"Sortera kolumn",ascending:"stigande",descending:"fallande",modalDialogSortByButtonText:"Sortera efter",modalDialogResetButton:"\xc5terst\xe4ll",modalDialogCaptionButtonDesc:"Klicka f\xf6r att sortera fallande",modalDialogCaptionButtonAsc:"Klicka f\xf6r att sortera stigande",modalDialogCaptionButtonUnsort:"Klicka f\xf6r att ta bort sortering",featureChooserText:"Sortera p\xe5 flera",modalDialogCaptionText:"Sortera p\xe5 flera",modalDialogButtonApplyText:"Till\xe4mpa",modalDialogButtonCancelText:"Avbryt",sortingHiddenColumnNotSupport:"Den angivna kolumnen kunde inte sorteras eftersom den \xe4r dold. Anv\xe4nd showColumn() -metoden p\xe5 den innan du f\xf6rs\xf6ker sortera den.",featureChooserSortAsc:"Sortera stigande",featureChooserSortDesc:"Sortera fallande"};$.ig.GridSummaries=$.ig.GridSummaries||{};$.ig.locale.sv.GridSummaries={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",featureChooserText:"D\xf6lj sammanfattningar",featureChooserTextHide:"Visa sammanfattningar",dialogButtonOKText:"OK",dialogButtonCancelText:"Avbryt",emptyCellText:"",summariesHeaderButtonTooltip:"Visa/d\xf6lj sammanfattningar",defaultSummaryRowDisplayLabelCount:"R\xe4kna",defaultSummaryRowDisplayLabelMin:"Min",defaultSummaryRowDisplayLabelMax:"Max",defaultSummaryRowDisplayLabelSum:"Summa",defaultSummaryRowDisplayLabelAvg:"Genomsnitt",defaultSummaryRowDisplayLabelCustom:"Anpassad",calculateSummaryColumnKeyNotSpecified:"Kolumnnyckel saknas. En kolumnyckel b\xf6r anges f\xf6r att ber\xe4kna sammanfattningar.",featureChooserNotReferenced:"En h\xe4nvisning till Feature Chooser saknas. Inkludera infragistics.ui.grid.featurechooser.js i ditt projekt eller anv\xe4nd en av de kombinerade skriptfilerna."};$.ig.GridUpdating=$.ig.GridUpdating||{};$.ig.locale.sv.GridUpdating={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",doneLabel:"F\xe4rdig",doneTooltip:"Sluta redigera och uppdatera",cancelLabel:"Avbryt",cancelTooltip:"Sluta redigera utan att uppdatera",addRowLabel:"L\xe4gg till ny rad",addRowTooltip:"B\xf6rja l\xe4gga till en ny rad",deleteRowLabel:"Radera rad",deleteRowTooltip:"Radera rad",igTextEditorException:"Det \xe4r f\xf6r n\xe4rvarande inte m\xf6jligt att uppdatera str\xe4ngkolumner i rutn\xe4tet. ui.igTextEditor b\xf6r laddas f\xf6rst.",igNumericEditorException:"Det \xe4r f\xf6r n\xe4rvarande inte m\xf6jligt att uppdatera numeriska kolumner i rutn\xe4tet. ui.igNumericEditor b\xf6r laddas f\xf6rst.",igCheckboxEditorException:"Det \xe4r f\xf6r n\xe4rvarande inte m\xf6jligt att uppdatera kryssrutkolumner i rutn\xe4tet. ui.igCheckboxEditor b\xf6r laddas f\xf6rst.",igCurrencyEditorException:"Det \xe4r f\xf6r n\xe4rvarande inte m\xf6jligt att uppdatera numeriska kolumner med valutaformat i rutn\xe4tet. ui.igCurrencyEditor b\xf6r laddas f\xf6rst.",igPercentEditorException:"Det \xe4r f\xf6r n\xe4rvarande inte m\xf6jligt att uppdatera numeriska kolumner med procentformat i rutn\xe4tet. ui.igPercentEditor b\xf6r laddas f\xf6rst.",igDateEditorException:"Det \xe4r f\xf6r n\xe4rvarande inte m\xf6jligt att uppdatera datumkolumner i rutn\xe4tet. ui.igDateEditor b\xf6r laddas f\xf6rst.",igDatePickerException:"Det \xe4r f\xf6r n\xe4rvarande inte m\xf6jligt att uppdatera datumkolumner i rutn\xe4tet. ui.igDatePicker b\xf6r laddas f\xf6rst.",igTimePickerException:"Det \xe4r f\xf6r n\xe4rvarande inte m\xf6jligt att uppdatera datumkolumner i rutn\xe4tet. ui.igTimePicker b\xf6r laddas f\xf6rst.",igComboException:"Det \xe4r f\xf6r n\xe4rvarande inte m\xf6jligt att anv\xe4nda en kombination i rutn\xe4tet. ui.igCombo b\xf6r laddas f\xf6rst.",igRatingException:"Det \xe4r f\xf6r n\xe4rvarande inte m\xf6jligt att anv\xe4nda igRating som redigerare i rutn\xe4tet. ui.igRating b\xf6r laddas f\xf6rst.",igValidatorException:"Det \xe4r f\xf6r n\xe4rvarande inte m\xf6jligt att st\xf6dja validering med de alternativ som definierats i igGridUpdating. ui.igValidator b\xf6r laddas f\xf6rst.",noPrimaryKeyException:"F\xf6r att st\xf6dja uppdaterings\xe5tg\xe4rder efter att en rad har tagits bort, b\xf6r applikationen definiera prim\xe4rnyckel i alternativ f\xf6r igGrid.",hiddenColumnValidationException:"Det g\xe5r inte att redigera en rad som har en dold kolumn med aktiverad validering.",dataDirtyException:"Rutn\xe4tet har v\xe4ntande transaktioner som kan p\xe5verka renderingen av data. F\xf6r att f\xf6rhindra undantag kan applikationen aktivera autoCommit-alternativet f\xf6r igGrid, eller s\xe5 b\xf6r den behandla dataDirty-h\xe4ndelsen av igGridUpdating och returnera falskt. Under bearbetningen av den h\xe4ndelsen kan applikationen ocks\xe5 utf\xf6ra commit() data i igGrid.",recordOrPropertyNotFoundException:"Den angivna posten eller egenskapen hittades inte. Kontrollera kriterierna f\xf6r din s\xf6kning och justera dem vid behov.",rowUpdatingNotSupportedWithColumnVirtualization:'Uppdatering med editMode: "row" kr\xe4ver olika konfigurationer. columnVirtualization b\xf6r inaktiveras.',rowEditDialogCaptionLabel:"Redigera raddata",excelNavigationNotSupportedWithCurrentEditMode:"Excel Navigation kr\xe4ver en annan konfiguration. editMode ska st\xe4llas in p\xe5 'cell' eller 'row'",columnNotFound:"Den angivna kolumnnyckeln hittades inte i de synliga kolumnernas samling eller s\xe5 var det angivna indexet utanf\xf6r intervallet.",rowOrColumnSpecifiedOutOfView:"Redigering av den angivna raden eller kolumnen \xe4r f\xf6r n\xe4rvarande inte m\xf6jligt. Det b\xf6r visas p\xe5 den aktuella sidan och virtualiseringsramen.",editingInProgress:"En rad eller cell redigeras f\xf6r n\xe4rvarande. En annan uppdateringsprocedur kan inte starta innan den aktuella redigeringen \xe4r klar.",undefinedCellValue:"Odefinierad kan inte st\xe4llas in som ett cellv\xe4rde.",addChildTooltip:"L\xe4gg till en underordnad rad",multiRowGridNotSupportedWithCurrentEditMode:"N\xe4r n\xe4tet har Multi-Row Layout aktiverad st\xf6ds endast dialogredigeringsl\xe4ge.",virtualizationNotSupportedWithoutAutoCommit:" Aktivering av uppdatering och virtualisering medan autoCommit \xe4r inst\xe4llt p\xe5 falskt st\xf6ds inte. St\xe4ll in rutans autoCommit-alternativ till true."};$.ig.CellMerging=$.ig.CellMerging||{};$.ig.locale.sv.CellMerging={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",mergeStrategyNotAFunction:"Den angivna mergeStrategy k\xe4nns inte igen som ett giltigt f\xf6rdefinierat v\xe4rde eller s\xe5 har en funktion med detta namn inte hittats."};$.ig.ColumnMoving=$.ig.ColumnMoving||{};$.ig.locale.sv.ColumnMoving={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",movingDialogButtonApplyText:"Till\xe4mpa",movingDialogButtonCancelText:"Avbryt",movingDialogCaptionButtonDesc:"Flytta ner",movingDialogCaptionButtonAsc:"Flytta upp",movingDialogCaptionText:"Flytta kolumner",movingDialogDisplayText:"Flytta kolumner",movingDialogDropTooltipText:"Flytta hit",movingDialogCloseButtonTitle:"St\xe4ng r\xf6rlig dialog",dropDownMoveLeftText:"Flytta v\xe4nster",dropDownMoveRightText:"Flytta h\xf6ger",dropDownMoveFirstText:"Flytta f\xf6rst",dropDownMoveLastText:"Flytta sist",featureChooserNotReferenced:"En referens till Funktionsv\xe4ljaren saknas. Inkludera infragistics.ui.grid.featurechooser.js i ditt projekt eller anv\xe4nd en av de kombinerade skriptfilerna.",movingToolTipMove:"Flytta",featureChooserSubmenuText:"Flytta till",columnVirtualizationEnabled:"Kolumnr\xf6relse kr\xe4ver en annan virtualiseringsinst\xe4llning. Anv\xe4nd rowVirtualization eller st\xe4ll in virtualizationMode p\xe5 'continuous'."};$.ig.ColumnFixing=$.ig.ColumnFixing||{};$.ig.locale.sv.ColumnFixing={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",headerFixButtonText:"Fixera den h\xe4r kolumnen",headerUnfixButtonText:"Avfixera den h\xe4r kolumnen",featureChooserTextFixedColumn:"Fixera kolumn",featureChooserTextUnfixedColumn:"Avfixera kolumnen",groupByNotSupported:"Kolumnfixering kr\xe4ver en annan konfiguration. Gruppera Efter-funktionaliteten borde vara avaktiverad.",virtualizationNotSupported:"Kolumnfixering kr\xe4ver en annan virtualiseringsinst\xe4llning. rowVirtualization b\xf6r anv\xe4ndas ist\xe4llet.",columnVirtualizationNotSupported:"Kolumnfixering kr\xe4ver en annan virtualiseringsinst\xe4llning. columnVirtualization b\xf6r inaktiveras.",columnMovingNotSupported:"Kolumnfixering kr\xe4ver en annan konfiguration. Kolumnr\xf6relse b\xf6r inaktiveras.",hidingNotSupported:"Kolumnfixering kr\xe4ver en annan konfiguration. D\xf6ljfunktionen b\xf6r inaktiveras.",hierarchicalGridNotSupported:"igHierarchicalGrid st\xf6der inte kolumnfixering. Kolumnfixering b\xf6r inaktiveras.",responsiveNotSupported:"Kolumnfixering kr\xe4ver en annan konfiguration. Responsivitetsfunktionaliteten b\xf6r inaktiveras.",noGridWidthNotSupported:"Kolumnfixering kr\xe4ver en annan konfiguration. Rutn\xe4tets bredd ska st\xe4llas in antingen som procent eller som antal i pixlar.",gridHeightInPercentageNotSupported:"Kolumnfixering kr\xe4ver en annan konfiguration. Rutn\xe4tets h\xf6jd b\xf6r st\xe4llas in i pixlar.",defaultColumnWidthInPercentageNotSupported:"Kolumnfixering kr\xe4ver en annan konfiguration. Standardkolumnbredden ska st\xe4llas in som ett antal i pixlar.",columnsWidthShouldBeSetInPixels:"Kolumnfixering kr\xe4ver en annan kolumnbreddsinst\xe4llning. Kolumnens bredd med nyckel {key} b\xf6r st\xe4llas in i pixlar.",unboundColumnsNotSupported:"Kolumnfixering kr\xe4ver en annan konfiguration. Obundna kolumner borde inaktiveras.",excelNavigationNotSupportedWithCurrentEditMode:"Excel Navigation kr\xe4ver en annan konfiguration. editMode ska st\xe4llas in p\xe5 'cell' eller 'rad'.",initialFixingNotApplied:"Initial fixning kunde inte till\xe4mpas f\xf6r kolumn med nyckel: {0}. Orsak: {1}",setOptionGridWidthException:"Felaktigt v\xe4rde f\xf6r tillvalet n\xe4tbredd. N\xe4r det finns fasta kolumner b\xf6r bredden p\xe5 det synliga omr\xe5det f\xf6r ofixerade kolumner vara st\xf6rre \xe4n eller lika med v\xe4rdet f\xf6r minimalVisibleAreaWidth.",noneError:"Din rutn\xe4tsinst\xe4llning slutf\xf6rdes korrekt!",notValidIdentifierError:"Den angivna kolumnnyckeln \xe4r inte giltig. Ange en kolumnyckel som matchar nyckeln till en av de definierade rutn\xe4tkolumnerna.",fixingRefusedError:"Fixering av denna kolumn st\xf6ds f\xf6r n\xe4rvarande inte. Avfixera en annan synlig kolumn eller anv\xe4nd metoden showColumn() i alla dolda icke-fixerade kolumner f\xf6rst.",fixingRefusedMinVisibleAreaWidthError:"Den h\xe4r kolumnen kan inte fixeras. Dess bredd \xf6verstiger det tillg\xe4ngliga utrymmet f\xf6r fixering av en kolumn i rutn\xe4tet.",alreadyHiddenError:"Det \xe4r f\xf6r n\xe4rvarande inte m\xf6jligt att fixera/avfixera den h\xe4r kolumnen. Metoden showColumn() b\xf6r anv\xe4ndas i kolumnen f\xf6rst.",alreadyUnfixedError:"Den h\xe4r kolumnen \xe4r redan avfixerad.",alreadyFixedError:"Den h\xe4r kolumnen \xe4r redan fixerad.",unfixingRefusedError:"Det g\xe5r f\xf6r n\xe4rvarande inte att avfixera den h\xe4r kolumnen. Metoden showColumn() b\xf6r anv\xe4ndas i alla dolda fasta kolumner f\xf6rst.",targetNotFoundError:"M\xe5lkolumn med nyckel {key} kunde inte hittas. Verifiera nyckeln som anv\xe4nds f\xf6r s\xf6kningen och justera den vid behov."};$.ig.GridAppendRowsOnDemand=$.ig.GridAppendRowsOnDemand||{};$.ig.locale.sv.GridAppendRowsOnDemand={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",loadMoreDataButtonText:"Ladda mer data",appendRowsOnDemandRequiresHeight:"Bifoga rader p\xe5 beg\xe4ran kr\xe4ver en annan konfiguration. Rutn\xe4tets h\xf6jd b\xf6r st\xe4llas in.",groupByNotSupported:"Bifoga rader p\xe5 beg\xe4ran kr\xe4ver en annan konfiguration. Gruppera Efter b\xf6r inaktiveras.",pagingNotSupported:"Append Rows On Demand kr\xe4ver en annan konfiguration. Persons\xf6kning b\xf6r inaktiveras.",cellMergingNotSupported:"Append Rows On Demand kr\xe4ver en annan konfiguration. Cellsammanfogning b\xf6r inaktiveras.",virtualizationNotSupported:"Append Rows On Demand kr\xe4ver en annan konfiguration. Virtualisering b\xf6r inaktiveras."};$.ig.igGridResponsive=$.ig.igGridResponsive||{};$.ig.locale.sv.igGridResponsive={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",fixedVirualizationNotSupported:'Responsiv funktionalitet kr\xe4ver en annan virtualiseringsinst\xe4llning. virtualizationMode ska st\xe4llas in p\xe5 "continuous".'};$.ig.igGridMultiColumnHeaders=$.ig.igGridMultiColumnHeaders||{};$.ig.locale.sv.igGridMultiColumnHeaders={optionChangeNotSupported:"{optionName} kan inte redigeras efter initialisering. Dess v\xe4rde b\xf6r st\xe4llas in under initialiseringen.",multiColumnHeadersNotSupportedWithColumnVirtualization:"Rubriker med flera kolumner kr\xe4ver en annan konfiguration. columnVirtualization b\xf6r inaktiveras.",cannotExpandMultiColumnHeader:"Rubrik med flera kolumner \xf6verstiger den maximalt till\xe5tna fasta areabredden och kan d\xe4rf\xf6r inte ut\xf6kas",atLeastOneColumnShouldBeShownWhenCollapseOrExpand:"Du b\xf6r ha minst en kolumn n\xe4r du expanderar eller kollapsar en rubrik med flera kolumner.",collapsedColumnIconTooltip:"Expandera",expandedColumnIconTooltip:"Kollapsa"};$.ig.Grid.locale=$.ig.Grid.locale||$.ig.locale.sv.Grid;$.ig.GridFiltering.locale=$.ig.GridFiltering.locale||$.ig.locale.sv.GridFiltering;$.ig.GridGroupBy.locale=$.ig.GridGroupBy.locale||$.ig.locale.sv.GridGroupBy;$.ig.GridHiding.locale=$.ig.GridHiding.locale||$.ig.locale.sv.GridHiding;$.ig.GridResizing.locale=$.ig.GridResizing.locale||$.ig.locale.sv.GridResizing;$.ig.GridPaging.locale=$.ig.GridPaging.locale||$.ig.locale.sv.GridPaging;$.ig.GridSelection.locale=$.ig.GridSelection.locale||$.ig.locale.sv.GridSelection;$.ig.GridRowSelectors.locale=$.ig.GridRowSelectors.locale||$.ig.locale.sv.GridRowSelectors;$.ig.GridSorting.locale=$.ig.GridSorting.locale||$.ig.locale.sv.GridSorting;$.ig.GridSummaries.locale=$.ig.GridSummaries.locale||$.ig.locale.sv.GridSummaries;$.ig.GridUpdating.locale=$.ig.GridUpdating.locale||$.ig.locale.sv.GridUpdating;$.ig.CellMerging.locale=$.ig.CellMerging.locale||$.ig.locale.sv.CellMerging;$.ig.ColumnMoving.locale=$.ig.ColumnMoving.locale||$.ig.locale.sv.ColumnMoving;$.ig.ColumnFixing.locale=$.ig.ColumnFixing.locale||$.ig.locale.sv.ColumnFixing;$.ig.GridAppendRowsOnDemand.locale=$.ig.GridAppendRowsOnDemand.locale||$.ig.locale.sv.GridAppendRowsOnDemand;$.ig.igGridResponsive.locale=$.ig.igGridResponsive.locale||$.ig.locale.sv.igGridResponsive;$.ig.igGridMultiColumnHeaders.locale=$.ig.igGridMultiColumnHeaders.locale||$.ig.locale.sv.igGridMultiColumnHeaders;$.ig.HierarchicalGrid.locale=$.ig.HierarchicalGrid.locale||$.ig.locale.sv.HierarchicalGrid;return $.ig.locale.sv});