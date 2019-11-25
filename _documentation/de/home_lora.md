---
layout: documentation
title: "senseBox:home mit LoRa"
date: 2017-05-11
thumbnail: /images/blog_images/screenshot_osem.png
lang: de
system: home
image1: /images/documentation/de/home_lora/01_aufbau.png
image2: /images/documentation/de/home_lora/mcu_verschraubung.jpeg
---
# senseBox:home mit LoRa

Verwendet die LoRa-Schnittstelle um Daten ins Internet zu übertragen. Neu ist das LoRa WAN-XBee-Modul, mit dem eine stromsparende und kostenlose Möglichkeit der Datenübertragung ins Internet über den LoRa-Funk-Standard ermöglicht wird. Dafür werden bestehende LoRa-Netzwerke, wie zum Beispeil TheThingsNetwork genutzt um Daten zu übertragen. Die hierzu benötigte Infrastruktur wird bei TheThingsNetwork von der Community bereit gestellt, und ist in immer mehr Regionen verfügbar.


![Lora Bee](../../../../pictures/LoraBee%20bottom.png)

# Technische Informationen
* HopeRF RFM95W/RFM96W LoRa Transceiver
* LoRa-Bee 868 / 915 MHz nutzt RFM95W (SX1276 kompatibel)
* LoRa-Bee 433 / 470 MHz nutzt RFM96W (SX1276 kompatibel)
* SPI interface
* Bezeichnung: RFN9xW
* Maße: 46mm x 25mm x 12mm
* Gewicht: 1,1 g

# Hinweise
Bitte prüfe bevor du dir eine senseBox mit LoRa Bee holst, ob dein Gebiet bereits von LoRa erschlossen ist: https://www.thethingsnetwork.org/community#list-communities-map


# Upload über LoRaWAN

Es ist möglich Sensordaten per LoRaWAN™ durch das [TheThingsNetwork](https://thethingsnetwork.org)
(TTN) auf die openSenseMap zu laden.
LoRa ist ein zunehmend Verbreitung findender Funkstandard, welcher ähnlich wie
WiFi digitale Datenübertragung in einem IP-Netzwerk erlaubt, jedoch deutlich
andere Features bietet:

- Datendurchsatz: 300 - 3000 Bit/s
- Reichweite:     bis zu 15km 

TTN ist eins von mehreren Projekten, welches die zur Funk-Hardware zugehörige
Infrastruktur für das IP-Netzwerk implementiert, wodurch registrierte Geräte
mit dem Internet verbunden werden können.

Nutzer können *Gateways* sowie *Nodes* zu dem Netzwerk hinzufügen.


## TTN openSenseMap Integration
Die openSenseMap bietet eine direkte Integration in das TTN Netzwerk, was die
Konfiguration stark vereinfacht. Hierfür musst du einen Account [TheThingsNetwork](https://thethingsnetwork.org) erstellen.

### Registrierung in TTN Console

Um ein Gerät in das TTN einzubinden, muss für dieses zunächst unter
[thethingsnetwork.org](https://console.thethingsnetwork.org/)
eine *Application* und ein *Device* registriert werden. Die Application und Device ID können frei gewählt werden. Die EUIs lässt man sich am besten generieren. Dann erhält man eine `app_id` und eine `dev_id`.

Für die registrierte Application muss die *HTTP Integration* unter <https://console.thethingsnetwork.org/applications/DEINE_APPID/integrations/create/http-ttn>
aktiviert werden. Diese muss konfiguriert werden, dass sie die Nachrichten von
Devices per `POST` an `https://ttn.opensensemap.org/v1.1` weiterleitet. Das
Authorization-Feld kann leer bleiben! Unter Access Key den `default key` auswählen.

<img src="https://raw.githubusercontent.com/sensebox/resources/master/images/osem_ttnconsole.png" alt="ttnconsole" center width="767" />

Gehe nun auf die openSenseMap und registriere eine senseBox mit deinen Sensoren die du angeschlossen hast.
Für die Datenübertragung zur openSenseMap müssen die `app_id` und `dev_id` bei
der Registrierung auf der openSenseMap in der TTN-Konfiguration angegeben
werden. Darüber hinaus muss ein passendes Decoding-Profil konfiguriert werden,
welches bestimmt wie die - wegen der geringen Bandbreite als rohe Bytes 
übertragenen - Daten als Messungen interpretiert werden sollen.

<div class="box_warning">
     <i class="fa fa-exclamation-circle fa-fw" aria-hidden="true" style="color: #f0ad4e"></i>
    <b>Wichtig:</b> Wenn du den Feinstaubsensor anschließen willst musst du im Dekodierungs-Profil <b>JSON</b> auswählen. Wenn du nur die anderen Sensoren benutzt kannst du <b>senseBox:home</b> auswählen. Das LoRa-Bee wird wie alle Übertragungsmodule an den XBEE1-Sockel angeschlossen.  
</div>

<img src="https://raw.githubusercontent.com/sensebox/resources/master/images/osem_register_ttn.png"  alt="osemregister" center width="767"/>

Optional kann im Feld `port` noch der Port angegeben werden, auf welchem
der Sender seine Daten an das TTN schickt. So lassen sich die selbe `app_id`
und `dev_id` für mehrere Sensorstationen verwenden.

### Arduino Sketch 
So könnte ein Arduino Sketch aussehen, mit dem du Daten über das TTN-Netzwerk an die openSenseMap senden kannst.

<div class="box_warning">
     <i class="fa fa-exclamation-circle fa-fw" aria-hidden="true" style="color: #f0ad4e"></i>
    <b>Wichtig:</b> Du musst deine eben erstellte <b>Application-EUI, Device-EUI</b> und den <b>App-Key</b> in den Sketch einfügen. Dies machst du in den ersten Zeilen des Programmcode wo in Großbuchstaben <b>'INSERT YOUR ID HERE'</b> steht. <br><br> Achte darauf, dass auf der TTN-Homepage du für die <b>Device-EUI</b> und die <b>Application-EUI</b> das <b>lsb</b>-Format und für den <b>App-Key</b> das <b>msb</b>-Format ausgewählt hast!
</div>

![Ausgewählte ID's und Keys](../../../../pictures/LoRa_TTN_EUI.png)


### Decoding Profile
Für eine Box muss passend zu den übertragenen Messdaten ein Decoding-Profil
ausgewählt oder definiert werden.
Die Auswahl des Decoding-Profils ist von dem Encoding der Nachrichten auf dem
Mikrocontroller, und ob im TTN eine Payload-Function eingestellt wurde abhängig.

- Für die senseBox:home (ohne Erweiterungen) kann das `senseBox:home` Profil
verwendet werden.
- Werden die Messungen auf der LoRa-Node mit der `lora-serialization`-Library
encodiert, sollte das `lora-serialization` Profil verwendet werden.
- Mit dem `json` Profil werden beliebige andere Encodings unterstuetzt, falls eine
Payload-Function in der TTN Console die Nachrichten passend decodiert.

Im Folgenden wird erklärt wie die unterstützten Profile konfiguriert werden:

#### sensebox/home
Dieses Profil ist zugeschnitten auf die mit der senseBox:home gelieferten Sensoren.
Neben der Angabe `sensebox/home` unter `profile` ist keine weitere Konfiguration
notwendig.
<br><b>Dies funktioniert nur ohne die Feinstaub(PM2.5 und PM10) Sensoren</b>

Zusätzlich zu dem Arduino Sketch musst du auf der TTN-Homepage einen Decoder einrichten, sodass deine Messwerte im richtigen Format an die openSenseMap gesendet werden.
![Im Overview Fenster zu "Payload Formats" navigieren](../../../../pictures/decoder_1st.png)

![In der Textbox muss der Decoder nun eingefügt werden](../../../../pictures/decoder_code.png)

<h1 id="decoder"></h1>
<div class="box_warning">
     <i class="fa fa-exclamation-circle fa-fw" aria-hidden="true" style="color: #f0ad4e"></i>
    <b>Wichtig:</b> Hier musst du deine <b>sensor ID's</b> nachtragen.
</div>

```javascript
function Decoder(bytes, port) {
  // bytes is of type Buffer.
  'use strict';
  var TEMPSENSOR_ID = 'YOUR TEMPERATURE SENSOR ID HERE',
    HUMISENSOR_ID = 'YOUR HUMIDITY SENSOR ID HERE',
    PRESSURESENSOR_ID = 'YOUR PRESSURE SENSOR ID HERE ',
    LUXSENSOR_ID = 'YOUR LUXSENSOR ID HERE ',
    UVSENSOR_ID = 'YOUR UV SENSOR ID HERE';

  var bytesToInt = function (bytes) {
    var i = 0;
    for (var x = 0; x < bytes.length; x++) {
      i |= +(bytes[x] << (x * 8));
    }
    return i;
  };

  var uint8 = function (bytes) {
    if (bytes.length !== uint8.BYTES) {
      throw new Error('int must have exactly 1 byte');
    }
    return bytesToInt(bytes);
  };
  uint8.BYTES = 1;

  var uint16 = function (bytes) {
    if (bytes.length !== uint16.BYTES) {
      throw new Error('int must have exactly 2 bytes');
    }
    return bytesToInt(bytes);
  };
  uint16.BYTES = 2;

  var humidity = function (bytes) {
    if (bytes.length !== humidity.BYTES) {
      throw new Error('Humidity must have exactly 2 bytes');
    }

    var h = bytesToInt(bytes);
    return h / 1e2;
  };
  humidity.BYTES = 2;

  var decode = function (bytes, mask, names) {

    var maskLength = mask.reduce(function (prev, cur) {
      return prev + cur.BYTES;
    }, 0);
    if (bytes.length < maskLength) {
      throw new Error('Mask length is ' + maskLength + ' whereas input is ' + bytes.length);
    }

    names = names || [];
    var offset = 0;
    return mask
      .map(function (decodeFn) {
        var current = bytes.slice(offset, offset += decodeFn.BYTES);
        return decodeFn(current);
      })
      .reduce(function (prev, cur, idx) {
        prev[names[idx] || idx] = cur;
        return prev;
      }, {});
  };

  var bytesToSenseBoxJson = function (bytes) {
    var json;

    try {
      json = decode(bytes,
        [
          uint16,
          humidity,
          uint16,
          uint8,
          uint16,
          uint8,
          uint16
        ],
        [
          TEMPSENSOR_ID,
          HUMISENSOR_ID,
          PRESSURESENSOR_ID,
          LUXSENSOR_ID + '_mod',
          LUXSENSOR_ID + '_times',
          UVSENSOR_ID + '_mod',
          UVSENSOR_ID + '_times'
        ]);

      //temp
      json[TEMPSENSOR_ID] = parseFloat(((json[TEMPSENSOR_ID] / 771) - 18).toFixed(1));

      //hum
      json[HUMISENSOR_ID] = parseFloat(json[HUMISENSOR_ID].toFixed(1));

      // pressure
      if (json[PRESSURESENSOR_ID] !== '0') {
        json[PRESSURESENSOR_ID] = parseFloat(((json[PRESSURESENSOR_ID] / 81.9187) + 300).toFixed(1));
      } else {
        delete json[PRESSURESENSOR_ID];
      }

      // lux
      json[LUXSENSOR_ID] = (json[LUXSENSOR_ID + '_times'] * 255) + json[LUXSENSOR_ID + '_mod'];
      delete json[LUXSENSOR_ID + '_times'];
      delete json[LUXSENSOR_ID + '_mod'];

      // uv
      json[UVSENSOR_ID] = (json[UVSENSOR_ID + '_times'] * 255) + json[UVSENSOR_ID + '_mod'];
      delete json[UVSENSOR_ID + '_times'];
      delete json[UVSENSOR_ID + '_mod'];

    } catch (e) {
      json = { payload: bytes };
    }

    return json;
  };

  return bytesToSenseBoxJson(bytes);
}
```

#### lora-serialization
Für Sensorstationen, welche eine spezielle Sensorkonfiguration haben, können
durch das `lora-serialization` Profil nahezu beliebige Daten annehmen.
Hierzu nutzen wir die [`lora-serialization`](https://github.com/thesolarnomad/lora-serialization)
Bibliothek, welche ein einheitliches Encoding auf dem Microcontroller, und
Decoding am anderen Ende der Leitung erlaubt.

Es werden die Encodings `temperature`, `humidity`, `unixtime`, `uint8` und
`uint16` unterstützt, welche pro Sensor unter **Dekodierungsoptionen** angegeben
werden müssen.  Die Zuordnung des Sensors kann über eine der Properties
`sensor_id`, `sensor_title`, `sensor_unit`, `sensor_type` erfolgen.

Ein Beispiel für zwei Sensoren sähe so aus:

```json
[
  { "decoder": "temperature", "sensor_title": "Temperatur" },
  { "decoder": "humidity", "sensor_unit": "%" }
]
```

> ***Hinweis:*** *Die Reihenfolge der Sensoren muss hier beim Arduino und der
> openSenseMap identisch sein!*

Wenn ein `unixtime` Decoder angegeben wird, wird dessen Zeitstempel für alle im
Folgenden angegebenen Messungen verwendet.
Andernfalls wird der Moment verwendet, in dem das erste Gateway die Nachricht
erhält. Beispiel: 

```json
[
  { "decoder": "unixtime" },
  { "decoder": "temperature", "sensor_title": "Temperatur" }
]
```

#### json - Decoding mit TTN Payload Function
Falls die `lora-serialization` Library nicht zur Wahl steht, können Messungen
schon auf Seite des TTN mittels einer *Payload Function* dekodiert werden,
sodass hier beliebige Datenformate unterstützt werden.

![In der TTN Console muss eine Payload Function definiert werden](https://raw.githubusercontent.com/sensebox/resources/master/images/lora_ttn_payloadfunc.png)

Das resultierende JSON muss kompatibel mit den von der [openSenseMap-API verstandenen
Measurement Formaten sein](https://docs.opensensemap.org/#api-Measurements-postNewMeasurements).
Ein einfaches Beispiel:

```json
{ "sensor_id1": "value1, "sensor_id2: "value2" }
```

Ein Beispiel dafür wurde dir [oben](#decoder) gezeigt.

Auf Seiten der openSenseMap ist keine Konfiguration notwendig.
