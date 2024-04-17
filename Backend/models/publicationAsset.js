const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
	// Other fields can be added here
	types: {
		type: String,
		enum: [
			"Artefact",
			"Book",
			"Chapter",
			"Composition",
			"Conference",
			"Dataset",
			"Design",
		], // Specify the allowed values here
	},
});

const MyModel = mongoose.model("MyModel", mySchema);

module.exports = MyModel;
