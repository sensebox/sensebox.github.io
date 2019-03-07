---
layout: project_page
name: "IoT Umweltmessstation"
date: 2019-03-04
author: Mario
abstract: "Eine Umweltmessstation mit Internet Anbindung"
image: home.jpg
image0: /images/projects/parts/mcu_sensoren.png
caption0: Block1
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
---
# IoT Umweltmessstation 

Viele Leute besitzen eine eigene kleine Wetterstation zuhause. In diesem Projekt wird eine Umweltmesstation mit Internet Anbindung selbst gebaut. Die Sensoren für deine Wetterstation kannst du selber auswählen und erweitern. Die Messwerte werden auf die [openSenseMap](https://opensensemap.org) übertragen. 


{% include block.html image=page.image0 caption=page.caption0  %}

## Aufbau

Verbinde im ersten Schritt die 3 Sensoren mithilfe der JST-Adapterkabel mit den I2C Anschlüsse auf der senseBox MCU. Stecke das Wifi-Bee auf den Steckplatz 1 der MCU.

### Programmierung 

Im ersten Schritt wird eine Verbindung mit dem WLAN Netzwerk hergestellt. Ziehe dazu den folgenden Block 

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Erklärkasten</h3>
  </div>
  <div class="panel-body">
So kann ein Erklärkasten aussehen
  </div>
</div>

#### Code als XML Downloaden
