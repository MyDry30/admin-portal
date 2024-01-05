import { useEffect, useState } from "react";
import { StyledAccountIcon } from "./AccountIcon.styled";

const AccountIcon = ({ firstName, onClick }) => {
	const [accountName, setAccountName] = useState("");

	useEffect(() => {
		if (firstName && firstName?.length > 0) {
			setAccountName(firstName[0]?.toUpperCase() || "X");
		} else {
			setAccountName("X");
		}
	}, []);

	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<StyledAccountIcon onClick={handleClick}>
			{accountName}
		</StyledAccountIcon>
	);
};

export default AccountIcon;
