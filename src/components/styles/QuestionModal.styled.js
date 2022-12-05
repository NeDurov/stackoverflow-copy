import styled from "styled-components";

export const QuestionModalWrapper = styled.div`
	position: fixed;
	display: flex;
	align-content: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	& .boxModal {
		border-radius: 6px;

		padding: 15px 10px;
		margin-top: 40px;
		max-width: 700px;
		max-height: 80%;
		overflow-y: auto;
		background-color: white;
		height: fit-content;
	}
	& h1 {
		font-size: 18px;
		padding: 5px;
	}
	& .question {
		font-size: 14px;
		text-align: justify;
		padding: 10px;
	}

	& .tagsBox {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin: 4px;
		padding: 4px;
		justify-content: space-between;
	}

	& .tagsBox span {
		font-size: 14px;
		color: rgb(57, 115, 157);
		background-color: rgb(225, 236, 244);
		border-radius: 4px;
		padding: 2px 4px;
		margin-right: 10px;
		cursor: pointer;
		white-space: nowrap;
		margin-bottom: 8px;
		&:hover {
			background-color: rgb(208, 227, 241);
			color: rgb(44, 88, 119);
		}
		&:last-child {
			margin: 0;
		}
	}
	& .footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	& ul {
		padding: 0px 20px;
	}

	& li {
		margin: 15px;
	}
`;
