// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';

// Create Express app
const app = express();
const PORT = process.env.PORT || 5555;

// Connect to MongoDB
mongoose.connect('mongodb+srv://yellinanavyasree:navya123@cluster0.8x32kan.mongodb.net/assets?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
    
    // Start the server only after connecting to MongoDB
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`);
        console.log(`Check http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

const assetSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Name [M] [S]
    description: { type: String, required: true }, // Description [M]
    additionalName: { type: String }, // Additional name [S]
    codedIn: { type: String }, // Coded in
    contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }], // Contacts [S]
    dataInput: { type: String }, // Data input format
    dataOutput: { type: String }, // Data output format
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }], // Location [S]
    url: { type: String }, // URL [S]
    developedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }], // Developed by [S]
    inventoryNumber: { type: String }, // Inventory number
    manufacturers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }], // Manufacturers
    modelNumber: { type: String }, // Model number
    feeForService: { type: Boolean }, // Fees apply
    protocol: { type: String }, // Protocol
    restrictions: [{ type: String }], // Restrictions
    serviceFeeUrl: { type: String }, // Service fee URL [S]
    algorithm: { type: String }, // Algorithm used
    operatingSystem: { type: String }, // Operating system
    licence: { type: String }, // Licence
    purpose: { type: String }, // Purpose
    version: { type: String }, // Version
    subType: { type: String }, // Sub type
    startDate: { type: Date }, // Start date
    finishDate: { type: Date }, // Finish date
    trainingAvailable: { type: Boolean }, // Training available
    contactOrganisation: { type: String }, // Contact organisation
    contactEmail: { type: String } // Contact email
});

// Define the model using the schema
const Asset = mongoose.model('Asset', assetSchema);

// Middleware to parse JSON
app.use(express.json());

// Route to add a new asset
app.post("/assets", async (req, res) => {
    try {
        // Extract data from request body
        const { name, description, additionalName, codedIn, contacts, dataInput, dataOutput, addresses, url, developedBy, inventoryNumber, manufacturers, modelNumber, feeForService, protocol, restrictions, serviceFeeUrl, algorithm, operatingSystem, licence, purpose, version, subType, startDate, finishDate, trainingAvailable, contactOrganisation, contactEmail } = req.body;
 
        // Create a new asset document
        const asset = new Asset({
            name,
            description,
            additionalName,
            codedIn,
            contacts,
            dataInput,
            dataOutput,
            addresses,
            url,
            developedBy,
            inventoryNumber,
            manufacturers,
            modelNumber,
            feeForService,
            protocol,
            restrictions,
            serviceFeeUrl,
            algorithm,
            operatingSystem,
            licence,
            purpose,
            version,
            subType,
            startDate,
            finishDate,
            trainingAvailable,
            contactOrganisation,
            contactEmail
        });
 
        // Save the asset document to the database
        await asset.save();
 
        // Respond with the saved asset
        res.status(201).json(asset);
    } catch (error) {
        // Handle errors
        console.error("Error saving asset:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
 