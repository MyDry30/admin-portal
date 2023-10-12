import axios from "./axios";

const sendResetEmail = async ({ email, resetLink }) => {
	try {
		const response = await axios.post("/email/sendReset", {
			email,
			resetLink,
		});
		return response;
	} catch (err) {
		if (err.response) {
			const { status, data } = err.response;
			if (data.message) {
				throw new Error(data.message);
			}
			throw new Error(status);
		} else if (err.request) {
			throw new Error("No response recieved");
		} else {
			throw new Error(err.message);
		}
	}
};

export default sendResetEmail;
