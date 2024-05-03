import { PORT, mongoDBURL } from "./config.js";
import express from "express";
import mongoose from "mongoose";
import equipmentRouter from "./routes/equipment.js";
import userRouter from "./routes/User.js";
// import { equipmentModel } from "./models/equipmentAsset.js";
import cors from "cors";

const app = express();

// app.use((req, res, next) => {
// 	res.status(503).send({ message: "Site Under maintainance!" });
// });

app.use(express.json());

app.use("/Assets/equipments", equipmentRouter);
app.use("/User", userRouter);

app.use(
	cors({
		origin: "http://localhost:5555/",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type"],
	})
);

app.get("/", (req, res) => {
	return res.status(200).send("<h1>Hello, RAM Team!</h1>");
});

mongoose
	.connect(mongoDBURL)
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
