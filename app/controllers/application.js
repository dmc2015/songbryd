import Ember from 'ember';

var Song = Ember.Object.extend({
  title: '',
  rating: 0,
  band: ''
});






var SongCollection = Ember.ArrayProxy.extend(Ember.SortableMixin,{
  sortProperties: ['rating'],
  sortAscending: false,
  content: []
});



var songs = SongCollection.create();





var blackDog = Song.create({
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 3
});

var yellowLedbetter = Song.create({
  title: 'Yellow Led Better Dog',
  band: 'Led Zeppelin',
  rating: 3
});

var pretender = Song.create({
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 2
});

songs.pushObject([blackDog, yellowLedbetter, pretender]);


window.songs = songs;

var alwaysWaiting = Song.create({
  title: 'Always Waiting',
  band: 'Kaya Project',
  rating: 1
});

window.newSong = alwaysWaiting;



//
// App = Ember.Application.create();
//
// App.ApplicationRoute = Ember.Route.extend({
//   model: function(){
//     return songs;
//   }
// });





export default Ember.Controller.extend({
  songs: songs
});
