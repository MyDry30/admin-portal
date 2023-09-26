import { MdEmail } from "react-icons/md";
import Button from "../features/ui/button/Button";
import Dialog from "../features/ui/dialog/Dialog";
import Input from "../features/ui/input/Input";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useEffect, useRef } from "react";

const SignIn = () => {
	const emailRef = useRef("");
	const navigate = useNavigate();

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	const handleSignIn = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		navigate(`/sign-in-password?email=${email}`);
	};

	return (
		<>
			<Dialog>
				<div className="justify-center">
					<img width="64px" height="64px" src={Logo} />
				</div>
				<h3 className="center-text">Sign In</h3>
				<p className="center-text supporting-text">
					Sign in to your MyDry30 Account
				</p>
				<form
					onSubmit={handleSignIn}
					style={{
						display: "flex",
						flexDirection: "column",
						rowGap: "1.4rem",
					}}
				>
					<Input
						ref={emailRef}
						type="email"
						placeholder="Email"
						icon={<MdEmail />}
						required={true}
					/>
					<div className="justify-right">
						<Button text="Sign In" />
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

export default SignIn;
