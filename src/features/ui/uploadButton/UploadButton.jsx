import { Button } from "@mui/material";
import React from "react";
import { MdFolder } from "react-icons/md";
import { StyledUploadButton } from "./StyledUploadButton";

const UploadButton = ({ text, icon }) => {
	return (
		<StyledUploadButton>
			<Button
				component="label"
				variant="contained"
				startIcon={icon || <MdFolder />}
			>
				{text || "Attach a File"}
				<input type="file" />
			</Button>
		</StyledUploadButton>
	);
};

export default UploadButton;
