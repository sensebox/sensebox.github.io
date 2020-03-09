---
layout: project_page
name: "Mobiler Datenlogger"
date: 2020-03-09
author: Mario
abstract: "Ein mobiles Feinstaubmessgerät, das die Daten per WLAN an die OpenSenseMap sendet"
image:  /mobile_feinstaubstation/lora/lora_oled.jpg
image0: /images/projects/mobile_feinstaubstation/lora/EUI.png
image1: /images/projects/mobile_feinstaubstation/lora/ids.png
image2: /images/projects/mobile_feinstaubstation/lora/decodingprofile.png
image3: /images/projects/mobile_feinstaubstation/lora/osem_httpinteg.png
image4: /images/projects/mobile_feinstaubstation/lora/lora_oled.jpg
image5: /images/projects/mobile_feinstaubstation/lora/final_osem.jpg
image6: /images/projects/mobile_feinstaubstation/lora/osem_decoder.png
image7: /images/projects/mobile_feinstaubstation/lora/gps_uart.jpg
material:
    - senseBox MCU
    - OLED Display
    - Temperatur und Luftfeuchtesensor(HDC 1080)
    - Feinstaubsensor(SDS011)
    - GPS Modul
    - WiFi-Bee
    - JST Kabel
ide: blockly
version: ["edu", "mini"]   
addons: ["GPS", "Feinstaubsensor"] 
lang: de
tags: ["Informatik","GPS","Feinstaub","Geographie"]
difficult: schwer
---
<head><title>Mobiler Feinstaublogger mit GPS</title></head>

# Mobiler Datenlogger für Feinstaubwerte
In diesem Projekt wird mit der senseBox ein mobiler Datenlogger gebaut, der die Messwerte über WLAN mithilfe eines Handyhotspot direkt an die openSenseMap überträgt. Über das GPS Modul wird der Standort der Station  

## Aufbau
Für den Aufbau werden folgende Komponenten verwendet. Achte darauf, dass das WiFi-Bee auf den XBEE Steckplatz 1 aufgesteckt wird. 
Man braucht:
  - den LoRa Bee
  - das OLED-Display
  - den HDC 1080
  - das GPS-Modul
  - den SDS011 
  
Das OLED Display, der Temperatur- und Luftfeuchtesensor und das GPS Modul werden mit jeweils einem JST-JST Kabel an die I2C Ports angeschlossen. Der Feinstaubsensor mit dem JST-Feinstaubkabel an einen der beiden Serial/UART Ports.

## Registrierung auf der openSenseMap



## Programmierung

Die Programmierung des Mobilen Datenlogger wird in Blockly durchgeführt. Im ersten Schritt werden die Messwerte ausgelesen und als Variable gespeichert. Anschließend im Abstand von 10 Sekunden an die openSenseMap übertragen.

### Auslesen der Sensoren und Anlegen der Variablen

Um die Messwerte der Sensoren nicht nur auf dem Display anzeigen zu lassen sondern auch in regelmäßigen Abständen an die openSenseMap zu versenden werden diese zu Begin der Endlosschleife ausgelesen und in einer Variablen gespeichert. Lege für jeden Messwert eine neue Variable an und geben ihr einen sinnvollen Namen. 

### Anzeigen der Messwerte auf dem Display

Initialisiere das Display im Setup() und füge den Block Zeige auf dem Display in die Endlosschleife. Mit den Blöcken Schreibe Text/Zahl kannst du die jeweilen Messwerte auf dem Display anzeigen lassen. Um mehrere Messwerte auf dem Display anzuzeigen musst du jeweils die Platzierung (Verschiebung auf der Y-Achse) auf dem Display anpassen. 

### Übertragen der Messwerte an die openSenseMap

Um Messwerte an die openSenseMap zu übertragen muss eien 
Damit die Messwerte nicht jede Sekunde an die openSenseMap übertragen werden, ziehe zuerst den Block Messintervall unter die Blöcke für das Display. (Tip: Mit einem Rechtsklick auf den Block __Zeige auf dem Display__ und der Option __Blöcke zusammenfalten__ kannst du Platz sparen).
In den offenen Blockabschnitt wird nun der Block zum Verbinden mit der openSenseMap gezogen. Wähle in diesem Block als __Typ__ Mobil aus und kopiere deine senseBox ID, die du nach der Registrierung von der openSenseMap erhalten hast.  

Für jeden Messwert, den du nun senden möchtest ziehe einen Block __Sende Messwert__ in den offenen Blockabschnitt, trage die entsprechenden Sensor ID's ein und Verbinde den Block mit dem entsprechenden Messwert.

