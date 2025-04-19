import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
};
// const [value,setValue]=useState(0)

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setValue: (state) => {
      state.value = 0;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    customIncrement: (state,action) => {
      console.log("🚀 ~ act?ion:", action)
      state.value = action.payload;
    },
  },
});

export const { setValue, increment, decrement,customIncrement } = counterSlice.actions;

export default counterSlice.reducer;
