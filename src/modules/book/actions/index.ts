import { createAction } from "@reduxjs/toolkit";
import { ReaderId } from "../api"
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
    }
}

export const takenBooksRequest = createAction<ReaderId>(BOOK.TAKEN_BOOKS.request);
export const takenBooksSuccess = createAction<Book[]>(BOOK.TAKEN_BOOKS.complete);
export const takenBooksError = createAction(BOOK.TAKEN_BOOKS.error);

export const urgentBooksRequest = createAction<ReaderId>(BOOK.URGENT_BOOKS.request);
export const urgentBooksSuccess = createAction<Book[]>(BOOK.URGENT_BOOKS.complete);
export const urgentBooksError = createAction(BOOK.URGENT_BOOKS.error);