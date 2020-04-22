---
layout: post
title: "Blockly Update April 2020"
date: 2020-04-20
author: Mario
abstract: "Überarbeiteter Code für den Umweltsensor (BME680)"
thumbnail: /images/blog_images/blockly_release_april/blockly_april_update.png
image1: /images/blog_images/blockly_release_april/bme_dropdown.png
image2: /images/blog_images/blockly_release_april/screenshot_button.png
lang: de
---
Blockly Update April 2020
============

Im April 2020 gibts zwei Updates für [Blockly](https://blockly.sensebox.de). Zum einem wurde der Code für den Umweltsensor (Bosch BME680) vollständig geändert und zum anderen eine Funktion zum leichten erstellen von Screenshots hinzugefügt. 

## Block für den Umweltsensor (BME680)



Der Code für den Umweltsensor, der auf einem Bosch BME680 basiert und in der [senseBox:mini](https://sensebox.kaufen/product/sensebox-mini) enthalten ist, wurde bisher auf Grundlage der [Software Bibliothek von Adafruit](https://github.com/adafruit/Adafruit_BME680) erstellt. Nachteile waren hier, dass die Sensorwerte nicht alle gleichzeitig abgerufen werden konnten und für die Luftqualität nur der Messwert des Widerstandes des Messelementes zurückgegeben wurde. Durch die Verwendung der [Bosch BSEC Library](https://github.com/BoschSensortec/BSEC-Arduino-library/) kann nun das volle Potential des Sensor genutzt werden. Neben den Messwerten für die Temperatur, Luftfeuchtigkeit und Luftdruck kann nun ein Indoor Airquality Index zurückgegeben werden. Dieser Index liegt im Bereich zwischen 0 und 500 und gibt Auskunft über die Luftqualität in Innenräumen. Zusäztlich können äquivalente Messwerte für flüchtige organische Verbindungen und CO2 gemessen werden. Hierbei handelt es sich allerdings berechnete und korrigierte Messwerte, die evtl. nicht zu 100% den realen Konzentrationen entsprechen. 

{% include image.html image=page.image1 %}

Alle Messwerte können gleichzeitig ausgelesen werden, da die Temperatur und die Luftfeuchtigkeit als korrigierte Messwerte zurückgegeben werden. Durch die Verwendung der Bosch Softwarebibliothek kalibriert sich der Sensor selbst und ein Kalibrierungswert (zwischen 0 und 3) kann ausgelesen werden. Dieser Wert ist sehr wichtig bei der Betrachtung der Messwerte und sollte immer mit ausgelesen werden. Nur wenn der Kalibrierungswert 3 ist, ist der Sensor vollständig kalibriert und die Messwerte sollten verwendet werden. 

Ein Beispielprojekt für die Verwendung des Umweltsensor findest du [hier](/projects/de/2020-04-05-Innenraumluftqualitaet-station).

## Der Kalibrierungswert

Den Status der Kalibrierung kann über den Wert IAQ Accuracy abgelesen werden. Er ist entweder 0, 1, 2 oder 3 und sagt folgendes aus [Quelle](https://community.bosch-sensortec.com/t5/Question-and-answers/What-does-the-IAQ-accuracy-mean-in-BSEC/qaq-p/5935):

IAQ Accuracy = 0 heißt Sensor wird stabilisiert (dauert ca. 25 Minuten) oder dass es eine Zeitüberschreitung gab. 
IAQ Accuracy = 1 heißt die bisheringen Messwerte zeigen zu wenig Unterschiede und können nicht zum Kalibrieren verwendet werden. 
IAQ Accuracy = 2 heißt Sensor wird kalibriert,
IAQ Accuracy = 3 heißt Sensor erfolgreich kalibriert.

Sollte die rote LED neben dem Resetbutton schnell aufblinken ist der Sensor nicht richtig angeschlossen und kann nicht gefunden werden. 

Der IAQ Index ist also nur aussagekräftig bei IAQ Accuracy = 3. Neben dem Wert für IAQ stellt uns BSEC noch CO<sub>2</sub> und VOC äquivalente Werte bereit. Beim verwenden des Sensor sollte immer auch der Kalibrierungswert mit ausgelesen und angezeigt bzw. übertragen werden.

>**Wichtig** Der Kalibrierungsvorgang kann unter Umständen sehr lange dauern (12h und länger), wichtig ist, es das Messgerät während dieser Zeit nicht neuzustarten. Der Kalibrierungswert kann und wird nicht gespeichert und mit einem Neustart muss der Sensor auch neu kalibriert werden. Wird über den langen Zeitraum der Kalibrierungswert 1 angezeigt, kann es helfen die Umgebungsparameter durch stoßartiges Lüften zu verändern oder den Sensor kurz in der Hand zu halten. 


## Screenshots der Blöcke erstellen

Um eigene Projekte zu dokumentieren besteht nun die Möglichkeit die Blöcke aus der Arbeitsfläche direkt als Vektorgrafik (.SVG) zu exportieren. Die Screenshots sind so unbegrenzt und ohne Qualitätsverlust vergrößerbar und benötigen deutlich weniger Speicherplatz. Um die Funktion zum Erstellen von Screenshots zu aktivieren, wird in der URL der Parameter `svg=true`hinzugefügt [Blockly mit aktiviertem Screenshot-Button](https://blockly.sensebox.de/ardublockly/?board=sensebox-mcu&lang=de&svg=true). In der Menüleiste taucht dann ein Button zum Erstellen der Screenshots auf. 

{% include image.html image=page.image2 %}

