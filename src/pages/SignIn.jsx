import { MdEmail } from "react-icons/md";
import Button from "../features/ui/button/Button";
import Dialog from "../features/ui/dialog/Dialog";
import Input from "../features/ui/input/Input";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const SignIn = () => {
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
				<Input placeholder="Email" icon={<MdEmail />} />
				<div className="justify-right">
					<Button text="Sign In" />
				</div>
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
