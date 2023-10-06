// booksSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [], // Initialize with an empty array of books
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      // Add a new book to the state
      state.books.push(action.payload);
    },
    editBook: (state, action) => {
      // Update an existing book in the state
      const { id, updatedBook } = action.payload;
      const index = state.books.findIndex((book) => book.id === id);
      if (index !== -1) {
        state.books[index] = updatedBook;
      }
    },
  },
});

export const { addBook, editBook } = booksSlice.actions;
export default booksSlice.reducer;
