<%
this.layout = 'default';
this.title = 'The NodeCopter Story';
%>

<h2 id="story"><a href="#story"><%= this.title %></a></h2>


The story starts in 2004 with [Felix
Geisendörfer](https://twitter.com/felixge) and [FIRST](http://en.wikipedia.org/wiki/FIRST).

<h2 id="story"><a href="#story">FIRST</a></h2>

I was a foreign exchange student at [Grady High
School](http://en.wikipedia.org/wiki/Henry_W._Grady_High_School) and heard that
my school was looking for students interested in participating in a new robotics
club to compete in the [FIRST Robotics Competition](http://en.wikipedia.org/wiki/FIRST_Robotics_Competition)
competition.

The FIRST Robotics Competition was started in 1992 by [Woodie
Flowers](http://en.wikipedia.org/wiki/Woodie_Flowers) and [Dean
Kamen](http://en.wikipedia.org/wiki/Dean_Kamen) (inventor of the
[Segway](http://en.wikipedia.org/wiki/Segway_PT)) to inspire students to go
into engineering and technology.

<a href="http://www.flickr.com/photos/tomsly/410329661/">
  <img width="512" src="/img/story/dean-and-woodie.jpg">
</a>

In a nutshell, high school students together with teachers, parents and mentors
from engineering companies form a robotics club which has:

* to raise the money to build a robot and participate ($10k+)
* design, assemble and program a robot within 6 weeks
* compete against teams from almost 2000 other schools

The game for our competition was called
[Tripple Play](http://en.wikipedia.org/wiki/Triple_Play_%28FIRST%29), and I
ended up doing most of the C programming for our robot.

What makes FIRST unique however, is the amazing atmosphere that they create
during the competitions. Each school sends out dozens of students to support
their team, and the whole event has an intense, but very friendly sport game
atmosphere to it.

<a href="/img/story/first-robotics-competition.jpg">
  <img width="512" src="/img/story/first-robotics-competition.jpg">
</a>

This was, by any measure, one of the best times in my life, and I can not say
enough good things about FIRST and the mentors and people involved.

<h2 id="ardrone"><a href="#ardrone">Parrot AR Drone</a></h2>

Since then, I had always wanted to get back into robotics, but it was not until
the summer of 2012 that an opportunity presented itself. I was back in Atlanta
to see my old host family, and also attended a reunion of my robotics team.

During that reunion, my former robotics mentor Jeff Reese asked me if I had
seen the [Parrot AR Drone](http://ardrone.parrot.com/) quadcopters. I had, but
never really considered them more than an interesting geek toy.

What I didn't know until Jeff told me however, was that the drones are essentially flying wifi
routers that can be controlled by sending UDP packages according to a
[documented protocol](https://projects.ardrone.org/projects/show/ardrone-api).

Needless to say, I ordered a drone right when I came back to Germany and
started hacking away. Within a few hours I had the takeoff command working, and
a few days later I had a bunch of code which later turned into a
[node.js](http://nodejs.org/) library called
[node-ar-drone](http://github.com/felixge/node-ar-drone).

<h2 id="jsconfeu"><a href="#jsconfeu">JSConf.eu</a></h2>

It was around this time when [Jan Lehnardt](https://twitter.com/janl), one of
the organizers of [JSConf.eu](http://vimeo.com/52140932), asked me if I was
interested in organizing a small node.js community event / conference on Oct
5th, the day before the conference.

Initially, I was not very excited. At this point, there were already lots of
conferences focused on / related to node.js being held in Europe, and
JSConf.eu already had another pre-conference called
[Reject.js](http://rejectjs.org/).

So while being undecided about the whole thing, I suddenly wondered if it would
be possible to make an event focused on programming the AR Drones instead. So I
started talking to [Robin Mehner](https://twitter.com/rmehner), the organizer
of [Reject.js](https://rejectjs.org/), and [Tim
Koschützki](https://twitter.com/tim_kos), who is a co-founder of mine at
[Transloadit](http://transloadit.com), about it, and we agreed that it might be
doable.

Tim came up with the name, "NodeCopter", and Robin had a lot of experience
organizing events from running the Reject.js conference and the
[BerlinJS](http://berlinjs.org/) user group. Jan was also crazy enough to like
the idea, so the whole thing got moving.

Finally we also got [Thorsten Ball](https://twitter.com/thorstenball),
[Katharina Buca](https://twitter.com/kiida) and [Matti
Besser](https://twitter.com/m_besser) to help, so we had a [team](/core)
working together to organize the event!

<h2 id="berlin"><a href="#berlin">The Berlin Event</a></h2>

After 2 months of organizing, the big day finally came. We had
managed to secure an [amazing
venue](http://de.wikipedia.org/wiki/Stadtbad_Oderberger_Stra%C3%9Fe), sold
tickets to 60 attendees, and organized a total of 24 drones through sponsors
and other channels.

People arrived between 9 and 10 in the morning, and spend the entire day
getting to know the drones and programming them. There were lots of crashes,
but by the end of the day neither humans or drones were seriously harmed.

Instead the 20 attending teams had produced some amazing demos that they showed
off in the evening:

* a drone acting like a bull, attacking a red handkerchief
* drones recognizing faces
* a drone taking 360 degree panorama shots
* a drone listening to voice commands and other inputs from 3 people
* browser interfaces for controlling the drone while showing the camera stream
* a drone following a glowing ball shown on an iPad
* a drone reacting to hand gestures performed with an iPhone
* and many others ... !

You can get a quick idea of it all by watching the time lapse below, or by
checking out these other [videos and
images](http://localhost:8080/2012/berlin/oct-5#impressions).

<iframe width="512" height="288" src="http://www.youtube.com/embed/t13jGeBAWrA" frameborder="0" allowfullscreen></iframe>

<h2 id="future"><a href="#future">The Future</a></h2>

During the event and following days it became clear that people wanted more
NodeCopter, and asked about organizing events in their cities.

Within 4 weeks, another two events were organized in
[Dublin](/2012/dublin/oct-20) and [San Francisco](/2012/san-francisco/oct-31),
and it seems to be just the beginning.

So we are now working on documenting and automating [the process](/compass) for
organizing NodeCopter events. At the same time we are exploring ideas and
sponsorship opportunities for reducing the costs for the events.

Additionally we are planning something big for 2013, and are continuing to
explore the future of NodeCopter.

So if you'd like to find out about future events and developments, leave
your email:

<form action="http://nodecopter.createsend.com/t/j/s/irhtuj/" method="post" id="subForm">
  <input class="email" placeholder="email@example.com" type="text" name="cm-irhtuj-irhtuj" id="irhtuj-irhtuj" />
  <input class="button" type="submit" value="Keep me posted" />
</form>
