import express, { response } from "express";
import userModel from "../models/user.js";
import auth from "../middleware/auth.js";

const userRouter = express.Router();

// userRouter.get("/me", (req, res) => {
// 	return res.status(200).send(req.user);
// });

userRouter.get("/users", auth, async (req, res) => {
	try {
		const users = await userModel.find({});
		return res.status(200).send(users);
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

userRouter.get("/users/me", auth, async (req, res) => {
	res.send(req.user);
});

userRouter.post("/login", async (req, res) => {
	try {
		const user = await userModel.findByCredentials(
			req.body.Email,
			req.body.Password
		);
		const token = await user.generateAuthToken();
		res.send(user);
	} catch (error) {
		console.log(error.message);
		res.status(400).send({ message: error.message });
	}
});

userRouter.post("/signup", async (req, res) => {
	try {
		if (
			!req.body.Firstname ||
			!req.body.Lastname ||
			!req.body.Email ||
			!req.body.Password
		) {
			return res.status(400).send({
				message: "Please provide all the required fields",
			});
		}

		const newUser = {
			Firstname: req.body.Firstname,
			Lastname: req.body.Lastname,
			Email: req.body.Email,
			Password: req.body.Password,
		};

		const user = await userModel.create(newUser);
		const token = await user.generateAuthToken();
		return res.status(200).send(user);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});

userRouter.patch("/update", async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["Firstname", "Lastname", "Email", "Password"];
	const isValidOperation = updates.every((update) =>
		allowedUpdates.includes(update)
	);

	if (!isValidOperation) {
		return res.status(404).send({ Error: "Invalid Updates!" });
	}
	try {
		const user = await req.user;

		updates.forEach((update) => (user[update] = req.body[update]));
		await user.save();
		res.send(user);
	} catch (error) {
		res.status(500).send(error);
	}
});

export default userRouter;
