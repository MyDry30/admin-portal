import { useState } from "react";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { MenuItem, TextField } from "@mui/material";
import UploadButton from "../features/ui/uploadButton/UploadButton";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import uploadAsset from "../features/api/s3/uploadAsset";
import addCoach from "../features/api/coaches/addCoach";

const ContentManagementAddCoach = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [description, setDescription] = useState("");
	const [link, setLink] = useState("");
	const [status, setStatus] = useState("");
	const [imageFile, setImageFile] = useState(null);

	const handleUpload = async (file) => {
		try {
			const response = await uploadAsset(user.accessToken, file);
			return response;
		} catch (error) {
			console.error("Error uploading file:", error);
		}
	};

	const resetForm = () => {
		setFirstName("");
		setLastName("");
		setDescription("");
		setLink("");
		setStatus("");
		setImageFile(null);
	};

	const handleSaveButton = async () => {
		let body = {};
		try {
			if (!firstName) return alert("First Name is required.");
			if (!lastName) return alert("Last Name is required.");
			if (!description) return alert("Description is required.");
			if (!link) return alert("Link is required.");
			if (!status) return alert("Status is required.");

			body = {
				firstName,
				lastName,
				description,
				bookingsLink: link,
				status,
			};

			if (imageFile) {
				const response = await handleUpload(imageFile);
				body.image = response.data;
			}

			await addCoach(user.accessToken, body);
			alert("Coach has been added.");
			resetForm();
		} catch (err) {
			console.warn(err.message);
		}
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
					<h2>Content Management / Add a New Coach</h2>
				</div>
			</ControlBar>
			<Container>
				<Modal>
					<div className="flex-column row-gap-2">
						<div className="flex-row justify-sb">
							<h2>About</h2>
							<Button type="filled" onClick={handleSaveButton}>
								Add
							</Button>
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
								label="Description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
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
							<UploadButton
								text="Add an Image"
								setSelectedFile={setImageFile}
							/>
						</div>
					</div>
				</Modal>
			</Container>
		</>
	);
};

export default ContentManagementAddCoach;
