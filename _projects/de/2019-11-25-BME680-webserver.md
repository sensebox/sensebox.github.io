---
layout: project_page
name: "Heimserver mit der senseBox"
date: 2019-12-01
author: Yannick
abstract: "Ein eigener Heimserver mit der senseBox, der mit dem BME680 die Temperatur, Luftfeuchtigkeit und Luftdruck messen kann."
image: titelbild_webserver.jpg
image0: /images/projects/bme680-webserver/webserver_IP_auslesen_w_wifi_module.png
image1: /images/projects/bme680-webserver/ip_blockly.png
image2: /images/projects/bme680-webserver/ip_block_wo.png
image3: /images/projects/bme680-webserver/webserver_BME680_aufbau_w_wifi_module.png
image4: /images/projects/bme680-webserver/heimserver_blockly_setup.png
image5: /images/projects/bme680-webserver/heimserver_blockly_loop1.png
image6: /images/projects/bme680-webserver/heimserver_blockly_loop2.png
image7: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_1.png
image8: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_2.png
image9: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_3.png
image10: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_4.png
image11: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_5.png
image12: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_6.png
image13: /images/projects/bme680-webserver/heimserver_blockly_http_response_breakdown_7.png
image14: /images/projects/bme680-webserver/heimserver_blockly_http_response.png
image15: /images/projects/bme680-webserver/heimserver_blockly_full.png
image16: /images/projects/bme680-webserver/heimserver_site.png
material:
    - senseBox MCU
    - OLED Display
    - beliebiger Umweltsensor
ide: blockly   
version: ["edu", "mini"] 
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

### Aufbau IP
Hierzu benötigst du neben deiner senseBox MCU, das WiFi-Bee und einen OLED-Display. Das WiFi-Bee steckst du auf den XBEE1-Steckplatz und der Bildschirm wird in einen der I2C-Anschlüsse gesteckt und die MCU mit dem USB-Kabel verbunden.

{% include image.html image=page.image0 %}

### Blockly Programm IP
Nun erstellst du in [Blockly](https://blockly.sensebox.de/ardublockly/?lang=de#) den folgenden Sketch:

{% include image.html image=page.image1 %}

Den IP-Adresse-Block findest du unter dem Reiter Web und dann in der Kategorie Webserver, welche auch im nächsten Schritt noch häufiger genutzt wird.

{% include image.html image=page.image2 %}

Sollte soweit alles funktioniert haben, kannst du die IP auf dem Bildschirm sehen. Diese benötigen wir in Folgenden und bestenfalls notierst du sie auf einem Zettel.

## 2. Teil: Aufsetzen des Heimservers

### Aufbau Heimserver
Für den Bildschirm haben wir nun keine Verwendung mehr, dieser kann abgetrennt werden. Jedoch kann das JST-Kabel mit der senseBox MCU verbunden bleiben und der BME680-Sensor kann daran angeschlossen werden.

{% include image.html image=page.image3 %}

Die Sensoren des BME680(Temperatur, Luftdruck, Luftfeuchte) reichen uns aus um eine einfache kleine Wetterstation für zu Hause aufzusetzen. Ihr könnt aber auch gerne eine eigene Sensorkonfiguration benutzen, dazu muss an ein paar Stellen etwas verändert werden, was in den nächsten Schritten deutlicher wird.

### Blockly Heimserver 

#### Setup-Block
Wieder in Blockly, fügen wir den WiFi und den HTTP-Server-Block, wiederrum aus der Webserver-Kategorie, in das `Setup()`:

{% include image.html image=page.image4 %}

#### Endlosschleife-Block
Damit ist das Setup abgeschlossen und wir können uns die `Endlosschleife()` ansehen. Dort kommt zunächst als Grundstruktur diese Blockkombination, zum Teil aus der Logik-Kategorie(blau), aus der Textkategorie(türkis) und wieder aus der Webserver-Kategorie:

{% include image.html image=page.image5 %}

Der Übersicht halber hier nochmal alle genutzten Blöcke einzeln abgebildet:

{% include image.html image=page.image6 %}

#### HTML-Block
In den Logik-Block fügst du an das `mache` die Antwort deiner senseBox in HTML-Format.

{% include image.html image=page.image7 %}

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">HTML (Hypertext Markup Language)</h3>
  </div>
  <div class="panel-body">
    HTML ist keine Programmiersprache, wie man vielleicht denken könnte, sondern dient lediglich dazu Elemente auf einer Website zu kennzeichnen. Wenn du dir zum Beispiel die Website anschaust, auf der du dich gerade befindest, so kann man vereinfacht sagen, jedes Element, seien es Text, Bilder oder Suchfelder, haben einen oder mehrere Kennzeichner, so genannte Tags. Tags bestehen aus einem öffnenden und einem schließenden Tag.
  </div>
</div>

Beginnen wir mit dem unteren Teil des HTML-Blocks. So soll der `HTML-Body` des Sketches im Endeffekt aussehen:

<details>
  <summary>Gesamtansicht Body (klick mich)</summary>
  {% include image.html image=page.image14 %}
</details>
<br>

#### Grußnachricht
Blockly übernimmt für dich die schließenden Tags des HTML. Daher gilt allgemein, alles was an einen Tag angefügt wird, wird von ihm umschlossen. Als Beispiel zur Verdeutlichung hab ich hier die Überschrift nochmal einzeln dargestellt. `div` ist ein einfacher undefinierter Tag um Elemente zu gruppieren (Abk. vom englischen Wort Division). `p` steht für Paragraph und ist die standardmäßige Textform in HTML. In diesen Tag schreiben wir nun unsere Grußformel oder was uns gerade so einfällt, in meinem Fall  `senseBox, wie ist das Wetter? `. 

{% include image.html image=page.image11 %}

So würde es dann z.B. im Code ausschauen:
```html
<body>
  <div>
    <p>
        senseBox, wie ist das Wetter?
    </p>
    .
    .
    .
  </div>
</body>
```
<br>
Hier an dem Zahnrad kann man übrigens einstellen, wie viele Unterelemente ein Tag haben soll. Für unseren div-Tag brauchen wir drei Unterelemente für die Überschrift, die Tabelle und wir wollen ein Bild ans Ende der Seite einfügen. In diesem Fenster kannst du Elemente sowohl hinzufügen, als auch entfernen!

{% include image.html image=page.image10 %}

#### Sensordaten in Tabelle einfügen
Eine etwas komplexere Struktur in HTML sind Tabellen. Um unsere Sensorwerte ansehlich darzustellen, wollen wir diese aber hier nutzen. Zunächst nutzen wir also den Tag `table`. Daran kommen vier Reihen, der Tabellenkopf mit den Überschriften `Sensor` und `Wert` und die Tabellenzeilen für die Eintragung der Werte.
Im Endeffekt schaut das ganze dann so aus:

{% include image.html image=page.image12 %}

#### Bild einfügen
Das letzte Puzzlestück im Body wird das `img`-Tag. Daran wird nichts gesteckt, da es lediglich ein Bild von einer anderen Seite darstellt. Den Link fügt man dazu in den Tag in die Anführungszeichen. Du kannst ein beliebiges Bild nutzen, wenn du das aus dem Beispiel nutzen möchtest, kopiere den folgenden Link:<br>  `https://raw.githubusercontent.com/yhallowiegeht/adventsproject_heimserver/master/senseBox_weihnachten.png`

{% include image.html image=page.image13 %}

#### Stil-Attribute für den senseBox-Look
Vielleicht ist dir aufgefallen, dass wir im HTML-Teil eine Stelle bisher übergangen haben. Denn mit dem `HTML-Head` haben wir uns noch gar nicht befasst. Das wäre auch völlig in Ordnung, denn auch ohne dort etwas einzufügen, würde unser Heimserver bereits super funktionieren. Jedoch ist es immer schön etwas fürs Auge zu haben. Dazu fügst du diesen link-Tag ein mit folgendem Inhalt:

`<link rel='stylesheet' type='text/css' href='https://dl.dropbox.com/s/a8x5o6k4hajcowp/style.css'>`

Das sind alles Stil-Attribute, die z.B. Farbe, Position oder Größe der einzelnen Elemente verändern.

{% include image.html image=page.image9 %}

#### Lösung
Wenn du das alles hinzugefügt hast, sollte dein Sketch in etwa so ausschauen:

<details>
  <summary>Lösung (klick mich)</summary>
  {% include image.html image=page.image15 %}
</details>
<br>

## Heimserver nutzen
Nun müsst ihr nur noch das Skript auf eure senseBox übertragen. Am einfachsten geht das natürlich in Blockly, indem ihr das Skript kompiliert und die entstandene BIN-Datei auf eure senseBox zieht. Sollte das alles funktioniert haben, könnt ihr den Server unter eurer notierten IP-Adresse plus der angefügten URL erreichen. also z.B. `192.168.178.1/heimserver.html`. Hier ein Bild, wie es dann aussieht:

{% include image.html image=page.image16 %}

Für alle die es weiterführend interessiert oder zu faul sind die Blöcke alle einzeln zu setzen, findet ihr [hier](https://github.com/yhallowiegeht/adventsproject_heimserver) ein github-Repository mit den beiden Blockly-Sketches, den fertigen arduino-Skripts und dem zu grunde liegenden HTML.