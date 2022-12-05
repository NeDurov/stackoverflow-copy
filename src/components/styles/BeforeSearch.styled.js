import styled from "styled-components";
import Flex from "./Flex";

export const BeforeSearchWrapper = styled(Flex)`
	& img {
		width: 151px;
		object-fit: contain;
		padding: 0px;
		cursor: pointer;
		padding: 10px 5px;
		&:hover {
			background-color: #ddd;
			cursor: pointer;
		}
	}
	& h3 {
		font-weight: 400;
		font-size: 14px;
		margin: 0 10px;
		cursor: pointer;
		padding: 5px 10px;
		color: #ccc;
		&:hover {
			background-color: #ddd;
			border-radius: 33px;
			color: #000;
		}
	}
`;
