---
layout: project_page
name: "Bewässerungssystem mit kapazitivem Bodenfeuchtesensor"
date: 2019-10-09
author: Yannick
abstract: "Die senseBox wird in diesem Projekt als Basis für ein erweiterbares Bewässerungssystem auf Basis des SMT50 Bodenfeuchtesensors genutzt. Magnetventile werden an das Steckboard angeschlossen und reagieren auf die Sensorwerte des Sensors."
image: logo_bunt.png
image0: /images/projects/bodenfeuchte/steckplatine_fritzing.png
image1: /images/projects/bodenfeuchte/stepup_loetung.jpg
image2: /images/projects/bodenfeuchte/setup_reallife.jpg
image3: /images/projects/bodenfeuchte/stellschraube.jpg
image4: /images/projects/bodenfeuchte/tupperdose.jpg
material:
    - senseBox MCU mit Steckboard (edu)
    - kapazitiver Bodenfeuchtesensor
    - 12V Magnetventil
    - Aufwärtswandler 5V-->12V (jw. eins pro genutztem Ventil)
    - Gleichrichter (Rectifier Diode)
    - Bipolartransistor (PNP)
    opt.
    - Multimenter  
    - WiFi-Bee
    - VEML6070 (UV-Sensor)
ide: arduino   
lang: de
tags: ["Informatik"]
difficult: sehr schwer
---
# Bewässerungsanlage mit der senseBox

Eine kleine Anwendung für den Hobbygärtner mit der senseBox ist das hier gezeigte Erstellen einer eigenen Bewässerungsanlage, die mithilfe eines Bodenfeuchtesensors bewässert. Zusätzlich zeigen wir dir im zweiten Teil der Anleitung noch, wie man zusätzlich einen Tag/Nacht-Timer integrieren kann, sodass deine Pflanzen z.B. trotz warmer Temperaturen und trockenem Boden in aller gutdeutscher Regelmäßigkeit erst um 18 Uhr gegossen werden.

## Aufbau

Um das Lötgeschicklichkeitsniveau ein wenig herunterzufahren, nutzen wir in diesem Projekt das Steckbrett der senseBox edu um das Magnetventil mit der senseBox zu verbinden. Das Ventil läuft auf 12V, anstatt den von der senseBox bereitgestellten 5V und daher ist es unumgänglich eine Art Spannungswandler zu integrieren, der die Spannung dementsprechend hochschraubt. Dafür gibt es die so genannten Step-Ups, die es für kleines Geld zu kaufen gibt. [Hier](https://www.amazon.de/IZOKEE-Einstellbar-Wandler-MT3608-Converter/dp/B07KW61VYM/ref=pd_sbs_147_2/262-1739313-6769810?_encoding=UTF8&pd_rd_i=B07KW61VYM&pd_rd_r=150b8f4f-df37-464c-bab5-347a5080d6a2&pd_rd_w=tpZV7&pd_rd_wg=taxBv&pf_rd_p=2bb873b2-dca0-436c-97a4-ef5962c1a37a&pf_rd_r=5F7PSC7NPCFCK5XVVAXP&psc=1&refRID=5F7PSC7NPCFCK5XVVAXP) ein Link zu dem, den ich im Projekt benutzt habe.

{% include image.html image=page.image0 %}<br>
Hier im Aufbau ist das gut zu sehen. Der kapazitive Bodenfeuchtesensor, in unserem Fall der truebner SMT50 kann einfach in einen der Digitalports an der senseBox gesteckt werden. Dieser kann die Bodenfeuchte(gelbes Kabel, Pin 2) und Bodentemperatur(grünes Kabel, Pin 1) bestimmen. Letztere lassen wir aber in diesem Projekt außen vor, ausgenommen von einer kleinen Abfrage in der Programmierung, die Bodenfrost feststellt und dahingehend die Bewässerung zunächst "auf Eis legt". 

Der spannenderen Part, was den Aufbau angeht, ist das Ventil mitsamt Spannungswandler, Diode und Transistor. Der Transistor fungiert simplifiziert als Ein-/Aus-Schalter für das Ventil, sodass keine Spannung an das je nach Bauart mehr oder weniger empfindliche Ventil kommen kann, wenn es nicht durch den Programmcode so gewollt ist. Die Diode ist eine Art einseitige Straßensperrung für die Stromleitung. In die Richtung des Steckbretts soll kein Strom "zurückfließen", dafür aber jeglicher Überschuss an den Wandler abgegeben werden.

Zunächst sollten an die In- und Outputs des Spannungswandlers 4 Stecker gelötet werden, sodass dieser in etwa so ausschaut:<br>
{% include image.html image=page.image1 %}

Dann stecken wir nun eine der JST-Kabelpeitschen auf der einen Seite in den Digital-2-Anschluss der senseBox. Das schwarze und das rote Kabel (Ground&5V) kommen an die Inputs des Step-Ups, das grüne Kabel auf das Steckbrett wie in der Abbildung. Ein 4,7k-Widerstand mit dem Farbcodec gelb-lila-rot-gold verbindet den grünen Digitalpin 3 (grünes Kabel) mit dem Transistor und in der FOlge mit dem Magnetventil (pinkes Kabel). Wir legen ein zusätzliches Ground an, das mit der linken Zacke des Transistors verbunden ist, um den Strom aus dem System zu führen.

Als nächsten nehmen wir uns das Ventil vor. Dieses besitzt im Optimalfall 2 Stellschrauben. Das pinke Kabel wird direkt an einer der Stellschrauben befestigt. Auf der anderen Seite schalten wir eine Diode vor, und verbinden dann das orange Kabel mit dem Ventil. Wie das auszusehen hat, seht ihr hier:<br>
{% include image.html image=page.image2 %}

Was noch fehlt ist die 12V-Spannung, die das Ventil zur Funktion benötigt. Dazu wird zunächst die Ausgangs-Spannung an der Stellschraube auf 12V gestellt. Dazu ist ein Multimenter von Vorteil, man kann aber auch über ein [arduino-Skript](http://elektro.turanis.de/html/prj084/index.html) die Spannung einstellen, falls man so ein Gerät nicht zur Hand hat. 

Hier ein Bild, das veranschaulicht, wie man die Stellschraube einstellt:
{% include image.html image=page.image3 %}

Schlussendlich kann man die Technik noch in einem Gehäuse oder einer Tupperdose verstauen um sie vor Witterung oder Treibhauskondeswasser zu schützen. 

Eine Inspiration wie das dann auschaut, seht ihr hier:
{% include image.html image=page.image4 %}

## Programmierung

### Globale Variablen

Als erstes definieren wir die Pin-Belegung wie folgt:
```arduino
int tempPin = 1; // Temperatur-Pin des SMT50 (Digital 1)
int moistPin = 2; // Feuchte-Pin des SMT50 (Digital 2)
int triggerPin = 3; // Trigger fuer das Magnetventil (Digital 3)
```

Um die benötigten Werte festzuhalten, definieren wir:
```arduino
float groundTemp = 0.0; // Temperaturwert
float groundMoist = 0.0; // Feuchtewert
```

Für Abfragen definieren wir noch zwei booleans:
```arduino
boolean triggIrr = false; // Ergibt true, wenn Bewaesserung notwendig
boolean frostyTime = false; // Ergibt true, wenn Bodenfrost 
```

Die folgenden Werte können je nach Pflanzenart oder Form der Bewässerung angepasst werden. 

Für die Demonstration nutze ich eine Cayenne-Chili-Pflanze (~Capsicum annuum). Diese sollten bestenfalls täglich gegossen werden, jedoch sollte Staunässe vermieden werden. Nach ein wenig Probieren kam ich daher auf optimale Bodenfeuchtewerte zwischen 30 und 35 Prozent. 

Die Bewässerungszeit in meinem Setup beträgt 5 Sekunden und es wird eine Minute gewartet, bis erneut getestet wird, ob bewässert werden soll um das absickernde Wasser abzuwarten.
```arduino
float minMoist = 30.0; // Minimales Optimum
float maxMoist = 35.0; // Maximales Optimum
int irrigationTime = 5000; // Bewaesserungszeit
int pufferTime = 60000; // Sickerzeit
```

### Funktionen

Um die Bodenfeuchte zu berechnen, nehme ich die Umrechnungsformel aus dem Datenblatt des SMT50. Solltest du einen anderen kapazitiven Sensor verwenden, passe die Umrechnung dementsprechend an.
```arduino
const int measurements = 50;

void getGroundMoist(){
  float moistureArray[measurements];
  float sensorValueMoisture = 0.0;
  
  for (int i = 0; i < measurements; i++)
  {
    moistureArray[i] = analogRead(moistPin);
  }
  
  for (int i = 0; i < measurements; i++)
  {
    sensorValueMoisture += moistureArray[i];
  }
  
  sensorValueMoisture = (((sensorValueMoisture / measurements) *3.3/1024) *50) / 3; 
  /* 
  Formel zur Umrechnung der Ausgangsspannung U in den volumetrischen Wassergehalt (VWC) in %:
  VWC =  (U * 50) / 3
  */
  groundMoist = sensorValueMoisture;
}
```

Analog dazu kann die Bodentemperatur berechnet werden. Lediglich die Formel wird angepasst:
```arduino
.
.
.
  sensorValueTemperature = ((sensorValueTemperature / measurements * 3.3 / 1024 ) - 0.5 ) * 100;
  /* 
  Formel zur Umrechnung der Ausgangsspannung U in die Temperatur T in Clesius:
  T =  (U - 0,5) * 100
  */
  groundTemp = sensorValueTemperature;
  ```

Als nächstes folgt eine Prüffunktion, die den zuvor gesetzten Wert  `triggIrr` auf true setzt, falls weniger, als `minMoist` gemessen wurde.

```arduino
boolean triggerIrrigation(float minimumMoisture, float maximumMoisture) {
  
  getGroundMoist();

  if (groundMoist > minMoist && groundMoist < maxMoist) {
    triggIrr = false;
  } 
  else if (groundMoist < minMoist) {
    triggIrr = true;
  }
  else if (groundMoist > maxMoist) {
    triggIrr = false;
  }
  return triggIrr;
}
```

Die letzte Funktion ist sehr simpel, sie öffnet lediglich das Ventil und schließt es nach der zuvor festgelegten `irrigationTime` wieder.
```arduino
void openValve() {
  digitalWrite(triggerPin, HIGH);
  delay(irrigationTime);
  digitalWrite(triggerPin, LOW);
}
```

### Setup

Im Setup werden die Pins initialisiert und die Sensor-Pins jeweils auf Input, der Ventil-Pin auf Output gestellt.
```arduino
void setup() { 
  //Sensor-Init
  pinMode(tempPin, INPUT);
  pinMode(moistPin, INPUT);
  pinMode(triggerPin, OUTPUT);
}
```

### Loop

Im Loop wird die Prüffunktion aufgerufen und das Ventil geöffnet, falls `triggIrr` true ausgibt.
```arduino
void loop() {  
  triggerIrrigation(minMoist, maxMoist);
  if (triggIrr = true) {
    openValve();
  }
  delay(pufferTime);
}
```

### (Optional) Getimete Bewässerung mit UV-Sensor oder Uhrzeit via WiFi

Es gibt mehrere Möglichkeiten eine Bewässerung so regelmäßig und zuträglich für das Wachstum der Pflanzen zu gestalten.
Für die eine Art nutzen wir einen weiteren Sensor und zwar den VEML6070. Damit wollen wir den UV-Wert auslesen. Ist dieser niedrig, beziehungsweise tendiert gegen 0,
kann davon ausgegangen werden, dass die Sonne untergegangen ist. Bei manchen Pflanzenarten ist es zuträglich erst zu gießen, sobald diese nicht mehr von
der Sonne beschienen werden. 

Auch eine Regelmäßigkeit kann zuträglich zum optimalen Pflanzenwachstum sein, so nutzen wir die RTC(Real Time Clock) von Arduino, um präzise Gießen zu können.