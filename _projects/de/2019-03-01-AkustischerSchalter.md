---
layout: project_page
name: "Akustischer Lichtschalter"
date: 2019-03-01
author: Benni
abstract: "Mithilfe des Mikrofons lässt sich ein akustischer Schalter bauen"
image: IntelligenterLichtschalterKlein.png
image1: /images/projects/IntelligenterLichtschalterKlein.png
lang: de
material:
    - Mikrofon (Mic-Breakout)
    - 1x LED
    - 1x 470Ω Widerstand
    - 1x JST-Adapterkabel
    - 2x Steckkabel
ide: arduino    
tags: ["Physik", "Informatik"]
difficult: mittel
---
# Akustischer Lichtschalter

In diesem Projekt wollen wir lernen, wie wir das Mikrofon mit dem Arduino nutzen können, um laute Geräusche zu erkennen. So können wir eine LED akustisch ein- und ausschalten, beispielsweise durch ein Händeklatschen.
 
## Grundlagen 
Das Mikrofon (Mic-Breakout) ist in der Lage Amplituden von Schallwellen wahrzunehmen. Anhand dieser Schallwellen wird eine elektrische Spannung erzeugt und von dem Sensor als Signal an die senseBox weitergegeben. Über die Messwerte des Mikrofons können wir registrieren, ob laute Geräusche zu hören sind. So können wir eine Beleuchtung z.B. in Form einer LED ansteuern. Wie das funktioniert, erfahrt ihr hier!

## Aufbau 
Das Mikrofon wird mit einen JST-Adapterkabel mit der senseBox MCU verbunden. Stecke dazu das JST-Adapterkabel in den Digital/Analog Port A. Das Mikrofon verfügt über drei Pins(GND, VCC und OUT). Das rote Kabel wird mit VCC und das grüne mit OUT verbunden. Das schwarze Kabel des JST-Adapterkabel wird diesmal mit der `-`Spalte des Breadbords verbunden. Die `-`Spalte des Breadbords wird dann über ein Steckkabel Kabel mit dem GND des Mikrofons verbunden. Hierbei stellen wir mit dem schwarzen Kabel einen Minuspol, mit dem roten Kabel die Stromversorgung und mit dem grünen Kabel eine Datenübertragung zum Port 1 her.

Nun wird das längere Ende der LED (Plus-Pol) mit dem 470Ω Widerstand verbunden. Der Widerstand wird am anderen Ende mit dem gelben Kabel des JST-Adapterkabels verbunden. Das kürzere Ende der LED wird mit einem einfachen Male-to-Male Kabel mit der `-`Spalte des Breadbords verbunden.

Steckt den Schaltkries wie ihr ihn unten in der Grafik seht.
{% include image.html image=page.image1 %}

## Programmierung

Im ersten Schritt werden die Messwerte des Mikrofons ausgelesen und im Seriellen Monitor ausgegeben. 

```arduino
#include "SenseBoxMCU.h"

Microphone microphone(1);
double volts;

void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  volts = microphone.getValue();
Serial.println(volts);
}
```
Im nächsten Schritt wird zuerst ein akustischer Alarm entwickelt. Hierbei wird die LED so programmiert, dass sie jedes Mal für 0,5 Sekunden angeht, wenn ein lautes Geräusch zu hören ist. Im darauffolgenden Schritt wird ein akustischer Schalter entwickelt, bei dem die LED angeschaltet wird und solange angeschaltet bleibt, bis erneut ein lautes Geräusch zu hören ist. 

## Der akustische Alarm

Vorab definieren wir den digitalen Port an den wir die LED angeschlossen haben. 
```arduino
int ledPort = 2;
```

Im Setup ergänzen wir eine Zeile, die unseren LED Port als OUTPUT deklariert.

#### setup()-Funktion

```arduino
void setup() 
{
    Serial.begin(9600);

    // +++ NEU +++
    pinMode(ledPort, OUTPUT);
}
```

#### loop()-Funktion
Abließend ergänzen wir unsere loop()-Funktion um eine `if/else`-Bedingung. Dieser bekommt den Messwert unseres Messintervalls übergeben. Falls der Wert der Wert größer/gleich 1.0 Volt ist, schalten wir die LED für 0.5 Sekunden ein und geben im seriellen Monitor ein "Klopf, Klopf" aus, als Zeichen für ein lautes Geräusch. Falls der Wert kleiner als 1 ist schalten wir die LED wieder aus. 


```arduino
void loop()
{
// +++ NEU +++
if (volts >=3.0)
    {
    // schalte die LED ein
    digitalWrite(ledPort, HIGH);
    // warte 0.5 Sekunden
    delay(500);
    Serial.println("Klopf Klopf");
    }
 else
    {
    //schalte die LED aus
    digitalWrite(ledPort, LOW);
    }             
}
```

Du kannst nun die Zahl in der Zeile `if (volts >= 3.0)` bearbeiten um die Sensibilität deiner Anwendung zu variieren.

## Der akustische Schalter

Der akustische Alarm kann nun auch so verändert werden, dass das Mikrofon wie ein Schalter funktioniert. Hierbei wird die LED nicht nur kurz angeschaltet, sondern bleibt so lange an, bis erneut geklascht wird. Um die Funktion eines Schalters einzuprogrammieren wir d eine neue Variable `ledStatus` definiert und zu begin auf false gesetzt. 
```arduino
boolean ledStatus = false;
```

Im Setup bleibt der Code unverändert. 

#### loop()-Funktion
Nun ergänzen wir unsere loop()-Funktion um einen `if`-Block, indem sich ein `if/else`-Block befindet. 
In die Bedingung der ersten `if`-Statements geben wir den Messwert unseres Messintervalls herein. Die `if`-Bedingung überprüft ob der Wert größer/gleich 1.0 Volt ist. 
Falls diese Bedingung erfüllt ist nehmen wir an das das Mikrofon ein lautes Geräusch gemessen hat. Dann schauen wir, ob die LED aktuell eingeschaltet ist, indem wir den ledStatus prüfen. Ist die LED an, schalten wir sie aus. Ist sie ausgeschaltet, dann wird sie eingeschaltet. In beiden Fällen ändern wir noch den Status der LED. 

```arduino
void loop()
{
// +++ NEU +++
if (volts >=3.0)
    {
    if (ledStatus == true)
        {
        // schalte die LED aus
        digitalWrite(ledPort, LOW);
        // setze den Status der LED auf false (aus)
        ledStatus = false;
        // warte 0.5 Sekunden um flackern zu verhindern
        delay(500);
        }
    else 
        {
        // schalte die LED ein
        digitalWrite(ledPort, HIGH);
        // setze den Status der LED auf true (ein)
        ledStatus = true;
        // warte 0.5 Sekunden um flackern zu verhindern
        delay(500);
        }
    }            
}
```
Du kannst nun die Zahl in der Zeile `if (volts >= 3.0)` bearbeiten um die Sensibilität deiner Anwendung zu variieren.


