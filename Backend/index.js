import { PORT } from "./config.js";
import express from "express";
import mongoose from "mongoose";
const app = express();

app.get("/", (req, res) => {
	res.send("<h1>Hello, RAM Team!</h1>");
});

app.post("/assets", (req, res) => {
    // Handle the POST request for /assets here
    res.send("POST request to /assets deleted");
});


app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
	console.log(`Check http://localhost:${PORT}`);
});
