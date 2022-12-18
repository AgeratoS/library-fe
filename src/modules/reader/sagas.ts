import { ApiError } from "@/appTypes";
import { isError } from "@/modules/utils";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getReaderRequest, getReaderSuccess, updateReaderRequest, updateReaderSuccess } from "./actions";
import ReaderApi from "./api";
import { Reader, ReaderId, UpdateReaderParams } from "./types";

const readerApi = new ReaderApi();

function* getReader(action: PayloadAction<ReaderId>) {
    const { payload } = action;

    try {
        const result: Reader | ApiError = yield call(readerApi.getReader, payload)

        if (isError(result)) {
            console.error("Произошла ошибка при получении данных");

        } else {
            yield put(getReaderSuccess(result as Reader));
        }
    } catch (e) {
        console.error("Произошла ошибка при получении данных");
    }
}

function* updateReader(action: PayloadAction<UpdateReaderParams>) {
    const { payload } = action;

    try {
        const result: Reader | ApiError = yield call(readerApi.updateReader, payload);

        if (isError(result)) {

        } else {
            yield put(updateReaderSuccess(result as Reader))
        }
    } catch (e) {

    }
}

function* watchGetReaderRequest() {
    yield takeLatest(getReaderRequest.type, getReader);
}

function* watchUpdateReaderRequest() {
    yield takeLatest(updateReaderRequest.type, updateReader);
}

export default function* () {
    yield all([
        fork(watchGetReaderRequest),
        fork(watchUpdateReaderRequest)
    ])
}