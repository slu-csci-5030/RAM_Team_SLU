import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
	Firstname: {
		type: String,
		required: true,
		trim: true,
		validate(value) {
			if (!validator.isAlpha(value)) {
				throw new Error("Fullname should contain only alphabets!");
			}
		},
	},
	Lastname: {
		type: String,
		required: true,
		trim: true,
		validate(value) {
			if (!validator.isAlpha(value)) {
				throw new Error("Fullname should contain only alphabets!");
			}
		},
	},
	Email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Invalid Email!");
			} else {
				if (!["slu.edu"].includes(value.split("@")[1])) {
					throw new Error("Invalid Email!");
				}
			}
		},
	},
	Password: {
		type: String,
		required: true,
		trim: true,
		validate(value) {
			if (value.length <= 6) {
				throw new Error("The Password should be atleast 7 Characters");
			}
			if (value.toLowerCase().includes("password")) {
				throw new Error('The password should not contain the word "password"');
			}
		},
	},
});

userSchema.statics.findByCredentials = async function (Email, Password) {
	const user = await userModel.findOne({ Email: Email });

	if (!user) {
		throw new Error("Unable to login!");
	}

	const isMatch = await bcrypt.compare(Password, user.Password);

	if (!isMatch) {
		throw new Error("Unable to login!");
	}

	return user;
};

userSchema.pre("save", async function (next) {
	const user = this;
	if (user.isModified("Password")) {
		user.Password = await bcrypt.hash(user.Password, 8);
	}
	next();
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;
