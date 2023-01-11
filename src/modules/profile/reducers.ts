import { AnyAction, createReducer } from "@reduxjs/toolkit";
import { loadProfiles, loadProfilesError, loadProfilesSuccess, removeProfileSuccess, updateProfileSuccess } from "./actions";
import { ProfileState } from "./types";

const initialState: ProfileState = {
    profile: undefined,
    profiles: undefined,
    isLoading: false
}

const profileReducer = createReducer<ProfileState>(initialState, (builder) => {
    builder
        .addCase(loadProfiles, (state, action) => {
            state.isLoading = true;
        })
        .addCase(loadProfilesSuccess, (state, action) => {
            state.isLoading = false;
            state.profiles = action.payload;
        })
        .addCase(loadProfilesError, (state, error) => {
            state.isLoading = false;
        })
        .addCase(updateProfileSuccess, (state, action) => {
            state.profiles = state.profiles?.map((profile) => {
                if (profile.id === action.payload.id) {
                    return action.payload;
                }
                return profile;
            })
        })
        .addCase(removeProfileSuccess, (state, action) => {
            state.profiles = state.profiles?.filter((profile) => {
                return action.payload.id !== profile.id
            })
        })
        .addDefaultCase((state: ProfileState, action: AnyAction) => {
            
        })
});

export default profileReducer;