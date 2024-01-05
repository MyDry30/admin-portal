import { useDispatch } from "react-redux";
import axios from "../api/axios";
import { setUser } from "../app/authSlice";

const useRefreshToken = () => {
	const dispatch = useDispatch();

	const refresh = async () => {
		try {
			const response = await axios.post("/auth/refresh");
			dispatch(setUser({ ...response.data }));
			return response?.data?.accessToken;
		} catch (err) {
			return err;
		}
	};

	return refresh;
};

export default useRefreshToken;
