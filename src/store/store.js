// "use client";

const { configureStore } = require("@reduxjs/toolkit");
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: { filter: filterReducer },
});
