---
layout: documentation
title: "Arbeiten mit der Arduino IDE"
date: 2017-05-11
author: Mario
abstract: "Programmieren der senseBox MCU mit der Arduino IDE"
thumbnail: /images/blog_images/screenshot_osem.png
lang: de
image1: /images/documentation/de/arduino_ide/arduino-view.png
image2: /
image_board_win: /images/documentation/de/arduino_ide/Ardu1.png
image_board_win_2: /images/documentation/de/arduino_ide/Ardu2.png

image_board_mac: /images/documentation/de/arduino_ide/ardu_mac.png
image_board_mac_2: /images/documentation/de/arduino_ide/ardu3_mac.png
image_board_mac_3: /images/documentation/de/arduino_ide/ardu2_mac.png
image_board_linux: /images/documentation/de/arduino_ide/Ardu1.png
image_board_linux_2: /images/documentation/de/arduino_ide/Ardu2.png
image_board_linux_3: /images/documentation/de/de/arduino_ide/update-b-s-p.png

---
Arbeiten mit der Arduino IDE
============


# Installieren der Arduino IDE
Lade dir die [Arduino IDE](https://www.arduino.cc/en/Main/Software) herunter und installiere sie auf deinem Computer.

## Arduino Software herunterladen

Bitte benutze Arduino Version 1.8.7 für einen reibungslosen Ablauf.

Lade die Version 1.8.7 von der [Arduino Homepage](https://www.arduino.cc/en/Main/OldSoftwareReleases#previous) herunter:

{% include image.html image=page.image1 %}

Arduino ist ein Open-Source Projekt und wird durch Spenden finanziert. Daher wirst du vor dem Download nach einer Spende gefragt; das kannst du überspringen, indem du auf `JUST DOWNLOAD` klickst.


### Installation der IDE unter Linux {#installation-der-ide-unter-linux}

Linux-Nutzer können die Linuxvariante herunterladen und entpacken. Das enthaltene `install.sh`-Skript legt automatisch eine Desktopverknüpfung an. Am schnellsten geht dies über den Terminal. Öffne dazu den Terminal in dem du die Tasten `Ctrl + Alt + T` drückst und gib dort die folgenden Befehle ein:

```text
# sollte die heruntergeladene Datei nicht im Downloads-Ordner abgespeichert sein, ersetze "Downloads" durch den Pfad zum entsprechenden Ordner
cd Downloads 
```

```text
# entpacke die Datei mit folgendem Befehl und installiere Arduino
tar -xvf arduino-1.8.7-linux64.tar.xz
cd arduino-1.8.7
./install.sh
```
<div class="box_warning">
    <i class="fa fa-exclamation-circle fa-fw" aria-hidden="true" style="color: #f0ad4e"></i>
    Achte darauf, dass der Befehl auf die heruntergeladene Arduinoversion abgestimmt ist! Lädst du z.B. Arduino 1.8.6 muss auch überall wo arduino-1.8.5 steht arduino-1.8.6 stehen. Um zu überprüfen welche Version du heruntergeladen hast, schau dir den Namen der Download-Datei an.
</div>

Um den Arduino programmieren zu können, sind unter Ubuntu 14 & 16 zusätzliche Rechte notwendig. Diese können für den aktuellen Nutzer mit den folgenden Befehlen eingerichtet werden \(benötigt Admin-Rechte\):

Führe `udevadm monitor --udev` aus und schließe den Arduino per USB an, um die Device-ID zu bestimmen. Der angegebene Bezeichnung am Ende der Ausgabe \(zB. `ttyUSB0`\) ist die Device-ID. Beende `udevadm` per `ctrl+C`, und führe noch die folgenden Befehle aus, wobei die herausgefundene Device-ID eingesetzt werden muss:

```text
sudo usermod -a -G dialout $(whoami)
sudo chmod a+rw /dev/<device-id>
```

Nach einem Logout und erneutem Login sollte der Arduino aus der Arduino IDE programmierbar sein!


# Board-Support-Package installieren {#head}

Damit die Arduino IDE deine senseBox MCU unterstützt und Du Programme auf diese übertragen kannst, musst Du vor Beginn noch zwei Board-Support-Packages installieren. Diese beinhalten die nötigen Treiber und die notwendige Software, um mit deinem Prozessor zu kommunizieren. Das Board-Support-Package der senseBox enthält außerdem bereits unsere senseBox-Libraries. Damit stehen euch alle grundlegenden Methoden, zur Programmierung der beiligenden Sensoren, zu Verfügung.

## Libraries

Für die Programmierung der senseBox sollten zu Beginn unbedingt die senseBox-Libraries eingebunden werden. Diese Libraries haben wir für euch in das Board-Support-Package der senseBox integriert, um euch die Installation möglichst einfach zu gestalten. 

Eine Library ist wie der Name schon sagt eine Sammlung von etwas - eine Sammlung von Methoden um genauer zu sein. Methoden sind in der Programmierung kleinere Abschnitte von Code, die auf ein Objekt angewendet werden können. 
Bei der senseBox zum Beispiel kann eine Methode aufgerufen werden, um die LEDs auf dem MCU ein- und auszuschalten. Es gibt eine Menge solcher Standardmethoden, die von einer Vielzahl an Programmmen benutzt werden. Um diese Methoden nicht alle einzeln in den Programmcode übertragen zu müssen, können sie in Libraries abgelegt werden. 
Eine Library ist also eine Datei, in der viele Methoden gespeichert werden. Man kann Libraries in seinen Code einbinden. Dafür reicht es wenn sie im Arduino-Ordner für Libraries gespeichert sind und man sie dann mit einer einzigen Zeile zu Beginn des Programmcodes einbindet. Das sieht in Arduino für die Library mit dem Namen "senseBoxIO" wie folgt aus: 

```arduino
#include <senseBoxMCU.h>;
```

Ist die Library eingebunden, können alle in ihr enthaltenen Methoden im Code benutzt werden. 


## Board-Support-Package einbinden 
Wähle dein Betriebssystem, um die passende Anleitung zu sehen:

### Anleitung für Windows
Füge die folgende URL in deiner Arduino IDE unter *Datei -> Voreinstellungen* in das Feld für *Zusätzliche Bordverwalter-URLs* ein:
```
https://github.com/sensebox/senseBoxMCU-core/raw/master/package_sensebox_index.json
```


{% include image.html image=page.image_board_win %}


Öffne dann den *Boardverwalter* unter *Werkzeuge -> Board:"..." -> Boardverwalter* und installiere dort die zwei Board-Support-Packages mit den Namen **Arduino SAMD Boards by Arduino** und **senseBox SAMD Boards by senseBox**.

{% include image.html image=page.image_board_win_2 %}


### Anleitung für Mac
Füge die folgende URL in deiner Arduino IDE unter *`Arduino -> Einstellungen...`* in das Feld für *Zusätzliche Bordverwalter-URLs* ein:
```
https://github.com/sensebox/senseBoxMCU-core/raw/master/package_sensebox_index.json
```

{% include image.html image=page.image_board_mac %}

Öffne dann den *Boardverwalter* unter *Werkzeuge -> Board:"..." -> Boardverwalter* und installiere dort die zwei Board-Support-Packages mit den Namen **Arduino SAMD Boards by Arduino** und **senseBox SAMD Boards by senseBox**.

{% include image.html image=page.image_board_mac_2 %}

{% include image.html image=page.image_board_mac_3 %}

Da wir das **senseBox SAMD Boards**-Package für euch regelmäßig aktualisieren, solltet ihr immer mal wieder in den Boardverwalter gehen und nachschauen, ob das **senseBox SAMD Boards**-Package noch aktuell ist. Öffnet dafür, wie oben beschrieben, den Boardverwalter und sucht nach **senseBox SAMD Boards**. Wenn ihr auf den Eintrag in der Liste klickt, erscheint dort, im Falle einer neuen Version, ein Update-Button. Klickt diesen, um die neuste Version zu installieren. 


### Anleitung für Linux
Füge die folgende URL in deiner Arduino IDE unter *Datei -> Voreinstellungen* in das Feld für *Zusätzliche Bordverwalter-URLs* ein:
```
https://github.com/sensebox/senseBoxMCU-core/raw/master/package_sensebox_index.json
```
{% include image.html image=page.image_board_linux %}


Öffne dann den *Boardverwalter* unter *Werkzeuge -> Board:"..." -> Boardverwalter* und installiere dort die zwei Board-Support-Packages mit den Namen **Arduino SAMD Boards by Arduino** und **senseBox SAMD Boards by senseBox**.
{% include image.html image=page.image_board_linux_2 %}

Da wir das **senseBox SAMD Boards**-Package für euch regelmäßig aktualisieren, solltet ihr immer mal wieder in den Boardverwalter gehen und nachschauen, ob das **senseBox SAMD Boards**-Package noch aktuell ist. Öffnet dafür, wie oben beschrieben, den Boardverwalter und sucht nach **senseBox SAMD Boards**. Wenn ihr auf den Eintrag in der Liste klickt, erscheint dort, im Falle einer neuen Version, ein Update-Button. Klickt diesen, um die neuste Version zu installieren. 



















