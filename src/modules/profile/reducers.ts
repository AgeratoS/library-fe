import { AnyAction, createReducer } from "@reduxjs/toolkit";
import { ProfileState } from "./types";

const initialState: ProfileState = {
    profile: undefined
}

const profileReducer = createReducer<ProfileState>(initialState, (builder) => {
    builder
        .addDefaultCase((state: ProfileState, action: AnyAction) => {
            
        })
});

export default profileReducer;