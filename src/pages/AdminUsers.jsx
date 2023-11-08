import { Outlet, useNavigate } from "react-router-dom";
import Container from "../features/ui/container/Container";
import ControlBar from "../features/ui/controlBar/ControlBar";
import Button from "../features/ui/button/Button";
import downloadSpreadsheet from "../features/utils/downloadSpreadsheet";
import getAllUsers from "../features/api/users/getAllUsers";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";

const AdminUsers = () => {
	const navigate = useNavigate();
	const user = useSelector(getUser);

	const handleExport = async () => {
		try {
			const response = await getAllUsers(user.accessToken);
			const adminUsers = response.data.filter(
				(user) => user.role === "admin"
			);
			const data = adminUsers.map((user) => ({
				firstName: user.firstName,
				lastName: user.lastName,
				role: user.role,
				email: user.email,
				phoneNumber: user.phoneNumber,
				lastActive: user.updatedAt,
				createdAt: user.createdAt,
			}));
			downloadSpreadsheet(data, "admin-users");
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
			<ControlBar>
				<h2>Admin Users</h2>
				<div className="flex-row column-gap-05">
					<Button onClick={handleExport}>Export</Button>
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
