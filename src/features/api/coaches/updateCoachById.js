import { axiosAuth } from "../axios";

const updateCoachById = async (accessToken, id, data) => {
	try {
		const response = await axiosAuth(accessToken).put(
			`/coaches/${id}`,
			data
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default updateCoachById;
