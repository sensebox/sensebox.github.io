---
layout: project_page  
date: 2020-12-08  
author: Verena
name: "Kopfrechentrainer"
abstract: "Erstelle deinen eignenen Trainer für Kopfrechenaufgaben" 
image: Titelbild_kopfrechentrainer.jpg
image0: /images/projects/kopfrechentrainer/Bild0.png
image1: /images/projects/kopfrechentrainer/Bild1.png
image2: /images/projects/kopfrechentrainer/Bild2.png
image3: /images/projects/kopfrechentrainer/Bild3.png

material: 
    - senseBox MCU 
    - OLED Display
    - 1x JST-JST Kabel  

ide: blockly
version: ["edu"]    
lang: de 
tags: ["Informatik" "Mathematik"] 
difficult: mittel

---
# Kopfrechentrainer {#head}
Ziel dieses Projektes ist es, mithilfe der senseBox ein Gerät zu bauen, mit dem du deine Fähigkeiten im Kopfrechnen trainieren kannst. Dir werden auf dem Display also beliebige Aufgaben (Addition, Subtraktion, Division & Multiplikation) vorgegeben und kurze Zeit später auch die passende Lösung dazu angezeigt. 


## Aufbau
Für den Aufbau muss lediglich das Display an die senseBox angeschlossen werden. Dies verbindest du mithilfe eines JST-JST Kabels mit einem der I2C/Wire-Anschlüsse.

{% include image.html image=page.image0 %}

## Programmierung
### Schritt 1: Variablen definieren
Da du das Display verwendest, ist es zuerst einmal wichtig, dies im Setup() zu initialisieren. Dafür verwendest du den Block 'Display initialisieren' aus der Kategorie 'Display'. Zudem müssen zwei Variablen definiert werden, die beispielsweise als Faktor in der Multiplikation verwendet werden können. Diese Faktoren kannst du willkürlich bennnen, beispielsweise mit x und y. Je nachdem, in welchem Zahlenbereich du rechenen möchtest, kannst du diesen Bereich nun einschränken. In diesem Beispiel verwenden wir Zufallszahlen zwischen 1 und 100. 

{% include image.html image=page.image1 %}


### Schritt 2: Die 'wenn...mache'-Bedingung
Damit dir laufend neue Aufgaben angezeigt werden, ist es wichtig, eine Schleife zu verwenden. Hier kannst du einstellen, wie viele Aufgaben du insgesamt machen möchtest, zum Beispiels 30 Stück. Als nächstes solltest du festlegen, unter welchen Bedingungen eine Aufgabe angezeigt werden soll. Bei der senseBox bietet sich dafür die Betätigung des grauen Buttons auf dem Mikrocontroller an, der mit 'Switch' gekennzeichnet ist. Wenn also der Button gedrückt wurde, dann soll eine Aufgabe angezeigt werden. Um die Anzeige auf dem Display zu programmieren, verwende die Blöcke 'Zeige auf dem Display' und 'Schreibe Text/ Zahl'aus der Kategorie 'Display'. Hier kannst du die Schriftgröße oder auch die Position der Anzeige verändern. Bei 'Wert' gibst du dann an, welche Art von Aufgabe mithilfe der zuvor definierten Variablen angezeigt werden soll. Dafür verwendest du den Textbaustein 'Erstelle Text aus' und fügst hier die Variablen sowie ein freies Textelement, in das du manuell die Rechenoperation einträgst, ein. Bevor dann das Display wieder gelöscht wird, bestimmst du noch mithilfe des 'Warte'-Blocks aus der Kategorie 'Zeit', wie lange du für die Bearbeitung der Aufgabe brauchst.

{% include image.html image=page.image2 %}

### Schritt 3: Anzeigen der Lösung
Nun wird dir auf dem Display die Aufgabe angezeigt. Damit dir aber auch die Lösung angezeigt wird, musst du der senseBox diesen Befehl geben. Verwende dazu nochmal den Blog 'Zeige auf dem Display'. Statt bei 'Wert' den Text nun mauell zu erstellen, fügst du hier eine mathematische Operation ein. Beispielsweise die Multiplikation mit den beiden Variablen x und y. Damit der Text immer richtig überschrieben wird, folgt hier ebenfalls der Blog 'Display löschen'.  

{% include image.html image=page.image3 %}

Damit bist du fertig und hast das Projekt erfolgreich abgeschlossen! Mit dieser Programmierung wird dir auf dem Display nun eine Aufgabe des großen Einmaleins angezeigt. Die Lösung erscheint nach 10 Sekunden und sobald du auf dem Button drückst, bekommst du eine neue Aufgabe gestellt. 
