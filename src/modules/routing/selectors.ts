import { RootState } from "@/utils";
import { createSelector } from "@reduxjs/toolkit";

const authState = (state: RootState) => state.auth; 

export const token = createSelector(authState, (state) => state.token);