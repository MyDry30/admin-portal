import { Button } from "@mui/material";
import { MdFolder } from "react-icons/md";
import { StyledUploadButton } from "./StyledUploadButton";

const UploadButton = ({ text, icon, setSelectedFile }) => {
	const handleUpload = (e) => {
		setSelectedFile && setSelectedFile(e.target.files[0]);
	};

	return (
		<StyledUploadButton>
			<Button
				component="label"
				variant="contained"
				startIcon={icon || <MdFolder />}
				onChange={handleUpload}
			>
				{text || "Attach a File"}
				<input type="file" />
			</Button>
		</StyledUploadButton>
	);
};

export default UploadButton;
