import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  info: {
    id: string;
    title: string;
    link: string;
  };
} = {
  info: {
    id: "",
    title: "",
    link: "",
  },
};

export const classInfo = createSlice({
  name: "classInfo",
  initialState,
  reducers: {
    modifyInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { modifyInfo } = classInfo.actions;

export default classInfo.reducer;
