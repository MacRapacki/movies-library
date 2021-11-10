import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myLibrary: [],
};

export const myLibrarySlice = createSlice({
  name: "myLibrary",
  initialState,
  reducers: {
    addToMyLibrary: (state, action) => {
      state.myLibrary = [...state.myLibrary, action.payload];
      localStorage.setItem("myLIbrary", JSON.stringify(state.myLibrary));
    },

    checkLocalStorage: (state) => {
      const savedLibrary = localStorage.getItem("myLIbrary");
      const newValue = JSON.parse(savedLibrary);
      if (savedLibrary) {
        state.myLibrary = newValue;
      }
    },

    toggleIsWatched: (state, action) => {
      state.myLibrary[action.payload].isWatched =
        !state.myLibrary[action.payload].isWatched;
      localStorage.setItem("myLIbrary", JSON.stringify(state.myLibrary));
    },

    removeFromLibrary: (state, action) => {
      const tempArray = [...state.myLibrary];
      tempArray.splice(action.payload, 1);
      state.myLibrary = tempArray;
      localStorage.setItem("myLIbrary", JSON.stringify(state.myLibrary));
    },

    rateMovie: (state, action) => {
      const index = action.payload.index;
      const rate = action.payload.rate;
      state.myLibrary[index].rating = rate;
      localStorage.setItem("myLIbrary", JSON.stringify(state.myLibrary));
    },
  },
});

export const {
  addToMyLibrary,
  checkLocalStorage,
  toggleIsWatched,
  removeFromLibrary,
  rateMovie,
} = myLibrarySlice.actions;

export default myLibrarySlice.reducer;
