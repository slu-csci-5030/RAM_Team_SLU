import express from "express";
import { publicationModel } from "../models/publicationAsset.js";

const publicationRouter = express.Router();

// Create a publication type Asset
publicationRouter.post("/", async (req, res) => {
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
		const newPublication = {
			Category: req.body.Category,
			name: req.body.name,
			description: req.body.description,
			"additional-name": req.body["additional-name"],
			"coded-in": req.body["coded-in"],
			contacts: req.body.contacts,
		};
		const publication = await publicationModel.create(newPublication);
		return res.status(201).send(publication);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});

publicationRouter.get("/", async (req, res) => {
	try {
		const publications = await publicationModel.find({});
		return res.status(200).json({
			count: publications.length,
			data: publications,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});

publicationRouter.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const publication = await publicationModel.findById(id);
		return res.status(200).json(publication);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});

publicationRouter.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const publication = await publicationModel.findByIdAndDelete(id);

		if (!publication) {
			return res.status(404).json({ message: "Publication not found!" });
		} else {
			return res.status(200).send(publication);
		}
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});