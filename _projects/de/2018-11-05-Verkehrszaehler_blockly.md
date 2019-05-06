---
layout: project_page
name: "Verkehrszähler mit Blockly"
date: 2019-04-09
author: Lia
abstract: "Ein kleiner Verkehrszähler"
image: traffic_counter.png
image1: /images/projects/verkehrszaehler/Verkehrszaehler_v2.png
image2: /images/projects/verkehrszaehler/Fotoblockly.jpg
material:
    - senseBox MCU
    - Ultraschallsensor
    - JST Kabel
ide: blockly    
lang: de
tags: ["Geographie", "Informatik"]
difficult: leicht
---
# Verkehrszähler

Ziel ist es, einen Verkehrs- oder Personenzähler zu entwickeln. <br>
Dazu wird ein Ultraschall-Distanzsensor verwendet.
Die so aufgenommenen Werte sollen auf dem <b>Display</b> ausgegeben werden.

## Grundlagen
Der Ultraschall-Distanzsensor nutzt den Schall um die Entfernung von Objekten zu bestimmen. Der Sensor sendet einen Impuls aus und misst die Zeit, bis er das Echo des Impulses wieder empfängt. Aus dieser Zeit kann dann mit Hilfe der Schallgeschwindigkeit die Entfernung des Objekts berechnet werden.

## Aufbau

Um den Ultraschallsensor mit Strom zu versorgen kann ein JST-Adapterkabel genutzt werden, welches die sensebox-MCU und den Ultraschallsensor verbindet. Dafür kann das eine Ende des JST-Adapterkabels an den Digital A Steckplatz der sensebox MCU gesteckt werden. Das andere Ende dient der Strom- und Datenversorgung. Es ist wichtig, dass die verschiedenen Kabel an die richtigen Stellen des Sensors angesteckt werden.
Zur Stromversorgung dient der VCC-Pin, sowie der GND-Pin des Sensors. Der VCC-Pin sollte mit dem roten Kabel (5V) des JST-Adapterkabels, der GND-Pin mit dem schwarzen Kabel des JST-Adapterkabels verbunden werden.
Das grüne und das gelbe  Kabel können zur Datenübertragung genutzt werden. Das grüne Kabel sollte hierzu mit dem Echo-Anschluss des Sensors verbunden werden und das gelbe Kabel mit dem Trig-Pin.

***Hinweis :*** *Der Sensor sollte vertikal auf dem Steckbrett der MCU angebracht werden.*

{% include image.html image=page.image1 %}

***Hinweis :*** *Der Sensor sollte in die Richtung zeigen, bei der keine Kabel im Weg sind, da so der Schall nicht behindert werden kann.*

## Programmierung

Bei der Programmierung kann die Programmieroberfläche Blockly genutzt werden. Mit Hilfe der vorgegebenen Blöcke kann verschiedener Code gut zusammengesetzt werden.
Die Blöcke die auf dem unteren Bild abgebildet sind können zur Programmierung des Ultarschallsensors genutzt werden.

{% include image.html image=page.image2 %}

Um den Wert des Sensors auf dem Display anzuzeigen sollte zuerst das Display in der Setup()-Schleife initialisiert und dann in der Endlos()-Schleife genutzt werden.
In den Block "Zeige auf dem Display" kann nun der Ultraschall-Abstand-Sensor hineingezogen werden. Meistens sind der Port, wie auch Trigger und Echo bereits richtig eingestellt. Sollte dies einmal nicht so sein, sollte hier ein wenig variiert werden.


## Aufgabe 1

Versucht mit Hilfe der Blöcke einen Personen- bzw. Verkehrszähler zu entwickeln.

***Hinweis:*** *Hier können die Blöcke, die auf dem oberen Foto abgebildet sind genutzt werden. Manche Blöcke müssen allerdings doppelt verwendet werden.*


Um nun einen Personen- bzw. Verkehrszähler zu entwickeln muss folgendes beachtet werden:

- Es sollte nur ein bestimmter Entfernungbereich ausgewertet werden, damit es
nicht zu Störungen durch Bewegungen im Hintergrund kommt. Effektiv misst der Sensor ca. 3 Meter.


- Um Mehrfachzählungen eines stehenden Fahrzeuges zu vermeiden sollte eine Bedingung programmiert werden, die den Zählvorgang stoppt bis die Spur wieder frei ist. 
Der Sensor sollte also eine vorher festgelegte Maximaldistanz für eine Spur haben. Hierzu bieten sich die wenn, dann Blöcke an. Zuerst muss überprüft werden, ob sich etwas im Messbereich befindet. Solange der Sensor nicht misst, dass die Fahrbahn wieder frei ist, muss er erneut messen. Erst wenn die Fahrbahn wieder frei ist sollte die Zählvariable um eins erhöht werden.


**Hinweis** *Wir gehen davon aus, dass sich der Schall mit 348 Metern pro Sekunde ausbreitet. Diese Zahl ist nicht fix sondern [hängt von der Umgebungstemperatur ab](https://de.wikipedia.org/wiki/Schallgeschwindigkeit#Temperaturabh.C3.A4ngigkeit_in_Luft).*
    


