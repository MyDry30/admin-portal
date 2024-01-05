import { axiosAuth } from "../axios";

const updateUserById = async (accessToken, id, data) => {
	try {
		const response = await axiosAuth(accessToken).put(`/users/${id}`, data);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default updateUserById;
