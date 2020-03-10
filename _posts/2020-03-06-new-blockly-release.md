---
layout: post
title: "Neue Blockly Version"
date: 2020-03-06
author: Mario und Felix
abstract: "Neue Blockly Version bringt LoRa Blöcke"
thumbnail: /images/blog_images/blockly_release_march/Blockly_new_release.jpg
image1: /images/blog_images/blockly_release_march/new_osem_block.png
image2: /images/projects/TTN-Mapper/blockly-gps-de.PNG
lang: de
---
Neues Blockly Release
============

Wir haben eine neue Version von Blockly für senseBox veröffentlich. Die neue Version enthält neben kleiner Änderungen und Fehlerbeseitung zwei große Veränderungen:

## Neue Blöcke für LoRa

Unter Web > Lora kann man jetzt seinen eigenen LoRaWAN Code erstellen. Es stehen zwei Möglichkeiten zur Aktivierung zur Verfügung. Außerdem kann man seine Nachrichten mit zwei verschiedenen Protokollen versenden: Als rohe Bytes als [LoRa Message](https://github.com/thesolarnomad/lora-serialization) oder bereits fertig dekodiert als [Cayenne LPP](https://www.thethingsnetwork.org/docs/devices/arduino/api/cayennelpp.html). Damit kann man beispielsweise einfach einen TTN Mapper aus einer senseBox mit Lora-Bee und GPS Modul erstellen. Ein erstes Beispiel findet ihr hier: [Erstelle einen TTN Mapper in unter 10 Minuten](/projects/de/2020-03-06-TTN-Mapper).

 {% include image.html image=page.image2 %}

Es gibt allerdings noch ein paar Einschränkungen: Aktuell existiert noch keine direkte Integration für die openSenseMap. Außerdem können noch Probleme mit anderen Komponenten, beispielsweise dem Display, auftauchen. Das liegt am besonderen Programmcode, der für das LoRa Bee nötig ist. Der Programmablauf ist dazu etwas anders als gewöhnlich, deshalb können insbesondere `delay` Funktionen das Programm behindern. Falls ihr solche Fehler findet meldet uns diese doch bitte unter info@sensebox.de oder im entsprechenden [Github Repository](https://github.com/sensebox/ardublockly-1/issues).

## Veränderung der Blöcke für die openSenseMap

Um den Traffic auf der openSenseMap besser unter Kontrolle zu haben und euch eine Möglichst hohe Performance der Website zu bieten wurde vergangen Jahr ein Ratelimit von 10 Requests pro Minute eingeführt. Innerhalb eines Requestes können allerdings mehrere Messwerte gesendet werden. So ist es zum Beispiel möglich, alle 10 Sekunden einen Request zu senden, der eine Vielzahl von Messwerten enthält. 

Beim senden von Messwerten über Blockly an die openSenseMap wurde bisher jeder Messwert als einzelner Request versendet. Mit dem Update von März 2020 werden nun die Messwerte gesammelt und als einen Request versendet. So ist es nun auch über Blockly mögliche mehr als 6 Messwerte pro Minute zu senden.

Die Zweite Veränderung betrifft das bauen von Mobilen Messstationen, die die Messwerte direkt an die openSenseMap versenden. Im Block gibt es nun ein Dropdown Menü, in dem du zwischen einer Stationären und einer Mobilen Messstation wählen kannst. Bei einer Stationären Messstation wird der Standort über die openSenseMap festgelegt und dieser wird nicht verändert. Bei einer Mobilen Messstation legst du einen ersten Standort über die openSenseMap fest, allerdings werden bei jedem senden der Messwerte ein Standort und ein Zeitstempel übertragen. Der Standort und der Zeitstempel wird über das GPS Modul bestimmt und muss an den Block übergeben werden. Ein Beispielprojekt für den Bau einer mobilen Messstationen findest du auch [hier](https://sensebox.de/de/projects).

 {% include image.html image=page.image1 %}

### workshop.openSenseMap.org

Zusätzlich zur openSenseMap.org wurde eine zweite Instanz der openSenseMap unter [workshop.openSenseMap.org](https://workshop.opensensemap.org) gehostet. Diese Instanz sollte nur für eigenen Tests oder für Workshops verwendet werden, bei denen die Daten nicht permantent gespeichert werden müssen. Die Datenbank, und damit auch die Boxen und Messwerte, werden alle 7 Tage gelöscht. Über Blockly kannst du nun auswählen an welche Instanz die Messwerte gesendet werden. Beachte hierbei, dass die ID's nicht identisch sind. Nachdem der Test über [workshop.openSenseMap.org](https://workshop.opensensemap.org) erfolgreich war musst du deine Messstation unter [https://opensensemap.org](https://opensensemap.org) neu registriert werden. Anschließend noch die ID's der Box und der Sensoren verändern und den Code neu übertragen und die Messwerten werden wieder übertragen





