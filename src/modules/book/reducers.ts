import { FilterRequest } from "@/appTypes";
import { createReducer } from "@reduxjs/toolkit"
import { allLibrarySuccess, takenBooksSuccess, urgentBooksSuccess } from "./actions";
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
        });
});