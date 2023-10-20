import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { MdArrowBack } from "react-icons/md";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { MenuItem, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import getUserById from "../features/api/getUserById";
import { getUser } from "../features/app/authSlice";

const AdminUser = () => {
	const user = useSelector(getUser);

	const navigate = useNavigate();
	const { userId } = useParams();
	const [canEdit, setCanEdit] = useState(false);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [status, setStatus] = useState("");

	const fetchUser = async (accessToken) => {
		try {
			const response = await getUserById(accessToken, userId);
			const userData = response.data;

			setFirstName(userData.firstName);
			setLastName(userData.lastName);
			setEmail(userData.email);
			setPhoneNumber(userData.phoneNumber);
			setStatus(userData.status);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		if (user.accessToken) {
			fetchUser(user.accessToken);
		}
	}, [user]);

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
						onClick={() => navigate(-1)}
						style={{
							width: "32px",
							height: "32px",
							cursor: "pointer",
						}}
					/>
					<h2>Admin Users / {`${firstName} ${lastName}`}</h2>
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
									label="Phone Number"
									value={phoneNumber}
									onChange={(e) =>
										setPhoneNumber(e.target.value)
									}
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
									<p>{firstName}</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Last Name</p>
									<p>{lastName}</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Email</p>
									<p>{email}</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Phone Number</p>
									<p>{phoneNumber}</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Status</p>
									<p>{status}</p>
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
