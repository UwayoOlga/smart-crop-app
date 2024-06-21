const express = require('express');
const router = express.Router();
const Crop = require('../models/Crop');

// GET /api/crops
router.get('/', async (req, res) => {
  try {
    const crops = await Crop.find().populate('district');
    res.json(crops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
