---
layout: project_page
name: "TTN Decoding for Dummies"
date: 2019-03-04
author: Felix
abstract: "A small walkthrough"
image: /ttn-decoding/animation.gif
lang: en
tags: ["LoRaWAN", "TTN"]
difficult: "medium"
---
# TTN Decoding isn't hard
It's just about understanding bytes. After that is done, it's quite simple to create a fast solution in order to access your data measured by senseBox.

__Scenario:__ Sending an abritary number of measurements with LoRaWAN via The Things Network to openSenseMap.

## Theory
LoRaWAN isn't suitable for large amount of data. That's why we usually send our information in small byte chunks. It is important to think about the number of bytes that are suitable to contain all neccesary information. One byte contains 8 bit. That means, you can differentiate between 256 values. 2 bytes contain 16 bits where you can differentiate between 65.536 values.

The following table identifies which range how many bytes provide:

| Bytes | Bit | min (signed)   | max (signed)  | min (unsigned) | max (unsigned) |
|-------|-----|----------------|---------------|----------------|----------------|
| 1     | 8   | -128           | 127           | 0              | 255            |
| 2     | 16  | −32.768        | 32.767        | 0              | 65.535         |
| 3     | 24  | −2.147.483.648 | 2.147.483.647 | 0              | 4.294.967.295  |

As you can see, there are two range types: signed and unsigned. Signed values range from negative values to positive values. Unsigned values are only positive values. These values are also no decimal numbers but only integer numbers.

Example: you want to measure humidity values. These values can range between 0% and 100%. Of course, you could use 1 byte to represent a humidity reading. If you want to use two decimal digits however, this representation can't be used anymore. You will need to use 2 bytes and think about a conversion formula. 

Imagine we are measuring 85.42%. A simple approach would be to take the measurement and multiply it by 100. Now we have a measurement of `85.42 * 100 = 8542`. We can encode 8542 to two bytes, send them to TTN and encode these two bytes again to get 8542. This number can now be divided by 100 and we get our measurement of 85.42%. That's basically how it works.

## Programming

__Arduino__
On Arduino side we are using the [lora-serialization](https://github.com/thesolarnomad/lora-serialization) library. According to the documentation there is a [function](https://github.com/thesolarnomad/lora-serialization#unsigned-16bit-integer-2-bytes) to send unsigned (only positive values) 16 bit (range from 0 to 65.535) integer (no decimals) values. To send humidity values to TTN, we can use this function
```c
humidity = HDC.readHumidity();
message.addUint16(humidity * 100);
```
Keep in mind to multiply your measurement by 100 in order to keep two decimals.

Sending additional temperature values needs a little bit of thinking. As temperature can contain negative values, we need to convert it to positive values first. And to keep decimals, we also need to multiply it. This is the function we are using to encode temperature values
```c
temperature = HDC.readTemperature();
message.addUint16((temperature + 18) * 771);
```

__TTN__
So there are two values arriving from a senseBox on TTN. Now, we need to keep the order of bytes in mind. To decode bytes to integer values, I usually use the following method to convert bytes to an unsigned integer
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

Below that, I can create my decoder
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

That function takes the first two bytes and converts them to the humidity reading. Then, the next two bytes are converted to a temperature reading. When you are using the openSenseMap endpoint `https://ttn.opensensemap.org/v1.1` in your TTN HTTP integration, the measurements are matched with your sensor IDs and you can see the measurements on openSenseMap. Read more about the openSenseMap TTN integration [here](https://sensebox.github.io/books-v2/osem/ttn_integration.html)

## Keep in mind
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

→ If you want to see a full example of a senseBox MCU sending temperature, humidity, pressure, illuminance, UV, PM10, PM2.5, 2x soil moisture, 2x soil tempoerature and ultrasonic distance values over LoRaWAN to TTN, check out this code: [https://gist.github.com/felixerdy/f3cebe0aeddf942043f49052308e1551](https://gist.github.com/felixerdy/f3cebe0aeddf942043f49052308e1551). The corresponding decoding is here [https://gist.github.com/felixerdy/04f8ee955a4f5828be97eb981e5b2d27](https://gist.github.com/felixerdy/04f8ee955a4f5828be97eb981e5b2d27).


