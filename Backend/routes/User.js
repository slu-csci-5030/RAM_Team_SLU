import express, { response } from "express";
import userModel from "../models/user.js";
import userVerificationModel from "../models/userVerification.js";
import bcrypt from "bcrypt";
import auth from "../middleware/auth.js";
import nodemailer from "nodemailer";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import "dotenv/config";

const userRouter = express.Router();

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.AUTH_EMAIL,
		pass: process.env.AUTH_PASSWORD,
	},
});

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log("Ready for messages");
		console.log(success);
	}
});

// userRouter.get("/me", (req, res) => {
// 	return res.status(200).send(req.user);
// });

const sendVerificationEmail = ({ _id, Email }, res) => {
	const currentUrl = "http://localhost:5555/";
	const uniqueString = uuidv4() + _id;

	const mailOptions = {
		from: process.env.AUTH_EMAIL,
		to: Email,
		subject: "Account Confirmation!",
		html: `<p>Verify your email address by clicking the link below to confirm your account.</p><p>This link <b>expires in 6 hours</b>.</p><p>Click <a href = ${
			currentUrl + "User/verify/" + _id + "/" + uniqueString
		}></a></p>`,
	};

	const saltRounds = 10;
	bcrypt
		.hash()
		.then((hashedString) => {
			const newVerification = new userVerificationModel({
				userID: _id,
				uniqueString: hash,
				createdAt: Date.now(),
				expiresAt: Date.now() + 21600000,
			});
			newVerification
				.save()
				.then(() => {
					transporter
						.sendMail(mailOptions)
						.then(() => {
							res.json({
								status: "PENDING",
								message: "Verification email sent successfully",
							});
						})
						.catch((error) => {
							console.log(error);
							res.json({
								status: "FAILED",
								message: "Verification email failed",
							});
						});
				})
				.catch((error) => {
					console.log(error);
					res.json({
						status: "FAILED",
						message: "Couldn't save verification data!",
					});
				});
		})
		.catch(() => {
			res.json({
				status: "FAILED",
				message: "AN error while hashing email data!",
			});
		});
	// bcrypt.hash(uniqueString, saltRounds, async (error, hash) => {
	// 	if (error) {
	// 		return res.status(500).send({ error: error.message });
	// 	}
	// 	const newVerification = new userVerificationModel({
	// 		userID: _id,
	// 		uniqueString: hash,
	// 		createdAt: Date.now(),
	// 		expiresAt: Date.now() + 21600000,
	// 	});
	// 	try {
	// 		await newVerification.save();
	// 		transporter.sendMail(mailOptions);
	// 		return res.status(200).send(newVerification);
	// 	} catch (error) {
	// 		res.status(500).send({ error: error.message });
	// 	}
	// });
};

userRouter.get("/verify/:userID/:uniqueString", async (req, res) => {
	const { userID, uniqueString } = req.params;
	try {
		const userVerification = await userVerificationModel.find({ userID });
	} catch (error) {
		res.status(404).send({ error: error.message });
	}
});

userRouter.get("/verified", (req, res) => {
	res.sendFile(path.join(__dirname, "../views/verified.html"));
});

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
			Verified: false,
		};

		// const user = await userModel.create(newUser);
		// const token = await user.generateAuthToken();
		sendVerificationEmail(newUser, res);
		// return res.status(200).send(user);
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
