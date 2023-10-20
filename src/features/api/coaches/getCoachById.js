import { axiosAuth } from "../axios";

const getCoachById = async (accessToken, id) => {
	try {
		const response = await axiosAuth(accessToken).get(`/coaches/${id}`);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getCoachById;
