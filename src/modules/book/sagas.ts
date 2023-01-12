import { ApiError } from "@/appTypes";
import { isError } from "@/modules/utils";
import { PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import ReaderApi from "../reader/api";
import { ReaderId, RentBookParams } from "../reader/types";
import { allLibraryError, allLibraryRequest, allLibrarySuccess, createBookError, createBookRequest, createBookSuccess, deleteBookError, deleteBookRequest, deleteBookSuccess, rentBookError, rentBookRequest, rentBookSuccess, takenBooksError, takenBooksRequest, takenBooksSuccess, unlinkBookError, unlinkBookRequest, unlinkBookSuccess, updateBookError, updateBookRequest, updateBookSuccess, urgentBooksError, urgentBooksRequest, urgentBooksSuccess } from "./actions";
import BookApi from "./api";
import { Book, UnlinkBookActionParams } from "./types";

const bookApi = new BookApi();
const readerApi = new ReaderApi();

function* loadTakenBooks(action: PayloadAction<ReaderId>) {
    const { payload } = action;

    try {
        const books: Book[] | ApiError = yield call(bookApi.getTakenBooks, payload);
        if (isError(books)) {
            console.error("Произошла ошибка запроса");
            yield put(takenBooksError());
        } else {
            yield put(takenBooksSuccess(books as Book[]));
        }
    } catch (e) {
        yield put(takenBooksError())
    }
}

function* loadUrgentBooks(action: PayloadAction<ReaderId>) {
    const { payload } = action;

    try {
        const books: Book[] | ApiError = yield call(bookApi.getUrgentBooks, payload);
        if (isError(books)) {
            console.error("Произошла ошибка запроса");
            yield put(urgentBooksError());
        } else {
            yield put(urgentBooksSuccess(books as Book[]))
        }
    } catch (e) {
        yield put(urgentBooksError())
    }
}

function* patchRentBook(action: PayloadAction<RentBookParams>) {
    const { payload } = action;

    try {
        const result: boolean | ApiError = yield call(readerApi.linkBook, payload);

        if (isError(result) || !result) {
            yield put(rentBookError());
        } else {
            yield put(rentBookSuccess());
        }
    } catch (e) {
        // yield put(urgentBooksError());
    }
}

function* loadAllLibrary(action: PayloadAction) {
    const { payload } = action;

    try {
        const result: Book[] | ApiError = yield call(bookApi.getLibrary);

        if (isError(result)) {
            yield put(allLibraryError());
        } else {
            yield put(allLibrarySuccess(result as Book[]));
        }
    } catch (e) {
        yield put(allLibraryError());
    }
}

function* createBook(action: PayloadAction<Book>) {
    const { payload } = action;

    try {
        const result: boolean | ApiError = yield call(bookApi.createBook, payload);

        if (isError(result) || !result) {
            yield put(createBookError());
        } else {
            yield put(createBookSuccess(payload));
        }
    } catch (e) {
        yield put(createBookError());
    }
}

function* updateBook(action: PayloadAction<Book>) {
    const { payload } = action;

    try {
        const result: boolean | ApiError = yield call(bookApi.updateBook, payload);

        if (isError(result) || !result) {
            yield put(updateBookError());
        } else {
            yield put(updateBookSuccess(payload));
        }
    } catch (e) {
        yield put(updateBookError());
    }
}

function* deleteBook(action: PayloadAction<Book>) {
    const { payload } = action;

    try {
        const result: boolean | ApiError = yield call(bookApi.removeBook, payload);

        if (isError(result) || !result) {
            yield put(deleteBookError());
        } else {
            yield put(deleteBookSuccess(payload));
        }
    } catch (e) {
        yield put(deleteBookError());
    }
}

function* unlinkBookFlow(action: PayloadAction<UnlinkBookActionParams>) {
    const { payload } = action;
    const { book, reader } = payload;

    try {
        const result: boolean | ApiError = yield call(readerApi.unlinkBook, { book, reader });

        if (isError(result) || !result) {
            yield put(unlinkBookError());
        } else {
            yield put(unlinkBookSuccess(book));
        }
    } catch (e) {
        yield put(unlinkBookError());
    }
}

function* watchTakenBooksRequest() {
    yield takeLatest(takenBooksRequest.type, loadTakenBooks);
}

function* watchUrgentBooksRequest() {
    yield takeLatest(urgentBooksRequest.type, loadUrgentBooks);
}

function* watchRentBookRequest() {
    yield takeLatest(rentBookRequest.type, patchRentBook);
}

function* watchAllLibraryRequest() {
    yield takeLatest(allLibraryRequest.type, loadAllLibrary)
}

function* watchBookCreateRequest() {
    yield takeLatest(createBookRequest.type, createBook);
}

function* watchBookUpdateRequest() {
    yield takeLatest(updateBookRequest.type, updateBook);
}

function* watchBookDeleteRequest() {
    yield takeLatest(deleteBookRequest.type, deleteBook);
}

function* watchUnlinkBookRequest() {
    yield takeLatest(unlinkBookRequest.type, unlinkBookFlow);
}

export default function* () {
    yield all([
        fork(watchTakenBooksRequest),
        fork(watchUrgentBooksRequest),
        fork(watchRentBookRequest),
        fork(watchAllLibraryRequest),
        fork(watchBookCreateRequest),
        fork(watchBookUpdateRequest),
        fork(watchBookDeleteRequest),
        fork(watchUnlinkBookRequest)
    ])
}