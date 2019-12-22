---
layout: project_page
name: "Wasserwaage"
date: 2019-12-18
author: Björn 
abstract: "Es wird eine Wasserwaage mit der senseBox programmiert"
image: Wasserwaage/Wasserwaage_title.JPG
image0: /images/projects/Punktefang/Punktefang_Image00.png
image1: /images/projects/Wasserwaage/step_1.png
image2: /images/projects/Wasserwaage/step_2.png
image3: /images/projects/Wasserwaage/Mapping.png
image4: /images/projects/Wasserwaage/Kreis.png
image5: /images/projects/Wasserwaage/step_3.png
imageSolution: /images/projects/Wasserwaage/final.png

material:
    - senseBox MCU
    - JST Adaperkabel
    - OLED-Display
ide: blockly  
lang: de
tags: ["Informatik"]
version: ["edu", "mini"]
difficult: mittel    
---
# senseBox Wasserwaage {#head}

Auf der senseBox ist ein Lagesensor verbaut. Dieser kann messen, ob sie senseBox sich bewegt oder ob sie gerade oder schief liegt. In diesem Projekt machst du dir diesen Sensor zunutze um eine digitale Wasserwaage zu programmieren


## Aufbau 
Der Aufbau für das Projekt ist einfach. Der Beschleunigungssensor ist bereits auf der senseBox MCU aufgelötet und kann direkt genutzt werden. Das Display verbindest du mit dem JST-JST-Kabel mit einem der fünf I2C Ports.

{% include image.html image=page.image0 %}

## Programmierung

### Schritt 1

Im ersten Schritt solltest du dir die Messwerte des Beschleunigungssensors auf dem Display anzeigen lassen.
{% include image.html image=page.image1 %}
Wenn du dir Messwerte auf dem Display anzeigen lassen möchtest funktioniert dies immer gleich. Zuerst muss das Display im Setup() initialisiert werden und anschließend in der Endlosschleife() angegeben werden WAS (Wert) auf dem Display, WIE (Schriftfarbe und Schriftgröße) und WO (Koordinaten) angezeigt werden soll. Bei Messwerten bietet es sich an, diese direkt mit einer Beschriftung zu versehen. Dies geht mit dem "Erstelle Text aus"-Block am einfachsten.
Für die Wasserwaage müssen zwei Messwerte angezeigt werden: Die Neigung in x-Richtung und die Neigung in y-Richtung.

Baue den oben abgebildeten Programmcode nach und übertrage den Code auf deine senseBox MCU. 

### Schritt 2

Wie dir bestimmt aufgefallen ist, halten sich die Werte in einem Wertebereich von -2 bis 2 auf, was keine genauen Aussagen über Lage deiner MCU zulässt. Dies liegt daran, das bei einem Messbereich von 2G die Werte auf ganzzahlige Werte von gerundet werden und so die Nachkommastellen nicht angezeigt werden. Um dieses Problem zu lösen kannst du den Wert einfach mit 100 multiplizieren um so Werte von -200 bis 200 zu erhalten.

{% include image.html image=page.image2 %}

### Schritt 3

Nun da die Werte aussagekräftiger sind, kannst du sie verwenden um eine wirkliche Wasserwaage zu programmieren. Dazu musst du eine "Luftblase" oder einen Punkt programmieren, der sich je nach Ausrichtung deiner MCU bewegt. In der Toolbox findest sich in der Display-Kategorie ein Block um Punkte auf dem Display zeichnen zu lassen. Der Block "Zeichne Punkt" kann verwendet werden, um einen Punkt mit einer bestimmten Größe auf dem Display anzeigen zu lassen.
Um einen Punkt zu zeichnen, müssen drei verschiedene Parameter angegeben werden: die x- und y-Koordinate auf dem Display und der Radius. Der Radius wird in Pixeln angegeben und sollte nicht zu groß sein. In diesem Beispiel wird immer ein Radius von 5 Pixeln verwendet. Das Display hat auf seiner x-Achse 128 und auf der y-Achse 64 Pixel, deine Messwerte des Beschleunigungssensors liegen allerdings zwischen -100 und 100 beim normalen Bewegen der Platine. Damit deine Werte nun sinnvoll zur Steuerung des Punktes eingesetzt werden können, müssen Sie auf den Wertebereich des Displays, also einen x-Wert von 0-128 und einen y-Wert von 0-64, angepasst werden. Dafür hält die Informatik eine praktische Funktion bereit: Das Mapping.
{% include image.html image=page.image3 %}

Um den Punkt mit Hilfe der Ausrichtung zu steuern legst du am besten zwei Variablen an, in denen die verteilten Sensorwerte gespeichert werden. Diese Variablen kannst du dann als x- und y-Koordinaten an den "Zeichne Punkt"-Block anfügen. Wichtig ist, dass der Sensor und das Display unterschiedliche Ausrichtungen haben und deshalb x- und y-Achse im Programm vertauscht werden müssen.
{% include image.html image=page.image5 %}

### Schritt 4

Nun bewegt sich dein Punkt je nach Ausrichtung der MCU. Was jetzt noch fehlt ist ein Kreis um zu erkennen ob die programmierte "Luftblase" wirklich in der Mitte des Displays liegt, die Wasserwaage also gerade liegt. Dazu kannst du mit den Block "Zeichne Punkt" genau in der Mitte des Displays, also bei einem x-Wert von 64 und einem y-Wert von 32 einen Punkt zeichnen. Wichtig ist, dass du das Häckchen bei "ausgefüllt" entfernst. Den Radius kannst du frei wählen, und so die Genauigkeit deiner Wasserwaage anpassen. In unserem Beispiel haben wir einen Radius von 10 gewählt.

{% include image.html image=page.image4 %}

### Fertiger Code
Du kannst dir die Lösung dieses Projektes direkt in Blockly [öffnen](https://blockly.sensebox.de/ardublockly/index.html?board=sensebox-mcu&lang=de&gallery=projects/wasserwaage)