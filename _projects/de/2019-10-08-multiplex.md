---
layout: project_page
name: "senseBox I2C-Multiplexer"
date: 2019-10-08
author: Jan
abstract: "Sensoren gleicher Bauart parallel am I2C-Bus anschließen"
image: logo_bunt.png
image0: /images/projects/multiplex/hardware_setup.png
image1: /images/projects/multiplex/datasheet_table.png
material:
    - senseBox MCU
    - I2C Multiplexer
    - 3x Temperatur-/Luftfeuchtigkeitssensor
    - 4x JST-JST Kabel
ide: arduino
addons: ["Multiplexer"]
version: ["edu", "mini"]
lang: de
tags: ["Informatik"]
difficult: leicht
---
# senseBox I2C-Multiplexer
Bei der I2C Schnittstelle kann es vorkommen, dass zwei oder mehrere Geräte die gleiche Adresse nutzen. Auch wenn man zwei gleiche Sensoren nutzen möchte tritt dieses Problem auf. Hierbei hilft ein sogenannter Multiplexer. Angeschlossen wird er ebenfalls an den I2C Anschluss vom Controller. Danach sendet man an seine Adresse (0x77) einen Befehl mit einer Kanalnummer von 0-7 (entspricht der Nummerierung 1-8 auf dem Multiplex) mit der man kommunizieren möchte. Alle weiteren Befehle werden danach an den entsprechenden Kanal umgeleitet. 
Im Folgenden ein Beispiel für die Implementierung von drei [HDC1080 Sensoren aus der senseBox Baureihe](https://sensebox.kaufen/product/temperatur-luftfeuchte). 

## Aufbau
Für unser Beispiel benöten wir die folgenden Bauteile:
- senseBox MCU
- I2C Multiplexer
- 3x Temperatur-/Luftfeuchtigkeitssensor
- 4x JST-JST Kabel

Zunächst wird der I2C-Multiplexer mit einem JST-JST Kabel an einen der I2C/Wire Ports der MCU angeschlossen. Die Temperatursensoren wiederum werden mit den Anschlüssen 1, 2 und 3 vom I2C-Multiplexer (entspricht den Kanälen 0, 1 und 2) verbunden.

{% include image.html image=page.image0 %}


## Programmierung
Der senseBox I2C-Multiplexer basiert auf dem [TCA9548A von Texas Instruments](http://www.ti.com/product/TCA9548A), welcher bereits Bestandteil vieler Tutorials aus der Community geworden ist. Mit dem folgenden Beispielcode von [Retians Blog](https://arduino-projekte.webnode.at/meine-libraries/i2c-multiplexer-tca9548a/) könnt ihr den Multiplex testen und überprüfen an welche Kanälen etwas angeschlossen ist:

[https://arduino-projekte.webnode.at/_files/200002383-38c7539c19/TCA9548A_Scanner.ino.txt](https://arduino-projekte.webnode.at/_files/200002383-38c7539c19/TCA9548A_Scanner.ino.txt)

Für die Implementierung des o.g. Beispiels binden wir zuerst die benötigten Bibliotheken ein. `Wire.h` für die I2C Funktionalität und `SenseBoxMCU.h` für die Funktionen des Sensors. 

```
#include <Wire.h>
#include <SenseBoxMCU.h>
```

Nun definieren wir die Adresse des Multiplex und eine Liste von Kanälen, an denen die Sensoren angeschlossen sind. 

```
byte multiplexAddress = 0x77;
byte channels[] = {0,1,2};
```

Für den Sensor erzeugen wir ein Objekt und starten dessen Instanz hinter der seriellen Verbindung in der Setup-Funktion.

```
HDC1080 hdc

void setup() {
    Serial.begin(115200);
    hdc.begin();
}
```

In der Endlosschleife werden mit Hilfe einer for-Schleife die Kanäle fortlaufend gewechselt. Für jeden Kanal wird der Multiplex über seine Adresse angesprochen. Dann übergeben wir lediglich die Nummer des Kanals an den alle Folgebefehle gesendet werden. Das geschieht so lang bis ein neuer Kanal kommuniziert wird. 

```
for (int i = 0; i < (sizeof(channels)/sizeof(channels[0])); i++){
   Wire.beginTransmission(multiplexAddress);
   Wire.write(1 << channels[i]);
   Wire.endTransmission();

   Serial.print(channels[i]);
   Serial.print(F(". channel temperature: "));
   Serial.println(hdc.getTemperature());
}
```

Nun lassen sich die Sensoren einzeln auslesen. Man erkennt dabei minimale Abweichungen unter den baugleichen Sensoren: 

```
0. channel temperature: 21.96
1. channel temperature: 22.09
2. channel temperature: 22.14
```

Äquivalent lässt sich jedes I2C Gerät mehrfach mit dem Multiplexer nutzen. Falls mehr als acht Geräte mit gleicher Kennung parallel betrieben werden sollen, lässt sich die Adressierung vom Multiplex anhand der drei Lötstellen auf seiner Rückseite und der folgenden Tabelle aus seinem [Datenblatt](http://www.ti.com/lit/ds/symlink/tca9548a.pdf) anpassen:

{% include image.html image=page.image1 %}

Hervorgehoben in der Tabelle wurde die Standardeinstellung mit der Adressierung 0x77.
