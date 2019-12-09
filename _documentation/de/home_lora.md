---
layout: documentation
title: "senseBox:home mit LoRa"
date: 2017-05-11
thumbnail: /images/blog_images/screenshot_osem.png
lang: de
system: home
image1: /images/projects/lora-osem-tago/station_anlegen_ttn.PNG
image2: /images/projects/lora-osem-tago/station_anlegen_ttn_final.PNG
image3: /images/projects/lora-osem-tago/device_anlegen_ttn.PNG
image4: /images/projects/lora-osem-tago/device_anlegen_ttn_overview.PNG
image5: /images/projects/lora-osem-tago/Auswahl_OSEM.PNG
image6: /images/projects/lora-osem-tago/Auswahl_OSEM_2.PNG
image7: /images/projects/lora-osem-tago/osem_zusammenfassung.PNG
image8: /images/projects/lora-osem-tago/device_overview_right_format.PNG
image9: /images/projects/lora-osem-tago/Integration.PNG
image10: /images/projects/lora-osem-tago/tago_add_devices.PNG
image11: /images/projects/lora-osem-tago/Tago_add_dashboard.PNG
image12: /images/projects/lora-osem-tago/sensor_id_erkennen.PNG
image13: /images/projects/lora-osem-tago/Integration_osem.PNG
---
# senseBox:home mit LoRa


Deine senseBox:home kann um eine LoRa-Bee erweitert werden um die Daten über LoRa-WAN an die openSenseMap zu schicken. Die Daten werden über das freie Netzwerk [TheThingsNetwork](https://www.thethingsnetwork.org/) ins Internet gesendet.
Die Messwerte der Sensoren für Beleuchtungsstärke & UV, Temperatur & Luftfeuchtigkeit und Luftdruck sollen dabei übermittelt werden. Anschließend können die Daten zusätzlich zur openSenseMap auch auf der Plattform [tago.io](https://tago.io/) angezeigt werden.

## Grundlagen
Das TheThingsNetwork ist eine communitybasierte Initiative zur Errichtung eines globalen LPWAN-Internet-of-Things-Netzwerks. Über das Netzwerk können kostenlos und über große Distanzen Daten übermittelt werden. Mehr dazu findest du [hier](https://de.wikipedia.org/wiki/The_Things_Network). Bevor du mit dem Projekt beginnst, überprüfe ob ein Gateway - der LoRaWan - in deiner Nähe bereitgestellt ist. Am einfachsten kannst du dies über die Website  [ttnmapper](https://ttnmapper.org/) machen. 

## Aufbau
Die Sensoren werden mit JST-Kabel mit der I2C/Wire Ports der senseBox MCU verbunden. Das LoRa-Bee wird auf den XBEE1 Steckplatz gesteckt. Hast du die senseBox:home bereits aufgebaut, musst du nur das LoRa-Bee mit dem Wifi-Bee tauschen. 

## Registrierung bei TheThingsNetwork und auf der openSenseMap

Registrierst du einen senseBox:home mit LoRa Modul auf der openSenseMap wird dir ein fertiger Programmcode generiert.  Um den Code richtig generieren zu lassen, brauchst du jedoch einige Informationen aus dem TheThingsNetwork.

### Registrierung auf TheThingsNetwork und anlegen einer Application

Besuche die Website [thethingsnetwork.org](https://www.thethingsnetwork.org/) und erstelle dir einen Account. Wenn du eingeloggt bist, siehst du in der Kopfzeile der Startseite eine Option "Learn". Diese klickst du an und wählst auf der nachfolgenden Seite "Applications" und anschließend "add application" aus. Gib dort eine "Application ID" an, welche einzigartig ist. Alle anderen Auswahlmöglichkeiten lässt du unverändert.

{% include image.html image=page.image1 %}

Danach erhälst du eine Übersicht mit der gewählten "Application ID" und die "Application EUIS". 

{% include image.html image=page.image2 %}

Nun musst du in deiner neuen Application noch ein Device hinzufügen. Gehe dafür unter der Rubrik "Devices" auf "register device". Gib deinem Device eine "Device ID". Durch klicken auf die geschlungenen Pfeile ("generate") bei "DeviceEUI" wird dir automatisch einen DeviceEUI generiert.

{% include image.html image=page.image3 %}

Klicke dann auf "Register" und du erhälst folgende Übersicht mit der "Application ID" und der "Device ID", die du beide anschließend bei der Registrierung auf der openSenseMap brauchst.

{% include image.html image=page.image4 %}

Da die Daten später an die openSenseMap gesendet werden sollen, brauchst du noch eine sogenannte "Integration". Diese findest du oben in deinem Menü. Klicke darauf und klicke dann gleich auf den Button mit der Aufschrift "Add Integration". Dort hast du dann die Möglichkeit, verschiedenste Integrations hinzuzufügen, um die Daten von TTN an andere Services weiterzuleiten. Wähle dort die "HTTP Integration" aus. Gib nun eine "Process ID" an, die du frei wählen kannst. Danach wählst du noch "default key" im Dropdown Menü bei "Access Key" aus. Schließlich gibst du noch an, wohin die Daten gesendet werden sollen, zur URL: https://ttn.opensensemap.org/v1.1 und klickst dann auf "Add Integration"

{% include image.html image=page.image13 %}


### Registrierung auf der openSenseMap

Falls du noch keinen Account hast, registriere dich auf der openSenseMap und lege eine neue senseBox an. Akzeptiere die Datenschutzerklärung und gib der Station einen Namen. Gib an, ob die Station drinnen oder draußen steht. Wähle deinen Standort und wähle anschließend in der Rubrik Hardware die "senseBox:home V2" aus. Wähle dann dein Set-up mit LoRa-Bee und den verwendeten Sensoren.

{% include image.html image=page.image5 %}

Da du das LoRa-Bee gewählt hast, öffnet sich automatisch die Rubrik TheThingsNetwork - TTN. Dort musst du nun die "Application ID" und die "Device ID" eingeben, wie du diese bei TTN bestimmt hast.

{% include image.html image=page.image6 %}

Du kommst dann auf eine Übersichtsseite und kannst dort auf "Abschließen" klicken und erhälst eine Zusammenfassung. In dieser findest du auch den Arduino Code, der schon für deine Station vorbereitet ist.

{% include image.html image=page.image7 %}


## Einstellungen in der Arduino IDE

Öffne nun Arduino und kopiere den generierten Code der openSenseMap in die Programmierumgebung. Hast du die Arduino IDE und das Board Support-Package noch nicht installiert und weißt nicht genau wie der Programmcode übertragen wird findest du eine Anleitung [hier](/documentation/de/arduino_ide.html).  Scrolle zur Stelle im Code, an der du die Schlüssel "DEVEUI" den "APPEUI" und den "APPKEY" eingeben musst. 

```arduino


// This EUI must be in little-endian format, so least-significant-byte (lsb)
// first. When copying an EUI from ttnctl output, this means to reverse
// the bytes.
static const u1_t PROGMEM DEVEUI[8]={0x10, 0xC0, 0x7F, 0xE2, 0xCF, 0xB9, 0x34, 0x00 };
void os_getDevEui (u1_t* buf) { memcpy_P(buf, DEVEUI, 8);}

// This EUI must be in little-endian format, so least-significant-byte (lsb)
// first. When copying an EUI from ttnctl output, this means to reverse
// the bytes. For TTN issued EUIs the last bytes should be 0xD5, 0xB3,
// 0x70.
static const u1_t PROGMEM APPEUI[8]={ 0x24, 0xBE, 0x01, 0xD0, 0x7E, 0xD5, 0xB3, 0x70 };
void os_getArtEui (u1_t* buf) { memcpy_P(buf, APPEUI, 8);}

// This key should be in big endian format (msb) (or, since it is not really a
// number but a block of memory, endianness does not really apply). In
// practice, a key taken from ttnctl can be copied as-is.
// The key shown here is the semtech default key.
static const u1_t PROGMEM APPKEY[16] = { 0x5A, 0x9D, 0x13, 0xEB, 0x5A, 0x1F, 0x01, 0xD7, 0x35, 0x90, 0x85, 0xE5, 0x36, 0x18, 0x10, 0x6C };
void os_getDevKey (u1_t* buf) {  memcpy_P(buf, APPKEY, 16);}


```

Wie du in der Beschreibung des Codes lesen kannst, ist es hier wichtig, das Format der Schlüssel richtig einzusetzen. Die "Device EUI" und die "Application EUI" werden im 
```lsb``` Format kopiert und eingefügt. Der AppKey im ```msb``` Format. 

Beim Kopieren der Schlüssel musst du deshalb darauf achten, dass deine Device Overview wie im folgenden Bild eingestellt ist. Du kannst das Format der Darstellung ändern,
indem du auf die Icons am Anfang drückst (<> und ->)

{% include image.html image=page.image8 %}


Jetzt kannst du deinen Code übertragen und deine senseBox übermittelt Daten an TTN, sowie an die openSenseMap.

   