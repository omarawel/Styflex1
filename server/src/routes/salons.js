const express = require('express');
const Salon = require('../models/Salon');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const salons = await Salon.find();
    res.json(salons);
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Laden der Salons' });
  }
});

router.post('/', async (req, res) => {
  try {
    const salon = new Salon(req.body);
    await salon.save();
    res.status(201).json(salon);
  } catch (error) {
    res.status(400).json({ error: 'Fehler beim Erstellen des Salons' });
  }
});

module.exports = router;
