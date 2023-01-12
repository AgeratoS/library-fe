import { createReducer } from "@reduxjs/toolkit";
import { unlinkBookSuccess } from "../book/actions";
import { getBooksReaderSuccess, selectProfile, selectReader } from "./actions";
import { AdminState } from "./types";

const initialState: AdminState = {};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(selectProfile, (state, action) => {
            state.selectedProfile = action.payload;
        })
        .addCase(selectReader, (state, action) => {
            state.selectedReader = action.payload;
        })
        .addCase(unlinkBookSuccess, (state, action) => {
            if (state.books) {
                state.books = state.books.filter((book) => book.id !== action.payload.id);
            }
        })
        .addCase(getBooksReaderSuccess, (state, action) => {
            state.books = action.payload;
        })
        .addDefaultCase((state, action) => { })
});