---
layout: instructions
title: "Registrieren auf der openSenseMap"
date: 2017-05-11
author: Mario
abstract: "Registrieren einer senseBox auf der openSenseMap"
thumbnail: /images/blog_images/screenshot_osem.png
image1: /images/instructions_home/01_opensensemap/add_account.png
lang: de
---
Registrierung auf der openSenseMap {#head}
============

Die openSenseMap ist eine offen Sensorplattform zum Teilen, Anzeigen und Auswerten von Daten. Unter [www.opensensemap.org](https://www.opensensemap.org) kannst du dir die Messdaten von tausenden Sensorstationen ansehen, die überall auf der Welt aufgstellt wurden.

## 1. Anlegen eines Benutzeraccount
Um das Verwalten der senseBox zu erleichtert wird diese mit einem Benutzeraccount verknüpft. Für einen Benutzeraccount brauchst du eine gültige Email-Adresse und selbstgewähltes Passwort. Gehe auf [https://opensensemap.org](https://opensensemap.org) und erstelle dir einen neuen Benutzeraccount. 

{% include image.html image=page.image1 %}

## 2. Eine neue senseBox anlegen
Nach der erfolgreichen Registrierung kannst du damit beginnen deine senseBox anzulegen. Dafür klicke auf "New senseBox / Neue senseBox" in deinem Menü und bestätige die Nutzungsbedingungen. Anschließend startet die eigentliche Registrierung. Während der Registrierung 

1. Einen frei wählbaren Namen der senseBox
2. Wähle den Standort an dem die senseBox aufgestellt wird. Ein mobiler Standort sollte nur dann ausgewählt werden, wenn die senseBox mit einem GPS Modul verbunden wird!
  - drinnen
  - draußen
  - mobil
   
3. Den Ort (Location), an dem du deine senseBox aufstellen möchtest (du kannst deinen Standort auch automatisch bestimmen lassen). Wenn du einen mobile Standort ausgewählt hast wird der Standort sich anhand der gesendeten Daten immer wieder verändern. 

Da die openSenseMap offen für alle Arten von senseBoxen ist, wirst du nach der verwendeten Hardware gefragt. Wähle *senseBox:home V2* und das Datenübertragungsmodul (Bee - Wifi, Ethernet oder LoRa), welches du verwendest.

![Auswahl von senseBox:home V2 MCU und WiFi Internetverbindung](../../../pictures/Select_hardware.PNG)

<div class="box_info">
    <i class="fa fa-info fa-fw" aria-hidden="true" style="color: #42acf3;"></i>
  Du bist dir nicht sicher ob du ein Ethernet oder WiFi-Bee hast, oder kannst den Unterschied zwischen dem Luftdruck und Temperatursensor nicht erkennen? Im Kapitel <a href = "../komponenten/README.md">Komponenten</a> findest du Bilder und weitere Hinweise zu den einzelnen Bauteilen.
</div>

Jetzt hast du es fast geschafft! Noch schnell die Sensoren auswählen, welche du an deine senseBox anschließen wirst. Einfach anklicken und fertig. Falls du einen Feinstaubsensor installieren möchtest, musst du außerdem noch angeben, an welchen Serial-Port du diesen angeschlossen hast. Danach kannst du den Vorgang abschließen.

## 3. Übersicht der Registrierung und Mail erhalten
Wenn du die Registrierung abgeschlossen hast, musst du noch einmal der Veröffentlichung deiner Daten zustimmen. Danach erhälst du eine Summary deiner Registrierung. Dort wird dir deine senseBox ID, deine Sensoren-IDs und der Arduino Code angezeigt (diesen bekommst du zudem noch einmal per E-Mail zugeschickt). 

![Summary der Registrierung. Hier siehst du die IDs deiner senseBox und deiner Sensoren!](../../../pictures/summary.PNG)

Mehr Informationen zur openSenseMap:
[hier](https://sensebox.github.io/books-v2/osem)




Nun hast du die Möglichkeit, ohne jegliche eigenständige Programmierung per Arduino oder Blockly einen passenden Sketch zu 
erhalten, den du anschließend per Drag&Drop auf deine senseBox ziehen kannst. Konfiguriere dazu im grün hinterlegten Feld dein 
WiFi, klicke auf ‚Kompilieren‘ und schon erhältst du eine sketch.bin Datei, die du auf deine senseBox MCU kopieren kannst.

{% include image.html image=page.image3 %}

Damit ist die Registrierung deiner senseBox vollständig abgeschlossen und sie ist nun ein Teil der openSenseMap. 

