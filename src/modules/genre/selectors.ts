import { RootState } from "@/utils";
import { createSelector } from "@reduxjs/toolkit";
import { Genre } from "./types";

const genresContext = (state: RootState) => state.genre;

export const allGenres = createSelector(genresContext, (state) => state.genres);
export const isLoading = createSelector(genresContext, (state) => state.isLoading);

export const selectedGenres = (selected: Genre[]) => {
    return createSelector(allGenres, (genres) => {
        return genres?.filter((genre) => selected.map((selectItem) => selectItem.id).includes(genre.id));
    })
}