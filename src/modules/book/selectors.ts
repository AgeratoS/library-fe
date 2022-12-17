import { RootState } from "@/utils";
import { createSelector } from "@reduxjs/toolkit";

const books = (state: RootState) => state.books;

export const urgentBooks = createSelector(books, (state) => state.urgentBooks);
export const takenBooks = createSelector(books, (state) => state.takenBooks);