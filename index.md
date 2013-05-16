---
layout: default
title: The NodeCopter - Programming flying robots with node.js
introTitle: Flying robots & node.js
introText: |
  A full day of programming <strong>flying robots</strong> with<br>
  node.js, started in Berlin on October 5 2012.
---

<h2 id="upcoming-events"><a href="#upcoming-events">Upcoming Events</a></h2>
<div class="upcoming-events">
  <a href="/2013/amelia-island/may-30"><img src="img/jsconfus-location.png" /></a>

  <ul>
  <li><a href="/2013/scotland/may-11">May 11, 2013 - Scotland</a> by <a href="https://twitter.com/teabass">Andrew Nesbitt</a>, <a href="https://twitter.com/juliancheal">Julian Cheal</a> &amp; <a href="http://scotlandjs.com/">Scotland.js</a></li>
  </ul>
</div>

<h2 id="past-events"><a href="#past-events">Past Events</a></h2>

* [Oct 5, 2012 - Berlin](/2012/berlin/oct-5) by [Core Team](/core) & [JSConf.eu](http://2012.jsconf.eu/)
* [Oct 20, 2012 - Dublin](/2012/dublin/oct-20) by [Paul Campbell](https://twitter.com/paulca)
* [Oct 31, 2012 - San Francisco](/2012/san-francisco/oct-31) by [Christian Sanz](https://twitter.com/csanz)
* [Nov 8-9, 2012 - Seattle, WA](/2012/seattle/nov-8-9) by [Chris Williams](https://plus.google.com/103300350874263468636/posts)
* [Nov 10, 2012 - Brighton](/2012/brighton/nov-10) by [Remy Sharp](https://twitter.com/rem)
* [Dec 1, 2012 - San Francisco](http://droneolympics.com/) by [Christian Sanz](https://twitter.com/csanz) & [Jyri Engeström](https://twitter.com/jyri)
* [Jan 23, 2013 - Zurich](/2013/zurich/jan-23) by [Jordi Boggiano](https://twitter.com/seldaek)
* [Mar 2, 2013 - Oslo](http://www.meetup.com/framsia/events/105135832/) by [Trygve Lie](https://twitter.com/trygve_lie) & [Gregers Gram Rygg](https://twitter.com/gregersrygg)
* [Mar 16, 2013 - London](/2013/london/mar-16) by [Andrew Nesbitt](https://twitter.com/teabass)
* [Mar 23, 2013 - Bath](/2013/bath/mar-23) by [Andrew Nesbitt](https://twitter.com/teabass)
* [Apr 20, 2013 - Helsinki](http://nodecopter.fi/) by [Janne Aukia](https://twitter.com/jaukia) and [Team](http://nodecopter.fi/)

<h2 id="join-the-community"><a href="#join-the-community">Join the Community</a></h2>

Want to hack on your drone, but no event in sight? Come and hang out in the
`#nodecopter` IRC channel on freenode.net!

Also, make sure to be the first to find out about new events:

<form action="http://nodecopter.createsend.com/t/j/s/irhtuj/" method="post" id="subForm" class="subscribe-form">
  <input class="email" placeholder="email@example.com" type="text" name="cm-irhtuj-irhtuj" id="irhtuj-irhtuj" />
  <input class="button" type="submit" value="Keep me posted" />
</form>

<hr>

<h2 id="what"><a href="#what">What?</a></h2>

<a href="https://plus.google.com/photos/107012710192519215701/albums/5797983156265725345/5797983612429153602?authkey=CPbAwfmC75faBg">
  <img width="512" width="341" src="/img/homepage_photo.jpg" class="homepage_photo" />
</a>


**NodeCopter.js is a full day event where 15 - 60 developers team up in groups of 3.**

<p>
  Each team receives one <a href="http://ardrone2.parrot.com/">Parrot
    AR Drone 2.0</a> and spends the day <a
    href="https://github.com/felixge/node-ar-drone">programming</a> and
  playing with it. At the end of the day, each team gets to present
  their work to the other attendees.
</p>

<p>
  <iframe width="512" height="288" src="http://www.youtube.com/embed/gucpgJEJ5b4" class="homepage_photo" frameborder="0" allowfullscreen></iframe>
</p>

<p>
  <iframe width="512" height="288" src="http://www.youtube.com/embed/t13jGeBAWrA" class="homepage_photo" frameborder="0" allowfullscreen></iframe>
</p>

<hr>

<h2 id="easy"><a href="#easy">Programming a NodeCopter is easy!</a></h2>

Install [Node.js](http://nodejs.org) and get the
[ar-drone](http://github.com/felixge/node-ar-drone) module. All you need to do then is
to execute the following code with node. That will make your drone take off,
move around, do a flip and carefully land again. Seriously, that's all!

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

<h2 id="guides"><a href="#guides">Nodecopter Guides</a></h2>

Check out the [guides](/guides) for more information about how to get
started programming a drone and what you can do with it!

<h2 id="modules"><a href="#modules">Nodecopter Modules</a></h2>

Looking for some node.js modules to help programming your drone? Check out the
[modules](/modules) page.

<hr>

<h2 id="organize">Want to organize an event?</h2>

Interested in bringing NodeCopter to your city? Follow [the compass](/compass)
to guide your event.
