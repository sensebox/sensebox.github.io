---
layout: project_page
name: "Mobiler Datenlogger für Feinstaubwerte(LoRa)"
date: 2019-05-06
author: Paul
abstract: "Ein mobiles Feinstaubmessgerät, das die Daten per TTN über LoRa an die OpenSenseMap sendet"
image:  /mobile_feinstaubstation/lora/lora_oled.jpg
image0: /images/projects/mobile_feinstaubstation/lora/EUI.png
image1: /images/projects/mobile_feinstaubstation/lora/ids.png
image2: /images/projects/mobile_feinstaubstation/lora/decodingprofile.png
image3: /images/projects/mobile_feinstaubstation/lora/osem_httpinteg.png
image4: /images/projects/mobile_feinstaubstation/lora/lora_oled.jpg
image5: /images/projects/mobile_feinstaubstation/lora/final_osem.jpg
image6: /images/projects/mobile_feinstaubstation/lora/osem_decoder.png
image7: /images/projects/mobile_feinstaubstation/lora/gps_uart.jpg
material:
    - senseBox MCU
    - OLED Display
    - Temperatur und Luftfeuchtesensor(HDC 1080)
    - Feinstaubsensor(SDS011)
    - GPS Modul
    - LoRa Bee
    - JST Kabel
ide: arduino
version: ["edu", "mini"]   
addons: ["GPS", "LoRa-Bee", "Feinstaubsensor"] 
lang: de
tags: ["Informatik","TTN","LoRa","Feinstaub","Geographie"]
difficult: sehr schwer
---
<head><title>Mobiler Feinstaublogger mit GPS und LoRa</title></head>

# Mobiler Datenlogger für Feinstaubwerte(LoRa)
In diesem Projekt wird mit der SenseBoxMCU ein mobiler Feinstaubmesser gebaut, der auf Knopfdruck seine Messwerte auf der SD-Karte speichert und sie mit GPS-Koordinaten an die OpenSenseMap schickt. Dafür wird in dieser Variante der LoRa Funkstandard benutzt, der die Daten über TheThingsNetwork an die OpenSenseMap sendet.

## Aufbau
Für den Aufbau werden folgende Komponenten verwendet. Achte darauf, dass das LoRa-Bee auf den XBEE Steckplatz 1 und der Feinstaubsensor auf UART 2 aufgesteckt werden muss. 
Man braucht:
  - den LoRa Bee

  - das OLED-Display

  - den HDC 1080

  - das GPS-Modul

  - den SDS011 
  




## TheThingsNetwork & OpenSenseMap(OSeM)-Setup

Bevor du die SenseBox mit der [OSeM](https://opensensemap.org) verbinden kannst, musst du dir erst einmal ein [TheThingsNetwork](https://console.thethingsnetwork.org) Konto, eine Application und ein Device erstellen. Dabei erhältst du eine Application EUI, eine Device EUI und einen Appkey, diese musst du später im Code eintragen. Dabei ist das Format der Keys und EUI´s wichtig
{% include image.html image=page.image0 %}
Bei der Registrierung bestimmst du außerdem noch eine ``App_ID`` und eine ``Dev_ID``, diese müssen im TheThingsNetwork-Reiter in der OpenSenseMap eingetragen werden:
{% include image.html image=page.image1 %}

Wenn dein TTN-Konto, die Application und das Device eingerichtet sind, musst du noch eine Weiterleitung an die OpenSenseMap einrichten, eine sogennante HTTP-Integration. Diese befindet sich unter Console, Integrations. Hier klickst du auf "add Integration" und trägst die Werte ein:
{% include image.html image=page.image3 %}

Die hier nicht aufgelisteten Zeilen *sollten* leer bleiben.

Jetzt muss nur noch unter Payload Formats im Reiter "Decoder" der folgende Javascript-Code eingetragen werden:
```
function Decoder(bytes, port) {
 // bytes is of type Buffer.
 'use strict';
 var TEMPSENSOR_ID="Deine Temperatursensor ID",
   HUMISENSOR_ID="Deine Luftfeuchtesensor ID",
   PM10_ID="Deine PM10-Sensor ID",
   PM25_ID="Deine PM25-Sensor ID";
  var lat = 0,lng = 0;
 var bytesToInt = function (bytes) {
   var i = 0;
   for (var x = 0; x < bytes.length; x++) {
     i |= +(bytes[x] << (x * 8));
   }
   return i;
 };

 var latLng = function(bytes) {
  if (bytes.length !== latLng.BYTES) {
    throw new Error('Lat/Long must have exactly 8 bytes');
  }

  lat = (bytesToInt(bytes.slice(0, latLng.BYTES / 2))/1e2)/10000;
  lng = (bytesToInt(bytes.slice(latLng.BYTES / 2, latLng.BYTES))/1e2)/10000;

};
latLng.BYTES = 8;

 var uint8 = function (bytes) {
   if (bytes.length !== uint8.BYTES) {
     throw new Error('int must have exactly 1 byte');
   }
   return bytesToInt(bytes);
 };
 uint8.BYTES = 1;

 var uint16 = function (bytes) {
   if (bytes.length !== uint16.BYTES) {
     throw new Error('int must have exactly 2 bytes');
   }
   return bytesToInt(bytes);
 };
 uint16.BYTES = 2;


 var humidity = function (bytes) {
   if (bytes.length !== humidity.BYTES) {
     throw new Error('Humidity must have exactly 2 bytes');
   }

   var h = bytesToInt(bytes);
   return h / 1e2;
 };
 humidity.BYTES = 2;

 
```
In diesem ersten Abschnitt werden alle Datentypen definiert, die per LoRa geschickt werden können. Dabei werden auch gleich die Decodiermethoden mitgegeben.
```
 var decode = function (bytes, mask, names) {

   var maskLength = mask.reduce(function (prev, cur) {
     return prev + cur.BYTES;
   }, 0);
   if (bytes.length < maskLength) {
     throw new Error('Mask length is ' + maskLength + ' whereas input is ' + bytes.length);
   }

   names = names || [];
   var offset = 0;
   return mask
     .map(function (decodeFn) {
       var current = bytes.slice(offset, offset += decodeFn.BYTES);
       return decodeFn(current);
     })
     .reduce(function (prev, cur, idx) {
       prev[names[idx] || idx] = cur;
       return prev;
     }, {});
 };
 var bytesToSenseBoxJson = function (bytes) {
   var json;

   try {
     json = decode(bytes,
       [
       uint16,
       humidity,
       uint16,
       uint16,
       latLng,
       uint16,
       uint16,
       uint16,
       uint16,
       uint16,
       uint16
       ],
       [
       TEMPSENSOR_ID,
       HUMISENSOR_ID,
       PM10_ID,
       PM25_ID,
       "location",
       "year",
       "month",
       "day",
       "hour",
       "minute",
       "second",
       ]);

    if(json["month"] == 0){
      json["month"] = 1;
    }
    if(json["day"] == 0){
      json["day"] = 1;
    }
     //temp
     json[TEMPSENSOR_ID] = [String(parseFloat(((json[TEMPSENSOR_ID] / 771) - 18).toFixed(1))),String(json["year"])+"-"+String(("0" + json["month"]).slice(-2))+"-"+String(("0" + json["day"]).slice(-2))+"T"+String(("0" + json["hour"]).slice(-2))+":"+String(("0" + json["minute"]).slice(-2))+":"+String(("0" + json["second"]).slice(-2))+"Z",[lng,lat]];

     //hum
     json[HUMISENSOR_ID] = [String(parseFloat(json[HUMISENSOR_ID].toFixed(1))),String(json["year"])+"-"+String(("0" + json["month"]).slice(-2))+"-"+String(("0" + json["day"]).slice(-2))+"T"+String(("0" + json["hour"]).slice(-2))+":"+String(("0" + json["minute"]).slice(-2))+":"+String(("0" + json["second"]).slice(-2))+"Z",[lng,lat]];

     // pm10
     json[PM10_ID] = [String(parseFloat((json[PM10_ID] / 10).toFixed(1))),String(json["year"])+"-"+String(("0" + json["month"]).slice(-2))+"-"+String(("0" + json["day"]).slice(-2))+"T"+String(("0" + json["hour"]).slice(-2))+":"+String(("0" + json["minute"]).slice(-2))+":"+String(("0" + json["second"]).slice(-2))+"Z",[lng,lat]];
     // pm25
     json[PM25_ID] = [String(parseFloat((json[PM25_ID] / 10).toFixed(1))),String(json["year"])+"-"+String(("0" + json["month"]).slice(-2))+"-"+String(("0" + json["day"]).slice(-2))+"T"+String(("0" + json["hour"]).slice(-2))+":"+String(("0" + json["minute"]).slice(-2))+":"+String(("0" + json["second"]).slice(-2))+"Z",[lng,lat]];
     delete json.year;
     delete json.month;
     delete json.day;
     delete json.hour;
     delete json.minute;
     delete json.second;

   } catch (e) {
     json = { payload: bytes };
   }

   return json;
 };

 return bytesToSenseBoxJson(bytes);
}
```

Im zweiten Abschnitt findet die eigentliche Decodierung statt: Die Werte werden in der Sendereihenfolge decodiert und in ein JSON-Objekt geschrieben. Dieses Objekt wird danach in das Format der OpenSenseMap konvertiert und an die HTTP-Integration gesendet.

{%include image.html image=page.image6%}

## Programmierung
Dieses Projekt erfordert ein sehr komplexes Programm, deshalb auch die Schwierigkeitsstufe "Schwer"
Das Programm enthält viel "Kosmetik", vorallem für das Display, weshalb der Code so lang ist.
### Libarys
```
//Einbinden der benötigten Libaries
#include <senseBoxIO.h>
#include <TinyGPS++.h>
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <Adafruit_HDC1000.h>
#include <SDS011-select-serial.h>
#include <LoraMessage.h>
#include <lmic.h>
#include <hal/hal.h>
#include <SPI.h>
```
### Globale Variablen
Man braucht globale Variablen, um die Messwerte der Sensoren sowie Hardwareinformationen im gesamten Programm verfügbar zu machen. Die MCU hat einen vom Bootloader reservierten Speicherbereich für diese Variablen. Du nutzt hier direkt beide Methoden der Definition, einmal die ``#define``-Methode und die Typendefinition.
```
// #define Statements für Globale Variablen
#define OLED_RESET 4
//#define ENABLE_DEBUG //diese Zeile entkommentieren für Ausgabe im Seriellen Monitor
#ifdef ENABLE_DEBUG
#define DEBUG(str) Serial.println(str)
#else
#define DEBUG(str)
#endif
//Globale Variablen
float pm10,pm25;
float temperature;
float humidity;
```
#### Variablentypen
* ``boolean``: wahr o. falsch; kann nur zwei Werte annehmen, 1 oder 0.
* ``char``: Character; alphanumerische Zeichen (Buchstaben, Zahlen, Sonderzeichen)
* ``byte``:  ganze Zahlen;  ganze Zahlen von 0 bis 255, auch im Binärformat, dann definiert mit 0b[WERT]
* ``int``: ganze Zahlen;  ganze Zahlen von -32.758 bis 32.767
* ``long``:  ganze Zahlen;  ganze Zahlen von - 2 Milliarden bis 2 Milliarden
* ``float``: Fließkommazahlen;  Bruchzahlen
* ``String``:  Zeichenkette;  Text bestehend aus ASCII Zeichen
* ``array``: Variablenfeld; Eine Reihe von Werten des selben Variablentyps können gesammelt gespeichert werden

In diesem Programm werden die Typen ``boolean``,``int`` und ``float`` benutzt.

### Libary-Objekte
Diese Objekte brauchst du, um die Funktionen der Libarys ansprechen zu können.
```
//Libary-Objekte
SDS011 SDS(Serial2);        
Adafruit_SSD1306 display(OLED_RESET);
TinyGPSPlus gps;
Adafruit_HDC1000 hdc = Adafruit_HDC1000();
```

### smartDelay
Diese Funktion sorgt dafür, dass das GPS-Modul weiterhin ausgelesen wird
```
//Diese Funktion stellt sicher, dass das GPS-Modul weiterhin ausgelesen wird.
static void smartDelay(unsigned long ms)
{
  unsigned long start = millis();
  do 
  {
    Wire.requestFrom(0x42,10);
    while (Wire.available())
      gps.encode(Wire.read());
  } while (millis() - start < ms);
}
```

### LoRa: Funktionen und Variablen
Jetzt kommt der komplexeste Teil dieses Programmes, die Funktionen für den LoRa-Bee.
In drei dieser Variablen müssen hier Daten deiner TTN-Registration eingfügt werden:
- ``static const u1_t PROGMEM APPEUI[8]={DEINE APPEUI IM lsb FORMAT };``
- ``static const u1_t PROGMEM DEVEUI[8]={DEINE DEVICE-EUI IM lsb FORMAT};``
- ``static const u1_t PROGMEM APPKEY[16]={DEIN APPKEY IM msb FORMAT};``

Diese Variablen sind auch im Code markiert.
```
/* Ab hier folgen die Funktionen für den LoRaWAN und den TTN Support.
  An den Stellen, an denen Keys vom TTN-Device eingetragen werden müssen, steht dies klar beschrieben*/ 
static const u1_t PROGMEM APPEUI[8]={DEINE APPEUI IM lsb FORMAT};//Hier muss die APPLICATION-EUI im lsb-Format eingetragen werden.

void os_getArtEui (u1_t* buf) { memcpy_P(buf, APPEUI, 8);}

static const u1_t PROGMEM DEVEUI[8]={DEINE DEVICE-EUI IM lsb FORMAT}; //Hier muss die DEVICE-EUI im lsb-Format eingetragen werden.

void os_getDevEui (u1_t* buf) { memcpy_P(buf, DEVEUI, 8);}

static const u1_t PROGMEM APPKEY[16] ={DEIN APPKEY IM msb FORMAT};//Hier muss der APP-KEY im msb-Format eingetragen werden.

void os_getDevKey (u1_t* buf) {  memcpy_P(buf, APPKEY, 16);}

static osjob_t sendjob;
const lmic_pinmap lmic_pins = {
  .nss = PIN_XB1_CS,
  .rxtx = LMIC_UNUSED_PIN,
  .rst = LMIC_UNUSED_PIN,
  .dio = {PIN_XB1_INT, PIN_XB1_INT, LMIC_UNUSED_PIN},
};
bool sending = false;
void onEvent (ev_t ev) {
    sending=true;
  senseBoxIO.statusGreen();

  DEBUG(os_getTime());

  switch(ev) {

    case EV_SCAN_TIMEOUT:

      DEBUG(F("EV_SCAN_TIMEOUT"));

      break;

    case EV_BEACON_FOUND:

      DEBUG(F("EV_BEACON_FOUND"));

      break;

    case EV_BEACON_MISSED:

      DEBUG(F("EV_BEACON_MISSED"));

      break;

    case EV_BEACON_TRACKED:

      DEBUG(F("EV_BEACON_TRACKED"));

      break;

    case EV_JOINING:

      DEBUG(F("EV_JOINING"));
      display.print("joining...");
      display.display();

      break;

    case EV_JOINED:

      DEBUG(F("EV_JOINED"));
      display.print("joined...");
      display.display();
      // Disable link check validation (automatically enabled

      // during join, but not supported by TTN at this time).

      LMIC_setLinkCheckMode(0);

      break;

    case EV_RFU1:

      DEBUG(F("EV_RFU1"));

      break;

    case EV_JOIN_FAILED:

      DEBUG(F("EV_JOIN_FAILED"));

      break;

    case EV_REJOIN_FAILED:

      DEBUG(F("EV_REJOIN_FAILED"));

      break;

    case EV_TXCOMPLETE:

      DEBUG(F("EV_TXCOMPLETE (includes waiting for RX windows)"));

      if (LMIC.txrxFlags & TXRX_ACK)

        DEBUG(F("Received ack"));

      if (LMIC.dataLen) {

        DEBUG(F("Received "));

        DEBUG(LMIC.dataLen);

        DEBUG(F(" bytes of payload"));

      }

      sending = false;
      display.print("done");
      display.display();
      delay(2000);
      break;

    case EV_LOST_TSYNC:

      DEBUG(F("EV_LOST_TSYNC"));

      break;

    case EV_RESET:

      DEBUG(F("EV_RESET"));

      break;

    case EV_RXCOMPLETE:

      // data received in ping slot

      DEBUG(F("EV_RXCOMPLETE"));

      break;

    case EV_LINK_DEAD:

      DEBUG(F("EV_LINK_DEAD"));

      break;

    case EV_LINK_ALIVE:

      DEBUG(F("EV_LINK_ALIVE"));

      break;

    default:

      DEBUG(F("Unknown event"));

      break;

  }

}
void do_send(osjob_t* j){
    sending = true;

  if (LMIC.opmode & OP_TXRXPEND) {

    DEBUG(F("OP_TXRXPEND, not sending"));

  } else {

    LoraMessage message;

    //-----Temperature-----//

    //-----Humidity-----//

      DEBUG(F("Temperature: "));

      temperature = hdc.readTemperature();

      DEBUG(temperature);

      message.addUint16((temperature + 18) * 771);

      delay(2000);



      DEBUG(F("Humidity: "));

      humidity = hdc.readHumidity();

      DEBUG(humidity);

      message.addHumidity(humidity);

      delay(2000);

   //-----PM-----//

      uint8_t attempt = 0;

      while (attempt < 5) {

        bool error = SDS.read(&pm25, &pm10);

        if (!error) {

          DEBUG(F("PM10: "));

          DEBUG(pm10);

          message.addUint16(pm10 * 10);

          DEBUG(F("PM2.5: "));

          DEBUG(pm25);

          message.addUint16(pm25 * 10);

          break;

        }

        attempt++;

      }
    message.addLatLng(gps.location.lat(),gps.location.lng());

    LMIC_setTxData2(1, message.getBytes(), message.getLength(), 0);

    DEBUG(F("Packet queued"));

  }


}
```

### Setup
Im Setup werden erstmal alle benötigten Schnittstellen der MCU eingeschaltet,danach werden das Display und die Sensoren initialisiert.
```
  bool ovrrde = false;
  #ifdef ENABLE_DEBUG //Wenn Debug aktiviert ist, warten, bis eine Serielle Verbindung besteht  
    while(!Serial){}
    Serial.println("Running in Debug Mode:");
  #endif
  Serial.begin(9600);
  senseBoxIO.powerUART(true); //Den Strom einschalten
  senseBoxIO.powerXB1(false); // Reset RFM9X

  delay(250);

  senseBoxIO.powerXB1(true);  // PFM9X An
  senseBoxIO.powerXB2(true);
  senseBoxIO.powerI2C(true);

  Serial1.begin(9600);//Serielle Schnittstellen starten
  Serial2.begin(9600);
  delay(2000);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3D); //Display starten
  display.display();
  delay(100);
  display.clearDisplay();
  display.setCursor(0,0);
  display.setTextSize(1);
  display.setTextColor(WHITE,BLACK);
  hdc.begin(); //HDC starten

```

Jetzt wird nach einem GPS-Signal gesucht.
``` 
    //Den Nutzer über die Satellitensuche informieren
    Serial.println("Beginning GPS Satellite Search:");
    display.setCursor(0,0);
    display.setTextSize(1);
    display.setTextColor(WHITE,BLACK);
    display.println("Searching Satellites");
    display.display();
    smartDelay(100);
    
    //Warten, bis ein Satellit gefunden wird
    int tries = 0;
    while(gps.satellites.value() == 0){
      smartDelay(100);
      tries ++;
      if (tries > 1200){
          tries = 0;
          ovrrde = true;
          goto ENDSETUP;
      }
      if(digitalRead(0)==LOW){
          while(digitalRead(0)==LOW){}
            goto beginLoop;
        }
    }
    
    if(false){//Dieses Statement wird nur ausgeführt, wenn keine Satelliten gefunden werden
      ENDSETUP:
      display.clearDisplay();
      display.setCursor(0,0);
      display.println("No Satellites were   found...");
      display.println("To continue with the Loop, while still searching in the background, press the Button now");
      display.display();
      while(ovrrde){
      if(digitalRead(0)==LOW){
        while(digitalRead(0)==LOW){}
         ovrrde = false;
         goto beginLoop;
        }
      }
    }
    
    //Wenn Satelliten gefunden sind:
    display.clearDisplay();
    while(!gps.location.isValid()){//Warten, bis das GPS-Signal gefunden wurde
      Serial.print("Satellites found: ");
      Serial.println(gps.satellites.value());
      display.print("Found ");
      display.print(gps.satellites.value());
      display.println(" Satellites.");
      display.display();
      smartDelay(100);
      display.clearDisplay();
      display.setCursor(0,0);
    }
    if(gps.location.isValid()){//Position anzeigen, sobald gefunden.
      display.clearDisplay();
      display.setCursor(0,0);
      display.setTextSize(2);
      display.setTextColor(BLACK,WHITE);
      display.println("GPS found, Location:");
      display.print(gps.location.lat());
      display.print(" ");
      display.println(gps.location.lng());
      display.display();
      Serial.println("GPS Found!");
      Serial.print("Time:");
      Serial.print(gps.time.value());
      smartDelay(5000);    
    }
    //Goto Marker für den Loop
    beginLoop:

```
Zum Schluss wird der LoRa-Bee gestartet:
```
    //LoRa Schnittstelle starten
    os_init();
    LMIC_reset();
    smartDelay(3000);
```
### Loop
Im Loop passieren nur zwei Dinge:
1. Die GPS-Informationen werden auf dem OLED-Display angezeigt.
2. Auf Knopfdruck verbindet sich das Programm per LoRa mit der OpenSenseMap und sendet die Sensorwerte mit Standort

Als erstes kommt der Code für das Display, dieser Teil ist von der vorher gennanten "Kosmetik" ziemlich voll:
```
void loop() {
//Die GPS-Informationen auf dem Display anzeigen
  Serial.print(gps.location.lat());
  Serial.print("N ");
  Serial.print(gps.location.lng());
  Serial.println("E");
  
  display.clearDisplay();
  display.setCursor(0,0);
  display.setTextSize(2);
  display.setTextColor(BLACK,WHITE);
  display.println("Location: ");
  display.print(gps.location.lat());
  display.print(" ");
  display.println(gps.location.lng());
  
  display.setTextSize(1);
  display.setTextColor(WHITE,BLACK);
  display.print("Got ");
  display.print(gps.satellites.value());
  display.println(" Satellites");
  
  display.print("Your Speed: ");
  display.print(int(gps.speed.kmph()));
  display.println("kmph");
  
  display.print("HDOP: ");
  display.println(gps.hdop.hdop());
  
  display.print("Height ");
  display.print(gps.altitude.meters());
  display.println("m");
  
  display.display();
```
Der zweite Teil ist deutlich kürzer, er verlässt sich auf die vorher definierten Funktionen und die LoRa Libarys
```
if(digitalRead(0)==LOW){//Daten an OSeM senden, wenn der Button gedrückt wird.
    while(digitalRead(0)==LOW){}//Diese while-Schleife stellt sicher, dass der Button losgelassen wird, bevor der Programmablauf fortgesetzt wird
    display.clearDisplay();
    display.setCursor(0,0);
    display.print("Dumping to OSeM via LoRA and TTN...");
    display.display();
    do_send(&sendjob);
  }
  while(sending==true){//Diese Funktion stellt sicher, dass der Sendevorgang abgeschlossen wird, bevor ein neuer gestartet wird.
  os_runloop_once();
  }
```
Die letzte Zeile im Code sorgt dafür, dass die Position immer aktuell ist und verzögert den Loop um 100 Millisekunden
```
smartDelay(100);
```




### Der gesamte Code
Hier nochmal der gesamte Code:
```
//Einbinden der benötigten Libaries
#include <senseBoxIO.h>
#include <TinyGPS++.h>
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <Adafruit_HDC1000.h>
#include <SDS011-select-serial.h>
#include <LoraMessage.h>
#include <lmic.h>
#include <hal/hal.h>
#include <SPI.h>
// #define Statements für Globale Variablen
#define OLED_RESET 4
//#define ENABLE_DEBUG //diese Zeile entkommentieren für Ausgabe im Seriellen Monitor
#ifdef ENABLE_DEBUG
#define DEBUG(str) Serial.println(str)
#else
#define DEBUG(str)
#endif
//Globale Variablen
float pm10,pm25;
float temperature;
float humidity;
//Libary-Objekte
SDS011 SDS(Serial2);        
Adafruit_SSD1306 display(OLED_RESET);
TinyGPSPlus gps;
Adafruit_HDC1000 hdc = Adafruit_HDC1000();

//Diese Funktion stellt sicher, dass das GPS-Modul weiterhin ausgelesen wird.
static void smartDelay(unsigned long ms)
{
  unsigned long start = millis();
  do 
  {
    Wire.requestFrom(0x42,10);
    while (Wire.available())
      gps.encode(Wire.read());
  } while (millis() - start < ms);
}
/* Ab hier folgen die Funktionen für den LoRaWAN und den TTN Support.
 * An den Stellen, an denen Keys vom TTN-Device eingetragen werden müssen, steht dies klar beschrieben */
static const u1_t PROGMEM APPEUI[8]={APPEUI};//Hier muss die APPLICATION-EUI im lsb-Format eingetragen werden.

void os_getArtEui (u1_t* buf) { memcpy_P(buf, APPEUI, 8);}

static const u1_t PROGMEM DEVEUI[8]={DEVEUI }; //Hier muss die DEVICE-EUI im lsb-Format eingetragen werden.

void os_getDevEui (u1_t* buf) { memcpy_P(buf, DEVEUI, 8);}

static const u1_t PROGMEM APPKEY[16] ={APPKEY};//Hier muss der APP-KEY im msb-Format eingetragen werden.

void os_getDevKey (u1_t* buf) {  memcpy_P(buf, APPKEY, 16);}

static osjob_t sendjob;
const lmic_pinmap lmic_pins = {
  .nss = PIN_XB1_CS,
  .rxtx = LMIC_UNUSED_PIN,
  .rst = LMIC_UNUSED_PIN,
  .dio = {PIN_XB1_INT, PIN_XB1_INT, LMIC_UNUSED_PIN},
};
bool sending = false;
void onEvent (ev_t ev) {
    sending=true;
  senseBoxIO.statusGreen();

  DEBUG(os_getTime());

  switch(ev) {

    case EV_SCAN_TIMEOUT:

      DEBUG(F("EV_SCAN_TIMEOUT"));

      break;

    case EV_BEACON_FOUND:

      DEBUG(F("EV_BEACON_FOUND"));

      break;

    case EV_BEACON_MISSED:

      DEBUG(F("EV_BEACON_MISSED"));

      break;

    case EV_BEACON_TRACKED:

      DEBUG(F("EV_BEACON_TRACKED"));

      break;

    case EV_JOINING:

      DEBUG(F("EV_JOINING"));
      display.print("joining...");
      display.display();

      break;

    case EV_JOINED:

      DEBUG(F("EV_JOINED"));
      display.print("joined...");
      display.display();
      // Disable link check validation (automatically enabled

      // during join, but not supported by TTN at this time).

      LMIC_setLinkCheckMode(0);

      break;

    case EV_RFU1:

      DEBUG(F("EV_RFU1"));

      break;

    case EV_JOIN_FAILED:

      DEBUG(F("EV_JOIN_FAILED"));

      break;

    case EV_REJOIN_FAILED:

      DEBUG(F("EV_REJOIN_FAILED"));

      break;

    case EV_TXCOMPLETE:

      DEBUG(F("EV_TXCOMPLETE (includes waiting for RX windows)"));

      if (LMIC.txrxFlags & TXRX_ACK)

        DEBUG(F("Received ack"));

      if (LMIC.dataLen) {

        DEBUG(F("Received "));

        DEBUG(LMIC.dataLen);

        DEBUG(F(" bytes of payload"));

      }

      sending = false;
      display.print("done");
      display.display();
      delay(2000);
      break;

    case EV_LOST_TSYNC:

      DEBUG(F("EV_LOST_TSYNC"));

      break;

    case EV_RESET:

      DEBUG(F("EV_RESET"));

      break;

    case EV_RXCOMPLETE:

      // data received in ping slot

      DEBUG(F("EV_RXCOMPLETE"));

      break;

    case EV_LINK_DEAD:

      DEBUG(F("EV_LINK_DEAD"));

      break;

    case EV_LINK_ALIVE:

      DEBUG(F("EV_LINK_ALIVE"));

      break;

    default:

      DEBUG(F("Unknown event"));

      break;

  }

}

void do_send(osjob_t* j){
    sending = true;

  if (LMIC.opmode & OP_TXRXPEND) {

    DEBUG(F("OP_TXRXPEND, not sending"));

  } else {

    LoraMessage message;

    //-----Temperature-----//

    //-----Humidity-----//

      DEBUG(F("Temperature: "));

      temperature = hdc.readTemperature();

      DEBUG(temperature);

      message.addUint16((temperature + 18) * 771);

      delay(2000);



      DEBUG(F("Humidity: "));

      humidity = hdc.readHumidity();

      DEBUG(humidity);

      message.addHumidity(humidity);

      delay(2000);

   //-----PM-----//

      uint8_t attempt = 0;

      while (attempt < 5) {

        bool error = SDS.read(&pm25, &pm10);

        if (!error) {

          DEBUG(F("PM10: "));

          DEBUG(pm10);

          message.addUint16(pm10 * 10);

          DEBUG(F("PM2.5: "));

          DEBUG(pm25);

          message.addUint16(pm25 * 10);

          break;

        }

        attempt++;

      }
      message.addLatLng(gps.location.lat(),gps.location.lng());

    LMIC_setTxData2(1, message.getBytes(), message.getLength(), 0);

    DEBUG(F("Packet queued"));

  }


}

/*
 * Setup
 */
void setup() {
  #ifdef ENABLE_DEBUG //Wenn Debug aktiviert ist, warten, bis eine Serielle Verbindung besteht  
    while(!Serial){}
    Serial.println("Running in Debug Mode:");
  #endif
  Serial.begin(9600);
  senseBoxIO.powerUART(true); //Den Strom einschalten
  senseBoxIO.powerXB1(false); // Reset RFM9X

  delay(250);

  senseBoxIO.powerXB1(true);  // PFM9X An
  senseBoxIO.powerXB2(true);
  senseBoxIO.powerI2C(true);

  Serial1.begin(9600);//Serielle Schnittstellen starten
  Serial2.begin(9600);
  delay(2000);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3D); //Display starten
  display.display();
  delay(100);
  display.clearDisplay();
  display.setCursor(0,0);
  display.setTextSize(1);
  display.setTextColor(WHITE,BLACK);
  hdc.begin(); //HDC starten

  if(!Serial1.available()){ //Überprüfen, ob das GPS-Modul verbunden ist
      Serial.println("ERR404: DEVICE ON Serial1 NOT FOUND");
      display.println("NO MODULE CONNECTED!");
      display.display();
      while(true){
        delay(100);
      }
  }  
    //Den Nutzer über die Satellitensuche informieren
    Serial.println("Beginning GPS Satellite Search:");
    display.setCursor(0,0);
    display.setTextSize(1);
    display.setTextColor(WHITE,BLACK);
    display.println("Searching Satellites");
    display.display();
    smartDelay(100);
    
    //Warten, bis ein Satellit gefunden wird
    int tries = 0;
    while(gps.satellites.value() == 0){
      smartDelay(100);
      tries ++;
      if (tries > 1200){
          tries = 0;
          goto ENDSETUP;
      }
    }
    
    if(false){//Dieses Statement wird nur ausgeführt, wenn keine Satelliten gefunden werden
      ENDSETUP:
      display.clearDisplay();
      display.setCursor(0,0);
      display.println("No Satellites were   found...");
      display.println("To continue with the Loop, while still searching in the background, press the Button now");
      display.display();
      while(true){
        if(digitalRead(0)==LOW){
          while(digitalRead(0)==LOW){}
            goto beginLoop;
        }
      }
    }
    
    //Wenn Satelliten gefunden sind:
    display.clearDisplay();
    while(!gps.location.isValid()){//Warten, bis das GPS-Signal gefunden wurde
      Serial.print("Satellites found: ");
      Serial.println(gps.satellites.value());
      display.print("Found ");
      display.print(gps.satellites.value());
      display.println(" Satellites.");
      display.display();
      smartDelay(100);
      display.clearDisplay();
      display.setCursor(0,0);
    }
    if(gps.location.isValid()){//Position anzeigen, sobald gefunden.
      display.clearDisplay();
      display.setCursor(0,0);
      display.setTextSize(2);
      display.setTextColor(BLACK,WHITE);
      display.println("GPS found, Location:");
      display.print(gps.location.lat());
      display.print(" ");
      display.println(gps.location.lng());
      display.display();
      Serial.println("GPS Found!");
      Serial.print("Time:");
      Serial.print(gps.time.value());
      smartDelay(5000);    
    }
    //Goto Marker für den Loop
    beginLoop:
    
    //LoRa Schnittstelle starten
    os_init();
    LMIC_reset();
    smartDelay(3000);
}
/*
 * Loop
 */
void loop() {
  //Die GPS-Informationen auf dem Display anzeigen
  Serial.print(gps.location.lat());
  Serial.print("N ");
  Serial.print(gps.location.lng());
  Serial.println("E");
  
  display.clearDisplay();
  display.setCursor(0,0);
  display.setTextSize(2);
  display.setTextColor(BLACK,WHITE);
  display.println("Location: ");
  display.print(gps.location.lat());
  display.print(" ");
  display.println(gps.location.lng());
  
  display.setTextSize(1);
  display.setTextColor(WHITE,BLACK);
  display.print("Got ");
  display.print(gps.satellites.value());
  display.println(" Satellites");
  
  display.print("Your Speed: ");
  display.print(int(gps.speed.kmph()));
  display.println("kmph");
  
  display.print("HDOP: ");
  display.println(gps.hdop.hdop());
  
  display.print("Height ");
  display.print(gps.altitude.meters());
  display.println("m");
  
  display.display();

  if(digitalRead(0)==LOW){//Daten an OSeM senden, wenn der Button gedrückt wird.
    while(digitalRead(0)==LOW){}//Diese while-Schleife stellt sicher, dass der Button losgelassen wird, bevor der Programmablauf fortgesetzt wird
    display.clearDisplay();
    display.setCursor(0,0);
    display.print("Dumping to OSeM via LoRA and TTN...");
    display.display();
    do_send(&sendjob);
  }
  while(sending==true){//Diese Funktion stellt sicher, dass der Sendevorgang abgeschlossen wird, bevor ein neuer gestartet wird.
  os_runloop_once();
  }
  smartDelay(100);//loop alle 100 Millisekunden 
}
```
