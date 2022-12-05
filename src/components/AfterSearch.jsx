import { AfterSearchWrapper } from "./styles/AfterSearch.styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InboxIcon from "@mui/icons-material/Inbox";
import HelpIcon from "@mui/icons-material/Help";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function AfterSearch() {
	return (
		<AfterSearchWrapper align="center">
			<AccountCircleIcon />
			<InboxIcon />
			<EmojiEventsIcon />
			<HelpIcon />
			<svg
				aria-hidden="true"
				width="24"
				height="24"
				viewBox="0 0 18 18"
				fill="rgba(0,0,0,0.5)"
				style={{
					cursor: "pointer",
				}}
			>
				<path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
			</svg>
		</AfterSearchWrapper>
	);
}
