import { FilterRequest } from "@/appTypes";
import { createReducer } from "@reduxjs/toolkit"
import { allLibrarySuccess, createBookSuccess, deleteBookSuccess, takenBooksSuccess, updateBookSuccess, urgentBooksSuccess } from "./actions";
import { Book } from "./types";

type BookState = {
    takenBooks: Book[],
    urgentBooks: Book[],
    library: {
        books: Book[],
        filter?: FilterRequest
    }
}

const initialState: BookState = {
    takenBooks: [],
    urgentBooks: [],
    library: {
        books: []
    }
}

export default createReducer(initialState, (builder) => {
    builder
        .addCase(takenBooksSuccess, (state, action) => {
            state.takenBooks = action.payload;
        })
        .addCase(urgentBooksSuccess, (state, action) => {
            state.urgentBooks = action.payload;
        })
        .addCase(allLibrarySuccess, (state, action) => {
            state.library.books = action.payload
        })
        .addCase(createBookSuccess, (state, action) => {
            state.library.books.push(action.payload);
        })
        .addCase(updateBookSuccess, (state, action) => {
            state.library.books = state.library.books.map((book) => {
                if (book.id === action.payload.id) {
                    return action.payload;
                }
                return book;
            });
        })
        .addCase(deleteBookSuccess, (state, action) => {
            state.library.books = state.library.books.filter((book) => book.id !== action.payload.id);
        })
});