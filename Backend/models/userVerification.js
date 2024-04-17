import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userVerificationSchema = new Schema({
	userID: {
		type: String,
	},
	uniqueString: {
		type: String,
	},
	createdAt: {
		type: Date,
	},
	expiresAt: {
		type: Date,
	},
});

const userVerificationModel = mongoose.model(
	"UsersVerification",
	userVerificationSchema
);

export default userVerificationModel;
