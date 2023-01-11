import { createAction } from "@reduxjs/toolkit"
import { Profile, ProfileEntity } from "../types";

const PROFILE_MAP = {
    ALL_PROFILES: {
        load: 'profiles/load',
        complete: 'profiles/load/success',
        error: 'profiles/load/error'
    },
    CRUD_PROFILES: {
        CREATE: {
            request: 'profiles/crud/create/request',
            complete: 'profiles/crud/create/success',
            error: 'profiles/crud/create/error'
        },
        UPDATE: {
            request: 'profiles/crud/update/request',
            complete: 'profiles/crud/update/success',
            error: 'profiles/crud/update/error'
        },
        REMOVE: {
            request: 'profiles/crud/remove/request',
            complete: 'profiles/crud/remove/success',
            error: 'profiles/crud/remove/error'
        }
    }
}

export const loadProfiles = createAction(PROFILE_MAP.ALL_PROFILES.load);
export const loadProfilesSuccess = createAction<Profile[]>(PROFILE_MAP.ALL_PROFILES.complete);
export const loadProfilesError = createAction(PROFILE_MAP.ALL_PROFILES.error);

export const createProfile = createAction<ProfileEntity>(PROFILE_MAP.CRUD_PROFILES.CREATE.request);
export const createProfileSuccess = createAction<Profile>(PROFILE_MAP.CRUD_PROFILES.CREATE.complete);
export const createProfileError = createAction(PROFILE_MAP.CRUD_PROFILES.CREATE.error);

export const updateProfile = createAction<Profile>(PROFILE_MAP.CRUD_PROFILES.UPDATE.request);
export const updateProfileSuccess = createAction<Profile>(PROFILE_MAP.CRUD_PROFILES.UPDATE.complete);
export const updateProfileError = createAction(PROFILE_MAP.CRUD_PROFILES.UPDATE.error);

export const removeProfile = createAction<Profile>(PROFILE_MAP.CRUD_PROFILES.REMOVE.request);
export const removeProfileSuccess = createAction<Profile>(PROFILE_MAP.CRUD_PROFILES.REMOVE.complete);
export const removeProfileError = createAction(PROFILE_MAP.CRUD_PROFILES.REMOVE.error);