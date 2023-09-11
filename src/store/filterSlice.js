// "use client";
import { createSlice } from "@reduxjs/toolkit";
import { univFields } from "@/store/uniFields";

const initialUni = { chosenField: "" };
export const filterSlice = createSlice({
  name: "filters",
  initialState: initialUni,
  reducers: {
    setFilter: (state, action) => {
      state.chosenField = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
