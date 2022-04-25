/*!@license
* Infragistics.Web.ClientUI infragistics.scheduler.core.js resources 21.2.20212.99
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.de=$.ig.locale.de||{};$.ig.locale.de.schedulerCore=$.ig.locale.de.schedulerCore||{};var l=$.ig.locale.de.schedulerCore;l["ActivityBase_Exception_CannotModifyOccurrenceProperty"]="Der Wert der Eigenschaft {0} kann nicht in dieser Instanz {1} ge\xe4ndert werden, weil er Teil einer Serie ist.";l["LE_ActivityBase_DisassociatedResource"]="Die angegebene Ressource ist nicht derselben Datenquelle wie diese Aktivit\xe4t zugeordnet.";l["LE_AppointmentItemsSource_CannotEdit"]="Die Terminelementquelle unterst\xfctzt keine \xc4nderung ihres Inhalts.";l["LE_AppointmentItemsSource_InvalidValue_JS"]="Der angegebene Wert muss ein JSON-Array oder eine $ .ig.DataSource-Instanz sein.";l["LE_AppointmentItemsSource_NoIList_DOTNET"]="The AppointmentItemsSource does not support modification of its contents. The item source must implement System.Collections.IList in order to support modifications.";l["LE_AppointmentPropertyMapping_RecurrenceRoot"]="The RecurrenceRoot property is not bindable and cannot be mapped. Create a mapping for the RecurrenceId property instead.";l["LE_AppointmentPropertyMapping_Resource"]="The Resource property is not bindable and cannot be mapped. Create a mapping for the ResourceId property instead.";l["LE_BeginEdit_CreatePending"]="Die angegebene Aktivit\xe4t kann nicht bearbeitet werden, da eine 'Create'-Operation ansteht.";l["LE_CannotCreateDataObject_DOTNET"]="Neue Datenobjektinstanz konnte nicht erstellt werden. Ensure that your data object type has a parameterless constructor. If it does not, assign a delegate to the CreateAppointmentDataObjectCallback property which creates new instances of this type.";l["LE_CannotModifyApppointmentsWhenDataSourceSet"]="Operation is not valid while DataSource is in use. Access and modify elements with Scheduler.DataSource instead.";l["LE_CannotSetDataSourceWhenAppointmentsAreDefined"]="Die Terminauflistung muss vor der Verwendung von DataSource leer sein.";l["LE_CouldNotConvertColorScheme"]="Der Wert '{0}' konnte nicht in einen ScheduleResourceColorScheme-Wert konvertiert werden.";l["LE_CouldNotConvertValue"]="Der Wert '{0}' konnte nicht in den Typ {1} konvertiert werden.";l["LE_CreateDataObjectFailed"]="Neue Datenobjektinstanz konnte nicht erstellt werden.";l["LE_DataObjectNotAssociated"]="Das angegebene Datenobjekt ist keinem Termin zugeordnet.";l["LE_DuplicateIdentifier"]="The identifier '{0}' is already in use. Activity/Resource identifiers must be unique.";l["LE_EndEdit_DataObjectAlreadyAssociated"]="Dieses Datenobjekt ist bereits einer Aktivit\xe4t zugeordnet.";l["LE_EndEdit_NotInEditMode"]="EndEdit cannot be called on the specified activity because it is not in edit mode. BeginEdit must be called first before an activity edit operation can be committed.";l["LE_InvalidDayOfWeekRule"]="Die angegebene Wochentagregel ist ung\xfcltig.";l["LE_MissingIdentifier"]="Kennung fehlt.";l["LE_NoAppointmentItemsSource"]="Die AppointmentItemsSource wurde nicht zugewiesen.";l["LE_NoCreateAppointmentDataObjectCallback_JS"]="A new data object instance could not be created. You must specify a value for the CreateAppointmentDataObjectCallback property.";l["LE_NoDataObject"]="Das zugrunde liegende Datenobjekt der angegebenen Aktivit\xe4t ist in der Elementquelle nicht vorhanden.";l["LE_NoPropertyMapping_Appointment"]="F\xfcr Appointment-Eigenschaft '{0}' ist keine Eigenschaftszuordnung vorhanden.";l["LE_RecurrenceParsing"]="Error parsing recurrence, context: {0}";l["LE_RecurrenceSerializing"]="Error serializing recurrence, context: {0}";l["LE_SchedulePropertyMap_Missing"]="Die folgenden erforderlichen Eigenschaftszuordnungen wurden nicht definiert:";l["LE_SchedulePropertyMap_NoPropertyFound"]="F\xfcr das zugrunde liegende Datenobjekt wurde keine \xf6ffentliche Eigenschaft mit dem Namen '{0}' gefunden.";l["LIT_AgendaDayHeader_Today"]="Heute";l["LIT_AgendaNoEventsMessage"]="Keine Ereignisse";l["LIT_AgendaStartTime_AllDay"]="all-day";l["LIT_AgendaStartTime_Ends"]="Endet";l["RD_And"]="und";l["RD_AtTime"]="um {0}";l["RD_Effective1"]="ab dem {0}";l["RD_Effective2"]="vom {0} bis zum {1}";l["RD_Effective3"]="ab dem {0} von {1} bis {2}";l["RD_Effective4"]="ab dem {0} um {1}";l["RD_Effective5"]="ab dem {0} bis zum {1} um {2}";l["RD_Effective6"]="ab dem {0} bis zum {1} von {2} bis {3}";l["RD_Every"]="alle {0} {1}";l["RD_FrequencyLiterals"]="Jahr,Monat,Woche,Tag,Stunde,Minute,Sekunde";l["RD_FrequencyLiterals2"]="j\xe4hrlich,monatlich,w\xf6chentlich,t\xe4glich,st\xfcndlich,min\xfctlich,sek\xfcndlich";l["RD_FrequencyLiteralsPlural"]="Jahre,Monate,Wochen,Tage,Stunden,Minuten,Sekunden";l["RD_InMonth"]="im {0}";l["RD_Last"]="letzten";l["RD_NumberSuffix_nd"]=".";l["RD_NumberSuffix_rd"]=".";l["RD_NumberSuffix_st"]=".";l["RD_NumberSuffix_th"]=".";l["RD_OccurrenceOfThe"]="Serienelement am";l["RD_OfEveryMinuteOrHour"]="von jeder {0}";l["RD_OfTheMonthOrYear"]="im {0}";l["RD_OfTheNthMinuteOrHour"]="der {0} {1}";l["RD_OnEach"]="jeden";l["RD_OnEverySecond"]="jede Sekunde";l["RD_OnThe"]="am";l["RD_OnTheNthSecond"]="in der {0} Sekunde";l["RD_Or"]="oder";l["RD_OrdinalDayOfMonthUsesSuffix"]="true";l["RD_OrdinalNumberWithSuffix"]="{0}{1}";l["RD_RecurrenceDescriptionOverallStructure"]="Erfolgt {0}{1}{2}";l["RD_RepeatingMultipleTimes"]="wird {0} Mal wiederholt";l["RD_RepeatingOneTime"]="wird einmal wiederholt";l["RD_RulesInMonth"]="{0} {1}";l["RD_ToTheLast"]="bis zum letzten";l["RD_Weekday"]="Wochentag";l["RD_WeekendDay"]="Wochenendtag";l["RD_WeekOrDayOfTheMonthOrYear"]="{0} {1}";l["ScheduleDayOfWeekSettings_Exception_InvalidValue"]="Der Wert '{0}' konnte nicht erfolgreich analysiert werden.";l["WorkingHourTimeRange_Exception_CannotModifyTime"]="Die {0}-Eigenschaft kann nicht ge\xe4ndert werden, weil diese Instanz bereits der Arbeitsstunden-Sammlung hinzugef\xfcgt wurde.";$.ig.schedulerCore=$.ig.schedulerCore||{};$.ig.schedulerCore.locale=$.ig.schedulerCore.locale||l;return l});