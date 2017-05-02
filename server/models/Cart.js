const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CartSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
  },
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
