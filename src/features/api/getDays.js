import { axiosAuth } from "./axios";

const getDays = async (accessToken) => {
	try {
		const response = await axiosAuth(accessToken).get("/days");
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getDays;
