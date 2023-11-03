import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { MdArrowBack } from "react-icons/md";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { MenuItem, TextField } from "@mui/material";
import addUser from "../features/api/users/addUser";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import { v4 as uuid } from "uuid";

const NewAdminUser = () => {
	const navigate = useNavigate();
	const user = useSelector(getUser);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [status, setStatus] = useState("active");

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
		if (!phoneNumber) {
			return alert("Phone Number is required.");
		}
		if (!status) {
			return alert("Status is required.");
		}
		try {
			await addUser(user.accessToken, {
				firstName,
				lastName,
				email,
				phoneNumber,
				status,
				password: uuid(),
				role: "admin",
			});
			alert("New user has been created.");
			navigate("/admin-users/active");
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
			<ControlBar>
				<div className="flex-row align-center column-gap-1">
					<MdArrowBack
						onClick={() => navigate(-1)}
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
							label="Phone Number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
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
