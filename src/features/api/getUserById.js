import { axiosAuth } from "./axios";

const getUserById = async (accessToken, id) => {
	try {
		const response = await axiosAuth(accessToken).get(`/users/${id}`);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getUserById;
