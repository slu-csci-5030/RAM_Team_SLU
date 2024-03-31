import { default as jwt } from "jsonwebtoken";
import userModel from "../models/user";

const auth = async (req, res, next) => {
	try {
		const token = req.header("Authorization").replace("Bearer ", "");
		const decoded = jwt.verify(token, "sluuseronly");
		const user = await userModel.findOne({ _id: decoded._id });
	} catch (error) {
		res.status(401).send({ message: "Please Authenticate!" });
	}
};

export default auth;
