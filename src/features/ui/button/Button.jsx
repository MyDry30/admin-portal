import { StyledButton } from "./Button.styled";

const Button = ({ children, onClick, type = "outline" }) => {
	const handleClick = () => {
		onClick && onClick();
	};

	return (
		<StyledButton type={type} onClick={handleClick}>
			{children}
		</StyledButton>
	);
};

export default Button;
