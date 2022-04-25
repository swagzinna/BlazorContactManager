/*!@license
* Infragistics.Web.ClientUI infragistics.undo.js resources 21.2.20212.99
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.sv=$.ig.locale.sv||{};$.ig.locale.sv.undo=$.ig.locale.sv.undo||{};var l=$.ig.locale.sv.undo;l["AddItemDescription"]="L\xe4gg till '{1}'";l["AddItemDescriptionDetailed"]="L\xe4gg till '{1}'";l["AddRangeDescription"]="L\xe4gg till {1} {2}";l["AddRangeDescriptionDetailed"]="L\xe4gg till {1} {2}";l["FallbackTransactionDescription"]="";l["LE_AddOpenTransaction"]="Det g\xe5r inte att l\xe4gga till en UndoTransaction som inte har \xf6ppnats eller fortfarande \xe4r \xf6ppen.";l["LE_AddTransactionDirect"]="UndoTransaction kan inte l\xe4ggas till. RootTransaction l\xe4ggs automatiskt till vid Commit.";l["LE_AddUnitWhileTransactionOpen"]="Det g\xe5r inte att l\xe4gga till en UndoUnit medan transaktionen inneh\xe5ller en kapslad \xf6ppen transaktion '{0}'.";l["LE_ArgumentIsNegative"]="{0} m\xe5ste vara 0 eller h\xf6gre. Verkligt v\xe4rde: '{1}'";l["LE_CannotExecuteOpenTransaction"]="Det g\xe5r inte att \xe5beropa Execute medan transaktionen '{0}' \xe4r \xf6ppen.";l["LE_ChangeHistoryInMerge"]="Det g\xe5r inte att \xe4ndra \xc5ngra/G\xf6r om-historiken medan en Sammanfogning \xe5beropas";l["LE_ChangeHistoryInRemoveAll"]="Det g\xe5r inte att \xe4ndra historiken f\xf6r \xc5ngra/G\xf6r om medan RemoveAll \xe5beropas.";l["LE_ChildTransactionNotInUnits"]="Den angivna underordnade transaktionen '{0}' ing\xe5r inte i enheterna i den h\xe4r transaktionen.";l["LE_ClosingOtherTransaction"]="Den angivna transaktionen '{0}' \xe4r inte den f\xf6r n\xe4rvarande \xf6ppna transaktionen '{1}'.";l["LE_EndTransactionWhileSuspended"]="Det g\xe5r inte att st\xe4nga en transaktion medan UndoManager \xe4r avst\xe4ngd.";l["LE_EnumEnded"]="R\xe4knaren slutf\xf6rdes.";l["LE_EnumFailedVersion"]="Samlingen modifierades efter att uppr\xe4karen startades.";l["LE_EnumNotStarted"]="R\xe4knaren startades inte. Anropa MoveNext.";l["LE_FactoryNullTransaction"]="UndoUnitFactory returnerade en null UndoTransaction.";l["LE_HasOpenTransaction"]="En transaktion har redan \xf6ppnats.";l["LE_HistoryItemNotInCurrentHistory"]="UndoHistoryItem finns inte inom tillh\xf6rande Undo- eller Redo-historiken i UndoManager.";l["LE_InvalidTransactionOwner"]="Den angivna transaktionens \xe4gare \xe4r inte detta objekt.";l["LE_NeedAddRemoveAction"]='Den angivna \xe5tg\xe4rden m\xe5ste vara "L\xe4gg till" eller "Ta bort".';l["LE_NewTransactionWhileSuspended"]="En transaktion kan inte startas medan UndoManager \xe4r avst\xe4ngd.";l["LE_RangeCollectionAction"]="Omr\xe5des\xe5tg\xe4rder st\xf6ds inte.";l["LE_ReferenceNotRegistered"]="Den angivna referensen '{0}' har inte registrerats med en UndoManager-instans. Anv\xe4nd metoden RegisterReference f\xf6r att registrera referensen med en UndoManager eller skicka null som \"referens\" f\xf6r att anv\xe4nda UndoManager.Current:s tr\xe5ds statiska / delade instans.";l["LE_ReferenceRegisteredToOther"]="Den angivna referensen '{0}' registreras med en annan UndoManager-instans.";l["LE_RemoveAllFailedVersion"]="Samlingen modifierades under anropandet till RemoveAll.";l["LE_ResetCollectionAction"]="\xc5terst\xe4llnings\xe5tg\xe4rd st\xf6ds inte.";l["LE_TargetCollectionIsReadOnly"]="Den angivna samlingen '{0}' kan inte vara skrivskyddad.";l["LE_TransactionAlreadyOpened"]="Transaktionen har redan inletts.";l["LE_TransactionClosed"]="Transaktionen kan inte \xe4ndras n\xe4r den har avslutats.";l["LE_TransactionNotOpened"]="Den angivna transaktionen '{0}' \xe4r inte \xf6ppen.";l["LE_TransactionNotStarted"]="Transaktionen kan inte \xe4ndras f\xf6rr\xe4n den har startats.";l["LE_UndoManagerAsReference"]='En "UndoManager" -instans kan inte vara en referens.';l["LE_UndoRedoInRollback"]="Det g\xe5r inte att utf\xf6ra en \xc5ngra/G\xf6r om medan en \xc5terst\xe4llning p\xe5g\xe5r.";l["LE_UndoRedoInTransaction"]="Det g\xe5r inte att utf\xf6ra en \xc5ngra/G\xf6r om medan en transaktion \xe4r \xf6ppen.";l["LE_UndoRedoInUndoRedo"]="Det g\xe5r inte att utf\xf6ra en \xc5ngra/G\xf6r om medan en \xc5ngra/G\xf6r om redan p\xe5g\xe5r.";l["LE_UndoRedoWhileSuspended"]="Det g\xe5r inte att utf\xf6ra en \xc5ngra/G\xf6r om medan UndoManager har st\xe4ngts av.";l["MoveItemDescription"]="Flytta '{1}'";l["MoveItemDescriptionDetailed"]="Flytta '{1}' fr\xe5n '{2}' till '{3}'";l["PropertyChangeDescription"]="\xc4ndra '{0}' p\xe5 '{1}'";l["PropertyChangeDescriptionDetailed"]="\xc4ndra '{0}' p\xe5 '{1}' till '{3}'";l["ReinitializeCollectionDescription"]="Parti '{2}' \xc4ndra";l["ReinitializeCollectionDescriptionDetailed"]="Parti '{2}' \xc4ndra";l["RemoveItemDescription"]="Ta bort '{1}'";l["RemoveItemDescriptionDetailed"]="Ta bort '{1}'";l["RemoveRangeDescription"]="Ta bort {1} {2}";l["RemoveRangeDescriptionDetailed"]="Ta bort {1} {2}";l["ReplaceItemDescription"]="Byt ut '{1}'";l["ReplaceItemDescriptionDetailed"]="Ers\xe4tt '{1}' med '{2}'";$.ig.undo=$.ig.undo||{};$.ig.undo.locale=$.ig.undo.locale||l;return l});