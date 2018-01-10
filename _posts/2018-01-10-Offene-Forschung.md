---
layout: post
title: "Offene Analyse von Umweltdaten"
date: 2018-01-10
author: "Daniel Nüst"
abstract: "Unsere Internetseite hat einen neuen Anstrich bekommen! Es gibt einen neuen Style, einen Blog, und viele kleine Änderungen"
thumbnail: /images/blog_images/screenshot_osem.png
image1: /images/blog_images/2018-01_sensebox-binder-rstudio-screenshot.png
lang: de
---

_Dieser Artikel ist auf Englisch auf der [o2r website](https://o2r.info) veröffentlicht._

Der Beginn des neuen Jahres ist die Zeit der guten Vorsätze.
Für den Wissenschaftler Daniel Nüst vom Forschungsprojekt "Offene Reproduzierbare Forschung" ([o2r](http://o2r.info)) bedeutete dies sich endlich mit seiner brandneuen _senseBox:home_ zu beschäftigen und eine kleine [reproduzierbare](https://de.wikipedia.org/wiki/Reproduzierbarkeit#Wissenschaft) Datenanalyse zu erstellen.
Danke der offenen Hardware von _senseBox_, den offenen Daten von der _openSenseMap_, und Freier Open Source Software ([FOSS](https://de.wikipedia.org/wiki/Free/Libre_Open_Source_Software)) konnte er eine transparente und nachvollziehbare Untersuchung über Feinstaubwerte zum Jahreswechsel in Münster erstellen.

Auf Basis von _[BinderHub](https://binderhub.readthedocs.io)_ kann jeder mit nur wenigen Klicks das gleiche virtuelle Labor in seinem Browser öffnen, welches für die ursprüngliche Untersuchung genutzt wurde.
Und alles ohne irgendwelche Software zu installieren.

Probiere es aus: [![Binder](http://mybinder.org/badge.svg)](http://mybinder.org/v2/gh/nuest/sensebox-binder/master)

[![screencast of senseBox-Binder analysis in RStudio running on mybinder.org](https://media.giphy.com/media/l49JRjO65S0WQ1Kyk/giphy.gif)](https://media.giphy.com/media/l49JRjO65S0WQ1Kyk/giphy.gif)

Natürlich kann der gesamte Quellcode auch auf dem eigenen Computer ausgeführt und inspiziert werden.
Er ist gemeinsam mit den Daten auf GitHub veröffentlicht: **[https://github.com/nuest/sensebox-binder/](https://github.com/nuest/sensebox-binder/)**

Die Analyse umfasst das Herunterladen der Messdaten, die Berechnung von statistischen Kennwerten, und verschiedene graphische Darstellungen auf Basis der Software _[R](https://de.wikipedia.org/wiki/R_(Programmiersprache))_.
Der folgende Screenshots zeigt die das Analyseskript und das erzeugte Dokument im Editor [RStudio](https://www.rstudio.com/products/rstudio/).

{% include image.html image=page.image1 %}

Wenn Du es nicht erwarten kannst, dann schau Dir unter [diesem Link](https://nuest.github.io/sensebox-binder/sensebox-analysis.html) die lesbare (aber nicht editierbare) fertige Version der Analyse an.
