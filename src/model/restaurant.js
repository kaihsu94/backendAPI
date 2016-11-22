import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let RestaurantSchema = new Schema({
  id: String,
  name: String
});

module.exports = mongoose.model('Restaurant',RestaurantSchema);
