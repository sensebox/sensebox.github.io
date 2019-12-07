---
layout: project_page
name: "Personenzähler"
date: 2019-05-13
author: Lia
abstract: "Mit dem Ultraschall-Distanzsensor und dem Display lässt sich ein Personenzähler bauen"
image: traffic_counter.png
image1: /images/projects/personenzaehler/01_personenzaehler_schaltung.jpg
image2: /images/projects/personenzaehler/02_sensor_display.png
image3: /images/projects/personenzaehler/03_wenn_bedingung.png
image4: /images/projects/personenzaehler/04_wenn_bedingung_2.png
material:
    - senseBox MCU
    - Ultraschallsensor
    - OLED Display
    - 1x JST-Adapterkabel
    - 1x JST-Kabel
ide: blockly 
version: ["edu"]   
lang: de
tags: ["Geographie", "Informatik"]
difficult: leicht
---
# Personenzähler

Ziel ist es, einen Personenzähler zu entwickeln. Dazu wird der Ultraschall-Distanzsensor verwendet. Die so aufgenommenen Werte sollen auf dem <b>Display</b> ausgegeben werden.

## Grundlagen
Der Ultraschall-Distanzsensor nutzt den Schall, um die Entfernung von Objekten zu bestimmen. Der Sensor sendet einen Impuls aus und misst die Zeit, bis er das Echo des Impulses wieder empfängt. Aus dieser Zeit kann dann mit Hilfe der Schallgeschwindigkeit die Entfernung des Objekts berechnet werden.

## Aufbau

Der Ultraschall-Distanzsensor wird über das JST-Adapterkabel mit der senseBox MCU verbunden. Verbinde dazu das JST-Adapterkabel mit dem Digital/Analog Port A. Das schwarze Kabel wird mit dem Pin GND, das rote Kabel mit dem Pin VCC, das grüne Kabel mit dem Pin Trig und das gelbe Kabel mit dem Pin Echo des Sensors verbunden. Das Display wird über das JST-JST Kabel mit einem der I2C/Wire Ports verbunden. 

{% include image.html image=page.image1 %}

***Hinweis:*** *Der Sensor sollte in die Richtung zeigen, bei der keine Kabel im Weg sind, da so der Schall nicht behindert werden kann.*

## Programmierung

### Schritt 1

Im ersten Schritt wird der Messwert des Ultraschall-Distanzsensor ausgelesen, einer Variablen zugewiesen und auf dem Display angezeigt.

{% include image.html image=page.image2 %}

Um den Wert des Sensors auf dem Display anzuzeigen, muss zuerst das Display im Setup() initialisiert werden. Anschließend kann das Display in der `Endlosschleife` genutzt werden.
Ziehe den Block `Zeige auf dem Display` in die Endlosschleife. Um Texte oder Zahlen anzuzeigen, wird der Block ` Zeige Text/Zahl` in den offenen Blockabschnitt gezogen. In diesem Block kannst du einstellen, in welcher Schriftgröße und wo auf dem Display Texte oder Zahlen angezeigt werden sollen. Nach dem Block `Zeige auf dem Display` muss das Display mit dem Block `Display löschen` gelöscht werden. Unter Variablen findest du den Block, um eine Variable zu erstellen.

Übertrage den Programmcode auf die senseBox MCU und überprüfe, was mit der Distanz passiert, wenn eine Person an dem Sensor vorbeiläuft. 

***Hinweis*** *Effektiv misst der Ultraschall-Distanzsensor zuverlässig in einem Bereich zwischen 5cm und 200cm.*

### Schritt 2

Die Distanz ist wichtig, um zu erfassen, ob eine Person am Sensor vorbeiläuft. Dafür wird eine Wenn-Dann Bedingung verwendet: Wenn eine Person am Sensor vorbeiläuft, dann sinkt die Distanz. 
Bei einer Wenn-Dann Bedingung können mithilfe von Operatoren zum Beispiel zwei Werte miteinander verglichen werden. Ist die Bedingung erfüllt, so wird der Code ausgeführt, der in dem offenen Blockabschnitt platziert wird. In diesem Fall wird die Variable *personen* immer um eins erhöht.   

{% include image.html image=page.image3 %}

Übertrage den Programmcode auf deine senseBox MCU und überpüfe, ob das Programm funktioniert. 

### Schritt 3: Doppelzählungen?

Wenn du das Programm übertragen und getestet hast, wirst du festgestellt haben, dass der Zähler Personen mehrfach zählt, wenn diese vor dem Sensor stehen bleiben. Um dieses Problem zu beheben, kannst du eine zweite Bedingung einfügen, in der überprüft wird, ob nach dem Unterbrechen der Distanz wieder die maximale Distanz erreicht worden ist. Der Zähler wird gesperrt, wenn die Distanz unterbrochen wird und erst wieder freigeschaltet, wenn die Distanz den maximalen Wert erreicht hat. Mit dem logischen UND kannst du zwei Bedingungen verknüpfen und der Code im Blockabschnitt "mache" wird nur dann ausgeführt, wenn beide Bedingungen erfüllt sind. 

{% include image.html image=page.image4 %}

Die Variable *gesperrt* wird zu Beginn des Programms auf "falsch" gesetzt. Immer, wenn die Distanz kleiner als 40cm und gleichzeit *gesperrt* "falsch" ist, wird der Zähler erhöht und die Variable *gesperrt* auf "wahr" gesetzt. Damit wird der Zähler zunächst einmal unterbrochen. Erneut gezählt wird erst dann, wenn die Sperrung aufgehoben wird. 



