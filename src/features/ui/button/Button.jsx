import { StyledButton } from "./Button.styled";
import { MdAutorenew } from "react-icons/md";

const Button = ({ children, onClick, type = "outline", loading = false }) => {
	const handleClick = () => {
		onClick && !loading && onClick();
	};

	return (
		<StyledButton type={type} onClick={handleClick} disabled={loading}>
			{loading ? <MdAutorenew /> : children}
		</StyledButton>
	);
};

export default Button;
