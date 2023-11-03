import { axiosAuth } from "../axios";

const updatedMediaById = async (accessToken, id, data) => {
	try {
		const response = await axiosAuth(accessToken).put(`/media/${id}`, data);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default updatedMediaById;
