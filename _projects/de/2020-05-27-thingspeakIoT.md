---
layout: project_page
name: "Thingspeak IoT"
date: 2020-03-09
author: Björn
abstract: "Ein IoT-Geräte, welches Daten über Thingspeak visualisiert"
image:  Thingspeak.png
image1: /images/projects/thingspeak-IoT/thingspeak-start.png
image2: /images/projects/thingspeak-IoT/thingspeak-channels.png
image3: /images/projects/thingspeak-IoT/thingspeak-new-channel.png
image4: /images/projects/thingspeak-IoT/thingspeak-keys.png
image5: /images/projects/thingspeak-IoT/thingspeak-library.png
image6: /images/projects/thingspeak-IoT/thingspeak-test.png

material:
    - senseBox MCU
    - Umweltsensor BME680
    - WiFi-Bee
ide: arduino
version: ["mini"]   
lang: de
tags: ["Informatik","IoT"]
difficult: Mittel
---
<head><title>Thingspeak IoT</title></head>

In diesem Projekt werden die Daten senseBox mit Hilfe von Thingspeak visualisiert. [Thingspeak](https://thingspeak.com/) ist ein IoT-Platform, die es ermöglicht Daten online zu Sammeln, Analysen und Visualisierungen durchzuführen und Aktionen festzulegen.
Für dieses Projekt musst du dir einen kostenlosen Thingspeak-Account anlegen.

>Die Programmierung des IoT-Gerätes erfolgt mit Hilfe der Arduino IDE. Falls du bisher nicht mit der Arduino IDE gearbeitet hast, findest du in unseren Docs eine [Einführung](https://docs.sensebox.de/category/arduino/). Dort ist erklärt, wie du die Software installierst und alle Vorkehrungen triffstn um durchstarten zu können.

## Aufbau
Stecke das WiFi-Bee auf den Steckplatz __XBEE1__. Der Umweltsensor wird mit einem JST-JST Kabel an einen der 5 __I2C/Wire Ports__ angeschlossen.

## Vorbereitungen auf Thingspeak.com

Um den Service von Thingspeak nutzen zu können, musst du dir zuerst einen kostenlosen Account auf [https://thingspeak.com](https://thingspeak.com) erstellen. 
{% include image.html image=page.image1 %}
Nach der erfolgreichen Registrierung landest du auf der Seite "*My Channels*". Als nächstes müsst ihr einen neuen Channel anlegen, in den die senseBox ihre Messdaten übertragen kann.
{% include image.html image=page.image2 %}
Jeder Channel enthält bis zu 8 "fields" für Messdaten, plus 3 "fields" für Standortdaten und ein weiteres "field" für Statusdaten. Daten, die in einem Channel gesammelt werden, können dann mit Hilfe der Thingspeak Apps analysiert und visualisiert werden.
{% include image.html image=page.image3 %}
Deinem Channel musst du nur einen Namen geben. Alle anderen Informationen sind optional. Du kannst alle Channelinformationen auch nachträglich ändern. Mit einem Klick auf "*Save Channel*" schließt du die Channelerstellung ab.
Auf der anschließend angezeigten Seite siehst du nun eine Übersicht über deinen Channel. Da noch keine Daten gesendet wurden, ist auch das Diagramm in Field 1 noch leer.

Als letzten Schritt der Vorbereitung müsst du dir deine __Channel ID__ und deinen __API Key__ notieren. Diese findest du unter dem Reiter "*API Keys*". Für dieses Projekt benötigst du nur den "Write API Key".
{% include image.html image=page.image4 %}

## Vorbereitungen in der Arduino IDE
Auch in der Arduino IDE müssen Vorkehrungen getroffen werden, um die Thingspeak Services zu nutzen. Um die Programmierung zu erleichern bietet Thingspeak eine eigene Arduino Bibliothek an.
Um diese hinzuzufügen wähle in der Arduino IDE *Werkzeuge* --> *Bibliotheken verwalten* und suche dort nach "Thingspeak" und installieren die gleichnamige Bibliothek von "MathWorks".
{% include image.html image=page.image5 %}

## Programmierung
### Schritt 1: Senden einer einfachen Zahl
Im Ersten Schritt soll zum Testen der Verbindung nur eine einfache Zahl an Thingspeak gesendet werden, die nach jedem Sendevorgang um 1 erhöht wird.

Noch vor dem `void setup()` müssen die Bibliotheken hinzugefügt, Variablen definiert und das WiFi Bee initialisiert werden.

> Vergiss nicht hier unter `myChannelNumber` deine Channel ID und unter `myWriteAPIKey` deinen API Key einzutragen.

```arduino
#include "ThingSpeak.h"                      // Hinzufügen der Thingspeak Bibliothek
#include "SenseBoxMCU.h"                     // Hinzufügen der senseBoxMCU Bilbiothek

unsigned long myChannelNumber = XXXXXXXXX;   // Hier musst du deine Channel ID eintragen
const char * myWriteAPIKey = "YYYYYYYYYYYY"; // Hier musst du deinen Write API Key eintragen
int number = 0;                              // Definieren der Variable, die zum Testen gesendet werden soll

Bee* b = new Bee();                          // Initialisieren des WiFi Bees
WiFiClient  client;
```
<br>
Im `void setup` muss nun die Verbindung mit dem Internet hergestellt werden und der Serielle Monitor sowie der Thingspeak Client gestartet werden
>Vergiss nicht in der ersten Zeile `b->connectToWiFi("SSID","Passwort")` __SSID__ durch deinen __Netzwerknamen__ und __Passwort__ durch dein __WLAN Passwort__ zu ersetzen!

```arduino
void setup() {

  b->connectToWifi("SSID","Passwort");        // Herstellen der WiFi Verbindung 
  delay(1000); 

  Serial.begin(115200);                       // Starten des Seriellen Monitors

  ThingSpeak.begin(client);                   // Starten des ThingSpeak Clienten

}
```
<br>
Anschließend wird im `void loop()` die Testvariable `number` an Thingspeak gesendet. 

```
int x = ThingSpeak.writeField(myChannelNumber, 1, number, myWriteAPIKey)
```
Die Parameter `myChannelNumber` und `myWriteAPIKey` beinhalten deine Channel ID und deinen Write API Key, wie oben angegeben.


Der nächste Abschnitt des Programcodes überprüft, ob der Sendevorgang erfolgreich war.

```
if(x == 200){
    Serial.println("Channel update successful."); 
  }
  else{
    Serial.println("Problem updating channel. HTTP error code " + String(x));
  }
```
War der Sendevorgang erfolgreich wird der Hinweis "Channel update successful." an den Seriellen Monitor gesendet. Falls dies nicht der Fall ist wird der Hinweis "Problem updating channel." mit einen angehängten Fehlercode ausgegeben.


> Den Seriellen Monitor kannst du mit einem Klick auf die kleine Lupe oben rechts in der Arduino IDE öffnen. Er bietet die einfachste Möglichkeit sich Informationen ausgeben zu lassen.


Anschließend wird die Testvariable nach jedem Sendevorgang um eins erhöht. Erreicht die Variable den Wert 99 wird sie wieder auf 0 gesetzt.

```
number++;
  if(number > 99){
    number = 0;
  }
```

Zuletzt wird mit dem Befehl `delay(20000);` eine Pause von 20 Sekunden eingefügt. Diese ist notwendig, da Thingspeak kostenlosen Accounts nur ein Channelupdate alle 15 Sekunden erlaubt.

Der gesamte `void loop()` sieht also wie folgt aus:

```Arduino
void loop() {

  int x = ThingSpeak.writeField(myChannelNumber, 1, number, myWriteAPIKey); 
  
  if(x == 200){
    Serial.println("Channel update successful."); 
  }
  else{
    Serial.println("Problem updating channel. HTTP error code " + String(x));
  }

  number++;
  if(number > 99){
    number = 0;
  }
  
  delay(20000); 
}
```
<br>
Übertrage nun deinen Programmcode auf die senseBox MCU. Nachdem das Hochladen des Programmcodes abgeschlossen ist kannst du den Seriellen Monitor öffnen und dir die Statusmeldungen anschauen.
Wenn alles funktionert sollte deine Channelübersicht auf Thingspeak etwa so aussehen:

{% include image.html image=page.image6 %}

### Schritt 2: Senden eines Messwertes
Nachdem das Senden einer einfachen zahl erfolgreich war, soll diese nun durch echte Sensorwerte ersetzt werden. In diesem Beispiel wird der senseBox Umweltsensor (BME680) verwendet. 
>Wenn du dich sicher in der Programmierung fühlst kannst du selbstverständlich auch jeden anderen Sensor verwenden.

Auch hier müssen noch vor dem `void setup()` verschiedene Variablen deklariert

```Arduino
#include "ThingSpeak.h"                      // Hinzufügen der Thingspeak Bibliothek
#include "SenseBoxMCU.h"                     // Hinzufügen der senseBoxMCU Bilbiothek

#include "bsec.h"                           // Hinzufügen der Bilbiothek des BME680

unsigned long myChannelNumber = XXXXXXXXX;   // Hier musst du deine Channel ID eintragen
const char * myWriteAPIKey = "YYYYYYYYYYYY"; // Hier musst du deinen Write API Key eintragen

float Temperatur;
float bmeTemperatur;
float bmeHumidity;
double bmePressure;
float bmeIAQ;
float bmeIAQAccuracy;
int bmeCO2;
float bmeBreathVocEquivalent;               // Initialisieren der Variablen für die Messwerte des BME680

Bee* b = new Bee();
WiFiClient  client;                         // Initialisieren des WiFi-Bees
Bsec iaqSensor;                             // Initialisieren des BME680
```
<br>
und zwei Funktionen ohne Rückgabewert angelegt werden. Die Funktion `void checkIaqSensorStatus(void)` überprüft, ob der Sensor einsatzfähig ist. Im Fall eines Fehlers wechselt sie in die Funktion `void errLeds(void)`, welche die Status-LED auf dem Sensor anschaltet.

```Arduino
  void checkIaqSensorStatus(void)
{
  if (iaqSensor.status != BSEC_OK) {
    if (iaqSensor.status < BSEC_OK) {
      for (;;)
        errLeds(); 
    }
  }

  if (iaqSensor.bme680Status != BME680_OK) {
    if (iaqSensor.bme680Status < BME680_OK) {
      for (;;)
        errLeds(); 
    }
  }
}

void errLeds(void)
{
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);
  delay(100);
  digitalWrite(LED_BUILTIN, LOW);
  delay(100);
}
```
<br>
Im `void setup()` müssen dann die WiFi-Verbindung hergestellt, der Serielle Monitor, der Thingspeak Client und der Umweltsensor initialisiert werden
```Arduino
void setup() {
  b->connectToWifi("SSID","Passwort");            // Herstellen der WiFi Verbindung 
delay(1000);

  Serial.begin(115200);                           // Starten des Seriellen Monitors
    
  ThingSpeak.begin(client);                       // Starten des Thingspeak Clients

Wire.begin();
  iaqSensor.begin(BME680_I2C_ADDR_PRIMARY, Wire); // Initialisieren des BME680
  checkIaqSensorStatus();
  bsec_virtual_sensor_t sensorList[10] = {        
    BSEC_OUTPUT_RAW_TEMPERATURE,
    BSEC_OUTPUT_RAW_PRESSURE,
    BSEC_OUTPUT_RAW_HUMIDITY,
    BSEC_OUTPUT_RAW_GAS,
    BSEC_OUTPUT_IAQ,
    BSEC_OUTPUT_STATIC_IAQ,
    BSEC_OUTPUT_CO2_EQUIVALENT,
    BSEC_OUTPUT_BREATH_VOC_EQUIVALENT,
    BSEC_OUTPUT_SENSOR_HEAT_COMPENSATED_TEMPERATURE,
    BSEC_OUTPUT_SENSOR_HEAT_COMPENSATED_HUMIDITY,
  };
  iaqSensor.updateSubscription(sensorList, 10, BSEC_SAMPLE_RATE_LP); 
checkIaqSensorStatus();
  }
```
<br>
Im `void loop()` schließlich wird der Sensor gestartet und der jeweilige Messwert abgerufen. In diesem Beispiel die Temperatur. Anschließend wird der Messwert, zusammen mit Channel ID und Write API Key, an die Thingspeak Server gesendet. Auch hier wird im Seriellen Monitor angezeigt, ob der Sendevorgang erfolgreich war.

```Arduino
void loop() {
if (iaqSensor.run()) { // Starten des Sensors
    bmeTemperatur = iaqSensor.temperature;
    bmeHumidity = iaqSensor.humidity;
    bmePressure = iaqSensor.pressure;
    bmeIAQ = iaqSensor.iaq;
    bmeIAQAccuracy = iaqSensor.iaqAccuracy;
    bmeCO2 = iaqSensor.co2Equivalent;
    bmeBreathVocEquivalent = iaqSensor.breathVocEquivalent;
  } else {
    checkIaqSensorStatus();
  }

  Temperatur = bmeTemperatur; // Abrufen der Temperatur

  int x = ThingSpeak.writeField(myChannelNumber, 1, Temperatur, myWriteAPIKey); // Senden an die Thingspeak Server
  if(x == 200){
    Serial.println("Channel update successful.");
  }
  else{
    Serial.println("Problem updating channel. HTTP error code " + String(x));
  }

  delay(20000); // 20 Sekunden Pause
}
```
## Gesamter Code
 Hier findest du den gesamten Code noch einmal in einem Block.
 ```Arduino
#include "ThingSpeak.h"                      // Hinzufügen der Thingspeak Bibliothek
#include "SenseBoxMCU.h"                     // Hinzufügen der senseBoxMCU Bilbiothek

unsigned long myChannelNumber = XXXXXXXXX;   // Hier musst du deine Channel ID eintragen
const char * myWriteAPIKey = "YYYYYYYYYYYY"; // Hier musst du deinen Write API Key eintragen
int number = 0;                              // Definieren der Variable, die zum Testen gesendet werden soll

Bee* b = new Bee();                          // Initialisieren des WiFi Bees
WiFiClient  client;

 void checkIaqSensorStatus(void)
{
  if (iaqSensor.status != BSEC_OK) {
    if (iaqSensor.status < BSEC_OK) {
      for (;;)
        errLeds(); 
    }
  }

  if (iaqSensor.bme680Status != BME680_OK) {
    if (iaqSensor.bme680Status < BME680_OK) {
      for (;;)
        errLeds(); 
    }
  }
}

void errLeds(void)
{
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);
  delay(100);
  digitalWrite(LED_BUILTIN, LOW);
  delay(100);
}
void setup() {
  b->connectToWifi("SSID","Passwort");            // Herstellen der WiFi Verbindung 
delay(1000);

  Serial.begin(115200);                           // Starten des Seriellen Monitors
    
  ThingSpeak.begin(client);                       // Starten des Thingspeak Clients

Wire.begin();
  iaqSensor.begin(BME680_I2C_ADDR_PRIMARY, Wire); // Initialisieren des BME680
  checkIaqSensorStatus();
  bsec_virtual_sensor_t sensorList[10] = {        
    BSEC_OUTPUT_RAW_TEMPERATURE,
    BSEC_OUTPUT_RAW_PRESSURE,
    BSEC_OUTPUT_RAW_HUMIDITY,
    BSEC_OUTPUT_RAW_GAS,
    BSEC_OUTPUT_IAQ,
    BSEC_OUTPUT_STATIC_IAQ,
    BSEC_OUTPUT_CO2_EQUIVALENT,
    BSEC_OUTPUT_BREATH_VOC_EQUIVALENT,
    BSEC_OUTPUT_SENSOR_HEAT_COMPENSATED_TEMPERATURE,
    BSEC_OUTPUT_SENSOR_HEAT_COMPENSATED_HUMIDITY,
  };
  iaqSensor.updateSubscription(sensorList, 10, BSEC_SAMPLE_RATE_LP); 
checkIaqSensorStatus();
  }

  void loop() {
if (iaqSensor.run()) { // Starten des Sensors
    bmeTemperatur = iaqSensor.temperature;
    bmeHumidity = iaqSensor.humidity;
    bmePressure = iaqSensor.pressure;
    bmeIAQ = iaqSensor.iaq;
    bmeIAQAccuracy = iaqSensor.iaqAccuracy;
    bmeCO2 = iaqSensor.co2Equivalent;
    bmeBreathVocEquivalent = iaqSensor.breathVocEquivalent;
  } else {
    checkIaqSensorStatus();
  }

  Temperatur = bmeTemperatur; // Abrufen der Temperatur

  int x = ThingSpeak.writeField(myChannelNumber, 1, Temperatur, myWriteAPIKey); // Senden an die Thingspeak Server
  if(x == 200){
    Serial.println("Channel update successful.");
  }
  else{
    Serial.println("Problem updating channel. HTTP error code " + String(x));
  }

  delay(20000); // 20 Sekunden Pause
}
```