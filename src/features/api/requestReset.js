import axios from "./axios";

const requestReset = async (email) => {
	try {
		const response = await axios.post("/auth/request-reset", {
			email,
		});
		return response;
	} catch (err) {
		throw new Error(err);
	}
};

export default requestReset;
