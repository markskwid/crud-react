import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal.slice";
import customerSlice from "./customer.slice";
const store = configureStore({
	reducer: {
		customer: customerSlice,
		modal: modalSlice,
	},
});

export default store;
