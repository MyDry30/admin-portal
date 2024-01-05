import { MdMode } from "react-icons/md";
import { StyledInput } from "./Input.styled";
import { forwardRef } from "react";

const Input = forwardRef(
	({ icon, placeholder, type, required, onChange }, ref) => {
		return (
			<StyledInput>
				{icon ? icon : <MdMode />}
				<input
					ref={ref}
					type={type ? type : "text"}
					required={required ? required : false}
					placeholder={placeholder ? placeholder : ""}
					onChange={onChange}
				/>
			</StyledInput>
		);
	}
);

export default Input;
