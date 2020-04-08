---
layout: project_page
name: "IAQ-Station"
date: 2020-03-09
author: Mario
abstract: "Eine Messstation für die Innenraumluftqualität"
image:  MobilerDatenlogger.png
image1: /images/projects/iaq-station/temperatur_display.svg
image2: /images/projects/iaq-station/temp_humi_display.svg
image5: /images/projects/iaq-station/gesamt.svg
material:
    - senseBox MCU
    - OLED Display
    - Umweltsensor BME680
    - WiFi-Bee
    - 2x JST Kabel
ide: blockly
version: ["mini"]   
lang: de
tags: ["Informatik"]
difficult: Mittel
---
<head><title>Innenraumluftqualitäts Messstation</title></head>

# Mobiler Datenlogger für Feinstaubwerte
In diesem Projekt wird mit der senseBox eine Messstation für die Luftqualität in Innenräumen gebaut. Mithilfe des Umweltsensors kann neben der Temperatur, Luftfeuchtigkeit, Luftdruck auch Messwerte für die Innenraumluftqualität gemessen werden. Hierbei wird ein Index berechnet (IAQ - Indoor Air Quality) und ein CO2-Äquivalenter Messwert ausgegeben. Die Messwerte werden nacheinander auf dem Display angezeigt und können optional auch über die openSenseMap online abgerufen werden. 

## Aufbau
Stecke das WiFi-Bee auf den Steckplatz __XBEE1__. 
Das OLED Display und der Umweltsensor werden mit jeweils einem JST-JST Kabel an einen der 5 __I2C/Wire Ports__ angeschlossen.


## Programmierung

Die Programmierung des Mobilen Datenlogger wird in [Blockly](https://blockly.sensebox.de) durchgeführt. Im ersten Schritt werden die Messwerte ausgelesen und auf dem Display gespeichert gespeichert. Da insgesamt 7 verschiedenen Parameter auf dem Display angezeigt werden, wird eine Abfolge auf dem Display programmiert.

### Schritt 1: Die erste Anzeige auf dem Display 

Initialisiere das Display im Setup() und füge den Block __Zeige auf dem Display__ in die Endlosschleife. Mit den Block __Schreibe Text/Zahl__ kannst du die jeweilen Messwerte auf dem Display anzeigen lassen. Um zwei Messwerte auf dem Display gleichzeitg anzuzeigen musst du jeweils die Platzierung (Verschiebung auf der Y-Achse) auf dem Display anpassen. Als ersten wird ein Block __Text__ hinzufügt, um zu beschreiben um welchen Sensorwert es sich handelt. Der Sensorwert selber wird in Schriftgröße 2 dargstellt und über die Koordinaten in Y- und X-Richtung verschoben. 

 {% include block.html image=page.image1 %}

Zusätzlich zum Temperaturmesswert kann auf dem Display noch der Messwert für die Luftfeuchtigkeit hinzugefügt werden. Kopiere dazu die Blöcke und ändere die X- und Y-Koordinaten und wähle im Dropdown Menü des Sensorblocks __Luftfeuchtigkeit__ aus.

 {% include block.html image=page.image2 %}

### Schritt 2: Messwerte als Abfolge auf dem Display


 
### Schritt 3: Übertragen der Messwerte an die openSenseMap

Um Messwerte an die openSenseMap zu übertragen muss eine Internetverbindung hergestellt werden. Da in diesem Projekt eine mobile Messstation gebaut wird ist es am einfachsten den Hotspot deines Handy zu verwenden. 
Damit die Messwerte nicht jede Sekunde an die openSenseMap übertragen werden, ziehe zuerst den Block Messintervall unter die Blöcke für das Display. (Tip: Mit einem Rechtsklick auf den Block __Zeige auf dem Display__ und der Option __Block zusammenfalten__ kannst du Platz sparen).
In den offenen Blockabschnitt wird nun der Block zum Verbinden mit der openSenseMap gezogen. Wähle in diesem Block als __Typ__ **Mobil** aus und kopiere deine senseBox ID, die du nach der Registrierung von der openSenseMap erhalten hast.  

Für jeden Messwert, den du nun senden möchtest ziehe einen Block __Sende Messwert an die openSenseMap__ in den offenen Blockabschnitt, trage die entsprechenden Sensor ID's ein und verbinde den Block mit dem entsprechenden Messwert.

Damit die gemessenen Messwerte immer mit dem aktuellen Standort verknüpft werden müssen 4 verschiedene Parameter vom GPS Modul abgefragt werden. Neben dem Längen und Breitengrad wird auch die Höhe über NN und ein Zeitstempel im RFC 3339 Format übertragen. 

 {% include image.html image=page.image3 %}

Beachte, dass das GPS Modul nach dem ersten anschließen unter Umständen sehr lange benötigt, um ein erstes Standortsignal zu bekommen. Lege dazu die Box nach draußen und achte darauf, dass keine Gegenstände, wie Dächer oder Bäume den Blick in den Himmel versperren.

## Registrierung auf der openSenseMap

Die Registrierung erfolgt auf der openSenseMap. Wähle dort als __Aufstellungsort__ **mobil** und lege einen ersten Standort fest (dieser wird nur für den Start benötigt). Wähle als Modell die senseBox:edu und füge die Messwerte für Temperatur, Luftfeuchtigkeit, Feinstaub (PM2.5) und Feinstaub (PM10) aus. 

 {% include image.html image=page.image2 %}


 {% include image.html image=page.image5 %}