---
layout: post
title: "Ein Bodenfeuchtesensor für die senseBox"
date: 2020-01-28
author: Christof Hübner
abstract: "Der Bodentemperatur und -feuchte Sensor von Truebner ermöglicht viele spannende Einsätze mit der senseBox"
thumbnail: /images/blog_images/truebner/truebner_smt50.jpg
image1: /images/blog_images/truebner/truebner_smt50.jpg
image2: /images/blog_images/truebner/truebner_setup.jpg
image3: /images/blog_images/truebner/truebner_setup_2.png
image4: /images/blog_images/truebner/truebner_setup_3.png
image5: /images/blog_images/truebner/truebner_blockly.png
lang: de
---


Wenn Pflanzen welken oder gelbe Blätter bekommen denkt man meist ans Gießen. Zu viel Wasser kann aber mehr schaden als nutzen, wenn damit der lebensnotwendige Sauerstoff um die Wurzeln verdrängt wird. Staunässe führt zum Verfaulen der Wurzeln und die Pflanze stirbt ab. Deshalb ist für ein optimales Pflanzenwachstum ein bestimmter mittlerer Wassergehalt notwendig, der mit Hilfe eines Bodenfeuchtesensors an der senseBox überwacht und für eine Bewässerungssteuerung genutzt werden kann. Bei der Auswahl eines geeigneten Bodenfeuchtesensors ist jedoch einiges zu beachten.

Bodenfeuchtesensoren basieren auf unterschiedlichen physikalischen Messprinzipien. Besonders kostengünstig ist eine elektrische Leitfähigkeitsmessung, die jedoch aus verschiedenen Gründen sehr unzuverlässig ist. So wird die Leitfähigkeit durch die Menge der gelösten Ionen bestimmt. Bei gleichem Wassergehalt kann es in Abhängigkeit von Bodenart (Sand, Lehm, Ton), Salzgehalt und Dünger zu völlig unterschiedlichen Messwerten führen. Darüber hinaus ist die elektrische Leitfähigkeit stark temperaturabhängig und kann nicht auf einfachem Wege kompensiert werden. Das größte Problem der oft sehr billigen Leitfähigkeitssensoren ist jedoch die Korrosion der Elektroden, so dass die Haltbarkeit oft nur wenige Tage oder Wochen beträgt. Die Enttäuschung ist dann vorprogrammiert.

Viel besser geeignet sind kapazitive Sensoren, bei denen die Elektroden durch eine isolierende Schicht korrosionssicher geschützt werden können. Der Messeffekt beruht auf einer Wechselwirkung der Wassermoleküle mit einem elektrischen Wechselfeld, da H2O ein s.g. Dipol ist. Die Messfrequenz spielt dabei eine entscheidende Rolle für die Genauigkeit und Zuverlässigkeit. Billige Sensoren nutzen niedrige Frequenzen im kHz-Bereich bis zu wenigen MHz. Das ist zwar schaltungstechnisch einfach, die Messwerte werden jedoch durch Leitfähigkeitseinflüsse erheblich verfälscht. Viel besser ist der SMT50 (Bild 1), der durch eine höhere Messfrequenz geringere Querempfindlichkeiten aufweist. Zudem ist das mechanische Design sehr robust und durch die Einkapselung in Epoxydharz eine perfekte Wasserdichtigkeit und somit jahrelange Lebensdauer garantiert. Das verwendete Spezialkabel mit 10 m Länge besitzt einen mikroben- und hydrolysebeständigen Polyurethan-Mantel, der für den Einsatz in Erde und Wasser entwickelt wurde.

 {% include image.html image=page.image1 %}

Der praktische Einsatz des SMT50 ist einfach. Dennoch sind ein paar Regeln zu beachten, um ein optimales Messergebnis zu erzielen. In Bild 2 ist die korrekte Installation des Sensors dargestellt. Es ist darauf zu achten, dass der gesamte Sensor inklusive des schwarzen Gehäuses im Boden eingegraben wird und einen guten Kontakt zum Boden hat. Es dürfen keine Luftspalte um den Sensor herum sein, dies verfälscht das Messergebnis. Um eine optimale Bewässerung für Pflanzen zu erzielen, sollte der Sensor in einer den Wurzeln angemessenen Tiefe eingebaut werden. Ideal (aber nicht zwingend notwendig) ist der waagerechte Einbau wie unten abgebildet. Dabei ist der Sensor hochkant zu drehen, so dass sich kein Sickerwasser auf der grünen Messfläche aufstauen kann.

Bei anspruchsvollen Pflanzen kann es sinnvoll sein, auch zwei oder mehr Sensoren in unterschiedlichen Tiefen anzuordnen. So kann das Eindringen des Sickerwassers anhand der Messwerte beobachtet werden und die Bewässerungszeiten- und Mengen können optimiert werden. 

 {% include image.html image=page.image2 %}

Der SMT50 darf nicht mit einem Hammer in festen Erdboden eingeschlagen werden.  Bei harten Böden empfiehlt sich ein Vorstechen mit einem geeigneten Werkzeug oder ein Aufweichen des Bodens mit Wasser vor der Installation.

 {% include image.html image=page.image3 %}

Nachfolgend sind einige typische Einbaufehler dargestellt, die unbedingt vermieden werden sollten:

 {% include image.html image=page.image4 %}

Mit dem Bodenfeuchtesensor SMT50 und der senseBox sind viele interessante Experimente möglich wie:
- Bewässerungssteuerung (z.B. im Schulgarten, Rasen von Schulsportanlagen)
- Untersuchung des Wassertransports im Boden
- Charakterisierung des Austrocknungsverhaltens von Böden
- Intelligentes Gewächshaus in Kombination mit anderen Sensoren
- Grüne Dächer und grüne Wände (Mikroklima)
- Wasserbedarf von Stadtbäumen

Der Truebner SMT50 kann direkt über unsere graphische Programmieroberfläche programmiert werden und lässt sich so einfach mit allen weiteren Sensoren und Komponenten der senseBox 

 {% include image.html image=page.image5 %}

<hr> 

Erhältlich ist der Sensor in unserem [Shop](https://sensebox.kaufen/product/bodenfeuchte-temperatursensor-smt50) und auf der [Projektseite](https://sensebox.de/de/projects) findest du ein erstens Projekt, um deine Zimmerplfanze "smart" zu machen.




