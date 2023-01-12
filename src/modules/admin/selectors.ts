import { RootState } from "@/utils"
import { createSelector } from "@reduxjs/toolkit";
import { allBooks } from "@/modules/book/selectors";
import { Book } from "../book/types";

const adminContext = (state: RootState) => state.admin;

export const selectedProfile = createSelector(adminContext, (state) => state.selectedProfile);

export const readersInProfile = createSelector(selectedProfile, (state) => state?.readers);

export const selectedReader = createSelector(adminContext, (state) => state.selectedReader);

export const booksInReader = createSelector(adminContext, (state) => state?.books);

export const uniqueBooks = createSelector(allBooks, booksInReader, (allBooks, booksInReader) => {
    return allBooks.filter((book: Book) => !booksInReader?.map((item) => item.id).includes(book.id))
})