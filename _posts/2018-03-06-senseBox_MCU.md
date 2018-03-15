---
layout: post
title: "MCU Sneak Preview"
date: 2018-03-06
author: Jan und Thomas
abstract: "Der Launch unserer neuen senseBox Hardware steht kurz bevor! Die Änderungen im Überlick findet ihr hier."
thumbnail: /images/blog_images/mcu_blog.jpg
image1: /images/blog_images/mcu.jpg
image2: /images/blog_images/blockly.jpg
image3: /images/blog_images/eduset1.jpg
image4: /images/blog_images/eduset2.jpg
image5: /images/blog_images/shop.png

lang: de
---
Vielleicht habt ihr schon bemerkt, dass es bei den senseBoxen momentan Lieferschwierigkeiten gibt. Der Grund dafür ist erfreulicher als ihr vielleicht denkt: wir bringen in Kürze komplett überarbeitete Bausätze heraus, in deren Herzen die neue senseBox MCU schlägt. Sie ist unsere eigene Lösung eines Open-Source Steuergeräts für Umweltsensortechnik und wurde speziell an unseren Anwendungsfall im Open Science und Open Education Bereich angepasst.


Der neue senseBox Mikrocontroller
============
MCU steht hierbei für Microcontroller Unit. Die senseBox MCU ersetzt in der neuen Revision unserer Bausätze den Arduino/Genuino Uno und das bisherige senseBox Shield, bleibt aber "Arduino-kompatibel". Der Wechsel zu einem neuen Mikrocontroller war notwendig, da es mittlerweile eine Vielzahl von Anwendungen und Sensorerweiterungen für die senseBox gibt, die mehr Speicher- und Rechenbedarf und mehr Flexibilität benötigen als wir es anfangs absehen konnten. Der neue Prozessor basiert auf dem ARM Cortex-M0+ Prozessor aus der [SAM D21 Familie von Microchip](http://www.microchip.com/wwwproducts/en/ATSAMD21G18). Er ist schneller, hat einen wesentlich größer Programmspeicher und verfügt über Energiesparoptionen, um z.B. Solarbetrieb zu ermöglichen. Sensoren und Aktoren werden über die bewährten Schnittstellen wie I2C, UART und digitale I/Os mit einem robusten JST-Steckersystem angesprochen. Über die beiden XBee kompatiblen Sockel werden UART oder SPI Module angeboten. Weitere interessante Features wie Crypto Authentication für OTA (Over the Air) Firmware-Upgrades werden durch den [ATECC608A von Microchip](http://www.microchip.com/wwwproducts/en/ATECC608A) ermöglicht. Des weiteren befindet sich auf der MCU ein [BMX055 Sensor von Bosch](https://www.bosch-sensortec.com/bst/products/all_products/bmx055), womit sich die Beschleunigung, die Neigung und die Orientierung zum Erdmagnetfeld bestimmen lassen. Diese neuen Erweiterungen eröffnen eine Vielzahl von Anwendungsmöglichkeiten für das Internet of Things und den Open Citizen Science Bereich!
{% include image.html image=page.image1 %}


Neue Wege der Datenübertragung
============
Die beiden XBee Sockel der senseBox MCU lassen sich mit passgenauen Modulen für Datenübertragung und Speicherung auf MicroSD bestücken. Datenübertragung per WLAN und Ethernet ist weiterhin möglich, denn es werden ein WLAN- (Standard in der senseBox:edu) und ein Ethernet-Modul angeboten. Neu ist das LoRa WAN-XBee-Modul, mit dem eine stromsparende und kostenlose Möglichkeit der Datenübertragung ins Internet über den LoRa-Funk-Standard ermöglicht wird. Es wird damit Möglich sein, über bestehende LoRa-Netzwerke wie zum Beispiel [TheThingsNetwork](http://www.thethingsnetwork.org/) Daten zu übertragen. Die hierzu benötigte Infrastruktur wird bei TheThingsNetwork von der Community bereit gestellt, und ist in immer mehr [Regionen](https://www.thethingsnetwork.org/community#list-communities-map) verfügbar. Ein XBee-Modul mit SD-Kartenslot ermöglicht die Entwicklung von Datenloggern und dient auch als Zwischenspeicher für OTA-Übertragung von BIN-Dateien.



Was ändert sich bei den Sensoren?
============
Wir haben die Sensoren für UV-Strahlung und Beleuchtungsstärke nun auf einem Breakout zusammengelegt, da sie meist gemeinsam ausgerichtet genutzt werden. Der Feinstaubsensor SDS011 wird weiterhin ergänzend angeboten und lässt sich einfach über den UART-Anschluss verbinden.


Wie wird sich die Programmierung ändern?
============
Ein neuer Bootloader sorgt dafür, dass das Board weiterhin kompatibel zu Arduino bleibt und darüber hinaus in einem Wechseldatenträgermodus vorkompilierte Softwaresketche als BIN Dateien annehmen kann. Dies hat den Vorteil, dass man nicht zwangsläufig mit der Arduino IDE arbeiten muss und wir vorbereitete Sketche einfacher an die Community ausliefern können. Über unsere [modifizierte Blocklyumgebung senseBlocks](http://www.sensebox.de/blockly) lassen sich nun die Sketche in einer grafischen Programmieroberfläche spielerisch zusammenstellen. Wir arbeiten zur Zeit noch an einer Realisierung einer nativen App-Variante von senseBlocks, die eine Over-the-air Übertragung des Sketches direkt vom mobilen Endgerät auf die senseBox MCU ermöglicht und den Einsatz eines Laptops/PCs obsolet macht. Technisch ist dies bereits möglich (s.o.)
{% include image.html image=page.image2 %}

Einfache Messgeräte für die MINT-Fächer mit der senseBox:edu
============
Die neue senseBox MCU wird auch in unserer senseBox:edu wie gewohnt mit einem Breadboard kombiniert angeboten, um Prototyping mit Sensoren und Aktoren zu ermöglichen. Bei der senseBox:edu setzen wir auf ein vereinfachtes Stecksystem und die Möglichkeit der einfachen Programmierung über die grafische Blockly-Programmieroberfläche [(https://sensebox.de/blockly/)](https://sensebox.de/blockly/). Das macht es wesentlich leichter, Daten auch in kürzeren Unterrichtseinheiten auf die openSenseMap zu übertragen, ohne sich im Detail mit dem Aufbau des HTTP Protokolls auseinandersetzten zu müssen. Die Option einen Sketch weiterhin textbasiert über Arduino zu programmieren bleibt dabei natürlich weiterhin bestehen. Die Hardware der senseBox:edu haben wir zusätzlich mit einem OLED-Display erweitert. Auch der kombinierte BMX055-Sensor zur Bestimmung von Orientierung und des Erdmagenetfeldes bietet viele Möglichkeiten im Bildungsbereich. Um die Verkabelung der meteorologischen Sensoren zu vereinfachen werden sie mit JST-Stecksystemen ausgestattet. Mit dem neuen Design lassen sich, neben der Grundlagenvermittlung der Programmierung, kinderleicht Messgeräte aufbauen, die dann in anderen MINT-Fächern zum Einsatz kommen können. Auf den Abbildungen unterhalb kann man gut sehen, dass der Bausatz nun insgesamt aufgeräumter daherkommt.
{% include image.html image=page.image3 %}
{% include image.html image=page.image4 %}

Flexibler Hardwareconfigurator für die senseBox:home
============
Beim Relaunch der neuen senseBox Hardware bringen wir einen hauseigenen Konfigurator für die senseBox:home Bausätze mit an den Start. Mit der neuen Oberfläche könnt ihr die Komponenten eurer Messstation genau so zusammenstellen wie ihr sie für euren lokalen Anwendungszweck benötigt. Neben einem Netzwerkadapter für die Webanbindung lassen sich Sensorik und Zubehör, wie Gehäuse oder Verschraubung für eine wetterfeste Montage, individuell anpassen. Unseren Klassenkisten, die bisher nur mit senseBox:edu Bausätzen gefüllt wurden, kann man nun auch mit ganzen Wetterstationen oder extra Zubehör erweitern.
{% include image.html image=page.image5 %}

Mobile Messungen
============
Die openSenseMap kann schon seit einiger Zeit mit [mobilen Messdaten](https://twitter.com/SenseBox_De/status/956517284549414913) umgehen, was wir bereits öfters prototypisch umgesetzt haben. Zur neuen Hardware bieten wir nun ein passendes GNSS-Breakout an, das mit allen gängigen GNS Systemen (GPS, QZSS, GLONASS, BeiDou, Galileo) kompatibel ist: das u-blox CAM-M8Q Multi GNSS Modul. Das Breakout wird über den JST-Stecker per I2C an die senseBox MCU angeschlossen und ermöglicht einfache mobile Datenerfassung. Bei der Registrierung eines mobilen Gerätes auf der openSenseMap wird der entsprechende Sketch automatisch generiert.


Und was ist nun mit Open-Source?
============
Unsere Philosophie das Projekt transparent zu gestalten und eine Community aufzubauen mit der zusammen wir die Inhalte rundum die senseBox gemeinsam gestalten können, bleibt weiterhin bestehen. Das neue Board wurde von uns in enger Zusammenarbeit mit der Watterott electronic GmbH entwickelt, die sich auf Design und Produktion von Open-Source Hardware Projekten spezialisiert hat und hier in Deutschland produziert.
Dazu bekommt die openSenseMap in den nächsten Monaten weitere Features zu Filterfunktionen und Datenanalyse spendiert um den freien Zugang zu den Sensordaten weiter zu vereinfachen. Unsere aktuellen Entwicklungen werden also weiterhin offen bleiben, wobei wir uns nach wie vor auf eine rege Beteiligung von Seiten der Community freuen!
