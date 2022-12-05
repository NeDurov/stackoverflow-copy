import { useState, useEffect } from "react";
import Question from "./Question";
import { useSelector } from "react-redux";
import { ListOfQuestionsWrapper } from "./styles/ListOfQuestions.styled";
import { Route, Routes } from "react-router-dom";
import QuestionModal from "./QuestionModal";

export default function ListOfQuestions() {
	const [questions, setQuestion] = useState([]);
	const data = useSelector((state) => {
		return state.questions.questions;
	});

	useEffect(() => {
		setQuestion(data);
	}, [data]);

	return (
		<ListOfQuestionsWrapper direction="column">
			{questions ? (
				questions.map((question, i) => {
					return (
						<Question
							key={question.question_id}
							id={i}
							{...question}
						/>
					);
				})
			) : (
				<></>
			)}
			<Routes>
				<Route path="/" element={<></>} />
				<Route path="/modal/:id" element={<QuestionModal />} />
			</Routes>
		</ListOfQuestionsWrapper>
	);
}
