---
layout: project_page
name: "Erstelle einen TTN Mapper in unter 10 Minuten"
date: 2020-03-06
author: Felix
abstract: "Mit dem LoRa-Bee und GPS Modul bauen wir einen senseBox TTN Mapper"
image: ttn-mapper-de.png
image1: /images/projects/lora-osem-tago/station_anlegen_ttn.PNG
image2: /images/projects/lora-osem-tago/station_anlegen_ttn_final.PNG
image3: /images/projects/lora-osem-tago/device_anlegen_ttn.PNG
image4: /images/projects/lora-osem-tago/device_anlegen_ttn_overview.PNG
image5: /images/projects/TTN-Mapper/ttn-mapper-integration.png
image6: /images/projects/TTN-Mapper/blockly-activation-de.png
image7: /images/projects/lora-osem-tago/device_overview_right_format.PNG
image8: /images/projects/TTN-Mapper/blockly-gps-de.png
image9: /images/projects/TTN-Mapper/ttn-mapper.png
image10: /images/projects/TTN-Mapper/cayenne.png

material:
    - senseBox MCU
    - 1x JST-Kabel 
    - LoRa-Bee
    - GPS Modul
ide: blockly  
version: ["edu", "mini"]
addons: ["LoRa-Bee"]  
lang: de
tags: ["Geographie", "Informatik", "LoRa", "TTN", "Blockly"]
difficult: medium
---
# senseBox TTN Mapper

Das Ziel ist die Entwicklung eines TTN Mappers mit Hilfe des LoRa Bees und des GPS Moduls. Die Daten werden über das freie [TheThingsNetwork](https://www.thethingsnetwork.org/) zum TTN Mapper übertragen. Der [TTN Mapper](http://ttnmapper.org/) ist eine Karte auf welcher man Orte mit TTN Empfang kartieren kann. Mithilfe der senseBox wollen wir uns an der Platform beteiligen.


## Hardware

<div class="row">
	<div class="post-image">
			<img src="https://sensebox.kaufen/api/public/uploads/1584028489927-TTN-Mapper.png" alt="TTN-Mapper-Shop - Logo" data-zoomable/>
	</div>
</div>

Für das Projekt brauchst du eine senseBox MCU, ein LoRa-Bee sowie ein GPS Modul. Im senseBox Shop gibt es bereits ein fertiges Set: [https://sensebox.kaufen/product/sensebox-ttn-mapper-set](https://sensebox.kaufen/product/sensebox-ttn-mapper-set)

Verbinde das LoRa-Bee mit XBEE1 deiner senseBox MCU. Verbinde außerdem das GPS Modul mit einem I2C Steckplatz.

Zusätzlich brauchst du eine möglichst mobile Stromversorgung. Am einfachsten ist eine USB Powerbank oder ein Akku mit passendem Anschluss für die senseBox MCU.

## Registrierung auf TheThingsNetwork und anlegen einer Application

Besuche die Website [thethingsnetwork.org](https://www.thethingsnetwork.org/) und erstelle dir einen Account. Wenn du eingeloggt bist, gehe auf die [TTN Console](https://console.thethingsnetwork.org/). Dort erstellst du unter "Applications" eine neue Application. Gib dort eine "Application ID" an, welche einzigartig ist. Alle anderen Auswahlmöglichkeiten lässt du unverändert.

{% include image.html image=page.image1 %}

Danach erhälst du eine Übersicht mit der gewählten "Application ID" und die "Application EUIS". 

{% include image.html image=page.image2 %}

Nun musst du in deiner neuen Application noch ein Device hinzufügen. Gehe dafür unter der Rubrik "Devices" auf "register device". Gib deinem Device eine "Device ID". Durch klicken auf die geschlungenen Pfeile ("generate") bei "DeviceEUI" wird dir automatisch einen DeviceEUI generiert.

{% include image.html image=page.image3 %}

Klicke dann auf "Register" und du erhälst folgende Übersicht mit der "Application ID" und der "Device ID".

{% include image.html image=page.image4 %}

Da wir die Daten später an den TTN Mapper senden möchten, musst Du außerdem eine "Integration" hinzufügen. Diese findest du oben in deinem Menü. Klicke darauf und klicke dann gleich auf den Button mit der Aufschrift "Add Integration". Dort hast du dann die Möglichkeit, verschiedenste Integrations hinzuzufügen, um die Daten von TTN an andere Services weiterzuleiten. Wähle dort den "TTN Mapper" aus. Gib nun eine "Process ID" an, die du frei wählen kannst. Gib deine E-Mail Adresse an und gebe einen Experimente Namen an. Du könntest den Experimente Namen auch auslassen, bist dann aber nicht mehr in der Lage deine eigenen Messungen auf dem TTN Mapper zu identifizieren. Klicke dann auf "Add Integration".

{% include image.html image=page.image5 %}

Zuletzt musst du das Payload Format bei TTN auf Cayenne LPP unstellen. Dazu klickst du auf den Reiter Payload Format, wählst dann Cayenne LPP aus und klickst auf "save". Nun entschlüsselt TTN die Nachrichten selbstständig nach der [Cayenne LPP Spezifikation](https://developers.mydevices.com/cayenne/docs/lora/#lora-cayenne-low-power-payload).

{% include image.html image=page.image10 %}

## Blockly 

Öffne Blockly und beginne mit dem Code für deine senseBox MCU. Um die TTN Infrastruktur zu nutzen müssen wir zunächst eine Activation starten. Dazu nutzen wir die OTAA Activation. Je nach Anwendungsfall kannst Du das Übertragungsintervall anpassen. Bitte denke daran, dass TTN unter einer Fair Use Policy läuft. Das bedeutet, dass man seine Übertragungsrate möglichst gering halten sollte. 

{% include image.html image=page.image6 %}

Füge nun deine TTN EUIs ein. Achte darauf, dass Du die Keys im richtigen Format einfügst. "Device EUI" und "Application EUI" müssen im ``lsb`` Format genutzt werden. Der "AppKey" im ``msb`` Format. 

Beim Kopieren der Keys musst du deshalb bei TTN in der Device Overview die Einstellungen wie hier gezeigt vornehmen. Du kannst das Format ändern indem Du auf die Icons am Anfang (<> und ⇆) klickst.

{% include image.html image=page.image7 %}

Es gibt verschiedene Wege LoRa Daten zu versenden. In diesem Fall nutzen wir das Cayenne Low Power Payload (LPP) da es sehr einfach ist und bereits fertiger Code für diesen Anwendungsfall existiert. Von TTN Mapper gibt es aber folgende Informationen zum Cayenne LPP:

> When using the Cayenne LPP data format, the GPS coordinates will be decoded into a different JSON format which is also supported. Cayenne LPP does not contain the GPS accuracy, and therefore this data will be considered as inferior and will carry less weight in calculation of coverage, and will be deleted first during data cleanup. [Quelle](https://www.thethingsnetwork.org/docs/applications/ttnmapper/)

{% include image.html image=page.image8 %}

Wähle den `Sende als Cayenne Nachricht` Block und sende eine Koordinaten Messung. Füge die entsprechenden GPS Blöcke ein. Den Channel brauchst Du nicht zu ändern.

Kompiliere nun den Sketch und lade ihn auf die senseBox MCU. Sie sollte nun auf GPS Daten warten und diese zum TTN übertragen. 

Nun kannst du einen Akku anschließen und den LoRa Empfang in deiner Umgebung messen.

## TTN Mapper

Deinen persönlichen TTN Mapper findest Du unter dem Namen deines Experiments. Öffne

http://ttnmapper.org/experiments/?experiment=EXPERIMENT_NAME

und ersetze EXPERIMENT_NAME mit dem Namen deines Experiments. Es dauert ein bisschen bis die senseBox GPS Daten empfängt. Zwischendurch kannst Du die Seite neu laden um die neuesten Messungen zu sehen.

{% include image.html image=page.image9 %}

## Hilfe

Du kannst in der TTN Konsole nachschauen ob LoRa Daten bei TTN ankommen. Klicke in deiner Application auf den `Data` Tab und die neusten Nachrichten sollten nach kurzer Zeit auftauchen. Falls keine Nachrichten ankommen schau nochmal über deine EUIs und dessen Format. Ansonsten könnte es sein, dass in deiner Umgebung kein LoRa Gateway in Reichweite ist.

Es kann eine Weile dauern bis das GPS Modul Daten empfängt. Manchmal dauert es mehrere Stunden bei der ersten Nutzung. Wurden aber einmal Daten empfangen sollte es beim nächsten mal schneller funktionieren. Die Nutzung einer kleinen Knopfzelle verbessert den GPS Empfang.