import { ApiError } from "@/appTypes";
import { Action } from "redux";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { isError } from "../utils";
import { loadGenres, loadGenresError, loadGenresSuccess } from "./actions";
import GenreApi from "./api";
import { Genre } from "./types";

const genreApi = new GenreApi();

function* loadGenresFlow(action: Action) {
    try {
        const result: Genre[] | ApiError = yield call(genreApi.getGenres);
        if (isError(result)) {
            yield put(loadGenresError());
        } else {
            yield put(loadGenresSuccess(result as Genre[]));
        }
    } catch (e) {
        yield put(loadGenresError());
    }
}

function* watchLoadGenres() {
    yield takeLatest(loadGenres.type, loadGenresFlow);
}

export default function* () {
    yield all([
        fork(watchLoadGenres)
    ])
}