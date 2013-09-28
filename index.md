---
layout: default
title: The NodeCopter - Programming flying robots with node.js
---

<h2 id="what"><a href="#what">What is this?</a></h2>

<p>
  <iframe width="512" height="288" src="http://www.youtube.com/embed/gucpgJEJ5b4" class="homepage_photo" frameborder="0" allowfullscreen></iframe>
</p>

**NodeCopter.js is a full day event where 15 - 60 developers team up in groups of 3.**

<p>
  Each team receives one <a href="http://ardrone2.parrot.com/">Parrot
    AR Drone 2.0</a> and spends the day <a
    href="https://github.com/felixge/node-ar-drone">programming</a> and
  playing with it. At the end of the day, each team gets to present
  their work to the other attendees.
</p>

<hr>

<h2 id="upcoming-events"><a href="#upcoming-events">Upcoming Events</a></h2>

<a href="/2013/new-york/oct-13"><img src="/img/teaser-darc.png" width="512" height="200" /></a>

* [Sep 28, 2013 - Berlin](https://plus.google.com/events/cenb1vcbrv2k5tufkog73ped89k) by [Henri Bergius](https://twitter.com/bergie) ([NoFlo](http://noflojs.org) Edition!)
* [Oct 4, 2013 - Lisbon](/2013/lisbon/oct-4) by [A few Portuguese guys](/2013/lisbon/oct-4)
* [Oct 13, 2013 - New York City](/2013/new-york/oct-13) by [Core Team](https://twitter.com/nodecopter)
* [Dec 6-7, 2013 - Amelia Island](http://robotsconf.com/) by [Chris](https://twitter.com/voodootikigod) & [Laura](https://twitter.com/lwilliams) (RobotsConf!)

<hr>

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
* [May 11, 2013 - Scotland](/2013/scotland/may-11) by [Andrew Nesbitt](https://twitter.com/teabass) & [Julian Cheal](https://twitter.com/juliancheal) & [Scotland.js](http://scotlandjs.com)
* [May 30, 2013 - Amelia Island](/2013/amelia-island/may-30) by [Core Team](/core) & [JSConf.us](http://2013.jsconf.us/)
* [Jul 27, 2013 - Manchester](/2013/manchester/july-27) by [Andrew Nesbitt](https://twitter.com/teabass)
* [Aug 10, 2013 - Southampton](/2013/southampton/aug-10) by [Andrew Nesbitt](https://twitter.com/teabass) & [Julian Cheal](https://twitter.com/juliancheal)
* [Aug 18, 2013 - London](/2013/london/aug-18) by [Andrew Nesbitt](https://twitter.com/teabass)
* [Sep 7, 2013 - Cincinnati](http://cincycopter.org/) by [Jim Weirich](https://twitter.com/jimweirich) & [Carin Meier](https://twitter.com/carinmeier)
* [Sep 13, 2013 - Berlin](/2013/berlin/sept-13) by [Core Team](https://twitter.com/nodecopter)
* [Sep 21, 2013 - Bristol](/2013/bristol/sept-21) by [Andrew Nesbitt](https://twitter.com/teabass)

<hr>

<h2 id="join-the-community"><a href="#join-the-community">Join the Community</a></h2>

Want to hack on your drone, but no event in sight? Come and hang out in the
`#nodecopter` IRC channel on freenode.net!

Also, make sure to be the first to find out about new events:

<form action="http://nodecopter.createsend.com/t/j/s/irhtuj/" method="post" id="subForm" class="subscribe-form">
  <input class="email" placeholder="email@example.com" type="text" name="cm-irhtuj-irhtuj" id="irhtuj-irhtuj" />
  <input class="button" type="submit" value="Keep me posted" />
</form>

<hr>

<h2 id="easy"><a href="#easy">Programming a drone is easy!</a></h2>

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
