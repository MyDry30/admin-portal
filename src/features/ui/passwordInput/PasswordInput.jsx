import { forwardRef, useState } from "react";
import { StyledPasswordInput } from "./PasswordInput.styled";
import { MdDisabledVisible, MdKey, MdRemoveRedEye } from "react-icons/md";

const PasswordInput = forwardRef(({ onChange }, ref) => {
	const [hidden, setHidden] = useState(true);

	return (
		<StyledPasswordInput>
			<MdKey className="left" />
			<input
				ref={ref}
				type={hidden ? "password" : "text"}
				required
				placeholder="Password"
				onChange={onChange}
			/>
			{hidden ? (
				<MdRemoveRedEye
					className="right"
					onClick={() => setHidden(false)}
				/>
			) : (
				<MdDisabledVisible
					className="right"
					onClick={() => setHidden(true)}
				/>
			)}
		</StyledPasswordInput>
	);
});

export default PasswordInput;
