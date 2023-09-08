// "use client";
import { createSlice } from "@reduxjs/toolkit";
import { univFields } from "@/store/uniFields";

function searchInArray(arr, _, searchElement) {
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    console.log(searchElement);
    if (obj.fields.includes(searchElement)) {
      console.log(obj);
      return obj;
    }
  }
  return null; // Return null if no matching element is found in any object
}

const findParentObject = (arr, name) => {
  for (const obj of arr) {
    if (obj.fields.some((item) => item.name === name)) {
      return obj;
    }
  }

  return null;
};

const initialUni = { data: univFields };
export const filterSlice = createSlice({
  name: "filter",
  initialState: initialUni,
  reducers: {
    setFilter: (state, action) => {
      console.log(state.data);
      console.log(state);
      // state.data = state.data.find((uni) => {
      //   console.log(action.payload);
      //   return (state.data = uni.fields);

      //   console.log(uni.fields.map((field) => field == action.payload));
      //   return uni.fields.map((field) => field == action.payload);
      //   // return; //TODO: return the matched results this is the final returns
      // });
      // state.data = _.mapValues(state.data, function (field) {
      //   return field== payload;
      // });
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
