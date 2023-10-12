import { useNavigate, useSearchParams } from "react-router-dom";
import Dialog from "../features/ui/dialog/Dialog";
import Logo from "../assets/logo.svg";
import { MdKey } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import Input from "../features/ui/input/Input";
import setPassword from "../features/api/setPassword";
import Button from "../features/ui/button/Button";
import { StyledPasswordP } from "../features/ui/passwordRequirements/PasswordRequirements.styled";
import PasswordRequirements from "../features/ui/passwordRequirements/PasswordRequirements";
import PasswordInput from "../features/ui/passwordInput/PasswordInput";

const SetPassword = () => {
	const [loading, setLoading] = useState(false);
	const [searchParams] = useSearchParams();
	const token = searchParams.get("token");
	const passwordRef = useRef("");
	const navigate = useNavigate();

	const [passwordValid, setPasswordValid] = useState(false);
	const [passwordReqs, setPasswordReqs] = useState({
		lowercase: false,
		uppercase: false,
		number: false,
		chars: false,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!passwordValid) {
			return alert("Error: requirements not met.");
		}

		try {
			setLoading(true);
			await setPassword(token, passwordRef.current.value);
			alert("Password has been reset. Navigating to sign-in page...");
			navigate("/sign-in");
		} catch (err) {
			alert("Error: Unable to set password.");
		} finally {
			setLoading(false);
		}
	};

	const handlePasswordChange = () => {
		const password = passwordRef.current.value;

		const lowercaseRegex = /[a-z]/;
		const uppercaseRegex = /[A-Z]/;
		const numberRegex = /[0-9]/;
		const lengthRegex = /.{12,}/;

		const isLowercaseValid = lowercaseRegex.test(password);
		const isUppercaseValid = uppercaseRegex.test(password);
		const isNumberValid = numberRegex.test(password);
		const isLengthValid = lengthRegex.test(password);

		setPasswordReqs({
			lowercase: isLowercaseValid,
			uppercase: isUppercaseValid,
			number: isNumberValid,
			chars: isLengthValid,
		});

		const isStrongPassword =
			isLowercaseValid &&
			isUppercaseValid &&
			isNumberValid &&
			isLengthValid;
		setPasswordValid(isStrongPassword);
	};

	return (
		<Dialog>
			<div className="justify-center">
				<img width="64px" height="64px" src={Logo} />
			</div>
			<div className="flex-column row-gap-05">
				<h3 className="center-text">Set Password</h3>
				<p className="center-text">
					Pick something creative yet memorable.
				</p>
			</div>
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					rowGap: "1.4rem",
				}}
			>
				<PasswordInput
					ref={passwordRef}
					onChange={handlePasswordChange}
				/>
				<PasswordRequirements passwordReqs={passwordReqs} />
				<div className="flex-row justify-end">
					<Button type="filled" loading={loading}>
						Set Password
					</Button>
				</div>
			</form>
		</Dialog>
	);
};

export default SetPassword;
