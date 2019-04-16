---
layout: post
title: "Mieries smarte Wetterstation: Ein Best-Practice-Beispiel für den Schuleinsatz der senseBox"
date: 2019-04-11
author: Gina
abstract: "Die Mierendorff Grundschule in Berlin-Charlottenburg arbeitet mit dem Gottfried Keller Gymnasium und der DorfwerkStadt e.V. an dem Kiez Projekt „Den Schäden des Rekordsommers 2018 auf der Spur“ und baut dazu ein smartes IoT-Wetterstations-Netz mit der senseBox in Charlottenburg auf – ein tolles Beispielprojekt für den Einsatz der senseBox an Schulen."
thumbnail: /images/blog_images/Grundschule_Mierendorff/Wetterstation_Grundschule_Mierendorff.jpg
image1: /images/blog_images/Grundschule_Mierendorff/Pflanzensensorik1.jpg
image2: /images/blog_images/Grundschule_Mierendorff/Pflanzensensorik.jpg
image3: /images/blog_images/Grundschule_Mierendorff/LoRaWAN Umweltstation mit Solarpanel.jpg
image4: /images/blog_images/Grundschule_Mierendorff/Übersicht-Mierie-Wetterstation.jpeg
lang: de
slider:
  text_color: white
  shadow_color: black
  slides: 
    - image: /images/blog_images/Grundschule_Mierendorff/Mierie1.jpeg
      slide_html:
    - image: /images/blog_images/Grundschule_Mierendorff/Mierie2.jpeg
      slide_html:
    - image: /images/blog_images/Grundschule_Mierendorff/Mieris-Wetterstation.jpg
      slide_html:
      
---
Mieries smarte Schul-Wetterstation 
============
Der engagierte Lehrer Faris Hammad setzt die senseBox im Fach Naturwissenschaft zum Thema “Digitale Ansätze und Klimawandel/Umweltbildung” an der Mierendorff Grundschule in Berlin Charlottenburg ein. Letztes Jahr nahm er an unserem Gewinnspiel zur Verlosung der senseBox:MCU teil und überzeugte uns mit seiner Projektidee, die senseBox zur smarten Bewässerung von Pflanzen einzusetzen. Daraus entstand das Wurzelfenster, das bald mit einem Sensor zur Messung von Bodenfeuchte erweitert wird!

{% include image.html image=page.image1 %}
{% include image.html image=page.image2 %}


Seitdem werden auf dem Dach der Grundschule Umweltdaten wie Temperatur, UV-Licht, Feinstaub, Luftfeuchtigkeit und Luftdruck gemessen und live ins Internet an die openSenseMap übertragen. Da es kein W-LAN an der Schule gibt, baute Faris gemeinam mit seinen Schülerinnen und Schülern aus einem 10 Watt Solarpanel (6 Volt), einem 3.7V LiPo Akku, einem Adafruit Powerboost 1000C und Power Switch (An/Aus) eine solarbetriebene LoRaWAN-Umweltstation, die seit April in Betrieb ist. Hier findet Ihr sie auf der [openSenseMap](https://opensensemap.org/explore/5c269755919bf8001ad23795).

{% include image.html image=page.image3 %}


Das Schulprojekt „Den Schäden des Rekordsommers 2018 auf der Spur“
============
Im Rahmen des Projektes „Den Schäden des Rekordsommers 2018 auf der Spur“ wurden die Umweltdaten der selbstgebauten und programmierten senseBox Schul-Wetterstation an die „The Things Network“-Antenne des Frauenhofer Instituts weitergeleitet. Die extrem hohen Temperaturen im Sommer 2018 waren Anlass dafür, sich näher mit dem Klimawandel zu beschäftigen und mit der senseBox in Zusammenhang mit digitaler Bildung zu bringen. Die Verbindung der selbstgebauten senseBox-Wetterstation und dem Internet-of-Things (IoT) ermöglicht es, die aktuellen Messwerte am Smartboard der Schule oder am Smartphone anzeigen zu lassen. Dadurch werden Umweltdaten anschaulich und lebensnah vermittelt. Darüber hinaus können die Kinder und Jugendlichen selbst aktiv werden, indem sie programmieren, kreative Designs entwickeln, sich eigene Fragestellungen ausdenken und diese untersuchen. Durch die Untersuchung des Klimas machen die Schülerinnen und Schüler praktische Erfahrungen mit dem Thema, sodass eine Vernetzung zwischen Schule und Umwelt stattfindet. Gemeinsam mit dem Gottfried Keller Gymnasium und der DorfwerkStadt e.V. ist das Ziel der Mierendorff Grundschule ein smartes IoT-Wetterstationsnetz in Charlottenburg aufzubauen.
Weitere Infos findet Ihr auf dem [Blog](https://www.mierendorff-schule.de/2019/01/23/wetterstation/) der Mierendorff-Schule!

{% if page.slider %}
{% include slider.html height="500" unit="px" transition="slide" duration="3" %}
{% endif %}


Besuch am Frauenhofer Institut FOKUS 
============
Rund 20 Schülerinnen und Schüler besuchten das Fraunhofer Institut FOKUS, um zu lernen, wie sie sich in der digitalen Welt zurecht zu finden und diese mitgestalten können. Dabei erhielten sie eine Einführung in das Internet-of-Things (IoT) und erfuhren, dass die Daten ihrer senseBox-Umweltmessstation über das community-basierte The Things Network (TTN) eingebunden sind und an die Wetterstation auf dem Dach des Fraunhofer Instituts mit LoRaWAN-Gateway und Antenne per Funk übertragen und direkt ins Internet weitergeleitet werden. Außerdem wurde am Beispiel einer Demonstration zum Smart-Parking weitere Anwendungsmöglichkeiten von IoT vorgestellt. Der Besuch am Fraunhofer Institut FOKUS half den Kindern dabei zu verstehen, wie es möglich ist, auch ohne WLAN an der Schule mit dem Internet verbunden zu sein und permanent Umweltdaten messen und speichern zu können. 
Informationen zur Exkursion findet Ihr unter: [Fraunhofer FOKUS](https://www.fokus.fraunhofer.de/380e946a230ab6c6)


{% include image.html image=page.image4 %}

Neues Projekt: Städtisches Grün für besseres Stadtklima
============
Faris hat ein neues Schulprojekt begonnen. Er möchte mit seinen Schülerinnen und Schülern das Stadtklima untersuchen. Dazu hat er in Kooperation mit der Stiftung Preußische Schlösser und Gärten Berlin-Brandenburg  im Schlosspark Charlottenburg eine weitere [LoRaWAN-Umweltmessstation](https://opensensemap.org/explore/5c22ef44919bf8001a10acc7) eingerichtet, um Umweltdaten zu ermitteln und langfristig zu untersuchen.

Unterstützung gesucht!
============
Der hochmotivierte Lehrer ist auch Netzwerker und würde sich gerne mit anderen Lehrenden über Erfahrungen und Ideen, wie die senseBox im Unterricht eingesetzt werden kann, austauschen. Er möchte ein Schulnetzwerk aufbauen und wir würden ihn gerne in seinem Vorhaben unterstützen. Wenn Ihr also Interesse an einem Austausch habt, dann meldet Euch bei Faris in unserem [Forumsbeitrag](https://forum.sensebox.de/t/schulen-und-bildungseinrichtungen-in-berlin-und-de/573). 


