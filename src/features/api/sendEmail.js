import axios from "./axios";

const sendEmail = async ({ email, subject, message }) => {
	try {
		const response = await axios.post("/email/send", {
			email,
			subject,
			message,
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

export default sendEmail;
