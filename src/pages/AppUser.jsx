import { useNavigate, useParams } from "react-router";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { MdArrowBack } from "react-icons/md";
import Modal from "../features/ui/modal/Modal";
import Container from "../features/ui/container/Container";
import Button from "../features/ui/button/Button";
import StatsTable from "../features/ui/statsTable/StatsTable";
import { useEffect, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import getUserById from "../features/api/getUserById";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import updateUserById from "../features/api/users/updateUserById";

const AppUser = () => {
	const user = useSelector(getUser);

	const navigate = useNavigate();
	const { userId } = useParams();
	const [canEdit, setCanEdit] = useState(false);

	const [appUser, setAppUser] = useState(null);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [journey, setJourney] = useState("");
	const [status, setStatus] = useState("");

	const fetchUser = async (accessToken) => {
		try {
			const response = await getUserById(accessToken, userId);
			const userData = response.data;

			setAppUser(userData);

			setFirstName(userData.firstName);
			setLastName(userData.lastName);
			setEmail(userData.email);
			setJourney(userData.journey);
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

	const handleCancelButton = async () => {
		await fetchUser(user.accessToken);
		setCanEdit(false);
	};

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
		try {
			await updateUserById(user.accessToken, appUser._id, {
				firstName,
				lastName,
				email,
				journey,
				status,
			});
			alert("User has been updated.");
		} catch (err) {
			console.log(err.message);
		} finally {
			setCanEdit(false);
		}
	};

	if (!appUser) {
		return <h2>Loading...</h2>;
	}

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
					<h2>User Management / {`${firstName} ${lastName}`}</h2>
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
									<Button onClick={handleCancelButton}>
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
									<p className="small-text">Journey</p>
									<p>{journey}</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Status</p>
									<p>{status}</p>
								</div>
							</div>
						</div>
					</Modal>
				)}
				<Modal>
					<div className="flex-column row-gap-2">
						<h2>Stats</h2>
						<StatsTable
							rows={[
								{ key: "Progress", value: "5/30" },
								{ key: "Day Streak", value: "5" },
								{
									key: "Total Tasks Completed",
									value: "35",
								},
								{ key: "Total Urges", value: "12" },
								{ key: "Current Appointments", value: "2" },
								{ key: "Completed Cycles", value: "2" },
								{
									key: "Last Active",
									value: "1/1/2024 1:12PM PT",
								},
							]}
						/>
					</div>
				</Modal>
			</Container>
		</>
	);
};

export default AppUser;
