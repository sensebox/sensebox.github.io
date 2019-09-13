---
layout: instructions
title: "3. Übertragen des Programmcodes"
date: 2017-05-11
author: Mario
abstract: "Übertragen des Programmcodes auf die senseBox MCU"
lang: de
image1: /images/instructions_home/
---
Übertragen des Programmcodes
============

Nach der Registrierung auf der openSenseMap muss der generierte Programmcode noch auf die senseBox MCU kopiert werden. 

# Anschließen der senseBox MCU an den Computer

Verbinde die senseBox MCU mit dem Computer und bringe diese mit einem Doppelklick auf den roten Resetbutton in den Lernmodus. Wenn die senseBox MCU im Lernmodus ist wird diese in deinem Dateiexplorer wie ein USB Stick mit dem Namen SENSEBOX angezeigt. 

## Kompilieren und herunterladen des Programmcodes

Wenn du die Daten deiner senseBox über WiFi übertragen willst muss die senseBox sich mit deinem WiFi verbinden können. Gib dazu im grün hinterlegten Feld dein WiFi-Zugangsdaten ein (die Daten werden nicht auf dem Server gespeichert), klicke auf ‚Kompilieren‘ und schon erhältst du eine sketch.bin Datei, die du auf deine senseBox MCU kopieren kannst.

{% include image.html image=page.image1 %}

## Kopieren der Programmdatei

Kopiere nun die sketch.bin auf deine senseBox MCU. 

## Übertragen mithilfe der Arduino IDE

Willst du Änderungen am Code vornehmen oder deine senseBox um weitere Sensoren erweitern musst du den Programmcode mithilfe der Arduino IDE übertragen. Eine Anleitung zum Installieren und Übertragen eines Programmcodes mit der IDE findest du [hier]()
