import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const StyledLoader = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	svg {
		width: 150px;
		height: 150px;
		animation: ${rotate} 2s linear infinite;
	}
`;
