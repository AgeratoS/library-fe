import { createReducer } from "@reduxjs/toolkit"
import { loadGenres, loadGenresError, loadGenresSuccess } from "./actions"
import { Genre } from "./types"

type GenreState = {
    genres?: Genre[],
    isLoading: boolean
}

const initialState: GenreState = {
    genres: undefined,
    isLoading: false
}

export default createReducer(initialState, (builder) => {
    builder
        .addCase(loadGenres, (state, action) => {
            state.isLoading = true;
        })
        .addCase(loadGenresSuccess, (state, action) => {
            state.isLoading = false;
            state.genres = action.payload
        })
        .addCase(loadGenresError, (state, action) => {
            state.isLoading = false;
        })
});