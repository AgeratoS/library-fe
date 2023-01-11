import { ApiError } from "@/appTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { isError } from "../utils";
import { createProfile, createProfileError, createProfileSuccess, loadProfiles, loadProfilesError, loadProfilesSuccess, removeProfile, removeProfileError, removeProfileSuccess, updateProfile, updateProfileError, updateProfileSuccess } from "./actions";
import { ProfileApi } from "./api";
import { Profile, ProfileEntity } from "./types";

const profileApi = new ProfileApi();

function* getAllProfilesFlow(_: Action) {
    try {
        const profiles: Profile[] | ApiError = yield call(profileApi.getProfiles);
        if (isError(profiles)) {
            yield put(loadProfilesError());
        } else {
            yield put(loadProfilesSuccess(profiles as Profile[]))
        }
    } catch (e) {
        yield put(loadProfilesError());
    }
}

function* createProfileFlow(action: PayloadAction<Profile>) {
    const { payload } = action;

    try {
        const result: boolean | ApiError = yield call(profileApi.createProfile, payload);
        if (isError(result) || !result) {
            yield put(createProfileError());
        } else {
            yield put(createProfileSuccess(payload));
        }
    } catch (e) {
        yield put(createProfileError());
    }
}

function* updateProfileFlow(action: PayloadAction<Profile>) {
    const { payload } = action;

    try {
        const result: boolean | ApiError = yield call(profileApi.updateProfile, payload);
        if (isError(result) || !result) {
            yield put(updateProfileError());
        } else {
            yield put(updateProfileSuccess(payload));
        }
    } catch (e) {
        yield put(updateProfileError());
    }
}

function* removeProfileFlow(action: PayloadAction<Profile>) {
    const { payload } = action;

    try {
        const result: boolean | ApiError = yield call(profileApi.removeProfile, payload);
        if (isError(result) || !result) {
            yield put(removeProfileError());
        } else {
            yield put(removeProfileSuccess(payload));
        }
    } catch (e) {
        yield put(removeProfileError());
    }
}

function* watchGetAllProfiles() {
    yield takeLatest(loadProfiles.type, getAllProfilesFlow);
}

function* watchCreateProfile() {
    yield takeLatest(createProfile.type, createProfileFlow);
}

function* watchUpdateProfile() {
    yield takeLatest(updateProfile.type, updateProfileFlow);
}

function* watchRemoveProfile() {
    yield takeLatest(removeProfile.type, removeProfileFlow);
}

export default function* () {
    yield all([
        fork(watchGetAllProfiles),
        fork(watchCreateProfile),
        fork(watchUpdateProfile),
        fork(watchRemoveProfile)
    ])
}