---
layout: project_page
name: "Darstellung von Daten aus der openSenseMap in ArcGIS Online"
date: 2019-05-27
author: Verena
abstract: "Daten aus der openSenseMap exportieren und in ArcGIS Online darstellen"
image: osem_arcgis.jpg
image1: /images/projects/osem_arcgis/Projekt_Bild2.jpg
image2: /images/projects/osem_arcgis/Projekt_Bild3.jpg
image3: /images/projects/osem_arcgis/Projekt_Bild4.jpg

material:
  - openSenseMap
  - ArcGIS Online
  - Excel
ide:     
lang: de
tags: ["Geographie", "Informatik"]
difficult: leicht
---
Ziel ist es, Daten aus der openSenseMap herunterzuladen und diese anschließend mithilfe von ArcGIS Online graphisch darzustellen bzw. auszuwerten. Dafür können zum einen Daten verwendet werden, die mit der eigenen senseBox erfasst wurden, zum anderen aber auch solche, die frei auf der openSenseMap zur Verfügung stehen.

## Herunterladen der Daten aus der openSenseMap
Die Daten werden aus der openSenseMap über den Button ‚Datendownload‘ heruntergeladen. Unter diesem Menüpunkt ist es möglich, alle Daten der senseBoxen herunterzuladen, die auf dem jeweiligen Zommlevel auf der openSenseMap angezeigt werden. Durch eine Auswahl des Zeitraums, des Sensors und der Operation, können die Informationen eingeschränkt und gefiltert heruntergeladen werden. Es ist wichtig, unter dem Button ‚Erweitert‘ die geographische Länge und Breite auszuwählen, damit eine anschließende Verarbeitung der Daten in einem Geoinformationssystem problemlos möglich ist.  Des Weiteren wird über einem Filter die Option geboten, nach bestimmten Kriterien (Name, Modell, Standort, Phänomen) zu suchen, sodass darauf zutreffende senseBoxen angezeigt und ihre Daten heruntergeladen werden können. Je nach Umfang der Datenmenge, kann der Download etwas Zeit in Anspruch nehmen.  
{% include image.html image=page.image1 %}

## Einbindung der Daten in ArcGIS Online
Die heruntergeladenen Daten liegen nun in einem CSV-, JSON- oder Tidy- Dateiformat vor und lassen sich in einer Excel-Tabelle darstellen. Aus dieser lassen sich auf dem ersten Blick jedoch keine aussagekräftigen Daten herausfiltern. Daher ist es zur Auswertung der Daten sinnvoll, diese in einem Geoinformationssystem graphisch darzustellen. Beispielsweise eignet sich dafür ArcGIS Online. Über die Option ‚Layer aus Datei hinzufügen‘ ist es problemlos möglich, eigene Daten in die Karte zu integrieren.
{% include image.html image=page.image2 %}
{% include image.html image=page.image3 %}

## Graphische Auswertung in ArcGIS Online
Hat man sich zum Beispiel für das Phänomen ‚Temperatur‘ entschieden, so ist es möglich, das passende Attribut und seinen Darstellungs-Style auszuwählen. Dabei kann zwischen der Anzahl und Menge in Farbe und Größe sowie der Position und den Typen durch eindeutige Symbole als Veranschaulichung gewählt werden. Ein großer oder dunkelroter Kreis könnte somit eine hohe Temperatur in einem Gebiet darstellen, während ein kleiner oder hellblauer Kreis in kühleren Gebieten zu finden sein könnte. Eine weitere Option ist die Filterung von Informationen, über die genau bestimmt werden kann, welche Daten in der Karte angezeigt und welche ausgeblendet werden. Zudem besteht noch die Möglichkeit der Analyse, der Einstellung der Transparenz und des Sichtbarkeitsbereiches sowie der Erstellung von Beschriftungen. Die Pop-ups, die beim Anklicken eines Bereiches auf der Karte erscheinen, können ebenfalls konfiguriert und angepasst werden.

Schlussendlich bietet ArcGIS Online eine Option, um die mithilfe der senseBox gewonnen Daten anschaulich darzustellen und über einen längeren Zeitraum auszuwerten zu lassen. Zudem ermöglicht eine Kombination beider Komponenten (der senseBox und ArcGIS Online) einen Vergleich verschiedener Regionen und ihren Umweltphänomenen. 

## Aufgabe:
Lade deutschlandweite Daten zur Temperatur und Luftfeuchte aus der openSenseMap herunter und lasse sie dir auf einer Karte in ArcGIS Online darstellen. Verwende dabei folgende Attribute:
-	Luftfeuchte: Die Größe eines Symbols sollte mit steigender Luftfeuchte wachsen
-	Temperatur: Je höher die Temperatur, desto dunkler sollte das Symbol eingefärbt sein
Vergleiche anschließend die unterschiedlichen Gebiete und beurteile die Aussagekraft der Karte. 
