import { axiosFormData } from "../axios";

const uploadAsset = async (accessToken, file) => {
	try {
		const formData = new FormData();
		formData.append("file", file);
		const response = await axiosFormData(accessToken).post("/s3", formData);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default uploadAsset;
