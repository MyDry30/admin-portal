import { Outlet, useNavigate } from "react-router-dom";
import Container from "../features/ui/container/Container";
import ControlBar from "../features/ui/controlBar/ControlBar";
import Button from "../features/ui/button/Button";

const AdminUsers = () => {
	const navigate = useNavigate();

	return (
		<>
			<ControlBar>
				<h2>Admin Users</h2>
				<div className="flex-row column-gap-05">
					<Button>Export</Button>
					<Button
						type="filled"
						onClick={() => navigate("/users/admin/add")}
					>
						Add User
					</Button>
				</div>
			</ControlBar>
			<Container>
				<Outlet />
			</Container>
		</>
	);
};

export default AdminUsers;
