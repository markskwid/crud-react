import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./modal.slice";
import customerSlice from "./customer.slice";
const store = configureStore({
  reducer: {
    customer: customerSlice,
    userInterface: uiSlice,
  },
});

export default store;
