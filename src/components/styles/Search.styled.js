import styled from "styled-components";
import Flex from "./Flex";

export const SearchInputWrapper = styled(Flex)`
	width: 100%;
	padding: 3px 10px;
	margin-right: 10px;
	border-radius: 3px;
	border: 1px solid rgba(34, 34, 34, 0.233);
	& .MuiSvgIcon-root {
		color: #ccc;
	}
	& input {
		border: none;
		width: 100%;
		margin-left: 5px;
		outline: none;
		font-family: sans-serif;
	}
`;
