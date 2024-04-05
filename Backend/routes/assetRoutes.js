// routes/assetRoutes.js

const express = require('express');
const router = express.Router();
const Asset = require('../models/asset');
const Asset = require('../models/assetModel');


// Get a single asset by ID
router.get('/:id', getAsset, (req, res) => {
  res.json(res.asset);
});

async function getAsset(req, res, next) {
  let asset;
  try {
    asset = await Asset.findById(req.params.id);
    if (asset == null) {
      return res.status(404).json({ message: 'Asset not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.asset = asset;
  next();
}

module.exports = router;
