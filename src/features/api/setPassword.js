import axios from "./axios";

const setPassword = async (token, newPassword) => {
	try {
		const response = await axios.post("/auth/reset", {
			token,
			newPassword,
		});
		return response;
	} catch (err) {
		throw new Error(err);
	}
};

export default setPassword;
