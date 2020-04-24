---
layout: project_page
name: "Mobiler Datenlogger"
date: 2020-03-09
author: Mario
abstract: "Ein mobiler Datenlogger, der die Daten per WLAN an die openSenseMap sendet"
image:  MobilerDatenlogger.png
image0: /images/projects/mobile_feinstaubstation/wifi/AnlegenVariablen.png
image1: /images/projects/mobile_feinstaubstation/wifi/ZeigeDisplay.png
image2: /images/projects/mobile_feinstaubstation/wifi/RegistrierungOSEM.png
image3: /images/projects/mobile_feinstaubstation/wifi/SendeOSEM.png
material:
    - senseBox MCU
    - OLED Display
    - Temperatur und Luftfeuchtesensor(HDC 1080)
    - Feinstaubsensor(SDS011) inkl. Kabel
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
In diesem Projekt wird mit der senseBox ein mobiler Datenlogger gebaut, der die Messwerte über WLAN, mithilfe eines Handyhotspot, direkt an die openSenseMap überträgt. Der aktuelle Standort wird über das GPS-Modul bestimmt und zusätzlich zu den Messwerten übertragen.  

## Aufbau
Stecke das WiFi-Bee auf den Steckplatz __XBEE1__. 
Das OLED Display, der Temperatur- und Luftfeuchtesensor und das GPS Modul werden mit jeweils einem JST-JST Kabel an die I2C Ports angeschlossen. Der Feinstaubsensor mit dem JST-Feinstaubkabel an einen der beiden Serial/UART Ports.

## Registrierung auf der openSenseMap

Die Registrierung erfolgt auf der openSenseMap. Wähle dort als __Aufstellungsort__ **mobil** und lege einen ersten Standort fest (dieser wird nur für den Start benötigt). Wähle als Modell die senseBox:edu und füge die Messwerte für Temperatur, Luftfeuchtigkeit, Feinstaub (PM2.5) und Feinstaub (PM10) aus. 

 {% include image.html image=page.image2 %}

## Programmierung

Die Programmierung des Mobilen Datenlogger wird in [Blockly](https://blockly.sensebox.de) durchgeführt. Im ersten Schritt werden die Messwerte ausgelesen und als Variable gespeichert. Die Messwerte werden auf dem Display angezeigt und anschließend im Abstand von 10 Sekunden an die openSenseMap übertragen.

### Schritt 1: Auslesen der Sensoren und Anlegen der Variablen

Um die Messwerte der Sensoren nicht nur auf dem Display anzeigen zu lassen sondern auch in regelmäßigen Abständen an die openSenseMap zu versenden werden diese zu Begin der Endlosschleife ausgelesen und in einer Variablen gespeichert. Lege für jeden Messwert eine neue Variable an und geben ihr einen sinnvollen Namen. 


{% include image.html image=page.image0 %}

### Schritt 2: Anzeigen der Messwerte auf dem Display

Initialisiere das Display im Setup() und füge den Block __Zeige auf dem Display__ in die Endlosschleife. Mit den Block __Schreibe Text/Zahl__ kannst du die jeweilen Messwerte auf dem Display anzeigen lassen. Um mehrere Messwerte auf dem Display anzuzeigen musst du jeweils die Platzierung (Verschiebung auf der Y-Achse) auf dem Display anpassen.


 {% include image.html image=page.image1 %}

Übertrage den Programmcode und überprüfe auf dem Display ob alle Messwerte korrekt angezeigt werden. 

### Schritt 3: Übertragen der Messwerte an die openSenseMap

Um Messwerte an die openSenseMap zu übertragen muss eine Internetverbindung hergestellt werden. Da in diesem Projekt eine mobile Messstation gebaut wird ist es am einfachsten den Hotspot deines Handy zu verwenden. 
Damit die Messwerte nicht jede Sekunde an die openSenseMap übertragen werden, ziehe zuerst den Block Messintervall unter die Blöcke für das Display. (Tip: Mit einem Rechtsklick auf den Block __Zeige auf dem Display__ und der Option __Block zusammenfalten__ kannst du Platz sparen).
In den offenen Blockabschnitt wird nun der Block zum Verbinden mit der openSenseMap gezogen. Wähle in diesem Block als __Typ__ **Mobil** aus und kopiere deine senseBox ID, die du nach der Registrierung von der openSenseMap erhalten hast.  

Für jeden Messwert, den du nun senden möchtest ziehe einen Block __Sende Messwert an die openSenseMap__ in den offenen Blockabschnitt, trage die entsprechenden Sensor ID's ein und verbinde den Block mit dem entsprechenden Messwert.

Damit die gemessenen Messwerte immer mit dem aktuellen Standort verknüpft werden müssen 4 verschiedene Parameter vom GPS Modul abgefragt werden. Neben dem Längen und Breitengrad wird auch die Höhe über NN und ein Zeitstempel im RFC 3339 Format übertragen. 

 {% include image.html image=page.image3 %}

Beachte, dass das GPS Modul nach dem ersten anschließen unter Umständen sehr lange benötigt, um ein erstes Standortsignal zu bekommen. Lege dazu die Box nach draußen und achte darauf, dass keine Gegenstände, wie Dächer oder Bäume den Blick in den Himmel versperren.

