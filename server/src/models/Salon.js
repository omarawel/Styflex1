const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  services: [String],
  badge: { type: String, enum: ['standard', 'premium'], default: 'standard' },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  image: String,
});

module.exports = mongoose.model('Salon', salonSchema);
