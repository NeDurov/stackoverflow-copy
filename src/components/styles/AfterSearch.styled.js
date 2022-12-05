import styled from "styled-components";
import Flex from "./Flex";

export const AfterSearchWrapper = styled(Flex)`
	height: 100%;
	& .MuiSvgIcon-root {
		margin: 0px;
		width: 30px;
		height: 100%;
		padding: 14px 5px;
		color: rgba(0, 0, 0, 0.534);
		cursor: pointer;
		&:hover {
			background-color: #ddd;
			color: #000;
		}
	}
	& svg {
		margin-right: 30px;
		width: 30px;
		height: 100%;
		padding: 14px 5px;
		&:hover {
			background-color: #ddd;
			color: #000;
		}
	}
`;
