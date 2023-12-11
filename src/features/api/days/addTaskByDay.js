import { axiosAuth } from "../axios";

const addTaskByDay = async (accessToken, day, data) => {
	try {
		const response = await axiosAuth(accessToken).post(
			`/days/${day}/tasks`,
			data
		);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default addTaskByDay;
