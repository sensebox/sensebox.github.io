---
layout: project_page
name: "Heimserver mit der senseBox"
date: 2019-11-25
author: Yannick
abstract: "Ein kleines Projekt zum Erstellen eines eigenen Heimservers über die senseBox mit dem BME680, der Temperatur, Luftdruck und Luftfeuchte messen kann."
image: /images/projects/bme680-webserver/heimserver_site.png
image0: /images/projects/bme680-webserver/webserver_IP_auslesen_w_wifi_module.png
image1: /images/projects/bme680-webserver/ip_blockly.png
image2: /images/projects/bme680-webserver/ip_block_wo.png
image3: /images/projects/bme680-webserver/webserver_BME680_aufbau_w_wifi_module.png
image4: /images/projects/bme680-webserver/heimserver_blockly_setup.png
image5: /images/projects/bme680-webserver/heimserver_blockly_loop1.png
image6: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_1.png
image7: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_2.png
image8: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_3.png
image9: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_4.png
image10: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_5.png
image11: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_6.png
image12: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_7.png
image13: /images/projects/bme680-webserver/heimserver_blockly_full.png

material:
    - senseBox MCU
    - OLED Display
    - beliebiger Umweltsensor
ide: blockly    
lang: de
tags: ["Informatik"]
difficult: mittel
---
# Heimserver mit der senseBox
Dieses Projekt zeigt dir eine Möglichkeit deine senseBox ohne viel Aufwand in dein lokales WLAN zu integrieren. Das bedeutet, dass jeder, der mit diesem WLAN verbunden ist, die Sensor-Werte über einen Link auf seinem Smartphone oder Laptop aufrufen kann. Wie das im Grunde funktioniert: Auf eine Anfrage, die du später mit deinem Smartphone über die Eingabe eines Links ausführst, gibt die senseBox dir eine Antwort in Form einer Webseite zurück. Daher entspringt auch das Wort "Server", was man auf deutsch etwa als "Diener" übersetzen kann. Man stellt eine "Forderung"(engl. request) und bekommt darauf etwas zurückgegeben.

## 1. Teil: Auslesen der senseBox IP
Der erste Schritt zur Einrichtung des Servers, ist das Auslesen der IP-Adresse der senseBox MCU.

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Die IP-Adresse</h3>
  </div>
  <div class="panel-body">
        So wie wir Menschen eine Adresse haben und Adressen brauchen um z.B. Pakete an die richtige Person zu versenden, brauchen Computer diese Informationen um miteinander zu kommunizieren. Das "IP" steht für "Internet Protocol", eine Vereinbarung aus den 90er-Jahren, die Grundlagen für das heutige Internet festlegte und bis heute Bestand hat. Für gewöhnlich sieht eine IP-Adresse in etwa so aus: 192.168.178.1 Dabei beschreiben die ersten drei Blöcke (die Blöcke werden durch Punkte abgegerenzt) das Netzwerk in dem sich das internetfähige Gerät befindet, der letzte Block das Gerät selbst. In einem Netzwerk können so bis zu 2^8 = 256 Geräte unterschieden werden(Zahlenbereich 0-255). Insgesamt ergeben sich so über 4 Milliarden verschiedene IP-Adressen.
  </div>
</div>

Hierzu benötigst du neben deiner senseBox MCU, das WiFi-Bee und einen OLED-Display. Das WiFi-Bee steckst du auf den XBEE1-Steckplatz und der Bildschirm wird in einen der I2C-Anschlüsse gesteckt und die MCU mit dem USB-Kabel verbunden.

{% include image.html image=page.image0 %}

Nun erstellst du in [Blockly](https://blockly.sensebox.de/ardublockly/?lang=de#) den folgenden Sketch:

{% include image.html image=page.image1 %}

Den IP-Adresse-Block findest du unter dem Reiter Web und dann in der Kategorie Webserver. Diese wird noch im nächsten Schritt noch häufiger genutzt.

{% include image.html image=page.image2 %}

Sollte soweit alles funktioniert haben, kannst du die IP auf dem Bildschirm sehen. Diese benötigen wir in Folgenden und bestenfalls notierst du sie auf einem Zettel.

## 2. Teil: Aufsetzen des Heimservers
Für den Bildschirm haben wir nun keine Verwendung mehr, dieser kann abgetrennt werden. Jedoch kann das JST-Kabel mit der senseBox MCU verbunden bleiben und der BME680-Sensor kann daran angeschlossen werden.

{% include image.html image=page.image3 %}

Die Sensoren des BME680(Temperatur, Luftdruck, Luftfeuchte) reichen uns aus um eine einfache kleine Wetterstation für zu Hause aufzusetzen. Ihr könnt aber auch gerne eine eigene Sensorkonfiguration benutzen, dazu muss an ein paar Stellen etwas verändert werden, was in den nächsten Schritten deutlicher wird.

Wieder in Blockly, fügen wir den WiFi und den HTTP-Server-Block in das `Setup()`:

{% include image.html image=page.image4 %}

Damit ist das Setup abgeschlossen und wir können uns die `Endlosschleife()` ansehen. Dort kommt zunächst als Grundstruktur diese Blockkombination:

{% include image.html image=page.image5 %}

Da rein kommt die Antwort deiner senseBox in HTML-Format.

{% include image.html image=page.image6 %}

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">HTML (Hypertext Markup Language)</h3>
  </div>
  <div class="panel-body">
        HTML ist keine Programmiersprache, wie man vielleicht denken könnte, sondern dient lediglich dazu Elemente auf einer Website zu kennzeichnen. Wenn du dir zum Beispiel die Website anschaust, auf der du dich gerade befindest, so kann man vereinfacht sagen, jedes Element, seien es Text, Bilder oder Suchfelder, haben einen oder mehrere Kennzeichner, so genannte Tags. Tags bestehen aus einem öffnenden und einem schließenden Tag.
  </div>
</div>

Hier an dem Zahnrad kann man übrigens einstellen, wie viele Unterelemente ein `Tag` haben soll.

{% include image.html image=page.image9 %}

So soll der `HTML-Body` des Sketches im Endeffekt aussehen:

{% include image.html image=page.image5 %}

In den `HTML-Head` fügst du einen style-Tag ein und ein Textfenster, dort kopierst du das hier rein:<br>

```js
    :root {
        --3DshadowE8: 0 0 1px, 0 0 1.1px rgba(0, 0, 0, .7), 0 1px 1px rgba(0, 0, 0, .7), 1px 0 1px, 1px 1px 1px rgba(0, 0, 0, .7), 2px 0 1px, 2px 1px 1px rgba(0, 0, 0, .7), 3px 0 1px, 3px 1px 1px rgba(0, 0, 0, .7), 4px 0 1px, 4px 1px 1px rgba(0, 0, 0, .7), 5px 0 1px, 5px 1px 1px rgba(0, 0, 0, .7), 6px 0 1px, 6px 1px 1px rgba(0, 0, 0, .7), 7px 0 1px, 7px 1px 1px rgba(0, 0, 0, .7), 8px 0 1px, 8px 1px 1px rgba(0, 0, 0, .7), 9px 0 1px, 9px 1px 1px rgba(0, 0, 0, .7), 10px 0 1px, 10px 1px 1px rgba(0, 0, 0, .4), 1px 0 1px rgba(0, 0, 0, .7), 2px 0 1px rgba(0, 0, 0, .7), 3px 0 1px rgba(0, 0, 0, .7), 4px 0 1px rgba(0, 0, 0, .7), 5px 0 1px rgba(0, 0, 0, .7), 6px 0 1px rgba(0, 0, 0, .7), 7px 0 1px rgba(0, 0, 0, .7), 8px 0 1px rgba(0, 0, 0, .7), 9px 0 1px rgba(0, 0, 0, .7), 10px 0 1px rgba(0, 0, 0, .4)
    }
    body {
        color:red; 
        background-color: #4EAF47;  
        display: block; 
        margin-left: auto; 
        margin-right: auto; 
        width: 100%;
    }
    table {
        margin: auto;
        border-spacing: 1rem 0.5rem;
        font-size:2rem;
        text-shadow: 3px 3px 3px teal;
    }
    img {
        height: 30%; 
        width: 30%; 
        display:block; 
        margin-left: auto;
    }
    p {
        font-size: 8rem;
        position: relative;
        font-style: italic;
        text-align: center;
        text-shadow: var(--3DshadowE8);
        transform: rotateZ(-2deg)translate3d(0, 0, 0);
    }
```

<br>Das sind alles Stil-Attribute, die z.B. Farbe, Position oder Größe der einzelnen Elemente verändern. Wenn du das alles hinzugefügt hast, sollte dein Sketch in etwa so ausschauen:

{% include image.html image=page.image13 %}

## Heimserver aufrufen
Sollte das alles funktioniert haben, könnt ihr den Server unter eurer notierten IP-Adresse plus der angefügten URL erreichen. also z.B. `192.168.178.1/heimserver.html`. Hier ein Bild, wie es aussieht:

{% include image.html image=page.image %}