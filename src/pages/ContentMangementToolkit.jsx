import { NavLink, Outlet } from "react-router-dom";
import SubNav from "../features/ui/subNav/SubNav";

const ContentMangementToolkit = () => {
	return (
		<>
			<SubNav>
				<NavLink to="forums">Forums</NavLink>
				<NavLink to="media">Media Files</NavLink>
			</SubNav>
			<Outlet />
		</>
	);
};

export default ContentMangementToolkit;
