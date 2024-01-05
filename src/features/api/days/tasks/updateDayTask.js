import { axiosAuth } from "../../axios";

const updateDayTask = async (accessToken, dayNumber, taskId, data) => {
	try {
		const response = await axiosAuth(accessToken).put(
			`/days/${dayNumber}/tasks/${taskId}`,
			data
		);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default updateDayTask;
