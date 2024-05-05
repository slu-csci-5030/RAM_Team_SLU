import express from "express";
import { equipmentModel } from "../models/equipmentAsset.js";

const equipmentRouter = express.Router();

// Create a equipment type Asset
equipmentRouter.post("/", async (req, res) => {
  try {
    const newAssetData = req.body;
    const asset = await equipmentModel.create(newAssetData);
    res.status(201).json(asset);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

// Get all the assets in DB
equipmentRouter.get("/", async (req, res) => {
  try {
    const assets = await equipmentModel.find({});
    res.status(200).json(assets);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

// Get a specific asset with ID
equipmentRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const asset = await equipmentModel.findById(id);
    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }
    res.status(200).json(asset);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

// Update a specific asset with ID
equipmentRouter.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedAssetData = req.body;
    const asset = await equipmentModel.findByIdAndUpdate(id, updatedAssetData, { new: true });
    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }
    res.status(200).json(asset);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

// Delete a specific asset with ID
equipmentRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const asset = await equipmentModel.findByIdAndDelete(id);
    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }
    res.status(200).json(asset);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

export default equipmentRouter;
