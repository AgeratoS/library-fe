import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "@/appTypes";
import { AUTH, authFailed, authRequest, authSuccess, createAuthReaderError, createAuthReaderRequest, createAuthReaderSuccess, logout, redirectToCreateAuthForm } from "./actions";
import { AuthData, AuthSuccess, AuthError, AddReaderSuccess, AddReaderError } from "./types";
import AuthApi from "./api/AuthApi";
import { isError } from "@/modules/utils";
import { LinkReaderToProfileParams, ReaderData } from "../profile/types";


const authApi = new AuthApi();

// Auth part
function* sagaAuthRequest(action: PayloadAction<AuthData>) {
    yield put(authRequest());
    const { payload } = action;
    const result: ApiResponse<AuthSuccess> = yield call(authApi.findProfile, payload);
    if (isError(result)) {
        yield* sagaAuthError(authFailed(result as AuthError));
    }
    else {
        yield* sagaAuthSuccess(authSuccess(result as AuthSuccess));
    }
}

function* sagaAuthSuccess(action: PayloadAction<AuthSuccess>) {
    yield delay(2000);
    yield put(action);
}

function* sagaAuthError(action: PayloadAction<AuthError>) {
    yield delay(2000);
    yield put(action);
}

function* sagaAuthRegisterRequest(action: PayloadAction<AuthData>) {
    yield put(authRequest());
    const { payload } = action;
    const result: ApiResponse<AuthSuccess> = yield call(authApi.register, payload);
    if (isError(result)) {
        yield* sagaAuthRegisterError(authFailed(result as AuthError))
    } else {
        yield* sagaAuthRegisterSuccess(authSuccess(result as AuthSuccess));
        yield put(redirectToCreateAuthForm(payload));
    }
}

function* sagaAuthRegisterError(action: PayloadAction<AuthError>) {
    yield delay(2000);
    yield put(action);
}

function* sagaAuthRegisterSuccess(action: PayloadAction<AuthSuccess>) {
    yield delay(2000);
    yield put(action);
}

// Create reader part
function* sagaCreateReaderRequest(action: PayloadAction<LinkReaderToProfileParams>) {
    yield put(createAuthReaderRequest());
    const { payload } = action;
    const result: ApiResponse<AddReaderSuccess> = yield call(authApi.createReader, payload);
    if (isError(result)) {
        yield sagaCreateReaderFailed(createAuthReaderError(result as AddReaderError));
    } else {
        yield sagaCreateReaderSuccess(createAuthReaderSuccess(result as AddReaderSuccess));
    }
}

function* sagaCreateReaderSuccess(action: PayloadAction<AddReaderSuccess>) {
    yield delay(2000);
    yield put(action);
}

function* sagaCreateReaderFailed(action: PayloadAction<AddReaderError>) {
    yield delay(2000);
    yield put(action);
}

function* sagaLogout(action: PayloadAction) {
    yield put(logout());
}

function* watchAuthRequest() {
    yield takeLatest(AUTH.FETCH, sagaAuthRequest);
}

function* watchAuthRegisterRequest() {
    yield takeLatest(AUTH.REGISTER, sagaAuthRegisterRequest);
}

function* watchAddReaderRequest() {
    yield takeLatest(AUTH.CREATE_READER, sagaCreateReaderRequest);
}

function* watchLogout() {
    yield takeLatest(AUTH.LOGOUT_REQUEST, sagaLogout)
}


export default function* rootSaga() {
    yield all([
        fork(watchAuthRequest),
        fork(watchAuthRegisterRequest),
        fork(watchAddReaderRequest),
        fork(watchLogout)
    ]);
}