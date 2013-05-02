---
layout: default
title: Connect the drone to an access point
---

<h2 id="connect_to_access_point"><a href="#connect_to_access_point">{{ page.title }}</a></h2>

Normally, if you're connected to your drone's WiFi you don't have connection to
the internet. This is not very convenient, so an easy way out is letting the AR drone
connect to a WiFi accesspoint.

**Connect to an open network**

If you have access to an open network (no WPA or similar), you can simply:

* Telnet into the drone: `telnet 192.168.1.1`
* Execute the following command (replacing [ssid] and [wanted ip] with their values):

`killall udhcpd; iwconfig ath0 mode managed essid [ssid]; ifconfig ath0 [wanted ip] netmask 255.255.255.0 up;`

Thank you [@karlwestin](http://twitter.com/karlwestin) for [this gist](https://gist.github.com/karlwestin/4051467).

**Connect to a network secured with WPA**

In order to connect to a secure network, you need to install WPA support on your drone. The good news is that
[@daraosn](http://twitter.com/daraosn) took the time to cross-compile wpa_supplicant and write some handy install scripts.

Just checkout the [ardrone-wpa2](https://github.com/daraosn/ardrone-wpa2) repo on githbub and follow the instructions there.
