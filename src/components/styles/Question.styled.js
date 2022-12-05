import Flex from "./Flex";
import styled from "styled-components";

export const QuestionWrapper = styled(Flex)`
	padding: 5px;
	margin-right: 30px;
	border: 1px solid rgba(34, 34, 34, 0.233);
	& .titleQuestion h2 {
		font-size: 14px;
		cursor: pointer;
	}

	& .Link {
		text-decoration: none;
	}

	& .questionIcon {
		width: 12px;
		margin-right: 5px;
	}

	& .titleQuestion {
		display: flex;
		align-items: center;
		direction: row;
	}
	& div {
		font-size: 14px;
	}
	& .tagsBox span {
		font-size: 10px;
		color: rgb(57, 115, 157);
		background-color: rgb(225, 236, 244);
		border-radius: 4px;
		padding: 2px 4px;
		margin-right: 10px;

		cursor: pointer;
		&:hover {
			background-color: rgb(208, 227, 241);
			color: rgb(44, 88, 119);
		}
	}
`;
