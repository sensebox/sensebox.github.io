---
layout: post
title: "Projektwoche von openSea im Wattenmeer"
date: 2017-06-26
author: Manuela
abstract: "Im Nationalpark Wattenmeer wurde mithilfe der senseBox Temperatur, Trübung und Fließgeschwindigkeit gemessen - und entdeckte somit neues Terrain."
thumbnail: /images/blog_images/opensea_wattenmeer.jpg
image1: /images/blog_images/watt1.jpg
image2: /images/blog_images/watt2.jpg
image3: /images/blog_images/watt3.jpg
image4: /images/blog_images/watt4.jpg
lang: de
---
Eine DIY Unterwassermessstation
============
Im Rahmen des openSea Projekts (<a href="https://www.opensea.ms/">openSea</a>) erforschte die senseBox mit neuen Sensoren ein komplett neues Umfeld. 
Zusammen mit dem Nationalpark Wattenmeer wurde eine Station konzipiert, die im Wattenmeer in Büsum und Husum zum Einsatz kam. Ziel war es über einen Zeitraum von 48h im Wattenmeer die Parameter Temperatur, Trübung und die Fließgeschwindigkeit zu messen. Hierfür mussten im ersten Schritt günstige Sensoren gefunden werden. Konkret fiel die Wahl auf folgende Sensorik:

Temperatur
============
Der <a href="http://www.watterott.com/de/Temperatur-Sensor-Wasserdicht-DS18B20/">DS18B20</a> ist ein wasserdichter Temperatursensor, der es ermöglicht, einfach und kostengünstig die Wassertemperatur zu messen. Mit einem Messbereich von -10°C bis +85°C bei einer Genauigkeit von +- 0.5°C bietet der Sensor eine ausreichende Leistung für den Anwendungsfall des Deutschen Wattenmeer.

Trübung
============
Mithilfe des Analog Turbidity Sensor von <a href="https://www.dfrobot.com/product-1394.html/">Df-Robot</a> lässt sich die Trübung von Wasser bestimmen. Der Sensor selbst stammt aus einem Geschirrspüler und liefert in Abhängigkeit der Trübung unterschiedliche Spannungswerte. Es können somit keine konkreten Trübungswerte in einer standardisierten Einheit gemessen werden, sondern nur relative Werte, die eine Deutung des Verlaufs zulassen.

Fließgeschwindigkeit
============
Bei der <a href="http://www.exp-tech.de/adafruit-9-dof-accel-mag-gyro-temp-breakout-board-lsm9ds1/">Fließgeschwindigkeit</a> ging es vor allem um die Frage, ob unterschiedliche Standorte im Wattenmeer unterschiedliche Fließgeschwindigkeiten aufweisen und ob sich die Fließgeschwindigkeit bei Ebbe und Flut unterscheiden. Die Fließgeschwindigkeit wurde mithilfe eines Beschleunigungssensors gemessen. Die Stärke der Neigung des Messgerätes sollte Aufschluss auf unterschiedliche Fließgeschwindigkeiten geben. 

{% include image.html image=page.image1 %}
{% include image.html image=page.image2 %}


Das Messgerät
============
Der Prototyp des Messgerätes wurde mit mithilfe eines Arduino Uno und einem senseBox-Shield umgesetzt. Das senseBox-Shield wurde verwendet, um die Messwerte mit einem Zeitstempel auf einer SD Karte zu speichern. Ein 6600mAh LiPo Akku sorgte für die Stromversorgung. 
Für das Messgerät wurde ein neues kostengünstiges Gehäuse benötigt, welches auch Unterwasser die Elektronik vor Wasser schützt. Eine Schwierigkeit hierbei war, dass die Sensoren direkten Kontakt zum Wasser benötigten. Der erste Gehäuse-Prototyp bestand aus ein PVC Doppelmuffe mit zwei Deckeln. In einen Deckel wurden die Sensoren mithilfe eines Epoxidharzes eingegossen. Der Deckel konnte dann auf eine Öffnung der Doppelmuffe aufgesteckt werden. Der Beschleunigungssensor wurden im zweit Decken befestigt, sodass die Z-Achse aufrecht steht und einen Beschleunigungswert von ca. 9,81 m/s^2 anzeigt. Fixiert wurden die Deckel mit Tesa Powerfix Tape. Ein einfacher Test in einer tiefen Wanne zeigte, dass das Gehäuse dicht war. Einen Test mit einer höheren Wassersäule (wir erwarten im Watt eine Wassersäule von bis zu 3-4m) konnte leider nicht durchgeführt werden. Für das Gehäuse und den Mikrokontroller im inneren war es also ein Sprung ins Kalte Wasser.

Ausbringen der Messgeräte:
============
Die Messgeräte wurden mit den folgenden Kooridnaten jeweils bei Niedrigwasser ausgebracht:<br>
Büsum 1 09:55 Uhr 54°08'03'' N 08°49'46'' O<br>
Büsum 2 10:30 Uhr 54°08'09'' N 08°50'01'' O<br>
Husum 1 12:40 Uhr. 54°30'18'' N 08°59'25'' O<br>
Husum 2 12:55 Uhr. 54°30'26'' N 08°59'28'' O<br>
Das Ausbringen der Messgeräte war unproblematisch und konnte sehr schnell abgeschlossen werden.
Insgesamt wurden vier Messgeräte gebaut und angebracht, indem jeweils 2 Messgeräte im Watt bei Husum und Büsum im Boden verankert wurden. 
Die Befestigung im Boden erfolge mittels eines einfachen Eimers aus dem Baumarkt. Dieser wurde im Boden vergraben und mithilfe eines Karabiners konnte das Messgerät am Henkel befestigt werden. Die Befestigung im Boden war mit einem Preis von einem Euro sehr günstig und zeigte keine Probleme. 

Auswertung und Einholen der Messgeräte:
============
Am nächsten Tag war es soweit, dass zusammen mit der ersten Schülergruppe des <a href="http://www.gymnasium-buesum.de//">Gymnasiums in Büsum</a> eine Wattkartierung und abholen der Messwerte der Messgeräte durchgeführt wurde. Bei der Wattkartierung wurden von den SuS verschiedenen biotische Faktoren im Watt bestimmt. Die Messstation sollte dann die abiotischen Faktoren dazu liefern, sodass eine Verknüpfung der Daten stattfinden konnte. 
Die erste Sorge, dass die Verankerung einer hohen Tiefe nicht standhalten würde, trat zum Glück nicht ein, sodass die Messgeräte auch am nächsten Tag noch an gleicher Stelle zu finden waren. Leider zeigt sich beim Öffnen der Gehäuse, dass diese nicht 100 Prozent dicht waren und Wasser eingetreten ist. Es folgte ein Kurzschluss und das Messgerät war nicht mehr in der Lage weiter zu messen. Ein Überprüfen der SD-Karte zeigte aber, dass eines der Messgeräte in Büsum Daten über einen Zeitraum von ca. 16h aufgezeichnet hatte. Das Gehäuse war immerhin in der Lage, über eine Hochwasserphase hinweg dicht zu halten. Die Daten auf der SD-Karte zeigen, dass beim zweiten Hochwasser Wasser eingetreten war.
Analog zum ersten Standort war auch am zweiten Standort in Husum Wasser in die Messgeräte eingetreten. Eins der beiden Messgeräte hatte ebenfalls Daten über einen Zeitraum von ca. 18 Stunden aufgezeichnet. Allerdings setzte hier der Trübungssensor bereits zu Beginn der Messung aus (den Grund dafür wissen wir zurzeit noch nicht, evtl. ist auch hier Wasser zu Beginn eingelaufen oder der Sensor ist bereits nach dem ersten Test defekt gewesen).

{% include image.html image=page.image4 %}

ToDo’s und erste Ideen zur Verbesserung
============
Es sollte mit einer senseBox:water weitergehen, die speziell für Messungen im Wattenmeer entwickelt wird. Die Sensordaten zeigen, dass diese ohne Bedenken weiterverwendet werden können. Allerdings muss das Gehäuse überarbeitet werden. Das nächste Gehäuse sollte aus stabilerem Rohr bestehen und verschraubt anstatt gesteckt werden. Des Weiteren soll anstatt des Arduino Unos ein Arduino Pro Mini in der 3.3V Variante verwendet werden, sodass mithilfe von verschiedenen Stromsparmechanismen (sämtliche Status LED’s auslöten, erweiterte Schlafmodi etc.) anstatt des teuren LiPo Akkus einfache AA Batterien verwendet werden können. Das Messgerät soll zudem von Außen steuerbar sein, entweder über Bluetooth, Wifi oder auch über einen Magnetschalter, sodass das Gehäuse vor Ort nicht mehr geöffnet werden muss, um die Messung zu starten. 




