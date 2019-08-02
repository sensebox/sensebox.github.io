---
layout: project_page
name: "Anleitung zur senseBox App"
date: 2019-01-07
author: Lia
abstract: "Anleitung zur senseBox App"
image: logo_bunt.png
image0: /images/update-go-edu/parts/mcu_sensoren.png

image6: /images/APP/FOTo1_app.png
image7: /images/APP/Bild2.png
image8: /images/APP/Bid3.png
image9: /images/APP/Bild4.png
image10: /images/APP/Bild5.png
material:
    - senseBox App
    - senseBox
    
---
# Projekttemplate
Diese Aneitung erklärt, wie man die sensBox App benutzen kann.
```
{% raw %}
{% include image.html image=page.image6 %}
{% endraw %}
``` 


## Erste Schritte
Lade dir die senseBox App unter folgendem Link herunter:
[(https://play.google.com/store/apps/details?id=de.sensebox.blockly&hl=de "senseBox App") und nehme dir dann deine senseBox.


## Los geht's!

1.	Schaue dir deine senseBox und ihre Bestandteile gut an.
2.	Um die App zu nutzen wirst du das Wifi-Bee und den Hotspot_Scetch brauchen. Den Hotspot-Sketch kannst du dir hier herunterladen: [(Link "OTA_Sketch")
3.	Schaue dir zuerst dein WIFI-Bee an und merke dir die grün umrandete Ziffer, sie wird dir später bei der Identifizierung deiner senseBox helfen.
{% include image.html image=page.image7 %}
{% include image.html image=page.image8 %}
4.  Stecke nun die WiFi-Bee auf den XBEE1 Steckplatz.
Achtung!
Es ist wichtig, dass die WiFi-Bee richtig herum aufgesteckt wird, aber dabei helfen die
Abbildungen auf der Bee und auf der senseBox. Die Markierungen müssen richtig
übereinander liegen.

{% include image.html image=page.image9 %}
{% include image.html image=page.image10 %}
5.  Verbinde nun deine senseBox mit dem Computer.
6.  Lade dir nun die Hotspot.ino.sensebox_mcu.bin Datei herunter (Link) und lade sie auf
deine senseBox.

##### Windows
1.	Tätige einen Doppelklick auf dem Reset-Knopf um alle vorherigen Dateien von deiner senseBox zu löschen
2.	Die senseBox taucht nun auf deinem PC auf
3.	Ziehe nun die Hotspot-Datei auf die senseBox

#### MAC 
1.	Wenn deine senseBox mit dem MAC verbunden ist öffne den Sensebox-Scetch-Uploader ( Link wo man den runterladen kann )
2.	Wähle nun die Hotspot-Datei aus 


#### Nun wirst du die Hotspot-Datei aktivieren. 
1.	Drücke hierzu den grauen Switch-Button.
2.	Halte den grauen Switch-Button gedrückt und drücke einmal auf den roten Reset-Button.
3.	Nun sollte dir auffallen, dass die Lichter auf der senseBox MCU ausgehen. Lasse den grauen Switch-Button erst wieder los, wenn die Lichter auf der senseBox-MCU wieder leuchten.
4.	Ob die Hotspot-Datei aktiviert ist siehst du daran, ob die Lampe über dem Reset-Button blinkt.

Dieses Video kann dir dabei helfen: Link zum Video

[![Hotspot_SCetch_aktivieren](Bild aus dem Video als Linkjpg)](Link zum Video "OTA-Sketch-aktivieren")

## Hat alles funktioniert?

	Wenn alles geklappt hat sollte deine senseBox nun unter den Verfügbaren senseBoxen auftauchen. 
	Hierfür ist die Vierstellige Nummer, die du am Anfang von deiner WIFI-Bee ablesen solltest wichtig, denn das ist die Nummer über die du deine senseBox identifizierst.

1.	Wähle deine senseBox aus.


2.	Nun kannst du dir deinen Code zusammenstellen.

3.	Wenn dein Code fertig ist drücke auf den Knopf in der oberen rechten Ecke

4.	Ein Fenster ploppt auf, welches Dich an ein paar Dinge erinnert. 
5.	Wenn alle Dinge auf deine senseBox zutreffen klicke auf weiter.
6.	Überprüfe nun, ob deine senseBox im Hotspot-Modus ist, wenn ja klicke auf weiter.
7.	Wähle nun deine senseBox aus .

8.	Das Programm wird nun übertragen. 

9.	Führe diese Anleitung von vorne aus, wenn du eine neues Programm auf deine senseBox laden möchtest.

## Viel Spaß mit der senseBox App! 

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
