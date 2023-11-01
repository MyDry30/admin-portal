import Button from "../features/ui/button/Button";
import Container from "../features/ui/container/Container";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { Outlet } from "react-router-dom";

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
