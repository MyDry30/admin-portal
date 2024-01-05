import { axiosAuth } from "../../axios";

const deleteDayTask = async (accessToken, dayNumber, taskId) => {
	try {
		const response = await axiosAuth(accessToken).delete(
			`/days/${dayNumber}/tasks/${taskId}`
		);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default deleteDayTask;
