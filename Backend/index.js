import { PORT } from "./config.js";
import express from "express";
import AssetsRouter from "./routes/assets.js";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("<h1>Hello, RAM Team!</h1>");
});

app.use("/assets", AssetsRouter);

// JSON validation
app.use((err, req, res, next) => {
	console.error(err)
	if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
		console.error(err);
		return res.status(400).send(err.message);
	}
})

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
	console.log(`Check http://localhost:${PORT}`);
});
