


Why are there so many jquery errors

Report Only] Refused to apply inline style because it violates the following Content Security Policy directive: "style-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-j0bVhc2Wj58RJgvcJPevapx5zlVLw6ns6eYzK_hcA04='), or a nonce ('nonce-...') is required to enable inline execution.
(anonymous function) @ jquery.min.js:2


add a troubleshooting section regarding where to look if you are hand coding and get errors



In the Templating chapter
under the heading "auto-updating templates"

It says to put this code after "Song" is created.

```window.songs = songs;

var alwaysWaiting = Song.create({
  title: 'Always Waiting',
  band: 'Kaya Project',
  rating: 5
});

window.newSong = alwaysWaiting;```

and then run this in the console after the page reloads

```songs.pushObject(newSong);```


"Song" is a empty Ember object after it is immediately created.
The code needs to put in after instantiation of the "Song" collection "songs" that is referenced in the code snippet.

pushObjects does not understand what variable "songs" is otherwise. Some extra clarity may save someone some time.

If you


gumroad offers a bad product, page nav is generally less then functional


--------------

how does storing the data in the route compare to storing the data in the application.js?
is storing in the route asychronous and storing in the application.js static?


----------------

why do ember objects need to be created in the controller/application.js
and in the routes/routename.js  ?
