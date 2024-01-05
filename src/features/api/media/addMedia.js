import { axiosAuth } from "../axios";

const addMedia = async (accessToken, body) => {
	try {
		const response = await axiosAuth(accessToken).post("/media", body);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default addMedia;
