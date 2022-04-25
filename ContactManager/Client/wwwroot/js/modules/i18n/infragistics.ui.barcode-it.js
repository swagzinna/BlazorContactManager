/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 21.2.13
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.it=$.ig.locale.it||{};$.ig.Barcode=$.ig.Barcode||{};$.ig.locale.it.Barcode={aILength:"L'intelligenza artificiale deve contenere almeno 2 cifre.",badFormedUCCValue:"Il valore della propriet\xe0 Data del codice a barre UCC non \xe8 corretto. Dovrebbe apparire come (AI)GTIN.",code39_NonNumericError:"Il carattere '{0}' non \xe8 valido per il valore della propriet\xe0 Dati CODE39. Quelli validi sono: {1}",countryError:"Errore durante la conversione del codice valore propriet\xe0 Paese. Dovrebbe essere un valore numerico.",emptyValueMsg:"Il valore della propriet\xe0 Data \xe8 vuoto.",encodingError:"Errore nella conversione. Fare riferimento alla documentazione per i valori di propriet\xe0 validi.",errorMessageText:"Valore non valido! Fare riferimento alla documentazione per la struttura del valore della propriet\xe0 Data del codice a barre valida.",gS1ExMaxAlphanumNumber:"La famiglia GS1 DataBar Expanded pu\xf2 codificare fino a 41 caratteri alfanumerici.",gS1ExMaxNumericNumber:"La famiglia GS1 DataBar Expanded pu\xf2 codificare fino a 74 caratteri numerici.",gS1Length:"Il valore della propriet\xe0 Dati GS1 DataBar viene utilizzato per GTIN - 8, 12, 13, 14 e la sua lunghezza deve essere 7, 11, 12 o 13. L'ultima cifra \xe8 riservata a una somma di controllo.",gS1LimitedFirstChar:"Il codice a barre GS1 DataBar Limited deve contenere 0 o 1 nella prima cifra. Quando si codificano dati GTIN-14 con un valore di Indicatore maggiore di 1, \xe8 necessario utilizzare il tipo di codice a barre Omnidirezionale, Impilato, Omnidirezionale impilato o Troncato.",i25Length:"Il codice a barre Interleaved2of5 deve contenere un numero pari di cifre. Puoi mettere 0 in primo piano se si tratta di un numero dispari.",intelligentMailLength:"La lunghezza del valore della propriet\xe0 Dati codice a barre posta intelligente deve essere di 20, 25, 29 o 31 caratteri: codice traccia a 20 cifre (2 per l'identificatore del codice a barre, 3 per l'identificatore del tipo di servizio, 6 o 9 per l'identificatore del mailer e 9 o 6 per il numero di serie) e 0, 5, 9 o 11 simboli di codice postale.",intelligentMailSecondDigit:"La seconda cifra deve essere compresa nell'intervallo 0-4.",invalidAI:"Stringhe di elementi Identificatore applicazione non valide. Assicurarsi che la stringa AI nel valore della propriet\xe0 Data sia ben formata.",invalidCharacter:"Il carattere '{0}' non \xe8 valido per il tipo di codice a barre corrente. Quelli validi sono: {1}",invalidDimension:"Impossibile determinare la dimensione del codice a barre a causa di una combinazione errata dei valori delle propriet\xe0 Stretch, BarsFillMode e XDimension.",invalidHeight:"Questo numero di righe della griglia del codice a barre ({0}) non pu\xf2 rientrare in tale altezza ({1} pixel).",invalidLength:"Il valore della propriet\xe0 Data del codice a barre deve contenere {0} cifre.",invalidPostalCode:"Valore del codice postale non valido: la modalit\xe0 2 codifica fino a un codice postale di 9 cifre (codice postale USA) mentre la modalit\xe0 3 codifica un codice alfanumerico di massimo 6 caratteri.",invalidPropertyValue:"Il valore della propriet\xe0 {0} deve essere compreso nell'intervallo {1}-{2}.",invalidVersion:"Il numero del valore di propriet\xe0 SizeVersion non genera abbastanza celle per codificare i dati con la modalit\xe0 di codifica corrente e il livello di correzione degli errori.",invalidWidth:"Questo numero di colonne della griglia del codice a barre ({0}) non pu\xf2 adattarsi a tale larghezza ({1} pixel). Controllare i valori della propriet\xe0 XDimension o / e WidthToHeightRatio.",invalidXDimensionValue:"Il valore della propriet\xe0 XDimension deve essere compreso tra {0} e {1} per il tipo di codice a barre corrente.",maxLength:"La lunghezza {0} del testo supera il massimo codificabile per il tipo di codice a barre corrente. Potrebbe codificare massimo {1} caratteri.",notSupportedEncoding:"La codifica corrispondente in {0} {1} non \xe8 supportata.",pDF417InvalidRowsColumnsCombination:"I codici (correzione dati ed errori) sono pi\xf9 di quanti possano essere codificati in un simbolo con una matrice {0} x {1}.",primaryMessageError:"Impossibile estrarre il messaggio principale dal valore della propriet\xe0 Data. Fare riferimento alla documentazione per la sua struttura.",serviceClassError:"Errore durante la conversione della classe di servizio. Dovrebbe essere un valore numerico.",smallSize:"Impossibile adattare la griglia in Dimensioni ({0}, {1}) con le impostazioni di stiramento definite.",unencodableCharacter:"Il carattere '{0}' non pu\xf2 essere codificato.",uPCEFirstDigit:"La prima cifra UPCE deve essere sempre zero in base alle specifiche.",warningString:"Avviso codice a barre: ",wrongCompactionMode:"Il valore della propriet\xe0 Data non pu\xf2 essere compattato con la modalit\xe0 {0}.",notLoadedEncoding:"La codifica {0} non \xe8 stata caricata."};$.ig.Barcode.locale=$.ig.Barcode.locale||$.ig.locale.it.Barcode;return $.ig.locale.it.Barcode});