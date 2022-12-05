import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../features/questionsSlice";

export const store = configureStore({
	reducer: {
		questions: questionsReducer,
	},
});
