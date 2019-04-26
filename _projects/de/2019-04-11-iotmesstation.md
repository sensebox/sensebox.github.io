---
layout: project_page
name: "IoT Messtation"
date: 2019-04-11
author: Eric
abstract: "Erstelle eine Messtation die in einem Intervall Messwerte an die openSenseMap schickt."
image: /images/projects/iot_messstation/senseBox_Uebersicht.png
image0: /images/projects/iot_messstation/WiFi.png
image1: /images/projects/iot_messstation/upload_osem.png
image2: home.jpg

material:
    - senseBox MCU
    - OLED Display
    - Temperatur und Luftfeuchtigkeitssensor (HDC1080)
    - Luftdrucksensor
    - Beleuchtungsstärke und UV Sensor 
ide: blockly    
lang: de
tags: ["Informatik"]
difficult: mittel
---
# IoT Messtattion 
In diesem Projekt erfahrt ihr, wie man eine senseBox Umweltstation aufbaut. Am Ende wird die Messung diverser Umweltphänomene wie Temperatur, Luftfeuchte, Helligkeit und Luftdruck, sowie die Veröffentlichung der Daten auf der openSenseMap möglich sein!

## Aufbau
Schließe die Sensoren deiner Wahl mithilfe der mitgelieferten JST-Kabel an den I2C-Anschluss der senseBox MCU an.

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">I2C Anschluss</h3>
  </div>
  <div class="panel-body">
Die Kommunikation des Sensors mit dem Mikrokontroller läuft über den seriellen Datenbus I²C. Anders als bei einfachen digitalen oder analogen Eingängen, können an den Datenbus mehrere I²C-Geräte (wie z.B. Sensoren oder Displays) parallel geschaltet werden. Jedes Gerät hat dabei eine eindeutige Kennung, damit der Datenbus jedes Einzelne davon zuordnen und separat ansprechen kann.
  </div>
</div>

## Programmierung

### Schritt 1 

Gehe auf die [openSenseMap](www.opensensemap.org) und legen dort einen Account an. Hast du das getan kannst du über den Reiter "neue senseBox" musst du nun eine senseBox erstellen. Nachdem das erledigt ist, siehst du eine Übersicht in der dir deine registrierte senseBox mit den dazugehörigen Sensoren angezeigt werden. 

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Sensor ID's</h3>
  </div>
  <div class="panel-body">
Die Sensor ID's können benutzt werden um Sensoren zu unterscheiden. Jede senseBox und jeder Sensor der auf der <a href='www.opensensemap.org'>openSenseMap</a> registriert ist besitzt eine einzigartige ID. Beim Hochladen der Messwerte benötigen wir diese ID's damit die openSenseMap weiß zu welchen Sensoren die Messwerte gehören. 
  </div>
</div>

{% include image.html image=page.image %}


### Schritt 2

Im ersten Schritt wollen wir eine Verbindung mit dem Internet über WiFi herstellen. Hierfür brauchst du den Namen und das Passwort für das WLAN welches du zum Datenupload benutzen möchtest.


{% include image.html image=page.image0 %}
 

### Schritt 3 

Nun wollen wir eine Verbindung zur openSenseMap herstellen und unsere Messwerte alle 60 Sekunden dort hochladen. 

{% include image.html image=page.image1 %}

Achte hier darauf, dass hier die ID's aus Schritt 1 übertragen wurden. Um jetzt die restlichen Sensoren hinzuzufügen musst du diese wie beim Temperatursensor einfach in die Schleife hinzufügen. 


## Download 

Den fertigen Arduino Sketch findest du <a href="https://raw.githubusercontent.com/sensebox/resources/master/code/Arduino_Sketch.ino" download="https://raw.githubusercontent.com/sensebox/resources/master/code/Arduino_Sketch.ino">hier</a> und die fertigen Blockly Blöcke <a href="https://raw.githubusercontent.com/sensebox/resources/master/code/Blockly_Sketch.xml" download="https://raw.githubusercontent.com/sensebox/resources/master/code/Blockly_Sketch.xml">hier</a>.

