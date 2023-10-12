import { Link, useNavigate } from "react-router-dom";
import Dialog from "../features/ui/dialog/Dialog";
import { useRef, useState } from "react";
import Input from "../features/ui/input/Input";
import { MdEmail } from "react-icons/md";
import Button from "../features/ui/button/Button";
import Logo from "../assets/logo.svg";
import requestReset from "../features/api/requestReset";
import sendResetEmail from "../features/api/sendResetEmail";

const PasswordReset = () => {
	const [loading, setLoading] = useState(false);
	const emailRef = useRef("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();
		try {
			const email = emailRef.current.value;

			const resetResponse = await requestReset(emailRef.current.value);
			const { resetLink } = resetResponse.data;

			await sendResetEmail({
				email,
				resetLink: `https://mydry30-staging.netlify.app/${resetLink}`,
			});

			emailRef.current.value = "";

			alert("Please check your email for password reset instructions.");
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
					<Button type="filled" loading={loading}>
						Continue
					</Button>
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
