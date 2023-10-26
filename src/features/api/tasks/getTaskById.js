import { axiosAuth } from "../axios";

const getTaskById = async (accessToken, taskId) => {
	try {
		const response = await axiosAuth(accessToken).get(`/tasks/${taskId}`);
		return response;
	} catch (err) {
		console.log(err.response.data);
		throw new Error(err.message);
	}
};

export default getTaskById;
