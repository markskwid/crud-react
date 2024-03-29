import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: true,
  isAddingSuccess: false,
  isEditingSuccess: false,
  isDeletingSuccess: false,
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
      state.isAddingSuccess = action.payload.success;
      state.error = action.payload.success ? "" : action.payload.error;
    },

    DELETE_CUSTOMER(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.isDeletingSuccess = action.payload.success;
      state.error = action.payload.success ? "" : action.payload.error;
    },

    EDIT_CUSTOMER(state, action) {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.newData }
          : item
      );
      state.isEditingSuccess = action.payload.success;
      state.error = action.payload.success ? "" : action.payload.error;
    },
  },
});

export const customerActions = customerSlice.actions;
export default customerSlice.reducer;
