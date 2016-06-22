var $ = require('jquery');
var models = require('./models/runner');

var vampires = new models.VampireCollection();

console.log(vampires);


var button = $('<button class="my-button btn btn-large">Submit</button>');

$('.app').append(button);

vampires.on('add', function(model){
  $('.app').append(model.get('title'));
});

$('.my-button').on('click', function(){
  button.text('Loading...');
  vampires.fetch().done(function(){
    $('.my-button').text('Submit');
  });

});








// var StarshipCollection = require('./models/starship').StarshipCollection;
// var $ = require('jquery');
// var starships = new StarshipCollection();
//
//
// starships.fetch();
// //setup an event that when a model is added, run this code
// starships.on('add', function(model){
//   $('.app').append(model.get('name') + '</br>');//line break
// });
