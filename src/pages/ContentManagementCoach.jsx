import { MdArrowBack } from "react-icons/md";
import Container from "../features/ui/container/Container";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { useNavigate } from "react-router-dom";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import ProfileImage from "../features/ui/profileImage/ProfileImage";
import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";

const ContentManagementCoach = () => {
	const navigate = useNavigate();
	const [canEdit, setCanEdit] = useState(false);

	const [firstName, setFirstName] = useState("Steve");
	const [lastName, setLastName] = useState("Lament");
	const [description, setDescription] = useState("[Text]");
	const [link, setLink] = useState("[Text]");
	const [status, setStatus] = useState("active");

	const handleSaveButton = async () => {
		if (!firstName) {
			return alert("First Name is required.");
		}
		if (!lastName) {
			return alert("Last Name is required.");
		}
		if (!description) {
			return alert("Description is required.");
		}
		if (!link) {
			return alert("Link is required.");
		}
		if (!status) {
			return alert("Status is required.");
		}
		console.log("save form here");
	};

	return (
		<>
			<ControlBar>
				<div className="flex-row justify-sb column-gap-1">
					<MdArrowBack
						onClick={() => navigate(-1)}
						style={{
							width: "32px",
							height: "32px",
							cursor: "pointer",
						}}
					/>
					<h2>Content Management / [Coach Name]</h2>
				</div>
			</ControlBar>
			<Container>
				{canEdit ? (
					<Modal>
						<div className="flex-column row-gap-2">
							<div className="flex-row justify-sb">
								<h2>About</h2>
								<div className="flex-row column-gap-05">
									<Button
										onClick={handleSaveButton}
										type="filled"
									>
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
									label="Description"
									value={description}
									onChange={(e) =>
										setDescription(e.target.value)
									}
								/>
								<TextField
									label="Link"
									value={link}
									onChange={(e) => setLink(e.target.value)}
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
								<h3>Todo: image upload input here</h3>
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
							<ProfileImage />
							<div className="flex-column row-gap-05">
								<p className="small-text">First Name</p>
								<p>{firstName}</p>
							</div>
							<div className="flex-column row-gap-05">
								<p className="small-text">Last Name</p>
								<p>{lastName}</p>
							</div>
							<div className="flex-column row-gap-05">
								<p className="small-text">Description</p>
								<p>{description}</p>
							</div>
							<div className="flex-column row-gap-05">
								<p className="small-text">Link</p>
								<p>{link}</p>
							</div>
							<div className="flex-column row-gap-05">
								<p className="small-text">Status</p>
								<p>{status}</p>
							</div>
						</div>
					</Modal>
				)}
			</Container>
		</>
	);
};

export default ContentManagementCoach;
