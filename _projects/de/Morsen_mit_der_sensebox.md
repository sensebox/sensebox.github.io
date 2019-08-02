---
layout: project_page
name: "Morsen mit der senseBox"
date: 2019-07-18
author: Mario
abstract: "Ein tolles Projekt mit der senseBox"
image: logo_bunt.png

image1: /images/projects/kaminfeuer_setup.png
image2: /images/projects/Lampe_ansteuern.jpg

material:
    - senseBox MCU
    - 470Ω Widerstand
    - 1x JST-Adapterkabe
    - LED
ide: blockly    
lang: de
tags: ["Informatik","Physik"]
difficult: leicht
---
# Projekttemplate
Du wirst versuchen mit der senseBox visuelle Signale zu senden. 
Morsen ist ein Verfahren zur Übermittlung von Zeichen. Diese werden dazu in das Morsealphabet umgewandelt. 
Jedes Zeichen wird darin mit Punkten (.) und Strichen (-) geschrieben. Die einzelnen Morsezeichen werden auf dem Papier mit Schrägstrich (/) abgetrennt, das Ende eines Wortes wird zwei Schrägstrichen (//) codiert.
Morsen ist sehr lustig wenn man es kann.
Aber keine Sorge für dieses Projekt musst du keine der bekannten Verschlüsselungen kennen. Du kannst dir auch deine eigene Geheimsprache ausdenken. 


## Aufbau

Bevor du mit dem Aufbau beginnst solltest du dir überlegen, ob du die allgemeine Morseverschlüsselung nutzten willst oder, ob du dir eine eigene Geheimsprache ausdenken möchtest.
Am besten notierst du dir dann die Bedeutung der verschiedenen Zeichen. 
P.S. kurz, kurz, lang beduetet SOS.

Nimm nun deine senseBox MCU in die Hand. Du wirst sehen, dass sie aus einem Steckbrett und den Anschlüssen für die verschiednen Sensoren besteht.
Beide Teile wirst du brauchen um die Lampe an der senseBox snzuschließen. 
Die Lampe kann angeschlossen werden indem das JST-Adapterkabel in den Digital A Port der senseBox gesteckt wird.
***Hinweis:*** *Das JST-Adapterkabel erkennst du daran, dass es einen weißen Stecker und vier Kabel auf der anderen Seite besitzt.*

Stecke die anderen Kabel nun, wie unten auf dem Bild gezeigt auf das Steckbrett.

{% include image.html image=page.image1 %}

***Hinweis:*** *Die Lange Seite ist der Minus und die kurze Seite der Pluspol. Das grüne Kabel wird über den Wiederstand mit der Lampe verbunden.*

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Erklärkasten</h3>
  </div>
  <div class="panel-body">
Mithilfe von Erklärkästen können weitere Informationen angegeben werden.
  </div>
</div>

## Programmierung

Zur Programmierung kannst du Blockly nutzten. Dort findest du den Baustein mit dem du die Lampe ansteuern kannst unter dem Reiter LED.
Wenn du deine Lampe an den DigitalPort A angeschlossen hast solltest du bei Pin: BUILTIN_1 auswählen. 
Wenn die Lampe leuchten soll wähle Status: Ein.

Wenn du die Blöcke in der Loop-Schleife programmierst werden sie immer wieder ausgeführt.

Wenn du möchtest, dass deine Lampe zwischendurch ausgeht musst du einfach den Status zu Aus ändern.
Möchtest du, dass die Lampe für längere Zeit ausgeht solltest du einen Zeitblock der die Lampe warten lässt einbauen.
***Hinweis:*** *Die Zeitblöcke zählen in Milisekunden, 1000 Milisekunden entsprechen einer Sekunden.*

Hier siehst du, wie du eine Lampe programmieren kannst, die nach einer Sekunde immer wieder an und ausgeht.
{% include image.html image=page.image2 %}

## Los geht es!

Überlege dir nun, welche Signale du mit deiner senseBox senden möchtes! Baue alles, wie beschrieben auf, programmiere deine Lampe und teste, ob man deine Lichtsignale erkennen kann.

***Hinweis:*** *Am besten funktioniert diese Technik, wenn es dunkel ist.*

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
