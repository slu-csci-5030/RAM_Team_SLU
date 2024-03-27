// Importing Mongoose
const mongoose = require('mongoose');

// Asset Schema Definition
const assetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  codedIn: String,
  contacts: [String],
  dataInput: String,
  dataOutput: String,
  addresses: [String],
  url: String,
  developedBy: [String],
  inventoryNumber: String,
  manufacturers: [String],
  modelNumber: String,
  feeForService: Boolean,
  protocol: String,
  restrictions: [String],
  serviceFeeUrl: String,
  algorithm: String,
  operatingSystem: String,
  licence: String,
  purpose: String,
  version: String,
  subType: String,
  startDate: Date,
  finishDate: Date,
  trainingAvailable: Boolean,
  contactOrganisation: String,
  contactEmail: String,
  contactPhone: String,
  capabilities: [String],
  availableForUse: String,
  contactUrl: String,
  // Add any other fields as necessary
  value: Number // Example of a numerical value field
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

// Asset Model Creation
const Asset = mongoose.model('Asset', assetSchema);

// Exporting the model
module.exports = Asset;
