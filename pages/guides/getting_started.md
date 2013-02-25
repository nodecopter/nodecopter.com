<%
this.layout = 'default';
this.title = 'Getting started';
%>

<h2 id="getting_started"><a href="#getting_started"><%= this.title %></a></h2>

Wow, you're finally there and ready to hack a effin' flying robot! Here's a simple
way to get started.

But before we start: Make sure that you have [Node.js](http://nodejs.org) installed.

First off, you should get the FreeFlight app for your [iOS](http://itunes.apple.com/en/app/free-flight/id373065271?mt=8)
or [Android](https://play.google.com/store/apps/details?id=com.parrot.freeflight&hl=en)
device if you don't have it already.

Now connect to the drone's WiFi with your smartphone, start the FreeFlight app
and make a test flight with it's Piloting feature to learn how the drone behaves.
It's also a good time to check if the firmware of the drone is up to date. See
[setup the drones](/compass/setup_the_drones) for exact instructions.

But controlling the drone with the phone is boring, let's program it! Connect to
the drone's WiFi with your laptop and install the [ar-drone](https://github.com/felixge/node-ar-drone) module:

* `$ npm install ar-drone`

Once you've done that, save this to a file:

```
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
```

and execute it. See how your drone takes of, rotates clockwise and even does a flip!
Amazing. Now you're set, go ahead and get crazy!

## Help, my drone has gone wild!

If the drone doesn't react to your commands anymore, it's time to kill it before
it crashes into someone's laptop. Catch the drone in flight, one hand at the top
of the hull, the other one at the bottom. Now flip it over. That should do the
trick.

Have a look at [this video at around 14:40m](http://www.youtube.com/watch?v=jl5v3bsMH_E#t=879s) to see how to do it.

## All my LEDs are red and I cannot take off.

Looks like the emergency mode is in effect. To easy ways to fix this:

* [disable emergency mode with the client](https://github.com/felixge/node-ar-drone#clientdisableemergency)
* Reboot the drone by removing the battery and putting it in again

## Replacing the battery

Being a flying robot costs energy. Watch [this video](http://www.youtube.com/watch?v=QdFsd9R3vJ8&feature=player_detailpage#t=25s) to
see how to replace your battery.

## Further tips

* look at the many already existing [modules](/modules) you can use
* always build in a panic function that lands the drone safely and that you can
easily use if the drone is gone wild
* use this panic function to handle exceptions and maybe even on process.exit
* [We've assembled some ideas for projects, have a look!](/ideas)
