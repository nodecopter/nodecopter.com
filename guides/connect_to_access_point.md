---
layout: default
title: Connect the drone to an access point
---

<h2 id="connect_to_access_point"><a href="#connect_to_access_point">{{ page.title }}</a></h2>

Normally, if you're connected to your drone's WiFi you don't have connection to
the internet. This is not very convenient, so an easy way out is letting the AR drone
connect to a WiFi accesspoint.

Please note that this only works for open networks, so no WPA or similar.

* Telnet into the drone: `telnet 192.168.1.1`
* Execute the following command (replacing [ssid] and [wanted ip] with their values):

`killall udhcpd; iwconfig ath0 mode managed essid [ssid]; ifconfig ath0 [wanted ip] netmask 255.255.255.0 up;`

## Thanks

Thank you [@karlwestin](http://twitter.com/karlwestin) for [this gist](https://gist.github.com/karlwestin/4051467).
