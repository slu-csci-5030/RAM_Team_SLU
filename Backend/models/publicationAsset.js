const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const publicationSchema = new Schema(
	{
		category: {
			type: String,
			enum: [
				"Artifact",
				"Book",
				"Chapter",
				"Composition",
				"Conference",
				"Dataset",
				"Design",
			], // Specify the allowed values here
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
	},
	{
		timestamps: true,
	});

const MyModel = mongoose.model("MyModel", publicationSchema);

module.exports = MyModel;
