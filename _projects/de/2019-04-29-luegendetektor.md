---
layout: project_page
name: "Lügendetektor"
date: 2019-04-29
author: Lennart
abstract: "Es wird ein Lügendetektor gebaut, der die Leitfähigkeit deiner Haut misst."
image: titelbild_luegendetektor.png
material:
    - senseBox MCU
    - OLED-Display
    - JST-Adapterkabel
    - JST-Kabel
    - Steckkabel
    - 470Ω Widerstand
ide: arduino    
lang: de
tags: ["Informatik", "Physik"]
difficult: mittel
version: ["edu"]
---
# Lügendetektor

Ziel dieses Projektes ist es, einen Lügendetektor zu bauen, der die Leitfähigkeit deiner Haut misst. Bei normalen und professionellen Lügendetektoren werden neben der Leitfähigkeit deiner Haut auch dein Atem und dein Puls überwacht. In der Fachsprache wird der Lügendetektor auch Polygraph (Vielschreiber) genannt, was aus Sicht der Wissenschaftler deutlich mehr Sinn ergibt, da dieser nicht über richtig oder falsch entscheidet, sondern die physischen Parameter misst.


## Aufbau

Zunächst wird das Display über das JST Kabel an einen der I2C/Wire Ports angeschlossen. Nun steckst du das JST-Male Kabel in einen Digital Port deiner Wahl. Das schwarze Kabel (GND) findet in diesem Experiment keine Verwendung. Das rote Kabel (5V) steckst du auf dein Breadboard und verlängerst dieses mittels eines Male-Male Kabels, sodass hier ein freies Ende entsteht. Schließe nun eines der beiden übrig gebliebenen Kabel (grün/gelb) ebenfalls an einen freiliegenden Slot des Breadboards an. Über einen Widerstand verbindest du nun das Kabel (grün/gelb) mit einem Male-Male Kabel, sodass du jetzt ein freies Ende hast, welches du in die Hand nehmen kannst. Das Kabel dient als dein Leitfähigkeitssensor.

## Programmierung

### Schritt 1: Auslesen des Sensors

```arduino
int val = 0;        //Teil der Deklaration
int analogPin = A1;

void setup() {
  Serial.begin(9600);
}
void loop() {
  val = analogRead(analogPin); // Analog Pin, welcher ausgelesen wird
  Serial.println(val);
}

```

### Schritt 2: Einbindung des Displays

```arduino
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <senseBoxIO.h>
#include <Plot.h>
const double TIMEFRAME = 15;

#define OLED_RESET 4
Adafruit_SSD1306 display(OLED_RESET);
Plot DataPlot(&display);
void setup() {
  senseBoxIO.powerI2C(true);
  delay(2000);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3D);
  display.display();
  delay(100);
  display.clearDisplay();
  DataPlot.setXLabel("T");
  DataPlot.setYLabel("Lf");
  DataPlot.setXRange(0, 15);
  DataPlot.setYRange(0, 1024);
  DataPlot.setXTick(5);
  DataPlot.setYTick(0);
  DataPlot.setXPrecision(0);
  DataPlot.setYPrecision(0);
}
void loop() {
  DataPlot.clear(); double starttime = millis();
  double t = 0;
  while (t <= TIMEFRAME) {
    t = (millis() - starttime) / 1000.0;
    int value = ... // Was soll ausgegeben werden ?
    DataPlot.addDataPoint(t, value);
  }
  display.display();
  display.clearDisplay();
}
```


## Aufgabe

Nachdem du nun die Grundlage für das Auslesen des Sensors bekommen hast, kannst du jetzt selbst versuchen, diesen mit deinem Display zu verknüpfen, sodass die Werte über einen Graphen dargestellt werden. 

### Lösung
```arduino
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <senseBoxIO.h>
#include <Plot.h>
const double TIMEFRAME = 15;

#define OLED_RESET 4
Adafruit_SSD1306 display(OLED_RESET);
Plot DataPlot(&display);
int val = 0;
int analogPin = A1;

void setup() {
  Serial.begin(9600);
  senseBoxIO.powerI2C(true);
  delay(2000);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3D);
  display.display();
  delay(100);
  display.clearDisplay();
  DataPlot.setXLabel("T");
  DataPlot.setYLabel("Lf");
  DataPlot.setXRange(0, 15);
  DataPlot.setYRange(0, 1024);
  DataPlot.setXTick(5);
  DataPlot.setYTick(0);
  DataPlot.setXPrecision(0);
  DataPlot.setYPrecision(0);
}
void loop() {
  DataPlot.clear(); double starttime = millis();
  double t = 0;
  while (t <= TIMEFRAME) {
    val = analogRead(analogPin);
    int wert = val;
    t = (millis() - starttime) / 1000.0;
    int value = wert / 2;
    DataPlot.addDataPoint(t, value);
    Serial.println(wert);
  }
  display.display();
  Serial.println(val);
  display.clearDisplay();
}
```

<div class="panel panel-info">
  <div class="panel-heading">
    Wie bekomme ich ein Ergebnis?
  </div>
  <div class="panel-body">
Um nun den im Display dargestellen Graphen zu verändern, musst du lediglich die beiden Kabel des Digital Ports jeweils in einer Hand halten. Du solltest eine Veränderung im Display feststellen, wodurch die Leitfähigkeit deiner Haut wiedergespiegelt wird.
  </div>
</div>

<div class="panel panel-info">
  <div class="panel-heading">
    Was bedeutet das Ergebnis?
  </div>
  <div class="panel-body">
Das Ergebnis zeigt, dass deine Haut ein Leiter für Strom ist. Dies wird durch den hohen y-Wert (Lf), welcher im Graphen gezeigt wird, dargestellt.
  </div>
</div>


 