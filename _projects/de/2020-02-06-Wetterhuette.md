---
layout: project_page
name: "Wetterhütte für das Thermometer"
date: 2020-02-06
author: Ollys
abstract: "Beim Suchen nach dem idealen Aufstellort der kam die Idee eine altbewährte Wetterhütte zu verwenden, und die Temperatur in 2 Meter Höhe zu messen."
image: wetterhuette.jpg
image0: https://i.imgur.com/DmDOVDj.jpg
image1: https://i.imgur.com/EH8l3ie.jpg
image2: https://i.imgur.com/oDrPwje.jpg
image3: https://i.imgur.com/eYPAxWt.jpg
image4: https://i.imgur.com/xBFTAIs.jpg
image5: https://i.imgur.com/0pZStGW.jpg
image6: https://i.imgur.com/s0UyTWb.jpg
image7: https://i.imgur.com/c2lGr8U.jpg
image8: https://i.imgur.com/WpCDWvU.jpg
image9: https://i.imgur.com/xBbVj43.jpg
image10: https://i.imgur.com/OobmRlg.jpg
image11: https://i.imgur.com/cvCT583.jpg
material:
    - senseBox MCU (Outdoor Case, Netzteil und Kabel, Temperatur & relative Luftfeuchte Sensor,WiFi-Bee)
    - Sensoren (Luftdruck & Temperatur, Beleuchtungsstärke & UV-Strahlung, Feinstaub (PM10 & PM2.5)
    - Wetterhaus (Bausatz roh oder gestrichen)
ide: blockly    
lang: de
addons: Feinstaubsensor #Gib hier an wenn zusätzliche Komponenten verwendet werden
version: ["edu", "mini"]
tags: ["Informatik"]
difficult: leicht #Verwende leicht, mittel, schwer, sehr schwer
---

# Thermometer Hütte für die senseBox {#head}
Die Thermometer Hütte aus Holz nach <a href="https://de.wikipedia.org/wiki/Thermometerh%C3%BCtte">Stevenson</a> ist ein geeigneter  Strahlungsschutz für den Temperatur/Luftfeuchtigkeit Sensor der senseBox.

Lamellierte Gehäusewände und -türe sorgen für eine gute Belüftung und Schutz gegen direkte und reflektierende Sonnenstrahlung. Die Wetterhütte aus Holz wurde für einen optimalen Wärmestrahlungsschutz von innen und aussen weiss lackiert.

[Bezugsquelle Stiftung zur Palme](https://www.globe-swiss.ch/files/Downloads/902/Download/Wetterhausflyer_2017.pdf)

{% include image.html image=page.image0 %}
- benötigtes Kleinmaterial
    - Gerätebuchse IP68 4Pol Distrelec:300-47-767 (3)
    - Kabelstecker IP68 4 Pol Distrelec:300-47-727 (3)
    - Datenkabel ungeschirmt 3x 2x0.25mm² Distrelec:155-73-712
    - I2C-I2C Kabel Watterott: (3)
    - Nova SDS011 senseBox Anschlusskabel - 350mm  Watterott (1)
    - USB-Buchse Panel-Kontakt micro-USB B Distrelec:301-03-704 (1)
    - Druckausgleichselement GR M12x1.5 Distrelec:150-15-938 (1)
    - Kunststoffgehäuse 65x115x40mm hellgrau P Distrelec:300-64-459 (1)
    - Distanzbolzen 20mm 5mm Distrelec: 110-76-305 (4)
    - Senkkopfschrauben M2.5 x 8mm (4)
    - Muttern M2.5 (4)
    - Schrumpfschlauch 2.5 mm

## Aufbau 
Die senseBox MCU Home bietet von sich aus schon eine gute Wetterfestigkeit und kann ohne Modifikationen "Outdoor" verwendet werden. Damit der Luftdurchfluss des PM2.5/10 Sensors gewährleistet ist wird eine zusätzliche Bohrung in das Gehäuse angebracht. Um zu verhindern, dass Insekten das Gehäuse entern wird der Lufteinlass und die Bohrung mit einem Stück Insektengitter geschützt.

Bohren
{% include image.html image=page.image1 %}   

Insektenschutz
Wegen der Servicefreundlichkeit (Austausch einzelner Komponenten im Betrieb) werden die Boxen der einzelnen Sensoren jeweils mit längeren Kabeln und wasserfesten Steckern versehen. 
Im MCU Gehäuse wurde ein wasserdichtes Druckausgleichselement eingebaut und der Helligkeits/UV Sensor wurde in einem eigenen Gehäuse untergebracht.
{% include image.html image=page.image2 %}

UV-Sensor
{% include image.html image=page.image3 %}

4 Pol Stecker löten
{% include image.html image=page.image4 %}

Um Fremdlichteinstreuung beim SDS011 zu vermeiden wurde der durchsichtige Ansaugschlauch mit Isolierband umwickelt. 
{% include image.html image=page.image5 %}

Für Stromversorgung und Wartung (Aufspielen Sketches) wurde eine wasserfeste micro-USB Buchse in das MCU-Gehäuse eingebaut. 
{% include image.html image=page.image6 %}

MCU-Gehäuse
{% include image.html image=page.image7 %}

Druckausgleichselement
{% include image.html image=page.image8 %}

senseBox-MCU
{% include image.html image=page.image9 %}

### Belegung der Buchsen und Stecker 

**M16 Panel Mount Micro USB 2.0 - Type B**

Hier löten wir ein Micro USB Kabel an, praktisch eine Verlängerung zur MCU.

- Pin 1 = 5 Volt (rot)
- Pin 2 = Data - (weiss)
- Pin 3 = Data + (grün)
- Pin 4 = ID (nicht verwendet)
- Pin 5 = GND (schwarz)
- Pin 6 = Shield (Abschirmung)

**4 Pol Gerätebuchse IP68 I2C**

Hier wird ein fertig konfiguriertes I2C Kabel in der Mitte durchgeschnitten und an die Buchse angelötet, die einzelnen Kontakte werden mit Schrumpfschlauch geschützt.
Das andere Ende wird in die MCU Platine an einen I2C Anschluss eingesteckt.

- Pin 1 = GND (Ground) schwarz 
- Pin 2 = VCC (+5 Volt) rot
- Pin 3 = SDA (Data) grün
- Pin 4 = CLK (Clock) gelb

**4 Pol Gerätebuchse IP68 UART/Seriel (PM2.5/PM10 Sensor)**

Hier wird das SDS011 senseBox Anschlusskabel in der Mitte getrennt, und das Teil mit dem kleinen Stecker an die Buchse angelötet. Die andere Teil Hälfte des Kabels wird im Feinstaubsensor-Gehäuse an das Datenkabel gelötet (Bild 6 & 7).

Die Pinbelegung der Buchse des Feinstaubsensors:

- Pin 1	= GND (Ground) schwarz
- Pin 2	= Tx (Transmit from Host) weiss 
- Pin 3	= Rx (Receive from Host) blau
- Pin 4	= VCC (Power 5V) rot


### Zusammenbau

Der Hüttenbausatz von der [Stiftung zur Palme](https://www.palme.ch/pages/schreinerei.htm "Stiftung zur Palme") Schreinerei ist eine gute Tischlerarbeit und alles passte problemlos zusammen. Um die Hütte zu grundieren und mit Lackfarbe zu streichen wurden ca. 4 Stunden benötigt. Man kann sie gegen Aufpreis auch fertig gestrichen bestellen.

Die MCU und der Luftqualitätssensor wurden der Einfachheit halber auch in die Hütte gestellt.

{% include image.html image=page.image10 %}

Befestigt wurde die Hütte auf einem 11x11 cm Holzpfosten, der Temperatursensor befindet sich auf ca. 2 Meter Höhe über dem Rasen. Befestigt wurde er mit einem Stück Kunststoffrohr und einem Stückchen Balsaholz.

{% include image.html image=page.image11 %}

Alle Daten werden von der senseBox via WLAN an einen Router im Haus gesendet und von dort aus zur openSenseMap.  
Info: [https://opensensemap.org/info](https://opensensemap.org/info "https://opensensemap.org/info")


## Literatur

Kopp M. (2012): Vergleich verschiedener Wetterhütten zur Messung der 2m-Lufttemperatur
in Abhängigkeit von Wind und Strahlung. [Link](https://wikis.fu-berlin.de/pages/viewpage.action?pageId=841581560&preview=%2F841581560%2F841581563%2FH%C3%BCttenvergleichENDVERSION.pdf)

Deutscher Wetterdienst: Vorschriften und Betriebsunterlagen Nr. 3  (VuB 3) [Link](https://www.dwd.de/DE/leistungen/pbfb_verlag_vub/pdf_einzelbaende/vub_3_thb_gesamt_pdf.pdf?__blob=publicationFile&v=5)


## Weblinks

Verein GLOBE Schweiz: Wetterhaus [Link](https://www.globe-swiss.ch/de/Zyklus3/Angebote_Wetter_und_Atmosphare/Atmosphere/Wetterhaus/)

Dieses Projekt wurde von einem unserer Community-Member realisiert und dokumentiert! Der Author ist <b>OllyS</b> und ist wie viele andere im <a href="https://forum.sensebox.de/">senseBox Forum</a> zu finden. Im Forum findest du zudem Anregungen, neue Ideen oder Diskussionen rund um die senseBox!