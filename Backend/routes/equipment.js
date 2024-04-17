import express from "express";
import equipmentModel from "../models/equipmentAsset.js";

const equipmentRouter = express.Router();
const model = new equipmentModel();

// Create a equipment type Asset
equipmentRouter.post("/", async (req, res) => {
	try {
		if (
			!req.body.Category ||
			!req.body.name ||
			!req.body.description ||
			!req.body["additional-name"] ||
			!req.body.contacts
		) {
			return res.status(400).send({
				message: "Please provide all the required fields",
			});
		}
		const newAsset = {
			Category: req.body.Category,
			name: req.body.name,
			description: req.body.description,
			"additional-name": req.body["additional-name"],
			"coded-in": req.body["coded-in"],
			contacts: req.body.contacts,
		};
		const asset = await model.create(newAsset);
		return res.status(201).send(asset);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});

// Get all the assets in DB
equipmentRouter.get("/", async (req, res) => {
	try {
		const assets = await model.find({});
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
		const asset = await model.findById(id);
		return res.status(200).json(asset);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});

// Update a specific asset with ID
equipmentRouter.patch("/:id", async (req, res) => {
	try {
		if (
			!req.body.Category ||
			!req.body.name ||
			!req.body.description ||
			!req.body["additional-name"] ||
			!req.body.contacts
		) {
			return res.status(400).send({
				message: "Please provide all the required fields",
			});
		}

		const id = req.params.id;

		const result = await model.findByIdAndUpdate(id, req.body);

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
		const asset = await model.findByIdAndDelete(id);

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
