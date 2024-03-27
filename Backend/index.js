import express from 'express';
import mongoose from 'mongoose';
import { PORT } from "./config.js";
import getAssetsRouter from './routes/getasset.js'; // Corrected import path

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/equipments', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

app.use(express.json());

// Use getAssetsRouter
app.use('/', getAssetsRouter);

// Default route
app.get("/", (req, res) => {
  res.send("<h1>Hello, RAM Team!</h1>");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Check http://localhost:${PORT}`);
});
