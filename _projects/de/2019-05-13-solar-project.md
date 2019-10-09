---
layout: project_page
name: "Solarstation mit Akkuanzeige"
date: 2019-05-13
author: Yannick
abstract: "Die solarbetriebene Messstation wird durch eine Akkuanzeige erweitert"
image: logo_bunt.png
image0: /images/projects/parts/mcu_sensoren.png
image1: /images/projects/sensor_display/Helligkeit_Display_Skizze_0.png
image2: /images/projects/sensor_display/Helligkeit_Display_Skizze_1.png
image3: /images/projects/sensor_display/Helligkeit_Display_Skizze_2.png
image4: /images/projects/sensor_display/Helligkeit_Display_Skizze_3.png
image5: /images/projects/sensor_display/Helligkeit_Display_Skizze_4.png
material:
    - senseBox MCU
    - OLED Display
    - LiPo-Akku 3,7V
    - Solarzelle
    - Powerboost
    - Lichtsensor
ide: arduino   
lang: de
tags: ["Informatik"]
difficult: mittel
---
# Solarstation mit Akkuanzeige

Eine gute Möglichkeit zur Benutzung deiner senseBox in offenem Gelände ist, sie mit einer Solarzelle zu verbinden und mithilfe eines Akkus zu betreiben. Seit neustem bieten wir hier das Komplettset an, die Teile kann man sich aber auch einzeln kaufen.
<br>
In diesem Projekt zeigen wir dir, wie du den oLed-Display verwenden kannst, um die aktuelle Lichteinstrahlung und den Akkustand anzuzeigen. Dazu muss man den Powerboost und den Lichtsensor in Arduino anwählen und die Ausgabe an den Bildschirm weiterleiten.

{% include image.html image=page.image0 %}

## Aufbau

Das MCU kann in diesem Beispiel nach belieben bestückt werden, ausgenommen von dem Lichtsensor, den wir verwenden wollen um die derzeitige Lichteinstrahlung anzuzeigen und dem Display, der die Werte dann anzeigen soll.
{% include image.html image=page.image0 %}

Die Solarzelle und der Akku werden mithilfe des Adafruit Powerboost 1000C an die MCU angeschlossen, wie das aussieht siehst du im folgenden Bild.
{% include image.html image=page.image0 %}

## Programmierung

Um zu starten, kann man sich ein Skript in blockly zusammensetzen oder ein bereits vorhandenes überschreiben. Solltet ihr andere Sensoren, außerhalb des Lichtsensors anschließen wollen, nehmt eines, dass alle eure Sensoren initialisiert und dahin sendet oder dahin ausgibt, wohin ihr das grundlegend wollt. Wichtig nur: Am besten nutzt ihr keine Bildschirmausgaben, da es sonst sein kann, dass der Bildschirm zu voll wird und die hier beschriebenenen Änderungen nicht korrekt angezeigt werden. 
<br>
Um nun den LUX-Wert des Lichtsensors an den Bildschirm zu übergeben, verwendet die folgenden Zeilen im `loop()`:
´´´arduino

´´´´
Nach dem kompilieren, solltet ihr folgendes auf dem Bildschirm ausgegeben bekommen:
{% include image.html image=page.image0 %}
Nun soll auch noch der Akkustand angezeigt werden. Das ist etwas komplizierter, da wir hier eine Platine ansteuern die außerhalb des senseBox-core-Packages liegt und du, falls noch nicht geschehen, zunächst noch das Adafruit pipapo Paket installieren musst. Dort gibt es ein Beispielskript mit dem Namen blablakaka welches schon gut veranschaulicht, wie auf die Platine zugegriffen werden kann. Lies es dir am besten mal durch und schau, ob du verstehst, was vor sich geht. Nun muss man 2 und 2 zusammenzählen und den Eingangs-Pin des Powerboost ansteuern und abfragen. Dieser ist, wenn ihr alles richtig verkabelt habt, mit dem Akku verbunden. Versuchen wir zunächst im seriellen Monitor einen Wert auszugeben zu bekommen. Der Code dazu sieht wie folgt aus:
´´´arduino

´´´
Gut! Man kann nun sehen, dass ein Wert ausgegeben wird, der könnte bei euch aber gut und gerne im 1000er-Bereich liegen. Das liegt daran, dass der Wert die gespeicherten mAh anzeigt. Also keine Prozentwerte, wie es sicher anschaulichsten wäre. Du kannst aber gerne nutzen, was du möchtest. Wenn man nun Prozentwerte nutzen möchte, muss ein Re-Mapping dieser Werte erfolgen, das ist zum Glück in Arduino kein Problem:
´´´arduino

´´´
Zu guter letzt wollen wir noch diesen Wert auf den Bildschirm bringen, dazu nehmen wir den vorherigen Code und fügen ihn im `loop()` ein mit folgenden Ergänzungen:
´´´arduino

´´´