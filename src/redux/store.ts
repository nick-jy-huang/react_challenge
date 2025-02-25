import { configureStore } from "@reduxjs/toolkit";
import classInfo from "./slices/classInfo";
import classStudent from "./slices/classStudent";

export const store = configureStore({
  reducer: {
    classInfo,
    classStudent,
  },
});

export type RootState = ReturnType<typeof store.getState>;
