---
layout: project_page
name: "IoT Messtation"
date: 2019-04-11
author: Eric
abstract: "Erstelle eine Messtation die in einem Intervall Messwerte an die openSenseMap schickt."
image: logo_bunt.png
image0: /images/projects/parts/mcu_sensoren.png
image1: /images/projects/sensor_display/Helligkeit_Display_Skizze_0.png
image2: /images/projects/sensor_display/Helligkeit_Display_Skizze_1.png
image3: /images/projects/sensor_display/Helligkeit_Display_Skizze_2.png
image4: /images/projects/sensor_display/Helligkeit_Display_Skizze_3.png
image5: /images/projects/sensor_display/Helligkeit_Display_Skizze_4.png
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

### Schritt 2

Im ersten Schritt wollen wir eine Verbindung mit dem Internet über WiFi herstellen. Hierfür brauchst du den Namen und das Passwort für das WLAN welches du zum Datenupload benutzen möchtest.
```
{% raw %}
{% include image.html image=page.image0 %}
{% endraw %}
``` 

### Schritt 3 

Nun wollen wir eine Verbindung zur openSenseMap herstellen und unsere Messwerte dort hochladen.

## YAML Front Matter

```
---
layout: project_page // Muss nicht verändert werden
name: "Projekt Template" // Der Projektname taucht später in der Übersicht auf
date: 2019-03-04 // Datum, an dem das Projekt erstellt bzw. bearbeitet wurde 
author: Mario // Wer ist der Autor dieses Projektes
abstract: "Ein tolles Projekt mit der senseBox" // Eine Kurze Beschreibung des Projektes, die auf der Übersichtsseite dargstellt wird
image: logo_bunt.png // Das Titelbild liegt im Ordner Images/projects
image0: /images/projects/parts/mcu_sensoren.png // der Zielordner für das erste Bild. Lege für dein Projekt ein Ordner mit allen Bildern an
image1: /images/projects/sensor_display/Helligkeit_Display_Skizze_0.png
image2: /images/projects/sensor_display/Helligkeit_Display_Skizze_1.png
image3: /images/projects/sensor_display/Helligkeit_Display_Skizze_2.png
image4: /images/projects/sensor_display/Helligkeit_Display_Skizze_3.png
image5: /images/projects/sensor_display/Helligkeit_Display_Skizze_4.png
material: // Liste kurz die verwendeten Bauteile auf
    - senseBox MCU 
    - OLED Display
    - Umweltsensor
ide: blockly    // weitere Möglichkeiten: "arduino", "nepo"
lang: de // weitere Möglichkeiten: "en"
tags: ["Geographie", "informatik"] // schaue welche Tags bisher existieren
difficult: leicht // weitere Möglichkeiten: "mittel", "schwer"
---
```
