---
layout: post
title: "senseBox:home mit Stickstoffoxid- und Ozon-Sensoren "
date: 2019-06-30
author: David & Jan
abstract: "In einem ersten Test haben wir die senseBoxh:home mit einem Stickstoffoxid (NO2) und Ozon (O3) Sensor ausgestattet."
thumbnail: /images/blog_images/no2-o3-futurium/final_station.jpg
image1: /images/blog_images/alphasense/housing-outside.png
image2: /images/blog_images/no2-o3-futurium/housing-parts.png
image3: /images/blog_images/no2-o3-futurium/afe-sensor-board.png
image4: /images/blog_images/no2-o3-futurium/ring-membran.png
image5: /images/blog_images/no2-o3-futurium/skews-afe.png
image6: /images/blog_images/no2-o3-futurium/verstaerker-board.png
image7: /images/blog_images/no2-o3-futurium/order-sensors.png
image8: /images/blog_images/no2-o3-futurium/overview-sensors.png
image9: /images/blog_images/no2-o3-futurium/include_libs.png
image10: /images/blog_images/no2-o3-futurium/calibration-sheet.png
lang: de
---
# Stickstoffdioxid (NO2) und Ozon (O3) Messungen in Berlin

Gemeinsam mit dem Zukunftsmuseum Futurium in Berlin, haben ein gewagtes Projekt durchgeführt. Zehn Berliner Bürger welche bei einer Verlosung teilgenommen hatten,
haben eine senseBox mit NO2 und O3 Sensor gewonnen. Bei einem Workshop haben wir die Gewinner der Verlosung beim Zusammenbau der senseBox sowie der Anbringung 
und Programmierung der Sauerstoff- und Ozonsensoren unterstützt. Anschließend konnten die Teilnehmenden ihre Boxen zuhause anbringen und die Messungen über die 
[openSenseMap](https://opensensemap.org) live verfolgen. Für uns war es die Chance
das erste Mal senseBoxen mit NO2 und O3 Sensoren auszustatten. Im folgenden erkläre wir deshalb unseren Aufbau, sowie beschreibe unsere
Erfahrungen mit den Sensoren. Wir freuen uns über Rückmeldungen und Eure Erfahrungen zum Thema in diesem [Forum-Post](https://forum.sensebox.de/t/stickoxyd-sensor/206/5)

# Vorbereitungen für den Anschluss der Sensoren

Neben den üblichen senseBox Sensoren, also Feinstaub, Temperatur, Luftfeuchte, Luftdruck, Beleuchtungsstärke und UV sollte die senseBox nun NO2 und O3 Messwerte erfassen. 
Eine detaillierte Beschreibung der Grundlagen beim Anschluss der üblichen senseBox Sensoren überspringe wir hier und konzentrieren uns auf die NO2 & O3 Sensorik.
Bitte nutze andere [Projekte](https://sensebox.de/de/projects/) und [Anleitungen](https://sensebox.de/de/material), falls du eine genauere Erklärung beim Anschluss einzelner Sensoren benötigst.

## Sicherheitshinweiße
Wenn du das Projekt nachbauen möchtest, beachte bitte, dass die Alphasense Sensorik sehr empfindlich ist. Bitte fasse nie direkt auf die Membran der 
Sensoren, da Fettpartikel der Haut an der Membran hängen bleiben und dadurch die Messwerte zerstören. 

Die Sensoren müssen zudem jährlich kalibriert werden. Dafür müssen Sie in ein Labor eingeschickt werden. Wir versuchen das Set irgendwann
als Erweiterung anbieten zu können, wir wissen aber nochnicht genau wie, deshalb könnt ihr die Sensoren aktuell nicht auf www.sensebox.kaufen
besorgen. Den Rest gibt's natürlich dort ;-) .

## Grundlagen Anschluss der Hardware
Bitte schließe alle Sensoren außer den NO2 & O3 Sensor an die senseBox-MCU, wie in diesem Video erklärt.

[![Video](https://img.youtube.com/vi/dUuRfZI39U8&feature=youtu.be/0.jpg)](https://www.youtube.com/watch?v=dUuRfZI39U8&feature=youtu.be)

Verbinde jedoch die Verbindungsplatte noch nicht mit dem Mikrocontroller und schließe den Deckel des Gehäuses 
auch noch nicht, da natürlich noch die Erweiterung angeschlossen werden muss. 

## Anschluss des NO2 & O3 Sensors
Das Erweiterungsset für NO2 & O3, welches wir benutzt haben, besteht aus folgenden Komponenten:
- Einem gebohrten Aluminium Gehäuse für die beiden Sensoren
- Einem Alphasense NO2 Sensor: NO2-A43F
- Einem Alphasense OX Sensor: OX-A431
- Einem Alphasense Analog Front End (AFE) Sensor-Board mit Verbindungskabel
- Einer Verstärker Platine basierend auf Adafruit ADS1015
- 2 x senseBox JST-JST Verbindungskabel
- M20 Verschraubung
- Dichtungen
- 4 x Verschaubungen
- Kalibrations-Datenblatt

### Aufbau NO2 & O3 Sensors
Das Aluminium Gehäuse soll die Sensoren vor Strahlung und Stöhrungen schützen und bildet im besten Fall einen Faraday'scher Käfig. Gehäuse aus Plastik werden nicht empfohlen da Sie selbst Gase produzieren und dadurch die Messungen beeinflussen. Befestige zuerst die M20 Verschraubung mit dem Aluminium Gehäuse. 

{% include image.html image=page.image1 %}
{% include image.html image=page.image2 %}

 Die beiden Sensoren sind auf dem Analog Front End (AFE) aufgesetzt. Befestige dort zuerst die Abstandshalter mit den kleinen Schrauben auf dem AFE. 

{% include image.html image=page.image3 %}

 Klebe dann die Dichtungsringe auf die Aussparungen aus welchen später die Membram aus dem Gehäuse schaut. 

 {% include image.html image=page.image4 %}

Jetzt musst du noch den Sensor am Gehäuse montieren. Auchte darauf, dass der Dichtungsring gut zwischen Sensorkopf und Aluminiumgehäuse abdichtet. 

{% include image.html image=page.image5 %}

### Verbidnung des NO2 & O3 Sensors mit dem Mikrontroller

 Das Kabel des AFE wird mit der Verstärker-Platine verbunden. In die Verstärker Platine werden außerdem die beiden JST-JST Verbindungskabel gesteckt und durch die M20 Verschraubung nach außen gefädelt. Das Kabel welches links vor dem Verstärker eingesteckt wird, wird in einen der freien I2C/Wire Ports auf dem senseBox MCU eingesteckt. Das Kabel aus dem rechten Port auf dem Verstärker wird mit dem Digital A Port der senseBox MCU verbunden.  

{% include image.html image=page.image6 %}

Lege danach den Verstärker und die Kabel in das Aluminium Gehäuse und schließe es mit den Verschraubungen. Achte darauf keine Kurzschlüsse zu generieren. Wenn du eine anti-static Hülle hast kannst du den Verstärker damit einpacken.

## Registrierung auf der openSenseMap

Lege dir einen Account auf der [openSenseMap](https://opensensemap.org) an. Klicke auf dein Nutzerprofil oben rechts und dann auf auf "Neue senseBox". Akzeptiere die Datenschutzbedingungen und klicke auf "Weiter". Gebe dann deiner senseBox einen Namen, gebe den Aufstellungsort sowie den Standort an.

Dann wähle in der Sektion "Hardware" die Möglichkeit "Manuelle Konfiguration". Danach legst du die Sensoren in folgender Reihenfolge an. Hierbei ist die Reihenfolge *wichtig* da sonst das Software Skript Probleme bereiten wird. Denke also daran den Code anzupassen, wenn du Änderungen im Sensor Set-Up umsetzt.

 {% include image.html image=page.image7 %}

Danach klickst du auf weiter und erhälst erhälst danach eine Übersicht mit deiner senseBox ID und deinen Sensoren IDs. Diese musst du später im Software Code austauschen.

{% include image.html image=page.image8 %}

## Programmierung in der Arduino IDE

### Vorbereitung

Am Ende dieses Unterkapitels findest du eine Sektion mit dem benötigten Code. Wenn du noch nie eine senseBox mit der Arduino IDE programmiert hast musst du zudem noch einige Konfigurationen durchführen, insbesondere zwei zusätzliche [Board Support Packages](https://sensebox.github.io/books-v2/home/de/erste-schritte/board-support-packages-installieren.html) einbinden. 

Desweiteren braucht man noch eine weitere Library mit dem Namen "Adafruit_ADS1015.h" für das Verstärker Board. Diese kannst du [hier](https://github.com/adafruit/Adafruit_ADS1X15) als .zip Datei downloaden. Klicke dafür auf der rechten Seite auf den grünen Button "Clone or download" und dann auf "Download ZIP".

Öffne jetzt die Arduino IDE und klicke auf "Sketch" im Menü und dann auf "Bibliothek einbinden". Die zweite Option ist "ZIP-Bibliothek einbinden" unter welcher du dann einfach die ZIP Datei in deinem Dateisystem auswählst und dann öffnest.

{% include image.html image=page.image9 %}

### Konfiguration deines Sketch

Bevor du loslegst, musst du im bereitgestellten Sketch noch drei Konfigurationen vornehmen:


1. WiFi-Zugangsdaten

Natürlich musst du noch die WiFi-Zugangsdaten für dein Netzwerk anpassen. Gehe dafür in Zeile 18 und ersetze den Netzwerknamen sowie das Passwort mit deinen Zugangsdaten. Schreibe beides innerhalb der beiden Anführungszeichen "HIER" und ohne Leerzeichen davor oder danach.

```arduino
// Wifi Credentials
const char *ssid = "HIER-NETZWERKNAME"; // your network SSID (name)
const char *pass = "HIER-PASSWORT"; // your network password
```

2. Kalibrierung der NO2 / O3 Sensoren*

Der Jeder NO2 / O3 Sensor wird in der Produktionsstätte kalibriert und wird deshalb mit einem Kalibrations-Datenblatt ausgeliefert. Es gibt verschiedene Werte im Kalibrations-Datenblatt welche in zwei Reihen dargestellt sind. Die linke Reihe sind die Parameter für den NO2 Sensor, die rechte Reihe sind die Parameter für den O3 Sensor. Wir brauchen den 3. (Total WE Zero offset in mV) den 6. (Total AE Zero offset in mV) und den 10. (Sensitivity in mV/ppb) Wert aus der Liste.

{% include image.html image=page.image10 %}

In Zeile 22 bis 30 findest du folgende "calibration parameters" welche du entsprechend deines Datenblatts anpassen musst.

```arduino
// NO2 and O3 calibration parameters
const int NO2WEzero = 293;
const int NO2AEzero = 312;
const float NO2sensivity = 0.255;

const int O3WEzero = 406;
const int O3AEzero = 409;
const float O3sensivity = 0.369;
```

3. senseBox ID ersetzen

Ersetze zudem die senseBoxID in den Anführungszeichen mit der senseBoxID welche du nach der Registrierung der senseBox auf der openSenseMap erhalten hast.

```arduino
// senseBox ID
const char SENSEBOX_ID[] PROGMEM = "5d165b3d30bde6001a14f4e9";
```

3. Sensoren IDs ersetzen

Wiederhole den gleichen Vorgang mit allen SensorIDs welche du auch von der openSenseMap erhalten hast. 

```arduino
// sensor IDs
// Temperatur
const char TEMPERSENSOR_ID[] PROGMEM = "5d165b3d30bde6001a14f4f6";
// rel. Luftfeuchte
const char RELLUFSENSOR_ID[] PROGMEM = "5d165b3d30bde6001a14f4f4";
// Luftdruck
const char LUFTDRSENSOR_ID[] PROGMEM = "5d165b3d30bde6001a14f4f3";
// Beleuchtungsstärke
const char BELEUCSENSOR_ID[] PROGMEM = "5d165b3d30bde6001a14f4f6";
// UV-Intensität
const char UVINTESENSOR_ID[] PROGMEM = "5d165b3d30bde6001a14f4e5";
// PM10
const char PM10SENSOR_ID[] PROGMEM = "5d165b3d30bde6001a14f4ed";
// PM2.5
const char PM25SENSOR_ID[] PROGMEM = "5d165b3d30bde6001a14f4ef";
// Stickoxid
const char STICKOSENSOR_ID[] PROGMEM = "5d165b3d30bde6001a14f4ea";
// NO2 AE
const char NO2AESENSOR_ID[] PROGMEM = "5d165b3d30bde6001a14f4ez";
// NO2 WE
const char NO2WESENSOR_ID[] PROGMEM = "5d165b3d30bde6001a14f4ex";
// Ozon
const char OZONSENSOR_ID[] PROGMEM = "5d165b3d30bde6001a14f4ey";
// O3 AE
const char O3AESENSOR_ID[] PROGMEM = "5d165b3d30bde6001a14f4ed";
// O3 WE
const char O3WESENSOR_ID[] PROGMEM = "5d165f1230bde6001a161169";
```

Jetzt musst du nur noch den Code hochladen indem du auf den Uploud Pfeil in der Arduino IDE klickst.

## Aufstellungsort

Das war's erstmal, suche einen guten Aufstellungsort für deine senseBox und achte darauf, dass der NO2 / O3 Sensor unter keinen Umständen Feuchte oder Staub ausgesetzt ist.
Bitte beachtet außerdem, dass wir keine Experten im Bereich chemische Gase sind. Deshalb sind Fehler in diesem Prototypen möglich. Wir freuen
und auf den Austausch mit Euch.


```arduino

/*
  senseBox:home - Citizen Sensingplatform
  Version: NOX based on wifiv2_0.5
  Date: 2019-06-30
  Homepage: https://www.sensebox.de https://www.opensensemap.org
  Author: Reedu GmbH & Co. KG
  Note: Sketch for senseBox:home WiFi MCU Edition with dust particle, NO2 and O3 upgrade
  Model: homeV2WifiFeinstaub
  Email: support@sensebox.de
  Code is in the public domain.
  https://github.com/sensebox/node-sketch-templater
*/

/* ------------------------------------------------------------------------- */
/* ------------------------------Configuration------------------------------ */
/* ------------------------------------------------------------------------- */

// Wifi Credentials
const char *ssid = "INSERT-NETWORK-SSID"; // your network SSID (name)
const char *pass = "INSERT-PASSWORD"; // your network password

// NO2 and O3 calibration parameters
const int NO2WEzero = 293;
const int NO2AEzero = 312;
const float NO2sensivity = 0.255;

const int O3WEzero = 406;
const int O3AEzero = 409;
const float O3sensivity = 0.369;

// Number of serial port the SDS011 is connected to. Either Serial1 or Serial2
#define SDS_UART_PORT (Serial1)

// Interval of measuring and submitting values in seconds
const unsigned int postingInterval = 60e3;

// address of the server to send to
const char server[] PROGMEM = "ingress.opensensemap.org";

// senseBox ID
const char SENSEBOX_ID[] PROGMEM = "5c00f181ccc67b001c719945";

// Number of sensors
// Change this number if you add or remove sensors
// do not forget to remove or add the sensors on opensensemap.org
static const uint8_t NUM_SENSORS = 13;

// sensor IDs
// Temperatur
const char TEMPERSENSOR_ID[] PROGMEM = "5c00f181ccc67b001c71994c";
// rel. Luftfeuchte
const char RELLUFSENSOR_ID[] PROGMEM = "5c00f181ccc67b001c71994b";
// Luftdruck
const char LUFTDRSENSOR_ID[] PROGMEM = "5c00f181ccc67b001c71994a";
// Beleuchtungsstärke
const char BELEUCSENSOR_ID[] PROGMEM = "5c00f181ccc67b001c719949";
// UV-Intensität
const char UVINTESENSOR_ID[] PROGMEM = "5c00f181ccc67b001c719948";
// PM10
const char PM10SENSOR_ID[] PROGMEM = "5c00f181ccc67b001c719947";
// PM2.5
const char PM25SENSOR_ID[] PROGMEM = "5c00f181ccc67b001c719946";
// Stickoxid
const char STICKOSENSOR_ID[] PROGMEM = "5c00f222ccc67b001c71b9c6";
// NO2 AE
const char NO2AESENSOR_ID[] PROGMEM = "5c012cfbccc67b001c7dd2cb";
// NO2 WE
const char NO2WESENSOR_ID[] PROGMEM = "5c012d26ccc67b001c7ddc07";
// Ozon
const char OZONSENSOR_ID[] PROGMEM = "5c012d66ccc67b001c7de83a";
// O3 AE
const char O3AESENSOR_ID[] PROGMEM = "5c012d92ccc67b001c7df219";
// O3 WE
const char O3WESENSOR_ID[] PROGMEM = "5c012dc5ccc67b001c7dfca2";


/* ------------------------------------------------------------------------- */
/* --------------------------End of Configuration--------------------------- */
/* ------------------------------------------------------------------------- */

#include <senseBoxIO.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP280.h>
#include <HDC100X.h>
#include <Makerblog_TSL45315.h>
#include <SDS011-select-serial.h>
#include <SPI.h>
#include <VEML6070.h>
#include <WiFi101.h>
#include <Wire.h>
#include <Adafruit_ADS1015.h>

WiFiClient client;

// Sensor Instances
Makerblog_TSL45315 TSL = Makerblog_TSL45315(TSL45315_TIME_M4);
HDC100X HDC(0x40);
Adafruit_BMP280 BMP;
VEML6070 VEML;
SDS011 SDS(SDS_UART_PORT);
Adafruit_ADS1115 ads(0x48);

bool hdc, bmp, veml, tsl = false;

//ADC settings
int16_t adc0, adc1, adc2, adc3; 
float integralA0, integralA1, integralA2, integralA3;
float pga = 0.03125; //taken from table below

typedef struct measurement {
  const char *sensorId;
  float value;
} measurement;

measurement measurements[NUM_SENSORS];
uint8_t num_measurements = 0;

// buffer for sprintf
char buffer[150];
char measurementsBuffer[NUM_SENSORS * 35];

void addMeasurement(const char *sensorId, float value) {
  measurements[num_measurements].sensorId = sensorId;
  measurements[num_measurements].value = value;
  num_measurements++;
}

void writeMeasurementsToClient() {
  // iterate throug the measurements array
  for (uint8_t i = 0; i < num_measurements; i++) {
    sprintf_P(buffer, PSTR("%s,%9.2f\n"), measurements[i].sensorId,
              measurements[i].value);

    // transmit buffer to client
    client.print(buffer);
    Serial.print(buffer);
  }

  // reset num_measurements
  num_measurements = 0;
}

void submitValues() {
  if (WiFi.status() != WL_CONNECTED) {
    WiFi.disconnect();
    delay(1000); // wait 1s
    WiFi.begin(ssid, pass);
    delay(5000); // wait 5s
  }
  // close any connection before send a new request.
  // This will free the socket on the WiFi shield
  if (client.connected()) {
    client.stop();
    delay(1000);
  }
  bool connected = false;
  char _server[strlen_P(server)];
  strcpy_P(_server, server);
  for (uint8_t timeout = 2; timeout != 0; timeout--) {
    Serial.println(F("connecting..."));
    connected = client.connect(_server, 80);
    if (connected == true) {
      Serial.println(F("Connection successful, transferring..."));
      // construct the HTTP POST request:
      sprintf_P(buffer,
                PSTR("POST /boxes/%s/data HTTP/1.1\nHost: %s\nContent-Type: "
                     "text/csv\nConnection: close\nContent-Length: %i\n\n"),
                SENSEBOX_ID, server, num_measurements * 35);
      Serial.print(buffer);

      // send the HTTP POST request:
      client.print(buffer);

      // send measurements
      writeMeasurementsToClient();

      // send empty line to end the request
      client.println();

      uint16_t timeout = 0;
      // allow the response to be computed

      while (timeout <= 5000) {
        delay(10);
        timeout = timeout + 10;
        //                Serial.println(timeout);
        if (client.available()) {
          break;
        }
      }

      while (client.available()) {
        char c = client.read();
        Serial.write(c);
        // if the server's disconnected, stop the client:
        if (!client.connected()) {
          Serial.println();
          Serial.println("disconnecting from server.");
          client.stop();
          break;
        }
      }

      Serial.println("done!");

      // reset number of measurements
      num_measurements = 0;
      break;
    }
    delay(1000);
  }

  if (connected == false) {
    // Reset durchführen
    Serial.println(F("connection failed. Restarting System."));
    delay(5000);
    noInterrupts();
    NVIC_SystemReset();
    while (1)
      ;
  }
}

void checkI2CSensors() {
  byte error;
  int nDevices = 0;
  byte sensorAddr[] = {41, 56, 57, 64, 118};
  tsl = false; veml = false; hdc = false; bmp = false;
  Serial.println("\nScanning...");
  for (int i = 0; i < sizeof(sensorAddr); i++) {
    Wire.beginTransmission(sensorAddr[i]);
    error = Wire.endTransmission();
    if (error == 0) {
      nDevices++;
      switch (sensorAddr[i])
      {
        case 0x29:
          Serial.println("TSL45315 found.");
          tsl = true;
          break;
        case 0x38: // &0x39
          Serial.println("VEML6070 found.");
          veml = true;
          break;
        case 0x40:
          Serial.println("HDC1080 found.");
          hdc = true;
          break;
        case 0x76:
          Serial.println("BMP280 found.");
          bmp = true;
          break;
      }
    }
    else if (error == 4)
    {
      Serial.print("Unknown error at address 0x");
      if (sensorAddr[i] < 16)
        Serial.print("0");
      Serial.println(sensorAddr[i], HEX);
    }
  }
  if (nDevices == 0) {
    Serial.println("No I2C devices found.\nCheck cable connections and press Reset.");
    while(true);
  } else {
    Serial.print(nDevices);
    Serial.println(" sensors found.\n");
  }
  //return nDevices;
}

/*Arguments: 
 * analog measurements from working electrode (WE) and auxilary electrode (AE)
 * unique calibration variables (WE0,AE0,St)
 * resolution for 1 bit of ADC reading (res)
 */
float getGasConc(float WE, float AE, int WE0, int AE0, float St, float res){
  //measurements in mV
  float WEmV = WE * res;
  float AEmV = AE * res;
  //formula for translation into ppb
  float ppb = ((WEmV-WE0)-(AEmV-AE0))/St;
  
  return ppb;
}

void setup() {
  // Initialize serial and wait for port to open:
  Serial.begin(9600);
  delay(5000);

  Serial.print("xbee1 spi enable...");
  senseBoxIO.SPIselectXB1(); // select XBEE1 spi
  Serial.println("done");
  senseBoxIO.powerXB1(false);delay(200);
  Serial.print("xbee1 power on...");
  senseBoxIO.powerXB1(true); // power ON XBEE1
  Serial.println("done");
  senseBoxIO.powerI2C(false);delay(200);
  senseBoxIO.powerI2C(true);

  // Check WiFi Shield status
  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println(F("WiFi shield not present"));
    // don't continue:
    while (true)
      ;
  }
  uint8_t status = WL_IDLE_STATUS;
  // attempt to connect to Wifi network:
  while (status != WL_CONNECTED) {
    Serial.println(F("Attempting to connect to SSID: "));
    Serial.println(ssid);
    // Connect to WPA/WPA2 network. Change this line if using open or WEP
    // network
    status = WiFi.begin(ssid, pass);
    // wait 10 seconds for connection:
    Serial.println(F("Waiting 10 seconds for connection..."));
    delay(10000);
    Serial.println(F("done."));
  }
  
  // The ADC input range (or gain)
  ads.setGain(GAIN_FOUR); // 4x gain; +/- 1.024V; 1 bit = 0.5mV; 0.03125mV
  ads.begin();
  // init I2C/wire library
  Wire.begin();
  // Sensor initialization
  Serial.println(F("Initializing sensors..."));
  SDS_UART_PORT.begin(9600);
  checkI2CSensors();
  if (veml) 
  {
    VEML.begin();
    delay(500);
  }
  if (hdc)
  {
    HDC.begin(HDC100X_TEMP_HUMI, HDC100X_14BIT, HDC100X_14BIT, DISABLE);
    HDC.getTemp();
  }
  if (tsl)
    TSL.begin();
  if (bmp)
    BMP.begin(0x76);
  Serial.println(F("done!"));
  Serial.println(F("Starting loop in 3 seconds."));
  delay(3000);
}

void loop() {
  Serial.println(F("Loop"));
  // capture loop start timestamp
  unsigned long start = millis();

  // read measurements from sensors
  if(hdc)
  {
    addMeasurement(TEMPERSENSOR_ID, HDC.getTemp());
    delay(200);
    addMeasurement(RELLUFSENSOR_ID, HDC.getHumi());
  }
  if(bmp)
  {
    float tempBaro, pressure, altitude;
    tempBaro = BMP.readTemperature();
    pressure = BMP.readPressure()/100;
    altitude = BMP.readAltitude(1013.25); //1013.25 = sea level pressure
    addMeasurement(LUFTDRSENSOR_ID, pressure);
  }
  if (tsl)
    addMeasurement(BELEUCSENSOR_ID, TSL.readLux());
  if (veml)
    addMeasurement(UVINTESENSOR_ID, VEML.getUV());

  uint8_t attempt = 0;
  float pm10, pm25;
  while (attempt < 5) {
    bool error = SDS.read(&pm25, &pm10);
    if (!error) {
      addMeasurement(PM10SENSOR_ID, pm10);
      addMeasurement(PM25SENSOR_ID, pm25);
      break;
    }
    attempt++;
  }

  /////////////
  integralA0 = 0;
  integralA1 = 0;
  integralA2 = 0;
  integralA3 = 0;
  
  for (int i = 0; i < 20; i++)
  {
    //Serial.println(i);
    adc0 = ads.readADC_SingleEnded(0);
    adc1 = ads.readADC_SingleEnded(1);
    adc2 = ads.readADC_SingleEnded(2);
    adc3 = ads.readADC_SingleEnded(3);
    integralA0 = integralA0 + adc0;
    integralA1 = integralA1 + adc1;
    integralA2 = integralA2 + adc2;
    integralA3 = integralA3 + adc3;
    
    delay(10);
  }

  float avgA0 = integralA0 / 20;
  float avgA1 = integralA1 / 20;
  float avgA2 = integralA2 / 20; 
  float avgA3 = integralA3 / 20;
/*
  Serial.print("AIN0: "); Serial.println(adc0); //O3 AE
  Serial.print("AIN1: "); Serial.println(adc1); //O3 WE
  Serial.print("AIN2: "); Serial.println(adc2); //NO2 AE
  Serial.print("AIN3: "); Serial.println(adc3); //NO2 WE
  Serial.print("Average A0: "); Serial.println(avgA0);
  Serial.print("Average A1: "); Serial.println(avgA1);
  Serial.print("Average A2: "); Serial.println(avgA2);
  Serial.print("Average A3: "); Serial.println(avgA3);
  Serial.println(" ");
*/
  float no2 = getGasConc(avgA3,avgA2, NO2WEzero, NO2AEzero, NO2sensivity, pga);
  addMeasurement(STICKOSENSOR_ID, no2);
  addMeasurement(NO2AESENSOR_ID, avgA2*pga);
  addMeasurement(NO2WESENSOR_ID, avgA3*pga);
  float o3 = getGasConc(avgA1, avgA0, O3WEzero, O3AEzero, NO2sensivity, pga);
  addMeasurement(OZONSENSOR_ID, o3);
  addMeasurement(O3AESENSOR_ID, avgA0*pga);
  addMeasurement(O3WESENSOR_ID, avgA1*pga);

  //Serial.print("NO2 in ppb: "); Serial.println(no2);
  //Serial.print("O3 in ppb: "); Serial.println(o3);
  
  Serial.println(F("submit values"));
  submitValues();

  // schedule next round of measurements
  for (;;) {
    unsigned long now = millis();
    unsigned long elapsed = now - start;
    if (elapsed >= postingInterval)
      return;
  }
}


```

