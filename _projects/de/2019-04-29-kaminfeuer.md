---
layout: project_page
name: "Kaminfeuer"
date: 2019-04-29
author: Bernd
abstract: "Es wird ein Kaminfeuer simuliert, indem eine rote LED zum flackern gebracht wird."
image: Titelbild_Kaminfeuer.png
image0: /images/projects/kaminfeuer_setup.png
material:
    - senseBox MSU
    - rote LED
    - 470Ω Widerstand
    - 1x JST-Adapterkabel
ide: arduino    
lang: de
tags: ["Informatik", "Physik"]
difficult: leicht
version: ["edu"]
---
# Kaminfeuer

Ziel dieses Projektes ist es, ein Kaminfeuer zu simulieren. Dazu wird eine rote LED zum flackern gebracht.

## Aufbau

Es wird nur die rote LED mithilfe eines JST-Adapterkabels an die senseBox MCU angeschlossen. Diese wird am langen Beinchen mit einem 470Ω Widerstand mit dem digitalen Port 1 verbunden. Das kurze Beinchen wird mit dem schwarzen Kabel (GND) verbunden.

{% include image.html image=page.image0 %}

## Programmierung

### Schritt 1

In diesem Schritt definierst du die globale Variable und die setup()-Funktion

```arduino

// die LED ist an den digitalen Port 1 angeschlossen
int led = 1;

void setup() {
  // der digitale Port 1 wird als OUTPUT definiert
  // d.h.: es werden Signale herausgeschickt
  pinMode(led, OUTPUT);
}
```
Du speicherst den digitalen Port 1 in einer Variable, damit du dir nur noch den aussagekräftigen Variablennamen merken musst und nicht die Portnummer. Das ist vorallem bei mehreren angeschlossenen LEDs hilfreich.

### Schritt 2: loop()-Funktion

```arduino
void loop() {
  // generiert Zufallswert zwischen 0 und 1000 und speichert ihn in randomDelayAn
  int randomDelayAn = random(1000);
  digitalWrite(led, HIGH);

  // Zufallswert wird eingesetzt, LED bleibt entsprechend lange an (in Millisekunden)
  delay(randomDelayAn);

  // generiert Zufallswert zwischen 0 und 500 und speichert ihn in randomDelayAus
  int randomDelayAus = random(500);
  digitalWrite(led, LOW);

  // Zufallswert wird eingesetzt, LED bleibt entsprechend lange aus (in Millisekunden)
  delay(randomDelayAus);
}
```
Die Funktion random(max) generiert Zufallszahlen von 0 bis max. Falls man ebenfalls ein Minimum angeben will, kann man die Funktion random(min, max) benutzen.

Damit ist die Programmierung abgeschlossen und du hast ein Kaminfeuer durch eine flackernde LED erzeugt. 


