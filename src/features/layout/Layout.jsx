import { Link, NavLink, Outlet } from "react-router-dom";
import {
	MdAnnouncement,
	MdArrowDropDown,
	MdBarChart,
	MdPeopleAlt,
	MdSettings,
	MdSupervisedUserCircle,
} from "react-icons/md";
import { StyledBody, StyledHeader, StyledNav } from "./Layout.styled";

const Layout = () => {
	return (
		<>
			<StyledHeader>
				<Link className="headerLogo" to="/">
					MyDry30
				</Link>
				<div className="headerLogin">
					<p>Arthur Dent</p>
					<MdArrowDropDown />
				</div>
			</StyledHeader>
			<StyledBody>
				<StyledNav>
					<NavLink to="/stats">
						<MdBarChart />
						<p>User Statistics</p>
					</NavLink>
					<NavLink to="/user-management">
						<MdPeopleAlt />
						<p>App Users</p>
					</NavLink>
					<NavLink to="/content-management">
						<MdAnnouncement />
						<p>Content Management</p>
					</NavLink>
					<NavLink to="/admin-users">
						<MdSupervisedUserCircle />
						<p>Admin Users</p>
					</NavLink>
					<NavLink to="/settings">
						<MdSettings />
						<p>Settings</p>
					</NavLink>
				</StyledNav>
				<Outlet />
			</StyledBody>
		</>
	);
};

export default Layout;
