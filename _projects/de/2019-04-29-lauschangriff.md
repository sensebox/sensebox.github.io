---
layout: project_page
name: "Lauschangriff"
date: 2019-04-29
author: Benni
abstract: "In dieser Station wollen wir lernen, wie wir das Mikrofon mit dem Arduino nutzen können."
image: logo_bunt.png
image0: /images/projects/LauschangriffKlein.png
material:
    - Mic-Breakout
ide: arduino    
lang: de
tags: ["Informatik", "Physik"]
difficult: mittel
---
# Lauschangriff

In dieser Station wollen wir lernen, wie wir das Mikrofon mit dem Arduino nutzen können.

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Grundlagen</h3>
  </div>
  <div class="panel-body">
Das Mikrofon (Mic-Breakout) benötigt eine Betriebsspannung von 2.7V-5.5V und ist in der Lage Amplituden von Schallwellen wahrzunehmen. Anhand dieser Schallwellen wird eine elektrische Spannung erzeugt und von dem Sensor als Signal an die senseBox weitergegeben. Wie ihr dieses elektrische Signal auslesen könnt und in Volt umwandeln könnt erfahrt ihr hier!
  </div>
</div>

## Aufbau

Das Mikrofon wird mit einen JST-Adapterkabel mit der senseBox MCU verbunden. Dazu wird das JST-Adapterkabel mit dem Steckplatz Digital A verbunden. Es verfügt über drei Pins(GND, VCC und OUT). Das schwarze Kabel wird mit GND verbunden, das rote mit VCC und das grüne mit OUT. Hierbei stellen wir mit dem schwarzen Kabel einen Minuspol, mit dem roten Kabel die Stromversorgung und mit dem grünen Kabel eine Datenübertragung zum Port 1 her. 
Steckt den Schaltkries wie ihr ihn unten in der Grafik seht.

{% include image.html image=page.image0 %}

## Programmierung

### Schritt 1

Zu allererst erstellen wir eine Variable in der die Werte des Mikrofons gespeichert werden. Außerdem definieren wir den digitale Port an den das Mikrofon angeschlossen ist und speichern ein Zeitfenster von 100 Millisekunden als Messintervall.
```arduino
 /*  
 * This code has been adapted from the
 * Example Sound Level Sketch for the Adafruit Microphone Amplifier 
 */

unsigned int micValue; // Variable um den aktuellen Messwert zu speichern
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

### Schritt 3:

In der `loop()`-Funktion passieren nun mehrere Dinge.
Es werden zuerst vier Variablen erstellt. 
* Die erste legt den Startpunkt des aktuellen Messintervalls fest und speichert dafür die aktuelle Zeit ab. 
* Die zweite Variable wird erstellt um dort am Ende des Messintervalls den maximalen Amplitudenausschlag abzuspeichern.
* Die dritte und vierte Variable sind temporäre Zwischenspeicher für die maximale (signalMax) und minimale (signalMin) Amplitude während des Messintervalls.

Nachdem erstellen der Variablen wird eine `while`-Schleife gestartet, diese wird solange wiederholt wie unser Messintervall (100 ms) läuft.
Innerhalb dieser `while`-Schleife werden mehrere Messungen durchgeführt. Über das Messintervall hinweg werden allerdings nur der maximale und minimale gemessene Wert abgespeichert. Da der Mic-Breakout Sensor Amplituden misst sind für uns genau diese Werte von Interesse, denn wir wollen wissen wie "laut" es innerhalb des Messintervalls war, also wie groß der maximale Amplitudenausschlag der Schallwellen war.
Nach der `while`-Schleife wird genau diese maximale Amplitude bestimmt indem wir die minimale Amplitude von der maximalen abziehen.
Diesen Wert wandeln wir dann noch in Volt um.
So erhalten wir einen Wert der uns etwas über die Qualität der Lautstärke aussagt.

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


Wenn du den gesamten Sketch nun auf deine senseBox:Edu hochlädst und den seriellen Monitor öffnest siehst du dort die Ausgabewerte deines Mic-Breakout Mikrofons.

### Weiter Aufgaben
Jetzt könnt ihr ausprobieren welche Geräusche welche Ausschläge verursachen:
* Wie stark ist der Ausschlag bei Gesprächen ? 
* Was passiert wenn du den etwas lautes vor das Mikrofon hältst ? 
* Und was, wenn du hinein pustest ?

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Weitere Projekte mit dem Mic-Breakout</h3>
  </div>
  <div class="panel-body">
<b>Du kannst mit rohen Messwerten nicht viel anfangen oder würdest gerne sehen wie man das Mikrofon in eine Anwendung einbauen kann?</b> <br>
    Dann schau dir doch unseren Akustischen Lichtschalter an. Er basiert auf diesem Projekt und zeigt dir wie deine senseBox laute Geräusche identifizieren kann. So kannst du eine LED zum Beispiel durch Händeklatschen ein- und ausschalten.
  </div>
</div>

 