import { createReducer } from "@reduxjs/toolkit"
import { logout } from "../auth/actions";
import { getReaderSuccess, updateReaderSuccess } from "./actions";
import { Reader } from "./types";

type ReaderState = {
    reader?: Reader
}

const initialState: ReaderState = {
    reader: undefined
}

export default createReducer(initialState, (builder) => {
    builder
        .addCase(getReaderSuccess, (state, action) => {
            state.reader = action.payload
        })
        .addCase(updateReaderSuccess, (state, action) => {
            state.reader = action.payload
        })
        .addCase(logout, (state, _) => {
            state.reader = undefined
        })
});