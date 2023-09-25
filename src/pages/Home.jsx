import { useSelector } from "react-redux";
import { getAccessToken } from "../features/app/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
	const accessToken = useSelector(getAccessToken);
	const navigate = useNavigate();

	useEffect(() => {
		if (!accessToken) {
			navigate("/sign-in");
		}
	}, [accessToken]);

	return <div>Home</div>;
};

export default Home;
