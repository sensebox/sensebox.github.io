---
layout: project_page
name: "Ampelschaltung"
date: 2019-04-29
author: Björn und Benni
abstract: "Es soll eine Ampel simuliert werden. Mit einem Button kann man die Ampel umschalten."
image: logo_bunt.png
image1: /images/projects/traffic_light/AmpelSchaltungKlein.png
image2: /images/projects/traffic_light/Setup.png
image3: /images/projects/traffic_light/Wenn_mache.png
image4: /images/projects/traffic_light/Endlosschleife.png
image5: /images/projects/traffic_light/Gesamt.png
material:
    - senseBox MCU
    - rote LED
    - gelbe LED
    - grüne LED
    - 3x 470Ω Widerstand
    - Button
    - 10kΩ (10000Ω) Widerstand
    - 2x senseBox JST-Adapterkabel
ide: blockly    
lang: de
tags: ["Informatik", "Physik"]
difficult: leicht
---
# Ampelschaltung
Es soll eine Ampel simuliert werden. Mit einem Button kann man die Ampel umschalten.

## Aufbau

Um alle Komponenten anzuschließen benötigst Du zwei JST-Adapterkabel. Das erste wird an Digital A (also den digitalen Pins 1 und 2) angeschlossen, das zweite an Digital B (also den digitalen Pins 3 und 4) angeschlossen. Am Kabel in Digital A werden die rote und die gelbe LED angeschlossen, am Kabel in Digital B die grüne LED und der Button.

{% include image.html image=page.image1 %}

## Programmierung

### Schritt 1:
In der setup()-Methode setzt du zur Initialisierung des Programms die rote LED auf EIN und die beiden anderen LEDs auf AUS. 

{% include image.html image=page.image2 %}

### Schritt 2:
Nun schreibst du die loop()-Methode. Hier wird deine eigentliche Ampelschaltung programmiert. 

Am Anfang der `loop()` Funktion wird jedesmal abgefragt ob der Button gedrückt wird.
Diese Abfrage geschieht in einem `wenn-mache-Block`, ist sie wahr (der Knopf wird gedrückt), so wird der Programmcode innerhalb `mache-Blocks` ausgeführt.

{% include image.html image=page.image3 %}

### Schritt 3:

Hier beginnen wir, indem wir 5 Sekunden warten. dann schalten wir die rote (bereits eingeschaltet) und gelbe LED ein, die grüne wird (weiterhin) ausgeschaltet.

Danach warten wir 1 Sekunde und schalten dann nur die grüne LED ein, die rote und gelbe LED dafür aus.

Nach weiteren 5 Sekunden, schalten wir die grüne LED aus und die gelbe LED an. Die rote bleibt noch ausgeschaltet.

Nun warten wir wieder eine Sekunde und schalten dann die rote LED an und die beiden anderen aus.

Damit haben wir das Ende der if-Bedingung erreicht. Das Programm verharrt nun im aktuellen Zustand und macht solange nichts, bis das nächste mal der Knopf gedrückt wird.

{% include image.html image=page.image4 %}


### Gesamter Code

Hier findest du nochmal den gesamten Code als zusammenhängender Block.

{% include image.html image=page.image5 %}
