import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { MdArrowBack } from "react-icons/md";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { MenuItem, TextField } from "@mui/material";

const NewAdminUser = () => {
	const navigate = useNavigate();
	const { userId } = useParams();
	const [canEdit, setCanEdit] = useState(false);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [journey, setJourney] = useState("dry");
	const [status, setStatus] = useState("active");

	const handleBackClick = () => navigate(-1);

	const handleAddClick = async () => {
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
		console.log("handle add here");
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
					<h2>Admin Users / New User</h2>
				</div>
			</ControlBar>
			<Container>
				<Modal>
					<div className="flex-column row-gap-2">
						<div className="flex-row justify-sb">
							<h2>New User</h2>
							<Button type="filled" onClick={handleAddClick}>
								Add
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
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<TextField
							label="Last Name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
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
				</Modal>
			</Container>
		</>
	);
};

export default NewAdminUser;
