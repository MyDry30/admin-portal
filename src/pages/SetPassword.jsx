import { useNavigate, useSearchParams } from "react-router-dom";
import Dialog from "../features/ui/dialog/Dialog";
import Logo from "../assets/logo.svg";
import { MdKey } from "react-icons/md";
import { useRef, useState } from "react";
import Input from "../features/ui/input/Input";
import setPassword from "../features/api/setPassword";
import Button from "../features/ui/button/Button";

const SetPassword = () => {
	const [loading, setLoading] = useState(false);
	const [searchParams] = useSearchParams();
	const token = searchParams.get("token");
	const passwordRef = useRef("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();
		try {
			await setPassword(token, passwordRef.current.value);
			alert("Password has been reset. Navigating to sign-in page...");
			navigate("/sign-in");
		} catch (err) {
			alert(`Error: ${err.message}`);
		} finally {
			setLoading(false);
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
					type="password"
					required={true}
					icon={<MdKey />}
				/>
				<div>
					<p>At least 1 lowercase letter</p>
					<p>At least 1 uppercase letter</p>
					<p>At least 1 number</p>
					<p>At least 12 characters</p>
				</div>
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
