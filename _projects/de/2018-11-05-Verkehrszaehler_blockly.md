---
layout: project_page
name: "Verkehrszähler"
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
Der Ultraschall-Distanzsensor nutzt den Schall um die Entfernung von Objekten zu bestimmen. Der Sensor sendet einen Impuls aus und misst die Zeit, bis er das Echo des Impulses wieder empfängt. Aus dieser Zeit wird dann mit Hilfe der Schallgeschwindigkeit die Entfernung des Objekts berechnet.

## Aufbau
Der Ultraschallsensor wird mit einem JST-Adapterkabel mit der senseBox MCU verbunden. Dazu wird das JST-Adapterkabel mit dem Steckplatz Digital A verbunden.
Der ultraschallsensor wird nun vertikal in eine der Spalten auf dem weißen Steckbrett gesteckt
Zur Stromversorgung wird der VCC-Pin des Sensors mit dem roten Kabel (5V)und der GND-Pin des Sensors mit
dem schwarzen Kabel (GND) verbunden. Zur Datenübertragung wird dann das grüne Kabel (1) mit dem Echo- und das gelbe Kabel (2) mit dem Trig-Pin des Sensors verbunden.

{% include image.html image=page.image1 %}

***Hinweis :*** *Der Sensor sollte in die Richtung zeigen, bei der keine Kabel im Weg sind.*

## Programmierung

Die Programmierung wird über die Programmieroberfläche Blockly geschehen. Mit Hilfe der Blöcke kann der Code gut zusammengestelt werden.
Alle Blöcke die zur Programmierung dieser Aufgabe benötigt werden sind auf dem unteren Foto abgebildet.

{% include image.html image=page.image2 %}

***Hinweis:*** *Manche Blöcke müssen doppelt verwendet werden.*


**Hinweis** *Wir gehen davon aus, dass sich der Schall mit 348 Metern pro Sekunde ausbreitet. Diese Zahl ist nicht fix sondern [hängt von der Umgebungstemperatur ab](https://de.wikipedia.org/wiki/Schallgeschwindigkeit#Temperaturabh.C3.A4ngigkeit_in_Luft).*

## Aufgabe 1

Versucht mit Hilfe der Blöcke einen Personen- bzw. Verkehrszähler zu entwickeln.

Dabei muss folgendes beachtet werden:
- Es sillte nur ein bestimmter Entfernungbereich ausgewertet werden, damit es
nicht zu Störungen durch Bewegungen im Hintergrund kommt. Effektiv misst der Sensor ca. 3 Meter.

- Um Mehrfachzählungen eines stehenden Fahrzeuges zu vermeiden sollte eine Bedingung programmiert werden, die den Zählvorgang stoppt bis die Spur wieder frei ist. Der Sensor sollte also eine vorher festgelegte Maximaldistanz für eine Spur haben. Hierzu bieten sich die wenn, dann Blöcke an. Zuerst muss überprüft werden, ob sich etwas im Messbereich befindet. Solange der Sensor nicht misst, dass die Fahrbahn wieder frei ist, soll er erneut messen. Erst wenn die Fahrbahn wieder frei ist wird die Zählvariable um eins erhöht.


    


