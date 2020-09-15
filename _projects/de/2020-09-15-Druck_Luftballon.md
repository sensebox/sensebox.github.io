---
layout: project_page  
date: 2020-09-15  
author: Verena
name: "Druck im Luftballon"
abstract: "Beobachte, wie sich der Druck in einem Luftballon verändert" 
image: Titelbild_Druck.png
image0: /images/projects/Druck_Luftballon/Aufbau.png
image1: /images/projects/Druck_Luftballon/Bild0.png
image2: /images/projects/Druck_Luftballon/Bild1.png

material: 
    - senseBox MCU 
    - 1x OLED Display
    - 1x Luftdrucksensor
    - 2x JST-Adapterkabel  
    - 1x Luftballon
    - Draht

ide: blockly
version: ["edu"]    
lang: de 
tags: ["Physik", "Geographie"] 
difficult: leicht

---
# Druck im Luftballon {#head}
Ziel dieses Projektes ist es, dass dich die senseBox und ein Luftabllon dabei unterstützen, das Phänomen Druck näher zu verstehen.  

## Aufbau
Für den Aufbau schließt du das Display mithilfe eines JST-Adapterkabels an einem der fünf I2C/Wire-Anschlüsse an. Dem gleichen Prinzip folgst du, um den Luftdrucksensor anzuschließen. Da dieser jedoch in einem Luftballon platziert werden soll, um dort den Druck zu messen, stecke den Luftdrucksensor inkl. Kabel zuerst in den Luftballon. Dann pustest du diesen auf und wickelst anschließend Draht um den Verschluss, damit keine Luft entweicht. Das dort herausragende JST-Adapterkabel verbindest du dann mit einem der fünf I2C/Wire-Anschlüsse. 

{% include image.html image=page.image0 %}

## Programmierung
### Schritt 1: Display initialisieren
Damit dir der Wert des Luftdrucks auf dem Display angezeigt werden kann, muss dies zuerst im Setup() initialisisert werden. In der Endlosschleife fügst du dann die Blöcke 'Zeige auf dem Display' und 'Schreibe Text/ Zahl' ein. Hier kannst du die Schriftgröße und die Position des Textes auf dem Display anpassen.

{% include image.html image=page.image1 %}


### Schritt 2: Luftdruck messen
Nun hast du im 'Schreibe Text/Zahl'-Block noch ein freies Feld bei 'Wert'. Hier fügst du aus der Katgorie 'Sensoren' den passenden Block für die Messung des Luftdrucks ein. Soll auf dem Display nicht nur der Luftdruck als Zahl, sondern eine Kombination aus Text (z.B. eine Beschriftung) und dem gemessenen Wert erscheinen, so kannst du noch den Block 'Erstelle Text aus' dazwischen einfügen. In einem einfachen Textbaustein benennst du dann das Phänomen, während an zweiter Stelle der Block des Sensors eingebunden wird.    

{% include image.html image=page.image2 %}

Damit ist die Programmieung abgeschlossen und der Luftdruck innerhalb des Luftballons wird nun gemessen. Drücke den Luftballon nun mit deinen Händen zusammen und beobachte, wie sich der Wert auf dem Display verändert. Überlege anschließend, welche Aussage du daraus über das Phänomen 'Luftdruck' folgern kannst. 


---

