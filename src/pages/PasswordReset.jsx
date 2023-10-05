import { Link, useNavigate } from "react-router-dom";
import Dialog from "../features/ui/dialog/Dialog";
import { useRef } from "react";
import Input from "../features/ui/input/Input";
import { MdEmail } from "react-icons/md";
import Button from "../features/ui/button/Button";
import Logo from "../assets/logo.svg";
import requestReset from "../features/api/requestReset";

const PasswordReset = () => {
	const emailRef = useRef("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await requestReset(emailRef.current.value);
			const { resetLink } = response.data;
			alert(
				"You will soon be able to check your email for the link. For now you will just be redirected..."
			);
			navigate(`/${resetLink}`);
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
				<h3 className="center-text">Password Reset</h3>
				<p className="center-text">
					Confirm your email to reset your password.
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
					ref={emailRef}
					placeholder="Email"
					type="email"
					required={true}
					icon={<MdEmail />}
				/>
				<div className="justify-sb">
					<p
						style={{
							color: "var(--primary-green)",
							fontWeight: "500",
							cursor: "pointer",
						}}
						onClick={() => navigate("/sign-in")}
					>
						Go Back
					</p>
					<Button type="filled">Continue</Button>
				</div>
			</form>
			<div className="justify-center column-gap-2 mt-2">
				<Link className="label-text">Terms</Link>
				<Link className="label-text">Help</Link>
				<Link className="label-text">Privacy</Link>
			</div>
		</Dialog>
	);
};

export default PasswordReset;
