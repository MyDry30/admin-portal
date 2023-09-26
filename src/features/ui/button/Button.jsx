import { StyledButton } from "./Button.styled";

const Button = ({ text, onClick }) => {
	const handleClick = () => {
		onClick && onClick();
	};

	return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default Button;
