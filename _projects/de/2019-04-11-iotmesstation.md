---
layout: project_page
name: "IoT Messtation"
date: 2019-05-17
author: Eric
abstract: "Erstelle eine Messtation, die Messwerte für Temperatur, Luftfeuchte, Luftdruck, Helligkeit und UV-Intensität an die openSenseMap schickt."
image: home.jpg
image1: /images/projects/iot_messstation/senseBox_Uebersicht.png
image2: /images/projects/iot_messstation/WiFi.png
image3: /images/projects/iot_messstation/upload_osem.png
image0: /images/projects/iot_messstation/neueSenseBox.png
material:
    - senseBox MCU
    - OLED Display
    - Temperatur- und Luftfeuchtigkeitssensor 
    - Luftdrucksensor 
    - Helligkeits- und UV-Sensor 
    - JST-Kabel
ide: blockly    
lang: de
version: ["edu"]
tags: ["Informatik", "Geographie"]
difficult: mittel
---
# IoT Messstattion 
Ziel dieses Projektes ist es, eine senseBox Umweltstation aufzubauen. Am Ende wird die Messung diverser Umweltphänomene wie Temperatur, Luftfeuchte, Helligkeit und Luftdruck, sowie die Veröffentlichung der Daten auf der openSenseMap möglich sein!

## Aufbau
Schließe die Sensoren deiner Wahl mithilfe der mitgelieferten JST-Kabel an den I2C-Anschlüssen der senseBox MCU an.

<div class="panel panel-success">
  <div class="panel-heading">
    I2C Anschluss
  </div>
  <div class="panel panel-success">
    <div class="panel-body">
    Die Kommunikation des Sensors mit dem Mikrocontroller läuft über den seriellen Datenbus I²C. Anders, als bei einfachen digitalen oder analogen Eingängen, können an den Datenbus mehrere I²C-Geräte (wie z.B. Sensoren oder Displays) parallel geschaltet werden. Jedes Gerät hat dabei eine eindeutige Kennung, damit der Datenbus jedes Einzelne davon zuordnen und separat ansprechen kann.
    </div>
  </div>
</div>

## Vorbereitung

### Schritt 1: Registrierung auf der openSenseMap

Damit du die Werte deiner Messstation von überall aus abrufen kannst, können die Werte im Internet auf der [openSenseMap](www.opensensemap.org) hochgeladen werden. Dafür muss ein Benutzerkonto auf ebendieser Plattform erstellt werden. Rufe die [openSenseMap](www.opensensemap.org) in einem Internet-Browser auf. Klicke in der oberen Leiste auf den Menüpunkt "Registrierung". Fülle dort alle freien Felder aus. Achte darauf, deine E-Mail Adresse korrekt einzugeben, da du diese für die nächsten Schritte noch benötigst. 

### Schritt 2: Anlegen einer neuen 'senseBox'

Ist die Registrierung abgeschlossen, melde dich an und wähle über das Dropdown Menü (siehe Bild) den Punkt "Neue senseBox" aus. Hier kannst du deiner Messstation einen Namen geben, eine Position angeben und die Phänomene, die du messen möchtest, bestimmen. Wichtig ist, dass du auch nur die Sensoren angibst, die du auch zur Verfügung hast. Nachdem das erledigt ist, siehst du eine Übersicht, in der dir deine registrierte senseBox mit den dazugehörigen Sensoren angezeigt wird.

{% include image.html image=page.image0 %}

<div class="panel panel-success">
  <div class="panel-heading">
  Sensor IDs: Die Sensor IDs können benutzt werden, um Sensoren zu unterscheiden. Jede senseBox und jeder Sensor, der auf der <a href='www.opensensemap.org'>openSenseMap</a> registriert ist, besitzt eine einzigartige ID. Beim Hochladen der Messwerte werden  diese IDs benötigt, damit die openSenseMap weiß, zu welchen Sensoren die Messwerte gehören
  </div>
</div>

{% include image.html image=page.image1 %}

## Programmierung
### Schritt 1: Anfang der Programmierung

Super, die Registrierung auf der [openSenseMap](www.opensensemap.org) ist abgeschlossen! Nun kannst du dich der Programmierung widmen. Gehe hierfür auf die [Ardublockly](https://blockly.sensebox.de/ardublockly/?lang=de&board=sensebox-mcu) Seite. Der Umgang mit Ardublockly sollte dir aus vorherigen Anleitungen bekannt sein. Falls dem nicht so ist, besuche die [senseBox Go](www.sensebox.de/go) Seite.
Im ersten Schritt wird  eine Verbindung mit dem Internet über WiFi hergestellt. Hierfür brauchst du den Namen und das Passwort für das WLAN, welches du zum Datenupload benutzen möchtest. Die hierfür verwendeten Blöcke befinden sich in der Kategorie `Web`->`WiFi`.


{% include image.html image=page.image2 %}
 

### Schritt 2: Verbindung zur openSenseMap und hochladen der Messwerte
Hast du den korrekten Netzwerknamen und das Passwort eingegeben, kann nun eine Verbindung zur openSenseMap hergestellt werden. Um das Netzwerk nicht zu überlasten, werden die Messwerte alle 60 Sekunden übertragen. Den passenden Block hierfür findest du in der Kategorie `Zeit`. Ziehe diesen in die Endlosschleife und ändere das Messintervall zu 60000 Millisekunden. Nun soll alle 60 Sekunden eine Verbindung zur openSenseMap hergestellt werden. Den Block dafür findest du in der Kategorie `Web`-> `openSenseMap`. Ähnlich, wie bei der Verbindug über WiFi aus Schritt 1, musst du in diesem Block deine senseBox ID aus Schritt 2 der Vorbereitung angeben. 
In diesem Block kannst du nun alle Sensoren, die du registriert hast, angeben und somit hochladen. Dafür wird der Block `Sende Messwerte an die openSenseMap` aus der Kategorie `Web`-> `openSenseMap` benötigt. An diesen Block kann nun der Wert für den Sensor aus der Kategorie `Sensoren` eingefügt werden.

{% include image.html image=page.image3 %}

Wichtig! Achte auch hier darauf, dass du die Sensor IDs in den Block `Sende Messwerte an die openSenseMap` einfügst. 

### Schritt 3: Code übertragen

Übertrage den Code auf die senseBox, wie auf [senseBox Go](www.sensebox.de/go) beschrieben.

### Schritt 4: Fertig!

Herzlichen Glückwunsch! Du hast eine eigene Messstation programmiert. Für was du die senseBox sonst noch benutzen kannst, erfährst du in anderen spannenden [Projekten](www.sensebox.de/de/projects).

## Download 

Die fertigen Blockly Blöcke findest du <a href="https://raw.githubusercontent.com/sensebox/resources/master/code/Blockly_Sketch.xml" download="https://raw.githubusercontent.com/sensebox/resources/master/code/Blockly_Sketch.xml">hier</a>.

