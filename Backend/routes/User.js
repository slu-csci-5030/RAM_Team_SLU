import express, { response } from "express";
import userModel from "../models/user.js";
import userVerificationModel from "../models/userVerification.js";
// import bcrypt from "bcrypt";
import auth from "../middleware/auth.js";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import "dotenv/config";

const userRouter = express.Router();

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.AUTH_EMAIL,
		pass: process.env.AUTH_PASS,
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

userRouter.get("/users", auth, async (req, res) => {
	try {
		const users = await userModel.find({});
		return res.status(200).send(users);
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

userRouter.post("/logout", auth, async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});
		await req.user.save();
		res.send();
	} catch (error) {
		res.status(500).send();
	}
});

userRouter.get("/users/me", auth, async (req, res) => {
	res.send(req.user);
});

userRouter.get("/verify", async (req, res) => {
	try {
		const { token } = req.query;

		// Find the verification entry in the database
		const verificationEntry = await userVerificationModel.findOne({
			uniqueString: token,
			expiresAt: { $gt: new Date() }, // Ensure the token is not expired
		});

		if (!verificationEntry) {
			return res
				.status(400)
				.send({ message: "Invalid or expired verification token" });
		}

		// Mark the user as verified in the users collection
		await userModel.updateOne(
			{ _id: verificationEntry.userID },
			{ Verified: true }
		);

		// Delete the verification entry from the verification collection
		await userVerificationModel.deleteOne({ _id: verificationEntry._id });

		return res.status(200).send({ message: "Account verified successfully" });
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});

userRouter.post("/login", async (req, res) => {
	try {
		const user = await userModel.findByCredentials(
			req.body.Email,
			req.body.Password
		);

		if (!user.Verified) {
			return res.status(401).send({
				message:
					"Email not verified. Please verify your email before logging in.",
			});
		}

		const token = await user.generateAuthToken();
		res.send({ user, token });
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

		const user = await userModel.create(newUser);
		const token = await user.generateAuthToken();
		const verificationToken = uuidv4();
		await userVerificationModel.create({
			userID: user._id,
			uniqueString: verificationToken,
			createdAt: new Date(),
			expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // Token expiration time (24 hours)
		});

		// Send verification email
		const verificationLink = `${process.env.CLIENT_URL}/User/verify?token=${verificationToken}`;
		const mailOptions = {
			from: process.env.AUTH_EMAIL,
			to: req.body.Email,
			subject: "Account Verification",
			html: `<p>Hello ${req.body.Firstname},</p>
             <p>Please click on the following link to verify your account:</p>
             <a href=${verificationLink}">${verificationLink}</a>`,
		};

		// sendVerificationEmail(newUser, res);
		await transporter.sendMail(mailOptions);
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
