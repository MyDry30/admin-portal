import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import {
	MdAnnouncement,
	MdBarChart,
	MdPeopleAlt,
	MdSettings,
	MdSupervisedUserCircle,
} from "react-icons/md";
import { StyledBody, StyledHeader, StyledNav } from "./Layout.styled";
import { useState } from "react";
import useLogout from "../auth/useLogout";
import AccountIcon from "../ui/accountIcon/AccountIcon";
import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";

const Layout = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const logout = useLogout();
	const navigate = useNavigate();
	const user = useSelector(getUser);

	const handleSignOut = async () => {
		try {
			await logout();
			navigate("/");
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<StyledHeader>
				<Link className="headerLogo" to="/">
					MyDry30
				</Link>
				<AccountIcon
					onClick={handleSignOut}
					firstName={user?.firstName}
				/>
			</StyledHeader>
			<StyledBody>
				<StyledNav>
					<NavLink to="/stats">
						<MdBarChart />
						<p>User Statistics</p>
					</NavLink>
					<NavLink to="/user-management">
						<MdPeopleAlt />
						<p>User Management</p>
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
				<section className="mainContent">
					<Outlet />
				</section>
			</StyledBody>
		</>
	);
};

export default Layout;
