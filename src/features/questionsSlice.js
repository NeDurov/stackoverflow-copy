import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	questions: [],
	status: null,
	error: null,
};

export const axiosQuestions = createAsyncThunk(
	"questions/axiosQuestions",
	async (question) => {
		const response = await axios.get(
			`https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=activity&q=${question}&filter=_bc&site=stackoverflow`
		);
		const data = await response.data.items;
		return data;
	}
);

export const questionSlice = createSlice({
	name: "questions",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(axiosQuestions.pending, (state, action) => {
			state.status = "pending";
		});
		builder.addCase(axiosQuestions.fulfilled, (state, action) => {
			state.status = "fulfilled";
			state.questions = action.payload;
		});
		builder.addCase(axiosQuestions.rejected, (state, action) => {
			state.status = "rejected";
		});
	},
});

export default questionSlice.reducer;
