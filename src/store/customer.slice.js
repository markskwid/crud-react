import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	isLoading: true,
	isAddingSuccess: false,
	isEditingSuccess: false,
	error: "",
};

const customerSlice = createSlice({
	name: "customer",
	initialState,
	reducers: {
		FETCH_START(state) {
			state.isLoading = true;
		},

		FETCH_SUCCESS(state, action) {
			state.items = action.payload.items;
			state.isLoading = false;
		},

		FETCH_DATA_ERROR(state, action) {
			state.isLoading = true;
			state.error = action.payload.success ? "" : action.payload.error;
		},

		ADD_CUSTOMER(state, action) {
			state.items.push(action.payload.data);
			state.error = action.payload.success ? "" : action.payload.error;
		},

		DELETE_CUSTOMER(state, action) {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},

		EDIT_CUSTOMER(state, action) {
			state.items = state.items.map((item) =>
				item.id === action.payload.id
					? { ...item, ...action.payload.newData }
					: item
			);
		},
	},
});

export const customerActions = customerSlice.actions;
export default customerSlice.reducer;
