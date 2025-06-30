const { Schema, model } = require('mongoose');

const favoriteSchema = new Schema({
  name: String,
  height: Number, 
  weight: Number,
  base_experience: Number // greater than 100
}); 

const Favorite = model('Favorite', favoriteSchema);

module.exports = Favorite;