import { Link } from "react-router-dom";
import { QuestionWrapper } from "./styles/Question.styled.js";

export default function Question(props) {
	return (
		<QuestionWrapper direction="column" margin="10px">
			<div className="titleQuestion">
				<Link className="Link" to={`/modal/${props.id}`}>
					<h2>
						<svg
							className="questionIcon"
							aria-hidden="true"
							width="14"
							height="14"
							viewBox="0 0 18 18"
						>
							<path d="m4 15-3 3V4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v9c0 1.09-.91 2-2 2H4Zm7.75-3.97c.72-.83.98-1.86.98-2.94 0-1.65-.7-3.22-2.3-3.83a4.41 4.41 0 0 0-3.02 0 3.8 3.8 0 0 0-2.32 3.83c0 1.29.35 2.29 1.03 3a3.8 3.8 0 0 0 2.85 1.07c.62 0 1.2-.11 1.71-.34.65.44 1 .68 1.06.7.23.13.46.23.7.3l.59-1.13a5.2 5.2 0 0 1-1.28-.66Zm-1.27-.9a5.4 5.4 0 0 0-1.5-.8l-.45.9c.33.12.66.29.98.5-.2.07-.42.11-.65.11-.61 0-1.12-.23-1.52-.68-.86-1-.86-3.12 0-4.11.8-.9 2.35-.9 3.15 0 .9 1.01.86 3.03-.01 4.08Z"></path>
						</svg>
						<span>{props.title}</span>
					</h2>
				</Link>
			</div>
			<div>Количество комментариев: {props.answer_count}</div>
			<div className="tagsBox">
				{props.tags.map((tag) => {
					return <span key={tag}>{tag}</span>;
				})}
			</div>
			<div>Автор: {props.owner.display_name}</div>
		</QuestionWrapper>
	);
}
