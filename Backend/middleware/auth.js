import { default as jwt } from "jsonwebtoken";
import userModel from "../models/user.js";
const auth = async (req, res, next) => {
	try {
		const token = req.header("Authorization").replace("Bearer ", "");
		const decoded = jwt.verify(token, "sluuseronly");
		const user = await userModel.findOne({
			_id: decoded._id,
			"tokens.token": token,
		});
		if (!user) {
			throw new Error();
		}

		req.token = token;
		req.user = user;

		next();
	} catch (error) {
		res.status(401).send({ message: "Please Authenticate!" });
	}
};

export default auth;
