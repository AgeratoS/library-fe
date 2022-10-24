import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "@/types";
import { AUTH, authFailed, authRequest, authSuccess, createAuthReaderError, createAuthReaderRequest, createAuthReaderSuccess } from "./actions";
import { AuthData, AuthSuccess, AuthError, AddReaderFormData, AddReaderSuccess, AddReaderError } from "./types";
import AuthApi from "./api/AuthApi";
import { isError } from "../../utils";


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
    yield delay(4000);
    yield put(action);
}

function* sagaAuthError(action: PayloadAction<AuthError>) {
    yield delay(4000);
    yield put(action);
}

function* sagaAuthRegisterRequest(action: PayloadAction<AuthData>) {
    yield put(authRequest());
    const { payload } = action;
    const result: ApiResponse<AuthSuccess> = yield call(authApi.register, payload);
    if (isError(result)) {
        yield* sagaAuthRegisterError(authFailed(result as AuthError))
    } else {
        yield* sagaAuthRegisterSuccess(authSuccess(result as AuthSuccess))
    }
}

function* sagaAuthRegisterError(action: PayloadAction<AuthError>) {
    yield delay(4000);
    yield put(action);
}

function* sagaAuthRegisterSuccess(action: PayloadAction<AuthSuccess>) {
    yield delay(4000);
    yield put(action);
}

// Create reader part
function* sagaCreateReaderRequest(action: PayloadAction<AddReaderFormData>) {
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
    yield delay(4000);
    yield put(action);
}

function* sagaCreateReaderFailed(action: PayloadAction<AddReaderError>) {
    yield delay(4000);
    yield put(action);
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


export default function* rootSaga() {
    yield all([
        fork(watchAuthRequest),
        fork(watchAuthRegisterRequest),
        fork(watchAddReaderRequest)
    ]);
}