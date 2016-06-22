var Backbone = require('backbone');

var Vampire = Backbone.Model.extend();

var VampireCollection = Backbone.Model.extend({
  model: Vampire,
  url: 'https://swapi.co/api/people/',
});



module.exports = {
  'Vampire' : Vampire,
  'VampireCollection' : VampireCollection
};
