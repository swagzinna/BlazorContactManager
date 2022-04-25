/*!@license
* Infragistics.Web.ClientUI Grid localization resources 21.2.13
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.nl=$.ig.locale.nl||{};$.ig.Grid=$.ig.Grid||{};$.ig.locale.nl.Grid={noSuchWidget:"{featureName} werd niet herkend. Controleer of een dergelijke functie bestaat en of de spelling correct is.",autoGenerateColumnsNoRecords:"autoGenerateColumns is ingeschakeld, maar de gegevensbron bevat geen records. Laad een gegevensbron met records om de kolommen te kunnen bepalen.",optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",optionChangeNotScrollingGrid:"{optionName} kan na initialisatie niet worden bewerkt omdat uw raster aanvankelijk niet scrolt en volledige re-rendering vereist is. {optionName} kan na initialisatie niet worden bewerkt",widthChangeFromPixelsToPercentagesNotSupported:"De optiebreedte van het raster kan niet dynamisch worden gewijzigd van pixels in percentages.",widthChangeFromPercentagesToPixelsNotSupported:"Kan de optiebreedte van het raster niet dynamisch wijzigen van percentages in pixels.",noPrimaryKeyDefined:"Er is geen primaire sleutel gedefinieerd voor het raster. Definieer een primaire sleutel om functies zoals Grid Editing te gebruiken.",indexOutOfRange:"De opgegeven rij-index valt buiten het bereik. Er moet een rij-index tussen 0 en {max} worden opgegeven.",noSuchColumnDefined:"De opgegeven kolomsleutel is niet geldig. Er moet een kolomsleutel worden opgegeven die overeenkomt met de sleutel van een van de gedefinieerde rasterkolommen.",columnIndexOutOfRange:"De opgegeven kolomindex valt buiten het bereik. Er moet een kolomindex tussen 0 en {max} worden opgegeven.",recordNotFound:"Een record met id {id} kon niet worden gevonden in de gegevensweergave. Controleer de id die voor de zoekopdracht is gebruikt en pas deze indien nodig aan.",columnNotFound:"Een kolom met sleutel {key} kon niet worden gevonden. Controleer de sleutel die voor de zoekopdracht is gebruikt en pas deze indien nodig aan.",colPrefix:"Kolom ",columnVirtualizationRequiresWidth:"Virtualisatie en columnVirtualization vereisen dat de breedte van het raster of de kolommen ervan worden ingesteld. Geef een waarde op voor de rasterbreedte, defaultColumnWidth of de breedte van elke kolom.",virtualizationRequiresHeight:"Voor virtualisatie moet de hoogte van het raster worden ingesteld. Er moet een waarde voor de rasterhoogte worden opgegeven.",colVirtualizationDenied:"columnVirtualization vereist een andere instelling voor virtualizationMode. De virtualizationMode moet worden ingesteld op 'fixed'.",noColumnsButAutoGenerateTrue:"autoGenerateColumns is uitgeschakeld en er zijn geen kolommen gedefinieerd voor het raster. Schakel autoGenerateColumns in of geef de kolommen handmatig op.",expandTooltip:"Vouw rij uit",collapseTooltip:"Rij samenvouwen",movingNotAllowedOrIncompatible:"De opgegeven kolom kan niet worden verplaatst. Controleer of een dergelijke kolom bestaat en of de eindpositie de kolomlay-out niet zou verbreken.",allColumnsHiddenOnInitialization:"Tijdens de initialisatie kunnen niet alle kolommen worden verborgen. Minstens \xe9\xe9n kolom moet als zichtbaar zijn geconfigureerd.",virtualizationNotSupportedWithAutoSizeCols:"Virtualisatie vereist een andere kolombreedte-configuratie dan '*'. De kolombreedte moet worden ingesteld als een getal in pixels.",columnVirtualizationNotSupportedWithPercentageWidth:"Kolomvirtualisatie vereist een andere configuratie van de rasterbreedte. De kolombreedte moet worden ingesteld als een getal in pixels.",mixedWidthsNotSupported:"De breedte van alle kolommen moet op dezelfde manier worden ingesteld. Stel alle kolombreedten in als percentages of als aantal in pixels.",multiRowLayoutColumnError:"De kolom met sleutel: {key1} kon niet worden toegevoegd aan lay-out met meerdere rijen omdat de plaats in de lay-out al is ingenomen door de kolom met sleutel: {key2}.",multiRowLayoutNotComplete:"De lay-out met meerdere rijen is niet compleet. De kolomdefinitie cre\xebert een lay-out met lege spaties die niet correct kan worden weergegeven.",multiRowLayoutMixedWidths:"Gemengde breedtes (percentage en pixels) worden niet ondersteund in de lay-out met meerdere rijen. Definieer alle kolombreedtes in pixels of percentage. ",multiRowLayoutHidingNotSupported:"De lay-out met meerdere rijen ondersteunt geen verborgen kolommen. Verwijder verborgen kolommen uit de kolomdefinities.",scrollableGridAreaNotVisible:"Vaste kop- en voettekstgebieden zijn groter dan de beschikbare rasterhoogte. Het schuifbare gebied is niet zichtbaar. Stel een grotere rasterhoogte in.",featureNotSupportedWithMRL:"{featureName} wordt niet ondersteund met lay-out met meerdere rijen. Verwijder de functie uit de lijst met functies.",editorTypeCannotBeDetermined:"Bijwerken had onvoldoende informatie om het type editor dat voor de kolom moet worden gebruikt, correct te bepalen: "};$.ig.HierarchicalGrid=$.ig.HierarchicalGrid||{};$.ig.locale.nl.HierarchicalGrid={noPrimaryKey:"igHierarchicalGrid vereist dat een primaire sleutel wordt gedefinieerd. Er moet een primaire sleutel worden verstrekt.",expandTooltip:"Vouw rij uit",collapseTooltip:"Rij samenvouwen"};$.ig.GridFeatureChooser=$.ig.GridFeatureChooser||{};$.ig.locale.nl.GridFeatureChooser={featureChooserTooltip:"Functiekiezer"};$.ig.GridFiltering=$.ig.GridFiltering||{};$.ig.locale.nl.GridFiltering={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",startsWithNullText:"Begint met ...",endsWithNullText:"Eindigt op ...",containsNullText:"Bevat ...",doesNotContainNullText:"Bevat niet ...",equalsNullText:"Is gelijk aan ...",doesNotEqualNullText:"Is niet gelijk ...",greaterThanNullText:"Groter dan ...",lessThanNullText:"Kleiner dan ...",greaterThanOrEqualToNullText:"Groter dan of gelijk aan ...",lessThanOrEqualToNullText:"Kleiner dan of gelijk aan ...",onNullText:"Op ...",notOnNullText:"Niet op ...",afterNullText:"Na",beforeNullText:"Voor",emptyNullText:"Leeg",notEmptyNullText:"Niet leeg",nullNullText:"Null",notNullNullText:"Niet null",emptyLabel:"Leeg",notEmptyLabel:"Niet leeg",nullLabel:"Null",notNullLabel:"Niet null",startsWithLabel:"Begint met",endsWithLabel:"Eindigt op",containsLabel:"Bevat",doesNotContainLabel:"Bevat niet",equalsLabel:"Is gelijk aan",doesNotEqualLabel:"Is niet gelijk",greaterThanLabel:"Groter dan",lessThanLabel:"Kleiner dan",greaterThanOrEqualToLabel:"Groter dan of gelijk aan",lessThanOrEqualToLabel:"Kleiner dan of gelijk aan",trueLabel:"True",falseLabel:"False",afterLabel:"Na",beforeLabel:"Voor",todayLabel:"Vandaag",yesterdayLabel:"Gisteren",thisMonthLabel:"Deze maand",lastMonthLabel:"Vorige maand",nextMonthLabel:"Volgende maand",thisYearLabel:"Dit jaar",lastYearLabel:"Vorig jaar",nextYearLabel:"Volgend jaar",atLabel:"Op",atNullText:"Op ...",notAtLabel:"Niet op",notAtNullText:"Niet op ...",atBeforeLabel:"Op of voor",atBeforeNullText:"Op of voor ...",atAfterLabel:"Op of na",atAfterNullText:"Op of na ...",clearLabel:"Filter wissen",noFilterLabel:"Nee",onLabel:"Aan",notOnLabel:"Niet aan",advancedButtonLabel:"Geavanceerd",filterDialogCaptionLabel:"Geavanceerd filter",filterDialogConditionLabel1:"Toon overeenkomende records ",filterDialogConditionLabel2:" van de volgende criteria",filterDialogConditionDropDownLabel:"Filtervoorwaarde",filterDialogOkLabel:"Zoeken",filterDialogCancelLabel:"Annuleren",filterDialogAnyLabel:"ELK",filterDialogAllLabel:"ALLES",filterDialogAddLabel:"Toevoegen",filterDialogErrorLabel:"U hebt het maximale aantal ondersteunde filters bereikt.",filterDialogCloseLabel:"Filtervenster sluiten",filterSummaryTitleLabel:"Zoekresultaten",filterSummaryTemplate:"${matches} overeenkomende records",filterDialogClearAllLabel:"ALLES wissen",tooltipTemplate:"${condition} filter toegepast",featureChooserText:"Filter verbergen",featureChooserTextHide:"Filter tonen",featureChooserTextAdvancedFilter:"Geavanceerd filter",virtualizationSimpleFilteringNotAllowed:"Kolomvirtualisatie vereist een ander type filtering. Stel de filtermodus in op 'advanced' of schakel advancedModeEditorsVisible uit.",multiRowLayoutSimpleFilteringNotAllowed:"Lay-out met meerdere rijen vereist een ander type filtering. Filtermodus instellen op 'advanced'",featureChooserNotReferenced:"Een verwijzing naar Functiekiezer ontbreekt. Voeg infragistics.ui.grid.featurechooser.js toe aan uw project, gebruik een loader of een van de gecombineerde scriptbestanden.",conditionListLengthCannotBeZero:"De voorwaarde conditionList in columnSettings is leeg. Er moet een geschikte matrix voor de conditionList worden geleverd.",conditionNotValidForColumnType:"De voorwaarde '{0}' is niet geldig voor de huidige configuratie. Deze moet worden vervangen door een voorwaarde die geschikt is voor het kolomtype {1}",defaultConditionContainsInvalidCondition:"defaultExpression voor de kolom '{0}' bevat een voorwaarde die niet is toegestaan. Deze moet worden vervangen door een voorwaarde die geschikt is voor het kolomtype {0}",initialConditionIsNotInTheConditionsListArrayOrIsNotInTheDefaultConditions:"De initi\xeble voorwaarde die is ingesteld in de kolominstellingen voor kolom '{0}' is niet van de standaard (of aangepaste voorwaarden) of is niet beschikbaar in de matrix conditionList die is ingesteld in columnSettings. Pas een geldige voorwaarde toe."};$.ig.GridGroupBy=$.ig.GridGroupBy||{};$.ig.locale.nl.GridGroupBy={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",emptyGroupByAreaContent:"Sleep een kolom hierheen of {0} om te groeperen op",emptyGroupByAreaContentSelectColumns:"selecteer kolommen",emptyGroupByAreaContentSelectColumnsCaption:"selecteer kolommen",expandTooltip:"Gegroepeerde rij uitvouwen",collapseTooltip:"Gegroepeerde rij samenvouwen",removeButtonTooltip:"Gegroepeerde kolom verwijderen",modalDialogCaptionButtonDesc:"Oplopend sorteren",modalDialogCaptionButtonAsc:"Aflopend sorteren",modalDialogCaptionButtonUngroup:"Groepering opheffen",modalDialogGroupByButtonText:"Groeperen op",modalDialogCaptionText:"Toevoegen aan groeperen op",modalDialogDropDownLabel:"Weergegeven:",modalDialogClearAllButtonLabel:"ALLES wissen",modalDialogRootLevelHierarchicalGrid:"Root",modalDialogDropDownButtonCaption:"Weergeven/verbergen",modalDialogButtonApplyText:"Toepassen",modalDialogButtonCancelText:"Annuleren",fixedVirualizationNotSupported:"Groeperen op vereist een andere virtualisatie-instelling. De virtualizationMode moet worden ingesteld op 'continuous'.",summaryRowTitle:"Overzichtsrij groeperen",summaryIconTitle:"Samenvatting voor {0}: {1}"};$.ig.GridHiding=$.ig.GridHiding||{};$.ig.locale.nl.GridHiding={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",columnChooserDisplayText:"Kolomkiezer",hiddenColumnIndicatorTooltipText:"Verborgen kolom(men)",columnHideText:"Verbergen",columnChooserCaptionLabel:"Kolomkiezer",columnChooserCloseButtonTooltip:"Sluiten",hideColumnIconTooltip:"Verbergen",featureChooserNotReferenced:"Een verwijzing naar Functiekiezer ontbreekt. Voeg infragistics.ui.grid.featurechooser.js toe aan uw project of gebruik een van de gecombineerde scriptbestanden.",columnChooserShowText:"Weergeven",columnChooserHideText:"Verbergen",columnChooserResetButtonLabel:"Resetten",columnChooserButtonApplyText:"Toepassen",columnChooserButtonCancelText:"Annuleren"};$.ig.GridResizing=$.ig.GridResizing||{};$.ig.locale.nl.GridResizing={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",noSuchVisibleColumn:"Er is geen zichtbare kolom voor de opgegeven sleutel. De methode showColumn() moet in de kolom worden gebruikt voordat u probeert de grootte ervan te wijzigen.",resizingAndFixedVirtualizationNotSupported:"Het formaat van kolommen wijzigen vereist een andere virtualisatie-instelling. Gebruik rowVirtualization en stel de virtualizationMode in op 'continuous'."};$.ig.GridPaging=$.ig.GridPaging||{};$.ig.locale.nl.GridPaging={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",pageSizeDropDownLabel:"Weergeven ",pageSizeDropDownTrailingLabel:"records",nextPageLabelText:"Volgende",prevPageLabelText:"Vorige",firstPageLabelText:"",lastPageLabelText:"",currentPageDropDownLeadingLabel:"Pag.",currentPageDropDownTrailingLabel:"van ${count}",currentPageDropDownTooltip:"Kies pagina-index",pageSizeDropDownTooltip:"Kies het aantal records per pagina",pagerRecordsLabelTooltip:"Bereik van huidige records",prevPageTooltip:"Vorige pagina",nextPageTooltip:"Volgende pagina",firstPageTooltip:"Eerste pagina",lastPageTooltip:"Laatste pagina",pageTooltipFormat:"Pagina ${index}",pagerRecordsLabelTemplate:"${startRecord} - ${endRecord} van ${recordCount} -records",invalidPageIndex:"De opgegeven pagina-index is niet geldig. Geef een pagina-index op die groter is dan of gelijk is aan 0 en kleiner is dan het totale aantal pagina's."};$.ig.GridSelection=$.ig.GridSelection||{};$.ig.locale.nl.GridSelection={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",persistenceImpossible:"Aanhoudende selectie vereist een andere configuratie. De primaire sleuteloptie van het raster moet worden geconfigureerd."};$.ig.GridRowSelectors=$.ig.GridRowSelectors||{};$.ig.locale.nl.GridRowSelectors={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",selectionNotLoaded:"igGridSelection is niet ge\xefnitialiseerd. Selectie moet zijn ingeschakeld voor het raster.",columnVirtualizationEnabled:"Rijkiezers vereisen een andere virtualisatie-instelling. Gebruik rowVirtualization of stel de virtualizationMode in op 'continuous'.",selectedRecordsText:"U heeft ${checked} records geselecteerd.",deselectedRecordsText:"U heeft ${unchecked} records gedeselecteerd.",selectAllText:"Selecteer alle ${totalRecordsCount} -records",deselectAllText:"Deselecteer alle ${totalRecordsCount} -records",requireSelectionWithCheckboxes:"Selectie is vereist wanneer er selectievakjes zijn ingeschakeld"};$.ig.GridSorting=$.ig.GridSorting||{};$.ig.locale.nl.GridSorting={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",sortedColumnTooltip:"${direction} gesorteerd",unsortedColumnTooltip:"Kolom sorteren",ascending:"oplopend",descending:"aflopend",modalDialogSortByButtonText:"Sorteren op",modalDialogResetButton:"Resetten",modalDialogCaptionButtonDesc:"Klik om aflopend te sorteren",modalDialogCaptionButtonAsc:"Klik om oplopend te sorteren",modalDialogCaptionButtonUnsort:"Klik om het sorteren te verwijderen",featureChooserText:"Sorteren op meerdere",modalDialogCaptionText:"Sorteren op meerdere",modalDialogButtonApplyText:"Toepassen",modalDialogButtonCancelText:"Annuleren",sortingHiddenColumnNotSupport:"De opgegeven kolom kon niet worden gesorteerd omdat deze verborgen is. Gebruik de methode showColumn() erop voordat u het probeert te sorteren.",featureChooserSortAsc:"Oplopend sorteren",featureChooserSortDesc:"Aflopend sorteren"};$.ig.GridSummaries=$.ig.GridSummaries||{};$.ig.locale.nl.GridSummaries={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",featureChooserText:"Samenvattingen verbergen",featureChooserTextHide:"Samenvattingen tonen",dialogButtonOKText:"OK",dialogButtonCancelText:"Annuleren",emptyCellText:"",summariesHeaderButtonTooltip:"Samenvattingen tonen/verbergen",defaultSummaryRowDisplayLabelCount:"Aantal",defaultSummaryRowDisplayLabelMin:"Min",defaultSummaryRowDisplayLabelMax:"Max",defaultSummaryRowDisplayLabelSum:"Som",defaultSummaryRowDisplayLabelAvg:"Gem",defaultSummaryRowDisplayLabelCustom:"Aangepast",calculateSummaryColumnKeyNotSpecified:"Kolomsleutel ontbreekt. Er moet een kolomsleutel worden opgegeven om samenvattingen te berekenen.",featureChooserNotReferenced:"Een verwijzing naar Functiekiezer ontbreekt. Voeg infragistics.ui.grid.featurechooser.js toe aan uw project of gebruik een van de gecombineerde scriptbestanden."};$.ig.GridUpdating=$.ig.GridUpdating||{};$.ig.locale.nl.GridUpdating={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",doneLabel:"Klaar",doneTooltip:"Stop met bewerken en bijwerken",cancelLabel:"Annuleren",cancelTooltip:"Stop met bewerken zonder te updaten",addRowLabel:"Nieuwe rij toevoegen",addRowTooltip:"Begin met het toevoegen van een nieuwe rij",deleteRowLabel:"Rij verwijderen",deleteRowTooltip:"Rij verwijderen",igTextEditorException:"Het is momenteel niet mogelijk tekenreekskolommen in het raster bij te werken. ui.igTextEditor moet eerst worden geladen.",igNumericEditorException:"Het is momenteel niet mogelijk om numerieke kolommen in het raster bij te werken. ui.igNumericEditor moet eerst worden geladen.",igCheckboxEditorException:"Het is momenteel niet mogelijk om de selectievakkolommen in het raster bij te werken. ui.igCheckboxEditor moet eerst worden geladen.",igCurrencyEditorException:"Het is momenteel niet mogelijk om numerieke kolommen met valutanotatie in het raster bij te werken. ui.igCurrencyEditor moet eerst worden geladen.",igPercentEditorException:"Het is momenteel niet mogelijk om numerieke kolommen met procentopmaak in het raster bij te werken. ui.igPercentEditor moet eerst worden geladen.",igDateEditorException:"Het is momenteel niet mogelijk om datumkolommen in het raster bij te werken. ui.igDateEditor moet eerst worden geladen.",igDatePickerException:"Het is momenteel niet mogelijk om datumkolommen in het raster bij te werken. ui.igDatePicker moet eerst worden geladen.",igTimePickerException:"Het is momenteel niet mogelijk om datumkolommen in het raster bij te werken. ui.igTimePicker moet eerst worden geladen.",igComboException:"Het is momenteel niet mogelijk om een combinatie in het raster te gebruiken. ui.igCombo moet eerst worden geladen.",igRatingException:"Het is momenteel niet mogelijk om igRating als editor in het raster te gebruiken. ui.igRating moet eerst worden geladen.",igValidatorException:"Het is momenteel niet mogelijk om validatie te ondersteunen met de opties die zijn gedefinieerd in igGridUpdating. ui.igValidator moet eerst worden geladen.",noPrimaryKeyException:"Om updatebewerkingen te ondersteunen nadat een rij is verwijderd, moet de toepassing primaryKey defini\xebren in opties van igGrid.",hiddenColumnValidationException:"Kan rij met een verborgen kolom met geactiveerde validatie niet bewerken.",dataDirtyException:"Grid heeft transacties in behandeling die de weergave van gegevens kunnen be\xefnvloeden. Om een uitzondering te voorkomen, kan de toepassing de autoCommit-optie van igGrid inschakelen, of het moet de dataDirty-gebeurtenis van igGridUpdating verwerken en false teruggeven. Tijdens het verwerken van die gebeurtenis kan de toepassing ook commit() gegevens in igGrid.",recordOrPropertyNotFoundException:"De opgegeven record of eigenschap is niet gevonden. Controleer de criteria voor uw zoekopdracht en pas ze indien nodig aan.",rowUpdatingNotSupportedWithColumnVirtualization:'Bijwerken met editMode: "row" vereist een andere configuratie. columnVirtualization moet worden uitgeschakeld.',rowEditDialogCaptionLabel:"Rijgegevens bewerken",excelNavigationNotSupportedWithCurrentEditMode:"Excel-navigatie vereist een andere configuratie. editMode moet worden ingesteld op 'cell' of 'row'",columnNotFound:"De opgegeven kolomsleutel is niet gevonden in de collectie van de zichtbare kolommen of de opgegeven index viel buiten het bereik.",rowOrColumnSpecifiedOutOfView:"Het bewerken van de opgegeven rij of kolom is momenteel niet mogelijk. Het moet zichtbaar zijn op de huidige pagina en het virtualisatieframe.",editingInProgress:"Een rij of cel wordt momenteel bewerkt. Een andere updateprocedure kan niet starten voordat de huidige bewerking is voltooid.",undefinedCellValue:"Ongedefinieerd kan niet worden ingesteld als celwaarde.",addChildTooltip:"Voeg een onderliggende rij toe",multiRowGridNotSupportedWithCurrentEditMode:"Als het raster Lay-out met meerdere rijen heeft ingeschakeld, wordt alleen de bewerkingsmodus voor het dialoogvenster ondersteund.",virtualizationNotSupportedWithoutAutoCommit:" Het inschakelen van updates en virtualisatie terwijl autoCommit is ingesteld op onwaar, wordt niet ondersteund. Stel de autoCommit-optie van het raster in op waar."};$.ig.CellMerging=$.ig.CellMerging||{};$.ig.locale.nl.CellMerging={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",mergeStrategyNotAFunction:"De opgegeven mergeStrategy wordt niet herkend als een geldige vooraf gedefinieerde waarde of een functie met deze naam wordt niet gevonden."};$.ig.ColumnMoving=$.ig.ColumnMoving||{};$.ig.locale.nl.ColumnMoving={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",movingDialogButtonApplyText:"Toepassen",movingDialogButtonCancelText:"Annuleren",movingDialogCaptionButtonDesc:"Omlaag verplaatsen",movingDialogCaptionButtonAsc:"Omhoog verplaatsen",movingDialogCaptionText:"Kolommen verplaatsen",movingDialogDisplayText:"Kolommen verplaatsen",movingDialogDropTooltipText:"Hierheen verplaatsen",movingDialogCloseButtonTitle:"Dialoogvenster verplaatsen sluiten",dropDownMoveLeftText:"Naar links verplaatsen",dropDownMoveRightText:"Naar rechts verplaatsen",dropDownMoveFirstText:"Eerste verplaatsen",dropDownMoveLastText:"Laatste verplaatsen",featureChooserNotReferenced:"Een verwijzing naar Functiekiezer ontbreekt. Voeg infragistics.ui.grid.featurechooser.js toe aan uw project of gebruik een van de gecombineerde scriptbestanden.",movingToolTipMove:"Verplaatsen",featureChooserSubmenuText:"Verplaatsen naar",columnVirtualizationEnabled:"Kolomverplaatsing vereist een andere virtualisatie-instelling. Gebruik rowVirtualization of stel de virtualizationMode in op 'continuous'."};$.ig.ColumnFixing=$.ig.ColumnFixing||{};$.ig.locale.nl.ColumnFixing={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",headerFixButtonText:"Deze kolom vastmaken",headerUnfixButtonText:"Deze kolom losmaken",featureChooserTextFixedColumn:"Kolom vastmaken",featureChooserTextUnfixedColumn:"Kolom losmaken",groupByNotSupported:"Kolommen vastmaken vereist een andere configuratie. De functionaliteit Groeperen op moet worden uitgeschakeld.",virtualizationNotSupported:"Kolommen vastmaken vereist een andere virtualisatie-instelling. rowVirtualization moet in plaats daarvan worden gebruikt.",columnVirtualizationNotSupported:"Kolommen vastmaken vereist een andere virtualisatie-instelling. columnVirtualization moet worden uitgeschakeld.",columnMovingNotSupported:"Kolommen vastmaken vereist een andere configuratie. Kolomverplaatsing moet zijn uitgeschakeld.",hidingNotSupported:"Kolommen vastmaken vereist een andere configuratie. De functie Verbergen moet worden uitgeschakeld.",hierarchicalGridNotSupported:"igHierarchicalGrid ondersteunt kolommen vastmaken niet. Kolommen vastmaken moet worden uitgeschakeld.",responsiveNotSupported:"Kolommen vastmaken vereist een andere configuratie. De responsieve functionaliteit moet worden uitgeschakeld.",noGridWidthNotSupported:"Kolommen vastmaken vereist een andere configuratie. De rasterbreedte moet worden ingesteld als percentages of als getal in pixels.",gridHeightInPercentageNotSupported:"Kolommen vastmaken vereist een andere configuratie. De rasterhoogte moet worden ingesteld in pixels.",defaultColumnWidthInPercentageNotSupported:"Kolommen vastmaken vereist een andere configuratie. De standaard kolombreedte moet worden ingesteld als een getal in pixels.",columnsWidthShouldBeSetInPixels:"Kolommen vastmaken vereist een andere kolombreedte-instelling. De breedte van de kolom met sleutel {key} moet in pixels worden ingesteld.",unboundColumnsNotSupported:"Kolommen vastmaken vereist een andere configuratie. Ongebonden kolommen moeten worden uitgeschakeld.",excelNavigationNotSupportedWithCurrentEditMode:"Excel-navigatie vereist een andere configuratie. editMode moet worden ingesteld op 'cell' of 'row'.",initialFixingNotApplied:"Eerste correctie kon niet worden toegepast voor kolom met sleutel: {0}. Reden: {1}",setOptionGridWidthException:"Onjuiste waarde voor optie rasterbreedte. Wanneer er vaste kolommen zijn, moet de breedte van het zichtbare gebied van niet-gerepareerde kolom(men) groter zijn dan of gelijk zijn aan de waarde van minimalVisibleAreaWidth.",noneError:"Uw netwerkconfiguratie is gelukt!",notValidIdentifierError:"De opgegeven kolomsleutel is niet geldig. Geef een kolomsleutel op die overeenkomt met de sleutel van een van de gedefinieerde rasterkolommen.",fixingRefusedError:"Het vastmaken van deze kolom wordt momenteel niet ondersteund. Maak een andere zichtbare kolom los of gebruik eerst de methode showColumn() in een verborgen losse kolom.",fixingRefusedMinVisibleAreaWidthError:"Deze kolom kan niet worden vastgemaakt. De breedte is groter dan de beschikbare ruimte voor het vastmaken van een kolom in het raster.",alreadyHiddenError:"Het vastmaken/losmaken van deze kolom is momenteel niet mogelijk. De methode showColumn() moet eerst in de kolom worden gebruikt.",alreadyUnfixedError:"Deze kolom is al losgemaakt.",alreadyFixedError:"Deze kolom is al vastgemaakt.",unfixingRefusedError:"Het losmaken van deze kolom is momenteel niet mogelijk. De methode showColumn() moet eerst op elke verborgen vastgemaakte kolom worden gebruikt.",targetNotFoundError:"Doelkolom met sleutel {key} kon niet worden gevonden. Controleer de sleutel die voor de zoekopdracht is gebruikt en pas deze indien nodig aan."};$.ig.GridAppendRowsOnDemand=$.ig.GridAppendRowsOnDemand||{};$.ig.locale.nl.GridAppendRowsOnDemand={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",loadMoreDataButtonText:"Meer gegevens laden",appendRowsOnDemandRequiresHeight:"Append Rows On Demand vereist een andere configuratie. De rasterhoogte moet worden ingesteld.",groupByNotSupported:"Append Rows On Demand vereist een andere configuratie. Groeperen op moet worden uitgeschakeld.",pagingNotSupported:"Append Rows On Demand vereist een andere configuratie. Paginering moet zijn uitgeschakeld.",cellMergingNotSupported:"Append Rows On Demand vereist een andere configuratie. Cellen samenvoegen moet worden uitgeschakeld.",virtualizationNotSupported:"Append Rows On Demand vereist een andere configuratie. Virtualisatie moet worden uitgeschakeld."};$.ig.igGridResponsive=$.ig.igGridResponsive||{};$.ig.locale.nl.igGridResponsive={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",fixedVirualizationNotSupported:'Voor de responsieve functionaliteit is een andere virtualisatie-instelling vereist. virtualizationMode moet worden ingesteld op "continu".'};$.ig.igGridMultiColumnHeaders=$.ig.igGridMultiColumnHeaders||{};$.ig.locale.nl.igGridMultiColumnHeaders={optionChangeNotSupported:"{optionName} kan na initialisatie niet worden bewerkt. De waarde moet tijdens de initialisatie worden ingesteld.",multiColumnHeadersNotSupportedWithColumnVirtualization:"Koptekst met meerdere kolommen vereist een andere configuratie. columnVirtualization moet worden uitgeschakeld.",cannotExpandMultiColumnHeader:"De koptekst met meerdere kolommen overschrijdt de maximaal toegestane breedte van het vaste gebied en kan daarom niet worden uitgevouwen",atLeastOneColumnShouldBeShownWhenCollapseOrExpand:"Er moet minimaal \xe9\xe9n kolom worden weergegeven wanneer u een koptekst met meerdere kolommen uitvouwt of samenvouwt.",collapsedColumnIconTooltip:"Uitvouwen",expandedColumnIconTooltip:"Samenvouwen"};$.ig.Grid.locale=$.ig.Grid.locale||$.ig.locale.nl.Grid;$.ig.GridFiltering.locale=$.ig.GridFiltering.locale||$.ig.locale.nl.GridFiltering;$.ig.GridGroupBy.locale=$.ig.GridGroupBy.locale||$.ig.locale.nl.GridGroupBy;$.ig.GridHiding.locale=$.ig.GridHiding.locale||$.ig.locale.nl.GridHiding;$.ig.GridResizing.locale=$.ig.GridResizing.locale||$.ig.locale.nl.GridResizing;$.ig.GridPaging.locale=$.ig.GridPaging.locale||$.ig.locale.nl.GridPaging;$.ig.GridSelection.locale=$.ig.GridSelection.locale||$.ig.locale.nl.GridSelection;$.ig.GridRowSelectors.locale=$.ig.GridRowSelectors.locale||$.ig.locale.nl.GridRowSelectors;$.ig.GridSorting.locale=$.ig.GridSorting.locale||$.ig.locale.nl.GridSorting;$.ig.GridSummaries.locale=$.ig.GridSummaries.locale||$.ig.locale.nl.GridSummaries;$.ig.GridUpdating.locale=$.ig.GridUpdating.locale||$.ig.locale.nl.GridUpdating;$.ig.CellMerging.locale=$.ig.CellMerging.locale||$.ig.locale.nl.CellMerging;$.ig.ColumnMoving.locale=$.ig.ColumnMoving.locale||$.ig.locale.nl.ColumnMoving;$.ig.ColumnFixing.locale=$.ig.ColumnFixing.locale||$.ig.locale.nl.ColumnFixing;$.ig.GridAppendRowsOnDemand.locale=$.ig.GridAppendRowsOnDemand.locale||$.ig.locale.nl.GridAppendRowsOnDemand;$.ig.igGridResponsive.locale=$.ig.igGridResponsive.locale||$.ig.locale.nl.igGridResponsive;$.ig.igGridMultiColumnHeaders.locale=$.ig.igGridMultiColumnHeaders.locale||$.ig.locale.nl.igGridMultiColumnHeaders;$.ig.HierarchicalGrid.locale=$.ig.HierarchicalGrid.locale||$.ig.locale.nl.HierarchicalGrid;return $.ig.locale.nl});