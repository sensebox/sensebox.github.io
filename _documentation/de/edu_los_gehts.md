---
layout: documentation
title: "Los gehts"
date: 2017-05-11
author: Mario
abstract: "Verbinden der Bauteilen mit der senseBox MCU"
thumbnail: /images/blog_images/screenshot_osem.png
lang: de
---
Los gehts!
============

Bevor du mit den Projekten anfängst, wird dir im folgenden Abschnitt gezeigt, wie du ein Programmcode auf die senseBox MCU überträgst. Die senseBox MCU kann einen Programmcode speichern, sodass dieser auch nach dem Trennen der Stromverbindung noch vorhanden ist.


## Schritt 1: Die Programmierumgebung
Öffne Blockly für die senseBox, indem du mit einem geeigneten Internetbrowser (Chrome, Firefox oder Edge) auf (https://blockly.sensebox.de)[https://blockly.sensebox.de] gehst. Wähle die senseBox MCU, um zur richtigen Programmieroberfläche zu gelangen.

## Schritt 2: Programmieren

Um den Lichtsensor auszulesen benötigst du folgenden Block, der unter senseBox Sensoren zu finden ist:

Dieser Block funktioniert allerdings nicht allein. Er benötigt immer einen Empfänger, der den Messwert verarbeitet. Die einfachste Möglichkeit ist das Display. 
Um das Display zu programmieren benötigst du vier Blöcke die du unter senseBox Ausgabe - Display findest:

Verknüpfst du jetzt den Lichtsensor-Block mit der “Wert“-Schnittstelle des Display-Blocks werden deine Messwerte auf dem Display angezeigt.

Nach dem Programmieren musst du den Programmcode noch auf die senseBox MCU übertragen. Wie genau das geht findest du auf der nächsten Seite. 


## Schritt 3: Programmcode übertragen
1.Verbinden:
Das Programm muss nun auf die senseBox MCU übertragen werden. Verbinde dazu die senseBox MCU mithilfe des USB-Kabels mit deinem Computer.

Mache anschließend einen Doppelklick auf den Reset-Button, um die senseBox MCU in den Lernmodus zu versetzten. Im Lernmodus leuchtet die kleine rote LED neben dem Reset-Button auf, und die senseBox MCU wird als Wechseldatenträger (zum Beispiel im Windows Explorer) erkannt.
Nur im Lernmodus kannst du einen Programmcode auf die sense-
Box MCU übertragen. Nach dem erfolgreichen Übertragen startet
die senseBox MCU neu und befindet sich anschließend im Programmmodus.

2.Kompilieren:
Bevor der Programmcode übertragen werden kann, muss dieser kompiliert werden. Das bedeutet, dass die Blöcke in eine Maschinensprache übersetzt werden. Klicke dazu auf den orangenen Button in der Oberfläche.
Der Code wird nun online kompiliert, und anschließend startet ein Download.

3.Übertragen:
Wenn du die senseBox MCU erfolgreich in den Lernmodus versetzt hast, wird diese nun im Windows Explorer angezeigt. Um das zuvor kompilierte Programm zu übertragen, ziehe es per Drag-and-drop auf die senseBox MCU.
Nach dem erfolgreichen Kopieren verlässt die senseBox MCU den Lernmodus und führt das Programm aus. Hast du alles wie in diesem Abschnitt erläutert durchgeführt, leuchtet die kleine rote LED neben dem Reset-Button auf.
Super, du hast dein erstes Programm übertragen. Immer wenn du Änderungen
an dem Programmcode vornimmst, musst du diesen Schritt zum
Übertragen des Programms wiederholen.
