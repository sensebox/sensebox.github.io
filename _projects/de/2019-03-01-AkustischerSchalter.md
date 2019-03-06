---
layout: project_page
name: "Akustischer Lichtschalter"
date: 2019-03-01
author: Benni
abstract: "Mithilfe des Mikrofons lässt sich ein akustischer Schalter bauen"
image: IntelligenterLichtschalterKlein.png
image1: /images/projects/IntelligenterLichtschalterKlein.png
lang: en
material:
    - Mic-Breakout
    - 1x LED
    - 1x 470Ω Widerstand
    - 1x JST-Adapterkabel
    - 2x Male-to-Male Kabel
ide: arduino    
tags: ["Physik", "Informatik"]
age_tag: mittel
---
# Akustischer Lichtschalter

In diesem Projekt wollen wir lernen, wie wir das Mikrofon mit dem Arduino nutzen können, um laute Geräusche zu erkennen. So können wir eine LED akustisch ein- und ausschalten, beispielsweise durch ein Händeklatschen.
 
## Grundlagen 
Das Mikrofon (Mic-Breakout) ist in der Lage Amplituden von Schallwellen wahrzunehmen. Anhand dieser Schallwellen wird eine elektrische Spannung erzeugt und von dem Sensor als Signal an die senseBox weitergegeben. Über die Messwerte des Mikrofons können wir registrieren, ob laute Geräusche zu hören sind. So können wir eine Beleuchtung z.B. in Form einer LED ansteuern. Wie das funktioniert, erfahrt ihr hier!

## Aufbau 
Ähnlich wie beim Lauschangriff wird das Mikrofon mit einen JST-Adapterkabel mit der senseBox MCU verbunden. Dazu wird das JST-Adapterkabel mit dem Steckplatz Digital A verbunden. Das Mikrofon verfügt über drei Pins(GND, VCC und OUT). Das rote Kabel wird mit VCC und das grüne mit OUT verbunden. Das schwarze Kabel des JST-Adapterkabel wird diesmal mit der `-`Spalte des Breadbords verbunden. Die `-`Spalte des Breadbords wird dann über ein einfaches Male-to-Male Kabel mit dem GND des Mikrofons verbunden. Hierbei stellen wir mit dem schwarzen Kabel einen Minuspol, mit dem roten Kabel die Stromversorgung und mit dem grünen Kabel eine Datenübertragung zum Port 1 her.

Nun wird das längere Ende der LED (Plus-Pol) mit dem 470Ω Widerstand verbunden. Der Widerstand wird am anderen Ende mit dem gelben Kabel des JST-Adapterkabels verbunden. Das kürzere Ende der LED wird mit einem einfachen Male-to-Male Kabel mit der `-`Spalte des Breadbords verbunden.

Steckt den Schaltkries wie ihr ihn unten in der Grafik seht.
{% include image.html image=page.image1 %}

## Programmierung

Das Programm basier auf dem Projekt Lauschangriff und erweitert den dort erstellten Code. Alles was neu hinzukommt in diesem Projekt wird durch einen Kommentar im Code `// +++ NEU +++` gekennzeichnet.

Für die loop()-Funktion habt ihr nun zwei Möglichkeiten: 
1. Wir programmieren die LED so, dass sie jedes Mal für 0.5 Sekunden angeht wenn ein lautes Geräusch zu hören ist - **Der akustische Alarm**
2. Wir programmieren einen Lichtschalter, der bei einem lauten Geräusch die LED ein- bzw. wieder ausschaltet - **Der akustische Lichtschalter**

Beide Programme sind sehr ähnlich, es liegt also bei euch was ihr lieber programmieren wollt!

Vorab definieren wir den digitalen Port an den wir die LED angeschlossen haben. 
```arduino

 /*
 * This code has been adapted from the Electret Mic Breakout Board Hookup Guide by sparkfun
 */

unsigned int micValue;
int micPort = 1;
const int aufnahmeZeitfenster = 100; // Dauer des Messintervalls in ms (100 ms = 10Hz)

// +++ NEU +++
    // Port an dem die LED angeschlossen ist
int ledPort = 2;
```


Im Setup ergänzen wir eine Zeile, die unseren LED Port als OUTPUT deklariert.

### setup()-Funktion

```arduino
void setup() 
{
    Serial.begin(9600);

    // +++ NEU +++
    pinMode(ledPort, OUTPUT);
}
```

### loop()-Funktion
Abließend ergänzen wir unsere loop()-Funktion um einen `if/else`-Block. Dieser bekommt den Messwert unseres Messintervalls übergeben. Falls der Wert der Wert größer/gleich 1.0 Volt ist, schalten wir die LED für 0.5 Sekunden ein und geben im seriellen Monitor ein "Klopf, Klopf" aus, als Zeichen für ein lautes Geräusch. Falls der Wert kleiner als 1 ist schalten wir die LED wieder aus. 


```arduino
void loop()
{
 unsigned long start= millis();  // Start des Messintervalls
 unsigned int peakToPeak = 0;   // Abstand von maximalem zu minimalem Amplitudenausschlag
 unsigned int signalMax = 0;    
 unsigned int signalMin = 1024;

 // Sammle Daten für 100 Millisekunden
 while (millis() - start < aufnahmeZeitfenster)
    {
    micValue = analogRead(micPort);
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
 double volts = (peakToPeak * 3.3) / 1024;  // wandle in Volt um


Serial.print(volts);         
Serial.println(" Volt");  

// +++ NEU +++
if (volts >=1.0)
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

Du kannst nun die Zahl in der Zeile `if (volts >= 1.0)` bearbeiten um die Sensibilität deiner Anwendung zu variieren.


Vorab definieren wir den digitalen Port an den wir die LED angeschlossen haben und setzen den Status der LED auf false (aus). 
```arduino
/*  
 * This code has been adapted from the
 * Example Sound Level Sketch for the Adafruit Microphone Amplifier 
 */

unsigned int micValue;
int micPort = 1;
const int aufnahmeZeitfenster = 100; // Dauer des Messintervalls in ms (100 ms = 10Hz)

// +++ NEU +++
    // Port an dem die LED angeschlossen ist
int ledPort = 2;
    // Status der LED 
boolean ledStatus = false;
```


Im Setup ergänzen wir eine Zeile, die unseren LED Port als OUTPUT deklariert.

### setup()-Funktion

```arduino
void setup() 
{
    Serial.begin(9600);

    // +++ NEU +++
    pinMode(ledPort, OUTPUT);
}
```

### loop()-Funktion
Nun ergänzen wir unsere loop()-Funktion um einen `if`-Block, indem sich ein `if/else`-Block befindet. 
In die Bedingung der ersten `if`-Statements geben wir den Messwert unseres Messintervalls herein. Die `if`-Bedingung überprüft ob der Wert größer/gleich 1.0 Volt ist. 
Falls diese Bedingung erfüllt ist nehmen wir an das das Mikrofon ein lautes Geräusch gemessen hat. Dann schauen wir, ob die LED aktuell eingeschaltet ist, indem wir den ledStatus prüfen. Ist die LED an, schalten wir sie aus. Ist sie ausgeschaltet, dann wird sie eingeschaltet. In beiden Fällen ändern wir noch den Status der LED. 


```arduino
void loop()
{
 unsigned long start= millis();  // Start des Messintervalls
 unsigned int peakToPeak = 0;   // Abstand von maximalem zu minimalem Amplitudenausschlag
 unsigned int signalMax = 0;    
 unsigned int signalMin = 1024;

 // Sammle Daten für 100 Millisekunden
 while (millis() - start < aufnahmeZeitfenster)
    {
    micValue = analogRead(micPort);
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
 double volts = (peakToPeak * 3.3) / 1024;  // wandle in Volt um


Serial.print(volts);         
Serial.println(" Volt");  

// +++ NEU +++
if (volts >=1.0)
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

Du kannst nun die Zahl in der Zeile `if (volts >= 1.0)` bearbeiten um die Sensibilität deiner Anwendung zu variieren.


