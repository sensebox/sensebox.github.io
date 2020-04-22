---
layout: project_page
name: "IAQ-Station"
date: 2020-03-09
author: Mario
abstract: "Eine Messstation für die Innenraumluftqualität"
image:  IAQ.png
image1: /images/projects/iaq-station/temperatur_display.svg
image2: /images/projects/iaq-station/temp_humi_display.svg
imageFall00: /images/projects/iaq-station/fall_00.svg
imageFall01: /images/projects/iaq-station/fall_01.svg
imageFall02: /images/projects/iaq-station/fall_02.svg
imageFall03: /images/projects/iaq-station/fall_03.svg
image4: /images/projects/iaq-station/osem_bme680.png
image5: /images/projects/iaq-station/osem_blockly.svg
image6: /images/projects/iaq-station/gesamt.svg
material:
    - senseBox MCU
    - OLED Display
    - Umweltsensor BME680
    - WiFi-Bee
    - 2x JST Kabel
ide: blockly
version: ["mini"]   
lang: de
tags: ["Informatik", "Chemie"]
difficult: Mittel
---
<head><title>Innenraumluftqualitäts Messstation</title></head>

In diesem Projekt wird mit der senseBox eine Messstation für die Luftqualität in Innenräumen gebaut. Mithilfe des Umweltsensors kann neben der Temperatur, Luftfeuchtigkeit, Luftdruck auch die Innenraumluftqualität gemessen werden. Hierbei wird ein Index berechnet (IAQ - Indoor Air Quality) und ein CO2-Äquivalenter Messwert ausgegeben. Die Messwerte werden nacheinander auf dem Display angezeigt und können optional auch über die openSenseMap online abgerufen werden. 

## Aufbau
Stecke das WiFi-Bee auf den Steckplatz __XBEE1__. Das OLED Display und der Umweltsensor werden mit jeweils einem JST-JST Kabel an einen der 5 __I2C/Wire Ports__ angeschlossen.


## Programmierung

Die Programmierung der Messstation wird in [Blockly](https://blockly.sensebox.de) durchgeführt. Im ersten Schritt werden die Messwerte ausgelesen und auf dem Display angezeigt. Da insgesamt 7 verschiedene Parameter auf dem Display angezeigt werden, wird eine Abfolge auf dem Display programmiert. Optional können die Messwerte auch noch über das Internet an die openSenseMap übertragen werden [Übertragen auf die openSenseMap](#optional-übertragen-der-messwerte-an-die-opensensemap).

### Schritt 1: Die erste Anzeige auf dem Display 

Initialisiere das Display im __Setup()__ und füge den Block __Zeige auf dem Display__ in die Endlosschleife ein. Mit dem Block __Schreibe Text/Zahl__ kannst du die jeweilen Messwerte auf dem Display anzeigen lassen. Um zwei Messwerte auf dem Display gleichzeitg anzuzeigen musst du jeweils die Platzierung (Verschiebung auf der Y-Achse) auf dem Display anpassen. Als ersten wird ein Block __Text__ hinzufügt, um zu beschreiben um welchen Sensorwert es sich handelt. Der Sensorwert selber wird in Schriftgröße 2 dargstellt und über die Koordinaten in Y- und X-Richtung verschoben. 

 {% include block.html image=page.image1 %}

Zusätzlich zum Temperaturmesswert kann auf dem Display noch der Messwert für die Luftfeuchtigkeit hinzugefügt werden. Kopiere dazu die Blöcke, ändere die X- und Y-Koordinaten und wähle im Dropdown Menü des Sensorblocks __Luftfeuchtigkeit__ aus.

 {% include block.html image=page.image2 %}

### Schritt 2: Messwerte als Abfolge auf dem Display

Damit die anderen Messwerte auch auf dem Display angezeigt werden können, muss ein Abfolge erstellt werden. Am einfachsten lässt sich die Abfolge, mit verschiedenen Displayinhalten über die __Fallunterscheidung__ umsetzten. Hierbei wird je nach Wert ein bestimmten Variablen ein anderer Programmcode ausgeführt. Die Variable kann einfach nach einem bestimmten Zeitintervall hochgezählt werden, sodass alle Fälle nacheinander ausgeführt werden.

Lege dazu im __Setup()__ eine neue Variable mit den Namen __status__ an und weise ihr den Wert __0__ zu. Anschließend füge die Fallunterscheidung hinzu. Die Fallunterscheidung findest du unter __Logik__. Als Variable fügst du dort __status__ and und gibst an was beim Fall __0__ ausgeführt werden soll. Über das Zahnrad kannst du weitere Fälle hinzufügen.

 {% include block.html image=page.imageFall00 %}

#### Fall 00

Im ersten Fall (status = 0) wird die Temperatur und Luftfeuchtigkeit angezeigt. 

>**Tipp:** Blöcke können mit einem Rechtsklick --> Blöcke zusammenfalten kompakter dargstellt werden.

#### Fall 01 
Im zweiten Fall (status = 1) wird nun der Messwerte für den Luftdruck und den Indoor Airquality Index angezeigt.
  {% include block.html image=page.imageFall01 %}
Nun wird über den Block __Messintervall__ alle 10 Sekunden die Variable Status um 1 hochgezählt. Wenn die Variable 2 erreicht hat wird diese wieder auf 0 gesetzt, sodass wieder der erste Bildschirm angezeigt wird. Je nach Anzahl der Fälle wird der Zähler hochgesetzt und bei insgesamt 4 Fällen erst bei 5 wieder auf 0 gesetzt. 

### Schritt 3: Weitere Messwerte hinzufügen

Im nächsten Schritt werden weitere Fälle hinzugefügt und die Messwerte für VOC, C02 und dem Kalibrierungswert angezeigt.

#### Fall 02

  {% include block.html image=page.imageFall02 %}

#### Fall 03

  {% include block.html image=page.imageFall03 %}


### Kalibrierungswert
Um zuverlässige Messwerte zu liefern kalibriert sich der Sensor anhand der Umgebungsluft selbst. Der Status wird jeweils über den Kalibrierungswert angezeigt. Daher ist es sinnvoll diesen auch auf dem Display anzeigen zulassen, sodass man sehen kann ob die Kalibrierung abgeschlossen ist und die Messwerte verwendet werden können. Wenn der Sensor nicht kalibriert ist oder sich gerade kalibriert werden Messwerte ausgegeben, die allerdings nicht verwendet werden sollten. Folgende Werte für den Kalibrierungswert gibt es:
- 0: Der Sensor ist gerade gestartet und befindet sich in der Warm Up Phase
- 1: Die bisheringen Messwerte zeigen zu wenig Unterschiede und können nicht zum Kalibrieren verwendet werden.
- 2: Der Sensor wird kalibriert
- 3: Die Kalibrierung des Sensor ist abgeschlossen

Der Kalibrierungsvorgang kann unter Umständen lange dauern (>12h) und zeigt dann den Wert 1 an. Sollte nach dieser Zeit die Kalibrierung nicht starten oder abgeschlossen sein, kann es hilfreich sein, die Umgebungsparameter zu verändert z.B. durch stoßartiges Lüften im Raum oder den Sensor für eine gewissen Zeit in der Hand halten. 

Mehr Informationen zur Funktionsweise des Sensor findest du auch [hier](https://docs.google.com/document/d/1RoSpponHep71qok9Q_on9GVQV-JnCTDov1xyAkGQvwk/edit?usp=sharing)
 

## Optional: Übertragen der Messwerte an die openSenseMap

Zuerst musst du deine Messstation auf [https://workshop.opensensemap.org](https://workshop.opensensemap.org) registrieren. In diesem Beispiel wird die Instanz für Workshops verwendet, du kannst dein Messgerät natürlich auch auf der openSenseMap registrieren.

{% include image.html image=page.image4 %}

Klicke auf die entsprechenden Messwerte unter dem BME680, um diese deinem Messgerät hinzuzufügen.
Nach dem Abschluss der Registrierung erhälst du eine Übersicht über die registrierten Phänomene und die zugehörigen ID's. Lasse die Seite geöffnet, da du die ID's in Blockly kopieren musst. 

Um Messwerte an die openSenseMap zu übertragen muss eine Internetverbindung hergestellt werden. Dazu wird die senseBox einfach mit deinem Wlan verbunden, so erhälst du Zugriff auf deine Messwerte überall auf der Welt. Ziehe dazu den Block __Verbinde mit WLAN__ in das __Setup()__ und füge dort deinen Netzwerknamen und das Passwort ein.
Für das Übertragen der Messwerte wird ein zusätzlicher Fall in der Fallunterscheidung angelegt, der ausgeführt wird, wenn die Variable __status__ den Wert 4 hat. 
Ziehe zum Übertragen der Messwerte den Block **Verbinde mit der openSenseMap** in den Blockabschnitt für den offenen Fall. Wähle bei diesem Block den __Typ__ **Stationär** und kopiere deine senseBox ID aus der Übersicht. 

Für jeden Messwert, den du nun senden möchtest, ziehe einen Block __Sende Messwert an die openSenseMap__ in den offenen Blockabschnitt, trage die entsprechenden Sensor ID's ein und verbinde den Block mit dem entsprechenden Messwert.
{% include block.html image=page.image5 %}

## Gesamter Code

 {% include block.html image=page.image6 %}
