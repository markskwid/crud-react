import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
	name: "modal",
	initialState: false,
	reducers: {
		open(state) {
			return true;
		},

		close(state) {
			return false;
		},
	},
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
