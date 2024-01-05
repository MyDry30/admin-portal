import { axiosAuth } from "../axios";

const getDayByNumber = async (accessToken, number) => {
	try {
		const response = await axiosAuth(accessToken).get(
			`/days/number/${number}`
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getDayByNumber;
