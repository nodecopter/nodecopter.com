<%
this.layout = 'default';
this.title = 'NodeCopter Modules';
%>

<h2 id="modules"><a href="#modules"><%= this.title %></a></h2>

Have you written a nodecopter module? Add it by [editing this
page](https://github.com/nodecopter/nodecopter.com/edit/master/pages/modules.md).

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


<section>
  <h2 id="npm-modules"><a href="#npm-modules">NodeCopter Modules on npm</a></h2>
  <div class="modules-loading">
    <p>Loading modules...</p>
    <p><small>Might take some time on first load</small></p>
  </div>
  <ul class="modules-all"></ul>
  <p><small><i>Module must be on npm with `nodecopter` in the name, description or as a keyword.</i></small></p>
</section>
<script src="/js/vendor/jquery.js"></script>
<script src="/js/vendor/jquery-ajax-localstorage-cache.js"></script>
<script src="/js/modules.js"></script>
