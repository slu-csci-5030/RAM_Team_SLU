// routes/assetRoutes.js

const express = require('express');
const router = express.Router();
const Asset = require('../models/asset');

// Get all assets
router.get('/', async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single asset by ID
router.get('/:id', getAsset, (req, res) => {
  res.json(res.asset);
});

// Create a new asset
router.post('/', async (req, res) => {
  const asset = new Asset({
    name: req.body.name,
    description: req.body.description,
    value: req.body.value
  });

  try {
    const newAsset = await asset.save();
    res.status(201).json(newAsset);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing asset
router.patch('/:id', getAsset, async (req, res) => {
  if (req.body.name != null) {
    res.asset.name = req.body.name;
  }
  if (req.body.description != null) {
    res.asset.description = req.body.description;
  }
  if (req.body.value != null) {
    res.asset.value = req.body.value;
  }

  try {
    const updatedAsset = await res.asset.save();
    res.json(updatedAsset);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an asset
router.delete('/:id', getAsset, async (req, res) => {
  try {
    await res.asset.remove();
    res.json({ message: 'Asset deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get asset by ID
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
