import { MdSearch } from "react-icons/md";
import Button from "../features/ui/button/Button";
import Container from "../features/ui/container/Container";
import ControlBar from "../features/ui/controlBar/ControlBar";
import SearchInput from "../features/ui/searchInput/SearchInput";
import SubNav from "../features/ui/subNav/SubNav";
import { NavLink, Outlet } from "react-router-dom";
import { useRef } from "react";

const ContentManagement = () => {
	return (
		<>
			<ControlBar>
				<h2>Content Management</h2>
				<Button>Export</Button>
			</ControlBar>
			<Container>
				<Outlet />
			</Container>
		</>
	);
};

export default ContentManagement;
