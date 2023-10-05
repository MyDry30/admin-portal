import axios from "./axios";

const handleLogin = async (email, password) => {
	try {
		const response = await axios.post("/auth/login", { email, password });
		return response;
	} catch (err) {
		if (err.response) {
			const { status } = err.response;
			throw new Error(status);
		} else if (err.request) {
			throw new Error("No response recieved");
		} else {
			throw new Error(err.message);
		}
	}
};

export default handleLogin;
