const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('salonId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Laden der Buchungen' });
  }
});

router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: 'Fehler beim Erstellen der Buchung' });
  }
});

module.exports = router;
