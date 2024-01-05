import { useSelector } from "react-redux";
import getCoaches from "../features/api/getCoaches";
import Button from "../features/ui/button/Button";
import Container from "../features/ui/container/Container";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { Outlet } from "react-router-dom";
import { getUser } from "../features/app/authSlice";
import downloadSpreadsheet from "../features/utils/downloadSpreadsheet";

const ContentManagement = () => {
	const user = useSelector(getUser);

	const handleExport = async () => {
		try {
			const response = await getCoaches(user.accessToken);
			const data = response.data.map((coach) => ({
				firstName: coach.firstName,
				lastName: coach.lastName,
				status: coach.status,
				bookingsLink: coach.bookingsLink,
				description: coach.description,
			}));
			downloadSpreadsheet(data, "coaches");
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
			<ControlBar>
				<h2>Content Management</h2>
				<Button onClick={handleExport}>Export</Button>
			</ControlBar>
			<Container>
				<Outlet />
			</Container>
		</>
	);
};

export default ContentManagement;
