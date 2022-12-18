import { ReaderId } from "@/modules/reader/types";
import { createAction } from "@reduxjs/toolkit";
import { Book } from "../types";

const BOOK = {
    TAKEN_BOOKS: {
        request: 'books/takenBooks/request',
        complete: 'books/takenBooks/success',
        error: 'books/takenBooks/error'
    },
    URGENT_BOOKS: {
        request: 'books/urgentBooks/request',
        complete: 'books/urgentBooks/success',
        error: 'books/urgentBooks/error'
    },
    RENT_BOOK: {
        request: 'books/rentBook/request',
        complete: 'books/rentBook/success',
        error: 'books/rentBook/error'
    },
    ALL_LIBRARY: {
        request: 'books/allLibrary/request',
        complete: 'books/allLibrary/success',
        error: 'books/allLibrary/error'
    }
}

export const takenBooksRequest = createAction<ReaderId>(BOOK.TAKEN_BOOKS.request);
export const takenBooksSuccess = createAction<Book[]>(BOOK.TAKEN_BOOKS.complete);
export const takenBooksError = createAction(BOOK.TAKEN_BOOKS.error);

export const urgentBooksRequest = createAction<ReaderId>(BOOK.URGENT_BOOKS.request);
export const urgentBooksSuccess = createAction<Book[]>(BOOK.URGENT_BOOKS.complete);
export const urgentBooksError = createAction(BOOK.URGENT_BOOKS.error);


// TODO: Додумать типы принимаемых экшнов
export const rentBookRequest = createAction(BOOK.RENT_BOOK.request);
export const rentBookSuccess = createAction(BOOK.RENT_BOOK.complete);
export const rentBookError = createAction(BOOK.RENT_BOOK.error);

export const allLibraryRequest = createAction(BOOK.ALL_LIBRARY.request);
export const allLibrarySuccess = createAction<Book[]>(BOOK.ALL_LIBRARY.complete);
export const allLibraryError = createAction(BOOK.ALL_LIBRARY.error);