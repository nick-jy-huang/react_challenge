import { createSlice } from "@reduxjs/toolkit";
import { studentType } from "@/api/studentList";
const initialState: {
  list: studentType[] | null;
} = {
  list: null,
};

export const classStudent = createSlice({
  name: "classStudent",
  initialState,
  reducers: {
    modifyStudentList: (state, action) => {
      state.list = action.payload;
    },
    addStudentScore: (state, action) => {
      const student = state.list?.find((item) => item.id === action.payload);
      if (student) {
        student.score += 1;
      }
    },
    minusStudentScore: (state, action) => {
      const student = state.list?.find((item) => item.id === action.payload);
      if (student && student.score !== 0) {
        student.score -= 1;
      }
    },
  },
});

export const { modifyStudentList, addStudentScore, minusStudentScore } =
  classStudent.actions;

export default classStudent.reducer;
