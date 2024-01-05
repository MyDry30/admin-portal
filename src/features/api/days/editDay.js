import { axiosAuth } from "../axios";

const editDay = async (accessToken, dayId, data) => {
	try {
		const url = `/days/${dayId}`;
		const response = await axiosAuth(accessToken).put(url, data);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default editDay;
