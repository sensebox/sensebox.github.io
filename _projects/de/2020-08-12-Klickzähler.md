---
layout: project_page  
date: 2020-08-15  
author: Verena
name: "Klickzähler"
abstract: "Verwende die senseBox als Klickzähler, um die Anzahl von Personen oder Gegenständen in einem Raum zu erfassen." 
image: Titelbild_Klickzähler.jpg
image0: /images/projects/klickzähler/Bild0.png
image1: /images/projects/klickzähler/Bild1.png
image2: /images/projects/klickzähler/Bild2.png
image3: /images/projects/klickzähler/Bild3.png

material: 
    - senseBox MCU 
    - OLED Display
    - 1x JST-JST Kabel
    - evtl. Powerbank
 
ide: blockly
version: ["edu"]    
lang: de 
tags: ["Informatik", "Mathematik"] 
difficult: leicht

---
# Klickzähler {#head}
Das Ziel dieses Projektes ist es, mithilfe der senseBox die Anzahl von Personen oder Gegenstaänden in einem Raum oder Gebiet zu bestimmen. Bei statistischen Erhebungen musst du somit keine handschriftliche Strichliste mehr führen, sondern kannst die senseBox als Klickzähler verwenden. 

## Aufbau
Damit dir die erfasste Anzahl angezeigt werden kann, benötigst du das Display. Dies schließt du mithilfe eines JST-JST Kables an einem der I2C/Wire-Anschlüsse der senseBox an. 
{% include image.html image=page.image0 %}

## Programmierung
### Schritt 1: Variable definieren
Damit das Display verwendet werden kann, muss dies zuerst im 'Setup()' initialisiert werden. Den dafür vorgesehenen Block findest du unter der Katgorie 'Display'. Zudem solltest du zu Beginn eine Variable definieren, die später dafür eingesetzt wird, die Anzahl der Personen hochzuzählen. Unter der Kategorie 'Variablen' findest du den Block 'Schreibe Element' Diesen fügst du ebenfalls im Setup() ein und setzt den Startwert mithilfe des Blockes 'Zahl' aus der Kategorie 'Mathematik' auf 0. Du kannst die Variable durch einen Klick auf den kleinen Pfeil umbenennen, sodass der Name zu diesem Projekt passt, zum Beispiel zu 'Anzahl'.  

{% include image.html image=page.image1 %}


### Schritt 2: Die 'wenn...mache'-Bedingung
Nun solltest du eine Bedingung aufstellen, die vorgibt, unter welchen Voraussetzungen die Zahl auf dem Display erhöht wird. Um dies zu steuern, eignet sich der graue Button auf dem Mikrocontroller. Mithilfe des 'wenn...mache'-Blocks aus der Katgeorie 'Logik' gibst du der senseBox also vor, dass wenn der Button gedrückt wurde, die zuvor definierte Variable um 1 erhöht wird. Dafür verwendest du Blöcke aus den Katgeorien 'Sensoren' und 'Mathematik'. 

{% include image.html image=page.image2 %}

### Schritt 3: Anzeige auf dem Display
Nun wird bereits die Anzahl erfasst. Damit dir diese aber auch auf dem Display angezeigt wird, solltest du diese Programmierung ebenfalls in Blockly vornehmen. Dafür verwendest du die Blöcke 'Zeige auf dem Display' und 'Schreibe Text/ Zahl'. Letzterer gibt dir die Möglichkeit, die Annzeige zu konfigurieren, beispielsweise indem du die Schriftgröße oder die Position des Textes änderst. Bei 'Wert' fügst du nun den Block 'Erstelle Text aus' ein, damit dir zum einen die Bezeichnung der sich auf dem Display befindenden Zahl und zum anderen die konkrete Zahl auf dem Display angezeigt wird. Du fügst dort also noch einen Textbaustein ein, in dem du einen frei wählbaren Text eintragen kannst, und die Variable, die du bereits definiert hast. Diese wird dann nämlich als Zahl auf dem Display erscheinen und durch einen Klick auf dem Button um 1 erhöht. 

{% include image.html image=page.image3 %}

Damit der Klickzähler nun auch mobil verwendet werden kann, empfiehlt es sich, die senseBox mithilfe einer Powerbank mit Strom zu versorgen. 
Damit hast du das Projekt erfolgreich abgeschlossen und du kannst nun problemlos Zählungen von Personen oder Gegenständen durchführen. 