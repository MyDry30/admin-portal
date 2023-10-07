import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { MdArrowBack } from "react-icons/md";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { MenuItem, TextField } from "@mui/material";

const AdminUser = () => {
	const navigate = useNavigate();
	const { userId } = useParams();
	const [canEdit, setCanEdit] = useState(false);

	const [firstName, setFirstName] = useState("Steve");
	const [lastName, setLastName] = useState("Lament");
	const [email, setEmail] = useState("mbell@tepia.co");
	const [journey, setJourney] = useState("dry");
	const [status, setStatus] = useState("active");

	const handleBackClick = () => navigate(-1);

	const handleSaveButton = async () => {
		if (!firstName) {
			return alert("First Name is required.");
		}
		if (!lastName) {
			return alert("Last Name is required.");
		}
		if (!email) {
			return alert("Email is required.");
		}
		if (!journey) {
			return alert("Journey is required.");
		}
		if (!status) {
			return alert("Status is required.");
		}
		console.log("save form here");
	};

	return (
		<>
			<ControlBar>
				<div className="flex-row align-center column-gap-1">
					<MdArrowBack
						onClick={handleBackClick}
						style={{
							width: "32px",
							height: "32px",
							cursor: "pointer",
						}}
					/>
					<h2>Admin Users / Steve Lament</h2>
				</div>
			</ControlBar>
			<Container>
				{canEdit ? (
					<Modal>
						<div className="flex-column row-gap-2">
							<div className="flex-row justify-sb">
								<h2>About</h2>
								<div className="flex-row column-gap-05">
									<Button onClick={handleSaveButton}>
										Save
									</Button>
									<Button onClick={() => setCanEdit(false)}>
										Cancel
									</Button>
								</div>
							</div>
							<div
								className="flex-column row-gap-1"
								style={{ width: "400px" }}
							>
								<TextField
									label="First Name"
									value={firstName}
									onChange={(e) =>
										setFirstName(e.target.value)
									}
								/>
								<TextField
									label="Last Name"
									value={lastName}
									onChange={(e) =>
										setLastName(e.target.value)
									}
								/>
								<TextField
									label="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<TextField
									select
									label="Journey"
									value={journey}
									onChange={(e) => setJourney(e.target.value)}
								>
									<MenuItem key={1} value={"dry"}>
										Dry
									</MenuItem>
									<MenuItem key={2} value={"moderation"}>
										Moderation
									</MenuItem>
								</TextField>
								<TextField
									select
									label="Status"
									value={status}
									onChange={(e) => setStatus(e.target.value)}
								>
									<MenuItem key={1} value={"active"}>
										Active
									</MenuItem>
									<MenuItem key={2} value={"disabled"}>
										Disabled
									</MenuItem>
								</TextField>
							</div>
						</div>
					</Modal>
				) : (
					<Modal>
						<div className="flex-column row-gap-2">
							<div className="flex-row justify-sb">
								<h2>About</h2>
								<Button onClick={() => setCanEdit(true)}>
									Edit
								</Button>
							</div>
							<div className="flex-column row-gap-2">
								<div className="flex-column row-gap-05">
									<p className="small-text">First Name</p>
									<p>Steve</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Last Name</p>
									<p>Lament</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Email</p>
									<p>mbell@tepia.co</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Journey</p>
									<p>Moderation</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Status</p>
									<p>Active</p>
								</div>
							</div>
						</div>
					</Modal>
				)}
			</Container>
		</>
	);
};

export default AdminUser;
