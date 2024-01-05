import { axiosAuth } from "../axios";

const getMedia = async (accessToken) => {
	try {
		const response = await axiosAuth(accessToken).get("/media");
		return response;
	} catch (err) {
		throw new Error(response.data);
	}
};

export default getMedia;
