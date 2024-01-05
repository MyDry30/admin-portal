import { axiosAuth } from "../axios";

const getMediaById = async (accessToken, id) => {
	try {
		const response = await axiosAuth(accessToken).get(`/media/${id}`);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getMediaById;
