// "use client";
import { unv } from "@/store/univs";
import { createSlice } from "@reduxjs/toolkit";

const initialUni = { data: unv };
const filterSlice = createSlice({
  name: "filter",
  initialState: initialUni,
  reducers: {
    setFilter: (state, payload) => {
      state.data = state.data.filter((uni) => uni.payload === true);
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
