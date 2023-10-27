import { axiosAuth } from "../../axios";

const getDayTask = async (accessToken, dayNumber, taskId) => {
	try {
		const response = await axiosAuth(accessToken).get(
			`/days/${dayNumber}/tasks/${taskId}`
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getDayTask;
