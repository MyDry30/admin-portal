import React from "react";
import { StyledPasswordP } from "./PasswordRequirements.styled";

const PasswordRequirements = ({ passwordReqs }) => {
	return (
		<div>
			<StyledPasswordP $valid={passwordReqs.lowercase}>
				At least 1 lowercase letter
			</StyledPasswordP>
			<StyledPasswordP $valid={passwordReqs.uppercase}>
				At least 1 uppercase letter
			</StyledPasswordP>
			<StyledPasswordP $valid={passwordReqs.number}>
				At least 1 number
			</StyledPasswordP>
			<StyledPasswordP $valid={passwordReqs.chars}>
				At least 12 characters
			</StyledPasswordP>
		</div>
	);
};

export default PasswordRequirements;
