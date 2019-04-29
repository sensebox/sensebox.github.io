---
layout: project_page
name: "Kaminfeuer"
date: 2019-04-29
author: unkown
abstract: "Es soll ein Kaminfeuer simuliert werden. Dazu wird eine rote LED zum flackern gebracht."
image: logo_bunt.png
image0: /images/projects/KaminfeuerKlein.png
material:
    - LED
    - 1x 470Ω Widerstand
    - JST-Adapterkabel
ide: arduino    
lang: de
tags: ["Informatik", "Physik"]
difficult: leicht
---
# Kaminfeuer

Es soll ein Kaminfeuer simuliert werden. Dazu wird eine rote LED zum flackern gebracht.



## Aufbau

Es wird nur die LED angeschlossen. Diese wird am langen Beinchen mit einem 470Ω Widerstand mit dem digitalen Port 1 verbunden. Das kurze Beinchen wird mit GND verbunden.

{% include image.html image=page.image0 %}

## Programmierung

### Schritt 1: Definieren der globalen Variable und setup()-Funktion

```arduino

// die LED ist an den digitalen Port 1 angeschlossen
int led = 1;

void setup() {
  // der digitale Port 1 wird als OUTPUT definiert
  // d.h.: es werden Signale herausgeschickt
  pinMode(led, OUTPUT);
}
```
Wir speichern den digitalen Port 1 in einer Variable, damit wir uns nur noch den aussagekräftigen Variablennamen merken müssen und nicht die Portnummer. Das ist vorallem bei mehreren angeschlossenen LEDs hilfreich.

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
Die Funktion random(max) generiert Zufallszahlen von 0 bis max. Falls man ebenfalls ein Minimum angeben will kann man die Funktion random(min, max) benutzen.


