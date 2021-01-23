const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema

const pastureSchema = new mongoose.Schema({
  temp: { type: Number, required: true },
  condition: { type: String, required: true },
  cattle: { type: ObjectId, ref: 'Cattle', required: true }
}, {
  timestamps : true
});

module.exports = mongoose.model('Pasture', pastureSchema);