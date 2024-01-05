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
import sendEmail from "../features/api/sendEmail";
import requestReset from "../features/api/requestReset";
import { PROD_URL } from "../constants";

const isValidEmail = (email) => {
	const atIndex = email.indexOf("@");
	const dotIndex = email.lastIndexOf(".");
	return atIndex !== -1 && dotIndex !== -1 && atIndex < dotIndex;
};

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
		if (!isValidEmail(email)) {
			return alert("Must be valid email.");
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
			const { data } = await requestReset(email);
			await sendEmail({
				email,
				subject: "MyDry30: Admin Invitation",
				message: `<p>Dear ${firstName} ${lastName},</p><p>You have been invited to create an admin account for MyDry30.</p><p><a href='${PROD_URL}/${data.resetLink}'>Click here to set your password</a></p><p>Best regards,</p><p>The MyDry30 Team</p>`,
			});
			alert(
				`${firstName} ${lastName} has been invited via the following email: ${email}`
			);
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
