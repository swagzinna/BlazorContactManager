/*!@license
* Infragistics.Web.ClientUI infragistics.scheduler.core.js resources 21.2.20212.99
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.pl=$.ig.locale.pl||{};$.ig.locale.pl.schedulerCore=$.ig.locale.pl.schedulerCore||{};var l=$.ig.locale.pl.schedulerCore;l["ActivityBase_Exception_CannotModifyOccurrenceProperty"]="Nie mo\u017cna zmodyfikowa\u0107 warto\u015bci w\u0142a\u015bciwo\u015bci {0} w tym wyst\u0105pieniu {1}, poniewa\u017c jest ona cz\u0142onkiem cyklu.";l["LE_ActivityBase_DisassociatedResource"]="Podany zas\xf3b nie jest skojarzony z tym samym \u017ar\xf3d\u0142em danych, co to dzia\u0142anie.";l["LE_AppointmentItemsSource_CannotEdit"]="\u0179r\xf3d\u0142o elementu terminu/spotkania nie obs\u0142uguje modyfikacji jego zawarto\u015bci.";l["LE_AppointmentItemsSource_InvalidValue_JS"]="Podana warto\u015b\u0107 musi by\u0107 tablic\u0105 JSON lub wyst\u0105pieniem $ .ig.DataSource.";l["LE_AppointmentItemsSource_NoIList_DOTNET"]="Interfejs AppointmentItemsSource nie obs\u0142uguje modyfikacji jego zawarto\u015bci. Aby obs\u0142ugiwa\u0107 modyfikacje, \u017ar\xf3d\u0142o elementu musi implementowa\u0107 interfejs System.Collections.IList.";l["LE_AppointmentPropertyMapping_RecurrenceRoot"]="W\u0142a\u015bciwo\u015b\u0107 RecurrenceRoot nie jest mo\u017cliwa do powi\u0105zania i nie mo\u017cna jej zamapowa\u0107. Zamiast tego utw\xf3rz mapowanie dla w\u0142a\u015bciwo\u015bci RecurrenceId.";l["LE_AppointmentPropertyMapping_Resource"]="W\u0142a\u015bciwo\u015b\u0107 Resource nie jest mo\u017cliwa do powi\u0105zania i nie mo\u017cna jej zamapowa\u0107. Zamiast tego utw\xf3rz mapowanie dla w\u0142a\u015bciwo\u015bci ResourceId.";l["LE_BeginEdit_CreatePending"]="Nie mo\u017cna edytowa\u0107 podanego dzia\u0142ania, poniewa\u017c istnieje oczekuj\u0105ca operacja 'Create'.";l["LE_CannotCreateDataObject_DOTNET"]="Nie mo\u017cna utworzy\u0107 nowego wyst\u0105pienia obiektu danych. Upewnij si\u0119, \u017ce typ obiektu danych ma konstruktora bez parametr\xf3w. Je\u015bli tak nie jest, przypisz do w\u0142a\u015bciwo\u015bci CreateAppointmentDataObjectCallback delegata, kt\xf3ry tworzy nowe wyst\u0105pienia tego typu.";l["LE_CannotModifyApppointmentsWhenDataSourceSet"]="Nie mo\u017cna wykona\u0107 operacji, je\u015bli jest u\u017cywany interfejs DataSource. Zamiast tego dost\u0119p do element\xf3w i ich modyfikacj\u0119 nale\u017cy realizowa\u0107 za pomoc\u0105 interfejsu Scheduler.DataSource.";l["LE_CannotSetDataSourceWhenAppointmentsAreDefined"]="Kolekcja termin\xf3w musi by\u0107 pusta przed u\u017cyciem interfejsu DataSource.";l["LE_CouldNotConvertColorScheme"]="Nie mo\u017cna skonwertowa\u0107 warto\u015bci '{0}' na warto\u015b\u0107 ScheduleResourceColorScheme.";l["LE_CouldNotConvertValue"]="Nie mo\u017cna skonwertowa\u0107 warto\u015bci '{0}' na typ {1}.";l["LE_CreateDataObjectFailed"]="Nie mo\u017cna utworzy\u0107 nowego wyst\u0105pienia obiektu danych.";l["LE_DataObjectNotAssociated"]="Podany obiekt danych nie jest skojarzony z elementem Appointment.";l["LE_DuplicateIdentifier"]="Identyfikator '{0}' jest ju\u017c u\u017cywany. Identyfikatory dzia\u0142a\u0144/zasob\xf3w musz\u0105 by\u0107 unikatowe.";l["LE_EndEdit_DataObjectAlreadyAssociated"]="Ten obiekt danych jest ju\u017c skojarzony z dzia\u0142aniem.";l["LE_EndEdit_NotInEditMode"]="Nie mo\u017cna wywo\u0142a\u0107 metody EndEdit dla okre\u015blonego dzia\u0142ania, poniewa\u017c nie jest ono w trybie edycji. Przed zatwierdzeniem operacji edycji dzia\u0142ania nale\u017cy wywo\u0142a\u0107 metod\u0119 BeginEdit.";l["LE_InvalidDayOfWeekRule"]="Podana regu\u0142a dnia tygodnia jest nieprawid\u0142owa.";l["LE_MissingIdentifier"]="Brak identyfikatora.";l["LE_NoAppointmentItemsSource"]="Nie przypisano elementu AppointmentItemsSource.";l["LE_NoCreateAppointmentDataObjectCallback_JS"]="Tworzenie nowego wyst\u0105pienia obiektu danych nie powiod\u0142o si\u0119. Nale\u017cy okre\u015bli\u0107 warto\u015b\u0107 w\u0142a\u015bciwo\u015bci CreateAppointmentDataObjectCallback.";l["LE_NoDataObject"]="Bazowy obiekt danych podanego dzia\u0142ania nie istnieje w \u017ar\xf3dle elementu.";l["LE_NoPropertyMapping_Appointment"]="Nie istnieje mapowanie w\u0142a\u015bciwo\u015bci dla w\u0142a\u015bciwo\u015bci Appointment '{0}'.";l["LE_RecurrenceParsing"]="B\u0142\u0105d podczas analizowania cyklu, kontekst: {0}";l["LE_RecurrenceSerializing"]="B\u0142\u0105d serializowania cyklu, kontekst: {0}";l["LE_SchedulePropertyMap_Missing"]="Nie zdefiniowano nast\u0119puj\u0105cych wymaganych mapowa\u0144 w\u0142a\u015bciwo\u015bci:";l["LE_SchedulePropertyMap_NoPropertyFound"]="W\xa0bazowym obiekcie danych nie znaleziono w\u0142a\u015bciwo\u015bci publicznej o nazwie '{0}'.";l["LIT_AgendaDayHeader_Today"]="Dzisiaj";l["LIT_AgendaNoEventsMessage"]="Brak wydarze\u0144";l["LIT_AgendaStartTime_AllDay"]="ca\u0142y dzie\u0144";l["LIT_AgendaStartTime_Ends"]="Ko\u0144czy si\u0119";l["RD_And"]="i";l["RD_AtTime"]="o {0}";l["RD_Effective1"]="obowi\u0105zuje od {0}";l["RD_Effective2"]="obowi\u0105zuje od {0} do {1}";l["RD_Effective3"]="obowi\u0105zuje {0} od {1} do {2}";l["RD_Effective4"]="obowi\u0105zuje {0} o {1}";l["RD_Effective5"]="obowi\u0105zuje od {0} do {1} o {2}";l["RD_Effective6"]="obowi\u0105zuje od {0} do {1}, od {2} do {3}";l["RD_Every"]="co {0} {1}";l["RD_FrequencyLiterals"]="rok,miesi\u0105c,tydzie\u0144,dzie\u0144,godzina,minuta,sekunda";l["RD_FrequencyLiterals2"]="rocznie,miesi\u0119cznie,tygodniowo,dzienne,godzinowo,minutowo,sekundowo";l["RD_FrequencyLiteralsPlural"]="lata,miesi\u0105ce,tygodnie,dni,godziny,minuty,sekundy";l["RD_InMonth"]="w miesi\u0105cu {0}";l["RD_Last"]="ostatni/ostatniego";l["RD_NumberSuffix_nd"]=".";l["RD_NumberSuffix_rd"]=".";l["RD_NumberSuffix_st"]=".";l["RD_NumberSuffix_th"]=".";l["RD_OccurrenceOfThe"]="wyst\u0105pienie";l["RD_OfEveryMinuteOrHour"]="ka\u017cdej {0}";l["RD_OfTheMonthOrYear"]="{0}";l["RD_OfTheNthMinuteOrHour"]="{0} {1}";l["RD_OnEach"]="ka\u017cdego";l["RD_OnEverySecond"]="w ka\u017cdej sekundzie";l["RD_OnThe"]="w";l["RD_OnTheNthSecond"]="w {0} sek.";l["RD_Or"]="lub";l["RD_OrdinalDayOfMonthUsesSuffix"]="prawda";l["RD_OrdinalNumberWithSuffix"]="{0} {1}";l["RD_RecurrenceDescriptionOverallStructure"]="Wyst\u0119puje {0} {1} {2}";l["RD_RepeatingMultipleTimes"]="powtarza si\u0119 {0} razy";l["RD_RepeatingOneTime"]="powtarza si\u0119 raz";l["RD_RulesInMonth"]="{0} {1}";l["RD_ToTheLast"]="do ostatniego";l["RD_Weekday"]="dzie\u0144 powszedni";l["RD_WeekendDay"]="dzie\u0144 weekendowy";l["RD_WeekOrDayOfTheMonthOrYear"]="{0} {1}";l["ScheduleDayOfWeekSettings_Exception_InvalidValue"]="Nie mo\u017cna pomy\u015blnie przeanalizowa\u0107 warto\u015bci '{0}'.";l["WorkingHourTimeRange_Exception_CannotModifyTime"]="Nie mo\u017cna zmodyfikowa\u0107 w\u0142a\u015bciwo\u015bci {0}, poniewa\u017c to wyst\u0105pienie dodano ju\u017c do kolekcji WorkingHours.";$.ig.schedulerCore=$.ig.schedulerCore||{};$.ig.schedulerCore.locale=$.ig.schedulerCore.locale||l;return l});