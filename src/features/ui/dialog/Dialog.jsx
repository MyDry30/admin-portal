import { StyledDialog, StyledDialogWrapper } from "./Dialog.styled";

const Dialog = ({ children }) => {
	return (
		<StyledDialogWrapper>
			<StyledDialog>{children}</StyledDialog>
		</StyledDialogWrapper>
	);
};

export default Dialog;
