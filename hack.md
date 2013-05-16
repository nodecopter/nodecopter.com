---
layout: default
title: Hacker Guide
---

<h2 id="hacker-guide"><a href="#hacker-guide">{{ page.title }}</a></h2>

The guide will help you to get started with NodeCopter hacking in any
programming language.

<ol>
  <li><a href="#drone">The Drone</a></li>
  <li><a href="#buy">Buying a drone</a></li>
  <li>
    <a href="#basics">The Basics</a>
    <ol>
      <li><a href="#imporant">Important Information</a></li>
    </ol>
  </li>
  <li>
    <a href="#troubleshooting">Troubleshooting</a>
    <ol>
      <li><a href="#low-or-slow">Drone is not flying high / flying very slow</a></li>
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

<h3 id="troubleshooting"><a href="#troubleshooting">Troubleshooting</a></h3>

<h4 id="low-or-slow"><a href="#low-or-slow">Drone is not flying high / flying very slow</a></h4>

Per default, the drone will only fly very slowly and won't fly higher than 3m.
These limits can be lifted via the mobile app or a library that supports it.

Here is an example for setting the limit to 100m using the
[node-ar-drone](https://github.com/felixge/node-ar-drone) library:

```js
client.config('control:altitude_max', 100000);
```
