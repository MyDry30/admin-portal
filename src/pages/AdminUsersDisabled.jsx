import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getAppUsers from "../features/api/getAppUsers";

const columns = [
	{ field: "firstName", headerName: "First Name", width: 130 },
	{ field: "lastName", headerName: "Last Name", width: 130 },
	{ field: "email", headerName: "Email", width: 200 },
	{ field: "journey", headerName: "Journey", width: 130 },
	{ field: "lastActive", headerName: "Last Active", width: 200 },
];
const initialState = {
	pagination: {
		paginationModel: { page: 0, pageSize: 10 },
	},
};

const AdminUsersDisabled = () => {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();

	const getUsers = async () => {
		try {
			const response = await getAppUsers();
			const tempUsers = response.data;
			setUsers(tempUsers?.filter((user) => user.status === "disabled"));
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	const handleRowClick = (params) => {
		const { row } = params;
		navigate("/users/123");
	};

	return (
		<DataGrid
			rows={users}
			columns={columns}
			initialState={initialState}
			pageSizeOptions={[10, 25, 50]}
			className="custom-data-grid"
			onRowClick={handleRowClick}
		/>
	);
};

export default AdminUsersDisabled;
