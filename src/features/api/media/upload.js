import { axiosAuth } from "../axios";

const upload = async (accessToken, id, formData) => {
	try {
		const response = await axiosAuth(accessToken).post(
			`/media/upload/${id}`,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default upload;
