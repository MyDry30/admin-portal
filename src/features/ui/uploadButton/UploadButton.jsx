import { Button } from "@mui/material";
import React from "react";
import { MdFileUpload } from "react-icons/md";
import { StyledUploadButton } from "./StyledUploadButton";

const UploadButton = ({ text, icon }) => {
	return (
		<StyledUploadButton>
			<Button
				component="label"
				variant="contained"
				startIcon={icon || <MdFileUpload />}
			>
				{text || "Upload File"}
				<input type="file" />
			</Button>
		</StyledUploadButton>
	);
};

export default UploadButton;
