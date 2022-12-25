import { RootState } from "@/utils";
import { createSelector } from "@reduxjs/toolkit";
import { types } from "@/modules/profile";

const authState = (state: RootState) => state.auth;

export const token = createSelector(authState, (state) => state.token);
export const isNeedToRedirect = createSelector(authState, (state) => state.isNeedToRedirect);

// TODO: Реализовать поиск роли в состоянии
export const role = createSelector(authState, (state) => types.Role.ADMIN);