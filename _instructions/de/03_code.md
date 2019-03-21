---
layout: instructions
title: "3. Programmieren der senseBox MCU"
date: 2017-05-11
thumbnail: /images/blog_images/screenshot_osem.png
image1: /images/
image2: /images
lang: de
---
Programmieren der senseBox MCU
============

Du kannst die senseBox MCU mithilfe von drei verschiedenen Editoren Programmieren. 

 <div class="media">
                    <div class="media-left">
                      <a href="#">
                        <img class="media-object media-go-image" src="/images/blockly_de.png" alt="...">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">Blockly for senseBox</h4>
                      Mit Blockly für senseBox kannst du deine senseBox MCU über eine grafische Programmieroberfläche Programmieren. 
                      <div class="row">
                          <div class="col-md-4">
                            <a class="btn" href="https://blockly.sensebox.de/ardublockly/?board=sensebox-mcu" target="_blank" role="button">Zu Blockly für senseBox</a> 
                          </div>
                          <div class="col-md-4">
                                <a class="btn" href="https://sensebox.github.io/books-v2/blockly/de/" target="_blank" role="button">Zur Dokumentation</a> 
                              </div>
                      </div>
                    </div>
                <hr>        
            <div class="media">        
                    <div class="media-left">
                            <a href="#">
                              <img class="media-object media-go-image" src="/images/go/edu/arduino.png" alt="...">
                            </a>
                          </div>
                          <div class="media-body">
                            <h4 class="media-heading">Arduino IDE</h4>
                            Mithilfe der Arduino IDE kannst du 
                          </div>
            </div>
            <hr>
            <div class="media">        
                    <div class="media-left">
                            <a href="#">
                              <img class="media-object media-go-image" src="/images/go/edu/nepo.png" alt="...">
                            </a>
                          </div>
                          <div class="media-body">
                            <h4 class="media-heading">NEPO - openRoberta Lab</h4>
                            openRoberta ist eine weitere Möglichkeit die senseBox zu programmieren. Das openRoberta lab benötigt keine Installation auf deinem Computer und biete
                          </div>
            </div>
            <hr>
</div> 
Um die senseBox zu Programmieren brauchst du keine Software auf deinem Computer installieren. senseBox für Blockly ermöglicht einen einfachen und unkompliztierten Start. In diesem Beispiel zeigen wir dir, wie du den Helligkeitssensor auslesen und den Messwert auf dem Display anzeigen kannst. 

### Messwerte auslesen und anzeigen
Um den Lichtsensor auszulesen benötigst du folgenden Block, der unter senseBox Sensoren zu finden ist:

Dieser Block funktioniert allerdings nicht allein. Er benötigt immer einen Empfänger, der den Messwert verarbeitet. Die einfachste Möglichkeit ist das Display. 
Um das Display zu programmieren benötigst du vier Blöcke die du unter senseBox Ausgabe - Display findest:

Verknüpfst du jetzt den Lichtsensor-Block mit der “Wert“-Schnittstelle des Display-Blocks werden deine Messwerte auf dem Display angezeigt.

Nach dem Programmieren musst du den Programmcode noch auf die senseBox MCU übertragen. Wie genau das geht findest du auf der nächsten Seite. 
