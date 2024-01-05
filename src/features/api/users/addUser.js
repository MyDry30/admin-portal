import { axiosAuth } from "../axios";

const addUser = async (accessToken, data) => {
	try {
		const response = await axiosAuth(accessToken).post("/users", data);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default addUser;
