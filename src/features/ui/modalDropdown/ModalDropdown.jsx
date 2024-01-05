import {
	StyledModalDropdown,
	StyledModalDropdownWrapper,
} from "./ModalDropdown.styled";

const ModalDropdown = ({ options }) => {
	return (
		<StyledModalDropdownWrapper>
			<StyledModalDropdown>
				{options?.map((option, index) => (
					<option key={index}>{option}</option>
				))}
			</StyledModalDropdown>
		</StyledModalDropdownWrapper>
	);
};

export default ModalDropdown;
