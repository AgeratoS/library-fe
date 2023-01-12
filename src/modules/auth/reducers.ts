import { Action, createReducer } from "@reduxjs/toolkit";
import { authFailed, authRequest, authSuccess, createAuthReaderError, createAuthReaderRequest, createAuthReaderSuccess, logout, redirectToCreateAuthForm } from "./actions";
import { AuthState } from "./types";

const initialState: AuthState = {
    loading: false,
    isNeedToRedirect: false,
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(authRequest, (state, action) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(authSuccess, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
        })
        .addCase(authFailed, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createAuthReaderRequest, (state, action) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(createAuthReaderSuccess, (state, action) => {
            state.loading = false;
            state.authDataForLink = undefined;
        })
        .addCase(createAuthReaderError, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(logout, (state, action) => {
            state.isNeedToRedirect = false;
            state.token = undefined;
        })
        .addCase(redirectToCreateAuthForm, (state, action) => {
            state.isNeedToRedirect = true;
            state.authDataForLink = action.payload;

        })
        .addDefaultCase((state: AuthState, action: Action<unknown>) => {
            state.isNeedToRedirect = false;
        })
});

export default authReducer;