// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';

// Create Express app
const app = express();
const PORT = process.env.PORT || 5555;

// Connect to MongoDB
mongoose.connect('mongodb+srv://kasiviswanadhmogali:yMOYBcJQhTRY3aFo@cluster0.f4bvqbk.mongodb.net/', {
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


