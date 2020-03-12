---
layout: project_page
name: "BASICS: Einen Sketch auf die senseBox übertragen"
date: 2020-03-10
author: Björn
abstract: "Übertrage ein Programm auf deine senseBox"
image: /BASICS2-Banner.png
image1: /images/projects/BASICS/copy_to_mcu.gif

material:
    - senseBox MCU
ide: blockly  
lang: de
version: ["edu", "mini"]   
tags: ["Erste Schritte", "Basics"]
difficult: leicht
---

# BASICS: Einen Sketch auf die senseBox übertragen

## Vorbereitungen
### Am Computer
Um die senseBox Programmieren zu können, benötigst du das mitgelieferte USB-Kabel, einen Computer und Zugang zum Internet. 
Öffne in deinem Internetbrowser nun die Website https://blockly.sensebox.de/ und wähle deine Box aus. Nun kannst du dein eigenes Programm schreiben. Ist dein Programm fertig kannst du es mit einem Klick auf den orangenen "Kompilieren"-Button oben rechts herunterladen.

### An der senseBox MCU
Verbinde zuerst die MCU mit Hilfe des USB-Kabels mit deinem Computer.
Die senseBox MCU hat zwei verschiedene Modi: Den Programm- und den Lern-Modus. Standardmäßig befindet sich die MCU im Programm-Modus. In diesem führt sie das zuletzt übertragende Programm aus. Du erkennst den Program-Modus daran, dass die LED auf der MCU grün leuchten.
Bevor nun ein neues Programm übertragen weren kann, muss die MCU in den Lern-Modus versetzt werden. Dies geschieht durch einen Doppelklick auf den roten "Reset"-Button auf der MCU. Du erkennst den Lern-Modus daran, dass nur eine LED direkt neben der "Reset"-Knopf rot leuchtet. Im Lern-Modus wird die senseBox außerdem als Wechseldatenträger erkannt.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jzlOJ7Zuqqw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Übertragen

Befindet sich deine senseBox MCU im Lern-Modus kannst du deinen Sketch aus dem "Download"-Ordner einfach auf den Wechseldatenträger "SENSEBOX" kopieren.

{% include image.html image=page.image1 %}