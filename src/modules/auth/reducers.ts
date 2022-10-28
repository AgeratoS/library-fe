import { Action, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { authFailed, authRequest, authSuccess, createAuthReaderError, createAuthReaderRequest, createAuthReaderSuccess, logout, redirectToCreateAuthForm } from "./actions";
import { AddReaderError, AddReaderSuccess, AuthError, AuthState, AuthSuccess } from "./types";

const initialState: AuthState = {
    loading: false,
    isNeedToRedirect: false
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(authRequest, (state: AuthState, action: PayloadAction) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(authSuccess, (state: AuthState, action: PayloadAction<AuthSuccess>) => {
            state.loading = false;
            state.token = action.payload.token;
        })
        .addCase(authFailed, (state: AuthState, action: PayloadAction<AuthError>) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createAuthReaderRequest, (state: AuthState, action: PayloadAction) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(createAuthReaderSuccess, (state: AuthState, action: PayloadAction<AddReaderSuccess>) => {
            state.loading = false;
        })
        .addCase(createAuthReaderError, (state: AuthState, action: PayloadAction<AddReaderError>) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(logout, (state: AuthState, action: PayloadAction) => {
            state.isNeedToRedirect = false;
            state.token = undefined;
        })
        .addCase(redirectToCreateAuthForm, (state: AuthState, action: PayloadAction) => {
            state.isNeedToRedirect = true;
        })
        .addDefaultCase((state: AuthState, action: Action<unknown>) => {
            state.isNeedToRedirect = false;
        })
});

export default authReducer;