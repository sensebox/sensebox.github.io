---
layout: project_page
name: "Erste Schritte: Dein erster Sketch"
date: 2019-03-15
author: Björn
abstract: "Lasse mit deinem ersten Sketch die LED auf der senseBox MCU blinken"
image: /ErsterSketch_Titel.png
image1: /images/projects/ES_ersterSketch/setup_loop.png
image2: /images/projects/ES_ersterSketch/builtin1_on.png
image3: /images/projects/ES_ersterSketch/builtin1_blink.png

material:
    - senseBox MCU
ide: blockly  
lang: de
version: ["edu", "mini"]   
tags: ["Erste Schritte", "Informatik"]
difficult: leicht
---

# Erste Schritte: Dein erster Sketch
Ziel dieses Projektes ist es, Blockly kennenzulernen und mit einem ersten Sketch die LED auf der senseBox MCU blinken zu lassen.

## Programmierung

###Schritt 1: Setup und Endlosschleife

Dieser Block wird direkt beim Starten der Oberfläche geladen und sollte immer verwendet werden. Die zwei Basisfunktionen `Setup()` und `Endlosschleife()` werden immer benötigt, um ein funtkionsfähiges Programm zu schreiben.
Alle Blöcke, die innerhalb der `Setup()` Funktion stehen, werden nur zu Beginn des Programmes einmal ausgeführt. In dieser Funktion wird zum Beispiel das Display initialsiert oder die WLAN Verbindung hergestellt. Alle Blöcke, die innerhalb der `Endlosschleife()` stehen, werden durchgehend ausgeführt. Der Mikrocontroller führt hierbei alle Blöcke immer wieder von oben nach unten hin aus. In der `Endlosschleife` werden zum Beispiel die Sensoren ausgelesen oder auch die Messwerte auf die SD-Karte gespeichert oder übertragen.

{% include image.html image=page.image1 %}

### Schritt 2: Die eingebaute LED einschalten

Um die eingebaute LED anzuschalten, musst du den `LED an digital`-Block in die Endlosschleife ziehen. Anschließend wählst du unter PIN "BUILTIN_1" und unter Status "Ein" aus.

{% include image.html image=page.image2 %}

<div class="panel panel-info">
  <div class="panel-heading">
    Die eingebaute LED findest du über dem roten Reset-Knopf auf der senseBox MCU
  </div>
  <div class="panel-body">
  </div>
</div>

### Schritt 3: Die eingebaute LED blinken lassen

Um die eingebaute LED blinken zu lassen, ist es nötig, sie mit einem weiteren `LED an digital` Block wieder auszuschalten. Zusätzlich muss nach dem An- sowie Ausschalten eine Pause eingefügt werden, damit das Blinken überhaupt sichtbar ist. Den `Warte` Block findest du in der Kategorie `Zeit`.

{% include image.html image=page.image3 %}

<div class="panel panel-info">
  <div class="panel-heading">
1000 Millisekunden sind 1 Sekunde
  </div>
  <div class="panel-body">
  </div>
</div>