import styled from "styled-components";

export const StyledPasswordP = styled.p`
	font-weight: 500;
	color: ${(props) => (props.$valid ? "var(--primary-green)" : "#ee5253")};
`;
