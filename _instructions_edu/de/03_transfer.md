---
layout: instructions
title: "3. Übertragen des Programmcodes"
abstract: "Übertragen des Programmcodes auf die senseBox MCU"
lang: de
---
Übertragen des Programmcodes
============

Nach dem Programmieren muss der Programmcode noch kompiliert und auf den Mikrocontroller übertragen werden. Folgende Schritte sind dafür nötig:
1. Kompilieren:
Über den orangen Button kann in Blockly der Programmcode kompiliert werden. Anschließend startet der Download der .Bin Datei.
2. Bin-Datei kopieren:
Bevor die Bin-Datei kopiert werden kann muss die senseBox MCU in den Lernmodus versetzt werden. 


### Kopieren unter MacOSX

Leider funktioniert das direkt kopieren der .bin Datei über den Finder in Mac OS X nicht. Folgende drei Optionen lösen das Problem:

#### 1. Übertragen mithilfe des senseBox Sketch Uploader
Ein kleines Programm ermöglicht das kopieren unter Mac OS X. Versetzte die senseBox MCU in den Lernmodus und starte das Programm. Wähle die heruntergeladene .bin Datei aus und anschließend wird der Code kopiert. 

#### 2. Kopieren über alternativen Dateimanager
Ein alternativer Dateimanager wie zum Beispiel [muCommander](http://www.mucommander.com/). 

#### 3. Kopieren mithilfe des Terminals (für erfahrene Nutzer)
Über das Terminal kann mithilfe des dd Befehls die Datei auf die senseBox MCU kopiert werden.


