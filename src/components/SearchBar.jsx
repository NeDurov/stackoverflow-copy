import AfterSearch from "./AfterSearch";
import Search from "./Search";
import BeforeSearch from "./BeforeSearch";
import { SearchBarWrapper } from "./styles/SearchBar.styled";

export default function SearchBar() {
	return (
		<SearchBarWrapper align="center" justify="space-between">
			<BeforeSearch />
			<Search />
			<AfterSearch />
		</SearchBarWrapper>
	);
}
