import { ApiError } from "@/appTypes";
import { isError } from "@/utils";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { takenBooksRequest, takenBooksSuccess, urgentBooksRequest, urgentBooksSuccess } from "./actions";
import BookApi, { ReaderId } from "./api";
import { Book } from "./types";

const bookApi = new BookApi();

function* loadTakenBooks(action: PayloadAction<ReaderId>) {
    const { payload } = action;

    try {
        const books: Book[] | ApiError = yield call(bookApi.getTakenBooks, payload);
        if (isError(books)) {
            console.error("Произошла ошибка запроса")
        } else {
            yield put(takenBooksSuccess(books as Book[]))
        }
    } catch (e) {
        console.error("Произошла ошибка при запросе")
    }
}

function* loadUrgentBooks(action: PayloadAction<ReaderId>) {
    const { payload } = action;

    try {
        const books: Book[] | ApiError = yield call(bookApi.getUrgentBooks, payload);
        if (isError(books)) {
            console.error("Произошла ошибка запроса");
            
        } else {
            yield put(urgentBooksSuccess(books as Book[]))
        }
    } catch (e) {
        console.error("Произошла ошибка при запросе");   
    }
}

function* watchTakenBooksRequest() {
    yield takeLatest(takenBooksRequest.type, loadTakenBooks);
}

function* watchUrgentBooksRequest() {
    yield takeLatest(urgentBooksRequest.type, loadUrgentBooks);
}

export default function* () {
    yield all([
        fork(watchTakenBooksRequest),
        fork(watchUrgentBooksRequest)
    ])
}