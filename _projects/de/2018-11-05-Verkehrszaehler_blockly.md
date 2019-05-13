---
layout: project_page
name: "Verkehrszähler"
date: 2019-05-13
author: Lia
abstract: "Ein kleiner Verkehrszähler"
image: traffic_counter.png
image1: /images/projects/verkehrszaehler/Verkehrszaehler_v2.png
image2: /images/projects/verkehrszaehler/Foto_Display_Sensor.jpg
image3: /images/projects/verkehrszaehler/Zählen.jpg
image4: /images/projects/verkehrszaehler/Code_f.jpg
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

Ziel ist es, einen Verkehrszähler zu entwickeln. <br>
Dazu wird ein Ultraschall-Distanzsensor verwendet.
Die so aufgenommenen Werte sollen auf dem <b>Display</b> ausgegeben werden.

## Grundlagen
Der Ultraschall-Distanzsensor nutzt den Schall um die Entfernung von Objekten zu bestimmen. Der Sensor sendet einen Impuls aus und misst die Zeit, bis er das Echo des Impulses wieder empfängt. Aus dieser Zeit kann dann mit Hilfe der Schallgeschwindigkeit die Entfernung des Objekts berechnet werden.


**Hinweis** *Wir gehen davon aus, dass sich der Schall mit 348 Metern pro Sekunde ausbreitet. Diese Zahl ist nicht fix sondern [hängt von der Umgebungstemperatur ab](https://de.wikipedia.org/wiki/Schallgeschwindigkeit#Temperaturabh.C3.A4ngigkeit_in_Luft).*


## Aufbau

Um den Ultraschallsensor mit Strom zu versorgen kann ein JST-Adapterkabel genutzt werden, welches die sensebox-MCU und den Ultraschallsensor verbindet. Dafür kann das eine Ende des JST-Adapterkabels an den Digital A Steckplatz der sensebox MCU gesteckt werden. Das andere Ende dient der Strom- und Datenversorgung. Es ist wichtig, dass die verschiedenen Kabel an die richtigen Stellen des Sensors angesteckt werden.
Zur Stromversorgung dient der VCC-Pin, sowie der GND-Pin des Sensors. Der VCC-Pin sollte mit dem roten Kabel (5V) des JST-Adapterkabels, der GND-Pin mit dem schwarzen Kabel des JST-Adapterkabels verbunden werden.
Das grüne und das gelbe  Kabel können zur Datenübertragung genutzt werden. Das grüne Kabel sollte hierzu mit dem Echo-Anschluss des Sensors verbunden werden und das gelbe Kabel mit dem Trig-Pin des Sensors verbunden werden.

***Hinweis :*** *Der Sensor sollte vertikal auf dem Steckbrett der MCU angebracht werden.*

{% include image.html image=page.image1 %}

***Hinweis :*** *Der Sensor sollte in die Richtung zeigen, bei der keine Kabel im Weg sind, da so der Schall nicht behindert werden kann.*

## Programmierung

Bei der Programmierung kann die Programmieroberfläche Blockly genutzt werden. Mit Hilfe der vorgegebenen Blöcke kann verschiedener Code gut zusammengesetzt werden.

Um den Ultraschall- und Distanzsensor richtig zu programmieren ist es gut ersteinmal die verschienen Blöcke zu kennen.
Deshalb lohnt es sich als erstes mit Hilfe des Displays den Wert des Distanzsensors auszulesen. 

So sieht es aus, wenn man den Wert des Distanzsensors auslesen möchte:

{% include image.html image=page.image2 %}

Um den Wert des Sensors auf dem Display anzuzeigen sollte zuerst das Display in der Setup()-Schleife initialisiert und dann in der Endlos()-Schleife genutzt werden.
In den Block "Zeige auf dem Display" kann nun der Ultraschall-Abstand-Sensor hineingezogen werden. Meistens sind der Port, wie auch Trigger und Echo bereits richtig eingestellt. Sollte dies einmal nicht so sein, sollte hier ein wenig variiert werden.

***Hinweis*** *Der Ultrschallsensor sendet ein 10 Mikrosekunden langen Ultraschallimpuls aus.*

Doch warum ist es wichtig die Distanz des Sensors zu kennen?

Die Distanz ist wichtig um später zu erfassen, ob ein Auto an dem Sensor vorbeifährt oder nicht.
Doch wie funkttioniert das?
 
## Messen, ob ein Auto vorbeifährt

Um zu schauen, ob ein Auto vorbeifährt soltten verschiedenen Bedingungen mit Hilfe einer Wenn-Dann-Bedingung gesetzt werden. Eine Bedingung ist, dass wenn die Distanz unter einer gewissen Grenzwert fällt ein Zähler hochgezählt werden soll. Fällt die Distanz nämlich unter einen gewissen Wert, befindet sich gerade ein Auto im Feld des Sensors. 
Damit nun gezäht werden kann sollte eine feste Variable angelegt werden, die immer, wenn etwas im Messbereich des Sensors ist hochgezählt wird. Deshalb sollte der Zähler als Integer Variable angelegt werden.

***Hinweis*** *Damit Autos nicht mehrfach gezählt werden muss auch eine Bedingung gesetzt werden, die darauf achtet, dass sich im Messbereich des Sensors nichts mehr befindet.*

So könnte ein möglicher Code aussehen:

{% include image.html image=page.image2 %}


##In welchem Bereich soll der Sensor messen?

Hierfür sollte am besten die Spur der Fahrbahn gemessen werden. Der Entfernungsbereich sollt gesetzt werden um  Störungen durch Bewegungen im Hintergrund zu minimieren.

Damit die Messwerte beim einfahren in den Messbereich nicht zu sehr schwanken, kann es helfen, zwischen den einzelnen Messungen eine Verzögerung von 200ms zu programmieren.

***Hinweis*** *Effektiv misst der Sensor ca. 3 Meter.*

##Wie viele Autos sind gefahren?

Um herauszufinden wie viele Autos in einem gewissen Zeitraum vorbeigefahren sind lohnt es sich das Display anzuschließen und die Fahrzeugevariable anzuzeigen.

Die Variable kann so angezeigt werden:

{% include image.html image=page.image4 %}

## Aufgabe 1

Versucht mit Hilfe der Beschreibung einen Verkehrszähler zu entwickeln.

