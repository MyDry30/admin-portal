import { axiosAuth } from "../axios";

const addCoach = async (accessToken, data) => {
	try {
		const response = await axiosAuth(accessToken).post("/coaches", data);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default addCoach;
