/*!@license
* Infragistics.Web.ClientUI Grid localization resources 21.2.13
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.hu=$.ig.locale.hu||{};$.ig.Grid=$.ig.Grid||{};$.ig.locale.hu.Grid={noSuchWidget:"A(z) {featureName} nem ismerhet\u0151 fel. Ellen\u0151rizze, hogy l\xe9tezik-e ilyen funkci\xf3, \xe9s hogy helyesen \xedrta-e.",autoGenerateColumnsNoRecords:"Az autoGenerateColumns enged\xe9lyezve van, de az adatforr\xe1sban nincsenek rekordok. Az oszlopok meghat\xe1roz\xe1s\xe1hoz t\xf6lts\xf6n be egy rekordokat tartalmaz\xf3 adatforr\xe1st.",optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",optionChangeNotScrollingGrid:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151, mert a r\xe1cs az alapbe\xe1ll\xedt\xe1s szerint nem g\xf6rgethet\u0151, \xe9s teljes \xfajrarendel\xe9sre lesz sz\xfcks\xe9g. Ezt az opci\xf3t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",widthChangeFromPixelsToPercentagesNotSupported:"Nem lehet dinamikusan megv\xe1ltoztatni a r\xe1cs sz\xe9less\xe9g\xe9t pixelr\u0151l sz\xe1zal\xe9kra.",widthChangeFromPercentagesToPixelsNotSupported:"Nem lehet dinamikusan megv\xe1ltoztatni a r\xe1cs sz\xe9less\xe9g\xe9t sz\xe1zal\xe9kr\xf3l pixelre.",noPrimaryKeyDefined:"A r\xe1cshoz nincs meghat\xe1rozva els\u0151dleges kulcs. Adjon meg egy els\u0151dleges kulcsot olyan funkci\xf3k haszn\xe1lat\xe1hoz, mint a r\xe1cs szerkeszt\xe9se.",indexOutOfRange:"A megadott sorindex a tartom\xe1nyon k\xedv\xfcl esik. A megadott sorindexnek 0 \xe9s {max} k\xf6z\xe9 kell esnie.",noSuchColumnDefined:"A megadott oszlopkulcs \xe9rv\xe9nytelen. Olyan oszlopkulcsot kell megadni, amely megegyezik a meghat\xe1rozott r\xe1csoszlopok valamelyik\xe9hez tartoz\xf3 kulccsal.",columnIndexOutOfRange:"A megadott oszlopindex a tartom\xe1nyon k\xedv\xfcl esik. A megadott oszlopindexnek 0 \xe9s {max} k\xf6z\xe9 kell esnie.",recordNotFound:"Nem tal\xe1lhat\xf3 {id} azonos\xedt\xf3j\xfa rekord az adatn\xe9zetben. Ellen\u0151rizze a keres\xe9shez haszn\xe1lt azonos\xedt\xf3t, \xe9s sz\xfcks\xe9g eset\xe9n m\xf3dos\xedtsa.",columnNotFound:"Nem tal\xe1lhat\xf3 {kulcs} kulccsal rendelkez\u0151 oszlop. Ellen\u0151rizze a keres\xe9shez haszn\xe1lt kulcsot, \xe9s sz\xfcks\xe9g eset\xe9n m\xf3dos\xedtsa.",colPrefix:"Oszlop ",columnVirtualizationRequiresWidth:"A Virtualization \xe9s a columnVirtualization haszn\xe1lat\xe1hoz be kell \xe1ll\xedtani a r\xe1cs vagy az oszlopok sz\xe9less\xe9g\xe9t. Adjon meg a r\xe1cssz\xe9less\xe9g, a defaultColumnWidth vagy az egyes oszlopok sz\xe9less\xe9g\xe9nek \xe9rt\xe9k\xe9t.",virtualizationRequiresHeight:"A virtualiz\xe1l\xe1shoz be kell \xe1ll\xedtani a r\xe1cs magass\xe1g\xe1t. Meg kell adni a r\xe1cs magass\xe1g\xe1nak \xe9rt\xe9k\xe9t.",colVirtualizationDenied:"A columnVirtualization haszn\xe1lat\xe1hoz m\xe1sik virtualizationMode-ot kell be\xe1ll\xedtani. A virtualizationMode-ot 'fixed'-re kell \xe1ll\xedtani.",noColumnsButAutoGenerateTrue:"Az autoGenerateColumns ki van kapcsolva, \xe9s a r\xe1cshoz nincs megadva oszlop. Kapcsolja be az autoGenerateColumns opci\xf3t, vagy manu\xe1lisan adjon meg oszlopokat.",expandTooltip:"Sor kibont\xe1sa",collapseTooltip:"Sor \xf6sszecsuk\xe1sa",movingNotAllowedOrIncompatible:"A megadott oszlop nem helyezhet\u0151 \xe1t. Ellen\u0151rizze, hogy az oszlop l\xe9tezik-e, \xe9s az oszlop v\xe9g\xe9nek poz\xedci\xf3ja miatt nem esne-e sz\xe9t az oszlop elrendez\xe9se.",allColumnsHiddenOnInitialization:"Nem lehet elrejtve az \xf6sszes oszlop az inicializ\xe1l\xe1s sor\xe1n. Legal\xe1bb egy oszlopot l\xe1that\xf3nak kell be\xe1ll\xedtani.",virtualizationNotSupportedWithAutoSizeCols:"A virtualiz\xe1l\xe1shoz m\xe1s oszlopsz\xe9less\xe9get kell megadni '*' helyett. Az oszlop sz\xe9less\xe9g\xe9t sz\xe1mk\xe9nt kell megadni, pixelben kifejezve.",columnVirtualizationNotSupportedWithPercentageWidth:"Az oszlop virtualiz\xe1l\xe1s\xe1hoz m\xe1s r\xe1cssz\xe9less\xe9get kell be\xe1ll\xedtani. Az oszlop sz\xe9less\xe9g\xe9t sz\xe1mk\xe9nt kell megadni, pixelben kifejezve.",mixedWidthsNotSupported:"Az \xf6sszes oszlop sz\xe9less\xe9g\xe9t ugyanolyan m\xf3don kell megadni. Az \xf6sszes oszlopsz\xe9less\xe9get sz\xe1zal\xe9kban vagy pixelben kell kifejezni.",multiRowLayoutColumnError:"A(z) {key1} kulcshoz tartoz\xf3 oszlopot nem siker\xfclt hozz\xe1adni a t\xf6bbsoros elrendez\xe9shez, mert az elrendez\xe9sben elfoglalt hely\xe9t m\xe1r a(z) {key2} kulcshoz tartoz\xf3 oszlop foglalta el.",multiRowLayoutNotComplete:"A t\xf6bbsoros elrendez\xe9s nem teljes. Az oszlopdefin\xedci\xf3 olyan elrendez\xe9st hoz l\xe9tre, amelyben \xfcres ter\xfcletek vannak, ez\xe9rt nem lehet megfelel\u0151en renderelni.",multiRowLayoutMixedWidths:"A vegyesen be\xe1ll\xedtott (sz\xe1zal\xe9kban \xe9s pixelben megadott) sz\xe9less\xe9gek haszn\xe1lat\xe1t a t\xf6bbsoros elrendez\xe9s nem t\xe1mogatja. Az \xf6sszes oszlopsz\xe9less\xe9get sz\xe1zal\xe9kban vagy pixelben kell kifejezni. ",multiRowLayoutHidingNotSupported:"A t\xf6bbsoros elrendez\xe9s nem t\xe1mogatja a rejtett oszlopok haszn\xe1lat\xe1t. T\xe1vol\xedtsa el az elrejtett oszlopokat az oszlopdefin\xedci\xf3kb\xf3l.",scrollableGridAreaNotVisible:"A r\xf6gz\xedtett fejl\xe9c- \xe9s l\xe1bl\xe9cter\xfcletek nagyobbak, mint a rendelkez\xe9sre \xe1ll\xf3 r\xe1csmagass\xe1g. A g\xf6rgethet\u0151 ter\xfclet nem l\xe1that\xf3. K\xe9rj\xfck, \xe1ll\xedtson be nagyobb r\xe1csmagass\xe1got.",featureNotSupportedWithMRL:"A(z) {featureName} funkci\xf3 nem t\xe1mogatott a t\xf6bbsoros elrendez\xe9sben. K\xe9rj\xfck, t\xe1vol\xedtsa el a funkci\xf3t a funkci\xf3k list\xe1j\xe1r\xf3l.",editorTypeCannotBeDetermined:"A friss\xedt\xe9s nem rendelkezett elegend\u0151 inform\xe1ci\xf3val ahhoz, hogy megfelel\u0151en meg tudja hat\xe1rozni az alkalmazand\xf3 szerkeszt\u0151program t\xedpus\xe1t a k\xf6vetkez\u0151 oszlopban: "};$.ig.HierarchicalGrid=$.ig.HierarchicalGrid||{};$.ig.locale.hu.HierarchicalGrid={noPrimaryKey:"Az igHierarchicalGrid defini\xe1l\xe1s\xe1hoz sz\xfcks\xe9g van egy els\u0151dleges kulcsra. Meg kell adni egy els\u0151dleges kulcsot.",expandTooltip:"Sor kibont\xe1sa",collapseTooltip:"Sor \xf6sszecsuk\xe1sa"};$.ig.GridFeatureChooser=$.ig.GridFeatureChooser||{};$.ig.locale.hu.GridFeatureChooser={featureChooserTooltip:"Funkci\xf3v\xe1laszt\xf3"};$.ig.GridFiltering=$.ig.GridFiltering||{};$.ig.locale.hu.GridFiltering={optionChangeNotSupported:"A(z) {optionName} az inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",startsWithNullText:"Kezdete\u2026",endsWithNullText:"V\xe9ge\u2026",containsNullText:"Tartalmazza\u2026",doesNotContainNullText:"Nem tartalmazza\u2026",equalsNullText:"Egyenl\u0151...",doesNotEqualNullText:"Nem egyenl\u0151...",greaterThanNullText:"Nagyobb mint...",lessThanNullText:"Kisebb mint...",greaterThanOrEqualToNullText:"Nagyobb vagy egyenl\u0151...",lessThanOrEqualToNullText:"Kevesebb vagy egyenl\u0151...",onNullText:"D\xe1tuma\u2026",notOnNullText:"Nem a d\xe1tuma\u2026",afterNullText:"Ut\xe1n",beforeNullText:"El\u0151tt",emptyNullText:"\xdcres",notEmptyNullText:"Nem \xfcres",nullNullText:"Null\xe9rt\xe9k\u0171",notNullNullText:"Nem null\xe9rt\xe9k\u0171",emptyLabel:"\xdcres",notEmptyLabel:"Nem \xfcres",nullLabel:"Null\xe9rt\xe9k\u0171",notNullLabel:"Nem null\xe9rt\xe9k\u0171",startsWithLabel:"Kezdete",endsWithLabel:"V\xe9ge",containsLabel:"Tartalmazza",doesNotContainLabel:"Nem tartalmazza",equalsLabel:"Egyenl\u0151",doesNotEqualLabel:"Nem egyenl\u0151",greaterThanLabel:"Nagyobb mint",lessThanLabel:"Kisebb mint",greaterThanOrEqualToLabel:"Nagyobb vagy egyenl\u0151",lessThanOrEqualToLabel:"Kevesebb vagy egyenl\u0151",trueLabel:"True",falseLabel:"False",afterLabel:"Ut\xe1na",beforeLabel:"El\u0151tt",todayLabel:"Ma",yesterdayLabel:"Tegnap",thisMonthLabel:"Aktu\xe1lis h\xf3nap",lastMonthLabel:"El\u0151z\u0151 h\xf3nap",nextMonthLabel:"K\xf6vetkez\u0151 h\xf3nap",thisYearLabel:"Aktu\xe1lis \xe9v",lastYearLabel:"El\u0151z\u0151 \xe9v",nextYearLabel:"K\xf6vetkez\u0151 \xe9v",atLabel:"Ekkor",atNullText:"Ekkor\u2026",notAtLabel:"Nem ekkor",notAtNullText:"Nem ekkor\u2026",atBeforeLabel:"Ekkor vagy el\u0151tte",atBeforeNullText:"Ekkor vagy el\u0151tte\u2026",atAfterLabel:"Ekkor vagy ut\xe1na",atAfterNullText:"Ekkor vagy ut\xe1na\u2026",clearLabel:"Sz\u0171r\u0151 t\xf6rl\xe9se",noFilterLabel:"Sorsz\xe1m",onLabel:"Ekkor",notOnLabel:"Nem ekkor",advancedButtonLabel:"Speci\xe1lis",filterDialogCaptionLabel:"Speci\xe1lis sz\u0171r\u0151",filterDialogConditionLabel1:"Tal\xe1latok mutat\xe1sa ",filterDialogConditionLabel2:" a k\xf6vetkez\u0151 krit\xe9riumok k\xf6z\xfcl",filterDialogConditionDropDownLabel:"Sz\u0171r\xe9si felt\xe9tel",filterDialogOkLabel:"Keres\xe9s",filterDialogCancelLabel:"M\xe9gse",filterDialogAnyLabel:"B\xc1RMELY",filterDialogAllLabel:"\xd6SSZES",filterDialogAddLabel:"Hozz\xe1ad\xe1s",filterDialogErrorLabel:"El\xe9rte a t\xe1mogatott sz\u0171r\u0151k maxim\xe1lis sz\xe1m\xe1t.",filterDialogCloseLabel:"Sz\u0171r\xe9s p\xe1rbesz\xe9dpanel bez\xe1r\xe1sa",filterSummaryTitleLabel:"Keres\xe9si eredm\xe9nyek",filterSummaryTemplate:"${matches} tal\xe1lat",filterDialogClearAllLabel:"\xd6SSZES t\xf6rl\xe9se",tooltipTemplate:"${condition} sz\u0171r\u0151 alkalmazva",featureChooserText:"Sz\u0171r\u0151 elrejt\xe9se",featureChooserTextHide:"Sz\u0171r\u0151 megjelen\xedt\xe9se",featureChooserTextAdvancedFilter:"Speci\xe1lis sz\u0171r\u0151",virtualizationSimpleFilteringNotAllowed:"Az oszlopok virtualiz\xe1l\xe1s\xe1hoz m\xe1s t\xedpus\xfa sz\u0171r\xe9s sz\xfcks\xe9ges. \xc1ll\xedtsa \xe1t a sz\u0171r\xe9si m\xf3dot 'advanced' \xe9rt\xe9kre, vagy kapcsolja ki az advancedModeEditorsVisible be\xe1ll\xedt\xe1st",multiRowLayoutSimpleFilteringNotAllowed:"A t\xf6bbsoros elrendez\xe9s haszn\xe1lat\xe1hoz m\xe1s t\xedpus\xfa sz\u0171r\xe9s sz\xfcks\xe9ges. \xc1ll\xedtsa \xe1t a sz\u0171r\xe9si m\xf3dot 'advanced' \xe9rt\xe9kre",featureChooserNotReferenced:"Hi\xe1nyzik a Feature Chooser-re mutat\xf3 hivatkoz\xe1s. \xc9p\xedtse be az infragistics.ui.grid.featurechooser.js f\xe1jlt a projektj\xe9be, vagy haszn\xe1ljon bet\xf6lt\u0151t vagy egy kombin\xe1lt szkriptf\xe1jlt.",conditionListLengthCannotBeZero:"A columnSettings alatti conditionList t\xf6mb \xfcres. A conditionList-hez meg kell adni egy megfelel\u0151 t\xf6mb\xf6t.",conditionNotValidForColumnType:"A(z) '{0}' felt\xe9tel nem \xe9rv\xe9nyes a jelenlegi konfigur\xe1ci\xf3ra. Helyettes\xedtse egy {1} oszlopt\xedpusnak megfelel\u0151 felt\xe9tellel.",defaultConditionContainsInvalidCondition:"A(z) '{0}' oszlophoz tartoz\xf3 defaultExpression nem enged\xe9lyezett felt\xe9telt tartalmaz. Helyettes\xedtse egy {0} oszlopt\xedpusnak megfelel\u0151 felt\xe9tellel.",initialConditionIsNotInTheConditionsListArrayOrIsNotInTheDefaultConditions:"A(z) '{0}' oszlop columnSettings be\xe1ll\xedt\xe1saiban szerepl\u0151 kezdeti felt\xe9tel nem az alap\xe9rtelmezett (vagy egy\xe9ni) felt\xe9telek k\xf6z\xf6tt szerepel, vagy nem \xe9rhet\u0151 el a columnSettings be\xe1ll\xedt\xe1saiban szerepl\u0151 conditionList t\xf6mbben. Adjon meg egy \xe9rv\xe9nyes felt\xe9telt."};$.ig.GridGroupBy=$.ig.GridGroupBy||{};$.ig.locale.hu.GridGroupBy={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",emptyGroupByAreaContent:"H\xfazza ide az oszlopot vagy {0} a csoportos\xedt\xe1sra",emptyGroupByAreaContentSelectColumns:"oszlopok kiv\xe1laszt\xe1sa",emptyGroupByAreaContentSelectColumnsCaption:"oszlopok kiv\xe1laszt\xe1sa",expandTooltip:"Csoportos\xedtott sor kibont\xe1sa",collapseTooltip:"Csoportos\xedtott sor \xf6sszecsuk\xe1sa",removeButtonTooltip:"Csoportos\xedtott oszlop elt\xe1vol\xedt\xe1sa",modalDialogCaptionButtonDesc:"Rendez\xe9s n\xf6vekv\u0151 sorrendben",modalDialogCaptionButtonAsc:"Rendez\xe9s cs\xf6kken\u0151 sorrendben",modalDialogCaptionButtonUngroup:"Csoportos\xedt\xe1s megsz\xfcntet\xe9se",modalDialogGroupByButtonText:"Csoportos\xedt\xe1s",modalDialogCaptionText:"Hozz\xe1ad\xe1s a csoportos\xedt\xe1shoz",modalDialogDropDownLabel:"Megjelen\xedtve:",modalDialogClearAllButtonLabel:"\xd6SSZES t\xf6rl\xe9se",modalDialogRootLevelHierarchicalGrid:"Gy\xf6k\xe9r",modalDialogDropDownButtonCaption:"Mutat\xe1s/elrejt\xe9s",modalDialogButtonApplyText:"Alkalmaz",modalDialogButtonCancelText:"M\xe9gse",fixedVirualizationNotSupported:"A csoportos\xedt\xe1s haszn\xe1lat\xe1hoz m\xe1sik virtualiz\xe1ci\xf3s be\xe1ll\xedt\xe1s sz\xfcks\xe9ges. A virtualizationMode \xe9rt\xe9k\xe9t 'continuous' \xe9rt\xe9kre kell be\xe1ll\xedtani.",summaryRowTitle:"\xd6sszefoglal\xf3 sor csoportos\xedt\xe1sa",summaryIconTitle:"\xd6sszefoglal\xf3 a k\xf6vetkez\u0151h\xf6z: {0}: {1}"};$.ig.GridHiding=$.ig.GridHiding||{};$.ig.locale.hu.GridHiding={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",columnChooserDisplayText:"Oszlopv\xe1laszt\xf3",hiddenColumnIndicatorTooltipText:"Rejtett oszlop(ok)",columnHideText:"Elrejt\xe9s",columnChooserCaptionLabel:"Oszlopv\xe1laszt\xf3",columnChooserCloseButtonTooltip:"Bez\xe1r\xe1s",hideColumnIconTooltip:"Elrejt\xe9s",featureChooserNotReferenced:"Hi\xe1nyzik a Feature Chooser-re mutat\xf3 hivatkoz\xe1s. Vegyen bele az infragistics.ui.grid.featurechooser.js f\xe1jlt a projektj\xe9be, vagy haszn\xe1lja a kombin\xe1lt parancsf\xe1jlok egyik\xe9t.",columnChooserShowText:"Mutat\xe1s",columnChooserHideText:"Elrejt\xe9s",columnChooserResetButtonLabel:"Vissza\xe1ll\xedt\xe1s",columnChooserButtonApplyText:"Alkalmaz",columnChooserButtonCancelText:"M\xe9gse"};$.ig.GridResizing=$.ig.GridResizing||{};$.ig.locale.hu.GridResizing={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",noSuchVisibleColumn:"A megadott kulcshoz nem tartozik l\xe1that\xf3 oszlop. Az \xe1tm\xe9retez\xe9s el\u0151tt haszn\xe1lja a showColumn() met\xf3dust az oszlopra.",resizingAndFixedVirtualizationNotSupported:"Az oszlopok \xe1tm\xe9retez\xe9s\xe9hez m\xe1s virtualiz\xe1ci\xf3s be\xe1ll\xedt\xe1s sz\xfcks\xe9ges. Haszn\xe1lja a rowVirtualization funkci\xf3t, \xe9s \xe1ll\xedtsa a virtualizationMode \xe9rt\xe9k\xe9t a 'continuous' \xe9rt\xe9kre."};$.ig.GridPaging=$.ig.GridPaging||{};$.ig.locale.hu.GridPaging={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",pageSizeDropDownLabel:"Mutat\xe1s ",pageSizeDropDownTrailingLabel:"rekordok",nextPageLabelText:"K\xf6vetkez\u0151",prevPageLabelText:"El\u0151z\u0151",firstPageLabelText:"",lastPageLabelText:"",currentPageDropDownLeadingLabel:"Oldal",currentPageDropDownTrailingLabel:"\xf6sszesen: ${count}",currentPageDropDownTooltip:"Oldalsz\xe1m kiv\xe1laszt\xe1sa",pageSizeDropDownTooltip:"Oldalank\xe9nt megjelen\xedtett rekordok sz\xe1m\xe1nak kiv\xe1laszt\xe1sa",pagerRecordsLabelTooltip:"Megjelen\xedtett rekordok",prevPageTooltip:"El\u0151z\u0151 oldal",nextPageTooltip:"K\xf6vetkez\u0151 oldal",firstPageTooltip:"Els\u0151 oldal",lastPageTooltip:"Utols\xf3 oldal",pageTooltipFormat:"${index}. oldal",pagerRecordsLabelTemplate:"${startRecord}-${endRecord}. rekord, \xf6sszesen: ${recordCount}",invalidPageIndex:"A megadott oldalsz\xe1m \xe9rv\xe9nytelen. Adjon meg olyan oldalsz\xe1mot, amely nagyobb vagy egyenl\u0151, mint 0, \xe9s kisebb, mint ah\xe1ny oldal van \xf6sszesen."};$.ig.GridSelection=$.ig.GridSelection||{};$.ig.locale.hu.GridSelection={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",persistenceImpossible:"A folyamatos kiv\xe1laszt\xe1shoz m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. Meg kell adni a r\xe1cshoz tartoz\xf3 els\u0151dleges kulcsot."};$.ig.GridRowSelectors=$.ig.GridRowSelectors||{};$.ig.locale.hu.GridRowSelectors={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",selectionNotLoaded:"Az igGridSelection nincs inicializ\xe1lva. A r\xe1cshoz enged\xe9lyezni kell a kiv\xe1laszt\xe1st.",columnVirtualizationEnabled:"A sorv\xe1laszt\xf3khoz m\xe1s virtualiz\xe1ci\xf3s be\xe1ll\xedt\xe1s sz\xfcks\xe9ges. Haszn\xe1lja a rowVirtualization funkci\xf3t, \xe9s \xe1ll\xedtsa a virtualizationMode \xe9rt\xe9k\xe9t a 'continuous' \xe9rt\xe9kre.",selectedRecordsText:"${checked} rekordot jel\xf6lt ki.",deselectedRecordsText:"${unchecked} rekord kijel\xf6l\xe9s\xe9t t\xf6r\xf6lte.",selectAllText:"Az \xf6sszes rekord (${totalRecordsCount}) kijel\xf6l\xe9se",deselectAllText:"Az \xf6sszes rekord (${totalRecordsCount}) kijel\xf6l\xe9s\xe9nek t\xf6rl\xe9se",requireSelectionWithCheckboxes:"Ki kell v\xe1lasztani legal\xe1bb egy elemet, ha be van jel\xf6lve legal\xe1bb egy jel\xf6l\u0151n\xe9gyzet"};$.ig.GridSorting=$.ig.GridSorting||{};$.ig.locale.hu.GridSorting={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",sortedColumnTooltip:"Rendez\xe9s: ${direction}",unsortedColumnTooltip:"Oszlop rendez\xe9se",ascending:"n\xf6vekv\u0151",descending:"cs\xf6kken\u0151",modalDialogSortByButtonText:"Rendez\xe9s",modalDialogResetButton:"Vissza\xe1ll\xedt\xe1s",modalDialogCaptionButtonDesc:"Kattintson a cs\xf6kken\u0151 rendez\xe9shez",modalDialogCaptionButtonAsc:"Kattintson a n\xf6vekv\u0151 rendez\xe9shez",modalDialogCaptionButtonUnsort:"Kattintson a rendez\xe9s elt\xe1vol\xedt\xe1s\xe1hoz",featureChooserText:"T\xf6bbszint\u0171 rendez\xe9s",modalDialogCaptionText:"T\xf6bbszint\u0171 rendez\xe9s",modalDialogButtonApplyText:"Alkalmaz",modalDialogButtonCancelText:"M\xe9gse",sortingHiddenColumnNotSupport:"A megadott oszlop nem rendezhet\u0151, mert rejtett. A rendez\xe9s el\u0151tt haszn\xe1lja a showColumn() met\xf3dust.",featureChooserSortAsc:"Rendez\xe9s n\xf6vekv\u0151 sorrendben",featureChooserSortDesc:"Rendez\xe9s cs\xf6kken\u0151 sorrendben"};$.ig.GridSummaries=$.ig.GridSummaries||{};$.ig.locale.hu.GridSummaries={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",featureChooserText:"\xd6sszes\xedt\xe9sek elrejt\xe9se",featureChooserTextHide:"\xd6sszes\xedt\xe9sek mutat\xe1sa",dialogButtonOKText:"OK",dialogButtonCancelText:"M\xe9gse",emptyCellText:"",summariesHeaderButtonTooltip:"\xd6sszes\xedt\xe9sek mutat\xe1sa/elrejt\xe9se",defaultSummaryRowDisplayLabelCount:"Darab",defaultSummaryRowDisplayLabelMin:"Min",defaultSummaryRowDisplayLabelMax:"Max",defaultSummaryRowDisplayLabelSum:"Szum",defaultSummaryRowDisplayLabelAvg:"\xc1tlag",defaultSummaryRowDisplayLabelCustom:"Egy\xe9ni",calculateSummaryColumnKeyNotSpecified:"Hi\xe1nyzik az oszlopkulcs. Az \xf6sszes\xedt\xe9sek kisz\xe1m\xedt\xe1s\xe1hoz meg kell adni egy oszlopkulcsot.",featureChooserNotReferenced:"Hi\xe1nyzik a Feature Chooser-re mutat\xf3 hivatkoz\xe1s. Vegyen bele az infragistics.ui.grid.featurechooser.js f\xe1jlt a projektj\xe9be, vagy haszn\xe1lja a kombin\xe1lt parancsf\xe1jlok egyik\xe9t."};$.ig.GridUpdating=$.ig.GridUpdating||{};$.ig.locale.hu.GridUpdating={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",doneLabel:"K\xe9sz",doneTooltip:"Szerkeszt\xe9s le\xe1ll\xedt\xe1sa \xe9s friss\xedt\xe9s",cancelLabel:"M\xe9gse",cancelTooltip:"Szerkeszt\xe9s le\xe1ll\xedt\xe1sa friss\xedt\xe9s n\xe9lk\xfcl",addRowLabel:"\xdaj sor hozz\xe1ad\xe1sa",addRowTooltip:"\xdaj sor hozz\xe1ad\xe1s\xe1nak megkezd\xe9se",deleteRowLabel:"Sor t\xf6rl\xe9se",deleteRowTooltip:"Sor t\xf6rl\xe9se",igTextEditorException:"A karakterl\xe1ncokat tartalmaz\xf3 oszlopok jelenleg nem friss\xedthet\u0151k a r\xe1csban. El\u0151sz\xf6r be kell t\xf6lteni az ui.igTextEditor alkalmaz\xe1st.",igNumericEditorException:"A numerikus \xe9rt\xe9keket tartalmaz\xf3 oszlopok jelenleg nem friss\xedthet\u0151k a r\xe1csban. El\u0151sz\xf6r be kell t\xf6lteni az ui.igNumericEditor alkalmaz\xe1st.",igCheckboxEditorException:"A jel\xf6l\u0151n\xe9gyzeteket tartalmaz\xf3 oszlopok jelenleg nem friss\xedthet\u0151k a r\xe1csban. El\u0151sz\xf6r be kell t\xf6lteni az ui.igCheckboxEditor alkalmaz\xe1st.",igCurrencyEditorException:"A p\xe9nznem form\xe1tum\xfa numerikus \xe9rt\xe9keket tartalmaz\xf3 oszlopok jelenleg nem friss\xedthet\u0151k a r\xe1csban. El\u0151sz\xf6r be kell t\xf6lteni az ui.igCurrencyEditor alkalmaz\xe1st.",igPercentEditorException:"A sz\xe1zal\xe9kos form\xe1tum\xfa numerikus \xe9rt\xe9keket tartalmaz\xf3 oszlopok jelenleg nem friss\xedthet\u0151k a r\xe1csban. El\u0151sz\xf6r be kell t\xf6lteni az ui.igPercentEditor alkalmaz\xe1st.",igDateEditorException:"A d\xe1tumokat tartalmaz\xf3 oszlopok jelenleg nem friss\xedthet\u0151k a r\xe1csban. El\u0151sz\xf6r be kell t\xf6lteni az ui.igDateEditor alkalmaz\xe1st.",igDatePickerException:"A d\xe1tumokat tartalmaz\xf3 oszlopok jelenleg nem friss\xedthet\u0151k a r\xe1csban. El\u0151sz\xf6r be kell t\xf6lteni az ui.igDatePicker alkalmaz\xe1st.",igTimePickerException:"A d\xe1tumokat tartalmaz\xf3 oszlopok jelenleg nem friss\xedthet\u0151k a r\xe1csban. El\u0151sz\xf6r be kell t\xf6lteni az ui.igTimePicker alkalmaz\xe1st.",igComboException:"A r\xe1csban jelenleg nem haszn\xe1lhat\xf3k leg\xf6rd\xfcl\u0151 list\xe1k. El\u0151sz\xf6r be kell t\xf6lteni az ui.igCombo alkalmaz\xe1st.",igRatingException:"Az igRating jelenleg nem haszn\xe1lhat\xf3 szerkeszt\u0151k\xe9nt a r\xe1csban. El\u0151sz\xf6r be kell t\xf6lteni az ui.igRating alkalmaz\xe1st.",igValidatorException:"A valid\xe1ci\xf3 jelenleg nem t\xe1mogatott az igGridUpdating alkalmaz\xe1sban defini\xe1lt opci\xf3kkal. El\u0151sz\xf6r be kell t\xf6lteni az ui.igValidator alkalmaz\xe1st.",noPrimaryKeyException:"Ahhoz, hogy a friss\xedt\xe9si m\u0171veletek el\xe9rhet\u0151ek legyenek egy sor t\xf6rl\xe9se ut\xe1n, az alkalmaz\xe1snak meg kell hat\xe1roznia a primaryKey \xe9rt\xe9k\xe9t az igGrid r\xe1csban.",hiddenColumnValidationException:"Nem lehet szerkeszteni egy olyan sort, amelynek olyan rejtett oszlopa van, amelyen enged\xe9lyezve van a valid\xe1ci\xf3.",dataDirtyException:"A r\xe1cshoz f\xfcgg\u0151ben l\xe9v\u0151 tranzakci\xf3k tartoznak, amelyek befoly\xe1solhatj\xe1k az adatok megjelen\xedt\xe9s\xe9t. A kiv\xe9tel elker\xfcl\xe9se \xe9rdek\xe9ben az alkalmaz\xe1s enged\xe9lyezheti az igGrid autoCommit opci\xf3j\xe1t, vagy fel kell dolgoznia az igGridUpdating alkalmaz\xe1s dataDirty esem\xe9ny\xe9t, \xe9s hamis \xe9rt\xe9ket kell visszaadnia. Az esem\xe9ny feldolgoz\xe1sa k\xf6zben az alkalmaz\xe1s is megh\xedvhatja a commit() met\xf3dust az igGrid-ben.",recordOrPropertyNotFoundException:"A megadott rekord vagy tulajdons\xe1g nem tal\xe1lhat\xf3. Ellen\u0151rizze a keres\xe9s felt\xe9teleit, \xe9s sz\xfcks\xe9g eset\xe9n m\xf3dos\xedtsa azokat.",rowUpdatingNotSupportedWithColumnVirtualization:'Ha az editMode: "row" \xe9rt\xe9kre van be\xe1ll\xedtva, akkor a friss\xedt\xe9shez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. A columnVirtualization opci\xf3t ki kell kapcsolni.',rowEditDialogCaptionLabel:"Soradatok szerkeszt\xe9se",excelNavigationNotSupportedWithCurrentEditMode:"Az Excelben t\xf6rt\xe9n\u0151 navig\xe1ci\xf3hoz m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. Az editMode \xe9rt\xe9k\xe9t 'cell' vagy 'row' \xe9rt\xe9kre kell \xe1ll\xedtani",columnNotFound:"A megadott oszlopkulcs nem tal\xe1lhat\xf3 a l\xe1that\xf3 oszlopok gy\u0171jtem\xe9ny\xe9ben, vagy a megadott index k\xedv\xfcl esik a tartom\xe1nyon.",rowOrColumnSpecifiedOutOfView:"A megadott sor vagy oszlop szerkeszt\xe9se jelenleg nem lehets\xe9ges. L\xe1that\xf3nak kell lennie az aktu\xe1lis oldalon \xe9s virtualiz\xe1ci\xf3s keretben.",editingInProgress:"Egy sor vagy cella \xe9ppen szerkeszt\xe9s alatt \xe1ll. Egy \xfajabb friss\xedt\xe9si elj\xe1r\xe1s nem ind\xedthat\xf3 el az aktu\xe1lis szerkeszt\xe9s befejez\xe9se el\u0151tt.",undefinedCellValue:"A cella\xe9rt\xe9k nem lehet nem defini\xe1lt.",addChildTooltip:"Gyermeksor hozz\xe1ad\xe1sa",multiRowGridNotSupportedWithCurrentEditMode:"Ha a r\xe1cson a t\xf6bbsoros elrendez\xe9s enged\xe9lyezve van, akkor csak a p\xe1rbesz\xe9dpaneles szerkeszt\xe9si m\xf3d t\xe1mogatott.",virtualizationNotSupportedWithoutAutoCommit:" A friss\xedt\xe9s \xe9s a virtualiz\xe1ci\xf3 nem enged\xe9lyezhet\u0151, am\xedg az autoCommit hamis \xe9rt\xe9kre van \xe1ll\xedtva. \xc1ll\xedtsa a r\xe1cs autoCommit be\xe1ll\xedt\xe1s\xe1t true \xe9rt\xe9kre."};$.ig.CellMerging=$.ig.CellMerging||{};$.ig.locale.hu.CellMerging={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",mergeStrategyNotAFunction:"A megadott mergeStrategy nem \xe9rv\xe9nyes el\u0151re defini\xe1lt \xe9rt\xe9k, vagy nem tal\xe1lhat\xf3 ilyen nev\u0171 f\xfcggv\xe9ny."};$.ig.ColumnMoving=$.ig.ColumnMoving||{};$.ig.locale.hu.ColumnMoving={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",movingDialogButtonApplyText:"Alkalmaz",movingDialogButtonCancelText:"M\xe9gse",movingDialogCaptionButtonDesc:"Mozgat\xe1s lefel\xe9",movingDialogCaptionButtonAsc:"Mozgat\xe1s felfel\xe9",movingDialogCaptionText:"Oszlopok mozgat\xe1sa",movingDialogDisplayText:"Oszlopok mozgat\xe1sa",movingDialogDropTooltipText:"Mozgat\xe1s ide",movingDialogCloseButtonTitle:"Mozg\xf3 p\xe1rbesz\xe9dpanel bez\xe1r\xe1sa",dropDownMoveLeftText:"Mozgat\xe1s balra",dropDownMoveRightText:"Mozgat\xe1s jobbra",dropDownMoveFirstText:"Els\u0151 mozgat\xe1sa",dropDownMoveLastText:"Utols\xf3 mozgat\xe1sa",featureChooserNotReferenced:"Hi\xe1nyzik a Feature Chooser-re mutat\xf3 hivatkoz\xe1s. Vegyen bele az infragistics.ui.grid.featurechooser.js f\xe1jlt a projektj\xe9be, vagy haszn\xe1lja a kombin\xe1lt parancsf\xe1jlok egyik\xe9t.",movingToolTipMove:"Mozgat\xe1s",featureChooserSubmenuText:"Mozgat\xe1s ide",columnVirtualizationEnabled:"Az oszlopok mozgat\xe1s\xe1hoz m\xe1s virtualiz\xe1ci\xf3s be\xe1ll\xedt\xe1s sz\xfcks\xe9ges. Haszn\xe1lja a rowVirtualization funkci\xf3t, \xe9s \xe1ll\xedtsa a virtualizationMode \xe9rt\xe9k\xe9t a 'continuous' \xe9rt\xe9kre."};$.ig.ColumnFixing=$.ig.ColumnFixing||{};$.ig.locale.hu.ColumnFixing={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",headerFixButtonText:"Oszlop r\xf6gz\xedt\xe9se",headerUnfixButtonText:"Oszlop r\xf6gz\xedt\xe9s\xe9nek felold\xe1sa",featureChooserTextFixedColumn:"Oszlop r\xf6gz\xedt\xe9se",featureChooserTextUnfixedColumn:"Oszlop r\xf6gz\xedt\xe9s\xe9nek felold\xe1sa",groupByNotSupported:"Az oszlopok r\xf6gz\xedt\xe9s\xe9hez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. A csoportos\xedt\xe1s funkci\xf3t ki kell kapcsolni.",virtualizationNotSupported:"Az oszlopok r\xf6gz\xedt\xe9s\xe9hez m\xe1s virtualiz\xe1ci\xf3s be\xe1ll\xedt\xe1s sz\xfcks\xe9ges. Haszn\xe1lja a rowVirtualization opci\xf3t.",columnVirtualizationNotSupported:"Az oszlopok r\xf6gz\xedt\xe9s\xe9hez m\xe1s virtualiz\xe1ci\xf3s be\xe1ll\xedt\xe1s sz\xfcks\xe9ges. Kapcsolja ki a columnVirtualization opci\xf3t.",columnMovingNotSupported:"Az oszlopok r\xf6gz\xedt\xe9s\xe9hez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. Az oszlopok mozgat\xe1s\xe1t ki kell kapcsolni.",hidingNotSupported:"Az oszlopok r\xf6gz\xedt\xe9s\xe9hez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. Az elrejt\xe9s funkci\xf3t ki kell kapcsolni.",hierarchicalGridNotSupported:"Az igHierarchicalGrid nem t\xe1mogatja az oszlopok r\xf6gz\xedt\xe9s\xe9t. Az oszlopok r\xf6gz\xedt\xe9s\xe9t ki kell kapcsolni.",responsiveNotSupported:"Az oszlopok r\xf6gz\xedt\xe9s\xe9hez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. Az adapt\xedv funkci\xf3t ki kell kapcsolni.",noGridWidthNotSupported:"Az oszlopok r\xf6gz\xedt\xe9s\xe9hez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. A r\xe1cs sz\xe9less\xe9g\xe9t sz\xe1zal\xe9kban vagy pixelben kell megadni.",gridHeightInPercentageNotSupported:"Az oszlopok r\xf6gz\xedt\xe9s\xe9hez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. A r\xe1cs magass\xe1g\xe1t pixelben kell megadni.",defaultColumnWidthInPercentageNotSupported:"Az oszlopok r\xf6gz\xedt\xe9s\xe9hez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. Az alap\xe9rtelmezett oszlopsz\xe9less\xe9get pixelben kell megadni.",columnsWidthShouldBeSetInPixels:"Az oszlopok r\xf6gz\xedt\xe9s\xe9hez m\xe1s oszlopsz\xe9less\xe9g-be\xe1ll\xedt\xe1s sz\xfcks\xe9ges. A(z) {key} kulcshoz tartoz\xf3 oszlop sz\xe9less\xe9g\xe9t pixelben kell megadni.",unboundColumnsNotSupported:"Az oszlopok r\xf6gz\xedt\xe9s\xe9hez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. A nem k\xf6t\xf6tt oszlopok haszn\xe1lat\xe1t ki kell kapcsolni.",excelNavigationNotSupportedWithCurrentEditMode:"Az Excelben t\xf6rt\xe9n\u0151 navig\xe1ci\xf3hoz m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. Az editMode \xe9rt\xe9k\xe9t 'cell' vagy 'row' \xe9rt\xe9kre kell \xe1ll\xedtani.",initialFixingNotApplied:"A kezdeti jav\xedt\xe1st nem lehetett alkalmazni a k\xf6vetkez\u0151 kulcs\xfa oszlophoz: {0}. Ok: {1}",setOptionGridWidthException:"Helytelen \xe9rt\xe9k az opci\xf3r\xe1cs sz\xe9less\xe9g\xe9nek. Ha vannak r\xf6gz\xedtett oszlopok, akkor a r\xf6gz\xedtetlen oszlop(ok) l\xe1that\xf3 ter\xfclete sz\xe9less\xe9g\xe9nek nagyobbnak vagy egyenl\u0151nek kell lennie, mint a minimalVisibleAreaWidth \xe9rt\xe9ke.",noneError:"A r\xe1cs be\xe1ll\xedt\xe1sa sikeres!",notValidIdentifierError:"A megadott oszlopkulcs \xe9rv\xe9nytelen. Adjon meg egy olyan oszlopkulcsot, amely megegyezik a meghat\xe1rozott r\xe1csoszlopok egyik\xe9nek kulcs\xe1val.",fixingRefusedError:"Ennek az oszlopnak a r\xf6gz\xedt\xe9se jelenleg nem t\xe1mogatott. Oldja fel egy m\xe1sik l\xe1that\xf3 oszlop r\xf6gz\xedt\xe9s\xe9t, vagy el\u0151sz\xf6r haszn\xe1lja a showColumn() met\xf3dust b\xe1rmely rejtett, nem r\xf6gz\xedtett oszlopon.",fixingRefusedMinVisibleAreaWidthError:"Ez az oszlop nem r\xf6gz\xedthet\u0151. A sz\xe9less\xe9ge meghaladja az oszlop r\xf6gz\xedt\xe9s\xe9hez rendelkez\xe9sre \xe1ll\xf3 helyet a r\xe1csban.",alreadyHiddenError:"Az oszlop r\xf6gz\xedt\xe9se/felold\xe1sa jelenleg nem lehets\xe9ges. Az oszlopon el\u0151sz\xf6r a showColumn() met\xf3dust kell haszn\xe1lni.",alreadyUnfixedError:"Ez az oszlop m\xe1r nincs r\xf6gz\xedtve.",alreadyFixedError:"Ez az oszlop m\xe1r r\xf6gz\xedtve van.",unfixingRefusedError:"Az oszlop r\xf6gz\xedt\xe9s\xe9nek felold\xe1sa jelenleg nem lehets\xe9ges. El\u0151sz\xf6r a showColumn() met\xf3dust kell alkalmazni minden olyan oszlopra, amely rejtett \xe9s r\xf6gz\xedtett.",targetNotFoundError:"A(z) {key} kulcshoz tartoz\xf3 c\xe9loszlop nem tal\xe1lhat\xf3. Ellen\u0151rizze a keres\xe9shez haszn\xe1lt kulcsot, \xe9s sz\xfcks\xe9g eset\xe9n m\xf3dos\xedtsa."};$.ig.GridAppendRowsOnDemand=$.ig.GridAppendRowsOnDemand||{};$.ig.locale.hu.GridAppendRowsOnDemand={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",loadMoreDataButtonText:"T\xf6bb adat bet\xf6lt\xe9se",appendRowsOnDemandRequiresHeight:"A sorok ig\xe9ny szerinti hozz\xe1f\u0171z\xe9s\xe9hez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. Meg kell adni a r\xe1cs magass\xe1g\xe1t.",groupByNotSupported:"A sorok ig\xe9ny szerinti hozz\xe1f\u0171z\xe9s\xe9hez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. A csoportos\xedt\xe1st ki kell kapcsolni.",
pagingNotSupported:"A sorok ig\xe9ny szerinti hozz\xe1f\u0171z\xe9s\xe9hez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. A lapoz\xe1st ki kell kapcsolni.",cellMergingNotSupported:"A sorok ig\xe9ny szerinti hozz\xe1f\u0171z\xe9s\xe9hez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. A cellaegyes\xedt\xe9st ki kell kapcsolni.",virtualizationNotSupported:"A sorok ig\xe9ny szerinti hozz\xe1f\u0171z\xe9s\xe9hez m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. A virtualiz\xe1ci\xf3t ki kell kapcsolni."};$.ig.igGridResponsive=$.ig.igGridResponsive||{};$.ig.locale.hu.igGridResponsive={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",fixedVirualizationNotSupported:'Az adapt\xedv funkci\xf3hoz m\xe1s virtualiz\xe1ci\xf3s be\xe1ll\xedt\xe1s sz\xfcks\xe9ges. A virtualizationMode \xe9rt\xe9k\xe9t "continuous" \xe9rt\xe9kre kell \xe1ll\xedtani.'};$.ig.igGridMultiColumnHeaders=$.ig.igGridMultiColumnHeaders||{};$.ig.locale.hu.igGridMultiColumnHeaders={optionChangeNotSupported:"A(z) {optionName} inicializ\xe1l\xe1s ut\xe1n nem szerkeszthet\u0151. Az \xe9rt\xe9k\xe9t az inicializ\xe1l\xe1s sor\xe1n kell be\xe1ll\xedtani.",multiColumnHeadersNotSupportedWithColumnVirtualization:"A t\xf6bboszlopos fejl\xe9cek haszn\xe1lat\xe1hoz m\xe1s konfigur\xe1ci\xf3 sz\xfcks\xe9ges. A columnVirtualization opci\xf3t ki kell kapcsolni.",cannotExpandMultiColumnHeader:"A t\xf6bboszlopos fejl\xe9c m\xe9rete meghaladja a r\xf6gz\xedtett ter\xfclet maxim\xe1lisan megengedett sz\xe9less\xe9g\xe9t, ez\xe9rt nem bonthat\xf3 ki",atLeastOneColumnShouldBeShownWhenCollapseOrExpand:"Legal\xe1bb egy oszlopnak l\xe1tszania kell egy t\xf6bboszlopos fejl\xe9c kibont\xe1s\xe1hoz vagy \xf6sszecsuk\xe1s\xe1hoz.",collapsedColumnIconTooltip:"Kibont\xe1s",expandedColumnIconTooltip:"\xd6sszecsuk\xe1s"};$.ig.Grid.locale=$.ig.Grid.locale||$.ig.locale.hu.Grid;$.ig.GridFiltering.locale=$.ig.GridFiltering.locale||$.ig.locale.hu.GridFiltering;$.ig.GridGroupBy.locale=$.ig.GridGroupBy.locale||$.ig.locale.hu.GridGroupBy;$.ig.GridHiding.locale=$.ig.GridHiding.locale||$.ig.locale.hu.GridHiding;$.ig.GridResizing.locale=$.ig.GridResizing.locale||$.ig.locale.hu.GridResizing;$.ig.GridPaging.locale=$.ig.GridPaging.locale||$.ig.locale.hu.GridPaging;$.ig.GridSelection.locale=$.ig.GridSelection.locale||$.ig.locale.hu.GridSelection;$.ig.GridRowSelectors.locale=$.ig.GridRowSelectors.locale||$.ig.locale.hu.GridRowSelectors;$.ig.GridSorting.locale=$.ig.GridSorting.locale||$.ig.locale.hu.GridSorting;$.ig.GridSummaries.locale=$.ig.GridSummaries.locale||$.ig.locale.hu.GridSummaries;$.ig.GridUpdating.locale=$.ig.GridUpdating.locale||$.ig.locale.hu.GridUpdating;$.ig.CellMerging.locale=$.ig.CellMerging.locale||$.ig.locale.hu.CellMerging;$.ig.ColumnMoving.locale=$.ig.ColumnMoving.locale||$.ig.locale.hu.ColumnMoving;$.ig.ColumnFixing.locale=$.ig.ColumnFixing.locale||$.ig.locale.hu.ColumnFixing;$.ig.GridAppendRowsOnDemand.locale=$.ig.GridAppendRowsOnDemand.locale||$.ig.locale.hu.GridAppendRowsOnDemand;$.ig.igGridResponsive.locale=$.ig.igGridResponsive.locale||$.ig.locale.hu.igGridResponsive;$.ig.igGridMultiColumnHeaders.locale=$.ig.igGridMultiColumnHeaders.locale||$.ig.locale.hu.igGridMultiColumnHeaders;$.ig.HierarchicalGrid.locale=$.ig.HierarchicalGrid.locale||$.ig.locale.hu.HierarchicalGrid;return $.ig.locale.hu});