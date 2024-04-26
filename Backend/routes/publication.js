import express from "express";
import { equipmentModel } from "../models/publicationAsset.js";

const equipmentRouter = express.Router();

// Create a equipment type Asset
equipmentRouter.post("/", async (req, res) => {
	try {
		if (
			!req.body.category ||
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
		const asset = await equipmentModel.create(newAsset);
		return res.status(201).send(asset);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});