import { useNavigate, useParams } from "react-router-dom";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { MdArrowBack, MdImage } from "react-icons/md";
import Container from "../features/ui/container/Container";
import { useEffect, useState } from "react";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { MenuItem, TextField } from "@mui/material";
import UploadButton from "../features/ui/uploadButton/UploadButton";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import getMediaById from "../features/api/media/getMediaById";
import updatedMediaById from "../features/api/media/updateMediaById";

const ContentManagementMediaSingle = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();
	const { mediaId } = useParams();
	const [canEdit, setCanEdit] = useState(false);

	const [media, setMedia] = useState(null);
	const [type, setType] = useState("video");
	const [title, setTitle] = useState("[Text]");
	const [description, setDescription] = useState("[Text]");
	const [duration, setDuration] = useState("10");

	const fetchMedia = async () => {
		try {
			const response = await getMediaById(user.accessToken, mediaId);

			setMedia(response.data);
			setType(response.data.type);
			setTitle(response.data.title);
			setDescription(response.data.description);
			setDuration(response.data.duration);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		if (user.accessToken) {
			fetchMedia();
		}
	}, [user]);

	const handleCancelButton = async () => {
		try {
			await fetchMedia();
		} catch (err) {
			console.log(err.message);
		} finally {
			setCanEdit(false);
		}
	};

	const handleSaveButton = async () => {
		if (!type) return alert("Type is required.");
		if (!title) return alert("Title is required.");
		if (!description) return alert("Description is required.");
		if (!duration) return alert("Duration is required.");

		try {
			await updatedMediaById(user.accessToken, mediaId, {
				type,
				title,
				description,
				duration,
			});
			alert("Media information has been updated.");
			await fetchMedia();
		} catch (err) {
			console.log(err.message);
		} finally {
			setCanEdit(false);
		}
	};

	if (!media) {
		return <h2>Loading...</h2>;
	}

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
					<h2>Content Management / Media</h2>
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
									select
									label="Media Type"
									value={type}
									onChange={(e) => setType(e.target.value)}
								>
									<MenuItem key={1} value={"video"}>
										Video
									</MenuItem>
									<MenuItem key={2} value={"audio"}>
										Audio
									</MenuItem>
								</TextField>
								<TextField
									label="Title"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
								<TextField
									label="Description"
									value={description}
									onChange={(e) =>
										setDescription(e.target.value)
									}
								/>
								<TextField
									label="Duration"
									value={duration}
									onChange={(e) =>
										setDuration(e.target.value)
									}
								/>
								<UploadButton />
								<UploadButton
									text="Add Image"
									icon={<MdImage />}
								/>
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
							<div className="flex-column row-gap-05">
								<p className="small-text">Media Type</p>
								<p>{type}</p>
							</div>
							<div className="flex-column row-gap-05">
								<p className="small-text">Title</p>
								<p>{title}</p>
							</div>
							<div className="flex-column row-gap-05">
								<p className="small-text">Description</p>
								<p>{description}</p>
							</div>
							<div className="flex-column row-gap-05">
								<p className="small-text">Duration</p>
								<p>{`${duration} Minutes`}</p>
							</div>
							<div className="flex-column row-gap-05">
								<p className="small-text">File</p>
								<p>{"[File]"}</p>
							</div>
							<div className="flex-column row-gap-05">
								<p className="small-text">Image</p>
								<p>{"[Image]"}</p>
							</div>
						</div>
					</Modal>
				)}
			</Container>
		</>
	);
};

export default ContentManagementMediaSingle;
