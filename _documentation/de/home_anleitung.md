---
layout: documentation
title: "Anleitung für die senseBox:home"
date: 2017-05-11
thumbnail: /images/blog_images/screenshot_osem.png
lang: de
system: home
image1: /images/documentation/de/home_anleitung/01_aufbau.png
image2: /images/documentation/de/home_anleitung/mcu_verschraubung.jpeg
---
# Übersicht über die senseBox:home


{% include image_small.html image=page.image1 caption="Die Bauteile der senseBox:home" %}

- Gehäuse mit Deckel
- mini-USB Kabel + Adapter
- senseBox MCU 
- Sensor für Luftfeuchte und Temperatur 
- Schutzgehäuse für Sensor mit Luftfeuchte und Temperatur + Zubehör
- Plexiglas mit Plastikstiften
- M20 Gewinde 
- Tüte mit 8 Schrauben
- Bee


# Zusammenbau der senseBox

Der Zusammenbau der senseBox ist auch als Video dokumentiert:

<iframe width="640" height="480" src="https://www.youtube-nocookie.com/embed/dUuRfZI39U8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 1. Schritt

*senseBox MCU im Gehäuse anbringen:* 

Dazu richtest du die MCU so aus, dass der micro USB-Anschluss und der rote Knopf zum Loch im Gehäuse zeigen.
Danach schraubst du die MCU mit zwei kleinen Schrauben am Gehäuse fest. Nutze dazu die beiden mittleren Löcher an der Längsseite 
des MCUs.


{% include image_small.html image=page.image2 caption="Einsetzten der MCU ins Gehäuse" %}

## 2. Schritt

*Anschließen vom Bee und Temperatur- und Luftfeuchtigkeitssensor:*

Unanhängig davon, welches Bee du benutzt, musst du im nächsten Schritt dein Bee auf dem dafür vorgesehenen *XBEE1* Steckplatz anbringen. 


{% include image_small.html image=page.image2 caption="Einsetzten des WiFi Bee auf den Steckplatz XBEE1" %}

## 3. Schritt

*Anschluss des Sensors und des mini-USB Kabels:*

Hierzu verschraubst du erst einmal das M20 Gewinde in dem Loch in der Seite des Gehäuses. 
Schraube anschließend die Kappe ab und stecke das Kabel (ohne Sensor) und das mini-USB Kabel durch die Öffnung vom Gewinde.
Jetzt kannst du die Kappe wieder auf das Gewinde drehen und den Sensor mit dem Kabel verbinden. 
Der Stecker des Sensors im Gehäuse kann auf einem der 5 *12C/Wire* Steckplätze angebracht werden.
**Das mini-USB Kabel solltest du erst am MCU anschließen, sobald alles aufgebaut ist.**

{% include image_small.html image=page.image2 caption="Anschluss des Temperatur und Luftfeuchtigkeitssensor" %}


## 4. Schritt


*Sensor im Schutzgehäuse anbringen*

Das Schutzgehäuse sorgt dafür, dass der Temperatur- und Luftfeuchtigkeitssensor der Sonne nicht direkt ausgesetzt ist.
Um den Sensor im Gehäuse zu installieren, muss zunächst das Loch auf der Unterseite des Gehäuses erweitert werden, da dieser ansonsten nicht dort durch passt.

Jetzt kannst du den Sensor mit 2 Plastikstiften (siehe Foto) oder Kabelbindern an dem kleinen Gerüst anbringen.
Mit dem Zubehör kannst du das Gehäuse nun da befestigen, wo du möchtest. 

<div class="box_warning">
    <i class="fa fa-exclamation-circle fa-fw" aria-hidden="true" style="color: #f0ad4e"></i>
    Achte darauf, dass der Sensor dabei nach oben zeigt! 
</div>

{% include image_small.html image=page.image2 caption="Anbringen des Temperatur und Luftfeuchtigkeitssensor im Strahlenschutzegehäuse" %}



# Zusätzliche Komponenten  (optional)
 
In diesen Schritten wird die gezeigt, wie du die anderen Sensoren anschließt. Je nachdem wie deine Konfiguration ist kannst du einige Schritte überspringen. 

## 5. Schritt



Wenn du noch weitere Sensoren anschließen willst, bringst du zunächst die dafür vorhergesehenen Kabel auf den 12C/Wire Anschlüssen an. Wenn du einen Feinstaubsensor hast, steckst du das Kabel dafür zunächst durch das Gewinde. Anschließend  schließt das andere Ende des Kabels auf dem UART/Serial Port 1 an. 
Jetzt drückst du 4 Plastikstifte in die äußeren Löcher vom MCU.



![Anschluss der Kabel für 3 Standartsensoren und Feinstaubsensor](../../../pictures/allesensoren.jpeg)


## 6. Schritt

Als nächstes nimmst du dir das Plexiglas und entfernst die Folie.
Jetzt steckst du die Kabel jeweils durch das mittlere Loch in den Reihen, wo sich 3 Löcher befinden.
Platziere jetzt jeweils 2 Plastikstifte für einen Sensor und den kleinen Löchern so, das die Sensoren mittig auf dem Plexiglas angebracht werden können. **Dies ist vor allem wichtig für den UV Sensor!**



![Anschluss der Sensoren auf dem Plexiglas](../../../pictures/plexi.jpeg)


## 7. Schritt 

*Installation des Feinstaubsensors*



![Komponenten vom Feinstaubsensor](../../../pictures/komposFein.jpeg)

- Feinstaubsensor
- Gehäuse
- 2 M16 Gewinde
- Kabel
- Kunststoffröhre





Beim Anschluss vom Feinstaubsensor musst folgendermaßen vorgehen:
Löse zunächst die Kappe und dann die Gummidichtung im Gewinde. 
Jetzt kannst du das Kabel vom Sensor nacheinander durch die gerade gelösten Komponenten stecken. 
Stecke das Kabel jetzt durch das Loch im Gehäuse und verbinde es mit dem Sensor.



<div class="box_warning">
    <i class="fa fa-exclamation-circle fa-fw" aria-hidden="true" style="color: #f0ad4e"></i>
An dieser Stelle solltest du das Gewinde noch nicht fest drehen!
</div>


![Vorgehen zum Anschluss des Kabels vom Feinstaubsensor](../../../pictures/anschlussfein.jpeg)



Stecke jetzt die Kunststoffröhre auf den Eingang vom Feinstaubsensor und dann durch das andere Loch im Gehäuse. 
Nun kannst du die Gewinde auf beiden Seiten des Gehäuses fest drehen und den Deckel auf dem Gehäuse befestigen. 

![Fertiger Anschluss Feinstaubsensor](../../../pictures/feinstaub.jpeg)



## Fertiger Aufbau der senseBox:home mit Temperatur-, Luftfeuchtigkeit, Feinstaub-, UV- und Luftdrucksensor



![Fertiger Anschluss Feinstaubsensor](../../../pictures/aufbaufertig.jpeg)



Registrierung auf der openSenseMap {#head}
============

Die openSenseMap ist eine offen Sensorplattform zum Teilen, Anzeigen und Auswerten von Daten. Unter [www.opensensemap.org](https://www.opensensemap.org) kannst du dir die Messdaten von tausenden Sensorstationen ansehen, die überall auf der Welt aufgstellt wurden.

Ein Video erklärt dir schnell und einfach wie du deine senseBox:home auf der [openSenseMap](https://www.opensensemap.org) registrieren kannst.

<iframe width="640" height="480" src="https://www.youtube-nocookie.com/embed/LtGrribDAho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 1. Anlegen eines Benutzeraccount
Um das Verwalten der senseBox zu erleichtert wird diese mit einem Benutzeraccount verknüpft. Für einen Benutzeraccount brauchst du eine gültige Email-Adresse und selbstgewähltes Passwort. Gehe auf [https://opensensemap.org](https://opensensemap.org) und erstelle dir einen neuen Benutzeraccount. 

{% include image.html image=page.image1 %}

## 2. Eine neue senseBox anlegen
Nach der erfolgreichen Registrierung kannst du damit beginnen deine senseBox anzulegen. Dafür klicke auf "New senseBox / Neue senseBox" in deinem Menü und bestätige die Nutzungsbedingungen. Anschließend startet die eigentliche Registrierung. Während der Registrierung 

1. Einen frei wählbaren Namen der senseBox
2. Wähle den Standort an dem die senseBox aufgestellt wird. Ein mobiler Standort sollte nur dann ausgewählt werden, wenn die senseBox mit einem GPS Modul verbunden wird!
  - drinnen
  - draußen
  - mobil
   
3. Den Ort (Location), an dem du deine senseBox aufstellen möchtest (du kannst deinen Standort auch automatisch bestimmen lassen). Wenn du einen mobile Standort ausgewählt hast wird der Standort sich anhand der gesendeten Daten immer wieder verändern. 

Da die openSenseMap offen für alle Arten von senseBoxen ist, wirst du nach der verwendeten Hardware gefragt. Wähle *senseBox:home V2* und das Datenübertragungsmodul (Bee - Wifi, Ethernet oder LoRa), welches du verwendest.

![Auswahl von senseBox:home V2 MCU und WiFi Internetverbindung](../../../pictures/Select_hardware.PNG)

<div class="box_info">
    <i class="fa fa-info fa-fw" aria-hidden="true" style="color: #42acf3;"></i>
  Du bist dir nicht sicher ob du ein Ethernet oder WiFi-Bee hast, oder kannst den Unterschied zwischen dem Luftdruck und Temperatursensor nicht erkennen? Im Kapitel <a href = "../komponenten/README.md">Komponenten</a> findest du Bilder und weitere Hinweise zu den einzelnen Bauteilen.
</div>

Jetzt hast du es fast geschafft! Noch schnell die Sensoren auswählen, welche du an deine senseBox anschließen wirst. Einfach anklicken und fertig. Falls du einen Feinstaubsensor installieren möchtest, musst du außerdem noch angeben, an welchen Serial-Port du diesen angeschlossen hast. Danach kannst du den Vorgang abschließen.

## 3. Übersicht der Registrierung und Mail erhalten
Wenn du die Registrierung abgeschlossen hast, musst du noch einmal der Veröffentlichung deiner Daten zustimmen. Danach erhälst du eine Summary deiner Registrierung. Dort wird dir deine senseBox ID, deine Sensoren-IDs und der Arduino Code angezeigt (diesen bekommst du zudem noch einmal per E-Mail zugeschickt). 

![Summary der Registrierung. Hier siehst du die IDs deiner senseBox und deiner Sensoren!](../../../pictures/summary.PNG)

Mehr Informationen zur openSenseMap:
[hier](https://sensebox.github.io/books-v2/osem)


Nun hast du die Möglichkeit, ohne jegliche eigenständige Programmierung per Arduino oder Blockly einen passenden Sketch zu 
erhalten, den du anschließend per Drag&Drop auf deine senseBox ziehen kannst. Konfiguriere dazu im grün hinterlegten Feld dein 
WiFi, klicke auf ‚Kompilieren‘ und schon erhältst du eine sketch.bin Datei, die du auf deine senseBox MCU kopieren kannst.

{% include image.html image=page.image3 %}

Damit ist die Registrierung deiner senseBox vollständig abgeschlossen und sie ist nun ein Teil der openSenseMap. 
Nach der Registrierung auf der openSenseMap muss der generierte Programmcode noch auf die senseBox MCU kopiert werden. 

# Anschließen der senseBox MCU an den Computer

Verbinde die senseBox MCU mit dem Computer und bringe diese mit einem Doppelklick auf den roten Resetbutton in den Lernmodus. Wenn die senseBox MCU im Lernmodus ist wird diese in deinem Dateiexplorer wie ein USB Stick mit dem Namen SENSEBOX angezeigt. 

## Kompilieren und herunterladen des Programmcodes

Wenn du die Daten deiner senseBox über WiFi übertragen willst muss die senseBox sich mit deinem WiFi verbinden können. Gib dazu im grün hinterlegten Feld dein WiFi-Zugangsdaten ein (die Daten werden nicht auf dem Server gespeichert), klicke auf ‚Kompilieren‘ und schon erhältst du eine sketch.bin Datei, die du auf deine senseBox MCU kopieren kannst.

{% include image.html image=page.image1 %}

## Kopieren der Programmdatei

Kopiere nun die sketch.bin auf deine senseBox MCU. 

Nachdem die Programmdatei übertragen wurde startet sich die senseBox:home neu und verbindet sich mit deinem WLAN Netzwerk. Wenn eine Verbindung hergestellt wurde kannst du auf der openSenseMap dir die Daten deiner senseBox ansehen.

#### Übertragen mithilfe der Arduino IDE

Willst du Änderungen am Code vornehmen oder deine senseBox um weitere Sensoren erweitern musst du den Programmcode mithilfe der Arduino IDE übertragen. Eine Anleitung zum Installieren und Übertragen eines Programmcodes mit der IDE findest du [hier](/documentation/de/arduino_ide)