import { StyledButton } from "./Button.styled";

const Button = ({ children, onClick }) => {
	const handleClick = () => {
		onClick && onClick();
	};

	return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default Button;
