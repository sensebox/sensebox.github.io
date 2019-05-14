---
layout: project_page
name: "Mobiler Datenlogger für Feinstaubwerte(WLAN)"
date: 2019-05-14
author: Paul
abstract: "Ein mobiles Feinstaubmessgerät, das die Daten per TTN über LoRa an die OpenSenseMap sendet"
image:  /mobile_feinstaubstation/lora/lora_oled.jpg
image0: /images/projects/mobile_feinstaubstation/wlan/
image1: /images/projects/mobile_feinstaubstation/wlan/
image2: /images/projects/mobile_feinstaubstation/wlan/
image3: /images/projects/mobile_feinstaubstation/wlan/
image4: /images/projects/mobile_feinstaubstation/wlan/
image5: /images/projects/mobile_feinstaubstation/wlan/
image6: /images/projects/mobile_feinstaubstation/wlan/
material:
    - senseBox MCU
    - OLED Display
    - Temperatur und Luftfeuchtesensor(HDC 1080)
    - Feinstaubsensor(SDS011)
    - GPS Modul auf UART gelötet(CAM-M8Q)
    - WiFi Bee
    - mSD Bee
    - JST Kabel
ide: arduino    
lang: de
tags: ["Informatik","WLAN","Feinstaub","Geographie"]
difficult: mittel
---
<head><title>Mobiler Feinstaublogger mit GPS und WLAN</title></head>>

# Mobiler Datenlogger für Feinstaubwerte(WLAN)
In diesem Projekt wird mit der SenseBoxMCU ein mobiler Feinstaubmesser gebaut, der auf Knopfdruck seine Messwerte auf der SD-Karte speichert und sie mit GPS-Koordinaten an die OpenSenseMap schickt. Dafür wird in dieser Variante der LoRa Funkstandard benutzt, der die Daten über TheThingsNetwork an die OpenSenseMap sendet.

## Aufbau
Wir brauchen:
    - den WiFi Bee auf dem XBEE1 Steckplatz
    - das OLED-Display auf einem I²C Steckplatz
    - den HDC 1080 auf einem I²C Steckplatz
    - das GPS-Modul auf dem UART Steckplatz 1
    - den SDS011 auf dem UART Steckplatz 2

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">UART-Steckplätze</h3>
  </div>
  <div class="panel-body">
    Es ist wichtig, hier die Nummerierung der Steckplätze zu beachten, da wir im Code später zwischen Serial1 und Serial2 unterscheiden
  </div>
</div>

## Programmierung
Dieses Projekt erfordert ein sehr komplexes Programm, deshalb auch die Schwierigkeitsstufe "Schwer"
Das Programm enthält viel "Kosmetik", vorallem für das Display, weshalb der Code so lang ist.
### Libarys
Dieses Projekt verwendet statt der <SenseBoxMCU.h> Libary die Einzellibarys, vorallem, weil wir hier das GPS-Modul im UART-Modus baruchen und die MCU Libary den I²C Modus verwendet.
```
//Einbinden der benötigten Libarys
#include <senseBoxIO.h>
#include <TinyGPS++.h>
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include "SenseBoxMCU.h"
```
### Globale Variablen
Wir brauchen globale Variablen, um die Messwerte der Sensoren sowie Hardwareinformationen im gesamten Programm verfügbar zu machen. Die MCU hat einen vom Bootloader reservierten Speicherbereich für diese Variablen. Wir nutzen hier direkt beide Methoden der Definition, einmal die ``#define``-Methode und die Typendefinition.
```
#define OLED_RESET 4
//#define SERIAL_DEBUG //Auskommentieren für Serielle Ausgabe
float p10,p25;
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
In diesem Programm wird der Typ ``float`` benutzt.

### Libary-Objekte
Diese Objekte brauchen wir, um die Funktionen der Libarys ansprechen zu können.
```
//Libary-Objekte erstellen
SDS011 my_sds(Serial2);    
Adafruit_SSD1306 display(OLED_RESET);
TinyGPSPlus gps;
HDC1080 hdc;
Button button(0);
Bee* Wifi = new Bee();
OpenSenseMap osem("5ccc31127b1373001bed4709", Wifi);
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
    while (Serial1.available())
      gps.encode(Serial1.read());
  } while (millis() - start < ms);
}
```
### dumpDatatoOSeM
Diese Funktion sendet alle Daten an die OpenSenseMap
```
void dumpDatatoOSeM(){
  display.clearDisplay(),
  display.setCursor(0,0);
  display.setTextSize(1);
  display.setTextColor(BLACK,WHITE);
  display.print("Dumping Data to OSeM...");
  display.display();
  osem.uploadMobileMeasurement(my_sds.getPm25(), "5ccc31127b1373001bed470b",float(gps.location.lat()),float(gps.location.lng()));
  osem.uploadMobileMeasurement(my_sds.getPm10(), "5ccc31127b1373001bed470a",float(gps.location.lat()),float(gps.location.lng()));
  osem.uploadMobileMeasurement(hdc.getTemperature(), "5ccc31127b1373001bed470d",float(gps.location.lat()),float(gps.location.lng()));
  osem.uploadMobileMeasurement(hdc.getHumidity(), "5ccc31127b1373001bed470c",float(gps.location.lat()),float(gps.location.lng()));
  osem.uploadMobileMeasurement(int(gps.satellites.value()), "5ccc332e7b1373001beddb10",float(gps.location.lat()),float(gps.location.lng()));
  display.print("done");
  display.display();
  smartDelay(2500);
}
```

### Setup
Im Setup schalten wir erstmal alle benötigten Schnittstellen der MCU ein,verbinden uns mit dem WLAN und danach initialisieren wir das Display und die Sensoren.
Hier müssen noch die Wlan-Daten eingetragen werden im Format("Name","Passwort").
```
  #ifdef SERIAL_DEBUG   
    while(!Serial){}
    Serial.println("Running in Debug Mode:");
  #endif
  button.begin();
  Wifi->connectToWifi("YOUR SSID","YOUR PASSWORD");
  Serial.begin(9600);
  senseBoxIO.powerUART(true); //Den Strom einschalten
  senseBoxIO.powerXB1(true);
  senseBoxIO.powerXB2(true);
  senseBoxIO.powerI2C(true);
  Serial1.begin(9600);
  Serial2.begin(9600);
  delay(2000);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3D); //Display initialisieren
  display.display();
  delay(100);
  display.clearDisplay();
  hdc.begin();
  display.clearDisplay();
  display.setCursor(0,0);
  display.setTextSize(1);
  display.setTextColor(WHITE,BLACK);

```

Jetzt überprüfen wir, ob das GPS-Modul angeschlossen ist, und suchen nach einem GPS-Signal
```
  if(!Serial1.available()){ //Überprüfen, ob GPS-Modul vorhanden
      Serial.println("ERR404: DEVICE ON Serial1 NOT FOUND");
    display.println("NO MODULE CONNECTED!");
    display.display();
    while(true){
      delay(100);
    }
  }
  display.clearDisplay();
  Serial.println("Beginning GPS Satellite Search:");
  display.setCursor(0,0);
  display.setTextSize(1);
  display.setTextColor(WHITE,BLACK);
  #ifdef EMULATE
    while(true){
      loop();
    }
  #endif

  
  display.println("Searching Satellites");
  display.display();      
  smartDelay(100);
  int tries = 0;
  while(gps.satellites.value() == 0){//Warten, bis ein Satellit gefunden wird
    smartDelay(100);
    tries ++;
    if (tries > 600){
      tries = 0;
      goto ENDSETUP;
    }
  }
  if(false){
    ENDSETUP:
    display.clearDisplay();
    display.println("No Satellites were   found...");
    display.display();
    senseBoxIO.statusRed();
    while(true){
      if(button.isPressed()){
        goto beginLoop;
      }
      }
  }
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

  beginLoop:
  Serial.println("loop");
  }

```

### Loop
Im Loop machen wir nur zwei Dinge:
1. Wir zeigen die GPS-Informationen auf dem OLED-Display an
2. Wir verbinden uns auf Knopfdruck per WLAN mit der OpenSenseMap und senden die Sensorwerte mit Standort

Als erstes kommt der Code für das Display, dieser Teil ist von der vorher gennanten "Kosmetik" ziemlich voll:
```
  Serial.print(gps.location.lat());//Alle wichtigen Infos auf dem Display ausgeben
  Serial.print("N ");
  Serial.print(gps.location.lng());
  Serial.println("E");
  display.clearDisplay(),
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
Der zweite Teil ist deutlich kürzer, er verlässt sich auf die vorher definierten Funktionen:
```
  if(button.isPressed()){
    dumpDatatoOSeM();
  }
```
Die letzte Zeile im Code sorgt dafür, dass die Position immer aktuell ist und verzögert den Loop um 100 Millisekunden
```
smartDelay(100);
```




### Der gesamte Code
Hier nochmal der gesamte Code:
```
//Einbinden der benötigten Libarys
#include <senseBoxIO.h>
#include <TinyGPS++.h>
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include "SenseBoxMCU.h"

#define OLED_RESET 4
//#define SERIAL_DEBUG //Auskommentieren für Serielle Ausgabe
float p10,p25;

//Libary-Objekte erstellen
SDS011 my_sds(Serial2);    
Adafruit_SSD1306 display(OLED_RESET);
TinyGPSPlus gps;
HDC1080 hdc;
Button button(0);
Bee* Wifi = new Bee();
OpenSenseMap osem("5ccc31127b1373001bed4709", Wifi);

//********************************************************USER-FUNCTIONS*******************************************************
static void smartDelay(unsigned long ms)
{
  unsigned long start = millis();
  do 
  {
    while (Serial1.available())
      gps.encode(Serial1.read());
  } while (millis() - start < ms);
}
void dumpDatatoOSeM(){
  display.clearDisplay(),
  display.setCursor(0,0);
  display.setTextSize(1);
  display.setTextColor(BLACK,WHITE);
  display.print("Dumping Data to OSeM...");
  display.display();
  osem.uploadMobileMeasurement(my_sds.getPm25(), "5ccc31127b1373001bed470b",float(gps.location.lat()),float(gps.location.lng()));
  osem.uploadMobileMeasurement(my_sds.getPm10(), "5ccc31127b1373001bed470a",float(gps.location.lat()),float(gps.location.lng()));
  osem.uploadMobileMeasurement(hdc.getTemperature(), "5ccc31127b1373001bed470d",float(gps.location.lat()),float(gps.location.lng()));
  osem.uploadMobileMeasurement(hdc.getHumidity(), "5ccc31127b1373001bed470c",float(gps.location.lat()),float(gps.location.lng()));
  osem.uploadMobileMeasurement(int(gps.satellites.value()), "5ccc332e7b1373001beddb10",float(gps.location.lat()),float(gps.location.lng()));
  display.print("done");
  display.display();
  smartDelay(2500);
}
void setup() {
#ifdef SERIAL_DEBUG   
    while(!Serial){}
    Serial.println("Running in Debug Mode:");
  #endif
  button.begin();
  Wifi->connectToWifi("YOUR SSID","YOUR PASSWORD");
  Serial.begin(9600);
  senseBoxIO.powerUART(true); //Den Strom einschalten
  senseBoxIO.powerXB1(true);
  senseBoxIO.powerXB2(true);
  senseBoxIO.powerI2C(true);
  Serial1.begin(9600);
  Serial2.begin(9600);
  delay(2000);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3D); //Display initialisieren
  display.display();
  delay(100);
  display.clearDisplay();
  hdc.begin();
  display.clearDisplay();
  display.setCursor(0,0);
  display.setTextSize(1);
  display.setTextColor(WHITE,BLACK);

      if(!Serial1.available()){ //Überprüfen, ob GPS-Modul vorhanden
      Serial.println("ERR404: DEVICE ON Serial1 NOT FOUND");
    display.println("NO MODULE CONNECTED!");
    display.display();
    while(true){
      delay(100);
    }
  }
  display.clearDisplay();
  Serial.println("Beginning GPS Satellite Search:");
  display.setCursor(0,0);
  display.setTextSize(1);
  display.setTextColor(WHITE,BLACK);
  #ifdef EMULATE
    while(true){
      loop();
    }
  #endif

  
  display.println("Searching Satellites");
  display.display();      
  smartDelay(100);
  int tries = 0;
  while(gps.satellites.value() == 0){//Warten, bis ein Satellit gefunden wird
    smartDelay(100);
    tries ++;
    if (tries > 600){
      tries = 0;
      goto ENDSETUP;
    }
  }
  if(false){
    ENDSETUP:
    display.clearDisplay();
    display.println("No Satellites were   found...");
    display.display();
    senseBoxIO.statusRed();
    while(true){
      if(button.isPressed()){
        goto beginLoop;
      }
      }
  }
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
  
}

void loop() {
 Serial.print(gps.location.lat());//Alle wichtigen Infos auf dem Display ausgeben
  Serial.print("N ");
  Serial.print(gps.location.lng());
  Serial.println("E");
  display.clearDisplay(),
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
  if(button.isPressed()){
    dumpDatatoOSeM();
  }
  smartDelay(100);

}
```