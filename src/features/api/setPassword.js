import axios from "./axios";

const setPassword = async (token, newPassword) => {
	try {
		const response = await axios.post("/auth/reset", {
			token,
			newPassword,
		});
		return response;
	} catch (err) {
		if (err.response) {
			const { status, data } = err.response;
			if (data.error) {
				throw new Error(data.error);
			}
			throw new Error(status);
		} else if (err.request) {
			throw new Error("No response recieved");
		} else {
			throw new Error(err.message);
		}
	}
};

export default setPassword;
