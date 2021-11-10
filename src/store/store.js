import { configureStore } from "@reduxjs/toolkit";
import myLibraryReducer from "./myLibrarySlice";

export const store = configureStore({
  reducer: {
    myLibrary: myLibraryReducer,
  },
});
