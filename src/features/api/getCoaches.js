import { axiosAuth } from "./axios";

const getCoaches = async (accessToken) => {
	try {
		const response = await axiosAuth(accessToken).get("/coaches");
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getCoaches;
