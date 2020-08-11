---
layout: project_page  
date: 2020-11-08  
author: Björn
name: "Hitzefrei Alarm"
abstract: "Erstelle dein eigenes Messgerät um die Temperatur im Klassenraum zu überwachen." 
image: Titelbild_Hitzefrei.png
image0: /images/projects/Hitzefrei/Aufbau.png
image1: /images/projects/Hitzefrei/1.svg
image2: /images/projects/Hitzefrei/2.svg
image3: /images/projects/Hitzefrei/3.svg

material: 
    - senseBox MCU 
    - OLED Display
    - Temperatur- & Luftfeuchtigkeitssensor (HDC1080)
    - 2x JST-JST Kabel  
    - 1x JST-Adapterkabel
    - 1x 470 Ohm Widerstand
    - LED rot
ide: blockly
version: ["edu"]    
lang: de 
tags: ["Informatik"] 
difficult: einfach

---

## Aufbau
Das Display sowie den Temperatursensor schließt du mithilfe eines JST-JST-Kabels an einem der I2C/Wire Anschlüsse der senseBox MCU an. Um die rote LED anzuschließen, brauchst du das JST-Adapterkabel. Dies verbindest du mit einem der Digital/Analog Ports. Nun besitzt du vier freie Kabel in den Farben Schwarz, Rot, Grün und Gelb. Das schwarze Kabel ist die Erdung (GND) und somit auch der Minuspol des Stromkreises. Das rote Kabel ist der Pluspol, hier herrschen dauerhaft 5 Volt. Mithilfe des grünen und gelben Kabels kann man später bei der Programmierung selbst bestimmen, ob Strom fließt, und wenn, wie viel. Um nun deinen Stromkreis zu vollenden, schließe das schwarze Kabel an den Minuspol der LED (kürzerer Draht) und das grüne oder gelbe Kabel an den Widerstand, der mit dem Pluspol der LED (längerer Draht) verbunden ist. Die folgende Abbildung zeigt dir, wie der Aufbau abschließend aussehen sollte. 

{% include image.html image=page.image0 %}

## Programmierung
### Schritt 1: Die "wenn...mache"-Bedingung
Da du das Display verwendest, ist es zuerst einmal wichtig, dies im Setup() zu initialisieren sowie in der Endlosschleife() anzugeben, was auf dem Display angezeigt werden soll. Die dafür notwendigen Blöcke findest du unter der Kategorie ‚Display‘. Je nach Temperatur, soll auf dem Display etwas anderes angezeigt werden. Daher benötigen wir den ‚wenn…mache‘-Block aus der Kategorie ‚Logik‘. Dieser funktioniert nach dem Prinzip, dass laufend die Bedingung im ‚wenn‘-Teil überprüft wird. Trifft sie zu, so wird das Programm innerhalb des ‚mache‘-Blocks ausgeführt. Trifft sie nicht zu, so wird auf den ‚sonst‘-Teil des Blocks zurückgegriffen. Dieser lässt sich zu dem herkömmlichen ‚wenn…mache‘ Block durch ein Klick auf dem grauen Zahnrädchen hinzufügen. 
Nun musst du dir überlegen, welche Bedingung du aufstellen möchtest, damit der Hitzefrei-Alarm aktiviert wird. Normalerweise darf Hitzefrei bei Temperaturen über 27 Grad erteilt werden, daher brauchst du aus der Kategorie ‚Logik‘ einen Block, der eine Messung mit einer von dir festgelegten Grenze vergleicht. In die linke Seite des Blockes kannst du dann den Temperatur- und Luftfeuchtigkeitssensor einfügen und auf der rechten Seite eine Zahl aus der Kategorie ‚Mathematik‘. Womöglich steht bei dir zwischen den beiden Blöcken jetzt ein Gleichheitszeichen. Durch einen Klick auf den blauen Pfeil kannst du dies jedoch zu einem ‚größer als‘ ändern

{% include image.html image=page.image1 %}


### Schritt 2: Die Ausführung des Befehls

Als nächstes musst du bestimmen, welcher Befehl ausgeführt werden soll, falls die ‚wenn‘-Bedingung zutrifft. Du kannst dir beispielsweise überlegen, dass die eingebaute LED anfangen soll zu leuchten sowie auf dem Display ‚Hitzefrei!‘ angezeigt wird. Dazu wählst du nach dem Block ‚Zeige auf dem Display‘ den Block ‚Schreibe Text/Zahl‘ aus der Kategorie ‚Display‘ aus und gibst bei ‚Wert‘ den Text mithilfe eines Textbausteines ein. Zudem nutzt du den Block ‚LED an digital‘-Block und wählst den Pin ‚D1‘ sowie den Status ‚Ein‘ aus. Falls der Aufbau von dem in der Abbildung abweicht, muss eventuell ein anderer Pin ausgewählt werden. Dieser kann auf der senseBox MCU an der Stelle, an der sich das grüne Kabel befindet, abgelesen werden. Damit die Veränderung nach einer Erhöhung der Temperatur wahrgenommen werden kann, ist es hilfreich, einige Sekunden zu warten, bevor das Display wieder gelöscht wird. Unter der Kategorie ‚Zeit‘ ist der passende Block zu finden. An dieser Stelle ist es hilfreich zu wissen, dass 1000 Millisekunden 1 Sekunde entsprechen. 

{% include image.html image=page.image2 %}

### Schritt 3: Die Alternative
Wie bereits erwähnt, gibt es die Möglichkeit, den ‚wenn…mache‘-Block um ein ‚sonst‘ zu erweitern. Dies ist hilfreich, um die Alternative anzugeben, die ausgeführt werden soll, falls die oben genannte Bedingung nicht erfüllt ist. Du benötigst die gleichen Blöcke wie zuvor, mit dem Unterschied, dass der Status der LED auf ‚Aus‘ gestellt sowie ein anderer Text eingegeben wird.
Mit dem fertigen Programmcode soll somit nun bei Temperaturen über 27°C die LED leuchten und der Display ‚Hitzefrei‘ anzeigen, während bei niedrigeren Temperaturen die LED nicht leuchten und ‚Angenehme Arbeitstemperatur‘ als Text erscheinen soll. 

{% include image.html image=page.image3 %}