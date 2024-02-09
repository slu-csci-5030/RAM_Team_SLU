import { PORT } from "./config.js";
import express from "express";
const app = express();

app.get("/", (req, res) => {
	res.send("<h1>Hello, RAM Team!</h1>");
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
	console.log(`Check http://localhost:${PORT}`);
});
