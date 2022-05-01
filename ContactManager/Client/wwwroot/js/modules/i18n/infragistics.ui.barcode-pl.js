/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 21.2.13
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.pl=$.ig.locale.pl||{};$.ig.Barcode=$.ig.Barcode||{};$.ig.locale.pl.Barcode={aILength:"AI musi zawiera\u0107 co najmniej 2\xa0cyfry.",badFormedUCCValue:"Warto\u015b\u0107 w\u0142a\u015bciwo\u015bci Dane kodu kreskowego UCC jest sformu\u0142owana nieprawid\u0142owo. Powinna wygl\u0105da\u0107, jak (AI)GTIN.",code39_NonNumericError:"Znak '{0}' jest nieprawid\u0142owy dla warto\u015bci w\u0142a\u015bciwo\u015bci CODE39 Data. Prawid\u0142owo: {1}",countryError:"B\u0142\u0105d podczas konwertowania kodu warto\u015bci w\u0142a\u015bciwo\u015bci kraju. Powinna to by\u0107 warto\u015b\u0107 liczbowa.",emptyValueMsg:"Warto\u015b\u0107 w\u0142a\u015bciwo\u015bci Dane jest pusta.",encodingError:"B\u0142\u0105d podczas konwertowania. Prawid\u0142owe warto\u015bci w\u0142a\u015bciwo\u015bci mo\u017cna znale\u017a\u0107 w dokumentacji.",errorMessageText:"Nieprawid\u0142owa warto\u015b\u0107! Zapoznaj si\u0119 z dokumentacj\u0105 dotycz\u0105c\u0105 prawid\u0142owej struktury warto\u015bci w\u0142a\u015bciwo\u015bci danych kodu kreskowego.",gS1ExMaxAlphanumNumber:"Za pomoc\u0105 rodziny GS1 DataBar Expanded mo\u017cna zakodowa\u0107 do 41 znak\xf3w alfanumerycznych.",gS1ExMaxNumericNumber:"Za pomoc\u0105 rodziny GS1 DataBar Expanded mo\u017cna zakodowa\u0107 do 74 znak\xf3w liczbowych.",gS1Length:"Warto\u015b\u0107 w\u0142a\u015bciwo\u015bci GS1 DataBar Data jest u\u017cywana dla numeru GTIN - 8, 12, 13, 14, a jego d\u0142ugo\u015b\u0107 powinna wynosi\u0107 7, 11, 12 lub 13. Ostatni znak jest zarezerwowany na sum\u0119 kontroln\u0105.",gS1LimitedFirstChar:"Pierwszym znakiem kodu kreskowego GS1 DataBar Limited powinno by\u0107 0 lub 1. W przypadku kodowania danych GTIN-14 z warto\u015bci\u0105 wska\u017anika wi\u0119ksz\u0105 ni\u017c 1 nale\u017cy u\u017cy\u0107 kodu kreskowego typu wielokierunkowego, z\u0142o\u017conego, z\u0142o\u017conego wielokierunkowego lub obci\u0119tego.",i25Length:"Kod kreskowy Interleaved2of5 powinien mie\u0107 parzyst\u0105 liczb\u0119 cyfr. Mo\u017cna umie\u015bci\u0107 0 na pocz\u0105tku, je\u015bli liczba cyfr jest nieparzysta.",intelligentMailLength:"D\u0142ugo\u015b\u0107 warto\u015bci w\u0142a\u015bciwo\u015bci Intelligent Mail barcode Data powinna wynosi\u0107 20, 25, 29 lub 31 znak\xf3w - 20-cyfrowy kod \u015bcie\u017cki (2 dla identyfikatora kodu kreskowego, 3 dla identyfikatora typu us\u0142ugi, 6 lub 9 dla identyfikatora przesy\u0142ki i 9 lub 6 dla numeru seryjnego) oraz 0, 5, 9 lub 11 symboli kodu pocztowego.",intelligentMailSecondDigit:"Druga cyfra powinna zawiera\u0107 si\u0119 w przedziale 0\u20134.",invalidAI:"Nieprawid\u0142owe ci\u0105gi element\xf3w identyfikatora aplikacji. Upewnij si\u0119, \u017ce ci\u0105g AI w warto\u015bci w\u0142a\u015bciwo\u015bci Data jest prawid\u0142owo sformu\u0142owany.",invalidCharacter:"Znak '{0}' jest nieprawid\u0142owy dla bie\u017c\u0105cego typu kodu kreskowego. Prawid\u0142owo: {1}",invalidDimension:"Nie mo\u017cna okre\u015bli\u0107 wymiaru kodu kreskowego z powodu nieprawid\u0142owej kombinacji warto\u015bci w\u0142a\u015bciwo\u015bci Stretch, BarsFillMode i XDimension.",invalidHeight:"Ta liczba wierszy siatki kodu kreskowego ({0}) nie zmie\u015bci si\u0119 w takiej wysoko\u015bci ({1} pikseli(-e)).",invalidLength:"Warto\u015b\u0107 w\u0142a\u015bciwo\u015bci Data kodu kreskowego powinna mie\u0107 {0} cyfr.",invalidPostalCode:"Nieprawid\u0142owa warto\u015b\u0107 kodu pocztowego - Mode\xa02 koduje maksymalnie 9-cyfrowy kod pocztowy (ameryka\u0144ski kod pocztowy), podczas gdy Mode\xa03 koduje maksymalnie 6 znak\xf3w alfanumerycznych.",invalidPropertyValue:"Warto\u015b\u0107 w\u0142a\u015bciwo\u015bci {0} powinna zawiera\u0107 si\u0119 w przedziale od {1} do {2}.",invalidVersion:"Numer warto\u015bci w\u0142a\u015bciwo\u015bci SizeVersion nie generuje wystarczaj\u0105cej liczby kom\xf3rek do zakodowania danych przy u\u017cyciu bie\u017c\u0105cego trybu kodowania i poziomu korekcji b\u0142\u0119d\xf3w.",invalidWidth:"Ta liczba kolumn siatki kodu kreskowego ({0}) nie zmie\u015bci si\u0119 w takiej szeroko\u015bci ({1} pikseli(-e)). Sprawd\u017a warto\u015bci w\u0142a\u015bciwo\u015bci XDimension i/lub WidthToHeightRatio.",invalidXDimensionValue:"W przypadku bie\u017c\u0105cego typu kodu kreskowego warto\u015b\u0107 w\u0142a\u015bciwo\u015bci XDimension powinna zawiera\u0107 si\u0119 w przedziale od {0} do {1}.",maxLength:"W przypadku bie\u017c\u0105cego typu kodu kreskowego d\u0142ugo\u015b\u0107 {0} tekstu przekracza maksymalny mo\u017cliwy do zakodowania kod. Mo\u017cna zakodowa\u0107 maksymalnie {1} znak\xf3w(-i).",notSupportedEncoding:"Kodowanie odpowiadaj\u0105ce {0} {1} nie jest obs\u0142ugiwane.",pDF417InvalidRowsColumnsCombination:"Liczba s\u0142\xf3w kodowych (dane i korekcja b\u0142\u0119d\xf3w) przekracza liczb\u0119, jak\u0105 mo\u017cna zakodowa\u0107 w symbolach z tablic\u0105 {0} x {1}.",primaryMessageError:"Nie mo\u017cna wyodr\u0119bni\u0107 podstawowej wiadomo\u015bci z warto\u015bci w\u0142a\u015bciwo\u015bci Data. Zapoznaj si\u0119 z dokumentacj\u0105 dotycz\u0105c\u0105 jej struktury.",serviceClassError:"B\u0142\u0105d podczas konwersji klasy us\u0142ugi. Powinna to by\u0107 warto\u015b\u0107 liczbowa.",smallSize:"Nie mo\u017cna dopasowa\u0107 siatki podanego rozmiaru ({0}, {1}) ze zdefiniowanymi ustawieniami rozci\u0105gni\u0119cia Stretch.",unencodableCharacter:"Nie mo\u017cna zakodowa\u0107 znaku '{0}'.",uPCEFirstDigit:"Wed\u0142ug specyfikacji pierwsza cyfra UPCE zawsze b\u0119dzie wynosi\u0107 zero.",warningString:"Ostrze\u017cenie dotycz\u0105ce kodu kreskowego: ",wrongCompactionMode:"Warto\u015b\u0107 w\u0142a\u015bciwo\u015bci Data nie mo\u017ce by\u0107 kompaktowana w trybie {0}.",notLoadedEncoding:"Kodowanie {0} nie zosta\u0142o za\u0142adowane."};$.ig.Barcode.locale=$.ig.Barcode.locale||$.ig.locale.pl.Barcode;return $.ig.locale.pl.Barcode});