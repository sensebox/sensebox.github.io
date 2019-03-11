---
layout: project_page
name: "IoT Umweltmessstation"
date: 2019-03-04
author: Mario
abstract: "Eine Umweltmessstation mit Internet Anbindung"
image: home.jpg
image0: /images/projects/blocks/output/web/output_web-0.png
caption0: Block um eine Wlan Verbindung herzustellen
image1: /images/projects/umweltstation/umweltstation_01.png
caption1: Verwende Variablen um einfacher mit den Messwerten arbeiten zu können
material:
    - senseBox MCU
    - Wifi-Bee
    - Temperatur- und Luftfeuchtigkeitsensor
    - Luftdruck- und Temperatursensor
    - Helligkeits- und UV-Sensor
    - (optional) OLED Display
    - 4 JST-Adapterkabel
    - WLAN Netzwerk (Netzwerkname und Passwort benötigt)
ide: blockly    
lang: de
tags: ["Geographie", "informatik"]
difficult: mittel
solution: /docs/projects/solutions/umweltstation.xml
---
# IoT Umweltmessstation 

Viele Leute besitzen eine eigene kleine Wetterstation zuhause. In diesem Projekt wird eine Umweltmesstation mit Internet Anbindung selbst gebaut. Die Sensoren für deine Wetterstation kannst du selber auswählen und erweitern. Die Messwerte werden auf die [openSenseMap](https://opensensemap.org) übertragen. 


{% include block.html image=page.image0 caption=page.caption0  %}

## Aufbau

Verbinde im ersten Schritt die 3 Sensoren mithilfe der JST-Adapterkabel mit den I2C Anschlüsse auf der senseBox MCU. Stecke das Wifi-Bee auf den Steckplatz 1 der MCU.

## Programmierung 

Im ersten Schritt wird eine Verbindung mit dem WLAN Netzwerk hergestellt. Ziehe dazu den Block für das Herstellen einer Wlan Verbindung in die Setup Schleife. Trage in diesen Block deinen Netzwerknamen und das entsprechende Passwort ein.

{% include block.html image=page.image0 caption=page.caption0  %}

Nun müssen die Sensoren noch ausgelesen werden. Hierfür findest du die entsprechenden Blöcke unter senseBox - Sensoren. Um ein einfaches Arbeiten mit den Messwerten zu ermöglichen werden die ausgelesen Messwerte jeweils einer Variable zugewiesen. Benenne die Variable immer so,dass du nachvollziehen kannst um welchen Messwert es sich handelt. 

{% include block.html image=page.image1 caption=page.caption1  %}

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Erklärkasten</h3>
  </div>
  <div class="panel-body">
So kann ein Erklärkasten aussehen
  </div>
</div>

#### Code als XML Downloaden

<a href="{{ site.baseurl | append: page.solution }}" target="_blank">Download</a>