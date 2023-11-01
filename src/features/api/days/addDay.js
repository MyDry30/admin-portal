import { axiosAuth } from "../axios";

const addDay = async (accessToken, data) => {
	try {
		const response = await axiosAuth(accessToken).post("/days", data);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default addDay;
