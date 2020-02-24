---
layout: project_page
name: "Solarbetriebene senseBox"
date: 2020-02-06
author: Yannick
abstract: "Die senseBox ohne Steckdose betreiben ist mit der Solarerweiterung möglich. Hier zeigen wir wie es geht."
image: titelbild_solar.jpg
image0: https://github.com/sensebox/resources/raw/master/gitbook_pictures/solar_aufbau_rough.jpg
image1: https://github.com/sensebox/resources/raw/master/gitbook_pictures/solar_powerboost.jpg
image2: https://github.com/sensebox/resources/raw/master/gitbook_pictures/solar_aufbau_schalter.jpg
image3: https://github.com/sensebox/resources/raw/master/gitbook_pictures/solar_aufbau_dach.jpg
material:
    - senseBox MCU
    - Powerboost 1000c
    - Solarzelle
    - Akku
    - Sensoren
    - WiFi/LoRa-Bee
ide: keine    
lang: de
addons: Sensoren
version: ["edu", "mini"]
tags: ["Informatik"]
difficult: mittel
---

# Umweltstation betrieben von einer Solarzelle {#head}
Wenn du deine senseBox ohne Steckdose oder Powerbank betreiben möchtest, kannst du hierfür auch eine Solarzelle verwenden. Zusätzlich zeigen wir dir wie die LoRa Datenübertragung funktioniert. Somit kannst du auch an den entlegensten Orten deine senseBox betreiben ohne auf Strom oder Internet angewiesen zu sein! Am Ende wird dir zudem gezeigt, wie du einen Schalter zum Ein- und Ausschalten mit der senseBox verbinden kannst.

Aufgebaute Station betrieben durch Solar
{% include image.html image=page.image0 %}

## Materialien 
- Sensoren
  - Luftdruck `BMP280`
  - Temperatur und Luftfeuchte `HDC1080`
  - UV-Intensität und Beleuchtungsstärke `TSL & VEML`
  - Feinstaub `SDS`
- [Solarzelle](https://sensebox.kaufen/product/solar-set)
- [3.7V LiPo Akku](https://eckstein-shop.de/LiPo-Akku-Lithium-Ion-Polymer-Batterie-37V-2000mAh-JST-PH-Connector)
- [Adafruit Powerboost 1000C](https://www.adafruit.com/product/2465)
- WiFi/LoRa Bee
- [Brandschutztasche](https://www.amazon.de/Jamara-141360-LiPo-Guard-Lipobrandschutztasche/dp/B003OFCUIS/ref=sr_1_18?keywords=LIPO+TRESOR&qid=1556284975&s=gateway&sr=8-18) (optional)
- Power Switch (optional)

## Aufbau
_Achtung:_ Aufgrund der erhöhten Komplexität der Installation empfehlen wir dieses Projekt außschließlich fortgeschrittenen Nutzern von Open-Hardware. 
<br>
Zunächst baust du die senseBox nach deinem belieben auf. Hierzu die gewohnte Anleitung in den [books](https://sensebox.github.io/books-v2/home/de/) benutzen.
Um zu gewährleisten, dass die senseBox zeitgleich mit Strom versorgt wird und einen Akku nutzt, der durch die Solarzelle aufgeladen wird, benötigst du den [Adafruit Powerboost 1000C](https://learn.adafruit.com/adafruit-powerboost-1000c-load-share-usb-charge-boost/overview). Der Stromfluss vom Akku zur MCU wird durch einen [Power Switch](https://www.adafruit.com/product/805) reguliert.

Powerboost Aufbau
{% include image.html image=page.image1 %}

<details>
<summary> title="Ein-/Aus-Schalter einbauen (Optional)"</summary>
Der Switch wird mit dem Powerboost verbunden. Hierfür benötigst du Löt-Werkzeug. Wie du den Switch mit dem Powerboost verbindest, wird dir [hier](https://learn.adafruit.com/adafruit-powerboost-1000c-load-share-usb-charge-boost/assembly#on-slash-off-switch-3-5) erklärt. Nun können wir den USB-Eingang am Powerboost verwenden, um den Stromfluss zur MCU, mit dem Power Switch zu regulieren.

Eingebauter Schalter im Gehäuse
{% include image.html image=page.image2 %}

In diesem Beispiel wurde ein Loch für den Schalter in das Gehäuse gebohrt. So ist er von außen immer zugänglich und die senseBox kann nach Belieben zum Stromsparen an- oder ausgeschaltet werden.
</details>



## Programmierung

Bei der Programmierung muss in diesem Beispiel nichts besonderes beachtet werden. Solange die MCU mit Strom versorgt ist, kann sie die Sketches ausführen, die dir in vorherigen Anleitungen schon beigebracht wurden. Lediglich die Verwendung des LoRa-Bees kann zu Problemen führen, wenn in dem Gebiet noch kein LoRa-Netzwerk verfügbar ist. Das kann man am einfachsten [hier](https://www.thethingsnetwork.org/community#list-communities-map) prüfen. Auch wichtig zu beachten, dass du dich erst beim TTN registrieren musst, um einen Access-Key zu bekommen. Alles das wird in unserem [LoRa-Bee Tutorial](https://sensebox.github.io/books-v2/edu/de/komponenten/bees/lora.html) behandelt.

## Nutzung

Beispielaufbau auf dem Dach
{% include image.html image=page.image3 %}

Nach 2-tägigem Test mit einem großen Akku (6600 MAh) ziehen wir das Fazit, dass bei genügender Sonneneinstrahlung (2-3 Stunden täglich) der Akku auf zumindest konstantem Ladungsniveau bleibt, wenn nicht sogar aufgeladen wird. In meinem Fall stieg die Ladung von anfangs 60 % auf 90 % bei 2 Tagen durchgehendem blauen Himmel. Dass bedeutet, solltest du die Station im freien ohne Netz-Stromversorgung betreiben wollen, ist das mithilfe einer Solarzelle sehr gut möglich, auch längere Zeit ohne direkte Sonneneinstrahlung können mit einem großen Akku abgefangen werden. Lediglich säubern solltest du die Zelle ab und an, da sich dort gern Pollen oder Schmutz absetzen.
