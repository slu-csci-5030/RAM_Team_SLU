
// Importing the required modules

import { PORT } from "./config.js";
import express from "express";
import mongoose from "mongoose";
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello, RAM Team!</h1>");
});

app.post("/assets", (req, res) => {
    // Handle the POST request for /assets here
    res.send("POST request to /assets received");
});
// Connecting to MongoDB database using Mongoose


mongoose
    .connect('mongodb+srv://yellinanavyasree:navya123@cluster0.8x32kan.mongodb.net/assets?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`);
            console.log(`Check http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

