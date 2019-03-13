---
layout: project_page
name: "Feinstaubmessstation"
date: 2018-11-02
author: Mario
abstract: "Eine einfache Feinstaubmessstation mit Internetanbindung"
image: traffic_counter.png
image0: /images/projects/feinstaubmessstation/schritt_1.jpg
image1: /images/projects/feinstaubmessstation/schritt_2.png
image2: /images/projects/feinstaubmessstation/schritt_3.png
material:
    - senseBox MCU
    - Temperatur- und Luftfeuchtigkeitssensor
    - JST Kabel
    - Feinstaubsensor inkl. Kabel
    - OLED Display
    - WIFI Bee
ide: blockly    
lang: de
tags: ["Geographie", "Informatik"]
difficult: mittel
---
# Feinstaub Messstation {#head}

In diesem kleinen Projekt soll eine Messsation gebaut werden, die den Feinstaubgehalt (PM10, PM2.5), Temperatur und Luftfeuchtigkeit
an die openSenseMap überträgt.

## Grundlagen 
Feinstaub kann in verschiedenen Partikelgrößen gemessen werden. Standardmäßig werden Partikel mit einer Größe von unter 10µm oder 2.5µm gemessen. Der Messwert, den der Sensor ausgibt,
entspricht dann der Konzentration in µg/m^3. Die Temperatur wird in Grad Celsius und die Luftfeuchtigkeit in %rF ausgegeben.
Der Feinstaubsensor reagiert sehr stark auf erhöhte Luftfeuchtigkeit, daher sollte immer, wenn der Feinstaubgehalt bestimmt
wird, auch die Temperatur und die Luftfeuchtigkeit gemessen werden, um die Messwerte korrekt einordnen zu können. 
## Aufbau 
Verbinde im ersten Schritt das Wifi Bee mit dem XBee Steckplatz 1. Anschließend verbindest du mit dem senseBox Kabel das Display und
den Temperatur- und Luftfeuchtigkeitssensor mit einem der I2C/Wire Steckplätzen. Der Feinstaubsensor wird mit dem entsprechenden
Kabel an einen UART/Serial Anschluss angeschlossen. 

## Programmierung 

Nach dem Aufbau muss die Feinstaubmessstation noch programmiert werden.

### Schritt 1: Ansteuern des Displays

Im ersten Schritt wir der Programmcode für das Display erstellt. 

{% include image.html image=page.image0 %}

#### Aufgabe Schritt 1:

Lasse dir einen Text auf dem Display anzeigen.

### Schritt 2: Auslesen der Sensoren

Die Blöcke für das Auslesen der Sensoren findest du unter senseBox Sensoren. Die Sensoren haben verschiedene Ausgabewerte,
die du jeweils in dem Dropdown Menü auswählen kannst. Verwende für jeden Messwert eine eigene Variable um diesen zu speichern
und später wieder aufrufen zu können.

{% include image.html image=page.image1 %}

##### Aufgabe Schritt 2

Lese alle Messwerte der Sensoren aus und speichere diese als Variable. Lasse dir anschließend alle Messwerte auf
dem Display anzeigen.

### Schritt 3: Verbinden mit dem Internet und senden der Messwerte an die openSenseMap

Für die Übertragung an die openSenseMap benötigst du neben deinen Zugangsdaten für das Wlan auch eine BoxID und Sensor ID's 
für die einzelnen Messwerte und Sensoren. Registriere eine neue senseBox auf der openSenseMap um die entsprechenden ID's
zu erhalten.

{% include image.html image=page.image2 %}

### Aufgabe

 Kombiniere die Schritte 1 bis 3 und erstelle einen Programmcode, der folgende Funktion hat:
 - Auslesen der Sensoren und speichern als Variablen
 - Anzeige der Messwerte auf dem Display
 - Übertragen der Messwerte über Wlan an die openSenseMap

