---
title: Hacker Guide
---

<h2 id="hacker-guide"><a href="#hacker-guide">{{ page.title }}</a></h2>

The guide will help you to get started with NodeCopter hacking in any
programming language.

<ol class="toc">
  <li><a href="#drone">The Drone</a></li>
  <li><a href="#buy">Buying a drone</a></li>
  <li>
    <a href="#basics">The Basics</a>
    <ol>
      <li><a href="#imporant">Important Information</a></li>
      <li><a href="#getting-started">Getting Started</a></li>
    </ol>
  </li>
  <li>
    <a href="#troubleshooting">Troubleshooting</a>
    <ol>
      <li><a href="#low-or-slow">Drone is not flying high / flying very slow</a></li>
      <li><a href="#red-leds">All my LEDs are red and I cannot take off</a></li>
    </ol>
  </li>
  <li>
    <a href="#tips-tricks">Tips & Tricks</a>
    <ol>
      <li><a href="#connect-to-access-point">Connect the drone to an access point</a></li>
      <li><a href="#connect-to-arduino">How to connect an Arduino to the drone</a></li>
    </ol>
  </li>
  <li>
    <a href="#modules">Modules</a>
    <ol>
      <li><a href="#npm-modules">NodeCopter Modules on npm</a></li>
    </ol>
  </li>
</ol>

<h3 id="drone"><a href="#drone">The Drone</a></h3>

All NodeCopter hacking is done using the [Parrot AR Drone
2.0](http://en.wikipedia.org/wiki/Parrot_AR.Drone#Version_2.0). Features include:

* Wifi
* 1 Ghz CPU, 125 MB Memory
* HD Front camera, Low res bottom camera
* Linux ([BusyBox](http://en.wikipedia.org/wiki/BusyBox))
* Automatic hovering at a fixed position (using altitude sensor and optical
  flow tracking)

The AR Drone 1.0 may also be supported by some libraries, but most of the
community uses 2.0 drones.

We are not married to the Parrot drones, but so far we have not found any
alternatives that offer competitive pricing, automatic hovering, global
distribution, easy repairs and are shipped fully assembled.

<h3 id="buy"><a href="#buy">Buying a drone</a></h3>

In most countries the best place to buy a drone is your national version of
[Amazon.com](http://www.amazon.com/gp/feature.html?ie=UTF8&docId=487250). You
won't get a discount, but shipping is usually very fast and they often also
carry the repair parts you may need.

If Amazon is not a viable option for you, you should consider the manufacturers
online shop: [http://www.parrotshopping.com/](http://www.parrotshopping.com/).
Shipping can be slow, but they can deliver all parts to almost any country in
the world.

For those willing to go the extra mile for a good deal, we recommend Ebay or
similar sites. You can often find used drones or drones with minor damage.
Repairing the drones is easy, so unless the damage is much bigger than
advertised, you should be able to save a decent amount of money.

Last but not least, there are several brick and mortar retailers, you can find
them [here](http://www.parrot.com/catalog/pos/parrot/ardrone-2).

<h3 id="basics"><a href="#basics">The Basics</a></h3>

<h4 id="important"><a href="#important">Important Information</a></h4>

Before starting your drone for the first time, you may want to know about this:

* You can grab the drone while flying and turn it around which will cause it to
  enter an emergency mode which shuts down the motors. This is great for
  self-defense, as well as stopping a drone that is out of control. You can see
  a video of this maneuver
  [here](http://www.youtube.com/watch?v=jl5v3bsMH_E#t=879s).
* The emergency mode can be disabled via the mobile app, a library that
  supports it, or reconnecting the battery.
* Being a flying robot costs energy. Watch [this video](http://www.youtube.com/watch?v=QdFsd9R3vJ8&feature=player_detailpage#t=25s) to
  see how to replace your battery.


<h4 id="getting-started"><a href="#getting-started">Getting Started</a></h4>

Make sure that you have [Node.js](http://nodejs.org) installed.

First off, you should get the FreeFlight app for your [iOS](http://itunes.apple.com/en/app/free-flight/id373065271?mt=8)
or [Android](https://play.google.com/store/apps/details?id=com.parrot.freeflight&hl=en)
device if you don't have it already.

Now connect to the drone's WiFi with your smartphone, start the FreeFlight app
and make a test flight with it's Piloting feature to learn how the drone behaves.
It's also a good time to check if the firmware of the drone is up to date. See
[setup the drones](/organize#setup-drones) for exact instructions.

But controlling the drone with the phone is boring, let's program it! Connect to
the drone's WiFi with your laptop and install the [ar-drone](https://github.com/felixge/node-ar-drone) module:

* `$ npm install ar-drone`

Once you've done that, save this to a file:

~~~javascript
var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();

client
  .after(5000, function() {
    this.clockwise(0.5);
  })
  .after(3000, function() {
    this.animate('flipLeft', 15);
  })
  .after(1000, function() {
    this.stop();
    this.land();
  });
~~~

and execute it. See how your drone takes of, rotates clockwise and even does a flip!
Amazing. Now you're set, go ahead and get crazy!

<h3 id="troubleshooting"><a href="#troubleshooting">Troubleshooting</a></h3>

<h4 id="low-or-slow"><a href="#low-or-slow">Drone is not flying high / flying very slow</a></h4>

Per default, the drone will only fly very slowly and won't fly higher than 3m.
These limits can be lifted via the mobile app or a library that supports it.

Here is an example for setting the limit to 100m using the
[node-ar-drone](https://github.com/felixge/node-ar-drone) library:

```js
client.config('control:altitude_max', 100000);
```

<h4 id="red-leds"><a href="#red-leds">All my LEDs are red and I cannot take off.</a></h4>

Looks like the emergency mode is in effect. To easy ways to fix this:

* [disable emergency mode with the client](https://github.com/felixge/node-ar-drone#clientdisableemergency)
* Reboot the drone by removing the battery and putting it in again

<h3 id="tips-tricks"><a href="#tips-tricks">Tips & Tricks</a></h3>

<h4 id="connect-to-access-point"><a href="#connect-to-access-point">Connect the drone to an access point</a></h4>

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

<h4 id="connect-to-arduino"><a href="#connect-to-arduino">How to connect an Arduino to the drone</a></h4>

Check out this [gist](https://gist.github.com/4152815) so see how to connect an
Arduino to a drone!

<h3 id="modules"><a href="#modules">Modules</a></h3>

Have you written a nodecopter module? Add it by [editing this
page](https://github.com/nodecopter/nodecopter.com/edit/gh-pages/hack.md).

* [node-ar-drone](https://github.com/felixge/node-ar-drone): The main AR Drone
  library for controlling your drone.
* [node-dronestream](https://github.com/bkw/node-dronestream): Renders the
  drone h264 video stream in your browser using
  [Broadway.js](https://github.com/mbebenita/Broadway).
* [ar-drone-png-stream](https://github.com/Soarez/ar-drone-png-stream): Streams
  png images into an image tag using `multipart/x-mixed-replace`.
* [drone-browser](https://github.com/functino/drone-browser): Control your drone via your browser
* [wii-drone](https://github.com/voodootikigod/wii-drone): Control your drone with a Wii Classic Controller and arduino.
* [Asterisk Control](http://www.github.com/danjenkins/nodecopter): Control your drone with [Asterisk](http://www.asterisk.org/).
* [copterface](https://github.com/paulhayes/copterface): Have your drone detecting faces using [node-opencv](https://github.com/peterbraden/node-opencv).
* [qwertyhancockcopter](http://www.github.com/trodrigues/qwertyhancockcopter): Control your drone with a web based music keyboard.
* [nodecopter-tennis](https://github.com/arjaneising/nodecopter-tennis): Use your drone as a tennis ball!
* [ipad-ardrone-controller](https://github.com/createdotnet/ipad-ardrone-controller): Control your drone with an iPad and gestures.
* [qrar](https://npmjs.org/package/qrar): Decode QR codes found by your drone.
* [node-drone-joystick](https://github.com/TooTallNate/node-drone-joystick): Control AR.Drones using any SDL-compatible Joystick (PS3 Sixaxis, etc.)
* [drone-kinect](https://github.com/maxogden/drone-kinect): Control AR.Drones using your body (with a Kinect)
* [xbox-controller](https://github.com/andrew/node-xbox-controller): Interface for Wired Xbox 360 game controller into node
* [ardrone-webflight](http://eschnou.github.io/ardrone-webflight/): Browser based remote control environment easily extensible via plugins
* [ardrone-autonomy](http://github.com/eschnou/ardrone-autonomy): Library to support autonomous flight (state estimation and PID control)
* [ardrone-panorama](http://github.com/eschnou/ardrone-panorama): Autonomously fly your drone to take 360° panoramas at desired height

<section>
  <h3 id="npm-modules"><a href="#npm-modules">NodeCopter Modules on npm</a></h3>
  <div class="modules-loading">
    <p>Loading modules...</p>
    <p><small>Might take some time on first load</small></p>
  </div>
  <ul class="modules-all"></ul>
  <p><small><i>Module must be on npm with `nodecopter` in the name or description.</i></small></p>
</section>
