import mongoose from "mongoose";

const Schema = mongoose.Schema;

const equipmentSchema = new Schema(
	{
		Category: {
			type: String,
			enum: [
				"Database",
				"Instrument",
				"Software",
				"Service",
				"Laboratory",
				"Collection",
				"Biological material",
				"Reagent",
				"Facility",
			],
			required: true,
			default: "Database",
		},
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		"additional-name": {
			type: String,
			required: true,
		},
		"coded-in": {
			type: String,
			required: function () {
				return this.Category === "Database" || this.Category === "Software";
			},
		},
		contacts: {
			type: String,
			enum: ["Person 1", "Person 2", "Person 3"],
			required: true,
		},
		"contact-email" : {
			type: String,
			required: true,
		},
		"contact-name": {
			type: String,
			required: true,
		},
		"available_for_use" : {
			type: String,
			required: true,
		}
	},
	{
		timestamps: true,
	}
);

export const equipmentModel = mongoose.model(
	"Asset_Equipments",
	equipmentSchema
);
