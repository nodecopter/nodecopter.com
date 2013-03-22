<%
this.layout = 'default';
this.title = 'Budget';
%>

<h2 id="budget"><a href="#budget">Budget</a></h2>

There are essentially four big items that you need to budget for:

* [Venue](#venue) (0 - 5000 USD)
* [Drinks and lunch](#drinks-and-lunch) (25 - 50 USD / person)
* [Drones and parts](#drones-and-parts) (~500 USD / drone)
* [Travel and lodging](#travel-and-lodging) (0 - 5000 USD)

Additionally you should add an extra ~15% to your budget for overhead:

* Unexpected problems
* Power splitters
* Shipping drones to drone sponsors
* Extra drinks for visitors in the evening
* etc.

If you want a quick estimate, check our [example budget](#example).

<h2 id="venue"><a href="#venue">Venue</a></h2>

Ideally you can find a local company to provide a [nice venue](/compass/venue)
for free.

If you can not find a free venue, you should:

* Look at many different venues and compare prices
* Be prepared to spend 500 - 5000 USD
* Try to get a discount for doing something amazing

Some venues may also like the idea of people taking photos & videos of their
venue from positions & angles that are only reachable with the drones.

If you need money to pay for your venue, you need to find
[sponsors](/compass/sponsors).

<h2 id="drinks-and-lunch"><a href="#drinks-and-lunch">Drinks and lunch</a></h2>

To let people focus on programming the drones, you should provide drinks
(water, soft drinks, maybe beer in the evening) and lunch.

You can do this in one of two ways:

* Buy food & drinks from the venue: This will most likely be more expensive,
  but it easier to coordinate and some venues will require it.
* **Recommended:** Buy drinks & order delivery food yourself: This is is
  cheaper and more flexible, but requires a little more work.

Your [ticket price](/compass/tickets) should be set to exactly cover the drinks
and food. Make sure you keep VAT / sales tax in mind when calculating this.

<h2 id="drones-and-parts"><a href="#drones-and-parts">Drones and parts</a></h2>

In order to have a great day, you will want to ensure there are enough
batteries, chargers and repair parts to provide a smooth experience.

For this reason you want to have:

* 2 extra chargers & batteries per drone
* A few backup drones (20% extra drones is a good number)
* Repair parts

While Parrot is selling all drone parts that are required to build a drone
from scratch, you should only buy these parts:

* Propellers (buy 1 pack for every ~3 drones)
* Gears & Shafts (buy 1 pack for every ~3 drones)
* Adhesive kit (buy 1 pack for every ~3 drones)
* Motors (buy 1 for every ~10 drones)
* Central Cross (buy 1 for every ~10 drones)
* Screws (buy 1 pack total)
* Mounting Tools (buy 2 total)

You can also buy other parts, but please consider:

* The other parts are very expensive, building a drone from parts costs
  almost twice as much as buying an assembled one.
* Only the parts listed above break frequently in our experience.

Please refer to the [purchase](/compass/purchase) page regarding tips for
buying your drones and parts.

**Note:** We are also meeting with Parrot soon / are working on creating a
base stock of drones for Europe and North America that can be send around
between different events. This should help lower the budget for individual
events by as much as 50%!

<h2 id="travel-and-lodging"><a href="travel-and-lodging">Travel and Lodging</a></h2>

Your event should pay travel and lodging for:

* Your overseeing organizer (you need one if this is your first event)
* [Core copter](/core) members, if one of them wants to attend

This is a gentlemen's agreement, so exceptions can be made depending
on your budget and circumstances.

<h2 id="example"><a href="#example">Example Budget</a></h2>

<%
var people = 30;
var visitors = people * 0.4;
var drones = people / 3 + (people / 3) * 0.2;
var existingDrones = 4;

var currency = 'USD';
var items = [
  {
    name: 'Lunch',
    amount: people,
    price: 15
  },
  {
    name: 'Drinks',
    amount: people + visitors,
    price: 15,
    comment: 'including ' + visitors + ' visitors'
  },
  {
    name: 'Drones',
    amount: drones - existingDrones,
    price: 300,
    comment: '+' + existingDrones + ' existing drones'
  },
  {
    name: 'Extra Batteries',
    amount: drones * 2,
    price: 40,
  },
  {
    name: 'Extra Chargers',
    amount: drones * 2,
    price: 40,
  },
  {
    name: 'Repair Parts',
    amount: 1,
    price: 200,
  },
  {
    name: 'Travel + lodging',
    amount: 1,
    price: 1000,
  },
];

var total = 0;
%>

To give you an idea of what the total budget for an event could look like,
here is an example for a nodecopter with <%= people %> people:

<%-
items.map(function(item) {
  var subTotal = item.amount * item.price;
  total += subTotal;
  var line =
    '* **' + item.name + ':** ' + item.amount + ' x ' + item.price + ' ' +
    currency + ' = **' + subTotal + ' ' + currency + '**';

  if (item.comment) {
    line += ' (' +  item.comment + ')';
  }

  return line;
}).join('\n')
%>
<%
var overhead = total * 0.15;
%>

**Total:** <%= total + ' ' + currency %> (hard costs) + <%= overhead + ' ' +
currency %> (15% overhead) = **<%= (total + overhead) + ' ' + currency %>**

This is just an example, but **2500 USD - 10000 USD** is a reasonable ball
bark for most nodecopter events.

But don't be scared, just head over to the [financing](/compass/financing) page
to see how you can pull this off.
