---
layout: project_page  
date: 2020-08-15  
author: Verena
name: "LoRaWAN und der Cayenne Payload"
abstract: "Übertrage Daten per LoRa mit dem Cayenne Payload an die openSenseMap." 
image: Titelbild_LoRaWAN-Cayenne.png
image0: /images/projects/LoRaWAN-Cayenne/0.png
image1: /images/projects/LoRaWAN-Cayenne/1.png
image2: /images/projects/LoRaWAN-Cayenne/2.png
image3: /images/projects/LoRaWAN-Cayenne/3.png
image4: /images/projects/LoRaWAN-Cayenne/4.png
image5: /images/projects/LoRaWAN-Cayenne/5.png
image6: /images/projects/LoRaWAN-Cayenne/6.png
image7: /images/projects/LoRaWAN-Cayenne/7.png
image8: /images/projects/LoRaWAN-Cayenne/8.png

material: 
    - senseBox MCU 
    - 1x LoRa-Bee
    - 1x Temperatur- & Luftfeuchtigkeitssensor (HDC1080)
    - 1x JST-JST Kabel  
    - evtl. Powerbank

ide: blockly
version: ["edu"]    
lang: de 
tags: ["Informatik", "IoT"] 
difficult: mittel

---
# Datenübertragung mit dem Cayenne Payload {#head}
Ziel dieses Projektes ist es, ein Umweltphänomen deiner Umgebung mithilfe der senseBox zu messen und die Daten per LoRa zu messen und im The Things Network abzurufen (sowie an die openSenseMap weiterzuleiten).

## Aufbau
Schließe den Temperatur- und Luftfeuchtigkeitssensor mithilfe des JST-Kabels an einem der I2C/Wire-Anschlüsse an deine senseBox MCU an. Platziere zudem das LoRa-Bee auf dem XBEE-Steckplatz 1.  Fall du die senseBox nicht dauerhaft über deinen Laptop mit Strom versorgen möchtest, brauchst du eine zusätzliche mobile Stromquelle, z.B. einen Akku oder eine Powerbank. 

## The Things Network
Um die Vorteile von TTN nutzen zu können, registriere dich auf der Seite thethingsnetwork.org. Wähle anschließend im Dropdown-Menü „Console“ aus und füge eine neue Anwendung hinzu, indem du zuerst „Application“ und anschließend „Add Application“ auswählst. Hier gibst du ausschließlich eine individuelle Application ID an und bestätigst dann deine Eingabe. 
Hast du die Application hinzugefügt, wird dir darauffolgend eine Übersicht über die von dir gewählte Application ID und die Application EUIS geliefert.

{% include image.html image=page.image0 %}

Füge nun zu deiner neuen Application noch einen Device hinzu. Gehe dafür unter der Rubrik „Devices“ auf „register device“. Gib deinem Device eine Device ID. Durch einen Klick auf die geschwungenen Pfeile (“generate”) bei der DeviceEUI erfolgt die Generierung der DeviceEUI automatisch.

{% include image.html image=page.image1 %}

Durch einen Klick auf „Register“ speicherst du deine Eingabe und The Things Network liefert dir eine Übersicht mit der Application ID und der Device ID. 

{% include image.html image=page.image2 %}

Nun hast du bereits erfolgreich eine Application und einen Device hinzugefügt. Möchtest du die Daten nicht nur bei The Things Network, sondern auf einer anderen Plattform abrufen können, so kannst du über dieses Projekt hinaus eine Integration anlegen. Diese Möglichkeit wird dir in der Menüleiste unter ‘Integration’ geboten. 

## OpenSenseMap (BETA)

> Die Weiterleitung der Daten mit dem Cayenne-Payload ist auch an die openSenseMap möglich. Wie du die passenden Einstellungen dafür triffst, wird nun erläutert. Allerdings handelt es sich hierbei um eine BETA-Version, weshalb es zu kleinen Problemen kommen kann. Wählst du also eine andere oder keine Integration, so kannst du dieses Kapitel zur openSenseMap überspringen und mit dem nachfolgenden Kapitel ‚Cayenne LPP‘ weitermachen.

Die Möglichkeit des Hinzufügens der openSenseMap als Integration wird dir in der Menüleiste unter „Integration“ geboten. Klicke auf „Add Integration“ und wähle anschließend den Button „HTTP Integration“ aus. Bestimme auch hier wieder eine individuelle ID und wähle anschließend „default key“ als Access Key aus, „POST“ als Method und füge https://ttn.opensensemap.org/v1.1 als URL ein, sodass die Daten an die openSenseMap weitergeleitet werden. 

{% include image.html image=page.image3 %}

Da die erhobenen Daten auf der openSenseMap als Endpunkt angezeigt werden sollen, muss hier zunächst einmal eine neue senseBox registriert werden. Melde dich dazu auf opensensemap.org an und füge eine neue senseBox hinzu. Wähle dabei das Modell senseBox:edu aus und klicke auf den passenden Sensor und das Umweltphänomen, dass du messen möchtest. Klicke anschließend auf „The Things Network“ und fülle die Felder aus. Verwende als Dekodierungs-Profil ‚Cayenne LPP (beta)‘ sowie die Application ID und die Device ID, die du zuvor benannt hast, denn nur so kann eine genaue Zuordnung zwischen der senseBox, der openSenseMap und The Things Network stattfinden. 
Bestätige anschließend deine Eingaben und schon hast du die Registrierung der neuen senseBox auf der openSenseMap abgeschlossen.  

{% include image.html image=page.image4 %}

## Cayenne LPP

Jetzt musst du nur noch vorgeben, wie die Daten decodiert werden sollen. Da wir uns in diesem Projekt für den Cayenne LPP entschieden haben, wähle dieses Format unter dem Menüpunkt „Payload Formats’“ aus. Damit hast du alle nötigen Einstellungen bei The Things Network getroffen. 

{% include image.html image=page.image5 %}

## Programmierung 
### Schritt 1: LoRa initialisieren
Zuletzt muss noch deine bereits aufgebaute senseBox in das bisherige System eingebunden werden. Dazu bietet sich am besten Blockly an, womit du die senseBox in wenigen Schritten programmieren kannst. Rufe die Seite blockly.sensebox.de auf und wähle die senseBox MCU aus. Damit du die TTN Infrastruktur nutzen kannst, muss diese zuerst im ‘Setup’ initialisiert werden. Nutze dazu den Block ‘Initialize Lora (OTAA)’, den du unter der Kategorie ‘Web/ Lora’ findest. Das Übertragungsintervall kannst du anpassen, aber denke daran, dass die übertragbare Datenmenge begrenzt ist. 

{% include image.html image=page.image6 %}

Füge nun deine TTN EUIs ein und achte dabei auf das richtige Format. Device EUI und Application EUI müssen im lsb-Format genutzt werden. Der AppKey im msb-Format. In der Übersicht bei The Things Network kannst du durch einen Klick auf die Pfeile die Veränderung zum richtigen Format vornehmen und anschließend die passenden Werte kopieren und in Blockly einfügen.

{% include image.html image=page.image7 %}

### Schritt 2: Cayenne Nachricht

Füge anschließend in der ‘Endlosschleife’ den Block ‘Sende als Cayenne Nachricht’ ein und wähle das Umweltphänomen und den passenden Sensor aus der Kategorie ‘Sensoren’ aus. Die Werte werden so automatisch decodiert. Möchtest du mehrere Umweltphänomene gleichzeitig erfassen, so solltest du darauf achten, dass für jedes Phänomen ein neuer Kanal verwendet wird. 

{% include image.html image=page.image8 %}

Kompiliere nun den Sketch und übertrage ihn auf deine senseBox. Damit hast du das Projekt abgeschlossen und kannst nun eigenständig Umweltdaten erheben und sie effizient per LoRa verschicken. Der Abruf erfolgt am schnellsten über die TTN Konsole. Klicke dazu in deiner Application auf den Data Tab und die neusten Nachrichten sollten nach kurzer Zeit auftauchen. Falls keine Nachrichten ankommen, schau nochmal über deine EUIs und dessen Format. Ansonsten könnte es sein, dass in deiner Umgebung kein LoRa Gateway in Reichweite ist.