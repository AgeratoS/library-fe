import { ReaderId, RentBookParams } from "@/modules/reader/types";
import { createAction } from "@reduxjs/toolkit";
import { Book, EntityFormBook, UnlinkBookActionParams } from "../types";

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
    },
    CRUD_BOOKS: {
        create: {
            request: 'books/crudBooks/create/request',
            complete: 'books/crudBooks/create/success',
            error: 'books/crudBooks/create/error'
        },
        update: {
            request: 'books/crudBooks/update/request',
            complete: 'books/crudBooks/update/success',
            error: 'books/crudBooks/update/error'
        },
        delete: {
            request: 'books/crudBooks/delete/request',
            complete: 'books/crudBooks/delete/success',
            error: 'books/crudBooks/delete/error'
        },
        unlink: {
            request: 'books/crudBooks/unlink/request',
            complete: 'books/crudBooks/unlink/complete',
            error: 'books/crudBooks/unlink/error'
        }
    }
}

export const takenBooksRequest = createAction<ReaderId>(BOOK.TAKEN_BOOKS.request);
export const takenBooksSuccess = createAction<Book[]>(BOOK.TAKEN_BOOKS.complete);
export const takenBooksError = createAction(BOOK.TAKEN_BOOKS.error);

export const urgentBooksRequest = createAction<ReaderId>(BOOK.URGENT_BOOKS.request);
export const urgentBooksSuccess = createAction<Book[]>(BOOK.URGENT_BOOKS.complete);
export const urgentBooksError = createAction(BOOK.URGENT_BOOKS.error);

export const rentBookRequest = createAction<RentBookParams>(BOOK.RENT_BOOK.request);
export const rentBookSuccess = createAction(BOOK.RENT_BOOK.complete);
export const rentBookError = createAction(BOOK.RENT_BOOK.error);

export const allLibraryRequest = createAction(BOOK.ALL_LIBRARY.request);
export const allLibrarySuccess = createAction<Book[]>(BOOK.ALL_LIBRARY.complete);
export const allLibraryError = createAction(BOOK.ALL_LIBRARY.error);

export const createBookRequest = createAction<EntityFormBook>(BOOK.CRUD_BOOKS.create.request);
export const createBookSuccess = createAction<Book>(BOOK.CRUD_BOOKS.create.complete);
export const createBookError = createAction(BOOK.CRUD_BOOKS.create.error);

export const updateBookRequest = createAction<Book>(BOOK.CRUD_BOOKS.update.request);
export const updateBookSuccess = createAction<Book>(BOOK.CRUD_BOOKS.update.complete);
export const updateBookError = createAction(BOOK.CRUD_BOOKS.update.error);

export const deleteBookRequest = createAction<Book>(BOOK.CRUD_BOOKS.delete.request);
export const deleteBookSuccess = createAction<Book>(BOOK.CRUD_BOOKS.delete.complete);
export const deleteBookError = createAction(BOOK.CRUD_BOOKS.delete.error);

export const unlinkBookRequest = createAction<UnlinkBookActionParams>(BOOK.CRUD_BOOKS.unlink.request);
export const unlinkBookSuccess = createAction<Book>(BOOK.CRUD_BOOKS.unlink.complete);
export const unlinkBookError = createAction(BOOK.CRUD_BOOKS.unlink.error);