import { ApiError } from "@/appTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import BookApi from "../book/api";
import { Book } from "../book/types";
import ReaderApi from "../reader/api";
import { Reader } from "../reader/types";
import { isError } from "../utils";
import { getBooksReaderError, getBooksReaderRequest, getBooksReaderSuccess, getReadersProfileError, getReadersProfileRequest, selectReader } from "./actions";

const bookApi = new BookApi();

function* getBooksReaderFlow(action: PayloadAction<Reader>) {
    const { payload } = action;

    try {
        const result: Book[] | ApiError = yield call(bookApi.getTakenBooks, payload.id);

        if (isError(result)) {
            yield put(getBooksReaderError());
        } else {
            yield put(getBooksReaderSuccess(result as Book[]))
        }
    } catch (e) {
        yield put(getBooksReaderError());
    }
}

function* getReadersProfileFlow(action: PayloadAction) {
    const { payload } = action;

    try {

    } catch (e) {
        yield put(getReadersProfileError());
    }
}

function* selectReaderFlow(action: PayloadAction<Reader>) {
    const { payload } = action;

    yield put(getBooksReaderRequest(payload));
}

function* watchGetBooksReader() {
    yield takeLatest(getBooksReaderRequest.type, getBooksReaderFlow)
}

function* watchSelectReader() {
    yield takeLatest(selectReader.type, selectReaderFlow)
}

function* watchGetReadersProfile() {
    yield takeLatest(getReadersProfileRequest.type, getReadersProfileFlow)
}

export default function* () {
    yield all([
        fork(watchGetBooksReader),
        fork(watchGetReadersProfile),
        fork(watchSelectReader)
    ])
}