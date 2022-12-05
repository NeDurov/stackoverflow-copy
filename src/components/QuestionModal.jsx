import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { QuestionModalWrapper } from "./styles/QuestionModal.styled";
import { useEffect, useRef } from "react";

export default function QuestionModal() {
	const navigate = useNavigate();
	const { id } = useParams();
	const data = useSelector((state) => {
		return state.questions.questions[id];
	});

	let modalRef = useRef();

	useEffect(() => {
		let handler = (e) => {
			if (!modalRef.current.contains(e.target)) {
				navigate(-1);
			}
		};

		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, []);

	return (
		<QuestionModalWrapper>
			<div ref={modalRef} className="boxModal">
				<h1>{data.title}</h1>
				<p className="question">{data.body}</p>

				<ul>
					{data.comments ? (
						data.comments.map((comment) => {
							return (
								<li key={comment.comment_id}>
									<b>{comment.owner.display_name}: </b>
									{comment.body}
								</li>
							);
						})
					) : (
						<li>
							<b>Нет комментариев</b>
						</li>
					)}
				</ul>

				<div className="footer">
					<div className="tagsBox">
						{data.tags.map((tag) => {
							return <span key={tag}>{tag}</span>;
						})}
					</div>

					<div>
						<b>Автор:</b> {data.owner.display_name}
					</div>
				</div>
			</div>
		</QuestionModalWrapper>
	);
}
