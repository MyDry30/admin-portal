import { MdLock } from "react-icons/md";
import Button from "../features/ui/button/Button";
import Dialog from "../features/ui/dialog/Dialog";
import Input from "../features/ui/input/Input";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../assets/logo.svg";
import ModalDropdown from "../features/ui/modalDropdown/ModalDropdown";
import { useEffect, useRef, useState } from "react";
import handleLogin from "../features/api/handleLogin";

const SignInPassword = () => {
	const [loading, setLoading] = useState(false);
	const [searchParams] = useSearchParams();
	const passwordRef = useRef("");
	const email = searchParams.get("email");
	const navigate = useNavigate();

	useEffect(() => {
		passwordRef.current.focus();
	}, []);

	useEffect(() => {
		if (!email) {
			navigate("/sign-in");
		}
	}, [email]);

	const handleSignIn = async (e) => {
		setLoading(true);
		e.preventDefault();
		const password = passwordRef.current.value;

		try {
			await handleLogin(email, password);
			navigate("/");
		} catch (err) {
			const status = err.message;
			if (status === "400") {
				alert("Unable to login: invalid password.");
			} else {
				alert("Unable to login at this time.");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Dialog>
				<div className="justify-center">
					<img width="64px" height="64px" src={Logo} />
				</div>
				<h3 className="center-text">Sign In</h3>
				<ModalDropdown options={[email]} />
				<form
					onSubmit={handleSignIn}
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
						icon={<MdLock />}
					/>
					<div className="justify-sb">
						<Link
							to={`/password-reset`}
							className="label-text color-green"
						>
							Forgot Password
						</Link>
						<Button type="filled" loading={loading}>
							Sign In
						</Button>
					</div>
				</form>
				<div className="justify-center column-gap-2 mt-2">
					<Link className="label-text">Terms</Link>
					<Link className="label-text">Help</Link>
					<Link className="label-text">Privacy</Link>
				</div>
			</Dialog>
		</>
	);
};

export default SignInPassword;
