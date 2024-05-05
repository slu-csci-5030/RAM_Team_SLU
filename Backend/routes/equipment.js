import express from "express";
import mongoose from "mongoose";
import { equipmentModel } from "../models/equipmentAsset.js";

const equipmentRouter = express.Router();

// Create a equipment type Asset
equipmentRouter.post("/", async (req, res) => {
  try {
    const newAsset = req.body; // All fields are in req.body
    const asset = await equipmentModel.create(newAsset);
    return res.status(201).send(asset);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get all the assets in DB
equipmentRouter.get("/", async (req, res) => {
  try {
    const assets = await equipmentModel.find({});
    return res.status(200).json({
      count: assets.length,
      data: assets,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get a specific asset with ID
equipmentRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const asset = await equipmentModel.findById(id);
    return res.status(200).json(asset);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Update a specific asset with ID
equipmentRouter.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedAsset = req.body; // All fields are in req.body
    const result = await equipmentModel.findByIdAndUpdate(id, updatedAsset);
    if (!result) {
      return res.status(404).json({ message: "Asset not found!" });
    } else {
      return res.status(200).send({ message: "Asset successfully updated" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Delete a specific asset with ID
equipmentRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const asset = await equipmentModel.findByIdAndDelete(id);

    if (!asset) {
      return res.status(404).json({ message: "Asset not found!" });
    } else {
      return res.status(200).send(asset);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default equipmentRouter;
