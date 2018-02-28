---
layout: post
title: "Ardublockly - eine einfache Programmieroberfläche für die senseBox:edu"
date: 2017-06-27
author: Mario
abstract: "Mit Ardublockly wird der Einstieg in die Programmierung der senseBox:edu noch einfacher"
thumbnail: /images/blog_images/ardublockly_thumbnail.jpg
image1: /images/blog_images/ardublockly1.gif
image2: /images/blog_images/ardublockly2.jpg
lang: de
---
Ardublockly für die senseBox:edu
============
Mit der senseBox:edu wollen wir einen einfachen Einstieg in die Programmierung und den Bau von Umweltmessgeräten schaffen. Bisher musste immer direkt in der Arduino IDE mithilfe von Programmierbefehlen programmiert werden. Nun ermöglicht eine grafische Oberfläche mit Blöcken einen noch einfacheren und schnelleren Einstieg.

Aktueller Stand und Funktionen
============
In die Oberfläche wurden Blöcke für die einzelnen Sensoren der senseBox:edu integriert. Die Sensoren können so einfach ausgelesen werden, wie es im Beispiel gezeigt wird.
{% include image.html image=page.image1 %}
Da der Arduino kein Display besitzt, müssen anderen Ausgabemöglichkeiten genutzt werden. Hier kann der Nutzer auswählen zwischen
- der Ausgabe auf dem seriellen Monitor (Kommandozeile) der Arduino IDE
- dem speichern auf SD-Karte
- direktem übertragen der Messwerte auf die openSenseMap (hierfür muss eine Station vorher registriert werden und eine Wlan oder Lan verbindung vorhanden sein).

Die senseBox Blöcke sind in drei Kategorien eingeteilt:
- den Grundlagen (mit Blöcken für LED, Piepser und der RGB LED)
- den Sensoren (mit Blöcken für alle Sensoren die in der senseBox:edu enthalten sind)
- verschiedenen Ausgabemöglichkeiten (SD Karte, Kommandozeile oder übertragen an die openSenseMap).


Installation
============
Grundvoraussetzung für die Verwendung von Ardublockly ist, dass die [Arduino IDE](https://www.arduino.cc/en/Main/Software) installiert ist. (weitere Information auch [hier](https://edu.books.sensebox.de/de/getting_started/installation_der_software.html))

Unter [Arbublockly](https://sensebox.de/blockly/) befindet sich eine online Version der Oberfläche, die ohne Installation auf den gängigen Browsern läuft. Hierbei muss allerdings der generierte Code mittels Copy and Paste in die Arduino IDE kopiert werden.

Die Offline-Variante der Ardublockly Oberfläche befinden sich im [Github Repository](https://github.com/senseBox/ardublockly) in den [Releases](https://github.com/sensebox/ardublockly/releases)  (die Releases werden in unregelmäßigen Abständen neu veröffentlicht). Hier gibt es für die gängigen Betriebssysteme (Windows, MacOS, Linux) eine jeweilige Version.
Für die Offline Variante muss Python (mind. Version 2.7) installiert sein. Weitere Informationen und der Download der Software befinden sich auf der [Python Homepgage](https://www.python.org/). Unter MacOS ist Python bereits vorinstalliert. Hierbei muss nur die Ardublock.app in den Programmordner kopiert werden.
Damit der direkte Upload oder das direkte Öffnen des Sketches in der Arduino IDE funktioniert, muss der Programmpfad in den Einstellungen gesetzt werden.

Damit die Sensoren ausgelesen werden können wird, eine Software Bibliothek benötigt. Diese beeinhaltet die Software für alle Sensoren, die in der senseBox:edu enthalten sind ([senseBox-Library](https://github.com/sensebox/senseBox_library)). Die Software Library muss heruntergeladen werden und in die Arduino IDE integriert werden (mehr Informationen dazu [hier](https://edu.books.sensebox.de/de/getting_started/installation_der_software.html)).

Verwendung der Oberfläche
============
Der Screenshot zeigt den Grundaufbau der Ardublockly Oberläche. Im Auswahlmenü rechts können die Programmierblöcke herausgezogen und in der Programmieroberfläche zusammengesetzt werden. Es empfiehlt sich mit dem Block "Arduino Führe zuerst aus/Arduino Endlosschleife" aus dem Bereich Funktionen zu starten.

Im rechten Fenster wird der generierte Code angezeigt. Mithilfe dieser Ansicht lässt sich nachvollziehen, welche Programmierbefehle hinter den Blöcken stehen. Neben den senseBox Blöcken gibt es eine Vielzahl von verschiedenen Blöcken, die es ermöglichen, komplexe Proramme zu schreiben ohne die Syntax der Programmiersprache mühsam erlernen zu müssen. Mithilfe der Ardublockly Oberfläche können auch schon jüngere Nachwuchswissenschaftler mit der senseBox:edu arbeiten. Durch das Parallele Anzeigen des Programmcodes wird der Schritt zu den ersten Textbasierten Programmen deutlich erleichtert.
{% include image.html image=page.image2 %}

Ausblick
============
Wir arbeiten zurzeit an einem Buch (ähnlich unserer Anleitung zur [senseBox:edu](https://edu.books.sensebox.de/de/)) speziell für die Ardublockly Oberfläche. Durch die starke Vereinfachung können nun die ersten Projekte in kürzerer Zeit durchgeführt werden und es bleibt mehr Zeit im Unterricht oder in Projekttagen, um die Messgeräte zu verwenden oder das Projekt noch komplexer auszubauen.

Die Oberfläche und vorallem die Übersetzung ins Deutsche sind noch nicht 100 Prozent fertiggestellt und beeinhalten noch kleinere Fehler. Solltet ihr Fehler feststellen, melden sie uns doch bitte über [Github](https://github.com/sensebox/ardublockly/issues).

Credits und Lizenz
============
Die Grundoberfläche von Ardublockly stammt von [carlosperate](https://github.com/carlosperate) und basiert auf [Google Blockly](https://developers.google.com/blockly/). Veröffentlicht ist das Projekt unter Apache License 2.0 (mehr informationen [hier](https://github.com/sensebox/ardublockly/blob/master/LICENSE))
