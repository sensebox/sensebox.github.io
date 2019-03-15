---
layout: project_page
name: "Erste Schritte: Dein erster Sketch"
date: 2019-03-15
author: Björn
abstract: "Dein erster Sketch mit der senseBox"
image: /ErsterSketch_Titel.png
image1: /images/projects/ES_ersterSketch/setup_loop.png
image2: /images/projects/ES_ersterSketch/builtin1_on.png
image3: /images/projects/ES_ersterSketch/builtin1_blink.png

material:
    - senseBox MCU
ide: blockly  
lang: de
tags: ["Erste Schritte", "Informatik"]
difficult: leicht
---

# Erste Schritte: Dein erster Sketch


## Setup und Endlosschleife

Dieser Block wird direkt beim Starten der Oberfläche geladen und sollte immer verwendet werden. Die zwei Basisfunktionen Setup() und Endlosschleife() werden immer benötigt um ein Funtkionsfähiges Programm zu schreiben.
Alle Blöcke, die innerhalb der *Setup()* Funktion stehen werden nur zu begin des Programmes einmal ausgeführt. In dieser Funktion werden zum Beispiel das Display initialsiert oder die Wlan Verbindung hergestellt. Alle Blöcke, die innerhalb der *Endlosschleife()* stehen werden durchgehend ausgeführt. Der Mikrokontroller führt hierbei alle Blöcke immer wieder von oben nach unten hin aus. In der Endlosschleife() werden zum Beispiel die Sensoren ausgelesen oder auch die Messwerte auf SD-Karte gespeichert oder übertragen.

{% include image.html image=page.image1 %}

## Die eingebaute LED einschalten

Um die eingebaute LED anzuschalten musst Du den "LED an digital"-Block in die Endlosschleife ziehen. Anschließend musst du unter PIN "BUILTIN_1" und unter Status "Ein" auswählen.

{% include image.html image=page.image2 %}

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Die eingebaute LED findest du über dem roten Reset-Knopf auf der senseBox MCU.</h3>
  </div>
  <div class="panel-body">
  </div>
</div>

## Die eingebaute LED blinken lassen

Um die eingebaute LED blinken zu lassen muss Du sie mit einem weiteren "LED an digital"-Block ausschalten. Zusätzlich muss nach dem An- sowie Ausschalten eine Pause eingefügt werden, damit das Blinken überhaupt sichtbar ist. Den "Warte"-Block findest in der Kategorie Zeit.

{% include image.html image=page.image3 %}

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">1000 Millisekunden sind 1 Sekunde.</h3>
  </div>
  <div class="panel-body">
  </div>
</div>