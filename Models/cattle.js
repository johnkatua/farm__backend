const mongoose = require('mongoose');

const cattleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  gender: { type: String, required: true },
  weight: { type: Number, required: true },
  age: { type: Number, required: true },
  health: { type: String, required: true },
  color: { type: String, required: true },
  quantity: { type: Number },
  sold: { type: Number, default: 0 },
  bought: { type: Number, default: 0 }
}, {
  timestamps : true
});

module.exports = mongoose.model('Cattle', cattleSchema);