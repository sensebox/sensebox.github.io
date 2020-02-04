---
layout: project_page
name: "Akustischer Lichtschalter"
date: 2019-03-01
author: Benni
abstract: "Mithilfe des Mikrofons lässt sich ein akustischer Lichtschalter bauen"
image: Titelbild_akustischer_lichtschalter.png
image1: /images/projects/akustischer_schalter/akustischer_lichtschalter_setup.png
lang: de
material:
    - Mikrofon (Mic-Breakout)
    - LED
    - 470Ω Widerstand
    - JST-Adapterkabel
    - Steckkabel
ide: arduino    
version: ["edu"]
tags: ["Physik", "Informatik"]
difficult: mittel
---
# Akustischer Lichtschalter

Ziel dieses Projektes ist es, das Mikrofon in der Arduino-Programmierumgebung zu nutzen, um laute Geräusche zu erkennen. So kann beispielsweise durch ein Händeklatschen eine LED akustisch ein- und ausgeschaltet werden. 
 
## Grundlagen 
Das Mikrofon (Mic-Breakout) ist in der Lage, Amplituden von Schallwellen wahrzunehmen. Anhand dieser Schallwellen wird eine elektrische Spannung erzeugt und von dem Sensor als Signal an die senseBox weitergegeben. Über die Messwerte des Mikrofons kann registriert werden, ob laute Geräusche zu hören sind. So kann eine Beleuchtung, z.B. in Form einer LED, angesteuert werden. 

## Aufbau 
Das Mikrofon wird mit einen JST-Adapterkabel mit der senseBox MCU verbunden. Stecke dazu das JST-Adapterkabel in den Digital/Analog Port A. Das Mikrofon verfügt über drei Pins (GND, VCC und OUT). Das rote Kabel wird mit VCC und das grüne mit OUT verbunden. Das schwarze Kabel des JST-Adapterkabels wird diesmal mit der `-`Spalte des Breadbords verbunden. Die `-`Spalte des Breadbords wird dann über ein Steckkabel mit dem GND des Mikrofons verbunden. Hierbei stellen wir mit dem schwarzen Kabel einen Minuspol, mit dem roten Kabel die Stromversorgung und mit dem grünen Kabel eine Datenübertragung zum Port 1 her.

Nun wird das längere Ende der LED (Plus-Pol) mit dem 470Ω Widerstand verbunden. Der Widerstand wird am anderen Ende mit dem gelben Kabel des JST-Adapterkabels verbunden. Das kürzere Ende der LED wird mit einem einfachen Steckkabel mit der `-`Spalte des Breadbords verbunden.

Stecke den Schaltkreis so, wie du ihn unten in der Grafik siehst.
{% include image.html image=page.image1 %}

## Programmierung

### Schritt 1

Im ersten Schritt werden die Messwerte des Mikrofons ausgelesen und im seriellen Monitor ausgegeben. 

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

### Schritt 2: Der akustische Alarm

Vorab definierst du den digitalen Port, an dem du die LED angeschlossen hast. 
```arduino
int ledPort = 2;
```

Im Setup ergänzt du eine Zeile, die den LED Port als OUTPUT deklariert.

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
Abschließend ergänzt du die loop()-Funktion um eine `if/else`-Bedingung. Diese bekommt den Messwert des Messintervalls übergeben. Falls der Wert größer/gleich 1.0 Volt ist, schalte die LED für 0.5 Sekunden ein und gebe im seriellen Monitor ein "Klopf, Klopf" aus, als Zeichen für ein lautes Geräusch. Falls der Wert kleiner als 1 ist, schalte die LED wieder aus. 


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

Du kannst nun die Zahl in der Zeile `if (volts >= 3.0)` bearbeiten, um die Sensibilität deiner Anwendung zu variieren.

### Schritt 3: Der akustische Schalter

Der akustische Alarm kann nun auch so verändert werden, dass das Mikrofon wie ein Schalter funktioniert. Hierbei wird die LED nicht nur kurz angeschaltet, sondern bleibt so lange an, bis erneut geklascht wird. Um die Funktion eines Schalters einzuprogrammieren, wird eine neue Variable `ledStatus` definiert und zu Beginn auf false gesetzt. 
```arduino
boolean ledStatus = false;
```

Im Setup bleibt der Code unverändert. 

#### loop()-Funktion
Nun ergänzt du unsere loop()-Funktion um einen `if`-Block, indem sich ein `if/else`-Block befindet. 
In die Bedingung der ersten `if`-Statements geben wir den Messwert unseres Messintervalls ein. Die `if`-Bedingung überprüft, ob der Wert größer/gleich 1.0 Volt ist. 
Falls diese Bedingung erfüllt ist, nimmst du an, dass das Mikrofon ein lautes Geräusch gemessen hat. Dann schaust du, ob die LED aktuell eingeschaltet ist, indem du den ledStatus prüfst. Ist die LED an, schaltest du sie aus. Ist sie ausgeschaltet, dann wird sie eingeschaltet. In beiden Fällen änderst du noch den Status der LED. 

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
Du kannst nun die Zahl in der Zeile `if (volts >= 3.0)` bearbeiten, um die Sensibilität deiner Anwendung zu variieren.


