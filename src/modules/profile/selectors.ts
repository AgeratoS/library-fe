import { RootState } from "@/utils";
import { createSelector } from "@reduxjs/toolkit";
import { ProfileState, Role } from "./types";

const profileState = (state: RootState) => state.profile;

const reader = createSelector(profileState, (state: ProfileState) => state.profile?.reader);
const role = createSelector(profileState, (state: ProfileState) => state.profile?.role);

export default { reader, role }