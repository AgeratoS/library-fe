import { RootState } from "@/utils";
import { createSelector } from "@reduxjs/toolkit";
import { ProfileState, Role } from "./types";

const profileState = (state: RootState) => state.profile;

const readers = createSelector(profileState, (state: ProfileState) => state.profile?.readers);
const role = createSelector(profileState, (state: ProfileState) => state.profile?.role);
const profiles = createSelector(profileState, (state) => state.profiles);

export default { readers, role, profiles }