import { useNavigate, useSearchParams } from "react-router-dom";
import Dialog from "../features/ui/dialog/Dialog";
import Logo from "../assets/logo.svg";
import { MdKey } from "react-icons/md";
import { useRef } from "react";
import Input from "../features/ui/input/Input";
import setPassword from "../features/api/setPassword";

const SetPassword = () => {
	const [searchParams] = useSearchParams();
	const token = searchParams.get("token");
	const passwordRef = useRef("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await setPassword(token, passwordRef.current.value);
			alert("Password has been reset. Navigating to sign-in page...");
			navigate("/sign-in");
		} catch (err) {
			console.log(err);
		}
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
				<Input
					ref={passwordRef}
					placeholder="Password"
					type="text"
					required={true}
					icon={<MdKey />}
				/>
			</form>
			<div>
				<p>At least 1 lowercase letter</p>
				<p>At least 1 uppercase letter</p>
				<p>At least 1 number</p>
				<p>At least 12 characters</p>
			</div>
		</Dialog>
	);
};

export default SetPassword;
