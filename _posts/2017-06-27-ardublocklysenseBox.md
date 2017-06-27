---
layout: post
title: "Ardublockly - eine einfache Programmieroberfläche für die senseBox:edu"
date: 2017-06-27
author: Mario
abstract: "Mit Ardublockly wird der Einstieg in die senseBox:edu noch einfacher"
thumbnail: /images/blog_images/ardublockly1.jpg
image1: /images/blog_images/ardublockly1.jpg
image2: /images/blog_images/ardublockly2.jpg
image3: /images/blog_images/ardublockly2.jpg
lang: de
---
Ardublockly für die senseBox:edu
============
Mit der senseBox:edu wollen wir einen einfachen Einstieg in die Programmierung schaffen. Bisher musste immer direkt in der Arduino IDE mithilfe von Text programmiert werden. Nun ermöglicht eine grafische Oberfläche mit Blöcken einen noch einfacheren Einstieg.

Aktueller Stand
============
In die Oberfläche wurden Blöcke für die einzelnen Sensoren der senseBox:edu integriert. Die Sensoren können so einfach ausgelesen werden, wie es im Beispiel gezeigt wird
{include image.html image=page.image1 %}
Da der Arduino kein Display besitzt müssen anderen Ausgabemöglichkeiten genutzt werden. Hier kann der Nutzer auswählen zwischen der Ausgabe auf dem seriellen Monitor der Arduino IDE, dem speichern auf SD-Karte oder dem direkten übertragen der Messwerte auf die openSenseMap (hierfür muss eine Station vorher registriert werden und eine Wlan oder Lan verbindung vorhanden sein)

Installation
============
Grundvorraussetzung für die Verwendung von Ardublockly ist, dass die [Arduino IDE](https://www.arduino.cc/en/Main/Software) installiert ist. (weitere Information auch [hier](https://edu.books.sensebox.de/de/getting_started/installation_der_software.html))

Unter [Arbublockly](senseBox.de/blockly) befindet sich eine online Version der Oberfläche die ohne Installation auf dem gängigen Browsern läuft. Hierbei muss allerdings der genierte Code mittels Copy and Paste in die Arduino IDE kopiert werden.

Die offline Varianten der Ardublockly Oberfläche befinden sich im [Github Repository](github.com/senseBox/ardublockly) in den Releases. Hier gibt es für die gängigen Betriebssysteme (Windows, MacOS, Linux) eine jeweilige Version.
Für die Offline Variante muss Python (mind. Version 2.7) installiert sein. Weitere Informationen und der Download der Software befinden sich auf der [Python Homepgage](https://www.python.org/). Unter MacOS ist Python bereits vorinstalliert. Hierbei muss nur die ardublock.app in den Programmordner kopiert werden.

Damit die Sensoren ausgelesen werden können wird eine Software Bibliothek benötigt, die [senseBox-Library](https://github.com/sensebox/senseBox_library) beeinhaltet die Software für alle Sensoren, die in der senseBox:edu enthalten sind. Die Software Library muss heruntergeladen werden und in die Arduino IDE integriert werden (mehr Informationen dazu [hier](https://edu.books.sensebox.de/de/getting_started/installation_der_software.html))  
