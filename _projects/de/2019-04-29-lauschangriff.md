---
layout: project_page
name: "Lauschangriff"
date: 2019-04-29
author: Benni
abstract: "Laute Geräusche mit der senseBox messen." 
image: Titelbild_Lauschangriff.jpg
image0: /images/projects/lauschangriff_setup.png
material:
    - senseBox MSU
    - Mic-Breakout
    - 1x JST-Adapterkabel
ide: arduino    
lang: de
tags: ["Informatik", "Physik"]
difficult: mittel
version: ["edu"]
---
# Lauschangriff
Ziel dieses Projektes ist es, mit der senseBox laute Geräusche zu erkennen. Dazu wird das Mikrofon benutzt. Es misst den Ausschlag von Schallwellen.

## Grundlagen

Das Mikrofon (Mic-Breakout) benötigt eine Betriebsspannung von 2.7V-5.5V und ist in der Lage, Amplituden von Schallwellen wahrzunehmen. Anhand dieser Schallwellen wird eine elektrische Spannung erzeugt und von dem Sensor als Signal an die senseBox weitergegeben. Wie du dieses elektrische Signal auslesen und in Volt umwandeln kannst, erfährst du hier!

## Aufbau

Das Mikrofon wird mit einen JST-Adapterkabel mit der senseBox MCU verbunden. Dazu wird das JST-Adapterkabel mit dem Steckplatz Digital A verbunden. Es verfügt über drei Pins(GND, VCC und OUT). Das schwarze Kabel wird mit GND verbunden, das rote mit VCC und das grüne mit OUT. Hierbei stellst du mit dem schwarzen Kabel einen Minuspol, mit dem roten Kabel die Stromversorgung und mit dem grünen Kabel eine Datenübertragung zum Port 1 her. 
Stecke den Schaltkreis, wie du ihn unten in der Grafik siehst.

{% include image.html image=page.image0 %}

## Programmierung

### Schritt 1

Zuallererst erstellst du eine Variable, in der die Werte des Mikrofons gespeichert werden. Außerdem definierst du den digitalen Port, an dem das Mikrofon angeschlossen ist und speicherst ein Zeitfenster von 100 Millisekunden als Messintervall.
```arduino
 /*  
 * This code has been adapted from the
 * Example Sound Level Sketch for the Adafruit Microphone Amplifier 
 */

unsigned int micValue; // Variable, um den aktuellen Messwert zu speichern
int micPort = 1;
const int aufnahmeZeitfenster = 100; // Dauer des Messintervalls in ms (100 ms = 10Hz)
```

### Schritt 2

Nun muss die serielle Ausgabe initialisiert werden. Dies geschieht in der `setup()`-Funktion.

```arduino
void setup() 
{
   Serial.begin(9600);
}
```

### Schritt 3

In der `loop()`-Funktion passieren nun mehrere Dinge.
Es werden zuerst vier Variablen erstellt. 
* Die erste legt den Startpunkt des aktuellen Messintervalls fest und speichert dafür die aktuelle Zeit ab. 
* Die zweite Variable wird erstellt, um dort am Ende des Messintervalls den maximalen Amplitudenausschlag abzuspeichern.
* Die dritte und vierte Variable sind temporäre Zwischenspeicher für die maximale (signalMax) und minimale (signalMin) Amplitude während des Messintervalls.

Nach dem erstellen der Variablen wird eine `while`-Schleife gestartet. Diese wird solange wiederholt, wie das Messintervall (100 ms) läuft.
Innerhalb dieser `while`-Schleife werden mehrere Messungen durchgeführt. Über das Messintervall hinweg werden allerdings nur der maximale und minimale gemessene Wert abgespeichert. Da der Mic-Breakout Sensor Amplituden misst, sind für dich genau diese Werte von Interesse, denn du willst wissen, wie "laut" es innerhalb des Messintervalls war, also wie groß der maximale Amplitudenausschlag der Schallwellen war.
Nach der `while`-Schleife wird genau diese maximale Amplitude bestimmt, indem du die minimale Amplitude von der maximalen abziehst.
Diesen Wert wandelst du dann noch in Volt um.
So erhältst du einen Wert, der etwas über die Qualität der Lautstärke aussagt.

```arduino
void loop()
{
 unsigned long start = millis();  // Start des Messintervalls
 unsigned int peakToPeak = 0;   // Abstand von maximalem zu minimalem Amplitudenausschlag
 unsigned int signalMax = 0;    
 unsigned int signalMin = 1024;

 // Sammle Daten für 100 Millisekunden
 while (millis() - start < aufnahmeZeitfenster)
    {
    micValue = analogRead(micPort); // Messe den aktuellen Wert
        if (micValue < 1024)  // sortiere Fehlmessungen aus, deren Werte über dem max Wert 1024 liegen 
        {
            if (micValue > signalMax)
            {
            signalMax = micValue;  // speichere den maximal gemessenen Wert
            }
        else if (micValue < signalMin)
            {
            signalMin = micValue;  // speichere den minimal gemessenen Wert
            }
        }
    }
 peakToPeak = signalMax - signalMin;  // max - min = Abstand von maximalem zu minimalem Amplitudenausschlag
 double volts = (peakToPeak * 5.0) / 1024;  // wandle in Volt um


Serial.print(volts);         
Serial.println(" Volt");          
}
```


Wenn du den gesamten Sketch nun auf deine senseBox:edu hochlädst und den seriellen Monitor öffnest, siehst du dort die Ausgabewerte deines Mic-Breakout Mikrofons.

## Weitere Aufgaben
Jetzt kannst du ausprobieren, welche Geräusche welche Ausschläge verursachen:
* Wie stark ist der Ausschlag bei Gesprächen? 
* Was passiert, wenn du etwas lautes vor das Mikrofon hältst? 
* Und was, wenn du hinein pustest ?

<div class="panel panel-info">
  <div class="panel-heading">
    Weitere Projekte mit dem Mic-Breakout
  </div>
  <div class="panel-body">
<b>Du kannst mit rohen Messwerten nicht viel anfangen oder würdest gerne sehen, wie man das Mikrofon in eine Anwendung einbauen kann?</b> <br>
    Dann schau dir doch unseren akustischen Lichtschalter an. Er basiert auf diesem Projekt und zeigt dir, wie deine senseBox laute Geräusche identifiziert. So kannst du eine LED zum Beispiel durch Händeklatschen ein- und ausschalten.
  </div>
</div>

 