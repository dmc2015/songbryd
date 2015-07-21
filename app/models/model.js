App = Ember.Application.create();

var blackDog = {
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 3
};

var yellowLedbetter = {
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
};


var pretender = {
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 2
};

var songs = [blackDog, yellowLedbetter, pretender];

App.ApplicationRoute = Ember.Route.extend({
  model: function(){
    return songs; 
  }
  
});
