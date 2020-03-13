---
layout: post
title: "Neue Blockly Version"
date: 2020-03-06
author: Mario und Felix
abstract: "Neue Blockly Version bringt Blöcke für LoRa und die openSenseMap"
thumbnail: /images/blog_images/blockly_release_march/Blockly_new_release.jpg
image1: /images/blog_images/blockly_release_march/new_osem_block.png
image2: /images/projects/TTN-Mapper/blockly-gps-de.png
lang: de
---
Neues Blockly Release
============

Wir haben eine neue Version von Blockly für senseBox veröffentlicht. Die neue Version enthält neben kleiner Änderungen und Fehlerkorrekturen zwei große Veränderungen:

## Neue Blöcke für LoRa

Unter Web > Lora kann man jetzt seinen eigenen LoRaWAN Code erstellen. Es stehen zwei Möglichkeiten (OTAA und ABP) zur Aktivierung zur Verfügung. Außerdem kann man seine Nachrichten mit zwei verschiedenen Protokollen versenden: Als rohe Bytes als [LoRa Message](https://github.com/thesolarnomad/lora-serialization) oder bereits fertig kodiert als [Cayenne LPP](https://www.thethingsnetwork.org/docs/devices/arduino/api/cayennelpp.html). Damit kann beispielsweise ein TTN Mapper, der die Netzabdeckung visualisiert, aus einer senseBox mit Lora-Bee und GPS Modul erstellt werden. Eine genaue Anleitung findet ihr hier: [Erstelle einen TTN Mapper in unter 10 Minuten](/projects/de/2020-03-06-TTN-Mapper).

{% include image.html image=page.image2 %}

Es gibt allerdings noch ein paar Einschränkungen: Aktuell existiert noch keine direkte Integration für die openSenseMap. Außerdem können noch Probleme mit anderen Komponenten, beispielsweise dem Display, auftauchen. Das liegt am besonderen Programmcode, der für das LoRa Bee nötig ist. Der Programmablauf ist dazu etwas anders als gewöhnlich, deshalb können insbesondere `delay` Funktionen das Programm behindern. Falls ihr solche Fehler findet, meldet uns diese doch bitte unter info@sensebox.de oder im entsprechenden [Github Repository](https://github.com/sensebox/ardublockly-1/issues).


## Veränderung der Blöcke für die openSenseMap

Um den Traffic auf der openSenseMap besser unter Kontrolle zu haben und euch eine möglichst hohe Performance der Website zu bieten, wurde im vergangen Jahr ein Ratelimit von 10 Requests pro Minute eingeführt. Innerhalb eines Requestes können allerdings mehrere Messwerte gesendet werden. So ist es zum Beispiel möglich, alle 10 Sekunden einen Request zu senden, der eine Vielzahl von Messwerten enthält. 

Beim Senden von Messwerten über Blockly an die openSenseMap wurde bisher jeder Messwert als einzelner Request versendet. Mit dem Update von März 2020 werden nun die Messwerte gesammelt und als einen Request versendet. So ist es nun auch über Blockly möglich mehr als 6 Messwerte pro Minute zu senden.

Die zweite Veränderung betrifft das Bauen von mobilen Messstationen, die die Messwerte direkt an die openSenseMap versenden. Im Block gibt es nun ein Dropdown Menü, in dem du zwischen einer **stationären** und einer **mobilen** Messstation wählen kannst. Bei einer stationären Messstation wird der Standort über die openSenseMap festgelegt und dieser wird nicht verändert. Bei einer mobilen Messstation legst du einen ersten Standort über die openSenseMap fest, allerdings werden bei jedem senden der Messwerte ein Standort und ein Zeitstempel übertragen. Der Standort und der Zeitstempel werden über das GPS Modul bestimmt und müssen an den Block übergeben werden. Ein Beispielprojekt für den Bau einer mobilen Messstationen findest du auch [hier](/projects/de/2020-03-09-MobileMessstation.html).

 {% include image.html image=page.image1 %}

### workshop.openSenseMap.org

Zusätzlich zur openSenseMap.org wurde eine zweite Instanz der openSenseMap unter [workshop.openSenseMap.org](https://workshop.opensensemap.org) gehostet. Diese Instanz sollte nur für eigene Tests oder für Workshops verwendet werden, bei denen die Daten nicht permantent gespeichert werden müssen. Die Datenbank, und damit auch die Boxen und Messwerte, werden alle 7 Tage gelöscht. Über Blockly kannst du nun auswählen an welche Instanz die Messwerte gesendet werden. Beachte hierbei, dass die ID's nicht identisch sind. Nachdem der Test über [workshop.openSenseMap.org](https://workshop.opensensemap.org) erfolgreich war musst du deine Messstation unter [https://opensensemap.org](https://opensensemap.org) neu registriert werden. Änder anschließend noch die ID's der Box und der Sensoren und übertrage den Code. Die Messwerte werden nun an die openSenseMap übertragen und dort dauerhaft gespeichert.





