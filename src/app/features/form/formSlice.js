import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("data")) || []
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    }
  }
});

export const { addData } = formSlice.actions;
export default formSlice.reducer;