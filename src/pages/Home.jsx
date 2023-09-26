import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user?.accessToken) {
			navigate("/sign-in");
		}
		navigate("/stats");
	}, [user]);

	return <div>Home</div>;
};

export default Home;
