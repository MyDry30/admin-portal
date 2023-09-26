import { MdMode } from "react-icons/md";
import { StyledInput } from "./Input.styled";

const Input = ({ icon, placeholder }) => {
	return (
		<StyledInput>
			{icon ? icon : <MdMode />}
			<input type="text" placeholder={placeholder ? placeholder : ""} />
		</StyledInput>
	);
};

export default Input;
