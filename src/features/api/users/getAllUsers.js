import { axiosAuth } from "../axios";

const getAllUsers = async (accessToken) => {
	try {
		const response = await axiosAuth(accessToken).get("/users");
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getAllUsers;
