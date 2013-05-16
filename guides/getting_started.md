---
layout: default
title: Getting started
---

### Help, my drone has gone wild!

If the drone doesn't react to your commands anymore, it's time to kill it before
it crashes into someone's laptop. Catch the drone in flight, one hand at the top
of the hull, the other one at the bottom. Now flip it over. That should do the
trick.

Have a look at [this video at around 14:40m](http://www.youtube.com/watch?v=jl5v3bsMH_E#t=879s) to see how to do it.

### All my LEDs are red and I cannot take off.

Looks like the emergency mode is in effect. To easy ways to fix this:

* [disable emergency mode with the client](https://github.com/felixge/node-ar-drone#clientdisableemergency)
* Reboot the drone by removing the battery and putting it in again

### My drone seems to have an altitude limit

By default the drones have an altitude limit of 3 meters. You can either configure
that within the smartphone app, as the setting is remembered, or use the ar-drone
library and issue the following command:

```
client.config('control:altitude_max', 100000);
```

The setting's unit is millimeters.

### Replacing the battery

Being a flying robot costs energy. Watch [this video](http://www.youtube.com/watch?v=QdFsd9R3vJ8&feature=player_detailpage#t=25s) to
see how to replace your battery.

### Further tips

* look at the many already existing [modules](/modules) you can use
* always build in a panic function that lands the drone safely and that you can
easily use if the drone has gone wild
* use this panic function to handle exceptions and maybe even on process.exit
* [We've assembled some ideas for projects, have a look!](/ideas)
