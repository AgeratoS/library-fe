import { createAction } from "@reduxjs/toolkit";
import { Genre } from "../types";

const GENRES_MAP = {
    genres: {
        load: 'genres/load',
        complete: 'genres/load/success',
        error: 'genres/load/error'
    }
}

export const loadGenres = createAction(GENRES_MAP.genres.load);
export const loadGenresSuccess = createAction<Genre[]>(GENRES_MAP.genres.complete);
export const loadGenresError = createAction(GENRES_MAP.genres.error);