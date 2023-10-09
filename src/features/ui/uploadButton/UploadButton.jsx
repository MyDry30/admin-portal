import { Button } from "@mui/material";
import React from "react";
import { MdFileUpload } from "react-icons/md";
import { StyledUploadButton } from "./StyledUploadButton";

const UploadButton = () => {
	return (
		<StyledUploadButton>
			<Button
				component="label"
				variant="contained"
				startIcon={<MdFileUpload />}
			>
				Upload File
				<input type="file" />
			</Button>
		</StyledUploadButton>
	);
};

export default UploadButton;
