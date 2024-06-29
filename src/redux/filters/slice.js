import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    status: "",
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filters.status;
export const { setStatusFilter } = filterSlice.actions;
export default filterSlice.reducer;