import { NavLink, Outlet, useNavigate } from "react-router-dom";
import SubNav from "../features/ui/subNav/SubNav";
import { useEffect } from "react";

const ContentMangementToolkit = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// navigate("/content-management/toolkit/forums");
	}, []);

	return (
		<>
			<SubNav>
				<NavLink to="/content-management/toolkit/forums">
					Forums
				</NavLink>
				<NavLink to="/content-management/toolkit/media">
					Media Files
				</NavLink>
			</SubNav>
			<Outlet />
		</>
	);
};

export default ContentMangementToolkit;
