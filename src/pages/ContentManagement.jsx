import { useEffect } from "react";
import Button from "../features/ui/button/Button";
import Container from "../features/ui/container/Container";
import ControlBar from "../features/ui/controlBar/ControlBar";
import SubNav from "../features/ui/subNav/SubNav";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const ContentManagement = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// navigate("/content-management/30-day-challenge");
	}, []);

	return (
		<>
			<ControlBar>
				<h2>Content Management</h2>
				<Button>Export</Button>
			</ControlBar>
			<Container>
				<SubNav>
					<NavLink to="/content-management/30-day-challenge">
						30 Day Challenge
					</NavLink>
					<NavLink to="/content-management/coaches">Coaches</NavLink>
					<NavLink to="/content-management/toolkit">Toolkit</NavLink>
				</SubNav>
				<Outlet />
			</Container>
		</>
	);
};

export default ContentManagement;
