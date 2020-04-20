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

Im April 2020 gibts zwei Updates für Blockly. Zum einem wurde der Code für den Umweltsensor (Bosch BME680) vollständig geändert und zum anderen eine Funktion zum leichten erstellen von Screenshots hinzugefügt. 

## Block für den Umweltsensor (BME680)

Der Code für den Umweltsensor, der auf einem Bosch BME680 basiert, wurde bisher auf Grundlage der Software Bibliothek von Adafruit erstellt. Nachteile waren hier, dass die Sensorwerte nicht alle gleichzeitig abgerufen werden konnten und für die Luftqualität nur der Messwert des Widerstandes des Messelementes zurückgegeben wurde. Durch die Verwendung der [Bosch BSEC Library](https://github.com/BoschSensortec/BSEC-Arduino-library/) kann nun das volle Potential des Sensor genutzt werden. Neben den Messwerten für die Temperatur, Luftfeuchtigkeit und Luftdruck kann nun ein Indoor Airquality Index zurückgegeben werden. Dieser Index liegt im Bereich zwischen 0 und 500 und gibt Auskunft über die Luftqualität in Innenräumen. Zusäztlich können Äquivalente Messwerte für flüchtige organische Verbindungen und CO2 gemessen werden. Hierbei handelt es sich allerdings berechnete Messwerte, die evtl. nicht zu 100% den realen Konzentrationen entsprechen. 

{% include image.html image=page.image1 %}

Alle Messwerte können gleichzeitig ausgelesen werden, da die Temperatur und die Luftfeuchtigkeit als korrigierte Messwerte zurückgegeben werden. Durch die Verwendung der Bosch Softwarebibliothek kalibriert sich der Sensor selbst und ein Kalibrierungswert (zwischen 0 und 3) kann ausgelesen werden. Dieser Wert ist sehr wichtig bei der Betrachtung der Messwerte und sollte immer mit ausgelesen werden. Nur wenn der Kalibrierungswert 3 ist der Sensor vollständig kalibriert und die Messwerte sollten verwendet werden. Eine Ausführliche Beschreibung zur Funktionsweise des Sensors und Bedeutung der Kalibrierungswerte findest du auch [hier](https://docs.google.com/document/d/1RoSpponHep71qok9Q_on9GVQV-JnCTDov1xyAkGQvwk/edit#heading=h.x9czn1gslum6)  


## Screenshots der Blöcke erstellen

Um eigene Projekte zu dokumentieren wurde besteht nun die Möglichkeit die Blöcke aus der Arbeitsfläche direkt als Vektorgrafik (SVG) zu exportieren. Die Screenshots sind so unbegrenzt und ohne Qualitätsverlust vergrößerbar und benötigen deutlich weniger Speicherplatz. Um die Funktion zum Erstellen von Screenshots zu aktivieren wird in der URL der Parameter `svg=true`hinzugefügt. In der Menüleiste taucht dann ein Button zum erstellen der Screenshots auf. 

{% include image.html image=page.image2 %}

