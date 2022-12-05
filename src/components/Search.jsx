import { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosQuestions } from "../features/questionsSlice";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputWrapper } from "./styles/Search.styled";

export default function Search() {
	const [question, setQuestion] = useState("");
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(axiosQuestions(question));
	};

	return (
		<SearchInputWrapper align="center">
			<SearchIcon onClick={handleClick} />
			<input
				onKeyDown={(e) => {
					if (e.key == "Enter") {
						handleClick();
					}
				}}
				onChange={(e) => {
					setQuestion(e.target.value);
				}}
				value={question}
				type="text"
				placeholder="Search..."
			/>
		</SearchInputWrapper>
	);
}
