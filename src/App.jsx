import ListOfQuestions from "./components/ListOfQuestions";
import SearchBar from "./components/SearchBar";
import { AppWrapper } from "./components/styles/App.styled";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";

function App() {
	const status = useSelector((state) => {
		return state.questions.status;
	});

	return (
		<AppWrapper>
			<SearchBar />
			{status == "pending" ? <Loader /> : <ListOfQuestions />}
		</AppWrapper>
	);
}

export default App;
