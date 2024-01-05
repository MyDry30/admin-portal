import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../ui/loader/Loader";
import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";
import useRefreshToken from "./useRefreshToken";

const PersistLogin = () => {
	const [isLoading, setIsLoading] = useState(true);
	const auth = useSelector(getUser);
	const refresh = useRefreshToken();

	useEffect(() => {
		let isMounted = true;

		const verifyRefreshToken = async () => {
			try {
				await refresh();
			} catch (err) {
				console.error(err);
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		!auth?.user?.accessToken ? verifyRefreshToken() : setIsLoading(false);

		return () => {
			isMounted = false;
		};
	}, []);

	return <>{isLoading ? <Loader /> : <Outlet />}</>;
};

export default PersistLogin;
