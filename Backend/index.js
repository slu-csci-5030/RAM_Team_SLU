import { PORT } from "./config.js";
import express from "express";
import AssetsRouter from "./routes/assets.js";
const app = express();
// app.use(express.json()); // TODO: add validation for JSON. Use try-catch to send code 400 if badly formatted JSON.

app.get("/", (req, res) => {
	res.send("<h1>Hello, RAM Team!</h1>");
});

app.use("/assets", AssetsRouter);

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
	console.log(`Check http://localhost:${PORT}`);
});
