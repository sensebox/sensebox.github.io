---
layout: project_page
name: "Umweltstation mit der senseBox:mini"
date: 2020-04-04
author: Yannick
abstract: "Hier kannst du erfahren, wie man nur mit dem Inhalt der senseBox:mini eine eigene Umweltstation mit Sensorwerten für Temperatur, Luftfeuchtigkeit, Luftdruck und C02-Gehalt aufstellen kannst"
image:  Titelbild_bme_sense_mini.jpg
image0: /images/projects/bme_sense_mini/bme.png
image1: /images/projects/bme_sense_mini/aufbau.jpg
image2: /images/projects/bme_sense_mini/registrierung.png
image3: /images/projects/bme_sense_mini/display_blockly.gif 
image4: /images/projects/bme_sense_mini/display_blockly.png
image5: /images/projects/bme_sense_mini/werte.jpg
image6: /images/projects/bme_sense_mini/wifi_blockly.png
image7: /images/projects/bme_sense_mini/wosm.png 
material:
    - senseBox MCU
    - OLED Display
    - BME680-Umweltsensor
    - WiFi-Bee
    - 2x JST Kabel
ide: blockly
version: ["mini"]
lang: de
tags: ["Informatik","mini","C02","blockly", "workshop"]
difficult: mittel
---
<head><title>Umweltstation senseBox:mini</title></head>

In diesem Projekt wird mit der senseBox eine kleine Umweltstation programmiert, die lediglich auf Basis des BME680 Werte ausliest und die Messwerte über WLAN an die Seite [workshop.opensensemap.org](workshop.opensensemap.org) überträgt. Diese Seite ist extra für Workshops designed und löscht deine erhobenen Werte innerhalb von 7 Tagen wieder.

<br><br>

## Der BME680-Umweltsensor
{% include image.html image=page.image0 %}
Der BME680 kann neben Temperatur, Luftfeuchte und Luftdruck auch Angaben zur Luftqualität geben, indem der Gasdruck der Luft gemessen wird. So kann die senseBox einen __C02-Wert__ errechnen. Eine vollständige Beschreibung seiner Funktionalität darüber hinaus findest du _[hier](https://www.bosch-sensortec.com/products/environmental-sensors/gas-sensors-bme680/)_.

<br><br>

## Aufbau
Stecke das WiFi-Bee auf den Steckplatz _XBEE1_.<br>
Das _OLED Display_ und der _BME680_ werden mit jeweils einem JST-JST Kabel an die _I2C Ports_ angeschlossen.
{% include image.html image=page.image1 %}

<br><br>

## Schritt 1: Registrierung auf workshop.opensensemap.org
Gehe auf die __[Workshop-OpenSenseMap](https://workshop.opensensemap.org/)__. Diese ist am besten benutzbar, wenn du nur über einen kurzen Zeitraum Daten erheben möchtest oder für Projekte und eben Workshops gedacht. 

Die Registrierung erfolgt analog zur openSenseMap.<br>
Nach der Registrierung/Anmeldung, wähle _Neue senseBox_ im Dropdown Menü oder auf dem Dashboard und wähle **alle** zugehörigen Sensorwerte zum BME680(insgesamt 4!) aus. 

Den sensorseitig ausgegebenen _[VOC-Wert](https://de.wikipedia.org/wiki/Fl%C3%BCchtige_organische_Verbindungen)_ nutzen wir um den Gehalt an CO2 in der Luft zu ermitteln, daher benennen wir ihn dementsprechend um (siehe Bild).

{% include image.html image=page.image2 %}

Die Einheit _ppm_ bedeutet Parts Per Million. Würden wir hier den prozentualen Gehalt verweden, lägen die Werte zwischen 0,05 und 0,2 %, weswegen eine Skalierung auf Millionen sinvoll ist um kleine Unterschiede zu sehen.

Nach der Erstellung werden die Box-ID und die Sensor-IDs auf einer Seite angezeigt, diese am besten offen behalten!

<br><br>

## Schritt 2: Programmierung mit Blockly
Die Programmierung wird in __[Blockly](https://blockly.sensebox.de)__ durchgeführt. Die Messwerte werden auf dem Display angezeigt und anschließend im Abstand von einer Minute an workshop.opensensemap.org übertragen.

<br><br>

### Anzeigen der Messwerte auf dem Display
Initialisiere das Display im Setup() und füge den Block _Zeige auf dem Display_ in die Endlosschleife. Mit den Block _Schreibe Text/Zahl_ kannst du die jeweiligen Messwerte auf dem Display anzeigen lassen. Um mehrere Messwerte auf dem Display anzuzeigen musst du jeweils die Platzierung (Verschiebung auf der Y-Achse) auf dem Display anpassen. 
<br><br>
Im GIF wird demonstriert, wie man die Displayanzeige beispielsweise aufbaut. Ich baue dazu zunächst ein _3-elementiges Textfeld_ auf, dass dann wiederrum 3x mit STRG+C --> STRG+F kopiert wird. 

{% include image.html image=page.image3 %}

<br><br>
Für den Luftdruck, der in Hectopascal dargestellt werden soll, nutzen wir außerdem einen mathematischen Ausdruck um den ausgegeben Pascal-Wert umzurechnen. Dasselbe passiert beim CO2-Wert, der von ppm auf Prozent umgerechnet wird.

<br><br>
#### Aufgabe: Übertrage den Programmcode und überprüfe auf dem Display ob alle Messwerte korrekt angezeigt werden. 

{% include image.html image=page.image4 %}

<br><br>
Keine Sorge übrigens, wenn der Co2-Wert zunächst bei 500ppm stagniert. Der Sensor benötigt eine kleine Aufwärmphase um sich zu Kalibrieren. So sollte es dann nach 15 Minuten aussehen. Am besten selbst mal ausprobieren und den Sensor anhauchen!

{% include image.html image=page.image5 %}

<br><br>

### Übertragen der Messwerte an workshop.opensensemap.org
Dafür brauchst du im `Setup()` den Block _Verbinde mit WLAN_. Dort trägst du den Namen deines Netzwerks und dein Passwort ein.

Im `Loop()` kommen der Block _Verbinde mit der openSenseMap_ und darin geschachtelt _Sende Messwert an die openSenseMap_. Wichtig hierbei ist, im Dropdown __workshop.opensensemap.org__ anzugeben, wenn du in [Schritt 1](/projects/de/2020-04-02-BME-sense_mini#schritt-1-registrierung-auf-workshopopensensemaporg) deine senseBox dort registriert hast. 

Daran angehängt wird der _Umweltsensor (BME680)_ Block. Dieser kann wieder 3x kopiert werden, wie schon bei der Displayausgabe. 

Wichtig hier ist die Zuweisung der Sensor-IDs und der Box-ID, die du noch auf der Seite geöffnet hast. Ansonsten findest du sie auf dem Dashboard, wie auf der OpenSenseMap. Dort kann du direkt die __Box-ID__ kopieren, wenn du auf Editieren klickst, befinden sich die __Sensor-IDs__ der jeweiligen Sensoren unter dem Reiter __Sensoren__ .

{% include image.html image=page.image6 %}

#### Aufgabe: Versuche die drei anderen Sensorwerte, analog zum [Display-Block](/projects/de/2020-04-02-BME-sense_mini#anzeigen-der-messwerte-auf-dem-display), in Blockly zu erstellen und erste Messwerte an die workshop.opensensemap.org zu senden.

<br><br>

Hat alles funktioniert, dürftest du nach kurzer Zeit erste Messwerte bekommen!

{% include image.html image=page.image7 %}

