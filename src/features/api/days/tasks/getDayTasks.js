import { axiosAuth } from "../../axios";

const getDayTasks = async (accessToken, dayNumber) => {
	try {
		const response = await axiosAuth(accessToken).get(
			`/days/${dayNumber}/tasks`
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getDayTasks;
