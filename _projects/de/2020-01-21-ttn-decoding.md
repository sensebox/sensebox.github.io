---
layout: project_page
name: "TTN Decoding für Anfänger"
date: 2020-01-23
author: Felix u Mario
abstract: "Eine kleine Anleitung zum Decoding in TTN"
image: /ttn-decoding/animation.gif
lang: de
tags: ["LoRaWAN", "TTN"]
difficult: "mittel"
---
# TTN Decoding für Anfänger

Es geht nur darum, Bytes zu verstehen. Nachdem das erledigt ist, ist es ganz einfach, eine schnelle Lösung zu erstellen, um auf deine, von senseBox gemessenen Daten, zuzugreifen.

__Szenario:__ Senden einer willkürlichen Anzahl von Messungen mit LoRaWAN über The Things Network an die openSenseMap.


## Theory
LoRaWAN ist nicht geeignet für das Senden von großen Datenmengen, deshalb werden die Informationen in kleine Bytes unterteilt und gesendet. Ein Byte enhält 8 Bit. Das heißt, man kann zwischen 256 verschiedenen Werten unterscheiden. 2 Bytes enhalten schon 16 Bits, sodass es möglich ist zwischen 65536 Werten zu unterscheiden.

Die nachfolgende Tabelle gibt eine Übersicht üer die Bandbreite:


| Bytes | Bit | min (signed)   | max (signed)  | min (unsigned) | max (unsigned) |
|-------|-----|----------------|---------------|----------------|----------------|
| 1     | 8   | -128           | 127           | 0              | 255            |
| 2     | 16  | −32.768        | 32.767        | 0              | 65.535         |
| 3     | 24  | −2.147.483.648 | 2.147.483.647 | 0              | 4.294.967.295  |

In der Tabelle gibt es zwei verschiedenen Typen: "signed" und "unsigned". Signded Werte decken sowohl den positiven als auch negativen Wertebereich ab. 

Beispiel: Du möchtest die Luftfeuchtigkeit messen. Die Werte liegen zwischen 0% und 100%. Es handelt sich aber um keine Kommazahlen sondern nur um Ganzzahlige Werte. Man könnte nun ein Byte verwenden, welcher die Wert für die Luftfeuchtigkeit entspricht. Möchte man allerdings eine Dezimalzahl mit zwei Nachkommastellen versenden, reicht 1 Byte nicht mehr aus. 2 Bytes müssen verwendet werden.  

Stellen dir vor vor, wir messen 85,42%. Ein einfacher Ansatz wäre es, die Messung zu nehmen und mit 100 zu multiplizieren. Nun haben wir ein Wert von 85,42 * 100 = 8542. Wir können 8542 in zwei Bytes kodieren, sie an TTN senden und diese zwei Bytes decodieren, um 8542 zu erhalten. Diese Zahl kann nun durch 100 geteilt werden, und wir erhalten den Wert von 85,42%. So funktioniert es im Grunde genommen.


## Programming

__Arduino__
Auf der Arduino Seite wird die [lora-serialization](https://github.com/thesolarnomad/lora-serialization) Bibliothek verwendet. Die Dokumentation zeigt eine[Funktion](https://github.com/thesolarnomad/lora-serialization#unsigned-16bit-integer-2-bytes) um einen Wert als mit 16 Bit zu versenden. Diese Funktion kann genutzt werden um die Werte für Luftfeuchtigkeit zu versenden.
```c
humidity = HDC.readHumidity();
message.addUint16(humidity * 100);
```

Denke daran deinen Messwert mit 100 zu multiplizieren, um die Nachkommastellen beizubehalten.

Da der Wert für die Temperatur auch in den negativen Bereich fallen kann muss zunächst der Wert in einen positven konvertviert werden und anschließend mit einem Wert multipliziert werden um die Nachkommastellen zu behalten. 
```c
temperature = HDC.readTemperature();
message.addUint16((temperature + 18) * 771);
```
In diesem Beispiel wird ein Temperatursensor verwendet, der Werte ab -18 Grad Celsius gemessen hat und die Temperatur mit einer Genauigkeit von 0.0013 Grad Celsius rausgibt. 

__TTN__
In der TTN Console kommen nun zwei verschiedene Werte von der senseBox an. Diese Werte müssen nun mithilfe eines Decoders wieder von Bytes zu den ursprünglichen Werte decodiert werden.
```js
/**
 * Convert the array of bytes to an unsigned integer, LSB. 
 *
 * BEWARE: This is only safe up to 0x1FFFFFFFFFFFFF, so: 6 bytes.
 */
function uint(bytes) {

  return bytes.reduceRight(function(acc, b) {
    // We expect an unsigned value, so to support more than 3 bytes
    // don't use any bitwise operators, which would always yield a
    // signed 32 bits integer instead.
    return acc * 0x100 + b;
  }, 0);
}
```

Hier kann nun der Decoder definiert werden
```js
function Decoder(bytes) {

  var i = 0;     
  var decoded = {};
  // The index in the bytes array that needs to be handled next;
  // use along with "i++" which returns the current value, and
  // then increments it for the next usage


  // Relative humidity with 0.01 precision, 0.00 through 100.00, LSB
  var humidity = uint(bytes.slice(i, i+=2)) / 100;
  // Temperature with 0.0013 precision, -18.000 through 67.000, LSB
  var temperature = uint(bytes.slice(i, i+=2)) / 771 - 18;
  // Unary plus operator to cast string result of toFixed to number
  temperature = +temperature.toFixed(3);
  
  decoded['TEMPERATURE_SENSOR_ID'] = temperature
  decoded['HUMIDITY_SENSOR_ID'] = humidity
  
  return decoded;
}
```
Die Funktion nimmt die ersten zwei Bytes und konvertiert sie zu zum Messwert für Luftfeuchtigkeit. Die nächsten zwei Bytes werden zu einem Messwert für die Temperatur konvertiert. Wenn du die openSenseMap als Endpunkt (`https://ttn.opensensemap.org/v1.1`)in der TTN HTTP integration verwendest, werden die Messwerte mit deinen Sensor IDs verknüpft und die Messwerte auf der openSenseMap angezeigt. Mehr über die openSenseMap TTN integration findest du [hier](https://sensebox.github.io/books-v2/osem/ttn_integration.html)

## Wichtige Punkte
There are a few things that you need to keep in mind. 

→ Decoding fails / returns false values when you are not sending everything that needs to be decoded. If the decoder accepts e.g. a humidity and a temperature value, but your Arduino is only sending a humidity value, you will not receive correct values.

→ Sending 3 byte values is a little different. Illuminance values can be higher that the maximum of 2 byte integer. Therefore, you will need 3 bytes. You can send a 3 byte message like this: 
```c
lux = TSL.readLux();
message.addUint8(lux);
message.addUint16(lux >> 8);
```
and decode it like this:
```js
var lux = bytes[i] | bytes[i+1]<<8 | bytes[i+2]<<16;
i = i + 3 // increment counter afterwards
```

→ You need to use the JSON decoding profile on openSenseMap when you are writing the decoder by yourself. Read more about the openSenseMap TTN integration [here](https://sensebox.github.io/books-v2/osem/ttn_integration.html)

→ The lora-serialization library provides enhanced functions to send coordinates (`message.addLatLng(-33.905052, 151.26641)`) or temperature (`message.addTemperature(-2.43)`). The corresponding functions to decode the values on TTN can be found here: [https://github.com/thesolarnomad/lora-serialization/blob/master/src/decoder.js](https://github.com/thesolarnomad/lora-serialization/blob/master/src/decoder.js)

→ If you want to see a full example of a senseBox MCU sending temperature, humidity, pressure, illuminance, UV, PM10, PM2.5, 2x soil moisture, 2x soil tempoerature and ultrasonic distance values over LoRaWAN to TTN, check out this code: [https://gist.github.com/felixerdy/a42dab711531a8ac587a96b5ab7b24cf](https://gist.github.com/felixerdy/a42dab711531a8ac587a96b5ab7b24cf). Den entsprechenden Decoder findes du hier: [https://gist.github.com/felixerdy/04f8ee955a4f5828be97eb981e5b2d27](https://gist.github.com/felixerdy/04f8ee955a4f5828be97eb981e5b2d27).


