import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../utils";

const authState = (state: RootState) => state.auth;

const authError = createSelector(authState, (state) => state.error);
const authToken = createSelector(authState, (state) => state.token);
const authLoading = createSelector(authState, (state) => state.loading);

export { authError, authToken, authLoading };