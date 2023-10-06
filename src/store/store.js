// store.js
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    // Add other reducers if you have them
  },
});

export default store;
