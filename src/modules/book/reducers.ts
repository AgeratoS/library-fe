import { createReducer } from "@reduxjs/toolkit"
import { takenBooksSuccess, urgentBooksSuccess } from "./actions";
import { Book } from "./types";

type BookState = {
    takenBooks: Book[],
    urgentBooks: Book[]
}

const initialState: BookState = {
    takenBooks: [],
    urgentBooks: []
}

export default createReducer(initialState, (builder) => {
    builder
        .addCase(takenBooksSuccess, (state, action) => {
            state.takenBooks = action.payload;
        })
        .addCase(urgentBooksSuccess, (state, action) => {
            state.urgentBooks = action.payload;
        });
});