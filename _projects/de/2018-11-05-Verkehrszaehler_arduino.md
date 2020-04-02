---
layout: project_page
name: "Verkehrszähler"
date: 2018-11-05
author: Mario
abstract: "Ein kleiner Verkehrszähler"
image: traffic_counter.png
image1: /images/projects/verkehrszaehler_setup.png
material:
    - senseBox MCU
    - Ultraschallsensor
    - JST-Kabel
ide: arduino    
lang: de
version: ["edu"]
tags: ["Geographie", "Informatik"]
difficult: leicht
---
# Verkehrszähler

Ziel ist es, einen Verkehrs- oder Personenzähler zu entwickeln. <br>
Dazu wird der Ultraschall-Distanzsensor verwendet. Die so aufgenommenen Werte sollen im <b>Seriellen Monitor</b> der Arduino IDE ausgegeben werden.

## Grundlagen
Der Ultraschall-Distanzsensor nutzt den Schall, um die Entfernung von Objekten zu bestimmen. Der Sensor sendet einen Impuls aus und misst die Zeit, bis er das Echo des Impulses wieder empfängt. Aus dieser Zeit wird mithilfe der Schallgeschwindigkeit die Entfernung des Objekts berechnet.

## Aufbau
Der Ultraschall-Distanzsensor wird mit einem JST-Adapterkabel mit der senseBox MCU verbunden. Dazu wird das JST-Adapterkabel mit dem Port Digital A verbunden.
Zur Stromversorgung wird der Kontakt VCC des Sensors mit dem roten Kabel (5V) und der Kontakt GND des Sensors mit
dem schwarzen Kabel (GND) verbunden. Zur Datenübertragung wird dann das grüne Kabel (1) mit dem Kontakt Echo und das gelbe Kabel (2) mit dem Kontakt Trig des Sensors verbunden.

{% include image.html image=page.image1 %}

***Hinweis:*** *Ihr könnt natürlich jeden mit "Digital" beschrifteten Port verwenden, denkt aber daran, den Code anzupassen.*

## Programmierung

### Schritt 1

Zu Beginn wird die senseBoxMCU Library eingebunden und die Klasse für den Ultraschallsensor definiert. Beim Definieren der Klasse musst du angeben, an welchen Pins du den Ultraschallsensor angeschlossen hast. 
Außerdem werden zwei Variablen angelegt, in denen die gemessene Zeit und die errechnete Distanz gespeichert werden.

```arduino
#include "SenseBoxMCU.h"
Ultrasonic Ultrasonic(1,2);
int distance;
```

Im `setup()` wird der *Serielle Monitor* gestartet. 

```arduino
void setup() {
  SerialUSB.begin(9600);
}
```

Im `loop()` kann nun die Distanz ausgelesen und anschließend über den Seriellen Monitor ausgegeben werden.
```arduino
void loop() {
  distance = UltrasonicA.getDistance();
  SerialUSB.println(distance);
}
```
Ein 10 Mikrosekunden langer Ultraschallimpuls wird ausgesendet.

### Schritt 2

Im zweiten Schritt wird mithilfe der Distanz erfasst, ob ein Auto vorbeifährt. Dazu wird eine Wenn-Dann Bedingung verwendet. Wenn die Distanz unter einem gewissen Grenzwert fällt, soll ein Zähler hochgezählt werden. Der Zähler wird als Integer Variable angelegt. 

Beachte dabei folgende Hinweise:
- Versuche nur einen bestimmten Entfernungsbereich auszuwerten, damit es
nicht zu Störungen durch Bewegungen im Hintergrund kommt. Effektiv misst der Sensor ca. 3 Meter.

- Um Mehrfachzählungen eines stehenden Fahrzeuges zu vermeiden, solltest du eine Bedingung programmieren, die den Zählvorgang stoppt, bis die Spur wieder frei ist. Der Sensor misst dann eine vorher festgelegte Maximaldistanz für die Spur. Dazu bietet sich ein `while`-Schleife an. Zuerst muss überprüft werden, ob sich ein Objekt im Messbereich befindet. Solange der Sensor nicht misst, dass die Fahrbahn wieder frei ist, soll er erneut messen. Erst, wenn die Fahrbahn wieder frei ist, soll er die Zählvariable um eins erhöhen.

- Damit die Messwerte beim Einfahren in den Messbereich nicht zu sehr schwanken, kann es helfen, zwischen den einzelnen Messungen eine Verzögerung von 200 ms zu programmieren.
    


