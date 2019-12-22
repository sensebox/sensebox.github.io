---
layout: project_page
name: "Einparkhilfe"
date: 2019-12-11
author: Björn
abstract: "Die Einparkhilfe die jeder aus dem Auto kennt."
image: Titelbild_Einparkhilfe.jpg
image0: /images/projects/Einparkhilfe/Einparkhilfe_Aufbau.png
image1: /images/projects/Einparkhilfe/Schritt1.png
image2: /images/projects/Einparkhilfe/Schritt2.png
image3: /images/projects/Einparkhilfe/Schritt3.png
imageSolution: /images/projects/Einparkhilfe/Loesung.png
material:
    - senseBox MCU
    - OLED-Display
    - Ultraschall-Distanzsensor
    - Piezo / Summer
    - JST-Adapterkabel
    - JST-JST-Kabel
ide: nepo
lang: de
version: edu
tags: ["Einparkhilfe","Distanzsensor"]
difficult: mittel
---
# Einparkhilfe {#head}

Das Auto rückwärts einzuparken kann eine schwierige Sache sein. Mit einen
Parksensor im Auto wird es jedoch deutlich leichter. Aber wie funktioniert ein solcher
Helfer?

## Aufbau 
Der Ultraschallsensor wird auf das Breadboard gesteckt und mit Hilfe des Adapterkabels
an einen Digital/Analog Port angeschlossen. Das schwarze Kabel wird mit dem GND Pin
des Sensors, das rote Kabel mit dem VCC Pin, das grüne mit dem ECHO Pin und das gelbe
mit dem TRIG Pin verbunden. Die Pins des Sensors sind auf seiner Vorder- und Rückseite
beschriftet. Am besten schließt du den Sensor so an, dass die Kabel hinter dem Sensor
liegen, da sie sonst die Messungen verfälschen können.
Der Piezo wird ähnlich wie eine einfarbige LED angeschlossen. Das kürzere Beinchen
wird mit dem Minuspol (schwarzes Kabel), das längere Beinchen mit einem digitalen Pin
(grünes oder gelbes Kabel) verbunden. Du kannst einen Widerstand vorschalten, dies ist
aber nicht nötig und führt nur dazu, dass der Piezo leiser wird.
{% include image.html image=page.image0 %}

## Programmierung
Als erstes musst du die Roboterkonfiguration anpassen. Füge für dieses Experiment das
OLED Display und den Summer aus der Kategorie Aktion sowie den Ultraschallsensor
aus der Kategorie Sensoren hinzu. Wähle im Block für den Ultraschallsensor trig=1 und
echo=2 aus. Im Block für den Summer wählst du als +-Pol Pin 5 aus.

### Schritt 1

Um nun eine Einparkhilfe zu programmieren solltest du dir als ersten Schritt die Messwerte
des Ultraschallsensors auf dem Display anzeigen lassen. So kannst du nachher
besser einschätzen, welche Abstände für deinen Parkhelfer passend sind. Außerdem
macht die Arbeit in kleinen Schritten die Fehlersuche deutlich leichter.
Um dir die Messwerte anzeigen zu lassen, benötigst du folgende Blöcke:

{% include image.html image=page.image1 %}

### Schritt 2

Wenn dir nun die Messwerte angezeigt werden, folgt der nächste Schritt. Du musst Entscheidungen
hinzufügen, die festlegt wie schnell bei welcher Entfernung gepiepst werden soll.
Umgesetzt wird dies mit dem „wenn mache“ Block aus der Kategorie Kontrolle und einem
vergleichenden Block aus der Kategorie Logik.
Als erstes fängst du am besten mit einer einzelnen Bedingung hinzu, die den Summer dann piepsen lässt, 
wenn die gemessene Distanz kleiner als 10 cm ist.

{% include image.html image=page.image2 %}

### Schritt 3
Nun musst du noch weitere Entscheidungen hinzufügen, sodass sich die Frequenz des
Piepens je nach Entfernung verändert. Dazu kannst du mit dem + oben links im „wenn
mache“ Block weitere Entscheidungen hinzufügen. In diesen solltest du dann die Wartezeit
nach dem Piepsen, sowie die jeweilige Distanz anpassen. Außerdem brauchst du
noch den „und“ Block aus der Kategorie Logik, um für die mittlere Bedingung Anfags- und Enddistanz festzulegen.

{% include image.html image=page.image3 %}
### Fertiger Code

<details><summary>Zeige Lösung</summary>
{% include image.html image=page.imageSolution %}
</p>
</details>



