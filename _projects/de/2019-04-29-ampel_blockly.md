---
layout: project_page
name: "Ampelschaltung"
date: 2019-04-29
author: Björn und Benni
abstract: "Es wird eine Ampel simuliert, die sich mit einem Button umschalten lässt."
image: Titelbild_Ampelschaltung.jpg
image1: /images/projects/traffic_light/ampelschaltung_setup.png
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
    - 2x JST-Adapterkabel
ide: blockly    
lang: de
version: ["edu"]
tags: ["Informatik", "Physik"]
difficult: leicht
---
# Ampelschaltung
Ziel dieses Projektes ist es, eine Ampel zu simulieren und diese mit einem Button umzuschalten. 

## Aufbau

Um alle Komponenten anzuschließen, benötigst du zwei JST-Adapterkabel. Das erste wird an Digital A (also den digitalen Pins 1 und 2), das zweite an Digital B (also den digitalen Pins 3 und 4) angeschlossen. Am Kabel in Digital A werden die rote und die gelbe LED angeschlossen, am Kabel in Digital B die grüne LED und der Button.

{% include image.html image=page.image1 %}

## Programmierung

### Schritt 1
In der setup()-Methode setzt du zur Initialisierung des Programms die rote LED auf EIN und die anderen beiden LEDs auf AUS. 

{% include image.html image=page.image2 %}

### Schritt 2:
Nun schreibst du die loop()-Methode. Hier wird deine eigentliche Ampelschaltung programmiert. 

Am Anfang der `loop()` Funktion wird jedesmal abgefragt, ob der Button gedrückt wird.
Diese Abfrage geschieht in einem `wenn-mache-Block`, ist sie wahr (der Knopf wird gedrückt), so wird der Programmcode innerhalb des `mache-Blocks` ausgeführt.

{% include image.html image=page.image3 %}

### Schritt 3:

Hier beginnst du, indem du 5 Sekunden wartest. Dann schalte die rote (bereits eingeschaltet) und die gelbe LED ein, die grüne belibt (weiterhin) ausgeschaltet.

Danach wartest du 1 Sekunde und schaltest dann nur die grüne LED ein, die rote und gelbe LED dafür aus.

Nach weiteren 5 Sekunden, schaltest du die grüne LED aus und die gelbe LED an. Die rote bleibt noch ausgeschaltet.

Nun wartest du wieder eine Sekunde und schaltest dann die rote LED an und die beiden anderen aus.

Damit hast du das Ende der if-Bedingung erreicht. Das Programm verharrt nun im aktuellen Zustand und macht solange nichts, bis das nächste mal der Knopf gedrückt wird.

{% include image.html image=page.image4 %}


## Gesamter Code

Hier findest du nochmal den gesamten Code als zusammenhängenden Block.

{% include image.html image=page.image5 %}
