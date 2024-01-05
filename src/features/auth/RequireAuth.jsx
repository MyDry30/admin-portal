import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
	const user = useSelector(getUser);
	const location = useLocation();

	return (
		<>
			{allowedRoles.find((role) => user?.role === role) ? (
				<Outlet />
			) : user?.accessToken ? (
				<Navigate
					to="/unauthorized"
					state={{ from: location }}
					replace
				/>
			) : (
				<Navigate to="/sign-in" state={{ from: location }} replace />
			)}
		</>
	);
};

export default RequireAuth;
