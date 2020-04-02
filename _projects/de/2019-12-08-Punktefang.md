---
layout: project_page  
date: 2019-12-08  
author: Mario
name: "Geh auf Punktefang"
abstract: "Erstelle dein eigenes kleines Spiel mit der senseBox" 
image: Titelbild_Punktefang.jpg
image0: /images/projects/Punktefang/Punktefang_Image00.png
image1: /images/projects/Punktefang/Punktefang_Image01.png
image2: /images/projects/Punktefang/Punktefang_Image02.png
image3: /images/projects/Punktefang/Punktefang_Image03.png
image4: /images/projects/Punktefang/Punktefang_Image04.png
image5: /images/projects/Punktefang/Punktefang_Image05.png
image6: /images/projects/Punktefang/Punktefang_Image06.png
image7: /images/projects/Punktefang/Punktefang_Image07.png
image8: /images/projects/Punktefang/Punktefang_Image08.png
image9: /images/projects/Punktefang/Punktefang_Image09.png
image10: /images/projects/Punktefang/Punktefang_Image10.png
image11: /images/projects/Punktefang/Punktefang_Image11.png
material: 
    - senseBox MCU 
    - OLED Display
    - JST-JST Kabel
ide: blockly
version: ["edu", "mini"]    
lang: de 
tags: ["Informatik"] 
difficult: schwer 

---

*Dieses Projekt ist eines der vielen spannenden Projekte, die auch im [senseBox Buch](https://www.dpunkt.de/buecher/13482/9783864906848-das-sensebox-buch.html) (erschienen im dPunkt Verlag 2019) veröffentlicht wurden.*

# Gehe auf Punktefang
Du kennst bestimmt noch die ersten Computerspiele aus den 80er-Jahren wie zum Beispiel Pong oder Tetris. Auf alten zweifarbigen Fernsehern wurden in 2-D spannende und einfache Spiele erstellt. Einfache grafische Elemente wurden kombiniert mit tollen Spielkonzepten, und es entstanden
Spiele mit Suchtpotenzial.

## Aufbau
Der Aufbau für das Projekt ist relativ einfach, da keine Schaltung auf dem Breadboard erstellt werden muss. Der Beschleunigungssensor ist bereits auf der senseBox MCU aufgelötet und kann direkt genutzt werden. Das Display verbindest du mit dem JST-JST-Kabel mit einem der fünf I2C Ports.

{% include image.html image=page.image0 %}

## Programmierung
Die Programmierung des kleinen Spiels erfolgt schrittweise, da verschiedene Bereiche nacheinander abgedeckt werden müssen. Neben den grafischen Komponenten müssen die Spielsteuerung und das Gewinnprinzip programmiert werden. Diese drei Bereiche werden in den folgenden Schritten erklärt und zusammengefügt.
### Spielsteuerung - der Fänger
Vom Smartphone kennt man die Spielsteuerung über den Bewegungssensor des Handys. Für dieses Spiel soll eine ähnliche Steuerung gebaut werden. Im ersten Schritt ist es wichtig zu verstehen, welche Messwerte der Beschleunigungssensor erfasst und welche drei Bewegungsrichtungen erfasst werden können. Der Beschleunigungssensor kann über den folgenden Block ausgelesen werden:

{% include image.html image=page.image1 %}

Der Block für den Beschleunigungssensor hat zwei Drop-down-Menüs, in denen verschiedene Parameter eingestellt werden können. Im ersten Drop-down-Menü kann die Richtung eingestellt werden, in der die Beschleunigung gemessen werden soll.
Die Beschleunigung kann in x-, y- und z-Richtung gemessen werden.
Zusätzlich kann noch die Gesamtbeschleunigung gemessen werden. Über
das zweite Drop-down-Menü kann der Messbereich eingestellt werden.
Der Messbereich kann in einem Bereich zwischen 2 und 16 g eingestellt
werden.

Um die Messwerte besser verstehen zu können, soll im ersten Schritt der Sensor ausgelesen und alle Messwerte auf dem Display angezeigt werden.

{% include image.html image=page.image2 %}

Übertrage die Blöcke aus Abbildung 14–4 und den Programmcode auf die senseBox MCU.
Die Messwerte des Beschleunigungssensors für die x-, y- und z-Achse
werden dir als g-Kraft angezeigt.
Für das Spiel werden die Beschleunigungswerte auf der x- und y-Achse
verwendet. Mithilfe der Bewegung der senseBox MCU soll ein kleiner
Punkt auf dem Display gesteuert werden. In der Toolbox findest du die
Blöcke für das Display. Der Block `Zeichne Punkt` kann verwendet werden,
um einen Punkt mit einer bestimmten Größe auf dem Display anzeigen zu
lassen.

{% include image.html image=page.image3 %}

Um einen Punkt zu zeichnen, müssen drei verschiedene Parameter angegeben werden: die x- und y-Koordinate auf dem Display und der Radius. Der Radius wird in Pixeln angegeben und sollte nicht zu groß sein. In diesem Beispiel wird immer ein Radius von 3 Pixeln verwendet. Das Display hat auf seiner x-Achse 128 und auf der y-Achse 64 Pixel, die Messwerte des Beschleunigungssensors liegen allerdings zwischen -1 und 1 beim normalen Bewegen der Platine. An dieser Stelle kann eine praktische Funktion aus der Informatik verwendet werden: das Mapping.

Über das Mapping können wir nun einen Punkt auf dem Display anzeigen lassen, der sich je nach Lage der senseBox MCU verschiebt. Beachte hierbei, dass die x-Achse auf dem Display nicht der x-Achse des Beschleunigungssensors
entspricht.

{% include image.html image=page.image5 %}

### Der gejagte Punkt

Die Spielsteuerung ist fertig, jetzt fehlt noch der gejagte Punkt! Dieser Punkt soll an einer zufälligen Position auf dem Display angezeigt und von dem anderen Punkt, der über die Bewegung der MCU gesteuert wird, gefangen werden. Zufallszahlen lassen sich über Blockly sehr einfach erstellen, in der Toolbox unter `Mathematik` befindet sich der Block ganzzahliger Zufallswert zwischen 1 und 100. Für die x-Koordinate muss eine Zahl zwischen 10 und 118 und für die y-Koordinate eine Zahl zwischen 10 und 54 generiert werden. Da es fast unmöglich ist, Punkte zu fangen, die direkt am Displayrand liegen, werden von den Koordinaten jeweils 10 Pixel abgezogen. Die generierten Zufallszahlen speichern wir unter den Variablen `randomX` und `randomY` ab, da diese für das Spiel noch in einem anderen Zusammenhang verwendet werden. Das Erstellen der Zufallszahlen lassen wir zunächst im Setup durchführen, sodass wir einen zufälligen Punkt bekommen und dieser anschließend angezeigt wird.
{% include image.html image=page.image6 %}
{% include image.html image=page.image7 %}

### Das Fangen 
Im aktuellen Programm sollten nun immer zwei Punkte zu sehen sein: Der eine Punkt bewegt sich über die Steuerung der MCU, und der zweite ist bewegungslos. Der nächste Schritt des Programms ist das Fangen. Das Fangen des Punkts lässt sich über eine Wenn-Dann-Bedingung realisieren.Wenn die x- und y-Koordinaten des Punkts, der über die MCU gesteuert wird, gleich den zufällig erstellen Koordinaten sind, wurde der Punkt gefangen.
{% include image.html image=page.image8 %}

Die Wenn-Dann-Bedingung setzt sich aus zwei Bedingungen zusammen, die mit dem logischen UND verknüpft werden. Wenn die Bedingungen erfüllt sind, dann wird das Display gelöscht, und auf dem Display wird angezeigt, dass der Punkt gefangen wurde. Damit das Spiel auch wirklich endet, füge noch den Block `Warte für immer` aus der Kategorie `Zeit` in die Wenn-Dann-Bedingung ein.

### Das Spiel erweitern
Bisher ist das Spiel noch nicht wirklich ausgefeilt. Der zufällige Punkt wird nur einmal erstellt, und das Spiel ist bereits vorbei, wenn der Punkt gefangen wurde. In diesem Schritt wird das Spiel erweitert, sodass es ein Endlosspiel wird. Folgende Schritte müssen dafür durchgeführt werden. Zum einen muss fortlaufend ein neuer Punkt generiert werden, wenn der vorherige Punkt gefangen worden ist.
Damit immer wieder ein neuer Punkt generiert wird, muss das Erstellen
in der Endlosschleife passieren. Anstelle der Anzeige auf dem Display,
dass der Punkt gefangen wurde, werden in der Wenn-Dann-Bedingung
neue Koordinaten erstellt. So wird sichergestellt, dass immer, wenn du
einen Punkt gefangen hast, direkt ein neuer erstellt wird.
{% include image.html image=page.image9 %}
### Spielzeit und Zähler
Ein Spiel ist natürlich erst dann vollständig, wenn es eine Spielzeit und einen Spielstandzähler gibt. Die Spielzeit kann über den Block `Messintervall` erfasst werden, für den Zähler des Spielstands wird eine neue Variable angelegt, die immer um eins hochgezählt wird, wenn die Bedingungen zum Fangen eines Punkts erfüllt wird.
{% include image.html image=page.image10 %}
Den Block zum Anlegen und Hochzählen der Variablen findest du in der Kategorie `Mathematik`. Die Variable wird automatisch angelegt, und du kannst ihr wieder einen Namen geben.
Wenn die Spielzeit abgelaufen ist, werden auf dem Display »Spiel beendet
« und die Anzahl der gefangenen Punkte angezeigt werden.
{% include image.html image=page.image11 %}
Am Ende wird das Programm wieder mit dem Block `Warte für immer` beendet.
Baue den Programmcode der einzelnen Bestandteile zusammen und übertrage
das Programm auf die senseBox MCU. Anschließend kannst du
einen kleinen Wettstreit mit Freunden und der Familie starten, wer die
meisten Punkte fängt.

## Lösung
Du kannst dir die Lösung dieses Projektes direkt in Blockly [öffnen](https://blockly.sensebox.de/ardublockly/index.html?board=sensebox-mcu&gallery=buch/Kapitel_14)


