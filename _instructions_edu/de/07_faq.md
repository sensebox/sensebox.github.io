---
layout: instructions
title: "FAQ zur senseBox:edu"
abstract: "FAQ zur senseBox:edu"
lang: de
image1: /images/instructions_edu/wifi-bee.jpeg
image2: /images/instructions_edu/
---
FAQ zur senseBox:edu
============

Die Android App ist im [Google Play Store](https://play.google.com/store/apps/details?id=de.sensebox.blockly) und über [Fdroid](https://f-droid.org/packages/de.sensebox.blockly/) verfügbar. 
Die App übertrag drathlos den Programmcode auf die senseBox MCU. Um mit der App zu arbeiten muss das WiFi-Bee immer auf den XBEE Steckplatz 1 verbunden sein. 

## Vorbereiten der senseBox MCU

1. Stecke das WiFi Bee auf den XBee Steckplatz 1. 
{% include image.html image=page.image1 %}
2. Um die senseBox OTA fähig zu machen muss zu beginn ein Sketch auf die senseBox geladen werden. Lade dir die vorkompilierte Programmdatei herunter und kopiere diese auf die senseBox MCU. 
<a href="">Download<a/>

3. Verbinde die senseBox MCU mit dem Computer und führe einen Doppelklick auf den roten Resetbutton aus um diese in den Lernmodus zu versetzen. 

##### Kopieren unter Windows
Unter Windows kannst du die heruntergeladene .Bin Datei einfach über den Dateimanager auf die senseBox MCU kopieren.

##### Kopieren unter MacOS
Unter MacOS kannst du zum kopieren der Datei unsere App verwenden, die du <a href="">hier</a> herunterladen kannst. Die App führt dich dann durch den Kopierprozess. 



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




#### Aktivieren des Hotspots 
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



