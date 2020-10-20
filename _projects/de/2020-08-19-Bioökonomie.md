---
layout: project_page  
date: 2020-08-19  
author: Verena
name: "Digital Farming mit der seseBox"
abstract: "Ein Projekt im Rahmen des Wissenschaftsjahres 2020 unter dem Motto 'Bioökonomie'."
image: Titelbild_Biooekonomie.jpg
image0: /images/projects/Bioökonomie/Bild0.png
image1: /images/projects/Bioökonomie/Bild1.png
image2: /images/projects/Bioökonomie/Bild2.png
image3: /images/projects/Bioökonomie/Bild3.png
image4: /images/projects/Bioökonomie/Bild4.png
image5: /images/projects/Bioökonomie/Bild5.png

material: 
    - senseBox MCU 
    - 1x OLED Display
    - 1x Lichtsensor
    - 1x Temperatur- und Luftfeuchtigkeitssensor
    - 1x Bodenfeuchtesensor
    - 1x Piezo
    - 1x JST-Adapterkabel  
    - 4x JST-JST-Kabel

ide: blockly
version: ["edu"]    
lang: de 
tags: ["Geographie", "Informatik"] 
difficult: mittel

---
# Digital Farming {#head}
Das Wissenschaftsjahr 2020 steht unter dem Motto 'Bioökonomie'. Darunter wird eine Wirtschaftsform verstanden, die den Nachhaltigkeitsgedanken berücksichtigt und den Schwerpunkt auf einen schonenden Umgang mit Ressourcen legt. Als intelligentes System kann die senseBox dazu beitragen, indem sie beispielsweise das Pflanzenwachstum überwacht. 

## Aufbau
Mit der senseBox lassen sich besonders gut die abiotischen (unbelebten) Faktoren überprüfen. Zu ihnen zählen Wasser, Licht und Wärme. Um deine senseBox in ein intelligentes Bodenmanagementsystem umzuwandeln, benötigst du also diese Sensoren. Mithilfe der JST-JST-Kabel kannst du sie an die I2C/Wire-Anschlüsse der senseBox MCU anschließen. Für das Piezo verwendest du hingegen das JST-Adapterkabel und verbindest es mit einem der drei Digital-Ports. An einem Digital-Port wird zudem der Bodenfeuchtesensor angeschlossen. Die nachfolgende Abbildung zeigt dir, wie ein Aufbau aussehen könnte. Zur bessern Übersicht wurden hier ausschließlich das OLED-Display, das Piezo sowie ein Sensor angeschlossen. Der Anschluss der weiteren Sensoren verläuft nach dem gleichen Prinzip. 

{% include image.html image=page.image0 %}

## Programmierung

Das Ziel ist nun, die senseBox mit den von dir angeschlossenen Sensoren so zu programmieren, dass bei einer Über- bzw. Unterschreitung eines für die Pflanze vorgesehenen Mittelwertes in einer Kategorie ein individueller Alarmton ausgestoßen sowie auf dem Display angezeigt wird, in welchem Bereich die Werte liegen. 

### Schritt 1: Display initialisieren
Damit das Display verwendet werden kann, muss es zuerst im Setup initialisiert werden. Anschließend können in der Endlosschleife die Blöcke ‚Zeige auf dem Display‘ und ‚Schreibe Text/ Zahl‘ integriert werden. Bei ‚Wert‘ verwendest du dann einen Block aus der Kategorie ‚Sensoren‘. Für welchen Block du dich entscheidest, hängt davon ab, welche Sensoren du angeschlossen hast. Je Sensor wird ein neuer ‚Schreibe Text/ Zahl‘-Block benötigt. 

{% include image.html image=page.image1 %}

### Schritt 2: Werte sinnvoll darstellen
Verwendest du nun mehrere Sensoren und folglich nicht nur einen ‚Schreibe Text/ Zahl‘-Block, so fällt dir bestimmt auf, dass sich die Zeilen überschneiden. Das liegt an den Einstellungen in den Koordinaten, die du auf die Displaygröße von 128 x 64 Pixel anpassen musst. Des Weiteren würden in dem Fall verschiedene Werte angezeigt werden, die du nicht den Umweltphänomenen zuordnen kannst. Daher ist es sinnvoll, aus der Kategorie ‚Text‘ den Block ‚Erstelle Text aus…‘ zu wählen. Verfolgst du diese Hinweise, so werden die Werte geordnet und mit Kennzeichnung ausgegeben.

{% include image.html image=page.image2 %}

### Schritt 3: Die Einführung von Variablen
Zur besseren Übersichtlichkeit führen wir nun Variablen ein. Je Wert, den du mit einem Sensor misst, solltest du eine neue Variable definieren. Dies erfolgt über den Block ‚Schreibe Element‘ aus der Kategorie ‚Variablen‘, welchen du mit dem jeweiligen Block des dazugehörigen Sensors verbinden kannst. Das ‚Element‘ in dem Block kannst du beliebig umbenennen. Da wir in diesem Projekt mehrere Sensoren benutzen, bietet es sich an, statt Buchstaben die Bezeichnung des Messewertes zu verwenden. Du solltest darauf achten, die Variablen immer direkt zu Beginn der Endlosschleife zu definieren. 

{% include image.html image=page.image3 %}

### Schritt 4: Die ‚wenn...mache‘ Bedingung 
Nun kannst du bereits mit der senseBox die Umweltphänomene messen und diese als Variablen definieren. Da das Ziel ist, eine Alarmanlage zu bauen, die dich warnt, falls die Werte abweichen, musst du nun die dafür notwendigen Bedingungen aufstellen. Dafür benötigst du den ‚wenn...mache‘-Block aus der Kategorie ‚Logik‘. Wenn also ein bestimmtes Phänomen einen kritischen Wert über- bzw. unterschreitet, sodass die Pflanze gefährdet werden könnte, wird der Befehl in dem ‚mache‘-Teil des Blockes ausgeführt. An dieser Stelle kannst du die zuvor definierten Variablen verwenden und durch Blöcke aus der Kategorie ‚Mathematik‘ eine Operation (z.B. ‚größer als‘ oder ‚gleich‘) hinzufügen. Sollte sowohl eine Unter- als auch eine Obergrenze des Messwertes in Bezug auf die Schädigung der Pflanze existieren, so kannst du die beiden Möglichkeiten mit einem ‚oder‘ aus der Kategorie ‚Logik‘ verbinden. Trifft dann eine der beiden Bedingungen zu, so wird der festgelegte Befehl innerhalb des ‚mache‘-Blocks ausgeführt. 

{% include image.html image=page.image4 %}

### Schritt 4: Die ‚For-Schleife‘
Jetzt solltest du noch festlegen, welcher Befehl ausgeführt werden soll, falls die ‚wenn‘-Bedingung im Programmdurchlauf als ‚wahr' eingestuft wird. In diesem Fall eignet sich ein dreimaliges Piepen des Piezos. Dieses kannst du mit den Blöcken aus der Kategorie ‚Audio‘ in Verbindung mit kurzen Warteeinheiten aus der Kategorie ‚Zeit‘ hervorrufen. Der Befehl ist in eine ‚For-Schleife‘ eingebettet, d.h. er wird solange wiederholt, wie du es vorgibst.

{% include image.html image=page.image5 %}

Da jede Pflanze unterschiedliche Ansprüche an ihre Umwelt hat, stellt der Programmcode nur ein Beispiel für Grenzwerte in Bezug auf die Temperatur dar. Je nachdem, auf welche Phänomene du dein Bodenmanagementsystem anpassen möchtest, solltest du dich erkundigen, in welchem Bereich sie für deine Pflanze oder dein Getreide das Wachstum fördern. Du könntest den Programmcode zudem erweitern, indem du für jeden Messwert ein anderes Intervall des Alarmtons festlegst, sodass ausschließlich durch das individuelle Piepen erkannt wird, bei welchem Phänomen eine Abweichung vom Mittelwert vorliegt.  


