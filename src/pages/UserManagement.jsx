import { Outlet } from "react-router";
import ControlBar from "../features/ui/controlBar/ControlBar";
import Button from "../features/ui/button/Button";
import Container from "../features/ui/container/Container";

const UserManagement = () => {
	return (
		<>
			<ControlBar>
				<h2>User Management</h2>
				<Button>Export</Button>
			</ControlBar>
			<Container>
				<Outlet />
			</Container>
		</>
	);
};

export default UserManagement;
