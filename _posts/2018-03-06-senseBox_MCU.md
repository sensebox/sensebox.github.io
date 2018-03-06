---
layout: post
title: "MCU Sneak Preview"
date: 2018-03-06
author: Jan
abstract: "Launch der neuen senseBox Hardware"
thumbnail: /images/blog_images/mcu_blog.jpg
image1: /images/blog_images/mcu.jpg
image2: /images/blog_images/blockly.jpg
image3: /images/blog_images/eduset1.jpg
image4: /images/blog_images/eduset2.jpg
image5: /images/blog_images/shop.png

lang: de
---
Vielleicht habt ihr schon bemerkt, dass es bei den senseBoxen momentan Lieferprobleme gibt. Der Grund dafür ist erfreulicher als ihr vielleicht denkt: wir bringen in Kürze komplett überarbeitete Bausätze heraus, in deren Herzen die neue senseBox MCU schlägt. Sie ist unsere eigene Lösung eines Open-Source Steuergeräts für Umweltsensortechnik und ist speziell an unseren Anwendungsfall im Open Science Bereich angepasset. 


Der neue senseBox Mikrocontroller
============
MCU steht hierbei für Microcontroller Unit. Die senseBox MCU ersetzt in der neuen Revision unserer Bausätze den Arduino/Genuino Uno. Der Wechsel zu einem neuen Mainboard war notwendig, da es mittlerweile eine Vielzahl von Anwendungen und Sensorerweiterungen für die senseBox gibt, die mehr Speicher- und Rechenbedarf benötigen als wir es anfangs absehen konnten. Der neue Prozessor basiert auf dem ARM Cortex-M0+ Prozessor aus der [SAM D21 Familie von Microchip](http://www.microchip.com/wwwproducts/en/ATSAMD21G18). Er ist schneller, hat einen wesentlich größer Programmspeicher und verfügt über Energiesparoptionen um spätere Solaranwendungen zu realisieren. Sensoren und Aktoren werden über die bewährten Schnittstellen wie I2C, UART und digitale I/Os mit einem robusten JST-Steckersystem angesprochen. Über die beiden XBee kompatiblen Sockel werden UART oder SPI Module angeboten. Weitere interessante Features wie Crypto Authentication für OTA (Over the Air) Firmware-Upgrades werden durch den [ATECC608A von Microchip](http://www.microchip.com/wwwproducts/en/ATECC608A) ermöglicht. Des weiteren befindet sich auf der MCU ein [BMX055 Sensor von Bosch](https://www.bosch-sensortec.com/bst/products/all_products/bmx055), womit sich die Beschleunigung, die Neigung und die Orientierung zum Erdmagnetfeld bestimmen lassen. Diese neuen Erweiterungen eröffnen eine Vielzahl von Anwendungsmöglichkeiten für das Internet of Things und den Open Science Bereich!
{% include image.html image=page.image1 %}

Wie wird sich die Programmierung ändern?
============
Ein neuer Bootloader sorgt dafür, dass das Board weiterhin kompatibel zu Arduino bleibt und darüber hinaus in einem Wechseldatenträgermodus vorkompilierte Softwaresketche als BIN Dateien annehmen kann. Dies hat den Vorteil, dass man nicht zwangsläufig mit der Arduino IDE arbeiten muss und wir vorbereitete Sketche einfacher an die Community ausliefern können. Über eine modifizierte Blocklyumgebung lassen sich nun die Sketche in einer grafischen Programmieroberfläche spielerisch zusammenstellen. 
{% include image.html image=page.image2 %}

Einfache Messgeräte für die MINT-Fächer mit der senseBox:edu
============
Bei der senseBox:edu setzen wir auf ein vereinfachtes Stecksystem und die Möglichkeit der einfachen Programmierung über die grafische Blockly-Programmieroberfläche (https://sensebox.de/blockly/). Das macht es wesentlich einfacher Daten auch in kürzeren Unterrichtseinheiten auf die openSenseMap zu übertragen, ohne sich im Detail mit dem Aufbau des HTTP Protokolls auseinandersetzten zu müssen. Die Option einen Sketch weiterhin textbasiert über Arduino zu programmieren bleibt dabei natürlich weiterhin bestehen. Die Hardware der senseBox:edu haben wir zusätzlich mit einem Display erweitert. Um die Verkabelung der meteorologischen Sensoren zu vereinfachen werden sie mit JST-Stecksystem ausgestattet. Mit dem neuen Design lassen sich neben der Grundlagenvermittlung der Programmierung kinderleicht Messgeräte aufbauen, die dann in anderen MINT-Fächern zum Einsatz kommen können. Auf den Abbildungen unterhalb kann man gut sehen, dass der Bausatz nun insgesamt aufgeräumter daherkommt.  
{% include image.html image=page.image3 %}
{% include image.html image=page.image4 %}

Flexibler Hardwareconfigurator für die senseBox:home
============
Beim Relaunch der neuen senseBox Hardware bringen wir einen hauseigenen Konfigurator für die senseBox:home Bausätze mit an den Start. Mit der neuen Oberfläche könnt ihr die Komponenten eurer Messstation genau so zusammenstellen wie ihr sie für euren lokalen Anwendungszweck benötigt. Neben einem Netzwerkadapter für die Webanbindung lassen sich Sensorik und Zubehör, wie Gehäuse oder Verschraubung für eine Wetterfeste Montage, individuell anpassen. Unseren Klassenkisten, die bisher nur mit senseBox:edu Bausätzen gefüllt wurden, kann man nun auch mit ganzen Wetterstationen oder extra Zubehör erweitern.
{% include image.html image=page.image5 %}

Und was ist nun mit Open-Source?
============
Unsere Philosophie das Projekt transparent zu gestalten und eine Community aufzubauen mit der zusammen wir die Inhalte Rund um die senseBox gemeinsam gestalten können, bleibt weiterhin bestehen. Das neue Board wurde von uns in enger Zusammenarbeit mit der Watterott electronic GmbH entwickelt, die sich auf Design und Produktion von Open-Source Hardware Projekten spezialisiert hat und hier in Deutschland produziert. 
Dazu bekommt die openSenseMap noch in den nächsten Monaten weitere Features zu Filterfunktionen und Datenanalyse spendiert um den freien Zugang zu den Sensordaten weiter zu vereinfachen. Unsere aktuellen Entwicklungen werden also weiterhin offen bleiben, wobei wir uns nach wie vor auf eine rege Beteiligung von Seiten der Community freuen!

